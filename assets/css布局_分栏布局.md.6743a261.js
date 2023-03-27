import{_ as o,c as l,o as a,N as e,x as c}from"./chunks/framework.8361052b.js";const g=JSON.parse('{"title":"css布局","description":"","frontmatter":{},"headers":[],"relativePath":"css布局/分栏布局.md"}'),n={name:"css布局/分栏布局.md"},s=e(`<h1 id="css布局" tabindex="-1">css布局 <a class="header-anchor" href="#css布局" aria-label="Permalink to &quot;css布局&quot;">​</a></h1><h2 id="分栏布局" tabindex="-1">分栏布局 <a class="header-anchor" href="#分栏布局" aria-label="Permalink to &quot;分栏布局&quot;">​</a></h2><blockquote><p>如果一个列表项的内容足够少,并且容器的宽度足够宽,则可以使用columns实现分栏布局</p></blockquote><h3 id="columns" tabindex="-1">columns <a class="header-anchor" href="#columns" aria-label="Permalink to &quot;columns&quot;">​</a></h3><blockquote><p>columns的属性是<code>column-width</code>和<code>column-count</code>的属性的缩写</p></blockquote><ul><li>顺序任意:<code>columns:2 auto</code>就是<code>column-count:2</code>和<code>column-width:auto</code>的缩写</li></ul><blockquote><p><code>column-width</code>表示的是每<code>一栏/列</code>的<strong>最佳宽度</strong>,实际渲染和指定的宽度是有出入的</p></blockquote><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">column-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li><p>例如这里的容器宽度是200px,色号顶的栏宽度是300px;就会按照200px进行渲染</p></li><li><p>column-width:更确切的说是期望尺寸.浏览器会根据期望尺寸确定分栏数目.<code>column-width</code>不支持百分比值</p></li></ul><blockquote><p><code>column-count</code>表示理想的<code>分栏数目</code>,在理想的分栏布局中,最终的分栏数量应该由<code>column-width</code>和<code>column-count</code>共同决定</p></blockquote><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">360px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">column-count</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">column-width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>column-width:相当于3.6栏比2大.就会显示两栏布局而不是3栏</li></ul><h3 id="column-gap和gap" tabindex="-1">column-gap和gap <a class="header-anchor" href="#column-gap和gap" aria-label="Permalink to &quot;column-gap和gap&quot;">​</a></h3><blockquote><p>column-gap表示的是每一栏之间的空白间隙的长度值,也可以是百分比值</p></blockquote><ul><li>实际上在分栏布局中可以直接使用<code>gap</code>属性设置分栏的间隙大小</li><li><code>column-gap</code>属性是<code>gap</code>属性的子属性</li><li>在css中弹性布局,网格布局以及分栏布局使用gap属性做到了统一.实际上,gap属性是<code>column-gap</code>和<code>row-gap</code>属性的缩写</li></ul><h3 id="column-rule" tabindex="-1">column-rule <a class="header-anchor" href="#column-rule" aria-label="Permalink to &quot;column-rule&quot;">​</a></h3><blockquote><p>column-rule属性是<code>column-rule-width</code>和<code>column-rule-style</code>以及<code>column-rule-color</code>属性的缩写.并且它的语法和规则和border一样</p></blockquote><ul><li>column-rule使用于各个分栏的分割样式线.</li></ul><h3 id="column-span" tabindex="-1">column-span <a class="header-anchor" href="#column-span" aria-label="Permalink to &quot;column-span&quot;">​</a></h3><blockquote><p>column-span属性类似于表格布局中的html属性colspan,表示的是某一个内容是否跨多行显示</p></blockquote><ul><li><span style="color:red;">这个作用于分栏布局的子元素上</span><ul><li><code>none</code>:默认值.表示不会横跨多栏</li><li><code>all</code>:表示横跨所有的垂直列(类似于合并横向的单元格)</li></ul></li></ul><h3 id="column-fill" tabindex="-1">column-fill <a class="header-anchor" href="#column-fill" aria-label="Permalink to &quot;column-fill&quot;">​</a></h3><ul><li><code>auto</code>:按顺序填充每一列,内容只占用他需要的空间(<strong>必须有固定的高度才能渲染</strong>)</li><li><code>balance</code>:默认值.尽可能在列之间平衡内容.在分隔断开的上下文,只有最后一个片段是平衡的 <ul><li>例如多个&lt;p&gt;,只有最后一个&lt;p&gt;换行了,那么这个这个&lt;p&gt;元素的内容需要前后等分,保持平衡</li></ul></li><li><code>balance-all</code>:尽可能在列之间平衡.在分开断隔的上下文所有的片段都是平衡的(所有浏览器都不识别)</li></ul><h3 id="break-inside" tabindex="-1">break-inside <a class="header-anchor" href="#break-inside" aria-label="Permalink to &quot;break-inside&quot;">​</a></h3><blockquote><p><code>break-inside</code>属性可以定义页面的打印,分栏布局</p></blockquote><ul><li><p>break-inside属性值包括: <code>auto | avoid | avoid-page | avoid-column | avoid-region</code></p></li><li><p>常用的两个属性</p><ul><li><code>auto</code>:元素可以中断.当列位置不够时,元素可以中断部分内容到下一列</li><li><code>avoid</code>:元素不可以中断.即使当列可以放下一个元素的部分(除非放下一整个),也必须放置下一列</li></ul></li></ul><h3 id="box-decoration-break" tabindex="-1">box-decoration-break <a class="header-anchor" href="#box-decoration-break" aria-label="Permalink to &quot;box-decoration-break&quot;">​</a></h3><blockquote><p>在默认情况下,元素片段在跨行,跨列或者跨页(如打印)时候的样式是分割渲染的.<strong>并且边框或者圆角都是分割开的</strong></p></blockquote><ul><li><code>slice</code>:默认值.表示哥哥元素的断开部分像被切开一样</li><li><code>clone</code>:<span style="color:red;">表示断开的各个元素样式独自渲染</span></li><li>并且他只能渲染如下的样式 <ul><li><code>background</code>,<code>border</code>,<code>border-image</code>,<code>box-shadow</code>,<code>border-radius</code>,<code>clip-path</code>,<code>margin</code>,<code>padding</code></li></ul></li></ul>`,29),t=c("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"box-decoration-break",src:"https://codepen.io/jack-zhang-1314/embed/abEZGzq?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/jack-zhang-1314/pen/abEZGzq">
  box-decoration-break</a> by Jack-Zhang-1314 (<a href="https://codepen.io/jack-zhang-1314">@jack-zhang-1314</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),p=[s,t];function d(i,r,u,h,m,b){return a(),l("div",null,p)}const y=o(n,[["render",d]]);export{g as __pageData,y as default};
