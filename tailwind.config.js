module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "breakpoint-acc": "900px",
      },
      colors: {
        react: {
          DEFAULT: "#61dafb",
        },
        black: "#1F2937",
        "dark-1": "#202124",
        "navitem-hover": "#e8eaed",
        "selected-navitem-light": "#FECACA",
        "selected-navitem-dark": "#41331c",
        "yellow-main": "#fbbd06",
        blue: "#1d4ed8",
        "shadow-color": "#6b7280",
        white: "#f6f6f6",
        "palette-red": "#f28b82",
        "palette-purple": "#d7aefb",
        "palette-yellow": "#fbbc04",
        "palette-blue": "#aecbfa",
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
