import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/90b366a9-c62d-4dcd-81de-48d33cd9cc1e/preview',
  plugins: [react()],
  css: {
    // Ensure CSS is processed and injected correctly
    devSourcemap: true,
  },
  server: {
    port: 5237,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5237,
    },
  },
})
