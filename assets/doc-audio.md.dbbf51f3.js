import{_ as n,f as s,o as a,J as t}from"./plugin-vue_export-helper.2d87e7a1.js";const m='{"title":"\u65AD\u7F51\u91CD\u8FDE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65AD\u7F51\u91CD\u8FDE","slug":"\u65AD\u7F51\u91CD\u8FDE"}],"relativePath":"doc-audio.md","lastUpdated":1692064378730}',p={},o=t(`<h2 id="\u65AD\u7F51\u91CD\u8FDE"><a class="header-anchor" href="#\u65AD\u7F51\u91CD\u8FDE" aria-hidden="true">#</a> \u65AD\u7F51\u91CD\u8FDE</h2><p>\u53EA\u9700\u8981\u76D1\u542C<code>playFailedAndPaused</code>\u4E8B\u4EF6\uFF0C\u5F53\u64AD\u653E\u5668\u64AD\u653E\u5931\u8D25\u6216\u8005\u6682\u505C\u7684\u65F6\u5019\uFF0C\u91CD\u65B0\u8C03\u7528<code>play</code>\u65B9\u6CD5\u5373\u53EF</p><div class="language-js"><pre><code>jessibucaPro<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;playFailedAndPaused&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//  1s\u540E\u91CD\u65B0\u64AD\u653E</span>
    <span class="token comment">// \u8FD9\u91CC\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u4E1A\u52A1\u903B\u8F91\u6765\u5224\u65AD\u662F\u5426\u9700\u8981\u91CD\u65B0\u64AD\u653E</span>
    <span class="token comment">// \u5BF9\u4E8E\u5EF6\u8FDF\u65F6\u95F4\uFF081s\uFF09\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u4E1A\u52A1\u903B\u8F91\u6765\u8BBE\u7F6E</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        jessibucaPro<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,3),e=[o];function c(u,l,i,r,d,k){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};