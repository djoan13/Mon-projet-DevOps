import{g as s}from"./emoji-picker-Coav-X6q.chunk.mjs";function c(n,o){for(var r=0;r<o.length;r++){const e=o[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in n)){const a=Object.getOwnPropertyDescriptor(e,t);a&&Object.defineProperty(n,t,a.get?a:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}function l(n){return{name:"Julia REPL",contains:[{className:"meta.prompt",begin:/^julia>/,relevance:10,starts:{end:/^(?![ ]{6})/,subLanguage:"julia"}}],aliases:["jldoctest"]}}var i=l;const u=s(i),g=c({__proto__:null,default:u},[i]);export{i as a,g as j};
