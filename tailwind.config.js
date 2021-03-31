module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    conainer: {
      center: true,
    },
    extend: {
      colors: {
        "shop-main": "#333",
      },
    },
    cursor: {
      crosshair: "crosshair",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: true,
    content: [
      "./layout/*.liquid",
      "./templates/*.liquid",
      "./sections/*.liquid",
      "./snippets/*.liquid",
    ],
  },
};
