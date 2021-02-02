let user = {};
let recommendedDocs = [];
let recommendationMethod;
let currentPage = null;
let isRPClosed = false;
let isSaving = false;

function handleLocalMessage(event) {
    if (event.name === "RELOAD_RECOMMENDATION_POPOVER") {     
        user = event.message.user;   
        recommendedDocs = event.message.documents;
        recommendationMethod = event.message.recommendation_method;
        isRPClosed = event.message.is_rp_closed;

        doLocalization();
        resetUI();
        addEvents();

        messageToNative("GA_PAGEVIEW_RECOMMENDATION", {
            path: "/liner-" + getBrowserName() + "-extension-recommendation"
        });        
        messageToNative("GA_EVENT_RECOMMENDATION", {
            category : 'extension',
            action : 'relevant_pages_shown',
            label: ''
        });

        const urls = [];
        recommendedDocs.forEach(doc => {
            urls.push(doc.url);
        });
        messageToNative("LKS_EVENT", {
            "type": "view_recommendation_by_highlight",
            urls,
            "recommendation_method": recommendationMethod,
        });

        currentPage = event.message.page;
    } else if (event.name === "SHOW_RECOMMENDATION_POPOVER_SPINNER") {
        const bodyHeight = $('body').height();
        const spinnerHeight = $('.spinner').height();
        $('.spinner').css('top', bodyHeight/2 - spinnerHeight/2);

        if (isRPClosed === false && user.premium == 1) {
            $('.spinner').show();
        } else {
            $('.toggleBtn').hide();
            $('.spinner2').show();
        }

        $('.recommendationContainer').hide();

        messageToNative("GA_EVENT_RECOMMENDATION", {
            category : 'extension',
            action : 'relevant_pages_reload',
            label: ''
        });        
    } else if (event.name === "BOOKMARK_SERVER_RESPONSE") {
        isSaving = false;
        const { page_id: pageId, index } = event.message;
        recommendedDocs[index].page_id = pageId;
    } else if (event.name === "CANCEL_BOOKMARK_SERVER_RESPONSE") {
        isSaving = false;
        const { index } = event.message;
        recommendedDocs[index].page_id = undefined;
    } else if (event.name === "TOGGLE_RELEVANT_PAGES") {
        isRPClosed = event.message.is_rp_closed;
        resetUI();
        addEvents();
    }
}

$(document).ready(function() {
    messageToNative("GA_PAGEVIEW", {
        path: "/liner-" + getBrowserName() + "-extension-recommendation"
    });

    // Luke - 아래 메세지를 통해서 popover 정보가 initialize됨
    // Luke - handleLocalMessage의 LOGIN_INIT으로 가며, 이렇게 하는 이유는 Firefox에서 browser.extension.getBackgroundPage()가 iframe에서 작동하지 않기 때문
    messageToNative("RELOAD_RECOMMENDATION_POPOVER", {});
});

function doLocalization() {
    $('.headerContainer .headerLabel .label').html(localize("More Like This"));
    $('.headerContainer .headerLabel .documentCount').html(` (${recommendedDocs.length})`)

    $('.upgradeContainer .upgradeTitleLabel').html(localize("Premium Feature"));
    $('.upgradeContainer .upgradeDescLabel').html(localize("Get recommendations based on your last highlight."));
    $('.upgradeContainer .upgradeBtn').html(localize("Upgrade"));
}

function resetUI() {
    $('.recommendationContainer').html('');
    for (let i=0; i<recommendedDocs.length; i++) {
        const doc = recommendedDocs[i];
        const { document_id: documentId, title, url } = doc;
        const host = url.split('://')[1].split('/')[0];
        $('.recommendationContainer').append(getRecommendedContentHTML(documentId, title, host, url, i));
    }
    $('.toggleBtn').show();
    $('.spinner').hide();
    $('.spinner2').hide();
    $('.recommendationContainer').show();

    if (isRPClosed === true) {
        $('.headerContainer').addClass('open');
        $('.headerContainer .toggleBtn').removeClass('close').addClass('open');
        $('.recommendationContainer').hide();
        $('.upgradeContainer').hide();
    } else {
        $('.headerContainer').removeClass('open');
        $('.headerContainer .toggleBtn').removeClass('open').addClass('close');

        if (user.premium == 1) {
            $('.recommendationContainer').show();
            $('.upgradeContainer').hide();
        } else {
            $('.recommendationContainer').hide();
            $('.upgradeContainer').show();
        }
    }
}

function getRecommendedContentHTML(documentId, title, host, url, index) {
    const isSaved = recommendedDocs[index].is_saved;

    return  `<div class="recommendedContentDivider"></div>
            <div class="recommendedContentContainer" data-document-id="${documentId}" data-url="${url}">
                <p class="contentTitle">${title}</p>
                <p class="contentHost">${host}</p>  
                <div class="saveBtn ${isSaved === true ? 'saved' : ''}" data-url="${url}" data-title="${title}" data-index="${index}"></div>
            </div>`;
}

function addEvents() {
    $('.recommendedContentContainer').click(function(e) {
        e.stopPropagation();

        const originalUrl = $(this)[0].dataset.url;
        window.open(originalUrl);

        const urlDomain = new URL(originalUrl).hostname;
        const contentType = (originalUrl.split('.pdf').length > 1 && originalUrl.split('.pdf')[1] === "") ? 'pdf' : 'web_page';

        messageToNative("AMPLITUDE_EVENT", {
            event_name: "click_liner_page",
            properties: {
                url_domain: urlDomain,
                content_type: contentType,
                source_type: 'relevant',
                algorithm_id: recommendationMethod,
            },
        });

        let urlDomainSource;
        try {
            urlDomainSource = new URL(currentPage.url).hostname;
        } catch(e) {}

        messageToNative("AMPLITUDE_EVENT", {
            event_name: "click_be_relevant_page_original_link",
            properties: {
                url_domain_source: urlDomainSource,
                url_domain_destination: urlDomain,
                content_type: contentType,
                algorithm_id: recommendationMethod,
            },
        });

        messageToNative("LKS_EVENT", {
            "type": "click_recommendation_by_highlight",
            "recommendation_method": recommendationMethod,
            "url": originalUrl,
        });
        messageToNative("GA_EVENT_RECOMMENDATION", {
            category : 'extension',
            action : 'relevant_pages_click',
            label: ''
        });
    });

    $('.recommendedContentContainer .saveBtn').click(function(e) {
        e.stopPropagation();

        const index = $(this)[0].dataset.index;
        const title = $(this)[0].dataset.title;
        const url = $(this)[0].dataset.url;
        const keywords = recommendedDocs[index].keywords;

        if ($(this).hasClass('saved') === true) {
            if (isSaving === true) {
                return;
            }    
            isSaving = true;
    
            const pageId = recommendedDocs[index].page_id;
            messageToNative("CANCEL_BOOKMARK", {
                page_id: pageId,
            });
            messageToNative("LKS_EVENT", {
                "type": "cancel_bookmark",
                "recommendation_method": recommendationMethod,
                url,
            });
            messageToNative("GA_EVENT_RECOMMENDATION", {
                category : 'extension',
                action : 'relevant_pages_cancel_bookmark',
                label: ''
            });

            recommendedDocs[index].is_saved = false;
            $(this).removeClass('saved');
            return;
        }

        messageToNative("BOOKMARK", {
            title,
            url,
            index,
        });

        messageToNative("LKS_EVENT", {
            "type": "bookmark",
            "recommendation_method": recommendationMethod,
            url,
            keywords,
        });

        messageToNative("GA_EVENT_RECOMMENDATION", {
            category : 'extension',
            action : 'relevant_pages_bookmark',
            label: ''
        });        

        const urlDomain = new URL(url).hostname;
        const contentType = (url.split('.pdf').length > 1 && url.split('.pdf')[1] === "") ? 'pdf' : 'web_page';

        let urlDomainSource;
        try {
            urlDomainSource = new URL(currentPage.url).hostname;
        } catch(e) {}
        
        messageToNative("AMPLITUDE_EVENT", {
            event_name: "click_be_relevant_page_bookmark_button",
            properties: {
                url_domain_source: urlDomainSource,
                url_domain_destination: urlDomain,
                content_type: contentType,
                algorithm_id: recommendationMethod,
            },
        });

        messageToNative("AMPLITUDE_EVENT", {
            event_name: "save_liner_page",
            properties: {
                url_domain: urlDomain,
                content_type: contentType,
                source_type: 'relevant',
                algorithm_id: recommendationMethod,
            },
        });

        recommendedDocs[index].is_saved = true;
        $(this).addClass('saved');
    });
    
    $('.toggleBtn').off().click(function(e) {
        e.stopPropagation();
        messageToNative("TOGGLE_RELEVANT_PAGES", {});
    });

    $('.headerContainer').off().click(function(e) {
        if ($(this).hasClass('open') === true) {
            e.stopPropagation();
            messageToNative("TOGGLE_RELEVANT_PAGES", {});    
        }
    });

    $('.upgradeBtn').click(function(e) {
        messageToNative("AMPLITUDE_EVENT", {
            event_name: "click_upgrade_flow_entry",
            properties: {
                wording: 'Upgrade',
                entry: 'be_relevant_pages',
            },
        });
    });
}