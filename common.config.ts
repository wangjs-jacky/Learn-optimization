import { defineConfig } from "vite";
import pluginUnocss from "unocss/vite";
import react from "@vitejs/plugin-react";
import unocssOptions from "./unocssOptions";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    /* 集成 unocss */
    pluginUnocss(unocssOptions),
    /* 支持 react 语法 */
    react(),
  ],
});
