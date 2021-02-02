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
  if (sidCookie) {
    $.ajax({
      type: proto.toUpperCase(),
      url: `${lksServer}${endpoint}`,
      headers: {
        "Authorization": `Bearer ${sidCookie}`
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
    "html": doc,
  };

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
    "title": title ? title : "",
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
    "title": title ? title : "",
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
    "tid" : "UA-126096459-10",
    "cid" : userID ? userID : getUid(),
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
    "tid" : "UA-126096459-10",
    "cid" : userID ? userID : getUid(),
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
    "cid" : userID ? userID : getUid(),
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
    "cid" : userID ? userID : getUid(),
    "t" : "event",
    "ec" : category,
    "ea" : action,
    "el" : label,
    "ul" : navigator.language
  };

  logger(params);
  http("https://www.google-analytics.com", "/collect", "GET", params, function(json) {});
}
