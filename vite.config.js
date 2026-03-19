import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-animation': ['framer-motion', 'gsap'],
          'vendor-ui': ['@heroui/react', 'react-icons'],
          'vendor-forms': ['@emailjs/browser', 'react-phone-input-2'],
          'vendor-dom': ['react-toastify', 'react-scroll']
        }
      }
    },
    chunkSizeWarningLimit: 500,
  }
})
