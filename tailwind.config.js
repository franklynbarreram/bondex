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
    extend: {
      backgroundImage: {
        "header-talent": "url('/images/bg-talent.png')",
      },
    },
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
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      iphone: "375px",
      // => @media (min-width: 375px) { ... }

      iphonePro: "414px",
      // => @media (min-width: 414px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "1.5xl": "1440px",
      // => @media (min-width: 1440px) { ... }

      "2xl": "1800px",
      // => @media (min-width: 1800px) { ... }
    },
  },
  plugins: [],
};
