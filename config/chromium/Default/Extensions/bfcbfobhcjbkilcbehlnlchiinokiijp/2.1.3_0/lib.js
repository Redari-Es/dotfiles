function ilog(...e){}const extId=chrome.runtime.id;function sendMsgToExt(e,n={},t){let o=extId;void 0!==t&&(o=extId+t);const i={id:o+e,body:n};return new Promise(e=>{chrome.runtime.sendMessage(chrome.runtime.id,i,n=>{ilog("sendMsgToExt msg:",i,"response:",n),e(n)})})}function sendMsgToTab(e,n,t={}){const o={id:extId+n,body:t};return new Promise(n=>{chrome.tabs.sendMessage(e,o,e=>{ilog("sendMsgToTab msg:",o,"response:",e),n(e)})})}function listenToMsg(e,n,t=(()=>!0)){chrome.runtime.onMessage.addListener((o,i,c)=>{let s=extId+e;if(i.tab&&i.tab.id&&(s=extId+i.tab.id+e),s===o.id&&t(o,i)&&n)return setTimeout(()=>{n({msg:o.body,replyFunc:c})},10),!0})}function connectWithExt(e){chrome.runtime.connect(chrome.runtime.id,{name:extId+e})}function connectWithTab(e,n){chrome.tabs.connect(e,{name:extId+n})}function onConnect(e,n){chrome.runtime.onConnect.addListener(function(t){t.name===extId+e&&n(t)})}function onDisconnect(e,n){e.onDisconnect.addListener(function(e){n(e)})}function getTabId(e){chrome.runtime.sendMessage({action:"get_my_tab_id"},({tabId:n})=>{e(n)})}function getUniqueId(){}