/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#141D2F",
        lightBg: "#F6F8FF",
        darkModeBlue: "#1E2A47",
        lightHeader: "#2B3442",
        veryLightWhite: "#FEFEFE",
        lightBlue: "#4B6A9B",
        darkBlue: "#0079FF",
        grayishBlue: "#697C9A",
        error: "#F74646",
        buttonHover: "#60ABFF",
      },
    },
  },
  plugins: [],
};
