/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ['./templates/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        angsana: ["Angsana New"],
        athiti: ["Athiti"],
        kanit: ["Kanit"],
        sarabun: ["Sarabun"],
      }
    },
  },
  plugins: [ require('@tailwindcss/aspect-ratio'),],
}

