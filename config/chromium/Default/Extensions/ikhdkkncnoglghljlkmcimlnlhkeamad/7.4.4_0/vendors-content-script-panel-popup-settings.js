/*! For license information please see vendors-content-script-panel-popup-settings.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(e,t){var n=this;this.container=e,this.className=t,this.isRunning=!1,this.handleKeyDown=function(e){9===e.which&&(n.reset(),n.container.addEventListener("mousedown",n.handleMouseDown))},this.handleMouseDown=function(){n.reset(),n.container.classList.add(n.className),n.container.addEventListener("keydown",n.handleKeyDown)}}return e.prototype.isActive=function(){return this.isRunning},e.prototype.start=function(){this.container.addEventListener("mousedown",this.handleMouseDown),this.isRunning=!0},e.prototype.stop=function(){this.reset(),this.isRunning=!1},e.prototype.reset=function(){this.container.classList.remove(this.className),this.container.removeEventListener("keydown",this.handleKeyDown),this.container.removeEventListener("mousedown",this.handleMouseDown)},e}()},145:function(e,t,n){"use strict";var r=n(58),i=n(146),o=Object(i.a)(r.a);t.a=o},146:function(e,t,n){"use strict";var r=n(54);t.a=function(e,t){return function(n,i){if(null==n)return n;if(!Object(r.a)(n))return e(n,i);for(var o=n.length,s=t?o:-1,a=Object(n);(t?s--:++s<o)&&!1!==i(a[s],s,a););return n}}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(2),i=n(0),o=n(118),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.timeoutIds=[],r.requestIds=[],r.clearTimeouts=function(){if(r.timeoutIds.length>0){for(var e=0,t=r.timeoutIds;e<t.length;e++){var n=t[e];window.clearTimeout(n)}r.timeoutIds=[]}},r.cancelAnimationFrames=function(){if(r.requestIds.length>0){for(var e=0,t=r.requestIds;e<t.length;e++){var n=t[e];window.cancelAnimationFrame(n)}r.requestIds=[]}},Object(o.e)("production")||r.validateProps(r.props),r}return Object(r.c)(t,e),t.prototype.componentDidUpdate=function(e,t,n){Object(o.e)("production")||this.validateProps(this.props)},t.prototype.componentWillUnmount=function(){this.clearTimeouts(),this.cancelAnimationFrames()},t.prototype.requestAnimationFrame=function(e){var t=window.requestAnimationFrame(e);return this.requestIds.push(t),function(){return window.cancelAnimationFrame(t)}},t.prototype.setTimeout=function(e,t){var n=window.setTimeout(e,t);return this.timeoutIds.push(n),function(){return window.clearTimeout(n)}},t.prototype.validateProps=function(e){},t}(i.Component)},202:function(e,t,n){"use strict";var r=n(58),i=n(61);t.a=function(e,t){return e&&Object(r.a)(e,Object(i.a)(t))}},218:function(e,t,n){"use strict";var r=n(142),i=n(75),o=n(145);var s=function(e,t){var n;return Object(o.a)(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n},a=n(19),u=n(73),l=n(54),c=n(71),p=n(12);var d=function(e,t,n){if(!Object(p.a)(n))return!1;var r=typeof t;return!!("number"==r?Object(l.a)(n)&&Object(c.a)(t,n.length):"string"==r&&t in n)&&Object(u.a)(n[t],e)};t.a=function(e,t,n){var o=Object(a.a)(e)?r.a:s;return n&&d(e,t,n)&&(t=void 0),o(e,Object(i.a)(t,3))}},300:function(e,t,n){"use strict";t.a=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r={};n.r(r),n.d(r,"MULTISELECT",(function(){return y})),n.d(r,"MULTISELECT_POPOVER",(function(){return w})),n.d(r,"MULTISELECT_TAG_INPUT_INPUT",(function(){return O})),n.d(r,"OMNIBAR",(function(){return g})),n.d(r,"OMNIBAR_OVERLAY",(function(){return P})),n.d(r,"SELECT",(function(){return b})),n.d(r,"SELECT_POPOVER",(function(){return C}));var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var u=n(3),l=n.n(u),c=n(0),p=n(87),d=n(173),m=n(29),h=n(1),v=n(4),f=n(187),I=h.a.getClassNamespace(),y=I+"-multi-select",w=y+"-popover",O=y+"-tag-input-input",g=I+"-omnibar",P=g+"-overlay",b=I+"-select",C=b+"-popover";function E(e,t,n){return void 0===e||null==t||null==n?t===n:h.c.isFunction(e)?e(t,n):t[e]===n[e]}function R(e){if(null==e)return!1;var t=Object.keys(e);return 1===t.length&&"__blueprintCreateNewItemBrand"===t[0]&&"blueprint-create-new-item"===e.__blueprintCreateNewItemBrand}function A(e){return null==e||R(e)?null:e}var N=function(e){function t(t,n){var r,i,o=e.call(this,t,n)||this;o.refHandlers={itemsParent:function(e){return o.itemsParentRef=e}},o.shouldCheckActiveItemInViewport=!1,o.expectedNextActiveItem=null,o.isEnterKeyPressed=!1,o.renderItemList=function(e){var t=o.props,n=t.initialContent,r=t.noResults,i=e.renderCreateItem(),s=function(e,t,n){if(0===e.query.length&&void 0!==n)return n;var r=e.filteredItems.map(e.renderItem).filter((function(e){return null!=e}));return r.length>0?r:t}(e,null!=i?null:r,n);if(null==s&&null==i)return null;var a=o.isCreateItemFirst();return c.createElement(d.v,{ulRef:e.itemsParentRef},a&&i,s,!a&&i)},o.renderItem=function(e,t){if(!0!==o.props.disabled){var n=o.state,r=n.activeItem,i=n.query,s=o.state.filteredItems.indexOf(e)>=0,a={active:E(o.props.itemsEqual,A(r),e),disabled:Q(e,t,o.props.itemDisabled),matchesPredicate:s};return o.props.itemRenderer(e,{handleClick:function(t){return o.handleItemSelect(e,t)},index:t,modifiers:a,query:i})}return null},o.renderCreateItemMenuItem=function(){if(o.isCreateItemRendered()){var e=o.state,t=e.activeItem,n=e.query.trim(),r=R(t);return o.props.createNewItemRenderer(n,r,(function(e){o.handleItemCreate(n,e)}))}return null},o.handleItemCreate=function(e,t){var n,r,i,s,a=null===(r=(n=o.props).createNewItemFromQuery)||void 0===r?void 0:r.call(n,e);null!=a&&(null===(s=(i=o.props).onItemSelect)||void 0===s||s.call(i,a,t),o.maybeResetQuery())},o.handleItemSelect=function(e,t){var n,r;o.setActiveItem(e),null===(r=(n=o.props).onItemSelect)||void 0===r||r.call(n,e,t),o.maybeResetQuery()},o.handlePaste=function(e){for(var t,n=o.props,r=n.createNewItemFromQuery,i=n.onItemsPaste,s=[],a=[],u=0,l=e;u<l.length;u++){var c=l[u],p=q(c,o.props);if(void 0!==p)t=p,a.push(p);else if(o.canCreateItems()){var d=null==r?void 0:r(c);void 0!==d&&a.push(d)}else s.push(c)}o.setQuery(s.join(", "),!1),void 0!==t&&o.setActiveItem(t),null==i||i(a)},o.handleKeyDown=function(e){var t,n,r=e.keyCode;if(r===h.b.ARROW_UP||r===h.b.ARROW_DOWN){e.preventDefault();var i=o.getNextActiveItem(r===h.b.ARROW_UP?-1:1);null!=i&&o.setActiveItem(i)}else r===h.b.ENTER&&(o.isEnterKeyPressed=!0);null===(n=(t=o.props).onKeyDown)||void 0===n||n.call(t,e)},o.handleKeyUp=function(e){var t=o.props.onKeyUp,n=o.state.activeItem;e.keyCode===h.b.ENTER&&o.isEnterKeyPressed&&(e.preventDefault(),null==n||R(n)?o.handleItemCreate(o.state.query,e):o.handleItemSelect(n,e),o.isEnterKeyPressed=!1),null==t||t(e)},o.handleInputQueryChange=function(e){var t,n,r=null==e?"":e.target.value;o.setQuery(r),null===(n=(t=o.props).onQueryChange)||void 0===n||n.call(t,r,e)};var s=t.query,a=void 0===s?"":s,u=null===(r=t.createNewItemFromQuery)||void 0===r?void 0:r.call(t,a),l=T(a,t);return o.state={activeItem:void 0!==t.activeItem?t.activeItem:null!==(i=t.initialActiveItem)&&void 0!==i?i:F(l,t.itemDisabled),createNewItem:u,filteredItems:l,query:a},o}return o(t,e),t.ofType=function(){return t},t.prototype.render=function(){var e=this.props,t=e.className,n=e.items,r=e.renderer,i=e.itemListRenderer,o=void 0===i?this.renderItemList:i,u=this.state,l=(u.createNewItem,a(u,["createNewItem"]));return r(s(s({},l),{className:t,handleItemSelect:this.handleItemSelect,handleKeyDown:this.handleKeyDown,handleKeyUp:this.handleKeyUp,handlePaste:this.handlePaste,handleQueryChange:this.handleInputQueryChange,itemList:o(s(s({},l),{items:n,itemsParentRef:this.refHandlers.itemsParent,renderCreateItem:this.renderCreateItemMenuItem,renderItem:this.renderItem}))}))},t.prototype.componentDidUpdate=function(e){var t=this;void 0!==this.props.activeItem&&this.props.activeItem!==this.state.activeItem&&(this.shouldCheckActiveItemInViewport=!0,this.setState({activeItem:this.props.activeItem})),null!=this.props.query&&this.props.query!==e.query?this.setQuery(this.props.query,this.props.resetOnQuery,this.props):h.c.shallowCompareKeys(this.props,e,{include:["items","itemListPredicate","itemPredicate"]})||this.setQuery(this.state.query),this.shouldCheckActiveItemInViewport&&(this.requestAnimationFrame((function(){return t.scrollActiveItemIntoView()})),this.shouldCheckActiveItemInViewport=!1)},t.prototype.scrollActiveItemIntoView=function(){var e=!1!==this.props.scrollToActiveItem,t=!E(this.props.itemsEqual,A(this.expectedNextActiveItem),A(this.props.activeItem));if(this.expectedNextActiveItem=null,e||!t){var n=this.getActiveElement();if(null!=this.itemsParentRef&&null!=n){var r=n.offsetTop,i=n.offsetHeight,o=this.itemsParentRef,s=o.offsetTop,a=o.scrollTop,u=o.clientHeight,l=this.getItemsParentPadding(),c=l.paddingTop,p=r+i+l.paddingBottom-s,d=r-c-s;p>=a+u?this.itemsParentRef.scrollTop=p+i-u:d<=a&&(this.itemsParentRef.scrollTop=d-i)}}},t.prototype.setQuery=function(e,t,n){var r;void 0===t&&(t=this.props.resetOnQuery),void 0===n&&(n=this.props);var i=n.createNewItemFromQuery;this.shouldCheckActiveItemInViewport=!0,e!==this.state.query&&(null===(r=n.onQueryChange)||void 0===r||r.call(n,e));var o=e.trim(),s=T(o,n),a=null!=i&&""!==o?i(o):void 0;this.setState({createNewItem:a,filteredItems:s,query:e});var u=this.getActiveIndex(s);(t||u<0||Q(A(this.state.activeItem),u,n.itemDisabled))&&(this.isCreateItemRendered()&&this.isCreateItemFirst()?this.setActiveItem({__blueprintCreateNewItemBrand:"blueprint-create-new-item"}):this.setActiveItem(F(s,n.itemDisabled)))},t.prototype.setActiveItem=function(e){var t,n,r,i;this.expectedNextActiveItem=e,void 0===this.props.activeItem&&(this.shouldCheckActiveItemInViewport=!0,this.setState({activeItem:e})),R(e)?null===(n=(t=this.props).onActiveItemChange)||void 0===n||n.call(t,null,!0):null===(i=(r=this.props).onActiveItemChange)||void 0===i||i.call(r,e,!1)},t.prototype.getActiveElement=function(){var e=this.state.activeItem;if(null!=this.itemsParentRef){if(R(e)){var t=this.isCreateItemFirst()?0:this.state.filteredItems.length;return this.itemsParentRef.children.item(t)}var n=this.getActiveIndex();return this.itemsParentRef.children.item(n)}},t.prototype.getActiveIndex=function(e){void 0===e&&(e=this.state.filteredItems);var t=this.state.activeItem;if(null==t||R(t))return-1;for(var n=0;n<e.length;++n)if(E(this.props.itemsEqual,e[n],t))return n;return-1},t.prototype.getItemsParentPadding=function(){var e=getComputedStyle(this.itemsParentRef),t=e.paddingTop;return{paddingBottom:L(e.paddingBottom),paddingTop:L(t)}},t.prototype.getNextActiveItem=function(e,t){if((void 0===t&&(t=this.getActiveIndex()),this.isCreateItemRendered())&&(0===t&&-1===e||t===this.state.filteredItems.length-1&&1===e))return{__blueprintCreateNewItemBrand:"blueprint-create-new-item"};return F(this.state.filteredItems,this.props.itemDisabled,e,t)},t.prototype.isCreateItemRendered=function(){return this.canCreateItems()&&""!==this.state.query&&!this.wouldCreatedItemMatchSomeExistingItem()},t.prototype.isCreateItemFirst=function(){return"first"===this.props.createNewItemPosition},t.prototype.canCreateItems=function(){return null!=this.props.createNewItemFromQuery&&null!=this.props.createNewItemRenderer},t.prototype.wouldCreatedItemMatchSomeExistingItem=function(){var e=this;return this.state.filteredItems.some((function(t){return E(e.props.itemsEqual,t,e.state.createNewItem)}))},t.prototype.maybeResetQuery=function(){this.props.resetOnSelect&&this.setQuery("",!0)},t.displayName=v.a+".QueryList",t.defaultProps={disabled:!1,resetOnQuery:!0},t}(n(199).a);function L(e){return null==e?0:parseInt(e.slice(0,-2),10)}function q(e,t){var n=t.items,r=t.itemPredicate;if(h.c.isFunction(r))for(var i=0;i<n.length;i++){var o=n[i];if(r(e,o,i,!0))return o}}function T(e,t){var n=t.items,r=t.itemPredicate,i=t.itemListPredicate;return h.c.isFunction(i)?i(e,n):h.c.isFunction(r)?n.filter((function(t,n){return r(e,t,n)})):n}function Q(e,t,n){return null!=n&&null!=e&&(h.c.isFunction(n)?n(e,t):!!e[n])}function F(e,t,n,r){if(void 0===n&&(n=1),void 0===r&&(r=e.length-1),0===e.length)return null;var i,o,s,a=r,u=e.length-1;do{if(s=u,!Q(e[a=(i=a+n)<(o=0)?s:i>s?o:i],a,t))return e[a]}while(a!==r&&-1!==r);return null}var j=function(e){function t(){var t,n=e.apply(this,arguments)||this;return n.state={isOpen:!1},n.TypedQueryList=N.ofType(),n.inputElement=null,n.queryList=null,n.handleInputRef=Object(p.d)(n,"inputElement",null===(t=n.props.inputProps)||void 0===t?void 0:t.inputRef),n.handleQueryListRef=function(e){return n.queryList=e},n.renderQueryList=function(e){var t=n.props,i=t.filterable,o=void 0===i||i,a=t.disabled,u=void 0!==a&&a,p=t.inputProps,h=void 0===p?{}:p,v=t.popoverProps,f=void 0===v?{}:v,I=c.createElement(d.u,s({leftIcon:"search",placeholder:"Filter...",rightElement:n.maybeRenderClearButton(e.query)},h,{inputRef:n.handleInputRef,onChange:e.handleQueryChange,value:e.query})),y=e.handleKeyDown,w=e.handleKeyUp;return c.createElement(d.D,s({autoFocus:!1,enforceFocus:!1,isOpen:n.state.isOpen,disabled:u,position:m.a.BOTTOM_LEFT},f,{className:l()(e.className,f.className),onInteraction:n.handlePopoverInteraction,popoverClassName:l()(r.SELECT_POPOVER,f.popoverClassName),onOpening:n.handlePopoverOpening,onOpened:n.handlePopoverOpened,onClosing:n.handlePopoverClosing}),c.createElement("div",{onKeyDown:n.state.isOpen?y:n.handleTargetKeyDown,onKeyUp:n.state.isOpen?w:void 0},n.props.children),c.createElement("div",{onKeyDown:y,onKeyUp:w},o?I:void 0,e.itemList))},n.handleTargetKeyDown=function(e){e.which!==h.b.ARROW_UP&&e.which!==h.b.ARROW_DOWN||(e.preventDefault(),n.setState({isOpen:!0}))},n.handleItemSelect=function(e,t){var r,i;n.setState({isOpen:!1}),null===(i=(r=n.props).onItemSelect)||void 0===i||i.call(r,e,t)},n.handlePopoverInteraction=function(e){var t,r;n.setState({isOpen:e}),null===(r=null===(t=n.props.popoverProps)||void 0===t?void 0:t.onInteraction)||void 0===r||r.call(t,e)},n.handlePopoverOpening=function(e){var t,r;n.previousFocusedElement=document.activeElement,n.props.resetOnClose&&n.resetQuery(),null===(r=null===(t=n.props.popoverProps)||void 0===t?void 0:t.onOpening)||void 0===r||r.call(t,e)},n.handlePopoverOpened=function(e){var t,r;null!=n.queryList&&n.queryList.scrollActiveItemIntoView(),n.requestAnimationFrame((function(){var e,t=n.props.inputProps;!1!==(void 0===t?{}:t).autoFocus&&(null===(e=Object(p.a)(n.inputElement))||void 0===e||e.focus())})),null===(r=null===(t=n.props.popoverProps)||void 0===t?void 0:t.onOpened)||void 0===r||r.call(t,e)},n.handlePopoverClosing=function(e){var t,r;n.requestAnimationFrame((function(){void 0!==n.previousFocusedElement&&(n.previousFocusedElement.focus(),n.previousFocusedElement=void 0)})),null===(r=null===(t=n.props.popoverProps)||void 0===t?void 0:t.onClosing)||void 0===r||r.call(t,e)},n.resetQuery=function(){return n.queryList&&n.queryList.setQuery("",!0)},n}return o(t,e),t.ofType=function(){return t},t.prototype.render=function(){var e=this.props,t=(e.filterable,e.inputProps,e.popoverProps,a(e,["filterable","inputProps","popoverProps"]));return c.createElement(this.TypedQueryList,s({},t,{onItemSelect:this.handleItemSelect,ref:this.handleQueryListRef,renderer:this.renderQueryList}))},t.prototype.componentDidUpdate=function(e,t){this.state.isOpen&&!t.isOpen&&null!=this.queryList&&this.queryList.scrollActiveItemIntoView()},t.prototype.maybeRenderClearButton=function(e){return e.length>0?c.createElement(d.d,{icon:"cross",minimal:!0,onClick:this.resetQuery}):void 0},t.displayName=v.a+".Select",t}(f.a)},325:function(e,t,n){"use strict";var r=function(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e},i=n(135),o=Object(i.a)(!0),s=n(43);var a=function(e,t){return e&&o(e,t,s.a)},u=n(146),l=Object(u.a)(a,!0),c=n(61),p=n(19);t.a=function(e,t){return(Object(p.a)(e)?r:l)(e,Object(c.a)(t))}},61:function(e,t,n){"use strict";var r=n(44);t.a=function(e){return"function"==typeof e?e:r.a}}}]);