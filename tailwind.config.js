/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        500: "var(--color-primary-500)",
      },
      primaryOpacity: "var(--color-primary-opacity)",
      secondary: "var(--color-secondary)",
      overlay: "var(--color-overlay)",
      alert: {
        success: "var(--color-alert-success)",
        error: "var(--color-alert-error)",
      },
      facebook: "var(--color-facebook)",

      gray: {
        200: "var(--color-gray-200)",
        300: "var(--color-gray-300)",
        400: "var(--color-gray-400)",
        600: "var(--color-gray-600)",
      },
      blue: {
        900: "var(--color-blue-900)",
      },
      white: "var(--color-white)",
      transparent: "rgba(0, 0, 0, 0)",
      "transparent-color": {
        gray: {
          200: "var(--transparent-gray-200)",
          800: "var(--transparent-gray-800)",
        },
      },
    },
  },
  plugins: [],
};
