/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        buttery: "#e5fddb",
        nurlan: "#2e3532",
      },
      userSelect: {
        none: "none",
      },
    },
  },
  plugins: [],
};
