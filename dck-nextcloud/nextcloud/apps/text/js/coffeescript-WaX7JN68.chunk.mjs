import{g as p}from"./emoji-picker-Coav-X6q.chunk.mjs";function E(e,s){for(var a=0;a<s.length;a++){const n=s[a];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in e)){const i=Object.getOwnPropertyDescriptor(n,t);i&&Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const m=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],S=["true","false","null","undefined","NaN","Infinity"],_=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],v=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],B=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],I=[].concat(B,_,v);function N(e){const s=["npm","print"],a=["yes","no","on","off"],n=["then","unless","until","loop","by","when","and","or","is","isnt","not"],t=["var","const","let","function","static"],i=b=>A=>!b.includes(A),o={keyword:m.concat(n).filter(i(t)),literal:S.concat(a),built_in:I.concat(s)},r="[A-Za-z$_][0-9A-Za-z$_]*",c={className:"subst",begin:/#\{/,end:/\}/,keywords:o},l=[e.BINARY_NUMBER_MODE,e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,c]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,c]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[c,e.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+r},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}];c.contains=l;const f=e.inherit(e.TITLE_MODE,{begin:r}),d="(\\(.*\\)\\s*)?\\B[-=]>",g={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:o,contains:["self"].concat(l)}]},y={variants:[{match:[/class\s+/,r,/\s+extends\s+/,r]},{match:[/class\s+/,r]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:o};return{name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:o,illegal:/\/\*/,contains:[...l,e.COMMENT("###","###"),e.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+r+"\\s*=\\s*"+d,end:"[-=]>",returnBegin:!0,contains:[f,g]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:d,end:"[-=]>",returnBegin:!0,contains:[g]}]},y,{begin:r+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}]}}var u=N;const C=p(u),O=E({__proto__:null,default:C},[u]);export{u as a,O as c};
