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
        "selected-navitem-light": "#FECACA",
        "selected-navitem-dark": "#41331c",
        "yellow-main": "#fbbd06",
        blue: "#1d4ed8",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
    screens: {
      "breakpoint-acc": "900px",
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [],
};
