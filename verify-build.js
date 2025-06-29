#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando archivos del build...\n');

const docsPath = './docs';
const requiredFiles = [
  'index.html',
  'manifest.json',
  'favicon.ico',
  'logo192.png',
  'logo512.png',
  'robots.txt',
  '404.html',
  '.nojekyll'
];

const requiredDirs = [
  'assets'
];

// Verificar archivos requeridos
console.log('📁 Archivos requeridos:');
let allFilesPresent = true;

requiredFiles.forEach(file => {
  const filePath = path.join(docsPath, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`✅ ${file} (${stats.size} bytes)`);
  } else {
    console.log(`❌ ${file} - NO ENCONTRADO`);
    allFilesPresent = false;
  }
});

// Verificar directorios requeridos
console.log('\n📂 Directorios requeridos:');
requiredDirs.forEach(dir => {
  const dirPath = path.join(docsPath, dir);
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    const files = fs.readdirSync(dirPath);
    console.log(`✅ ${dir}/ (${files.length} archivos)`);
  } else {
    console.log(`❌ ${dir}/ - NO ENCONTRADO`);
    allFilesPresent = false;
  }
});

// Verificar contenido del manifest.json
console.log('\n📋 Verificando manifest.json:');
try {
  const manifestPath = path.join(docsPath, 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  
  console.log(`✅ Nombre: ${manifest.name}`);
  console.log(`✅ Nombre corto: ${manifest.short_name}`);
  console.log(`✅ Descripción: ${manifest.description}`);
  console.log(`✅ Iconos: ${manifest.icons.length} iconos`);
  console.log(`✅ Tema: ${manifest.theme_color}`);
  
} catch (error) {
  console.log(`❌ Error leyendo manifest.json: ${error.message}`);
  allFilesPresent = false;
}

// Verificar contenido del index.html
console.log('\n🌐 Verificando index.html:');
try {
  const indexPath = path.join(docsPath, 'index.html');
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  if (indexContent.includes('manifest.json')) {
    console.log('✅ Referencia a manifest.json encontrada');
  } else {
    console.log('❌ Referencia a manifest.json NO encontrada');
    allFilesPresent = false;
  }
  
  if (indexContent.includes('favicon.ico')) {
    console.log('✅ Referencia a favicon.ico encontrada');
  } else {
    console.log('❌ Referencia a favicon.ico NO encontrada');
    allFilesPresent = false;
  }
  
} catch (error) {
  console.log(`❌ Error leyendo index.html: ${error.message}`);
  allFilesPresent = false;
}

console.log('\n' + '='.repeat(50));
if (allFilesPresent) {
  console.log('🎉 ¡Build verificado correctamente!');
  console.log('✅ Todos los archivos están presentes');
  console.log('✅ El manifest.json está configurado correctamente');
  console.log('✅ Los archivos estáticos están referenciados correctamente');
} else {
  console.log('⚠️  Se encontraron problemas en el build');
  console.log('❌ Algunos archivos están faltando o mal configurados');
}
console.log('='.repeat(50)); 