const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('text', '', 'js/Editor-Bojumers.chunk.mjs'),window.OC.filePath('text', '', 'js/modulepreload-polyfill-DCUwxYMh.chunk.mjs'),window.OC.filePath('text', '', 'js/emoji-picker-Coav-X6q.chunk.mjs'),window.OC.filePath('text', '', 'js/vue.runtime.esm-DuKaSI2H.chunk.mjs'),window.OC.filePath('text', '', 'js/index-CJ7wDv5l.chunk.mjs'),window.OC.filePath('text', '', 'js/NcNoteCard-C6xb7vi0-D5KgAKsm.chunk.mjs'),window.OC.filePath('text', '', 'css/NcNoteCard-C6xb7vi0-BffjDTy3.chunk.css'),window.OC.filePath('text', '', 'js/index-CNGASRAT.chunk.mjs'),window.OC.filePath('text', '', 'js/_plugin-vue2_normalizer-BNL0n0sv-DRD0N6yA.chunk.mjs'),window.OC.filePath('text', '', 'js/index-DtTpkYe5.chunk.mjs'),window.OC.filePath('text', '', 'js/index-D-QkLYOw.chunk.mjs'),window.OC.filePath('text', '', 'js/RichText-CfL10uBw.chunk.mjs'),window.OC.filePath('text', '', 'js/_plugin-vue2_normalizer-pOejpnDa.chunk.mjs'),window.OC.filePath('text', '', 'css/_plugin-vue2_normalizer-hk4lAjcj.chunk.css'),window.OC.filePath('text', '', 'js/index-D0MmBSgA.chunk.mjs'),window.OC.filePath('text', '', 'js/MediaHandler.provider-erZi6c8Y.chunk.mjs'),window.OC.filePath('text', '', 'js/logger-YW53u4Eu.chunk.mjs'),window.OC.filePath('text', '', 'css/RichText-yyem3bSU.chunk.css'),window.OC.filePath('text', '', 'js/Wrapper-Bt8op-Jw.chunk.mjs'),window.OC.filePath('text', '', 'css/Wrapper-qgEnHPIS.chunk.css'),window.OC.filePath('text', '', 'css/Editor-D77p4NVR.chunk.css')])))=>i.map(i=>d[i]);
import{_ as s,s as c,e as u}from"./modulepreload-polyfill-DCUwxYMh.chunk.mjs";import{l as d}from"./index-CJ7wDv5l.chunk.mjs";import{g as f}from"./NcNoteCard-C6xb7vi0-D5KgAKsm.chunk.mjs";import{registerFileActionFallback as h,registerFileCreate as w}from"./files-CAw4YaLn.chunk.mjs";import{l as _}from"./logger-YW53u4Eu.chunk.mjs";import{b as g}from"./mime-DWHK-c03.chunk.mjs";import{s as p}from"./index-D0MmBSgA.chunk.mjs";import y from"./RichWorkspace-DCzDjLGS.chunk.mjs";import"./emoji-picker-Coav-X6q.chunk.mjs";import"./vue.runtime.esm-DuKaSI2H.chunk.mjs";import"./_plugin-vue2_normalizer-BNL0n0sv-DRD0N6yA.chunk.mjs";import"./index-CNGASRAT.chunk.mjs";import"./index-DtTpkYe5.chunk.mjs";import"./index-D-QkLYOw.chunk.mjs";import"./Editor.singleton-C35lnl01.chunk.mjs";import"./RichTextReader-zDQpdPW7.chunk.mjs";import"./BaseReader-Bo7_LFiq.chunk.mjs";import"./RichText-CfL10uBw.chunk.mjs";import"./_plugin-vue2_normalizer-pOejpnDa.chunk.mjs";import"./MediaHandler.provider-erZi6c8Y.chunk.mjs";const E=function(e){const i=()=>setTimeout(e,0);(document.attachEvent?document.readyState==="complete":document.readyState!=="loading")?i():document.addEventListener("DOMContentLoaded",e)},C={attach(e){const i=e.fileList,o=t("text","Readme")+"."+d("text","default_file_extension");i.id!=="files"&&i.id!=="files.public"||e.addMenuEntry({id:"rich-workspace-init",displayName:t("text","Add folder description"),templateName:o,iconClass:"icon-add-folder-description",fileType:"file",useInput:!1,actionHandler(){return window.FileList.createFile(o,{scrollTo:!1,animate:!1}).then(()=>u("Text::showRichWorkspace",{autofocus:!0}))},shouldShow(){return!i.findFile(o)}})}},O={el:null,attach(e){e.id!=="files"&&e.id!=="files.public"||(this.el=document.createElement("div"),e.registerHeader({id:"workspace",el:this.el,render:this.render.bind(this),priority:10}))},render(e){e.id!=="files"&&e.id!=="files.public"||(OC.Plugins.register("OCA.Files.NewFileMenu",C),s(()=>import("./vue.runtime.esm-DuKaSI2H.chunk.mjs").then(i=>i.x),[],import.meta.url).then(i=>{const o=i.default;this.el.id="files-workspace-wrapper",o.prototype.t=window.t,o.prototype.n=window.n,o.prototype.OCA=window.OCA;const a=o.extend(y),n=new a({propsData:{path:e.getCurrentDirectory(),hasRichWorkspace:!0},store:p}).$mount(this.el);c("files:navigation:changed",()=>{n.active=OCA.Files.App.getCurrentFileList()===e}),e.$el.on("urlChanged",r=>{n.path=r.dir.toString()}),e.$el.on("changeDirectory",r=>{n.path=r.dir.toString()})}))}},v=({sharingToken:e,mimetype:i,fileId:o,$el:a})=>{const n=document.createElement("div");n.id="texteditor",document.getElementById("app-content").appendChild(n),Promise.all([s(()=>import("./vue.runtime.esm-DuKaSI2H.chunk.mjs").then(r=>r.x),[],import.meta.url),s(()=>import("./Editor-Bojumers.chunk.mjs").then(r=>r.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url)]).then(([r,l])=>({Vue:r.default,Editor:l.default})).then(({Vue:r,Editor:l})=>{r.prototype.t=window.t,r.prototype.OCA=window.OCA,new r({render:m=>m(l,{props:{active:!0,shareToken:e,mime:i,fileId:o}}),store:p}).$mount(a)}).catch(r=>_.error("Failed to attach editor",{error:r}))};E(()=>{var o;const e=f();if(!e)return;if(document.querySelector("#preview table.files-filestable")){OC.Plugins.register("OCA.Files.FileList",O),h(),w();return}const i=(o=document.getElementById("mimetype"))==null?void 0:o.value;if(i&&g.indexOf(i)!==-1){const a=document.getElementById("preview"),n=d("text","file_id");v({mimetype:i,sharingToken:e,fileId:n,$el:a})}}),OCA.Text={RichWorkspaceEnabled:d("text","workspace_available"),OpenReadOnlyEnabled:d("text","open_read_only_enabled")};
