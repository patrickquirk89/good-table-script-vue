<template><h1 id="sort-options" tabindex="-1"><a class="header-anchor" href="#sort-options" aria-hidden="true">#</a> Sort Options</h1>
<p>Set of options related to table sorting</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:sort-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    initialSortBy: {field: <span class="token punctuation">'</span>name<span class="token punctuation">'</span>, type: <span class="token punctuation">'</span>asc<span class="token punctuation">'</span>}
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled" aria-hidden="true">#</a> enabled</h2>
<p>type: <code>Boolean (default: true)</code></p>
<p>Enable/disable sorting on table as a whole.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:sort-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="initialsortby" tabindex="-1"><a class="header-anchor" href="#initialsortby" aria-hidden="true">#</a> initialSortBy</h2>
<div class="custom-container tip"><p class="custom-container-title">Update</p>
<p><code>initialSortBy</code> now allows for sort by multiple columns</p>
</div>
<p>type: <code>Object</code> or <code>Array</code></p>
<p>Allows specifying a default sort for the table on wakeup. Both <strong>field</strong> and <strong>type</strong> values are required.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:sort-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    initialSortBy: {field: <span class="token punctuation">'</span>name<span class="token punctuation">'</span>, type: <span class="token punctuation">'</span>asc<span class="token punctuation">'</span>}
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="multiplecolumns" tabindex="-1"><a class="header-anchor" href="#multiplecolumns" aria-hidden="true">#</a> multipleColumns</h2>
<p>type: <code>Boolean (default: true)</code></p>
<p>Enable/disable multiple column sort. Users can shift-click on multiple columns to sort by multiple columns. The first column in the array gets primary sort.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:sort-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    multipleColumns: true,
    initialSortBy: [
      {field: <span class="token punctuation">'</span>name<span class="token punctuation">'</span>, type: <span class="token punctuation">'</span>asc<span class="token punctuation">'</span>},
      {field: <span class="token punctuation">'</span>age<span class="token punctuation">'</span>, type: <span class="token punctuation">'</span>desc<span class="token punctuation">'</span>}
    ],
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>
