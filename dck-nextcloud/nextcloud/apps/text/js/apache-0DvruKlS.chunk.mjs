import{g as i}from"./emoji-picker-Coav-X6q.chunk.mjs";function c(e,t){for(var a=0;a<t.length;a++){const n=t[a];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(n,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function l(e){const t={className:"number",begin:/[$%]\d+/},a={className:"number",begin:/\b\d+/},n={className:"number",begin:/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/},r={className:"number",begin:/:\d{1,5}/};return{name:"Apache config",aliases:["apacheconf"],case_insensitive:!0,contains:[e.HASH_COMMENT_MODE,{className:"section",begin:/<\/?/,end:/>/,contains:[n,r,e.inherit(e.QUOTE_STRING_MODE,{relevance:0})]},{className:"attribute",begin:/\w+/,relevance:0,keywords:{_:["order","deny","allow","setenv","rewriterule","rewriteengine","rewritecond","documentroot","sethandler","errordocument","loadmodule","options","header","listen","serverroot","servername"]},starts:{end:/$/,relevance:0,keywords:{literal:"on off all deny allow"},contains:[{scope:"punctuation",match:/\\\n/},{className:"meta",begin:/\s\[/,end:/\]$/},{className:"variable",begin:/[\$%]\{/,end:/\}/,contains:["self",t]},n,a,e.QUOTE_STRING_MODE]}}],illegal:/\S/}}var s=l;const d=i(s),b=c({__proto__:null,default:d},[s]);export{b as a,s as b};
