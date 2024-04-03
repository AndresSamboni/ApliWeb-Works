/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'header-content': '#e9e0d1',
        'footer-content': '#9ca3af',
        'nav': '#282832',
        'page': '#140d1a',
        'title': '#dee7e7',
        'content': '#c6d6d6',
        'border-card': '#ffd452',
        'shadow': '#c67f32'
      }
    },
  },
  plugins: [],
}

