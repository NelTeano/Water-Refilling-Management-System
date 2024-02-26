import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://hydromaze.azurewebsites.net/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Alias '@' to '/src' directory
    }
  },
  build: {
    outDir: '../public', // Output directory for production build relative to server folder
    emptyOutDir: true, // Clear outDir before building
    sourcemap: false, // Disable sourcemaps for production
    minify: true, // Minify code
    target: 'esnext', // Output modern JavaScript
    commonjsOptions: {
      ignoreDynamicRequires: false
    }
  }
});
