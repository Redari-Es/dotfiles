"use strict";infinity.modules["search-add-custom-normal-search-add-custom-normal"]=function(){return new Vue({el:"#v-search-add-custom-normal",data:{searches:{all:[],customEngines:[]},editing:!1,saving:!1,customEngine:null,customEngineLogo:{colors:[{select:!1,id:"transparent",value:"transparent",border:"ccc",bgImage:"url(/icon/transparent.png)"},{select:!0,id:"1abc9c",value:"1abc9c",border:"1abc9c",bgImage:"none"},{select:!1,id:"2ecc71",value:"2ecc71",border:"2ecc71",bgImage:"none"},{select:!1,id:"33c5c5",value:"33c5c5",border:"33c5c5",bgImage:"none"},{select:!1,id:"3498db",value:"3498db",border:"3498db",bgImage:"none"},{select:!1,id:"9b59b6",value:"9b59b6",border:"9b59b6",bgImage:"none"},{select:!1,id:"34495e",value:"34495e",border:"34495e",bgImage:"none"},{select:!1,id:"f1c40f",value:"f1c40f",border:"f1c40f",bgImage:"none"},{select:!1,id:"e67e22",value:"e67e22",border:"e67e22",bgImage:"none"},{select:!1,id:"e74c3c",value:"e74c3c",border:"e74c3c",bgImage:"none"},{select:!1,id:"picker",value:"3b3333",border:"3b3333",bgImage:"none"}]},logoSuffix:"Chrome"===infinity.browser?"?imageView2/0/format/webp/q/48/v/1":"?imageView2/0/format/png/q/48/v/1"},created:function(){this.initData(),infinity.onMessage("onRecoverySetView",this.initData),infinity.onMessage("searchAddChange",this.initData),infinity.onMessage("currentSearchChange",this.initData),infinity.onMessage("reloadSearches",this.initData)},methods:{save:function(){infinity.set("infinity-searches",this.searches),infinity.sendMessage("searchAddChange"),infinity.sendMessage("backupToCloud"),Search.initData(),infinity.modules["search-add-default"]&&infinity.modules["search-add-default"].initData(),infinity.modules["search-add-custom-addition"]&&infinity.modules["search-add-custom-addition"].initData()},initData:function(){var e=infinity.get("infinity-searches");e.customEngines||(e.customEngines=[]),this.searches=e},deleteCustomEngine:function(e){var n=this.searches;if(n.current.seId!==e.seId){n.customEngines.splice(n.customEngines.indexOf(e),1);for(var i=n.all,t=0,s=i.length;t<s;t++)i[t].seId===e.seId&&i.splice(t,1);this.save()}else infinity.alert({html:infinity.i18n("can_not_delete_current_search_engine"),autoCloseTime:1.5})},addCustomEngine:function(e){this.searches.all.push(JSON.parse(JSON.stringify(e))),this.save()},checkCustomEngineAdded:function(e){var n=this.searches.all,i=!0,t=!1,s=void 0;try{for(var o,r=n[Symbol.iterator]();!(i=(o=r.next()).done);i=!0){if(o.value.seId===e.seId)return!0}}catch(e){t=!0,s=e}finally{try{!i&&r.return&&r.return()}finally{if(t)throw s}}return!1},startCreateCustomEngine:function(){this.editing=!0,this.customEngine={seId:"",isCustom:!0,name:"",logo:"",bgColor:"transparent",types:[{url:"",name:infinity.i18n("web")}]}},startUpdateCustomEngine:function(e){this.editing=!0,this.customEngine=JSON.parse(JSON.stringify(e))},cancelEditCustomEngine:function(){this.editing=!1},pickCustomEngineLogo:function(){var i=this;infinity.chooseFile().then(function(n){i.customEngineLogo.selectColor={select:!0,id:"transparent",value:"transparent",border:"ccc",bgImage:"url(/icon/transparent.png)"},i.customEngineLogo.colors.map(function(e){"transparent"===e.id?e.select=!0:e.select=!1}),infinity.import("cropper","body",function(e){e.show(i.customEngineLogo),e.onEditImage(n,!0,function(e){i.customEngine.logo=e,i.customEngine.bgColor=i.customEngineLogo.selectColor.value})})})},editCustomEngineLogo:function(){var n=this,i=n.customEngine,t=!1,s=null;n.customEngineLogo.colors.map(function(e){e.value===i.bgColor?(t=!0,e.select=!0,n.customEngineLogo.selectColor=JSON.parse(JSON.stringify(e))):e.select=!1,"picker"===e.id&&(s=e)}),t||(s.select=!0,s.value=i.bgColor,s.border=i.bgColor,n.customEngine.selectColor=JSON.parse(JSON.stringify(s))),infinity.import("cropper","body",function(e){e.show(n.customEngineLogo),e.onEditImage(n.customEngine.logo,!0,function(e){n.customEngine.logo=e,n.customEngine.bgColor=n.customEngineLogo.selectColor.value})})},deleteCustomEngineLogo:function(){this.customEngine.logo="",this.customEngine.bgColor="transparent"},validate:function(){var e=this.customEngine;return!!(e.name&&e.types[0].url&&e.logo)&&this.checkSearchUrl(e.types[0].url)},createCustomEngine:function(){var n=this;if(!n.saving&&n.validate()){n.saving=!0;var i=JSON.parse(JSON.stringify(n.customEngine));i.seId=infinity.randomId(900),infinity.sendMessage("uploadCustomSearchEngineIcon2Qiuniu",{src:i.logo},function(e){e?(i.logo=e,n.searches.customEngines.push(i),n.searches.all.push(JSON.parse(JSON.stringify(i))),n.save(),n.editing=!1):infinity.alert({html:infinity.i18n("add_fail_due_to_network_error"),isShowCloseBtn:!0,isShowOkBtn:!0,okBtn:infinity.i18n("got_it")}),n.saving=!1})}},updateCustomEngineToSearches:function(e){this.saving=!1,this.editing=!1;for(var n=this.searches,i=n.customEngines,t=0,s=i.length;t<s;t++){if(i[t].seId===e.seId){i.splice(t,1,JSON.parse(JSON.stringify(e)));break}}for(var o=n.all,r=0,a=o.length;r<a;r++){if(o[r].seId===e.seId){o.splice(r,1,JSON.parse(JSON.stringify(e)));break}}n.current.seId===e.seId&&(n.current=e),this.save()},updateCustomEngine:function(){var n=this;if(!n.saving&&n.validate()){n.saving=!0;var i=JSON.parse(JSON.stringify(n.customEngine));infinity.isUrl(i.logo)?infinity.sendMessage("uploadCustomSearchEngineIcon2Qiuniu",{src:i.logo},function(e){e?(i.logo=e,n.updateCustomEngineToSearches(i)):(infinity.alert({html:infinity.i18n("add_fail_due_to_network_error"),isShowCloseBtn:!0,isShowOkBtn:!0,okBtn:infinity.i18n("got_it")}),n.saving=!1)}):n.updateCustomEngineToSearches(i)}},errorUrlNoti:function(){infinity.alert({html:infinity.i18n("please_input_correct_search_url"),autoCloseTime:1.5})},checkSearchUrl:function(e){if(e.indexOf("%s")<0||0!=e.indexOf("http://")&&0!=e.indexOf("https://"))return this.errorUrlNoti(),!1;try{return new URL(e).origin,!0}catch(e){return this.errorUrlNoti(),!1}}}})};