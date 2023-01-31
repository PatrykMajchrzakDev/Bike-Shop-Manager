const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs}"],
  theme: {
    screens: {
      xs: "361px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['"Segoe UI"', '"Helvetica Neue"', '"Noto Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        //Default site colors
        mango: "#f5b700",
        cultured: "#f7f4f3",
        nickel: "#717568",
        eerieBlack: "#191919",
        vividBurgundy: "#a30b37",
        blue: "#1a73e8",
        light: "#f1f5f9",
      },
    },
  },
  plugins: [],
};
