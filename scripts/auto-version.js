#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

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

function getLastCommitMessage() {
  try {
    return execSync('git log -1 --pretty=%B', { encoding: 'utf8' }).trim();
  } catch (error) {
    log('Error obteniendo el mensaje del último commit', 'red');
    process.exit(1);
  }
}

function getCurrentVersion() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return packageJson.version;
  } catch (error) {
    log('Error leyendo package.json', 'red');
    process.exit(1);
  }
}

function updateVersion(versionType) {
  try {
    log(`Actualizando versión: ${versionType}`, 'yellow');
    execSync(`npm version ${versionType} --no-git-tag-version`, { stdio: 'inherit' });
    
    const newVersion = getCurrentVersion();
    log(`✅ Versión actualizada a: ${newVersion}`, 'green');
    
    return newVersion;
  } catch (error) {
    log('Error actualizando la versión', 'red');
    process.exit(1);
  }
}

function createGitTag(version) {
  try {
    log(`Creando tag Git: v${version}`, 'yellow');
    execSync(`git tag v${version}`, { stdio: 'inherit' });
    log(`✅ Tag v${version} creado`, 'green');
  } catch (error) {
    log('Error creando el tag Git', 'red');
    process.exit(1);
  }
}

function commitVersionChange(version) {
  try {
    log('Haciendo commit del cambio de versión', 'yellow');
    execSync('git add package.json', { stdio: 'inherit' });
    execSync(`git commit -m "chore: bump version to ${version}"`, { stdio: 'inherit' });
    log('✅ Commit de versión realizado', 'green');
  } catch (error) {
    log('Error haciendo commit del cambio de versión', 'red');
    process.exit(1);
  }
}

function pushChanges() {
  try {
    log('Subiendo cambios y tags a Git', 'yellow');
    execSync('git push', { stdio: 'inherit' });
    execSync('git push --tags', { stdio: 'inherit' });
    log('✅ Cambios y tags subidos exitosamente', 'green');
  } catch (error) {
    log('Error subiendo cambios a Git', 'red');
    process.exit(1);
  }
}

function main() {
  log('🚀 Sistema de Versionado Automático', 'cyan');
  log('=====================================', 'cyan');
  
  const commitMessage = getLastCommitMessage();
  log(`📝 Mensaje del commit: ${commitMessage}`, 'blue');
  
  let versionType = null;
  
  // Detectar tags en el mensaje de commit
  if (commitMessage.includes('[major]')) {
    versionType = 'major';
    log('🔴 Detectado: [major] - Cambio mayor', 'red');
  } else if (commitMessage.includes('[minor]')) {
    versionType = 'minor';
    log('🟡 Detectado: [minor] - Nueva funcionalidad', 'yellow');
  } else if (commitMessage.includes('[patch]')) {
    versionType = 'patch';
    log('🟢 Detectado: [patch] - Corrección de bugs', 'green');
  } else {
    log('ℹ️  No se detectaron tags de versionado. Saltando...', 'blue');
    log('💡 Usa [patch], [minor] o [major] en tu mensaje de commit', 'cyan');
    process.exit(0);
  }
  
  const currentVersion = getCurrentVersion();
  log(`📦 Versión actual: ${currentVersion}`, 'blue');
  
  // Actualizar versión
  const newVersion = updateVersion(versionType);
  
  // Crear tag de Git
  createGitTag(newVersion);
  
  // Hacer commit del cambio de versión
  commitVersionChange(newVersion);
  
  // Subir cambios
  pushChanges();
  
  log('🎉 ¡Versionado completado exitosamente!', 'green');
  log(`📋 Resumen:`, 'cyan');
  log(`   - Versión anterior: ${currentVersion}`, 'blue');
  log(`   - Nueva versión: ${newVersion}`, 'blue');
  log(`   - Tipo de cambio: ${versionType}`, 'blue');
  log(`   - Tag creado: v${newVersion}`, 'blue');
}

// Ejecutar el script
if (require.main === module) {
  main();
}

module.exports = { main }; 