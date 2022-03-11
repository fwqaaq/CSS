# css动画

## transform

>2D和3D属性均支持

1. 盒模型尺寸不会变化:页面中的元素无论使用什么transform属性值.该元素盒模型的尺寸盒位置都不会有任何变化
   * 例如<img>的尺寸是150px * 100px,无论运用什么属性,他的尺寸都不会变
   * 就算使用`transform:scale(2)`视觉上尺寸放大了两倍,也不会推开旁边的元素
2. 内联元素无效:所有的内联元素都是无法使用transform变换的
3. 同时使用多个转换,其格式为`transform:tranlate() rotate() scale()...`
   * 顺序会影响旋转效果(先旋转会改变坐标轴方向)

>元素使用transform属性后的变化

1. 创建层叠上下文:和opacity属性值不是1的元素类似,如果元素的transform属性值不是none,则会创建一个新的层叠上下文
   * 覆盖其它元素
   * 限制`z-index:-1`的层级表现
2. 固定定位失效
   * 如果父级设置`transform`变换,而子级设置`position:fixed`固定定位就会失效
   * 可以使用外层元素实现固定定位,然后内层元素实现动画
3. 改变overflow对绝对定位元素的限制(<span style="color:red">溢出隐藏</span>)
   * position属性值不为static的值可以影响绝对定位在overflow的表现
   * transform属性值不为none的元素可以影响**绝对定位**在overflow元素中的表现

   ```html
   <style>
     p {
       border: solid deepskyblue;
       width: 150px;
       height: 150px;
       overflow: hidden;
     }
     img {
       position: absolute;
     }
     .transform {
       transform: scale(1);
     }
   </style>
   <p>
     <img src="./css样式/形状/img/0.jpg" alt="">
   </p>
   <p class="transform">
     <img src="./css样式/形状/img/0.jpg" alt="">
   </p>
   ```

4. 改变绝对定位元素的包含块:绝对元素的包含块可以为transform属性值不为none的元素.不一定非要position不为static的第一个祖先元素

## css2D转换

> 2D转换常用的方法包括位移(translate),旋转(rotate),缩放(scale)和斜切(skew)

### translate

```CSS
.class{
  transform:translate(x,y);/* 或者分开写 */
  transform:translateX(n);
  transform:translateY(n);
}
```

* 沿着x,y轴运动.translate不会影响到其它的元素
  * 例如`transform:translate(10px,20px)`向右偏移10px,向下偏移20px
* translate的百分比是相对于自身元素的
  * 例如`translate(-50%,-50%)`向上偏移自身高度的一半,向左偏移自身宽度的一半
* 对行内标签无效

> 可以用来实现高度不固定的元素的水平垂直居中效果

```css
.class{
  position:absolute;
   left:50%;/* 父容器宽度的一半 */
   top:50%;/* 父容器高度的一半 */
  transform:translate(-50%,-50%);
}
```

### [旋转rotate()](./css样式/形状/形状.md#菱形图片04菱形html)

>正值是顺时针旋转,负值是逆时针旋转

* `transform:rotate(度数);`

| 单位 | 含义                                                         |
| ---- | ------------------------------------------------------------ |
| deg  | **角度**(范围0~360°),例如`45deg`就是顺时针旋转45°            |
| grad | **百分度**.`1grad`相当于1/400个整圆.因此100grad就相当于90deg |
| rad  | **弧度**.`1rad`相当于`180/Π`°                                |
| turn | **圈数**.`1turn`相当于360°,也就是是一圈                      |

### 缩放scale()

>缩放支持x,y两个方向的变换.但是不支持百分比

1. `transform:scale(x,y);`

   ```css
   transform:scale(1,1);/* 宽和高都放大一倍,相当于没变 */
   transform:scale(2); /* 只写了一个参数,那第二个参数和第一个一样是scale(2,2) */
   transform:scale(0.5,0.5);/* 缩小 */
   ```

2. 支持负值
   * 水平翻转`transform:scaleX(-1);`
   * 垂直翻转`transform:scaleY(-1);`

* scale缩放最大的优势:可以设置旋转中心缩放,默认以中心点缩放,而且不影响其它盒子

#### zoom属性

>zoom:normal|reset|<number>|<percntage>

* 百分比值`zoom:50%`,数值`zoom:0.5`都表示缩小到原来的一半
* `normal`:相当于`zoom:1`.默认值
* `reset`:表示用户使用`Ctrl -`和`Ctrl +`进行缩放和放大(仅有Safria支持)

>和scale()的一些区别

1. zoom是一个非标准的元素,scale()是一个标准的元素
2. 占据尺寸空间.zoom会实时改变元素占据的空间大小.例如设置<img>的尺寸是`100px*150px`,如果应用`zoom:2`就会变成`200px*300px`
3. zoom缩放中心坐标系相对于元素的左上角,并且是不可以改变的
4. zoom属性不会出翔trasnform属性后的变化.例如创建层叠上下文,影响fixed定位和overflow绝对定位的溢出隐藏

### [skew()斜切](./css样式/形状/形状.md#平行四边形03平行四边形html)

>支持x,y两个方向的斜切变换.并且支持所有的角度变换

```CSS
.class{
  transform:skew(x,y);/* 或者分开写 */
  transform:skewX(n);
  transform:skewY(n);
}
```

* `skew(10deg)`可以看作是`skew(10deg,0)`的缩写,效果等同于`skewX(10deg)`
* 旋转是360°一个轮回.斜切是180°一个轮回,元素处于90°或者270°斜切的时候是看不见的,会变成一条线

## 矩阵函数materix()

>不管是唯一,旋转,缩放还是斜切,其本质都是应用矩阵函数`materix()`进行矩阵变换

* 下面值介绍二维变换的矩阵

* `transform:materix(a,b,c,d,e,f);`总共又六个参数
  * materix六个参数是从上到下写的.后面的坐标变量就是转换之后的新坐标
  * ![ ](img/materix.png)
  * translate()函数等都是需要单位的,但是materix()就是单位省略的

1. 位移变换(translate)使用的矩阵参数是`e`和`f`
   * 公式:`transform:metrix(a,b,c,d,水平偏移距离,垂直偏移距离)`
2. 缩放变换(scale)使用的矩阵参数是`a`和`d`
   * 公式:`transform:metrix(1,c,d,1,e,f)`
   * a表示x轴缩放,d表示y轴缩放
3. 旋转变换(rotate)使用的矩阵变换参数是`a`,`b`,`c`,`d`
   * 公式:`transform:meterix(cosα,sinα,-sinα,cosα,0,0)`
4. 斜切变换(skew)使用的矩阵参数是`b`,`c`
   * 公式:`transform:meterix(1,tan(αy),tan(αx),1,0,0)`

* 使用不同的变换就会产生不同的参数,参数之间有冲突问题,如果想同时使用可以使用空格分开表示

```css
transform:materix(0.5,0.886,-0.886,0.5,0,0) 
   materix(3,0,0,1,0,0)
```

## 旋转中心点transform-origin

>变换默认是相对于元素的中心进行的,这个中心是由`transform-origin`属性决定的

* `transform-origin:x y z;`的默认值是.x轴50%,y轴50%,z轴0

1. z轴只支持数值
2. x轴,和y轴支持百分比,数值,关键字

* 属性的关键字是自带方位的,因此关键字可以颠倒

```css
/* x | y */
transform-origin:right top;
/* y | x */
transform-origin:top right;
```

* center的关键字是可以省略的.并且如果单个值,一般是省略另一个值50%(center)
* 由于`transform-origin`的默认值左边就是(0,0),不管是旋转还是位移他的中心点都是不会变换的,坐标还是(0,0)

## 3D转换

* 主要内容
  * 3D位移(简写):```transform:translate3d(x,y,z);```
    * ```transform:translateX(100px);```仅仅是在x轴上运动  
    * ```transform:translateY(100px);```仅仅是在y轴上运动  
    * ```transform:translateZ(100px);```仅仅是在z轴上运动(后面的单位一般跟px) 
  * 透视:```perspective:200px;```单位像素,数值越大物体越大,数值越小越立体
    * <span style="color:red">透视写在被观察元素的父盒子上面</span>
    * 视距是一个人眼睛到屏幕的距离
    * z是z周,物体距离屏幕的距离,z轴越大,看到的物体越大
  * 3D呈现```transform-style```
    * 控制子元素是否开启三维立体环境
    * ```transform-style:flat;```子元素不开启sd立体空间,默认
    * ```transform-style:preserve-3d;```子元素开启sd立体空间
    * 代码写给父级,但是影响的是子盒子
    * 重要

* 3D旋转rotate3d
  * ```transform:rotateX(45deg)```: 沿着x轴正方向旋转45度
    * 左手准则:拇指沿着x正轴,四指弯曲的方向就是旋转方向
  * ```transform:rotateY(45deg)```: 沿着Y轴正方向旋转45度
    * 左手准则:拇指沿着y正轴,四指弯曲的方向就是旋转方向(正值)
  * ```transform:rotateZ(45deg)```: 沿着Z轴正方向旋转45度
  * ```transform:rotatesd(x,y,z,deg)```: 沿着自定义方向旋转deg度
    * x,y,z表示矢量 ```transform:rotatesd(1,1,0,deg)```(即对角线)
