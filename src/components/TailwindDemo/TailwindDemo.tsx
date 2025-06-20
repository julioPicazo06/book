import React from 'react';

const TailwindDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-verde-oscuro to-verde-medio p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🎨 Tailwind CSS Demo
          </h1>
          <p className="text-xl text-white/80">
            Demostración de las capacidades de Tailwind CSS en tu proyecto
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-2">Colores Personalizados</h3>
            <p className="text-white/80">
              Usando los colores de tu paleta personalizada
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Responsive Design</h3>
            <p className="text-white/80">
              Grid que se adapta a diferentes tamaños de pantalla
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-4">🎭</div>
            <h3 className="text-xl font-semibold text-white mb-2">Animaciones</h3>
            <p className="text-white/80">
              Hover effects y transiciones suaves
            </p>
          </div>
        </div>

        {/* Sección de colores */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Tu Paleta de Colores
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="bg-azulito h-20 rounded-lg flex items-center justify-center text-azul-oscuro font-semibold">
              Azulito
            </div>
            <div className="bg-rosa-uno h-20 rounded-lg flex items-center justify-center text-white font-semibold">
              Rosa Uno
            </div>
            <div className="bg-rojo h-20 rounded-lg flex items-center justify-center text-white font-semibold">
              Rojo
            </div>
            <div className="bg-azul-oscuro h-20 rounded-lg flex items-center justify-center text-white font-semibold">
              Azul Oscuro
            </div>
            <div className="bg-turquesa h-20 rounded-lg flex items-center justify-center text-white font-semibold">
              Turquesa
            </div>
            <div className="bg-verde-oscuro h-20 rounded-lg flex items-center justify-center text-white font-semibold">
              Verde Oscuro
            </div>
          </div>
        </div>

        {/* Botones de ejemplo */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Botones con Tailwind
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-verde-medio hover:bg-verde-regular text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:scale-105">
              Botón Principal
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-verde-oscuro transition-all duration-200">
              Botón Secundario
            </button>
            <button className="bg-rojo hover:bg-rosa-uno text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:scale-105">
              Botón Acción
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-white/60">
            ✅ Tailwind CSS está funcionando perfectamente en tu proyecto
          </p>
        </div>
      </div>
    </div>
  );
};

export default TailwindDemo; 