import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        messages: resolve(__dirname, '/messages.html'),
        account: resolve(__dirname, '/account.html'),
        product: resolve(__dirname, '/product.html')
      }
    }
  }
})
