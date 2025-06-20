# 🎨 Guía de Tailwind CSS

Esta guía te ayudará a usar Tailwind CSS en tu proyecto de portfolio.

## 📋 Configuración Implementada

### ✅ **Archivos de Configuración**
- `tailwind.config.js` - Configuración principal de Tailwind
- `postcss.config.js` - Configuración de PostCSS
- `src/style/tailwind.css` - Estilos de Tailwind + clases personalizadas

### ✅ **Colores Personalizados**
Todos los colores de tu paleta están disponibles como clases de Tailwind:

```css
/* Colores principales */
bg-azulito          /* #D9ECF2 */
bg-rosa-uno         /* #F56A79 */
bg-rojo             /* #FF414D */
bg-azul-oscuro      /* #002D40 */
bg-turquesa         /* #1AA6B7 */
bg-verde-oscuro     /* #329D9C */
bg-verde-medio      /* #56C596 */
bg-verde-regular    /* #7BE495 */
bg-verde-claro      /* #CFF4D2 */

/* Colores de texto */
text-azulito
text-rosa-uno
text-rojo
/* etc... */
```

## 🚀 Cómo Usar

### **1. Clases Básicas de Tailwind**

```jsx
// Layout
<div className="flex items-center justify-center">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// Espaciado
<div className="p-4 m-2">
<div className="px-6 py-3">

// Colores
<div className="bg-verde-medio text-white">
<button className="bg-rojo hover:bg-rosa-uno">

// Tipografía
<h1 className="text-2xl font-bold">
<p className="text-lg text-white/80">

// Responsive
<div className="w-full md:w-1/2 lg:w-1/3">
```

### **2. Clases Personalizadas (Compatibilidad)**

Todas tus clases existentes siguen funcionando:

```jsx
// Clases existentes que siguen funcionando
<div className="flex centrar justificar">
<div className="mouse cursor">
<div className="f-18 blanco">
<div className="portada rotar">
```

### **3. Combinando Tailwind + Clases Existentes**

```jsx
// Puedes mezclar ambos sistemas
<div className="flex centrar bg-verde-medio p-4 rounded-lg">
<div className="mouse f-18 text-white hover:scale-105 transition-transform">
```

## 🎯 Ejemplos Prácticos

### **Card con Tailwind**
```jsx
<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
  <h3 className="text-xl font-semibold text-white mb-2">Título</h3>
  <p className="text-white/80">Descripción</p>
</div>
```

### **Botón con Tailwind**
```jsx
<button className="bg-verde-medio hover:bg-verde-regular text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:scale-105">
  Click me
</button>
```

### **Grid Responsive**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## 🔄 Migración Gradual

### **Estrategia Recomendada**

1. **Componentes Nuevos**: Usar solo Tailwind
2. **Componentes Existentes**: Migrar gradualmente
3. **Mantener Bootstrap**: Solo para grid system inicialmente

### **Ejemplo de Migración**

**Antes (SCSS):**
```jsx
<div className="flex centrar justificar height50">
  <img className="img-fluid" style={{maxWidth: "400px"}} />
</div>
```

**Después (Tailwind):**
```jsx
<div className="flex items-center justify-center h-[50vh]">
  <img className="img-fluid max-w-[400px] mx-auto" />
</div>
```

## 🛠️ Herramientas Útiles

### **VS Code Extensions**
- Tailwind CSS IntelliSense
- PostCSS Language Support

### **Clases Útiles para tu Proyecto**

```css
/* Layout */
.flex-center { @apply flex items-center justify-center; }
.flex-between { @apply flex items-center justify-between; }

/* Texto */
.text-gradient { @apply bg-gradient-to-r from-verde-medio to-verde-regular bg-clip-text text-transparent; }

/* Botones */
.btn-primary { @apply bg-verde-medio hover:bg-verde-regular text-white font-semibold py-2 px-4 rounded transition-colors; }
.btn-secondary { @apply bg-transparent border-2 border-white text-white hover:bg-white hover:text-verde-oscuro transition-all; }

/* Cards */
.card-glass { @apply bg-white/10 backdrop-blur-sm rounded-lg border border-white/20; }
```

## 📱 Responsive Design

```jsx
// Mobile First
<div className="w-full md:w-1/2 lg:w-1/3">
<div className="text-sm md:text-base lg:text-lg">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## 🎨 Animaciones y Transiciones

```jsx
// Hover effects
<div className="hover:scale-105 transition-transform duration-200">

// Transiciones suaves
<button className="transition-all duration-300 hover:bg-verde-regular">

// Animaciones personalizadas
<div className="animate-bounce-slow">
```

## 🔧 Personalización

### **Agregar Nuevos Colores**
Edita `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'nuevo-color': '#FF0000',
    }
  }
}
```

### **Agregar Nuevas Clases**
Edita `src/style/tailwind.css`:

```css
@layer components {
  .mi-clase {
    @apply bg-verde-medio text-white p-4 rounded;
  }
}
```

## ✅ Beneficios Obtenidos

- ✅ **Desarrollo más rápido** con clases utilitarias
- ✅ **Responsive design** más fácil
- ✅ **Consistencia** en el diseño
- ✅ **Menos CSS** personalizado
- ✅ **Mejor mantenibilidad**
- ✅ **Compatibilidad** con estilos existentes

## 🚀 Próximos Pasos

1. **Migrar componentes** uno por uno
2. **Crear componentes base** con Tailwind
3. **Eliminar SCSS** gradualmente
4. **Optimizar** el bundle final

---

¡Tailwind CSS está listo para usar en tu proyecto! 🎉 