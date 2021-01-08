module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.js','./public/index.html'],
  },
  theme: {
    extend: {
      colors:{
        dark:'#2c3e50',
        main:'#3498db'
      },
      fontFamily:{
        display: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      width:{
        content:'max-content',
        90:'90%',
      },
      height:{
        card:'26rem'
      }

    },
  },
  variants: {},
  plugins: [],
}
