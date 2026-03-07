import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path' // 1. Añadimos esto para manejar rutas

export default defineConfig({
  logLevel: 'error',
  plugins: [react()],
  resolve: {
    alias: {
      // 2. Aquí definimos que la @ apunte a tu carpeta "src"
      '@': path.resolve(__dirname, './src'),
    },
  },
})