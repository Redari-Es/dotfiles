$(document).ready(function() {
  logger('endpoints.js loaded');
});

var server = "https://getliner.com";
var shareServer = "https://share.getliner.com";
var iamServer = "https://iam.getliner.com";
var brazeServer = "https://braze.getliner.com";
var lksServer = "https://lks.getliner.com";
var publicIP;
var pipCounter = 0;

function http(server, endpoint, proto, params, callback) {
  if (pipCounter%15 == 0) {
    pipCounter = 1;
    http('https://api.ipify.org', '', 'GET', {format: 'json'}, function(json) {
      try {
        publicIP = json.ip;
      } catch(e) {
        publicIP = undefined;
      }
    })
  } else {
    pipCounter += 1;
  }

  $.ajax({
    type: proto.toUpperCase(),
    url: `${server}${endpoint}`,
    data: params,
    success: function(json){
      callback(json);
    },
    error: function(xhr, status, error) {
      callback(xhr.responseJSON);
    }
  });
}

function httpLKSWithoutSidCookie(endpoint, proto, params, callback) {
  $.ajax({
    type: proto.toUpperCase(),
    url: `${lksServer}${endpoint}`,
    data: proto.toUpperCase() == "POST" ? JSON.stringify(params) : params,
    success: function(json){
      callback(json);
    },
    error: function(xhr, status, error) {
      callback(xhr.responseJSON);
    }
});
}

function httpLKS(endpoint, proto, params, callback) {
  if (sidCookie !== undefined || params.override_login === true) {
    $.ajax({
      type: proto.toUpperCase(),
      url: `${lksServer}${endpoint}`,
      headers: { 
        "Authorization": `Bearer ${sidCookie ?? ''}`
      },
      data: proto.toUpperCase() == "POST" ? JSON.stringify(params) : params,
      success: function(json){
        callback(json);
      },
      error: function(xhr, status, error) {
        callback(xhr.responseJSON);
      }
    });
    return;
  }
  callback({});
}

// liner knowledge system endpoints
function lksGetDocuments(urls, filterOption, callback) {
  const params = {
    urls,
    filter_option: filterOption,
  }

  httpLKSWithoutSidCookie('/documents', 'POST', params, function(json) {
    callback(json);
  });
}

function lksGetRecommendationsByHighlight(phrase, url, title, size, callback) {
  const params = {
    phrase,
    url,
    title,
  }

  httpLKS(`/recommendation/document/byphrase?size=${size}`, 'POST', params, function(json) {
    callback(json);
  });
}

function lksViewRecommendationsByHighlight(userId, urls, recommendationMethod, callback) {
  const params = {
    logs: []
  };

  urls.forEach(url => {
    const param = getLKSBaseParams();
    param.user_id = userId;
    param.action_type = 'view';
    param.resource_type = 'document';
    param.resource_info = {
      "url": url
    };  
    param.access_type = 'recommend';
    param.access_method = recommendationMethod;

    params.logs.push(param);
  })

  httpLKS('/log/user/bulk', "POST", params, function(json) {
    callback(json);
  });
}

function lksDocBookmark(userId, url, keywords, recommendationMethod, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'bookmark';
  params.resource_type = 'document';
  params.resource_info = {
    url,
    keywords,
  };
  params.access_type = 'recommend';
  params.access_method = recommendationMethod;

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksDocCancelBookmark(userId, url, recommendationMethod, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'cancel_bookmark';
  params.resource_type = 'document';
  params.resource_info = {
    url,
  };
  params.access_type = 'recommend';
  params.access_method = recommendationMethod;

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksDocClickRecommendationByHighlight(userId, url, recommendationMethod, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'click';
  params.resource_type = 'document';
  params.resource_info = {
    url,
  };
  params.access_type = 'recommend_by_highlight';
  params.access_method = recommendationMethod;

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  }); 
}

function lksDocClickRecommendationByPickedByLiner(userId, url, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'click';
  params.resource_type = 'document';
  params.resource_info = {
    url,
  };
  params.access_type = 'picked_by_liner';

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  }); 
}

function lksDocCreate(userId, url, doc, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'create';
  params.resource_type = 'document';
  params.resource_info = {
    "url": url,
  };
  
  if (doc !== undefined) {
    params.resource_info.html = doc;
  }

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksDocDelete(userId, url, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'delete';
  params.resource_type = 'document';
  params.resource_info = {
    "url": url
  };

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksDocShare(userId, url, shareType, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'share';
  params.resource_type = 'document';
  params.resource_info = {
    "url": url
  };
  params.action_info = {
    "share_type": shareType
  };

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksHighlightCreate(userId, url, title, phrase, highlight, color, relHeight, fontSize, fontWeight, fontStyle, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'create';
  params.resource_type = 'phrase';
  params.resource_info = {
    "url": url,
    "title": title ?? "",
    "phrase_text": phrase,
    "selected_text": highlight,
    "color": color.toUpperCase(),
    "relative_height": relHeight,
    "label": "information",
    "font_size": fontSize,
    "font_weight": fontWeight,
    "font_style": fontStyle
  };

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksHighlightShare(userId, url, phrase, shareType, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'share';
  params.resource_type = 'phrase';
  params.resource_info = {
    "url": url,
    "phrase_text": phrase
  };
  params.action_info = {
    "share_type": shareType
  }

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksCommentCreate(userId, url, phrase, highlight, comment, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'create';
  params.resource_type = 'annotation';
  params.resource_info = {
    "url": url,
    "phrase_text": phrase,
    "selected_text": highlight,
    "comment": comment
  };

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksCommentModify(userId, url, phrase, highlight, comment, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'modify';
  params.resource_type = 'annotation';
  params.resource_info = {
    "url": url,
    "phrase_text": phrase,
    "selected_text": highlight,
    "comment": comment
  };

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksTagCreate(userId, tagTitle, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'create';
  params.resource_type = 'tag';
  params.resource_info = {
    "title": tagTitle
  };

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksTagAdd(userId, tagTitles, urls, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'add';
  params.resource_type = 'tag';
  params.resource_info = {
    "titles": tagTitles
  };
  params.action_info = {
    "documents": urls
  }

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksReadDoc(userId, url, keywords, scrollDownRatio, readDuration, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'read';
  params.resource_type = 'document';
  params.resource_info = {
    "url": url,
    "keywords": keywords
  };
  params.action_info = {
    "scroll_down_ratio": scrollDownRatio,
    "read_duration": readDuration
  }

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksReReadDoc(userId, url, scrollDownRatio, readDuration, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'revisit';
  params.resource_type = 'document';
  params.resource_info = {
    "url": url
  };
  params.action_info = {
    "scroll_down_ratio": scrollDownRatio,
    "read_duration": readDuration
  }

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksCopyPhrase(userId, url, title, phrase, copiedText, relHeight, fontSize, fontWeight, fontStyle, callback) {
  const params = getLKSBaseParams();
  params.user_id = userId;
  params.action_type = 'copy';
  params.resource_type = 'phrase';
  params.resource_info = {
    "url": url,
    "title": title ?? "",
    "phrase_text": phrase,
    "selected_text": copiedText,
    "relative_height": relHeight,
    "font_size": fontSize,
    "font_weight": fontWeight,
    "font_style": fontStyle
  };

  httpLKS('/log/user', "POST", params, function(json) {
    callback(json);
  });
}

function lksAutoComplete(userId, startsWith, anchor, size, callback) {
  const params = {
    "user_id": userId,
    "starts_with": startsWith,
    anchor,
    size
  };

  httpLKS('/autocomplete', "GET", params, function(json) {
    callback(json);
  });
}

function lksGetSearchResult(userId, query, callback) {
  const params = {
    query,
    override_login: true,
  };

  httpLKS(`/search/document?${userId !== undefined ? `user_id=${userId}&` : ``}size=20`, 'POST', params, function(json) {
    callback(json);
  });
}


// get prioritized eligible campaign list
function getEligibleCampaigns(userId, callback) {
  const params = {
    "user_id" : userId
  };
  http(iamServer, "/campaigns", "GET", params, function(json) {
    callback(json);
  });
}

// cache share page on server
function getSharePage(shareId) {
  http(shareServer, "/" + shareId, "GET", {}, function (json) {

  });
}

// user endpoints
function getUsersMe(callback) {
  http(server, "/users/me", "GET", {}, function(json) {
    callback(json);
  });
}

// auth endpoints
function postAuthCookie(callback) {
  http(server, "/auth/cookie", "GET", {}, function(json) {
    callback(json);
  });
}

function postAuthLocal(email, password, callback) {
  const params = {
    "email" : email,
    "passwd" : password
  };

  http(server, "/auth/local", "POST", params, function(json) {
    callback(json);
  });
}

function getAuthFacebook(accessToken, callback) {
  const params = {
    "access_token" : accessToken
  };

  http(server, "/auth/facebook", "GET", params, function(json) {
    callback(json);
  });
}

function getAuthTwitter(oauthToken, oauthTokenSecret, userID, callback) {
  const params = {
    "oauth_token" : oauthToken,
    "oauth_token_secret" : oauthTokenSecret,
    "user_id" : userID
  };

  http(server, "/auth/twitter", "GET", params, function(json) {
      callback(json)
  })
}

function postAuthGoogle(code, callback) {
  const params = {
    "code" : code
  };

  http(server, "/auth/google", "POST", params, function(json) {
    callback(json);
  });
}

function deleteAuth(callback) {
  http(server, "/auth", "DELETE", {}, function(json) {
    callback(json);
  });
}

// index endpoints
function getCheckServer(platform, info, appVersion, callback) {
  const params = {
    "device" : platform,
    "info" : info,
    "app_version" : appVersion
  };

  http(server, "/checkServer", "GET", params, function(json) {
    callback(json);
  });
}

function postLinerVersion(platform, version, callback) {
  const params = {
    "platform" : platform,
    "version" : version
  };

  http(server, "/liner-version", "POST", params, function(json) {
    callback(json);
  });
}

// page endpoints
function postPagesInfos(pageID, originalURL, status, callback) {
  let params = {};
  if (pageID != null) {
    params = {
      "page_id" : pageID
    };
  } else {
    params = {
      "original_url" : originalURL,
      "status" : status
    }
  }

  http(server, "/pages/infos", "POST", params, function(json) {
    callback(json);
  });
}

function postPagesSummary(originalURL, status, callback) {
  const params = {
    "original_url" : originalURL,
    "status" : status
  };

  http(server, "/pages/summary", "POST", params, function(json) {
    callback(json);
  });
}

function postPagesAnnotations(originalURL, styleItemID, content, callback) {
  const params = {
    "original_url" : originalURL,
    "style_item_id" : styleItemID,
    "content" : content
  };

  http(server, "/pages/annotations", "POST", params, function(json) {
    callback(json);
  });
}

// Luke - 페이지 최초 저장 할 때 부르는 함수
function postPages(title, url, imageURL, styleItems, lang, callback) {
  const params = {
    "title" : title,
    "url" : url,
    "image" : imageURL,
    "engineVersion" : "0.2.0",
    "styleItems" : styleItems,
    "lang" : lang
  };

  http(server, "/pages", "POST", params, function(json) {
    callback(json);
  });
}

function postPagesPageID(pageID, styleItems, callback) {
  const params = {
    "style_items" : styleItems
  };

  http(server, "/pages/" + pageID, "POST", params, function(json) {
    callback(json);
  });
}

function postPagesPageIDHighlightID(pageID, highlightID, color, doDelete, callback) {
  let params = {};
  if (color) {
    params = {
      "color" : color
    }
  } else if (doDelete) {
    params = {
      "do_delete" : doDelete
    }
  }

  http(server, "/pages/" + pageID + "/" + highlightID, "POST", params, function (json) {
    callback(json);
  });
}

function putPage(pageIDs, originalStatus, newStatus, callback) {
  const params = {
    "page_ids" : pageIDs,
    "original_status" : originalStatus,
    "new_status" : newStatus
  };

  http(server, "/pages", "PUT", params, function(json) {
    callback(json);
  });
}


// pdf endpoints
function postUserFilePdfWithUrl(fileUrl, callback) {
  const params = {
    "fileUrl" : fileUrl
  };
  
  http(server, "/user/file/pdf/withUrl", "POST", params, function(json) {
    callback(json);
  });
}

async function postUserFilePdf(pdfBlobUrl, callback) {
  let pdfBlob = await fetch(pdfBlobUrl).then(r => r.blob());        
  
  const fileSize = pdfBlob.size;
  if (user.premium == 0 && !isNaN(fileSize) && fileSize >= 3000000) {
    callback(false);
    return;
  }

  var formData = new FormData();
  formData.append('file', pdfBlob); // 파일 한 개만 허용

  $.ajax({
    type: 'POST',
    url: `${server}/user/file/pdf`,
    data: formData,
    processData: false,
    contentType: false,
    success: function(json){
      callback(json);
    },
    error: function(xhr, status, error) {
      callback(xhr.responseJSON);
    }
  });
}


// tag endpoints
function getUserTag(callback) {
  http(server, "/user/tag", "GET", {}, function(json) {
    callback(json);
  });
}

function postPageSaveSaveIdTag(saveId, tagTitle, callback) {
  const params = {
    tagTitle
  }
  http(server, `/page/save/${saveId}/tag`, "POST", params, function(json) {
    callback(json);
  })
}

function deletePageSaveSaveIdTag(saveId, tagId, callback) {
  const params = {
    tagId
  }
  http(server, `/page/save/${saveId}/tag`, "DELETE", params, function(json) {
    callback(json);
  })
}


// Braze endpoints
function postBrazeCustomEvent(userID, eventName, callback) {
  const params = {
    "user_id" : userID,
    "app_group" : "LINER_web",
    "event_name" : eventName
  };

  if (!userID) {
    return;
  }

  http(brazeServer, "/custom/event", "POST", params, function(json) {
    callback(json);
  });
}

// GA Endoints
function getGAPageView(userID, title, path) {
  const params = {
    "v" : 1,
    "tid" : "UA-126096459-12",
    "cid" : userID ?? getUid(),
    "t" : "pageview",
    "dp" : path,
    "dt" : title,
    "ul" : navigator.language
  };

  logger(params);
  http("https://www.google-analytics.com", "/collect", "GET", params, function(json) {})
}

function getGAEvent(userID, category, action, label) {
  const params = {
    "v" : 1,
    "tid" : "UA-126096459-12",
    "cid" : userID ?? getUid(),
    "t" : "event",
    "ec" : category,
    "ea" : action,
    "el" : label,
    "ul" : navigator.language
  };

  logger(params);
  http("https://www.google-analytics.com", "/collect", "GET", params, function(json) {});
}


// GA Recommendation Endpoints
function getGARecommendationPageView(userID, title, path) {
  const params = {
    "v" : 1,
    "tid" : "UA-126096459-11",
    "cid" : userID ?? getUid(),
    "t" : "pageview",
    "dp" : path,
    "dt" : title,
    "ul" : navigator.language
  };

  logger(params);
  http("https://www.google-analytics.com", "/collect", "GET", params, function(json) {})
}

function getGARecommendationEvent(userID, category, action, label) {
  const params = {
    "v" : 1,
    "tid" : "UA-126096459-11",
    "cid" : userID ?? getUid(),
    "t" : "event",
    "ec" : category,
    "ea" : action,
    "el" : label,
    "ul" : navigator.language
  };

  logger(params);
  http("https://www.google-analytics.com", "/collect", "GET", params, function(json) {});
}

function initAmplitude() {
  try {
    const amplitudeKey = "ac91207b66aa64e62645c137841d7062";  // Luke - prod
    // const amplitudeKey = "5f4b790d5adfccc2cc21048da620a586"; // Luke - test
    amplitude.getInstance().init(amplitudeKey, {includeReferrer: true, includeUtm: true});
  } catch(e) {}
}

function setAmplitudeUserId() {
  try {
    if (user.id !== undefined && user.id > 0) {
      amplitude.getInstance().setUserId(user.id);
    }
  } catch(e) {}
};

function setAmplitudeUserDevice(installationToken) {
  try {
    setAmplitudeUserId();
    amplitude.getInstance().setDeviceId(installationToken);
  } catch(e) {}
};

function setAmplitudeUserProperties(properties) {
  try {
    setAmplitudeUserId();
    amplitude.getInstance().setUserProperties(properties);
  } catch(e) {}
};

function setAmplitudeUserProperty(property, value) {
  try {
    setAmplitudeUserId();
    var identify = new amplitude.Identify().set(property, value);
    amplitude.getInstance().identify(identify);  
  } catch(e) {}
};

function incrementAmplitudeUserProperty(property, count) {
  try {
    setAmplitudeUserId();
    var identify = new amplitude.Identify().add(property, count);
    amplitude.getInstance().identify(identify);  
  } catch(e) {}
};

function sendAmplitudeData(eventType, eventProperties) {
  try {
    setAmplitudeUserId();
    amplitude.getInstance().logEvent(eventType, eventProperties);
  } catch(e) {}
};

