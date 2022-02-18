import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import vuetify from "@vuetify/vite-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    vuetify({
      autoImport: true,
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
