### CSS3过渡(重点)

```transition:要过度的属性 花费时间 运动曲线 何时开始;```

1. 属性:想要变化的css属性,宽度高度 背景颜色 内外边距都可以.如果想要所有的属性都变化过度,写一个all就可以
2. 花费时间: 单位是秒,(必须写单位)
3. 运动曲线:默认是ease(可以省略)
4. 何时开始:单位是 秒,可以设置延迟触发事件 默认是0s(可以省略)

## CSS3动画

### 2D转换translate

```CSS
.class{
  transform:translate(x,y);/* 或者分开写 */
  transform:translateX(n);
  transform:translateY(n);
}
```

* 沿着x,y轴运动
* translate不会影响到其它的元素
* translate的百分比是相对于自身元素的translate(50%,50%)
* 对行内标签无效

* 居中

```css
.class{
  position:absolute;
   left:50%;/* 父容器宽度的一半 */
   top:50%;/* 父容器高度的一半 */
/*   margin-left:-100px; 
  margin-top:-100px;*/
  transform:translate(-50%,-50%);
  width:200px;
  height:200px
}

```

### 旋转rotate

1. ```transform:rotate(度数);```

2. 注意
   * rotate里面跟度数,单位是deg,比如```rotate(45deg)```
   * 角度为正时,顺时针,负时逆时针
   * 默认旋转的中心点时元素的中心点

### 旋转中心点transform-origin

1. ```transform-origin:x y;```

2. 注意
   * 参数用空格隔开
   * x y默认转换的中心点时元素的中心点(50% 50%)等价于(center center)
   * 还可以给x y设置 像素 或者 方位名词( top bottom left right center)

### 缩放scale

1. ```transform:scale(x,y);```

2. 注意:
   * 注意x和y用,隔开
   * ```transform:scale(1,1);```宽和高都放大一倍,相当于没变
   * ```transform:scale(2,2);```宽和高都放大了2倍
   * ```transform:scale(2);``` 只写了一个参数,那第二个参数和第一个一样是scale(2,2)
   * ```transform:scale(0.5,0.5);```缩小
   * scale缩放最大的优势:可以设置旋转中心缩放,默认以中心点缩放,而且不影响其它盒子

><span style="color:red">注意</span>

   1. 同时使用多个转换,其格式为```transform:tranlate() rotate() scale()...```
   2. 顺序会影响旋转效果(先旋转会改变坐标轴方向)
   3. 当同时又位移和其它属性时,记得要将位移放到最前面

### CSS动画

* 制作动画:
    1. 先定义动画
    2. 在调用动画

1. 用keyframes定义动画(类似定义类选择器)

```css
@keyframs move{
  0%{
    width:100px;
  }

  100%{
    width:200px;
  }
}

div{
  width:200px;
  height:200px;
  background-color:blue;
  margin:100px auto;
  /* 调用动画 */
  animation-name: move;/* 动画名称 */
  /* 持续时间 */
  animation-duration:0.5s;/* 持续时间 */
}
```

* 0%是动画的开始.100%是动画的完成
* 在```@keyframs```中规定某项CSS样式,就能创建由当前样式初见改为新样式的动画效果
* 动画是是使元素从一种样式逐渐变化为另一种样式说的效果可以改变任意多的样式任意多的次数
* 请用百分比来规定变化发生的时间,或用关键词```"from"```和```"to"```,等同于0%和100%

```css
@keyframs move{
  from{
    transform:translate(0,0);
  }

  to{
    transform:translate(1000px,0);
  }
}

div{
  width:200px;
  height:200px;
  background-color:blue;
  margin:100px auto;
  /* 调用动画 */
  animation-name: move;/* 动画名称 */
  /* 持续时间 */
  animation-duration:0.5s;/* 持续时间 */
}
```

| 属性                      | 描述                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| @keyframes                | 规定动画.                                                                                                                                  |
| animation                 | 所有动画属性的简写属性.除了animation-play-state                                                                                            |
| animation-name            | 规定 @keyframes 动画的名称.(必须写)                                                                                                        |
| animation-duration        | 规定动画完成一个周期所花费的秒或毫秒.默认是 0.(必写)                                                                                       |
| animation-timing-function | 规定动画的速度曲线.默认是 "ease"                                                                                                           |
| animation-fill-mode       | 规定当动画不播放时（当动画完成时,或当动画有一个延迟未开始播放时）,要应用到元素的样式.默认是backwards,回到起始状态,forwards是停留在结束状态 |
| animation-delay           | 规定动画何时开始.默认是 0.                                                                                                                 |
| animation-iteration-count | 规定动画被播放的次数.默认是 1.`infinite`(指无限循环)                                                                                       |
| animation-direction       | 规定动画是否在下一周期逆向地播放.默认是 "normal",alternate是反方向走回来,而不是直接跳回来                                                  |
| animation-play-state      | 规定动画是否正在运行或暂停.默认是 "running",暂停是pause                                                                                    |

* 动画简写: ```animate:动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态```

* ```animation-timing-function```

| 值          | 描述                                      |
| ----------- | ----------------------------------------- |
| linear      | 动画从头到尾的速度是相同的.匀速           |
| ease        | 默认.动画以低速开始,然后加快,在结束前变慢 |
| ease-in     | 动画以低速开始                            |
| ease-out    | 动画以低速结束                            |
| ease-in-out | 动画以低速开始和结束                      |
| steps()     | 指定了时间函数中的间隔数量(步长)          |

### 3D转换

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
