import{g as s}from"./emoji-picker-Coav-X6q.chunk.mjs";function l(t,a){for(var e=0;e<a.length;e++){const o=a[e];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(o,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}function c(t){const a={className:"variable",begin:/\$[\w\d#@][\w\d_]*/,relevance:0},e={className:"variable",begin:/<(?!\/)/,end:/>/};return{name:"Packet Filter config",aliases:["pf.conf"],keywords:{$pattern:/[a-z0-9_<>-]+/,built_in:"block match pass load anchor|5 antispoof|10 set table",keyword:"in out log quick on rdomain inet inet6 proto from port os to route allow-opts divert-packet divert-reply divert-to flags group icmp-type icmp6-type label once probability recieved-on rtable prio queue tos tag tagged user keep fragment for os drop af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin source-hash static-port dup-to reply-to route-to parent bandwidth default min max qlimit block-policy debug fingerprints hostid limit loginterface optimization reassemble ruleset-optimization basic none profile skip state-defaults state-policy timeout const counters persist no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy source-track global rule max-src-nodes max-src-states max-src-conn max-src-conn-rate overload flush scrub|5 max-mss min-ttl no-df|10 random-id",literal:"all any no-route self urpf-failed egress|5 unknown"},contains:[t.HASH_COMMENT_MODE,t.NUMBER_MODE,t.QUOTE_STRING_MODE,a,e]}}var i=c;const p=s(i),d=l({__proto__:null,default:p},[i]);export{i as a,d as p};
