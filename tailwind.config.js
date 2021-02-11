const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: { pr: colors.blue[700] },
        red: { pr: colors.red[700] },
        green: { pr: colors.green[700] },
        yellow: { pr: colors.yellow[600] },
      },
      fontSize: {
        '10xl': '14rem',
        'xxl': '18rem'
      },
      spacing: {
        '88': '22rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
      },
      borderRadius: {
        '4xl': '2rem'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      },
      zIndex: {
        '-10': '-10',
      }
    },
    fontFamily: {
      sans: ['Google Sans', 'sans-serif']
    }
  },
  variants: {
    extend: {
      inset: ['even'],
      ringColor: ['focus-visible'],
      ringWidth: ['focus-visible'],
    } 
  },
  plugins: [],
}
