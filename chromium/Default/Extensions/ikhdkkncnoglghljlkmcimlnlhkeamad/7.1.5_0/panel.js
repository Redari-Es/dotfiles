!function(e){function t(t){for(var a,o,i=t[0],l=t[1],u=t[2],f=0,d=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={4:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;c.push([201,0,1]),n()}({10:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(0),r=n(46);function c(e,t){const n={};for(const a in e)e.hasOwnProperty(a)&&t.includes(a)&&(n[a]=e[a].newValue);return n}function o(e){const[t,n]=Object(a.useState)(null),o=Object(a.useMemo)((()=>Object.keys(e)),[e]),i=Object(a.useCallback)(((e,t)=>{n((n=>{if(!n)return n;const a="function"==typeof e?e(n):e;return!a||Object(r.a)(a)?n:(t||browser.storage.local.set(a),{...n,...a})}))}),[]);return Object(a.useEffect)((()=>{browser.storage.local.get(e).then((e=>{n(e)}))}),[e]),Object(a.useEffect)((()=>{const e=(e,t)=>{if("local"!==t)return;const n=c(e,o);Object(r.a)(n)||i(n,!0)};return browser.storage.onChanged.addListener(e),()=>{browser.storage.onChanged.removeListener(e)}}),[i,o]),[t,i]}},12:function(e,t,n){"use strict";var a=n(8),r=n(13),c=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;var i=function(e,t){if(Object(a.a)(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Object(r.a)(e))||(o.test(e)||!c.test(e)||null!=t&&e in Object(t))},l=n(32);function u(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],c=n.cache;if(c.has(r))return c.get(r);var o=e.apply(this,a);return n.cache=c.set(r,o)||c,o};return n.cache=new(u.Cache||l.a),n}u.Cache=l.a;var s=u;var f=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,d=/\\(\\)?/g,m=function(e){var t=s(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(f,(function(e,n,a,r){t.push(a?r.replace(d,"$1"):n||e)})),t})),p=n(14);var v=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r},b=p.a?p.a.prototype:void 0,h=b?b.toString:void 0;var O=function e(t){if("string"==typeof t)return t;if(Object(a.a)(t))return v(t,e)+"";if(Object(r.a)(t))return h?h.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n};var y=function(e){return null==e?"":O(e)};t.a=function(e,t){return Object(a.a)(e)?e:i(e,t)?[e]:m(y(e))}},13:function(e,t,n){"use strict";var a=n(33),r=n(30);t.a=function(e){return"symbol"==typeof e||Object(r.a)(e)&&"[object Symbol]"==Object(a.a)(e)}},15:function(e,t,n){"use strict";var a=n(13);t.a=function(e){if("string"==typeof e||Object(a.a)(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},16:function(e,t,n){"use strict";var a=n(18),r=function(){try{var e=Object(a.a)(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();t.a=r},201:function(e,t,n){e.exports=n(202)},202:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),i=n(89),l=(n(203),n(49)),u=n(41),s=n(43),f=n(74),d=n(4);i.a.onlyShowFocusOnTabs();const m=Object(f.a)(d.c,["autoClipboard"]);function p(){const[e,t]=Object(a.useState)(""),n=Object(a.useRef)();function c(e){var a;e?(t(e),null===(a=n.current)||void 0===a||a.select()):browser.storage.local.get(m).then((({autoClipboard:e})=>{var a;t(e?Object(s.a)():""),null===(a=n.current)||void 0===a||a.select()}))}return Object(u.a)(),Object(a.useEffect)((()=>{c(decodeURIComponent(window.location.search.slice(6)))}),[]),Object(a.useEffect)((()=>{browser.runtime.onMessage.addListener((e=>{switch(e.action){case"translateInPopup":c(e.data)}}))}),[]),r.a.createElement(l.a,{ref:n,queryText:e,setQueryText:t,textMode:!0})}window.addEventListener("DOMContentLoaded",(()=>{o.a.render(r.a.createElement(p,null),document.getElementById("app"))}))},203:function(e,t,n){},21:function(e,t,n){"use strict";const a={name:"百度翻译",value:"BaiDuWeb",icon:browser.runtime.getURL("baidu.ico")},r={name:"有道翻译",value:"YouDaoWeb",icon:browser.runtime.getURL("youdao.ico")},c={name:"谷歌翻译",value:"GoogleWeb",icon:browser.runtime.getURL("google.ico")};t.a=[c,a,r]},26:function(e,t,n){"use strict";var a=/^(?:0|[1-9]\d*)$/;t.a=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&a.test(e))&&e>-1&&e%1==0&&e<t}},29:function(e,t,n){"use strict";t.a=function(e,t){return e===t||e!=e&&t!=t}},31:function(e,t,n){"use strict";var a=function(){this.__data__=[],this.size=0},r=n(29);var c=function(e,t){for(var n=e.length;n--;)if(Object(r.a)(e[n][0],t))return n;return-1},o=Array.prototype.splice;var i=function(e){var t=this.__data__,n=c(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)};var l=function(e){var t=this.__data__,n=c(t,e);return n<0?void 0:t[n][1]};var u=function(e){return c(this.__data__,e)>-1};var s=function(e,t){var n=this.__data__,a=c(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this};function f(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}f.prototype.clear=a,f.prototype.delete=i,f.prototype.get=l,f.prototype.has=u,f.prototype.set=s;t.a=f},32:function(e,t,n){"use strict";var a=n(18),r=Object(a.a)(Object,"create");var c=function(){this.__data__=r?r(null):{},this.size=0};var o=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},i=Object.prototype.hasOwnProperty;var l=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return i.call(t,e)?t[e]:void 0},u=Object.prototype.hasOwnProperty;var s=function(e){var t=this.__data__;return r?void 0!==t[e]:u.call(t,e)};var f=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this};function d(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}d.prototype.clear=c,d.prototype.delete=o,d.prototype.get=l,d.prototype.has=s,d.prototype.set=f;var m=d,p=n(31),v=n(38);var b=function(){this.size=0,this.__data__={hash:new m,map:new(v.a||p.a),string:new m}};var h=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var O=function(e,t){var n=e.__data__;return h(t)?n["string"==typeof t?"string":"hash"]:n.map};var y=function(e){var t=O(this,e).delete(e);return this.size-=t?1:0,t};var g=function(e){return O(this,e).get(e)};var E=function(e){return O(this,e).has(e)};var j=function(e,t){var n=O(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this};function _(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}_.prototype.clear=b,_.prototype.delete=y,_.prototype.get=g,_.prototype.has=E,_.prototype.set=j;t.a=_},34:function(e,t,n){"use strict";t.a=function(e,t){for(var n=-1,a=t.length,r=e.length;++n<a;)e[r+n]=t[n];return e}},35:function(e,t,n){"use strict";var a=n(40),r=n(29),c=Object.prototype.hasOwnProperty;t.a=function(e,t,n){var o=e[t];c.call(e,t)&&Object(r.a)(o,n)&&(void 0!==n||t in e)||Object(a.a)(e,t,n)}},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),c=n(84),o=n(56),i=n(45);const l="自动检测",u=[{zhName:l,pinyin:"zidongjiance"}].concat(i),s=c.a.ofType(),f=(e,{handleClick:t,modifiers:n})=>n.matchesPredicate?r.a.createElement(o.u,{onClick:t,active:n.active,key:e.zhName,text:e.zhName}):null,d=(e,t,n,a)=>{const r=e.toLowerCase();return a?t.zhName===r:t.zhName.includes(r)||t.pinyin.includes(r)};function m(e){const t=Object(a.useMemo)((()=>e.addAuto?u:i),[e.addAuto]),[n,c]=Object(a.useState)(null);return Object(a.useEffect)((()=>{const n=e.lang||l,a=t.find((e=>e.zhName===n))||null;c(a)}),[t,e.lang]),r.a.createElement(s,{className:"lang-select",onItemSelect:t=>{e.setLang(t.zhName===l?"":t.zhName)},activeItem:n,items:t,itemRenderer:f,itemPredicate:d,noResults:"没有搜索结果",inputProps:{placeholder:"使用拼音或中文搜索"},popoverProps:{usePortal:!1,modifiers:e.offset?{offset:{offset:e.offset}}:void 0}},r.a.createElement(o.c,{rightIcon:"caret-down",text:n?n.zhName:"请选择",small:null==e.small||e.small}))}},39:function(e,t,n){"use strict";var a=n(12),r=n(15);t.a=function(e,t){for(var n=0,c=(t=Object(a.a)(t,e)).length;null!=e&&n<c;)e=e[Object(r.a)(t[n++])];return n&&n==c?e:void 0}},4:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return l}));const a={button:!0,modifierKey:!0,domainBlackList:[],domainWhiteList:[],textList:[{name:"忽略中文",readonly:!0,enabled:!1,value:"[\\u4e00-\\u9fa5]",description:"如果划选的文本当中包含中文，则不弹出翻译按钮或翻译结果。"},{name:"忽略字符",readonly:!0,enabled:!0,value:"^[\\s.\\-0-9()•+]+$",description:"如果划选的文本全部都是由数字、点、括号、空格、横线、加号和圆点（即 •，多用于密码框）组成的，则不弹出翻译按钮或翻译结果。"}],placement:"bottom"},r={darkMode:"system"},c={pdfAuto:!0},o={width:250,destination:"中文(简体)",secondDestination:"英语",showTextArea:!1,selectedAPIs:["BaiDuWeb"],autoClipboard:!0},i={region:"cn"},l={tipPanelSettingsClosed:!1}},40:function(e,t,n){"use strict";var a=n(16);t.a=function(e,t,n){"__proto__"==t&&a.a?Object(a.a)(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n(10),c=n(4);function o(e=document.body){const[t,n]=Object(r.a)(c.a),o=Object(a.useCallback)((e=>{n({darkMode:e})}),[n]),i=null==t?void 0:t.darkMode;return Object(a.useEffect)((()=>{if(e)switch(i){case"open":return void t(!0);case"close":return void t(!1);case"system":const e=window.matchMedia("(prefers-color-scheme: dark)");t(e.matches);const n=()=>{t(e.matches)};return e.addEventListener("change",n),()=>{e.removeEventListener("change",n)}}function t(t){null==e||e.classList[t?"add":"remove"]("bp3-dark")}}),[i,e]),{darkMode:i,setDarkMode:o}}},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){};let r,c=()=>{c=a,r=document.createElement("textarea"),r.style.position="absolute",r.style.top="-99999px",document.body.appendChild(r)};function o(e){c(),r.value=e,r.select(),document.execCommand("copy")}function i(){return c(),r.value="",r.focus(),document.execCommand("paste"),r.value}},49:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(56),o=n(3),i=n.n(o);function l(){window.location.reload()}function u(){return r.a.createElement(c.v,{description:"划词翻译内部出现了一个错误，这可能是划词翻译自动更新了导致的，刷新网页即可恢复。",action:r.a.createElement(c.c,{small:!0,onClick:l},"刷新网页")})}var s=n(10),f=n(4);const d={BaiDuWeb:"https://fanyi.baidu.com",YouDaoWeb:"http://fanyi.youdao.com",GoogleWeb:"https://translate.google."};function m(e){const{api:t,onRetry:n}=e;let a=d[t.value];const[o]=Object(s.a)(f.b);return"GoogleWeb"===t.value&&(a+=o?o.region:f.b.region),r.a.createElement(c.v,{description:r.a.createElement(r.a.Fragment,null,"查询结果时发生了网络错误，请确认您能否正常打开"," ",r.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},a),"。"),action:r.a.createElement(c.c,{small:!0,onClick:n},"重试")})}function p(e){return r.a.createElement(c.v,{description:"查询超时，请稍后重试。",action:r.a.createElement(c.c,{small:!0,onClick:e.onRetry},"重试")})}function v(e){return r.a.createElement(c.v,{description:e.api.name+"不支持源语种或目标语种。"})}function b(e){return r.a.createElement(c.v,{description:"查询结果时发生了未知错误，请稍后重试。",action:r.a.createElement(c.c,{small:!0,onClick:e.onRetry},"重试")})}function h(e){const{api:t,onRetry:n}=e;return r.a.createElement(c.v,{description:t.name+"返回了错误的数据，请点击下方按钮重试。",action:r.a.createElement(c.c,{small:!0,onClick:n},"重试")})}var O=n(43),y=n(21);const g=r.a.createElement(c.r,{icon:"volume-up",iconSize:12});function E(e){const t=e.uri;return r.a.createElement(c.c,{icon:g,small:!0,minimal:!0,disabled:!t,onClick:t?()=>async function(e){const t=await browser.runtime.sendMessage({action:"audio",url:e});(null==t?void 0:t.error)&&window.alert("播放失败，请稍后重试。")}(t):void 0,title:t?"朗读":"不支持此语种"})}function j(e){const{apiId:t,queryText:n,source:o,resultChanged:l,destination:s}=e,[f,d]=Object(a.useState)(!1),[g,j]=Object(a.useState)(null),[_,w]=Object(a.useState)(null),[k,C]=Object(a.useState)(0),[N,x]=Object(a.useState)("duplicate"),[S,P]=Object(a.useState)(),R=Object(a.useMemo)((()=>y.a.find((e=>e.value===t))),[t]),A=Object(a.useCallback)((()=>{C((e=>e+1))}),[]),I=Object(a.useCallback)((()=>{if(g){const e=[];g.phonetic&&e.push(g.phonetic.map((e=>`${e.name?e.name+" ":""}/${e.value}/`))),g.dict?e.push(...g.dict.map((e=>`${e.pos?e.pos+("GoogleWeb"===t?": ":" "):""}${e.terms.join(", ")}`))):g.result&&e.push(...g.result),Object(O.b)(e.join("\n")),x("tick"),P("success"),window.setTimeout((()=>{x("duplicate"),P(void 0)}),1e3)}}),[t,g]);return Object(a.useEffect)((()=>{if(!n)return;let e=!1;return(async()=>{let t;d(!0),j(null),w(null),l&&l();try{t=await browser.runtime.sendMessage({action:"translate",data:{apiCode:R.value,text:n,source:o}})}catch(t){if(e)return;w({code:"BACKGROUND_DISCONNECTED"})}e||(d(!1),t&&(j(t.data),w(t.error)),l&&l())})(),()=>{e=!0}}),[R.value,n,l,o,k,s]),r.a.createElement(c.e,{className:"result-block"},r.a.createElement("div",{className:"legend"},r.a.createElement("div",{className:"legend-left"},r.a.createElement("span",{className:"api-ico",style:{backgroundImage:`url(${R.icon})`}}),r.a.createElement(c.p,null,R.name),r.a.createElement("span",{className:"source"},null==g?void 0:g.from),!(null==g?void 0:g.phonetic)&&r.a.createElement(E,{uri:null==g?void 0:g.ttsURI})),r.a.createElement("div",null,!_&&!f&&r.a.createElement(r.a.Fragment,null,r.a.createElement(c.c,{onClick:I,icon:r.a.createElement(c.r,{icon:N,iconSize:12}),minimal:!0,small:!0,intent:S,title:"复制翻译结果"}),r.a.createElement(c.b,{disabled:!(null==g?void 0:g.link),target:"_blank",href:(null==g?void 0:g.link)||"",icon:r.a.createElement(c.r,{icon:"share",iconSize:12}),minimal:!0,small:!0,title:"查看详细结果"})))),r.a.createElement("div",{style:{display:f?"block":"none"}},r.a.createElement("p",{className:i()({"bp3-skeleton":f})},"1"),r.a.createElement("p",{className:i()({"bp3-skeleton":f})},"1"),r.a.createElement("p",{className:i()({"bp3-skeleton":f}),style:{width:"150px"}},"1")),_&&r.a.createElement("div",{className:"error"},function(e,t){const{api:n,onRetry:a}=t;switch(e){case"BACKGROUND_DISCONNECTED":return r.a.createElement(u,null);case"NETWORK_ERROR":return r.a.createElement(m,{api:n,onRetry:a});case"NETWORK_TIMEOUT":return r.a.createElement(p,{onRetry:a});case"UNSUPPORTED_LANG":return r.a.createElement(v,{api:n});case"API_SERVER_ERROR":return r.a.createElement(h,{api:n,onRetry:a});default:return r.a.createElement(b,{onRetry:a})}}(_.code,{api:R,onRetry:A})),(null==g?void 0:g.phonetic)&&r.a.createElement("div",{className:"phonetic"},g.phonetic.map(((e,t)=>r.a.createElement("div",{key:t,className:"phonetic-item"},e.name&&r.a.createElement("span",null,e.name),e.value&&r.a.createElement("span",null,`/${e.value}/`),e.ttsURI&&r.a.createElement(E,{uri:e.ttsURI}))))),g&&r.a.createElement("div",{className:"common-result"},g.dict&&r.a.createElement("div",{className:"dict"},g.dict.map(((e,n)=>r.a.createElement("p",{key:n},e.pos&&r.a.createElement("span",{className:"dict-pos"},e.pos,"GoogleWeb"===t?": ":""),e.terms.join(", "))))),!g.dict&&g.result&&r.a.createElement("div",{className:"general-result"},g.result.map(((e,n)=>r.a.createElement("p",{key:n},e,r.a.createElement(E,{uri:{text:e,apiId:t,source:null==g?void 0:g.to}})))))))}var _=n(74),w=n(75);const k=Object(_.a)(f.c,"selectedAPIs");function C(){const[e,t]=Object(s.a)(k),n=Object(a.useCallback)((e=>{const n=e.value;t((e=>{if(e.selectedAPIs.indexOf(n)>=0)return null;const t=e.selectedAPIs.slice();return t.push(n),{selectedAPIs:t}}))}),[t]);return r.a.createElement(r.a.Fragment,null,y.a.map((t=>r.a.createElement(c.u,{key:t.value,text:t.name,onClick:()=>n(t),disabled:!e||e.selectedAPIs.includes(t.value)}))))}var N=n(37);function x(){browser.runtime.sendMessage({action:"open options page"})}const S=Object(_.a)(f.c,"selectedAPIs","showTextArea","destination"),P=Object(_.a)(f.f,["tipPanelSettingsClosed"]);t.a=Object(a.forwardRef)((function(e,t){const{queryText:n,setQueryText:o,onResultChanged:i,headerLeft:l,headerRight:u,hoverTranslate:f,textMode:d=!1}=e,[m,p]=Object(s.a)(S),v=m||S,b=Object(a.useCallback)((e=>{p({destination:e})}),[p]),h=Object(a.useCallback)((e=>{p({showTextArea:e.target.checked})}),[p]),O=Object(a.useCallback)(((e,t)=>{const n=e.value;p((e=>{const a=[...e.selectedAPIs],r=a.indexOf(n);if(t){if(r<0)return a.push(n),{selectedAPIs:a}}else if(r>=0)return a.splice(r,1),{selectedAPIs:a}}))}),[p]),[g,E]=Object(a.useState)(""),[_,k]=Object(a.useState)(n),R=Object(a.useRef)(null),[A,I]=Object(a.useState)(!1),T=Object(a.useMemo)((()=>Object(w.a)((e=>{o(e)}),1e3)),[o]),z=Object(a.useCallback)((e=>{const t=e.target.value;k(t),T(t)}),[T]),M=Object(a.useCallback)((()=>{I((e=>!e))}),[]);Object(a.useEffect)((()=>{k(n)}),[n]),Object(a.useImperativeHandle)(t,(()=>({select:()=>{window.setTimeout((()=>{R.current&&(R.current.focus(),R.current.select())}))}})));const[L,D]=Object(a.useState)(!1),W=Object(a.useCallback)((()=>{D(!1),browser.storage.local.set({tipPanelSettingsClosed:!0})}),[]);return Object(a.useEffect)((()=>{browser.storage.local.get(P).then((({tipPanelSettingsClosed:e})=>{e||D(!0)}))}),[]),r.a.createElement("div",{id:"translate-panel"},r.a.createElement("div",{className:"header"},l,r.a.createElement("div",{className:"drag-block"}),r.a.createElement("div",{className:"right"},r.a.createElement(c.w,{enforceFocus:!1,content:r.a.createElement("div",{className:"bp3-text-small",style:{width:"200px",padding:"5px"}},"添加 / 隐藏翻译源、语种切换、鼠标悬浮取词开关和显示翻译文本开关在这里。",r.a.createElement("a",{onClick:W},"不再提示")),canEscapeKeyClose:!1,isOpen:L,usePortal:!1},r.a.createElement(c.c,{icon:r.a.createElement(c.r,{icon:"cog",iconSize:14}),small:!0,minimal:!0,className:"settings",onClick:M})),u)),r.a.createElement(c.h,{isOpen:A,keepChildrenMounted:!0},r.a.createElement(c.e,{className:"quick-settings"},r.a.createElement("div",null,r.a.createElement(N.a,{lang:g,setLang:E,addAuto:!0}),r.a.createElement(c.r,{icon:"arrow-right",iconSize:12,style:{margin:"0 10px"}}),r.a.createElement(N.a,{lang:v.destination,setLang:b,offset:d?-110:void 0})),r.a.createElement("div",null,y.a.map((e=>r.a.createElement(c.f,{inline:!0,label:e.name.slice(0,2),key:e.value,checked:v.selectedAPIs.includes(e.value),onChange:t=>O(e,t.target.checked)})))),!d&&r.a.createElement("div",null,r.a.createElement(c.f,{inline:!0,label:"显示文本框",checked:v.showTextArea,onChange:h}),f),r.a.createElement("a",{onClick:x,className:"bp3-text-small"},"打开完整设置"))),r.a.createElement("div",{className:"query-text",style:{display:d||!d&&v.showTextArea?"":"none"}},r.a.createElement(c.B,{fill:!0,inputRef:e=>R.current=e,value:_,onChange:z})),r.a.createElement("div",{className:"body"},!n&&r.a.createElement("p",null,"请输入需要翻译的文本。"),n&&(null==m?void 0:m.selectedAPIs.map((e=>r.a.createElement(j,{key:e,apiId:e,queryText:n,source:g,destination:v.destination,resultChanged:i})))),!(null==m?void 0:m.selectedAPIs.length)&&r.a.createElement(c.v,{className:"no-api",title:"你隐藏了所有翻译源",description:"请添加一个翻译源来显示翻译结果。",action:r.a.createElement(c.w,{usePortal:!1,content:r.a.createElement(c.t,null,r.a.createElement(C,null))},r.a.createElement(c.c,{icon:"add",text:"添加翻译源"}))})))}))},74:function(e,t,n){"use strict";var a=n(39),r=n(35),c=n(12),o=n(26),i=n(11),l=n(15);var u=function(e,t,n,a){if(!Object(i.a)(e))return e;for(var u=-1,s=(t=Object(c.a)(t,e)).length,f=s-1,d=e;null!=d&&++u<s;){var m=Object(l.a)(t[u]),p=n;if(u!=f){var v=d[m];void 0===(p=a?a(v,m,d):void 0)&&(p=Object(i.a)(v)?v:Object(o.a)(t[u+1])?[]:{})}Object(r.a)(d,m,p),d=d[m]}return e};var s=function(e,t,n){for(var r=-1,o=t.length,i={};++r<o;){var l=t[r],s=Object(a.a)(e,l);n(s,l)&&u(i,Object(c.a)(l,e),s)}return i};var f=function(e,t){return null!=e&&t in Object(e)},d=n(27),m=n(8),p=n(44);var v=function(e,t,n){for(var a=-1,r=(t=Object(c.a)(t,e)).length,i=!1;++a<r;){var u=Object(l.a)(t[a]);if(!(i=null!=e&&n(e,u)))break;e=e[u]}return i||++a!=r?i:!!(r=null==e?0:e.length)&&Object(p.a)(r)&&Object(o.a)(u,r)&&(Object(m.a)(e)||Object(d.a)(e))};var b=function(e,t){return null!=e&&v(e,t,f)};var h=function(e,t){return s(e,t,(function(t,n){return b(e,n)}))},O=n(34),y=n(14),g=y.a?y.a.isConcatSpreadable:void 0;var E=function(e){return Object(m.a)(e)||Object(d.a)(e)||!!(g&&e&&e[g])};var j=function e(t,n,a,r,c){var o=-1,i=t.length;for(a||(a=E),c||(c=[]);++o<i;){var l=t[o];n>0&&a(l)?n>1?e(l,n-1,a,r,c):Object(O.a)(c,l):r||(c[c.length]=l)}return c};var _=function(e){return(null==e?0:e.length)?j(e,1):[]};var w=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)},k=Math.max;var C=function(e,t,n){return t=k(void 0===t?e.length-1:t,0),function(){for(var a=arguments,r=-1,c=k(a.length-t,0),o=Array(c);++r<c;)o[r]=a[t+r];r=-1;for(var i=Array(t+1);++r<t;)i[r]=a[r];return i[t]=n(o),w(e,this,i)}};var N=function(e){return function(){return e}},x=n(16);var S=function(e){return e},P=x.a?function(e,t){return Object(x.a)(e,"toString",{configurable:!0,enumerable:!1,value:N(t),writable:!0})}:S,R=Date.now;var A=function(e){var t=0,n=0;return function(){var a=R(),r=16-(a-n);if(n=a,r>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(P);var I=function(e){return A(C(e,void 0,_),e+"")}((function(e,t){return null==e?{}:h(e,t)}));t.a=I},75:function(e,t,n){"use strict";var a=n(11),r=n(17),c=function(){return r.a.Date.now()},o=n(13),i=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;var d=function(e){if("number"==typeof e)return e;if(Object(o.a)(e))return NaN;if(Object(a.a)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Object(a.a)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||s.test(e)?f(e.slice(2),n?2:8):l.test(e)?NaN:+e},m=Math.max,p=Math.min;t.a=function(e,t,n){var r,o,i,l,u,s,f=0,v=!1,b=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function O(t){var n=r,a=o;return r=o=void 0,f=t,l=e.apply(a,n)}function y(e){return f=e,u=setTimeout(E,t),v?O(e):l}function g(e){var n=e-s;return void 0===s||n>=t||n<0||b&&e-f>=i}function E(){var e=c();if(g(e))return j(e);u=setTimeout(E,function(e){var n=t-(e-s);return b?p(n,i-(e-f)):n}(e))}function j(e){return u=void 0,h&&r?O(e):(r=o=void 0,l)}function _(){var e=c(),n=g(e);if(r=arguments,o=this,s=e,n){if(void 0===u)return y(s);if(b)return clearTimeout(u),u=setTimeout(E,t),O(s)}return void 0===u&&(u=setTimeout(E,t)),l}return t=d(t)||0,Object(a.a)(n)&&(v=!!n.leading,i=(b="maxWait"in n)?m(d(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),_.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=s=o=u=void 0},_.flush=function(){return void 0===u?l:j(c())},_}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(7),r=n(52),c="undefined"!=typeof document?new r.a(document.documentElement,a.FOCUS_DISABLED):{isActive:function(){return!0},start:function(){return!0},stop:function(){return!0}},o={alwaysShowFocus:function(){return c.stop()},isActive:function(){return c.isActive()},onlyShowFocusOnTabs:function(){return c.start()}}}});