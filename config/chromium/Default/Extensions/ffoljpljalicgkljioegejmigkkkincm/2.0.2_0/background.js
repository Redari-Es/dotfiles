function onInstall(e) {
  // if first install, open options page
  if(e && e.reason == "install") {
    chrome.runtime.openOptionsPage();
  }
}
chrome.runtime.onInstalled.addListener(onInstall);