"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==("undefined"==typeof exports?"undefined":_typeof(exports))?require("jquery"):jQuery)}(function(w){function x(t){return"number"==typeof t&&!isNaN(t)}function n(t){return void 0===t}function s(t,i){var e=[];return x(i)&&e.push(i),e.slice.apply(t,e)}function o(t,i){var e=s(arguments,2);return function(){return t.apply(i,e.concat(s(arguments)))}}function a(t){t=t.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);return t&&(t[1]!==i.protocol||t[2]!==i.hostname||t[3]!==i.port)}function h(t){return t}function r(t){return t?' crossOrigin="'+t+'"':""}function g(t){var i=[],e=t.rotate,s=t.scaleX,t=t.scaleY;return x(e)&&0!==e&&i.push("rotate("+e+"deg)"),x(s)&&1!==s&&i.push("scaleX("+s+")"),x(t)&&1!==t&&i.push("scaleY("+t+")"),i.length?i.join(" "):"none"}function b(t,i){var e,s=nt(t.degree)%180,o=(90<s?180-s:s)*Math.PI/180,a=rt(o),h=pt(o),s=t.width,o=t.height,t=t.aspectRatio,h=i?(e=s/(h+a/t))/t:(e=s*h+o*a,s*a+o*h);return{width:e,height:h}}function f(t,i){var e,s,o=w("<canvas>")[0],a=o.getContext("2d"),h=0,n=0,r=i.naturalWidth,p=i.naturalHeight,l=i.rotate,c=i.scaleX,d=i.scaleY,g=x(c)&&x(d)&&(1!==c||1!==d),u=x(l)&&0!==l,f=u||g,m=r*nt(c||1),v=p*nt(d||1);return g&&(e=m/2,s=v/2),u&&(e=(m=(i=b({width:m,height:v,degree:l})).width)/2,s=(v=i.height)/2),o.width=m,o.height=v,f&&(h=-r/2,n=-p/2,a.save(),a.translate(e,s)),u&&a.rotate(l*Math.PI/180),g&&a.scale(c,d),a.drawImage(t,dt(h),dt(n),dt(r),dt(p)),f&&a.restore(),o}function p(t){var i,e,s,o,a,h,n,r=new v(t),p=r.byteLength;if(255===r.getUint8(0)&&216===r.getUint8(1))for(h=2;h<p;){if(255===r.getUint8(h)&&225===r.getUint8(h+1)){o=h;break}h++}if(o&&(e=o+10,"Exif"===function(t,i,e){var s="",o=i;for(e+=i;o<e;o++)s+=gt(t.getUint8(o));return s}(r,o+4,4)&&(!(s=18761===(t=r.getUint16(e)))&&19789!==t||42!==r.getUint16(e+2,s)||8<=(t=r.getUint32(e+4,s))&&(a=e+t))),a)for(p=r.getUint16(a,s),n=0;n<p;n++)if(h=a+12*n+2,274===r.getUint16(h,s)){h+=8,i=r.getUint16(h,s),st&&r.setUint16(h,1,s);break}return i}function l(t,i){this.$element=w(t),this.options=w.extend({},l.DEFAULTS,w.isPlainObject(i)&&i),this.isLoaded=!1,this.isBuilt=!1,this.isCompleted=!1,this.isRotated=!1,this.isCropped=!1,this.isDisabled=!1,this.isReplaced=!1,this.isLimited=!1,this.wheeling=!1,this.isImg=!1,this.originalUrl="",this.canvas=null,this.cropBox=null,this.init()}var c=w(window),d=w(document),i=window.location,t=window.navigator,u=window.ArrayBuffer,m=window.Uint8Array,v=window.DataView,C=window.btoa,B="cropper",y="cropper-modal",D="cropper-hide",$="cropper-hidden",L="cropper-move",X="cropper-crop",e="cropper-disabled",Y="mousedown touchstart pointerdown MSPointerDown",T="mousemove touchmove pointermove MSPointerMove",k="mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel",M="wheel mousewheel DOMMouseScroll",W="dblclick",H="load."+B,R="error."+B,z="resize."+B,O="build."+B,P="built."+B,E="cropstart."+B,U="cropmove."+B,I="cropend."+B,F="crop."+B,S="zoom."+B,j=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,A=/^data:/,N=/^data:([^;]+);base64,/,_=/^data:image\/jpeg.*;base64,/,q="preview",K="action",Z="se",Q="sw",V="ne",G="nw",J="crop",tt="move",it="zoom",et=w.isFunction(w("<canvas>")[0].getContext),st=t&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(t.userAgent),ot=Number,at=Math.min,ht=Math.max,nt=Math.abs,rt=Math.sin,pt=Math.cos,lt=Math.sqrt,ct=Math.round,dt=Math.floor,gt=String.fromCharCode;l.prototype={constructor:l,init:function(){var t,i=this.$element;if(i.is("img")){if(this.isImg=!0,this.originalUrl=t=i.attr("src"),!t)return;t=i.prop("src")}else i.is("canvas")&&et&&(t=i[0].toDataURL());this.load(t)},trigger:function(t,i){i=w.Event(t,i);return this.$element.trigger(i),i},load:function(t){var i,e,s=this.options,o=this.$element;if(t&&(o.one(O,s.build),!this.trigger(O).isDefaultPrevented()))return this.url=t,this.image={},s.checkOrientation&&u?(i=w.proxy(this.read,this),A.test(t)?_.test(t)?i(function(t){for(var t=t.replace(N,""),i=atob(t),e=i.length,t=new u(e),s=new m(t),o=0;o<e;o++)s[o]=i.charCodeAt(o);return t}(t)):this.clone():((e=new XMLHttpRequest).onerror=e.onabort=w.proxy(function(){this.clone()},this),e.onload=function(){i(this.response)},s.checkCrossOrigin&&a(t)&&o.prop("crossOrigin")&&(t=h(t)),e.open("get",t),e.responseType="arraybuffer",void e.send())):this.clone()},read:function(t){var i=this.options,e=p(t),s=this.image,o=0,a=1,h=1;if(1<e)switch(this.url=function(t){for(var i=new m(t),e=i.length,s="",o=0;o<e;o++)s+=gt(i[o]);return"data:image/jpeg;base64,"+C(s)}(t),e){case 2:a=-1;break;case 3:o=-180;break;case 4:h=-1;break;case 5:o=90,h=-1;break;case 6:o=90;break;case 7:o=90,a=-1;break;case 8:o=-90}i.rotatable&&(s.rotate=o),i.scalable&&(s.scaleX=a,s.scaleY=h),this.clone()},clone:function(){var t,i=this.options,e=this.$element,s=this.url,o="";i.checkCrossOrigin&&a(s)&&(t=(o=e.prop("crossOrigin"))?s:(o="anonymous",h(s))),this.crossOrigin=o,this.crossOriginUrl=t,this.$clone=s=w("<img"+r(o)+' src="'+(t||s)+'">'),this.isImg?e[0].complete?this.start():e.one(H,w.proxy(this.start,this)):s.one(H,w.proxy(this.start,this)).one(R,w.proxy(this.stop,this)).addClass(D).insertAfter(e)},start:function(){var t,i=this.$element,e=this.$clone;this.isImg||(e.off(R,this.stop),i=e),e=i[0],t=w.proxy(function(t,i){w.extend(this.image,{naturalWidth:t,naturalHeight:i,aspectRatio:t/i}),this.isLoaded=!0,this.build()},this),e.naturalWidth&&!st?t(e.naturalWidth,e.naturalHeight):((i=document.createElement("img")).onload=function(){t(this.width,this.height)},i.src=e.src)},stop:function(){this.$clone.remove(),this.$clone=null},build:function(){var t,i,e,s=this.options,o=this.$element,a=this.$clone;this.isLoaded&&(this.isBuilt&&this.unbuild(),this.$container=o.parent(),this.$cropper=t=w(l.TEMPLATE),this.$canvas=t.find(".cropper-canvas").append(a),this.$dragBox=t.find(".cropper-drag-box"),this.$cropBox=i=t.find(".cropper-crop-box"),this.$viewBox=t.find(".cropper-view-box"),this.$face=e=i.find(".cropper-face"),o.addClass($).after(t),this.isImg||a.removeClass(D),this.initPreview(),this.bind(),s.aspectRatio=ht(0,s.aspectRatio)||NaN,s.viewMode=ht(0,at(3,ct(s.viewMode)))||0,s.autoCrop?(this.isCropped=!0,s.modal&&this.$dragBox.addClass(y)):i.addClass($),s.guides||i.find(".cropper-dashed").addClass($),s.center||i.find(".cropper-center").addClass($),s.cropBoxMovable&&e.addClass(L).data(K,"all"),s.highlight||e.addClass("cropper-invisible"),s.background&&t.addClass("cropper-bg"),s.cropBoxResizable||i.find(".cropper-line, .cropper-point").addClass($),this.setDragMode(s.dragMode),this.render(),this.isBuilt=!0,this.setData(s.data),o.one(P,s.built),this.completing=setTimeout(w.proxy(function(){this.trigger(P),this.trigger(F,this.getData()),this.isCompleted=!0},this),0))},unbuild:function(){this.isBuilt&&(this.isCompleted||clearTimeout(this.completing),this.isBuilt=!1,this.isCompleted=!1,this.initialImage=null,this.initialCanvas=null,this.initialCropBox=null,this.container=null,this.canvas=null,this.cropBox=null,this.unbind(),this.resetPreview(),this.$preview=null,this.$viewBox=null,this.$cropBox=null,this.$dragBox=null,this.$canvas=null,this.$container=null,this.$cropper.remove(),this.$cropper=null)},render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.isCropped&&this.renderCropBox()},initContainer:function(){var t=this.options,i=this.$element,e=this.$container,s=this.$cropper;s.addClass($),i.removeClass($),s.css(this.container={width:ht(e.width(),ot(t.minContainerWidth)||200),height:ht(e.height(),ot(t.minContainerHeight)||100)}),i.addClass($),s.removeClass($)},initCanvas:function(){var t=this.options.viewMode,i=this.container,e=i.width,s=i.height,o=this.image,a=o.naturalWidth,h=o.naturalHeight,n=90===nt(o.rotate),r=n?h:a,i=n?a:h,n=r/i,a=e,h=s;e<s*n?3===t?a=s*n:h=e/n:3===t?h=e/n:a=s*n,(n={naturalWidth:r,naturalHeight:i,aspectRatio:n,width:a,height:h}).oldLeft=n.left=(e-a)/2,n.oldTop=n.top=(s-h)/2,this.canvas=n,this.isLimited=1===t||2===t,this.limitCanvas(!0,!0),this.initialImage=w.extend({},o),this.initialCanvas=w.extend({},n)},limitCanvas:function(t,i){var e,s=this.options,o=s.viewMode,a=this.container,h=a.width,n=a.height,r=this.canvas,p=r.aspectRatio,l=this.cropBox,a=this.isCropped&&l;t&&(t=ot(s.minCanvasWidth)||0,e=ot(s.minCanvasHeight)||0,o&&(1<o?(t=ht(t,h),e=ht(e,n),3===o&&(t<e*p?t=e*p:e=t/p)):t?t=ht(t,a?l.width:0):e?e=ht(e,a?l.height:0):a&&((t=l.width)<(e=l.height)*p?t=e*p:e=t/p)),t&&e?t<e*p?e=t/p:t=e*p:t?e=t/p:e&&(t=e*p),r.minWidth=t,r.minHeight=e,r.maxWidth=1/0,r.maxHeight=1/0),i&&(o?(e=h-r.width,i=n-r.height,r.minLeft=at(0,e),r.minTop=at(0,i),r.maxLeft=ht(0,e),r.maxTop=ht(0,i),a&&this.isLimited&&(r.minLeft=at(l.left,l.left+l.width-r.width),r.minTop=at(l.top,l.top+l.height-r.height),r.maxLeft=l.left,r.maxTop=l.top,2===o&&(r.width>=h&&(r.minLeft=at(0,e),r.maxLeft=ht(0,e)),r.height>=n&&(r.minTop=at(0,i),r.maxTop=ht(0,i))))):(r.minLeft=-r.width,r.minTop=-r.height,r.maxLeft=h,r.maxTop=n))},renderCanvas:function(t){var i,e=this.canvas,s=this.image,o=s.rotate,a=s.naturalWidth,h=s.naturalHeight;this.isRotated&&(this.isRotated=!1,(s=(i=b({width:s.width,height:s.height,degree:o})).width/i.height)!==e.aspectRatio&&(e.left-=(i.width-e.width)/2,e.top-=(i.height-e.height)/2,e.width=i.width,e.height=i.height,e.aspectRatio=s,e.naturalWidth=a,e.naturalHeight=h,o%180&&(i=b({width:a,height:h,degree:o}),e.naturalWidth=i.width,e.naturalHeight=i.height),this.limitCanvas(!0,!1))),(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=at(ht(e.width,e.minWidth),e.maxWidth),e.height=at(ht(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.oldLeft=e.left=at(ht(e.left,e.minLeft),e.maxLeft),e.oldTop=e.top=at(ht(e.top,e.minTop),e.maxTop),this.$canvas.css({width:e.width,height:e.height,left:e.left,top:e.top}),this.renderImage(),this.isCropped&&this.isLimited&&this.limitCropBox(!0,!0),t&&this.output()},renderImage:function(t){var i,e=this.canvas,s=this.image;s.rotate&&(i=b({width:e.width,height:e.height,degree:s.rotate,aspectRatio:s.aspectRatio},!0)),w.extend(s,i?{width:i.width,height:i.height,left:(e.width-i.width)/2,top:(e.height-i.height)/2}:{width:e.width,height:e.height,left:0,top:0}),this.$clone.css({width:s.width,height:s.height,marginLeft:s.left,marginTop:s.top,transform:g(s)}),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvas,e=t.aspectRatio,s=ot(t.autoCropArea)||.8,t={width:i.width,height:i.height};e&&(i.height*e>i.width?t.height=t.width/e:t.width=t.height*e),this.cropBox=t,this.limitCropBox(!0,!0),t.width=at(ht(t.width,t.minWidth),t.maxWidth),t.height=at(ht(t.height,t.minHeight),t.maxHeight),t.width=ht(t.minWidth,t.width*s),t.height=ht(t.minHeight,t.height*s),t.oldLeft=t.left=i.left+(i.width-t.width)/2,t.oldTop=t.top=i.top+(i.height-t.height)/2,this.initialCropBox=w.extend({},t)},limitCropBox:function(t,i){var e,s=this.options,o=s.aspectRatio,a=this.container,h=a.width,n=a.height,r=this.canvas,p=this.cropBox,l=this.isLimited;t&&(e=ot(s.minCropBoxWidth)||0,a=ot(s.minCropBoxHeight)||0,e=at(e,h),a=at(a,n),t=at(h,l?r.width:h),s=at(n,l?r.height:n),o&&(e&&a?e<a*o?a=e/o:e=a*o:e?a=e/o:a&&(e=a*o),t<s*o?s=t/o:t=s*o),p.minWidth=at(e,t),p.minHeight=at(a,s),p.maxWidth=t,p.maxHeight=s),i&&(l?(p.minLeft=ht(0,r.left),p.minTop=ht(0,r.top),p.maxLeft=at(h,r.left+r.width)-p.width,p.maxTop=at(n,r.top+r.height)-p.height):(p.minLeft=0,p.minTop=0,p.maxLeft=h-p.width,p.maxTop=n-p.height))},renderCropBox:function(){var t=this.options,i=this.container,e=i.width,s=i.height,i=this.cropBox;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=at(ht(i.width,i.minWidth),i.maxWidth),i.height=at(ht(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.oldLeft=i.left=at(ht(i.left,i.minLeft),i.maxLeft),i.oldTop=i.top=at(ht(i.top,i.minTop),i.maxTop),t.movable&&t.cropBoxMovable&&this.$face.data(K,i.width===e&&i.height===s?tt:"all"),this.$cropBox.css({width:i.width,height:i.height,left:i.left,top:i.top}),this.isCropped&&this.isLimited&&this.limitCanvas(!0,!0),this.isDisabled||this.output()},output:function(){this.preview(),this.isCompleted&&this.trigger(F,this.getData())},initPreview:function(){var t,i=r(this.crossOrigin),e=i?this.crossOriginUrl:this.url;this.$preview=w(this.options.preview),this.$clone2=t=w("<img"+i+' src="'+e+'">'),this.$viewBox.html(t),this.$preview.each(function(){var t=w(this);t.data(q,{width:t.width(),height:t.height(),html:t.html()}),t.html("<img"+i+' src="'+e+'" style="display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;">')})},resetPreview:function(){this.$preview.each(function(){var t=w(this),i=t.data(q);t.css({width:i.width,height:i.height}).html(i.html).removeData(q)})},preview:function(){var h=this.image,t=this.canvas,i=this.cropBox,n=i.width,r=i.height,p=h.width,l=h.height,c=i.left-t.left-h.left,d=i.top-t.top-h.top;this.isCropped&&!this.isDisabled&&(this.$clone2.css({width:p,height:l,marginLeft:-c,marginTop:-d,transform:g(h)}),this.$preview.each(function(){var t=w(this),i=t.data(q),e=i.width,s=i.height,o=e,a=s,i=1;n&&(a=r*(i=e/n)),r&&s<a&&(o=n*(i=s/r),a=s),t.css({width:o,height:a}).find("img").css({width:p*i,height:l*i,marginLeft:-c*i,marginTop:-d*i,transform:g(h)})}))},bind:function(){var t=this.options,i=this.$element,e=this.$cropper;w.isFunction(t.cropstart)&&i.on(E,t.cropstart),w.isFunction(t.cropmove)&&i.on(U,t.cropmove),w.isFunction(t.cropend)&&i.on(I,t.cropend),w.isFunction(t.crop)&&i.on(F,t.crop),w.isFunction(t.zoom)&&i.on(S,t.zoom),e.on(Y,w.proxy(this.cropStart,this)),t.zoomable&&t.zoomOnWheel&&e.on(M,w.proxy(this.wheel,this)),t.toggleDragModeOnDblclick&&e.on(W,w.proxy(this.dblclick,this)),d.on(T,this._cropMove=o(this.cropMove,this)).on(k,this._cropEnd=o(this.cropEnd,this)),t.responsive&&c.on(z,this._resize=o(this.resize,this))},unbind:function(){var t=this.options,i=this.$element,e=this.$cropper;w.isFunction(t.cropstart)&&i.off(E,t.cropstart),w.isFunction(t.cropmove)&&i.off(U,t.cropmove),w.isFunction(t.cropend)&&i.off(I,t.cropend),w.isFunction(t.crop)&&i.off(F,t.crop),w.isFunction(t.zoom)&&i.off(S,t.zoom),e.off(Y,this.cropStart),t.zoomable&&t.zoomOnWheel&&e.off(M,this.wheel),t.toggleDragModeOnDblclick&&e.off(W,this.dblclick),d.off(T,this._cropMove).off(k,this._cropEnd),t.responsive&&c.off(z,this._resize)},resize:function(){var e,s,o,t=this.options.restore,i=this.$container,a=this.container;!this.isDisabled&&a&&(1==(o=i.width()/a.width)&&i.height()===a.height||(t&&(e=this.getCanvasData(),s=this.getCropBoxData()),this.render(),t&&(this.setCanvasData(w.each(e,function(t,i){e[t]=i*o})),this.setCropBoxData(w.each(s,function(t,i){s[t]=i*o})))))},dblclick:function(){this.isDisabled||(this.$dragBox.hasClass(X)?this.setDragMode(tt):this.setDragMode(J))},wheel:function(t){var i=t.originalEvent||t,e=ot(this.options.wheelZoomRatio)||.1,s=1;this.isDisabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(w.proxy(function(){this.wheeling=!1},this),50),i.deltaY?s=0<i.deltaY?1:-1:i.wheelDelta?s=-i.wheelDelta/120:i.detail&&(s=0<i.detail?1:-1),this.zoom(-s*e,t)))},cropStart:function(t){var i,e,s=this.options,o=t.originalEvent,a=o&&o.touches,h=t;if(!this.isDisabled){if(a){if(1<(i=a.length)){if(!s.zoomable||!s.zoomOnTouch||2!==i)return;h=a[1],this.startX2=h.pageX,this.startY2=h.pageY,e=it}h=a[0]}e=e||w(h.target).data(K),j.test(e)&&(this.trigger(E,{originalEvent:o,action:e}).isDefaultPrevented()||(t.preventDefault(),this.action=e,this.cropping=!1,this.startX=h.pageX||o&&o.pageX,this.startY=h.pageY||o&&o.pageY,e===J&&(this.cropping=!0,this.$dragBox.addClass(y))))}},cropMove:function(t){var i,e=this.options,s=t.originalEvent,o=s&&s.touches,a=t,h=this.action;if(!this.isDisabled){if(o){if(1<(i=o.length)){if(!e.zoomable||!e.zoomOnTouch||2!==i)return;a=o[1],this.endX2=a.pageX,this.endY2=a.pageY}a=o[0]}h&&(this.trigger(U,{originalEvent:s,action:h}).isDefaultPrevented()||(t.preventDefault(),this.endX=a.pageX||s&&s.pageX,this.endY=a.pageY||s&&s.pageY,this.change(a.shiftKey,h===it?t:null)))}},cropEnd:function(t){var i=t.originalEvent,e=this.action;this.isDisabled||e&&(t.preventDefault(),this.cropping&&(this.cropping=!1,this.$dragBox.toggleClass(y,this.isCropped&&this.options.modal)),this.action="",this.trigger(I,{originalEvent:i,action:e}))},change:function(t,i){var e=this.options.aspectRatio,s=this.action,o=this.container,a=this.canvas,h=this.cropBox,n=h.width,r=h.height,p=h.left,l=h.top,c=p+n,d=l+r,g=0,u=0,f=o.width,m=o.height,v=!0;switch(!e&&t&&(e=n&&r?n/r:1),this.isLimited&&(g=h.minLeft,u=h.minTop,f=g+at(o.width,a.width,a.left+a.width),m=u+at(o.height,a.height,a.top+a.height)),a={x:this.endX-this.startX,y:this.endY-this.startY},e&&(a.X=a.y*e,a.Y=a.x/e),s){case"all":p+=a.x,l+=a.y;break;case"e":if(0<=a.x&&(f<=c||e&&(l<=u||m<=d))){v=!1;break}n+=a.x,e&&(r=n/e,l-=a.Y/2),n<0&&(s="w",n=0);break;case"n":if(a.y<=0&&(l<=u||e&&(p<=g||f<=c))){v=!1;break}r-=a.y,l+=a.y,e&&(n=r*e,p+=a.X/2),r<0&&(s="s",r=0);break;case"w":if(a.x<=0&&(p<=g||e&&(l<=u||m<=d))){v=!1;break}n-=a.x,p+=a.x,e&&(r=n/e,l+=a.Y/2),n<0&&(s="e",n=0);break;case"s":if(0<=a.y&&(m<=d||e&&(p<=g||f<=c))){v=!1;break}r+=a.y,e&&(n=r*e,p-=a.X/2),r<0&&(s="n",r=0);break;case V:if(e){if(a.y<=0&&(l<=u||f<=c)){v=!1;break}r-=a.y,l+=a.y,n=r*e}else!(0<=a.x)||c<f?n+=a.x:a.y<=0&&l<=u&&(v=!1),a.y<=0&&!(u<l)||(r-=a.y,l+=a.y);n<0&&r<0?(s=Q,n=r=0):n<0?(s=G,n=0):r<0&&(s=Z,r=0);break;case G:if(e){if(a.y<=0&&(l<=u||p<=g)){v=!1;break}r-=a.y,l+=a.y,n=r*e,p+=a.X}else!(a.x<=0)||g<p?(n-=a.x,p+=a.x):a.y<=0&&l<=u&&(v=!1),a.y<=0&&!(u<l)||(r-=a.y,l+=a.y);n<0&&r<0?(s=Z,n=r=0):n<0?(s=V,n=0):r<0&&(s=Q,r=0);break;case Q:if(e){if(a.x<=0&&(p<=g||m<=d)){v=!1;break}n-=a.x,p+=a.x,r=n/e}else!(a.x<=0)||g<p?(n-=a.x,p+=a.x):0<=a.y&&m<=d&&(v=!1),0<=a.y&&!(d<m)||(r+=a.y);n<0&&r<0?(s=V,n=r=0):n<0?(s=Z,n=0):r<0&&(s=G,r=0);break;case Z:if(e){if(0<=a.x&&(f<=c||m<=d)){v=!1;break}r=(n+=a.x)/e}else!(0<=a.x)||c<f?n+=a.x:0<=a.y&&m<=d&&(v=!1),0<=a.y&&!(d<m)||(r+=a.y);n<0&&r<0?(s=G,n=r=0):n<0?(s=Q,n=0):r<0&&(s=V,r=0);break;case tt:this.move(a.x,a.y),v=!1;break;case it:this.zoom(function(t,i,e,s){i=lt(t*t+i*i);return(lt(e*e+s*s)-i)/i}(nt(this.startX-this.startX2),nt(this.startY-this.startY2),nt(this.endX-this.endX2),nt(this.endY-this.endY2)),i),this.startX2=this.endX2,this.startY2=this.endY2,v=!1;break;case J:if(!a.x||!a.y){v=!1;break}i=this.$cropper.offset(),p=this.startX-i.left,l=this.startY-i.top,n=h.minWidth,r=h.minHeight,0<a.x?s=0<a.y?Z:V:a.x<0&&(p-=n,s=0<a.y?Q:G),a.y<0&&(l-=r),this.isCropped||(this.$cropBox.removeClass($),this.isCropped=!0,this.isLimited&&this.limitCropBox(!0,!0))}v&&(h.width=n,h.height=r,h.left=p,h.top=l,this.action=s,this.renderCropBox()),this.startX=this.endX,this.startY=this.endY},crop:function(){this.isBuilt&&!this.isDisabled&&(this.isCropped||(this.isCropped=!0,this.limitCropBox(!0,!0),this.options.modal&&this.$dragBox.addClass(y),this.$cropBox.removeClass($)),this.setCropBoxData(this.initialCropBox))},reset:function(){this.isBuilt&&!this.isDisabled&&(this.image=w.extend({},this.initialImage),this.canvas=w.extend({},this.initialCanvas),this.cropBox=w.extend({},this.initialCropBox),this.renderCanvas(),this.isCropped&&this.renderCropBox())},clear:function(){this.isCropped&&!this.isDisabled&&(w.extend(this.cropBox,{left:0,top:0,width:0,height:0}),this.isCropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),this.$dragBox.removeClass(y),this.$cropBox.addClass($))},replace:function(t,i){!this.isDisabled&&t&&(this.isImg&&this.$element.attr("src",t),i?(this.url=t,this.$clone.attr("src",t),this.isBuilt&&this.$preview.find("img").add(this.$clone2).attr("src",t)):(this.isImg&&(this.isReplaced=!0),this.options.data=null,this.load(t)))},enable:function(){this.isBuilt&&(this.isDisabled=!1,this.$cropper.removeClass(e))},disable:function(){this.isBuilt&&(this.isDisabled=!0,this.$cropper.addClass(e))},destroy:function(){var t=this.$element;this.isLoaded?(this.isImg&&this.isReplaced&&t.attr("src",this.originalUrl),this.unbuild(),t.removeClass($)):this.isImg?t.off(H,this.start):this.$clone&&this.$clone.remove(),t.removeData(B)},move:function(t,i){var e=this.canvas;this.moveTo(n(t)?t:e.left+ot(t),n(i)?i:e.top+ot(i))},moveTo:function(t,i){var e=this.canvas,s=!1;n(i)&&(i=t),t=ot(t),i=ot(i),this.isBuilt&&!this.isDisabled&&this.options.movable&&(x(t)&&(e.left=t,s=!0),x(i)&&(e.top=i,s=!0),s&&this.renderCanvas(!0))},zoom:function(t,i){var e=this.canvas;t=(t=ot(t))<0?1/(1-t):1+t,this.zoomTo(e.width*t/e.naturalWidth,i)},zoomTo:function(t,i){var e,s,o,a,h=this.options,n=this.canvas,r=n.width,p=n.height,l=n.naturalWidth,c=n.naturalHeight;0<=(t=ot(t))&&this.isBuilt&&!this.isDisabled&&h.zoomable&&(e=l*t,h=c*t,i&&(s=i.originalEvent),this.trigger(S,{originalEvent:s,oldRatio:r/l,ratio:e/l}).isDefaultPrevented()||(s?(c=this.$cropper.offset(),s=s.touches?(t=s.touches,l=t.length,a=o=0,l&&(w.each(t,function(t,i){o+=i.pageX,a+=i.pageY}),o/=l,a/=l),{pageX:o,pageY:a}):{pageX:i.pageX||s.pageX||0,pageY:i.pageY||s.pageY||0},n.left-=(e-r)*((s.pageX-c.left-n.left)/r),n.top-=(h-p)*((s.pageY-c.top-n.top)/p)):(n.left-=(e-r)/2,n.top-=(h-p)/2),n.width=e,n.height=h,this.renderCanvas(!0)))},rotate:function(t){this.rotateTo((this.image.rotate||0)+ot(t))},rotateTo:function(t){x(t=ot(t))&&this.isBuilt&&!this.isDisabled&&this.options.rotatable&&(this.image.rotate=t%360,this.isRotated=!0,this.renderCanvas(!0))},scale:function(t,i){var e=this.image,s=!1;n(i)&&(i=t),t=ot(t),i=ot(i),this.isBuilt&&!this.isDisabled&&this.options.scalable&&(x(t)&&(e.scaleX=t,s=!0),x(i)&&(e.scaleY=i,s=!0),s&&this.renderImage(!0))},scaleX:function(t){var i=this.image.scaleY;this.scale(t,x(i)?i:1)},scaleY:function(t){var i=this.image.scaleX;this.scale(x(i)?i:1,t)},getData:function(e){var s,o,t=this.options,i=this.image,a=this.canvas,h=this.cropBox;return this.isBuilt&&this.isCropped?(o={x:h.left-a.left,y:h.top-a.top,width:h.width,height:h.height},s=i.width/i.naturalWidth,w.each(o,function(t,i){i/=s,o[t]=e?ct(i):i})):o={x:0,y:0,width:0,height:0},t.rotatable&&(o.rotate=i.rotate||0),t.scalable&&(o.scaleX=i.scaleX||1,o.scaleY=i.scaleY||1),o},setData:function(t){var i,e,s=this.options,o=this.image,a=this.canvas,h={};w.isFunction(t)&&(t=t.call(this.element)),this.isBuilt&&!this.isDisabled&&w.isPlainObject(t)&&(s.rotatable&&x(t.rotate)&&t.rotate!==o.rotate&&(o.rotate=t.rotate,this.isRotated=i=!0),s.scalable&&(x(t.scaleX)&&t.scaleX!==o.scaleX&&(o.scaleX=t.scaleX,e=!0),x(t.scaleY)&&t.scaleY!==o.scaleY&&(o.scaleY=t.scaleY,e=!0)),i?this.renderCanvas():e&&this.renderImage(),o=o.width/o.naturalWidth,x(t.x)&&(h.left=t.x*o+a.left),x(t.y)&&(h.top=t.y*o+a.top),x(t.width)&&(h.width=t.width*o),x(t.height)&&(h.height=t.height*o),this.setCropBoxData(h))},getContainerData:function(){return this.isBuilt?this.container:{}},getImageData:function(){return this.isLoaded?this.image:{}},getCanvasData:function(){var e=this.canvas,s={};return this.isBuilt&&w.each(["left","top","width","height","naturalWidth","naturalHeight"],function(t,i){s[i]=e[i]}),s},setCanvasData:function(t){var i=this.canvas,e=i.aspectRatio;w.isFunction(t)&&(t=t.call(this.$element)),this.isBuilt&&!this.isDisabled&&w.isPlainObject(t)&&(x(t.left)&&(i.left=t.left),x(t.top)&&(i.top=t.top),x(t.width)?(i.width=t.width,i.height=t.width/e):x(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0))},getCropBoxData:function(){var t,i=this.cropBox;return this.isBuilt&&this.isCropped&&(t={left:i.left,top:i.top,width:i.width,height:i.height}),t||{}},setCropBoxData:function(t){var i,e,s=this.cropBox,o=this.options.aspectRatio;w.isFunction(t)&&(t=t.call(this.$element)),this.isBuilt&&this.isCropped&&!this.isDisabled&&w.isPlainObject(t)&&(x(t.left)&&(s.left=t.left),x(t.top)&&(s.top=t.top),x(t.width)&&(i=!0,s.width=t.width),x(t.height)&&(e=!0,s.height=t.height),o&&(i?s.height=s.width/o:e&&(s.width=s.height*o)),this.renderCropBox())},getCroppedCanvas:function(t){var c,d,i,g,e,s,o,u;if(this.isBuilt&&et)return this.isCropped?(w.isPlainObject(t)||(t={}),u=this.getData(),c=u.width,d=u.height,e=c/d,w.isPlainObject(t)&&(s=t.width,o=t.height,s?(o=s/e,g=s/c):o&&(s=o*e,g=o/d)),i=dt(s||c),e=dt(o||d),(s=w("<canvas>")[0]).width=i,s.height=e,o=s.getContext("2d"),t.fillColor&&(o.fillStyle=t.fillColor,o.fillRect(0,0,i,e)),o.drawImage.apply(o,function(){var t,i,e,s,o,a,h=f(this.$clone[0],this.image),n=h.width,r=h.height,p=this.canvas,l=[h],h=u.x+p.naturalWidth*(nt(u.scaleX||1)-1)/2,p=u.y+p.naturalHeight*(nt(u.scaleY||1)-1)/2;return h<=-c||n<h?h=t=e=o=0:h<=0?(e=-h,t=o=at(n,c+(h=0))):h<=n&&(e=0,t=o=at(c,n-h)),t<=0||p<=-d||r<p?p=i=s=a=0:p<=0?(s=-p,i=a=at(r,d+(p=0))):p<=r&&(s=0,i=a=at(d,r-p)),l.push(dt(h),dt(p),dt(t),dt(i)),g&&(e*=g,s*=g,o*=g,a*=g),0<o&&0<a&&l.push(dt(e),dt(s),dt(o),dt(a)),l}.call(this)),s):f(this.$clone[0],this.image)},setAspectRatio:function(t){var i=this.options;this.isDisabled||n(t)||(i.aspectRatio=ht(0,t)||NaN,this.isBuilt&&(this.initCropBox(),this.isCropped&&this.renderCropBox()))},setDragMode:function(t){var i,e,s=this.options;this.isLoaded&&!this.isDisabled&&(i=t===J,e=s.movable&&t===tt,t=i||e?t:"none",this.$dragBox.data(K,t).toggleClass(X,i).toggleClass(L,e),s.cropBoxMovable||this.$face.data(K,t).toggleClass(X,i).toggleClass(L,e))}},l.DEFAULTS={viewMode:0,dragMode:"crop",aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,build:null,built:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},l.setDefaults=function(t){w.extend(l.DEFAULTS,t)},l.TEMPLATE='<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>',l.other=w.fn.cropper,w.fn.cropper=function(o){var a,h=s(arguments,1);return this.each(function(){var t,i,e=w(this),s=e.data(B);if(!s){if(/destroy/.test(o))return;t=w.extend({},e.data(),w.isPlainObject(o)&&o),e.data(B,s=new l(this,t))}"string"==typeof o&&w.isFunction(i=s[o])&&(a=i.apply(s,h))}),n(a)?this:a},w.fn.cropper.Constructor=l,w.fn.cropper.setDefaults=l.setDefaults,w.fn.cropper.noConflict=function(){return w.fn.cropper=l.other,this}});