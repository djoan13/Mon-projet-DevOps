(()=>{var e,n,o,s={37581:(e,n,o)=>{"use strict";var s=o(21777),i=o(53334),r=o(65899),a=o(85471),c=o(85168),l=o(55042),m=o(28326),d=o(32051);const u={name:"RefreshIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var p=o(14486);const A=(0,p.A)(u,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon refresh-icon",attrs:{"aria-hidden":t.title?null:"true","aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,h={name:"MessageReplyTextIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},g=(0,p.A)(h,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon message-reply-text-icon",attrs:{"aria-hidden":t.title?null:"true","aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var C=o(57578),f=o(57505),_=o(24764),y=o(15502),v=o(41944),b=o(4604),x=o(59892),w=o(77764),I=o(33691),k=o(66001),D=o(79759),T=o(2413),N=o(63814);const S=function(){return(0,N.dC)("dav/comments")};function E(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n=new DOMParser;let o=t;for(let t=0;t<e;t++)o=n.parseFromString(o,"text/html").documentElement.textContent;return o}var R=o(65043),O=o(60669);const M=(0,O.UU)(S()),B=t=>{M.setHeaders({"X-Requested-With":"XMLHttpRequest",requesttoken:t??""})};(0,s.zo)(B),B((0,s.do)());const $=M,L=(0,r.nY)("deletedCommentLimbo",{state:()=>({idsInLimbo:[]}),actions:{addId(t){this.idsInLimbo.push(t)},removeId(t){const e=this.idsInLimbo.indexOf(t);e>-1&&this.idsInLimbo.splice(e,1)},checkForId(t){this.idsInLimbo.includes(t)}}}),j=(0,o(35947).YK)().setApp("comments").detectUser().build(),P={props:{id:{type:Number,default:null},message:{type:String,default:""},resourceId:{type:[String,Number],required:!0},resourceType:{type:String,default:"files"}},data:()=>({deleted:!1,editing:!1,loading:!1}),computed:{...(0,r.n2)(L)},methods:{onEdit(){this.editing=!0},onEditCancel(){this.editing=!1,this.updateLocalMessage(this.message)},async onEditComment(e){this.loading=!0;try{await async function(t,e,n,o){const s=["",t,e,n].join("/");return await $.customRequest(s,Object.assign({method:"PROPPATCH",data:`<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:message>${o}</oc:message>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>`}))}(this.resourceType,this.resourceId,this.id,e),j.debug("Comment edited",{resourceType:this.resourceType,resourceId:this.resourceId,id:this.id,message:e}),this.$emit("update:message",e),this.editing=!1}catch(e){(0,c.Qg)(t("comments","An error occurred while trying to edit the comment")),console.error(e)}finally{this.loading=!1}},onDeleteWithUndo(){this.$emit("delete"),this.deleted=!0,this.deletedCommentLimboStore.addId(this.id);const e=setTimeout(this.onDelete,c.Br);(0,c._h)(t("comments","Comment deleted"),(()=>{clearTimeout(e),this.deleted=!1,this.deletedCommentLimboStore.removeId(this.id)}))},async onDelete(){try{await async function(t,e,n){const o=["",t,e,n].join("/");await $.deleteFile(o)}(this.resourceType,this.resourceId,this.id),j.debug("Comment deleted",{resourceType:this.resourceType,resourceId:this.resourceId,id:this.id}),this.$emit("delete",this.id)}catch(e){(0,c.Qg)(t("comments","An error occurred while trying to delete the comment")),console.error(e),this.deleted=!1,this.deletedCommentLimboStore.removeId(this.id)}},async onNewComment(e){this.loading=!0;try{const t=await async function(t,e,n){const o=["",t,e].join("/"),i=await R.Ay.post(S()+o,{actorDisplayName:(0,s.HW)().displayName,actorId:(0,s.HW)().uid,actorType:"users",creationDateTime:(new Date).toUTCString(),message:n,objectType:t,verb:"comment"}),r=o+"/"+parseInt(i.headers["content-location"].split("/").pop()),a=await $.stat(r,{details:!0}),c=a.data.props;return c.actorDisplayName=E(c.actorDisplayName,2),c.message=E(c.message,2),a.data}(this.resourceType,this.resourceId,e);j.debug("New comment posted",{resourceType:this.resourceType,resourceId:this.resourceId,newComment:t}),this.$emit("new",t),this.$emit("update:message",""),this.localMessage=""}catch(e){(0,c.Qg)(t("comments","An error occurred while trying to create the comment")),console.error(e)}finally{this.loading=!1}}}},q={name:"Comment",components:{IconArrowRight:I.A,IconClose:k.A,IconDelete:D.A,IconEdit:T.A,NcActionButton:f.A,NcActions:_.A,NcActionSeparator:y.A,NcAvatar:v.A,NcButton:d.A,NcDateTime:b.A,NcLoadingIcon:x.A,NcRichContenteditable:()=>Promise.all([o.e(4208),o.e(5528)]).then(o.bind(o,95528)),NcRichText:()=>Promise.all([o.e(4208),o.e(4508)]).then(o.bind(o,64508))},mixins:[P],inheritAttrs:!1,props:{actorDisplayName:{type:String,required:!0},actorId:{type:String,required:!0},creationDateTime:{type:String,default:null},editor:{type:Boolean,default:!1},autoComplete:{type:Function,required:!0},userData:{type:Object,default:()=>({})},tag:{type:String,default:"div"}},data:()=>({expanded:!1,localMessage:"",submitted:!1}),computed:{...(0,r.n2)(L),isOwnComment(){return(0,s.HW)().uid===this.actorId},richContent(){const t={};let e=this.localMessage;return Object.keys(this.userData).forEach(((n,o)=>{const s=`mention-${o}`,i=new RegExp(`@${n}|@"${n}"`,"g");e=e.replace(i,`{${s}}`),t[s]={component:w.A,props:{user:n,displayName:this.userData[n].label,primary:this.userData[n].primary}}})),{mentions:t,message:e}},isEmptyMessage(){return!this.localMessage||""===this.localMessage.trim()},timestamp(){return Date.parse(this.creationDateTime)},isLimbo(){return this.deletedCommentLimboStore.checkForId(this.id)}},watch:{message(t){this.updateLocalMessage(t)}},beforeMount(){this.updateLocalMessage(this.message)},methods:{t:i.Tl,updateLocalMessage(t){this.localMessage=t.toString(),this.submitted=!1},onSubmit(){if(""!==this.localMessage.trim())return this.editor?(this.onNewComment(this.localMessage.trim()),void this.$nextTick((()=>{this.$refs.editor.$el.focus()}))):void this.onEditComment(this.localMessage.trim())},onExpand(){this.expanded=!0}}};var H=o(85072),V=o.n(H),z=o(97825),W=o.n(z),F=o(77659),G=o.n(F),U=o(55056),Y=o.n(U),Q=o(10540),K=o.n(Q),Z=o(41113),X=o.n(Z),J=o(95197),tt={};tt.styleTagTransform=X(),tt.setAttributes=Y(),tt.insert=G().bind(null,"head"),tt.domAPI=W(),tt.insertStyleElement=K(),V()(J.A,tt),J.A&&J.A.locals&&J.A.locals;const et=(0,p.A)(q,(function(){var t=this,e=t._self._c;return e(t.tag,{directives:[{name:"show",rawName:"v-show",value:!t.deleted&&!t.isLimbo,expression:"!deleted && !isLimbo"}],tag:"component",staticClass:"comment",class:{"comment--loading":t.loading}},[e("div",{staticClass:"comment__side"},[e("NcAvatar",{staticClass:"comment__avatar",attrs:{"display-name":t.actorDisplayName,user:t.actorId,size:32}})],1),t._v(" "),e("div",{staticClass:"comment__body"},[e("div",{staticClass:"comment__header"},[e("span",{staticClass:"comment__author"},[t._v(t._s(t.actorDisplayName))]),t._v(" "),t.isOwnComment&&t.id&&!t.loading?e("NcActions",{staticClass:"comment__actions"},[t.editing?e("NcActionButton",{on:{click:t.onEditCancel},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconClose",{attrs:{size:20}})]},proxy:!0}],null,!1,2888946197)},[t._v("\n\t\t\t\t\t"+t._s(t.t("comments","Cancel edit"))+"\n\t\t\t\t")]):[e("NcActionButton",{attrs:{"close-after-click":""},on:{click:t.onEdit},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconEdit",{attrs:{size:20}})]},proxy:!0}],null,!1,649782975)},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Edit comment"))+"\n\t\t\t\t\t")]),t._v(" "),e("NcActionSeparator"),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":""},on:{click:t.onDeleteWithUndo},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconDelete",{attrs:{size:20}})]},proxy:!0}],null,!1,881161434)},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Delete comment"))+"\n\t\t\t\t\t")])]],2):t._e(),t._v(" "),t.id&&t.loading?e("div",{staticClass:"comment_loading icon-loading-small"}):t.creationDateTime?e("NcDateTime",{staticClass:"comment__timestamp",attrs:{timestamp:t.timestamp,"ignore-seconds":!0}}):t._e()],1),t._v(" "),t.editor||t.editing?e("form",{staticClass:"comment__editor",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"comment__editor-group"},[e("NcRichContenteditable",{ref:"editor",attrs:{"auto-complete":t.autoComplete,contenteditable:!t.loading,label:t.editor?t.t("comments","New comment"):t.t("comments","Edit comment"),placeholder:t.t("comments","Write a comment …"),value:t.localMessage,"user-data":t.userData,"aria-describedby":"tab-comments__editor-description"},on:{"update:value":t.updateLocalMessage,submit:t.onSubmit}}),t._v(" "),e("div",{staticClass:"comment__submit"},[e("NcButton",{attrs:{type:"tertiary-no-background","native-type":"submit","aria-label":t.t("comments","Post comment"),disabled:t.isEmptyMessage},on:{click:t.onSubmit},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?e("NcLoadingIcon"):e("IconArrowRight",{attrs:{size:20}})]},proxy:!0}],null,!1,758946661)})],1)],1),t._v(" "),e("div",{staticClass:"comment__editor-description",attrs:{id:"tab-comments__editor-description"}},[t._v("\n\t\t\t\t"+t._s(t.t("comments","@ for mentions, : for emoji, / for smart picker"))+"\n\t\t\t")])]):e("NcRichText",{staticClass:"comment__message",class:{"comment__message--expanded":t.expanded},attrs:{text:t.richContent.message,arguments:t.richContent.mentions},on:{click:t.onExpand}})],1)])}),[],!1,null,"5c014c6f",null).exports;var nt=o(32981);const ot=(0,a.pM)({props:{resourceId:{type:Number,required:!0},resourceType:{type:String,default:"files"}},data:()=>({editorData:{actorDisplayName:(0,s.HW)().displayName,actorId:(0,s.HW)().uid,key:"editor"},userData:{}}),methods:{async autoComplete(t,e){const{data:n}=await R.Ay.get((0,N.KT)("core/autocomplete/get"),{params:{search:t,itemType:"files",itemId:this.resourceId,sorter:"commenters|share-recipients",limit:(0,nt.C)("comments","maxAutoCompleteResults")}});return n.ocs.data.forEach((t=>{this.userData[t.id]=t})),e(Object.values(this.userData))},genMentionsData(t){return Object.values(t).flat().forEach((t=>{this.userData[t.mentionId]={icon:"icon-user",id:t.mentionId,label:t.mentionDisplayName,source:"users",primary:(0,s.HW)()?.uid===t.mentionId}})),this.userData}}});var st=o(54290),it=o(90176);const rt=async function(t,e){let{resourceType:n,resourceId:o}=t;const s=["",n,o].join("/"),i=e.datetime?`<oc:datetime>${e.datetime.toISOString()}</oc:datetime>`:"",r=await $.customRequest(s,Object.assign({method:"REPORT",data:`<?xml version="1.0"?>\n\t\t\t<oc:filter-comments\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<oc:limit>${e.limit??20}</oc:limit>\n\t\t\t\t<oc:offset>${e.offset||0}</oc:offset>\n\t\t\t\t${i}\n\t\t\t</oc:filter-comments>`},e)),a=await r.text(),c=await(0,O.h4)(a),l=at(c,!0);return(0,st.hq)(r,l,!0)},at=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{multistatus:{response:n}}=t;return n.map((t=>{const n=t.propstat.prop;return(0,it.ch)(n,n.id.toString(),e)}))},ct={name:"Comments",components:{Comment:et,NcEmptyContent:m.A,NcButton:d.A,RefreshIcon:A,MessageReplyTextIcon:g,AlertCircleOutlineIcon:C.A},directives:{elementVisibility:l.Zx},mixins:[ot],data(){return{error:"",loading:!1,done:!1,currentResourceId:this.resourceId,offset:0,comments:[],cancelRequest:()=>{},Comment:et,userData:{}}},computed:{hasComments(){return this.comments.length>0},isFirstLoading(){return this.loading&&0===this.offset}},watch:{resourceId(){this.currentResourceId=this.resourceId}},methods:{t:i.Tl,async onVisibilityChange(t){if(t)try{await((t,e,n)=>{const o=["",t,e].join("/"),s=n.toUTCString();return $.customRequest(o,{method:"PROPPATCH",data:`<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:readMarker>${s}</oc:readMarker>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>`})})(this.resourceType,this.currentResourceId,new Date)}catch(t){(0,c.Qg)(t.message||(0,i.Tl)("comments","Failed to mark comments as read"))}},async update(t){this.currentResourceId=t,this.resetState(),this.getComments()},onScrollBottomReached(){this.error||this.done||this.loading||this.getComments()},async getComments(){this.cancelRequest("cancel");try{this.loading=!0,this.error="";const{request:t,abort:e}=function(t){const e=new AbortController,n=e.signal;return{request:async function(e,o){return await t(e,Object.assign({signal:n},o))},abort:()=>e.abort()}}(rt);this.cancelRequest=e;const{data:n}=await t({resourceType:this.resourceType,resourceId:this.currentResourceId},{offset:this.offset})||{data:[]};this.logger.debug(`Processed ${n.length} comments`,{comments:n}),n.length<20&&(this.done=!0),this.comments.push(...n),this.offset+=20}catch(t){if("cancel"===t.message)return;this.error=(0,i.Tl)("comments","Unable to load the comments list"),console.error("Error loading the comments list",t)}finally{this.loading=!1}},onNewComment(t){this.comments.unshift(t)},onDelete(t){const e=this.comments.findIndex((e=>e.props.id===t));e>-1?this.comments.splice(e,1):console.error("Could not find the deleted comment in the list",t)},resetState(){this.error="",this.loading=!1,this.done=!1,this.offset=0,this.comments=[]}}};var lt=o(43599),mt={};mt.styleTagTransform=X(),mt.setAttributes=Y(),mt.insert=G().bind(null,"head"),mt.domAPI=W(),mt.insertStyleElement=K(),V()(lt.A,mt),lt.A&&lt.A.locals&&lt.A.locals;const dt=(0,p.A)(ct,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"element-visibility",rawName:"v-element-visibility",value:t.onVisibilityChange,expression:"onVisibilityChange"}],staticClass:"comments",class:{"icon-loading":t.isFirstLoading}},[e("Comment",t._b({staticClass:"comments__writer",attrs:{"auto-complete":t.autoComplete,"resource-type":t.resourceType,editor:!0,"user-data":t.userData,"resource-id":t.currentResourceId},on:{new:t.onNewComment}},"Comment",t.editorData,!1)),t._v(" "),t.isFirstLoading?t._e():[!t.hasComments&&t.done?e("NcEmptyContent",{staticClass:"comments__empty",attrs:{name:t.t("comments","No comments yet, start the conversation!")},scopedSlots:t._u([{key:"icon",fn:function(){return[e("MessageReplyTextIcon")]},proxy:!0}],null,!1,1033639148)}):e("ul",t._l(t.comments,(function(n){return e("Comment",t._b({key:n.props.id,staticClass:"comments__list",attrs:{tag:"li","auto-complete":t.autoComplete,"resource-type":t.resourceType,message:n.props.message,"resource-id":t.currentResourceId,"user-data":t.genMentionsData(n.props.mentions)},on:{"update:message":function(e){return t.$set(n.props,"message",e)},delete:t.onDelete}},"Comment",n.props,!1))})),1),t._v(" "),t.loading&&!t.isFirstLoading?e("div",{staticClass:"comments__info icon-loading"}):t.hasComments&&t.done?e("div",{staticClass:"comments__info"},[t._v("\n\t\t\t"+t._s(t.t("comments","No more messages"))+"\n\t\t")]):t.error?[e("NcEmptyContent",{staticClass:"comments__error",attrs:{name:t.error},scopedSlots:t._u([{key:"icon",fn:function(){return[e("AlertCircleOutlineIcon")]},proxy:!0}],null,!1,66050004)}),t._v(" "),e("NcButton",{staticClass:"comments__retry",on:{click:t.getComments},scopedSlots:t._u([{key:"icon",fn:function(){return[e("RefreshIcon")]},proxy:!0}],null,!1,3924573781)},[t._v("\n\t\t\t\t"+t._s(t.t("comments","Retry"))+"\n\t\t\t")])]:t._e()]],2)}),[],!1,null,"df914872",null).exports;a.Ay.use(r.R2),o.nc=(0,s.aV)(),a.Ay.mixin({data:()=>({logger:j}),methods:{t:i.t,n:i.n}}),window.OCA&&!window.OCA.Comments&&Object.assign(window.OCA,{Comments:{}}),Object.assign(window.OCA.Comments,{View:class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"files",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=(0,r.Ey)();return e={...e,propsData:{...e.propsData??{},resourceType:t},pinia:n},new(a.Ay.extend(dt))(e)}}}),console.debug("OCA.Comments.View initialized")},95197:(t,e,n)=>{"use strict";n.d(e,{A:()=>a});var o=n(71354),s=n.n(o),i=n(76314),r=n.n(i)()(s());r.push([t.id,".comment[data-v-5c014c6f]{display:flex;gap:8px;padding:5px 10px}.comment__side[data-v-5c014c6f]{display:flex;align-items:flex-start;padding-top:6px}.comment__body[data-v-5c014c6f]{display:flex;flex-grow:1;flex-direction:column}.comment__header[data-v-5c014c6f]{display:flex;align-items:center;min-height:44px}.comment__actions[data-v-5c014c6f]{margin-inline-start:10px !important}.comment__author[data-v-5c014c6f]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--color-text-maxcontrast)}.comment_loading[data-v-5c014c6f],.comment__timestamp[data-v-5c014c6f]{margin-inline-start:auto;text-align:end;white-space:nowrap;color:var(--color-text-maxcontrast)}.comment__editor-group[data-v-5c014c6f]{position:relative}.comment__editor-description[data-v-5c014c6f]{color:var(--color-text-maxcontrast);padding-block:var(--default-grid-baseline)}.comment__submit[data-v-5c014c6f]{position:absolute !important;bottom:5px;inset-inline-end:0}.comment__message[data-v-5c014c6f]{white-space:pre-wrap;word-break:break-word;max-height:70px;overflow:hidden;margin-top:-6px}.comment__message--expanded[data-v-5c014c6f]{max-height:none;overflow:visible}.rich-contenteditable__input[data-v-5c014c6f]{min-height:44px;margin:0;padding:10px}","",{version:3,sources:["webpack://./apps/comments/src/components/Comment.vue"],names:[],mappings:"AAKA,0BACC,YAAA,CACA,OAAA,CACA,gBAAA,CAEA,gCACC,YAAA,CACA,sBAAA,CACA,eAAA,CAGD,gCACC,YAAA,CACA,WAAA,CACA,qBAAA,CAGD,kCACC,YAAA,CACA,kBAAA,CACA,eAAA,CAGD,mCACC,mCAAA,CAGD,kCACC,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,mCAAA,CAGD,uEAEC,wBAAA,CACA,cAAA,CACA,kBAAA,CACA,mCAAA,CAGD,wCACC,iBAAA,CAGD,8CACC,mCAAA,CACA,0CAAA,CAGD,kCACC,4BAAA,CACA,UAAA,CACA,kBAAA,CAGD,mCACC,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CACA,6CACC,eAAA,CACA,gBAAA,CAKH,8CACC,eAAA,CACA,QAAA,CACA,YA3EiB",sourcesContent:['\n@use "sass:math";\n\n$comment-padding: 10px;\n\n.comment {\n\tdisplay: flex;\n\tgap: 8px;\n\tpadding: 5px $comment-padding;\n\n\t&__side {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\tpadding-top: 6px;\n\t}\n\n\t&__body {\n\t\tdisplay: flex;\n\t\tflex-grow: 1;\n\t\tflex-direction: column;\n\t}\n\n\t&__header {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmin-height: 44px;\n\t}\n\n\t&__actions {\n\t\tmargin-inline-start: $comment-padding !important;\n\t}\n\n\t&__author {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&_loading,\n\t&__timestamp {\n\t\tmargin-inline-start: auto;\n\t\ttext-align: end;\n\t\twhite-space: nowrap;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__editor-group {\n\t\tposition: relative;\n\t}\n\n\t&__editor-description {\n\t\tcolor: var(--color-text-maxcontrast);\n\t\tpadding-block: var(--default-grid-baseline);\n\t}\n\n\t&__submit {\n\t\tposition: absolute !important;\n\t\tbottom: 5px;\n\t\tinset-inline-end: 0;\n\t}\n\n\t&__message {\n\t\twhite-space: pre-wrap;\n\t\tword-break: break-word;\n\t\tmax-height: 70px;\n\t\toverflow: hidden;\n\t\tmargin-top: -6px;\n\t\t&--expanded {\n\t\t\tmax-height: none;\n\t\t\toverflow: visible;\n\t\t}\n\t}\n}\n\n.rich-contenteditable__input {\n\tmin-height: 44px;\n\tmargin: 0;\n\tpadding: $comment-padding;\n}\n\n'],sourceRoot:""}]);const a=r},43599:(t,e,n)=>{"use strict";n.d(e,{A:()=>a});var o=n(71354),s=n.n(o),i=n(76314),r=n.n(i)()(s());r.push([t.id,".comments[data-v-df914872]{min-height:100%;display:flex;flex-direction:column}.comments__empty[data-v-df914872],.comments__error[data-v-df914872]{flex:1 0}.comments__retry[data-v-df914872]{margin:0 auto}.comments__info[data-v-df914872]{height:60px;color:var(--color-text-maxcontrast);text-align:center;line-height:60px}","",{version:3,sources:["webpack://./apps/comments/src/views/Comments.vue"],names:[],mappings:"AACA,2BACC,eAAA,CACA,YAAA,CACA,qBAAA,CAEA,oEAEC,QAAA,CAGD,kCACC,aAAA,CAGD,iCACC,WAAA,CACA,mCAAA,CACA,iBAAA,CACA,gBAAA",sourcesContent:["\n.comments {\n\tmin-height: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&__empty,\n\t&__error {\n\t\tflex: 1 0;\n\t}\n\n\t&__retry {\n\t\tmargin: 0 auto;\n\t}\n\n\t&__info {\n\t\theight: 60px;\n\t\tcolor: var(--color-text-maxcontrast);\n\t\ttext-align: center;\n\t\tline-height: 60px;\n\t}\n}\n"],sourceRoot:""}]);const a=r},42634:()=>{},63779:()=>{},77199:()=>{},59169:()=>{},86833:()=>{}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={id:t,loaded:!1,exports:{}};return s[t].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=s,e=[],r.O=(t,n,o,s)=>{if(!n){var i=1/0;for(m=0;m<e.length;m++){n=e[m][0],o=e[m][1],s=e[m][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||i>=s)&&Object.keys(r.O).every((t=>r.O[t](n[c])))?n.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(m--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[n,o,s]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,n)=>(r.f[n](t,e),e)),[])),r.u=t=>t+"-"+t+".js?v="+{2441:"fc741cf57e9647f370a3",4508:"1787085bd2eab50ce109",5528:"aeb64535f43a5eb812c7",5862:"142cd48ca8ec32e57725",7874:"cd16576625b0c6e0d277"}[t],r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n={},o="nextcloud:",r.l=(t,e,s,i)=>{if(n[t])n[t].push(e);else{var a,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),m=0;m<l.length;m++){var d=l[m];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==o+s){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",o+s),a.src=t),n[t]=[e];var u=(e,o)=>{a.onerror=a.onload=null,clearTimeout(p);var s=n[t];if(delete n[t],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((t=>t(o))),e)return e(o)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),c&&document.head.appendChild(a)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.j=7062,(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{r.b=document.baseURI||self.location.href;var t={7062:0};r.f.j=(e,n)=>{var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var s=new Promise(((n,s)=>o=t[e]=[n,s]));n.push(o[2]=s);var i=r.p+r.u(e),a=new Error;r.l(i,(n=>{if(r.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",a.name="ChunkLoadError",a.type=s,a.request=i,o[1](a)}}),"chunk-"+e,e)}},r.O.j=e=>0===t[e];var e=(e,n)=>{var o,s,i=n[0],a=n[1],c=n[2],l=0;if(i.some((e=>0!==t[e]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var m=c(r)}for(e&&e(n);l<i.length;l++)s=i[l],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(m)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.nc=void 0;var a=r.O(void 0,[4208],(()=>r(37581)));a=r.O(a)})();
//# sourceMappingURL=comments-comments-app.js.map?v=7bda4fabea8f16829c09