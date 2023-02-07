import{_ as s,c as n,o as a,a as l}from"./app.4bf8b776.js";const F=JSON.parse('{"title":"Line 线段工具","description":"","frontmatter":{"title":"Line 线段工具"},"headers":[{"level":2,"title":"是否相交","slug":"是否相交","link":"#是否相交","children":[]},{"level":2,"title":"是否包含","slug":"是否包含","link":"#是否包含","children":[]}],"relativePath":"tool/Line/index.md","lastUpdated":1675767008000}'),o={name:"tool/Line/index.md"},p=l(`<h1 id="line-线段工具" tabindex="-1">Line 线段工具 <a class="header-anchor" href="#line-线段工具" aria-hidden="true">#</a></h1><h2 id="是否相交" tabindex="-1">是否相交 <a class="header-anchor" href="#是否相交" aria-hidden="true">#</a></h2><p><code>l1-l2</code>与<code>l3-l4</code>进行比较。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lineIsIntersect</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rubbish-tool</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 线段1 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> l1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 线段1的开始点 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> l2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 线段1的结束点 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 线段2 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> l3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 线段2的开始点 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> l4 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 线段2的结束点 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">lineIsIntersect</span><span style="color:#A6ACCD;">((l1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> l2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> l3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> l4))</span></span>
<span class="line"></span></code></pre></div><h2 id="是否包含" tabindex="-1">是否包含 <a class="header-anchor" href="#是否包含" aria-hidden="true">#</a></h2><p>判断线段1是否包在线段2中。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lineIsInner</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rubbish-tool</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 线段1 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> l1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 线段1的开始点 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> l2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 线段1的结束点 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 线段2 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> l3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 线段2的开始点 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> l4 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 线段2的结束点 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">lineIsInner</span><span style="color:#A6ACCD;">((l1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> l2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> l3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> l4))</span></span>
<span class="line"></span></code></pre></div>`,7),e=[p];function t(c,r,y,i,C,D){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{F as __pageData,d as default};
