"use strict";infinity.modules["edit-edit"]=function(){return new Vue({el:"#v-edit",data:{colors:[{select:!1,id:"transparent",value:"transparent",border:"ccc",bgImage:"url(/icon/transparent.png)"},{select:!0,id:"1abc9c",value:"1abc9c",border:"1abc9c",bgImage:"none"},{select:!1,id:"2ecc71",value:"2ecc71",border:"2ecc71",bgImage:"none"},{select:!1,id:"33c5c5",value:"33c5c5",border:"33c5c5",bgImage:"none"},{select:!1,id:"3498db",value:"3498db",border:"3498db",bgImage:"none"},{select:!1,id:"9b59b6",value:"9b59b6",border:"9b59b6",bgImage:"none"},{select:!1,id:"34495e",value:"34495e",border:"34495e",bgImage:"none"},{select:!1,id:"f1c40f",value:"f1c40f",border:"f1c40f",bgImage:"none"},{select:!1,id:"e67e22",value:"e67e22",border:"e67e22",bgImage:"none"},{select:!1,id:"e74c3c",value:"e74c3c",border:"e74c3c",bgImage:"none"},{select:!1,id:"picker",value:"3b3333",border:"3b3333",bgImage:"none"}],selectColor:{id:"1abc9c",value:"1abc9c",border:"1abc9c",bgImage:"none"},croppedImage:null,isShowCustomAddLoading:!1,cusUrl:"",cusName:"",showText:"",updateTime:0,customIconType:"text",page:0,index:0},created:function(){this.onInitEdit()},methods:{close:function(){iView.hideSideBar()},init:function(i,e,n){var t=this;t.page=e,t.index=n,t.cusName=i.name||"",t.cusUrl=i.url||"",t.showText=i.showText,t.updateTime=i.updateTime||0,t.setInitColor(i.bgColor||"transparent"),i.src?(t.croppedImage=i.src,t.customIconType="image",infinity.import("cropper","body",function(e){e.show(t,!0),e.onEditImage(i.src,!1,function(e){t.croppedImage=e})})):(t.customIconType="text",t.croppedImage=null)},setInitColor:function(n){var t=this,o=!0;t.colors.map(function(e,i){e.select=!1,e.value==n&&(e.select=!0,o=!1,t.selectColor=e)}),o&&t.setPickerColor(n)},setPickerColor:function(n){var t=this;t.colors.map(function(e,i){"picker"==e.id?(e.select=!0,e.value=n,e.border=n,t.selectColor=JSON.parse(JSON.stringify(e))):e.select=!1})},onInitEdit:function(){var i=this;infinity.require("color-picker",!0).then(function(){var e=new CP(document.querySelector(".edit-color-item-picker"));e.set("rgb(255,255,255)"),e.on("exit",function(e,i,n){}),e.on("enter",function(e,i,n){}),e.on("start",function(e){i.setPickerColor(e)}),e.on("drag",function(e){i.setPickerColor(e)})})},onSelectColor:function(e){"picker"!=e.id&&(this.colors.map(function(e,i){e.select=!1}),e.select=!0,this.selectColor=e)},selectImage:function(){var n=this;infinity.chooseFile().then(function(i){n.selectColor={select:!0,id:"transparent",value:"transparent",border:"ccc",bgImage:"url(/icon/transparent.png)"},n.colors.map(function(e,i){"transparent"==e.id?e.select=!0:e.select=!1}),infinity.import("cropper","body",function(e){e.show(n),n.customIconType="image",e.onEditImage(i,!0,function(e){n.croppedImage=e})})})},editImage:function(){var i=this;infinity.import("cropper","body",function(e){e.show(i)})},removeImage:function(){this.customIconType="text",this.croppedImage=""},inputUrl:function(){var n=this;$.debounce(1500,!1,function(){var e=infinity.isUrl(n.cusUrl);e.isValid&&$.get(e.str,function(e){var i="";try{i=$(e).filter(function(e,i){return"TITLE"==i.tagName})[0].text}catch(e){}"Redirect"!=i&&(n.cusName=i,n.showText=n.cusName.substr(0,2).toUpperCase(),n.showBgColor=!0)})})()},inputName:function(){this.showText=this.cusName.substr(0,2).toUpperCase()},onEditDone:function(){var i=this;if(!i.isShowCustomAddLoading){i.isShowCustomAddLoading=!0;var e=infinity.isUrl(i.cusUrl),n="";n=!e.isValid||i.cusUrl&&0==i.cusUrl.indexOf("app://")?i.cusUrl:e.str;var t={iconType:"custom",customType:i.customIconType,name:i.cusName,url:n,showText:i.showText,updateTime:i.updateTime,bgColor:i.selectColor.value,uid:infinity.randomId(900),src:""};if(i.croppedImage&&0==i.croppedImage.indexOf("chrome://extension-icon/"))return t.src=i.croppedImage,i.editIcon(t),void(i.isShowCustomAddLoading=!1);if(i.croppedImage){i.isShowCustomAddLoading=!0;var o={src:i.croppedImage};infinity.sendMessage("upload2Qiuniu",o,function(e){e?(t.src=e,i.editIcon(t),i.isShowCustomAddLoading=!1):(i.isShowCustomAddLoading=!1,infinity.alert({html:infinity.i18n("edit_failed_due_to_net_work"),isShowCloseBtn:!0,isShowOkBtn:!0,okBtn:infinity.i18n("got_it")}))})}else i.editIcon(t),i.isShowCustomAddLoading=!1}},editIcon:function(e){var i=this,n=infinity.get("infinity-icons");n[i.page][i.index]=e,infinity.set("infinity-icons",n),_app.data.groups=n,_app.render();var t=$(".group:nth-child("+(i.page+1)+")").find(".icon-item-out:nth-child("+(i.index+1)+")");t.addClass("infinity-zoom-show"),t.one(animationendEvent,function(){$(this).removeClass("infinity-zoom-show")}),infinity.alert({html:infinity.i18n("has_update",e.name),autoCloseTime:1.5}),i.close(),infinity.sendMessage("icon-handle",{type:"edit"}),infinity.sendMessage("backupToCloud")}}})};