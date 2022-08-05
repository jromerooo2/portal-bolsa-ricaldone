/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', 'cursive']
      },
      colors: {
        'green-saculum': '#395322',
        'green-saculum-light': '#85AF4B',
        'green-saculum-lighter': '#D6EABE',
      }
    },
  },
  plugins: [],
}
