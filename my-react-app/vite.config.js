import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api' : "https://script.google.com/macros/s/AKfycbzgI9OXtNb5Uf8IZzaXD14dNUesQDK5YJWxcFIbQF5WgPE9HKYx_fU4C2U4tw58G10/exec"

  //   }
  // },
  plugins: [react()],
})
