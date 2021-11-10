const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      pink: "#ff75b7",
      red: "#e84f5a",
      green: "#54ffe0",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
    },
    fontFamily: {
      idlewild: ["'Idlewild A', 'Idlewild B'"],
      inter: ["Inter"],
    },
    gradientColorStops: () => ({
      primary: "#e14551",
      secondary: "#ff75b7",
    }),
    extend: {
      backgroundImage: {
        main: "linear-gradient(305.47deg, #E14551 46.87%, #FF75B7 129.51%);",
        "hero-image": "url('/images/bg-hero.png')",
        section2: "url(/images/bg-section2.jpeg)",
      },
      fontSize: {
        tiny: ".5rem",
        sm: ".8125rem",
        lg: "1.375rem",
        xl: "1.875rem",
      },
      height: {
        hero: "695px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
