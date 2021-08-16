module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgGray: "#484D57",
        paleGray: "#2D2F36",
        paleGray2: "#3B3E46",
        bgCardStrips: "#3F414B",
        yellow: "#E9C249",
        bgPanel: "#1F1F1F",
        black: "#1C1D1F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
