$(document).ready(function() {
  logger('view-controller.js loaded');
});

function showPopover(page, type) {
  // Luke - 이미 삽입되어 있는 팝오버는 제거함
  messageTo(page, 'REMOVE_ALL_POPOVER', {});

  if (!user['id'] || type === "login") {
    // Luke - user is not logged in
    executeCSSFile(page, '/views/login/iframe-login.css', function(result) {
      messageTo(page, 'INJECT_POPOVER', {
        class: "liner-popover liner-popover-login",
        src: browser.extension.getURL('/views/login/login.html'),
        style: ""
      });
      setTimeout(function() {
        loginViewType = "";
        messageTo(page, "ANIMATE_POPOVER_SHOW", {
          type: 'login'
        });
      }, 200);
    });
  } else {
    // Luke - 사용자가 하이라이트를 했음. 일반 팝오버를 보여줄 것
    function showMainPopover() {
      executeCSSFile(page, '/views/main/iframe-main-v3.css', function(result) {
        messageTo(page, 'INJECT_POPOVER', {
          class: "liner-popover liner-popover-main",
          src: browser.extension.getURL('/views/main/main-v3.html'),
          style: ""
        });

        executeCSSFile(page, '/views/tag/iframe-tag.css', function(result) {
          messageTo(page, 'INJECT_POPOVER', {
            class: "liner-popover liner-popover-tag",
            src: browser.extension.getURL('/views/tag/tag.html'),
            style: ""
          });  
        });

        setTimeout(function() {
          messageTo(page, "ANIMATE_POPOVER_SHOW", {
            type: 'main'
          });
          fetchTagsFromServer(function() {});
        }, 100);
      });
    }

    function prepareIAM() {
      executeCSSFile(page, '/views/iam/iframe-iam.css', function(result) {
        var iamViewHeight = 280*iamCampaign.banner_height/iamCampaign.banner_width;
        messageTo(page, 'INJECT_POPOVER', {
          class: 'liner-iam',
          src: browser.extension.getURL('/views/iam/iam.html'),
          style: `height: ${iamViewHeight}px !important`
        });
        setTimeout(function() {
          showIAM(page);
        }, 700);
      });
    }

    if (tags == null) {
      fetchTagsFromServer(function() {
        showMainPopover();
      })
    } else {
      showMainPopover();
    }

    getEligibleCampaigns(user.id, function(json) {
      iamCampaign = {};

      try {
        var eligibleCampaigns = json.eligible_campaigns;
        for (var i=0; i<eligibleCampaigns.length; i++) {
          if (eligibleCampaigns[i].launch_status == 1 || (getClosedCampaigns().indexOf(parseInt(eligibleCampaigns[i].id)) == -1 && user.premium == 0)) {
            // Luke - Testing Campaign이거나 무료 사용자인데, 아직 사용자가 종료하지 않은 Campaign
            iamCampaign = eligibleCampaigns[i];
            prepareIAM();
            break;
          }
        }
      } catch(e) {}

      if (!iamCampaign.id && doShowOnboardingEC()) {
        iamCampaign = {
          id: 0,
          landing_url: "https://dynamic-link.getliner.com/72EF32",
          banner_width: 560,
          banner_height: 320,
          banner_image_en: "https://firebasestorage.getliner.com/v0/b/liner-firebase.appspot.com/o/65-ongoing-onboarding-small%2Fongonb_bec_en.png?alt=media&token=b065f723-b502-47f9-9c7f-c4b0428082f9",
          banner_image_ko: "https://firebasestorage.getliner.com/v0/b/liner-firebase.appspot.com/o/65-ongoing-onboarding-small%2Fongonb_bec_kr.png?alt=media&token=07a66057-e8c9-4ed4-b9b3-455bd0c7a589",
          banner_image_ja: "https://firebasestorage.getliner.com/v0/b/liner-firebase.appspot.com/o/65-ongoing-onboarding-small%2Fongonb_bec_jp.png?alt=media&token=fac25f31-e921-4b4c-996d-1b918f091d02",
          banner_image_zhs: "https://firebasestorage.getliner.com/v0/b/liner-firebase.appspot.com/o/65-ongoing-onboarding-small%2Fongonb_bec_zh.png?alt=media&token=90e3d832-7dfa-4696-91be-80b656c7d3c0"
        };
        prepareIAM();
      }
    });
  }
}

function showIAM(page) {
  messageTo(page, 'SHOW_IAM', {})
}

function hideIAM(page, removeIAM) {
  messageTo(page, "HIDE_IAM", {});
  if (removeIAM) {
    setTimeout(function() {
      messageTo(page, "REMOVE_IAM", {});
    }, 200);
  }
}

function hidePopover(page) {
  messageTo(page, "ANIMATE_POPOVER_REMOVE", {});
  hideIAM(page, true);
}