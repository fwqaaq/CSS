# grid布局

> 给html设置`display:grid`或者`display:inline-grid`,创建网格布局

* inline-grid容器外部盒子保持内联性,因此可以和图片文字在同一行显示
* grid容器保持块状特性,`width`默认是100%,不和内敛元素在一行显示

> 分别作用在grid容器和作用在grid子项上的属性

<table cellspacing="0" border="1" >
<tr><th>作用在grid容器上</th> <th>作用在grid子项上</th></tr>
<tr><td>grid-template-columns</td><td>grid-column-start</td></tr>
<tr><td>grid-template-rows</td><td>grid-column-end</td></tr>
<tr><td>grid-template-areas</td><td>grid-row-start</td></tr>
<tr><td>grid-template</td><td>grid-row-end</td></tr>
<tr><td>grid-column-gap</td><td>grid-column</td></tr>
<tr><td>grid-row-gap</td><td>grid-row</td></tr>
<tr><td>grid-gap</td><td>grid-area</td></tr>
<tr><td>justify-items</td><td>justify-self</td></tr>
<tr><td>align-items</td><td>align-self</td></tr>
<tr><td>place-items</td><td>place-self</td></tr>
<tr><td>justify-content</td><td></td></tr>
<tr><td>align-content</td><td></td></tr>
<tr><td>place-content</td><td></td></tr>
<tr><td>grid-auto-columns</td><td></td></tr>
<tr><td>grid-auto-rows</td><td></td></tr>
<tr><td>grid-auto-flow</td><td></td></tr>
<tr><td>grid</td><td></td></tr>
</table>

* 重要的几个知识点
  1. `grid-template-columns/grid-template-rows`基础语法
  2. `fr`单位
  3. `repeat()`函数的基本语法
  4. `grid`属性缩写
  5. `grid`对齐属性
  6. `grid-area`属性

## grid父容器上的属性

### grid-template-columns/grid-template-rows

> `grid-template-columns`和`grid-template-rows`属性主要用来指定网格的**数量和尺寸**等

````css
grid-template-columns: 80px auto 100px;
grid-template-rows: 25% 100px auto 60px;
````

* `grid-template-columns`属性的三个值:表示网格分别分为3列.

  * 从左往右:80px,auto,100px

* `grid-template-rows`属性含4个值:表示网格分为了4行

  * 从上到下依次是25%,100px,auto,60px

* 可以发现这两个属性,都是对应行和列的个数

* 并且可以使用简写`grid-template`

  ````css
  grid-template: 25% 100px auto 60px / 80px auto 100px;
  ````

* 或者直接使用`grid`代替`grid-template`

> 网格线的命名:`grid-template-columns`可以给网格线命名

* 语法:`grid-template-columns:<line-name> <track-size> ...`
  * `<track-size>`:表示划分出来的网格尺寸,可以是长度值,百分比值,fr单位(网格剩余空间比例单位)和尺寸关键字等多种类型的属性值
  * `<line-name>`:表示划分的空白(网格之间的空白)名称,命名规则和css动画一样
  * 上述的示意:`grid-template-columns:[空白1] 80px [空白2] auto [空白3] 100px [空白4]`

* 使用`[]`来包裹我们自定义的名称,可以是中文名

* 使用网格需要在语义非常明确的页面才有必要使用

  * 网格线的命名主要用于`grid-column-start`,`grid-column-end`,`grid-row-start`,`grid-row-end`等属性,该功能主要作用在**grid子项上**,方便描述grid子项占据的网格区域

* 并且由于网格的中间的区域的网格线是由两边格子公用的,因此可以给网格线起名子的时候**可以起两个名字**

  ```css
  .container{
      grid-template-columns:[空白1左] 120px [空白1右 空白2左] 600px [空白2右];
  }
  ```

#### \<track-size>

> `grid-template-columns`属性的默认值是none,可以使用`grid-auto-columns`设置网格尺寸

* `grid-template-columns`属性还支持名为`subgrid`的关键字,(字面意思**次网格**),适用于当前网格既是grid子项同时也是grid容器的场景.并且这种场景元素的尺寸右父网格定义,而不是通过具体的数值指定
* `<track-size>`:支持一下全部属性
  1. 长度值
  2. 百分比值
  3. 关键字属性.包括`min-content`,`max-content`以及`auto`
  4. \<flex>数据类型,以`fr`为单位
  5. 函数值,包括:`repeat()`,`minmax()`和`fit-content()`
* `min-content`:网格布局中的同一行grid子项的高度和同一列grid子项的宽度都是一致的
  * 所以min-content指的是一排或者一列格子中所有最小内容尺寸中的最大的那个最小内容尺寸值(不是某一个格子的最小尺寸)

```html
<style>
.container { 
    display: grid; 
    grid-template-columns: min-content auto;
} 
</style>
<div class="container"> 
    <item>css</item> 
    <item></item> 
    <item>css_world</item> 
    <item></item> 
    <item>css_new_world</item> 
    <item></item>
</div>
```

* `max-content`:最终的尺寸是最大内容宽度中最大的那个
* `auto`:**尺寸的上限**是最大内容尺寸的最大值.与`max-content`不同的是,这里的尺寸会受到`justify-content`和`align-content`影响

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/jack-zhang-1314/embed/bGaRaZx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jack-zhang-1314/pen/bGaRaZx">
  Untitled</a> by Jack-Zhang-1314 (<a href="https://codepen.io/jack-zhang-1314">@jack-zhang-1314</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

* 当`justify-content: stretch;`声明下的尺寸是完全大于`max-content`尺寸的(auto上限和max-content的区别)
* 当多列的宽度同时设置auto的时候们这些列不会是等分的,<span style="color:red">而是在max-content的基础上增加同样大小的尺寸</span>
* **尺寸下限**就是最小尺寸的最大值.如果min-width,min-height的属性值比最小内容尺寸大的时候,最小尺寸就是**min-width,min-height**的属性值
* 如果没有`minmax()`函数指定了新的尺寸上下限,否则auto关键字的尺寸表现都在上面说的上限尺寸和下限尺寸之间.等同于`minmax(auto,auto)`

##### 网格布局专用单位fr

* 网格布局通常有多列或者多行.其中有些列是固定的宽度.有些列的宽度是由页面自动分配,而fr就是这些自动分配列的尺寸划分比例

* fr单位的计算规则
  1. 如果所有的fr值之和大于1,则按fr值的比例划分可自动分配尺寸
  2. 如果所有的fr值之和小于1,最终的尺寸是可自动分配尺寸和fr值的乘法计算值(会有剩余空间)

> 所有的列都使用hr

```css
.container{
  grid-template-columns:1fr 1fr 1fr;
}
```

* 按照比例划分:各容器之比都是1:1:1
* ![fr的和大于1](./img/frAndmorethan1.png)

```css
.container{
  grid-template-columns:0.2fr 0.2fr 0.2fr;
}
```

* fr的总和\<1,按照容器尺寸和fr值的计算值的乘积划分(产生40%的空间没有网格元素)
* ![fr的和小于1](./img/frAndlessthan1.png)

>部分列是固定的长度

* 如果部分列是固定的长度值,那么可以自动分配的吃寸就是容器尺寸减去固定的尺寸

```css
.container{
  grid-template-columns: 200px 1fr 1fr 1fr;
}
```

* 后面的三列去除200px,之后等分宽度

> 与auto关键字混用

* 如果部分列使用的是auto关键字,则fr的值的计算规则就与设置auto这一列的内容密切相关

```css
.container{
  grid-template-columns: auto 1fr 1fr 1fr;
}
```

* ![ ](./img/frUseAutomore1.png)
* fr值可自动分配尺寸:容器减去设置auto关键字的`fit-content`的尺寸.
  * 由于这里设置auto关键字这一列的内容较少,fit-content就是这几个字符的宽度尺寸
  * 所以最后三列的宽度就是总宽度减去`宽auto`这几个字符平分的尺寸

* fr之后小于1

   ```css
   .container{
     grid-template-columns: auto 0.2fr 0.2fr 0.2fr;
   }
   ```
  
  * ![ ](./img/frUseAutoless1.png)
  * fr的值可自动分配的空间是容器尺寸-`宽度auto`得到的尺寸.
  * 后面的3个设置`.25fr`网格的宽度为可自动分配尺寸乘以0.25
  * 剩余的宽度就是第一个网格宽度

##### 函数值

>repeat(),minmax()以及fit-content()这三个网格布局函数

* repeat()函数的性质与`fit-content()`和`minmax()`函数不同的地方在于.`repeat()`不会直接参与尺寸设置,其作用更像是一种简化的代码语法形式.
  * 可以包含`fit-content()`和`minmax()`函数
  * `fit-content()`和`minmax()`作用则是设置弹性尺寸,不可以包含repeat()

>minmax()

* `minmax(min,max)`:表示尺寸范围限制在min~max范围内

```css
minmax( [ <length> | <percentage> | min-content | max-content | auto ] , [ <length> | <percentage> | <flex> | min-content | max-content | auto ] )
```

* <span style="color:red">\<flex>数据类型(如fr单位的值)只能作为第二个参数出现</span>

```css
/* 非法,无效的 */
grid-template-columns: minmax(1fr , 200px) 1fr 1fr
```

* 在使用grid布局的同时.如果使用minmax()函数,则不同宽度设备下的尺寸会更加智能

>fit-content()

* 让尺寸适应于内容,但是不超过设定的尺寸
* 计算公式:`fit-content(limit) = max(minimum,min(limit,max-content))`
  * `minimum`(为方便可以看作min-content)是尺寸下限,如果不考虑`min-width/min-height`属性,这个尺寸就是最小内容尺寸
  * 大概效果就是:尺寸由内容决定,内容越多尺寸越大,但是不超过限定的尺寸
  * 常常用于希望grid子项的宽度随着内容变化,并且宽度不要太大

* 正式语法:`fit-content( [ <length> | <percentage> ] )`
  * 只支持数值和百分比,fr值是不合法的

```css
/* 不合法,无效 */
grid-template-columns:fit-content(1fr);
```

###### repeat():网格尺寸可以重复的时候简化代码

```css
.container{
  grid-template-columns:40px auto 60px 40px auto 60px;
  /* 等价于 */
  grid-template-columns:repeat(2,40px auto 60px);
}
```

* 正式语法:\<tracklist>就是不包括repeat()函数在内的所有`grid-template-columns`支持的属性值,包括fr值和`min-content/max-content`,以及`minmax()`和`fit-content()`函数

```css
repeat( [ <positive-integer> | auto-fill | auto-fit ] , <tracklist> )
```

* \<positive-integer>就是正整数的意思,表示尺寸重复的次数

```css
/* 合法的 */
repeat(4, [col-start] min-content [col-middle] max-content [colend])
repeat(4, [col-start] fit-content(200px) [col-end]) 
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
```

* 如果无法确定网格布局的列数,而且希望网格布局的列数随着容器宽度变化,这个时候不能设置重复次数为固定的整数值
  * 使用`auto-fill`或者`auto-fit`

> auto-fill关键字

<iframe height="300" style="width: 100%;" scrolling="no" title="auto-fill" src="https://codepen.io/jack-zhang-1314/embed/gOoRKxB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jack-zhang-1314/pen/gOoRKxB">
  auto-fill</a> by Jack-Zhang-1314 (<a href="https://codepen.io/jack-zhang-1314">@jack-zhang-1314</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

* grid容器可以放下6个100px宽的grid子项,则此时auto-fill关键字值等同于6.
* 不过由于这里的grid子项的元素\<item>只有5个,因此会产生一个空白子项
* ![真实的渲染效果](./img/auto-fill.png)

* 如果grid子项是375px,最多可以放3个100px宽的grid子项,则此时的auto-fill关键字等同于3.
  * 此时的布局效果就是剩下的元素会换行显示
  * 但是这时候右端会显示出一些空白区域影响观感,可以设置`repeat(auto-fill,minmax(100px,1fr))`

* 注意:<span style="color:red">如果使用auto-fill关键字自动填充的时候,repeat()函数不能和auto一起使用</span>
  
   ```css
   /* 不符合,无效 */
   grid-template-columns:repeat(auto-fill,100px) auto;
   ```

> auto-fit

* auto-fit关键字会把空白匿名网格进行折叠合并.而这个合并的0px大小的格子可以被认为具有单个格子轨道大小调整的功能.并且空白匿名格子两侧的过道(`grid-gap`设置空隙)也会合并

```css
.container { 
  grid-template-columns: repeat(auto-fill, 100px);
} 
.container { 
  grid-template-columns: repeat(auto-fit, 100px);
}
```

* ![ ](./img/auto-fit.png)
* auto-fit如果配合fr一起使用,可以保证无论grid容器宽度多大,<span style="color:red">grid子项都可以填满容器</span>.`repeat(auto-fit, minmax(100px, 1fr))`
  * 如果在同样的情况下使用`auto-fill`关键字,则出现一片空白区域

<iframe height="300" style="width: 100%;" scrolling="no" title="auto-fill/auto-fit" src="https://codepen.io/jack-zhang-1314/embed/qBpjyaM?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jack-zhang-1314/pen/qBpjyaM">
  auto-fill/auto-fit</a> by Jack-Zhang-1314 (<a href="https://codepen.io/jack-zhang-1314">@jack-zhang-1314</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

* <span style="color:red">repeat()函数只能用在grid-template-colums和grid-template-rows这两个属性</span>

### grid-template-areas

>grid-template-area属性用来指定网格区域的划分,注意是areas

```css
container { 
    grid-template-areas: "<grid-area-name> | . | none | ..." "...";
}
```

* \<grid-area-name>表示对应网格区域的名称,命名规则和anImation-name属性一样

* `.`表示空的网格单元格

  ```css
  grid-template-areas: 
    "a a ."
    ". b c";
  ```

  * 表示第一行第三列和第二行第一列的网格是一个空的单元格

* `none`表示没有定义单元格

![ ](./img/area.png)

* 对应的css代码

```css
.container { 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
        "apple apple apple" 
        "pear orange orange" 
        "pear orange orange" 
        "peach peach peach";
}
```

* grid子项需要四个元素

```html
<div class="container"> 
    <item class="apple"></item> 
    <item class="pear"></item> 
    <item class="orange"></item> 
    <item class="peach"></item>
</div>
```

* 指定子项的`grid-area`属性属于哪一个区域

```css
.apple{ grid-area:"apple"}
.pear{ grid-area:"pear"}
.orange{ grid-area:"orange"}
.peach{ grid-area:"peach"}
```

1. 如果我们给网格区域命名了,但是没有给**网格线命名**.则系统会自动命名,在区域名称后面加`-start`和`-end`
   * 例如网格区域名称`apple`:左侧网格线就是`apple-start`,右侧网格线就是`apple-end`
   * 实际上,设置在grid子项上的`grid-row-start`,`grid-row-end`,`grid-column-start`和`grid-column-end`属性也是可以使用`grid-template-areas`的区域命名的(因为网格线会自动生成)
2. 网格区域一定要形成规整的矩形区域,无论是L形,还是凹的或凸的形状都会认为是无效的属性值

### grid-template

> grid-template属性是`grid-template-rows`,`grid-template-columns`和`grid-template-areas`属性的缩写

```css
.container { 
    grid-template: none;
} 
.container { 
    grid-template: <grid-template-rows> / <grid-template-columns>;
} 
.container { 
    grid-template: [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?;
}
```

1. 属性值none表示3个css属性值都是none

2. \<grid-template-rows> / \<grid-template-columns>表示行尺寸或者是列尺寸的设置.支持函数的形式

3. 包含`grid-template-areas`的写法.\<string>是必须的,指的就是`grid-template-areas`的属性值(每一行的区域名称)

   * 例如上面的代码可以简写为

     ```css
     .container { 
         grid-template-areas: 
             "apple apple apple" 1fr
             "pear orange orange" 1fr
             "pear orange orange" 1fr
             "peach peach peach" 1fr
             / 1fr 1fr 1fr;
     }
     ```

   * 只有\<string>类型是必须的,其他的.例如\<track-size>都是可以省略的(会使用auto代替)

   * 网格线的名称(也就是\<line-name>数据类型)也是可以省略的.如果分开写,必须在同一个括号里

     ```css
     .container { 
         /* 合法的*/
         grid-template-columns: 1fr [col-name1-end col-name2-start] auto;
     }
     ```

   * 注意:<span style="color:red">包含\<string>的grid-template缩写不支持repeat()函数</span>

> 并且`grid-template`很多时候不会重置隐式的grid属性(如`grid-auto-columns`属性,`grid-auto-rows`,和`grid-auto-flow`).大多数时候使用`grid`缩写来代替grid-template

### grid-auto-columns和grid-auto-rows

> grid-auto-columns和grid-auto-rows主要用于指定任何自动生成的网格(也称隐式网格)的尺寸大小

* **隐式网格**:非正常网格,其在grid子项多于设置的单元格格数量的,或者grid子项的位置出现在设定的网格范围之外的时候.
* **显示网格**:在规定的容器内显示的网格

```html
<style>
  .container {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    /* 隐式网格宽度是60px */
    grid-auto-columns: 60px;
  }
  .item-b {
    /* 只有2列尺寸设置,但这里列范围大于2,隐式网格创建 */
    grid-column: 3 / 4;
    background-color: rgba(255, 255, 0, .5);
    border: 1px solid rgb(43, 75, 68);
  }
</style>
<div class="container">
  <item class="item-a">a</item>
  <item class="item-b">b</item>
</div>
```

* ![ ](./img/grid-auto-columns.png)
* `.item-b`的grid-template属性的范围是第三网格线到第四网格线之间.由于超过grid-template的2列网格范围.因此.`.item-b`是隐式的网格

* 属性值语法

```css
.container { 
  grid-auto-columns: <track-size> ...; 
  grid-auto-rows: <track-size> ...;
}
```

* 默认值是auto,可以是长度值,百分比值以及fr值.也可以是`min-content`关键字和max-content关键字,也支持`minmax()`函数,和`fit-content()`函数.但是不支持`repeat()`函数

### grid-auto-flow

>grid-auto-flow属性用来定义子项目元素的自动流动状态,类似于弹性布局中的flex-direction

* 语法:`grid-auto-flow:[row | column] || dense`

* `row`:默认值.表示没有指定位置网格在垂直列方向上自然排列
* `column`:表示没有指定位置的网格在垂直(列)方向上自然排列
* `dense`:表示网格的自然排列启用**密集**打包算法.
  * 也就是说,如果之后出现的网格比较小.则尝试有没有合适的地方放置该网格,使网格尽可能紧凑

* grid子项从第一行开始.从左往右依次填入网格格子,全部格子填满后,继续转到下一行,从左往右再次填满格子
  * 由于默认值为`row`才展现出这样的排序方式.如果修改为column,会就会优先垂直排列

#### dense

> dense:将格子充分利用,让整个排列紧密相连

```css
.container { 
  display: grid; 
  grid-template-columns: 1fr 1fr;
} 
.container item:first-child { 
  grid-column-start: 2;
}
```

* ![ ](./img/dense.png)
* 如果使用`grid-auto-flow:dense;`.原本的第一个格子空缺会被第二个格子填补.网格会再次紧密

### grid

* grid使缩写属性.grid是这些CSS属性的缩写集合:`grid-template-rows`,`grid-template-columns`, `grid-template-areas`,`grid-auto-rows`,`grid-auto-columns`和`grid-auto-flow`

>grid:none

* 表示所有的属性都是初始值

>grid:\<grid-template>

* 这个语法和grid-template一模一样

>auto-flow在后面

* 第三种和第四种语法都需要用到`auto-flow`关键字,auto-flow关键字是一个只在grid缩写属性中出现的关键字,<span style="color:red">本质上是一个变量的关键字</span>

* 正式语法:`grid: <grid-template-rows> / [ auto-flow && dense? ] <grid-auto-columns>?`

* `<grid-auto-columns>`:**隐式网格**的宽度大小.?表示可有可无的意思
* `auto-flow && dense?`:属性就是grid-auto-flow属性的值,等同于`row`,`column`,`row dense`或者`column dense`
* <span style="color:red">auto-flow关键字是否解析成`row`还是解析成`column`,是根据auto-flow是根据他在`/`左侧还是右侧决定的</span>
   1. 如果`auto-flow`关键字在`/`左侧,则解析为`row`关键字
   2. 如果`auto-flow`关键字在`/`右侧,则解析为`column`关键字

* 设计成这样是为了避免语法错误

```css
.container{
  /* 语法错误 */
  grid:100px 300px/row 200px;
}
```

* 例如这样写:会将auto-flow关键字解析为column.并且省略了dense.启用了\<grid-auto-columns>

```css
.container{
  grid:100px 300px/auto-flow 200px;
}
/* 等同于 */
.container{
  grid-template-rows: 100px 300px;
  grid-auto-flow: column;
  grid-auto-columns: 200px;
}
```

>auto-flow在前面

* 正式语法`grid: [ auto-flow && dense? ] <grid-auto-rows>? / <grid-templatecolumns>`
* 这里的语法表示`/`前面是隐式网格,后面是显示网格
* 由于`auto-flow`在`/`前面,因此解析为row

```css
.container{
  grid:auto-flow dense 100px/1fr 2fr;
}
/* 等同于 */
.container{
  grid-auto-flow:row dense;
  grid-auto-rows:100px;
  grid-template-columns:1fr 2fr;
}
```

* 总结
  1. 如果么有隐式的网格.且无须使用改变网格布局的自然流向,则使用`grid-template`
  2. 最后的两个语法出现在隐式网格,或者需要改变网格的自然布局流向的时候.要么使用`grid-template/auto-flow`,要么使用`auto-flow/grid-template`

### gap

>gap属性是row-gap和column-gap的缩写

```css
.container{
  gap:<row-gap> <column-gap>;
}
```

#### column-gap 和 row-gap

>column-gap和row-gap属性对网格布局中的各个网格之间的间隙来进行设置的.无论是分栏布局,弹性布局,还是网格布局都是支持的

```css
.container{
  column-gap: <line-size>;
  row-gap: <line-size>;
}
```

* 给定一个简单的2*2的网格,设置水平间隙为20px,垂直间隙为10px

```css
.container { 
  display: grid; 
  height: 150px; 
  grid: 1fr 2fr / 2fr 1fr; 
  /* 列间隙20px,行间隙10px */ 
  column-gap: 20px; row-gap: 10px;
  /* 使用gap */
  gap: 10px 20px;
}
```

### justify-items和align-items

> 由于网格布局在维度上多了列的概念,所以会拥有弹性布局中没有的列的概念(justify-items,justify-slef等),因为他会水平方向填满容器

* `justify-items`:定义元素在水平方向对齐表现
* `align-items`:定义元素在网格中 的垂直表现

#### justify-items

* 语法:`justify-items:stretch | start | end | center`
  * `stretch`:元素水平尺寸拉伸,填满整个网格的水平空间
  * `start`:元素的水平尺寸收缩为内容大小,同时沿着网格线左侧对齐
  * `end`:元素的水平尺寸收缩为内容大小,同时沿着网格线的右侧对齐
  * `center`:元素的水平尺寸收缩为内容大小.并在当前网格的内部水平居中对齐

>还支持以下不常用的属性

1. `self-start`:他和start的区别在于相对当前元素所处的网格的起始线对齐
   * 例如第二个网格元素设置了`direction:rtl`,则可以使用`self-start`设置右对齐.和其他网格区分开
2. `self-end`:相对于当前网格的所处的结束线对齐
3. `left`:无视文档流的方向,元素尺寸收缩,同时容器的网格线左对齐
4. `right`:无视文档流方向,元素尺寸收缩.同时容器的网格线右对齐
5. `legacy`:**新的默认值**(以前是auto).让关键字属性值,更有效的被子元素继承

#### align-items

* 语法:

```css
.container { 
  align-items: normal | stretch | start | end | center | baseline;
}
```

* `normal`:默认值.使用场景的不同表现为stretch或者start
* `stretch`:表现为元素的尺寸在垂直方向进行拉伸,以填满整个网格的垂直空间
* `start`:元素的垂直尺寸收缩为内容大小,同时沿着上网格线对齐
* `end`:元素的垂直尺寸收缩为内容大小,同时沿着下网格线对齐显示
* `center`:元素表现为垂直尺寸收缩为内容大小,同时在当前网格内部垂直居中对齐展示
* `baseline`:每一行的各个grid子项沿着基线对齐

>在绝大多数场景下normal的表现和stretch的表现是一模一样的.

* 如果grid子项具有内在的尺寸或者具有内在比例的元素,则此时normal的表现类似于start属性值的表现(例如\<img>具有内在的尺寸和比例会表现为`start`)

#### place-items

>place-items属性可以让`align-items`和`justify-items`属性写在单个声明中

* 语法`place-items:<align-items> <justify-items>?`
* `places-items`在flex布局中也是有效的.不过只能控制垂直方向的

### justify-content和align-content

>justify-content和align-content属性分别指定了网格的整体水平方向和垂直方向的分布对齐方式

* 如果justify-content与align-content属性起作用,就需要让grid子项的总尺寸小于grid容器的尺寸

* 正式语法

```css
justify-content: normal | stretch | start | end | center | spacebetween | space-around | space-evenly; 
align-content: normal | stretch | start | end | center | space-between | space-around | space-evenly;
```

* `normal`:默认值,效果和stretch一样
* `stretch`:可以看成这两个属性的默认值
* `start`:css逻辑属性,与文档流方向有段.水平方向默认左对齐,垂直方向默认上对齐
* `end`:css逻辑属性,与文档流方向有段.水平方向默认右对齐,垂直方向默认下对齐
* `center`:水平居中或者垂直居中
* `space-between`:grid子项两端对齐,中间空余空间等分
* `space-around`:每个grid子项的上下或左右两侧都环绕互不干扰的相同尺寸的空白间距,在视觉上表现为grid子项边缘处的空白尺寸只有中间空白尺寸的一半
* `space-evenly`:每个grid子项上下或者左右的空白间距完全相等

#### place-content

>使用place-content属性可以让align-content和justify-content属性写在同一个css声明中

* 语法:`place-content: <align-content> <justify-content>?`
* 并且`place-content`在弹性布局中也是有效的

## grid子项上的属性

### 区间范围设置设置属性

> 列范围属性`grid-column-start/grid-column-end`和行范围设置`grid-row-start/grid-row-end`应用于grid子项通过指定grid子项的行和列来表明当前grid子项的占据范围

```css
.item { 
  grid-column-start: <integer> | <name> | <integer> <name> | span <number> | span <name> | auto; grid-column-end: <integer> | <name> | <integer> <name>| span <number> | span <name> | auto; grid-row-start: <integer> | <name> | <integer> <name>| span <number> | span <name> | auto; grid-row-end: <integer> | <name> | <integer> <name>| span <number> | span <name> |auto;
}
```

1. \<integer>指定起止于第几条网格线,可以是负数.但是不能是0,<span style="color:red">负整数表示从右侧开始计数</span>

   ```css
   .container{
     display:grid;
     grid: auto/repeat(6,1fr);
   }

   .item{
     grid-column-start: -3;
     grid-column-end: 2;
     background: deepskyblue;
   }
   ```

   * 表示`.item`元素起始于从右边往左的第三条线(包括边缘线).终止于从左边缘往右数的第二条线(包括边缘线).
   * 这样grid子项就会占据2~4个显示网格
2. \<name>是自定义网格线的名称.<span style="color:red">这里名称会有一个自动补全-start后缀和-end后缀</span>的特性

   ```css
   .container{
     display:grid;
     grid-template-columns: [A-start] 100px [A-end B-start] auto [B-end] auto;
   }
   ```

   * 使用下面的代码就可以找到而网格线
     * 浏览器会在`grid-column-start`找不到名称为A的网格线的时候,会自动补全`-start`继续寻找;其他元素痛呀如此
     * 于是`.item`元素就会从全歼[A-start]到[B-end],跨越两个显示

   ```css
   .item{
     grid-column-start: A;
     grid-column-end:B;
     background: deepskyblue;
   }
   ```

3. \<integer> \<name>这个语法是高阶应用
   * 当前名称为\<name>的第\<inteder>个网格线.从定义上看需要多个网格线才能匹配
   * 如果没有多的相同名称的网格线.那么浏览器会自动创建符合数量的隐式网格,这些隐式网格的网格线都是指定这个名称

   ```css
   .container{
      grid-template-columns: [A] 80px [B] auto [C] 100px [D];
      height: 100px;
      background-color: rgb(85, 49, 2);
   }
   .item{
      grid-column-start: B 4;
      grid-column-end: D;
      background: deepskyblue;
   }
   ```

   * 我们设置的`grid-column-start:B 4;`但是B的名称只有一个,并且第四个B的网格线作为边缘线开始(系统会自动创建)
     * <span style="color:red">隐式网格会创建于显示网格的后面或者下面</span>.就是列的起始位置,因此创建在显示网格的后面,也就是网格线D的后面
     * 最终的尺寸.由于B-C和D至B4这四个格子平分剩余的尺寸形成(由于设置的是auto)
4. `span<number>`表示当前网格会自动跨越指定的网格数量
5. `span <name>`表示当前网格会自动扩展,直到选中指定的网格线名称
6. `auto`是默认值表示自动,默认跨度是1个格子

```html
<style>
.container {
  display: grid;
  height: 300px;
  grid-template-columns: [col-one] 80px [col-two] auto [col-three] 100px [col-last];
  grid-template-rows: [row-one] 25% [row-two] 100px [row-three] auto [row-last];
  background-color: rgb(85, 49, 2);
}
.item{
  grid-column-start: 2;
  grid-column-end: col-three;
  grid-row-start: row-one;
  grid-row-end: 3;
  background: deepskyblue;
}
</style>
<div class="container">
  <div class="item"></div>
</div>
```

* 每条网格线都内置了\<integer>数值.从1开始计数,水平和垂直的都是4个网格线,含边缘

1. `grid-column-start: 2;`表示item网格从左侧的第二条开始
2. `grid-column-end:col-three;`网格右侧结束于右侧名称为col-three的网格线
3. `grid-row-start: row-one;`第一行开始.表示从名称为`row-one`的网格线开始
4. `grid-row-end:3`表示从item网格下的方结束于第三条线

#### span关键字

>span关键字和\<table>中的colspan和rowspan属性的作用类似,表示合并单元格

```css
.item{
  /* 依然用上面的案例 */
  grid-column-start: 2;
  grid-column-end: col-three;
  grid-row-start: row-one;
  grid-row-end:span 3;
  background: deepskyblue;
}
```

* 直接看`grid-row-start`,从名字为`row-one`的网格线开始.然后结束`grid-row-end:span 3;`:表示右3行网格进行合并

1. `span \<number>`中的\<number>不能是负值,也不能是0,也不能是小数
   * 并且不建议`grid-column-start`和`grid-column-end`同时使用`span <number>`语法,因为完全没有必要,且grid-column-end设置的`span <number>`值不会产生任何效果

   ```css
   grid-column-start: span 6;
   grid-column-end: span 2;

   /*等同于*/
   grid-column-start:span 6;

   /*两者分开设置:表示区间范围是2个格子.结束于第四条线*/
   grid-column-start: span 2;
   grid-column-end: 4;

   /*两者分开设置:表示区间范围是4个格子.开始于第二条线*/
   grid-column-start: 2;
   grid-column-end:span 4;
   ```

2. `span <name>`

   > 如果网格中有一个网格线的命名时B或者B-start

   ```css
   .container { 
     display: grid; 
     grid-template-columns: [A] 80px [B] auto [C] 100px [D] auto auto;
   }
   ```

   * .item元素跨越第二和第三列

   ```css
   .item{
     grid-column-start: span B;
     grid-column-end: 4;
  
     /*等同于*/
     grid-column-start: B;
     grid-column-end: 4;
   }
   ```

   > 如果网格中有多个网格线的命名是B或者是B-start

   ```css
   .container { 
     display: grid; 
     grid-template-columns: [B] 80px [B] auto [B] 100px [D] auto auto;
   }
   ```

   * 则`span B`表示的是<span style="color:red">离grid-column-start位置最近的一个网格线B</span>
   * 如果属性值**不是span B而是B**,起始位置会是离`grid-column-end`位置最远的而网格线B

   ```css
   .container { 
     display: grid; 
     grid-template-columns: [A] 80px [C] auto [C] 100px [D] auto auto;
   }
   ```

   >如果网格线命名没有B或者B-start

   ```css
   .container { 
     display: grid; 
     grid-template-columns: [A] 80px [C] auto [C] 100px [D] auto auto;
   }
   ```

   * 此时的span关键字就会自己在显示网格对应方位的边上创建名称为B的隐式网格线
   * `grid-column-start/grid-row-start`是起始方位,那么span关键字就会在第一个显式网格的前面创建一个名称为B的隐式网格
   * `grid-column-end/grid-row-end`是结束方位,那么span关键字就会在显式网格后面创建一个网格线名称为B的隐式网格

   ```css
   .item{
     grid-template-start: span B;
     grid-template-end: 4;
   }
   ```

   * .item元素会跨域第一至第四列,其中第一列是新建的隐式网格

### grid-column和grid-row

>grid-column和grid-row都是缩写属性,前者是`gridcolumn-start/grid-column-end`属性的缩写,后者是`grid-row-start/grid-row-end`属性的缩写

* 正式语法

```css
grid-column: <grid-line> [ / <grid-line> ]? 
grid-row: <grid-line> [ / <grid-line> ]?
```

* 其实就是将原始css属性使用`/`分开

```css
.item{
  grid-column:2/span col-three;
  grid-row: row-one / span 3;

  /*等同于*/
  grid-column-start: 2; 
  grid-column-end: span col-three; 
  grid-row-start: row-one;
  grid-row-end: span 3;
}
```

### grid-area

>grid-area是`grid-column-start`,`grid-column-start`,`grid-row-end`和`grid-column-end`的缩写

* 并且可以直接使用`grid-template-areas`的名称作为属性值
* 不过`grid-template-areas`还是会通过这四个属性的值来影响`grid-area`

```css
grid-area: <area-name> | <row-start> / <column-start> / <row-end> / <column-end>
```

* `<area-name>`指区域名称,由grid-template-areas属性创建
* `<row-start> / <column-start> / <row-end> /<column-end>`指占据网格区域的行列起止位置

```css
.container { 
  grid: 1fr 1fr 1fr / 1fr 1fr 1fr 1fr;
} 
.item { 
  grid-area: 1 / 2 / 3 / 4;
}
```

* 创建一个4*3的网格,同时.item元素设置`grid-area: 1 / 2 / 3 / 4;`
  * 水平网格线起止是1,3.垂直网格线的起止是2,4

#### 深入了解grid-area

* 语法:`grid-area: <grid-line> [ / <grid-line> ]{0,3}`

* grid-area属性直接使用`grid-template-areas`网格的名称也是有效的
  * 因为浏览器汇总自动给当前的网格线进行命名,且命名不会被`grid-template-rows`或者`grid-template-columns`属性中的网格命名给覆盖

  ```css
  .container { 
    display: grid;
    grid: ". . ." 1fr
          ". A ." 1fr 
          ". . ." 1fr 
          / 1fr 1fr 1fr;
  }
  ```

  * 此时浏览器会把网格A四周的网格线自动命名为`A-start`或者`A-end`
  * ![ ](./img/grid-area.png)
  * 因此当我们设置`grid-area:A`.实际上是指`grid-area:A-start/A-start/A-end/A-end;`
  * grid-area属性支持1~4个网格线名称,不同数量对应的含义如下

1. 完整的4个值.依次表示`grid-row-start`,`grid-column-start`,`grid-row-end`和`grid-column-end`这4个属性

   ```css
   grid-area: 4 A / span 4 / B / D;

   /*等同于*/
   grid-row-start: 4 A; 
   grid-column-start: span 4; 
   grid-row-end: B;
   grid-column-end: D;
   ```

2. grid-area属性有3个值,把grid-columnend值省略
   * `grid-column-start`值是自定义的命名,则认为`grid-column-end`值也是这个自定义命名的值
   * 如果`gridcolumn-start`值是其他值,则认为`grid-column-end`值是`auto`

   ```css
   grid-area: A / B / C;
   /*等同于*/
   grid-area: A / B / C / B;

   grid-area: 1 / 2 / 3;
   /*等同于*/
   grid-area: 1 / 2 / 3 / auto;
   ```

3. grid-area属性是2个值,说明grid-row-end值也被省略了
   * 如果`grid-row-start`值是自定义的命名,则认为`gridrow-end`值也是这个自定义命名的值
   * 如果`grid-row-start`值是其他值,则认为`grid-row-end`值是auto

   ```css
   grid-area: A / B ;
   /*等同于*/
   grid-area: A / B / A / B;

   grid-area: 1 / 2 ;
   /*等同于*/
   grid-area: 1 / 2 / auto / auto;
   ```

4. `grid-area`属性仅有1个,说明grid-column-start值也被省略
   * 如果`grid-row-start`值是自定义的命名,则 4个值都使用该命名
   * 如果`grid-row-start`值是其他值,则认为剩下的其他3个值是auto

   ```css
   grid-area: A ;
   /*等同于*/
   grid-area: A / A / A / A;

   grid-area: 1 ;
   /*等同于*/
   grid-area: 1 / auto / auto / auto;
   ```

### justify-self和align-self

```css
.item { 
  justify-self: auto | normal | stretch | start | end | center | baseline; 
  align-self: auto | normal | stretch | start | end | center | baseline;
}
```

>除了auto属性值,其他各个属性值的含义与justify-items和align-items属性中属性值的含义是一样的

* `auto`是默认值,表示使用grid容器上设置的justify-items或align-items属性值
* `normal`通常表现为stretch拉伸,如果是具有内在尺寸和原始比例的元素,则表现为start
* `stretch`指grid子项拉伸
* `start`指grid子项起始位置对齐
* `end`指grid子项结束位置对齐
* `center`指grid子项居中对齐
* `baseline`指grid子项第一行文本基线对齐
