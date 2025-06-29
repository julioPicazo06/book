// Script para probar la funcionalidad de skills
console.clear();
console.log('=== TESTING SKILLS FUNCTIONALITY ===');

// Función para probar la API de skills directamente
async function testSkillsAPI() {
    try {
        console.log('Probando API de skills...');
        const response = await fetch('https://us-central1-bookcontent-eb619.cloudfunctions.net/getDocumentByName?name=contentSkills');
        const data = await response.json();
        
        console.log('Respuesta completa de la API:', data);
        
        // Verificar estructura de datos
        if (data.es) {
            console.log('Datos en español:', data.es);
            console.log('Título en español:', data.es.title);
            console.log('Número de skills en español:', data.es.imgSkills?.length || 0);
        }
        
        if (data.en) {
            console.log('Datos en inglés:', data.en);
            console.log('Título en inglés:', data.en.title);
            console.log('Número de skills en inglés:', data.en.imgSkills?.length || 0);
        }
        
        return data;
    } catch (error) {
        console.error('Error probando API de skills:', error);
    }
}

// Función para verificar el estado de Redux
function checkReduxState() {
    // Esta función se ejecutará en el contexto de la aplicación React
    console.log('=== REDUX STATE CHECK ===');
    
    // Intentar acceder al estado de Redux si está disponible
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        console.log('Redux DevTools disponible');
    }
    
    // Verificar si hay algún estado global disponible
    if (window.store) {
        const state = window.store.getState();
        console.log('Estado de Redux:', state);
        console.log('Estado de skills:', state.skills);
    }
}

// Función para simular el procesamiento de datos
function simulateDataProcessing(apiData, language = 'es') {
    console.log(`\n=== SIMULANDO PROCESAMIENTO PARA IDIOMA: ${language} ===`);
    
    if (apiData && apiData[language]) {
        const processedData = apiData[language];
        console.log('Datos procesados:', processedData);
        
        if (processedData.imgSkills && Array.isArray(processedData.imgSkills)) {
            console.log('Skills encontradas:');
            processedData.imgSkills.forEach((skill, index) => {
                console.log(`${index + 1}. ${skill.alt} - ${skill.src}`);
            });
        }
        
        return processedData;
    } else {
        console.log(`No se encontraron datos para el idioma: ${language}`);
        return null;
    }
}

// Ejecutar pruebas
console.log('Iniciando pruebas...\n');

// Probar la API
testSkillsAPI().then(apiData => {
    if (apiData) {
        // Simular procesamiento para español
        simulateDataProcessing(apiData, 'es');
        
        // Simular procesamiento para inglés
        simulateDataProcessing(apiData, 'en');
    }
    
    // Verificar estado de Redux
    setTimeout(checkReduxState, 1000);
});

console.log('\n=== FUNCIONES DISPONIBLES ===');
console.log('testSkillsAPI() - Probar la API de skills');
console.log('checkReduxState() - Verificar estado de Redux');
console.log('simulateDataProcessing(data, language) - Simular procesamiento de datos'); 