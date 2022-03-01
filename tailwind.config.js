const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        veryDarkBlue: {
          500: "hsl(215, 32%, 27%)",
          600: "hsl(216, 50%, 16%)",
          800: "hsl(217, 54%, 11%)",
        },
      },
    },
  },
  plugins: [],
};
