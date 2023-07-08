import{_ as e,c as t,o as s,a as n}from"./app.a1fc80f4.js";const A=JSON.parse('{"title":"Time 时间戳工具","description":"","frontmatter":{"title":"Time 时间戳工具"},"headers":[{"level":2,"title":"时长常量","slug":"时长常量","link":"#时长常量","children":[]},{"level":2,"title":"任意数据时间戳","slug":"任意数据时间戳","link":"#任意数据时间戳","children":[{"level":3,"title":"非法输入","slug":"非法输入","link":"#非法输入","children":[]},{"level":3,"title":"正常输入","slug":"正常输入","link":"#正常输入","children":[]}]}],"relativePath":"tool/Time/index.md","lastUpdated":1675767925000}'),a={name:"tool/Time/index.md"},l=n(`<h1 id="time-时间戳工具" tabindex="-1">Time 时间戳工具 <a class="header-anchor" href="#time-时间戳工具" aria-hidden="true">#</a></h1><h2 id="时长常量" tabindex="-1">时长常量 <a class="header-anchor" href="#时长常量" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timeDay</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timeWeek</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../src</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">timeDay </span><span style="color:#676E95;font-style:italic;">// 24 * 60 * 60 * 1000 = 86400000</span></span>
<span class="line"><span style="color:#A6ACCD;">timeWeek </span><span style="color:#676E95;font-style:italic;">// 7 * 24 * 60 * 60 * 1000 = 604800000</span></span>
<span class="line"></span></code></pre></div><h2 id="任意数据时间戳" tabindex="-1">任意数据时间戳 <a class="header-anchor" href="#任意数据时间戳" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timeGetByAny</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rubbish-tool</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">timeGetByAny</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span></code></pre></div><p>测试列表：</p><h3 id="非法输入" tabindex="-1">非法输入 <a class="header-anchor" href="#非法输入" aria-hidden="true">#</a></h3><table><thead><tr><th>入参</th><th style="text-align:center;">输出</th></tr></thead><tbody><tr><td><code>timeGetByAny(&#39;&#39;)</code></td><td style="text-align:center;"><code>undefined</code></td></tr><tr><td><code>timeGetByAny(false)</code></td><td style="text-align:center;"><code>undefined</code></td></tr><tr><td><code>timeGetByAny(undefined)</code></td><td style="text-align:center;"><code>undefined</code></td></tr><tr><td><code>timeGetByAny(null)</code></td><td style="text-align:center;"><code>undefined</code></td></tr><tr><td><code>timeGetByAny(NaN)</code></td><td style="text-align:center;"><code>undefined</code></td></tr><tr><td><code>timeGetByAny(() =&gt; &#39;&#39;)</code></td><td style="text-align:center;"><code>undefined</code></td></tr></tbody></table><h3 id="正常输入" tabindex="-1">正常输入 <a class="header-anchor" href="#正常输入" aria-hidden="true">#</a></h3><table><thead><tr><th>入参</th><th style="text-align:center;">输出</th></tr></thead><tbody><tr><td><code>timeGetByAny(15)</code></td><td style="text-align:center;"><code>15</code></td></tr><tr><td><code>timeGetByAny(1675304008334)</code></td><td style="text-align:center;"><code>1675304008334</code></td></tr><tr><td><code>timeGetByAny(new Date(1675304008334))</code></td><td style="text-align:center;"><code>1675304008334</code></td></tr></tbody></table>`,10),o=[l];function d(c,r,i,p,y,h){return s(),t("div",null,o)}const m=e(a,[["render",d]]);export{A as __pageData,m as default};