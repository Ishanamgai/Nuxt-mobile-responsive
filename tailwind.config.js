module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#E6FFFA',
        'second': '#81E6D9',
        'gradient': 'transparent linear-gradient(95deg, #319795 0%, #3182CE 100%) 0% 0% no-repeat padding-box'
      },
      textColor: {
        'primary': '#718096',
        'second': '#319795',
        'third': '#4A5568'
      },
      margin: {
        '85px': '85px',
      },
      boxShadow: {
        'top': '0px -1px 3px #00000033'
      },
      fontFamily: {
        'lato': 'Lato'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
