import{g as p}from"./emoji-picker-Coav-X6q.chunk.mjs";function O(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in t)){const i=Object.getOwnPropertyDescriptor(n,a);i&&Object.defineProperty(t,a,i.get?i:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}function y(t){const e="[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",r="\\|[^]*?\\|",n="(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",a={className:"literal",begin:"\\b(t{1}|nil)\\b"},i={className:"number",variants:[{begin:n,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+n+" +"+n,end:"\\)"}]},l=t.inherit(t.QUOTE_STRING_MODE,{illegal:null}),s=t.COMMENT(";","$",{relevance:0}),g={begin:"\\*",end:"\\*"},c={className:"symbol",begin:"[:&]"+e},o={begin:e,relevance:0},v={begin:r},d={contains:[i,l,g,c,{begin:"\\(",end:"\\)",contains:["self",a,l,i,o]},o],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'"+r}]},f={variants:[{begin:"'"+e},{begin:"#'"+e+"(::"+e+")*"}]},b={begin:"\\(\\s*",end:"\\)"},u={endsWithParent:!0,relevance:0};return b.contains=[{className:"name",variants:[{begin:e,relevance:0},{begin:r}]},u],u.contains=[d,f,b,a,i,l,s,g,c,v,o],{name:"Lisp",illegal:/\S/,contains:[i,t.SHEBANG(),a,l,s,d,f,b,o]}}var m=y;const _=p(m),A=O({__proto__:null,default:_},[m]);export{m as a,A as l};
