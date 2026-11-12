/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  darkMode: "class",
  /* preflight desactivado: así Tailwind no reinicia los estilos del navegador
     y tu diseño (títulos, listas, párrafos) se ve igual que antes. */
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
