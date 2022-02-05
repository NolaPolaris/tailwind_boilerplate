module.exports = {
  content: ['./src/**/*.html', './src/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Rubik Mono One', 'sans-serif'],
        body: ['Roboto Mono', 'monospace']
      },
      
      boxShadow: {
        default: '10px 10px 0 rgba(0, 0, 0, 0.3)',
      },

      colors:{
          yellow:{
            default:'',
            50:'#fbff0078'
          },
          blue:{},
          pink:{},
          green:{},
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],  
}
