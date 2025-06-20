import React, { useState } from 'react';
import { Cover } from './Cover';
import { CoverLegacy } from './CoverLegacy';

const CoverComparison: React.FC = () => {
  const [showVersion, setShowVersion] = useState<'tailwind' | 'legacy'>('tailwind');

  return (
    <div className="min-h-screen bg-gradient-to-br from-verde-oscuro to-verde-medio">
      {/* Header de comparación */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setShowVersion('tailwind')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              showVersion === 'tailwind'
                ? 'bg-verde-medio text-white shadow-lg'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            🎨 Tailwind CSS
          </button>
          <button
            onClick={() => setShowVersion('legacy')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              showVersion === 'legacy'
                ? 'bg-verde-medio text-white shadow-lg'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            📜 Clases Personalizadas
          </button>
        </div>
        
        <div className="text-center mt-2 text-white/80 text-sm">
          {showVersion === 'tailwind' 
            ? 'Versión completamente migrada a Tailwind CSS'
            : 'Versión usando clases personalizadas (compatibilidad)'
          }
        </div>
      </div>

      {/* Contenido */}
      <div className="pt-20">
        {showVersion === 'tailwind' ? <Cover /> : <CoverLegacy />}
      </div>

      {/* Información de migración */}
      <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 max-w-sm">
        <h3 className="text-white font-semibold mb-2">
          {showVersion === 'tailwind' ? '✅ Migración Completa' : '🔄 Compatibilidad'}
        </h3>
        <p className="text-white/80 text-sm">
          {showVersion === 'tailwind' 
            ? 'Componente migrado completamente a Tailwind CSS con mejoras visuales y responsive design.'
            : 'Componente usando clases personalizadas que mantienen compatibilidad total con el diseño original.'
          }
        </p>
      </div>
    </div>
  );
};

export default CoverComparison; 