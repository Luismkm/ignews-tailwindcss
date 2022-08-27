/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        blue: {
          500: '#61DCFB',
        },
        yellow: {
          800: '#EBA417',
        },
        gray: {
          100: '#E1E1E6',
          200: '#A8A8B3',
          300: '#8D8D99',
          500: '#29292E',
          600: '#1F2729',
          800: '#121214',
          900: '#09090A'
        }
      },
    },
  },
}
