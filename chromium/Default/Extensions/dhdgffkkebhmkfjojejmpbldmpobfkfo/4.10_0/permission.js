'use strict';Registry.require(["promise","helper","asker"],()=>{const e=Registry.get("promise"),k=Registry.get("helper"),l=Registry.get("asker");let c=!1,d=null,g=null;const m=a=>{rea.permissions.supported&&(rea.permissions.onAdded.addListener(b=>{a({added:b})}),rea.permissions.onRemoved.addListener(b=>{a({removed:b})}))},f={permDownloads:"downloads",get:function(){const a=e();d={};g={};c=a.promise();rea.permissions.supported?rea.permissions.getAll(b=>{b.permissions&&k.each(b.permissions,(a,b)=>{d[a]=
!0});b.origins&&k.each(b.origins,(a,b)=>{g[a]=!0});c=null;a.resolve()}):a.resolve();return a.promise()},has:function(a){return(c?c:e.Pledge()).then(()=>rea.permissions.supported?d?!!d[a]||!!g[a]:(m(()=>{(c?c:e.Pledge()).then(f.get)}),f.get().then(()=>f.has(a))):!0)},hasOrigin:function(a){Array.isArray(a)||(a=[a]);return(c?c:e.Pledge()).then(()=>{const b=e();rea.permissions.supported?rea.permissions.contains({origins:a},a=>{b.resolve(a)}):b.resolve(!0);return b.promise()})},ask:function(a,b,c){Array.isArray(a)||
(a=[a]);const h=e();rea.permissions.supported?l.askForPermission({permissions:a},b,c).done(b=>{b.granted&&(d||(d={}),d[a]=!0);h.resolve(b.granted)}):h.resolve(!1);return h.promise()},askOrigin:function(a,b,c){Array.isArray(a)||(a=[a]);const d=e();rea.permissions.supported?l.askForPermission({origins:a},b,c).done(a=>{d.resolve(a.granted)}):d.resolve(!1);return d.promise()},remove:function(a){return(c?c:e.Pledge()).then(()=>{const b=e();rea.permissions.supported?(c=b.promise(),rea.permissions.remove({permissions:[a]},
e=>{c=null;d&&(d[a]=!1);b.resolve(e)})):b.resolve(!0);return b.promise()})},addListener:m};Registry.register("permission","289e8b91",f)});
