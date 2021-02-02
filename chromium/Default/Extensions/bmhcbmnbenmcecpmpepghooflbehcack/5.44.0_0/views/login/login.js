var loginType = null;

function handleLocalMessage(event) {
  if (event.name == "LOGIN_INIT") {
    loginType = event.message.type;

    doLocalization();
    setUI();
    addEvents();    
  }
}

$(document).ready(function() {
  messageToNative("GA_PAGEVIEW", {
    path: "/liner-" + getBrowserName() + "-extension-login"
  });

  // Luke - 아래 메세지를 통해서 popover 정보가 initialize됨
  // Luke - handleLocalMessage의 LOGIN_INIT으로 가며, 이렇게 하는 이유는 Firefox에서 browser.extension.getBackgroundPage()가 iframe에서 작동하지 않기 때문
  messageToNative("LOGIN_INIT", {});
});

function doLocalization() {
  $('.container .label').html(localize("Log in to save highlights"));
  $('.loginBtn').html(localize("Log In"));
}

function setUI() {
  // Luke - title label
  if (getBrowserName() != 'unknown') {
    var browserName = getBrowserName();
    $('.titleLabel .browser').text(browserName.charAt(0).toUpperCase() + browserName.slice(1));
  }

  if (loginType == 'comment') {
    $('.container .label').text(localize('Log in to save comments'));
  }
}

function addEvents() {
  $('.loginBtn').click(function(e) {
    messageToNative("GA_EVENT", {
      category : 'extension',
      action : 'login',
      label: ''
    });
    messageToNative("CLOSE_POPOVER", {});
  });
}
