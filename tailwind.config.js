/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      padding: "5%",
    },
    extend: {
      colors: {
        main: "#2965F1",
        sub_main: "#FAFF00",
      },
    },
  },
  plugins: [],
};
