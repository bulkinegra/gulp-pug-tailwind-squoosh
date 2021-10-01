module.exports = {
  purge: {
    enabled: false,
    content: [
      './build/*.html',
      './build/*.js'
    ],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
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
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes:[
      'light', // default
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula'
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}