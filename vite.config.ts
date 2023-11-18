import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          injectScript:
            '<script src="//unpkg.com/socket.io-client@1.7.4/dist/socket.io.js"></script>',
        },
      },
    }),
  ],
})
