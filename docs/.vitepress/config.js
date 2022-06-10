import { defineConfig } from "vitepress"
export default defineConfig({
  title: 'css',
  description: 'css学习',
  base: "/CSS/",
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    siteTitle: 'css',
    logo: '/favicon.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'fw的css学习历程',
        items: [
          { text: 'Github', link: 'https://github.com/Jack-Zhang-1314' }
        ]
      }
    ],
    sidebar: [
      {
        text: '欢迎学习',
        collapsable: false, // 不折叠
        items: [
          { text: "学前必读", link: "/" }
        ]
      },
      {
        text: 'css基础',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        items: [
          { text: "css基础", link: "/css/css" },
          { text: "css选择器", link: "/css/css选择器" },
          { text: "css属性值语法", link: "/css/css属性值语法" },
          { text: "css逻辑属性", link: "/css/css逻辑属性" },
          { text: "css变量及全局关键字", link: "/css/css变量及全局关键字" },
          { text: "css层叠性", link: "/css/层叠性" },
          { text: "流的破坏与保护", link: "/css/流的破坏与保护" },
        ]
      },
      {
        text: 'css布局',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        items: [
          { text: "分栏布局", link: "/css布局/分栏布局" },
          { text: "媒体查询", link: "/css布局/媒体查询" },
          { text: "图片等多媒体处理", link: "/css布局/图片等多媒体的处理" },
          { text: "css布局", link: "/css布局/css布局" },
          { text: "flex", link: "/css布局/flex" },
          { text: "grid", link: "/css布局/grid" },
          { text: "shapes", link: "/css布局/shapes" },
        ]
      },
      {
        text: 'css动画',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        items: [
          { text: "CSS动画", link: "/css动画/CSS动画" },
          { text: "渐变", link: "/css动画/渐变" },
          { text: "CSS动画2D~3D", link: "/css动画/CSS动画transform" },
          { text: "CSS过渡", link: "/css动画/CSS过渡" },
        ]
      },
      {
        text: '视觉效果',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        items: [
          { text: "用户体验", link: "/css视觉效果/用户体验" },
          { text: "图形处理", link: "/css视觉效果/图形处理" },
          { text: "视觉效果", link: "/css视觉效果/视觉效果" },
        ]
      },
      {
        text: 'css揭秘',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        items: [
          { text: "背景和边框", link: "/css揭秘/背景和边框" },
          { text: "形状", link: "/css揭秘/形状" },
          { text: "css字体", link: "/css揭秘/css字体" },
          { text: "视觉效果", link: "/css揭秘/视觉效果" },
        ]
      },
      {
        text: 'scss',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        items: [
          { text: "相关介绍", link: "/scss/相关介绍" },
          { text: "环境配置", link: "/scss/环境配置" },
          { text: "scss语法", link: "/scss/scss语法" },
        ]
      },
      {
        text: 'css技巧',
        collapsable: true,
        items: [
          { text: "HTML内置行为和应用", link: "/css技巧/HTML内置行为和应用" },
          { text: "居中", link: "/css技巧/居中" },
          { text: "用户行为", link: "/css技巧/用户行为" },
          { text: "layer", link: "/css技巧/layer" },
          { text: "文字换行", link: "/css技巧/文字换行" }
        ]
      }
    ]
  },
})