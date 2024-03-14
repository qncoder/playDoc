import{_ as e,f as t,o as a,J as n}from"./plugin-vue_export-helper.2d87e7a1.js";const v='{"title":"AI\u6A21\u5757 API","description":"","frontmatter":{},"headers":[{"level":2,"title":"options","slug":"options"},{"level":3,"title":"useFaceDetector","slug":"usefacedetector"},{"level":3,"title":"useObjectDetector","slug":"useobjectdetector"},{"level":3,"title":"aiFaceDetectLevel","slug":"aifacedetectlevel"},{"level":3,"title":"aiObjectDetectLevel","slug":"aiobjectdetectlevel"},{"level":3,"title":"aiFaceDetectShowRect","slug":"aifacedetectshowrect"},{"level":3,"title":"aiObjectDetectShowRect","slug":"aiobjectdetectshowrect"},{"level":3,"title":"aiFaceDetectInterval","slug":"aifacedetectinterval"},{"level":3,"title":"aiObjectDetectInterval","slug":"aiobjectdetectinterval"},{"level":3,"title":"aiFaceDetectRectConfig","slug":"aifacedetectrectconfig"},{"level":3,"title":"aiObjectDetectRectConfig","slug":"aiobjectdetectrectconfig"},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5"},{"level":3,"title":"faceDetectOpen()","slug":"facedetectopen"},{"level":3,"title":"faceDetectClose()","slug":"facedetectclose"},{"level":3,"title":"objectDetectOpen()","slug":"objectdetectopen"},{"level":3,"title":"objectDetectClose()","slug":"objectdetectclose"},{"level":3,"title":"updateAiFaceDetectLevel(level)","slug":"updateaifacedetectlevel-level"},{"level":3,"title":"updateAiObjectDetectLevel(level)","slug":"updateaiobjectdetectlevel-level"},{"level":3,"title":"updateAiObjectDetectInterval(interval)","slug":"updateaiobjectdetectinterval-interval"},{"level":3,"title":"updateAiFaceDetectInterval(interval)","slug":"updateaifacedetectinterval-interval"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":3,"title":"aiObjectDetectorInfo","slug":"aiobjectdetectorinfo"},{"level":3,"title":"aiFaceDetectorInfo","slug":"aifacedetectorinfo"}],"relativePath":"ai-api.md","lastUpdated":1700932176536}',s={},c=n(`<h1 id="ai\u6A21\u5757-api"><a class="header-anchor" href="#ai\u6A21\u5757-api" aria-hidden="true">#</a> AI\u6A21\u5757 API</h1><h2 id="options"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h2><p>options \u652F\u6301\u7684\u53C2\u6570\u6709\uFF1A</p><h3 id="usefacedetector"><a class="header-anchor" href="#usefacedetector" aria-hidden="true">#</a> useFaceDetector</h3><ul><li><strong>\u7C7B\u578B</strong>\uFF1A<code>boolean</code></li><li><strong>\u9ED8\u8BA4\u503C</strong>\uFF1A<code>false</code></li><li><strong>\u7528\u6CD5</strong>\uFF1A</li></ul><p>\u662F\u5426\u4F7F\u7528\u4EBA\u8138\u68C0\u6D4B\u529F\u80FD\u3002</p><h3 id="useobjectdetector"><a class="header-anchor" href="#useobjectdetector" aria-hidden="true">#</a> useObjectDetector</h3><ul><li><strong>\u7C7B\u578B</strong>\uFF1A<code>boolean</code></li><li><strong>\u9ED8\u8BA4\u503C</strong>\uFF1A<code>false</code></li><li><strong>\u7528\u6CD5</strong>\uFF1A</li></ul><p>\u662F\u5426\u4F7F\u7528\u7269\u4F53\u68C0\u6D4B\u529F\u80FD\u3002</p><h3 id="aifacedetectlevel"><a class="header-anchor" href="#aifacedetectlevel" aria-hidden="true">#</a> aiFaceDetectLevel</h3><ul><li><strong>\u7C7B\u578B</strong>\uFF1A<code>number</code></li><li><strong>\u9ED8\u8BA4\u503C</strong>\uFF1A<code>2</code></li><li><strong>\u7528\u6CD5</strong>\uFF1A</li></ul><p>\u4EBA\u8138\u68C0\u6D4B\u7684\u7B49\u7EA7\uFF0C\u503C\u4E3A1\u30012\u30013\uFF0C4\uFF0C5 \u503C\u8D8A\u5927\uFF0C\u68C0\u6D4B\u7684\u4EBA\u8138\u8D8A\u591A\uFF0C\u4F46\u662F\u6027\u80FD\u6D88\u8017\u4E5F\u8D8A\u5927\u3002</p><p>\u5BF9\u4E8E\u7EA7\u522B\uFF1A1 \u4F4E\uFF0C2 \u4E2D\uFF0C3 \u9AD8\uFF0C4 \u8F83\u9AD8\uFF0C5 \u6781\u9AD8\u3002</p><h3 id="aiobjectdetectlevel"><a class="header-anchor" href="#aiobjectdetectlevel" aria-hidden="true">#</a> aiObjectDetectLevel</h3><ul><li><strong>\u7C7B\u578B</strong>\uFF1A<code>number</code></li><li><strong>\u9ED8\u8BA4\u503C</strong>\uFF1A<code>2</code></li><li><strong>\u7528\u6CD5</strong>\uFF1A</li></ul><p>\u7269\u4F53\u68C0\u6D4B\u7684\u7B49\u7EA7\uFF0C\u503C\u4E3A1\u30012\u30013\uFF0C4\uFF0C5 \u503C\u8D8A\u5927\uFF0C\u68C0\u6D4B\u7684\u7269\u4F53\u8D8A\u591A\uFF0C\u4F46\u662F\u6027\u80FD\u6D88\u8017\u4E5F\u8D8A\u5927\u3002</p><p>\u5BF9\u4E8E\u7EA7\u522B\uFF1A1 \u4F4E\uFF0C2 \u4E2D\uFF0C3 \u9AD8\uFF0C4 \u8F83\u9AD8\uFF0C5 \u6781\u9AD8\u3002</p><h3 id="aifacedetectshowrect"><a class="header-anchor" href="#aifacedetectshowrect" aria-hidden="true">#</a> aiFaceDetectShowRect</h3><ul><li><strong>\u7C7B\u578B</strong>\uFF1A<code>boolean</code></li><li><strong>\u9ED8\u8BA4\u503C</strong>\uFF1A<code>false</code></li><li><strong>\u7528\u6CD5</strong>\uFF1A</li></ul><p>\u662F\u5426\u5728\u4EBA\u8138\u68C0\u6D4B\u7684\u65F6\u5019\uFF0C\u663E\u793A\u4EBA\u8138\u7684\u77E9\u5F62\u6846\u3002</p><h3 id="aiobjectdetectshowrect"><a class="header-anchor" href="#aiobjectdetectshowrect" aria-hidden="true">#</a> aiObjectDetectShowRect</h3><ul><li><strong>\u7C7B\u578B</strong>\uFF1A<code>boolean</code></li><li><strong>\u9ED8\u8BA4\u503C</strong>\uFF1A<code>false</code></li><li><strong>\u7528\u6CD5</strong>\uFF1A</li></ul><p>\u662F\u5426\u5728\u7269\u4F53\u68C0\u6D4B\u7684\u65F6\u5019\uFF0C\u663E\u793A\u7269\u4F53\u7684\u77E9\u5F62\u6846\u3002</p><h3 id="aifacedetectinterval"><a class="header-anchor" href="#aifacedetectinterval" aria-hidden="true">#</a> aiFaceDetectInterval</h3><ul><li><strong>\u7C7B\u578B</strong>\uFF1A<code>number</code></li><li><strong>\u9ED8\u8BA4\u503C</strong>\uFF1A<code>1</code></li><li><strong>\u7528\u6CD5</strong>\uFF1A</li></ul><p>\u4EBA\u8138\u68C0\u6D4B\u7684\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002</p><h3 id="aiobjectdetectinterval"><a class="header-anchor" href="#aiobjectdetectinterval" aria-hidden="true">#</a> aiObjectDetectInterval</h3><ul><li><strong>\u7C7B\u578B</strong>\uFF1A<code>number</code></li><li><strong>\u9ED8\u8BA4\u503C</strong>\uFF1A<code>1</code></li><li><strong>\u7528\u6CD5</strong>\uFF1A</li></ul><p>\u7269\u4F53\u68C0\u6D4B\u7684\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002</p><h3 id="aifacedetectrectconfig"><a class="header-anchor" href="#aifacedetectrectconfig" aria-hidden="true">#</a> aiFaceDetectRectConfig</h3><ul><li><strong>\u7C7B\u578B</strong>\uFF1A<code>object</code></li><li><strong>\u9ED8\u8BA4\u503C</strong>\uFF1A<code>{}</code></li><li><strong>\u53C2\u6570</strong>\uFF1A <ul><li><code>{string} borderColor</code> \u8FB9\u6846\u989C\u8272 \u9ED8\u8BA4\u503C <code>#0000FF</code></li><li><code>{number} borderWidth</code> \u8FB9\u6846\u5BBD\u5EA6 \u9ED8\u8BA4\u503C <code>2</code></li></ul></li></ul><p>\u4EBA\u8138\u68C0\u6D4B\u7684\u77E9\u5F62\u6846\u7684\u914D\u7F6E\u3002</p><h3 id="aiobjectdetectrectconfig"><a class="header-anchor" href="#aiobjectdetectrectconfig" aria-hidden="true">#</a> aiObjectDetectRectConfig</h3><ul><li><strong>\u7C7B\u578B</strong>\uFF1A<code>object</code></li><li><strong>\u9ED8\u8BA4\u503C</strong>\uFF1A<code>{}</code></li><li><strong>\u53C2\u6570</strong>\uFF1A <ul><li><code>{string} borderColor</code> \u8FB9\u6846\u989C\u8272 \u9ED8\u8BA4\u503C <code>#0000FF</code></li><li><code>{number} borderWidth</code> \u8FB9\u6846\u5BBD\u5EA6 \u9ED8\u8BA4\u503C <code>2</code></li><li><code>{string} color</code> \u6587\u5B57\u989C\u8272 \u9ED8\u8BA4\u503C <code>#000</code></li><li><code>{number} fontSize</code> \u6587\u5B57\u5927\u5C0F \u9ED8\u8BA4\u503C <code>14</code></li></ul></li></ul><p>\u7269\u54C1\u68C0\u6D4B\u7684\u77E9\u5F62\u6846\u7684\u914D\u7F6E\u3002</p><h2 id="\u65B9\u6CD5"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><h3 id="facedetectopen"><a class="header-anchor" href="#facedetectopen" aria-hidden="true">#</a> faceDetectOpen()</h3><ul><li><strong>\u8FD4\u56DE</strong>\uFF1A <ul><li><code>{void}</code></li></ul></li><li><strong>\u7528\u6CD5</strong>\uFF1A \u6253\u5F00\u4EBA\u8138\u68C0\u6D4B\u529F\u80FD\u3002</li></ul><h3 id="facedetectclose"><a class="header-anchor" href="#facedetectclose" aria-hidden="true">#</a> faceDetectClose()</h3><ul><li><strong>\u8FD4\u56DE</strong>\uFF1A <ul><li><code>{void}</code></li></ul></li><li><strong>\u7528\u6CD5</strong>\uFF1A \u5173\u95ED\u4EBA\u8138\u68C0\u6D4B\u529F\u80FD\u3002</li></ul><h3 id="objectdetectopen"><a class="header-anchor" href="#objectdetectopen" aria-hidden="true">#</a> objectDetectOpen()</h3><ul><li><strong>\u8FD4\u56DE</strong>\uFF1A <ul><li><code>{void}</code></li></ul></li><li><strong>\u7528\u6CD5</strong>\uFF1A \u6253\u5F00\u7269\u54C1\u68C0\u6D4B\u529F\u80FD\u3002</li></ul><h3 id="objectdetectclose"><a class="header-anchor" href="#objectdetectclose" aria-hidden="true">#</a> objectDetectClose()</h3><ul><li><strong>\u8FD4\u56DE</strong>\uFF1A <ul><li><code>{void}</code></li></ul></li><li><strong>\u7528\u6CD5</strong>\uFF1A \u5173\u95ED\u7269\u54C1\u68C0\u6D4B\u529F\u80FD\u3002</li></ul><h3 id="updateaifacedetectlevel-level"><a class="header-anchor" href="#updateaifacedetectlevel-level" aria-hidden="true">#</a> updateAiFaceDetectLevel(level)</h3><ul><li><strong>\u53C2\u6570</strong>\uFF1A <ul><li><code>{number} level</code> \u4EBA\u8138\u68C0\u6D4B\u7684\u7B49\u7EA7\uFF0C\u503C\u4E3A1\u30012\u30013\uFF0C4\uFF0C5 \u503C\u8D8A\u5927\uFF0C\u68C0\u6D4B\u7684\u7CBE\u5EA6\u8D8A\u5927\uFF0C\u4F46\u662F\u6027\u80FD\u6D88\u8017\u4E5F\u8D8A\u5927\u3002</li></ul></li><li><strong>\u8FD4\u56DE</strong>\uFF1A <ul><li><code>{void}</code></li></ul></li><li><strong>\u7528\u6CD5</strong>\uFF1A \u66F4\u65B0\u4EBA\u8138\u68C0\u6D4B\u7684\u7B49\u7EA7\u3002</li></ul><h3 id="updateaiobjectdetectlevel-level"><a class="header-anchor" href="#updateaiobjectdetectlevel-level" aria-hidden="true">#</a> updateAiObjectDetectLevel(level)</h3><ul><li><strong>\u53C2\u6570</strong>\uFF1A <ul><li><code>{number} level</code> \u7269\u54C1\u68C0\u6D4B\u7684\u7B49\u7EA7\uFF0C\u503C\u4E3A1\u30012\u30013\uFF0C4\uFF0C5 \u503C\u8D8A\u5927\uFF0C\u68C0\u6D4B\u7684\u7CBE\u5EA6\u8D8A\u5927\uFF0C\u4F46\u662F\u6027\u80FD\u6D88\u8017\u4E5F\u8D8A\u5927\u3002</li></ul></li><li><strong>\u8FD4\u56DE</strong>\uFF1A <ul><li><code>{void}</code></li></ul></li><li><strong>\u7528\u6CD5</strong>\uFF1A \u66F4\u65B0\u7269\u54C1\u68C0\u6D4B\u7684\u7B49\u7EA7\u3002</li></ul><h3 id="updateaiobjectdetectinterval-interval"><a class="header-anchor" href="#updateaiobjectdetectinterval-interval" aria-hidden="true">#</a> updateAiObjectDetectInterval(interval)</h3><ul><li><strong>\u53C2\u6570</strong>\uFF1A <ul><li><code>{number} interval</code> \u7269\u54C1\u68C0\u6D4B\u7684\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002</li></ul></li><li><strong>\u8FD4\u56DE</strong>\uFF1A <ul><li><code>{void}</code></li></ul></li><li><strong>\u7528\u6CD5</strong>\uFF1A \u66F4\u65B0\u7269\u54C1\u68C0\u6D4B\u7684\u95F4\u9694\u3002</li></ul><h3 id="updateaifacedetectinterval-interval"><a class="header-anchor" href="#updateaifacedetectinterval-interval" aria-hidden="true">#</a> updateAiFaceDetectInterval(interval)</h3><ul><li><strong>\u53C2\u6570</strong>\uFF1A <ul><li><code>{number} interval</code> \u4EBA\u8138\u68C0\u6D4B\u7684\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002</li></ul></li><li><strong>\u8FD4\u56DE</strong>\uFF1A <ul><li><code>{void}</code></li></ul></li><li><strong>\u7528\u6CD5</strong>\uFF1A \u66F4\u65B0\u4EBA\u8138\u68C0\u6D4B\u7684\u95F4\u9694\u3002</li></ul><h2 id="\u4E8B\u4EF6"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><h3 id="aiobjectdetectorinfo"><a class="header-anchor" href="#aiobjectdetectorinfo" aria-hidden="true">#</a> aiObjectDetectorInfo</h3><p>\u76D1\u542C\u7269\u4F53\u68C0\u6D4B\u7684\u4FE1\u606F\u3002\u683C\u5F0F</p><div class="language-"><pre><code>{
  ts:&#39;&#39;, // \u65F6\u95F4\u6233
  list:{ // array
     zh:&#39;&#39;,
     en:&#39;&#39;
     confidence:&#39;&#39;, // \u51C6\u786E\u5EA6
     rect:{ // \u5750\u6807\u7CFB
        width:&#39;&#39;,
        height:&#39;&#39;,
        x:&#39;&#39;,
        y:&#39;&#39;
     }
  }
}
</code></pre></div><div class="language-javascript"><pre><code>jessibucaPro<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;aiObjectDetectorInfo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;aiObjectDetectorInfo&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
jessibucaPro<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>JessibucaPro<span class="token punctuation">.</span><span class="token constant">EVENTS</span><span class="token punctuation">.</span>aiObjectDetectorInfo<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;aiObjectDetectorInfo&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="aifacedetectorinfo"><a class="header-anchor" href="#aifacedetectorinfo" aria-hidden="true">#</a> aiFaceDetectorInfo</h3><p>\u76D1\u542C\u4EBA\u8138\u68C0\u6D4B\u7684\u4FE1\u606F\u3002\u683C\u5F0F\uFF1A</p><div class="language-"><pre><code>{
  ts:&#39;&#39;, // \u65F6\u95F4\u6233
  list:{ // \u5750\u6807\u7CFB
    x:&#39;&#39;,
    y:&#39;&#39;,
    width:&#39;&#39;,
    height:&#39;&#39;
  }
}
</code></pre></div><div class="language-javascript"><pre><code>jessibucaPro<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;aiFaceDetectorInfo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;aiFaceDetectorInfo&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// or</span>
jessibucaPro<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>JessibucaPro<span class="token punctuation">.</span><span class="token constant">EVENTS</span><span class="token punctuation">.</span>aiFaceDetectorInfo<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;aiFaceDetectorInfo&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,61),o=[c];function l(i,r,p,d,u,h){return a(),t("div",null,o)}var f=e(s,[["render",l]]);export{v as __pageData,f as default};
