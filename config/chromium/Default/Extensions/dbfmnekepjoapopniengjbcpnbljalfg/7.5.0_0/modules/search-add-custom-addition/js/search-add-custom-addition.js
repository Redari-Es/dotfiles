"use strict";infinity.modules["search-add-custom-addition-search-add-custom-addition"]=function(){return new Vue({el:"#v-search-add-custom-addition",data:{searches:{all:[],customEngines:[]},editing:!1,isNewAddition:!1,originAddition:null,addition:null},created:function(){this.initData(),infinity.onMessage("onRecoverySetView",this.initData),infinity.onMessage("searchAddChange",this.initData),infinity.onMessage("currentSearchChange",this.initData),infinity.onMessage("reloadSearches",this.initData)},methods:{save:function(){infinity.set("infinity-searches",this.searches),infinity.sendMessage("searchAddChange"),infinity.sendMessage("backupToCloud"),Search.initData(),infinity.modules["search-add-default"]&&infinity.modules["search-add-default"].initData(),infinity.modules["search-add-custom-normal"]&&infinity.modules["search-add-custom-normal"].initData()},initData:function(){var i=infinity.get("infinity-searches");i.customEngines||(i.customEngines=[]),this.searches=i},deleteAddition:function(i){var t=this.searches.additions;t.splice(t.indexOf(i),1),this.save()},topAddition:function(i){var t=this.searches.additions;t.splice(t.indexOf(i),1),t.unshift(i),this.save()},startCreateAddition:function(){var i=this;i.editing=!0,i.isNewAddition=!0,i.addition={name:"",url:"",type:"addse"}},startUpdateAddition:function(i){var t=this;t.editing=!0,t.isNewAddition=!1,t.originAddition=i,t.addition=JSON.parse(JSON.stringify(i))},cancelEditAddition:function(){this.editing=!1},createAddition:function(){var i=this;i.validate()&&(i.searches.additions.push(JSON.parse(JSON.stringify(i.addition))),i.editing=!1,i.save())},updateAddition:function(){var i,t,n=this;n.validate()&&(i=n.searches.additions,t=n.originAddition,-1!==i.indexOf(t)&&i.splice(t,1,JSON.parse(JSON.stringify(n.addition))),n.editing=!1,n.save())},validate:function(){var i=this.addition;return!(!i.name||!i.url)&&this.checkSearchUrl(i.url)},checkSearchUrl:function(i){if(i.indexOf("%s")<0||0!=i.indexOf("http://")&&0!=i.indexOf("https://"))return this.errorUrlNoti(),!1;try{return new URL(i).origin,!0}catch(i){return this.errorUrlNoti(),!1}},errorUrlNoti:function(){infinity.alert({html:infinity.i18n("please_input_correct_search_url"),autoCloseTime:1.5})},parseUrl:function(i){try{return new URL(i).origin}catch(i){return!1}}}})};