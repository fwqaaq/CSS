# flex布局

> 弹性布局分为4个大的类目,分别是**流向控制**,**对齐设置**,**顺序控制**,和**弹性设置**

1. 流向控制:对应`flex-flow`属性以及相关属性
2. 对齐设置:在css属性的弹性布局和网格布局中是通用的
3. 顺序控制:对应`order`属性,平时用的不多
4. 弹性设置:对应flex属性以及相关的属性

## 布局原理

> `display:flex`或者`display:inline-flex`声明,弹性布局就会被创建

* `inline-flex`可以让flex容器保持内联的特性,可以让图片和文字在一行显示

1. flex子项块状化:`flex`子项都是**inline-flex**.因此在子项元素中使用`vertical-align`没有任何效果

   ```html
   <style>
   .container {
     display: flex;
     color: red;
   }
   </style>
   <div class="container">
     <content>1</content>
     <content>2</content>
     <content>3</content>
   </div>
   <script>
     let content = getComputedStyle(document.querySelector(".container content"))
     console.log(content.display)
   </script>
   ```

   * 默认状态下的content的display属性是inline,如果父元素使用display声明之后,就会**水平块状化**(block)

   | 原display值               | 变成flex子项后的display值 |
   | ------------------------- | ------------------------- |
   | inline/inline-block/block | block                     |
   | flow-root                 | flow-root                 |
   | list-item                 | list-item                 |
   | inline-table/table        | table                     |
   | table-*                   | block                     |
   | inline-flex/flex          | flex                      |
   | inline-grid/grid          | grid                      |

2. 当为父盒子设为flex布局以后,子元素的`float`,`clear`和`vertical-align`属性将失效
   * 因为flex子项的左右对齐有专门的css属性来控制
3. flex子项支持`z-index`属性
   * 即使子项的`position`计算值是static,flex子项依然支持.
   * 只要不是z-index不是auto属性,就会自动创建新的上下文
4. flex子项的margin值不会合并

5. flex子项是格式化的尺寸
   * 使用`justify-content:space-between`居中,也可以给中间的元素设置`margin:auto`
   * 如果希望最后一个元素右对齐

   ```html
     <style>
       .container {
         display: flex;
       }
       content {
         width: 100px;
         height: 100px;
         background: radial-gradient(rgb(91, 91, 153), rgb(82, 80, 80))
       }
       content:last-child {
         margin-left: auto;
       }
     </style>
     <div class="container">
       <content>1</content>
       <content>2</content>
       <content>3</content>
     </div>
   ```

6. 其他
   * <span style="color:red">如果flex的子项设置为绝对定位,会脱离弹性布局</span>
   * 设置建议的尺寸,可以给子项使用`flex-basis`属性或者使用缩写的flex属性
   * flex子项默认是水平排列的(`flex-direction`决定).
   * `flex-wrap`界定子项是否换行,默认就算超过flex容器的宽度也不会换行

### flex-direction

>`flex-direction`设置主轴方向,子元素跟着主轴来排列(从左往右,从右往左,或者是从上往下或者从下往上)

* `row`:(默认值,从左往右),表示flex子项显示为水平排列.方向为当前文档的水平流方向.
  * 如果:水平文档流改为`direction:rtl`,那么会从有往左排列
* `row-reverse`:表示的是flex子项的水平排列,默认文档流的情况下是从右往左(和row相反)
  * <span style="color:red">注意是相对于父容器,而不是整个文档</span>
* `column`:表示的flex子项垂直排列.默认情况下是从上往下排列.
  * 也可以使用`writing-mode`改变这个排列顺序
* `column-reverse`:表示的flex子项垂直排列.默认情况下从下往上(和column相反)

## flex-wrap

> `flex-wrap`属性用来控制子项是单行还是换行显示,以及在换行的情况下,每一行是否在垂直方向的反方向显示

* 和`wrap`相关的大多数是换行,例如`word-wrap`,`white-space:no-wrap`或者`pre-wrap`
* 语法:`flex-wrap:nowrap | wrap | wrap-reverse`
  1. `nowrap`:**是默认值**.表示flex子项是单行显示,且不换行.由于子项不换行,因此可能显示子项的宽度溢出
     * 子项可以设置`max-width:100%`可以避免宽度溢出,因为`max-width`的优先级大于`width`的优先级,图片从固定的变为相对值,`flex`子项的最大尺寸不会是width
  2. `wrap`:flex容器宽度不足的时候,flex子项会换行显示.
  3. `wrap-reverse`:flex容器宽度不足的时候,flex子项会换行显示,但是会从下往上显示.
     * 相当于wrap倒过来显示(第一行换到最后一行,依次排列)

## flex-flow

> `flex-flow`:复合属性,相当于你是设置了`flex-direction`和`flex-wrap`

* 语法:`flex-flow:<flex-direction>||<flex-wrap>`

## 对齐方式

> 在弹性布局中对齐方式`justify-content`,`align-items`以及`align-content`(作用于flex容器上),以及`align-self`(作用于flex子项上的css属性)

* `justify`表示水平方向的样式设置
* `align`表示垂直方向的样式设置
* `items`表示全体元素的样式设置
* `content`表示整体布局的样式设置
* `self`表示元素自身的样式设置,其一定设置在子元素上

> 一下会介绍目前浏览器支持的属性,并且默认值默认的是**当前布局的默认值**,而非语法层面的

### justify-content

> 语法:`justify-content:normal | flex-start | flex-end | center | space-between | space-around |space-evenly`

* `normal`:初始值,表示根据环境不同,采用不同的对齐方式.如果有列的概念,会类似于`stretch`(网格或者分栏布局);那么例如flex中没有列的概念,就会表现为`flex-start`
* `flex-start`:(css逻辑属性)可以看作默认值,与文档流方向有关,<span style="color:red">默认表现为整体布局左对齐</span>.(网格布局中支持的是start)
* `flex-end`:(css逻辑属性)可以看作默认值,与文档流方向有关,<span style="color:red">默认表现为整体布局右对齐</span>.如果同时运用`overflow`滚动,滚动效果会消失
* `center`:表现为整体布局中的居中对齐
* `space-between`:表示多余的空白间距中在中间区域分配(视觉上会表现为**两端对齐**)
* `space-around`:表示每一个flex子项两侧都环绕互不干扰的等宽的空白间距,**并且两侧的空白只有中间空白宽度的一半**
* `space-evenly`表示每一个flex子项**两侧空白间距完全与中间的空白间距相等**(视觉上表现为所有空白等分)

### align-items与align-self

> align-items属性和align-self的区别是align-self属性的是设置在某一个flex子项,而align-items是设置在flex容器的元素上.并且align-self的属性初始值是auto

* `auto`:`align-self`属性的**默认值**,表示flex子项的垂直对齐方式是由flex容器的`align-items`属性值决定的
* `stretch`:弹性布局中的`align-items`属性的默认值,表示为flex子项在垂直方向上拉伸.
  * 默认情况下,它可以是子项拉伸到容器的高度
  * 如果子项设置了具体的高度值,那么会按照具体的高度值渲染.也就是**height的优先级大于stretch**
* `flex-start`:逻辑css属性值,与文档流方向相关,默认表现为flex子项**顶部**对齐.<span style="color:red">并且默认的背景区域不会拉伸,而是适应子项内部的高度</span>
* `flex-end`:逻辑css属性值,与文档流方向相关,默认表现为flex子项**底部**对齐
* `center`:表现为flex子项都是垂直居中对齐
* `baseline`表示flex子项都是基线对齐,<span style="color:green">并不是flex子项和基线对齐,而是让所有的flex子项的内外基线都在同一条水平线上</span>.说明baseline是字母`x`下边缘对齐,而`flex-end`对齐则是`flex子项`的下边缘对齐

> 如果`flex-direction`属性的值是`column`或者是`column-reverse`,则flex子项的垂直对齐应该使用`justify-content`属性控制,而不是使用`align-items`
>
> align-items的实际初始值是`normal`,在弹性布局中和`stretch`的效果是一模一样的

* `align-self`属性设置的是某个具体的flex子项的垂直对齐方式

### align-content

> `align-content`属性和`align-items`属性的区别在于`align-items`属性是每一个flex子项的垂直对齐方式,而`align-content`属性将**所有flex子项作为一个整体进行垂直对齐设置**

* `stretch`:可以看作`align-content`属性的默认值.表示每一行flex子项都等比例拉伸.
  * 如果右两行flex子项,则每一行拉伸的高度是50%
* `flex-start`是逻辑css属性,与文档流方向相关,**默认是顶部堆砌**
* `flex-end`是逻辑css属性,与文档流相关,**默认是底部堆砌**
* `center`,整体居中对齐
* `space-between`表现为上下两端对齐,剩下的每一行元素等分剩余空间
* `space-around`表现为每一行元素上下都享有独立不重叠的空白空间
* `space-evenly`表现为每一行元素上下的空白空间大小都是一致的

## order

>通过设置order属性来改变某一个flex子项的排序位置

* 所有的flex子项的默认order属性值都是0.
* 如果希望某一个**flex子项在最前面显示**,**可以设置比0小的整数(如-1)**

## 深入理解flex

> flex属性:定义子项目分配剩余空间,用flex来表示占多少份数
>
> flex属性是`flex:flex-grow flex-shrink flex-basis`的缩写

* flex属性做了很多其他css缩写属性没有的优化
* 当`border`属性设置一个值或者两个值的时候,剩下的属性值一定是默认值(`medium none currentColor`)
  * 例如:`border:2px`就等同于`border:2px none currentColor`,此时的`border-style`的值是默认值none,`border-color`的计算值是就当前的色值
* flex属性不遵循这个规则,当flex属性是1个或者2个值的时候,另外的值**不一定是默认值**
* 默认值分别为:`flex-basis:auto`,`flex-grow:0`以及`flex-shrink:1`
  * `flex:1`等同于`flex:1 1 0%`,`flex:1 2`等同于`flex:1 2 0%`.即flex-basis使用的是0%而不是auto
  * 或者`flex:100px`等同于`flex:1 1 100px`,flex-grow使用的不是默认值0.而是使用的1
* 当我们使用`flex:1`的时候,正常情况下就是需要`flex-basis`为0%,即基础尺寸为0.如果使用`flex:100px`就是正常情况需要`flex-grow`为1,也就是说尺寸保持向外的弹性

### flex属性语法

```css
flex:none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```

* 根据语法可以知道:`flex-shrink`是可有可无的存在

```css
/* 1个值,flex-grow */ 
flex: 1; 
/* 1个值,flex-basis */ 
flex: 100px; 
/* 2个值,flex-grow和flex-basis */ 
flex: 1 100px; 
/* 2个值,flex-grow和flex-shrink */ 
flex: 1 1; 
/* 3个值 */
flex: 1 1 100px;
```

> 当flex属性只有一个值的时候

1. 如果是**数值**.如`flex:1`,则这个1为`flex-graw`属性的值,此时`flex-shrink:1`以及`flex-basis:0%`
2. 如果是**长度值**.如`flex:100px`,则这个属性只有flex-basis支持长度值.这里的`flex-graw`以及`flex-shrink`都是`1`,而不是默认值

> 如果flex的属性值有2个值,则第一个值一定是`flex-grow`属性值

1. 如果第二个值是**数值**,例如`flex:1 2`,则这个2是`flex-shrink`属性的值,此时`flex-basis`属性的计算值是0%
2. 如果第二个值是**长度值**.例如`flex:1 100px`,则这个100px为flex-basis属性值

> 如果这个值有3个值,则长度值为`flex-basis`属性值

* 剩下的两个值分别为`flex-grow`和`flex-shrink`值

### 理解flex-grow,flex-shrink以及flex-basis

* `flex-basis`是用来分配基础子元素的大小
* `flex-grow`属性用来对于剩余的空间大小该如何分配
* `flex-shrink`属性用来如果父容器空间不足该如何分配

1. flex-grow属性指定了容器剩余空间多余时候的分配规则,**默认值是0**(表示多余空间不分配)
   * 所有剩余空间总量是1
   * 如果只有1个flex子项设置了`flex-grow`属性值,则有两种分配情况
     * 如果`flex-grow`的属性值小于1,则flex子项**扩展的空间**就是`flex-grow`和这个剩余空间的比例的计算值(不超过1,**也就是空间还会剩余**)
     * 如果`flex-grow`的属性值大于1,则flex子项独享所有剩余空间
   * 如果有多个子项flex设置了`flex-grow`属性值,则有两种分配情况
     * flex-grow属性值的总和小于1,则每一个flex子项的扩展的空间就是总剩余空间和当前flex子项设置的`flow-grow`和剩余空间的比例的计算值(**剩余空间会有剩余**)
     * `flow-grow`属性值的总和大于1,则所有剩余空间被利用,分配比例就是各个flex子项的`flex-grow`属性值的比例.例如`flex-grow`是1:2:1,那么就会按这个比例分配剩余空间
2. `flex-shrink`属性指定了容器剩余空间不足时候的分配规则,默认值是1,**表示空间不足要分配**
   * 如果只有一个flex子项设置了`flex-shrink`属性值,则有两种情况
     * 如果`flex-shrink`属性值小于1,则收缩不完全,会有一部分内容溢出flex容器
     * 如果`flex-shrink`属性值大于等于1,则收缩完全,元素正好填满flex容器
   * 如果有多个子项flex设置了`flex-shrink`属性值,则有两种分配情况
     * 如果`flex-shrink`属性值**总和小于1**,则收缩不完全,每一个元素收缩尺寸和完全收缩的尺寸的比例就是该元素的`flex-shrink`属性的值
     * 如果`flex-shrink`属性值**总和大于1**,则收缩完全,每一个元素的收缩尺寸的比例和flex-shrink属性值的比例一样大
3. `flex-basis`属性则是指定的分配基础尺寸,默认值是`auto`

> 实现

1. 当容器的尺寸足够时,a,b,c三个元素由于设置了`flex-grow:0`,所以弹性元素只有`flex-grow:1`的d,e两个元素会分配剩余空间
2. 当容器尺寸继续缩小,d,e两个元素也会越来越小,直到保底的20px.到达剩余空间不足的临界状态
3. 由于`d,e`设置的`flex-shrink:0`这时候并不会有弹性变化.而`a,b,c`设置了`flex-shrink:1`会继续进一步缩小.

### flex:0/auto/none

| 单值语法      | 等同于         | 备注                |
| ------------- | -------------- | ------------------- |
| flex: initial | flex: 0 1 auto | 初始值,常用         |
| flex: 0       | flex: 0 1 0%   | 适用场景少          |
| flex: none    | flex: 0 0 auto | 推荐                |
| flex: 1       | flex: 1 1 0%   | 推荐                |
| flex: auto    | flex: 1 1 auto | 适用场景少,但很有用 |

> `flex:initial`可以理解为flex属性的默认值

* `flex:initial`的元素在flex容器有剩余空间时其尺寸不会增长(`flex-grow:0`,只有内容也是自适应的才行),在flex容器尺寸不足时尺寸会收缩变小(`flex-shrink:1`),同时当前应用 flex:initial的元素的尺寸自适应于内容(`flex-basis:auto`)
* `flex:0`和`flex:none`的区别
  * 由于`flex:0`的`flex-grow`为0.并不会弹性增大,但是会弹性收缩`flex-shrink:1`,由于`flex-basis:0%`,因此设置此属性元素的表现会为**最小的内容宽度**(所有文字会竖排显示,即一个字换一行)
  * `flex:none`既不会弹性增大,也不会弹性收缩,没有任何弹性变化.由于设置了`flex-basis:auto`,会表现为最终的尺寸有**最大内容宽度决定**
* 如果flex子项的宽度就是内容的宽度,且**永远不会换行**,就可以使用`flex:none`

> `flex:1`和`flex:auto`的区别

* `flex:1`和`flex:auto`的元素尺寸可以弹性增大,也可以弹性减小
  * 但是`flex:1`在容器不足时会优先最小化内容的尺寸
  * `flex:auto`在容器不足时会优先最大化内容的尺寸

* 实现
* 更加清晰的展示了`flex:1`的尺寸会优先牺牲自己的尺寸,而`flex:auto`会优先扩展自己的尺寸

* 如果希望元素充分利用剩余空间同时不会侵占其他元素的宽度时(适合使用`flex:1`)
* 如果希望元素充分利用剩余空间,并且元素的各自尺寸又需要按照各自内容进行分配的时候(适合使用`flex:auto`)

* `flex:initial`表示默认的弹性布局状态,无须专门设置,适合小控件元素的分布布局(其中某一个flex子项的内容动态变化也没有关系)
* `flex:0`适用场景较少,适合设置在替换元素的父元素上
* `flex:none`适合设置在内容不能换行显示的小控件元素上,如按钮
* `flex:1`适合等分布局
* `flex:auto`适合基于内容动态适配的布局

### flex-basis与尺寸计算规则

> 在弹性布局中,一个子项的最终尺寸时**基础尺寸(内容尺寸)**,**弹性增长或收缩**,**最大最小尺寸**共同作用的结果

* 最终尺寸的优先级是:`最大最小尺寸限制>弹性增长或收缩>基础尺寸`

1. **基础尺寸**:由`flex-basis`,`width`以及`box-sizing`盒模型共同决定
2. **内容尺寸**,指最大内容宽度,当没有设置基础尺寸时会顶替基础尺寸
3. **弹性增长**:指`flex-grow`属性,收缩就是flex-shrink
4. 最大尺寸主要受`max-width`属性限制;最小尺寸收**最小内容宽度**,**width属性**和**min-width属性**共同影响

> flex-basis属性与和盒模型

* flex-basis属性的尺寸是作用于`content-box`上的,这一点和width属性一致
* 如果将`box-sizing`设置为其他盒模型.那么flex-basis和width的表现形式就不一致了
  * 一般是由文字换点换行之后的尺寸是flex-basis的属性的元素的最小尺寸(最小内容宽度)
  * 可以改变`word-break`

#### 理解flex-basis,width和基础尺寸之间的关系

> flex-basis属性和width属性都可以用来设置flex子项的基础尺寸

1. 如果flex-basis属性和width属性同时设置了具体的数值,width属性值会被忽略,**优先使用flex-basis作为基础值,width值会被忽略**
2. 如果设置的flex-basis属性值是auto,则会**使用width属性设置的长度值作为基础尺寸**
3. 如果flex-basis和width的属性值都是auto,则会**使用flex子项的最大内容宽度作为基础尺寸**(基本尺寸有内容宽度决定)
   * 由于内容尺寸都是flex子项的最大内容宽度.往往会配合`flex-shrink`属性使用,通过弹性受挫让文字内容自动换行

#### 理解最小尺寸

* 文字溢出
* 当我们设置`width:100px`的flex子项出现了文字那日饿哦给你溢出flex子项的情况
* <span style="color:red">由于`flex-basis`属性下的最小尺寸是由内容决定的</span>,而width属性下的最小尺寸是由width属性的计算值决定的
  * 最小尺寸收**最小内容宽度**,**width属性**和**min-width属性**共同影响
* 如果flex-shrink属性不为0
  1. 如果`min-width`属性值不是auto.则元素的最小尺寸就是`min-width`的属性值
  2. 比较**width属性值的计算值**和**最小内容宽度**的大小.较小的值就是元素最小尺寸
  3. 如果width的属性值和min-width的属性值均为auto,则元素的最小尺寸就是**最小内容宽度**
  4. 如果flex设置了`overflow:hidden`,但最小尺寸是由最小内容宽度决定的,则最小尺寸无效
* 上面的原因就很好理解:当设置`flex-basis:100px`的时候,由于没有设置width属性和minwidth属性,因此最小尺寸就是最小内容宽度(“css_true_good”),明显大于此时的基础尺寸100px,因此最终尺寸就是整个词组的宽度
* 当设置`width:100px`的时候,width属性设置的100px小于最小内容宽 度,根据哪个小哪个就是最小尺寸的规则,此时的最小尺寸是100px,和基础尺寸一样大,因此最终尺寸就是100px

##### flex-basis与min-width/max-width

> min-width属性和max-width属性也能够很有效地限制flex子项的尺寸

* 适用于单行文字溢出

1. 由于width属性和flex-basis属性都没有设置,因此基础尺寸就是内容尺寸(最大内容宽度)
2. flex-shrink属性值是默认值1.其内容超出,弹性效果可以执行
3. 由于width属性和min-width属性都没有设置,因此最小就是最小内容宽度
   * 如果\<item>里面的\<p>元素 没有设置`white-space:nowrap`,那么最小内容宽度就是1em,也就是一个中文字符的宽度(每个中文都是换行点),弹性收缩可以顺利执行.但是这里的\<p>元素设置了`whitespace:nowrap`,此时\<p>元素就像一个不会换行的连续英文单词,于是\<item>元素的最小尺寸就变成了\<p>元素内容在一行显示的宽度,和基本尺寸一样
   * 由于尺寸计算的优先级是`最小尺寸>弹性收缩>基本尺寸`,而最小尺寸和基本尺寸一样大,导致弹性收缩无效,最终尺寸就是内容的尺寸,单行打点效果需要内容尺寸大于容器尺寸,这里两者相同,因此没有打点效果

* 解决办法
   1. 给\<p>元素设置比文字内容宽度小的具体的宽度值,width属性和max-width属性都可以
   2. 使\<item>元素的最小尺寸变小或无效,让flex-shrink属性可以正常弹性收缩

```css
.container item {
  min-width: 0;
}
```

* `min-width:0`声明,让\<item>元素的最小尺寸从最 小内容宽度变成0,于是flex-shrink属性就可以正常弹性收缩了.

#### flex-basis支持的关键字

* content:尺寸根据内容决定,其表现 max-content接近
* max-content:最大内容宽度
* min-content:最小内容宽度

> 小结

* flex-basis属性默认作用在content box上
* flex-basis属性优先级比width属性高,同时设置的时候, <span style="color:red">width属性无法影响基础尺寸,**但是会影响最小尺寸**</span>
* 最小尺寸与flex-basis属性无关,而与最小内容宽度、width属性和min-width属性有关
* flex-basis属性使用得当可以实现类似min-width属性或max-width属性的效果,min-width属性可以在不影响基础尺 寸的前提下设置最小尺寸,从而解决弹性布局中打点无效的问题
