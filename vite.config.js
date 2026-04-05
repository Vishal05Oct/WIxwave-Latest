import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 500,
    // Split CSS to reduce main bundle blocking time
    cssCodeSplit: true,
    // Use esbuild for minification (built-in, faster than terser)
    minify: 'esbuild',
    // Optimize dependency loading
    target: 'esnext',
    // Enable source maps for debugging but compress them
    sourcemap: false,
    // Aggressive chunk splitting for better caching
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
          // Smooth scrolling (lazy load)
          'vendor-scroll': ['lenis'],
          // Additional utilities
          'vendor-utils': ['aos', 'simplex-noise', 'react-confetti-explosion'],
        },
        // Optimize chunk file names for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    // Pre-bundle critical dependencies
    include: ['react', 'react-dom', 'react-router-dom'],
    // Exclude heavy libraries that can be lazy loaded
    exclude: ['lenis', 'aos', 'gsap'], // Removed 'three' since not preloading
  }
})
