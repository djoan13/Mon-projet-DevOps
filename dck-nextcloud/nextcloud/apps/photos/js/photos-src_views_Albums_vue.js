"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Albums_vue"],{58637:(t,n,o)=>{o.d(n,{A:()=>e});const e={name:"AbortControllerMixin",data:()=>({abortController:new AbortController}),beforeDestroy(){this.abortController.abort()},beforeRouteLeave(t,n,o){this.abortController.abort(),this.abortController=new AbortController,o()}}},82314:(t,n,o)=>{o.d(n,{A:()=>a});var e=o(95353),l=o(58637),i=o(32041);const a={name:"FetchCollectionsMixin",data:()=>({errorFetchingCollections:null,loadingCollections:!1}),mixins:[l.A],methods:{...(0,e.i0)(["addCollections"]),async fetchCollections(t,n,o){if(this.loadingCollections)return[];try{this.loadingCollections=!0,this.errorFetchingCollections=null;const e=await(0,i.An)(t,{signal:this.abortController.signal},n,o);return this.addCollections({collections:e}),e}catch(t){404===t.response?.status?this.errorFetchingCollections=404:this.errorFetchingCollections=t}finally{this.loadingCollections=!1}return[]}}}},48626:(t,n,o)=>{o.d(n,{A:()=>r});var e=o(71354),l=o.n(e),i=o(76314),a=o.n(i)()(l());a.push([t.id,".collection-cover[data-v-ed2d700e]{display:flex;flex-direction:column;padding:16px;border-radius:var(--border-radius-large)}.collection-cover[data-v-ed2d700e]:hover,.collection-cover[data-v-ed2d700e]:focus{background:var(--color-background-dark)}.collection-cover__image[data-v-ed2d700e]{width:350px;height:350px;object-fit:cover;border-radius:var(--border-radius-large)}@media only screen and (max-width: 1200px){.collection-cover__image[data-v-ed2d700e]{width:250px;height:250px}}.collection-cover__image--placeholder[data-v-ed2d700e]{background:var(--color-primary-element-light)}.collection-cover__image--placeholder[data-v-ed2d700e] .material-design-icon{width:100%;height:100%}.collection-cover__image--placeholder[data-v-ed2d700e] .material-design-icon .material-design-icon__svg{fill:var(--color-primary-element)}.collection-cover__details[data-v-ed2d700e]{display:flex;flex-direction:column;margin-top:16px;width:350px}@media only screen and (max-width: 1200px){.collection-cover__details[data-v-ed2d700e]{width:250px}}.collection-cover__details__title[data-v-ed2d700e]{display:flex}.collection-cover__details__subtitle[data-v-ed2d700e]{display:flex;color:var(--color-text-lighter)}","",{version:3,sources:["webpack://./src/components/Collection/CollectionCover.vue"],names:[],mappings:"AAEA,mCACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,wCAAA,CAEA,kFACC,uCAAA,CAGD,0CACC,WAAA,CACA,YAAA,CACA,gBAAA,CACA,wCAAA,CAEA,2CAND,0CAOE,WAAA,CACA,YAAA,CAAA,CAGD,uDACC,6CAAA,CAEA,6EACC,UAAA,CACA,WAAA,CAEA,wGACC,iCAAA,CAMJ,4CACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,WAAA,CAEA,2CAND,4CAOE,WAAA,CAAA,CAGD,mDACC,YAAA,CAGD,sDACC,YAAA,CACA,+BAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.collection-cover {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 16px;\n\tborder-radius: var(--border-radius-large);\n\n\t&:hover, &:focus {\n\t\tbackground: var(--color-background-dark);\n\t}\n\n\t&__image {\n\t\twidth: 350px;\n\t\theight: 350px;\n\t\tobject-fit: cover;\n\t\tborder-radius: var(--border-radius-large);\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t\theight: 250px;\n\t\t}\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-element-light);\n\n\t\t\t:deep .material-design-icon {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\n\t\t\t\t.material-design-icon__svg {\n\t\t\t\t\tfill: var(--color-primary-element);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin-top: 16px;\n\t\twidth: 350px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t}\n\n\t\t&__title {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t&__subtitle {\n\t\t\tdisplay: flex;\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\t}\n\n}\n'],sourceRoot:""}]);const r=a},22908:(t,n,o)=>{o.d(n,{A:()=>r});var e=o(71354),l=o.n(e),i=o(76314),a=o.n(i)()(l());a.push([t.id,".collections[data-v-5c125700]{display:flex;flex-direction:column;height:100%}.collections__list[data-v-5c125700]{padding:32px 48px;flex-grow:1;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;height:calc(100% - 60px);overflow-x:scroll}@media only screen and (max-width: 1200px){.collections__list[data-v-5c125700]{padding:32px 12px;justify-content:center}}","",{version:3,sources:["webpack://./src/components/Collection/CollectionsList.vue"],names:[],mappings:"AAEA,8BACC,YAAA,CACA,qBAAA,CACA,WAAA,CAEA,oCACC,iBAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,QAAA,CACA,sBAAA,CACA,wBAAA,CACA,iBAAA,CAEA,2CAVD,oCAWE,iBAAA,CACA,sBAAA,CAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.collections {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\n\t&__list {\n\t\tpadding: 32px 48px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 16px;\n\t\talign-items: flex-start;\n\t\theight: calc(100% - 60px);\n\t\toverflow-x: scroll;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 32px 12px;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const r=a},45024:(t,n,o)=>{o.d(n,{A:()=>r});var e=o(71354),l=o.n(e),i=o(76314),a=o.n(i)()(l());a.push([t.id,".albums-list[data-v-38160c48]{display:flex;flex-direction:column}.albums-list .album__name[data-v-38160c48]{font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:20px;margin-bottom:12px;line-height:30px;color:var(--color-main-text)}.album-creation__heading[data-v-38160c48]{padding:calc(var(--default-grid-baseline)*4);margin-bottom:0px;padding-bottom:0px}","",{version:3,sources:["webpack://./src/views/Albums.vue"],names:[],mappings:"AAEA,8BACC,YAAA,CACA,qBAAA,CAEA,2CACC,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,cAAA,CACA,kBAAA,CACA,gBAAA,CACA,4BAAA,CAIF,0CACC,4CAAA,CACA,iBAAA,CACA,kBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.albums-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t.album__name {\n\t\tfont-weight: normal;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tfont-size: 20px;\n\t\tmargin-bottom: 12px;\n\t\tline-height: 30px;\n\t\tcolor: var(--color-main-text);\n\t}\n}\n\n.album-creation__heading {\n\tpadding: calc(var(--default-grid-baseline) * 4);\n\tmargin-bottom: 0px;\n\tpadding-bottom: 0px;\n}\n'],sourceRoot:""}]);const r=a},19003:(t,n,o)=>{o.d(n,{A:()=>v});const e={name:"CollectionCover",components:{ImageMultiple:o(85986).A},props:{coverUrl:{type:String,required:!0},altImg:{type:String,required:!0},link:{type:String,required:!0}}};var l=o(85072),i=o.n(l),a=o(97825),r=o.n(a),s=o(77659),c=o.n(s),A=o(55056),d=o.n(A),m=o(10540),u=o.n(m),C=o(41113),p=o.n(C),g=o(48626),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=u();i()(g.A,h);g.A&&g.A.locals&&g.A.locals;const v=(0,o(14486).A)(e,(function(){var t=this,n=t._self._c;return n("li",[n("router-link",{staticClass:"collection-cover",attrs:{to:t.link}},[""!==t.coverUrl?n("img",{staticClass:"collection-cover__image",attrs:{src:t.coverUrl,alt:t.altImg}}):n("div",{staticClass:"collection-cover__image collection-cover__image--placeholder"},[n("ImageMultiple",{attrs:{size:128}})],1),t._v(" "),n("div",{staticClass:"collection-cover__details"},[n("div",{staticClass:"collection-cover__details__title"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"collection-cover__details__subtitle"},[t._t("subtitle")],2)])])],1)}),[],!1,null,"ed2d700e",null).exports},97377:(t,n,o)=>{o.d(n,{A:()=>x});var e=o(15897),l=o(46187),i=o(53334);const a={name:"CollectionsList",components:{AlertCircle:e.A,NcEmptyContent:l.yI},props:{collections:{type:Object,required:!0},loading:{type:Boolean,default:!1},error:{type:Error,default:null}},computed:{noCollection(){return 0===Object.keys(this.collections).length}},methods:{t:i.Tl}};var r=o(85072),s=o.n(r),c=o(97825),A=o.n(c),d=o(77659),m=o.n(d),u=o(55056),C=o.n(u),p=o(10540),g=o.n(p),h=o(41113),v=o.n(h),b=o(22908),_={};_.styleTagTransform=v(),_.setAttributes=C(),_.insert=m().bind(null,"head"),_.domAPI=A(),_.insertStyleElement=g();s()(b.A,_);b.A&&b.A.locals&&b.A.locals;const x=(0,o(14486).A)(a,(function(){var t=this,n=t._self._c;return t.error?n("NcEmptyContent",{attrs:{name:t.t("photos","An error occurred")}},[n("AlertCircle",{attrs:{slot:"icon"},slot:"icon"})],1):n("div",{staticClass:"collections"},[t._t("header"),t._v(" "),t.noCollection&&!t.loading?t._t("empty-collections-list"):t.noCollection?t._e():n("ul",{staticClass:"collections__list"},[t._l(t.collections,(function(n){return t._t("default",null,{collection:n})}))],2)],2)}),[],!1,null,"5c125700",null).exports},95938:(t,n,o)=>{o.r(n),o.d(n,{default:()=>E});var e=o(10798),l=o(35929),i=o(63814),a=o(46187),r=o(53334),s=o(21777),c=o(97377),A=o(19003),d=o(16482),m=o(16192),u=o(82314);const C={name:"Albums",components:{Plus:e.A,FolderMultipleImage:l.A,NcModal:a.FH,NcButton:a.x1,NcEmptyContent:a.yI,CollectionsList:c.A,CollectionCover:A.A,HeaderNavigation:d.A,AlbumForm:m.A},filters:{coverUrl:t=>-1===t?"":(0,i.Jv)(`/apps/photos/api/v1/preview/${t}?x=512&y=512`)},mixins:[u.A],setup:()=>({isMobile:(0,a.F)()}),data:()=>({showAlbumCreationForm:!1}),computed:{albums(){return this.$store.getters.albums}},async beforeMount(){this.fetchAlbums()},methods:{fetchAlbums(){this.fetchCollections(`/photos/${(0,s.HW)()?.uid}/albums`,["<nc:location />","<nc:dateRange />","<nc:collaborators />"])},handleAlbumCreated(t){let{album:n}=t;this.showAlbumCreationForm=!1,this.$router.push(`albums/${n.basename}`)},t:r.Tl,n:r.zw}};var p=o(85072),g=o.n(p),h=o(97825),v=o.n(h),b=o(77659),_=o.n(b),x=o(55056),f=o.n(x),y=o(10540),w=o.n(y),T=o(41113),W=o.n(T),k=o(45024),B={};B.styleTagTransform=W(),B.setAttributes=f(),B.insert=_().bind(null,"head"),B.domAPI=v(),B.insertStyleElement=w();g()(k.A,B);k.A&&k.A.locals&&k.A.locals;const E=(0,o(14486).A)(C,(function(){var t=this,n=t._self._c;return n("div",[n("CollectionsList",{staticClass:"albums-list",attrs:{collections:t.albums,loading:t.loadingCollections,error:t.errorFetchingCollections},scopedSlots:t._u([{key:"default",fn:function(o){let{collection:e}=o;return n("CollectionCover",{key:e.basename,attrs:{link:`/albums/${e.basename}`,"alt-img":t.t("photos","Cover photo for album {albumName}",{albumName:e.basename}),"cover-url":t._f("coverUrl")(e.lastPhoto)}},[n("span",{staticClass:"album__name"},[t._v("\n\t\t\t\t"+t._s(e.basename)+"\n\t\t\t")]),t._v(" "),n("div",{staticClass:"album__details",attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("\n\t\t\t\t"+t._s(e.date)+" ⸱ "+t._s(t.n("photos","%n item","%n photos and videos",e.nbItems))+"\n\t\t\t")])])}}])},[n("HeaderNavigation",{key:"navigation",attrs:{slot:"header",loading:t.loadingCollections,title:t.t("photos","Albums"),"root-title":t.t("photos","Albums")},on:{refresh:t.fetchAlbums},slot:"header"},[n("NcButton",{attrs:{"aria-label":t.isMobile?t.t("photos","New album"):void 0},on:{click:function(n){t.showAlbumCreationForm=!0}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("Plus",{attrs:{size:20}})]},proxy:!0},t.isMobile?null:{key:"default",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","New album"))+"\n\t\t\t\t")]},proxy:!0}],null,!0)})],1),t._v(" "),t._v(" "),n("NcEmptyContent",{attrs:{slot:"empty-collections-list",name:t.t("photos","There is no album yet!")},slot:"empty-collections-list"},[n("FolderMultipleImage",{attrs:{slot:"icon"},slot:"icon"})],1)],1),t._v(" "),t.showAlbumCreationForm?n("NcModal",{on:{close:function(n){t.showAlbumCreationForm=!1}}},[n("h2",{staticClass:"album-creation__heading"},[t._v("\n\t\t\t"+t._s(t.t("photos","New album"))+"\n\t\t")]),t._v(" "),n("AlbumForm",{on:{done:t.handleAlbumCreated}})],1):t._e()],1)}),[],!1,null,"38160c48",null).exports}}]);
//# sourceMappingURL=photos-src_views_Albums_vue.js.map?v=0c0e62634c3cf26514ad