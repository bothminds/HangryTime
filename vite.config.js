import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: "3000",
    cors: true,
    proxy: {
      "/api": {
        target: "https://maps.googleapis.com/maps",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/maps": {
        target: "http:/maps.googleapis.com",
        changeOrigin: true,
        secure: true,
        // rewrite: (path) => path.replace(/^\/maps/, ""),
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
