const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        1: "1 1 0",
      },
      colors: {
        blue: { pr: colors.blue[700] },
        red: { pr: colors.red[700] },
        green: { pr: colors.green[700] },
        yellow: { pr: colors.yellow[600] },
      },
      fontSize: {
        "10xl": "14rem",
        xxl: "18rem",
      },
      spacing: {
        88: "22rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        above: "0 -25px 50px 0 rgba(0, 0, 0, 0.1)",
      },
      zIndex: {
        "-10": "-10",
      },
      backgroundSize: {
        "125%": "auto 125%",
        "150%": "auto 150%",
        "175%": "auto 175%",
        "200%": "auto 200%",
      },
      maxHeight: {
        min: "min-content",
        max: "max-content",
      },
    },
    fontFamily: {
      sans: ["Google Sans", "sans-serif"],
    },
  },
  plugins: [],
};
