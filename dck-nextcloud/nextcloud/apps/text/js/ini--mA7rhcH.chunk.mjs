import{g as m}from"./emoji-picker-Coav-X6q.chunk.mjs";function u(n,t){for(var s=0;s<t.length;s++){const e=t[s];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in n)){const i=Object.getOwnPropertyDescriptor(e,a);i&&Object.defineProperty(n,a,i.get?i:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}function v(n){const t=n.regex,s={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:n.NUMBER_RE}]},e=n.COMMENT();e.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const a={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},i={className:"literal",begin:/\bon|off|true|false|yes|no\b/},r={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},l={begin:/\[/,end:/\]/,contains:[e,i,a,r,s,"self"],relevance:0},g=/[A-Za-z0-9_-]+/,b=/"(\\"|[^"])*"/,d=/'[^']*'/,o=t.either(g,b,d),f=t.concat(o,"(\\s*\\.\\s*",o,")*",t.lookahead(/\s*=\s*[^#\s]/));return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[e,{className:"section",begin:/\[+/,end:/\]+/},{begin:f,className:"attr",starts:{end:/$/,contains:[e,l,i,a,r,s]}}]}}var c=v;const _=m(c),p=u({__proto__:null,default:_},[c]);export{c as a,p as i};
