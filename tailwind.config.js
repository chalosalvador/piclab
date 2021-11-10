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
      indigo: colors.indigo,
      yellow: colors.amber,
    },
    fontFamily: {
      idlewild: ["'Idlewild A', 'Idlewild B'"],
      inter: ["Inter"],
    },
    fontSize: {
      tiny: ".5rem",
      xs: ".75rem",
      sm: ".8125rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    gradientColorStops: () => ({
      primary: "#e14551",
      secondary: "#ff75b7",
    }),
    extend: {
      backgroundImage: {
        main: "linear-gradient(305.47deg, #E14551 46.87%, #FF75B7 129.51%);",
        "hero-image": "url('/images/bg-hero.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
