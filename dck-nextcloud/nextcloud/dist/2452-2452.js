"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[2452],{73160:(t,n,a)=>{a.d(n,{A:()=>s});var e=a(71354),o=a.n(e),i=a(76314),p=a.n(i)()(o());p.push([t.id,"[data-v-60bd0af2] .app-changelog-dialog{min-height:50vh !important}.app-changelog-dialog__text[data-v-60bd0af2]{padding-inline:14px}","",{version:3,sources:["webpack://./apps/updatenotification/src/components/AppChangelogDialog.vue"],names:[],mappings:"AACA,wCACC,0BAAA,CAGD,6CACC,mBAAA",sourcesContent:["\n:deep(.app-changelog-dialog) {\n\tmin-height: 50vh !important;\n}\n\n.app-changelog-dialog__text {\n\tpadding-inline: 14px;\n}\n"],sourceRoot:""}]);const s=p},39858:(t,n,a)=>{a.d(n,{A:()=>s});var e=a(71354),o=a.n(e),i=a(76314),p=a.n(i)()(o());p.push([t.id,".markdown[data-v-4fb3448b] ul{list-style:disc;padding-inline-start:20px}.markdown[data-v-4fb3448b] h3,.markdown[data-v-4fb3448b] h4,.markdown[data-v-4fb3448b] h5,.markdown[data-v-4fb3448b] h6{font-weight:600;line-height:1.5;margin-top:24px;margin-bottom:12px;color:var(--color-main-text)}.markdown[data-v-4fb3448b] h3{font-size:20px}.markdown[data-v-4fb3448b] h4{font-size:18px}.markdown[data-v-4fb3448b] h5{font-size:17px}.markdown[data-v-4fb3448b] h6{font-size:var(--default-font-size)}","",{version:3,sources:["webpack://./apps/updatenotification/src/components/Markdown.vue"],names:[],mappings:"AAGE,8BACC,eAAA,CACA,yBAAA,CAGD,wHACC,eAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CACA,4BAAA,CAGD,8BACC,cAAA,CAGD,8BACC,cAAA,CAGD,8BACC,cAAA,CAGD,8BACC,kCAAA",sourcesContent:["\n.markdown {\n\t:deep {\n\t\tul {\n\t\t\tlist-style: disc;\n\t\t\tpadding-inline-start: 20px;\n\t\t}\n\n\t\th3, h4, h5, h6 {\n\t\t\tfont-weight: 600;\n\t\t\tline-height: 1.5;\n\t\t\tmargin-top: 24px;\n\t\t\tmargin-bottom: 12px;\n\t\t\tcolor: var(--color-main-text);\n\t\t}\n\n\t\th3 {\n\t\t\tfont-size: 20px;\n\t\t}\n\n\t\th4 {\n\t\t\tfont-size: 18px;\n\t\t}\n\n\t\th5 {\n\t\t\tfont-size: 17px;\n\t\t}\n\n\t\th6 {\n\t\t\tfont-size: var(--default-font-size);\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const s=p},92452:(t,n,a)=>{a.r(n),a.d(n,{default:()=>G});var e=a(85471),o=a(53334),i=a(63814),p=a(65043),s=a(94219),r=a(60023),l=a(99418);const d=(0,e.pM)({__name:"Markdown",props:{markdown:null,minHeadingLevel:{default:2}},setup(t){const n=t,{html:a}=((t,n)=>{const a=(0,e.EW)((()=>Math.min(Math.max(n.value??1,1),6))),o=new r.xI.Renderer;return o.link=function(t,n,a){let e=`<a href="${t}" rel="noreferrer noopener" target="_blank"`;return n&&(e+=' title="'+n+'"'),e+=">"+a+"</a>",e},o.image=function(t,n,a){return a||(n??"")},o.heading=(t,n)=>{const e=Math.max(a.value,n);return`<h${e}>${t}</h${e}>`},{html:(0,e.EW)((()=>l.A.sanitize((0,r.xI)((t.value??"").trim(),{renderer:o,gfm:!1,breaks:!1,pedantic:!1}),{SAFE_FOR_JQUERY:!0,ALLOWED_TAGS:["h1","h2","h3","h4","h5","h6","strong","p","a","ul","ol","li","em","del","blockquote"]})))}})((0,e.lW)(n,"markdown"),(0,e.lW)(n,"minHeadingLevel"));return{__sfc:!0,props:n,html:a}}});var A=a(85072),c=a.n(A),u=a(97825),m=a.n(u),h=a(77659),g=a.n(h),f=a(55056),v=a.n(f),b=a(10540),C=a.n(b),k=a(41113),w=a.n(k),x=a(39858),_={};_.styleTagTransform=w(),_.setAttributes=v(),_.insert=g().bind(null,"head"),_.domAPI=m(),_.insertStyleElement=C(),c()(x.A,_),x.A&&x.A.locals&&x.A.locals;var y=a(14486);const B=(0,y.A)(d,(function(){var t=this,n=t._self._c,a=t._self._setupProxy;return n("div",{staticClass:"markdown",domProps:{innerHTML:t._s(a.html)}})}),[],!1,null,"4fb3448b",null).exports,T=(0,e.pM)({__name:"AppChangelogDialog",props:{appId:null,version:{default:void 0},open:{type:Boolean,default:!0}},emits:["dismiss","update:open"],setup(t,n){let{emit:a}=n;const r=t,l=[{label:(0,o.Tl)("updatenotification","Give feedback"),callback:()=>{window.open(`https://apps.nextcloud.com/apps/${r.appId}#comments`,"_blank","noreferrer noopener")}},{label:(0,o.Tl)("updatenotification","Get started"),type:"primary",callback:()=>{a("dismiss"),a("update:open",!1)}}],d=(0,e.KR)(r.appId),A=(0,e.KR)(r.version??""),c=(0,e.KR)("");return(0,e.nT)((()=>{const t=r.version?(0,i.KT)("/apps/updatenotification/api/v1/changelog/{app}?version={version}",{version:r.version,app:r.appId}):(0,i.KT)("/apps/updatenotification/api/v1/changelog/{app}",{version:r.version,app:r.appId});p.Ay.get(t).then((t=>{let{data:n}=t;d.value=n.ocs.data.appName,A.value=n.ocs.data.version,c.value=n.ocs.data.content})).catch((t=>{404===t?.response?.status?(d.value=r.appId,c.value=(0,o.Tl)("updatenotification","No changelog available")):(console.error("Failed to load changelog entry",t),a("update:open",!1))}))})),{__sfc:!0,props:r,emit:a,dialogButtons:l,appName:d,appVersion:A,markdown:c,t:o.Tl,NcDialog:s.A,Markdown:B}}});var z=a(73160),D={};D.styleTagTransform=w(),D.setAttributes=v(),D.insert=g().bind(null,"head"),D.domAPI=m(),D.insertStyleElement=C(),c()(z.A,D),z.A&&z.A.locals&&z.A.locals;const G=(0,y.A)(T,(function(){var t=this,n=t._self._c,a=t._self._setupProxy;return n(a.NcDialog,{attrs:{"content-classes":"app-changelog-dialog",buttons:a.dialogButtons,name:a.t("updatenotification","What's new in {app} {version}",{app:a.appName,version:a.appVersion}),open:t.open&&void 0!==a.markdown,size:"normal"},on:{"update:open":function(n){return t.$emit("update:open",n)}}},[n(a.Markdown,{staticClass:"app-changelog-dialog__text",attrs:{markdown:a.markdown,"min-heading-level":3}})],1)}),[],!1,null,"60bd0af2",null).exports}}]);
//# sourceMappingURL=2452-2452.js.map?v=3eed5782bf1821aa333c