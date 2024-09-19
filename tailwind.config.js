/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        warm: {
          light: "#FFE5D9",
          DEFAULT: "#FFB5A7",
          dark: "#FCD5CE",
        },
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
