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

## env()

>env()函数类似于var()函数一样,将用户代理定义的环境变量插入设定的css中.并且此环境变量由用户的代理定义(用户屏幕上的可用空间),并且定义在全局作用域中(像var()一样)

* 必须在媒体查询中设定:`viewport-fit=cover`

```html
<meta name="viewport" content="width=device-width,viewport-fit=cover">
```

* `safe-area-inset-left`:安全区域距离左边边界距离
* `safe-area-inset-right`:安全区域距离右边边界距离
* `safe-area-inset-top`:安全区域距离顶部边界距离
* `safe-area-inset-bottom`:安全区域距离底部边界距离

> 这四个定义了视口边缘内矩形`top,right,bottom,left`距离非矩形边界的距离(**默认值**).

1. 如果是矩形笔记本电脑或者显示器,其默认值就是0
2. 如果是非矩形发显示器(圆形表盘,iphone屏幕等).那么默认值就是边界到可视内容的距离
3. 注意:<span style="color:red">属性对大小写敏感.需要大写:SAFE-AREA-INSET-LEFT</span>

* 语法定义:`env( <custom-ident> , <declaration-value>? )`

1. 第一种使用,直接使用用户设备自定义的默认值

   ```css
   env(safe-area-inset-top);
   env(safe-area-inset-right);
   env(safe-area-inset-bottom);
   env(safe-area-inset-left);
   ```

2. 使用自定义的备用值
   * 如果环境变量不可用,就可以设置备用值来解决这种问题

   ```css
   env(safe-area-inset-top, 20px);
   env(safe-area-inset-right, 1em);
   env(safe-area-inset-bottom, 0.5vh);
   env(safe-area-inset-left, 1.4rem);
   ```

>由于设定了环境变量,我们可以在任意一个地方使用他

```css
body{
  /* 将元素底部增加安全区的大小,防止遮罩 */
  padding-bottom: env(Safe-area-inset-bottom);
}
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

## 与calc()相关的函数

### calc()

>calc()支持加减乘除四种运算,任何可以使用<length>,<frequency>,<angle>,<item>,<percentage>,<number>或者<integer>数据类型的地方可以使用calc()函数

1. 不能使用css不支持的数据类型
2. 不能再css前后都带单位或者白粉后的值进行乘除运算,只能进行加减运算

   ```css
   <!-- 不合法 -->
   width:calc(10px * 10px);
   width:calc(90% - 1rem);
   ```

3. 除法运算右侧必须是不为0的数
4. clac()运算符的**加号/减号**左右两边一定要有空格
5. calc()可以支持嵌套使用

```css
.list{
  --size:calc(100% - 2rem);
  width:calc(var(--size) / 6);
}
```

### min(),max()和clamp()函数

>和calc()类似,任何可以使用<length>,<frequency>,<angle>,<item>,<percentage>,<number>或者<integer>数据类型的地方可以使用这三个函数

* min(),max()和clamp()可以和calc()嵌套使用

```css
width:calc(min(800px,100vw) / 6);
```

>min()函数:`min(expression[,expression])`

* `min()`函数支持一个或者多个表达式,每个表达式之间使用逗号分割,然后将最小的表达式的值最为返回值
* 虽然函数的名称是min(),但是实际上是用来限制最大的.例如以下,只要视口宽度小于800px或者字体大小小于16px,就会返回比80px更小的值

   ```css
   width:min(10vw,5em,80px)
   ```

* min()函数中使用算数运算符,具体的值或者其它的表达式

   ```css
   width:min(10px * 10, 10em)
   width:min(calc(10px * 10), 10em)
   width:min(calc(10px * 10), var(--width))
   ```

* 例如在网页端浏览器宽度为`1024px`,在移动端宽度为`100%`
  
  ```css
  <!-- 过去 -->
  .constr{
    width:1024px;
    max-width:100%;
  }
  <!-- 现在 -->
  .constr{
    width:min(100%,1024px);
  }
  ```

>max()函数:和min()的区别是返回最大值

* max()函数实际作用就是限制最小值.他返回的不会比80px更小

   ```css
   width:max(10vw,5em,80px)
   ```

>clamp()函数返回一个区间范围的值

* 语法:`clamp(MIN,VALUE,MAX)`.MIN表示最小值,VALUE表示首选值,MAX表示最大值
  * 如果VALUE在MIN~MAX范围内,则使用VALUE作为函数返回值.
  * 如果VALUE大于MAX,则使用MAX作为返回值
  * 如果VALUE小于MIN,则使用MIN作为返回值
* `clamp(MIN,VALUE,MAX)`实际上等同于`max(MIN,min(VALUE,MAX))`
