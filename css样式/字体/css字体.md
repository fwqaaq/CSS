# 字体(font)

## 理解font-size

>ex,em,rem的关系

1. ex是字符x的高度,如果`font-size`越大,自然ex对应的也就越大
2. em是字模的高度,不是字符的高度,一般有由`M`的宽度决定
   * em是根据当前`font-size`大小计算的(一般设定布局祖先的font-size大小就可以实现弹性布局),一旦布局中出现根基础font-size不一样的场景时(例如h1),此作用域所有元素的en都要重新计算
3. rem是相对于根元素`root em`:如果使用rem,计算值就不会受当前元素的`font-size`改变

>font-size:0与文本限制

* 在chrome浏览器下由12px的字号限制,就是文字的`font-size`不能小于12px,否则会乱成一团
* 不过当文本直接设置`font-size:0`,那么文字直接会被隐藏

### 字体属性

1. 字体:`font-family:"Arial";`,属性可以写英文可以写中文
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

1. **word-break**
   * `normal`:默认换行规则
   * `break-all`:任意非CJK文本间的单词换行
   * `keep-all`:不允许CJK文本中的单词换行,只能在半角空格或者连字符处换行.实际上和normal一致
2. **word-wrap**
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

* 预定义颜色:red等; 十六进制:#FF0000等; RGB:rgb(255,0,0)

### 文字阴影

> css3:我们可以使用`text-shadow`属性为盒子添加阴影
语法:`text-shadow:h-shadow v-shadow blur color;`

| 值       | 描述                         |
| -------- | ---------------------------- |
| h-shadow | 必需,水平阴影的位置,允许负值 |
| v-shadow | 必需,垂直阴影的位置,允许负值 |
| blur     | 可选,模糊距离(越大越模糊)    |
| color    | 可选,阴影的颜色              |
