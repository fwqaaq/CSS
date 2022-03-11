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