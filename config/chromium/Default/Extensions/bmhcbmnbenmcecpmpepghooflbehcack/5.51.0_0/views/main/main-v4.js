let highlightedPages = null;
let currentPage = null;
let currentTab = null;
let user = null;
let isSavedPage = false;
let isTriggeredByHighlight = false;

let initialTagContainerHeight = 0;
let expandedPopoverDiff = 0;
const tagContainerTop = 72;
const normalPopoverHeight = 130;
const sharePopoverHeight = 169;
const normalPopoverHeightWithoutTagContainer = 98;

let beforeShareHeight = 0;
let beforeSettingsHeight = 0;

function handleLocalMessage(event) {
  if (event.name === "POPOVER_INIT" || event.name === "PAGE_SAVED") {
    user = event.message.user;

    highlightedPages = event.message.highlighted_pages;
    currentTab = event.message.page;
    currentPage = highlightedPages[getURLWithoutHash(currentTab.url)];

    isSavedPage = currentPage !== undefined;
    if (isSavedPage !== true) {
      currentPage = {};
    }

    currentPage.title = currentTab.title;
    currentPage.url = getURLWithoutHash(currentTab.url);  

    doLocalization();
    setUI();
    addEvents();
    addShareEvents();
    addSettingsEvents();
  }  else if (event.name === "ADD_TAG_TO_PAGE") {
    $('.tagInput').val('');
    const { added_tag: addedTagObj } = event.message;
    currentPage.tags.push({
      tagId: addedTagObj.id,
      title: addedTagObj.title
    });
    currentPage.tags = removeDuplicatedTags(currentPage.tags);
    resetTagsUI();  
    $('.tagInput').focus();
  } else if (event.name === "DELETE_TAG_FROM_PAGE") {
    const { deleted_tag_id: deletedTagId, new_tags: newTags } = event.message;
    currentPage.tags = newTags;
    $(`.tag[data-tag-id="${deletedTagId}"]`).remove();
    resetTagsUI();
    $('.tagInput').focus();
  }
}

$(document).ready(function() {
  messageToNative("GA_PAGEVIEW", {
    path: "/liner-" + getBrowserName() + "-extension"
  });

  messageToNative("GA_EVENT", {
    category : 'extension',
    action : 'extension_popup_shown',
    label: ''
  });

  const params = new URLSearchParams(window.location.href.split('?')[1]);
  isTriggeredByHighlight = JSON.parse(params.get("isTriggeredByHighlight"));

  // Luke - 아래 메세지를 통해서 popover 정보가 initialize됨
  // Luke - handleLocalMessage의 POPOVER_INIT으로 가며, 이렇게 하는 이유는 Firefox에서 browser.extension.getBackgroundPage()가 iframe에서 작동하지 않기 때문
  messageToNative("POPOVER_INIT", {});

  if (isTriggeredByHighlight === true) {
    showFeedback('save', false);
  }
});

function doLocalization() {
  $('.shareBtn .label').html(localize("Share"));
  $('.goToDashboardBtn span').html(localize("Manage Highlights"));
  $('.feedbackView .deleteBtn').html(localize("Delete"));
  $('.feedbackView .cancelBtn').html(localize("Cancel"));

  $('.shareContainer .headerLabel').html(localize("Share Highlighted Page"));
  $('.shareContainer .footer .copyBtn').html(localize("Copy Link"));

  $('.addTagsLabel').html(localize("+ Add tags"));
  $('.tagInput')[0].placeholder = localize("Search tags");
  $('.saveToLinerBtn span').html(localize("Save to LINER"));

  $('.settingsContainer .headerLabel').html(localize("Options"));
  $('.settingsContainer .settingContentContainer .settingPickedByLiner').html('Picked by LINER on Search');
  $('.settingsContainer .settingContentContainer .settingDontRunOnThisPage').html('Don’t run on this page');
  $('.settingsContainer .settingContentContainer .settingDontRunOnThisSite').html('Don’t run on this site');
}

function setUI() {  
  $('.webTitleLabel').text(currentTab.title);
  $('.shareContainer .shareLinkLabel').text(`${shareHost}/${currentPage.share_id ?? ''}`);

  // Luke - footer go to dashboard btn
  $('.footer .goToDashboardBtn').hover(function() {
      $(this).addClass('hover');
    }, function() {
      $(this).removeClass('hover');
    }
  );

  const tagContainerBorder = 2;
  initialTagContainerHeight = $('.tagContainer')[0].scrollHeight + tagContainerBorder;
  resetTagsUI();

  $('.skeleton').hide();

  if (isSavedPage === true || isTriggeredByHighlight === true) {
    $('.saveToLinerBtn').hide();
    $('.tagContainer').show();
    $('.footer').removeClass('unsavedPage');
  } else {
    $('.saveToLinerBtn').show();
    $('.tagContainer').hide();
    $('.footer').addClass('unsavedPage');
  }

  $('.mainContainer').show();
}

function resetTagsUI() {
  const tags = currentPage.tags ?? [];

  $('.tagContainer .editTagsContainer .tag').remove();

  if (tags && tags.length) {
    $('.currentTags').text(tags.length > 1 ? localize('n tags').replace('n', tags.length) : localize('n tag').replace('n', tags.length));
    $('.currentTags').show();

    tags.forEach(tagObj => {
      const { tagId, title: tagTitle } = tagObj;
      $('.tagContainer .editTagsContainer .tagInput').before(`
        <div class="tag" data-tag-id="${tagId}" data-tag-title="${tagTitle}">
          <span>#${tagTitle}</span>
          <div class="deleteTagBtn" data-tag-id="${tagId}"></div>
        </div>
      `);
    });
  } else {
    $('.currentTags').hide();
  }

  let expandedPopoverHeight = $('.tagContainer')[0].scrollHeight + normalPopoverHeightWithoutTagContainer;

  const isTagContainerNotVisible = $('.tagContainer')[0].scrollHeight == 0;
  if (isTagContainerNotVisible) {
    expandedPopoverHeight = normalPopoverHeight;
  }
  messageToNative("CHANGE_POPOVER_HEIGHT", {
    height: expandedPopoverHeight,
    popover_class: 'liner-popover-main'
  });

  $('.editTagsContainer .tag').off().click(function(e) {
    try { e.stopPropagation(); } catch(e) {};
    $('.tagContainer .editTagsContainer .tag').removeClass('focused');
  });

  $('.editTagsContainer .tag .deleteTagBtn').off().click(function(e) {
    try { e.stopPropagation(); } catch(e) {};
    $('.tagContainer .editTagsContainer .tag').removeClass('focused');

    const deletingTagId = $(this)[0].dataset.tagId;
    messageToNative("DELETE_TAG_FROM_PAGE", {
      tag_id: deletingTagId
    });
  });
}

function addEvents() {
  $('.linerLogoBtn').click(function(e) {
    hideFeedback();

    messageToNative("GA_EVENT", {
      category : 'extension',
      action : 'liner_icon',
      label: ''
    });

    messageToNative("AMPLITUDE_EVENT", {
      event_name: "click_liner_logo_button",
      properties: {},
    })
  });

  $('.shareBtn').click(function(e) {
    hideFeedback();

    messageToNative("SAVE_SHARING_CONTENT", {
      content: ''
    });

    beforeShareHeight = $('.mainContainer').height();

    $('.mainContainer').hide();
    messageToNative("CHANGE_POPOVER_HEIGHT", {
      height: sharePopoverHeight,
      popover_class: 'liner-popover-main'
    });
    $('.shareContainer').show();

    messageToNative("GA_EVENT", {
      'category' : 'extension',
      'action' : 'share_page_open',
      'label' : ''
    });
    messageToNative("BRAZE_EVENT", {
      name : 'share_page_open'
    });
  });

  $('.settingsBtn').click(function(e) {
    hideFeedback();

    messageToNative("SAVE_SETTING_CONTENT", {
      content: ''
    });

    beforeSetHeight = $('.mainContainer').height();

    $('.mainContainer').hide();

    messageToNative("CHANGE_POPOVER_HEIGHT", {
      height: $('.settingsContainer').height(),
      popover_class: 'liner-popover-main'
    });

    $('.settingsContainer').show();

    messageToNative("GA_EVENT", {
      'category' : 'extension',
      'action' : 'settings_page_open',
      'label' : ''
    });

    messageToNative("BRAZE_EVENT", {
      name : 'settings_page_open'
    });
  });

  $('.saveToLinerBtn').click(function(e) {
    messageToNative("SAVE_TO_LINER", {});
    showFeedback('save', true);

    const originalUrl = currentPage.url;
    const urlDomain = new URL(originalUrl).hostname;
    const contentType = (originalUrl.split('.pdf').length > 1 && originalUrl.split('.pdf')[1] === "") ? 'pdf' : 'web_page';
    
    messageToNative("AMPLITUDE_EVENT", {
      event_name: "click_save_to_liner_button_at_extension_popup",
      properties: {
        'url_domain': urlDomain,
        'content_type': contentType,
      }
    });
  });

  $('.goToDashboardBtn')[0].href = `https://getliner.com/myhighlights/pages/${currentPage.page_id ?? ''}`;

  $('.goToDashboardBtn').click(function(e) {
    hideFeedback();

    messageToNative("GA_EVENT", {
      category : 'extension',
      action : 'go_to_dashboard',
      label: ''
    });
  });

  $('.mainContainer').click(function(e) {
    messageToNative("HIDE_TAG", {});
    $('.tagContainer .editTagsContainer .tag').removeClass('focused');
  });

  $('.tagContainer').click(function(e) {
    try { e.stopPropagation(); } catch(e) {};
    $('.tagContainer .editTagsContainer .tag').removeClass('focused');

    const isEditingTags = $(this).hasClass('editing');
    if (isEditingTags) {
      $('.tagInput').focus();
    } else {    
      $(this).addClass('editing');
      $('.tagInput').show();
      $('.tagInput').focus();  

      const expandedPopoverHeight = $('.tagContainer')[0].scrollHeight + normalPopoverHeightWithoutTagContainer;
      messageToNative("CHANGE_POPOVER_HEIGHT", {
        height: expandedPopoverHeight,
        popover_class: 'liner-popover-main'
      });
    }
  });

  $('.currentTags').click(function(e) {

  });

  $('.tagInput').click(function(e) {
    try { e.stopPropagation(); } catch(e) {};
  });

  $('.tagInput').focus(function(e) {
    $('.tagContainer .editTagsContainer .tag').removeClass('focused');

    const tagContainerBorder = 2;
    const editingTagContainerHeight = $('.tagContainer')[0].scrollHeight + tagContainerBorder;
    expandedPopoverDiff = editingTagContainerHeight - initialTagContainerHeight;

    messageToNative("TAG_INPUT_FOCUS", {
      top: tagContainerTop + expandedPopoverDiff
    });
  });

  $('.tagInput').blur(function(e) {
    $(this).val('');
  });

  $('body').keydown(function(e) {
    const code = e.code ? e.code : e.key;
    const isTagInputFoucsed = $('.tagInput:focus').length != 0;
    if (code == "Backspace" && !isTagInputFoucsed) {
      e.preventDefault();
    }
  })

  $('body').keyup(function(e) {
    const code = e.code ? e.code : e.key;
    const isEditTagsOpened = $('.tagContainer').hasClass('editing');

    if (code == "Tab" && isEditTagsOpened) {
      $('.tagInput').focus();
    } else if (code == "Backspace" && isEditTagsOpened) {
      const focusedTag = $('.editTagsContainer .tag.focused');
      if (focusedTag.length > 0) {
        const isFirstBackspace = focusedTag.hasClass('firstBackspace');
        if (isFirstBackspace) {
          focusedTag.removeClass('firstBackspace');
          return;
        }
        const deletingTagId = focusedTag[0].dataset.tagId;
        messageToNative("DELETE_TAG_FROM_PAGE", {
          tag_id: deletingTagId
        });
      }
    } else if (code == "Escape" && isEditTagsOpened) {
      $('.tagInput').blur();
      messageToNative("HIDE_TAG", {});
      $('.tagContainer .editTagsContainer .tag').removeClass('focused');
    }
  });

  $('.tagInput').keydown(function(e) {
    const code = e.code ? e.code : e.key;
    const lowerCasedInput = $(this).val().toLowerCase();
    const addedTagCnt = $('.editTagsContainer .tag').length;

    if (code == "Backspace" && lowerCasedInput == "" && addedTagCnt > 0) {
      const lastTagElement = $($('.editTagsContainer .tag')[$('.editTagsContainer .tag').length - 1]);
      lastTagElement.addClass('focused').addClass('firstBackspace');
      messageToNative("HIDE_TAG", {});
      $(this).blur();
      e.preventDefault();
    }
  })

  $('.tagInput').keyup(function(e) {
    const code = e.code ? e.code : e.key;
    const arrowKeys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];
    if (arrowKeys.indexOf(code) != -1) {
      return;
    }

    const lowerCasedInput = $(this).val().toLowerCase();

    if (code == "Enter" && lowerCasedInput.trim() != "") {
      const isAddedTag = currentPage.tags.some(tag => {
        if (tag.title == lowerCasedInput.trim()) {
          return true;
        }
      });
      if (isAddedTag) {
        messageToNative("ALREADY_TAGGED", {});
        return;
      }
      messageToNative("ADD_TAG_TO_PAGE", {
        tag_title: lowerCasedInput.trim(),
        source: "keyboard"
      });
    }

    $(this).val(lowerCasedInput);

    const tagContainerBorder = 2;
    const editingTagContainerHeight = $('.tagContainer')[0].scrollHeight + tagContainerBorder;
    expandedPopoverDiff = editingTagContainerHeight - initialTagContainerHeight;
    messageToNative("TAG_INPUT_CHANGE", {
      input: lowerCasedInput.trim(),
      top: tagContainerTop + expandedPopoverDiff
    });    
  });

  $('.closeBtn').click(function(e) {
    e.stopPropagation();
    messageToNative("CLOSE_POPOVER", {
      do_not_show_popover: true,
    });
  });
}

function addShareEvents() {
  $('.shareContainer .backBtn').click(function (e) {
    hideFeedback();

    $('.shareContainer').hide();

    messageToNative("CHANGE_POPOVER_HEIGHT", {
      height: beforeShareHeight,
      popover_class: 'liner-popover-main'
    });

    $('.mainContainer').show();

    messageToNative("GA_EVENT", {
      category : 'extension',
      action : 'close_share',
      label: ''
    });
  });

  $('.shareContainer .shareMethod').click(function (e) {
    hideFeedback();
  });

  $('.facebook').attr('href', fbShareDialogUrl(`${shareHost}/${currentPage.share_id ?? ''}`));
  $('.messenger').attr('href', fbSendDialogUrl(`${shareHost}/${currentPage.share_id ?? ''}`));
  $('.twitter').attr('href', twitterShareDialogUrl(`${shareHost}/${currentPage.share_id ?? ''}`, currentPage.title ?? ''));
  $('.linkedin').attr('href', linkedInShareDialogUrl(`${shareHost}/${currentPage.share_id ?? ''}`));
  $('.line').attr('href', lineShareDialogUrl(`${shareHost}/${currentPage.share_id ?? ''}`));
  $('.mail').attr('href', mailDialogUrl(`${shareHost}/${currentPage.share_id ?? ''}`, currentPage.title ?? '', ''));

  $('.shareMethod').click(function(e) {
    messageToNative("AMPLITUDE_USER_PROPERTY", {
      type: "add",
      property: "share_count",
      value: 1,
    });
  });

  $('.facebook').click(function (e) {
    try { e.stopPropagation(); } catch(e) {};
    messageToNative("GA_EVENT", {
      'category' : 'extension',
      'action' : 'share_page_facebook',
      'label' : ''
    });
    messageToNative("BRAZE_EVENT", {
      name : 'share_page_facebook'
    });
    messageToNative("LKS_EVENT", {
      "type": "doc_share",
      "share_type": "facebook",
      "url": currentPage.url
    });
    messageToNative("AMPLITUDE_EVENT", {
      event_name: "click_share_my_page",
      properties: {
        shared_option: "page_with_highlights",
        share_type: "facebook",
        content_type: "web_page",
      }
    });
  })

  $('.messenger').click(function (e) {
    try { e.stopPropagation(); } catch(e) {};
    messageToNative("GA_EVENT", {
      'category' : 'extension',
      'action' : 'share_page_messenger',
      'label' : ''
    });
    messageToNative("BRAZE_EVENT", {
      name : 'share_page_messenger'
    });
    messageToNative("LKS_EVENT", {
      "type": "doc_share",
      "share_type": "messenger",
      "url": currentPage.url
    });
    messageToNative("AMPLITUDE_EVENT", {
      event_name: "click_share_my_page",
      properties: {
        shared_option: "page_with_highlights",
        share_type: "facebook_messenger",
        content_type: "web_page",
      }
    });
  })

  $('.twitter').click(function (e) {
    try { e.stopPropagation(); } catch(e) {};
    messageToNative("GA_EVENT", {
      'category' : 'extension',
      'action' : 'share_page_twitter',
      'label' : ''
    });
    messageToNative("BRAZE_EVENT", {
      name : 'share_page_twitter'
    });
    messageToNative("LKS_EVENT", {
      "type": "doc_share",
      "share_type": "twitter",
      "url": currentPage.url
    });
    messageToNative("AMPLITUDE_EVENT", {
      event_name: "click_share_my_page",
      properties: {
        shared_option: "page_with_highlights",
        share_type: "twitter",
        content_type: "web_page",
      }
    });
  })

  $('.linkedin').click(function (e) {
    try { e.stopPropagation(); } catch(e) {};
    messageToNative("GA_EVENT", {
      'category' : 'extension',
      'action' : 'share_page_linkedin',
      'label' : ''
    });
    messageToNative("BRAZE_EVENT", {
      name : 'share_page_linkedin'
    });
    messageToNative("LKS_EVENT", {
      "type": "doc_share",
      "share_type": "linkedin",
      "url": currentPage.url
    });
    messageToNative("AMPLITUDE_EVENT", {
      event_name: "click_share_my_page",
      properties: {
        shared_option: "page_with_highlights",
        share_type: "linkedin",
        content_type: "web_page",
      }
    });
  })

  $('.line').click(function (e) {
    try { e.stopPropagation(); } catch(e) {};
    messageToNative("GA_EVENT", {
      'category' : 'extension',
      'action' : 'share_page_line',
      'label' : ''
    });
    messageToNative("BRAZE_EVENT", {
      name : 'share_page_line'
    });
    messageToNative("LKS_EVENT", {
      "type": "doc_share",
      "share_type": "line",
      "url": currentPage.url
    });
    messageToNative("AMPLITUDE_EVENT", {
      event_name: "click_share_my_page",
      properties: {
        shared_option: "page_with_highlights",
        share_type: "line",
        content_type: "web_page",
      }
    });
  });

  $('.kakaotalk').off().click(function (e) {
    try { e.stopPropagation(); } catch(e) {};
    window.open(kakaoShareDialogUrl(`${shareHost}/${currentPage.share_id ?? ''}`, currentPage.title ?? ''), "PopupWin", "width=460,height=660");
    messageToNative("GA_EVENT", {
      'category' : 'extension',
      'action' : 'share_page_kakaotalk',
      'label' : ''
    });
    messageToNative("BRAZE_EVENT", {
      name : 'share_page_kakaotalk'
    });
    messageToNative("LKS_EVENT", {
      "type": "doc_share",
      "share_type": "kakaotalk",
      "url": currentPage.url
    });
    messageToNative("AMPLITUDE_EVENT", {
      event_name: "click_share_my_page",
      properties: {
        shared_option: "page_with_highlights",
        share_type: "kakaotalk",
        content_type: "web_page",
      }
    });
  });

  $('.mail').click(function (e) {
    try { e.stopPropagation(); } catch(e) {};
    messageToNative("GA_EVENT", {
      'category' : 'extension',
      'action' : 'share_page_mail',
      'label' : ''
    });
    messageToNative("BRAZE_EVENT", {
      name : 'share_page_mail'
    });
    messageToNative("LKS_EVENT", {
      "type": "doc_share",
      "share_type": "mail",
      "url": currentPage.url
    });
    messageToNative("AMPLITUDE_EVENT", {
      event_name: "click_share_my_page",
      properties: {
        shared_option: "page_with_highlights",
        share_type: "mail",
        content_type: "web_page",
      }
    });
  });

  var doShowKakaoTalk = false;
  try {
    for (var i=0; i<navigator.languages.length; i++) {
      if (navigator.languages[i].toLowerCase().indexOf('ko') != -1 || navigator.languages[i].toLowerCase().indexOf('kr') != -1) {
        doShowKakaoTalk = true;
        break;
      }
    }
  } catch(e) {}

  if (!doShowKakaoTalk) {
    $('.kakaotalk').remove();
  }

  $('.shareContainer .copyBtn, .shareContainer .shareLinkLabel').click(function (e) {
    hideFeedback();

    copyToClipBoard(`${shareHost}/${currentPage.share_id ?? ''}`);
    showFeedback('copy', true);

    messageToNative("GA_EVENT", {
      'category' : 'extension',
      'action' : 'share_page_copy',
      'label' : ''
    });
    messageToNative("BRAZE_EVENT", {
      name : 'share_page_copy'
    });
    messageToNative("LKS_EVENT", {
      "type": "doc_share",
      "share_type": "copy",
      "url": currentPage.url
    });
    messageToNative("AMPLITUDE_USER_PROPERTY", {
      type: "add",
      property: "share_count",
      value: 1,
    });
    messageToNative("AMPLITUDE_EVENT", {
      event_name: "click_share_my_page",
      properties: {
        shared_option: "page_with_highlights",
        share_type: "share_url",
        content_type: "web_page",
      }
    });
  });
}

function addSettingsEvents() {
  $('.settingsContainer .backBtn').click(function(e) {
    hideFeedback();
    $('.settingsContainer').hide();

    messageToNative("CHANGE_POPOVER_HEIGHT", {
      height: beforeSetHeight,
      popover_class: 'liner-popover-main'
    });
    
    $('.mainContainer').show();

    messageToNative("GA_EVENT", {
      category : 'extension',
      action : 'close_settings',
      label: ''
    });
  });

  $('.settingBtn').off().click(function(e) {
    e.stopPropagation();

    const isSwitchOn = $(this).find('.circleBtn').hasClass('settingOn') === true;

    if (isSwitchOn) {
      $(this).parent().find('.redSwitch').removeClass('settingRedOn');
      $(this).parent().find('.blueSwitch').removeClass('settingBtnOn').addClass('settingBtnOff');
      $(this).stop().removeClass('settingBtnOn');
      $(this).find('.circleBtn').stop().removeClass('settingOn').addClass('settingOff');

      const isSettingPickedByLiner = $(this).prev().hasClass('settingPickedByLiner') === true;
      if (isSettingPickedByLiner) {
        messageToNative("TOGGLE_ADVANCED_SEARCH", {
          do_not_show_advaned_search: false,
        });
      }
      const isSettingDontRunOnThisPage = $(this).prev().hasClass('settingDontRunOnThisPage') === true;
      if (isSettingDontRunOnThisPage) {
        messageToNative("TOGGLE_RUN_PAGE", {
          set_run_page: true,
          "url": currentPage.url,
        });
      }
      const isSettingDontRunOnThisSite = $(this).prev().hasClass('settingDontRunOnThisSite') === true;
       if (isSettingDontRunOnThisSite) {
        messageToNative("TOGGLE_RUN_SITE", {
          set_run_site: true,
          "url": currentPage.url,
        });
      }
    } else {
      $(this).stop().addClass('settingBtnOn');
      $(this).parent().find('.redSwitch').removeClass('settingBtnOn').addClass('settingBtnOff').addClass('settingRedOn');
     
      $(this).parent().find('.blueSwitch').removeClass('settingBtnOff').addClass('settingBtnOn');
      $(this).find('.circleBtn').stop().removeClass('settingOff').addClass('settingOn');

      const isSettingPickedByLiner = $(this).prev().hasClass('settingPickedByLiner') === true;
      if (isSettingPickedByLiner) {
        messageToNative("TOGGLE_ADVANCED_SEARCH", {
          do_not_show_advaned_search: false,
        });
      }
      const isSettingDontRunOnThisPage = $(this).prev().hasClass('settingDontRunOnThisPage') === true;
      if (isSettingDontRunOnThisPage) {
        messageToNative("TOGGLE_RUN_PAGE", {
          set_run_page: false,
          "url": currentPage.url
        });
      }
      const isSettingDontRunOnThisSite = $(this).prev().hasClass('settingDontRunOnThisSite') === true;
       if (isSettingDontRunOnThisSite) {
        messageToNative("TOGGLE_RUN_SITE", {
          set_run_site: false,
          "url": currentPage.url,
        });
      }
    }
  });
}

function hideFeedback() {
  $('.feedbackView').fadeOut(200);
  $('.feedbackView').animate({
    bottom: '-10px'
  }, 200, function() {
  });
}

function showFeedback(type, doAnimate) {
  if (type === 'copy') {
    $('.feedbackView').css('background-color', '#00bdb8');
    $('.feedbackView .label').text(localize('Link copied to clipboard'));
    $('.feedbackView .btn').hide();
  } else if (type === 'save') {
    $('.feedbackView').css('background-color', '#00bdb8');
    $('.feedbackView .label').text(localize('Saved'));
    $('.feedbackView .btn').hide();
  } else {
    return;
  }

  if (doAnimate === false) {
    $('.feedbackView').css('bottom', '0px');
    $('.feedbackView').show();
    if (type === 'copy' || type === 'save') {
      setTimeout(function() {
        hideFeedback();
      }, 3000);
    }
  } else {
    $('.feedbackView').css('bottom', '-32px');
    $('.feedbackView').fadeIn(100);
    $('.feedbackView').animate({
      bottom: 0
    }, 100, function() {
      if (type === 'copy' || type === 'save') {
        setTimeout(function() {
          hideFeedback();
        }, 3000);
      }
    })  
  }
}

function copyToClipBoard(content) {
  var temp = $('<input class="copyInput">');
  $('body').append(temp);
  temp.val(content).select();
  document.execCommand("copy");
  temp.remove();
};

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