/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      red: '#ce4a4a',
      green: '#04d361',
      blue: '#42D3FF',
      yellow: '#ffcd1e',
      orange: '#ff7a29',
      gray: {
        100: '#e1e1e6',
        200: '#c4c4cc',
        400: '#7c7c8a',
        800: '#202024',
        900: '#121214',
      },
      cyan: {
        300: '#9be1fb',
        500: '#81d8f7',
      }
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    extend: {
      fontFamily: {
        sans: 'Inter, Helvetica, Arial, sans-serif',
      }
    },
  },
  plugins: [],
}
