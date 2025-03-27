/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
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

