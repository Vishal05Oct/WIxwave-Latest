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
          // Core dependencies needed early
          'vendor-react': ['react', 'react-dom'],
          // Animation libraries - only loaded on pages that use them
          'vendor-framer': ['framer-motion'],
          'vendor-gsap': ['gsap'],
          // UI components
          'vendor-ui': ['@heroui/react', 'react-icons', 'lucide-react'],
          // Form handling
          'vendor-forms': ['@emailjs/browser', 'react-phone-input-2'],
          // DOM utilities
          'vendor-dom': ['react-toastify', 'react-scroll'],
          // 3D and advanced animations (lazy load)
          'vendor-3d': ['three', '@react-three/fiber', '@react-three/drei'],
          // Smooth scrolling (lazy load)
          'vendor-scroll': ['lenis'],
          // Additional utilities
          'vendor-utils': ['aos', 'simplex-noise', 'react-confetti-explosion'],
        }
      }
    },
    chunkSizeWarningLimit: 500,
    // Split CSS to reduce main bundle blocking time
    cssCodeSplit: true,
    // Reduce initial CSS payload
    minify: 'terser',
    // Optimize dependency loading
    target: 'esnext',
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    // Pre-bundle critical dependencies
    include: ['react', 'react-dom', 'react-router-dom'],
    // Exclude heavy libraries that can be lazy loaded
    exclude: ['three', 'lenis', 'aos', 'gsap'],
  }
})
