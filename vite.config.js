import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Create-Deploy-Vite-React-App/',
  plugins: [react()],
})