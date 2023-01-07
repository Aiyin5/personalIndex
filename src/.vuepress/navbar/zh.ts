import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "简历", icon: "discover", link: "/zh/demo/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "算法相关",
        icon: "edit",
        prefix: "algorithm",
        children: [
          { text: "图论整理", icon: "edit", link: "/1" },
          { text: "并查集", icon: "edit", link: "/2" },
          { text: "并查集", icon: "edit", link: "/3" },
          { text: "并查集", icon: "edit", link: "/4" },
        ],
      },
      {
        text: "个人体验",
        icon: "edit",
        prefix: "experience/",
        children: [
          {
            text: "艾因的菜单",
            icon: "edit",
            link: "1",
          },
          {
            text: "忧郁相关",
            icon: "edit",
            link: "2",
          },
        ],
      },
      {
        text: "项目相关",
        icon: "edit",
        prefix: "Project/",
        children: [
          {
            text: "风控决策引擎相关",
            icon: "edit",
            link: "1",
          },
          {
            text: "FreeBe相关",
            icon: "edit",
            link: "2",
          },
          {
            text: "个人主页及博客",
            icon: "edit",
            link: "2",
          },
        ],
      },
      { text: "樱桃", icon: "edit", link: "cherry" },
      { text: "火龙果", icon: "edit", link: "dragonfruit" },
    ],
  },
  { text: "关于", icon: "discover", link: "/about/About" },
]);
