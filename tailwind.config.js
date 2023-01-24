/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-black': '#1E1E1E',
      }
    },
    fontFamily:{
      oswald: ['Oswald', 'sans-serif'],
    },
  },
  plugins: [],
}