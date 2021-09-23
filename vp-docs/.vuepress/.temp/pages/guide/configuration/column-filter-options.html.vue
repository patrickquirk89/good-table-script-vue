<template><h1 id="column-filter-options" tabindex="-1"><a class="header-anchor" href="#column-filter-options" aria-hidden="true">#</a> Column Filter Options</h1>
<h2 id="filteroptions" tabindex="-1"><a class="header-anchor" href="#filteroptions" aria-hidden="true">#</a> filterOptions</h2>
<p>type <code>Object</code></p>
<p>A collection of filter specific properties within a column object.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> 
    label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'user_name'</span><span class="token punctuation">,</span>
    filterOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
	  styleClass<span class="token operator">:</span> <span class="token string">'class1'</span><span class="token punctuation">,</span> <span class="token comment">// class to be added to the parent th element</span>
  	  enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// enable filter for this column</span>
      placeholder<span class="token operator">:</span> <span class="token string">'Filter This Thing'</span><span class="token punctuation">,</span> <span class="token comment">// placeholder for filter input</span>
      filterValue<span class="token operator">:</span> <span class="token string">'Jane'</span><span class="token punctuation">,</span> <span class="token comment">// initial populated value for this filter</span>
      filterDropdownItems<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// dropdown (with selected values) instead of text input</span>
      filterFn<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>columnFilterFn<span class="token punctuation">,</span> <span class="token comment">//custom filter function that</span>
      trigger<span class="token operator">:</span> <span class="token string">'enter'</span><span class="token punctuation">,</span> <span class="token comment">//only trigger on enter not on keyup </span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="styleclass" tabindex="-1"><a class="header-anchor" href="#styleclass" aria-hidden="true">#</a> styleClass</h2>
<p>type: <code>string</code>
Class to be added to the parent th element. You can specify several classes separated by a space.</p>
<h2 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled" aria-hidden="true">#</a> enabled</h2>
<p>type: <code>Boolean</code>
Switch to enable column filter.</p>
<h2 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h2>
<p>type: <code>String</code>
Placeholder to use on the column filter input.</p>
<h2 id="filtervalue" tabindex="-1"><a class="header-anchor" href="#filtervalue" aria-hidden="true">#</a> filterValue</h2>
<p>type: <code>String</code>
If you want filter to be pre-populated, use this property</p>
<h2 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> trigger</h2>
<p>type: <code>String (default: '')</code>
Allows specifying trigger for column filter. Default trigger is keyup. use 'enter' to filter only when enter key is pressed.</p>
<h2 id="filterdropdownitems" tabindex="-1"><a class="header-anchor" href="#filterdropdownitems" aria-hidden="true">#</a> filterDropdownItems</h2>
<p>type <code>Array of strings or Array of objects</code></p>
<p>allows creating a dropdown for filter as opposed to an input</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//array</span>
filterDropdownItems<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Blue'</span><span class="token punctuation">,</span> <span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Yellow'</span><span class="token punctuation">]</span>
<span class="token comment">//or</span>
filterDropdownItems<span class="token operator">:</span> <span class="token punctuation">[</span>  
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'n'</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">'Inactive'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'y'</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">'Active'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'c'</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">'Check'</span> <span class="token punctuation">}</span>  
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="filterfn" tabindex="-1"><a class="header-anchor" href="#filterfn" aria-hidden="true">#</a> filterFn</h2>
<p>type <code>Function</code></p>
<p>Custom filter, function of two variables: <code>function(data, filterString)</code>, should return true if data matches the filterString, otherwise false</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function-variable function">filterFn</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> filterString</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>filterString<span class="token punctuation">)</span>
  <span class="token keyword">return</span> data <span class="token operator">>=</span> x <span class="token operator">-</span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> data <span class="token operator">&lt;=</span> x <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// would create a filter matching numbers within 5 of the provided value</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
