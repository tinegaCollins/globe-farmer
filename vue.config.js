// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  pages: {
  // Configure the home page first 
  index: {
  entry: './src/main.js',
  template: './public/index.html',
  title: 'home'
  },
  // Then configure each sub page ： After logging in, the course schedule query page 
  logins: {
  entry: './src/pages/logins/logins.js',
  template: './public/logins.html',
  title: 'logins'
  }
  }
  }