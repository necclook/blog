import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  public: "`${sourceDir}/.vuepress/public`",
  lang: "zh-CN",
  title: "见面",
  description: "个人记录",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
