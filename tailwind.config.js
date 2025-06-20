/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados del proyecto
        'azulito': '#D9ECF2',
        'rosa-uno': '#F56A79',
        'rojo': '#FF414D',
        'azul-oscuro': '#002D40',
        'turquesa': '#1AA6B7',
        'azul-oscuro-dos': '#205072',
        'verde-oscuro': '#329D9C',
        'verde-medio': '#56C596',
        'verde-regular': '#7BE495',
        'verde-claro': '#CFF4D2',
        
        // Variantes de los colores principales
        'cover': {
          'red': '#FF414D',
          'turquoise': '#329D9C',
          'green': '#56C596',
          'pink': '#F2668B',
          'dark-blue': '#025E73',
          'dark-blue-2': '#026873',
          'teal': '#03A688',
          'navy': '#024554',
          'olive': '#53736A',
          'olive-2': '#6A8C69',
          'lime': '#A8B545',
          'cream': '#C2C0A6',
        }
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'cursive': ['cursive'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '30px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'rotate-slow': 'rotate 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'display': 'display',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      }
    },
  },
  plugins: [],
  // Compatibilidad con Bootstrap
  corePlugins: {
    preflight: false, // Evita conflictos con Bootstrap
  },
} 