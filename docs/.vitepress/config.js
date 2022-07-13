import { defineConfig } from "vitepress"
import * as fs from "fs"
import { fileURLToPath } from "url"

function recurReadFile() {
  const res = []
  const dir = fs.readdirSync("./docs")
  dir.forEach(curDir => {
    curDir = "../" + curDir
    const path = fileURLToPath(new URL(curDir, import.meta.url))
    try {
      const directory = fs.statSync(path)
      if (directory.isDirectory() && !curDir.includes(".vitepress")) {
        const mdDir = { text: curDir.split("/")[1], collapsable: true, items: [] }
        res.push(mdDir)
        fs.readdirSync(path).forEach(file => {
          if (/.*\.md/.test(file)) {
            const spliceFileName = file.replace(/(\.md)/g, "")
            mdDir.items.push({ text: spliceFileName, link: `/${curDir.split("/")[1]}/${spliceFileName}` })
          }
        })
      }
    } catch (e) {
      console.log(e)
    }
  })
  return res
}

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
      ...recurReadFile()
    ]
  },
})