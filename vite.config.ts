import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "./", // ✅ ADICIONE ESTA LINHA
  plugins: [react(), tailwindcss()],
  root: path.resolve(__dirname, "client"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "client", "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: true,
  },
});
