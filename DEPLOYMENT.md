# 🚀 Deployment Guide - GitHub Pages

Este proyecto está configurado para hacer deploy automático a GitHub Pages usando GitHub Actions.

## 📋 Configuración Requerida

### 1. Habilitar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. Selecciona la rama `gh-pages` y la carpeta `/ (root)`
5. Haz clic en **Save**

### 2. Configurar Permisos de Actions
1. Ve a **Settings** → **Actions** → **General**
2. En **Workflow permissions**, selecciona **Read and write permissions**
3. Marca la casilla **Allow GitHub Actions to create and approve pull requests**
4. Haz clic en **Save**

## 🔄 Workflows Automáticos

### Deploy Principal (`deploy.yml`)
- **Trigger:** Push a `main` o `master`
- **Acción:** Construye y despliega a GitHub Pages
- **URL:** `https://[usuario].github.io/[repositorio]/`

### Preview Deployments (`preview.yml`)
- **Trigger:** Pull Request a `main` o `master`
- **Acción:** Crea una preview del sitio
- **URL:** `https://[usuario].github.io/[repositorio]/preview/[numero-pr]/`

## 🛠️ Scripts Disponibles

```bash
# Construir para producción (crea carpeta docs)
npm run build:prd

# Optimizar imágenes
npm run optimize-images

# Deploy manual a GitHub Pages
npm run deploy:gh-pages

# Servir localmente la versión de producción
npm run start:prd
```

## 📁 Estructura de Archivos

```
.github/
├── workflows/
│   ├── deploy.yml      # Deploy principal
│   └── preview.yml     # Preview deployments
docs/                   # Archivos construidos (generados automáticamente)
```

## 🔍 Monitoreo

### Verificar el Status del Deploy
1. Ve a la pestaña **Actions** en tu repositorio
2. Selecciona el workflow que quieres revisar
3. Revisa los logs para detectar errores

### URLs Importantes
- **Sitio Principal:** `https://[usuario].github.io/[repositorio]/`
- **Actions:** `https://github.com/[usuario]/[repositorio]/actions`

## 🚨 Solución de Problemas

### Error: "Build failed"
1. Revisa los logs en GitHub Actions
2. Verifica que todas las dependencias estén instaladas
3. Asegúrate de que el script `build:prd` funcione localmente

### Error: "Permission denied"
1. Verifica que GitHub Pages esté habilitado
2. Confirma que los permisos de Actions estén configurados
3. Revisa que el token `GITHUB_TOKEN` esté disponible

### Error: "404 Not Found"
1. Espera unos minutos (GitHub Pages puede tardar en actualizarse)
2. Verifica que la rama `gh-pages` se haya creado
3. Confirma que los archivos estén en la carpeta correcta

## 📝 Notas Importantes

- El deploy automático solo ocurre en pushes a `main` o `master`
- Los preview deployments se crean automáticamente en cada PR
- Las imágenes se optimizan automáticamente antes del build
- El sitio se actualiza en 1-5 minutos después del deploy

## 🔗 Recursos Útiles

- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) 