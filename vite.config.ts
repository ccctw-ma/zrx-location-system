import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import process from "process";
import dns from 'dns'

dns.setDefaultResultOrder('verbatim');

function pathResolve(dir: string): string {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: 3000,
    open: true,
    https: false
  },
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  plugins: [react()]
})
