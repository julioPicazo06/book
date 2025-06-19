#!/bin/bash

# 🚀 Script de Deployment para GitHub Pages
# Este script automatiza el proceso de deployment

set -e  # Exit on any error

echo "🚀 Iniciando proceso de deployment..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar que estamos en la rama correcta
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" != "main" && "$CURRENT_BRANCH" != "master" ]]; then
    print_warning "Estás en la rama '$CURRENT_BRANCH'. El deployment automático solo funciona en main/master."
    read -p "¿Continuar con deployment manual? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_error "Deployment cancelado."
        exit 1
    fi
fi

# Verificar que no hay cambios sin commitear
if [[ -n $(git status --porcelain) ]]; then
    print_error "Hay cambios sin commitear. Por favor, haz commit de tus cambios antes de hacer deployment."
    git status --short
    exit 1
fi

# Instalar dependencias si es necesario
if [[ ! -d "node_modules" ]]; then
    print_status "Instalando dependencias..."
    npm install
fi

# Optimizar imágenes
print_status "Optimizando imágenes..."
npm run optimize-images

# Construir proyecto
print_status "Construyendo proyecto..."
npm run build:prd

# Verificar que la carpeta docs existe
if [[ ! -d "docs" ]]; then
    print_error "La carpeta 'docs' no se creó. Verifica el script build:prd."
    exit 1
fi

# Deploy a GitHub Pages
print_status "Haciendo deploy a GitHub Pages..."
npm run deploy:gh-pages

print_status "✅ Deployment completado exitosamente!"
print_status "🌐 Tu sitio estará disponible en: https://$(git config user.name).github.io/$(basename $(git rev-parse --show-toplevel))/"

# Opcional: Abrir el sitio en el navegador
read -p "¿Abrir el sitio en el navegador? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    open "https://$(git config user.name).github.io/$(basename $(git rev-parse --show-toplevel))/"
fi 