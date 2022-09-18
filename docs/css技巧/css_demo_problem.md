# problem

> 收录一些不常知的问题，以及新的特性

## css 图片无法加载

>图片无法加载的最佳实践（显示 alt 中的文字，并加载无法显示图片的图像）

* img 元素的特性：如果正常加载，before 和 after 伪元素不会生效，如果加载失败，它们就会生效

```html
<img src="a.png" alt="css 真是太难了">
```

```css
img{
  display: inline block;
  transform: scale(1);
}

img::before{
  content:"";
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
  /* 如果无法加载显示的图片 */
  background: #f5f5f5 url(break.svg) no-repeat center / 50% 50%;
  color: transparent;
}

img::after{
  content: attr(alt);
  position: absolute;
  left:0;bottom:0;
  width:100%;
  line-height: 2;
  background-color: rgba(0,0,0,0.5);
  color: white;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## display 双值语法

> 在之前使用 display 单值语法时，会给我们造成很多的困惑，我们并不知道该值对外的表现，只知道它对内部元素的行为

| Single value | New value        |
| ------------ | ---------------- |
| block        | block flow       |
| flow-root    | block flow-root  |
| inline       | inline flow      |
| inline-block | inline flow-root |
| flex         | block flex       |
| inline-flex  | inline flex      |
| grid         | block grid       |
| inline-grid  | inline grid      |

* 双值语法的第一个值是**元素对外部的表现**，第二个值是**元素对内部的表现**
