"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[3303],{77796:(t,e,r)=>{r.d(e,{K:()=>i});const a=["post","showcase","carousel"],i={type:{type:String,required:!0,validator:t=>"string"==typeof t&&a.includes(t)},id:{type:String,required:!0},date:{type:Number,required:!1,default:void 0},expiryDate:{type:Number,required:!1,default:void 0},headline:{type:Object,required:!1,default:()=>null},link:{type:String,required:!1,default:()=>null}}},74640:(t,e,r)=>{r.d(e,{O:()=>n});var a=r(53334),i=r(85471);const n=t=>{const e=(0,a.Z0)();return(0,i.EW)((()=>t?.value?((t,e)=>t[e]??t[e.split("_")[0]]??t.en??null)(t.value,e):null))}},83186:(t,e,r)=>{r.d(e,{A:()=>d});var a=r(71354),i=r.n(a),n=r(76314),s=r.n(n)()(i());s.push([t.id,".app-discover-post[data-v-9162c958]{max-height:300px;width:100%;background-color:var(--color-primary-element-light);border-radius:var(--border-radius-rounded);display:flex;flex-direction:row;justify-content:start}.app-discover-post--reverse[data-v-9162c958]{flex-direction:row-reverse}.app-discover-post h3[data-v-9162c958],.app-discover-post h4[data-v-9162c958]{font-size:24px;font-weight:600;margin-block:0 1em}.app-discover-post__text[data-v-9162c958]{display:block;width:100%;padding:var(--border-radius-rounded);overflow-y:scroll}.app-discover-post:has(.app-discover-post__media) .app-discover-post__text[data-v-9162c958]{padding-block-end:0}.app-discover-post__media[data-v-9162c958]{display:block;overflow:hidden;max-width:450px;border-radius:var(--border-radius-rounded)}.app-discover-post__media--fullwidth[data-v-9162c958]{max-width:unset;max-height:unset}.app-discover-post__media--end[data-v-9162c958]{border-end-start-radius:0;border-start-start-radius:0}.app-discover-post__media--start[data-v-9162c958]{border-end-end-radius:0;border-start-end-radius:0}.app-discover-post__media img[data-v-9162c958],.app-discover-post__media-element[data-v-9162c958]{height:100%;width:100%;object-fit:cover;object-position:center}.app-discover-post__play-icon[data-v-9162c958]{position:absolute;top:-46px;inset-inline-end:-46px}.app-discover-post__play-icon-wrapper[data-v-9162c958]{position:relative;top:-50%;inset-inline-start:-50%}.app-discover-post--small.app-discover-post[data-v-9162c958]{flex-direction:column;max-height:500px}.app-discover-post--small.app-discover-post--reverse[data-v-9162c958]{flex-direction:column-reverse}.app-discover-post--small .app-discover-post__text[data-v-9162c958]{flex:1 1 50%}.app-discover-post--small .app-discover-post__media[data-v-9162c958]{min-width:100%}.app-discover-post--small .app-discover-post__media--end[data-v-9162c958]{border-radius:var(--border-radius-rounded);border-start-end-radius:0;border-start-start-radius:0}.app-discover-post--small .app-discover-post__media--start[data-v-9162c958]{border-radius:var(--border-radius-rounded);border-end-end-radius:0;border-end-start-radius:0}","",{version:3,sources:["webpack://./apps/settings/src/components/AppStoreDiscover/PostType.vue"],names:[],mappings:"AACA,oCACC,gBAAA,CACA,UAAA,CACA,mDAAA,CACA,0CAAA,CAEA,YAAA,CACA,kBAAA,CACA,qBAAA,CAEA,6CACC,0BAAA,CAGD,8EACC,cAAA,CACA,eAAA,CACA,kBAAA,CAGD,0CACC,aAAA,CACA,UAAA,CACA,oCAAA,CACA,iBAAA,CAID,4FACC,mBAAA,CAGD,2CACC,aAAA,CACA,eAAA,CAEA,eAAA,CACA,0CAAA,CAEA,sDACC,eAAA,CACA,gBAAA,CAGD,gDACC,yBAAA,CACA,2BAAA,CAGD,kDACC,uBAAA,CACA,yBAAA,CAGD,kGACC,WAAA,CACA,UAAA,CACA,gBAAA,CACA,sBAAA,CAIF,+CACC,iBAAA,CACA,SAAA,CACA,sBAAA,CAEA,uDACC,iBAAA,CACA,QAAA,CACA,uBAAA,CAMF,6DACC,qBAAA,CACA,gBAAA,CAEA,sEACC,6BAAA,CAKD,oEACC,YAAA,CAGD,qEACC,cAAA,CAEA,0EACC,0CAAA,CACA,yBAAA,CACA,2BAAA,CAGD,4EACC,0CAAA,CACA,uBAAA,CACA,yBAAA",sourcesContent:["\n.app-discover-post {\n\tmax-height: 300px;\n\twidth: 100%;\n\tbackground-color: var(--color-primary-element-light);\n\tborder-radius: var(--border-radius-rounded);\n\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: start;\n\n\t&--reverse {\n\t\tflex-direction: row-reverse;\n\t}\n\n\th3, h4 {\n\t\tfont-size: 24px;\n\t\tfont-weight: 600;\n\t\tmargin-block: 0 1em;\n\t}\n\n\t&__text {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tpadding: var(--border-radius-rounded);\n\t\toverflow-y: scroll;\n\t}\n\n\t// If there is media next to the text we do not want a padding on the bottom as this looks weird when scrolling\n\t&:has(&__media) &__text {\n\t\tpadding-block-end: 0;\n\t}\n\n\t&__media {\n\t\tdisplay: block;\n\t\toverflow: hidden;\n\n\t\tmax-width: 450px;\n\t\tborder-radius: var(--border-radius-rounded);\n\n\t\t&--fullwidth {\n\t\t\tmax-width: unset;\n\t\t\tmax-height: unset;\n\t\t}\n\n\t\t&--end {\n\t\t\tborder-end-start-radius: 0;\n\t\t\tborder-start-start-radius: 0;\n\t\t}\n\n\t\t&--start {\n\t\t\tborder-end-end-radius: 0;\n\t\t\tborder-start-end-radius: 0;\n\t\t}\n\n\t\timg, &-element {\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\tobject-fit: cover;\n\t\t\tobject-position: center;\n\t\t}\n\t}\n\n\t&__play-icon {\n\t\tposition: absolute;\n\t\ttop: -46px; // half of the icon height\n\t\tinset-inline-end: -46px; // half of the icon width\n\n\t\t&-wrapper {\n\t\t\tposition: relative;\n\t\t\ttop: -50%;\n\t\t\tinset-inline-start: -50%;\n\t\t}\n\t}\n}\n\n.app-discover-post--small {\n\t&.app-discover-post {\n\t\tflex-direction: column;\n\t\tmax-height: 500px;\n\n\t\t&--reverse {\n\t\t\tflex-direction: column-reverse;\n\t\t}\n\t}\n\n\t.app-discover-post {\n\t\t&__text {\n\t\t\tflex: 1 1 50%;\n\t\t}\n\n\t\t&__media {\n\t\t\tmin-width: 100%;\n\n\t\t\t&--end {\n\t\t\t\tborder-radius: var(--border-radius-rounded);\n\t\t\t\tborder-start-end-radius: 0;\n\t\t\t\tborder-start-start-radius: 0;\n\t\t\t}\n\n\t\t\t&--start {\n\t\t\t\tborder-radius: var(--border-radius-rounded);\n\t\t\t\tborder-end-end-radius: 0;\n\t\t\t\tborder-end-start-radius: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const d=s},63303:(t,e,r)=>{r.r(e),r.d(e,{default:()=>S});var a=r(9165),i=r(63814),n=r(13073),s=r(85471),d=r(77796),o=r(74640),p=r(6695),A=r(32981),l=r(40173);const c=(0,A.C)("core","apps"),u=Object.fromEntries(c.map((t=>[t.app??t.id,t.href]))),v=(0,s.pM)({name:"AppLink",components:{RouterLink:l.Wk},props:{href:{type:String,required:!0}},data:()=>({routerProps:void 0,linkProps:void 0}),watch:{href:{immediate:!0,handler(){const t=this.href.match(/^app:\/\/([^/]+)(\/.+)?$/);if(this.routerProps=void 0,this.linkProps=void 0,null===t)return void(this.linkProps={href:this.href,target:"_blank",rel:"noreferrer noopener"});const e=t[1];t[2]?this.linkProps={href:(0,i.Jv)(`/apps/${e}${t[2]}`)}:e in u?this.linkProps={href:u[e]}:this.routerProps={to:{name:"apps-details",params:{category:this.$route.params?.category??"discover",id:e}}}}}}});var m=r(14486);const C=(0,m.A)(v,(function(){var t=this,e=t._self._c;return t._self._setupProxy,t.linkProps?e("a",t._b({},"a",t.linkProps,!1),[t._t("default")],2):t.routerProps?e("RouterLink",t._b({},"RouterLink",t.routerProps,!1),[t._t("default")],2):t._e()}),[],!1,null,null,null).exports,h=(0,s.pM)({components:{AppLink:C,NcIconSvgWrapper:p.A},props:{...d.K,text:{type:Object,required:!1,default:()=>null},media:{type:Object,required:!1,default:()=>null},inline:{type:Boolean,required:!1,default:!1},domId:{type:String,required:!1,default:null}},setup(t){const e=(0,o.O)((0,s.EW)((()=>t.headline))),r=(0,o.O)((0,s.EW)((()=>t.text))),d=(0,o.O)((0,s.EW)((()=>t.media?.content))),p=(0,s.EW)((()=>null!==d.value?[d.value.src].flat():void 0)),A=(0,s.EW)((()=>d.value?.alt??"")),l=(0,s.EW)((()=>!0===p?.value?.[0].mime.startsWith("image/"))),c=(0,s.EW)((()=>!e.value&&!r.value)),u=(0,s.EW)((()=>d.value?.link??t.link)),v=(0,s.KR)(!1),m=(0,s.EW)((()=>d.value?.link&&v.value)),C=(0,s.KR)(),{width:h}=(0,n.Lhy)(C),_=(0,s.EW)((()=>h.value<600)),f=(0,s.KR)(),b=(0,n.ITo)(f,{threshold:.3});return(0,s.nT)((()=>{if(!l.value&&f.value){const t=f.value;b.value?(t.muted=!0,t.play()):(t.pause(),t.ended&&(t.currentTime=0,v.value=!1))}})),{mdiPlayCircleOutline:a.Nwy,container:C,translatedText:r,translatedHeadline:e,mediaElement:f,mediaSources:p,mediaAlt:A,mediaLink:u,hasPlaybackEnded:v,showPlayVideo:m,isFullWidth:c,isSmallWidth:_,isImage:l,generatePrivacyUrl:t=>t.startsWith("/")?t:(0,i.Jv)("/settings/api/apps/media?fileName={fileName}",{fileName:t})}}});var _=r(85072),f=r.n(_),b=r(97825),g=r.n(b),y=r(77659),x=r.n(y),k=r(55056),w=r.n(k),E=r(10540),B=r.n(E),P=r(41113),W=r.n(P),D=r(83186),I={};I.styleTagTransform=W(),I.setAttributes=w(),I.insert=x().bind(null,"head"),I.domAPI=g(),I.insertStyleElement=B(),f()(D.A,I),D.A&&D.A.locals&&D.A.locals;const S=(0,m.A)(h,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("article",{ref:"container",staticClass:"app-discover-post",class:{"app-discover-post--reverse":t.media&&"start"===t.media.alignment,"app-discover-post--small":t.isSmallWidth},attrs:{id:t.domId}},[t.headline||t.text?e(t.link?"AppLink":"div",{tag:"component",staticClass:"app-discover-post__text",attrs:{href:t.link}},[e(t.inline?"h4":"h3",{tag:"component"},[t._v("\n\t\t\t"+t._s(t.translatedHeadline)+"\n\t\t")]),t._v(" "),e("p",[t._v(t._s(t.translatedText))])],1):t._e(),t._v(" "),t.mediaSources?e(t.mediaLink?"AppLink":"div",{tag:"component",staticClass:"app-discover-post__media",class:{"app-discover-post__media--fullwidth":t.isFullWidth,"app-discover-post__media--start":"start"===t.media?.alignment,"app-discover-post__media--end":"end"===t.media?.alignment},attrs:{href:t.mediaLink}},[e(t.isImage?"picture":"video",{ref:"mediaElement",tag:"component",staticClass:"app-discover-post__media-element",attrs:{muted:!t.isImage,playsinline:!t.isImage,preload:!t.isImage&&"auto"},on:{ended:function(e){t.hasPlaybackEnded=!0}}},[t._l(t.mediaSources,(function(r){return e("source",{key:r.src,attrs:{src:t.isImage?void 0:t.generatePrivacyUrl(r.src),srcset:t.isImage?t.generatePrivacyUrl(r.src):void 0,type:r.mime}})})),t._v(" "),t.isImage?e("img",{attrs:{src:t.generatePrivacyUrl(t.mediaSources[0].src),alt:t.mediaAlt}}):t._e()],2),t._v(" "),e("div",{staticClass:"app-discover-post__play-icon-wrapper"},[!t.isImage&&t.showPlayVideo?e("NcIconSvgWrapper",{staticClass:"app-discover-post__play-icon",attrs:{path:t.mdiPlayCircleOutline,size:92}}):t._e()],1)],1):t._e()],1)}),[],!1,null,"9162c958",null).exports}}]);
//# sourceMappingURL=3303-3303.js.map?v=572217164a4234bbd620