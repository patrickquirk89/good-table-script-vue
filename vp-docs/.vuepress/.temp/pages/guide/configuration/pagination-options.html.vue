<template><h1 id="pagination-options" tabindex="-1"><a class="header-anchor" href="#pagination-options" aria-hidden="true">#</a> Pagination Options</h1>
<p>A set of options that are related to table pagination. Each of these are optional and reasonable defaults will be used if you leave off the property.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    mode: <span class="token punctuation">'</span>records<span class="token punctuation">'</span>,
    perPage: 5,
    position: <span class="token punctuation">'</span>top<span class="token punctuation">'</span>,
    perPageDropdown: [3, 7, 9],
    dropdownAllowAll: false,
    setCurrentPage: 2,
    nextLabel: <span class="token punctuation">'</span>next<span class="token punctuation">'</span>,
    prevLabel: <span class="token punctuation">'</span>prev<span class="token punctuation">'</span>,
    rowsPerPageLabel: <span class="token punctuation">'</span>Rows per page<span class="token punctuation">'</span>,
    ofLabel: <span class="token punctuation">'</span>of<span class="token punctuation">'</span>,
    pageLabel: <span class="token punctuation">'</span>page<span class="token punctuation">'</span>, // for <span class="token punctuation">'</span>pages<span class="token punctuation">'</span> mode
    allLabel: <span class="token punctuation">'</span>All<span class="token punctuation">'</span>,
    infoFn: (params) => `my own page ${params.firstRecordOnPage}`, 
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled" aria-hidden="true">#</a> enabled</h2>
<p>type: <code>Boolean (default: false)</code></p>
<p>Enable Pagination for table. By default the paginator is created at the bottom of the table.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="mode" tabindex="-1"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> mode</h2>
<p>type: <code>String (default: 'records')</code></p>
<p>You can render pagination controls in two modes - 'records' and 'pages'. Below, you'll find examples of both.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>For tables that may have many pages, 'pages' mode offers the ability to jump to any valid page.</p>
</div>
<h3 id="records-mode-default" tabindex="-1"><a class="header-anchor" href="#records-mode-default" aria-hidden="true">#</a> records mode (default)</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    mode: <span class="token punctuation">'</span>records<span class="token punctuation">'</span>
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><pagination-table
  :options="{
    enabled: true,
    mode: 'records',
    perPage: 2,
  }" /></p>
<h3 id="pages-mode" tabindex="-1"><a class="header-anchor" href="#pages-mode" aria-hidden="true">#</a> pages mode</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    mode: <span class="token punctuation">'</span>pages<span class="token punctuation">'</span>
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><pagination-table
  :options="{
    enabled: true,
    mode: 'pages',
    perPage: 2,
  }" /></p>
<h2 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h2>
<p>type: <code>String (default: 'bottom')</code></p>
<p>Add pagination on 'top' or 'bottom' (top and bottom) of the table (default position is bottom)</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    position: <span class="token punctuation">'</span>top<span class="token punctuation">'</span>
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="perpage" tabindex="-1"><a class="header-anchor" href="#perpage" aria-hidden="true">#</a> perPage</h2>
<p>type: <code>Integer (default: 10)</code></p>
<p>Number of rows to show per page</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    perPage: 5
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="perpagedropdownenabled" tabindex="-1"><a class="header-anchor" href="#perpagedropdownenabled" aria-hidden="true">#</a> perPageDropdownEnabled</h2>
<p>type: <code>Boolean (default: true)</code></p>
<p>Show or hide the per page dropdown</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    perPageDropdownEnabled: false,
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="perpagedropdown" tabindex="-1"><a class="header-anchor" href="#perpagedropdown" aria-hidden="true">#</a> perPageDropdown</h2>
<p>type: <code>Array (default: [10,20,30,40,50])</code></p>
<p>Customize the dropdown options for the amount of items per page</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    perPageDropdown: [3, 7, 9]
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="dropdownallowall" tabindex="-1"><a class="header-anchor" href="#dropdownallowall" aria-hidden="true">#</a> dropdownAllowAll</h2>
<p>type: <code>Boolean (default: true)</code></p>
<p>enables/disables 'All' in the per page dropdown.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    perPageDropdown: [3, 7, 9],
    dropdownAllowAll: false,
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="setcurrentpage" tabindex="-1"><a class="header-anchor" href="#setcurrentpage" aria-hidden="true">#</a> setCurrentPage</h2>
<p>type: <code>Number</code></p>
<p>set current page programmatically.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>There's no validation for number of pages so please be careful using this.</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    setCurrentPage: 2,
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="pagination-label-text-options" tabindex="-1"><a class="header-anchor" href="#pagination-label-text-options" aria-hidden="true">#</a> pagination label/text options</h2>
<p>you can change one or more of the texts shown on pagination by overriding the labels in the following way:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    nextLabel: <span class="token punctuation">'</span>next<span class="token punctuation">'</span>,
    prevLabel: <span class="token punctuation">'</span>prev<span class="token punctuation">'</span>,
    rowsPerPageLabel: <span class="token punctuation">'</span>Rows per page<span class="token punctuation">'</span>,
    ofLabel: <span class="token punctuation">'</span>of<span class="token punctuation">'</span>,
    pageLabel: <span class="token punctuation">'</span>page<span class="token punctuation">'</span>, // for <span class="token punctuation">'</span>pages<span class="token punctuation">'</span> mode
    allLabel: <span class="token punctuation">'</span>All<span class="token punctuation">'</span>,
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="infofn" tabindex="-1"><a class="header-anchor" href="#infofn" aria-hidden="true">#</a> InfoFn</h3>
<p>Provide your own function to lay out pagination info how you like:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rows<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    enabled: true,
    infoFn: (params) => `Showing ${params.firstRecordOnPage} to ${params.lastRecordOnPage} of page ${params.currentPage}`,
  }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>the parameters passed to infoFn are the following:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  firstRecordOnPage<span class="token operator">:</span> <span class="token string">'index of the first record on the current page'</span><span class="token punctuation">,</span>
  lastRecordOnPage<span class="token operator">:</span> <span class="token string">'index of the last record on the current page'</span><span class="token punctuation">,</span>
  totalRecords<span class="token operator">:</span> <span class="token string">'total number of records'</span><span class="token punctuation">,</span>
  currentPage<span class="token operator">:</span> <span class="token string">'current page'</span><span class="token punctuation">,</span>
  totalPage<span class="token operator">:</span> <span class="token string">'total number of pages'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="replace-pagination-component" tabindex="-1"><a class="header-anchor" href="#replace-pagination-component" aria-hidden="true">#</a> Replace Pagination Component</h2>
<p>you can also replace the pagination component with your own component - <a href="/guide/advanced/#custom-pagination" target="_blank" rel="noopener noreferrer">Custom Pagination<OutboundLink/></a></p>
</template>
