import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vite-plugin-slogan',
      formats: ['es', 'cjs'],
      fileName: 'index',

    },
    minify: false,
    target: 'esnext',
  },
  plugins: [dts()],
})
