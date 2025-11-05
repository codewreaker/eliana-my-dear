import { defineConfig } from 'vite'
import { nitro } from "nitro/vite";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), nitro()],
  nitro: {
    
  },
})
