import { VitePluginConfig } from "unocss/vite";
import {
  presetAttributify,
  presetWind,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetTypography,
} from "unocss";

const options: VitePluginConfig = {
  shortcuts: {
    btn: "py-2 px-4 rounded hover:bg-red-100 active:bg-green-100",
    "btn-green": "text-white bg-green-500 hover:bg-green-700",
  },
  rules: [
    /* custom rules */
  ],
  theme: {},
  /* 官方内置：https://unocss.dev/presets/ 
     社区维护：
  */
  presets: [
    /* 属性化 */
    presetAttributify(),
    /* 兼容 windicss/tailwind 语法 */
    presetWind({}),
    /* 内置 Uno 语法 */
    presetUno(),
    /* 使用 Iconify 提供的纯 CSS 图标 */
    presetIcons(),
    /* 支持 Google 字体 */
    presetWebFonts(),
    /* 支持排版内置 */
    presetTypography(),
  ],
};

export default options;
