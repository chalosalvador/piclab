const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      green: "#54FFE0",
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      idlewild: ["'Idlewild A', 'Idlewild B'"],
      inter: ["Inter"],
    },
    fontSize: {
      tiny: "0.5rem",
    },
    gradientColorStops: () => ({
      primary: "#e14551",
      secondary: "#ff75b7",
    }),
    extend: {
      backgroundImage: {
        main: "linear-gradient(305.47deg, #E14551 46.87%, #FF75B7 129.51%);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
