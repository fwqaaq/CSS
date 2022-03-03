---
title: css变量自定义
date: 2022-02-06 16:42:37
author: Jack-zhang
categories: CSS
tags:
   - CSS
summary: css自定义变量
---

## 使用css自定义属性

> 使用css自定义属性,是由css作者自定义的,他包含的值可以在整个`document`中重复使用

1. 使用自定义属性在某个地方存储一个值,然后在其他许多地方引用它
2. 更好的语义化标识
3. 自定义属性受级联的约束,并从其父级继承其值(<span style="color:red">自定义属性必须要定义在父级以上,才可以在子级中使用</span>)

### 基础语法

>* 声明一个自定义属性,属性名需要以两个减号（--）开始,属性值则可以是任何有效的CSS值
>* 通常定义在根伪类`:root`下,这样就可以在HTML的任何地方访问到了

```css
:root {
  --main-bg-color: black;
}
```

* 使用一个局部变量时用`var()`函数包裹以表示一个合法的属性值可以访问到其值

```css
body {
  background-color: var(--main-bg-color);
}
```

> 设置属性备用值

```css
.two {
  color: var(--my-var, red);
}
```

* 如果`--my-var`没有定义的化,可以直接使用`red`作为备用值

> 使用`fallback`,然而这可能导致性能问题(尽量避免)

```css
.three {
  background-color: var(--my-var, var(--my-background, pink)); 
}
```

### 使用JavaScript

>在js中获取或者修改css变量喝操作普通css属性是一样的

```js
let box = document.querySelector('.box')
box.style.setProperty('--bg-color', 'red')
console.log(getComputedStyle(box).getPropertyValue('--bg-color'))//red
```

* 如果不是自定义属性可以直接读取或者修改

```js
box.style.width = 300px
getComputedStyle(box).width
```

## 全局关键字

>css中`inherit`,`initial`,`unset`,`revert`是全局关键字属性,也就是css可以使用这几个关键字作为属性值

### inherit(继承)

>inherit是继承的意思,是全局关键字中最使用的一个

* 可以使用`inherit`关键字重置输入框的内置字体,使用父元素的内置字体

```css
input,textarea{
  font-family:inherit;
}
```

* 像子元素设置`height:inherit`实现继承高度.`background-image:inherit`实现背景图像的继承

### initial(初始值)

>initial可以将css属性的计算值还原成css语法规定的初始值

```html
<body style="color: red;">
  这不对劲
  <div style="color: initial;">你好啊</div>
</body>
```

* initial适合用在需要重置某些css样式的场景,但又不记得初始值
* 注意:initial关键字并不是浏览器设置的元素的初始值(恢复li的小圆点`list-style-type`会失效)

### unset

> `unset`是不固定值关键字

* 如果当前使用的css属性具有继承性,例如color属性,则等同于使用`inherit`关键字
* 如果当前使用的css属性没有继承性,如`background-color`,则等同于使用`initial`关键字

* <span style="color:red">当然这个属性只有配合使用all属性才有意义</span>
* 当然,如果完全没有用unset的理由.继承(inherit)或者使用初始值(initial)

```css
input{
  all:unset;
}
```

### revert

> `revert`关键字可以让当前元素的样式还原成浏览器内置的样式

```css
ol{
  padding:revert;
  list-style-type:revert;
}
```

* 其中每一个li都会呈现数字效果(当然,没有必要做这种样式重置的工作)

### all

>all属性可以重置除`unicode-bidi`,`direction`以及css自定义属性外的所有css属性

* 语法:`all: initial | inherit | unset | revert;`

```css
input{
  all:unset;
}
```

* 该段代码表示input中所欲css属性都会使用`inherit`关键字作为属性值
* `all:inherit`和`all:initial`没有任何语法价值
* `all:unset`可以是任意一个元素表现和<span>元素一样.
* `all:revert`可以让元素恢复成浏览器默认的样式

## @supports

>@supports可以用来检测当前浏览器是否支持某一个css新属性

```css
@supports(display: flex){
  .item{flex:1;}
}
```

* 以上代码的意思是:如果浏览器支持`display:flex`,则匹配`.item`类型的元素就设置为`flex:1`

>并且@supports还支持使用操作符判断,这些操作符是`not`,`and`和`or`.

```css
/* 支持弹性布局 */
@supports (display:flex){}
/* 不支持弹性布局 */
@supports not (display:flex){}
/* 同时支持弹性布局和网格布局 */
@supports(display:flex) and (display:grid){}
/* 支持弹性布局或者网格布局 */
@supports(display:flex) or (display:grid){}
```

* 并且可以使用连续多个以上的声明

```css
@supports(display:flex) or (display:grid) or (gap:0){}
```

* 可以使用递归的形式.把原来@supports规则的复杂条件判断就是把合法的逻辑语句放在括号里不断嵌套

```css
/* 支持flex布局,不支持grid布局的语法 */
@supports(display: flex) and (not (display: grid)){}
```

>javascript中检测浏览器是否支持某个CSS属性

* `CSS.supports(propertyName, value);`
  * **propertyName**:包含要检查的 CSS 属性的名称的 DOMString.
  * **value**:包含要检查的 CSS 属性的值的 DOMString
* `CSS.supports(supportCondition);`
  * 包含要检查的条件的 DOMString

```js
CSS.supports("display:flex")
CSS.supports("display","flex")
```
