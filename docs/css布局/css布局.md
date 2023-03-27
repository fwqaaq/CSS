# css布局

## 布局

> 双飞翼布局

* 双飞翼布局左中右三列布局,渲染顺序中间列书写在前保证提前渲染,左右两列定宽.中间列自适应剩余宽度

* 双飞翼布局与圣杯布局的不同之处,圣杯布局的的左中右三列容器,中间middle多了一个子容器存在,通过控制 middle 的子容器的 margin 或者 padding 空出左右两列的宽度。

1. 双飞翼布局的关键是通过`margin-left`属性将左右两列放置到准确的位置,通过控制`middle`的子容器的margin或者padding空出左右两列的宽度
2. 双飞翼布局的关键点父元素不需要设置padding
3. 并且`margin-left`取值为百分比是,是一起父元素的宽度为基准的

> 圣杯布局

* 圣杯布局左中右三列布局,渲染顺序中间列书写在前保证提前渲染,左右两列定宽,中间列自适应剩余宽度。

* 圣杯布局与双飞翼布局的不同之处,圣杯布局的的左中右三列容器没有多余子容器存在,通过控制父元素的 padding 空出左右两列的宽度。

1. 圣杯布局的关键点是通过 margin-left 与 left 属性将左右两列放置到准确的位置
2. 圣杯布局的关键点父元素需要设置 padding
3. 圣杯布局的关键点 margin-left 取值为百分比时,是以其父元素的宽度为基准的

### BFC布局

>css中格式化上下文的内容

* **Block formatting context(BFC)**--块级格式化上下文
* **Inline formatting context(IFC)**--内联格式化上下文
* **Crid formatting context(GFC)**--网格布局格式化上下文
* **Flex formatting context(FFC)**--自适应格式化上下文

#### BFC渲染规则

1. BFC垂直方向上的举例由margin决定.同一个BFC的两个相邻的Box的margin边距重叠
2. BFC的区域不会与浮动元素的`float box`重叠
3. BFC是一个独立的容器,外面的元素不会影响里面的元素
4. 计算BFC高度的时候浮动元素也会参与计算

#### 触发BFC

| 元素或属性   | 属性值                                                 |
| ------------ | ------------------------------------------------------ |
| 根元素       | \<html>                                                |
| 浮动元素     | float不能是none                                        |
| 绝对定位元素 | 元素的`position`为`absolute`或`fixed`                  |
| 行内块元素   | 元素的`display`为`inline-block`                        |
| overflow     | 计算值不为`visible`的块元素                            |
| dispaly      | 属性为`flow-root`:建立新的块级格式化上下文的块级快容器 |
| 弹性元素     | display为`flex`或者`inline-flex`                       |
| 网格元素     | display为`grid`或者`inline-grid`                       |
| contain      | 值为 `layout`,`content` 或 `paint` 的元素              |

> contain属性允许开发者声明当前元素和它的内容尽可能的独立于DOM树的其他部分.这使得浏览器在重新计算布局、样式、绘图、大小或这四项的组合时,<span style="color:red">只影响到有限的DOM区域</span>,而不是整个页面,可以有效改善性能.
>
> >这个属性在包含大量独立组件的页面非常实用,它可以防止某个小部件的 CSS 规则改变对页面上的其他东西造成影响.

* layout:表示元素外部无法影响元素内部的布局,反之亦然.
* content:等价于`contain:layout paint`
* paint:表示这个元素的子孙节点不会在它边缘外显示.如果一个元素在视窗外或因其他原因导致不可见,则同样保证它的子孙节点不会被显示.

#### BFC的应用

##### 浮动元素使父元素高度塌陷

* 原理:计算BFC的高度时,浮动子元素也会参与计算

```html
<style>
  .container {
    border: 10px solid red;
  }
  .pan {
    float: left;
    background-color: lightblue;
    height: 100px;
    width: 100px;
  }
</style>

<div class="container">
  <div class="pan"></div>
</div>
```

> 解决:给父元素开启BFC

```css
.container {
  border: 10px solid red;
  overflow:hidden;
}
```

#### 非浮动元素被浮动元素覆盖

* 原理:非BFC的区域会与float box重叠

```html
<style>
  .pan {
    float: left;
    background-color: lightblue;
    height: 100px;
    width: 100px;
    margin: 10px;
  }
  .fl {
    background-color: blue;
    height: 100px;
    width: 100px;
  }
</style>
<div class="pan"></div>
<div class="fl"></div>
```

> 解决:给非浮动元素开启BFC

```css
.fl {
  background-color: blue;
  height: 100px;
  width: 100px;
  overflow: hidden;
}
```

### 外边距垂直方向重合的问题

* 原理:属于同一个BFC的两个相邻的Box的margin会发生重叠

```html
<style>
  .box1 {
    background-color: brown;
    width: 100px;
    height: 100px;
    margin-bottom: 100px;
  }
  .box3 {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin-top: 100px;
  }
</style>
<div class="box1">chifan</div>
<div class="box2">
  <div class="box3"></div>
</div>
```

>方法:给上box或者下box任意一个包裹新的box并开启BFC

```css
.box2 {
  overflow: hidden;
}
```
