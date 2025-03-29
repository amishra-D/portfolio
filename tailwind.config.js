/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-xs': {'max': '480px'},
      },
      fontFamily: {
        barcode: ['"Libre Barcode 39 Text"', 'cursive'],
        brut: ["Brut Grotesque", "sans-serif"],
      },
      textStrokeWidth: {
        2: '2px',
      },
      textStrokeColor: {
        white: '#ffffff',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '2px white',
        },
      });
    },
  ],
}

