"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[7789],{4532:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(71354),r=n.n(o),i=n(76314),s=n.n(i)()(r());s.push([e.id,"\n.note-to-recipient[data-v-514f64d7] {\n\tmargin-inline: var(--row-height)\n}\n.note-to-recipient__text[data-v-514f64d7] {\n\t/* respect new lines */\n\twhite-space: pre-line;\n}\n.note-to-recipient__heading[data-v-514f64d7] {\n\tfont-weight: bold;\n}\n@media screen and (max-width: 512px) {\n.note-to-recipient[data-v-514f64d7] {\n\t\tmargin-inline: var(--default-grid-baseline);\n}\n}\n","",{version:3,sources:["webpack://./apps/files_sharing/src/views/FilesHeaderNoteToRecipient.vue"],names:[],mappings:";AAsDA;CACA;AACA;AAEA;CACA,sBAAA;CACA,qBAAA;AACA;AAEA;CACA,iBAAA;AACA;AAEA;AACA;EACA,2CAAA;AACA;AACA",sourcesContent:["\x3c!--\n  - SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n--\x3e\n<template>\n\t<NcNoteCard v-if=\"note.length > 0\"\n\t\tclass=\"note-to-recipient\"\n\t\ttype=\"info\">\n\t\t<p v-if=\"user\" class=\"note-to-recipient__heading\">\n\t\t\t{{ t('files_sharing', 'Note from') }}\n\t\t\t<NcUserBubble :user=\"user.id\" :display-name=\"user.displayName\" />\n\t\t</p>\n\t\t<p v-else class=\"note-to-recipient__heading\">\n\t\t\t{{ t('files_sharing', 'Note:') }}\n\t\t</p>\n\t\t<p class=\"note-to-recipient__text\" v-text=\"note\" />\n\t</NcNoteCard>\n</template>\n\n<script setup lang=\"ts\">\nimport type { Folder } from '@nextcloud/files'\nimport { getCurrentUser } from '@nextcloud/auth'\nimport { t } from '@nextcloud/l10n'\nimport { computed, ref } from 'vue'\n\nimport NcNoteCard from '@nextcloud/vue/dist/Components/NcNoteCard.js'\nimport NcUserBubble from '@nextcloud/vue/dist/Components/NcUserBubble.js'\n\nconst folder = ref<Folder>()\nconst note = computed<string>(() => folder.value?.attributes.note ?? '')\nconst user = computed(() => {\n\tconst id = folder.value?.owner\n\tconst displayName = folder.value?.attributes?.['owner-display-name']\n\tif (id !== getCurrentUser()?.uid) {\n\t\treturn {\n\t\t\tid,\n\t\t\tdisplayName,\n\t\t}\n\t}\n\treturn null\n})\n\n/**\n * Update the current folder\n * @param newFolder the new folder to show note for\n */\nfunction updateFolder(newFolder: Folder) {\n\tfolder.value = newFolder\n}\n\ndefineExpose({ updateFolder })\n<\/script>\n\n<style scoped>\n.note-to-recipient {\n\tmargin-inline: var(--row-height)\n}\n\n.note-to-recipient__text {\n\t/* respect new lines */\n\twhite-space: pre-line;\n}\n\n.note-to-recipient__heading {\n\tfont-weight: bold;\n}\n\n@media screen and (max-width: 512px) {\n\t.note-to-recipient {\n\t\tmargin-inline: var(--default-grid-baseline);\n\t}\n}\n</style>\n"],sourceRoot:""}]);const a=s},37789:(e,t,n)=>{n.d(t,{default:()=>b});var o=n(85471),r=n(21777),i=n(53334),s=n(40083),a=n(77764);const l=(0,o.pM)({__name:"FilesHeaderNoteToRecipient",setup(e,t){let{expose:n}=t;const l=(0,o.KR)(),d=(0,o.EW)((()=>l.value?.attributes.note??"")),c=(0,o.EW)((()=>{const e=l.value?.owner,t=l.value?.attributes?.["owner-display-name"];return e!==(0,r.HW)()?.uid?{id:e,displayName:t}:null}));function p(e){l.value=e}return n({updateFolder:p}),{__sfc:!0,folder:l,note:d,user:c,updateFolder:p,t:i.t,NcNoteCard:s.A,NcUserBubble:a.A}}});var d=n(85072),c=n.n(d),p=n(97825),u=n.n(p),A=n(77659),f=n.n(A),m=n(55056),_=n.n(m),C=n(10540),h=n.n(C),v=n(41113),g=n.n(v),N=n(4532),x={};x.styleTagTransform=g(),x.setAttributes=_(),x.insert=f().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=h(),c()(N.A,x),N.A&&N.A.locals&&N.A.locals;const b=(0,n(14486).A)(l,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return n.note.length>0?t(n.NcNoteCard,{staticClass:"note-to-recipient",attrs:{type:"info"}},[n.user?t("p",{staticClass:"note-to-recipient__heading"},[e._v("\n\t\t"+e._s(n.t("files_sharing","Note from"))+"\n\t\t"),t(n.NcUserBubble,{attrs:{user:n.user.id,"display-name":n.user.displayName}})],1):t("p",{staticClass:"note-to-recipient__heading"},[e._v("\n\t\t"+e._s(n.t("files_sharing","Note:"))+"\n\t")]),e._v(" "),t("p",{staticClass:"note-to-recipient__text",domProps:{textContent:e._s(n.note)}})]):e._e()}),[],!1,null,"514f64d7",null).exports}}]);
//# sourceMappingURL=7789-7789.js.map?v=f36ebc7cddc369adc3e3