import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/quotation-form/",
  plugins: [react()],
  css: {
    devSourcemap: true, // CSS 소스맵 활성화 (Vite 3+)
  },
  build: {
    sourcemap: true, // 빌드 시 JS 소스맵 생성
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@style": path.resolve(__dirname, "./src/style"),
    },
  },
});
