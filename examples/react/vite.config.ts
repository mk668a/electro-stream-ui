import react from '@vitejs/plugin-react'
import { UserConfig, defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()]
} as UserConfig)
