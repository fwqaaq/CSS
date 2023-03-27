import{_ as l,c as o,o as i,x as e,a as t,N as n}from"./chunks/framework.8361052b.js";const f=JSON.parse('{"title":"css","description":"","frontmatter":{},"headers":[],"relativePath":"css/css逻辑属性.md"}'),a={name:"css/css逻辑属性.md"},s=e("h1",{id:"css",tabindex:"-1"},[t("css "),e("a",{class:"header-anchor",href:"#css","aria-label":'Permalink to "css"'},"​")],-1),r=e("h2",{id:"css-逻辑属性",tabindex:"-1"},[t("css 逻辑属性 "),e("a",{class:"header-anchor",href:"#css-逻辑属性","aria-label":'Permalink to "css 逻辑属性"'},"​")],-1),d=e("blockquote",null,[e("p",null,[t("由于之前 css 设计基于方向进行定位的属性和 css 世界基于"),e("strong",null,"流"),t("的底层设计理念不同，就会产生不合理的问题")])],-1),c=e("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"css逻辑属性",src:"https://codepen.io/jack-zhang-1314/embed/yLpJmXb?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/jack-zhang-1314/pen/yLpJmXb">
  css逻辑属性</a> by Jack-Zhang-1314 (<a href="https://codepen.io/jack-zhang-1314">@jack-zhang-1314</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),p=n(`<ul><li>在以上 css 中，该变了文档流的方向。并且使用了 <code>margin-right</code> 为 10px，文档依然会按照右边距是 10px 的距离渲染</li><li>但是实际上我们因该使用 <code>margin-left</code> 才可以达到右边没有10px的效果</li><li>如果设置的是属于 css 中流的概念 <code>margin-inline-end:10px</code> 就可以达到这种效果</li><li>当文档流<strong>自左向右</strong>渲染的时候，设置 <code>margin-inline-end:10px</code> 属性的渲染相当于 <code>margin-left</code> 属性</li></ul><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><blockquote><p>css 逻辑属性需要配合 <code>writing-mode</code> 属性，<code>direction</code> 属性或者 <code>text-orientation</code> 属性使用才有意义</p></blockquote><ul><li>或者也可以使用于可以改变DOM元素的呈现的方向。例如 <code>flex-direction</code> 属性中的属性值 <code>row-reverse</code> 和 <code>column-reverse</code>，但是这些属性和css逻辑属性没有任何关系</li></ul><ol><li>HTML的<code>dir</code>属性取值为<code>ltr</code>可以实现从左到右排版，<code>rtl</code> 可以实现从右到左排版 <ul><li>在CSS中的 <code>direction</code> 属性和 <code>dir</code> 属性类似，即 <code>ltr</code> 是从左到右排版，<code>rtl</code> 是从右到左排版</li></ul></li><li><code>writing-mode</code>：属性可以义定内联内容在屏幕上的排版方式，还可以定义块内容在屏幕上的排版方式 <ul><li><strong><code>horizontal-tb</code></strong>（默认）：定义了内容从左到右水平流动，从上到下垂直流动。下一条水平线位于上一条线下方</li><li><strong><code>vertical-rl</code></strong>：定义了内容从上到下垂直流动，从右到左水平流动。下一条垂直线位于上一行的左侧</li><li><strong><code>vertical-lr</code></strong>：定义了内容从上到下垂直流动，从左到右水平流动。下一条垂直线位于上一行的右侧</li><li><strong><code>sideways-rl</code></strong>：定义了内容从上到下垂直流动，所有字形，甚至是垂直脚本中的字形，都设置在右侧</li><li><strong><code>sideways-lr</code></strong>：内容从上到下垂直流动，所有字形，甚至是垂直脚本中的字形，都设置在左侧</li></ul></li></ol><h2 id="inline-block-与-start-end" tabindex="-1">inline/block 与 start/end <a class="header-anchor" href="#inline-block-与-start-end" aria-label="Permalink to &quot;inline/block 与 start/end&quot;">​</a></h2><blockquote><p>默认布局的属性对应关系</p></blockquote><table><thead><tr><th>margin 方位属性</th><th>margin 逻辑属性</th></tr></thead><tbody><tr><td>margin-left</td><td>margin-inline-start</td></tr><tr><td>margin-top</td><td>margin-block-start</td></tr><tr><td>margin-right</td><td>margin-inline-end</td></tr><tr><td>margin-bottom</td><td>margin-block-end</td></tr></tbody></table><blockquote><p><code>inline/block</code> 表示的是方向与 <code>start/end</code> 表示的是起止方位</p></blockquote><ul><li>在在中文和英文网页环境中，inline 元素（text，img等）默认是从左往右水平排列的；block 元素（如 &lt;div&gt;，&lt;p&gt; 元素等）默认是从上往下垂直排列的 <ul><li>因此 <code>margin-inline-start</code> 就是内联元素排列方向的起始位置，即&quot;左侧&quot;</li><li>因此 <code>margin-inline-end</code> 就是内联元素排列方向的结束位置，即&quot;右侧&quot;</li></ul></li><li>如果设置 <code>direction:rtl</code> 水平文档流就是从右往左设置的 <ul><li>此时对应的 start 就是<code>right</code></li><li>此时对应的 end 就是<code>left</code></li></ul></li><li>如果设置 <code>writing-mode:vertical-rl</code>：就是从上到下的，从右到左的流动</li></ul><table><thead><tr><th>margin方位属性</th><th>margin逻辑属性</th></tr></thead><tbody><tr><td>margin-left</td><td>margin-block-end</td></tr><tr><td>margin-top</td><td>margin-inline-start</td></tr><tr><td>margin-right</td><td>margin-block-start</td></tr><tr><td>margin-bottom</td><td>margin-inline-end</td></tr></tbody></table><h2 id="width-height-和-inline-size-block-size" tabindex="-1">width/height 和 inline-size/block-size <a class="header-anchor" href="#width-height-和-inline-size-block-size" aria-label="Permalink to &quot;width/height 和 inline-size/block-size&quot;">​</a></h2><blockquote><p>在中文或英文网页环境中，默认情况下，width 属性对应的CSS逻辑属性是 <code>inline-size</code>，height 属性对应的 CSS 逻辑属性是 <code>block-size</code></p></blockquote><ul><li>width 属性新支持的几个关键字属性值也可以作为 inline-size 的属性值</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">inline-size</span><span style="color:#A6ACCD;">:</span><span style="color:#FFCB6B;">fit-content</span><span style="color:#A6ACCD;">; </span></span>
<span class="line"><span style="color:#FFCB6B;">inline-size</span><span style="color:#A6ACCD;">:</span><span style="color:#FFCB6B;">min-content</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">inline-size</span><span style="color:#A6ACCD;">:</span><span style="color:#FFCB6B;">max-content</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>css属性</th><th>逻辑属性</th></tr></thead><tbody><tr><td><code>min-width</code></td><td>min-inline-size</td></tr><tr><td><code>min-height</code></td><td>min-block-size</td></tr><tr><td><code>max-width</code></td><td>max-inline-size</td></tr><tr><td><code>max-height</code></td><td>max-block-size</td></tr></tbody></table><h2 id="margin-padding-border" tabindex="-1">margin/padding/border <a class="header-anchor" href="#margin-padding-border" aria-label="Permalink to &quot;margin/padding/border&quot;">​</a></h2><blockquote><p>margin，padding 和 border 属性一起，演变成了按照 inline/block 与 start/end 这几个关键字组合的新的CSS逻辑属性</p></blockquote><ul><li>margin 缩写 <ul><li>margin-inline，margin-block</li></ul></li><li>padding 缩写 <ul><li>padding-inline，padding-block</li></ul></li><li>padding缩写 <ul><li>各个属性的缩写：border-inline，border-block</li><li>所有属性的缩写 <ul><li>border-inline-color，border-block-color</li><li>border-inline-style，border-block-style</li><li>border-inline-width，border-block-width</li></ul></li></ul></li></ul><h2 id="text-align" tabindex="-1">text-align <a class="header-anchor" href="#text-align" aria-label="Permalink to &quot;text-align&quot;">​</a></h2><blockquote><p>对于 text-align 属性支持的逻辑属性是属性值而不是属性</p></blockquote><ul><li><code>text-align:start</code></li><li><code>text-align:end</code></li></ul><h2 id="inset" tabindex="-1">inset <a class="header-anchor" href="#inset" aria-label="Permalink to &quot;inset&quot;">​</a></h2><blockquote><p>使用绝对定位的时候经常会使用到 <code>left</code>、<code>right</code>、<code>top</code>、<code>bottom</code> 属性，与之相对应的逻辑属性就是以 <code>inset</code> 开头的属性</p></blockquote><ul><li><p>inset-inline-start</p></li><li><p>inset-inline-end</p></li><li><p>inset-block-start</p></li><li><p>inset-block-end</p></li><li><p>与之对应水平或者垂直方位的缩写</p><ul><li>inset-inline</li><li>inset-block</li></ul></li><li><p>完整缩写：<code>inset</code></p></li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">overlay</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* left: 0; top: 0; right: 0; bottom: 0; */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* 完全可以使用inset */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">inset</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Sizing" target="_blank" rel="noreferrer">尺寸相关的逻辑属性（代理 hight/width）</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Margins_borders_padding" target="_blank" rel="noreferrer">margin、border、padding 逻辑属性</a></li></ul>`,28),h=[s,r,d,c,p];function g(b,u,m,k,C,y){return i(),o("div",null,h)}const x=l(a,[["render",g]]);export{f as __pageData,x as default};
