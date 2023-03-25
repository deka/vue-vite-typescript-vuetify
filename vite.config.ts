import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import vuetify from "vite-plugin-vuetify";
import {resolve} from "path";
import Components from 'unplugin-vue-components/vite'
import {
  Vuetify3Resolver
} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({resolvers: [Vuetify3Resolver()]}),
    vue(),
    eslintPlugin(),
    vuetify({
      autoImport: true,
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
