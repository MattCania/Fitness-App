import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 1173,
    proxy: {
      '/api': {
        target: 'http://localhost:1000',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})