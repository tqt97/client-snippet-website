/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Rubik', 'sans-serif']
      }
    },
    rotate: {
      '45': '45deg',
      '-45': '-45deg',
    }
  },
  plugins: [
    require('tailwindcss-transforms')({
    }),
  ],
}

