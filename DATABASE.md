# Base de données MySQL - Railway

## Configuration

La base de données MySQL est hébergée sur Railway et configurée dans `src/lib/db.ts`.

**URL de connexion :**
```
mysql://root:eSLFCCmVlFtJRQShHQYCVArHjVAoiaKW@switchyard.proxy.rlwy.net:54671/railway
```

## Initialisation

Pour créer les tables dans la base de données, exécutez :

```bash
npm run init-db
```

Ce script va :
- Se connecter à la base de données Railway
- Créer toutes les tables nécessaires (beats, users, beat_likes, cart_items, beat_stats)
- Afficher les erreurs s'il y en a

## Structure de la base de données

### Table `beats`
- Stocke tous les beats avec leurs métadonnées
- Champs : id, name, artist, genre, bpm, key_signature, price, duration, audio_url, image_url, etc.

### Table `beat_likes`
- Gère les likes des beats
- Supporte les utilisateurs authentifiés et les visiteurs anonymes (via IP)

### Table `cart_items`
- Panier d'achat
- Supporte les sessions utilisateur

### Table `beat_stats`
- Statistiques quotidiennes des beats (plays, downloads, shares)

## API Routes

### GET `/api/beats`
Récupère tous les beats avec filtres optionnels :
- `?genre=Hip-Hop` - Filtrer par genre
- `?limit=10` - Limiter le nombre de résultats
- `?offset=0` - Pagination

### POST `/api/beats`
Crée un nouveau beat

### GET `/api/beats/[id]`
Récupère un beat spécifique et incrémente les vues

### PUT `/api/beats/[id]`
Met à jour un beat

### DELETE `/api/beats/[id]`
Supprime un beat

### POST `/api/beats/[id]/like`
Ajoute ou retire un like sur un beat

## Utilisation dans le code

```typescript
import { query } from '@/lib/db';

// Exemple : Récupérer tous les beats
const beats = await query('SELECT * FROM beats ORDER BY created_at DESC');

// Exemple : Créer un beat
await query(
  'INSERT INTO beats (name, genre, bpm, price) VALUES (?, ?, ?, ?)',
  ['Mon Beat', 'Hip-Hop', '140', '29.99']
);
```

## Variables d'environnement

Créez un fichier `.env.local` avec :

```
DATABASE_URL=mysql://root:eSLFCCmVlFtJRQShHQYCVArHjVAoiaKW@switchyard.proxy.rlwy.net:54671/railway
```

