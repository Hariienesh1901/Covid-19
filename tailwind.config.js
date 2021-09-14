module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#A63737',
        'secondary': '#A62648',
        'tertiary': '#8C0B47',
        'quaternary': '#8C034E',
        'quinary': '#8C6161',
      },
      backgroundImage: {
        'hero-image': 'url("/Assets/Images/hero_image.jpg")',
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
        lowerRoman: 'lower-roman',
        arrow: 'arrow',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
