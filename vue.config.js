const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
    pages: {
  // Configure the home page first 
      index: {
      entry: './src/main.js',
      template: './public/index.html',
      title: 'home'
    },
  // Then configure each sub page ： After logging in, the course schedule query page 
    bookmarks: {
      entry: './src/pages/bookmarks/book-marks.js',
      template: './public/bookmarks.html',
      title: 'bookmarks'
    },
    logins: {
      entry: './src/pages/logins/logins.js',
      template: './public/logins.html',
      title: 'user details'
    },
    messages: {
      entry: './src/pages/messages/messages.js',
      template: './public/messages.html',
      title: 'messages'
    },
    notes: {
      entry: './src/pages/notes/notes.js',
      template: './public/notes.html',
      title: 'notes'
    },
    account : {
      entry : './src/pages/account/main.js',
      template: './public/account.html',
      title: 'account'
    }
  }
}