"use strict";var Search=new Vue({el:"#search",created:function(){var t=this;t.initData(),t.initSearchSuggestions(),infinity.onMessage("onRecoverySetView",t.initData),infinity.onMessage("currentSearchChange",t.initData),infinity.onMessage("searchAddChange",t.initData),infinity.onMessage("reloadSearches",t.initData),infinity.onMessage("searchSuggestionsChange",t.initSearchSuggestions),t.hideSuggesstion(),$(document).on("keydown","#search-input",function(e){13==e.which&&t.go()}),window.tempSearchData={time:0,tag:"",data:[]},window.tempAdData={time:0,tag:"",data:[]}},data:{inlineAll:[{name:"search",seId:"dd3af9cc97ad7de8984baaf59514bb52",logo:"https://infinity-permanent.infinitynewtab.com/infinity/search-add/mychromesearch.png",types:[{name:"web",url:"https://mychromesearch.com/search?ac=1826515628&q=%s"},{name:"images",url:"https://www.google.com/search?tbm=isch&q=%s"},{name:"news",url:"https://www.google.com/search?tbm=nws&q=%s"},{name:"videos",url:"https://www.google.com/search?tbm=vid&q=%s"},{name:"maps",url:"https://www.google.com/maps/preview?q=%s"}]}],isOpenSelect:!1,typeSelect:0,searches:null,input:"",suggestions:[],searchSuggesutAjaxZh:!1,searchSuggesutAjaxEn:!1,searchSuggesutAjaxOther:!1,searchSuggesutAjaxEcosia:!1,searchSuggesutAd:!1,suIndex:-1,preInput:"",showSu:!0,isShowSearchBtn:SETTING.isShowSearchBtn,logoSuffix:"Chrome"==infinity.browser?"?imageView2/0/format/webp/q/48/v/1":"?imageView2/0/format/png/q/48/v/1",searchSuggestions:null},methods:{save:function(){infinity.set("infinity-searches",this.searches),infinity.sendMessage("currentSearchChange"),infinity.sendMessage("backupToCloud"),infinity.modules["search-add-default"]&&infinity.modules["search-add-default"].initData(),infinity.modules["search-add-custom-addition"]&&infinity.modules["search-add-custom-addition"].initData(),infinity.modules["search-add-custom-normal"]&&infinity.modules["search-add-custom-normal"].initData(),infinity.modules["search-add-custom-addition"]&&infinity.modules["search-add-custom-addition"].initData()},initData:function(){this.searches=infinity.get("infinity-searches")},initSearchSuggestions:function(){var t=this;infinity.get("infinity-search-suggestions",!0,function(e){t.searchSuggestions=e})},reloadSetting:function(){this.isShowSearchBtn=SETTING.isShowSearchBtn},openSearchSelect:function(){this.isOpenSelect=!0},hideSearchSelect:function(){this.isOpenSelect=!1,$("#search-input")[0].focus()},changeSearch:function(e){var t=this;t.searches.current=e,t.isOpenSelect=!1,t.typeSelect=0,$("#search-input")[0].focus(),t.save()},changeType:function(e){this.typeSelect=e,$("#search-input")[0].focus()},deleteSearch:function(e){var t=this.searches,s=t.all.indexOf(e);-1!==s&&(t.all.splice(s,1),this.save())},hideSuggesstion:function(){var t=this;$(document).on("click",function(e){t.suggestions=[],window.tempSearchData.data=[],window.tempAdData.data=[]})},onSearchBtn:function(){$("#search-input")[0].focus();this.go()},go:function(e,t){t&&t.stopPropagation();var s=this,a=void 0,n=SETTING.isSearchInNewTab?"_blank":"_self";e=e||s.suggestions[s.suIndex],infinity.sendMessage("ga-search",s.searches.current),(a=e?"suggs"==e.type?e.url?e.url:s.searches.current.types[s.typeSelect].url.replace("%s",encodeURIComponent(e.text)):e.url.replace("%s",encodeURIComponent(s.input)):s.searches.current.types[s.typeSelect].url.replace("%s",encodeURIComponent(s.input)))&&("_blank"==n&&(s.input=""),s.suggestions=[],window.tempSearchData.data.data=[],window.tempAdData.data=[],s.showSu=!1,window.open(a,n))},useISFeedSearch:function(){},showAddSide:function(){infinity.import("search-add",".side-all",function(){$(".i-search-add").removeClass("i-side-hide"),$(".i-search-add")[0].offsetHeight,$(".i-search-add").addClass("i-side-show")});try{iView.showCover()}catch(e){}},inputSuggest:function(){this.startSuggest()},keyupSuggest:function(e){32==e.which&&this.startSuggest()},startSuggest:function(){var e=this;if(e.showSu=!0,e.preInput=e.input,e.suIndex=-1,""==e.input)return e.suggestions=[],window.tempSearchData.data=[],window.tempAdData.data=[],e.searchSuggesutAjaxZh&&e.searchSuggesutAjaxZh.abort(),e.searchSuggesutAjaxEn&&e.searchSuggesutAjaxEn.abort(),e.searchSuggesutAjaxOther&&e.searchSuggesutAjaxOther.abort(),e.searchSuggesutAjaxEcosia&&e.searchSuggesutAjaxEcosia.abort(),void(e.searchSuggesutAd&&e.searchSuggesutAd.abort());infinity.isZh()?e.getZhSuggestion():e.getEcosiaSuggestion()},getZhSuggestion:function(){var i=this;i.searchSuggesutAjaxZh&&i.searchSuggesutAjaxZh.abort(),i.searchSuggesutAjaxZh=$.get({url:"https://infinity-api.infinitynewtab.com/baidu_suggestion?keyword="+encodeURIComponent(i.input),dataType:"text",success:function(e){try{var t=e.substr(0,e.length-3).split(",s:")[1],a=JSON.parse(t),n=[];a.map(function(e,t){var s={type:"suggs",text:a[t],textIsUrl:!1,url:null,img:null,labelRequired:!1};n.push(s)});var s=i.searches.additions.concat(n.splice(0,7));i.suggestions=s}catch(e){}}})},getEnSuggestion:function(){var s=this;s.searchSuggesutAjaxEn&&s.searchSuggesutAjaxEn.abort(),s.searchSuggesutAjaxEn=$.get({url:s.searchSuggestions.ampfeed.url+encodeURIComponent(s.input),dataType:"json",success:function(e){try{var t=[];e.paid_suggestions&&(t=t.concat(e.paid_suggestions.map(function(e){return infinity.pixelRequest(e.impression_url),{type:"suggs",text:e.term,textIsUrl:!1,url:e.click_url,img:e.image_url,labelRequired:e.label_required}}))),e.organic_suggestions&&(t=t.concat(e.organic_suggestions.map(function(e){return{type:"suggs",text:e.term,textIsUrl:!1,url:null,labelRequired:!1,img:null}}))),s.suggestions=s.searches.additions.concat(t.splice(0,7))}catch(e){}}})},getEcosiaSuggestion:function(){var c=this;if(c.searchSuggesutAjaxEcosia){c.searchSuggesutAjaxEcosia.abort();try{c.searchSuggesutAd.abort()}catch(e){}}var e=Math.random().toString(36).substring(7);window.tempSearchData.tag=e,window.tempAdData.tag=e,c.searchSuggesutAd=$.get({url:"http://kla81.siteplug.com/sssapi?o=kla81&s=32054&kw="+encodeURIComponent(c.input)+"&itype=cs&f=json&i=1&it=1&is=48x48&ua="+encodeURIComponent(navigator.userAgent)+"&n=1&af=0&di=f3deb223fb23ba3ba",dataType:"json",success:function(e){try{var t=[];if(e.ads.hasOwnProperty("ad"))if(Array.isArray(e.ads.ad)){var s=!0,a=!1,n=void 0;try{for(var i,u=e.ads.ad[Symbol.iterator]();!(s=(i=u.next()).done);s=!0){var r=i.value;t.push({type:"ads",textIsUrl:!0,text:r.brand,url:r.rurl,imgurl:r.iurl,labelRequired:!1})}}catch(e){a=!0,n=e}finally{try{!s&&u.return&&u.return()}finally{if(a)throw n}}}else{var o=e.ads.ad;t.push({type:"ads",textIsUrl:!0,text:o.brand,url:o.rurl,imgurl:o.iurl,labelRequired:!1})}window.tempAdData.time=Date.now(),window.tempAdData.data=t,c.suggestions=c.searches.additions.concat(t.concat(window.tempSearchData.data)),window.tempAdData.tag===window.tempSearchData.tag&&window.tempAdData.time>window.tempSearchData.time&&-1!=c.suIndex&&(c.suIndex=c.suIndex+window.tempAdData.data.length)}catch(e){}}}),c.searchSuggesutAjaxEcosia=$.get({url:"https://ac.ecosia.org/?q="+encodeURIComponent(c.input)+"&mkt="+chrome.i18n.getUILanguage().toLowerCase(),dataType:"json",success:function(e){try{var a=[];e.suggestions.map(function(e,t){var s={type:"suggs",textIsUrl:!1,text:e,url:null,labelRequired:!1};a.push(s)});var t=a.splice(0,7);window.tempSearchData.data=t,window.tempSearchData.time=Date.now(),c.suggestions=window.tempAdData.data.concat(c.searches.additions.concat(t))}catch(e){}}})},getOtherSuggestion:function(){var e=this;e.searchSuggesutAjaxOther&&e.searchSuggesutAjaxOther.abort(),e.searchSuggesutAjaxOther=$.get({url:"https://suggestiong.infinitynewtab.com/complete/search?client=chrome&q="+encodeURIComponent(e.input)+"&hl="+chrome.i18n.getUILanguage(),dataType:"json",success:function(a){try{var n=[];a[2].map(function(e,t){var s={type:"suggs",textIsUrl:!1,text:a[1][t],url:null,labelRequired:!1};""!=e&&(s.textIsUrl=!0,s.url=s.text),n.push(s)}),e.suggestions=e.searches.additions.concat(n.splice(0,7))}catch(e){}}})},down:function(e){e.preventDefault();var t=this;t.suIndex+=1,t.suIndex==t.suggestions.length?(t.suIndex=-1,t.input=t.preInput):t.suggestions[t.suIndex].text?t.input=t.suggestions[t.suIndex].text:t.input=t.preInput},up:function(e){e.preventDefault();var t=this;--t.suIndex,-2==t.suIndex&&(t.suIndex=t.suggestions.length-1),-1!=t.suIndex&&t.suggestions[t.suIndex].text?t.input=t.suggestions[t.suIndex].text:t.input=t.preInput}}});