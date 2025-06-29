import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/book/',
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'data': path.resolve(__dirname, 'src/data'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'img': path.resolve(__dirname, 'src/img'),
      'pdf': path.resolve(__dirname, 'src/pdf'),
      'router': path.resolve(__dirname, 'src/router'),
      'store': path.resolve(__dirname, 'src/store'),
      'style': path.resolve(__dirname, 'src/style'),
      'utils': path.resolve(__dirname, 'src/utils'),
    }
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
  build: {
    outDir: 'docs',
    assetsInlineLimit: 1048576, // 1MB
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  publicDir: 'public',
}) 