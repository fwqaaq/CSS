# css布局

## flex布局

> 弹性布局分为4个大的类目,分别是**流向控制**,**对齐设置**,**顺序控制**,和**弹性设置**

1. 流向控制:对应`flex-flow`属性以及相关属性
2. 对齐设置:在css属性的弹性布局和网格布局中是通用的
3. 顺序控制:对应`order`属性,平时用的不多
4. 弹性设置:对应flex属性以及相关的属性

### 布局原理

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

### flex-wrap

> `flex-wrap`属性用来控制子项是单行还是换行显示,以及在换行的情况下,每一行是否在垂直方向的反方向显示

* 和`wrap`相关的大多数是换行,例如`word-wrap`,`white-space:no-wrap`或者`pre-wrap`
* 语法:`flex-wrap:nowrap | wrap | wrap-reverse`
  1. `nowrap`:是默认值.表示flex子项是单行显示,且不换行.由于子项不换行,因此可能显示子项的宽度溢出
     * 子项可以设置`max-width:100%`可以避免宽度溢出,因为`max-width`的优先级大于`width`的优先级,图片从固定的变为相对值,`flex`子项的最大尺寸不会是width
  2. `wrap`:flex容器宽度不足的时候,flex子项会换行显示.
  3. `wrap-reverse`:flex容器宽度不足的时候,flex子项会换行显示,但是会从下往上显示.
     * 相当于wrap倒过来显示(第一行换到最后一行,依次排列)

### flex-flow

> `flex-flow`:复合属性,相当于你是设置了`flex-direction`和`flex-wrap`

* 语法:`flex-flow:<flex-direction>||<flex-wrap>`

### 父元素属性

| 属性            | 描述                                               |
| --------------- | -------------------------------------------------- |
| flex-direction  | 设置主轴方向                                       |
| justify-content | 设置主轴上的子元素排列方向                         |
| flex-wrap       | 设置子元素是否换行                                 |
| align-content   | 设置侧轴上的子元素的排列方式(多行)                 |
| align-items     | 设置侧轴上的子元素的排列方式(单行)                 |
| flex-flow       | 复合属性,相当于你是设置了flex-direction和flex-wrap |

* ```justify-content``` : 设置主轴上的子元素排列方向
  * <span style="color:red">注意:使用这个一定要确定主轴是哪一个</span>

| 属性值        | 说明                                          |
| ------------- | --------------------------------------------- |
| flex-start    | (默认值)从头部开始 , 如果主轴是x轴,则从左到右 |
| flex-end      | 从尾部开始排列                                |
| center        | 在主轴居中对齐(如果主轴是x轴,则水平居中)      |
| space-around  | 平分剩余空间                                  |
| space-between | 先两边贴边 再平分剩余空间(重要)               |

* ```flex-wrap```  设置子元素是否换行

| 属性值 | 说明            |
| ------ | --------------- |
| nowrap | (默认值),不换行 |
| wrap   | 换行            |

* ```align-items```  设置侧轴上的子元素的排列方式(单行)

| 属性值     | 说明                   |
| ---------- | ---------------------- |
| flex-start | 从上到下               |
| flex-end   | 从下到上               |
| center     | 挤在一起居中(垂直居中) |
| stretch    | 拉伸(默认值)           |

* ```align-content``` 设置侧轴上的子元素的排列方式(多行)
  * <span style="color:red">注意:设置子项在侧轴上的排列方式并且只能用于子项出现换行的情况(多行),在单行下是没有效果的</span>

| 属性值        | 说明                                |
| ------------- | ----------------------------------- |
| flex-start    | (默认值)在侧轴的头部开始排列        |
| flex-end      | 侧轴的尾部开始排列                  |
| center        | 在侧轴中间显示                      |
| stretch       | 设置子项元素高度平分父元素高度      |
| space-around  | 子项在侧轴平分剩余空间              |
| space-between | 子项在侧轴先分布两头 再平分剩余空间 |

* ```flex-flow```  复合属性,相当于你是设置了flex-direction和flex-wrap,语法:例```flex-flow:column wrap;```

### 子元素常见属性

> flex属性:定义子项目分配剩余空间,用flex来表示占多少分数

```css
.item{
  flex:number;/* default 0 */
}
```

* flex的复合属性:```flex:flex-grow flex-shrink flex-basis```

   | 属性        | 描  述                                                                                                    |
   | ----------- | --------------------------------------------------------------------------------------------------------- |
   | flex-grow   | 定义放大比例,默认为0,规定项目相对于其他灵活的项目进行扩展的  量                                           |
   | flex-shrink | 定义了项目的缩小比例,仅在宽度之和大于容器的时候才会发生收缩,其收缩的大小是依据 flex-shrink 的值,默认为  1 |
   | flex-basis  | 给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大  小                 |

> `align-self` 控制子项自己在侧轴上的排列方式

* <span style="color:red">注意:align-self属性允许单个项目有与其它项目不一样的对齐方式,可覆盖align-items属性</span>默认值auto,表示继承父元素的align-items属性,如果没有父元素,则等同于stretch

> ```order```属性定义项目的排列顺序

* 数值越小,排列越靠前,默认为0
* 注意:和```z-index```不一样

### 媒体查询(Media Query)

* @media可以针对不同的屏幕尺寸设置不同的样式
* 语法规范:```@media mediatype and|not|only (media feature){CSS-Code;}```
  * 用@media开头,注意@符号
  * mediatype 媒体类型

      | 值    | 解释说明                         |
      | ----- | -------------------------------- |
      | all   | 所有设备                         |
      | print | 用于打印机和打印预览             |
      | scree | 用于电脑屏幕,平板电脑,智能手机等 |

  * 关键字 and|not|only
    * and:可以将多个媒体特性链接到一起,相当于且
    * not:排除某个媒体类型,相当于非的意思,可以省略
    * only:指定某个特定的媒体类型,可以省略 
  * media future 媒体特性 必须有小括号包含

      | 值        | 解释说明                             |
      | --------- | ------------------------------------ |
      | width     | 定义输出设备中页面可见区域的宽度     |
      | min-width | 定义输出设备中页面最小可见区域的宽度 |
      | max-width | 定义输出设备中页面最大可见区域的宽度 |

* 例:

```css
/* 表示在频幕上并且最大的宽度是800px,只有在800px以下,才能设置成我们想要的样式 */
@media screen and(max-width:800px){
    body{
       background-color:red; 
 } 
}
```

### 媒体查询+rem实现元素动态大小变化

* 针对不同的媒体使用不同的stylesheets(样式表),就是在link中判断设备的尺寸,然后应用css文件

> 语法:```<link rel="stylesheet" media="mediatype and|not|only (media feature)"> href="url"```

## 移动端布局

### meta视口

```html
<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">
```

| 属性          | 解释说明                                      |
| ------------- | --------------------------------------------- |
| width         | 宽度是指的是viewport宽度,可以设置device-width |
| initial-scale | 初始缩放比例,大于0的数字                      |
| maximum-scale | 最大缩放比例,大于0的数字                      |
| minimum-scale | 最小缩放比例,大于0的数字                      |
| user-scalable | 用户可以缩放,yes或no(1或0)                    |
