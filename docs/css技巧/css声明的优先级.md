# css声明的优先级

> 继承的CSS优先级一定位于最底层.**级联>继承**

## 继承

* 如果一个css元素继承多个元素,则DOM层级越深的元素所继承的css优先级越高

```html
<html>
  <body>
    <p>文字颜色</p>
  </body>
</html>
```

```css
:root{ color: red;}
body{ color:green;}/* 最终显示绿色 */
```

## 级联

>css中一层一层的优先级规则可以看成是级联

* 级联层中的优先级定义
   1. `transition`:过渡声明(<span style="color: red;">实际渲染就是普通的css属性</span>)
   2. 设置了`!import`的浏览器内置样式
   3. 设置了`!import`的用户设置的样式
   4. `@layer`规则中设置的包含`!import`的样式
   5. 开发者平常设置的包含`!import`的样式
   6. `animation`动画声明(<span style="color:red">除了FireFox,其他均大于!import</span>)
   7. 前端开发者设置的css样式(**`<style>`**)
   8. `@layer`规则中的样式
   9. 用户在浏览器中设置的样式(**用户设置的样式,如安装的某个浏览器插件,`injected stylesheet`**)
   10. 浏览器自身内置的样式(**用户代理样式,指浏览器默认的对一些HTML元素进行的样式设置`user agent stylesheet`**)

>`!import`

1. **层级越阶**:级联层级提升
2. **逆向越阶**:原本级联水平高的css声明应用了`!import`后,其优先级反而低;而原本级联水平低的css声明应用了`!import`后,css计算的优先级反而更高

>优先级

* **内联** > **ID选择器** > **类,伪类,属性选择器** > **标签选择器** > **通配符,功能伪类(:not())**
