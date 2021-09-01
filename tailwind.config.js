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
    require('daisyui'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    })
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
// 'mytheme': {
//   'primary': '#457B9D',
//   'primary-focus': '#31607d',
//   'primary-content': '#ffffff',
//   'secondary': '#fd9f68',
//   'secondary-focus': '#d78c60',
//   'secondary-content': '#ffffff',
//   'accent': '#e63946',
//   'accent-focus': '#b7343f',
//   'accent-content': '#ffffff',
//   'neutral': '#1D3557',
//   'neutral-focus': '#13253f',
//   'neutral-content': '#ffffff',
//   'base-100': '#ffffff',
//   'base-200': '#f9fafb',
//   'base-300': '#d1d5e0',
//   'base-content': '#1f2937',
//   'info': '#2094f3',
//   'success': '#89d294',
//   'warning': '#ff9900',
//   'error': '#ff5724',
// },