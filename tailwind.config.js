module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './templates/**/*.html',
    './templates/**/*.twig',
  ],
  theme: {
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    extend: {
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
  plugins: []
};
