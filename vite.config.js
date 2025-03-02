import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
       modules:{
        localsConvention: "camelCase",

       }
  }
  //esto sirve para que no se sobrepongan los estilos
  //cuando se importan los css de los componentes
  
})
