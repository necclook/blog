import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "注意实现",
      icon: "laptop-code",
      prefix: "takecare/",
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
