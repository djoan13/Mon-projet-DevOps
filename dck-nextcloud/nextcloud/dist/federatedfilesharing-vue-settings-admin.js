(()=>{"use strict";var e,r,n,a={44925:(e,r,n)=>{var a=n(85471),o=n(21777),s=n(53334),i=n(32981),d=n(85168),l=n(63814),c=n(56760),h=n(65043),p=n(32073),u=n(88837);n(51257);const f={name:"AdminSettings",components:{NcCheckboxRadioSwitch:p.A,NcSettingsSection:u.A},data:()=>({outgoingServer2serverShareEnabled:(0,i.C)("federatedfilesharing","outgoingServer2serverShareEnabled"),incomingServer2serverShareEnabled:(0,i.C)("federatedfilesharing","incomingServer2serverShareEnabled"),outgoingServer2serverGroupShareEnabled:(0,i.C)("federatedfilesharing","outgoingServer2serverGroupShareEnabled"),incomingServer2serverGroupShareEnabled:(0,i.C)("federatedfilesharing","incomingServer2serverGroupShareEnabled"),federatedGroupSharingSupported:(0,i.C)("federatedfilesharing","federatedGroupSharingSupported"),lookupServerEnabled:(0,i.C)("federatedfilesharing","lookupServerEnabled"),lookupServerUploadEnabled:(0,i.C)("federatedfilesharing","lookupServerUploadEnabled"),federatedTrustedShareAutoAccept:(0,i.C)("federatedfilesharing","federatedTrustedShareAutoAccept"),internalOnly:(0,i.C)("federatedfilesharing","internalOnly"),sharingFederatedDocUrl:(0,i.C)("federatedfilesharing","sharingFederatedDocUrl")}),methods:{async update(e,r){await(0,c.C5)();const n=(0,l.KT)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"files_sharing",key:e}),a=r?"yes":"no";try{const{data:e}=await h.Ay.post(n,{value:a});this.handleResponse({status:e.ocs?.meta?.status})}catch(e){this.handleResponse({errorMessage:t("federatedfilesharing","Unable to update federated files sharing config"),error:e})}},async handleResponse(e){let{status:t,errorMessage:r,error:n}=e;"ok"!==t&&((0,d.Qg)(r),console.error(r,n))}}};var g=n(85072),v=n.n(g),S=n(97825),b=n.n(S),m=n(77659),A=n.n(m),k=n(55056),w=n.n(k),y=n(10540),_=n.n(y),C=n(41113),E=n.n(C),x=n(67550),N={};N.styleTagTransform=E(),N.setAttributes=w(),N.insert=A().bind(null,"head"),N.domAPI=b(),N.insertStyleElement=_(),v()(x.A,N),x.A&&x.A.locals&&x.A.locals;const R=(0,n(14486).A)(f,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{name:e.t("federatedfilesharing","Federated Cloud Sharing"),description:e.t("federatedfilesharing","Adjust how people can share between servers. This includes shares between people on this server as well if they are using federated sharing."),"doc-url":e.sharingFederatedDocUrl}},[t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.outgoingServer2serverShareEnabled},on:{"update:checked":[function(t){e.outgoingServer2serverShareEnabled=t},function(t){return e.update("outgoing_server2server_share_enabled",e.outgoingServer2serverShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people on this server to send shares to other servers (this option also allows WebDAV access to public shares)"))+"\n\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.incomingServer2serverShareEnabled},on:{"update:checked":[function(t){e.incomingServer2serverShareEnabled=t},function(t){return e.update("incoming_server2server_share_enabled",e.incomingServer2serverShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people on this server to receive shares from other servers"))+"\n\t")]),e._v(" "),e.federatedGroupSharingSupported?t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.outgoingServer2serverGroupShareEnabled},on:{"update:checked":[function(t){e.outgoingServer2serverGroupShareEnabled=t},function(t){return e.update("outgoing_server2server_group_share_enabled",e.outgoingServer2serverGroupShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people on this server to send shares to groups on other servers"))+"\n\t")]):e._e(),e._v(" "),e.federatedGroupSharingSupported?t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.incomingServer2serverGroupShareEnabled},on:{"update:checked":[function(t){e.incomingServer2serverGroupShareEnabled=t},function(t){return e.update("incoming_server2server_group_share_enabled",e.incomingServer2serverGroupShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people on this server to receive group shares from other servers"))+"\n\t")]):e._e(),e._v(" "),t("fieldset",[t("legend",[e._v(e._s(e.t("federatedfilesharing","The lookup server is only available for global scale.")))]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.lookupServerEnabled,disabled:""},on:{"update:checked":[function(t){e.lookupServerEnabled=t},function(t){return e.update("lookupServerEnabled",e.lookupServerEnabled)}]}},[e._v("\n\t\t\t"+e._s(e.t("federatedfilesharing","Search global and public address book for people"))+"\n\t\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.lookupServerUploadEnabled,disabled:""},on:{"update:checked":[function(t){e.lookupServerUploadEnabled=t},function(t){return e.update("lookupServerUploadEnabled",e.lookupServerUploadEnabled)}]}},[e._v("\n\t\t\t"+e._s(e.t("federatedfilesharing","Allow people to publish their data to a global and public address book"))+"\n\t\t")])],1),e._v(" "),t("div",{staticClass:"settings-subsection"},[t("h3",{staticClass:"settings-subsection__name"},[e._v("\n\t\t\t"+e._s(e.t("federatedfilesharing","Trusted federation"))+"\n\t\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.federatedTrustedShareAutoAccept},on:{"update:checked":[function(t){e.federatedTrustedShareAutoAccept=t},function(t){return e.update("federatedTrustedShareAutoAccept",e.federatedTrustedShareAutoAccept)}]}},[e._v("\n\t\t\t"+e._s(e.t("federatedfilesharing","Automatically accept shares from trusted federated accounts and groups by default"))+"\n\t\t")])],1)],1)}),[],!1,null,"13fbdd67",null).exports;n.nc=(0,o.aV)(),a.Ay.mixin({methods:{t:s.Tl}}),(0,i.C)("federatedfilesharing","internalOnly",!1)||(new(a.Ay.extend(R))).$mount("#vue-admin-federated")},67550:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(71354),a=r.n(n),o=r(76314),s=r.n(o)()(a());s.push([e.id,"\n.settings-subsection[data-v-13fbdd67] {\n\tmargin-top: 20px;\n}\n.settings-subsection__name[data-v-13fbdd67] {\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 16px;\n\tfont-weight: bold;\n\tmax-width: 900px;\n\tmargin-top: 0;\n}\n","",{version:3,sources:["webpack://./apps/federatedfilesharing/src/components/AdminSettings.vue"],names:[],mappings:";AAqIA;CACA,gBAAA;AACA;AAEA;CACA,oBAAA;CACA,mBAAA;CACA,uBAAA;CACA,eAAA;CACA,iBAAA;CACA,gBAAA;CACA,aAAA;AACA",sourcesContent:["\x3c!--\n - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors\n - SPDX-License-Identifier: AGPL-3.0-or-later\n--\x3e\n<template>\n\t<NcSettingsSection :name=\"t('federatedfilesharing', 'Federated Cloud Sharing')\"\n\t\t:description=\"t('federatedfilesharing', 'Adjust how people can share between servers. This includes shares between people on this server as well if they are using federated sharing.')\"\n\t\t:doc-url=\"sharingFederatedDocUrl\">\n\t\t<NcCheckboxRadioSwitch type=\"switch\"\n\t\t\t:checked.sync=\"outgoingServer2serverShareEnabled\"\n\t\t\t@update:checked=\"update('outgoing_server2server_share_enabled', outgoingServer2serverShareEnabled)\">\n\t\t\t{{ t('federatedfilesharing', 'Allow people on this server to send shares to other servers (this option also allows WebDAV access to public shares)') }}\n\t\t</NcCheckboxRadioSwitch>\n\n\t\t<NcCheckboxRadioSwitch type=\"switch\"\n\t\t\t:checked.sync=\"incomingServer2serverShareEnabled\"\n\t\t\t@update:checked=\"update('incoming_server2server_share_enabled', incomingServer2serverShareEnabled)\">\n\t\t\t{{ t('federatedfilesharing', 'Allow people on this server to receive shares from other servers') }}\n\t\t</NcCheckboxRadioSwitch>\n\n\t\t<NcCheckboxRadioSwitch v-if=\"federatedGroupSharingSupported\"\n\t\t\ttype=\"switch\"\n\t\t\t:checked.sync=\"outgoingServer2serverGroupShareEnabled\"\n\t\t\t@update:checked=\"update('outgoing_server2server_group_share_enabled', outgoingServer2serverGroupShareEnabled)\">\n\t\t\t{{ t('federatedfilesharing', 'Allow people on this server to send shares to groups on other servers') }}\n\t\t</NcCheckboxRadioSwitch>\n\n\t\t<NcCheckboxRadioSwitch v-if=\"federatedGroupSharingSupported\"\n\t\t\ttype=\"switch\"\n\t\t\t:checked.sync=\"incomingServer2serverGroupShareEnabled\"\n\t\t\t@update:checked=\"update('incoming_server2server_group_share_enabled', incomingServer2serverGroupShareEnabled)\">\n\t\t\t{{ t('federatedfilesharing', 'Allow people on this server to receive group shares from other servers') }}\n\t\t</NcCheckboxRadioSwitch>\n\n\t\t<fieldset>\n\t\t\t<legend>{{ t('federatedfilesharing', 'The lookup server is only available for global scale.') }}</legend>\n\n\t\t\t<NcCheckboxRadioSwitch type=\"switch\"\n\t\t\t\t:checked.sync=\"lookupServerEnabled\"\n\t\t\t\tdisabled\n\t\t\t\t@update:checked=\"update('lookupServerEnabled', lookupServerEnabled)\">\n\t\t\t\t{{ t('federatedfilesharing', 'Search global and public address book for people') }}\n\t\t\t</NcCheckboxRadioSwitch>\n\n\t\t\t<NcCheckboxRadioSwitch type=\"switch\"\n\t\t\t\t:checked.sync=\"lookupServerUploadEnabled\"\n\t\t\t\tdisabled\n\t\t\t\t@update:checked=\"update('lookupServerUploadEnabled', lookupServerUploadEnabled)\">\n\t\t\t\t{{ t('federatedfilesharing', 'Allow people to publish their data to a global and public address book') }}\n\t\t\t</NcCheckboxRadioSwitch>\n\t\t</fieldset>\n\n\t\t\x3c!-- Trusted server handling --\x3e\n\t\t<div class=\"settings-subsection\">\n\t\t\t<h3 class=\"settings-subsection__name\">\n\t\t\t\t{{ t('federatedfilesharing', 'Trusted federation') }}\n\t\t\t</h3>\n\t\t\t<NcCheckboxRadioSwitch type=\"switch\"\n\t\t\t\t:checked.sync=\"federatedTrustedShareAutoAccept\"\n\t\t\t\t@update:checked=\"update('federatedTrustedShareAutoAccept', federatedTrustedShareAutoAccept)\">\n\t\t\t\t{{ t('federatedfilesharing', 'Automatically accept shares from trusted federated accounts and groups by default') }}\n\t\t\t</NcCheckboxRadioSwitch>\n\t\t</div>\n\t</NcSettingsSection>\n</template>\n\n<script>\nimport { loadState } from '@nextcloud/initial-state'\nimport { showError } from '@nextcloud/dialogs'\nimport { generateOcsUrl } from '@nextcloud/router'\nimport { confirmPassword } from '@nextcloud/password-confirmation'\nimport axios from '@nextcloud/axios'\nimport NcCheckboxRadioSwitch from '@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js'\nimport NcSettingsSection from '@nextcloud/vue/dist/Components/NcSettingsSection.js'\n\nimport '@nextcloud/password-confirmation/dist/style.css'\n\nexport default {\n\tname: 'AdminSettings',\n\n\tcomponents: {\n\t\tNcCheckboxRadioSwitch,\n\t\tNcSettingsSection,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\toutgoingServer2serverShareEnabled: loadState('federatedfilesharing', 'outgoingServer2serverShareEnabled'),\n\t\t\tincomingServer2serverShareEnabled: loadState('federatedfilesharing', 'incomingServer2serverShareEnabled'),\n\t\t\toutgoingServer2serverGroupShareEnabled: loadState('federatedfilesharing', 'outgoingServer2serverGroupShareEnabled'),\n\t\t\tincomingServer2serverGroupShareEnabled: loadState('federatedfilesharing', 'incomingServer2serverGroupShareEnabled'),\n\t\t\tfederatedGroupSharingSupported: loadState('federatedfilesharing', 'federatedGroupSharingSupported'),\n\t\t\tlookupServerEnabled: loadState('federatedfilesharing', 'lookupServerEnabled'),\n\t\t\tlookupServerUploadEnabled: loadState('federatedfilesharing', 'lookupServerUploadEnabled'),\n\t\t\tfederatedTrustedShareAutoAccept: loadState('federatedfilesharing', 'federatedTrustedShareAutoAccept'),\n\t\t\tinternalOnly: loadState('federatedfilesharing', 'internalOnly'),\n\t\t\tsharingFederatedDocUrl: loadState('federatedfilesharing', 'sharingFederatedDocUrl'),\n\t\t}\n\t},\n\tmethods: {\n\t\tasync update(key, value) {\n\t\t\tawait confirmPassword()\n\n\t\t\tconst url = generateOcsUrl('/apps/provisioning_api/api/v1/config/apps/{appId}/{key}', {\n\t\t\t\tappId: 'files_sharing',\n\t\t\t\tkey,\n\t\t\t})\n\n\t\t\tconst stringValue = value ? 'yes' : 'no'\n\t\t\ttry {\n\t\t\t\tconst { data } = await axios.post(url, {\n\t\t\t\t\tvalue: stringValue,\n\t\t\t\t})\n\t\t\t\tthis.handleResponse({\n\t\t\t\t\tstatus: data.ocs?.meta?.status,\n\t\t\t\t})\n\t\t\t} catch (e) {\n\t\t\t\tthis.handleResponse({\n\t\t\t\t\terrorMessage: t('federatedfilesharing', 'Unable to update federated files sharing config'),\n\t\t\t\t\terror: e,\n\t\t\t\t})\n\t\t\t}\n\t\t},\n\t\tasync handleResponse({ status, errorMessage, error }) {\n\t\t\tif (status !== 'ok') {\n\t\t\t\tshowError(errorMessage)\n\t\t\t\tconsole.error(errorMessage, error)\n\t\t\t}\n\t\t},\n\t},\n}\n<\/script>\n<style scoped>\n.settings-subsection {\n\tmargin-top: 20px;\n}\n\n.settings-subsection__name {\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 16px;\n\tfont-weight: bold;\n\tmax-width: 900px;\n\tmargin-top: 0;\n}\n</style>\n"],sourceRoot:""}]);const i=s}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=a,e=[],s.O=(t,r,n,a)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],a=e[c][2];for(var i=!0,d=0;d<r.length;d++)(!1&a||o>=a)&&Object.keys(s.O).every((e=>s.O[e](r[d])))?r.splice(d--,1):(i=!1,a<o&&(o=a));if(i){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>e+"-"+e+".js?v="+{2441:"fc741cf57e9647f370a3",5862:"142cd48ca8ec32e57725",7874:"cd16576625b0c6e0d277"}[e],s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="nextcloud:",s.l=(e,t,a,o)=>{if(r[e])r[e].push(t);else{var i,d;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var h=l[c];if(h.getAttribute("src")==e||h.getAttribute("data-webpack")==n+a){i=h;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",n+a),i.src=e),r[e]=[t];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(u);var a=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),d&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.j=5098,(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{s.b=document.baseURI||self.location.href;var e={5098:0};s.f.j=(t,r)=>{var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=s.p+s.u(t),i=new Error;s.l(o,(r=>{if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,o=r[0],i=r[1],d=r[2],l=0;if(o.some((t=>0!==e[t]))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(d)var c=d(s)}for(t&&t(r);l<o.length;l++)a=o[l],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(c)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),s.nc=void 0;var i=s.O(void 0,[4208],(()=>s(44925)));i=s.O(i)})();
//# sourceMappingURL=federatedfilesharing-vue-settings-admin.js.map?v=da61b768518b8fab815d