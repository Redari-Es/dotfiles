"use strict";window.infinity=window.infinity||{modules:[],imports:{}},infinity.import=function(r,u,a,m){var e,c;infinity.imports[r]?a&&a(infinity.modules[r]):(u=u||"body",e=window.location.origin+"/modules/"+r+"/"+r+".html",(c=new XMLHttpRequest).onload=function(e){for(var n=c.response,o=(n.createElement("div"),n.getElementById("module-"+r)),t=JSON.parse(o.getAttribute("data-css")),d=JSON.parse(o.getAttribute("data-js")),i=null,s=[],l=0;l<t.length;l++)(i=document.createElement("link")).rel="stylesheet",i.href=window.location.origin+"/modules/"+r+"/css/"+t[l]+".css",document.head.appendChild(i),s.push(new Promise(function(e){i.onload=e}));Promise.all(s).then(function(){for(var e,t=[],n=null,i=0;i<d.length;i++)e={name:d[i],load:!1},t.push(e),(n=document.createElement("script")).setAttribute("async",""),n.src=window.location.origin+"/modules/"+r+"/js/"+d[i]+".js",n.setAttribute("name",d[i]),document.head.appendChild(n),n.onload=function(e){var n=e.target.getAttribute("name");t.forEach(function(e){e.name==n&&(e.load=!0)}),t.every(function(e){return e.load})&&(t.forEach(function(e){e.name==r?infinity.modules[r]=infinity.modules[r+"-"+r]():infinity.modules[r+"-"+e.name]&&infinity.modules[r+"-"+e.name]()}),infinity.imports[r]=!0,a&&a(infinity.modules[r]))};m&&(document.querySelector(u).innerHTML=""),document.querySelector(u).appendChild(document.adoptNode(o))})},c.open("GET",e),c.responseType="document",c.send())},window.onModuleResLoaded&&onModuleResLoaded();