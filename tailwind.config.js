/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgba(21, 114, 211, 1)',
        customWhite:'rgba(255, 255, 255, 1)'
      },

    },
  },
  plugins: [],
}