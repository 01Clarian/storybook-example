import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://01clarian.github.io/storybook-example",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        hoistTransitiveImports: true,
      },
    },
  },
});