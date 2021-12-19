import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "vite-plugin-components";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Components({
      globalComponentsDeclaration: true,
      // @ts-ignore
      resolvers: IconsResolver({
        prefix: false,
        enabledCollections: ["heroicons-solid"],
      }),
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    }),
  ],
});
