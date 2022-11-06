/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./renderer/src/**/*.svelte",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
