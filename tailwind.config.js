module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      // gridRow: {
      //   'span-full': '1 / -1',
      // },
      // gridColumn: {
      //   'span-full': '1 / -1',
      // },
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
