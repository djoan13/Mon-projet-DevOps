"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_components_Albums_AlbumForm_vue"],{83812:(t,a,o)=>{o.d(a,{A:()=>r});var e=o(71354),l=o.n(e),n=o(76314),i=o.n(n)()(l());i.push([t.id,".album-form[data-v-245b1030]{display:flex;flex-direction:column;height:350px;padding:calc(var(--default-grid-baseline)*4)}.album-form .form-title[data-v-245b1030]{font-weight:bold}.album-form .form-subtitle[data-v-245b1030]{color:var(--color-text-lighter)}.album-form .form-inputs[data-v-245b1030]{flex:1;display:flex;flex-direction:column;gap:calc(var(--default-grid-baseline)*4)}.album-form .form-buttons[data-v-245b1030]{display:flex;justify-content:space-between;flex-direction:column}.album-form .form-buttons .left-buttons[data-v-245b1030],.album-form .form-buttons .right-buttons[data-v-245b1030]{display:flex;gap:calc(var(--default-grid-baseline)*4)}.album-form .form-buttons .right-buttons[data-v-245b1030]{justify-content:flex-end}.left-buttons[data-v-245b1030]{flex-grow:1}@media only screen and (max-width: 1020px){.right-buttons[data-v-245b1030]{justify-content:flex-end;flex-direction:column}}","",{version:3,sources:["webpack://./src/components/Albums/AlbumForm.vue"],names:[],mappings:"AAEA,6BACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,4CAAA,CAEA,yCACC,gBAAA,CAGD,4CACC,+BAAA,CAGD,0CACC,MAAA,CACA,YAAA,CACA,qBAAA,CACA,wCAAA,CAGD,2CACC,YAAA,CACA,6BAAA,CACA,qBAAA,CAEA,mHACC,YAAA,CACA,wCAAA,CAGD,0DACC,wBAAA,CAKH,+BACC,WAAA,CAGD,2CACC,gCACC,wBAAA,CACA,qBAAA,CAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.album-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 350px;\n\tpadding: calc(var(--default-grid-baseline) * 4);\n\n\t.form-title {\n\t\tfont-weight: bold;\n\t}\n\n\t.form-subtitle {\n\t\tcolor: var(--color-text-lighter);\n\t}\n\n\t.form-inputs {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: calc(var(--default-grid-baseline) * 4);\n\t}\n\n\t.form-buttons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tflex-direction: column;\n\n\t\t.left-buttons, .right-buttons {\n\t\t\tdisplay: flex;\n\t\t\tgap: calc(var(--default-grid-baseline) * 4);\n\t\t}\n\n\t\t.right-buttons {\n\t\t\tjustify-content: flex-end;\n\t\t}\n\t}\n}\n\n.left-buttons {\n\tflex-grow: 1;\n}\n\n@media only screen and (max-width: 1020px) {\n\t.right-buttons {\n\t\tjustify-content: flex-end;\n\t\tflex-direction: column;\n\t}\n}\n'],sourceRoot:""}]);const r=i},25674:(t,a,o)=>{o.d(a,{A:()=>r});var e=o(71354),l=o.n(e),n=o(76314),i=o.n(n)()(l());i.push([t.id,".manage-collaborators[data-v-83eabb42]{display:flex;flex-direction:column;padding:20px;height:500px}.manage-collaborators__title[data-v-83eabb42]{font-weight:bold}.manage-collaborators__subtitle[data-v-83eabb42]{color:var(--color-text-lighter)}.manage-collaborators__public-link-button[data-v-83eabb42]{margin:4px 0}.manage-collaborators__form[data-v-83eabb42]{margin-top:4px 0;display:flex;flex-direction:column}.manage-collaborators__form__input[data-v-83eabb42]{position:relative;display:block}.manage-collaborators__form__input input[data-v-83eabb42]{width:100%;padding-left:34px}.manage-collaborators__form__input .loading-icon[data-v-83eabb42]{position:absolute;top:8px;right:8px}.manage-collaborators__form__list[data-v-83eabb42]{padding:8px;height:350px;overflow:scroll}.manage-collaborators__form__list__result[data-v-83eabb42]{padding:8px;border-radius:100px;box-sizing:border-box}.manage-collaborators__form__list__result[data-v-83eabb42],.manage-collaborators__form__list__result *[data-v-83eabb42]{cursor:pointer !important}.manage-collaborators__form__list__result[data-v-83eabb42]:hover{background:var(--color-background-dark)}.manage-collaborators__form__list--empty[data-v-83eabb42]{margin:100px 0}.manage-collaborators__selection[data-v-83eabb42]{display:flex;flex-direction:column;margin-top:32px;flex-grow:1}.manage-collaborators__selection__item[data-v-83eabb42]{border-radius:var(--border-radius-pill);padding:0 8px}.manage-collaborators__selection__item[data-v-83eabb42]:hover{background:var(--color-background-dark)}.manage-collaborators__selection__item[data-v-83eabb42] .option{gap:4px}.manage-collaborators .actions[data-v-83eabb42]{display:flex;margin-top:8px}.manage-collaborators .actions__public-link[data-v-83eabb42]{display:flex;align-items:center}.manage-collaborators .actions__public-link button[data-v-83eabb42]{margin-left:8px}.manage-collaborators .actions__slot[data-v-83eabb42]{flex-grow:1;display:flex;justify-content:flex-end;align-items:center}","",{version:3,sources:["webpack://./src/components/Albums/CollaboratorsSelectionForm.vue"],names:[],mappings:"AAEA,uCACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,YAAA,CAEA,8CACC,gBAAA,CAGD,iDACC,+BAAA,CAGD,2DACC,YAAA,CAGD,6CACC,gBAAA,CACA,YAAA,CACA,qBAAA,CAEA,oDACC,iBAAA,CACA,aAAA,CAEA,0DACC,UAAA,CACA,iBAAA,CAGD,kEACC,iBAAA,CACA,OAAA,CACA,SAAA,CAIF,mDACC,WAAA,CACA,YAAA,CACA,eAAA,CAEA,2DACC,WAAA,CACA,mBAAA,CACA,qBAAA,CAEA,wHACC,yBAAA,CAGD,iEACC,uCAAA,CAIF,0DACC,cAAA,CAKH,kDACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,WAAA,CAEA,wDACC,uCAAA,CACA,aAAA,CAEA,8DACC,uCAAA,CAGD,gEACC,OAAA,CAKH,gDACC,YAAA,CACA,cAAA,CAEA,6DACC,YAAA,CACA,kBAAA,CAEA,oEACC,eAAA,CAIF,sDACC,WAAA,CACA,YAAA,CACA,wBAAA,CACA,kBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.manage-collaborators {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 20px;\n\theight: 500px;\n\n\t&__title {\n\t\tfont-weight: bold;\n\t}\n\n\t&__subtitle {\n\t\tcolor: var(--color-text-lighter);\n\t}\n\n\t&__public-link-button {\n\t\tmargin: 4px 0;\n\t}\n\n\t&__form {\n\t\tmargin-top: 4px 0;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\t&__input {\n\t\t\tposition: relative;\n\t\t\tdisplay: block;\n\n\t\t\tinput {\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding-left: 34px;\n\t\t\t}\n\n\t\t\t.loading-icon {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: calc(36px / 2 - 20px / 2);\n\t\t\t\tright: 8px;\n\t\t\t}\n\t\t}\n\n\t\t&__list {\n\t\t\tpadding: 8px;\n\t\t\theight: 350px;\n\t\t\toverflow: scroll;\n\n\t\t\t&__result {\n\t\t\t\tpadding: 8px;\n\t\t\t\tborder-radius: 100px;\n\t\t\t\tbox-sizing: border-box;\n\n\t\t\t\t&, & * {\n\t\t\t\t\tcursor: pointer !important;\n\t\t\t\t}\n\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground: var(--color-background-dark);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&--empty {\n\t\t\t\tmargin: 100px 0;\n\t\t\t}\n\t\t}\n\t}\n\n\t&__selection {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin-top: 32px;\n\t\tflex-grow: 1;\n\n\t\t&__item {\n\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\tpadding:  0 8px;\n\n\t\t\t&:hover {\n\t\t\t\tbackground: var(--color-background-dark);\n\t\t\t}\n\n\t\t\t:deep(.option) {\n\t\t\t\tgap: 4px;\n\t\t\t}\n\t\t}\n\t}\n\n\t.actions {\n\t\tdisplay: flex;\n\t\tmargin-top: 8px;\n\n\t\t&__public-link {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\n\t\t\tbutton {\n\t\t\t\tmargin-left: 8px;\n\t\t\t}\n\t\t}\n\n\t\t&__slot {\n\t\t\tflex-grow: 1;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: flex-end;\n\t\t\talign-items: center;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const r=i},16192:(t,a,o)=>{o.d(a,{A:()=>w});var e=o(95353),l=o(47912),n=o(32235),i=o(11397),r=o(46187),s=o(51651),c=o(53334),u=o(63814),b=o(47777);const A={name:"AlbumForm",components:{MapMarker:l.A,AccountMultiplePlus:n.A,Send:i.A,NcButton:r.x1,NcLoadingIcon:r.ne,NcTextField:r.v,CollaboratorsSelectionForm:b.A},props:{album:{type:Object,default:null},displayBackButton:{type:Boolean,default:!1}},data:()=>({showCollaboratorView:!1,albumName:"",albumLocation:"",loading:!1}),computed:{editMode(){return null!==this.album},sharingEnabled:()=>void 0!==OC.Share,albumFileName(){return this.$store.getters.getAlbumName(this.albumName)}},mounted(){this.editMode&&(this.albumName=this.album.basename,this.albumLocation=this.album.location??""),this.$nextTick((()=>{this.$refs.nameInput.$el.getElementsByTagName("input")[0].focus()}))},methods:{...(0,e.i0)(["createCollection","renameCollection","updateCollection"]),submit(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];""===this.albumName||this.loading||(this.editMode?this.handleUpdateAlbum():this.handleCreateAlbum(t))},async handleCreateAlbum(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];try{this.loading=!0;let a=await this.createCollection({collection:{basename:this.albumName,filename:this.albumFileName,nbItems:0,location:this.albumLocation,lastPhoto:-1,date:(0,s.A)().format("MMMM YYYY"),collaborators:t,source:(0,u.dC)(`dav/${this.albumFileName}`)}});if(void 0===a)return;""===this.albumLocation&&0===t.length||(a=await this.updateCollection({collectionFileName:this.albumFileName,properties:{location:this.albumLocation,collaborators:t}})),this.$emit("done",{album:a})}finally{this.loading=!1}},async handleUpdateAlbum(){try{this.loading=!0;let t={...this.album};this.album.basename!==this.albumName&&(t=await this.renameCollection({collectionFileName:this.album.filename,newBaseName:this.albumName})),this.album.location!==this.albumLocation&&(t=await this.updateCollection({collectionFileName:t.filename,properties:{location:this.albumLocation}})),this.$emit("done",{album:t})}finally{this.loading=!1}},back(){this.$emit("back")},t:c.Tl}};var d=o(85072),p=o.n(d),m=o(97825),C=o.n(m),h=o(77659),g=o.n(h),_=o(55056),f=o.n(_),y=o(10540),v=o.n(y),x=o(41113),k=o.n(x),E=o(83812),N={};N.styleTagTransform=k(),N.setAttributes=f(),N.insert=g().bind(null,"head"),N.domAPI=C(),N.insertStyleElement=v();p()(E.A,N);E.A&&E.A.locals&&E.A.locals;const w=(0,o(14486).A)(A,(function(){var t=this,a=t._self._c;return t.showCollaboratorView?a("CollaboratorsSelectionForm",{attrs:{"album-name":t.albumName,"allow-public-link":!1},scopedSlots:t._u([{key:"default",fn:function(o){let{collaborators:e}=o;return[a("span",{staticClass:"left-buttons"},[a("NcButton",{attrs:{type:"tertiary"},on:{click:function(a){t.showCollaboratorView=!1}}},[t._v("\n\t\t\t\t"+t._s(t.t("photos","Back"))+"\n\t\t\t")])],1),t._v(" "),a("span",{staticClass:"right-buttons"},[a("NcButton",{attrs:{type:"primary",disabled:""===t.albumName.trim()||t.loading},on:{click:function(a){return t.submit(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?a("NcLoadingIcon",{attrs:{size:20}}):a("Send",{attrs:{size:20}})]},proxy:!0}],null,!0)},[t._v("\n\t\t\t\t"+t._s(t.editMode?t.t("photos","Save"):t.t("photos","Create album"))+"\n\t\t\t")])],1)]}}])}):a("form",{staticClass:"album-form",on:{submit:function(a){return a.preventDefault(),t.submit.apply(null,arguments)}}},[a("div",{staticClass:"form-inputs"},[a("NcTextField",{ref:"nameInput",attrs:{value:t.albumName,type:"text",name:"name",required:!0,label:t.t("photos","Name of the album")},on:{"update:value":function(a){t.albumName=a}}}),t._v(" "),a("NcTextField",{attrs:{value:t.albumLocation,name:"location",type:"text",label:t.t("photos","Location of the album")},on:{"update:value":function(a){t.albumLocation=a}},scopedSlots:t._u([{key:"default",fn:function(){return[a("MapMarker",{attrs:{size:20}})]},proxy:!0}],null,!1,2964444886)})],1),t._v(" "),a("div",{staticClass:"form-buttons"},[a("span",{staticClass:"left-buttons"},[t.displayBackButton?a("NcButton",{attrs:{type:"tertiary"},on:{click:t.back}},[t._v("\n\t\t\t\t"+t._s(t.t("photos","Back"))+"\n\t\t\t")]):t._e()],1),t._v(" "),a("span",{staticClass:"right-buttons"},[t.sharingEnabled&&!t.editMode?a("NcButton",{attrs:{type:"secondary",disabled:""===t.albumName.trim()||t.loading},on:{click:function(a){t.showCollaboratorView=!0}},scopedSlots:t._u([{key:"icon",fn:function(){return[a("AccountMultiplePlus",{attrs:{size:20}})]},proxy:!0}],null,!1,3656768963)},[t._v("\n\t\t\t\t"+t._s(t.t("photos","Add collaborators"))+"\n\t\t\t")]):t._e(),t._v(" "),a("NcButton",{attrs:{type:"primary",disabled:""===t.albumName||t.loading},on:{click:function(a){return t.submit()}},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?a("NcLoadingIcon",{attrs:{size:20}}):a("Send",{attrs:{size:20}})]},proxy:!0}],null,!1,2302891232)},[t._v("\n\t\t\t\t"+t._s(t.editMode?t.t("photos","Save"):t.t("photos","Create album"))+"\n\t\t\t")])],1)])])}),[],!1,null,"245b1030",null).exports},47777:(a,o,e)=>{e.d(o,{A:()=>F});var l=e(95353),n=e(4372),i=e(42277),r=e(59551),s=e(46535),c=e(36030),u=e(44283),b=e(65043),A=e(85168),d=e(21777),p=e(63814),m=e(46187),C=e(52129),h=e(53334),g=e(63360),_=e(19326);const f={name:"CollaboratorsSelectionForm",components:{Close:n.A,AccountGroup:s.A,ContentCopy:r.A,Check:i.A,Earth:c.A,NcButton:m.x1,NcListItemIcon:m.y_,NcSelect:m.EQ},mixins:[_.A],props:{albumName:{type:String,required:!0},collaborators:{type:Array,default:()=>[]},allowPublicLink:{type:Boolean,default:!0}},data:()=>({searchText:null,availableCollaborators:{},selectedCollaboratorsKeys:[],currentSearchResults:[],loadingCollaborators:!1,randomId:Math.random().toString().substring(2,10),publicLinkCopied:!1,collaboratorTypes:C.Z,config:{minSearchStringLength:parseInt(OC.config["sharing.minSearchStringLength"],10)||0}}),computed:{searchResults(){return this.currentSearchResults.filter((t=>{let{id:a}=t;return a!==(0,d.HW)().uid})).map((t=>({...t,key:`${t.type}:${t.id}`,iconSvg:t.type===C.Z.SHARE_TYPE_GROUP?u:void 0}))).filter((t=>{let{key:a}=t;return!this.selectedCollaboratorsKeys.includes(a)}))},listableSelectedCollaboratorsKeys(){return this.selectedCollaboratorsKeys.filter((t=>this.availableCollaborators[t].type!==C.Z.SHARE_TYPE_LINK))},selectedCollaborators(){return this.selectedCollaboratorsKeys.map((t=>this.availableCollaborators[t]))},isPublicLinkSelected(){return this.selectedCollaboratorsKeys.includes(`${C.Z.SHARE_TYPE_LINK}`)},publicLink(){return this.availableCollaborators[C.Z.SHARE_TYPE_LINK]},publicLinkURL(){return`${window.location.protocol}//${window.location.host}${(0,p.Jv)(`apps/photos/public/${this.publicLink.id}`)}`},albumFileName(){return this.$store.getters.getAlbumName(this.albumName)}},watch:{collaborators(t){this.populateCollaborators(t)}},mounted(){this.populateCollaborators(this.collaborators)},methods:{...(0,l.i0)(["updateCollection"]),async searchCollaborators(a){if(void 0!==a&&!((a=a.trim()).length<this.config.minSearchStringLength))try{this.loadingCollaborators=!0;const t=await b.Ay.get((0,p.KT)("core/autocomplete/get"),{params:{search:a,itemType:"share-recipients",shareTypes:[C.Z.SHARE_TYPE_USER,C.Z.SHARE_TYPE_GROUP]}});this.currentSearchResults=t.data.ocs.data.map((t=>{switch(t.source){case"users":return{id:t.id,label:t.label,type:C.Z.SHARE_TYPE_USER};case"groups":return{id:t.id,label:t.label,type:C.Z.SHARE_TYPE_GROUP};default:throw new Error(`Invalid collaborator source ${t.source}`)}})),this.availableCollaborators={...this.availableCollaborators,...this.currentSearchResults.reduce(this.indexCollaborators,{})}}catch(a){this.errorFetchingCollaborators=a,g.A.error(t("photos","Failed to fetch collaborators list."),a),(0,A.Qg)(t("photos","Failed to fetch collaborators list."))}finally{this.loadingCollaborators=!1}},populateCollaborators(a){const o=a.reduce(this.indexCollaborators,{});this.selectedCollaboratorsKeys=Object.keys(o),this.availableCollaborators={3:{id:"",label:t("photos","Public link"),type:C.Z.SHARE_TYPE_LINK},...this.availableCollaborators,...o}},indexCollaborators:(t,a)=>({...t,[`${a.type}${a.type===C.Z.SHARE_TYPE_LINK?"":":"}${a.type===C.Z.SHARE_TYPE_LINK?"":a.id}`]:a}),async createPublicLinkForAlbum(){this.selectEntity(`${C.Z.SHARE_TYPE_LINK}`),await this.updateAlbumCollaborators(),await this.fetchCollection(this.albumFileName,["<nc:location />","<nc:dateRange />","<nc:collaborators />"])},async deletePublicLink(){this.unselectEntity(`${C.Z.SHARE_TYPE_LINK}`),this.availableCollaborators[3]={id:"",label:t("photos","Public link"),type:C.Z.SHARE_TYPE_LINK},this.publicLinkCopied=!1,await this.updateAlbumCollaborators()},async updateAlbumCollaborators(){try{await this.updateCollection({collectionFileName:this.albumFileName,properties:{collaborators:this.selectedCollaborators}})}catch(t){g.A.error("[PublicAlbumContent] Error updating album",{error:t}),(0,A.Qg)(this.t("photos","Failed to update album."))}},async copyPublicLink(){await navigator.clipboard.writeText(this.publicLinkURL),this.publicLinkCopied=!0,setTimeout((()=>{this.publicLinkCopied=!1}),1e4)},selectEntity(t){this.searchText=null,this.selectedCollaboratorsKeys.includes(t)||this.selectedCollaboratorsKeys.push(t)},unselectEntity(t){const a=this.selectedCollaboratorsKeys.indexOf(t);-1!==a&&this.selectedCollaboratorsKeys.splice(a,1)},t:h.Tl}};var y=e(85072),v=e.n(y),x=e(97825),k=e.n(x),E=e(77659),N=e.n(E),w=e(55056),S=e.n(w),T=e(10540),L=e.n(T),B=e(41113),P=e.n(B),R=e(25674),Y={};Y.styleTagTransform=P(),Y.setAttributes=S(),Y.insert=N().bind(null,"head"),Y.domAPI=k(),Y.insertStyleElement=L();v()(R.A,Y);R.A&&R.A.locals&&R.A.locals;const F=(0,e(14486).A)(f,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"manage-collaborators"},[a("h2",{staticClass:"manage-collaborators__title"},[t._v("\n\t\t"+t._s(t.t("photos","Add collaborators"))+"\n\t")]),t._v(" "),a("form",{staticClass:"manage-collaborators__form",on:{submit:function(t){t.preventDefault()}}},[a("NcSelect",{attrs:{"input-id":"sharing-search-input","input-label":t.t("photos","Add people or groups who can edit your album"),loading:t.loadingCollaborators,label:"label",filterable:!1,placeholder:t.t("photos","Search people or groups"),"clear-search-on-blur":()=>!1,"user-select":!0,"append-to-body":!1,options:t.searchResults},on:{search:t.searchCollaborators,"option:selected":a=>{let{key:o}=a;return t.selectEntity(o)}},model:{value:t.searchText,callback:function(a){t.searchText=a},expression:"searchText"}},[t._v("\n\t\t\t"+t._s(t.t("photos","No recommendations. Start typing."))+"\n\t\t")])],1),t._v(" "),a("ul",{staticClass:"manage-collaborators__selection"},t._l(t.listableSelectedCollaboratorsKeys,(function(o){return a("li",{key:o,staticClass:"manage-collaborators__selection__item"},[a("NcListItemIcon",{attrs:{id:t.availableCollaborators[o].id,"display-name":t.availableCollaborators[o].label,name:t.availableCollaborators[o].label,user:t.availableCollaborators[o].id,"is-no-user":t.availableCollaborators[o].type!==t.collaboratorTypes.SHARE_TYPE_USER}},[t.availableCollaborators[o].type===t.collaboratorTypes.SHARE_TYPE_GROUP?a("AccountGroup",{attrs:{title:t.t("photos","Group")}}):t._e(),t._v(" "),a("NcButton",{attrs:{type:"tertiary","aria-label":t.t("photos","Remove {collaboratorLabel} from the collaborators list",{collaboratorLabel:t.availableCollaborators[o].label})},on:{click:function(a){return t.unselectEntity(o)}}},[a("Close",{attrs:{slot:"icon",size:20},slot:"icon"})],1)],1)],1)})),0),t._v(" "),a("div",{staticClass:"actions"},[t.allowPublicLink?a("div",{staticClass:"actions__public-link"},[t.isPublicLinkSelected&&""!==t.publicLink.id?[a("NcButton",{staticClass:"manage-collaborators__public-link-button",attrs:{"aria-label":t.t("photos","Copy the public link"),title:t.publicLinkURL},on:{click:t.copyPublicLink},scopedSlots:t._u([{key:"icon",fn:function(){return[t.publicLinkCopied?a("Check"):a("ContentCopy")]},proxy:!0}],null,!1,845538853)},[t.publicLinkCopied?[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Public link copied!"))+"\n\t\t\t\t\t")]:[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Copy public link"))+"\n\t\t\t\t\t")]],2),t._v(" "),a("NcButton",{attrs:{type:"tertiary","aria-label":t.t("photos","Delete the public link")},on:{click:t.deletePublicLink}},[a("Close",{attrs:{slot:"icon"},slot:"icon"})],1)]:a("NcButton",{staticClass:"manage-collaborators__public-link-button",attrs:{disabled:t.isPublicLinkSelected&&""===t.publicLink.id,"aria-label":t.t("photos","Create public link share")},on:{click:t.createPublicLinkForAlbum}},[a("Earth",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n\t\t\t\t"+t._s(t.t("photos","Share via public link"))+"\n\t\t\t")],1)],2):t._e(),t._v(" "),a("div",{staticClass:"actions__slot"},[t._t("default",null,{collaborators:t.selectedCollaborators})],2)])])}),[],!1,null,"83eabb42",null).exports}}]);
//# sourceMappingURL=photos-src_components_Albums_AlbumForm_vue.js.map?v=2d6be2c2b0166944dae3