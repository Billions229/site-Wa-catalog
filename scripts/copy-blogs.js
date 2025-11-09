#!/usr/bin/env node

/**
 * Script pour copier les fichiers MDX des blogs depuis content/ vers public/content/
 * Ce script doit être exécuté avant de lancer le serveur de développement
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '..', 'content', 'blogs');
const targetDir = path.join(__dirname, '..', 'public', 'content', 'blogs');

// Créer le dossier de destination s'il n'existe pas
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Fonction pour copier récursivement
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copier les fichiers
if (fs.existsSync(sourceDir)) {
  console.log('📁 Copie des fichiers MDX depuis content/ vers public/content/...');
  copyRecursive(sourceDir, targetDir);
  console.log('✅ Copie terminée !');
} else {
  console.error('❌ Le dossier source content/blogs/ n\'existe pas !');
  process.exit(1);
}

