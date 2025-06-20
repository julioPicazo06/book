# 🚀 Sistema de Versionado Automático

Este proyecto incluye un sistema de versionado automático basado en tags en los mensajes de commit.

## 📋 Cómo usar

### 1. **Versionado Automático con Tags**

Simplemente incluye uno de estos tags en tu mensaje de commit:

```bash
# Para correcciones de bugs (patch)
git commit -m "fix: corregir error de navegación [patch]"

# Para nuevas funcionalidades (minor)
git commit -m "feat: agregar nueva sección de proyectos [minor]"

# Para cambios mayores (major)
git commit -m "feat: reestructurar completamente la aplicación [major]"
```

### 2. **Scripts Disponibles**

| Comando | Descripción |
|---------|-------------|
| `npm run auto-version` | Ejecuta solo el versionado automático |
| `npm run auto-deploy` | Ejecuta versionado + build + deploy |
| `npm run deploy:auto` | Alias para auto-deploy |
| `npm run setup-hooks` | Configura los hooks de Git |

### 3. **Tipos de Versión**

- **[patch]**: Correcciones de bugs (1.0.0 → 1.0.1)
- **[minor]**: Nuevas funcionalidades (1.0.0 → 1.1.0)
- **[major]**: Cambios mayores (1.0.0 → 2.0.0)

### 4. **Flujo Automático**

1. Haces un commit con un tag de versionado
2. El hook de Git detecta automáticamente el tag
3. Se actualiza la versión en `package.json`
4. Se crea un tag de Git
5. Se hace commit del cambio de versión
6. Se suben los cambios y tags a GitHub

### 5. **Ejemplos de Uso**

```bash
# Corrección de bug
git add .
git commit -m "fix: resolver problema de carga de imágenes [patch]"

# Nueva funcionalidad
git add .
git commit -m "feat: agregar modo oscuro [minor]"

# Cambio mayor
git add .
git commit -m "feat: migrar a React 18 [major]"
```

### 6. **Deploy Automático**

Para hacer deploy automático con versionado:

```bash
npm run deploy:auto
```

Esto ejecutará:
1. Versionado automático (si hay tags)
2. Build de la aplicación
3. Deploy a GitHub Pages

### 7. **Verificar Versiones**

```bash
# Ver versión actual
npm version

# Ver tags de Git
git tag

# Ver historial de versiones
git log --oneline --decorate
```

## 🔧 Configuración

Los hooks de Git se configuran automáticamente con:

```bash
npm run setup-hooks
```

## 📝 Notas

- Los tags deben estar en el mensaje del commit
- El sistema es case-insensitive
- Si no hay tags, el versionado se omite
- Los tags se crean automáticamente en GitHub
- El deploy incluye la nueva versión

## 🎯 Beneficios

- ✅ Versionado semántico automático
- ✅ Tags de Git automáticos
- ✅ Deploy automático
- ✅ Historial de versiones claro
- ✅ Fácil de usar 