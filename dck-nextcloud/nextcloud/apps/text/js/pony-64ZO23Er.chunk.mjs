import{g as c}from"./emoji-picker-Coav-X6q.chunk.mjs";function l(e,i){for(var r=0;r<i.length;r++){const t=i[r];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const a=Object.getOwnPropertyDescriptor(t,n);a&&Object.defineProperty(e,n,a.get?a:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function f(e){const i={keyword:"actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor",meta:"iso val tag trn box ref",literal:"this false true"},r={className:"string",begin:'"""',end:'"""',relevance:10},t={className:"string",begin:'"',end:'"',contains:[e.BACKSLASH_ESCAPE]},n={className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE],relevance:0},a={className:"type",begin:"\\b_?[A-Z][\\w]*",relevance:0},s={begin:e.IDENT_RE+"'",relevance:0};return{name:"Pony",keywords:i,contains:[a,r,t,n,s,{className:"number",begin:"(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",relevance:0},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}}var o=f;const b=c(o),g=l({__proto__:null,default:b},[o]);export{o as a,g as p};
