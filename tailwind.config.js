/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#2a3139",
        header: "#252b33",
        primaryWhite: "#d9e3ef",
        primaryGreen: "#15af44",
        secondaryGreen: "#189541",
        white: "#ffffff",
        navTitle: "#6a7787",
        svg: "rgb(98, 110, 125)",
        filters: "#272d36",
        categories: "#1d242c",
      },
      height: {
        52: "52px",
        60: "60px",
        420: "420px",
        titleHeight: "17.5px",
      },
      backgroundImage: {
        "hero-main": "url('./assets/banner.png')",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(169px, 1fr))",
      },
      gridAutoRows: {
        169: "169px",
      },
      boxShadow: {
        custom: "0 0 10px #0009",
      },
      minHeight: {
        52: "52px",
        135: "135px",
      },
      spacing: {
        57: "57%",
      },
      width: {
        calc: "calc(100% - 40px)",
        18: "18px",
        31: "31px",
        60: "60px",
      },
      maxHeight: {
        460: "460px",
      },
      translate: {
        "3px": "3px",
      },
      fontSize: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
