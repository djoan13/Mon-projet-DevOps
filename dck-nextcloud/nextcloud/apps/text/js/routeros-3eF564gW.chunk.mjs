import{g as c}from"./emoji-picker-Coav-X6q.chunk.mjs";function g(n,i){for(var t=0;t<i.length;t++){const r=i[t];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in n)){const s=Object.getOwnPropertyDescriptor(r,e);s&&Object.defineProperty(n,e,s.get?s:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}function d(n){const i="foreach do while for if from to step else on-error and or not in",t="global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime",r="add remove enable disable set get print export edit find run debug error info warning",e="true false yes no nothing nil null",s="traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw",o={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},a={className:"string",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,o,{className:"variable",begin:/\$\(/,end:/\)/,contains:[n.BACKSLASH_ESCAPE]}]},l={className:"string",begin:/'/,end:/'/};return{name:"MikroTik RouterOS script",aliases:["mikrotik"],case_insensitive:!0,keywords:{$pattern:/:?[\w-]+/,literal:e,keyword:i+" :"+i.split(" ").join(" :")+" :"+t.split(" ").join(" :")},contains:[{variants:[{begin:/\/\*/,end:/\*\//},{begin:/\/\//,end:/$/},{begin:/<\//,end:/>/}],illegal:/./},n.COMMENT("^#","$"),a,l,o,{begin:/[\w-]+=([^\s{}[\]()>]+)/,relevance:0,returnBegin:!0,contains:[{className:"attribute",begin:/[^=]+/},{begin:/=/,endsWithParent:!0,relevance:0,contains:[a,l,o,{className:"literal",begin:"\\b("+e.split(" ").join("|")+")\\b"},{begin:/("[^"]*"|[^\s{}[\]]+)/}]}]},{className:"number",begin:/\*[0-9a-fA-F]+/},{begin:"\\b("+r.split(" ").join("|")+")([\\s[(\\]|])",returnBegin:!0,contains:[{className:"built_in",begin:/\w+/}]},{className:"built_in",variants:[{begin:"(\\.\\./|/|\\s)(("+s.split(" ").join("|")+");?\\s)+"},{begin:/\.\./,relevance:0}]}]}}var p=d;const b=c(p),u=g({__proto__:null,default:b},[p]);export{p as a,u as r};
