# @layer

>@layer声明了一个 **级联层**,同一层的规则将级联在一起,这给予了开发者对层叠机制的更多控制

```css
@layer [ <layer-name># | <layer-name>?  {
  <stylesheet>
} ]
```

## @layer的引入方式

1. 直接创建一个块级的`@layer`规则,其中包含作用于该层内部的 CSS 规则

   ```css
   @layer utilities {
     p {
       padding: .5rem;
     }
   }
   ```

2. 一个级联层同样可以通过 `@import` 来创建，规则存在于被引入的样式表内
   * 这样当引入组件的样式时就可以很方便的重写组件的样式,而不需要考虑各种优先级

   ```css
   @import(utilities.css) layer(utilities);
   ```

3. 创建带命名的级联层，但不指定任何样式。样式随后可在 CSS 内任意位置添加

   ```css
   @layer utilities;
   // ...
   // ...
   @layer utilities {
       p {
           color: red;
       }
   }
   ```

## 优先级

```html
<a href="">吃饭</a>
```

>级联层管理样式优先级

```css
@layer A {
  a {
    color: red;
  }
}
@layer B {
  a {
    color: black;
  }
}
```

* 由于`@layer B`的顺序排在`@layer A`之后，所以`@layer B`内的所有样式优先级都会比`@layer A`高

>同时命名多个@layer层级,然后再补充样式规则

```css
@layer C, B, A;
@layer A {a {color:red;}}
@layer B {a {color:blue;}}
@layer C {a {color:black;}}
```

* 首先定义了 @layer C, B, A三个 @layer 级联层,会优先确定样式的优先级`A>C>B`

>非`@layer`包裹层与`@layer`层内样式优先级

* <span style="color:red">非 @layer 包裹的样式，拥有比 @layer 包裹样式更高的优先级</span>

```css
@layer A { a { color: red; } }
@layer B { a { color: orange; } }
@layer C { a { color: yellow; } }
a { color: green; }
```

未被 @layer 包裹的样式 > @layer C > @layer B > @layer A

## 匿名层

>创建一个不带名字的`@layer`就是匿名层

1. 创建后无法向其再添加规则
2. 该层和其他命名层功能一致，优先级也遵循后定义的匿名层，比其他已定义的`@layer`层，优先级更高

```css
@layer {a {color:red;}}
```

* 在与其他 @layer 层一起的情况,样式还是会按照 @layer 顺序的优先级展示

```css
@layer A { a { color: red; } }
@layer B { a { color: orange; } }
@layer  { a { color: yellow; } }
```

最终展示为yellow

## 嵌套层

```css
@layer A {
  @layer B{
    ...
  }
}
```

* 或者这样写.与上面的代码等价

```css
@layer A.B {
  ...
}
```

>嵌套层的优先级

1. 对于单层嵌套的关系:`@layer A`>`@layer A.B`

   ```css
   @layer A {
     a {
       color: red;
     }
     @layer B {
       a {
         color: orange;
       }
     }
   }
   ```

2. 多层嵌套的优先级关系
   * @layer C > @layer C.D > @layer A > @layer A.B

   ```css
   @layer A {
     a {
       color: red;
     }
     @layer B {
       a {
         color: orange;
       }
     }
   }
   @layer C {
     a {
       color: black;
     }
     @layer D {
       a {
         color: blue;
       }
     }
   }
   ```

## !important对 `@layer` 的影响

1. `!important` 样式高于非`!important` 样式
2. 在比较 !important 规则时，优先级顺序与正常规则相反，在正常状态下优先级越低的，在 !important 下优先级越高

```css
a {
  color: aqua !important;
}
@layer A {
  a {
    color: red !important;
  }
  @layer B {
    a {
      color: orange;
    }
  }
}
@layer C {
  a {
    color: black;
  }
  @layer D {
    a {
      color: blue;
    }
  }
}
```

* 最终样式展示为红色
* 参考:<https://juejin.cn/post/7077758893442465806#heading-13>
