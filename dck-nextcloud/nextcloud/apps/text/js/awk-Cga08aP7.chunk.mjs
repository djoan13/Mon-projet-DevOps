import{g as c}from"./emoji-picker-Coav-X6q.chunk.mjs";function b(e,i){for(var r=0;r<i.length;r++){const n=i[r];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in e)){const o=Object.getOwnPropertyDescriptor(n,t);o&&Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function s(e){const i={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},r="BEGIN END if else while do for in break continue delete next nextfile function func exit|10",n={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/(u|b)?r?'''/,end:/'''/,relevance:10},{begin:/(u|b)?r?"""/,end:/"""/,relevance:10},{begin:/(u|r|ur)'/,end:/'/,relevance:10},{begin:/(u|r|ur)"/,end:/"/,relevance:10},{begin:/(b|br)'/,end:/'/},{begin:/(b|br)"/,end:/"/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]};return{name:"Awk",keywords:{keyword:r},contains:[i,n,e.REGEXP_MODE,e.HASH_COMMENT_MODE,e.NUMBER_MODE]}}var a=s;const l=c(a),f=b({__proto__:null,default:l},[a]);export{f as a,a as b};
