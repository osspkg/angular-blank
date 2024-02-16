import { fileURLToPath, URL } from 'node:url'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// const appRootFolder = fileURLToPath(new URL('./src/apps/', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    minify: true,
    copyPublicDir: true,
    cssCodeSplit: true,
    cssMinify: true,
    rollupOptions: {
      input: {
        app1: fileURLToPath(new URL('./src/apps/page1/index.html', import.meta.url)),
        app2: fileURLToPath(new URL('./src/apps/page2/index.html', import.meta.url))
      },
      output: {
        dir: 'dist',
        format: 'es',
        strict: true
      }
    }
  }
})
