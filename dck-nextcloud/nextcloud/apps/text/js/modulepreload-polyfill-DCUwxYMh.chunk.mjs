var me=Object.defineProperty;var Le=(t,e,r)=>e in t?me(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var j=(t,e,r)=>Le(t,typeof e!="symbol"?e+"":e,r);import{g as ee}from"./emoji-picker-Coav-X6q.chunk.mjs";const Ne="modulepreload",Re=function(t,e){return new URL(t,e).href},z={},pt=function(t,e,r){let i=Promise.resolve();if(e&&e.length>0){const c=document.getElementsByTagName("link"),E=document.querySelector("meta[property=csp-nonce]"),P=(E==null?void 0:E.nonce)||(E==null?void 0:E.getAttribute("nonce"));i=Promise.allSettled(e.map(n=>{if(n=Re(n,r),n in z)return;z[n]=!0;const s=n.endsWith(".css"),U=s?'[rel="stylesheet"]':"";if(r)for(let L=c.length-1;L>=0;L--){const R=c[L];if(R.href===n&&(!s||R.rel==="stylesheet"))return}else if(document.querySelector('link[href="'.concat(n,'"]').concat(U)))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":Ne,s||(u.as="script"),u.crossOrigin="",u.href=n,P&&u.setAttribute("nonce",P),document.head.appendChild(u),s)return new Promise((L,R)=>{u.addEventListener("load",L),u.addEventListener("error",()=>R(new Error("Unable to preload CSS for ".concat(n))))})}))}function a(c){const E=new Event("vite:preloadError",{cancelable:!0});if(E.payload=c,window.dispatchEvent(E),!E.defaultPrevented)throw c}return i.then(c=>{for(const E of c||[])E.status==="rejected"&&a(E.reason);return t().catch(a)})};function Oe(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var te={exports:{}},l=te.exports={},p,d;function k(){throw new Error("setTimeout has not been defined")}function x(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?p=setTimeout:p=k}catch{p=k}try{typeof clearTimeout=="function"?d=clearTimeout:d=x}catch{d=x}})();function re(t){if(p===setTimeout)return setTimeout(t,0);if((p===k||!p)&&setTimeout)return p=setTimeout,setTimeout(t,0);try{return p(t,0)}catch{try{return p.call(null,t,0)}catch{return p.call(this,t,0)}}}function ve(t){if(d===clearTimeout)return clearTimeout(t);if((d===x||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch{try{return d.call(null,t)}catch{return d.call(this,t)}}}var m=[],A=!1,N,D=-1;function Te(){!A||!N||(A=!1,N.length?m=N.concat(m):D=-1,m.length&&ne())}function ne(){if(!A){var t=re(Te);A=!0;for(var e=m.length;e;){for(N=m,m=[];++D<e;)N&&N[D].run();D=-1,e=m.length}N=null,A=!1,ve(t)}}l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];m.push(new se(t,e)),m.length===1&&!A&&re(ne)};function se(t,e){this.fun=t,this.array=e}se.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function I(){}l.on=I,l.addListener=I,l.once=I,l.off=I,l.removeListener=I,l.removeAllListeners=I,l.emit=I,l.prependListener=I,l.prependOnceListener=I,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};var Ae=te.exports;const $e=Oe(Ae);var X={};const we=typeof $e=="object"&&X&&X.NODE_DEBUG&&/\bsemver\b/i.test(X.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};var ie=we;const be="2.0.0",oe=256,ge=Number.MAX_SAFE_INTEGER||9007199254740991,Se=16,ye=oe-6,Pe=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var ae={MAX_LENGTH:oe,MAX_SAFE_COMPONENT_LENGTH:Se,MAX_SAFE_BUILD_LENGTH:ye,MAX_SAFE_INTEGER:ge,RELEASE_TYPES:Pe,SEMVER_SPEC_VERSION:be,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},V={exports:{}};(function(t,e){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:i,MAX_LENGTH:a}=ae,c=ie;e=t.exports={};const E=e.re=[],P=e.safeRe=[],n=e.src=[],s=e.t={};let U=0;const u="[a-zA-Z0-9-]",L=[["\\s",1],["\\d",a],[u,i]],R=O=>{for(const[f,w]of L)O=O.split("".concat(f,"*")).join("".concat(f,"{0,").concat(w,"}")).split("".concat(f,"+")).join("".concat(f,"{1,").concat(w,"}"));return O},o=(O,f,w)=>{const Ie=R(f),b=U++;c(O,b,f),s[O]=b,n[b]=f,E[b]=new RegExp(f,w?"g":void 0),P[b]=new RegExp(Ie,w?"g":void 0)};o("NUMERICIDENTIFIER","0|[1-9]\\d*"),o("NUMERICIDENTIFIERLOOSE","\\d+"),o("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-]".concat(u,"*")),o("MAINVERSION","(".concat(n[s.NUMERICIDENTIFIER],")\\.(").concat(n[s.NUMERICIDENTIFIER],")\\.(").concat(n[s.NUMERICIDENTIFIER],")")),o("MAINVERSIONLOOSE","(".concat(n[s.NUMERICIDENTIFIERLOOSE],")\\.(").concat(n[s.NUMERICIDENTIFIERLOOSE],")\\.(").concat(n[s.NUMERICIDENTIFIERLOOSE],")")),o("PRERELEASEIDENTIFIER","(?:".concat(n[s.NUMERICIDENTIFIER],"|").concat(n[s.NONNUMERICIDENTIFIER],")")),o("PRERELEASEIDENTIFIERLOOSE","(?:".concat(n[s.NUMERICIDENTIFIERLOOSE],"|").concat(n[s.NONNUMERICIDENTIFIER],")")),o("PRERELEASE","(?:-(".concat(n[s.PRERELEASEIDENTIFIER],"(?:\\.").concat(n[s.PRERELEASEIDENTIFIER],")*))")),o("PRERELEASELOOSE","(?:-?(".concat(n[s.PRERELEASEIDENTIFIERLOOSE],"(?:\\.").concat(n[s.PRERELEASEIDENTIFIERLOOSE],")*))")),o("BUILDIDENTIFIER","".concat(u,"+")),o("BUILD","(?:\\+(".concat(n[s.BUILDIDENTIFIER],"(?:\\.").concat(n[s.BUILDIDENTIFIER],")*))")),o("FULLPLAIN","v?".concat(n[s.MAINVERSION]).concat(n[s.PRERELEASE],"?").concat(n[s.BUILD],"?")),o("FULL","^".concat(n[s.FULLPLAIN],"$")),o("LOOSEPLAIN","[v=\\s]*".concat(n[s.MAINVERSIONLOOSE]).concat(n[s.PRERELEASELOOSE],"?").concat(n[s.BUILD],"?")),o("LOOSE","^".concat(n[s.LOOSEPLAIN],"$")),o("GTLT","((?:<|>)?=?)"),o("XRANGEIDENTIFIERLOOSE","".concat(n[s.NUMERICIDENTIFIERLOOSE],"|x|X|\\*")),o("XRANGEIDENTIFIER","".concat(n[s.NUMERICIDENTIFIER],"|x|X|\\*")),o("XRANGEPLAIN","[v=\\s]*(".concat(n[s.XRANGEIDENTIFIER],")(?:\\.(").concat(n[s.XRANGEIDENTIFIER],")(?:\\.(").concat(n[s.XRANGEIDENTIFIER],")(?:").concat(n[s.PRERELEASE],")?").concat(n[s.BUILD],"?)?)?")),o("XRANGEPLAINLOOSE","[v=\\s]*(".concat(n[s.XRANGEIDENTIFIERLOOSE],")(?:\\.(").concat(n[s.XRANGEIDENTIFIERLOOSE],")(?:\\.(").concat(n[s.XRANGEIDENTIFIERLOOSE],")(?:").concat(n[s.PRERELEASELOOSE],")?").concat(n[s.BUILD],"?)?)?")),o("XRANGE","^".concat(n[s.GTLT],"\\s*").concat(n[s.XRANGEPLAIN],"$")),o("XRANGELOOSE","^".concat(n[s.GTLT],"\\s*").concat(n[s.XRANGEPLAINLOOSE],"$")),o("COERCEPLAIN","(^|[^\\d])(\\d{1,".concat(r,"})(?:\\.(\\d{1,").concat(r,"}))?(?:\\.(\\d{1,").concat(r,"}))?")),o("COERCE","".concat(n[s.COERCEPLAIN],"(?:$|[^\\d])")),o("COERCEFULL",n[s.COERCEPLAIN]+"(?:".concat(n[s.PRERELEASE],")?(?:").concat(n[s.BUILD],")?(?:$|[^\\d])")),o("COERCERTL",n[s.COERCE],!0),o("COERCERTLFULL",n[s.COERCEFULL],!0),o("LONETILDE","(?:~>?)"),o("TILDETRIM","(\\s*)".concat(n[s.LONETILDE],"\\s+"),!0),e.tildeTrimReplace="$1~",o("TILDE","^".concat(n[s.LONETILDE]).concat(n[s.XRANGEPLAIN],"$")),o("TILDELOOSE","^".concat(n[s.LONETILDE]).concat(n[s.XRANGEPLAINLOOSE],"$")),o("LONECARET","(?:\\^)"),o("CARETTRIM","(\\s*)".concat(n[s.LONECARET],"\\s+"),!0),e.caretTrimReplace="$1^",o("CARET","^".concat(n[s.LONECARET]).concat(n[s.XRANGEPLAIN],"$")),o("CARETLOOSE","^".concat(n[s.LONECARET]).concat(n[s.XRANGEPLAINLOOSE],"$")),o("COMPARATORLOOSE","^".concat(n[s.GTLT],"\\s*(").concat(n[s.LOOSEPLAIN],")$|^$")),o("COMPARATOR","^".concat(n[s.GTLT],"\\s*(").concat(n[s.FULLPLAIN],")$|^$")),o("COMPARATORTRIM","(\\s*)".concat(n[s.GTLT],"\\s*(").concat(n[s.LOOSEPLAIN],"|").concat(n[s.XRANGEPLAIN],")"),!0),e.comparatorTrimReplace="$1$2$3",o("HYPHENRANGE","^\\s*(".concat(n[s.XRANGEPLAIN],")\\s+-\\s+(").concat(n[s.XRANGEPLAIN],")\\s*$")),o("HYPHENRANGELOOSE","^\\s*(".concat(n[s.XRANGEPLAINLOOSE],")\\s+-\\s+(").concat(n[s.XRANGEPLAINLOOSE],")\\s*$")),o("STAR","(<|>)?=?\\s*\\*"),o("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),o("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(V,V.exports);var _e=V.exports;const Ce=Object.freeze({loose:!0}),De=Object.freeze({}),Ge=t=>t?typeof t!="object"?Ce:t:De;var Me=Ge;const K=/^[0-9]+$/,ce=(t,e)=>{const r=K.test(t),i=K.test(e);return r&&i&&(t=+t,e=+e),t===e?0:r&&!i?-1:i&&!r?1:t<e?-1:1},Fe=(t,e)=>ce(e,t);var Ue={compareIdentifiers:ce,rcompareIdentifiers:Fe};const _=ie,{MAX_LENGTH:q,MAX_SAFE_INTEGER:C}=ae,{safeRe:W,t:Y}=_e,je=Me,{compareIdentifiers:v}=Ue;let Xe=class h{constructor(e,r){if(r=je(r),e instanceof h){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError('Invalid version. Must be a string. Got type "'.concat(typeof e,'".'));if(e.length>q)throw new TypeError("version is longer than ".concat(q," characters"));_("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const i=e.trim().match(r.loose?W[Y.LOOSE]:W[Y.FULL]);if(!i)throw new TypeError("Invalid Version: ".concat(e));if(this.raw=e,this.major=+i[1],this.minor=+i[2],this.patch=+i[3],this.major>C||this.major<0)throw new TypeError("Invalid major version");if(this.minor>C||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>C||this.patch<0)throw new TypeError("Invalid patch version");i[4]?this.prerelease=i[4].split(".").map(a=>{if(/^[0-9]+$/.test(a)){const c=+a;if(c>=0&&c<C)return c}return a}):this.prerelease=[],this.build=i[5]?i[5].split("."):[],this.format()}format(){return this.version="".concat(this.major,".").concat(this.minor,".").concat(this.patch),this.prerelease.length&&(this.version+="-".concat(this.prerelease.join("."))),this.version}toString(){return this.version}compare(e){if(_("SemVer.compare",this.version,this.options,e),!(e instanceof h)){if(typeof e=="string"&&e===this.version)return 0;e=new h(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof h||(e=new h(e,this.options)),v(this.major,e.major)||v(this.minor,e.minor)||v(this.patch,e.patch)}comparePre(e){if(e instanceof h||(e=new h(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const i=this.prerelease[r],a=e.prerelease[r];if(_("prerelease compare",r,i,a),i===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(i===void 0)return-1;if(i!==a)return v(i,a)}while(++r)}compareBuild(e){e instanceof h||(e=new h(e,this.options));let r=0;do{const i=this.build[r],a=e.build[r];if(_("build compare",r,i,a),i===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(i===void 0)return-1;if(i!==a)return v(i,a)}while(++r)}inc(e,r,i){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,i);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,i);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,i),this.inc("pre",r,i);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,i),this.inc("pre",r,i);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const a=Number(i)?1:0;if(!r&&i===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[a];else{let c=this.prerelease.length;for(;--c>=0;)typeof this.prerelease[c]=="number"&&(this.prerelease[c]++,c=-2);if(c===-1){if(r===this.prerelease.join(".")&&i===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(a)}}if(r){let c=[r,a];i===!1&&(c=[r]),v(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=c):this.prerelease=c}break}default:throw new Error("invalid increment argument: ".concat(e))}return this.raw=this.format(),this.build.length&&(this.raw+="+".concat(this.build.join("."))),this}};var le=Xe;const Z=le,Be=(t,e,r=!1)=>{if(t instanceof Z)return t;try{return new Z(t,e)}catch(i){if(!r)return null;throw i}};var ke=Be;const xe=ke,Ve=(t,e)=>{const r=xe(t,e);return r?r.version:null};var He=Ve;const ze=ee(He),Ke=le,qe=(t,e)=>new Ke(t,e).major;var We=qe;const J=ee(We);class Ee{constructor(e){j(this,"bus");typeof e.getVersion!="function"||!ze(e.getVersion())?console.warn("Proxying an event bus with an unknown or invalid version"):J(e.getVersion())!==J(this.getVersion())&&console.warn("Proxying an event bus of version "+e.getVersion()+" with "+this.getVersion()),this.bus=e}getVersion(){return"3.3.1"}subscribe(e,r){this.bus.subscribe(e,r)}unsubscribe(e,r){this.bus.unsubscribe(e,r)}emit(e,r){this.bus.emit(e,r)}}class ue{constructor(){j(this,"handlers",new Map)}getVersion(){return"3.3.1"}subscribe(e,r){this.handlers.set(e,(this.handlers.get(e)||[]).concat(r))}unsubscribe(e,r){this.handlers.set(e,(this.handlers.get(e)||[]).filter(i=>i!==r))}emit(e,r){(this.handlers.get(e)||[]).forEach(i=>{try{i(r)}catch(a){console.error("could not invoke event listener",a)}})}}let g=null;function H(){var t;return g!==null?g:typeof window>"u"?new Proxy({},{get:()=>()=>console.error("Window not available, EventBus can not be established!")}):((t=window.OC)!=null&&t._eventBus&&typeof window._nc_event_bus>"u"&&(console.warn("found old event bus instance at OC._eventBus. Update your version!"),window._nc_event_bus=window.OC._eventBus),typeof(window==null?void 0:window._nc_event_bus)<"u"?g=new Ee(window._nc_event_bus):g=window._nc_event_bus=new ue,g)}function he(t,e){H().subscribe(t,e)}function Ye(t,e){H().unsubscribe(t,e)}function Ze(t,e){H().emit(t,e)}const dt=Object.freeze(Object.defineProperty({__proto__:null,ProxyBus:Ee,SimpleBus:ue,emit:Ze,subscribe:he,unsubscribe:Ye},Symbol.toStringTag,{value:"Module"}));var G={},M={},y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;function F(t,e,r){return e=Je(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Je(t){var e=Qe(t,"string");return typeof e=="symbol"?e:e+""}function Qe(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}class ${constructor(e,r,i){F(this,"scope",void 0),F(this,"wrapped",void 0),this.scope="".concat(i?$.GLOBAL_SCOPE_PERSISTENT:$.GLOBAL_SCOPE_VOLATILE,"_").concat(btoa(e),"_"),this.wrapped=r}scopeKey(e){return"".concat(this.scope).concat(e)}setItem(e,r){this.wrapped.setItem(this.scopeKey(e),r)}getItem(e){return this.wrapped.getItem(this.scopeKey(e))}removeItem(e){this.wrapped.removeItem(this.scopeKey(e))}clear(){Object.keys(this.wrapped).filter(e=>e.startsWith(this.scope)).map(this.wrapped.removeItem.bind(this.wrapped))}}y.default=$,F($,"GLOBAL_SCOPE_VOLATILE","nextcloud_vol"),F($,"GLOBAL_SCOPE_PERSISTENT","nextcloud_per"),Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;var et=tt(y);function tt(t){return t&&t.__esModule?t:{default:t}}function B(t,e,r){return e=rt(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function rt(t){var e=nt(t,"string");return typeof e=="symbol"?e:e+""}function nt(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}class st{constructor(e){B(this,"appId",void 0),B(this,"persisted",!1),B(this,"clearedOnLogout",!1),this.appId=e}persist(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return this.persisted=e,this}clearOnLogout(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return this.clearedOnLogout=e,this}build(){return new et.default(this.appId,this.persisted?window.localStorage:window.sessionStorage,!this.clearedOnLogout)}}M.default=st,Object.defineProperty(G,"__esModule",{value:!0}),G.clearAll=lt,G.clearNonPersistent=Et;var it=G.getBuilder=ct,ot=pe(M),at=pe(y);function pe(t){return t&&t.__esModule?t:{default:t}}function ct(t){return new ot.default(t)}function de(t,e){Object.keys(t).filter(r=>e?e(r):!0).map(t.removeItem.bind(t))}function lt(){[window.sessionStorage,window.localStorage].map(t=>de(t))}function Et(){[window.sessionStorage,window.localStorage].map(t=>de(t,e=>!e.startsWith(at.default.GLOBAL_SCOPE_PERSISTENT)))}let S;const fe=[];function ft(){var t;return S===void 0&&(S=(t=document.head.dataset.requesttoken)!=null?t:null),S}function It(t){fe.push(t)}he("csrf-token-update",t=>{S=t.token,fe.forEach(e=>{try{e(S)}catch(r){console.error("Error updating CSRF token observer",r)}})}),it("public").persist().build();let T;const Q=(t,e)=>t?t.getAttribute(e):null;function mt(){if(T!==void 0)return T;const t=document==null?void 0:document.getElementsByTagName("head")[0];if(!t)return null;const e=Q(t,"data-user");return e===null?(T=null,T):(T={uid:e,displayName:Q(t,"data-user-displayname"),isAdmin:!!window._oc_isadmin},T)}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();export{pt as _,ft as a,it as b,dt as d,Ze as e,mt as g,It as o,$e as p,he as s,Ye as u};
