<template><h1 id="grouped-table" tabindex="-1"><a class="header-anchor" href="#grouped-table" aria-hidden="true">#</a> Grouped Table</h1>
<p>To create grouped rows, you need two things.</p>
<h4 id="_1-add-group-options-to-table-component" tabindex="-1"><a class="header-anchor" href="#_1-add-group-options-to-table-component" aria-hidden="true">#</a> 1. Add group-options to table component</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:group-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true
  }<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="_2-make-sure-the-rows-are-formatted-correctly-grouped-rows-need-to-be-nested-within-header-rows-containing-data-rows-in-their-children-property-for-example" tabindex="-1"><a class="header-anchor" href="#_2-make-sure-the-rows-are-formatted-correctly-grouped-rows-need-to-be-nested-within-header-rows-containing-data-rows-in-their-children-property-for-example" aria-hidden="true">#</a> 2. Make sure the rows are formatted correctly. Grouped rows need to be nested within header rows containing data rows in their children property. For example:</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>rows<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">'span'</span><span class="token punctuation">,</span> <span class="token comment">// span means this header will span all columns</span>
    label<span class="token operator">:</span> <span class="token string">'Mammal'</span><span class="token punctuation">,</span> <span class="token comment">// this is the label that'll be used for the header</span>
    html<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// if this is true, label will be rendered as html</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Elephant'</span><span class="token punctuation">,</span> diet<span class="token operator">:</span> <span class="token string">'herbivore'</span><span class="token punctuation">,</span> count<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Cat'</span><span class="token punctuation">,</span> diet<span class="token operator">:</span> <span class="token string">'carnivore'</span><span class="token punctuation">,</span> count<span class="token operator">:</span> <span class="token number">28</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><grouped-table :options="{enabled: true}" />
<h4 id="_3-sometimes-you-might-want-a-summary-row-instead-of-a-header-row-for-example-if-you-want-to-show-total-count-for-your-group" tabindex="-1"><a class="header-anchor" href="#_3-sometimes-you-might-want-a-summary-row-instead-of-a-header-row-for-example-if-you-want-to-show-total-count-for-your-group" aria-hidden="true">#</a> 3. Sometimes, you might want a summary row instead of a header row. For example, if you want to show total count for your group</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>rows<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Mammals Total'</span><span class="token punctuation">,</span> <span class="token comment">// this is the label that'll be used for the header</span>
    diet<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    count<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// total count will be displayed here</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Elephant'</span><span class="token punctuation">,</span> diet<span class="token operator">:</span> <span class="token string">'herbivore'</span><span class="token punctuation">,</span> count<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Cat'</span><span class="token punctuation">,</span> diet<span class="token operator">:</span> <span class="token string">'carnivore'</span><span class="token punctuation">,</span> count<span class="token operator">:</span> <span class="token number">28</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="_4-if-you-want-the-header-summary-row-to-show-up-at-the-bottom-of-the-group-you-can-specify-that-in-the-group-options-property-of-the-table" tabindex="-1"><a class="header-anchor" href="#_4-if-you-want-the-header-summary-row-to-show-up-at-the-bottom-of-the-group-you-can-specify-that-in-the-group-options-property-of-the-table" aria-hidden="true">#</a> 4. If you want the header/summary row to show up at the bottom of the group, you can specify that in the group-options property of the table.</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:group-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    headerPosition: <span class="token punctuation">'</span>bottom<span class="token punctuation">'</span>
  }<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><grouped-table :options="{enabled: true, headerPosition: 'bottom'}" />
<h4 id="_5-what-if-you-wanted-to-add-a-total-count-in-summary-rows" tabindex="-1"><a class="header-anchor" href="#_5-what-if-you-wanted-to-add-a-total-count-in-summary-rows" aria-hidden="true">#</a> 5. What if you wanted to add a total count in summary rows?</h4>
<p>In your column definition add a property, <code>headerField</code>. This is just like <code>field</code> property but for summary/header rows only. So lets say we wanted to add a <strong>sum function</strong> to this field.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// in columns</span>
<span class="token punctuation">{</span>
  label<span class="token operator">:</span> <span class="token string">'Count'</span><span class="token punctuation">,</span>
  field<span class="token operator">:</span> <span class="token string">'count'</span><span class="token punctuation">,</span>
  headerField<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sumCount<span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// in methods we define sumCount</span>
methods<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">sumCount</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">rowObj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rowObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rowObj<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum <span class="token operator">+=</span> rowObj<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="customizing-header-row" tabindex="-1"><a class="header-anchor" href="#customizing-header-row" aria-hidden="true">#</a> Customizing Header Row</h2>
<p>If you want more control over what the header row looks like, you can use slots the same way you <a href="/guide/advanced/#custom-row-template" target="_blank" rel="noopener noreferrer">customize rows<OutboundLink/></a>. For example if you want to add a button in the header row or something, this would be the way to do it.</p>
<h3 id="when-mode-is-span" tabindex="-1"><a class="header-anchor" href="#when-mode-is-span" aria-hidden="true">#</a> When mode is 'span'</h3>
<p>In this case, the header row spans across all columns</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:group-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    headerPosition: <span class="token punctuation">'</span>top<span class="token punctuation">'</span>
  }<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#table-header-row</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-fancy-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      {{ props.row.label }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><grouped-custom-span :options="{enabled: true, headerPosition: 'top'}"/>
<h3 id="when-mode-is-not-span" tabindex="-1"><a class="header-anchor" href="#when-mode-is-not-span" aria-hidden="true">#</a> When mode is not 'span'</h3>
<p>In this case header row expects a value for each column</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:group-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    headerPosition: <span class="token punctuation">'</span>top<span class="token punctuation">'</span>
  }<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#table-header-row</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props.column.field == <span class="token punctuation">'</span>action<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fancy-btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>
      {{ props.formattedRow[props.column.field] }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><grouped-custom :options="{enabled: true, headerPosition: 'top'}"/>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>The original row object can be accessed via <code>props.row</code></li>
<li>The column object can be accessed via <code>props.column</code></li>
<li>You can access the formatted row data (for example - formatted date) via <code>props.formattedRow</code></li>
</ul>
</div>
<h2 id="collapsable-rows" tabindex="-1"><a class="header-anchor" href="#collapsable-rows" aria-hidden="true">#</a> Collapsable Rows</h2>
<p>To allow the row to collapse and expand you can use the groupOption &quot;collapsable&quot;. You can either pass in a boolean or a number.
If <code>collapsable</code> is set to <code>true</code> then it will default to making the first column collapsable. Alternatively, you can specify the column index number.
If you only add new rows to your table at the end, then the expanded or collapsed state of your rows will be maintained.
However if you need to insert rows before the last one, you can pass in <code>rowKey</code> inside of <code>groupOptions</code> with a unique identifier for your rows.
The expanded and collapsed state will then be maintained.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;vue-good-table
  ref="myCustomTable"
  :columns="columns"
  :rows="rows"
  :group-options="{
    enabled: true,
    rowKey="id"
    collapsable: true // or column index
  }"
>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>To expand/collapse all you can use the method called <code>expandAll</code> or <code>collapseAll</code>.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>myCustomTable<span class="token punctuation">.</span><span class="token function">expandAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>myCustomTable<span class="token punctuation">.</span><span class="token function">collapseAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li><strong>Live Demo:</strong> https://jsfiddle.net/nb6fcqs7</li>
</ul>
</template>
