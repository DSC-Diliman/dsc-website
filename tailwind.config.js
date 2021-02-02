module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#4285F4',
        red: '#EA4335',
        green: '#0F9D58',
        yellow: '#FBBC04',
      },
      fontSize: {
        'xxl': '18rem'
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
