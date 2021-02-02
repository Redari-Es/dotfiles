$(document).ready(function() {
  logger('helper.js loaded');
});

var isProductionMode = true; // todo: production에 올릴 때는 true로 바꾸기
var browser = getBrowser();
var contentScriptArray = [
  "/liner-core.be.js"
];
var contentCSSArray = [];

browser.runtime.onInstalled.addListener(function(details) {
  injectContentScriptsAndCSS();

  if (details.reason == 'install') {
    setLinerVersion(browser.runtime.getManifest().version);
    postBrazeCustomEvent(user["id"], getBrowserName() + "_extension_installed", function(json) {});
    getGAEvent(user["id"], "extension", "install", browser.runtime.getManifest().version);
    openTab('https://getliner.com/guide/browser-extension', function() {});

    doTrackInstallEvent = true;
  } else if (details.reason == 'update') {
    if (getLinerVersion() != "" && getLinerVersion() != browser.runtime.getManifest().version) {
      setLinerVersion(browser.runtime.getManifest().version);
      getGAEvent(user["id"], "extension", "update", browser.runtime.getManifest().version);
    }
  }
});

function getBrowserName() {
  // Luke - Safari: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15
  // Luke - Chrome: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36
  // Luke - Firefox: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:67.0) Gecko/20100101 Firefox/67.0
  // Luke - Whale: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Whale/1.5.72.6 Safari/537.36
  // Luke - Opera: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.168 Safari/537.36 OPR/51.0.2830.40
  // Luke - Edge: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14931
  // Luke - Edge 2: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.74 Safari/537.36 Edg/79.0.309.43

  try {
    if (navigator.userAgent.indexOf('Firefox') != -1) {
      // Luke - this is firfox browser
      return 'firefox';
    } else if (navigator.userAgent.indexOf('Chrome') != -1) {
      if (navigator.userAgent.indexOf('Whale') != -1) {
        // Luke - this is whale browser
        return 'whale';
      } else if (navigator.userAgent.indexOf('OPR') != -1) {
        // Luke - this is opera browser
        return 'opera';
      } else if (navigator.userAgent.indexOf('Edge') != -1 || navigator.userAgent.indexOf('Edg') != -1) {
        // Luke - this is edge browser
        return 'edge';
      } else {
        // Luke - this is chrome browser
        return 'chrome';
      }
    } else if (navigator.userAgent.indexOf('Safari') != -1) {
      // Luke - this is safari browser
      return 'safari';
    }
  } catch(e) {
    logger(e);
  }
  return "unknown";
}

function injectContentScriptsAndCSS() {
  logger("inject content script and css");

  browser.tabs.query({}, function(tabs) {
    for (var i=0; i<tabs.length; i++) {
      var page = tabs[i];
      for (var j=0; j<contentScriptArray.length; j++) {
        logger('inject content script - ' + contentScriptArray[j]);
        executeJSFile(page, contentScriptArray[j], function(result) {});
      }

      for (var j=0; j<contentCSSArray.length; j++) {
        logger('inject content css - ' + contentCSSArray[j]);
        executeCSSFile(page, contentCSSArray[j], function(result) {});
      }
    }
  });
}

browser.runtime.setUninstallURL(server + '/goodbye/index.html');



function executeScript(page, script, callback) {
  browser.tabs.executeScript(page.id, {
    code: script
  }, function(result) {
    callback(result);
  });
}

function executeCSSFile(page, file, callback) {
  browser.tabs.insertCSS(page.id, {
    file: file
  }, function(result) {
    callback(result);
  });
}

function executeJSFile(page, file, callback) {
  browser.tabs.executeScript(page.id, {
    file: file
  });
};



function logger(content) {
  if (!window.isProductionMode) {
    console.log(content);
  }
}

function setLinerVersion(value) {
  localStorage.setItem('liner_version', value);
}

function getLinerVersion() {
  var linerVersion = localStorage["liner_version"];
  if (linerVersion) {
    return linerVersion;
  }
  return "";
}

function getUid() {
  var uid = localStorage.getItem("uid") ?? createDeviceID();
  localStorage.setItem('uid', uid);
  return uid;
}

function createDeviceID() {
    var d = new Date().getTime();
    var uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uid;
}

function openTab(url, callback) {
  chrome.tabs.create({'url': url}, function(tab) {
    callback();
  });
}

function getURLWithoutHash(url) {
  return url.split('#')[0];
}

function getBrowser() {
  if (window.safari && !window.safari.id) {
    logger('initialize as safari extension');
    return window.safari;
  }

  if (window.whale) {
    logger("intialize as whale extension");
    return window.whale;
  }

  logger("initialize as chrome/firefox/opera/edge extension");
  return chrome;
}

function setToolbarItem(page, title, iconType) {
  browser.browserAction.setTitle({
    tabId: page.id,
    title: title
  });

  browser.browserAction.setIcon({
    tabId: page.id,
    path: {
      "16": "/images/icon/icon-" + iconType + "-16.png",
      "32": "/images/icon/icon-" + iconType + "-32.png",
      "48": "/images/icon/icon-" + iconType + "-48.png",
      "128": "/images/icon/icon-" + iconType + "-128.png"
    }
  });
}

function copyToClipBoard(content) {
  var temp = $('<textarea class="copyInput">');
  $('body').append(temp);
  temp.val(content).select();
  document.execCommand("copy");
  temp.remove();
};

function getFileSize(url, callback) {
    var fileSize = 0;
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false); // false = Synchronous
    http.send(null); // it will stop here until this http request is complete
    if (http.status === 200) {
        fileSize = http.getResponseHeader('content-length');
    }
    callback(parseInt(fileSize));
}

function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'macos';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'ios';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows';
  } else if (/Android/.test(userAgent)) {
    os = 'android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'linux';
  }
  return os;
}

function getLKSBaseParams() {
  return {
    "device_type": "pc",
    "device_os": getOS(),
    "user_agent": getBrowserName() == "unknown" ? undefined : getBrowserName(),
    "occurred_at": parseInt((new Date()).getTime()/1000),
    "ip": publicIP
  }
}

const sortByChar = (tags) => {
  const sortedTags = tags.slice().sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)); 
  return sortedTags
}

const removeDuplicatedTags = (tags) => {
  let tagTitles = [];
  let duplicateRemovedTags = [];
  tags.forEach(tag => {
    if (tagTitles.indexOf(tag.title) == - 1) {
      tagTitles.push(tag.title);
      duplicateRemovedTags.push(tag);
    }
  });
  return duplicateRemovedTags;
}

function getUniqueRecommendedDocs(documents, currentPageTitle) {
  try {
    let uniqueRecDocs = [];
    for (var i=0; i<documents.length; i++) {
      let isUnique = true;

      if (similarity(documents[i].title, currentPageTitle) > 0.9) {
        isUnique = false;
      } else if (currentPageTitle.indexOf(documents[i].title) !== -1 || documents[i].title.indexOf(currentPageTitle) !== -1) {
        isUnique = false;
      } else {
        for (var j=0; j<uniqueRecDocs.length; j++) {
          if (uniqueRecDocs[j].url === documents[i].url || documents[i].title.indexOf((uniqueRecDocs[j].title)) !== -1) {
            isUnique = false;
            break;
          }
        }
      }

      if (isUnique === true) {
        uniqueRecDocs.push(documents[i]);
      }
    }
    return uniqueRecDocs;
  } catch(e) {}
  return documents;
}

function isRPClosed() {
  if (localStorage.getItem('is_rp_closed') !== null) {
    return JSON.parse(localStorage.getItem('is_rp_closed'));
  }

  if (user.premium === 1) {
    localStorage.setItem('is_rp_closed', false);
    return false;      
  }

  localStorage.setItem('is_rp_closed', true);
  return true;
}

function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}