'use strict';var checkboxKBS=document.getElementById("enableKBS"),checkboxDanmu=document.getElementById("turnOffDanmu"),checkboxAutoplay=document.getElementById("autoplay"),checkboxExitFullscreen=document.getElementById("exitFullscreen"),radioMode0=document.getElementById("mode0"),radioMode1=document.getElementById("mode1"),radioMode2=document.getElementById("mode2"),checkboxPreventshade=document.getElementById("preventshade"),checkboxTurnOffLight=document.getElementById("turnOffLight"),checkboxSmartLight=
document.getElementById("smartLight"),checkboxHideOtherLocales=document.getElementById("hideOtherLocales");function init(){chrome.storage.sync.get({keyboard:!0,turnOffDanmu:!0,screenMode:0,autoplay:!1,exitFullscreen:!1,preventshade:!1,turnOffLight:!1,smartLight:!1,hideOtherLocales:!1},initState);initMsg()}
function initState(a){checkboxKBS.checked=a.keyboard;checkboxKBS.addEventListener("change",saveOptions);checkboxDanmu.checked=a.turnOffDanmu;checkboxDanmu.addEventListener("change",saveOptions);checkboxAutoplay.checked=a.autoplay;checkboxAutoplay.addEventListener("change",saveOptions);checkboxExitFullscreen.checked=a.exitFullscreen;checkboxExitFullscreen.addEventListener("change",saveOptions);checkboxPreventshade.checked=a.preventshade;checkboxPreventshade.addEventListener("change",saveOptions);checkboxHideOtherLocales.checked=
a.hideOtherLocales;checkboxHideOtherLocales.addEventListener("change",saveOptions);checkboxTurnOffLight.checked=a.turnOffLight;checkboxTurnOffLight.addEventListener("change",saveOptions);checkboxSmartLight.checked=a.smartLight;checkboxSmartLight.addEventListener("change",function(){checkboxSmartLight.checked&&(checkboxTurnOffLight.checked=!0);saveOptions()});document.getElementById("mode"+a.screenMode).checked=!0;radioMode0.addEventListener("click",saveOptions);radioMode1.addEventListener("click",
saveOptions);radioMode2.addEventListener("click",saveOptions)}function initMsg(){let a=document.querySelectorAll("[data-i18n]");for(const b of a)b.textContent=chrome.i18n.getMessage(b.dataset.i18n)}
function saveOptions(){const a={keyboard:checkboxKBS.checked,turnOffDanmu:checkboxDanmu.checked,autoplay:checkboxAutoplay.checked,exitFullscreen:checkboxExitFullscreen.checked,preventshade:checkboxPreventshade.checked,turnOffLight:checkboxTurnOffLight.checked,smartLight:checkboxSmartLight.checked,hideOtherLocales:checkboxHideOtherLocales.checked,screenMode:parseInt(document.querySelector("input[name='mode']:checked").value)};chrome.storage.sync.set(a)}init();