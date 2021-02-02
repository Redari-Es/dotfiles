(function(k){"object"==typeof exports&&"object"==typeof module?k(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],k):k(CodeMirror)})(function(k){function m(a,b){for(var e=0,f=a.length;e<f;++e)b(a[e])}function q(a,b,e,f){var c=a.getCursor(),d=e(a,c);if(!/\b(?:string|comment)\b/.test(d.type)){d.state=k.innerMode(a.getMode(),d.state).state;/^[\w$_]*$/.test(d.string)?d.end>c.ch&&(d.end=c.ch,d.string=d.string.slice(0,c.ch-d.start)):d={start:c.ch,end:c.ch,
string:"",state:d.state,type:"."==d.string?"property":null};for(var g=d;"property"==g.type;){g=e(a,n(c.line,g.start));if("."!=g.string)return;g=e(a,n(c.line,g.start));if(!p)var p=[];p.push(g)}return{list:r(d,p,b,f),from:n(c.line,d.start),to:n(c.line,d.end)}}}function t(a,b){a=a.getTokenAt(b);b.ch==a.start+1&&"."==a.string.charAt(0)?(a.end=a.start,a.string=".",a.type="property"):/^\.[\w$_]*$/.test(a.string)&&(a.type="property",a.start++,a.string=a.string.replace(/\./,""));return a}function r(a,b,e,
f){function c(a){var b;if(b=0==a.lastIndexOf(k,0)){a:if(Array.prototype.indexOf)b=-1!=g.indexOf(a);else{for(b=g.length;b--;)if(g[b]===a){b=!0;break a}b=!1}b=!b}b&&g.push(a)}function d(a){"string"==typeof a?m(u,c):a instanceof Array?m(v,c):a instanceof Function&&m(w,c);if(Object.getOwnPropertyNames&&Object.getPrototypeOf)for(;a;a=Object.getPrototypeOf(a))Object.getOwnPropertyNames(a).forEach(c);else for(var b in a)c(b)}var g=[],k=a.string,l=f&&f.globalScope||window;if(b&&b.length){a=b.pop();var h;
a.type&&0===a.type.indexOf("variable")?(f&&f.additionalContext&&(h=f.additionalContext[a.string]),f&&!1===f.useGlobalScope||(h=h||l[a.string])):"string"==a.type?h="":"atom"==a.type?h=1:"function"==a.type&&(null==l.jQuery||"$"!=a.string&&"jQuery"!=a.string||"function"!=typeof l.jQuery?null!=l._&&"_"==a.string&&"function"==typeof l._&&(h=l._()):h=l.jQuery());for(;null!=h&&b.length;)h=h[b.pop().string];null!=h&&d(h)}else{for(b=a.state.localVars;b;b=b.next)c(b.name);for(b=a.state.globalVars;b;b=b.next)c(b.name);
f&&!1===f.useGlobalScope||d(l);m(e,c)}return g}var n=k.Pos;k.registerHelper("hint","javascript",function(a,b){var e=x;b.keywords&&(e=e.concat(b.keywords));return q(a,e,function(a,b){return a.getTokenAt(b)},b)});k.registerHelper("hint","coffeescript",function(a,b){return q(a,y,t,b)});var u="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),v="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),
w=["prototype","apply","call","bind"],x="break case catch class const continue debugger default delete do else export extends false finally for function if in import instanceof new null return super switch this throw true try typeof var void while with yield".split(" "),y="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ")});
