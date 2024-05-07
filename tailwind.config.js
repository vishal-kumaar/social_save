/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cutive: ["Cutive", "sans-serif"],
        mono: ["Cutive Mono", "sans-serif"],
        signika: ["Signika", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        firasans: ["Fira Sans", "sans-serif"],
        chelaone: ["Chela One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
