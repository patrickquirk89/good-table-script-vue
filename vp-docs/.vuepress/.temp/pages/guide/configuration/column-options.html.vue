<template><h1 id="column-options" tabindex="-1"><a class="header-anchor" href="#column-options" aria-hidden="true">#</a> Column Options</h1>
<p>Each column objects can contain the following configuration options:</p>
<h2 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h2>
<p>type <code>String</code></p>
<p>Text to put on column header.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'name'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="field" tabindex="-1"><a class="header-anchor" href="#field" aria-hidden="true">#</a> field</h2>
<p>type <code>String</code></p>
<p>Row object property that this column corresponds to. This can be:</p>
<ul>
<li>String <code>eg: 'name'</code> - simple row property name</li>
<li>String <code>eg: 'location.lat'</code>- nested row property name. lets say if the row had a property 'location' which was an object containing 'lat' and 'lon'</li>
<li>Function - a function that returns a value to be displayed based on the row object</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fealdFn<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
<span class="token comment">// in methods</span>
<span class="token function">fieldFn</span><span class="token punctuation">(</span><span class="token parameter">rowObj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> rowObj<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h2>
<p>type <code>String</code></p>
<p>type of column. default: 'text'. This determines the formatting for the column and filter behavior as well. Possible values:</p>
<ul>
<li><em>number</em> - right aligned</li>
<li><em>decimal</em> - right aligned, 2 decimal places</li>
<li><em>percentage</em> - expects a decimal like 0.03 and formats it as 3.00%</li>
<li><em>boolean</em> - right aligned</li>
<li><em>date</em> - expects a string representation of date eg '20170530'. You should also specify <a href="#dateinputformat">dateInputFormat</a> and <a href="#dateoutputformat">dateOutputFormat</a></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'joined On'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'createdAt'</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
    dateInputFormat<span class="token operator">:</span> <span class="token string">'yyyy-MM-dd'</span><span class="token punctuation">,</span> <span class="token comment">// expects 2018-03-16</span>
    dateOutputFormat<span class="token operator">:</span> <span class="token string">'MMM do yyyy'</span><span class="token punctuation">,</span> <span class="token comment">// outputs Mar 16th 2018</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="dateinputformat" tabindex="-1"><a class="header-anchor" href="#dateinputformat" aria-hidden="true">#</a> dateInputFormat</h2>
<p>type <code>String</code></p>
<p>provide the format to parse date string.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Vue-good-table uses date-fns for date parsing. <a href="https://date-fns.org/v2.17.0/docs/parse" target="_blank" rel="noopener noreferrer">Check out their formats here<OutboundLink/></a>.</p>
</div>
<h2 id="dateoutputformat" tabindex="-1"><a class="header-anchor" href="#dateoutputformat" aria-hidden="true">#</a> dateOutputFormat</h2>
<p>type <code>String</code></p>
<p>provide the format for output date</p>
<h2 id="sortable" tabindex="-1"><a class="header-anchor" href="#sortable" aria-hidden="true">#</a> sortable</h2>
<p>type <code>Boolean</code></p>
<p>enable/disable sorting on columns. This property is higher priority than global sortable property</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'user_name'</span><span class="token punctuation">,</span>
    sortable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="firstsorttype" tabindex="-1"><a class="header-anchor" href="#firstsorttype" aria-hidden="true">#</a> firstSortType</h2>
<p>type <code>String (default: 'asc')</code></p>
<p>controls the first sort type when sorting by the column. If you want the first sort type for this column to be descending, set this property to 'desc'. Possible values:</p>
<ul>
<li><em>asc</em> - the initial sort will be ascending</li>
<li><em>desc</em> - the initial sort will be descending</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'user_name'</span><span class="token punctuation">,</span>
    sortable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    firstSortType<span class="token operator">:</span> <span class="token string">'desc'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="sortfn" tabindex="-1"><a class="header-anchor" href="#sortfn" aria-hidden="true">#</a> sortFn</h2>
<p>type <code>Function</code></p>
<p>custom sort function. If you want to supply your own sort function you can use this property.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// in data</span>
columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    sortable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    sortFn<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sortFn<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// in methods</span>
methods<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">sortFn</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> col<span class="token punctuation">,</span> rowX<span class="token punctuation">,</span> rowY</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// x - row1 value for column</span>
    <span class="token comment">// y - row2 value for column</span>
    <span class="token comment">// col - column being sorted</span>
    <span class="token comment">// rowX - row object for row1</span>
    <span class="token comment">// rowY - row object for row2</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> y <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token punctuation">(</span>x <span class="token operator">></span> y <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="formatfn" tabindex="-1"><a class="header-anchor" href="#formatfn" aria-hidden="true">#</a> formatFn</h2>
<p>type <code>Function</code></p>
<p>Allows for custom format of values, <code>function(value)</code>, should return the formatted value to display.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// in data</span>
columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'Salary'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'salary'</span><span class="token punctuation">,</span>
    sortable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    formatFn<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formatFn<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// in methods</span>
<span class="token function-variable function">formatFn</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'$'</span> <span class="token operator">+</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h2>
<p>type <code>Boolean</code></p>
<p>indicates whether this column will require html rendering.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>The preferred way of creating columns that have html is by <RouterLink to="/guide/advanced/#custom-row-template">using slots</RouterLink></p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// in data</span>
columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'Action'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'btn'</span><span class="token punctuation">,</span>
    html<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
rows<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    btn<span class="token operator">:</span> <span class="token string">'&lt;button>My Action&lt;/button>'</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h2>
<p>type <code>Number</code></p>
<p>provide a width value for this column</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'user_name'</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token string">'50px'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="hidden" tabindex="-1"><a class="header-anchor" href="#hidden" aria-hidden="true">#</a> hidden</h2>
<p>type <code>Boolean</code></p>
<p>hide a column</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'user_name'</span><span class="token punctuation">,</span>
    hidden<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="thclass" tabindex="-1"><a class="header-anchor" href="#thclass" aria-hidden="true">#</a> thClass</h2>
<p>type <code>String</code></p>
<p>provide custom class(es) to the table header</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'user_name'</span><span class="token punctuation">,</span>
    thClass<span class="token operator">:</span> <span class="token string">'custom-th-class'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="tdclass" tabindex="-1"><a class="header-anchor" href="#tdclass" aria-hidden="true">#</a> tdClass</h2>
<p>type <code>String</code> or <code>Function</code></p>
<p>provide custom class(es) to the table cells</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'user_name'</span><span class="token punctuation">,</span>
    tdClass<span class="token operator">:</span> <span class="token string">'text-center'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>or</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'user_name'</span><span class="token punctuation">,</span>
    tdClass<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tdClassFunc<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
<span class="token comment">// and later</span>
methods<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">tdClassFunc</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>row<span class="token punctuation">.</span>field <span class="token operator">></span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">'red-class'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">'green-class'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="globalsearchdisabled" tabindex="-1"><a class="header-anchor" href="#globalsearchdisabled" aria-hidden="true">#</a> globalSearchDisabled</h2>
<p>type <code>Boolean (default: false)</code></p>
<p>if true, this column will be ignored by the global search</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'user_name'</span><span class="token punctuation">,</span>
    globalSearchDisabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="tooltip" tabindex="-1"><a class="header-anchor" href="#tooltip" aria-hidden="true">#</a> tooltip</h2>
<p>type <code>String</code></p>
<p>Text to put on a simple tooltip for column header.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'user_name'</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token string">'A simple tooltip'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
