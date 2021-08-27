module.exports = {
  purge: {
    enabled: false,
    content: [
      './dist/*.html',
      './dist/*.js'
  ]
  },
  darkMode: 'media', // or 'media' or 'class'

  theme: {
    colors: {
      
    },

    fill: theme => theme('colors'),
    stroke: theme => theme('colors'),

    extend: {
      
    },

    fontFamily: {
      
     }
  },

  variants: {
    extend: {
      backgroundImage: ['dark'],
      backgroundOpacity: ['dark'],
      fill: ['dark'],
      stroke: ['dark'],
      boxShadow: ['dark'],
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    })
  ],
}
