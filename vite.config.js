import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Disable source maps for React plugin to avoid errors
      jsxRuntime: 'automatic'
    })
  ],
  // Allow serving files from outside the project root (for source file access)
  server: {
    fs: {
      allow: ['..']
    }
  },
  // Build configuration
  build: {
    sourcemap: false // Disable source maps in production build
  },
  // Suppress source map errors - disable esbuild source maps
  esbuild: {
    sourcemap: false
  },
  // Suppress console warnings about source maps
  logLevel: 'warn'
})
