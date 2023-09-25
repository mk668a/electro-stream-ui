import { defineConfig } from 'vite'
import ts from '@rollup/plugin-typescript'
import path from 'path'

const __dirname = path.resolve(path.dirname(''))

export default defineConfig({
  plugins: [
    ts({
      tsconfig: './tsconfig.json'
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'lighting-element',
      fileName: (format) => `index.${format}.js`
    }
  }
})
