import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/frontend': {
        target: 'http://192.168.3.56:8080',
        changeOrigin: true
      }
    }
  }
})
