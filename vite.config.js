import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/frontend': {
        target: 'http://192.168.71.128:8080',
        changeOrigin: true
      }
    }
  }
})
