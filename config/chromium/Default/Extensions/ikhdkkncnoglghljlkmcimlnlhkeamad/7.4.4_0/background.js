!function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={8:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;a.push([248,0,1,7,5]),r()}({129:function(e,t,r){"use strict";var n=r(12),o=r(21),a=function(){return o.a.Date.now()},i=r(30),s=Math.max,c=Math.min;t.a=function(e,t,r){var o,u,d,l,f,b,p=0,w=!1,v=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var r=o,n=u;return o=u=void 0,p=t,l=e.apply(n,r)}function h(e){return p=e,f=setTimeout(O,t),w?y(e):l}function g(e){var r=e-b;return void 0===b||r>=t||r<0||v&&e-p>=d}function O(){var e=a();if(g(e))return j(e);f=setTimeout(O,function(e){var r=t-(e-b);return v?c(r,d-(e-p)):r}(e))}function j(e){return f=void 0,m&&o?y(e):(o=u=void 0,l)}function L(){var e=a(),r=g(e);if(o=arguments,u=this,b=e,r){if(void 0===f)return h(b);if(v)return clearTimeout(f),f=setTimeout(O,t),y(b)}return void 0===f&&(f=setTimeout(O,t)),l}return t=Object(i.a)(t)||0,Object(n.a)(r)&&(w=!!r.leading,d=(v="maxWait"in r)?s(Object(i.a)(r.maxWait)||0,t):d,m="trailing"in r?!!r.trailing:m),L.cancel=function(){void 0!==f&&clearTimeout(f),p=0,o=b=u=f=void 0},L.flush=function(){return void 0===f?l:j(a())},L}},202:function(e,t,r){"use strict";var n=r(58),o=r(61);t.a=function(e,t){return e&&Object(n.a)(e,Object(o.a)(t))}},248:function(e,t,r){e.exports=r(320)},249:function(e,t){var r=["blocking","requestHeaders"],n=/Chrome\/(\d+)/.exec(navigator.userAgent);(n&&Number(n[1]))>71&&r.push("extraHeaders"),chrome.webRequest.onBeforeSendHeaders.addListener((function(e){var t=e.requestHeaders,r={name:"Referer",value:"http://fanyi.youdao.com"},n=t.findIndex((function(e){return"referer"===e.name.toLowerCase()}));return n>=0?t.splice(n,1,r):t.push(r),{requestHeaders:t}}),{urls:["http://fanyi.youdao.com/translate_o*"],types:["xmlhttprequest"]},r)},250:function(e,t){chrome.webRequest.onHeadersReceived.addListener((function(e){var t=e.responseHeaders,r=t.findIndex((e=>"content-security-policy"===e.name.toLowerCase()));return-1!==r&&t.splice(r,1),{responseHeaders:t}}),{urls:["https://www.deepl.com/translator"],types:["sub_frame"]},["blocking","responseHeaders"])},30:function(e,t,r){"use strict";var n=r(12),o=r(34),a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;t.a=function(e){if("number"==typeof e)return e;if(Object(o.a)(e))return NaN;if(Object(n.a)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Object(n.a)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=s.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):i.test(e)?NaN:+e}},32:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(85);const o=[];function a(e,t,r,n="local"){return browser.storage[n].get(e).then((e=>{(r||t)(e,!0)})).then((()=>{const r=Object.keys(e);o.push({defaultOptions:e,onChange:t,area:n,keys:r})})),()=>{const r=o.findIndex((r=>r.onChange===t&&r.area===n&&r.defaultOptions===e));return r>=0&&(o.splice(r,1),!0)}}browser.storage.onChanged.addListener(((e,t)=>{o.forEach((r=>{if(r.area!==t)return;const o=function(e,t){const r={};for(const n in e)e.hasOwnProperty(n)&&t.includes(n)&&(r[n]=e[n].newValue);return r}(e,r.keys);Object(n.a)(o)||r.onChange(o)}))}))},320:function(e,t,r){"use strict";r.r(t);r(249),r(250);var n=r(110),o=r(6),a=r(86);const i=Object(a.a)(o.a,["destination","secondDestination"]);var s=r(32);const c=Object(a.a)(o.a,["audioVolume","audioRate"]);let u,d=o.a.audioVolume,l=o.a.audioRate;Object(s.a)(c,(e=>{null!=e.audioRate&&(l=e.audioRate,u&&(u.playbackRate=l)),null!=e.audioVolume&&(d=e.audioVolume,u&&(u.volume=d/100))}));var f,b,p=r(38);let w,v;browser.windows.onRemoved.addListener((e=>{w===e&&(w=void 0)})),(null===(b=null===(f=null===window||void 0===window?void 0:window.chrome)||void 0===f?void 0:f.windows)||void 0===b?void 0:b.onBoundsChanged)&&chrome.windows.onBoundsChanged.addListener((e=>{e.id===w&&browser.storage.local.set({panelPos:Object(a.a)(e,["width","height","left","top"])})}));const m=Object(a.a)(o.a,["panelPos"]);async function y(e=""){if(void 0!==w&&void 0!==v)browser.tabs.sendMessage(v,{action:"translateInPopup",data:e}),browser.windows.update(w,{focused:!0});else{const t=await browser.storage.local.get(m),r=await browser.windows.create({url:browser.runtime.getURL("panel.html")+"?text="+encodeURIComponent(e),type:"popup",...t.panelPos});0,w=r.id,v=r.tabs&&r.tabs[0].id}}async function h(e="",t,r=!0){var n;if(t||(t=null===(n=await Object(p.a)())||void 0===n?void 0:n.id))try{await browser.tabs.sendMessage(t,"translate")}catch(t){r&&y(e)}else r&&y(e)}var g=r(23),O=r(70),j=r(49);async function L(e){return"normal"===(await browser.windows.get(e)).type}async function x(e){if(!e)return void browser.browserAction.setIcon({path:"logogray.png"});if(Object(j.a)(e))return void browser.browserAction.setIcon({path:"logo.png"});const{domainBlackList:t,domainWhiteList:r}=await browser.storage.local.get(Object(a.a)(o.a,["domainBlackList","domainWhiteList"])),n=Object(g.c)(e,t,r);browser.browserAction.setIcon({path:n?"logo.png":"logogray.png"})}async function P(e){let t,r;if(e)t=e.tabId,r=e.windowId;else{const e=await Object(p.a)();if(!e)return void x();t=e.id,r=e.windowId}(null==r||await L(r))&&x(await Object(O.a)(t))}P(),browser.tabs.onActivated.addListener((e=>{P(e)})),browser.tabs.onUpdated.addListener(((e,t)=>{"loading"===t.status&&P()})),browser.windows.onFocusChanged.addListener((async e=>{e!==browser.windows.WINDOW_ID_NONE&&await L(e)&&P()})),browser.storage.onChanged.addListener(((e,t)=>{"local"===t&&(e.hasOwnProperty("domainBlackList")||e.hasOwnProperty("domainWhiteList"))&&P()}));var k=r(130),A=r(60),C=r(53);const R=Object(a.a)(o.b,["user"]);async function I(){const{user:e}=await browser.storage.local.get(R);return!!e&&e.vipActivated}const D=browser.runtime.getURL("settings.html");browser.runtime.onMessage.addListener((e=>{switch(e.action){case"open options page":return void(e.suffix?browser.tabs.create({url:D+e.suffix}):browser.runtime.openOptionsPage());case"translate":return async function(e){const t=Object(n.a)(e.apiCode);if(!t)return{data:null,error:"不支持的翻译接口 "+e.apiCode};const r=await browser.storage.local.get(i);return t.translate(e.text,r.destination===r.secondDestination?r.destination:[r.destination,r.secondDestination],{source:e.source}).then((e=>({data:e,error:null})),(e=>({data:null,error:{code:null==e?void 0:e.code}})))}(e.data);case"audio":return async function(e){let t;if(u&&u.pause(),"string"==typeof e)t=e;else{const r=Object(n.a)(e.apiId);if(!r)return Promise.resolve({data:null,error:"不支持的翻译接口 "+e.apiId});try{t=await r.getTTS(e.text,e.source)}catch(e){return Promise.resolve({data:null,error:"获取语音地址时出错"})}}return new Promise((e=>{u=new Audio(t),u.volume=d/100,u.playbackRate=l,u.addEventListener("canplay",(()=>{null==u||u.play(),e(void 0)})),u.addEventListener("error",(()=>{e({error:"播放错误"})}))}))}(e.url);case"open panel":return void y();case"update badge":return void P();case"save along panel size":return async function(){if(null==w)return!1;{const e=await browser.windows.get(w);return browser.storage.local.set({panelPos:Object(a.a)(e,["width","height","left","top"])}),!0}}();case"save history record":return void I().then((t=>{k.a.add(e.record,t)}));case"save favorite":return void I().then((t=>{const r=e.record.results;r&&(e.record.dir=Object(A.b)(r)),A.a.add(e.record,t)}));case"is text in favorites":return Object(A.c)(e.text);case"delete record in favorites":return void I().then((t=>{A.a.deleteByKey("text",e.text,t)}));case"write to clipboard":return void Object(C.b)(e.text)}}));const S=browser.runtime.getURL("/pdf-viewer/web/viewer.html"),B=Object(a.a)(o.a,["pdfAuto"]);function T(e){const t=new URL(e);return S+"?file="+encodeURIComponent(e)+t.hash}function U(e){return{redirectUrl:T(e.url)}}function W(e){var t;if("GET"!==e.method)return;let r,n;return null===(t=e.responseHeaders)||void 0===t||t.some((e=>{var t;switch(e.name.toLowerCase()){case"content-type":r=e.value;break;case"content-disposition":n=null===(t=e.value)||void 0===t?void 0:t.trim();break;default:return!(!r||!n)}})),r?(r=r.toLowerCase().split(";",1)[0].trim(),"application/pdf"!==r||n&&!n.startsWith("inline")?void 0:{redirectUrl:T(e.url)}):void 0}Object(s.a)(B,(e=>{null!=e.pdfAuto&&(e.pdfAuto?(browser.webRequest.onBeforeRequest.hasListener(U)||browser.webRequest.onBeforeRequest.addListener(U,{urls:["ftp://*/*.pdf","ftp://*/*.PDF","file://*/*.pdf","file://*/*.PDF"],types:["main_frame","sub_frame"]},["blocking"]),browser.webRequest.onHeadersReceived.hasListener(W)||browser.webRequest.onHeadersReceived.addListener(W,{urls:["http://*/*","https://*/*"],types:["main_frame","sub_frame"]},["blocking","responseHeaders"])):(browser.webRequest.onBeforeRequest.removeListener(U),browser.webRequest.onHeadersReceived.removeListener(W)))}));var N=r(149);var _=function(e){return Object(N.a)(e,4)};const M={YouDao:"YouDaoWeb",BaiDu:"BaiDuWeb",Google:"GoogleWeb",GoogleCN:"GoogleWeb"};browser.runtime.onInstalled.addListener((async e=>{var t,r,n;if("update"===e.reason&&"6"===(null===(t=e.previousVersion)||void 0===t?void 0:t[0])){const e=await browser.storage.local.get(),t={};if(t.pdfAuto=null!=e.pdf&&e.pdf,e.disableSelection)t.domainBlackList=[{host:"*",path:"/*"}];else{const r=e.excludeDomains;Array.isArray(r)&&(t.domainBlackList=r.map((e=>({host:`*${"."===e[0]?"":"."}${e}`,path:"/*"}))))}null!=e.showBtn&&(t.button=e.showBtn);const r=e.defaultApi||"GoogleCN",n=M[r];n&&(t.selectedAPIs=[n]);const a=_(o.a.textList);let i=!1;e.ignoreChinese&&(a[0].enabled=!0,i=!0),e.ignoreNumLike||(a[1].enabled=!1,i=!0),i&&(t.textList=a),await browser.storage.local.clear(),await browser.storage.local.set(t)}if("update"===e.reason&&"7"===(null===(r=e.previousVersion)||void 0===r?void 0:r[0])&&Number(null===(n=e.previousVersion)||void 0===n?void 0:n[2])<=3){const{modifierKey:e}=await browser.storage.local.get("modifierKey");!1!==e&&await browser.storage.local.set({modifierKeys:["ctrl"],modifierKeyPressedAction:"selection",modifierKeyTranslate:!0}),await browser.storage.local.remove(["region","tipNewGoogleAPI","modifierKey"])}}));[{id:"translate",title:"翻译这段文本(&Z)",contexts:["selection"]},{id:"open-pdf-in-viewer",title:"在划词翻译中打开此 PDF (&P)",contexts:["all"],documentUrlPatterns:["chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai/*"]},{id:"open-link-in-viewer",title:"在划词翻译中打开此 PDF (&P)",contexts:["link"],targetUrlPatterns:["*://*/*.pdf","*://*/*.PDF","*://*/*.pdf?*","*://*/*.PDF?*","ftp://*/*.pdf","ftp://*/*.PDF","ftp://*/*.pdf?*","ftp://*/*.PDF?*","file://*/*.pdf","file://*/*.PDF","file://*/*.pdf?*","file://*/*.PDF?*"]}].forEach((e=>{browser.contextMenus.create(e)})),browser.contextMenus.onClicked.addListener(((e,t)=>{switch(e.menuItemId){case"translate":const r=e.selectionText,n=e.pageUrl||"";r&&(n.startsWith("chrome")||n.startsWith("about")?y(r):h(r,null==t?void 0:t.id));break;case"open-pdf-in-viewer":const o=e.srcUrl;o&&!o.startsWith("about:")?browser.tabs.create({url:T(o)}):Object(j.b)("?_blocked");break;case"open-link-in-viewer":e.linkUrl&&browser.tabs.create({url:T(e.linkUrl)})}})),browser.commands.onCommand.addListener((async e=>{var t;switch(e){case"panel":y();break;case"translate":h("",void 0,!1);break;case"translateWithPopup":const e=null===(t=await Object(p.a)())||void 0===t?void 0:t.id;if(e)try{y(await browser.tabs.sendMessage(e,"getSelectionText"))}catch(e){}}}));var q=r(129),E=r(67),H=r(93);const F=Object(a.a)(o.b,"user"),K={...o.a,...Object(a.a)(o.b,["optionsSyncAt"])},V=Object(q.a)(H.c,5e3);let G;const $="sync alarm",z="notify for options sync",J=Object(a.a)(o.a,["notifySyncOptions"]);async function Y(){let e;try{e=await Object(H.b)()}catch(e){return}if("covered"===e&&await browser.permissions.contains({permissions:["notifications"]})){const{notifySyncOptions:e}=await browser.storage.local.get(J);if(e)try{await browser.notifications.create(z,{type:"basic",iconUrl:"logo.png",title:"划词翻译设置已更新",message:"已将划词翻译设置更新至最新版本。",buttons:[{title:"不再显示"}]})}catch(e){browser.storage.local.set({disabledNofiByBrowserUI:!0})}}}function Z(){browser.notifications.onButtonClicked.addListener(((e,t)=>{e===z&&0===t&&(browser.storage.local.set({notifySyncOptions:!1}),browser.notifications.clear(z))}))}function Q(e){e.name===$&&Y()}!async function(){await browser.permissions.contains({permissions:["notifications"]})?Z():browser.permissions.onAdded.addListener((e=>{var t;(null===(t=e.permissions)||void 0===t?void 0:t.includes("notifications"))&&Z()}))}(),Object(s.a)(F,((e,t)=>{var r;(null===(r=e.user)||void 0===r?void 0:r.vipActivated)?(G=Object(s.a)(K,(e=>{Object.prototype.hasOwnProperty.call(e,"optionsSyncAt")||V()}),E.a),browser.alarms.create($,{periodInMinutes:60}),browser.alarms.onAlarm.addListener(Q),t&&Y()):(G&&G(),browser.alarms.clear($),browser.alarms.onAlarm.removeListener(Q))}))},36:function(e,t,r){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,o,a;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;for(o=n;0!=o--;){var i=a[o];if(!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r}},38:function(e,t,r){"use strict";async function n(){return(await browser.tabs.query({active:!0,highlighted:!0,windowId:browser.windows.WINDOW_ID_CURRENT}))[0]}r.d(t,"a",(function(){return n}))},49:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));const n=browser.runtime.getURL("/pdf-viewer/web/viewer.html");function o(e){return e.startsWith(n)}function a(e=""){browser.tabs.create({url:n+e})}},53:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return s}));var n=r(67);let o,a=()=>{a=n.a,o=document.createElement("textarea"),o.style.position="absolute",o.style.top="-99999px",document.body.appendChild(o)};function i(e){a(),o.value=e,o.select(),document.execCommand("copy")}function s(){return a(),o.value="",o.focus(),document.execCommand("paste"),o.value}},6:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));const n={button:!0,buttonAutoClose:!1,domainBlackList:[],domainWhiteList:[],textList:[{name:"忽略中文",readonly:!0,enabled:!1,value:"[\\u4e00-\\u9fa5]",description:"如果划选的文本当中包含中文，则不显示翻译按钮或翻译结果。"},{name:"忽略字符",readonly:!0,enabled:!0,value:"^[\\s.\\-0-9()•+]+$",description:"如果划选的文本全部都是由数字、点、括号、空格、横线、加号和圆点（即 •，多用于密码框）组成的，则不显示翻译按钮或翻译结果。"}],placement:"bottom",pin:!1,pinPos:null,darkMode:"system",pdfAuto:!0,width:250,destination:"中文(简体)",secondDestination:"英语",showTextArea:!1,selectedAPIs:["BaiDuWeb"],selectedExternalLinks:[],autoClipboard:!0,autoPlay:!1,autoCopy:!1,recentUseLangFrom:[""],recentUseLangTo:["中文(简体)"],tipPanelSettingsClosed:!1,tipBlockedPDFClosed:!1,panelPos:{width:270,height:500,left:100,top:100},panelSize:"small",notifySyncOptions:!0,sourceTransformNoBr:!1,sourceTransformNCaml:!1,sourceTransformNoComment:!1,historyEnabled:!1,favoritesEnabled:!0,modifierKeys:[],modifierKeyPressedAction:"",modifierKeyTranslate:!1,modifierKeyLink:!1,audioVolume:100,audioRate:1},o={user:null,optionsSyncAt:null,disabledNofiByBrowserUI:!1,favoritesSyncAt:null,historiesSyncAt:null}},61:function(e,t,r){"use strict";var n=r(44);t.a=function(e){return"function"==typeof e?e:n.a}},67:function(e,t,r){"use strict";t.a=function(){}},70:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var n=r(38);async function o(e){var t;try{let t;if(t=void 0===e?(await browser.tabs.executeScript({code:"window.location.href",runAt:"document_start"}))[0]:(await browser.tabs.executeScript(e,{code:"window.location.href",runAt:"document_start"}))[0],t.startsWith("moz-extension"))throw new Error;return t}catch(r){if(void 0===e&&!(e=null===(t=await Object(n.a)())||void 0===t?void 0:t.id))return;try{return await browser.tabs.sendMessage(e,"get tab url")}catch(e){}}}function a(){const e=e=>{if("get tab url"===e)return Promise.resolve(window.location.href)};return browser.runtime.onMessage.addListener(e),()=>{browser.runtime.onMessage.removeListener(e)}}}});