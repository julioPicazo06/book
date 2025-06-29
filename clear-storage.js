// Script para limpiar sessionStorage y forzar nuevas peticiones HTTP
console.clear();
console.log('Limpiando sessionStorage...');

// Mostrar qué datos están en caché antes de limpiar
const keys = Object.keys(sessionStorage);
console.log('Datos en caché antes de limpiar:', keys);

// Limpiar sessionStorage
sessionStorage.clear();

console.log('SessionStorage cleared!');
console.log('Ahora se harán nuevas peticiones HTTP a la API');

// Verificar que se limpió
console.log('Datos en caché después de limpiar:', Object.keys(sessionStorage));

// Opción para recargar la página automáticamente
console.log('\nPara recargar la página y forzar nuevas peticiones, ejecuta:');
console.log('location.reload();');

// Función para recargar automáticamente
window.forceReload = () => {
    console.log('Recargando página...');
    location.reload();
};
