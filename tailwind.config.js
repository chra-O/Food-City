module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'blashA':'rgba(0,0,0,0.3)'
      },
      fontSize: {
        xxs: ".60rem",
      },
    },
  },

  plugins: [
    require("tailwind-scroll-behavior")(),
    require("tailwind-scrollbar-hide"),
  ],
};
