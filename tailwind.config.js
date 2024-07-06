/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors:{
        'white-light': '#E7E7E7',
        'blue-light': '#085EC5',
        'black-normal': '#333333',
        'black-bold': '#222222',
        'white-secondary': '#FFFFFF',
        'white-tertiary': '#F0F0F0'
      },
      gridTemplateColumns: {
        'app': '300px 1fr'
      }
    },
  },
  plugins: [],
}

