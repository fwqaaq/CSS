import{_ as s,c as n,o as a,N as l}from"./chunks/framework.8361052b.js";const d=JSON.parse('{"title":"容器查询（container）","description":"","frontmatter":{},"headers":[],"relativePath":"css布局/容器查询.md"}'),o={name:"css布局/容器查询.md"},e=l(`<h1 id="容器查询-container" tabindex="-1">容器查询（container） <a class="header-anchor" href="#容器查询-container" aria-label="Permalink to &quot;容器查询（container）&quot;">​</a></h1><blockquote><p>@container 可以实时匹配内部指定容器元素的尺寸。开发者可以基于元素内部的尺寸以及内部的元素进行特定的样式设置和布局实现</p></blockquote><ul><li>@media 媒体查询可以这样写: 如果屏幕宽度小于 1024px 时执行。</li><li>@media 媒体查询适用于宏观布局，而 @container 匹配的是元素，更适用于微观布局</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024px</span><span style="color:#89DDFF;">){}</span></span>
<span class="line"></span></code></pre></div><h2 id="容器尺寸单位" tabindex="-1">容器尺寸单位 <a class="header-anchor" href="#容器尺寸单位" aria-label="Permalink to &quot;容器尺寸单位&quot;">​</a></h2><blockquote><p>与 css 容器查询一起出现的还有 css 容器查询单位。</p></blockquote><table><thead><tr><th>单位名称</th><th>释义</th></tr></thead><tbody><tr><td>cqw</td><td>表示容器查询宽度（Container Query Width）占比。1cqw等于容器宽度的1%。假设容器宽度是1000px，则此时1cqw对应的计算值就是10px。</td></tr><tr><td>cqh</td><td>表示容器查询高度（Container Query Height）占比。1cqh等于容器高度的1%。</td></tr><tr><td>cqi</td><td>表示容器查询内联方向尺寸（Container Query Inline-Size）占比。默认情况下，Inline-Size指的就是水平方向，对应的是宽度，因此，1cqi通常可以看成是容器宽度的1%。</td></tr><tr><td>cqb</td><td>表示容器查询块级方向尺寸（Container Query Block-Size）占比。默认情况下，Block-Size指的就是垂直方向，对应的是高度，因此，1cqb通常可以看成是容器高度的1%。</td></tr><tr><td>cqmin</td><td>表示容器查询较小尺寸的（Container Query Min）占比，例如容器尺寸是300px*400px，则100cqmin对应的是尺寸较小的宽度300px，而非高度。</td></tr><tr><td>cqmax</td><td>表示容器查询较大尺寸的（Container Query Min）占比。</td></tr></tbody></table><ul><li>从某种程度上讲，<code>cqw</code>, <code>cqh</code>、<code>cqmin</code>、<code>cqmax</code>单位和<code>vw</code>, <code>vh</code>、<code>vmin</code>、<code>vmax</code>单位语法和含义是一致的，只是一个是相对于容器尺寸，另外一个是相对于视区（ViewPort）尺寸。</li><li>在以下的 css 属性中，我们可以看到 container-type 属性，该属性是将元素变成容器元素。</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">container</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">表示容器查询块级方向尺寸（Container Query Block-Size）占比。默认情况下，Block-Size指的就是垂直方向，对应的是高度，</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  container-type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-size</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">resize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> horizontal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-inline</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">clamp</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">.75rem</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">cqw </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2rem</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="container" tabindex="-1">@container <a class="header-anchor" href="#container" aria-label="Permalink to &quot;@container&quot;">​</a></h2><blockquote><p>如果希望某个元素在某尺寸范围内出现较为明显的布局样式变化，那么就需要使用 @container 规则。</p></blockquote><ul><li>例如我们希望在容器小于 480px 时，向左边对齐。css @container 中的语句，都会寻找最近的容器元素进行匹配。</li><li><code>.container p</code> 元素最近的匹配的容器就是 .container 容器。</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@container</span><span style="color:#A6ACCD;"> (max-width: 480px) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>container 属性</p></blockquote><p>container 属性由 <code>container-name</code> 和 <code>container-type</code> 两个属性组成。</p><ol><li><p>container-type 属性只是容器的类型、是水平方向的（水平方向），还是包括垂直方向的（对应宽度和高度）。会给元素同时应用 layout、style 和 inline-size 容器状态(详情请见 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/contain" target="_blank" rel="noreferrer">contain</a>)</p><ul><li><code>normal</code>：默认值，表示不建立容器元素</li><li><code>size</code>：表示建立水平和垂直方向的元素。</li><li><code>inline-size</code>：是只在水平方向建立。</li></ul></li><li><p>container-name 属性用于给容器命名。指定用于哪一个容器</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container-a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  container</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-size aside</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container-b</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    container</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-size banner</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@container</span><span style="color:#A6ACCD;"> banner (max-width: 480px) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@container</span><span style="color:#A6ACCD;"> aside (max-width: 480px)</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div></li></ol><p><span style="color:red;">注意：虽然使用 contain 属性也可以创建容器，但是并不适用于使用 @container 容器查询</span></p><h3 id="contain-属性" tabindex="-1">contain 属性 <a class="header-anchor" href="#contain-属性" aria-label="Permalink to &quot;contain 属性&quot;">​</a></h3><blockquote><p>属性允许开发者声明当前元素和它的内容尽可能的独立于 DOM 树的其他部分。这使得浏览器在重新计算布局、样式、绘图、大小或这四项的组合时，只影响到有限的 DOM 区域，而不是整个页面，可以有效改善性能。</p></blockquote><ul><li><span style="color:red;">注意</span>: 如果应用了 <code>paint</code>、<code>strict</code> 或 <code>content</code> 属性的元素时有以下的情况 <ol><li>一个新的包含块（定位属性是 absolute 或 fixed 的后代元素）</li><li>新的层叠上下文</li><li>新的块级格式化上下文</li></ol></li><li>它可以是以下元素 <ul><li>none：正常渲染，不会有任何包含</li><li>strict：等同于 <code>contain:size layout paint style</code></li><li>content：表示这个元素上有除了 size 和 style 外的所有包含规则。等价于 <code>contain: layout paint</code>。</li><li>size：表示这个元素的尺寸计算不依赖于它的子孙元素的尺寸。</li><li>layout：表示元素外部无法影响元素内部的布局，反之亦然。</li><li>style：表示那些同时会影响这个元素和其子孙元素的属性，都在这个元素的包含范围内。</li><li>paint：表示这个元素的子孙节点不会在它边缘外显示。如果一个元素在视窗外或因其他原因导致不可见，则同样保证它的子孙节点不会被显示。</li></ul></li></ul><p>它也可以同时包含多个值：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">contain: size layout pain;</span></span>
<span class="line"></span></code></pre></div>`,23),p=[e];function t(c,r,i,D,y,F){return a(),n("div",null,p)}const A=s(o,[["render",t]]);export{d as __pageData,A as default};
