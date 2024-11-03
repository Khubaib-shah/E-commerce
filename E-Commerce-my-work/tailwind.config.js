/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-primary': "#ccd5ae",
        'custom-secondary': "#e9edc9",
        'custom-button': "#fefae0",
        'custom-theme': "#faedcd",
        'custom-dark': "#d4a373",
      }
    },
  },
  plugins: [],
}