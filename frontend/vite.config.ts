import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import stylex from 'vite-plugin-stylex'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), stylex()],
})
