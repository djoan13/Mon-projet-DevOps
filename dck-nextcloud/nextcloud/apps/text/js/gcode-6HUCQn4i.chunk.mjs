import{g as f}from"./emoji-picker-Coav-X6q.chunk.mjs";function u(c,n){for(var a=0;a<n.length;a++){const t=n[a];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in c)){const o=Object.getOwnPropertyDescriptor(t,e);o&&Object.defineProperty(c,e,o.get?o:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}function m(c){const n=c.regex,a={$pattern:/[A-Z]+|%/,keyword:["THEN","ELSE","ENDIF","IF","GOTO","DO","WHILE","WH","END","CALL","SUB","ENDSUB","EQ","NE","LT","GT","LE","GE","AND","OR","XOR","%"],built_in:["ATAN","ABS","ACOS","ASIN","COS","EXP","FIX","FUP","ROUND","LN","SIN","SQRT","TAN","EXISTS"]},t=/\b/;function e(i,S){if(i.index===0)return;const r=i.input[i.index-1];r>="0"&&r<="9"||r!=="_"&&S.ignoreMatch()}const o=/[+-]?((\.\d+)|(\d+)(\.\d*)?)/,s=/[GM]\s*\d+(\.\d+)?/,b=/T\s*\d+/,g=/O\s*\d+/,O=/O<.+>/,d=/[ABCUVWXYZ]\s*/,p=/[FHIJKPQRS]\s*/,N=[c.COMMENT(/\(/,/\)/),c.COMMENT(/;/,/$/),c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,c.C_NUMBER_MODE,{scope:"title.function",variants:[{match:n.concat(t,s)},{begin:s,"on:begin":e},{match:n.concat(t,b)},{begin:b,"on:begin":e}]},{scope:"symbol",variants:[{match:n.concat(t,g)},{begin:g,"on:begin":e},{match:n.concat(t,O)},{begin:O,"on:begin":e},{match:/\*\s*\d+\s*$/}]},{scope:"operator",match:/^N\s*\d+/},{scope:"variable",match:/-?#\s*\d+/},{scope:"property",variants:[{match:n.concat(t,d,o)},{begin:n.concat(d,o),"on:begin":e}]},{scope:"params",variants:[{match:n.concat(t,p,o)},{begin:n.concat(p,o),"on:begin":e}]}];return{name:"G-code (ISO 6983)",aliases:["nc"],case_insensitive:!0,disableAutodetect:!0,keywords:a,contains:N}}var E=m;const T=f(E),A=u({__proto__:null,default:T},[E]);export{E as a,A as g};
