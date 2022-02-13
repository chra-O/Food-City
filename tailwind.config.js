module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: ".60rem",
      },
      animation: {
        fade: 'fade 5s ease-in-out',
      },
      Keyframes: {
        fade: {
          '0%': {
            opacity: 0,
            left: '50%',
            transform: 'translatex(-50%) scale(0%)'
          },
          '5%': { opacity: 1, left: '50%', transform: 'translatex(-50%)'},
          '95%': { opacity: 1, left: '50%', transform: 'translatex(-50%)' },
          '100%': {
            opacity: 0,
            left: '50%',
            transform: 'translatex(-50%)scale(0)'
          },
        },
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
