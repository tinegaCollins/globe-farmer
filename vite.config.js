
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// const path = require("path");

// https://vitejs.dev/config/
// export default defineConfig({
  
//  
//     
//   },
  
//  
// })

module.exports = defineConfig({
  plugins: [vue()],
  extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        account: resolve(__dirname, '/account/account.html'),
        bookmarks: resolve(__dirname,'/bookmarks/bookmarks.html'),
        logins: resolve(__dirname,'/logins/logins.html'),
        messages: resolve(__dirname, '/messages/messages.html'),
        notifications: resolve(__dirname, '/notifications/notifications.html'),
        post: resolve(__dirname, 'post/post.html')
      }
    }
  },
  server: {
    port: '8080'
  }
})

