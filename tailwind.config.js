/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'clash': ['Clash Display', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        'custom-red': '#E0292B',
        'custom-red-dark': '#C21E21',
      }
    },
  },
  plugins: [],
}
