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

## flex布局

### 布局原理

1. 当为父盒子设为flex布局以后,子元素的float,clear和vertical-align属性将失效
2. 通过给父盒子添加flex属性,来控制子盒子的位置和排列方式

### 父元素属性

| 属性            | 描述                                               |
| --------------- | -------------------------------------------------- |
| flex-direction  | 设置主轴方向                                       |
| justify-content | 设置主轴上的子元素排列方向                         |
| flex-wrap       | 设置子元素是否换行                                 |
| align-content   | 设置侧轴上的子元素的排列方式(多行)                 |
| align-items     | 设置侧轴上的子元素的排列方式(单行)                 |
| flex-flow       | 复合属性,相当于你是设置了flex-direction和flex-wrap |

* ```flex-direction```设置主轴方向,子元素跟着主轴来排列

| 属性值         | 说明             |
| -------------- | ---------------- |
| row            | (默认值)从左到右 |
| row-reverse    | 从右到左         |
| column         | 从上到下         |
| column-reverse | 从下到上         |

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
