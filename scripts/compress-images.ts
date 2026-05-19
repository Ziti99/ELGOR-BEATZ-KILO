import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

interface ImageStats {
  original: string;
  compressed: string;
  originalSize: number;
  compressedSize: number;
  reduction: number;
}

async function getImageFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        const subFiles = await getImageFiles(fullPath);
        files.push(...subFiles);
      } else if (entry.isFile()) {
        const ext = entry.name.toLowerCase();
        if (ext.endsWith('.jpg') || ext.endsWith('.jpeg') || ext.endsWith('.png') || ext.endsWith('.webp')) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Erreur lors de la lecture de ${dir}:`, error);
  }
  return files;
}

async function compressImage(inputPath: string, outputPath: string): Promise<ImageStats> {
  const originalStats = await stat(inputPath);
  const originalSize = originalStats.size;

  // Compresser l'image avec sharp
  // Pour JPEG : qualité 85, optimisation progressive
  // Pour PNG : compression niveau 9
  const ext = inputPath.toLowerCase();
  
  if (ext.endsWith('.jpg') || ext.endsWith('.jpeg')) {
    await sharp(inputPath)
      .jpeg({ 
        quality: 85, 
        progressive: true,
        mozjpeg: true 
      })
      .toFile(outputPath);
  } else if (ext.endsWith('.png')) {
    await sharp(inputPath)
      .png({ 
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(outputPath);
  } else {
    // Pour les autres formats, copier tel quel
    await sharp(inputPath)
      .toFile(outputPath);
  }

  const compressedStats = await stat(outputPath);
  const compressedSize = compressedStats.size;
  const reduction = ((originalSize - compressedSize) / originalSize) * 100;

  return {
    original: inputPath,
    compressed: outputPath,
    originalSize,
    compressedSize,
    reduction
  };
}

async function main() {
  console.log('🖼️  Compression des images...\n');

  const directories = [
    join(process.cwd(), 'public', 'images'),
    join(process.cwd(), 'public', 'Highlights')
  ];

  const allImages: string[] = [];
  
  for (const dir of directories) {
    if (existsSync(dir)) {
      const images = await getImageFiles(dir);
      allImages.push(...images);
      console.log(`📁 Trouvé ${images.length} images dans ${dir}`);
    } else {
      console.log(`⚠️  Dossier non trouvé: ${dir}`);
    }
  }

  if (allImages.length === 0) {
    console.log('❌ Aucune image trouvée à compresser.');
    return;
  }

  console.log(`\n📊 Total: ${allImages.length} images à compresser\n`);

  const results: ImageStats[] = [];
  let totalOriginalSize = 0;
  let totalCompressedSize = 0;

  for (let i = 0; i < allImages.length; i++) {
    const imagePath = allImages[i];
    const fileName = imagePath.split(/[/\\]/).pop() || 'unknown';
    
    try {
      console.log(`[${i + 1}/${allImages.length}] Compression de ${fileName}...`);
      
      // Créer un fichier temporaire
      const tempPath = imagePath + '.tmp';
      const stats = await compressImage(imagePath, tempPath);
      
      // Remplacer l'original par la version compressée
      const fs = await import('fs/promises');
      await fs.rename(tempPath, imagePath);
      
      results.push({
        ...stats,
        compressed: imagePath
      });
      
      totalOriginalSize += stats.originalSize;
      totalCompressedSize += stats.compressedSize;
      
      const sizeMB = (stats.originalSize / (1024 * 1024)).toFixed(2);
      const newSizeMB = (stats.compressedSize / (1024 * 1024)).toFixed(2);
      console.log(`   ✅ ${sizeMB} MB → ${newSizeMB} MB (${stats.reduction.toFixed(1)}% de réduction)`);
    } catch (error) {
      console.error(`   ❌ Erreur lors de la compression de ${fileName}:`, error);
    }
  }

  // Résumé
  console.log('\n' + '='.repeat(60));
  console.log('📊 RÉSUMÉ DE LA COMPRESSION');
  console.log('='.repeat(60));
  console.log(`Total d'images traitées: ${results.length}`);
  console.log(`Taille originale totale: ${(totalOriginalSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Taille compressée totale: ${(totalCompressedSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Réduction totale: ${((totalOriginalSize - totalCompressedSize) / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Pourcentage de réduction: ${(((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100).toFixed(1)}%`);
  console.log('='.repeat(60));
  console.log('\n✅ Compression terminée !');
}

main().catch(console.error);

