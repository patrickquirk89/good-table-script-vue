(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{189:function(e,t,n){"use strict";n.r(t);var a={name:"before-after-columns",props:[],data:function(){return{columns:[{label:"Before",field:"before"},{label:"Name",field:"name"},{label:"Age",field:"age",type:"number"},{label:"Created On",field:"createdAt",type:"date",dateInputFormat:"YYYY-MM-DD",dateOutputFormat:"MMM Do YY"},{label:"Percent",field:"score",type:"percentage"},{label:"After",field:"after"}],rows:[{id:1,name:"John",age:20,createdAt:"201-10-31:9: 35 am",score:.03343},{id:2,name:"Jane",age:24,createdAt:"2011-10-31",score:.03343},{id:3,name:"Susan",age:16,createdAt:"2011-10-30",score:.03343}]}},computed:{},methods:{},mounted:function(){},components:{}},o=n(0),r=Object(o.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vue-good-table",{attrs:{columns:e.columns,rows:e.rows},scopedSlots:e._u([{key:"table-row",fn:function(t){return["before"==t.column.field?n("span",[e._v("\n        before\n      ")]):"after"==t.column.field?n("span",[e._v("\n        after\n      ")]):n("span",[e._v("\n        "+e._s(t.formattedRow[t.column.field])+"\n      ")])]}}])})],1)},[],!1,null,null,null);t.default=r.exports}}]);