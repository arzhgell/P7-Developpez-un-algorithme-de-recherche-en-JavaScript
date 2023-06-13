/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "#ffd15b",
        black: "#1b1b1b",
        grey: "#7a7a7a",
        lightGrey: "#EDEDED",
      },
      backgroundImage: {
        hero: "url('/assets/images/hero.png')",
      },
      fontFamily: {
        anton: ["Anton"],
      },
    },
  },
  plugins: [],
};
