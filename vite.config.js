import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
    server: {
        open: './src/index.html',
        host: true,
        port: "8080"
    },
})
