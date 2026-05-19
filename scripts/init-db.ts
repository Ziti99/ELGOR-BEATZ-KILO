import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

const connectionString = process.env.DATABASE_URL || 
  'mysql://root:eSLFCCmVlFtJRQShHQYCVArHjVAoiaKW@switchyard.proxy.rlwy.net:54671/railway';

async function initDatabase() {
  let connection;
  
  try {
    console.log('🔌 Connexion à la base de données Railway...');
    
    // Créer la connexion
    connection = await mysql.createConnection(connectionString);
    console.log('✅ Connecté à la base de données');
    
    // Lire le fichier SQL
    const sqlPath = path.join(process.cwd(), 'database', 'schema.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    
    // Exécuter les commandes SQL une par une
    const statements = sql
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));
    
    console.log(`📝 Exécution de ${statements.length} commandes SQL...`);
    
    for (const statement of statements) {
      if (statement.trim()) {
        try {
          await connection.execute(statement);
          console.log('✅ Commande exécutée avec succès');
        } catch (error: any) {
          // Ignorer les erreurs "table already exists"
          if (!error.message.includes('already exists')) {
            console.error('❌ Erreur:', error.message);
            console.error('Statement:', statement.substring(0, 100));
          } else {
            console.log('ℹ️  Table existe déjà, ignoré');
          }
        }
      }
    }
    
    console.log('🎉 Base de données initialisée avec succès!');
    
  } catch (error: any) {
    console.error('❌ Erreur lors de l\'initialisation:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('🔌 Connexion fermée');
    }
  }
}

initDatabase();

