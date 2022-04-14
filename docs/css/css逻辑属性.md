# css

## css逻辑属性

> 由于之前css设计基于方向进行定位的属性和css世界基于`流`的底层设计理念不同,就会产生不合理的问题

<iframe height="300" style="width: 100%;" scrolling="no" title="css逻辑属性" src="https://codepen.io/jack-zhang-1314/embed/yLpJmXb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jack-zhang-1314/pen/yLpJmXb">
  css逻辑属性</a> by Jack-Zhang-1314 (<a href="https://codepen.io/jack-zhang-1314">@jack-zhang-1314</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

* 在以上css中,该变了文档流的方向.并且使用了`margin-right`为10px,文档依然会按照右边距是10px的距离渲染
* 但是实际上我们因该使用`margin-left`才可以达到右边没有10px的效果
* 如果设置的是属于css中流的概念`margin-inline-end:10px`就可以达到这种效果
* 当文档流**自左向右**渲染的时候,设置`margin-inline-end:10px`属性的渲染相当于`margin-left`属性

## 使用场景

> css逻辑属性需要配合`writing-mode`属性,`direction`属性或者`text-orientation`属性使用才有意义

* 或者也可以使用于可以改变DOM元素的呈现的方向.例如`flex-direction`属性中的属性值`row-reverse`和`column-reverse`,但是这些属性和css逻辑属性没有任何关系

1. HTML的`dir`属性取值为`ltr`可以实现从左到右排版,`rtl`可以实现从右到左排版
   * 在CSS中的`direction`属性和`dir`属性类似,即`ltr`是从左到右排版,`rtl`是从右到左排版
2. `writing-mode`:属性可以义定内联内容在屏幕上的排版方式,还可以定义块内容在屏幕上的排版方式
   * **`horizontal-tb`**(默认):定义了内容从左到右水平流动,从上到下垂直流动.下一条水平线位于上一条线下方
   * **`vertical-rl`**:定义了内容从上到下垂直流动,从右到左水平流动.下一条垂直线位于上一行的左侧
   * **`vertical-lr`**:定义了内容从上到下垂直流动,从左到右水平流动.下一条垂直线位于上一行的右侧
   * **`sideways-rl`**:定义了内容从上到下垂直流动,所有字形,甚至是垂直脚本中的字形,都设置在右侧
   * **`sideways-lr`**:内容从上到下垂直流动,所有字形,甚至是垂直脚本中的字形,都设置在左侧

## inline/block与start/end

>默认布局的属性对应关系

| margin方位属性 | margin逻辑属性      |
| -------------- | ------------------- |
| margin-left    | margin-inline-start |
| margin-top     | margin-block-start  |
| margin-right   | margin-inline-end   |
| margin-bottom  | margin-block-end    |

>`inline/block`表示的是方向与`start/end`表示的是起止方位

* 在在中文和英文网页环境中,inline元素(text,img等)默认是从左往右水平排列的;block元素(如\<div>,\<p>元素等)默认是从上往下垂直排列的
  * 因此`margin-inline-start`就是内联元素排列方向的起始位置,即"左侧"
  * 因此`margin-inline-end`就是内联元素排列方向的结束位置,即"右侧"
* 如果设置`direction:rtl`水平文档流就是从右往左设置的
  * 此时对应的start就是`"右侧"`
  * 此时对应的end就是`"左侧"`
* 如果设置`writing-mode:vertical-rl`:就是从上到下的,从右到左的流动

| margin方位属性 | margin逻辑属性      |
| -------------- | ------------------- |
| margin-left    | margin-block-end    |
| margin-top     | margin-inline-start |
| margin-right   | margin-block-start  |
| margin-bottom  | margin-inline-end   |

## width/height和inline-size/block-size

> 在中文或英文网页环境中,默认情况下,width属性对应的CSS逻辑属性是`inline-size`,height属性对应的CSS逻辑属性是`block-size`

* width属性新支持的几个关键字属性值也可以作为inlinesize的属性值

```css
inline-size:fit-content; 
inline-size:min-content;
inline-size:max-content;
```

| css属性      | 逻辑属性        |
| ------------ | --------------- |
| `min-width`  | min-inline-size |
| `min-height` | min-block-size  |
| `max-width`  | max-inline-size |
| `max-height` | max-block-size  |

## margin/padding/border

>margin,padding和border属性一起,演变成了按照inline/block与start/end这几个关键字组合的新的CSS逻辑属性

* margin缩写
  * margin-inline,margin-block
* padding缩写
  * padding-inline,padding-block
* padding缩写
  * 各个属性的缩写:border-inline,border-block
  * 所有属性的缩写
    * border-inline-color,border-block-color
    * border-inline-style,border-block-style
    * border-inline-width,border-block-width

## text-align

>对于text-align属性支持的逻辑属性是属性值而不是属性

* `text-align:start`
* `text-align:end`

## inset

>使用绝对定位的时候经常会使用到`left`,`right`,`top`.`bottom`属性,与之相对应的逻辑属性就是以`onset`开头的属性

* inset-inline-start
* inset-inline-end
* inset-block-start
* inset-block-end

* 与之对应水平或者垂直方位的缩写
  * inset-inline
  * inset-block

* 完整缩写:`inset`

```css
.overlay { 
  position: absolute; 
  /* left: 0; top: 0; right: 0; bottom: 0; */
  /* 完全可以使用inset */
  inset:0;
}
```
