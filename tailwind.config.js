const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../public/**/*.{ejs}"],
  theme: {
    screens: {
      xs: "361px",
      ...defaultTheme.screens,
    },
    extend: {
      //Default site colors
      "primary-color": "###",
    },
  },
  plugins: [],
};
