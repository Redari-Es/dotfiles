!function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);f.length;)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={2:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=c;s.push([157,0,7]),r()}({10:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return a}));var n=r(0),o=r(46);function s(e,t){const r={};for(const n in e)e.hasOwnProperty(n)&&t.includes(n)&&(r[n]=e[n].newValue);return r}function a(e){const[t,r]=Object(n.useState)(null),a=Object(n.useMemo)((()=>Object.keys(e)),[e]),i=Object(n.useCallback)(((e,t)=>{r((r=>{if(!r)return r;const n="function"==typeof e?e(r):e;return!n||Object(o.a)(n)?r:(t||browser.storage.local.set(n),{...r,...n})}))}),[]);return Object(n.useEffect)((()=>{browser.storage.local.get(e).then((e=>{r(e)}))}),[e]),Object(n.useEffect)((()=>{const e=(e,t)=>{if("local"!==t)return;const r=s(e,a);Object(o.a)(r)||i(r,!0)};return browser.storage.onChanged.addListener(e),()=>{browser.storage.onChanged.removeListener(e)}}),[i,a]),[t,i]}},157:function(e,t,r){e.exports=r(206)},206:function(e,t,r){"use strict";r.r(t);var n=r(83),o=(r(158),r(215)),s=r(4);const a=new n.a,i=new n.c,c=new n.b;function u(e){switch(e){case"YouDaoWeb":return i;case"BaiDuWeb":return a;case"GoogleWeb":return c}}browser.storage.local.get(s.b).then((({region:e})=>{c.region=e})),browser.storage.onChanged.addListener(((e,t)=>{if("local"!==t)return;const r=Object(o.a)(e,["region","newValue"]);null!=r&&(c.region=r)}));var d=r(74);const l=Object(d.a)(s.c,["destination","secondDestination"]);let f,p,b;async function w(e=""){if(void 0!==p&&void 0!==b)browser.tabs.sendMessage(b,{action:"translateInPopup",data:e}),browser.windows.update(p,{focused:!0});else{const t=await browser.windows.create({url:browser.runtime.getURL("panel.html")+"?text="+encodeURIComponent(e),type:"popup",width:(await browser.storage.local.get({width:s.c.width})).width,height:500});p=t.id,b=t.tabs&&t.tabs[0].id}}async function h(e="",t,r=!0){t||(t=(await async function(){return(await browser.tabs.query({active:!0,highlighted:!0,windowId:browser.windows.WINDOW_ID_CURRENT}))[0]}()).id);try{await browser.tabs.sendMessage(t,"translate")}catch(t){r&&w(e)}}browser.windows.onRemoved.addListener((e=>{p===e&&(p=void 0)})),browser.runtime.onMessage.addListener((e=>{switch(e.action){case"open options page":return void browser.runtime.openOptionsPage();case"translate":return async function(e){const t=u(e.apiCode);if(!t)return{data:null,error:"不支持的翻译接口 "+e.apiCode};const r=await browser.storage.local.get(l);return t.translate(e.text,r.destination===r.secondDestination?r.destination:[r.destination,r.secondDestination],{source:e.source}).then((e=>({data:e,error:null})),(e=>({data:null,error:e})))}(e.data);case"audio":return async function(e){let t;if(f&&f.pause(),"string"==typeof e)t=e;else{const r=u(e.apiId);if(!r)return Promise.resolve({data:null,error:"不支持的翻译接口 "+e.apiId});try{t=await r.getTTS(e.text,e.source)}catch(e){return Promise.resolve({data:null,error:"获取语音地址时出错"})}}return new Promise((e=>{f=new Audio(t),f.addEventListener("canplay",(()=>{null==f||f.play(),e()})),f.addEventListener("error",(()=>{e({error:"播放错误"})}))}))}(e.url);case"open panel":return void w()}}));var g=r(22),m=r(70);async function v(e){!async function(e){if(!e)return void browser.browserAction.setBadgeText({text:"off"});const{domainBlackList:t,domainWhiteList:r}=await browser.storage.local.get(Object(d.a)(s.e,["domainBlackList","domainWhiteList"])),n=Object(g.c)(e,t,r);browser.browserAction.setBadgeText({text:n?"":"off"})}(await Object(m.a)(e))}v(),browser.tabs.onActivated.addListener((e=>{v(e.tabId)})),browser.tabs.onUpdated.addListener(((e,t)=>{"loading"===t.status&&v()})),browser.storage.onChanged.addListener(((e,t)=>{"local"===t&&(e.hasOwnProperty("domainBlackList")||e.hasOwnProperty("domainWhiteList"))&&v()}));var y=r(10);const L=browser.runtime.getURL("/pdf-viewer/web/viewer.html"),P=Object.keys(s.d);function O(e){return L+"?file="+encodeURIComponent(e)}function x(e){return{redirectUrl:O(e.url)}}function j(e){var t;if("GET"!==e.method)return;let r;return null===(t=e.responseHeaders)||void 0===t||t.some((e=>{if("content-type"===e.name.toLowerCase())return r=e.value,!0})),r?(r=r.toLowerCase().split(";",1)[0].trim(),"application/pdf"===r?{redirectUrl:O(e.url)}:void 0):void 0}function k(){browser.webRequest.onBeforeRequest.hasListener(x)||browser.webRequest.onBeforeRequest.addListener(x,{urls:["ftp://*/*.pdf","ftp://*/*.PDF","file://*/*.pdf","file://*/*.PDF"],types:["main_frame","sub_frame"]},["blocking"]),browser.webRequest.onHeadersReceived.hasListener(j)||browser.webRequest.onHeadersReceived.addListener(j,{urls:["http://*/*","https://*/*"],types:["main_frame","sub_frame"]},["blocking","responseHeaders"])}function D(){browser.webRequest.onBeforeRequest.removeListener(x),browser.webRequest.onHeadersReceived.removeListener(j)}(async()=>{(await browser.storage.local.get(s.d)).pdfAuto?k():D(),browser.storage.onChanged.addListener(((e,t)=>{if("local"!==t)return;const r=Object(y.b)(e,P);r.hasOwnProperty("pdfAuto")&&(r.pdfAuto?k():D())}))})();var R=r(216);const C={YouDao:"YouDaoWeb",BaiDu:"BaiDuWeb",Google:"GoogleWeb",GoogleCN:"GoogleWeb"};browser.runtime.onInstalled.addListener((async e=>{var t;if("update"===e.reason&&"6"===(null===(t=e.previousVersion)||void 0===t?void 0:t[0])){const e=await browser.storage.local.get(),t={};if(t.pdfAuto=null!=e.pdf&&e.pdf,e.disableSelection)t.domainBlackList=[{host:"*",path:"/*"}];else{const r=e.excludeDomains;Array.isArray(r)&&(t.domainBlackList=r.map((e=>({host:`*${"."===e[0]?"":"."}${e}`,path:"/*"}))))}null!=e.showBtn&&(t.button=e.showBtn);const r=e.defaultApi||"GoogleCN",n=C[r];n&&(t.selectedAPIs=[n],"Google"===r&&(t.region="com"));const o=Object(R.a)(s.e.textList);let a=!1;e.ignoreChinese&&(o[0].enabled=!0,a=!0),e.ignoreNumLike||(o[1].enabled=!1,a=!0),a&&(t.textList=o),await browser.storage.local.clear(),browser.storage.local.set(t)}}));[{id:"translate",title:"翻译这段文本",contexts:["selection"]},{id:"open-pdf-in-viewer",title:"在划词翻译中打开此 PDF",contexts:["all"],documentUrlPatterns:["chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai/*"]},{id:"open-link-in-viewer",title:"在划词翻译中打开此 PDF",contexts:["link"],targetUrlPatterns:["*://*/*.pdf","*://*/*.PDF","*://*/*.pdf?*","*://*/*.PDF?*","ftp://*/*.pdf","ftp://*/*.PDF","ftp://*/*.pdf?*","ftp://*/*.PDF?*","file://*/*.pdf","file://*/*.PDF","file://*/*.pdf?*","file://*/*.PDF?*"]}].forEach((e=>{browser.contextMenus.create(e)})),browser.contextMenus.onClicked.addListener(((e,t)=>{switch(e.menuItemId){case"translate":const r=e.selectionText,n=e.pageUrl||"";r&&(n.startsWith("chrome")||n.startsWith("about")?w(r):h(r,null==t?void 0:t.id));break;case"open-pdf-in-viewer":const o=e.srcUrl;o&&browser.tabs.create({url:O(o)});break;case"open-link-in-viewer":e.linkUrl&&browser.tabs.create({url:O(e.linkUrl)})}})),browser.commands.onCommand.addListener((e=>{switch(e){case"panel":w();break;case"translate":h("",void 0,!1)}}))},22:function(e,t,r){"use strict";function n(e){return`${e.host}${e.path}`}function o(e){const t=e.match(/^([^:]+):\/\/([^/]+)?(\/.*)?$/);if(!t)return;let r=t[2]||"";const n=r.indexOf(":");n>=0&&(r=r.slice(0,n));let o=t[3]||"";const s=o.indexOf("#");if(s>=0&&(o=o.slice(0,s)),!r.startsWith(".")){if(!o){if(!r)return;o="/"}return{host:r,path:o}}}function s(e,t){return new RegExp("^"+e.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace("*",".*").replace(/^\.\*\\\./,"(.*\\.)?")+"$").test(t)}function a(e,t){return new RegExp("^"+e.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace(/\*/g,".*")+"$").test(t)}function i(e,t){let r;if(r="string"==typeof t?o(t):t,r)return{isHostMatch:{ruleHost:e.host,urlHost:r.host,matches:s(e.host,r.host)},isPathMatch:{rulePath:e.path,urlPath:r.path,matches:a(e.path,r.path)}}}function c(e,t,r){let n,i;n="string"==typeof e?o(e):e;let c=!1,u=!1;if(n){const e=e=>{const t=function(e,t){let r;if(r="string"==typeof t?o(t):t,r)return s(e.host,r.host)&&a(e.path,r.path)}(e,n);return t&&(i=e),t};c=r.some(e),c||(u=t.some(e))}return{urlParts:n,matchedRule:i,whiteListMatched:c,blackListMatched:u}}function u(e,t,r){const n=c(e,t,r);return!n.urlParts||n.whiteListMatched||!n.blackListMatched}r.d(t,"e",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return u}))},4:function(e,t,r){"use strict";r.d(t,"e",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"f",(function(){return c}));const n={button:!0,modifierKey:!0,domainBlackList:[],domainWhiteList:[],textList:[{name:"忽略中文",readonly:!0,enabled:!1,value:"[\\u4e00-\\u9fa5]",description:"如果划选的文本当中包含中文，则不弹出翻译按钮或翻译结果。"},{name:"忽略字符",readonly:!0,enabled:!0,value:"^[\\s.\\-0-9()•+]+$",description:"如果划选的文本全部都是由数字、点、括号、空格、横线、加号和圆点（即 •，多用于密码框）组成的，则不弹出翻译按钮或翻译结果。"}],placement:"bottom"},o={darkMode:"system"},s={pdfAuto:!0},a={width:250,destination:"中文(简体)",secondDestination:"英语",showTextArea:!1,selectedAPIs:["BaiDuWeb"],autoClipboard:!0},i={region:"cn"},c={tipPanelSettingsClosed:!1}},70:function(e,t,r){"use strict";async function n(e){try{return void 0===e?(await browser.tabs.executeScript({code:"window.location.href",runAt:"document_start"}))[0]:(await browser.tabs.executeScript(e,{code:"window.location.href",runAt:"document_start"}))[0]}catch(e){}}r.d(t,"a",(function(){return n}))}});