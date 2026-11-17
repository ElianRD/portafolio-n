import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
// base: en producción (build) el sitio vive bajo /portafolio-n/ (GitHub Pages,
// project site). En desarrollo se sirve desde la raíz.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/portafolio-n/" : "/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/sass/global.scss";`,
        silenceDeprecations: ["legacy-js-api"], // Puedes agregar tus variables globales aquí
      },
    },
  },
}));
