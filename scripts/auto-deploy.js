#!/usr/bin/env node

const { execSync } = require('child_process');
const { main: autoVersion } = require('./auto-version.js');

// Colores para la consola
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function buildAndDeploy() {
  try {
    log('🔨 Construyendo aplicación...', 'yellow');
    execSync('npm run build:prd', { stdio: 'inherit' });
    log('✅ Build completado', 'green');
    
    log('🚀 Desplegando a GitHub Pages...', 'yellow');
    execSync('npx gh-pages -d docs', { stdio: 'inherit' });
    log('✅ Deploy completado', 'green');
  } catch (error) {
    log('❌ Error en build o deploy', 'red');
    process.exit(1);
  }
}

function main() {
  log('🚀 Sistema de Deploy Automático', 'cyan');
  log('================================', 'cyan');
  
  // Primero ejecutar el versionado automático
  autoVersion();
  
  // Luego hacer build y deploy
  buildAndDeploy();
  
  log('🎉 ¡Deploy automático completado!', 'green');
  log('🌐 Tu aplicación está disponible en: https://julioPicazo06.github.io/book', 'blue');
}

// Ejecutar el script
if (require.main === module) {
  main();
}

module.exports = { main }; 