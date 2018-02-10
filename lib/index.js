!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var n="object"==typeof exports?t(require("React")):t(e.React);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(3))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n(5),i=n(6);n(7),n(8),t.default=Object.assign(r.default,{Page:o.default,Side:i.default})},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=function(e){function t(t){var n=e.call(this,t)||this;return n.$nodes={},n.state={currentPage:0},n.handleClick=n.handleClick.bind(n),n.nextPage=n.nextPage.bind(n),n.previousPage=n.previousPage.bind(n),n}return o(t,e),t.prototype.componentDidMount=function(){var e=this.$nodes.book;e.addEventListener("swipeleft",this.nextPage),e.addEventListener("swiperight",this.previousPage)},t.prototype.componentWillUnmount=function(){var e=this.$nodes.book;e.removeEventListener("swipeleft",this.nextPage),e.removeEventListener("swiperight",this.previousPage)},t.prototype.handleClick=function(e){e.page<this.state.currentPage?this.previousPage():this.nextPage()},t.prototype.getPageCount=function(){return i.Children.count(this.props.children)},t.prototype.nextPage=function(){var e=this.state.currentPage;e!==this.getPageCount()&&this.setState({currentPage:e+1})},t.prototype.previousPage=function(){0!==this.state.currentPage&&this.setState({currentPage:this.state.currentPage-1})},t.prototype.render=function(){var e=this,t=this.props,n=t.width,r=t.height,o=t.children,s=this.state.currentPage;return i.createElement("div",{className:"book",style:{width:n,height:r},ref:function(t){e.$nodes.book=t}},i.createElement("div",{className:"book-wrapper"},i.Children.map(o,function(t,n){return i.cloneElement(t,{active:n===s,flipped:n<s,onClick:e.handleClick,page:n})})))},t.defaultProps={width:1080,height:640},t}(i.Component);t.default=s},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=function(e){function t(t){var n=e.call(this,t)||this;return n.handleClick=n.handleClick.bind(n),n}return o(t,e),t.prototype.handleClick=function(){var e=this.props,t=e.page;e.active;(0,e.onClick)({page:t})},t.prototype.render=function(){var e=this.props,t=e.active,n=e.flipped,r=e.children;return i.createElement("div",{className:"book-wrapper-page"+(t?" is-active":"")+(n?" is-flipped":""),onClick:this.handleClick},i.Children.map(r,function(e,t){return i.cloneElement(e,{side:t%2==0?"front":"back"})}))},t}(i.Component);t.default=s},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.side,n=e.children;return i.createElement("div",{className:"book-wrapper-page-side book-wrapper-page-side--"+t},n)},t}(i.Component);t.default=s},function(e,t){!function(e,t){if("function"!=typeof e.createEvent)return!1;var n,r,o,i,s,a,u,c,p,f=function(e){var t=e.toLowerCase(),n="MS"+e;return navigator.msPointerEnabled?n:!!window.PointerEvent&&t},l=function(e){return"on"+e in window&&e},d={useJquery:!t.IGNORE_JQUERY&&"undefined"!=typeof jQuery,swipeThreshold:t.SWIPE_THRESHOLD||100,tapThreshold:t.TAP_THRESHOLD||150,dbltapThreshold:t.DBL_TAP_THRESHOLD||200,longtapThreshold:t.LONG_TAP_THRESHOLD||1e3,tapPrecision:t.TAP_PRECISION/2||30,justTouchEvents:t.JUST_ON_TOUCH_DEVICES},h=!1,v=l("touchstart")||f("PointerDown"),g=l("touchend")||f("PointerUp"),b=l("touchmove")||f("PointerMove"),y=function(e){return!e.pointerId||void 0===n||e.pointerId===n},m=function(e,t,n){for(var r=t.split(" "),o=r.length;o--;)e.addEventListener(r[o],n,!1)},w=function(e){return e.targetTouches?e.targetTouches[0]:e},P=function(){return(new Date).getTime()},_=function(t,n,i,s){var a=e.createEvent("Event");if(a.originalEvent=i,(s=s||{}).x=r,s.y=o,s.distance=s.distance,d.useJquery&&(a=jQuery.Event(n,{originalEvent:i}),jQuery(t).trigger(a,s)),a.initEvent){for(var u in s)a[u]=s[u];a.initEvent(n,!0,!0),t.dispatchEvent(a)}for(;t;)t["on"+n]&&t["on"+n](a),t=t.parentNode},x=0;m(e,v+(d.justTouchEvents?"":" mousedown"),function(e){if(y(e)&&(n=e.pointerId,"mousedown"!==e.type&&(h=!0),"mousedown"!==e.type||!h)){var t=w(e);i=r=t.pageX,s=o=t.pageY,p=setTimeout(function(){_(e.target,"longtap",e),u=e.target},d.longtapThreshold),a=P(),x++}}),m(e,g+(d.justTouchEvents?"":" mouseup"),function(e){if(y(e))if(n=void 0,"mouseup"===e.type&&h)h=!1;else{var t=[],f=P(),l=s-o,v=i-r;if(clearTimeout(c),clearTimeout(p),v<=-d.swipeThreshold&&t.push("swiperight"),v>=d.swipeThreshold&&t.push("swipeleft"),l<=-d.swipeThreshold&&t.push("swipedown"),l>=d.swipeThreshold&&t.push("swipeup"),t.length){for(var g=0;g<t.length;g++){var b=t[g];_(e.target,b,e,{distance:{x:Math.abs(v),y:Math.abs(l)}})}x=0}else i>=r-d.tapPrecision&&i<=r+d.tapPrecision&&s>=o-d.tapPrecision&&s<=o+d.tapPrecision&&a+d.tapThreshold-f>=0&&(_(e.target,x>=2&&u===e.target?"dbltap":"tap",e),u=e.target),c=setTimeout(function(){x=0},d.dbltapThreshold)}}),m(e,b+(d.justTouchEvents?"":" mousemove"),function(e){if(y(e)&&("mousemove"!==e.type||!h)){var t=w(e);r=t.pageX,o=t.pageY}}),t.tocca=function(e){for(var t in e)d[t]=e[t];return d}}(document,window)},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0};n(11)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".book {\r\n  perspective: 2000px;\r\n}\r\n\r\n  .book-wrapper {\r\n    position: relative;\r\n    transform-style: preserve-3d;\r\n\r\n    width: 50%;\r\n    height: 100%;\r\n\r\n    margin-left: 50%;\r\n  }\r\n\r\n    .book-wrapper-page {\r\n      position: absolute;\r\n      width: 100%;\r\n      height: 100%;\r\n\r\n      cursor: pointer;\r\n\r\n      transform-style: preserve-3d;\r\n      transform-origin: left center;\r\n\r\n      transition-property: transform;\r\n      transition-duration: 1000ms;\r\n      transition-timing-function: cubic-bezier(.4, .37, .15, .98);\r\n    }\r\n\r\n    .book-wrapper-page.is-active {\r\n      z-index: 1;\r\n    }\r\n\r\n    .book-wrapper-page.is-flipped {\r\n      transform: rotate3d(0, 1, 0, -180deg);\r\n    }\r\n\r\n    .book-wrapper-page.book-wrapper-page.is-flipped:last-of-type {\r\n      z-index: 1;\r\n    }\r\n\r\n      .book-wrapper-page-side {\r\n        position: absolute;\r\n\r\n        width: 100%;\r\n        height: 100%;\r\n\r\n        background: linear-gradient(to bottom right, #fff, #ccc);\r\n\r\n        box-sizing: border-box;\r\n        backface-visibility: hidden;\r\n      }\r\n\r\n      .book-wrapper-page-side--back {\r\n        transform: rotate3d(0, 1, 0, 180deg);\r\n      }",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var t={};return function(e){if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,c=0,p=[],f=n(12);function l(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(y(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(y(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),p.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);t>=0&&p.splice(t,1)}function g(e){var t=document.createElement("style");return e.attrs.type="text/css",b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=c++;n=u||(u=g(t)),r=P.bind(null,n,s,!1),o=P.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return l(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&l(d(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete i[a.id]}}}};var m,w=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function P(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});