<template><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<p>Install with npm:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save vue-good-table-next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Import globally in app:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> VueGoodTablePlugin <span class="token keyword">from</span> <span class="token string">'vue-good-table-next'</span><span class="token punctuation">;</span>

<span class="token comment">// import the styles</span>
<span class="token keyword">import</span> <span class="token string">'vue-good-table-next/dist/vue-good-table-next.css'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueGoodTablePlugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>or</strong> you can import into your component:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// import the styles</span>
<span class="token keyword">import</span> <span class="token string">'vue-good-table-next/dist/vue-good-table-next.css'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VueGoodTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-good-table-next'</span><span class="token punctuation">;</span>

<span class="token comment">// add to component</span>
components<span class="token operator">:</span> <span class="token punctuation">{</span>
  VueGoodTable<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="basic-example" tabindex="-1"><a class="header-anchor" href="#basic-example" aria-hidden="true">#</a> Basic Example</h2>
<basic-table/>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
      <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
      <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'my-component'</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      columns<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
          field<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">'Age'</span><span class="token punctuation">,</span>
          field<span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">'Created On'</span><span class="token punctuation">,</span>
          field<span class="token operator">:</span> <span class="token string">'createdAt'</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
          dateInputFormat<span class="token operator">:</span> <span class="token string">'yyyy-MM-dd'</span><span class="token punctuation">,</span>
          dateOutputFormat<span class="token operator">:</span> <span class="token string">'MMM do yy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">'Percent'</span><span class="token punctuation">,</span>
          field<span class="token operator">:</span> <span class="token string">'score'</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">'percentage'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      rows<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span><span class="token string">"John"</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> createdAt<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>score<span class="token operator">:</span> <span class="token number">0.03343</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> id<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span> name<span class="token operator">:</span><span class="token string">"Jane"</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> createdAt<span class="token operator">:</span> <span class="token string">'2011-10-31'</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">0.03343</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> id<span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span> name<span class="token operator">:</span><span class="token string">"Susan"</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> createdAt<span class="token operator">:</span> <span class="token string">'2011-10-30'</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">0.03343</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> id<span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span> name<span class="token operator">:</span><span class="token string">"Chris"</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span> createdAt<span class="token operator">:</span> <span class="token string">'2011-10-11'</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">0.03343</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> id<span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span> name<span class="token operator">:</span><span class="token string">"Dan"</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> createdAt<span class="token operator">:</span> <span class="token string">'2011-10-21'</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">0.03343</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> id<span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span> name<span class="token operator">:</span><span class="token string">"John"</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> createdAt<span class="token operator">:</span> <span class="token string">'2011-10-31'</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">0.03343</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="usage-with-nuxt-js" tabindex="-1"><a class="header-anchor" href="#usage-with-nuxt-js" aria-hidden="true">#</a> Usage with Nuxt.js</h2>
<p>Create your own plugin by creating a file called <code>vue-good-table.js</code> inside your Nuxt <code>plugins</code> folder. Shoud look something like this:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import Vue from 'vue'
import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'

Vue.use(VueGoodTablePlugin);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>As you can see, the only difference from the normal installation is that we need to reference Vue using <code>import Vue from 'vue'</code>.</p>
<p>Next we need to declare the plugin inside your <code>nuxt.config.js</code> like so:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>plugins: [
  { src: '~/plugins/vue-good-table-next', ssr: false }
],
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>This should now work as expected.</p>
</template>
