let user = {};
let recommendedDocs = [];
let recommendationMethod;

let isSaving = false;

function handleLocalMessage(event) {
    if (event.name === "RELOAD_RECOMMENDATION_POPOVER") {     
        user = event.message.user;   
        recommendedDocs = event.message.documents;
        recommendationMethod = event.message.recommendation_method;

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
    } else if (event.name === "SHOW_RECOMMENDATION_POPOVER_SPINNER") {
        const bodyHeight = $('body').height();
        const spinnerHeight = $('.spinner').height();
        $('.spinner').css('top', bodyHeight/2 - spinnerHeight/2);
        $('.spinner').show();
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
    $('.headerContainer .headerLabel').html(localize("Relevant Pages"));
}

function resetUI() {
    $('.recommendationContainer').html('');
    for (let i=0; i<recommendedDocs.length; i++) {
        const doc = recommendedDocs[i];
        const { document_id: documentId, title, url } = doc;
        const host = url.split('://')[1].split('/')[0];
        $('.recommendationContainer').append(getRecommendedContentHTML(documentId, title, host, url, i));
    }
    $('.spinner').hide();
    $('.recommendationContainer').show();
}

function getRecommendedContentHTML(documentId, title, host, url, index) {
    return  `<div class="recommendedContentDivider"></div>
            <div class="recommendedContentContainer" data-document-id="${documentId}" data-url="${url}">
                <p class="contentTitle">${title}</p>
                <p class="contentHost">${host}</p>  
                <div class="saveBtn" data-url="${url}" data-title="${title}" data-index="${index}"></div>
            </div>`;
}

function addEvents() {
    $('.recommendedContentContainer').click(function(e) {
        e.stopPropagation();

        const url = $(this)[0].dataset.url;
        messageToNative("LKS_EVENT", {
            "type": "click_recommendation_by_highlight",
            "recommendation_method": recommendationMethod,
            url,
        });
        messageToNative("GA_EVENT_RECOMMENDATION", {
            category : 'extension',
            action : 'relevant_pages_click',
            label: ''
        });        

        const documentId = $(this)[0].dataset.documentId;
        const linerDetailPageUrl = `https://getliner.com/home/pages/${documentId}`;
        window.open(linerDetailPageUrl);
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

        $(this).addClass('saved');
    });
}