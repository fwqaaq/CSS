# 字体(font)

## 理解font-size

>ex,em,rem的关系

1. ex是字符x的高度,如果`font-size`越大,自然ex对应的也就越大
2. em是字模的高度,不是字符的高度,一般有由`m`的宽度决定
   * em是根据当前`font-size`大小计算的(一般设定布局祖先的font-size大小就可以实现弹性布局),一旦布局中出现根基础font-size不一样的场景时(例如h1),此作用域所有元素的en都要重新计算
3. rem是相对于根元素`root em`:如果使用rem,计算值就不会受当前元素的`font-size`改变

>font-size:0与文本限制

* 在chrome浏览器下由12px的字号限制,就是文字的`font-size`不能小于12px,否则会乱成一团
* 不过当文本直接设置`font-size:0`,那么文字直接会被隐藏

### 字体属性

1. 字体:`font-family:"arial";`,属性可以写英文可以写中文
2. 字体粗细:`font-weight:属性;`,提倡用数字表示(无单位),
   * normal:不加粗,等同于400
   * bold: 加粗,等同于700
3. 文字样式:`font-style:属性;`,`normal`:默认值,标准样式;`italic`:斜体字体样式;`oblique`:形状倾斜
4. 简写 `font:font-style font-weight font-size/line-height font-family`(<span style="color:red">不能颠倒顺序,且font-size和font-family不能省略</span>)

### 文本属性

> **文本缩进**:首行缩进,`text-indent:2em;`

1. `text-indent`仅对第一行内联盒子有效
2. 非替换元素的display值设为inline的内联元素,设置`text-indent`值无效
3. \<input>标签阿牛设置`text-indent`无效,如果是输入框,和\<textarea>一样有效
4. \<button>设置按钮text-indent有效

> **字符间距**:`letter-spacing`

* 继承性
* 默认值是`normal`不是0.`letter-spacing`在某些情况下会调整normal的计算值
* 支持负值,且值足够大的时候,会让字符形成重叠,甚至反向排列

>**单词间距**:`word-spacing`

* `letter-spacing`和`word-spacing`类似

1. 继承性
2. 默认值都是`normal`不是0.`letter-spacing`在某些情况下会调整normal的计算值
3. 支持负值,且值足够大的时候,会让字符形成重叠,甚至反向排列
4. 间隔算法都会受到`text-align:center`两端对齐的影响

* 不同之处就是`letter-spacing`作用于所有字符,`word-spacing`仅作用于空格字符

> word-break和word-wrap

1. **word-break**:**用来标明怎么样进行单词内的断句**
   * `normal`:默认换行规则
   * `break-all`:任意非cjk文本间的单词换行
   * `keep-all`:不允许cjk文本中的单词换行,只能在半角空格或者连字符处换行.实际上和normal一致
2. **word-wrap**:**是否允许浏览器在单词内进行断句**,防止当一个字符串太长而找不到它的自然断句点时产生溢出现象
   * `normal`:默认换行规则
   * `break-word`:一行单词中实在没有其它靠谱的换行点时候换行

>`white-space`:可以决定图文内容是否在一行显示(回车空格是否生效).是否显示大段连续空白(空格是否生效)

 | 属性       | 描述                                                           |
 | ---------- | -------------------------------------------------------------- |
 | `normal`   | 合并空白字符和换行符                                           |
 | `pre`      | 空白字符不合并,并且内容只有换行符的地方换行                    |
 | `nowrap`   | 该值和`normal`一样和并空白字符,但不允许文本环绕                |
 | `pre-wrap` | 空白字符不合并,而且内容只在由换行符的地方换行,同时允许文本环绕 |
 | `pre-line` | 合并空白字符,但只允许有换行符的地方换行,允许文本环绕           |

* `nowrap`,元素的宽度此时表现为最大可用宽度,换行符和一些空格全部合并,文本一行显示
  1. **包含快的尺寸过小处理**.可以使用`white-space:nowrap`会让其文本一行显示
  2. 单行文字溢出点点效果.`text-overflow:ellipsis;`

 ```css
 .class{
   white-space:nowrap;
   overflow:hidden;
   text-overflow:ellipsis;
 }
 ```

> **对齐文本**:`text-align:center`,只能实现水平对齐

* 左对齐:left;  右对齐:right;  居中对齐:center
* 两端对齐:`justify`

> **装饰文本**:`text-decoration:none;`

* none:默认,无装饰;
* underline:下划线:<span style="color:red">链接a自带下划线</span>;
* overline:上划线;line-through:上划线

* 也可以使用`border-bottom`来设置下划线,这样下划线不会离文本太近

>**字符大小写**:`text-transform`

* `uppercase`:全部大写
* `lowercase`:全部小写

> 文本颜色:`color:red`

* 预定义颜色:red等; 十六进制:#ff0000等; rgb:rgb(255,0,0)

## 字体排印

### [连字符断行](01连字符断行.html)

> 在css3中引入了一个新的属性`hyphens`.

* `hyphens`:接收三个参数.`none`,`manual`(初始值),`auto`
  * manual:任何时候可以使用手动插入软连字符,来实现断词折行的效果.
  * none:会禁用这种行为
  * auto:会自懂的添加这种行为

### [插入换行](02插入换行.html)

>由于\<dt>和\<dd>都是块级元素,往往他们都会一个元素占一行.即使设置以下的操作

```css
dd{
   margin:0;
   font-size:bold;
}
```

>当设置`display:inline`的时候会挤在一行.当然想到前文中的`white-space:pre;`属性

* 只要给伪元素后加上换行符就可以换行

```css
dt,
dd {
  display: inline;
}
dd::after {
  content: '\A';
  white-space: pre;
} 
```

>当我们再加一个邮箱\<dd>时,发现这个邮箱并没有在单独一行中

* 由于我们给每一个\<dd>行尾都添加了一个换行符,每个值都会被分到单独一行
* 所以我们只希望\<dt>后的\<dd>可以换行,只要\<dd>后面还有\<dd>就要使用,插入

```css
dt+dd::before {
  content: '\A';
  white-space: pre;
}
dd+dd ::before {
  content: ', ';
  white-space: normal;
}
```

### [文本行的斑马线](03文本行的斑马线.html)

>这就需要用到一个换行的属性(空白字符不合并)`white-space: pre-wrap;`

```css
div{
   height: 10rem;
   white-space: pre-wrap;
   width: rem;
   height: auto;
   background-color: beige;
}
```

* 使用渐变就可以完美的解决这种条纹的背景图像问题,当然每个渐变的长度应该时字体大小的两倍

```css
background-image: 
linear-gradient(rgba(0,0,0,0.2) 0,rgba(0,0,0,0.2) 50%,transparent 50%);
padding:0.5rem;
background-size: auto 2rem;
```

> 由于文本行之间的空隙我们很难达到很好的效果,不过可以更改`background-origin`和`background-position`尽量达到想要的 效果

### [调整tab的宽度](04tab的宽度.html)

> 一般网页中的代码会用\<pre>(pre不会破坏代码原来的样式,会一行行展示)或者\<code>(将代码破坏成一行)显示

```css
tab-size:<integer> | <length>
```

1. `<integer>`:整数值,表示输入的空格宽度等于几个Space输入空格的宽度
2. `<length>`:长度值.表示每个Tab键输入的宽度值

* `tab-size:2`用于设置缩进尺寸.如果使用pre或者code,那这似乎并没有什么用处

### 现实中的文字效果

> css3:我们可以使用`text-shadow`属性为文字添加阴影

* 语法:`text-shadow:h-shadow v-shadow blur color;`

| 值       | 描述                         |
| -------- | ---------------------------- |
| h-shadow | 必需,水平阴影的位置,允许负值 |
| v-shadow | 必需,垂直阴影的位置,允许负值 |
| blur     | 可选,模糊距离(越大越模糊)    |
| color    | 可选,阴影的颜色              |

#### [凸版印刷效果](05凹版印刷效果.html)

>使用凸版印刷效果,适用于中等亮度背景配上深色文字的场景.也可以用于深色底,浅色字的场景

* 原理:出现在底部的浅色投影(或者出现在顶部的暗色投影)会让人产生物体是凹进平面内的错觉.同理出现啊在底部的暗色投影(或者出现在顶部的浅色投影)会让人产生物体从平面上凸起的感觉.

> 如果背景使用浅色,文字使用深色时,在底部加上浅色投影的效果最佳

```css
.box {
  font-size: 2rem;
  height: auto;
  background: hsl(210, 13%, 60%);
  color: hsl(210, 13%, 30%);
  text-shadow: 0 2px 2px hsla(0, 0%, 100%, 0.8);
}
```

#### [空心字效果](05空心字效果.html)

>使用text-shadow属性的扩张参数就可以让半径放大,看起来就像给文字勾边了一样.不过浏览器的支持海十分有限

* 当然可以使用重叠多层轻微模糊的方式达到空心字效果

```css
.box {
  background-color: black;
  font-size: 5rem;
  color: white;
  text-shadow:
    0 0 10px black, 0 0 10px black,
    0 0 10px black, 0 0 10px black,
    0 0 10px black, 0 0 10px black;
}
```

#### [文字外发光效果](05文字外法光效果.html)

>最简单的方式就是重叠基层`text-shadow`即可

```css
.box {
  background-color: black;
  font-size: 5rem;
  color: rgb(189, 177, 70);
  text-shadow:
    0 0 1rem, 0 0 1rem;
}
```

* 当然可以使用动画或者滤镜来使这种效果更好看

```css
.box {
  background-color: black;
  font-size: 5rem;
  color: rgb(189, 177, 70);
  transition: 1s;
}

.box:hover {
  color: transparent;
  text-shadow:
    0 0 1rem rgb(189, 177, 70), 0 0 1rem rgb(189, 177, 70);
  /* 使用滤镜达到这种效果 */
  /* filter: blur(1rem); */
}
```

#### [文字凸起效果](05文字凸起效果.html)

>使用一长串的累加投影,不设置模糊并以1px的跨度逐渐错开,使颜色逐渐变暗,然后再底部加一层强烈模糊的按投影,从而模拟完整的立体效果

```css
.box {
  background-color: #58a;
  color: white;
  font-size: 5rem;
  text-shadow:
    0 0.1rem hsl(0, 0%, 85%),
    0 0.2rem hsl(0, 0%, 80%),
    0 0.3rem hsl(0, 0%, 75%),
    0 0.4rem hsl(0, 0%, 70%),
    0 0.5rem hsl(0, 0%, 65%),
    0 0.5rem 10px black;
}
```

## 文本字符处理

### 文字描边属性text-stroke

>`text-stroke`和`text-fill-color`,分别用来实现文字描边的效果和文字颜色填充的效果

1. `text-stroke`属性是`text-stroke-width`(宽度)和`text-stroke-color`(颜色)这两个css属性的缩写
   * `text-stroke-color`默认值是黑色,如果没有指定颜色,就是加粗效果

   ```css
   .stroke{
     -webkit-text-stroke:2px red;
     /* 等同于*/
     -webkit-text-stroke-width:2px;
     -webkit-text-stroke-color:red;
   }
   ```

   * 使用`text-stroke`属性实现更好的外描边效果(投影`text-shadow`有空隙)
     * 原理:设置两层文字,下层的文字有描边,上层的文字没有描边

   ```html
   <style>
     .strock {
       font-size: 60px;
       -webkit-text-stroke: 4px red;
       /* 文字间空隙 */
       letter-spacing: 4px;
     }
   
     [data-content]::before {
       content: attr(data-content);
       -webkit-text-stroke: initial;
       color: aqua;
       position: absolute;
     }
   </style>
   <span class="strock" data-content="外描边">外描边</span>
   ```

2. `text-fill-color`:对文字进行颜色填充,也可以覆盖color属性设置的颜色
   * 可以使用渐变图像或者文本来实现填充

   ```html
   <style>
   .text-fill-url {
     font-size: 60px;
     -webkit-text-fill-color: transparent;
     background: url(0.jpg) no-repeat center/100%;
     -webkit-background-clip: text;
   }
   </style>
   <span class="text-fill-url">啊对对对</span>
   ```

   * `text-fill-color`属性可以在改变文字颜色的同时保护color属性
     * color具有继承性,可以通过改变祖先元素color值改变子元素的样式
     * css许多默认颜色都是color决定的,例如输入框的光标,边框色,盒阴影...
     * [实现的方式](./06text-fill-color.html):
     * 关键就是主题的颜色`color`是通过祖先元素进行改变,然后背景色`currentColor`表示当前颜色进行改变.`text-fill-color`文字的填充色不能和继承的`color`一样

     ```css
     button {
       /* 重置按钮元素的色值 */
       color: inherit;
       /* 当前元素的color值 */
       background-color: currentColor;
       -webkit-text-fill-color: #fff;
     }
     ```

     * 想要实现不同的主题效果就可以在不同的祖先元素添加不同的属性

     ```css
     [data-theme="a"] {
      color: deepskyblue;
     }
     ```

### text-emphasis

>text-emphasis是对文字进行强调装饰,总共有以下四个属性

* `text-emphasis-color`:强调字符的颜色
* `text-emphasis-style`
* `text-emphasis-position`
* `text-emphasis`:`text-emphasis-color`和`text-emphasis-style`这两个属性的缩写
  * 该属性具有继承性,祖先元素设置了强调效果之后.子元素也会运用

#### text-emphasis-style

```bash
text-emphasis-style: none 
text-emphasis-style: [ filled | open ] || [ dot | circle | doublecircle | triangle | sesame ]
text-emphasis-style: <string>
```

* `none`是text-emphasis-style的默认值,表示没有任何强调装饰器

```html
<style>
  .text-fill-url {
    font-size: 60px;
    text-emphasis-style: "❤";
  }
</style>
<span class="text-fill-url">外描边真的很好用</span>
```

1. 显示强调装饰的字号大小是主文字内容字号大小的一般,例如文字的大小是16px,则上方强调字符的大小则是8px
2. 如果行高不是很高,则强调装饰符会自动增加当前这一行所占据的高度
3. 强调装饰符和正文之间的距离是无法通过设置行高等属性进行调节的,距离的大小主要由字体设置
4. 如果指定了多个字符,只会以第一个字符作为强调装饰符.
   * 例如`text-emphasis-style:"CSS"`:此时只会使用`C`

* 内置的几个装饰符:`dot(点)`,`circle(圆)`,`double-circle(双层圆)`,`triangle(三角)`,`sesame(芝麻点)`
  * 他们的类型分别是`filled(实心的)`,`open(空心的)`

  ```css
  /*实心的圆点*/
  text-emphasis:filled dot;
  /*空心的圆点*/
  text-emphasis:open dot;
  ```

#### text-emphasis-position

> `text-emphasis-position`属性来指定强调装饰器的位置,默认是在文字的上方

```css
text-emphasis-position: [ over | under ] && [ right | left ]
```

* `text-emphasis-position`初始值是`over right`.right是逻辑属性,表示文档开始的方向.
  * 例如设置`writing-mode:vertical-rl`就是强调装饰符在文字右侧

### text-orientation

>原先的竖向排版中的英文字符都是以顺时针旋转90°的方式呈现

```css
p{
  writing-mode:vertical-rl;
}
```

* `text-orientation:mixd | upright | sideways`
  * `mixed`:默认值.表示中文和英文的文字显示方向是不一致的.中文字符是正立的,英文字符需要顺时针旋转90°之后显示
  * `upright`:中文和英文的文字都是默认的正立显示,没有旋转
  * `sideways`:中文和英文的文字都是顺时针旋转90°

### text-combine-upright

>`text-combine-upright`属性可以让2~4个字符横向合并显示

```html
<p class="upright"><span>CSS</span>新世界</p> 
<style>
  .upright { 
    writing-mode: vertical-rl;
  }
.upright span { 
  -ms-text-combine-horizontal: all; 
  -webkit-text-combine: horizontal; 
  text-combine-upright: all;
}
</style>
```

* css语法:`text-combine-upright: none | all | digits <integer>?`
  * `none`:**默认值**.表示字符不会参与横向合并
  * `all`:所有类型的字符都会参与横向合并,不过一个标签内最多只能合并四个字符
  * `digits <integer>?`:表示金属字字符参与横向合并(没有浏览器支持)

>重置\<span>元素的排版方式也可以让数字横向排列

```css
.upright { 
  writing-mode: vertical-rl;
} 
.upright span { 
  writing-mode: initial;
}
```

### unicode-bidi

>unicode-bidi属性总是和direction属性配合使用,用来设置字符水平流向的细节

* 例如,如果一块内容同时包含有从左到右书写和从右到左书写的文本,那么用户代理(`the user-agent`)会使用复杂的`Unicode`算法来决定如何显示文本.`unicode-bidi`属性会覆盖此算法,允许开发人员控制文本嵌入(text embedding)

1. `normal`:**默认值**.对双向算法,此元素不提供额外的嵌入级别.对于内联元素,隐式的重新排序在元素的边界上起作用
2. `isolate`,`embed`:让中文字符和英文字符从左往右排列,让问号和加号等字符从右往左排列
3. `isolate-override`和`bidi-override`的作用都是让所有字符从右往左排列
   * 新属性`isolate`和`isolate-override`会让元素(即使是内联元素)作为独立的个体参与到兄弟元素之间的方位排列
4. `plaintext`:<span style="color:red">该属性可以在不改变当前文档的水平流方向的前提下,让所有字符按照默认的从左往右的流向排列</span>.例如微信聊天记录

### 文字的渲染与字体呈现

* 了解`text-rendering`.浏览器会为我们实现最佳的`text-rendering`
* 文字平滑属性`foot-smooth`(了解即可)

#### font-stretch

>font-stretch属性需要字体中有对应的或窄或宽的字体面,否则灭有效果

* 例如中文字体中是没有这样的字体面,一般用来设置英文字体的字形缩放

* 语法`font-stretch:关键字|<percentage>`
  * `normal`:就是正常的字体宽窄表现
  * `semi-condensed`,`condensed`,`extra-condensed`,`ultra-condensed`表示字形不同程度地收缩,其中`ultracondensed`是收缩程度最厉害的
  * `semi-expanded`,`expanded`,`extra-expanded`,`ultraexpanded`表示字形不同程度地扩展,其中`ultra-expanded`是扩展程度最厉害的
  * \<percentage>表示字形拉伸的百分比,范围是50%～200%,包括50%和200%.最近几年浏览器才开始支持百分比属性值,通常不建议使用

#### font-synthesis

>这是专门为CJK文字设计的CSS属性

* 大多数西方字体都包含粗体和斜体,不过如果是CJK文字的加粗或者倾斜,文字笔画就会扭曲

   ```css
   .example{
     font-weigth: bold;
     font-style: italic;
   }
   ```

  * 尤其是使用了`font-style: italic;`的时候

* 语法:`font-synthesis:none | [weight || style]`
  * `none`:表示粗体和斜体都不需要合成
  * `weight`:如果需要,可以合成粗体字体
  * `style`:如果需要,可以合成斜体字体
* `font-synthesis`:初始值是`weight style`,表示就算字体中没有对应的粗体和斜体,也会通过字形变化合成粗体效果和斜体效果
  * 如果在一段文字中,希望英文字符倾斜而中文字符不倾斜,可以设置`font-synthesis:none`

### 字体特征与变体

#### font-variant

* `font-variant`属性由`font-variant-caps`,`font-variant-numeric`,`font-variant-alternates`,`font-variant-ligatures`和`font-variant-east-asian`属性的缩写

> `font-variant-caps`

```css
font-variant-caps: normal | small-caps | all-small-caps | petitecaps | all-petite-caps | unicase | titling-caps
```

* `normal`:默认值.大小有其他css属性值决定.例如`text-transform`属性
* `small-caps`:大型的小写字母
* `all-small-caps`:表示无论是大写字母还是小写字母,全部都变成小型大写字母
* `petite-caps`:表示的是特小型大写字母
* `all-petite-caps`:无论是大写字母还是字母,全部都变成小型大写字母
* `unicase`:混合模式,可以由小型大写字母,大写字母或大型小写字母
* `titling-caps`:表示是目标字符显示为标题大写字母

>`font-variant-numeric`:用来设置数字的变体效果

```css
font-variant-numeric: normal; font-variant-numeric: [ lining-nums | oldstyle-nums ] || [ proportional-nums | tabular-nums ] || [ diagonal-fractions | stacked-fractions ] || ordinal || slashed-zero;
```

* `font-variant-numeric`属性只支持两种书写形式,一种就是使用初始值normal,另一种就是使用5类关键字属性值的随机组合

```css
font-variant-numeric: slashed-zero; 
/* 数字样式 */ 
font-variant-numeric: lining-nums; 
font-variant-numeric: oldstyle-nums; 
/* 数字尺寸 */ 
font-variant-numeric: proportional-nums; 
font-variant-numeric: tabular-nums; 
/* 分数值 */ 
font-variant-numeric: diagonal-fractions; 
font-variant-numeric: stacked-fractions; 
/* 组合使用 */
font-variant-numeric: oldstyle-nums stacked-fractions;
```

* `normal`表示使用正常的数字效果,不使用变体字形.
* `ordinal`表示强制使用序数标记特殊的标志符号.
  * 例如无须使用\<sup>标签就可以让字符1st,2nd,3rd-->1<sup>st</sup>
* `slashed-zero`关键字属性值强制使用带斜线的0
  * 当需要明确 区分字母O和数字0时,此关键字非常有用
* `lining-nums`和`oldstyle-nums`用来控制数字的样式
  * 其中,`lining-nums`表示数字沿着基线对齐
  * `oldstyle-nums`表示数字采用传统对齐方式,如数字3,4,5,7,9会下沉
* `proportional-nums`和`tabular-nums`用来控制数字的尺寸
  * `proportional-nums`表示每个数字占据的宽度并不一致,宽度大小由字形大小决定
  * `tabular-nums`表示每个数字占据的宽度都是一样的,数字就好像被约束在宽度一致的表格中
* `diagonal-fractions`和`stacked-fractions`用来控制分数的样式
  * 其中,`diagonal-fractions`表示让分子和分母尺寸变小并将两者用斜线隔开
  * `stacked-fractions`表示让分子和分母尺寸变小并将两者使用水平线隔开

>`font-variant-alternates`:主要用来让字体发生变化,包括样式和风格的变化,以及字符集和字符的变化,从而让字体变得花哨,或者变成装饰字符,注释字符等

```css
font-variant-alternates: normal; 
font-variant-alternates: stylistic() || historical-forms || styleset(#) ||character-variant(#) || swash() || ornaments() || annotation();
```

* `historical-forms`:示启用历史常用但现在不常用的字形
* 剩余的属性值均是函数值,这些函数的参数都是一个自定义的名 称,而这个自定义的名称需要使用`@font-feature-values`规则进行定义

```css
/* 在Font One字体中定义nice-style */ 
@font-feature-values Font One { @styleset { nice-style: 12;}} 
/* 在Font Two字体中定义nice-style */ 
@font-feature-values Font Two { @styleset { nice-style: 4;}}
/* 语法 */
@font-feature-values 字体名 { 
  @函数名 {
      自定义名称: 12; 
  }
} 
/* 应用定义的nice-style */ 
.nice-look { font-family: Font One, Font Two; font-variant-alternates: styleset(nice-style);}
```

1. `stylistic()`函数允许对单个字符进行样式替换
2. `styleset()`函数启用字符集的样式变化
3. `character-variant()`函数启用字符的样式变化。
   * 该函数和`styleset()`函数类似,不同之处在于`charactervariant()`函数下的单个字符的样式具有独立性,和一组其他字符显示的时候,不一定具有连贯的样式
4. `swash()`函数表示启用花式字形,例如夸张的衬线,端点,尾,部,笔锋等
5. `ornaments()`函数启用装饰字形
6. `annotation()`函数启用注释字形,如带圆圈的数字或虚实反转的字符

>`font-variant-ligatures`:用来设置文字的连字变体

```css
font-variant-ligatures: normal; 
font-variant-ligatures: none; 
font-variant-ligatures: [ common-ligatures | no-common-ligatures ] || [ discretionary-ligatures | no-discretionary-ligatures ] || [ historical-ligatures |no-historical-ligatures ] || [ contextual | no-contextual ];
```

>`font-variant-east-asian`:属性用来设置CJK语言字符的字形变化

```css
font-variant-east-asian: normal; 
font-variant-east-asian: ruby; 
font-variant-east-asian: [ jis78 | jis83 | jis90 | jis04 | simplified | traditional ];
font-variant-east-asian: [ proportional-width | full-width ];
```

>font-variant

```css
font-variant: normal; 
font-variant: none; 
font-variant: font-variant-caps || font-variant-numeric || fontvariant-alternates || font-variant-ligatures || font-variant-east-asian;
```

#### font-kerning

>font-kerning属性的作用是调整字形间距

* 语法`font-kerning: auto | normal | none`
  * `auto`是默认值,表示浏览器自己决定是否要调整字距.例如当字号(`font-size`)属性值比较小的时候,如果进行字距调整就会显得很奇怪,因此,浏览器会禁止字距调整
  * `normal`表示应用字距调整
  * `none`表示不根据字体文件中的字距信息进行字距调整

## 系统字体设置

1. 默认全局字体

   ```css
   @font-face {
     font-family: Emoji;
     src: local("Apple Color Emojiji"), local("Segoe UI Emoji"), local("Segoe UI Symbol"), local("Noto Color Emoji");
     unicode-range: U+1F000-1F644, U+203C-3299;
   }
   body {
     font-family: system-ui, —apple-system, Segoe UI, Rototo, Emoji, Helvetica, Arial, sans-serif;
   }
   ```

2. 衬线字体：

   ```css
   .font-serif {
     font-family: Georgia, Cambria, "Times New Roman", Times, serif;
   }
   ```

3. 等宽字体：

   ```js
   .font-mono {
       font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
   }
   ```
