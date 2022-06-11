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
      }
    },
  },
  plugins: [],
}
