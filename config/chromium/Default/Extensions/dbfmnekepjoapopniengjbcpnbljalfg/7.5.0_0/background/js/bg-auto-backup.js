"use strict";var bgAutoBackup={init:function(){var i=_.debounce(this.backup.bind(this),1500);infinity.onMessage("backupToCloud",function(){i()})},backupAjax:!1,backup:function(){var n,e,o=this,a=infinity.get("infinity-settings"),s=infinity.get("infinity-user");s.isLogin&&a.isAutoBackUp&&(n=infinity.get("infinity-icons"),e=infinity.get("infinity-searches"),infinity.get("infinity-data",!0,function(i){var t={type:"theNew__INFINITY",backupType:"cloud",version:10,icons:n,searches:e,settings:a,otherData:i},i=o.createOldVersionBackupData(infinity.deepCopy(n),infinity.deepCopy(a),infinity.deepCopy(i),infinity.deepCopy(e));t.main=i.main,t.setting=i.setting;t=JSON.stringify(t);o.backupAjax&&o.backupAjax.abort(),o.backupAjax=$.ajax({url:infinity.api+"/upSync.php",type:"POST",dataType:"json",data:{username:s.email,password:s.password,json:t}}).done(function(i){var t;"2"==i.message&&((t=infinity.get("infinity-local-data")).backupTime=i.backupTime,infinity.set("infinity-local-data",t),s.backupTime=i.backupTime,infinity.set("infinity-user",s),infinity.sendMessage("userStatusChange"))})}))},createOldVersionBackupData:function(i,t,n,e){var o,a={},s={},r={"infinity://weather":"weather","infinity://todos":"todos","infinity://notes":"notepad","infinity://history":"history","infinity://bookmarks":"bookmarks","infinity://gmail":"gmail","infinity://extension":"apps","infinity://settings":"setting"};return s.autoWallpaper=!1,s.minimalistMode=!1,s.startAnimation=t.isOpenStartAnimation,s.openInNewtab=t.isOpenLinkInNewTab,s.displayAtTop=t.isShowTopBar,s.displayTopType="bookmarks"==t.topBarType?"Bookmarksbar":"mostVisited",s.OpenBookmarksInNewtab=t.isOpenBookmarkInNewTab,s.searchBox=t.isShowSearchBox,s.searchType=t.isShowSearchType,s.searchInNewtab=t.isSearchInNewTab,s.GmailMessage=t.isOpentGmailNotication,s.blurWallpaper=t.isBlurWallpaper,s.notificationSound=t.isOpentGmailRingNotication,s.iconOpacity=t.iconOpacity,s.iconFillet=t.iconBorderRadius,s.iconNum=t.column+"x"+t.row,s.temperatureUnit=t.tempUnitC?"Celsius":"Fahrenheit",s.fontColor=t.fontColor,s.todosfalse=n.todos.dones.map(function(i,t){return i.text}),s.todostrue=n.todos.todos.map(function(i,t){return i.text}),s.notes=n.notes.map(function(i,t){return i.title=i.text.substr(0,10)||infinity.i18n("new_edit_notes"),i}),s.searchBottom=e.additions.map(function(t,i){try{t.searchStart=t.url.split("%s")[0],t.searchEnd=t.url.split("%s")[1]}catch(i){t.searchStart="",t.searchEnd=""}return t}),o=i.map(function(i){return i.map(function(i){var t={};return t.type=r[i.url]||"ico",t.url=i.url,t.name=i.name,i.bgColor&&(t.bgColor=i.bgColor,0!=i.bgColor.indexOf("rgb")&&0!=t.bgColor.indexOf("#")&&"transparent"!=t.bgColor&&(t.bgColor="#"+i.bgColor)),t.ico=i.src,"text"==i.customType&&(t.title=i.showText,t.type="custom"),"image"==i.customType&&(t.title="",t.type="custom"),t})}),a.setting=encodeURIComponent(JSON.stringify(s)),a.main=encodeURIComponent(JSON.stringify(o)),a}};