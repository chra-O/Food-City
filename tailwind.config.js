module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
