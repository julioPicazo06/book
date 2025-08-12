const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../docs');
const indexPath = path.join(docsDir, 'index.html');

// Leer el archivo index.html
let html = fs.readFileSync(indexPath, 'utf8');

// Reemplazar las rutas relativas con rutas absolutas para GitHub Pages
html = html.replace(/href="manifest\.json"/g, 'href="/book/manifest.json"');
html = html.replace(/href="favicon\.ico"/g, 'href="/book/favicon.ico"');
html = html.replace(/href="logo192\.png"/g, 'href="/book/logo192.png"');
html = html.replace(/href="logo512\.png"/g, 'href="/book/logo512.png"');

// Escribir el archivo corregido
fs.writeFileSync(indexPath, html);

console.log('✅ Rutas corregidas en index.html para GitHub Pages'); 