!function(e){function t(t){for(var a,c,o=t[0],i=t[1],s=t[2],m=0,d=[];m<o.length;m++)c=o[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);d.length;)d.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={13:0},l=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=i;l.push([307,0,1,2,4,3,6]),n()}({23:function(e,t,n){"use strict";function a(e){return`${e.host}${e.path}`}function r(e){const t=e.match(/^([^:]+):\/\/([^/]+)?(\/.*)?$/);if(!t)return;let n=t[2]||"";const a=n.indexOf(":");a>=0&&(n=n.slice(0,a));let r=t[3]||"";const l=r.indexOf("#");if(l>=0&&(r=r.slice(0,l)),!n.startsWith(".")){if(!r){if(!n)return;r="/"}return{host:n,path:r}}}function l(e,t){return new RegExp("^"+e.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace("*",".*").replace(/^\.\*\\\./,"(.*\\.)?")+"$").test(t)}function c(e,t){return new RegExp("^"+e.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace(/\*/g,".*")+"$").test(t)}function o(e,t){let n;if(n="string"==typeof t?r(t):t,n)return{isHostMatch:{ruleHost:e.host,urlHost:n.host,matches:l(e.host,n.host)},isPathMatch:{rulePath:e.path,urlPath:n.path,matches:c(e.path,n.path)}}}function i(e,t,n){let a,o;a="string"==typeof e?r(e):e;let i=!1,s=!1;if(a){const e=e=>{const t=function(e,t){let n;if(n="string"==typeof t?r(t):t,n)return l(e.host,n.host)&&c(e.path,n.path)}(e,a);return t&&(o=e),t};i=n.some(e),i||(s=t.some(e))}return{urlParts:a,matchedRule:o,whiteListMatched:i,blackListMatched:s}}function s(e,t,n){const a=i(e,t,n);return!a.urlParts||a.whiteListMatched||!a.blackListMatched}n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}))},307:function(e,t,n){e.exports=n(322)},308:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),c=n.n(l),o=n(86),i=n(213),s=n(173),u=n(70),m=n(6),d=n(10),h=n(23),p=n(56),f=n(63),b=n(53),E=n(49);i.a.onlyShowFocusOnTabs();const w=Object(o.a)(m.a,["autoClipboard"]),v=browser.runtime.getURL("/")+"settings.html#/#%E5%BF%AB%E6%8D%B7%E9%94%AE",g=browser.runtime.getURL("/")+"settings.html#/#%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F",O=Object(o.a)(m.a,["domainBlackList","domainWhiteList"]),x=window.navigator.userAgent.toLowerCase().includes("edg")?"Microsoft Edge":"Chrome";function j(){var e,t;const[n,l]=Object(a.useState)(),[c,o]=Object(d.a)(O),[i,m]=Object(a.useState)(),[p,f]=Object(a.useState)(!1),b=(e,t)=>{o((n=>{const a=n[t],r=a.findIndex((t=>t.host===e.host&&t.path===e.path));r>=0&&a.splice(r,1)}))},w=(e,t)=>{o((n=>{n[t].push(e)}))};Object(a.useEffect)((()=>{Object(u.a)().then(l)}),[]),Object(a.useEffect)((()=>{m(c&&n?Object(h.b)(n,c.domainBlackList,c.domainWhiteList):void 0)}),[c,n]);const v=Object(a.useMemo)((()=>!!n&&Object(E.a)(n)),[n]),x=null==i?void 0:i.matchedRule,j=(null===(e=null==i?void 0:i.urlParts)||void 0===e?void 0:e.host)||"",y=(null===(t=null==i?void 0:i.urlParts)||void 0===t?void 0:t.path)||"",k=v||i&&i.whiteListMatched||i&&!i.matchedRule?"启用":"禁用",L=null==c?void 0:c.domainBlackList.some((e=>"*"===e.host&&"/*"===e.path));return r.a.createElement("div",{style:{padding:"8px 8px 0 8px"}},r.a.createElement(s.d,{onClick:()=>{f((e=>!e))},fill:!0,text:"禁用"===k&&L&&i?"已在所有网站中禁用网页划词":"此页面已"+k+"网页划词",rightIcon:r.a.createElement(s.t,{icon:p?"chevron-up":"chevron-down",iconSize:12}),minimal:!0,small:!0}),r.a.createElement(s.i,{isOpen:p},!i&&r.a.createElement("span",{className:"bp3-text-muted bp3-text-small"},"在浏览器的内置页面中，只能使用划词后在右键菜单中选择“翻译这段文本”的翻译方式。"),v&&r.a.createElement("span",{className:"bp3-text-muted bp3-text-small"},"在划词翻译内置的 PDF 阅读器中，网页划词功能始终可用。"),i&&!v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{marginTop:"10px"}},r.a.createElement("div",null,"当前网站：",j),r.a.createElement("div",null,"当前页面：",y)),i.whiteListMatched&&x&&r.a.createElement("div",null,r.a.createElement("p",{className:"bp3-text-muted bp3-text-small"},"此网址命中了白名单规则 ",r.a.createElement(s.h,null,Object(h.e)(x)),"。"),r.a.createElement("p",{className:"url-actions"},r.a.createElement(s.d,{small:!0,onClick:()=>b(x,"domainWhiteList")},"删除命中的规则"))),!i.whiteListMatched&&i.blackListMatched&&x&&r.a.createElement("div",null,r.a.createElement("p",{className:"bp3-text-muted bp3-text-small"},L?"你已经在所有网站中禁用了网页划词":r.a.createElement(r.a.Fragment,null,"此网址命中了黑名单规则"," ",r.a.createElement(s.h,null,Object(h.e)(x))),"，但你仍然可以使用",r.a.createElement("a",{href:g,target:"_blank",rel:"noreferrer"},"这几种方式"),"获取翻译结果。"),r.a.createElement("p",{className:"url-actions"},r.a.createElement(s.d,{small:!0,onClick:()=>b(L?{host:"*",path:"/*"}:x,"domainBlackList")},L?"重新启用网页划词":"删除命中的规则"),r.a.createElement(s.d,{small:!0,onClick:()=>w({host:j,path:y},"domainWhiteList")},"在当前页面中启用"))),!i.whiteListMatched&&!i.blackListMatched&&r.a.createElement("div",null,r.a.createElement("p",{className:"bp3-text-muted bp3-text-small"},"此网址没有命中任何规则。"),r.a.createElement("p",{className:"url-actions"},r.a.createElement(s.d,{small:!0,onClick:()=>w({host:j,path:"/*"},"domainBlackList")},"在当前网站中禁用"),r.a.createElement(s.d,{small:!0,onClick:()=>w({host:j,path:y},"domainBlackList")},"在当前页面中禁用")))),i&&!L&&!v&&r.a.createElement("p",null,r.a.createElement(s.d,{fill:!0,small:!0,onClick:()=>w({host:"*",path:"/*"},"domainBlackList")},"在所有网站中禁用网页划词"))))}function y(){browser.runtime.sendMessage({action:"open panel"})}function k(){const[e,t]=Object(a.useState)(!1),[n,l]=Object(a.useState)("");return Object(a.useEffect)((()=>{browser.commands.getAll().then((e=>{e.some((e=>{if("panel"===e.name)return l(e.shortcut||""),!0}))}))}),[]),r.a.createElement("div",{style:{padding:"0 8px 8px 8px"}},r.a.createElement(s.d,{onClick:()=>{t((e=>!e))},fill:!0,intent:n?"primary":"warning",text:"试一试独立翻译窗口吧",rightIcon:r.a.createElement(s.t,{icon:n?e?"chevron-up":"chevron-down":"error",iconSize:12}),minimal:!0,small:!0}),r.a.createElement(s.i,{isOpen:e},r.a.createElement("p",{className:"bp3-text-muted"},"您的浏览器支持全局快捷键！您可以在浏览器以外的地方按下快捷键",n&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement("kbd",null,n)," "),"来翻译剪切板内的文本，无需切换回您的浏览器。"),n&&r.a.createElement("div",{className:"bp3-text-muted"},"您可以在",r.a.createElement("a",{href:v,target:"_blank",rel:"noreferrer"},"设置"),"中修改独立翻译窗口的快捷键。"),!n&&r.a.createElement(s.e,{title:"未设置独立窗口快捷键",intent:"warning"},"快捷键已被占用或清除，请前往",r.a.createElement("a",{href:v,target:"_blank",rel:"noreferrer"},"设置"),"中为独立窗口分配一个快捷键，并将作用域由“在 ",x," ","中”改为“全局”。")))}n(200),n(308);c.a.render(r.a.createElement((function(){const[e,t]=Object(a.useState)(""),n=Object(a.useRef)(null);return Object(p.a)(),Object(a.useEffect)((()=>{browser.storage.local.get(w).then((({autoClipboard:e})=>{var a;t(e?Object(b.a)():""),null===(a=n.current)||void 0===a||a.select()}))}),[]),r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(s.l,null),r.a.createElement(f.b,{ref:n,queryText:e,showTextArea:!0,textMode:!0}),r.a.createElement(s.l,null),r.a.createElement("div",{className:"openBtn"},r.a.createElement(s.d,{small:!0,onClick:()=>{Object(E.b)()}},"内置 PDF 阅读器"),r.a.createElement(s.d,{small:!0,onClick:y},"独立翻译窗口")),r.a.createElement(s.l,null),r.a.createElement(k,null))}),null),document.getElementById("app"))},38:function(e,t,n){"use strict";async function a(){return(await browser.tabs.query({active:!0,highlighted:!0,windowId:browser.windows.WINDOW_ID_CURRENT}))[0]}n.d(t,"a",(function(){return a}))},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l}));const a=browser.runtime.getURL("/pdf-viewer/web/viewer.html");function r(e){return e.startsWith(a)}function l(e=""){browser.tabs.create({url:a+e})}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l}));var a=n(38);async function r(e){var t;try{let t;if(t=void 0===e?(await browser.tabs.executeScript({code:"window.location.href",runAt:"document_start"}))[0]:(await browser.tabs.executeScript(e,{code:"window.location.href",runAt:"document_start"}))[0],t.startsWith("moz-extension"))throw new Error;return t}catch(n){if(void 0===e&&!(e=null===(t=await Object(a.a)())||void 0===t?void 0:t.id))return;try{return await browser.tabs.sendMessage(e,"get tab url")}catch(e){}}}function l(){const e=e=>{if("get tab url"===e)return Promise.resolve(window.location.href)};return browser.runtime.onMessage.addListener(e),()=>{browser.runtime.onMessage.removeListener(e)}}}});