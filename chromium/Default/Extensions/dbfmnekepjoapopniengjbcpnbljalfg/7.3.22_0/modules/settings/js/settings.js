"use strict";infinity.modules["settings-settings"]=function(){return new Vue({el:"#v-settings",data:{user:null,settings:null,isChrome:"Chrome"==infinity.browser,wallpaperSmall:{default:"https://infinitypro-img.infinitynewtab.com/findaphoto/bigLink/15236.jpg?imageMogr2/auto-orient/thumbnail/400x/blur/1x0/quality/100|imageslim",auto:"",bing:"",local:""},colors:[{select:!0,id:"rgba(255,255,255,0.9)",value:"dddddd",border:"dddddd",bgImage:"none"},{select:!1,id:"1abc9c",value:"1abc9c",border:"1abc9c",bgImage:"none"},{select:!1,id:"2ecc71",value:"2ecc71",border:"2ecc71",bgImage:"none"},{select:!1,id:"33c5c5",value:"33c5c5",border:"33c5c5",bgImage:"none"},{select:!1,id:"3498db",value:"3498db",border:"3498db",bgImage:"none"},{select:!1,id:"9b59b6",value:"9b59b6",border:"9b59b6",bgImage:"none"},{select:!1,id:"34495e",value:"34495e",border:"34495e",bgImage:"none"},{select:!1,id:"f1c40f",value:"f1c40f",border:"f1c40f",bgImage:"none"},{select:!1,id:"e67e22",value:"e67e22",border:"e67e22",bgImage:"none"},{select:!1,id:"e74c3c",value:"e74c3c",border:"e74c3c",bgImage:"none"}],suggestionUrl:"/pages/feedback/feedback.html"},created:function(){var i=this;i.user=infinity.get("infinity-user"),i.settings=infinity.get("infinity-settings"),i.handleMessage(),i.onOpen()},methods:{closeOverhide:function(){var i=this.settings.isShowTopBar,n=this.settings.topBarType;i&&"bookmarks"==n?(infinity.import("top-bookmarks","#bookmarkbar",function(i){i.show()},!0),$(".app-top").css("overflow","visible")):$(".app-top").css("overflow","hidden")},openOverhide:function(){$(".app-top").css("overflow","visible")},onUserStatusChange:function(){this.user=infinity.get("infinity-user")},onOpen:function(){var n=this;$(".i-settings").on("transitionend",function(i){0<=i.target.className.indexOf("i-settings")&&0<=i.target.className.indexOf("i-side-show")&&(n.initSelectColor(),infinity.require("/modules/settings/js/i-data.js").then(function(){}),$(".bg").addClass("bg-transition"))})},close:function(){iView.hideSideBar()},handleMessage:function(){var n=this;infinity.onMessage("userStatusChange",function(){n.onUserStatusChange()}),infinity.onMessage("accountDeleteSuccess",function(){n.onUserStatusChange()}),infinity.onMessage("loginOrLogout",function(){infinity.setting("isAutoBackUp",!1),n.settings.isAutoBackUp=!1}),infinity.onMessage("settingChange",function(i){n.settings=infinity.get("infinity-settings"),"fontColor"==i.type&&n.initSelectColor()}),infinity.onMessage("wallpaperTypeChange",function(){n.settings=infinity.get("infinity-settings")}),infinity.onMessage("onRecoverySetView",function(){n.settings=infinity.get("infinity-settings"),n.initSelectColor()})},initSelectColor:function(){var e=this.settings.fontColor.replace("#","");this.colors.map(function(i,n){i.select=!1,i.id==e?i.select=!0:i.select=!1})},toLocalBackupTime:function(i){var n=parseInt(i);if(n){var e=new Date(n);return e.toLocaleDateString()+" "+e.toLocaleTimeString()}return infinity.i18n("you_did_not_backup")},openLoginBox:function(){infinity.import("login","body",function(i){i.init()})},onRegister:function(){infinity.open("_blank","/pages/sign-up/sign-up.html")},openMyAccount:function(i){i.stopPropagation();this.openLoginBox()},onBackupData:function(){iData&&iData.onBackupData()},onRecoveryData:function(){iData&&iData.onRecoveryData()},onChangeIconBorderRadius:function(){infinity.setting("iconBorderRadius",this.settings.iconBorderRadius),infinity.css.render(),infinity.sendMessage("backupToCloud")},onChangeIconOpacity:function(){infinity.setting("iconOpacity",this.settings.iconOpacity),infinity.css.render(),infinity.sendMessage("backupToCloud")},onChangeViewZoom:function(){infinity.setting("viewZoom",this.settings.viewZoom),_app.setZoom()},onChangeSettingCheckBox:function(n){var e=this,t=e.settings[n];if("isShowGmailNum"!=n&&"isOpentGmailNotication"!=n){if("isShowTopBar"==n&&(e.closeOverhide(),e.settings.topBarType),"isAutoBackUp"==n)return SETTING.isAutoBackUp?void infinity.setting(n,t):void(iData&&iData.checkAutoBackup());infinity.setting(n,t),_app.initTopBar(_app),infinity.css.render(),infinity.sendMessage("backupToCloud"),"isShowSearchBtn"==n&&Search&&Search.reloadSetting()}else!0===t?setTimeout(function(){chrome.permissions.contains({permissions:["notifications"],origins:["https://mail.google.com/*"]},function(i){i?(infinity.setting(n,!0),infinity.sendMessage("backupToCloud")):chrome.permissions.request({permissions:["notifications"],origins:["https://mail.google.com/*"]},function(i){i?(infinity.setting(n,t),infinity.sendMessage("backupToCloud")):e.settings[n]=!1})})},200):(infinity.setting(n,!1),infinity.sendMessage("backupToCloud"))},onChangeSettingRadio:function(i){var n=this;"topBarType"==i&&(n.closeOverhide(),"bookmarks"==n.settings.topBarType&&chrome.bookmarks),"wallpaperType"==i?(infinity.setting(i,n.settings[i]),infinity.sendMessage("backupToCloud"),"random"!=n.settings[i]&&infinity.sendMessage("wallpaperChange")):(infinity.setting(i,n.settings[i]),infinity.sendMessage("backupToCloud")),"topBarType"==i&&_app.initTopBar(_app)},handleWallpaperSelect:function(){infinity.chooseFile().then(function(i){var n={base64:i};infinity.sendMessage("saveLocalWallpaper",n)})},randomWp:function(){var i=iView.getRandomWallpaper(),n=new Image;n.src=i,n.onload=function(){infinity.sendMessage("wallpaperChange")}},onSetDefaultWallpaper:function(){infinity.alert({html:infinity.i18n("recovery_default_wp"),autoCloseTime:1}),infinity.sendMessage("setDefaultWallpaper"),infinity.setting("wallpaperType","local"),this.settings.wallpaperType="local",infinity.sendMessage("backupToCloud")},onSetLayout:function(i,n){this.settings.column=i,this.settings.row=n,infinity.setting("column",i),infinity.setting("row",n),infinity.sendMessage("setLayout",{column:i,row:n}),infinity.sendMessage("backupToCloud")},onSetFontColor:function(e){this.colors.map(function(i,n){i.select=!1,i.id==e.id&&(i.select=!0)});var i=void 0;i=0<=e.id.indexOf("rgb")?e.id:"#"+e.id,infinity.setting("fontColor",i),infinity.css.render(),infinity.sendMessage("backupToCloud")},onGenerateBackupFile:function(){iData&&iData.onGenerateBackupData()},onDownloadWallpaper:function(){var i=$(".bg").css("background-image").match(/^url\("(.+)"\)$/)[1],n=document.createElement("a");n.href=i,n.download="infinity-wallpaper.jpg",n.click(),n.remove()},onRecoveryFromFile:function(){iData&&iData.onRecoveryFromFile()}}})};