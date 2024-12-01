import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // "", // 这里是显示首页的
    {
      text: "瞎说",
      icon: "laptop-code",
      prefix: "瞎说/",
      children: "structure",
    },
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
    {
      text: "其它软件集合",
      icon: "laptop-code",
      prefix: "日常使用软件/",
      children: "structure",
    },
    // {
    //   text: "待添加",
    //   icon: "book",
    //   prefix: "posts/",/logo.svg
    //   children: "structure",
    // },
    // "intro",
    // "slides",
  ],
});
