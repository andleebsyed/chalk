module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        react: {
          DEFAULT: "#61dafb",
        },
        "dark-1": "#202124",
        "navitem-hover": "#e8eaed",
        "selected-navitem-light": "#feefc3",
        "selected-navitem-dark": "#41331c",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [],
};
