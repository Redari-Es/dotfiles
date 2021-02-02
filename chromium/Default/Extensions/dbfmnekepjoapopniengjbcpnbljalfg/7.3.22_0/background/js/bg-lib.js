"use strict";infinity.imageXhr=null,infinity.settingInitOrReset=function(n,t,i){try{var e=infinity.get(n);for(var r in e||(e={},infinity.set(n,e)),t){if(i)infinity.setting(r,t[r]);else(e=infinity.get(n)).hasOwnProperty(r)||infinity.setting(r,t[r])}}catch(n){}},infinity.clear=function(){chrome.storage.local.clear(function(){for(var n in localStorage)localStorage.removeItem(n);window.location.href=window.location.href})},infinity.arrayBuffer2base64=function(n){for(var t,i="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(n),a=r.byteLength,o=a%3,f=a-o,s=0;s<f;s+=3)i+=e[(16515072&(t=r[s]<<16|r[s+1]<<8|r[s+2]))>>18]+e[(258048&t)>>12]+e[(4032&t)>>6]+e[63&t];return 1==o?i+=e[(252&(t=r[f]))>>2]+e[(3&t)<<4]+"==":2==o&&(i+=e[(64512&(t=r[f]<<8|r[1+f]))>>10]+e[(1008&t)>>4]+e[(15&t)<<2]+"="),i},infinity.image2base64=function(n,i){try{if("http"==n.substr(0,4)||"chrome-extension://"==n.substr(0,19)||"chrome://extension-icon/"==n.substr(0,24)||"blob:"==n.substr(0,5)||"filesystem:"==n.substr(0,11)||"/"==n.substr(0,1))infinity.imageXhr=new XMLHttpRequest,infinity.imageXhr.open("GET",n,!0),infinity.imageXhr.responseType="arraybuffer",infinity.imageXhr.timeout=15e3,infinity.imageXhr.onload=function(n){var t=infinity.arrayBuffer2base64(n.currentTarget.response);i&&i(t)},infinity.imageXhr.onerror=function(){i&&i(!1)},infinity.imageXhr.ontimeout=function(n){i&&i(!1)},infinity.imageXhr.send();else{var t=n.indexOf(";base64,");if(0<t)var e=n.substr(t+8,n.length);else e=n;i&&i(e)}}catch(n){i&&i(!1)}},infinity.base64toBlobUrl=function(n,t,i){try{t=t||"",i=i||512;for(var e=atob(n),r=[],a=0;a<e.length;a+=i){for(var o=e.slice(a,a+i),f=new Array(o.length),s=0;s<o.length;s++)f[s]=o.charCodeAt(s);var l=new Uint8Array(f);r.push(l)}var c=new Blob(r,{type:t});return window.URL.createObjectURL(c)}catch(n){return}},infinity.image2blob=function(n,i){infinity.image2base64(n,function(n){var t=infinity.base64toBlobUrl(n);i&&i(t)})},infinity.randomId=function(n){return i=new Uint8Array((t||40)/2),window.crypto.getRandomValues(i),n+(new Date).getTime().toString(32)+function(n){for(var t="",i="abcdefghijklmnopqrstuvwxyz0123456789",e=0;e<n;e++)t+=i.charAt(Math.floor(Math.random()*i.length));return t}(18);var t,i},infinity.uploadBase64Img=function(f,s){if(0!=f.src.indexOf("http")){var n=f.tokenTimeout||0;infinity.getQiniuUploadToken(n,function(n,t){if(n)s(n);else{var i=f.scope,e=f.info,r=new FormData;r.append("token",t);var a=i+e+infinity.randomId(f.pre)+".png";r.append("key",a),r.append("file",function(n){for(var t=n.replace(/^data:(image\/.+);base64,/,""),i=atob(t),e=i.length,r=new Array(e);e--;)r[e]=i.charCodeAt(e);return new Blob([new Uint8Array(r)],{type:"image/png"})}(f.src));var o=new XMLHttpRequest;o.open("POST","http://upload.qiniu.com",!0),o.timeout=f.timeout||0,o.onload=function(n){try{var t=n.target,i=JSON.parse(t.response);if(200!==t.status)throw new Error(i.error);var e="https://infinitypro-img.infinitynewtab.com/"+i.key;s(null,e)}catch(n){s(n,null)}},o.ontimeout=function(n){s(new Error("上传失败"),null)},o.onerror=function(n){s(new Error("上传失败"),null)},o.send(r)}})}else s(null,f.src)},infinity.getQiniuUploadToken=function(){var e=void 0,r=void 0,a=[],o=!1;function f(n,t){for(var i=void 0;i=a.pop();)i(n,t)}return function(n,t){var i=new Date;e&&i-r<72e5?t(null,e):(a.push(t),o||(o=!0,$.ajax({url:"https://infinity-api.infinitynewtab.com/createQiniuToken?rt="+(new Date).getTime(),type:"GET",dataType:"json",timeout:n}).done(function(n){200==n.status?(r=new Date,f(null,e=n.token)):f(new Error("获取token失败"))}).fail(function(){f(new Error("获取token失败"))}).always(function(){o=!1})))}}(),infinity.deepCopy=function(n){return JSON.parse(JSON.stringify(n))},infinity.versionCompare=function(n,t){if(n===t)return 0;n=n.split("."),t=t.split(".");for(var i=0,e=n.length;i<e;i++){var r=parseInt(n[i],10),a=parseInt(t[i],10);if(r<a)return-1;if(a<r)return 1}return 0},infinity.alarms={__init__:function(){var n=this;setInterval(function(){n.getAll(function(e){var r=n.__checks__,a=Date.now();Object.keys(e).forEach(function(n){var t=e[n];if(t&&!(a-t.lastTime<60*t.periodInMinutes*1e3)){var i=r[n];if(i){try{i.eventFire()}catch(n){}t.lastTime=a}}}),n.__save__()})},1e4)},__alarms__:null,__checks__:{},create:function(t,i,e){var r=this;if(!t||!i||"string"!=typeof t)throw Error("Invocation of form alarms.create() doesn't match definition alarms.create(optional string name, object alarmInfo)");if("number"!=typeof i.periodInMinutes)throw Error("Property periodInMinutes of alarmInfo must be Number");var a=i.isRunImmediately;delete i.isRunImmediately,void 0===a&&(a=!0),i.name=t,i.lastTime=Date.now(),r.getAll(function(n){if(n[t]=i,a&&r.__checks__.hasOwnProperty(t))try{r.__checks__[t].eventFire()}catch(n){}r.__save__(e)})},get:function(t,i){this.getAll(function(n){i&&i(n[t])})},getAll:function(t){var i=this,n=i.__alarms__;n?t&&t(n):chrome.storage.local.get("infinity-alarms",function(n){i.__alarms__||(n.hasOwnProperty("infinity-alarms")?i.__alarms__=n["infinity-alarms"]:i.__alarms__={}),t&&t(i.__alarms__)})},onAlarm:function(n,t){t&&(this.__checks__[n]={name:n,eventFire:t})},clear:function(t,i){var e=this;e.getAll(function(n){delete n[t],e.__save__(i)})},clearAll:function(n){this.__alarms__={},this.__save__(n)},__save__:function(n){chrome.storage.local.set({"infinity-alarms":this.__alarms__},n)}},infinity.alarms.__init__();