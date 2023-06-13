/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        'nav': ' rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
      },
      animation: {
        'move': 'move 30s linear infinite'
      },
      keyframes: {
        'move': {
          '100%': {transform: 'rotate(360deg)'},
        }
      }
    },
  },
  plugins: [],
}