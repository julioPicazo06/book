# Fixes de Dependencias

## Problema

El pipeline de CI/CD estaba fallando con errores de conflictos de dependencias:

1. **TypeScript**: Conflicto entre TypeScript 4.9.5 y cosmiconfig-typescript-loader que requiere TypeScript >=5
2. **@types/node**: Conflicto entre @types/node 16.18.126 y Vite que requiere @types/node >=18.0.0

## Solución Implementada

### 1. Actualización de Dependencias

```json
{
  "@types/node": "^20.0.0",  // Actualizado de ^16.18.126
  "typescript": "^5.0.0"     // Actualizado de ^4.9.5
}
```

### 2. Configuración de npm

Creado archivo `.npmrc`:
```
legacy-peer-deps=true
save-exact=true
```

### 3. Actualización de Workflows de GitHub Actions

**deploy.yml** y **preview.yml**:
```yaml
- name: Install dependencies
  run: npm ci --legacy-peer-deps
```

## Cambios Realizados

### Archivos Modificados

1. **package.json**: Actualizadas versiones de TypeScript y @types/node
2. **.github/workflows/deploy.yml**: Agregado `--legacy-peer-deps`
3. **.github/workflows/preview.yml**: Agregado `--legacy-peer-deps`
4. **.npmrc**: Nuevo archivo de configuración de npm

### Beneficios

- ✅ Resuelve conflictos de dependencias en CI/CD
- ✅ Mantiene compatibilidad con dependencias existentes
- ✅ Permite que el pipeline funcione correctamente
- ✅ Configuración consistente entre desarrollo y producción

## Comandos Útiles

```bash
# Instalar dependencias con legacy-peer-deps
npm install --legacy-peer-deps

# Limpiar cache de npm si hay problemas
npm cache clean --force

# Verificar dependencias
npm ls typescript @types/node
```

## Notas Importantes

- El uso de `--legacy-peer-deps` es temporal hasta que todas las dependencias sean compatibles
- Se recomienda revisar periódicamente las dependencias para actualizarlas cuando sea posible
- Los cambios no afectan la funcionalidad del proyecto, solo resuelven problemas de instalación 