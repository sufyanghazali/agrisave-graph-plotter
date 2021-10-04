module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        awGreen: '#78bf42',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
