/*! For license information please see vendors-background-content-script-panel-popup-settings.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(t,e,r){"use strict";t.exports=r(159)},11:function(t,e,r){"use strict";e.a=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},111:function(t,e,r){"use strict";e.a=function(){return!1}},14:function(t,e,r){"use strict";var n=r(17).a.Symbol;e.a=n},159:function(t,e,r){"use strict";var n=r(94),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,j=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function d(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(t,e,r){this.props=t,this.context=e,this.refs=h,this.updater=r||O}function g(){}function w(t,e,r){this.props=t,this.context=e,this.refs=h,this.updater=r||O}m.prototype.isReactComponent={},m.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(d(85));this.updater.enqueueSetState(this,t,e,"setState")},m.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},g.prototype=m.prototype;var S=w.prototype=new g;S.constructor=w,n(S,m.prototype),S.isPureReactComponent=!0;var _={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(t,e,r){var n,o={},u=null,a=null;if(null!=e)for(n in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(u=""+e.key),e)k.call(e,n)&&!x.hasOwnProperty(n)&&(o[n]=e[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var f=Array(i),l=0;l<i;l++)f[l]=arguments[l+2];o.children=f}if(t&&t.defaultProps)for(n in i=t.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:c,type:t,key:u,ref:a,props:o,_owner:_.current}}function $(t){return"object"==typeof t&&null!==t&&t.$$typeof===c}var A=/\/+/g,E=[];function C(t,e,r,n){if(E.length){var o=E.pop();return o.result=t,o.keyPrefix=e,o.func=r,o.context=n,o.count=0,o}return{result:t,keyPrefix:e,func:r,context:n,count:0}}function R(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>E.length&&E.push(t)}function F(t,e,r,n){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var a=!1;if(null===t)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case c:case u:a=!0}}if(a)return r(n,t,""===e?"."+M(t,0):e),1;if(a=0,e=""===e?".":e+":",Array.isArray(t))for(var i=0;i<t.length;i++){var f=e+M(o=t[i],i);a+=F(o,f,r,n)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),i=0;!(o=t.next()).done;)a+=F(o=o.value,f=e+M(o,i++),r,n);else if("object"===o)throw r=""+t,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return a}function I(t,e,r){return null==t?0:F(t,"",e,r)}function M(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,(function(t){return e[t]}))}(t.key):e.toString(36)}function T(t,e){t.func.call(t.context,e,t.count++)}function U(t,e,r){var n=t.result,o=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?q(t,n,r,(function(t){return t})):null!=t&&($(t)&&(t=function(t,e){return{$$typeof:c,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,o+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(A,"$&/")+"/")+r)),n.push(t))}function q(t,e,r,n,o){var c="";null!=r&&(c=(""+r).replace(A,"$&/")+"/"),I(t,U,e=C(e,c,n,o)),R(e)}var B={current:null};function D(){var t=B.current;if(null===t)throw Error(d(321));return t}var N={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};e.Children={map:function(t,e,r){if(null==t)return t;var n=[];return q(t,n,null,e,r),n},forEach:function(t,e,r){if(null==t)return t;I(t,T,e=C(null,null,e,r)),R(e)},count:function(t){return I(t,(function(){return null}),null)},toArray:function(t){var e=[];return q(t,e,null,(function(t){return t})),e},only:function(t){if(!$(t))throw Error(d(143));return t}},e.Component=m,e.Fragment=a,e.Profiler=f,e.PureComponent=w,e.StrictMode=i,e.Suspense=b,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,e.cloneElement=function(t,e,r){if(null==t)throw Error(d(267,t));var o=n({},t.props),u=t.key,a=t.ref,i=t._owner;if(null!=e){if(void 0!==e.ref&&(a=e.ref,i=_.current),void 0!==e.key&&(u=""+e.key),t.type&&t.type.defaultProps)var f=t.type.defaultProps;for(l in e)k.call(e,l)&&!x.hasOwnProperty(l)&&(o[l]=void 0===e[l]&&void 0!==f?f[l]:e[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];o.children=f}return{$$typeof:c,type:t.type,key:u,ref:a,props:o,_owner:i}},e.createContext=function(t,e){return void 0===e&&(e=null),(t={$$typeof:s,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:t},t.Consumer=t},e.createElement=P,e.createFactory=function(t){var e=P.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:p,render:t}},e.isValidElement=$,e.lazy=function(t){return{$$typeof:j,_ctor:t,_status:-1,_result:null}},e.memo=function(t,e){return{$$typeof:y,type:t,compare:void 0===e?null:e}},e.useCallback=function(t,e){return D().useCallback(t,e)},e.useContext=function(t,e){return D().useContext(t,e)},e.useDebugValue=function(){},e.useEffect=function(t,e){return D().useEffect(t,e)},e.useImperativeHandle=function(t,e,r){return D().useImperativeHandle(t,e,r)},e.useLayoutEffect=function(t,e){return D().useLayoutEffect(t,e)},e.useMemo=function(t,e){return D().useMemo(t,e)},e.useReducer=function(t,e,r){return D().useReducer(t,e,r)},e.useRef=function(t){return D().useRef(t)},e.useState=function(t){return D().useState(t)},e.version="16.13.1"},17:function(t,e,r){"use strict";var n=r(77),o="object"==typeof self&&self&&self.Object===Object&&self,c=n.a||o||Function("return this")();e.a=c},18:function(t,e,r){"use strict";var n,o=r(78),c=r(17).a["__core-js_shared__"],u=(n=/[^.]+$/.exec(c&&c.keys&&c.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";var a=function(t){return!!u&&u in t},i=r(11),f=r(48),l=/^\[object .+?Constructor\]$/,s=Function.prototype,p=Object.prototype,b=s.toString,y=p.hasOwnProperty,j=RegExp("^"+b.call(y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var v=function(t){return!(!Object(i.a)(t)||a(t))&&(Object(o.a)(t)?j:l).test(Object(f.a)(t))};var d=function(t,e){return null==t?void 0:t[e]};e.a=function(t,e){var r=d(t,e);return v(r)?r:void 0}},27:function(t,e,r){"use strict";var n=r(33),o=r(30);var c=function(t){return Object(o.a)(t)&&"[object Arguments]"==Object(n.a)(t)},u=Object.prototype,a=u.hasOwnProperty,i=u.propertyIsEnumerable,f=c(function(){return arguments}())?c:function(t){return Object(o.a)(t)&&a.call(t,"callee")&&!i.call(t,"callee")};e.a=f},30:function(t,e,r){"use strict";e.a=function(t){return null!=t&&"object"==typeof t}},33:function(t,e,r){"use strict";var n=r(14),o=Object.prototype,c=o.hasOwnProperty,u=o.toString,a=n.a?n.a.toStringTag:void 0;var i=function(t){var e=c.call(t,a),r=t[a];try{t[a]=void 0;var n=!0}catch(t){}var o=u.call(t);return n&&(e?t[a]=r:delete t[a]),o},f=Object.prototype.toString;var l=function(t){return f.call(t)},s=n.a?n.a.toStringTag:void 0;e.a=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?i(t):l(t)}},38:function(t,e,r){"use strict";var n=r(18),o=r(17),c=Object(n.a)(o.a,"Map");e.a=c},44:function(t,e,r){"use strict";e.a=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},46:function(t,e,r){"use strict";var n=r(81),o=r(53),c=r(27),u=r(8),a=r(61),i=r(62),f=r(51),l=r(80),s=Object.prototype.hasOwnProperty;e.a=function(t){if(null==t)return!0;if(Object(a.a)(t)&&(Object(u.a)(t)||"string"==typeof t||"function"==typeof t.splice||Object(i.a)(t)||Object(l.a)(t)||Object(c.a)(t)))return!t.length;var e=Object(o.a)(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(Object(f.a)(t))return!Object(n.a)(t).length;for(var r in t)if(s.call(t,r))return!1;return!0}},47:function(t,e,r){"use strict";(function(t){var n=r(77),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,c=o&&"object"==typeof t&&t&&!t.nodeType&&t,u=c&&c.exports===o&&n.a.process,a=function(){try{var t=c&&c.require&&c.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(t){}}();e.a=a}).call(this,r(67)(t))},48:function(t,e,r){"use strict";var n=Function.prototype.toString;e.a=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},51:function(t,e,r){"use strict";var n=Object.prototype;e.a=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},53:function(t,e,r){"use strict";var n=r(18),o=r(17),c=Object(n.a)(o.a,"DataView"),u=r(38),a=Object(n.a)(o.a,"Promise"),i=Object(n.a)(o.a,"Set"),f=Object(n.a)(o.a,"WeakMap"),l=r(33),s=r(48),p="[object Map]",b="[object Promise]",y="[object Set]",j="[object WeakMap]",v="[object DataView]",d=Object(s.a)(c),O=Object(s.a)(u.a),h=Object(s.a)(a),m=Object(s.a)(i),g=Object(s.a)(f),w=l.a;(c&&w(new c(new ArrayBuffer(1)))!=v||u.a&&w(new u.a)!=p||a&&w(a.resolve())!=b||i&&w(new i)!=y||f&&w(new f)!=j)&&(w=function(t){var e=Object(l.a)(t),r="[object Object]"==e?t.constructor:void 0,n=r?Object(s.a)(r):"";if(n)switch(n){case d:return v;case O:return p;case h:return b;case m:return y;case g:return j}return e});e.a=w},57:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},61:function(t,e,r){"use strict";var n=r(78),o=r(44);e.a=function(t){return null!=t&&Object(o.a)(t.length)&&!Object(n.a)(t)}},62:function(t,e,r){"use strict";(function(t){var n=r(17),o=r(111),c="object"==typeof exports&&exports&&!exports.nodeType&&exports,u=c&&"object"==typeof t&&t&&!t.nodeType&&t,a=u&&u.exports===c?n.a.Buffer:void 0,i=(a?a.isBuffer:void 0)||o.a;e.a=i}).call(this,r(67)(t))},63:function(t,e,r){"use strict";e.a=function(t){return function(e){return t(e)}}},67:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},77:function(t,e,r){"use strict";(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.a=r}).call(this,r(57))},78:function(t,e,r){"use strict";var n=r(33),o=r(11);e.a=function(t){if(!Object(o.a)(t))return!1;var e=Object(n.a)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},79:function(t,e,r){"use strict";e.a=function(t,e){return function(r){return t(e(r))}}},8:function(t,e,r){"use strict";var n=Array.isArray;e.a=n},80:function(t,e,r){"use strict";var n=r(33),o=r(44),c=r(30),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1;var a=function(t){return Object(c.a)(t)&&Object(o.a)(t.length)&&!!u[Object(n.a)(t)]},i=r(63),f=r(47),l=f.a&&f.a.isTypedArray,s=l?Object(i.a)(l):a;e.a=s},81:function(t,e,r){"use strict";var n=r(51),o=r(79),c=Object(o.a)(Object.keys,Object),u=Object.prototype.hasOwnProperty;e.a=function(t){if(!Object(n.a)(t))return c(t);var e=[];for(var r in Object(t))u.call(t,r)&&"constructor"!=r&&e.push(r);return e}},94:function(t,e,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function u(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,a,i=u(t),f=1;f<arguments.length;f++){for(var l in r=Object(arguments[f]))o.call(r,l)&&(i[l]=r[l]);if(n){a=n(r);for(var s=0;s<a.length;s++)c.call(r,a[s])&&(i[a[s]]=r[a[s]])}}return i}}}]);