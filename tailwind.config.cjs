/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      lineHeight: {
        140: "1.4",
      },
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
      },
      colors: {
        product: {
          50: "#F6F7FD",
          100: "#EDEFFB",
          200: "#D7D8F8",
          300: "#C1C2F4",
          400: "#9698ED",
          500: "#8284FA",
          600: "#5E60CE",
          700: "#4EA8DE",
          800: "#1E6F9F",
          purple: "#8284FA",
          "purple-dark": "#5E60CE",
          blue: "#4EA8DE",
          "blue-dark": "#1E6F9F",
          danger: "#E25858",
        },
        base: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
          600: "#1A1A1A",
          700: "#0D0D0D",
        },
        gray: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
          600: "#1A1A1A",
          700: "#0D0D0D",
        },
      },
    },
  },
  plugins: [],
};
