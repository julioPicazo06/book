// Script para depurar las peticiones a la API y el sessionStorage
console.clear();
console.log('=== DEBUG API REQUESTS ===');

// Mostrar todas las claves en sessionStorage
const keys = Object.keys(sessionStorage);
console.log('Claves en sessionStorage:', keys);

// Mostrar el contenido de cada clave
keys.forEach(key => {
    try {
        const data = JSON.parse(sessionStorage.getItem(key));
        console.log(`\nClave: ${key}`);
        console.log('Datos:', data);
    } catch (error) {
        console.log(`\nClave: ${key} (no es JSON válido)`);
        console.log('Datos:', sessionStorage.getItem(key));
    }
});

// Función para limpiar una clave específica
window.clearSpecificCache = (key) => {
    sessionStorage.removeItem(key);
    console.log(`Clave "${key}" eliminada del caché`);
};

// Función para limpiar todas las claves relacionadas con la API
window.clearApiCache = () => {
    const apiKeys = keys.filter(key => key.includes('us-central1-bookcontent-eb619.cloudfunctions.net'));
    apiKeys.forEach(key => {
        sessionStorage.removeItem(key);
        console.log(`Clave API eliminada: ${key}`);
    });
    console.log('Caché de API limpiado');
};

// Función para hacer una petición de prueba
window.testApiRequest = async (endpoint) => {
    try {
        console.log(`Probando endpoint: ${endpoint}`);
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log('Respuesta de la API:', data);
        return data;
    } catch (error) {
        console.error('Error en la petición:', error);
    }
};

console.log('\n=== FUNCIONES DISPONIBLES ===');
console.log('clearSpecificCache(key) - Limpiar una clave específica');
console.log('clearApiCache() - Limpiar todo el caché de la API');
console.log('testApiRequest(url) - Probar una petición a la API');

// Probar la API de skills
console.log('\n=== PROBANDO API DE SKILLS ===');
testApiRequest('https://us-central1-bookcontent-eb619.cloudfunctions.net/getDocumentByName?name=contentSkills'); 