# shapes布局

> shapes布局需要float属性配合使用,实现不规则图文的环绕效果

* shapes布局相关的属性:`shape-outside`,`shape-margin`和`shape-image-threshold`

## shape-outside

> shape-outside属性事shapes布局的核心,它支持一下4类

* `none`:默认值.表示普通的矩形环绕
* `<shape-box>`:表示图形盒子.比`clip-path`属性中的`<geometry-box>`(几何盒子)支持的盒子类型要少
  * 分别是`margin-box`,`border-box`,`padding-box`和`content-box`
  * `<shape-box>`是指定文字环绕式依照哪个盒子边缘来计算
* `<basic-shape>`表示基本图形函数,他和`clip-path`裁剪属性支持的基本形状函数一样
* `<image>`表示图像类,包括url链接图像,渐变函数,cross-fade()函数图像,element()函数图像等

```css
/*关键字*/
shape-outside: border-box; 
/* 函数值 */ 
shape-outside: circle(); 
shape-outside: inset(10px 10px 10px 10px); 
/* <url>值 */
shape-outside: url(image.png);
/* 渐变值 */ 
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px,red 150px);
```

### 关键字

> shape-outside属性值分别支持`none`,`margin-box`,`border-box`,`padding-box`和`content-box`

<iframe height="300" style="width: 100%;" scrolling="no" title="shapes" src="https://codepen.io/jack-zhang-1314/embed/poppygL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jack-zhang-1314/pen/poppygL">
  shapes</a> by Jack-Zhang-1314 (<a href="https://codepen.io/jack-zhang-1314">@jack-zhang-1314</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 基本形状函数

* `circle()`:圆形
* `ellipse()`:椭圆
* `inset()`内矩形(包括圆角矩形)
* `polygon()`表示多边形

1. `circle()`:函数语法`circle( [<shape-radius>]? [at <position>]? )`

   * `<shape-radius>`表示圆形的半径.可以省略
   * `position`表示圆心的位置.可以省略

   ```css
   shape-outside: circle(); 
   shape-outside: circle(50%); 
   shape-outside: circle(at 50% 50%);
   shape-outside: circle(50% at 50% 50%);
   ```

   * 和使用`border-radius`实现圆形相比更加灵活,
     * 如果想要实现一个半圆的环绕效果`shape-outside:circle(50% at 0% 50%)`

2. `ellipse()`:函数语法:`ellipse( [<shape-radius>{2}]? [at <position>]? )`

   * `<shape-radius>`:指的是水平半径和垂直半径
   * `<position>`指的是圆心位置

   ```css
   shape-outside: ellipse(50px 75px); 
   shape-outside: ellipse(at 50% 50%);
   shape-outside: ellipse(50px 75px at 50% 50%);
   ```

   * 还支持`farthest-side`(最长边的长度)和`closest-side`(最短边的长度)这两个关键字
   * 例如`ellipse(farthest-side,closest-side at 25% 25%)`.
     * 表示将浮动元素25% 25%的位置作为原点,以**距离浮动元素为边缘的最长距离作为椭圆的x坐标**,以**距离浮动元素边缘最短的距离作为椭圆的y坐标**.那么y水平半径就是75%,而垂直半径就是25%

3. `inset()`:内矩形(包括圆角矩形)`inset( <shape-arg>{1,4} [round <border-radius>]? )`

   * 其中`shape-arg`是必须参数,可以是1~4个指,这4个值分别表示当前元素的4个边缘为起点,从**顶部**,**右侧**,**底部**,**左侧**向内便宜的大小,这就是这4个值可以定义矩形形状边缘位置的原理
   * `border-radius`表示矩形形状的圆角大小,可以不设置

   ````css
   shape-outside: inset(10px 20px 30px); 
   shape-outside: inset(10px 20px 30px 40px);
   shape-outside: inset(10px 20px 30px 40px round 10px);
   ````

4. `polygon()`:多边形.`polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )`

   * `fill-rule`表示填充规则,可以是`nonzero`和`evenodd`,默认值是`nonzero`
   * 常见的语法`polygon(x1 y1, x2 y2, x3 y3, ...)`

### 图像

1. url不规则的图形:实现原理就是浏览器会解析图像的透明度和非透明度区域.在默认设置下,浏览器会让文字沿着图像的非透明区域边缘排列,实现文字环绕不规则图形布局的效果
   * 如果不是同域名的图像是没有沿着图像边缘环绕效果的,需要设置`Access-Control- Allow-Origin`头信息中配置 了当前域名站点

   ```css
   .shape { 
       float: left; 
       width: 200px; height: 300px; 
       /* 文字环绕这个鹦鹉 */ 
       shape-outside: url(./birds.png); 
       /* 鹦鹉赋色并显示 */ 
       background-color: #cd0000; 
       mask: url(./birds.png) no-repeat;
   }
   ```

2. 渐变图像可以是线性渐变,径向渐变,锥形渐变和对应的重复渐变

## shape-margin

> shape-margin就是控制文字环绕图形是,文字与元素边界的距离.<span style="color:red">由于shapes布局中,文字的环绕效果常常无视margin属性,想要文字和元素边界保持一定距离,最好使用shape-margin</span>

```css
/* 长度值 */ 
shape-margin: 10px;
shape-margin: 20mm; 
/* 百分比值 */
shape-margin: 60%;
```

* `shape-margin`的有效数值的范围是有限制的,即从0到浮动元素的边界,当`shape-margin`的属性值**超过浮动元素的边界的时候**,布局如同普通浮动布局的效果,不会产生不规则的环绕效果

## shape-image-threshold

* `shape-image-threshold`指图像环绕的时候半透明阈值,默认是0.0,也就是图像**透明度**为0的区域边界才能被文字环绕.同理,如果属性值是0.5,那么表示**透明度**小于0.5的区域都可以被文字环绕

* 例如.我们设置一个从实色到透明的倾斜线性渐变图形,该图形的透明度范围是从0~1都覆盖了,因为设定不同的`shape-image-threshold`属性值一定会产生不同的布局变化
