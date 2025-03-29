import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true, // Ensures changes are picked up
    },
    hmr: false, // ❌ Disables WebSocket HMR in production
  }
});
