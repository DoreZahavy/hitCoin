import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/hitCoin",
  plugins: [react()],
  build: {
    outDir: '../backend/public',
    emptyOutDir: true
  }
})
