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
3. <input>标签阿牛设置`text-indent`无效,如果是输入框,和<textarea>一样有效
4. <button>设置按钮text-indent有效

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

>由于<dt>和<dd>都是块级元素,往往他们都会一个元素占一行.即使设置以下的操作

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

>当我们再加一个邮箱<dd>时,发现这个邮箱并没有在单独一行中

* 由于我们给每一个<dd>行尾都添加了一个换行符,每个值都会被分到单独一行
* 所以我们只希望<dt>后的<dd>可以换行,只要<dd>后面还有<dd>就要使用,插入

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

> 一般网页中的代码会用<pre>(pre不会破坏代码原来的样式,会一行行展示)或者<code>(将代码破坏成一行)显示

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
