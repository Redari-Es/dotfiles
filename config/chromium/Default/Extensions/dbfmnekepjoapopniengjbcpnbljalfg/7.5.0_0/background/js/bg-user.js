"use strict";var bgUser={init:function(){infinity.init("infinity-local-data",this.localData),infinity.init("infinity-user",this.user),infinity.onMessage("bg-userStatusChange",function(){infinity.sendMessage("userStatusChange")}),infinity.onMessage("bg-loginOrLogout",function(){infinity.sendMessage("loginOrLogout")}),infinity.onMessage("recoverySuccess",function(){infinity.sendMessage("onRecoverySetView")})},localData:{backupTime:0},user:{isLogin:!1,avatar:"",gender:"",name:"",secret:"",uid:"",email:"",password:"","user-backup":0,"auto-backup":0,"auto-backup-data":0,"auto-backup-icon":0,"auto-backup-wallpaper":0}};