"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_components_Collection_CollectionContent_vue-src_components_PhotosPicker_vue"],{96285:(t,e,n)=>{n.d(e,{A:()=>A});var o=n(27529),i=n(71225),s=n(63360),l=n(83984),r=n(98429),a=n(59006),d=n(83456),c=n(51651),p=n(76783);var h=n(31445);const A={name:"FetchFilesMixin",mixins:[n(58637).A],data:()=>({errorFetchingFiles:null,loadingFiles:!1,doneFetchingFiles:!1,fetchSemaphore:new h.A(1),fetchedFileIds:[]}),watch:{"$route.path"(){this.resetFetchFilesState()}},methods:{async fetchFiles(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.doneFetchingFiles&&!n||this.loadingFiles)return[];const h=await this.fetchSemaphore.acquire();try{this.errorFetchingFiles=null,this.loadingFiles=!0;const n=200,h=await async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t={firstResult:0,nbResults:200,mimesType:r.J_,onThisDay:!1,onlyFavorites:!1,...t};const e=t.mimesType.reduce(((t,e)=>`${t}\n\t\t<d:eq>\n\t\t\t<d:prop>\n\t\t\t\t<d:getcontenttype/>\n\t\t\t</d:prop>\n\t\t\t<d:literal>${e}</d:literal>\n\t\t</d:eq>\n\t`),""),n=t.onlyFavorites?"<d:eq>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:favorite/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:literal>1</d:literal>\n\t\t\t</d:eq>":"",s=t.onThisDay?`<d:or>${Array(20).fill(1).map(((t,e)=>{const n=(0,c.A)(Date.now()).startOf("day").subtract(3,"d").subtract(e+1,"y"),o=(0,c.A)(Date.now()).endOf("day").add(3,"d").subtract(e+1,"y");return`<d:and>\n\t\t\t\t<d:gt>\n\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t<d:getlastmodified />\n\t\t\t\t\t</d:prop>\n\t\t\t\t\t<d:literal>${n.format(c.A.defaultFormatUtc)}</d:literal>\n\t\t\t\t</d:gt>\n\t\t\t\t<d:lt>\n\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t<d:getlastmodified />\n\t\t\t\t\t</d:prop>\n\t\t\t\t\t<d:literal>${o.format(c.A.defaultFormatUtc)}</d:literal>\n\t\t\t\t</d:lt>\n\t\t\t</d:and>`})).join("\n")}</d:or>`:"",h=p.A.state.userConfig.photosSourceFolders.map((t=>`\n\t\t\t<d:scope>\n\t\t\t\t<d:href>${(0,i.HS)(o.lJ,t)}</d:href>\n\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t</d:scope>`)).join("\n");return t=Object.assign({method:"SEARCH",headers:{"content-Type":"text/xml"},data:`<?xml version="1.0" encoding="UTF-8"?>\n\t\t\t<d:searchrequest xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:basicsearch>\n\t\t\t\t\t<d:select>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t${d.x}\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:select>\n\t\t\t\t\t<d:from>\n\t\t\t\t\t\t${h}\n\t\t\t\t\t</d:from>\n\t\t\t\t\t<d:where>\n\t\t\t\t\t\t<d:and>\n\t\t\t\t\t\t\t<d:or>\n\t\t\t\t\t\t\t\t${e}\n\t\t\t\t\t\t\t</d:or>\n\t\t\t\t\t\t\t${n}\n\t\t\t\t\t\t\t${s}\n\t\t\t\t\t\t</d:and>\n\t\t\t\t\t</d:where>\n\t\t\t\t\t<d:orderby>\n\t\t\t\t\t\t<d:order>\n\t\t\t\t\t\t\t<d:prop><nc:metadata-photos-original_date_time/></d:prop>\n\t\t\t\t\t\t\t<d:descending/>\n\t\t\t\t\t\t</d:order>\n\t\t\t\t\t\t<d:order>\n\t\t\t\t\t\t\t<d:prop><d:getlastmodified/></d:prop>\n\t\t\t\t\t\t\t<d:descending/>\n\t\t\t\t\t\t</d:order>\n\t\t\t\t\t</d:orderby>\n\t\t\t\t\t<d:limit>\n\t\t\t\t\t\t<d:nresults>${t.nbResults}</d:nresults>\n\t\t\t\t\t\t<ns:firstresult>${t.firstResult}</ns:firstresult>\n\t\t\t\t\t</d:limit>\n\t\t\t\t</d:basicsearch>\n\t\t\t</d:searchrequest>`,deep:!0,details:!0},t),(await a.Ay.getDirectoryContents("",t)).data.map((t=>(0,l.JR)(t)))}({firstResult:this.fetchedFileIds.length,nbResults:n,...t,signal:this.abortController.signal});h.length!==n&&(this.doneFetchingFiles=!0);const A=h.map((t=>t.fileid)).filter((t=>!this.fetchedFileIds.includes(t.toString())));return this.fetchedFileIds.push(...A.map((t=>t.toString())).filter((t=>!e.includes(t)))),this.$store.dispatch("appendFiles",h),s.A.debug(`[FetchFilesMixin] Fetched ${A.length} new files: `,A),A}catch(t){if(404===t.response?.status){const e=p.A.state.userConfig.photosSourceFolders;for(const n of e)if(null!==t.response?.data?.match(`File with name /${n} could not be located`)){s.A.debug(`The ${n} folder does not exist, creating it.`);try{return await(0,o.H4)().createDirectory((0,i.HS)(o.lJ,n)),this.resetFetchFilesState(),[]}catch(t){this.errorFetchingFiles=404,s.A.error("Fail to create source directory",{error:t})}}}else{if("ERR_CANCELED"===t.code)return[];this.errorFetchingFiles=t}s.A.error("Error fetching files",{error:t})}finally{this.loadingFiles=!1,this.fetchSemaphore.release(h)}return[]},resetFetchFilesState(){this.doneFetchingFiles=!1,this.errorFetchingFiles=null,this.loadingFiles=!1,this.fetchedFileIds=[]}}}},83509:(t,e,n)=>{n.d(e,{A:()=>o});const o={name:"FilesByMonthMixin",computed:{fileIdsByMonth(){const t={};for(const e of this.fetchedFileIds){const n=this.files[e];n&&(t[n.month]=t[n.month]??[],t[n.month].push(n.fileid))}return Object.keys(t).forEach((e=>t[e].sort(this.sortFilesByTimestamp))),t},monthsList(){return Object.keys(this.fileIdsByMonth).sort(((t,e)=>t>e?-1:1))}},methods:{sortFilesByTimestamp(t,e){return this.files[t].timestamp>this.files[e].timestamp?-1:1}}}},58498:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(71354),i=n.n(o),s=n(76314),l=n.n(s)()(i());l.push([t.id,".collection[data-v-dd20f6ac]{display:flex;flex-direction:column}.collection__media[data-v-dd20f6ac]{padding:0 64px}@media only screen and (max-width: 1200px){.collection__media[data-v-dd20f6ac]{padding:0 4px}}","",{version:3,sources:["webpack://./src/components/Collection/CollectionContent.vue"],names:[],mappings:"AAEA,6BACC,YAAA,CACA,qBAAA,CAEA,oCACC,cAAA,CAEA,2CAHD,oCAIE,aAAA,CAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.collection {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&__media {\n\t\tpadding: 0 64px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 0 4px;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const r=l},90647:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(71354),i=n.n(o),s=n(76314),l=n.n(s)()(i());l.push([t.id,"[data-v-c70b1adc] .photos-picker{padding-inline-end:0 !important}.photos-picker__navigation__month[data-v-c70b1adc]{margin:4px}.photos-picker__navigation__month-select[data-v-c70b1adc]{flex:1;padding-inline-end:12px;padding-block-end:6px}.photos-picker__file-list[data-v-c70b1adc]{flex-grow:1;min-width:0;height:100%;padding:0 4px}.photos-picker__file-list--placeholder[data-v-c70b1adc]{background:var(--color-primary-element-light);border-radius:var(--border-radius-large)}.photos-picker__file-list .section-header[data-v-c70b1adc]{font-weight:bold;font-size:20px;padding:8px 0 4px 0}.photos-picker__file-list[data-v-c70b1adc] .empty-content{position:absolute;width:100%;margin-top:0;height:100%;display:flex;flex-direction:column;justify-content:center}.photos-picker__actions[data-v-c70b1adc]{display:flex;flex-direction:column;flex-grow:1}.photos-picker__actions__buttons[data-v-c70b1adc]{display:flex;align-items:center;justify-content:end;gap:16px}","",{version:3,sources:["webpack://./src/components/PhotosPicker.vue"],names:[],mappings:"AAEA,iCAEC,+BAAA,CAMC,mDAEC,UAAA,CAGD,0DACC,MAAA,CAEA,uBAAA,CACA,qBAAA,CAIF,2CACC,WAAA,CACA,WAAA,CACA,WAAA,CACA,aAAA,CAEA,wDACC,6CAAA,CACA,wCAAA,CAGD,2DACC,gBAAA,CACA,cAAA,CACA,mBAAA,CAGD,0DACC,iBAAA,CACA,UAAA,CACA,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CAIF,yCACC,YAAA,CACA,qBAAA,CACA,WAAA,CAEA,kDACC,YAAA,CACA,kBAAA,CACA,mBAAA,CACA,QAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n:deep(.photos-picker) {\n\t// remove padding to move scrollbar to the very end\n\tpadding-inline-end: 0 !important;\n}\n\n.photos-picker {\n\n\t&__navigation {\n\t\t&__month {\n\t\t\t// For focus-visible outline\n\t\t\tmargin: 4px;\n\t\t}\n\n\t\t&__month-select {\n\t\t\tflex: 1;\n\t\t\t// align with other content\n\t\t\tpadding-inline-end: 12px;\n\t\t\tpadding-block-end: 6px;\n\t\t}\n\t}\n\n\t&__file-list {\n\t\tflex-grow: 1;\n\t\tmin-width: 0;\n\t\theight: 100%;\n\t\tpadding: 0 4px;\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-element-light);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t}\n\n\t\t.section-header {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 20px;\n\t\t\tpadding: 8px 0 4px 0;\n\t\t}\n\n\t\t:deep .empty-content {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\tmargin-top: 0;\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n\n\t&__actions {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tflex-grow: 1;\n\n\t\t&__buttons {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: end;\n\t\t\tgap: 16px;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const r=l},83675:(t,e,n)=>{n.d(e,{A:()=>k});var o=n(15897),i=n(35929),s=n(46187),l=n(53334),r=n(11132),a=n(38385),d=n(37698);const c={name:"CollectionContent",components:{AlertCircle:o.A,FolderMultipleImage:i.A,NcEmptyContent:s.yI,FilesListViewer:a.A,File:d.A},mixins:[r.A,s.Fr],props:{collection:{type:Object,default:()=>{}},collectionFileIds:{type:Array,required:!0},loading:{type:Boolean,default:!1},allowSelection:{type:Boolean,default:!0},error:{type:[Error,Number],default:null}},data:()=>({appContent:document.getElementById("app-content-vue")}),computed:{files(){return this.$store.getters.files},sortedCollectionFileIds(){return this.collectionFileIds.toSorted(((t,e)=>this.files[t].timestamp<this.files[e].timestamp?-1:1))}},methods:{openViewer(t){const e=this.files[t];OCA.Viewer.open({fileInfo:e,list:this.sortedCollectionFileIds.map((t=>this.files[t])).filter((t=>!t.sectionHeader)),loadMore:e.loadMore?async()=>await e.loadMore(!0):()=>[],canLoop:e.canLoop})},t:l.Tl}};var p=n(85072),h=n.n(p),A=n(97825),u=n.n(A),m=n(77659),g=n.n(m),f=n(55056),C=n.n(f),_=n(10540),y=n.n(_),F=n(41113),b=n.n(F),v=n(58498),x={};x.styleTagTransform=b(),x.setAttributes=C(),x.insert=g().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=y();h()(v.A,x);v.A&&v.A.locals&&v.A.locals;const k=(0,n(14486).A)(c,(function(){var t=this,e=t._self._c;return void 0===t.collection&&!t.loading||404===t.error?e("NcEmptyContent",{staticClass:"empty-content-with-illustration",attrs:{name:t.t("photos","This collection does not exist")}},[e("FolderMultipleImage",{attrs:{slot:"icon"},slot:"icon"})],1):t.error?e("NcEmptyContent",{attrs:{name:t.t("photos","An error occurred")}},[e("AlertCircle",{attrs:{slot:"icon"},slot:"icon"})],1):e("div",{staticClass:"collection"},[t._t("header",null,{selectedFileIds:t.selectedFileIds,resetSelection:t.resetSelection}),t._v(" "),0!==t.sortedCollectionFileIds.length||t.loading?t._e():t._t("empty-content"),t._v(" "),void 0!==t.collection&&t.sortedCollectionFileIds.length>0?e("FilesListViewer",{staticClass:"collection__media",attrs:{"container-element":t.appContent,"file-ids":t.sortedCollectionFileIds,"base-height":t.isMobile?120:200,loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(n){let{file:o,distance:i}=n;return e("File",{attrs:{file:t.files[o.id],"allow-selection":t.allowSelection,selected:!0===t.selection[o.id],distance:i},on:{click:t.openViewer,"select-toggled":t.onFileSelectToggle}})}}],null,!1,3813029717)}):t._e()],2)}),[],!1,null,"dd20f6ac",null).exports},39590:(t,e,n)=>{n.d(e,{A:()=>B});var o=n(26454),i=n(46187),s=n(85471),l=n(95353),r=n(51651),a=n(21777),d=n(63984),c=n(38385),p=n(37698),h=n(96285),A=n(11132),u=n(83509),m=n(98429);const g=(0,s.pM)({name:"PhotosPicker",components:{File:p.A,FilesListViewer:c.A,ImagePlus:d.A,NcButton:i.x1,NcDialog:i.i$,NcLoadingIcon:i.ne,NcSelect:i.EQ,NcNoteCard:i.mQ,UploadPicker:o.SX},mixins:[h.A,u.A,A.A],props:{open:{type:Boolean,default:!0},name:{type:String,required:!0},destination:{type:String,required:!0},blacklistIds:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},emits:["files-picked","update:open"],setup:()=>({isMobile:(0,i.al)()}),data:()=>({allowedMimes:m.Ay,targetMonth:null,uploadContext:{route:"albumpicker"},currentUser:(0,a.HW)().uid}),computed:{...(0,l.L8)(["files"]),photosLocationFolder(){return this.$store.state.userConfig.photosLocationFolder}},watch:{monthsList(t){null===this.targetMonth&&(this.targetMonth=t[0])}},methods:{onFocusOut(t){null===t.relatedTarget&&t.target.focus({preventScroll:!0})},getFiles(){this.fetchFiles({},this.blacklistIds)},refreshFiles(){this.fetchFiles({firstResult:0},[...this.blacklistIds,...this.fetchedFileIds],!0)},emitPickedEvent(){this.$emit("files-picked",this.selectedFileIds)},dateMonthAndYear(t){return this.isMobile?(0,r.A)(t,"YYYYMM").format("MMM YYYY"):(0,r.A)(t,"YYYYMM").format("MMMM YYYY")}}});var f=n(85072),C=n.n(f),_=n(97825),y=n.n(_),F=n(77659),b=n.n(F),v=n(55056),x=n.n(v),k=n(10540),w=n.n(k),M=n(41113),T=n.n(M),I=n(90647),S={};S.styleTagTransform=T(),S.setAttributes=x(),S.insert=b().bind(null,"head"),S.domAPI=y(),S.insertStyleElement=w();C()(I.A,S);I.A&&I.A.locals&&I.A.locals;const B=(0,n(14486).A)(g,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("NcDialog",{attrs:{"content-classes":"photos-picker",name:t.name,open:t.open,"out-transition":"",size:"large"},on:{"update:open":e=>t.$emit("update:open",e)},scopedSlots:t._u([{key:"navigation",fn:function(n){let{isCollapsed:o}=n;return[o?e("NcSelect",{staticClass:"photos-picker__navigation__month-select",attrs:{"aria-label-listbox":t.t("photos","Dates"),clearable:!1,"input-label":t.t("photos","Jump to specific date in list"),options:t.monthsList},scopedSlots:t._u([{key:"selected-option",fn:function(e){let{label:n}=e;return[t._v("\n\t\t\t\t"+t._s(t.dateMonthAndYear(n))+"\n\t\t\t")]}},{key:"option",fn:function(e){let{label:n}=e;return[t._v("\n\t\t\t\t"+t._s(t.dateMonthAndYear(n))+"\n\t\t\t")]}}],null,!0),model:{value:t.targetMonth,callback:function(e){t.targetMonth=e},expression:"targetMonth"}}):e("ul",{attrs:{"aria-label":t.t("photos","Dates")}},t._l(t.monthsList,(function(n){return e("li",{key:n,staticClass:"photos-picker__navigation__month"},[e("NcButton",{attrs:{type:t.targetMonth===n?"secondary":"tertiary","aria-label":t.t("photos","Jump to {date}",{date:t.dateMonthAndYear(n)})},on:{click:function(e){t.targetMonth=n}}},[t._v("\n\t\t\t\t\t"+t._s(t.dateMonthAndYear(n))+"\n\t\t\t\t")])],1)})),0)]}},{key:"actions",fn:function(){return[e("div",{staticClass:"photos-picker__actions"},[e("div",{staticClass:"photos-picker__actions__buttons"},[e("UploadPicker",{attrs:{accept:t.allowedMimes,context:t.uploadContext,destination:t.photosLocationFolder,multiple:!0},on:{uploaded:t.refreshFiles}}),t._v(" "),e("NcButton",{attrs:{type:"primary",disabled:t.loading||0===t.selectedFileIds.length},on:{click:t.emitPickedEvent},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?t._e():e("ImagePlus"),t._v(" "),t.loading?e("NcLoadingIcon"):t._e()]},proxy:!0}])},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Add to {destination}",{destination:t.destination}))+"\n\t\t\t\t")])],1),t._v(" "),t.photosLocationFolder.attributes["owner-id"]!==t.currentUser?e("NcNoteCard",{attrs:{type:"warning"}},[t._v("\n\t\t\t\t"+t._s(t.t("photos","The destination folder is owned by {owner}",{owner:t.photosLocationFolder.attributes["owner-id"]}))+"\n\t\t\t")]):t._e()],1)]},proxy:!0}])},[t._v(" "),t._v(" "),e("FilesListViewer",{staticClass:"photos-picker__file-list",class:{"photos-picker__file-list--placeholder":0===t.monthsList.length},attrs:{"file-ids-by-section":t.fileIdsByMonth,"empty-message":t.t("photos","There are no photos or videos yet!"),sections:t.monthsList,loading:t.loadingFiles,"base-height":100,"section-header-height":50,"scroll-to-section":t.targetMonth},on:{"need-content":t.getFiles},nativeOn:{focusout:function(e){return t.onFocusOut.apply(null,arguments)}},scopedSlots:t._u([{key:"default",fn:function(n){let{file:o,height:i,isHeader:s,distance:l}=n;return[s?e("h3",{staticClass:"section-header",style:{height:`${i}px`},attrs:{id:`photos-picker-section-header-${o.id}`}},[t._v("\n\t\t\t\t"+t._s(t.dateMonthAndYear(o.id))+"\n\t\t\t")]):e("File",{attrs:{file:t.files[o.id],"allow-selection":!0,selected:!0===t.selection[o.id],distance:l},on:{"select-toggled":t.onFileSelectToggle}})]}}])})],1)}),[],!1,null,"c70b1adc",null).exports}}]);
//# sourceMappingURL=photos-src_components_Collection_CollectionContent_vue-src_components_PhotosPicker_vue.js.map?v=7c2d09c633a423665009