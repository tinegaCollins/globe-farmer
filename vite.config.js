
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
        bookmarks: resolve(__dirname,'/public/bookmarks.html')
      }
    }
  },
  server: {
    port: '8080'
  }
})

