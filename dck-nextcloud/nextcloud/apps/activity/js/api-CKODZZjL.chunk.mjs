import{l as t}from"./logger-ByCR-oAD.chunk.mjs";function a(){window.OCA=window.OCA??{},window.OCA.Activity={...window.OCA.Activity,__sidebar_actions:window.OCA.Activity?.__sidebar_actions??[],__sidebar_factories:window.OCA.Activity?.__sidebar_factories??[],__sidebar_filters:window.OCA.Activity?.__sidebar_filters??[],registerSidebarAction(i){window.OCA.Activity.__sidebar_actions.push(i),t.debug("Registered new sidebar action")},registerSidebarEntries(i){window.OCA.Activity.__sidebar_factories.push(i),t.debug("Registered new sidebar actions factory")},registerSidebarFilter(i){window.OCA.Activity.__sidebar_filters.push(i)}},t.info("Activity API registered")}function n(){return window.OCA?.Activity?.__sidebar_actions??[]}async function o(i){if(window.OCA?.Activity?.__sidebar_factories===void 0)return[];const e=window.OCA.Activity.__sidebar_factories.map(async r=>await r(i));return(await Promise.all(e)).flat()}function _(){return window.OCA?.Activity?.__sidebar_filters??[]}export{o as a,_ as b,n as g,a as r};
