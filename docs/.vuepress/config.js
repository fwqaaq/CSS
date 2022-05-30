module.exports = {
  title: 'css',
  description: 'css学习',
  base: "/CSS/",
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
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
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "学前必读", path: "/" }
        ]
      },
      {
        title: 'css基础',   // 必要的
        path: '/css/css',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          { title: "css基础", path: "/css/css" },
          { title: "css选择器", path: "/css/css选择器" },
          { title: "css属性值语法", path: "/css/css属性值语法" },
          { title: "css逻辑属性", path: "/css/css逻辑属性" },
          { title: "css变量及全局关键字", path: "/css/css变量及全局关键字" },
          { title: "css层叠性", path: "/css/层叠性" },
          { title: "流的破坏与保护", path: "/css/流的破坏与保护" },
        ]
      },
      {
        title: 'css布局',   // 必要的
        path: '/css布局/grid',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          { title: "分栏布局", path: "/css布局/分栏布局" },
          { title: "媒体查询", path: "/css布局/媒体查询" },
          { title: "图片等多媒体处理", path: "/css布局/图片等多媒体的处理" },
          { title: "css布局", path: "/css布局/css布局" },
          { title: "flex", path: "/css布局/flex" },
          { title: "grid", path: "/css布局/grid" },
          { title: "shapes", path: "/css布局/shapes" },
        ]
      },
      {
        title: 'css动画',   // 必要的
        path: '/css动画/CSS动画',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          { title: "CSS动画", path: "/css动画/CSS动画" },
          { title: "渐变", path: "/css动画/渐变" },
          { title: "CSS动画2D~3D", path: "/css动画/CSS动画2D-3D" },
          { title: "CSS过渡", path: "/css动画/CSS过渡" },
        ]
      },
      {
        title: '视觉效果',   // 必要的
        path: '/css视觉效果/视觉效果',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          { title: "用户体验", path: "/css视觉效果/用户体验" },
          { title: "图形处理", path: "/css视觉效果/图形处理" },
          { title: "视觉效果", path: "/css视觉效果/视觉效果" },
        ]
      },
      {
        title: 'css揭秘',   // 必要的
        path: '/css揭秘/背景和边框',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          { title: "背景和边框", path: "/css揭秘/背景和边框" },
          { title: "形状", path: "/css揭秘/形状" },
          { title: "css字体", path: "/css揭秘/css字体" },
          { title: "视觉效果", path: "/css揭秘/视觉效果" },
        ]
      },
      {
        title: 'scss',   // 必要的
        path: '/scss/相关介绍',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          { title: "相关介绍", path: "/scss/相关介绍" },
          { title: "环境配置", path: "/scss/环境配置" },
          { title: "scss语法", path: "/scss/scss语法" },
        ]
      },
      {
        title: 'css技巧',
        path: '/css技巧/HTML内置行为和应用',
        collapsable: true,
        children: [
          { title: "HTML内置行为和应用", path: "/css技巧/HTML内置行为和应用" },
          { title: "居中", path: "/css技巧/居中" },
          { title: "用户行为", path: "/css技巧/用户行为" },
          { title: "layer", path: "/css技巧/layer" },
        ]
      }
    ]
  },

}