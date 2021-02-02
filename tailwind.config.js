const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.blue[700],
        red: colors.red[700],
        green: colors.green[700],
        yellow: colors.yellow[600],
      },
      fontSize: {
        '10xl': '14rem',
        'xxl': '18rem'
      },
      spacing: {
        '88': '22rem',
        'xl': '36rem',
        '2xl': '42rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      }
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
