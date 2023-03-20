import{_ as s,c as a,o as e,a as n}from"./app.4075f12a.js";const A=JSON.parse('{"title":"实践&建议","description":"","frontmatter":{"title":"实践&建议"},"headers":[{"level":2,"title":"节点","slug":"节点","link":"#节点","children":[]},{"level":2,"title":"深拷贝","slug":"深拷贝","link":"#深拷贝","children":[{"level":3,"title":"禁用深拷贝","slug":"禁用深拷贝","link":"#禁用深拷贝","children":[]},{"level":3,"title":"替换深拷贝方法","slug":"替换深拷贝方法","link":"#替换深拷贝方法","children":[]}]}],"relativePath":"practice/index.md","lastUpdated":1679297866000}'),l={name:"practice/index.md"},o=n(`<h1 id="实践-建议" tabindex="-1">实践&amp;建议 <a class="header-anchor" href="#实践-建议" aria-hidden="true">#</a></h1><h2 id="节点" tabindex="-1">节点 <a class="header-anchor" href="#节点" aria-hidden="true">#</a></h2><p>节点尽量简单，不要有<strong>循环引用</strong>，否则可能存在死循环问题。</p><h2 id="深拷贝" tabindex="-1">深拷贝 <a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a></h2><p><code>YiuTree</code>的深拷贝默认使用<code>JSON.parse(JSON.stringify(treeData))</code>，如果这不满足你的要求，你可以使用<code>TreeBaseOpt.deepClone</code>或<code>TreeBaseOpt.deepCloneFunc</code>进行修改。</p><h3 id="禁用深拷贝" tabindex="-1">禁用深拷贝 <a class="header-anchor" href="#禁用深拷贝" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getFilterBySearch</span><span style="color:#A6ACCD;">([]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">deepClone</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="替换深拷贝方法" tabindex="-1">替换深拷贝方法 <a class="header-anchor" href="#替换深拷贝方法" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloneDeep</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lodash</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getFilterBySearch</span><span style="color:#A6ACCD;">([]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">deepCloneFunc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> cloneDeep </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,9),p=[o];function t(c,r,i,C,D,d){return e(),a("div",null,p)}const F=s(l,[["render",t]]);export{A as __pageData,F as default};