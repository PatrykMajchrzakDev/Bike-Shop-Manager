const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs}"],
  theme: {
    screens: {
      xs: "340px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        //Default site colors
        mango: "#f5b700",
        veryLightGray: "#e1e1e1",
        gray: "#292c34",
        lightGray: "#343842",
        cultured: "#f7f4f3",
        eerieBlack: "#191919",
        vividBurgundy: "#a30b37",
        blue: "#1a73e8",
        light: "#f1f5f9",
      },
      fontFamily: {
        defaultFont: ["Barlow, sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
