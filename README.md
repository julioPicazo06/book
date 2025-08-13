## Welcome to my Book


![My Image](src/img/cat.png)

# Personal Book - Julio Picazo

Portfolio personal desarrollado con React, TypeScript y Redux Toolkit.

## 🚀 Deployment

Este proyecto está configurado para hacer deploy automático a GitHub Pages.

**URL del sitio:** https://julioPicazo06.github.io/book/

**Estado del workflow:** ✅ Activado y funcionando correctamente

## 🧪 Prueba de Deploy Automático

Este es un cambio de prueba para verificar que el workflow de GitHub Actions funciona correctamente.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

Ejects the app from Create React App's build setup.\
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them.\
All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.\
At this point you're on your own.

### `npm run optimize-images`

Runs a Node script to optimize images.

### `npm run deploy:gh-pages`

Builds the app for production and deploys it to GitHub Pages.

### `npm run version:patch`

Increments the patch version number, pushes the changes to the remote repository, and creates a new tag.

### `npm run version:minor`

Increments the minor version number, pushes the changes to the remote repository, and creates a new tag.

### `npm run version:major`

Increments the major version number, pushes the changes to the remote repository, and creates a new tag.

### `npm run start:prd`

Runs the app in production mode using the `serve` package.

### `npm run optimize:build`

Runs the `npm run optimize-images` command and then builds the app for production.

# Genereting TAGS and Version
## Para una actualización de patch:
```
npm run version:patch
```
##  Para una actualización de minor:
```
npm run version:minor
```
## Para una actualización de major:
```
npm run version:major
```

# Personal Book - Portfolio

Mi portfolio personal desarrollado con React, TypeScript y Redux.

## 🚀 Sistema de Versionado Automático

Este proyecto incluye un sistema de versionado automático basado en tags en los mensajes de commit.

### Uso Rápido

```bash
# Corrección de bug
git commit -m "fix: resolver problema [patch]"

# Nueva funcionalidad  
git commit -m "feat: agregar nueva sección [minor]"

# Cambio mayor
git commit -m "feat: reestructurar app [major]"
```

Ver [VERSIONING.md](./VERSIONING.md) para más detalles.

## 🛠️ Scripts Disponibles

- `npm start` - Iniciar en desarrollo
- `npm run build:prd` - Build para producción
- `npm run deploy:gh-pages` - Deploy a GitHub Pages
- `npm run deploy:auto` - Deploy automático con versionado
- `npm run auto-version` - Solo versionado automático

## 📦 Tecnologías

- React 18
- TypeScript
- Redux Toolkit
- Material-UI
- Bootstrap
- SASS
- React Router

## 🌐 Demo

[Ver en vivo](https://julioPicazo06.github.io/book)

## Convención de Commits

Este proyecto utiliza la convención [Conventional Commits](https://www.conventionalcommits.org/) para los mensajes de commit. Esto ayuda a mantener un historial de cambios claro y automatizar procesos como changelogs y releases.

### Formato básico

```
<tipo>(<scope>): descripción breve [tag]
```

- **tipo**: El tipo de cambio (por ejemplo: feat, fix, docs, style, refactor, chore, etc.)
- **scope**: (opcional) La parte del proyecto afectada (por ejemplo: component, api, store, etc.)
- **descripción breve**: Explicación corta del cambio, en minúsculas y sin punto final
- **[tag]**: (opcional) Puedes añadir `[patch]`, `[minor]` o `[major]` para indicar el tipo de versión semántica que debe generarse

### Ejemplos válidos

- `feat(component): add new skills section [minor]`
- `fix(api): resolve sessionStorage caching issue [patch]`
- `docs: update README with commit convention [patch]`
- `refactor(utils): improve fetchAndDispatch function [patch]`
- `feat: add dark mode support [major]`

### Ejemplos inválidos

- `add new feature`
- `fix: `
- `feat: add new feature.` (no debe llevar punto al final)

### Uso de tags `[patch]`, `[minor]`, `[major]`

- **[patch]**: Para correcciones menores o bugs que no afectan la API pública
- **[minor]**: Para nuevas funcionalidades que no rompen compatibilidad
- **[major]**: Para cambios que rompen compatibilidad o grandes refactorizaciones

Estos tags ayudan a automatizar el versionado semántico del proyecto.

### Más información

Consulta la guía completa en [COMMIT_CONVENTION.md](./COMMIT_CONVENTION.md).

## Flujo de Deploy y CI/CD

Este proyecto utiliza GitHub Actions para automatizar el build y el deploy a producción.

### ¿Cuándo se hace deploy a producción?

- **Solo se hace deploy a producción cuando un Pull Request es mergeado a `main` o `master`.**
- No se hace deploy en pushes directos ni en previews de PR.
- Esto evita conflictos y builds duplicados.

### ¿Cómo funciona?

- Cuando un PR es mergeado a `main` o `master`, el workflow de GitHub Actions:
  1. Instala dependencias
  2. Optimiza imágenes
  3. Genera el build de producción
  4. Verifica que todos los archivos estén presentes
  5. Publica el contenido en GitHub Pages

Puedes ver la configuración en `.github/workflows/deploy.yml`.

### ¿Por qué se hace así?

- **Evita deploys duplicados**: No se dispara el deploy en cada push o actualización de PR.
- **Solo producción estable**: Solo el código aprobado y mergeado llega a producción.
- **Más control**: El deploy es predecible y fácil de auditar.

---





