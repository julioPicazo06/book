# Convención de Commits

Este proyecto utiliza [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial de commits consistente y profesional.

## Formato

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

## Tipos de Commit

- **feat**: Nueva característica
- **fix**: Corrección de bug
- **docs**: Cambios en documentación
- **style**: Cambios de formato (espacios, comas, etc.)
- **refactor**: Refactorización de código
- **perf**: Mejoras de rendimiento
- **test**: Agregar o modificar tests
- **chore**: Tareas de mantenimiento
- **ci**: Cambios en CI/CD
- **build**: Cambios en el sistema de build
- **revert**: Revertir commits anteriores

## Scope (Opcional)

El scope indica qué parte del proyecto se ve afectada:

- **component**: Cambios en componentes
- **utils**: Cambios en utilidades
- **api**: Cambios en la API
- **store**: Cambios en Redux store
- **styles**: Cambios en estilos
- **config**: Cambios en configuración

## Ejemplos

### ✅ Commits Correctos

```bash
# Nueva característica
git commit -m "feat(component): add new skills component"

# Corrección de bug
git commit -m "fix(api): resolve sessionStorage caching issue"

# Documentación
git commit -m "docs: update README with new features"

# Refactorización
git commit -m "refactor(utils): improve fetchAndDispatch function"

# Estilo
git commit -m "style: fix indentation in components"

# Mantenimiento
git commit -m "chore: update dependencies"

# Sin scope
git commit -m "feat: add dark mode support"
```

### ❌ Commits Incorrectos

```bash
# Sin tipo
git commit -m "add new feature"

# Tipo incorrecto
git commit -m "new: add component"

# Sin descripción
git commit -m "feat:"

# Con punto al final
git commit -m "feat: add component."

# Muy largo
git commit -m "feat: add a very long description that exceeds the maximum length allowed for commit messages"
```

## Reglas

1. **Tipo obligatorio**: Siempre incluir el tipo de commit
2. **Descripción obligatoria**: Siempre incluir una descripción
3. **Minúsculas**: Usar minúsculas en tipo y descripción
4. **Sin punto final**: No terminar la descripción con punto
5. **Máximo 72 caracteres**: El mensaje completo no debe exceder 72 caracteres
6. **Imperativo**: Usar modo imperativo ("add" no "added")

## Hooks de Git

El proyecto utiliza Husky para validar automáticamente los commits:

- **pre-commit**: Ejecuta linting antes del commit
- **commit-msg**: Valida el formato del mensaje de commit

## Comandos Útiles

```bash
# Ejecutar linting manualmente
npm run lint

# Corregir errores de linting automáticamente
npm run lint:fix

# Verificar configuración de Husky
npx husky list
```

## Beneficios

- **Historial limpio**: Commits consistentes y fáciles de leer
- **Changelog automático**: Generación automática de changelogs
- **Semantic versioning**: Versionado semántico automático
- **Mejor colaboración**: Facilita la revisión de código
- **Automatización**: Integración con CI/CD y herramientas de release 