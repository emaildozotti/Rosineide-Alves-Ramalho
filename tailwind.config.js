/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C4956A',
        'primary-dark': '#A67A52',
        'bg-warm': '#F5EDE0',
        'bg-light': '#EBE4D8',
        'text-main': '#2C2420',
        'heading-color': '#7B4F35',
        secondary: '#8B9E8A',
        dark: '#2C2420',
        'off-white': '#F5EDE0',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Lato"', '"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
