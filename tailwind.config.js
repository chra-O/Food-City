module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}" ,
  "./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {
      colors: {
        blashA: "rgba(0,0,0,0.3)",
      },
      fontSize: {
        xxs: ".60rem",
      },
    },
  },

  plugins: [
    require("tailwind-scroll-behavior")(),
    require("tailwind-scrollbar-hide"),
    // require("daisyui")
    // require('flowbite/plugin'),
  ],
 
};
