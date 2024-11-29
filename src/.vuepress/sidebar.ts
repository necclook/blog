import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // "", // 这里是显示首页的
    {
      text: "注意实现",
      icon: "laptop-code",
      prefix: "编码/",
      children: "structure",
    },
    {
      text: "Linux",
      icon: "laptop-code",
      prefix: "Linux/",
      children: "structure",
    },
    // {
    //   text: "待添加",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // "slides",
  ],
});