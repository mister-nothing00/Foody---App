/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./App.js"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Sono", "sans-serif"],
        secondary: ["Nunito", "sans-serif"],
      }
    },
  },
  plugins: [],
};
