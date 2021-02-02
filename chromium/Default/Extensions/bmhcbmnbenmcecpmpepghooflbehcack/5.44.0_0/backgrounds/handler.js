$(document).ready(function() {
  logger('handler.js loaded');

  // Luke - Safari Extension이 아닌 경우 background script들이 가끔 날아가기 때문에 아래 코드가 필요함
  resetVariables();
});

var user = {};
var highlightedPages = {} // Luke - URL - Dictionary
var sharingContent = "";
var tags = null;
var iamCampaign = {};

var lksRecommendationsByHighlight = [];
var lksRecommendationMethod = "";

var loginViewType = ""; // Luke - highlight, comment, save

// Luke - 아래 변수는 Safari Extension에는 없음
var disabledTabIDs = {} // Luke - tabID - Boolean

// Luke - for lks
var sidCookie;
var prevPage = null;

function resetVariables() {
    getUser(function(result) {
      if (result) {
        browser.tabs.query({}, function(tabs) {
          injectData(0);
          function injectData(index) {
            if (index == tabs.length) {
              // Luke - iteration finished
              return;
            }

            var page = tabs[index];
            var url = page.url;

            // Luke - inject user data
            messageTo(page, "USER_INFO", user);

            // Luke - fetch and inject highlight data
            postPagesInfos(null, url, 0, function(json) {
              if (json["status"] == "success") {
                var item = json["item"] || {};
                highlightedPages[getURLWithoutHash(item["url"])] = {
                  "page_id" : item["pageId"],
                  "tags": item["tags"],
                  "style_items" : item["styleItems"],
                  "share_id" : item["shareId"],
                  "comments" : [],
                  "new_highlights" : []
                }

                postPagesSummary(item["url"], 0, function(json) {
                  if (json["status"] == "success") {
                    var items = json["items"]
                    highlightedPages[getURLWithoutHash(item["url"])]["comments"] = items || [];
                  }
                  messageTo(page, "PAGE_INFO", highlightedPages[getURLWithoutHash(item["url"])]);

                  injectData(parseInt(index) + 1);
                });
              } else {
                // Luke - not highlighted page
                injectData(parseInt(index) + 1);
              }
            });
          }          
        });
        fetchTagsFromServer(function() {});
      }
    });
}



// Luke - content -> background로 메세지가 옴
// Luke - 아래 함수의 형태는 Safari Extension과 최대한 유사한 구조로 구현함(Safari로부터의 Porting을 쉽게 하기 위함)
function messageReceived(messageName, page, userInfo) {
  logger("message received - handler");
  logger(messageName);

  if (messageName === "LKS_EVENT") {
    const eventType = userInfo["type"];
    if (eventType === "doc_share") {
      lksDocShare(user.id, userInfo["url"], userInfo["share_type"], function(json) {})
    } else if (eventType === "highlight_create") {
      lksHighlightCreate(user.id, userInfo["url"], userInfo["title"], userInfo["phrase"], userInfo["highlight"], userInfo["color"], userInfo["rel_height"], userInfo["font_size"], userInfo["font_weight"], userInfo["font_style"], function(json) {});
    } else if (eventType === "highlight_share") {
      lksHighlightShare(user.id, userInfo["url"], userInfo["phrase"], userInfo["share_type"], function(json) {});
    } else if (eventType === "comment_create") {
      lksCommentCreate(user.id, userInfo["url"], userInfo["phrase"], userInfo["highlight"], userInfo["comment"], function(json) {});
    } else if (eventType === "comment_modify") {
      lksCommentModify(user.id, userInfo["url"], userInfo["phrase"], userInfo["highlight"], userInfo["comment"], function(json) {});
    } else if (eventType === "read_doc") {
      lksReadDoc(user.id, userInfo["url"], userInfo["keywords"], userInfo["scroll_down_ratio"], userInfo["read_duration"], function(json) {})
    } else if (eventType === "re_read_doc") {
      lksReReadDoc(user.id, userInfo["url"], userInfo["scroll_down_ratio"], userInfo["read_duration"], function(json) {});
    } else if (eventType === "copy_phrase") {
      lksCopyPhrase(user.id, userInfo["url"], userInfo["title"], userInfo["phrase"], userInfo["copied_text"], userInfo["rel_height"], userInfo["font_size"], userInfo["font_weight"], userInfo["font_style"], function(json) {});
    } else if (eventType === "bookmark") {
      lksDocBookmark(user.id, userInfo["url"], userInfo["keywords"], userInfo["recommendation_method"], function(json) {});
    } else if (eventType === "cancel_bookmark") {
      lksDocCancelBookmark(user.id, userInfo["url"], userInfo["recommendation_method"], function(json) {});      
    } else if (eventType === "click_recommendation_by_highlight") {
      lksDocClickRecommendationByHighlight(user.id, userInfo["url"], userInfo["recommendation_method"], function(json) {});
    } else if (eventType === "click_recommendation_by_picked_by_liner") {
      lksDocClickRecommendationByPickedByLiner(user.id, userInfo["url"], function(json) {});
    } else if (eventType === "view_recommendation_by_highlight") {
      lksViewRecommendationsByHighlight(user.id, userInfo["urls"] !== undefined ? userInfo["urls"] : [], userInfo["recommendation_method"], function(json) {});
    }
    return;
  } else if (messageName === "LKS_GET_DOCUMENTS") {
    lksGetDocuments(userInfo["urls"] !== undefined ? userInfo["urls"] : [], { scrap_cnt : 2 }, function(json) {
      messageTo(page, "LKS_GET_DOCUMENTS", {
        documents: json,
      });
    });
  } else if (messageName === "LKS_GET_RECOMMENDATIONS_BY_HIGHLIGHT") {
    if (user.id === undefined || user.id === 0) {
      return;
    }
    
    messageTo(page, "SHOW_RECOMMENDATION_POPOVER_SPINNER", {});

    lksGetRecommendationsByHighlight(userInfo["phrase"], userInfo["url"], userInfo["title"], 3, function(json) {
      lksRecommendationsByHighlight = json.items;
      lksRecommendationMethod = json.method;

      if (lksGetRecommendationsByHighlight.length === 0) {
        messageTo(page, 'HIDE_RECOMMENDATIONS_BY_HIGHLIGHT', {});
        return;
      }

      const recommendationViewHeight = 41 + 73*lksRecommendationsByHighlight.length + 8;

      if (userInfo["is_recommendations_showing"] === true) {
        messageTo(page, 'RELOAD_RECOMMENDATION_POPOVER', {
          user,
          documents: lksRecommendationsByHighlight,
          recommendation_method: lksRecommendationMethod,
          style: `height: ${recommendationViewHeight}px !important`
        });
      } else {
        executeCSSFile(page, '/views/recommendation/iframe-recommendation.css', function(result) {
          messageTo(page, 'INJECT_POPOVER', {
            class: 'liner-popover liner-popover-recommendation',
            src: browser.extension.getURL('/views/recommendation/recommendation.html'),
            style: `height: ${recommendationViewHeight}px !important`
          });
        });
      }
    });
  } else if (messageName === "RELOAD_RECOMMENDATION_POPOVER") {
    const recommendationViewHeight = 41 + 73*lksRecommendationsByHighlight.length + 8;

    messageTo(page, 'RELOAD_RECOMMENDATION_POPOVER', {
      user,
      documents: lksRecommendationsByHighlight,
      recommendation_method: lksRecommendationMethod,
      style: `height: ${recommendationViewHeight}px !important`
    });
  } else if (messageName === "UPDATE_USER_INFO_IN_BACKGROUND") {
    getUser(function(result) {});
  } else if (messageName === "INIT_PDF_UPLOAD_BTN") {
    messageTo(page, "INIT_PDF_UPLOAD_BTN", {
      did_see_pdf_banner: getDidSeePDFBanner()
    });
    saveDidSeePDFBanner();
  } else if (messageName === "UPLOAD_PDF_WITH_URL") {
    if (user.id) {
      const fileUrl = userInfo["url"];
      getFileSize(fileUrl, function(fileSize) { 
        if (user.premium == 0 && !isNaN(fileSize) && fileSize >= 3000000) {
          // Luke - 무료 사용자가 3메가바이트 이상을 업로드하려 할 때
          getGAEvent(user['id'], 'extension', 'upgrade_to_upload_pdf', fileUrl);
          alert(`${localize('Upgrade to LINER Premium to unlock this feature.')}\n${localize('Basic Plan: 3MB file upload limit')}`);
          openTab(`${server}/upgrade`, function() {});
          messageTo(page, "UPLOAD_PDF_WITH_URL_COMPLETE", {});
          return;
        }

        postUserFilePdfWithUrl(fileUrl, function(json) {
          if (json["status"] === "error" && json["reason"] === "not_auth") {
            openTab(`${server}/signup`, function() {});
          }
          messageTo(page, "UPLOAD_PDF_WITH_URL_COMPLETE", {
            pdf_url: json["pdfUrl"]
          });      
        });
      })
    } else {
      // Luke - 로그인 안된 사용자
      openTab(`${server}/signup`, function() {});
      messageTo(page, "UPLOAD_PDF_WITH_URL_COMPLETE", {});      
    }
  } else if (messageName == "SET_ELIGIBLE_FOR_ONBOARDING_EC") {
    setEligibleForOnboardingEC();
  } else if (messageName == "POPOVER_INIT") {
    retryGetActivePage(0);

    function retryGetActivePage(retryCnt) {
      if (parseInt(retryCnt) > 200) {
        return;
      }

      getActivePage(function(page) {
        if (highlightedPages[getURLWithoutHash(page.url)] === undefined) {
          setTimeout(function() {
            retryGetActivePage(parseInt(retryCnt) + 1);
          }, 100);
          return;
        }

        messageTo(page, "POPOVER_INIT", {
          user: user,
          highlighted_pages: highlightedPages,
          page: page
        });
      });  
    }
    return;
  } else if (messageName == "CHANGE_POPOVER_HEIGHT") {
    messageTo(page, "CHANGE_POPOVER_HEIGHT", {
      height: userInfo["height"],
      popover_class: userInfo["popover_class"]
    });
    return;
  } else if (messageName == "DELETE_ALL_HIGHLIGHTS") {
    messageTo(page, "DELETE_ALL_HIGHLIGHTS", {});
    delete highlightedPages[getURLWithoutHash(page.url)];
    putPage([userInfo["page_id"]], 0, 2, function(json) {});
    lksDocDelete(user.id, page.url, function() {});
    return;
  } else if (messageName == "IAM_INIT") {
    messageTo(page, "IAM_INIT", {
      iam_campaign: iamCampaign
    });
    return;
  } else if (messageName == "SHOW_IAM") {
    // Luke - IAM Banner를 Fade In 시키는 메세지
    showIAM(page);
    return;
  } else if (messageName == "CLOSE_IAM") {
    // Luke - IAM Banner를 Fade Out 시키는 메세지
    hideIAM(page, userInfo["remove_iam"] ? userInfo["remove_iam"] : false);

    if (userInfo["never_show_again"] && iamCampaign.launch_status == 2) {
      // Luke - Production IAM이고, 사용자가 다시 보지 않기를 선택했으면 해당 Campaign은 이 브라우저에서 다시 노출시키지 않음
      saveClosedCampaign(parseInt(iamCampaign.id));
    }

    if (userInfo["never_show_again"] && iamCampaign.id == 0) {
      // Luke - Ongoing Onboarding Campaign Close 버튼
      setOnboardingECCloseCnt();
      setLatestOnboardingECCloseDate();
    }
    return;
  } else if (messageName == "LOGIN_INIT") {
    messageTo(page, "LOGIN_INIT", {
      type: loginViewType
    });
    return;
  } else if (messageName == "TAG_POPOVER_INIT") {
    retry(0);

    function retry(retryCnt) {
      if (retryCnt > 200) {
        return
      }
      
      try {
        messageTo(page, "TAG_POPOVER_INIT", {
          tags,
          added_tags: highlightedPages[getURLWithoutHash(page.url)].tags
        });
      } catch(e) {
        setTimeout(() => {
          retry(parseInt(retryCnt) + 1);
        }, 10);  
      };
    }
    return;
  } else if (messageName == "TAG_INPUT_CHANGE") {
    const hasTags = tags != null && tags.length > 0;
    const addedTags = highlightedPages[getURLWithoutHash(page.url)].tags;
    const didAddAllTags = tags.length == addedTags.length;
    const input = userInfo["input"] ? userInfo["input"] : "";
    if (input.trim() == "" && (!hasTags || didAddAllTags)) {
      messageTo(page, "HIDE_TAG", {});
    } else {
      messageTo(page, "SHOW_TAG", {
        top: userInfo["top"] ? userInfo["top"] : 0,
        my_tags: tags,
        added_tags: highlightedPages[getURLWithoutHash(page.url)].tags,
        input,
      });
      messageTo(page, "TAG_INPUT_CHANGE", {
        input
      });
      lksAutoComplete(user.id, input, undefined, 20, function(json) {
        messageTo(page, "TAG_AUTOCOMPLETE", {
          input,
          suggestions: json
        });
      });
    }
    return;
  } else if (messageName == "TAG_INPUT_FOCUS") {
    const hasTags = tags != null && tags.length;
    const addedTags = highlightedPages[getURLWithoutHash(page.url)].tags;
    const didAddAllTags = tags.length == addedTags.length;
    if (hasTags && !didAddAllTags) {
      messageTo(page, "SHOW_TAG", {
        top: userInfo["top"] ? userInfo["top"] : 0,
        my_tags: tags,
        added_tags: highlightedPages[getURLWithoutHash(page.url)].tags
      });  
    }
    return;
  } else if (messageName == "HIDE_TAG") {
    messageTo(page, "HIDE_TAG", {});
    return;
  } else if (messageName == "ADD_TAG_TO_PAGE") {
    const saveId = highlightedPages[getURLWithoutHash(page.url)].page_id;
    const tagTitle = userInfo["tag_title"];
    const source = userInfo["source"];

    let addedTags = highlightedPages[getURLWithoutHash(page.url)].tags;
    let isAlreadyTagged = addedTags.some(addedTag => {
      if (addedTag.title == tagTitle) {
        return true;
      }
    });
    if (isAlreadyTagged) {
      messageTo(page, "ALREADY_TAGGED", {});
      return;
    }

    if (saveId && tagTitle) {
      postPageSaveSaveIdTag(saveId, tagTitle, function(json) {
        const addedTagObj = json.data.tagInfo;
        tags.push(addedTagObj);
        const beforeRemoveDuplicateLength = tags.length;
        tags = removeDuplicatedTags(sortByChar(tags));
        const afterRemoveDuplicateLength = tags.length;
        const isCreatedTag = beforeRemoveDuplicateLength == afterRemoveDuplicateLength;
        if (isCreatedTag) {
          lksTagCreate(user.id, tagTitle, function(json) {})
        }

        messageTo(page, "ADD_TAG_TO_PAGE", {
          tags,
          added_tag: addedTagObj,
          source
        });

        const { id: tagId, title } = addedTagObj;
        addedTags.push({
          tagId,
          title
        });
        addedTags = removeDuplicatedTags(addedTags);
        highlightedPages[getURLWithoutHash(page.url)].tags = addedTags;

        const didAddAllTags = tags.length == addedTags.length;
        if (didAddAllTags) {
          messageTo(page, "HIDE_TAG", {});
        }

        lksTagAdd(user.id, [tagTitle], [page.url], function(json) {})
      });
    }
  } else if (messageName == "DELETE_TAG_FROM_PAGE") {
    const saveId = highlightedPages[getURLWithoutHash(page.url)].page_id;
    const tagId = userInfo["tag_id"];

    if (saveId && tagId) {
      deletePageSaveSaveIdTag(saveId, tagId, function(json) {
        if (json.status == "success") {
          let addedTags = highlightedPages[getURLWithoutHash(page.url)].tags;
          addedTags = addedTags.filter(addedTag => {
            if (addedTag.tagId == tagId) {
              return false;
            }
            return true;
          });
          highlightedPages[getURLWithoutHash(page.url)].tags = addedTags;

          messageTo(page, "DELETE_TAG_FROM_PAGE", {
            deleted_tag_id: tagId,
            new_tags: addedTags,
          });

          messageTo(page, "HIDE_TAG", {});
        }
      });
    }
    return;
  } else if (messageName == "ALREADY_TAGGED") {
    messageTo(page, "ALREADY_TAGGED", {});
    return;
  }


  // Luke - general events
  if (messageName == "SHOW_POPOVER") {
    showPopover(page);
    return;
  } else if (messageName == "CLOSE_POPOVER") {
    hidePopover(page);
    return;
  } else if (messageName == "NEW_TAB") {
    var url = userInfo['url'] || "";
    openTab(url, function() {});
    return;
  } else if (messageName == "LOGIN") {
    var cookie = userInfo["cookie"];
    if (cookie) {
      // Luke - Chrome, Firefox, Whale은 자동으로 로그인되므로 loginWithSIDCookie는 하지 않아도 됨.
      // Luke - 하지만 user object가 세팅되어야 하기 때문에 getUser를 포함한 resetVariables는 해주어야 함
      resetVariables();
    } else {
      loginViewType = userInfo["type"];
      showPopover(page);
    }
    return;
  } else if (messageName == "CHANGE_TOOLBAR_ITEM") {
    var type = userInfo["type"] || "enabled";
    if (type == "enabled") {
      delete disabledTabIDs[page.id];
      setToolbarItem(page, localize("LINER"), 'saved');
    } else {
      disabledTabIDs[page.id] = true;
      setToolbarItem(page, userInfo["is_web_pdf"] ? localize("Can't open LINER pop-up on the PDF file.") : localize("LINER is blocked on this website"), 'blocked');
    }
    return;
  } else if (messageName == "ALERT_NETWORK_ERROR") {
    alert(localize('No network connection. Changes were not saved.'));
    return;
  } else if (messageName == "BRAZE_EVENT") {
    var userID = user['id'] || 0;
    var eventName = userInfo["name"] || "";
    if (userID > 0 && eventName != "") {
      postBrazeCustomEvent(userID, eventName, function(json) {
        logger(json);
      });
    }
    return;
  } else if (messageName == "SAVE_SHARING_CONTENT") {
    sharingContent = userInfo["content"] || '';
    return;
  } else if (messageName == "GET_SHARING_CONTENT") {
    messageTo(page, "GET_SHARING_CONTENT", {
      content: sharingContent
    });
    return;
  } else if (messageName == "COPY_TO_CLIPBOARD") {
    copyToClipBoard(userInfo["content"]);
    return;
  } else if (messageName == "CACHE_SHARE_PAGE") {
    getSharePage(userInfo["share_id"]);
    return;
  } else if (messageName == "GET_DO_SHOW_KAKAOTALK") {
    var doShowKakaoTalk = false;
    try {
      for (var i=0; i<navigator.languages.length; i++) {
        if (navigator.languages[i].toLowerCase().indexOf('ko') != -1 || navigator.languages[i].toLowerCase().indexOf('kr') != -1) {
          doShowKakaoTalk = true;
          break;
        }
      }
    } catch(e) {}
    messageTo(page, "SET_DO_SHOW_KAKAOTALK", {
      'do_show_kakaotalk': doShowKakaoTalk
    });
    return;
  }

  browser.tabs.get(page.id, function(pageWithProperties) {
    // Luke - 이렇게 page를 업데이트해주지 않으면 이유는 모르겠으나 page.title이 page.url로 뽑혀서 나옴. browser 객체의 버그인듯
    page = pageWithProperties;
    var title = page.title || "No Tile";
    var url = page.url;

    if (url) {
      var pageInfo = highlightedPages[getURLWithoutHash(url)];
      var pageID;
      if (pageInfo) {
        pageID = pageInfo["page_id"];
      }
      logger("pageID - " + pageID);

      if (messageName == "GA_PAGEVIEW") {
        if (userInfo["path"]) {
          var browserName = getBrowserName();
          var capitalName = browserName.charAt(0).toUpperCase() + browserName.slice(1);
          getGAPageView(user['id'], "LINER " + capitalName + " Extension", userInfo["path"]);
        } else {
          getGAPageView(user['id'], title, '/?url=' + getURLWithoutHash(url));
        }
      } else if (messageName == "GA_EVENT") {
        var category = userInfo["category"] || "";
        var action = userInfo["action"] || "";
        var label = userInfo["label"] || "";
        getGAEvent(user['id'], category, action, label);
      } else if (messageName === "GA_PAGEVIEW_RECOMMENDATION") {
        if (userInfo["path"]) {
          var browserName = getBrowserName();
          var capitalName = browserName.charAt(0).toUpperCase() + browserName.slice(1);
          getGARecommendationPageView(user['id'], "LINER " + capitalName + " Extension", userInfo["path"]);
        } else {
          getGARecommendationPageView(user['id'], title, '/?url=' + getURLWithoutHash(url));
        }
      } else if (messageName === "GA_EVENT_RECOMMENDATION") {
        var category = userInfo["category"] || "";
        var action = userInfo["action"] || "";
        var label = userInfo["label"] || "";
        getGARecommendationEvent(user['id'], category, action, label);
      } else if (messageName == "UPDATE_COMMENT") {
        var highlightID = userInfo["highlight_id"];
        var comment = userInfo["comment"];

        if (highlightID && comment != undefined) {
          postPagesAnnotations(url, highlightID, comment, function(json) {
            if (!isLoggedIn(json)) {
              loginToLiner('comment');
              return;
            }
          });
        }
      } else if (messageName === "BOOKMARK") {
        const { title, url, index } = userInfo;
        if (title !== undefined && url !== undefined) {
          postPages(title, url, "", "W10=", navigator.language, function(json) {  
            if (json["status"] == "success") {
              highlightedPages[getURLWithoutHash(url)] = {
                "page_id" : json["pageId"],
                "tags": [],
                "style_items" : "W10=",
                "share_id" : json["shareId"],
                "comments" : [],
                "new_highlights" : []
              }
            }
            messageTo(page, "BOOKMARK_SERVER_RESPONSE", {
              page_id: json["pageId"],
              index,
            });
          });
        }      
      } else if (messageName === "CANCEL_BOOKMARK") {
        putPage([userInfo["page_id"]], 0, 2, function(json) {
          messageTo(page, "CANCEL_BOOKMARK_SERVER_RESPONSE", {
            index: userInfo["index"],
          });
        });
      } else if (messageName == "UPDATE_STYLE") {
        var styleItems = userInfo["style_items"] || "W10=";
        if (!pageID) {
          // Luke - 저장이 안된 페이지이므로 저장하기
          var imageURL = userInfo["image_url"] || "";
          postPages(title, url, imageURL, styleItems, navigator.language, function(json) {
            if (!isLoggedIn(json)) {
              if (styleItems == "W10=") {
                loginToLiner('save');
              } else {
                loginToLiner('highlight');
              }
              return;
            }

            if (json["status"] == "success") {
              highlightedPages[getURLWithoutHash(url)] = {
                "page_id" : json["pageId"],
                "tags": [],
                "style_items" : styleItems,
                "share_id" : json["shareId"],
                "comments" : [],
                "new_highlights" : []
              }

              messageTo(page, "PAGE_INFO_WITHOUT_HIGHLIGHT_IMPORT", highlightedPages[getURLWithoutHash(url)]);
            }
          });

          if (userInfo["doc"] !== undefined) {
            lksDocCreate(user.id, url, userInfo["doc"], function() {});
          }
        } else {
          // Luke - 저장 된 페이지이므로 업데이트하기
          postPagesPageID(pageID, styleItems, function(json) {
            if (!isLoggedIn(json)) {
              loginToLiner('highlight');
              return;
            }

            if (json["status"] == "success") {
              highlightedPages[getURLWithoutHash(url)]["style_items"] = styleItems;
            }
          });
        }
      } else if (messageName == "UPDATE_HIGHLIGHT") {
        var highlightID = userInfo["highlight_id"];
        var color = userInfo["color"];
        var doDelete = userInfo["do_delete"];
        if (!pageID || !highlightID || (!color && !doDelete)) {
          logger("pageId or highlightId or color or doDelete is undefined - handler");
          logger("pageID - " + pageID);
          logger("highlightID - " + highlightID);
          logger("color - " + color);
          logger("doDelete - " + doDelete);
          return;
        }

        postPagesPageIDHighlightID(pageID, highlightID, color, doDelete, function (json) {

        });
      } else if (messageName == "DOCUMENT_READY") {
        // todo - pdf 파일인지 체크하기
        // todo - tab focus 될 때 여기 오게 하기?
        getUser(function(result) {
          if (result) {
            messageTo(page, "USER_INFO", user);
          }

          postPagesInfos(null, url, 0, function(json) {
            if (json["status"] == "success") {
              // Luke - 이전에 저장/하이라이팅 한 페이지
              getGAEvent(user["id"], 'visit', 'highlighted', getURLWithoutHash(url));

              var item = json["item"] || {};
              highlightedPages[getURLWithoutHash(url)] = {
                "page_id" : item["pageId"],
                "tags": item["tags"],
                "style_items" : item["styleItems"],
                "share_id" : item["shareId"],
                "comments" : [],
                "new_highlights" : []
              }
              postPagesSummary(url, 0, function(json) {
                if (json["status"] == "success") {
                  var items = json["items"]
                  highlightedPages[getURLWithoutHash(url)]["comments"] = items || [];
                }
                messageTo(page, "PAGE_INFO", highlightedPages[getURLWithoutHash(url)]);
              });
            } else {
              // Luke - 이전에 저장/하이라이팅 하지 않은 페이지
              getGAEvent(user["id"], 'visit', 'not_highlighted', getURLWithoutHash(url));
            }
          });
        });
      }
    }
  })
}
browser.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(message) {
    messageReceived(message.name, port.sender.tab, message.message);
  });
});



function messageTo(page, name, json) {
  browser.tabs.sendMessage(page.id, {
    name: name,
    message: json
  });
}



// Luke - Safari Extension의 validateToolbarItem 함수에서 실행시키는 것들을 windows.onFocusChanged와 tabs.onActivated와 tabs.onUpdated 세 곳에서 실행해줘야 한다.
function validateToolbarItem(inPage) {  
  messageTo(inPage, "CHECK_DISABLED", {});
  if (tags == null) {
    fetchTagsFromServer(function() {});
  } 


  if (prevPage && prevPage.url != inPage.url) {
    // Luke - page changed
    messageTo(prevPage, "LKS_READ", {});
    messageTo(inPage, "LKS_UPDATE_DURATION", {});
  }
  prevPage = inPage;

  try {
    if (inPage.url.indexOf('https://getliner.com') !== -1) {
      postAuthCookie(function(json) {
        try {
          sidCookie = json.cookie;
        } catch(e) {}
      });
    }
  } catch(e) {}
}
// Luke - onFocusChanged 이벤트는 새 윈도우가 생성되거나(자동으로 Focus되기 때문에 이렇게 만든듯) 다른 윈도우로 Focus가 옮겨갔을 때 실행된다.
// Luke - 아예 다른 앱으로 이동(크롬을 사용하다가 Atom으로 옮겨가는 등)할 때는 windowID가 -1인 상태로 이벤트가 실행된다.
browser.windows.onFocusChanged.addListener(function(windowID) {
  if (windowID != -1) {
    getActivePage(function(activePage) {
      if (activePage) {
        validateToolbarItem(activePage);
      }
    });
  }
});
// Luke - onActivated 이벤트는 ctrl-tab이나 새 탭을 클릭하거나 새 탭을 만드는 등의 활동을 통해 실행된다.
// Luke - Window가 활성화되는 것으로는 실행되지 않는다.(이에 따라 두 개의 다른 윈도우를 왔다갔다 하는 것으로는 실행되지 않음)
browser.tabs.onActivated.addListener(function(activeInfo) {
  browser.tabs.get(activeInfo.tabId, function(tab) {
    validateToolbarItem(tab);
  })
});
browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    validateToolbarItem(tab);
  }
});



// Luke - toolbar item이 클릭되었을 때 저장해주는 부분
browser.browserAction.onClicked.addListener(function(tab) {
  if (tab.url.indexOf('chrome') == -1 && tab.url.indexOf('about') == -1 && disabledTabIDs[tab.id] != true) {
    if (!highlightedPages[getURLWithoutHash(tab.url)]) {
      messageTo(tab, "SAVE_PAGE", {});
    }
    messageTo(tab, "TOGGLE_POPOVER", {});
  }
});

function isLoggedIn(byResponse) {
  if (byResponse["reason"] == "not_auth") {
    return false
  }
  return true
}

function loginToLiner(type) {
  logger('log in to liner');
  getActivePage(function(page) {
    if (!page) {
      logger('page is undefined');
      return;
    }

    messageTo(page, "LOGIN", {
      type: type || ""
    });
  });
}

var isFetchingTags = false;
function fetchTagsFromServer(callback) {
  if (isFetchingTags) {
    return;
  }
  isFetchingTags = true;
  setTimeout(function() {
    isFetchingTags = false;
  }, 6*1000);

  getUserTag(function(json) {
    isFetchingTags = false;
    tags = [];

    try {
      const { tags: resTags } = json.data;
      tags = removeDuplicatedTags(sortByChar(resTags));
    } catch(e) {};

    callback();
  });
}


// Luke - 이름이 Page가 아니라 Tab이어야 하지만 Safari Extension에 맞춤. Porting 할 때 헷갈리지 않게 하기 위함
function getActivePage(callback) {
  browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs.length > 0) {
      callback(tabs[0]);
      return;
    }
    callback();
  });
}



// Luke - 아래 함수들은 이 파일에 있는 것이 적절하지만 Safari Extension에서는 SafariExtensionViewController.swift 파일에 들어있음
function getUser(callback) {
  getUsersMe(function(json) {
    try {
      if (user.id != json["id"]) {
        // Luke - 사용자가 바뀐 경우 highlightedPages를 새로 바꾸어줌
        highlightedPages = {}
      }
    } catch(e) {}

    const prevUserID = user.id;
    user = {};

    if (json["status"] == "success") {
      user = {
        "id" : json["id"] || 0,
        "email" : json["email"] || "",
        "name" : json["name"] || "",
        "premium" : json["premium"] || 0,
        "image" : json["photoUrl"],
        "highlight_limit" : json["highlight_limit"] || 7,
        "color_limit": json["color_limit"] || 2
      };

      // Luke - 첫 세팅이거나, 계정이 변경된 경우
      if (user.id != 0 && (sidCookie == undefined || prevUserID != user.id)) {
        postAuthCookie(function(json) {
          try {
            sidCookie = json.cookie;
          } catch(e) {}
        });
      }
      callback(true);
    } else {
      callback(false);
    }
  });
}

function doShowOnboardingEC() {
  try {
    // Luke - 무료 사용자면서, Ongoing Onboarding을 마쳐서 Onboarding EC에 Eligible하며, 누적 끈 횟수가 5회 미만(즉, 최대 5개의 캠페인에 Eligible함)
    if (user.premium == 0 && isEligibleForOnboardingEC() && getOnboardingECCloseCnt() < 5) {
      if (isNaN(getLatestOnboardingECCloseDate())) {
        // Luke - Onboarding EC를 아직 끄지 않음
        return true;
      }

      // Luke - 마지막으로 Onboarding EC를 끈지 3일이 지났음    
      const now = new Date();
      const day = 1000*60*60*24;
      if ((now.getTime() - getLatestOnboardingECCloseDate())/day >= 3) {
        return true;
      }
    }  
  } catch(e) {}
  return false;
}

function setEligibleForOnboardingEC() {
  localStorage.setItem('eligible_for_onboarding_ec', true);
}

function isEligibleForOnboardingEC() {
  return localStorage.getItem("eligible_for_onboarding_ec") ? JSON.parse(localStorage.getItem("eligible_for_onboarding_ec")) : false;
}

function setLatestOnboardingECCloseDate() {
  localStorage.setItem('latest_onboarding_ec_close_date', (new Date()).getTime());
}

function getLatestOnboardingECCloseDate() {
  return parseInt(localStorage.getItem('latest_onboarding_ec_close_date'));
}

function setOnboardingECCloseCnt() {
  localStorage.setItem('onboarding_ec_close_cnt', parseInt(getOnboardingECCloseCnt()) + 1);
}

function getOnboardingECCloseCnt() {
  const cnt = parseInt(localStorage.getItem('onboarding_ec_close_cnt'));
  return isNaN(cnt) ? 0 : cnt;
}

function saveClosedCampaign(campaignId) {
  var closedCampaigns = getClosedCampaigns();
  closedCampaigns.push(parseInt(campaignId));
  localStorage.setItem("closed_campaign_ids", JSON.stringify(closedCampaigns));
}

function getClosedCampaigns() {
  var closedCampaigns = [];
  try {
    closedCampaigns = localStorage.getItem("closed_campaign_ids") ? JSON.parse(localStorage.getItem("closed_campaign_ids")) : [];
  } catch(e) {}
  return closedCampaigns;
}

function saveDidSeePDFBanner() {
  localStorage.setItem("did_see_pdf_banner", JSON.stringify(true));
}

function getDidSeePDFBanner() {
  var didSeePDFBanner = false;
  try {
    didSeePDFBanner = localStorage.getItem("did_see_pdf_banner") ? JSON.parse(localStorage.getItem("did_see_pdf_banner")) : false;
  } catch(e) {}
  return didSeePDFBanner;
}