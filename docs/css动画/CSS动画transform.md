# css动画

## transform

>2D和3D属性均支持

1. 盒模型尺寸不会变化:页面中的元素无论使用什么transform属性值.该元素盒模型的尺寸盒位置都不会有任何变化
   * 例如\<img>的尺寸是150px * 100px,无论运用什么属性,他的尺寸都不会变
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

```css
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

### 旋转rotate()

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

>zoom:normal|reset|\<number>|\<percntage>

* 百分比值`zoom:50%`,数值`zoom:0.5`都表示缩小到原来的一半
* `normal`:相当于`zoom:1`.默认值
* `reset`:表示用户使用`Ctrl -`和`Ctrl +`进行缩放和放大(仅有Safria支持)

>和scale()的一些区别

1. zoom是一个非标准的元素,scale()是一个标准的元素
2. 占据尺寸空间.zoom会实时改变元素占据的空间大小.例如设置<img>的尺寸是`100px*150px`,如果应用`zoom:2`就会变成`200px*300px`
3. zoom缩放中心坐标系相对于元素的左上角,并且是不可以改变的
4. zoom属性不会出翔trasnform属性后的变化.例如创建层叠上下文,影响fixed定位和overflow绝对定位的溢出隐藏

### skew()斜切

>支持x,y两个方向的斜切变换.并且支持所有的角度变换

```css
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
  * ![ ](./img/materix.png)
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

>* 3D位移变换函数包括`translateX()`,`translateY()`,和`translateZ()`.其中`translateX()`,`translateY()`是2D变换.只有`translateZ()`的是3D变换
>* CSS缩放函数(scale())依然只有`scaleZ()`属于3D变换
>* 斜切skew()没有3D变换
>* 旋转变换函数`rotate()`,`rotateX()`,`rotateY()`,`rotateZ()`均是属于3D变换的

* 3D坐标,箭头所指的方向是偏移正值所对应的方向
* ![3D坐标](./img/3D-x-y.png)

### rotate3d()

```css
rotate3d(x,y,z,angle)
```

* angle表示绕着(0,0,0),(x,y,z)的向量旋转.正数表示顺时针,负数表示逆时针
* 例如以下就是表示绕着坐标(0,0,0)和(1,1,1)连成的向量线旋转45°
* ![rotate3D](./img/rotate3D.png)

>然而rotate3d()很难被使用到,使用更高频率的是`rotateX()`,`rotateY()`,`rotateZ()`

* `rotateX(angle)`:绕X轴旋转
* `rotateY(angle)`:绕Y轴旋转
* `rotateZ(angle)`:绕Z轴旋转

<iframe height="300" style="width: 100%;" scrolling="no" title="ROTATE" src="https://codepen.io/jack-zhang-1314/embed/MWrYpOY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jack-zhang-1314/pen/MWrYpOY">
  ROTATE</a> by Jack-Zhang-1314 (<a href="https://codepen.io/jack-zhang-1314">@jack-zhang-1314</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### perspective

>perspective(透视)决定你所看到的画面是二维的还是三维的

```css
img{
    perspective: 2000px;
}
```

* 这就意味着这张图片的3D视觉效果和本人在距离1.2个显示器宽度 远的地方（1680×1.2≈2000）所看到的真实效果是一致的
* ![perspective](./img/perspective.png)

> `perspective`的两种写法

1. 设置在3D渲染元素的共同父元素

   ```css
   .stage{
       perspective:600px;
   }
   .box{
       transform:rotateY(45deg);
   }
   ```

2. 也可以设置在当前3D渲染元素

   ```css
   .stage .box{
       transform:perspective(600px) rotateY(45deg);
   }
   ```

* 如果使用第一种,元素会把整个舞台作为透视元素,<span style="color:red">也就是我们看到的每一个子元素共用同一个</span>因此每一个子元素的视觉形状都不一样,这个效果比较符合显示世界的3D效果
* 如果使用第二种写法,那么每个元素都有自己的透视点,并且旋转角度一样,每个元素看上去也一样

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/jack-zhang-1314/embed/KKZwmRW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jack-zhang-1314/pen/KKZwmRW">
  Untitled</a> by Jack-Zhang-1314 (<a href="https://codepen.io/jack-zhang-1314">@jack-zhang-1314</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### translateZ()

> `translateZ()`函数可以理解透视的位置,`translateZ()`可以控制元素在视觉上的远近距离

* 现在假设**容器**设置的透视为201px

```css
.container{
    perspective:201px;
}
```

* **子元素的设置**会出现以下几种情况:

  1. 子元素设置`translateZ()`函数值越小,则子元素的视觉大小也越小
  2. 子元素设置`translateZ()`函数值越大,则子元素的视觉大小也越大
  3. 当子元素设置的`translateZ()`函数值非常接近201px时,但是不超过201px(如200px)的时候,该元素就会撑满整个屏幕
  4. 当子元素设置`translateZ()`函数值超过201px,就看不见该元素.因为该元素会移到透视点后面

  ![translateX](./img/translateX.png)

### perspective-origin()

> `perspective-origin:<position>`表示的时眼睛相对3D变换元素的位置

![perspective-origin](./img/perspective-origin.png)

* `perspective-origin`的初始值为50% 50%,表示默认的透视点是舞台元素或者元素的中心

### transform-style

> `transform-style`支持两个属性:`preserve-3d`和`flat`.控制子元素是否开启三维立体环境

* `transform-style:flat;`(默认值)子元素不开启sd立体空间.**渲染表现类似于二向箔**.把三维空间的元素压缩在二维空间

* ```transform-style:preserve-3d;```子元素开启sd立体空间

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/jack-zhang-1314/embed/JjMoJjz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jack-zhang-1314/pen/JjMoJjz">
  Untitled</a> by Jack-Zhang-1314 (<a href="https://codepen.io/jack-zhang-1314">@jack-zhang-1314</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### backface-visibility

> css世界中一个元素 背面会表现为其正唛你图像的镜像.因此,当我们使用翻转效果的是背面转向用户面前的时候,显示的是该元素的正面的图像镜像

* 如果实现扑克的翻转的3D效果.背面依然会和正面相同.所以这时候就需要隐藏背面
* `backface-visibility`支持以下两个属性
  1. `visible`(默认值),元素翻转式背面是可见的
  2. `hidden`元素翻转背面是不可见的

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/jack-zhang-1314/embed/NWXPgEM?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jack-zhang-1314/pen/NWXPgEM">
  Untitled</a> by Jack-Zhang-1314 (<a href="https://codepen.io/jack-zhang-1314">@jack-zhang-1314</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

* 设置`backface-visibility:hidden`之后,绕y轴旋转225°后元素被隐藏了.由于`rotateY`在值大于180°,小于360°的时候,我们看到的就是元素的背面了
* `backface-visibility:visible`之后元素即使绕y轴旋转225°后还是清晰可见

### 3D变换与性能加速

```css
transform: translate(-100px, 0); 
transform: translate3d(-100px, 0, 0);
```

* 上面两种写法一模一样,不过使用3d可以开启GPU加速.变换效果性能要更高
* 单纯的2d变换完全没有理由去使用3d变换
