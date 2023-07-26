import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import{Chevron2LeftIcon as n}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as i}from"@lifesg/react-icons/chevron-2-right";import{ChevronLeftIcon as o}from"@lifesg/react-icons/chevron-left";import{ChevronLineLeftIcon as a}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as s}from"@lifesg/react-icons/chevron-line-right";import{ChevronRightIcon as l}from"@lifesg/react-icons/chevron-right";import{EllipsisHorizontalIcon as u}from"@lifesg/react-icons/ellipsis-horizontal";import*as c from"react";import d,{useEffect as h,useLayoutEffect as f,useState as p,useRef as m,forwardRef as g,useCallback as y,useContext as v,useMemo as b,useImperativeHandle as w}from"react";import{unstable_batchedUpdates as $}from"react-dom";import x,{keyframes as S,css as _}from"styled-components";import{ExternalIcon as O}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as F}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as k}from"@lifesg/react-icons/tick";import{CrossIcon as j}from"@lifesg/react-icons/cross";import{MagnifierIcon as D}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as M}from"@lifesg/react-icons/chevron-down";var B,A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},P={exports:{}};B=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var i=e.expressions.every((function(e){var r=e.feature,n=e.modifier,i=e.value,o=t[r];if(!o)return!1;switch(r){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=c(i),o=c(o);break;case"resolution":i=u(i),o=u(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!r||!i&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),o=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(i);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function u(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(n,a);return o[e]=i.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
  !*** ./node_modules/matchmediaquery/index.js ***!
  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,t,r){var o=this;if(i&&!r){var a=i.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,t),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,r){return new o(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var u in o=Object(arguments[l]))r.call(o,u)&&(s[u]=o[u]);if(t){a=t(o);for(var c=0;c<a.length;c++)n.call(o,a[c])&&(s[a[c]]=o[a[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,r)=>{var n,i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var u in e)if(a(e,u)){var c;try{if("function"!=typeof e[u]){var d=Error((s||"React class")+": "+r+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}c=e[u](t,u,s,r,null,i)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+r+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in o)){o[c.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+c.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function u(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",d="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(u),arrayOf:function(e){return m((function(t,r,n,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+b(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var u=e(s,l,n,i,o+"["+l+"]",a);if(u instanceof Error)return u}return null}))},element:m((function(t,r,n,i,o){var a=t[r];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,t,r,n,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+n+" `"+o+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||d;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,r,n,i){return v(e[t])?null:new p("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,r,n,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],u=b(l);if("object"!==u)return new p("Invalid "+i+" `"+o+"` of type `"+u+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var d=e(l,c,n,i,o+"."+c,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),u)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),u;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(r)+" at index "+t+"."),u}return m((function(t,r,n,i,o){for(var l=[],u=0;u<e.length;u++){var c=(0,e[u])(t,r,n,i,o,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,n,i,o){var s=t[r],l=b(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var u in e){var c=e[u];if("function"!=typeof c)return y(n,i,o,u,w(c));var d=c(s,u,n,i,o+"."+u,a);if(d)return d}return null}))},exact:function(e){return m((function(t,r,n,i,l){var u=t[r],c=b(u);if("object"!==c)return new p("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var d=o({},t[r],e);for(var h in d){var f=e[h];if(s(e,h)&&"function"!=typeof f)return y(n,i,l,h,w(f));if(!f)return new p("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(u,h,n,i,l+"."+h,a);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var r={},i=0;function o(o,s,l,u,c,h,f){if(u=u||d,h=h||l,f!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=u+":"+l;!r[g]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[g]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+c+" `"+h+"` is marked as required in `"+u+"`, but its value is `null`."):new p("The "+c+" `"+h+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(s,l,u,c,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function g(e){return m((function(t,r,n,i,o,a){var s=t[r];return b(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+w(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,r,n,i){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[c]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/(e,t,r)=>{var n=r(/*! react-is */"./node_modules/react-is/index.js");e.exports=r(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case u:case c:case i:case a:case o:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case n:return t}}}var $=u,x=c,S=l,_=s,O=r,F=d,k=i,j=m,D=p,M=n,B=a,A=o,P=h,C=!1;function E(e){return w(e)===c}t.AsyncMode=$,t.ConcurrentMode=x,t.ContextConsumer=S,t.ContextProvider=_,t.Element=O,t.ForwardRef=F,t.Fragment=k,t.Lazy=j,t.Memo=D,t.Portal=M,t.Profiler=B,t.StrictMode=A,t.Suspense=P,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),E(e)||w(e)===u},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===o||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),i=r.length;if(n.length!==i)return!1;for(var o=0;o<i;o++){var a=r[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,i=e.onChange,a=n(e,["children","device","onChange"]),s=(0,o.default)(a,r,i);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
  !*** ./src/Context.ts ***!
  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var i=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=i.default;var o=n(r(/*! ./Component */"./src/Component.ts"));t.default=o.default;var a=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=n(r(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
  !*** ./src/mediaQuery.ts ***!
  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},u={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},c=i(u,["type"]),d=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},c),h=n(n({},l),d);t.default={all:h,types:l,matchers:u,features:d}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),o=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),u=n(r(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],o=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(u.default),r=function(){return c(e)||c(t)},n=(0,i.useState)(r),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,i.useState)(r),a=n[0],s=n[1],l=d();return(0,i.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),f=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),p=d();return(0,i.useEffect)((function(){p&&r&&r(f)}),[f]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})(),P.exports=B(d);var C=function(){this.__data__=[],this.size=0};var E=function(e,t){return e===t||e!=e&&t!=t},T=E;var I=function(e,t){for(var r=e.length;r--;)if(T(e[r][0],t))return r;return-1},z=I,N=Array.prototype.splice;var H=I;var L=I;var R=I;var W=C,V=function(e){var t=this.__data__,r=z(t,e);return!(r<0)&&(r==t.length-1?t.pop():N.call(t,r,1),--this.size,!0)},Y=function(e){var t=this.__data__,r=H(t,e);return r<0?void 0:t[r][1]},q=function(e){return L(this.__data__,e)>-1},U=function(e,t){var r=this.__data__,n=R(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Q(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Q.prototype.clear=W,Q.prototype.delete=V,Q.prototype.get=Y,Q.prototype.has=q,Q.prototype.set=U;var Z=Q,X=Z;var G=function(){this.__data__=new X,this.size=0};var J=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var K=function(e){return this.__data__.get(e)};var ee=function(e){return this.__data__.has(e)},te="object"==typeof A&&A&&A.Object===Object&&A,re=te,ne="object"==typeof self&&self&&self.Object===Object&&self,ie=re||ne||Function("return this")(),oe=ie.Symbol,ae=oe,se=Object.prototype,le=se.hasOwnProperty,ue=se.toString,ce=ae?ae.toStringTag:void 0;var de=function(e){var t=le.call(e,ce),r=e[ce];try{e[ce]=void 0;var n=!0}catch(e){}var i=ue.call(e);return n&&(t?e[ce]=r:delete e[ce]),i},he=Object.prototype.toString;var fe=de,pe=function(e){return he.call(e)},me=oe?oe.toStringTag:void 0;var ge=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":me&&me in Object(e)?fe(e):pe(e)};var ye=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ve=ge,be=ye;var we,$e=function(e){if(!be(e))return!1;var t=ve(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},xe=ie["__core-js_shared__"],Se=(we=/[^.]+$/.exec(xe&&xe.keys&&xe.keys.IE_PROTO||""))?"Symbol(src)_1."+we:"";var _e=function(e){return!!Se&&Se in e},Oe=Function.prototype.toString;var Fe=function(e){if(null!=e){try{return Oe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ke=$e,je=_e,De=ye,Me=Fe,Be=/^\[object .+?Constructor\]$/,Ae=Function.prototype,Pe=Object.prototype,Ce=Ae.toString,Ee=Pe.hasOwnProperty,Te=RegExp("^"+Ce.call(Ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ie=function(e){return!(!De(e)||je(e))&&(ke(e)?Te:Be).test(Me(e))},ze=function(e,t){return null==e?void 0:e[t]};var Ne=function(e,t){var r=ze(e,t);return Ie(r)?r:void 0},He=Ne(ie,"Map"),Le=Ne(Object,"create"),Re=Le;var We=function(){this.__data__=Re?Re(null):{},this.size=0};var Ve=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ye=Le,qe=Object.prototype.hasOwnProperty;var Ue=function(e){var t=this.__data__;if(Ye){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return qe.call(t,e)?t[e]:void 0},Qe=Le,Ze=Object.prototype.hasOwnProperty;var Xe=Le;var Ge=We,Je=Ve,Ke=Ue,et=function(e){var t=this.__data__;return Qe?void 0!==t[e]:Ze.call(t,e)},tt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Xe&&void 0===t?"__lodash_hash_undefined__":t,this};function rt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}rt.prototype.clear=Ge,rt.prototype.delete=Je,rt.prototype.get=Ke,rt.prototype.has=et,rt.prototype.set=tt;var nt=rt,it=Z,ot=He;var at=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var st=function(e,t){var r=e.__data__;return at(t)?r["string"==typeof t?"string":"hash"]:r.map},lt=st;var ut=st;var ct=st;var dt=st;var ht=function(){this.size=0,this.__data__={hash:new nt,map:new(ot||it),string:new nt}},ft=function(e){var t=lt(this,e).delete(e);return this.size-=t?1:0,t},pt=function(e){return ut(this,e).get(e)},mt=function(e){return ct(this,e).has(e)},gt=function(e,t){var r=dt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function yt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}yt.prototype.clear=ht,yt.prototype.delete=ft,yt.prototype.get=pt,yt.prototype.has=mt,yt.prototype.set=gt;var vt=yt,bt=Z,wt=He,$t=vt;var xt=Z,St=G,_t=J,Ot=K,Ft=ee,kt=function(e,t){var r=this.__data__;if(r instanceof bt){var n=r.__data__;if(!wt||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new $t(n)}return r.set(e,t),this.size=r.size,this};function jt(e){var t=this.__data__=new xt(e);this.size=t.size}jt.prototype.clear=St,jt.prototype.delete=_t,jt.prototype.get=Ot,jt.prototype.has=Ft,jt.prototype.set=kt;var Dt=jt;var Mt=vt,Bt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},At=function(e){return this.__data__.has(e)};function Pt(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Mt;++t<r;)this.add(e[t])}Pt.prototype.add=Pt.prototype.push=Bt,Pt.prototype.has=At;var Ct=Pt,Et=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Tt=function(e,t){return e.has(t)};var It=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var u=o.get(e),c=o.get(t);if(u&&c)return u==t&&c==e;var d=-1,h=!0,f=2&r?new Ct:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var p=e[d],m=t[d];if(n)var g=a?n(m,p,d,t,e,o):n(p,m,d,e,t,o);if(void 0!==g){if(g)continue;h=!1;break}if(f){if(!Et(t,(function(e,t){if(!Tt(f,t)&&(p===e||i(p,e,r,n,o)))return f.push(t)}))){h=!1;break}}else if(p!==m&&!i(p,m,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var zt=ie.Uint8Array,Nt=E,Ht=It,Lt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Rt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Wt=oe?oe.prototype:void 0,Vt=Wt?Wt.valueOf:void 0;var Yt=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new zt(e),new zt(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Nt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Lt;case"[object Set]":var l=1&n;if(s||(s=Rt),e.size!=t.size&&!l)return!1;var u=a.get(e);if(u)return u==t;n|=2,a.set(e,t);var c=Ht(s(e),s(t),n,i,o,a);return a.delete(e),c;case"[object Symbol]":if(Vt)return Vt.call(e)==Vt.call(t)}return!1};var qt=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Ut=Array.isArray,Qt=qt,Zt=Ut;var Xt=function(e,t,r){var n=t(e);return Zt(e)?n:Qt(n,r(e))};var Gt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},Jt=function(){return[]},Kt=Object.prototype.propertyIsEnumerable,er=Object.getOwnPropertySymbols,tr=er?function(e){return null==e?[]:(e=Object(e),Gt(er(e),(function(t){return Kt.call(e,t)})))}:Jt;var rr=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var nr=function(e){return null!=e&&"object"==typeof e},ir=ge,or=nr;var ar=function(e){return or(e)&&"[object Arguments]"==ir(e)},sr=nr,lr=Object.prototype,ur=lr.hasOwnProperty,cr=lr.propertyIsEnumerable,dr=ar(function(){return arguments}())?ar:function(e){return sr(e)&&ur.call(e,"callee")&&!cr.call(e,"callee")},hr={exports:{}};var fr=function(){return!1};!function(e,t){var r=ie,n=fr,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(hr,hr.exports);var pr=/^(?:0|[1-9]\d*)$/;var mr=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&pr.test(e))&&e>-1&&e%1==0&&e<t};var gr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},yr=ge,vr=gr,br=nr,wr={};wr["[object Float32Array]"]=wr["[object Float64Array]"]=wr["[object Int8Array]"]=wr["[object Int16Array]"]=wr["[object Int32Array]"]=wr["[object Uint8Array]"]=wr["[object Uint8ClampedArray]"]=wr["[object Uint16Array]"]=wr["[object Uint32Array]"]=!0,wr["[object Arguments]"]=wr["[object Array]"]=wr["[object ArrayBuffer]"]=wr["[object Boolean]"]=wr["[object DataView]"]=wr["[object Date]"]=wr["[object Error]"]=wr["[object Function]"]=wr["[object Map]"]=wr["[object Number]"]=wr["[object Object]"]=wr["[object RegExp]"]=wr["[object Set]"]=wr["[object String]"]=wr["[object WeakMap]"]=!1;var $r=function(e){return br(e)&&vr(e.length)&&!!wr[yr(e)]};var xr=function(e){return function(t){return e(t)}},Sr={exports:{}};!function(e,t){var r=te,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Sr,Sr.exports);var _r=$r,Or=xr,Fr=Sr.exports,kr=Fr&&Fr.isTypedArray,jr=kr?Or(kr):_r,Dr=rr,Mr=dr,Br=Ut,Ar=hr.exports,Pr=mr,Cr=jr,Er=Object.prototype.hasOwnProperty;var Tr=function(e,t){var r=Br(e),n=!r&&Mr(e),i=!r&&!n&&Ar(e),o=!r&&!n&&!i&&Cr(e),a=r||n||i||o,s=a?Dr(e.length,String):[],l=s.length;for(var u in e)!t&&!Er.call(e,u)||a&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Pr(u,l))||s.push(u);return s},Ir=Object.prototype;var zr=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ir)};var Nr=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Hr=zr,Lr=Nr,Rr=Object.prototype.hasOwnProperty;var Wr=$e,Vr=gr;var Yr=function(e){return null!=e&&Vr(e.length)&&!Wr(e)},qr=Tr,Ur=function(e){if(!Hr(e))return Lr(e);var t=[];for(var r in Object(e))Rr.call(e,r)&&"constructor"!=r&&t.push(r);return t},Qr=Yr;var Zr=function(e){return Qr(e)?qr(e):Ur(e)},Xr=Xt,Gr=tr,Jr=Zr;var Kr=function(e){return Xr(e,Jr,Gr)},en=Object.prototype.hasOwnProperty;var tn=function(e,t,r,n,i,o){var a=1&r,s=Kr(e),l=s.length;if(l!=Kr(t).length&&!a)return!1;for(var u=l;u--;){var c=s[u];if(!(a?c in t:en.call(t,c)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++u<l;){var m=e[c=s[u]],g=t[c];if(n)var y=a?n(g,m,c,t,e,o):n(m,g,c,e,t,o);if(!(void 0===y?m===g||i(m,g,r,n,o):y)){f=!1;break}p||(p="constructor"==c)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return o.delete(e),o.delete(t),f},rn=Ne(ie,"DataView"),nn=He,on=Ne(ie,"Promise"),an=Ne(ie,"Set"),sn=Ne(ie,"WeakMap"),ln=ge,un=Fe,cn="[object Map]",dn="[object Promise]",hn="[object Set]",fn="[object WeakMap]",pn="[object DataView]",mn=un(rn),gn=un(nn),yn=un(on),vn=un(an),bn=un(sn),wn=ln;(rn&&wn(new rn(new ArrayBuffer(1)))!=pn||nn&&wn(new nn)!=cn||on&&wn(on.resolve())!=dn||an&&wn(new an)!=hn||sn&&wn(new sn)!=fn)&&(wn=function(e){var t=ln(e),r="[object Object]"==t?e.constructor:void 0,n=r?un(r):"";if(n)switch(n){case mn:return pn;case gn:return cn;case yn:return dn;case vn:return hn;case bn:return fn}return t});var $n=Dt,xn=It,Sn=Yt,_n=tn,On=wn,Fn=Ut,kn=hr.exports,jn=jr,Dn="[object Arguments]",Mn="[object Array]",Bn="[object Object]",An=Object.prototype.hasOwnProperty;var Pn=function(e,t,r,n,i,o){var a=Fn(e),s=Fn(t),l=a?Mn:On(e),u=s?Mn:On(t),c=(l=l==Dn?Bn:l)==Bn,d=(u=u==Dn?Bn:u)==Bn,h=l==u;if(h&&kn(e)){if(!kn(t))return!1;a=!0,c=!1}if(h&&!c)return o||(o=new $n),a||jn(e)?xn(e,t,r,n,i,o):Sn(e,t,l,r,n,i,o);if(!(1&r)){var f=c&&An.call(e,"__wrapped__"),p=d&&An.call(t,"__wrapped__");if(f||p){var m=f?e.value():e,g=p?t.value():t;return o||(o=new $n),i(m,g,r,n,o)}}return!!h&&(o||(o=new $n),_n(e,t,r,n,i,o))},Cn=nr;var En=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Cn(t)&&!Cn(r)?t!=t&&r!=r:Pn(t,r,n,i,e,o))},Tn=Dt,In=En;var zn=ye;var Nn=function(e){return e==e&&!zn(e)},Hn=Nn,Ln=Zr;var Rn=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Wn=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],u=e[l],c=s[1];if(a&&s[2]){if(void 0===u&&!(l in e))return!1}else{var d=new Tn;if(n)var h=n(u,c,l,e,t,d);if(!(void 0===h?In(c,u,3,n,d):h))return!1}}return!0},Vn=function(e){for(var t=Ln(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Hn(i)]}return t},Yn=Rn;var qn=function(e){var t=Vn(e);return 1==t.length&&t[0][2]?Yn(t[0][0],t[0][1]):function(r){return r===e||Wn(r,e,t)}},Un=ge,Qn=nr;var Zn=function(e){return"symbol"==typeof e||Qn(e)&&"[object Symbol]"==Un(e)},Xn=Ut,Gn=Zn,Jn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Kn=/^\w*$/;var ei=function(e,t){if(Xn(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Gn(e))||(Kn.test(e)||!Jn.test(e)||null!=t&&e in Object(t))},ti=vt;function ri(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(ri.Cache||ti),r}ri.Cache=ti;var ni=ri;var ii=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oi=/\\(\\)?/g,ai=function(e){var t=ni(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ii,(function(e,r,n,i){t.push(n?i.replace(oi,"$1"):r||e)})),t}));var si=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},li=Ut,ui=Zn,ci=oe?oe.prototype:void 0,di=ci?ci.toString:void 0;var hi=function e(t){if("string"==typeof t)return t;if(li(t))return si(t,e)+"";if(ui(t))return di?di.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},fi=hi;var pi=Ut,mi=ei,gi=ai,yi=function(e){return null==e?"":fi(e)};var vi=function(e,t){return pi(e)?e:mi(e,t)?[e]:gi(yi(e))},bi=Zn;var wi=function(e){if("string"==typeof e||bi(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},$i=vi,xi=wi;var Si=function(e,t){for(var r=0,n=(t=$i(t,e)).length;null!=e&&r<n;)e=e[xi(t[r++])];return r&&r==n?e:void 0},_i=Si;var Oi=function(e,t,r){var n=null==e?void 0:_i(e,t);return void 0===n?r:n};var Fi=vi,ki=dr,ji=Ut,Di=mr,Mi=gr,Bi=wi;var Ai=function(e,t){return null!=e&&t in Object(e)},Pi=function(e,t,r){for(var n=-1,i=(t=Fi(t,e)).length,o=!1;++n<i;){var a=Bi(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Mi(i)&&Di(a,i)&&(ji(e)||ki(e))};var Ci=En,Ei=Oi,Ti=function(e,t){return null!=e&&Pi(e,t,Ai)},Ii=ei,zi=Nn,Ni=Rn,Hi=wi;var Li=Si;var Ri=function(e){return function(t){return null==t?void 0:t[e]}},Wi=function(e){return function(t){return Li(t,e)}},Vi=ei,Yi=wi;var qi=qn,Ui=function(e,t){return Ii(e)&&zi(t)?Ni(Hi(e),t):function(r){var n=Ei(r,e);return void 0===n&&n===t?Ti(r,e):Ci(t,n,3)}},Qi=function(e){return e},Zi=Ut,Xi=function(e){return Vi(e)?Ri(Yi(e)):Wi(e)};var Gi=function(e){return"function"==typeof e?e:null==e?Qi:"object"==typeof e?Zi(e)?Ui(e[0],e[1]):qi(e):Xi(e)},Ji=Gi,Ki=Yr,eo=Zr;var to=function(e){return function(t,r,n){var i=Object(t);if(!Ki(t)){var o=Ji(r);t=eo(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var ro=/\s/;var no=function(e){for(var t=e.length;t--&&ro.test(e.charAt(t)););return t},io=/^\s+/;var oo=function(e){return e?e.slice(0,no(e)+1).replace(io,""):e},ao=ye,so=Zn,lo=/^[-+]0x[0-9a-f]+$/i,uo=/^0b[01]+$/i,co=/^0o[0-7]+$/i,ho=parseInt;var fo=function(e){if("number"==typeof e)return e;if(so(e))return NaN;if(ao(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ao(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=oo(e);var r=uo.test(e);return r||co.test(e)?ho(e.slice(2),r?2:8):lo.test(e)?NaN:+e},po=1/0;var mo=function(e){return e?(e=fo(e))===po||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var go=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},yo=Gi,vo=function(e){var t=mo(e),r=t%1;return t==t?r?t-r:t:0},bo=Math.max;var wo=to((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:vo(r);return i<0&&(i=bo(n+i,0)),go(e,yo(t),i)})),$o=En;var xo=function(e,t){return $o(e,t)};let So=No();const _o=e=>Eo(e,So);let Oo=No();_o.write=e=>Eo(e,Oo);let Fo=No();_o.onStart=e=>Eo(e,Fo);let ko=No();_o.onFrame=e=>Eo(e,ko);let jo=No();_o.onFinish=e=>Eo(e,jo);let Do=[];_o.setTimeout=(e,t)=>{let r=_o.now()+t,n=()=>{let e=Do.findIndex((e=>e.cancel==n));~e&&Do.splice(e,1),Po-=~e?1:0},i={time:r,handler:e,cancel:n};return Do.splice(Mo(r),0,i),Po+=1,To(),i};let Mo=e=>~(~Do.findIndex((t=>t.time>e))||~Do.length);_o.cancel=e=>{Fo.delete(e),ko.delete(e),jo.delete(e),So.delete(e),Oo.delete(e)},_o.sync=e=>{Co=!0,_o.batchedUpdates(e),Co=!1},_o.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,_o.onStart(r)}return n.handler=e,n.cancel=()=>{Fo.delete(r),t=null},n};let Bo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};_o.use=e=>Bo=e,_o.now="undefined"!=typeof performance?()=>performance.now():Date.now,_o.batchedUpdates=e=>e(),_o.catch=console.error,_o.frameLoop="always",_o.advance=()=>{"demand"!==_o.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):zo()};let Ao=-1,Po=0,Co=!1;function Eo(e,t){Co?(t.delete(e),e(0)):(t.add(e),To())}function To(){Ao<0&&(Ao=0,"demand"!==_o.frameLoop&&Bo(Io))}function Io(){~Ao&&(Bo(Io),_o.batchedUpdates(zo))}function zo(){let e=Ao;Ao=_o.now();let t=Mo(Ao);t&&(Ho(Do.splice(0,t),(e=>e.handler())),Po-=t),Po?(Fo.flush(),So.flush(e?Math.min(64,Ao-e):16.667),ko.flush(),Oo.flush(),jo.flush()):Ao=-1}function No(){let e=new Set,t=e;return{add(r){Po+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Po-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Po-=t.size,Ho(t,(t=>t(r)&&e.add(t))),Po+=e.size,t=e)}}}function Ho(e,t){e.forEach((e=>{try{t(e)}catch(e){_o.catch(e)}}))}function Lo(){}const Ro={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Wo(e,t){if(Ro.arr(e)){if(!Ro.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const Vo=(e,t)=>e.forEach(t);function Yo(e,t,r){if(Ro.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const qo=e=>Ro.und(e)?[]:Ro.arr(e)?e:[e];function Uo(e,t){if(e.size){const r=Array.from(e);e.clear(),Vo(r,t)}}const Qo=(e,...t)=>Uo(e,(e=>e(...t))),Zo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Xo,Go,Jo=null,Ko=!1,ea=Lo;var ta=Object.freeze({__proto__:null,get createStringInterpolator(){return Xo},get to(){return Go},get colors(){return Jo},get skipAnimation(){return Ko},get willAdvance(){return ea},assign:e=>{e.to&&(Go=e.to),e.now&&(_o.now=e.now),void 0!==e.colors&&(Jo=e.colors),null!=e.skipAnimation&&(Ko=e.skipAnimation),e.createStringInterpolator&&(Xo=e.createStringInterpolator),e.requestAnimationFrame&&_o.use(e.requestAnimationFrame),e.batchedUpdates&&(_o.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ea=e.willAdvance),e.frameLoop&&(_o.frameLoop=e.frameLoop)}});const ra=new Set;let na=[],ia=[],oa=0;const aa={get idle(){return!ra.size&&!na.length},start(e){oa>e.priority?(ra.add(e),_o.onStart(sa)):(la(e),_o(ca))},advance:ca,sort(e){if(oa)_o.onFrame((()=>aa.sort(e)));else{const t=na.indexOf(e);~t&&(na.splice(t,1),ua(e))}},clear(){na=[],ra.clear()}};function sa(){ra.forEach(la),ra.clear(),_o(ca)}function la(e){na.includes(e)||ua(e)}function ua(e){na.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(na,(t=>t.priority>e.priority)),0,e)}function ca(e){const t=ia;for(let r=0;r<na.length;r++){const n=na[r];oa=n.priority,n.idle||(ea(n),n.advance(e),n.idle||t.push(n))}return oa=0,ia=na,ia.length=0,na=t,na.length>0}const da="[-+]?\\d*\\.?\\d+",ha=da+"%";function fa(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const pa=new RegExp("rgb"+fa(da,da,da)),ma=new RegExp("rgba"+fa(da,da,da,da)),ga=new RegExp("hsl"+fa(da,ha,ha)),ya=new RegExp("hsla"+fa(da,ha,ha,da)),va=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ba=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,wa=/^#([0-9a-fA-F]{6})$/,$a=/^#([0-9a-fA-F]{8})$/;function xa(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Sa(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=xa(i,n,e+1/3),a=xa(i,n,e),s=xa(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function _a(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Oa(e){return(parseFloat(e)%360+360)%360/360}function Fa(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ka(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ja(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=wa.exec(e))?parseInt(t[1]+"ff",16)>>>0:Jo&&void 0!==Jo[e]?Jo[e]:(t=pa.exec(e))?(_a(t[1])<<24|_a(t[2])<<16|_a(t[3])<<8|255)>>>0:(t=ma.exec(e))?(_a(t[1])<<24|_a(t[2])<<16|_a(t[3])<<8|Fa(t[4]))>>>0:(t=va.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=$a.exec(e))?parseInt(t[1],16)>>>0:(t=ba.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ga.exec(e))?(255|Sa(Oa(t[1]),ka(t[2]),ka(t[3])))>>>0:(t=ya.exec(e))?(Sa(Oa(t[1]),ka(t[2]),ka(t[3]))|Fa(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Da=(e,t,r)=>{if(Ro.fun(e))return e;if(Ro.arr(e))return Da({range:e,output:t,extrapolate:r});if(Ro.str(e.output[0]))return Xo(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let u=l?l(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>r){if("identity"===s)return u;"clamp"===s&&(u=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?u=-u:r===1/0?u-=t:u=(u-t)/(r-t);u=o(u),n===-1/0?u=-u:i===1/0?u+=n:u=u*(i-n)+n;return u}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};const Ma=1.70158,Ba=1.525*Ma,Aa=Ma+1,Pa=2*Math.PI/3,Ca=2*Math.PI/4.5,Ea=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ta={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Aa*e*e*e-Ma*e*e,easeOutBack:e=>1+Aa*Math.pow(e-1,3)+Ma*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ba)/2:(Math.pow(2*e-2,2)*((Ba+1)*(2*e-2)+Ba)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Pa),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Pa)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ca)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ca)/2+1,easeInBounce:e=>1-Ea(1-e),easeOutBounce:Ea,easeInOutBounce:e=>e<.5?(1-Ea(1-2*e))/2:(1+Ea(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ia.apply(this,arguments)}const za=Symbol.for("FluidValue.get"),Na=Symbol.for("FluidValue.observers"),Ha=e=>Boolean(e&&e[za]),La=e=>e&&e[za]?e[za]():e,Ra=e=>e[Na]||null;function Wa(e,t){let r=e[Na];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Va{constructor(e){if(this[za]=void 0,this[Na]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Ya(this,e)}}const Ya=(e,t)=>Qa(e,za,t);function qa(e,t){if(e[za]){let r=e[Na];r||Qa(e,Na,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ua(e,t){let r=e[Na];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Na]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const Qa=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Za=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Xa=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ga=new RegExp(`(${Za.source})(%|[a-z]+)`,"i"),Ja=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ka=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,es=e=>{const[t,r]=ts(e);if(!t||Zo())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Ka.test(r)?es(r):r||e},ts=e=>{const t=Ka.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let rs;const ns=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,is=e=>{rs||(rs=Jo?new RegExp(`(${Object.keys(Jo).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>La(e).replace(Ka,es).replace(Xa,ja).replace(rs,ja))),r=t.map((e=>e.match(Za).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Da(Ia({},e,{output:t}))));return e=>{var r;const i=!Ga.test(t[0])&&(null==(r=t.find((e=>Ga.test(e))))?void 0:r.replace(Za,""));let o=0;return t[0].replace(Za,(()=>`${n[o++](e)}${i||""}`)).replace(Ja,ns)}},os="react-spring: ",as=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${os}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ss=as(console.warn);const ls=as(console.warn);function us(e){return Ro.str(e)&&("#"==e[0]||/\d/.test(e)||!Zo()&&Ka.test(e)||e in(Jo||{}))}const cs=Zo()?h:f,ds=()=>{const e=m(!1);return cs((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function hs(){const e=p()[1],t=ds();return()=>{t.current&&e(Math.random())}}const fs=e=>h(e,ps),ps=[];function ms(e){const t=m();return h((()=>{t.current=e})),t.current}const gs=Symbol.for("Animated:node"),ys=e=>e&&e[gs],vs=(e,t)=>{return r=e,n=gs,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},bs=e=>e&&e[gs]&&e[gs].getPayload();class ws{constructor(){this.payload=void 0,vs(this,this)}getPayload(){return this.payload||[]}}class $s extends ws{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Ro.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new $s(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ro.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ro.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class xs extends $s{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Da({output:[e,e]})}static create(e){return new xs(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ro.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Da({output:[this.getValue(),e]})),this._value=0,super.reset()}}const Ss={dependencies:null};class _s extends ws{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Yo(this.source,((r,n)=>{var i;(i=r)&&i[gs]===i?t[n]=r.getValue(e):Ha(r)?t[n]=La(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Vo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Yo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Ss.dependencies&&Ha(e)&&Ss.dependencies.add(e);const t=bs(e);t&&Vo(t,(e=>this.add(e)))}}class Os extends _s{constructor(e){super(e)}static create(e){return new Os(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Fs)),!0)}}function Fs(e){return(us(e)?xs:$s).create(e)}function ks(e){const t=ys(e);return t?t.constructor:Ro.arr(e)?Os:us(e)?xs:$s}function js(){return js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},js.apply(this,arguments)}const Ds=(e,t)=>{const r=!Ro.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((n,i)=>{const o=m(null),a=r&&y((e=>{o.current=function(e,t){e&&(Ro.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[s,l]=function(e,t){const r=new Set;Ss.dependencies=r,e.style&&(e=js({},e,{style:t.createAnimatedStyle(e.style)}));return e=new _s(e),Ss.dependencies=null,[e,r]}(n,t),u=hs(),d=()=>{const e=o.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,s.getValue(!0)))&&u()},f=new Ms(d,l),p=m();cs((()=>(p.current=f,Vo(l,(e=>qa(e,f))),()=>{p.current&&(Vo(p.current.deps,(e=>Ua(e,p.current))),_o.cancel(p.current.update))}))),h(d,[]),fs((()=>()=>{const e=p.current;Vo(e.deps,(t=>Ua(t,e)))}));const g=t.getComponentProps(s.getValue());return c.createElement(e,js({},g,{ref:a}))}))};class Ms{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&_o.write(this.update)}}const Bs=Symbol.for("AnimatedComponent"),As=e=>Ro.str(e)?e:e&&Ro.str(e.displayName)?e.displayName:Ro.fun(e)&&e.name||null;function Ps(){return Ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ps.apply(this,arguments)}function Cs(e,...t){return Ro.fun(e)?e(...t):e}const Es=(e,t)=>!0===e||!!(t&&e&&(Ro.fun(e)?e(t):qo(e).includes(t))),Ts=(e,t)=>Ro.obj(e)?t&&e[t]:e,Is=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,zs=e=>e,Ns=(e,t=zs)=>{let r=Hs;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Ro.und(r)||(n[i]=r)}return n},Hs=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ls={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Rs(e){const t=function(e){const t={};let r=0;if(Yo(e,((e,n)=>{Ls[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Yo(e,((e,n)=>n in t||(r[n]=e))),r}return Ps({},e)}function Ws(e){return e=La(e),Ro.arr(e)?e.map(Ws):us(e)?ta.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Vs(e){return Ro.fun(e)||Ro.arr(e)&&Ro.obj(e[0])}const Ys=Ps({},{tension:170,friction:26},{mass:1,damping:1,easing:Ta.linear,clamp:!1});class qs{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Ys)}}function Us(e,t){if(Ro.und(t.decay)){const r=!Ro.und(t.tension)||!Ro.und(t.friction);!r&&Ro.und(t.frequency)&&Ro.und(t.damping)&&Ro.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const Qs=[];class Zs{constructor(){this.changed=!1,this.values=Qs,this.toValues=null,this.fromValues=Qs,this.to=void 0,this.from=void 0,this.config=new qs,this.immediate=!1}}function Xs(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{var l;let u,c,d=Es(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(d)p();else{Ro.und(r.pause)||(i.paused=Es(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=i.paused||Es(e,t)),u=Cs(r.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),u=c.time-_o.now()}function f(){u>0&&!ta.skipAnimation?(i.delayed=!0,c=_o.setTimeout(p,u),i.pauseQueue.add(h),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start(Ps({},r,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Gs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?el(e.get()):t.every((e=>e.noop))?Js(e.get()):Ks(e.get(),t.every((e=>e.finished))),Js=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ks=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),el=e=>({value:e,cancelled:!0,finished:!1});function tl(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const u=Ns(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&el(n)||i!==r.asyncId&&Ks(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new nl,a=new il;return(async()=>{if(ta.skipAnimation)throw rl(r),a.result=Ks(n,!1),d(a),a;f(o);const s=Ro.obj(e)?Ps({},e):Ps({},t,{to:e});s.parentId=i,Yo(u,((e,t)=>{Ro.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let m;if(ta.skipAnimation)return rl(r),Ks(n,!1);try{let t;t=Ro.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(c),h]),m=Ks(n.get(),!0,!1)}catch(e){if(e instanceof nl)m=e.result;else{if(!(e instanceof il))throw e;m=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Ro.fun(a)&&_o.batchedUpdates((()=>{a(m,n,n.item)})),m})():l}function rl(e,t){Uo(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class nl extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class il extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const ol=e=>e instanceof sl;let al=1;class sl extends Va{constructor(...e){super(...e),this.id=al++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ys(this);return e&&e.getValue()}to(...e){return ta.to(this,e)}interpolate(...e){return ss(`${os}The "interpolate" function is deprecated in v9 (use "to" instead)`),ta.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Wa(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||aa.sort(this),Wa(this,{type:"priority",parent:this,priority:e})}}const ll=Symbol.for("SpringPhase"),ul=e=>(1&e[ll])>0,cl=e=>(2&e[ll])>0,dl=e=>(4&e[ll])>0,hl=(e,t)=>t?e[ll]|=3:e[ll]&=-3,fl=(e,t)=>t?e[ll]|=4:e[ll]&=-5;class pl extends sl{constructor(e,t){if(super(),this.key=void 0,this.animation=new Zs,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ro.und(e)||!Ro.und(t)){const r=Ro.obj(e)?Ps({},e):Ps({},t,{from:e});Ro.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(cl(this)||this._state.asyncTo)||dl(this)}get goal(){return La(this.animation.to)}get velocity(){const e=ys(this);return e instanceof $s?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return ul(this)}get isAnimating(){return cl(this)}get isPaused(){return dl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:i,toValues:o}=n;const a=bs(n.to);!a&&Ha(n.to)&&(o=qo(La(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==xs?1:a?a[l].lastPosition:o[l];let c=n.immediate,d=u;if(!c){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=Ro.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(r==u?.005:Math.min(1,.001*Math.abs(u-r)));if(Ro.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);d=r+o/(1-e)*(1-n),c=Math.abs(s.lastPosition-d)<=h,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Ro.und(n),f=r==u?s.v0>0:r<u;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(m=d==u||d>u==f,m&&(a=-a*n,d=u));a+=(1e-6*-i.tension*(d-u)+.001*-i.friction*a)/i.mass*g,d+=a*g}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+i.easing(n)*(u-r),a=(d-s.lastPosition)/e,c=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,i.round)&&(r=!0)}));const s=ys(this),l=s.getValue();if(t){const e=La(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return _o.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(cl(this)){const{to:e,config:t}=this.animation;_o.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Ro.und(e)?(r=this.queue||[],this.queue=[]):r=[Ro.obj(e)?e:Ps({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>Gs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),rl(this._state,e&&this._lastCallId),_o.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Ro.obj(r)?r[t]:r,(null==r||Vs(r))&&(r=void 0),n=Ro.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return ul(this)||(e.reverse&&([r,n]=[n,r]),n=La(n),Ro.und(n)?ys(this)||this._set(r):this._set(n)),i}_update(e,t){let r=Ps({},e);const{key:n,defaultProps:i}=this;r.default&&Object.assign(i,Ns(r,((e,t)=>/^on/.test(t)?Ts(e,n):e))),$l(this,r,"onProps"),xl(this,"onProps",r,this);const o=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Xs(++this._lastCallId,{key:n,props:r,defaultProps:i,state:a,actions:{pause:()=>{dl(this)||(fl(this,!0),Qo(a.pauseQueue),xl(this,"onPause",Ks(this,ml(this,this.animation.to)),this))},resume:()=>{dl(this)&&(fl(this,!1),cl(this)&&this._resume(),Qo(a.resumeQueue),xl(this,"onResume",Ks(this,ml(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=gl(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(el(this));const n=!Ro.und(e.to),i=!Ro.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(el(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||n||t.default&&!Ro.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!Wo(d,u);h&&(s.from=d),d=La(d);const f=!Wo(c,l);f&&this._focus(c);const p=Vs(t.to),{config:m}=s,{decay:g,velocity:y}=m;(n||i)&&(m.velocity=0),t.config&&!p&&function(e,t,r){r&&(Us(r=Ps({},r),t),t=Ps({},r,t)),Us(e,t),Object.assign(e,t);for(const t in Ys)null==e[t]&&(e[t]=Ys[t]);let{mass:n,frequency:i,damping:o}=e;Ro.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*n,e.friction=4*Math.PI*o*n/i)}(m,Cs(t.config,o),t.config!==a.config?Cs(a.config,o):void 0);let v=ys(this);if(!v||Ro.und(c))return r(Ks(this,!0));const b=Ro.und(t.reset)?i&&!t.default:!Ro.und(d)&&Es(t.reset,o),w=b?d:this.get(),$=Ws(c),x=Ro.num($)||Ro.arr($)||us($),S=!p&&(!x||Es(a.immediate||t.immediate,o));if(f){const e=ks(c);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const _=v.constructor;let O=Ha(c),F=!1;if(!O){const e=b||!ul(this)&&h;(f||e)&&(F=Wo(Ws(w),$),O=!F),(Wo(s.immediate,S)||S)&&Wo(m.decay,g)&&Wo(m.velocity,y)||(O=!0)}if(F&&cl(this)&&(s.changed&&!b?O=!0:O||this._stop(l)),!p&&((O||Ha(l))&&(s.values=v.getPayload(),s.toValues=Ha(c)?null:_==xs?[1]:qo($)),s.immediate!=S&&(s.immediate=S,S||b||this._set(l)),O)){const{onRest:e}=s;Vo(wl,(e=>$l(this,t,e)));const n=Ks(this,ml(this,l));Qo(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&_o.batchedUpdates((()=>{s.changed=!b,null==e||e(n,this),b?Cs(a.onRest,n):null==s.onStart||s.onStart(n,this)}))}b&&this._set(w),p?r(tl(t.to,t,this._state,this)):O?this._start():cl(this)&&!f?this._pendingCalls.add(r):r(Js(w))}_focus(e){const t=this.animation;e!==t.to&&(Ra(this)&&this._detach(),t.to=e,Ra(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ha(t)&&(qa(t,this),ol(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ha(e)&&Ua(e,this)}_set(e,t=!0){const r=La(e);if(!Ro.und(r)){const e=ys(this);if(!e||!Wo(r,e.getValue())){const n=ks(r);e&&e.constructor==n?e.setValue(r):vs(this,n.create(r)),e&&_o.batchedUpdates((()=>{this._onChange(r,t)}))}}return ys(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,xl(this,"onStart",Ks(this,ml(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Cs(this.animation.onChange,e,this)),Cs(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ys(this).reset(La(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),cl(this)||(hl(this,!0),dl(this)||this._resume())}_resume(){ta.skipAnimation?this.finish():aa.start(this)}_stop(e,t){if(cl(this)){hl(this,!1);const r=this.animation;Vo(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Wa(this,{type:"idle",parent:this});const n=t?el(this.get()):Ks(this.get(),ml(this,null!=e?e:r.to));Qo(this._pendingCalls,n),r.changed&&(r.changed=!1,xl(this,"onRest",n,this))}}}function ml(e,t){const r=Ws(t);return Wo(Ws(e.get()),r)}function gl(e,t=e.loop,r=e.to){let n=Cs(t);if(n){const i=!0!==n&&Rs(n),o=(i||e).reverse,a=!i||i.reset;return yl(Ps({},e,{loop:t,default:!1,pause:void 0,to:!o||Vs(r)?r:void 0,from:a?e.from:void 0,reset:a},i))}}function yl(e){const{to:t,from:r}=e=Rs(e),n=new Set;return Ro.obj(t)&&bl(t,n),Ro.obj(r)&&bl(r,n),e.keys=n.size?Array.from(n):null,e}function vl(e){const t=yl(e);return Ro.und(t.default)&&(t.default=Ns(t)),t}function bl(e,t){Yo(e,((e,r)=>null!=e&&t.add(r)))}const wl=["onStart","onRest","onChange","onPause","onResume"];function $l(e,t,r){e.animation[r]=t[r]!==Is(t,r)?Ts(t[r],e.key):void 0}function xl(e,t,...r){var n,i,o,a;null==(n=(i=e.animation)[t])||n.call(i,...r),null==(o=(a=e.defaultProps)[t])||o.call(a,...r)}const Sl=["onStart","onChange","onRest"];let _l=1;class Ol{constructor(e,t){this.id=_l++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Ps({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Ro.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(yl(e)),this}start(e){let{queue:t}=this;return e?t=qo(e).map(yl):this.queue=[],this._flush?this._flush(this,t):(Al(this,t),Fl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Vo(qo(t),(t=>r[t].stop(!!e)))}else rl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ro.und(e))this.start({pause:!0});else{const t=this.springs;Vo(qo(e),(e=>t[e].pause()))}return this}resume(e){if(Ro.und(e))this.start({pause:!1});else{const t=this.springs;Vo(qo(e),(e=>t[e].resume()))}return this}each(e){Yo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Uo(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&Uo(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Uo(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}_o.onFrame(this._onFrame)}}function Fl(e,t){return Promise.all(t.map((t=>kl(e,t)))).then((t=>Gs(e,t)))}async function kl(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,u=Ro.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=Ro.arr(i)||Ro.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):Vo(Sl,(r=>{const n=t[r];if(Ro.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Qo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===Is(t,"cancel");(c||f&&d.asyncId)&&h.push(Xs(++e._lastAsyncId,{props:t,state:d,actions:{pause:Lo,resume:Lo,start(t,r){f?(rl(d,e._lastAsyncId),r(el(e))):(t.onRest=s,r(tl(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Gs(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=gl(t,a,i);if(r)return Al(e,[r]),kl(e,r,!0)}return l&&_o.batchedUpdates((()=>l(p,e,e.item))),p}function jl(e,t){const r=Ps({},e.springs);return t&&Vo(qo(t),(e=>{Ro.und(e.keys)&&(e=yl(e)),Ro.obj(e.to)||(e=Ps({},e,{to:void 0})),Bl(r,e,(e=>Ml(e)))})),Dl(e,r),r}function Dl(e,t){Yo(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,qa(t,e))}))}function Ml(e,t){const r=new pl;return r.key=e,t&&qa(r,t),r}function Bl(e,t,r){t.keys&&Vo(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Al(e,t){Vo(t,(t=>{Bl(e.springs,t,(t=>Ml(t,e)))}))}const Pl=["children"],Cl=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,Pl);const n=v(El),i=r.pause||!!n.pause,o=r.immediate||!!n.immediate;r=function(e,t){const[r]=p((()=>({inputs:t,result:e()}))),n=m(),i=n.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=r;return h((()=>{n.current=o,i==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:i,immediate:o})),[i,o]);const{Provider:a}=El;return c.createElement(a,{value:r},t)},El=(Tl=Cl,Il={},Object.assign(Tl,c.createContext(Il)),Tl.Provider._context=Tl,Tl.Consumer._context=Tl,Tl);var Tl,Il;Cl.Provider=El.Provider,Cl.Consumer=El.Consumer;const zl=()=>{const e=[],t=function(t){ls(`${os}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Vo(e,((e,i)=>{if(Ro.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Vo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Vo(e,(e=>e.resume(...arguments))),this},t.set=function(t){Vo(e,(e=>e.set(t)))},t.start=function(t){const r=[];return Vo(e,((e,n)=>{if(Ro.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Vo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Vo(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Ro.fun(e)?e(r,t):e};return t._getProps=r,t};function Nl(e,t){const r=Ro.fun(e),[[n],i]=function(e,t,r){const n=Ro.fun(t)&&t;n&&!r&&(r=[]);const i=b((()=>n||3==arguments.length?zl():void 0),[]),o=m(0),a=hs(),s=b((()=>({ctrls:[],queue:[],flush(e,t){const r=jl(e,t);return o.current>0&&!s.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Fl(e,t):new Promise((n=>{Dl(e,r),s.queue.push((()=>{n(Fl(e,t))})),a()}))}})),[]),l=m([...s.ctrls]),u=[],c=ms(e)||0;function d(e,r){for(let i=e;i<r;i++){const e=l.current[i]||(l.current[i]=new Ol(null,s.flush)),r=n?n(i,e):t[i];r&&(u[i]=vl(r))}}b((()=>{Vo(l.current.slice(e,c),(e=>{!function(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,d(c,e)}),[e]),b((()=>{d(0,Math.min(c,e))}),r);const h=l.current.map(((e,t)=>jl(e,u[t]))),f=v(Cl),p=ms(f),g=f!==p&&function(e){for(const t in e)return!0;return!1}(f);cs((()=>{o.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],Vo(e,(e=>e()))),Vo(l.current,((e,t)=>{null==i||i.add(e),g&&e.start({default:f});const r=u[t];r&&(function(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),fs((()=>()=>{Vo(s.ctrls,(e=>e.stop(!0)))}));const y=h.map((e=>Ps({},e)));return i?[y,i]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}let Hl;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Hl||(Hl={}));class Ll extends sl{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Da(...t);const r=this._get(),n=ks(r);vs(this,n.create(r))}advance(e){const t=this._get();Wo(t,this.get())||(ys(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Wl(this._active)&&Vl(this)}_get(){const e=Ro.arr(this.source)?this.source.map(La):qo(La(this.source));return this.calc(...e)}_start(){this.idle&&!Wl(this._active)&&(this.idle=!1,Vo(bs(this),(e=>{e.done=!1})),ta.skipAnimation?(_o.batchedUpdates((()=>this.advance())),Vl(this)):aa.start(this))}_attach(){let e=1;Vo(qo(this.source),(t=>{Ha(t)&&qa(t,this),ol(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Vo(qo(this.source),(e=>{Ha(e)&&Ua(e,this)})),this._active.clear(),Vl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=qo(this.source).reduce(((e,t)=>Math.max(e,(ol(t)?t.priority:0)+1)),0))}}function Rl(e){return!1!==e.idle}function Wl(e){return!e.size||Array.from(e).every(Rl)}function Vl(e){e.idle||(e.idle=!0,Vo(bs(e),(e=>{e.done=!0})),Wa(e,{type:"idle",parent:e}))}function Yl(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}ta.assign({createStringInterpolator:is,to:(e,t)=>new Ll(e,t)});const ql=["style","children","scrollTop","scrollLeft","viewBox"],Ul=/^--/;function Ql(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ul.test(e)||Xl.hasOwnProperty(e)&&Xl[e]?(""+t).trim():t+"px"}const Zl={};let Xl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Gl=["Webkit","Ms","Moz","O"];Xl=Object.keys(Xl).reduce(((e,t)=>(Gl.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Xl);const Jl=["x","y","z"],Kl=/^(matrix|translate|scale|rotate|skew)/,eu=/^(translate)/,tu=/^(rotate|skew)/,ru=(e,t)=>Ro.num(e)&&0!==e?e+t:e,nu=(e,t)=>Ro.arr(e)?e.every((e=>nu(e,t))):Ro.num(e)?e===t:parseFloat(e)===t;class iu extends _s{constructor(e){let{x:t,y:r,z:n}=e,i=Yl(e,Jl);const o=[],a=[];(t||r||n)&&(o.push([t||0,r||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>ru(e,"px"))).join(",")})`,nu(e,0)]))),Yo(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Kl.test(t)){if(delete i[t],Ro.und(e))return;const r=eu.test(t)?"px":tu.test(t)?"deg":"";o.push(qo(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${ru(i,r)})`,nu(i,0)]:e=>[`${t}(${e.map((e=>ru(e,r))).join(",")})`,nu(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new ou(o,a)),super(i)}}class ou extends Va{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Vo(this.inputs,((r,n)=>{const i=La(r[0]),[o,a]=this.transforms[n](Ro.arr(i)?i:r.map(La));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Vo(this.inputs,(e=>Vo(e,(e=>Ha(e)&&qa(e,this)))))}observerRemoved(e){0==e&&Vo(this.inputs,(e=>Vo(e,(e=>Ha(e)&&Ua(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Wa(this,e)}}const au=["scrollTop","scrollLeft"];ta.assign({batchedUpdates:$,createStringInterpolator:is,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const su=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new _s(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=As(e)||"Anonymous";return(e=Ro.str(e)?o[e]||(o[e]=Ds(e,i)):e[Bs]||(e[Bs]=Ds(e,i))).displayName=`Animated(${t})`,e};return Yo(e,((t,r)=>{Ro.arr(e)&&(r=As(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=n,u=Yl(n,ql),c=Object.values(u),d=Object.keys(u).map((t=>r||e.hasAttribute(t)?t:Zl[t]||(Zl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const r=Ql(t,i[t]);Ul.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new iu(e),getComponentProps:e=>Yl(e,au)}),lu=su.animated,uu=(e,t,r)=>t?Oi(r,t)||Oi(e,t):r||e,cu=(e,t)=>{const r=t||e.defaultValue;return Oi(e.collections,r)};var du;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(du||(du={}));const hu={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},fu=e=>t=>{const r=t.theme,n=cu(hu,r[du.colorScheme]);return r.options&&r.options.color?uu(n,e,r.options.color):uu(n,e)},pu={Brand:{1:fu("Brand.1"),2:fu("Brand.2"),3:fu("Brand.3"),4:fu("Brand.4"),5:fu("Brand.5"),6:fu("Brand.6")},Primary:fu("Primary"),PrimaryDark:fu("PrimaryDark"),Secondary:fu("Secondary"),Accent:{Light:{1:fu("Accent.Light.1"),2:fu("Accent.Light.2"),3:fu("Accent.Light.3"),4:fu("Accent.Light.4"),5:fu("Accent.Light.5"),6:fu("Accent.Light.6")},Dark:{1:fu("Accent.Dark.1"),2:fu("Accent.Dark.2"),3:fu("Accent.Dark.3")}},Neutral:{1:fu("Neutral.1"),2:fu("Neutral.2"),3:fu("Neutral.3"),4:fu("Neutral.4"),5:fu("Neutral.5"),6:fu("Neutral.6"),7:fu("Neutral.7"),8:fu("Neutral.8")},Validation:{Green:{Text:fu("Validation.Green.Text"),Icon:fu("Validation.Green.Icon"),Border:fu("Validation.Green.Border"),Background:fu("Validation.Green.Background")},Orange:{Text:fu("Validation.Orange.Text"),Icon:fu("Validation.Orange.Icon"),Border:fu("Validation.Orange.Border"),Background:fu("Validation.Orange.Background"),Badge:fu("Validation.Orange.Badge")},Red:{Text:fu("Validation.Red.Text"),Icon:fu("Validation.Red.Icon"),Border:fu("Validation.Red.Border"),Background:fu("Validation.Red.Background")},Blue:{Text:fu("Validation.Blue.Text"),Icon:fu("Validation.Blue.Icon"),Border:fu("Validation.Blue.Border"),Background:fu("Validation.Blue.Background")}},Shadow:{Accent:fu("Shadow.Accent"),Red:fu("Shadow.Red"),Elevation:fu("Shadow.Elevation")}},mu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},gu=e=>Object.keys(mu).reduce(((t,r)=>{const n=mu[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),yu=gu("max-width"),vu=(gu("min-width"),x.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),bu=S`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,wu=x.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||pu.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${bu} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,$u=x(wu)`
    animation-delay: -0.45s;
`,xu=x(wu)`
    animation-delay: -0.3s;
`,Su=x(wu)`
    animation-delay: -0.15s;
`,_u={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ou={collections:{base:{D1:{fontFamily:_u.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:_u.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:_u.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_u.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_u.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_u.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:_u.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_u.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_u.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:_u.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:_u.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:_u.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:_u.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_u.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Fu=e=>t=>{const r=t.theme,n=cu(Ou,r[du.textStyleScheme]);return r.options&&r.options.textStyle?uu(n,e,r.options.textStyle):uu(n,e)},ku={D1:{fontFamily:Fu("D1.fontFamily"),fontSize:Fu("D1.fontSize"),fontWeight:Fu("D1.fontWeight"),lineHeight:Fu("D1.lineHeight"),letterSpacing:Fu("D1.letterSpacing")},D2:{fontFamily:Fu("D2.fontFamily"),fontSize:Fu("D2.fontSize"),fontWeight:Fu("D2.fontWeight"),lineHeight:Fu("D2.lineHeight"),letterSpacing:Fu("D2.letterSpacing")},D3:{fontFamily:Fu("D3.fontFamily"),fontSize:Fu("D3.fontSize"),fontWeight:Fu("D3.fontWeight"),lineHeight:Fu("D3.lineHeight"),letterSpacing:Fu("D3.letterSpacing")},D4:{fontFamily:Fu("D4.fontFamily"),fontSize:Fu("D4.fontSize"),fontWeight:Fu("D4.fontWeight"),lineHeight:Fu("D4.lineHeight"),letterSpacing:Fu("D4.letterSpacing")},DBody:{fontFamily:Fu("DBody.fontFamily"),fontSize:Fu("DBody.fontSize"),fontWeight:Fu("DBody.fontWeight"),lineHeight:Fu("DBody.lineHeight"),letterSpacing:Fu("DBody.letterSpacing")},H1:{fontFamily:Fu("H1.fontFamily"),fontSize:Fu("H1.fontSize"),fontWeight:Fu("H1.fontWeight"),lineHeight:Fu("H1.lineHeight"),letterSpacing:Fu("H1.letterSpacing")},H2:{fontFamily:Fu("H2.fontFamily"),fontSize:Fu("H2.fontSize"),fontWeight:Fu("H2.fontWeight"),lineHeight:Fu("H2.lineHeight"),letterSpacing:Fu("H2.letterSpacing")},H3:{fontFamily:Fu("H3.fontFamily"),fontSize:Fu("H3.fontSize"),fontWeight:Fu("H3.fontWeight"),lineHeight:Fu("H3.lineHeight"),letterSpacing:Fu("H3.letterSpacing")},H4:{fontFamily:Fu("H4.fontFamily"),fontSize:Fu("H4.fontSize"),fontWeight:Fu("H4.fontWeight"),lineHeight:Fu("H4.lineHeight"),letterSpacing:Fu("H4.letterSpacing")},H5:{fontFamily:Fu("H5.fontFamily"),fontSize:Fu("H5.fontSize"),fontWeight:Fu("H5.fontWeight"),lineHeight:Fu("H5.lineHeight"),letterSpacing:Fu("H5.letterSpacing")},H6:{fontFamily:Fu("H6.fontFamily"),fontSize:Fu("H6.fontSize"),fontWeight:Fu("H6.fontWeight"),lineHeight:Fu("H6.lineHeight"),letterSpacing:Fu("H6.letterSpacing")},Body:{fontFamily:Fu("Body.fontFamily"),fontSize:Fu("Body.fontSize"),fontWeight:Fu("Body.fontWeight"),lineHeight:Fu("Body.lineHeight"),letterSpacing:Fu("Body.letterSpacing")},BodySmall:{fontFamily:Fu("BodySmall.fontFamily"),fontSize:Fu("BodySmall.fontSize"),fontWeight:Fu("BodySmall.fontWeight"),lineHeight:Fu("BodySmall.lineHeight"),letterSpacing:Fu("BodySmall.letterSpacing")},XSmall:{fontFamily:Fu("XSmall.fontFamily"),fontSize:Fu("XSmall.fontSize"),fontWeight:Fu("XSmall.fontWeight"),lineHeight:Fu("XSmall.lineHeight"),letterSpacing:Fu("XSmall.letterSpacing")}},ju=e=>{switch(e){case 700:case"bold":return _u.Bold;case 600:case"semibold":return _u.Semibold;case 300:case"light":return _u.Light;case 400:case"regular":return _u.Regular;default:return""}},Du=(e,t)=>r=>{const n=ku[e].fontFamily(r),i=ku[e].fontWeight(r);return Object.values(_u).includes(n)?_`
                font-family: ${ju(t)||ju(i)||n};
                font-weight: normal !important;
            `:_`
            font-family: ${n};
            font-weight: ${(Mu(t)||i)??"normal"};
        `},Mu=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Bu=(e,t,r=!1)=>n=>{const i=ku[e],o=i.fontSize(n);return _`
            ${Du(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${_`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Au=(e=!1,t=!1)=>t?_`
            display: block;
        `:e?_`
            display: inline;
        `:_`
            display: block;
        `;var Pu;!function(e){e.D1=x.h1`
        ${e=>_`
                ${Bu("D1",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.D2=x.h1`
        ${e=>_`
                ${Bu("D2",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.D3=x.h1`
        ${e=>_`
                ${Bu("D3",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.D4=x.h1`
        ${e=>_`
                ${Bu("D4",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.DBody=x.h1`
        ${e=>_`
                ${Bu("DBody",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.H1=x.h1`
        ${e=>_`
                ${Bu("H1",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.H2=x.h2`
        ${e=>_`
                ${Bu("H2",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.H3=x.h3`
        ${e=>_`
                ${Bu("H3",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.H4=x.h4`
        ${e=>_`
                ${Bu("H4",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.H5=x.h5`
        ${e=>_`
                ${Bu("H5",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.H6=x.h6`
        ${e=>_`
                ${Bu("H6",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.Body=x.p`
        ${e=>_`
                ${Bu("Body",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=x.p`
        ${e=>_`
                ${Bu("BodySmall",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.XSmall=x.span`
        ${e=>_`
                ${Bu("XSmall",e.weight,e.paragraph)}
                color: ${pu.Neutral[1]};
                ${Au(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Tu({...e,textStyle:"Body"}),Small:e=>Tu({...e,textStyle:"BodySmall"})}}(Pu||(Pu={}));const Cu=x.a`
    ${e=>_`
            ${Bu(e.textStyle,e.weight)}
            color: ${pu.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${pu.Secondary};

                svg {
                    color: ${pu.Secondary};
                }
            }
        `}
`,Eu=x(O)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Tu=({external:r=!1,children:n,...i})=>e(Cu,{...i,children:[n,r&&t(Eu,{})]});var Iu;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Iu||(Iu={}));const zu=x.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return _`
                    background-color: ${pu.Neutral[8](e)};
                    border: 1px solid ${pu.Primary(e)};

                    span {
                        color: ${pu.Primary(e)};
                    }
                `;case"light":return _`
                    background-color: ${pu.Neutral[8](e)};
                    border: 1px solid ${pu.Neutral[5](e)};

                    span {
                        color: ${pu.Primary(e)};
                    }
                `;case"disabled":return _`
                    background-color: ${pu.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${pu.Neutral[3](e)};
                    }
                `;case"link":return _`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${pu.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${pu.Secondary};
                        }
                    }
                `;default:return _`
                    background-color: ${pu.Primary(e)};
                    border: 1px solid transparent;

                    ${yu.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${pu.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?_`
                    height: 2.5rem;
                    span {
                        ${Bu("H5","semibold")}
                    }

                    ${yu.mobileS} {
                        height: auto;
                    }
                `:_`
                    height: 3rem;
                    span {
                        ${Bu("H4","semibold")}
                    }

                    ${yu.mobileS} {
                        height: auto;
                    }
                `}
`,Nu=x((({color:r,className:n,size:i=18})=>e(vu,{className:n,$size:i,$color:r,children:[t(wu,{id:"inner1",$size:i-2,$borderWidth:2}),t($u,{id:"inner2",$size:i-2,$borderWidth:2}),t(xu,{id:"inner3",$size:i-2,$borderWidth:2}),t(Su,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=pu.Primary(e);break;case"disabled":t=pu.Neutral[3](e);break;default:t=pu.Neutral[8](e)}return _`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Hu;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(Hu||(Hu={}));const Lu=x.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return _`
            height: ${t};
            width: ${r};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${pu.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,r;return e.selected&&(t=pu.Primary(e),r=pu.Primary(e)),e.disabled&&(t=pu.Neutral[6](e),r=pu.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${r};\n\t\t`}}
`,Ru=x.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Wu=x(k)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return _`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?pu.Neutral[4]:pu.Neutral[8]};
`,Vu=x(lu.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Yu=x.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${pu.Neutral[4]};
        border-right: 5px solid ${pu.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${yu.mobileL} {
        max-height: 15rem;
    }
`,qu=x.li`
    :hover,
    :focus,
    :active {
        background: ${pu.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return _`
                background: ${pu.Accent.Light[5]};
            `}}
`,Uu=x.button`
    display: flex;
    ${e=>e.$multiSelect?_`
                padding: 0.5rem 1rem;
            `:_`
                padding: 0 1rem;
                min-height: ${e.$hasNextLineLabel?"4.255rem":"3.5rem"};
                align-items: center;
            `}
    margin: 0 -0.5rem;
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${pu.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,Qu=_`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Zu=x.div`
    ${Bu("Body","regular")}
    color: ${pu.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Qu}
`,Xu=x.div`
    color: ${pu.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Qu}

    ${e=>"next-line"===e.$labelDisplayType?_`
                    ${Bu("BodySmall","semibold")}
                `:_`
                    ${Bu("Body","regular")}
                `}
`,Gu=x.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return _`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return _`
                    ${Zu} {
                        display: inline;
                    }

                    ${Xu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Ju=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Ku=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,ec=x((({className:r,checked:n,disabled:i,onChange:o,onKeyPress:a,displaySize:s="default",...l})=>{const[u,c]=p(n);h((()=>{c(n)}),[n]);const d=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;o&&o(e),a&&a(t)}};return e(Lu,{selected:u,disabled:i,className:r,"data-testid":"checkbox",$displaySize:s,role:"checkbox","aria-checked":u,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:d,children:[t(Ru,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:d,disabled:i,checked:u,...l}),u&&t(Wu,{id:"checkmark","data-testid":"checkmark",disabled:i,$displaySize:s})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,tc=x.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,rc=x.button`
    ${Bu("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${pu.Primary(e)};\n\t\t`}
`,nc=x.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,ic=x(Pu.Body)``,oc=x(F)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${pu.Validation.Red.Icon};
`,ac=x.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&_`
                background-color: ${pu.Neutral[7]};
            `}
    }
`,sc=d.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",type:i="button",...o},a)=>t(ac,{ref:a,$outline:n,$highlight:r,type:i,...o,children:e}))),lc={collections:{base:{InputBoxShadow:_`
        inset 0 0 6px 1px ${pu.Shadow.Accent}
    `,InputErrorBoxShadow:_`
        inset 0 0 6px 1px ${pu.Shadow.Red}
    `,ElevationBoxShadow:_`
      0px 2px 8px ${pu.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:_`
        inset 0 0 6px 1px ${pu.Shadow.Accent}
    `,InputErrorBoxShadow:_`
        inset 0 0 6px 1px ${pu.Shadow.Red}
    `,ElevationBoxShadow:_`
      0px 2px 8px ${pu.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},uc=e=>t=>{const r=t.theme,n=cu(lc,r[du.designTokenScheme]);return r.options?.designToken?uu(n,e,r.options.designToken):uu(n,e)},cc=uc("InputBoxShadow"),dc=uc("InputErrorBoxShadow"),hc=(uc("ElevationBoxShadow"),uc("Table.Header"),uc("Table.Cell.Primary"),uc("Table.Cell.Secondary"),uc("Table.Cell.Selected"),uc("Table.Cell.Hover"),x.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${pu.Neutral[5]};
    border-radius: 4px;
    background: ${pu.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${pu.Accent.Light[1]};
        box-shadow: ${cc};
    }

    ${e=>e.$readOnly?_`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?_`
                background: ${pu.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${pu.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?_`
                border: 1px solid ${pu.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${pu.Validation.Red.Border};
                    box-shadow: ${dc};
                }
            `:void 0}
`),fc=x.input`
    ${Bu("Body","regular")}
    color: ${pu.Neutral[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${pu.Neutral[3]};
    }

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`,pc=x.li`
    background: ${pu.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,mc=x(fc)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,gc=x(D)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${pu.Neutral[3]};
`,yc=x(sc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${pu.Neutral[3]};
    cursor: pointer;
`,vc=x(j)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${pu.Neutral[3]};
`,bc=g(((r,n)=>{const{onClear:i,...o}=r;return e(pc,{children:[t(gc,{}),t(mc,{ref:n,...o}),o.value&&t(yc,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,children:t(vc,{})})]},"search")})),wc=({listItems:n,listExtractor:i,valueExtractor:o,onSelectItem:a,listStyleWidth:s,visible:l,enableSearch:u,searchPlaceholder:c="Search",onSearch:d,searchFunction:f,onDismiss:g,disableItemFocus:y,multiSelect:v,selectedItems:b,onSelectAll:w,onRetry:$,itemsLoadState:x="success",itemTruncationType:S="end",itemMaxLines:_=2,labelDisplayType:O="inline",renderListItem:F,onBlur:k,hideNoResultsDisplay:j,renderCustomCallToAction:D,...M})=>{const[B,A]=p(0),[P,C]=p(""),[E,T]=p(n),[I,z]=p(0),N=Nl({height:I}),H=m(),L=m(),R=m([]),W=m(),V=m(),Y=m(B),q=m(E),U=e=>{Y.current=e,A(e)},Q=e=>{q.current=e,T(e)};h((()=>(document.addEventListener("keydown",ee),()=>{document.removeEventListener("keydown",ee)})),[]),h((()=>{J(P)}),[P]),h((()=>{if(C(""),l){if(setTimeout((()=>{z(K())})),y)return;W&&W.current?(W.current.focus(),U(-1)):R.current[B]&&R.current[B].focus()}else z(0)}),[l]),h((()=>{if(l){const e=K();z(e)}}),[E,x]),h((()=>{Q(n),C(""),U(0)}),[n]);const Z=e=>i?i(e):e.toString(),X=e=>{if("inline"!==O)return!1;let t=0;L&&L.current&&(t=L.current.getBoundingClientRect().width-60);return Hu.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},G=e=>!!wo(b,(t=>xo(t,e))),J=e=>{if(""===e)Q(n);else if(f){const t=f(e);Q(t)}else{const t=n.filter((t=>{const r=Z(t),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase();return"object"==typeof r&&r.secondaryLabel?n.includes(e.trim().toLowerCase())||r.secondaryLabel.includes(e.trim().toLowerCase()):n.includes(e.trim().toLowerCase())}));Q(t)}},K=()=>(L&&L.current?L.current.getBoundingClientRect().height:0)+(V.current?V.current.getBoundingClientRect().height:0),ee=e=>{if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(Y.current<q.current.length-1){const e=Y.current+1;R.current[e].focus(),U(e)}break;case"ArrowUp":if(Y.current>0){const e=Y.current-1;R.current[e].focus(),U(Y.current-1)}break;case"Escape":g&&g(!0)}},te=(e,t)=>{e.preventDefault(),a&&a(t,(e=>o?o(e):e)(t))},re=e=>{const t=e.target.value;C(t),d&&d()},ne=()=>{C(""),W.current.focus(),d&&d()},ie=()=>{$&&$()},oe=()=>{k&&k()},ae=n=>e(r,{children:[t(Ju,{$maxLines:_,"aria-hidden":!0,children:n}),t(Ku,{$maxLines:_,"aria-hidden":!0,children:n})]}),se=r=>{const n=Z(r),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel,a=X(i),s=o&&X(o);return e(Gu,{$labelDisplayType:a||s?"next-line":O,children:[t(Zu,{$truncateType:S,$maxLines:_,"aria-label":i,children:"middle"===S&&a?ae(i):i}),o&&t(Xu,{$truncateType:S,$maxLines:_,$labelDisplayType:O,"aria-label":o,children:"middle"===S&&s?ae(o):o})]})},le=()=>{if(!$||$&&"success"===x)return E.map(((r,n)=>t(qu,{$checked:G(r)&&!v,children:e(Uu,{$hasNextLineLabel:"next-line"===O&&E.length>0&&i&&"string"!=typeof i(E[0]),onClick:e=>{te(e,r)},ref:e=>R.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:l?0:-1,$multiSelect:v,onBlur:oe,children:[v&&t(ec,{checked:G(r),displaySize:"small"}),F?F(r,{selected:G(r)}):se(r)]})},((e,t)=>`item_${t}__${o?o(e):e}`)(r,n))))},ue=()=>{if(v&&E.length>0&&!P&&"success"===x)return t(tc,{children:t(rc,{onClick:w,type:"button",children:0===b.length?"Select all":"Unselect all"})},"selectAll")},ce=()=>{if(!j&&(P||!u)&&0===E.length&&"success"===x)return e(nc,{"data-testid":"list-no-results",children:[t(oc,{"data-testid":"no-result-icon"}),t(ic,{children:"No results found."})]},"noResults")},de=()=>{if($&&"loading"===x)return e(nc,{"data-testid":"list-loading",children:[t(Nu,{$buttonStyle:"secondary",size:24}),t(ic,{children:"Loading..."})]},"loading")},he=()=>{if($&&"fail"===x)return e(nc,{"data-testid":"list-fail",children:[t(oc,{"data-testid":"load-error-icon"}),t(ic,{children:"Failed to load."}),t(rc,{onClick:ie,type:"button",children:"Try again."})]},"noResults")};return t(r,{children:e(Vu,{style:N,"data-testid":l?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(l)return e(Yu,{ref:L,"data-testid":"dropdown-list",width:s,role:"list",...M,children:[(u||f)&&"success"===x?t(bc,{ref:W,onChange:re,value:P,placeholder:c,"data-testid":"search-input","aria-label":"search-input",tabIndex:l?0:-1,onClear:ne}):null,ue(),ce(),de(),he(),le()]})})(),(()=>{if(l&&D)return t("div",{ref:V,"data-testid":"custom-cta",children:D(g,E)})})()]})})},$c="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",xc=x.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,Sc=_`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${pu.Accent.Light[3]};
    }
`,_c=x.button`
    ${Sc}
    cursor: pointer;
`;x.div`
    ${Sc}
`;const Oc=S`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
	}
`,Fc=x.div`
    position: relative;
    border: 1px solid ${pu.Neutral[5]};
    border-radius: ${"4px"};
    background: ${pu.Neutral[8]};

    :focus-within {
        border: 1px solid ${pu.Accent.Light[1]};
        box-shadow: ${cc};
    }

    ${e=>e.expanded?_`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:_`
                animation: ${Oc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?_`
                background: ${pu.Neutral[6](e)};

                ${_c} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${pu.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?_`
                border: none;
                background: transparent !important;

                ${_c} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?_`
                border: 1px solid ${pu.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${pu.Validation.Red.Border(e)};
                    box-shadow: ${dc};
                }
            `:void 0}
`,kc=x.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${$c};
    margin-left: 1rem;
`,jc=x(M)`
    color: ${pu.Neutral[3]};
    height: ${ku.Body.fontSize}rem;
    width: ${ku.Body.fontSize}rem;
`,Dc=x.div`
    height: 1px;
    background: ${pu.Neutral[5]};
    margin: 0 0.5rem;
`,Mc=x.div`
    display: flex;
    flex: 1;
`,Bc=x(Pu.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return _`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Ac=x(Bc)`
    color: ${pu.Neutral[3]};
`,Pc=({children:e,show:r,error:n,disabled:i,testId:o,onBlur:a,readOnly:s})=>{const l=m();return((e,t,r="window",n)=>{const i=m();h((()=>{i.current=t}),[t]),h((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r])})("mousedown",(function(e){if(!i){if(l&&l.current.contains(e.target))return;r&&a()}}),"document"),t(xc,{children:t(Fc,{ref:l,error:n&&!r,disabled:i,$readOnly:s,expanded:r,"data-testid":o,children:e})})},Cc=({selectedOption:n,placeholder:i="Select",options:o,disabled:a,error:s,className:l,"data-testid":u,id:c,enableSearch:d=!1,searchFunction:f,searchPlaceholder:g,valueExtractor:y,valueToStringFunction:v,listExtractor:b,displayValueExtractor:w,onSelectOption:$,listStyleWidth:x,onShowOptions:S,onHideOptions:_,onRetry:O,optionsLoadState:F="success",optionTruncationType:k="end",renderCustomSelectedOption:j,renderListItem:D,hideNoResultsDisplay:M,renderCustomCallToAction:B,...A})=>{const[P,C]=p(n),[E,T]=p(!1),I=m(),z=m();h((()=>{C(n)}),[n]);const N=(e,t)=>{C(e),T(!1),R(!1),I&&I.current.focus(),$&&$(e,t)},H=e=>{E&&(T(!1),R(!1)),e&&I&&I.current.focus()},L=e=>{if("middle"===k){let t=0;return z&&z.current&&(t=z.current.getBoundingClientRect().width),Hu.truncateOneLine((e=>"string"==typeof e?e:v(e)||e.toString())(e),t,120,8)}return e},R=e=>{!e&&_&&_(),e&&S&&S()};return e(Pc,{className:l,show:E,error:s&&!E,disabled:a,readOnly:A.readOnly,testId:u,onBlur:()=>{T(!1),R(!1)},children:[t(_c,{ref:I,type:"button","data-testid":c||"selector",disabled:a,onClick:e=>{e.preventDefault(),a||A.readOnly||(T(!E),R(!E))},...A,children:e(r,{children:[t(Mc,{ref:z,children:P?j?j(P):t(Bc,{truncateType:k,children:L(w?w(P):y?y(P):P.toString())}):t(Ac,{truncateType:k,children:i})}),!A.readOnly&&t(kc,{expanded:E,children:t(jc,{})})]})}),E&&t(Dc,{}),o&&o.length>0?t(wc,{listItems:o,onSelectItem:N,onDismiss:H,valueExtractor:y,listExtractor:b,listStyleWidth:x,visible:E,enableSearch:d,searchPlaceholder:g,searchFunction:f,"data-testid":"dropdown-list",selectedItems:P?[P]:[],onRetry:O,itemsLoadState:F,itemTruncationType:k,renderListItem:D,hideNoResultsDisplay:M,renderCustomCallToAction:B}):null]})},Ec={Default:d.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=r,u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default"};return e(zu,{ref:n,"data-testid":l["data-testid"]||"button",disabled:o,...u,...l,children:[a&&t(Nu,{...u}),t("span",{children:i})]})})),Small:d.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=r,u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small"};return e(zu,{ref:n,"data-testid":l["data-testid"]||"button",disabled:o,...u,...l,children:[a&&t(Nu,{...u,size:16}),t("span",{children:i})]})}))};var Tc={exports:{}};Tc.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=u("months"),r=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var u=a[l],c=d[u],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,u=e.slice(n),c=o.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],u=!0===a[3],c=l||u,d=a[2];u&&(d=a[2]),o=this.$locale(),!l&&d&&(o=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,u=n.seconds,c=n.milliseconds,d=n.zone,f=new Date,p=a||(i||o?1:f.getDate()),m=i||f.getFullYear(),g=0;i&&!o||(g=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=u||0,w=c||0;return d?new Date(Date.UTC(m,g,p,y,v,b,w+60*d.offset*1e3)):r?new Date(Date.UTC(m,g,p,y,v,b,w)):new Date(m,g,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var m=r.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Ic,zc,Nc=Tc.exports,Hc={exports:{}},Lc=Hc.exports=(Ic={year:0,month:1,day:2,hour:3,minute:4,second:5},zc={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=zc[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),zc[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,u=s.value,c=Ic[l];c>=0&&(o[c]=parseInt(u,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var u=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),c=u[0],d=u[1],h=r(c).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),Rc={exports:{}};Rc.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,u),o=r-i<0,a=t.clone().add(n+(o?-1:1),u);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var $=function(e){return e instanceof O},x=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),r&&(w[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!n&&i&&(b=i),i||!n&&b},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new O(r)},_=v;_.l=x,_.i=$,_.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function g(e){this.$L=x(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,r){return _.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!_.u(t)||t,c=_.p(e),f=function(e,t){var i=_.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return _.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return n?f(1,0):f(31,11);case u:return n?f(1,g):f(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return f(n?y-w:y+(6-w),g);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=_.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[s]=c+"Date",r[h]=c+"Date",r[u]=c+"Month",r[d]=c+"FullYear",r[a]=c+"Hours",r[o]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(n,c){var h,f=this;n=Number(n);var p=_.p(c),m=function(e){var t=S(f);return _.w(t.date(t.date()+Math.round(e*n)),f)};if(p===u)return this.set(u,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[o]=t,h[a]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*g;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,u=r.months,c=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},d=function(e){return _.s(o%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:c(r.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,l,2),ddd:c(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:_.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return n.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,m=_.p(h),g=S(n),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=_.m(this,g);return b=(p={},p[d]=b/12,p[u]=b,p[c]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/r,p[o]=v/t,p[i]=v/e,p)[m]||v,f?b:_.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),F=O.prototype;return S.prototype=F,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,O,S),e.$i=!0),S},S.locale=x,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var Wc=Rc.exports,Vc={exports:{}};Vc.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Yc=Vc.exports,qc={exports:{}};qc.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Uc=qc.exports,Qc={exports:{}};Qc.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Zc,Xc=Qc.exports;Wc.extend(Yc),Wc.extend(Uc),Wc.extend(Xc),Wc.extend(Nc),Wc.extend(Lc),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Wc(t).startOf("week");return Gc(r).map((e=>Jc(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Jc(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Wc(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Wc(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Wc(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")}}(Zc||(Zc={}));const Gc=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Jc=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Kc=[1,3,5,7,8,10,12],ed=[4,6,9,11];var td,rd;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":Kc.includes(o)?Math.min(i,31).toString():ed.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Wc(e,r);return Wc(t,r).diff(n,"minute")}}(td||(td={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(rd||(rd={}));const nd=x.input`
    ${Bu("Body","regular")}
    color: ${pu.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${pu.Neutral[3]};
    }

    ${e=>"number"===e.type?_`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?_`
                cursor: not-allowed;
            `:void 0}
`,id=x.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${pu.Neutral[3]};
    background-color: transparent;
    border: none;
`,od=x(j)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,ad=x.div`
    display: flex;
    width: 100%;
`,sd=d.forwardRef((({value:n,spacing:i,type:o,error:a,disabled:s,readOnly:l,onChange:u,onClear:c,allowClear:d=!1,className:h,styleType:f="bordered",...p},g)=>{const y=m();w(g,(()=>y.current),[]);const v=function({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),o=n.substring(0,r.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(l,l)}}}}({ref:y,formatter:e=>Hu.transformWithSpaces(e,i)}),b=e=>{u&&(x()?S(e):u(e))},$=()=>{c&&c(),y&&y.current&&y.current.focus()},x=()=>"tel"===o&&i,S=e=>{const{nextValue:t,updateCaretPosition:r}=v(),n=t.replace(/\s/g,"");e.target.value=n,u(e),r()},_=n?(e=>e?x()?Hu.transformWithSpaces(e,i):e:"")(n):n,O=()=>e(r,{children:[t(nd,{"data-testid":"input",ref:y,disabled:s,value:_,onChange:b,type:o,readOnly:l,...p}),d&&!s&&!l&&!!n&&t(id,{onClick:$,type:"button",children:t(od,{"aria-hidden":!0})})]});return t(r,{children:"no-border"===f?t(ad,{className:h,children:O()}):t(hc,{$disabled:s,$error:a,$readOnly:l,className:h,children:O()})})})),ld=x.nav`
    display: flex;
`,ud=x.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${yu.tablet} {
        align-self: center;
    }
`,cd=x.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,dd=x(sc)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${pu.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${pu.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${pu.Accent.Light[1]};
    }
`,hd=x(sc)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${pu.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${pu.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${pu.Accent.Light[1]};
    }
    ${e=>"left"===e.$position?_`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:_`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${yu.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,fd=x(Ec.Default)`
    background: ${e=>e.$selected?pu.Primary:pu.Neutral[8]};
    border: 1px solid
        ${e=>e.$selected?pu.Primary:pu.Neutral[5]};
    color: ${e=>e.$selected?pu.Neutral[8]:pu.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${e=>e.$selected?pu.Neutral[8]:pu.Neutral[1]};
        ${e=>e.$selected?_`
                    ${Bu("Body",700)};
                `:_`
                    ${Bu("Body",400)};
                `}
    }
    :hover {
        box-shadow: none;

        background: ${e=>e.$selected?pu.Primary:pu.Accent.Light[5]};
        border: 1px solid
            ${e=>e.$selected?pu.Primary:pu.Accent.Light[5]};
        span {
            color: ${e=>e.$selected?pu.Neutral[8]:pu.Primary};
            ${e=>e.$selected?_`
                        ${Bu("Body",700)};
                    `:_`
                        ${Bu("Body",600)};
                    `}
        }
    }

    :active,
    :focus {
        background: ${e=>e.$selected?pu.Primary:pu.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${pu.Accent.Light[1]};
        span {
            color: ${e=>e.$selected?pu.Neutral[8]:pu.Primary};

            ${e=>e.$selected?_`
                        ${Bu("Body",700)};
                    `:_`
                        ${Bu("Body",400)};
                    `}
        }
    }
`;x(sc)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${pu.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${pu.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${pu.Accent.Light[1]};
    }
`;const pd=x.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,md=x.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${pu.Neutral[1]};

    display: flex;
    justify-content: center;
`,gd=x(Pu.Body)`
    white-space: nowrap;
`,yd=x(Pu.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,vd=x(sd)`
    ${Bu("Body",400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${pu.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${Bu("XSmall",400)};
        }
    }
`,bd=x.div`
    ${Bu("XSmall",400)};

    background-color: ${pu.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${pu.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,wd=x.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,$d=d.forwardRef((({id:r,"data-testid":c,className:d,pageSize:f=10,totalItems:m,activePage:g,pageSizeOptions:y=xd,showFirstAndLastNav:v,showPageSizeChanger:b=!1,onPageChange:w,onPageSizeChange:$},x)=>{const S=P.exports.useMediaQuery({maxWidth:mu.mobileL}),_=y,[O,F]=p(!1),[k,j]=p(!1),[D,M]=p(""),[B,A]=p(_&&_.length>=1?_[0]:null),[C,E]=p(!S&&b&&B?B.value:f),T=Math.ceil(m/C),I=1===g,z=g===T,N=g>1?()=>U(1):void 0,H=g<T?()=>U(T):void 0,L=g>1?()=>U(g-1):void 0,R=g<T?()=>U(parseInt(g.toString())+1):void 0,W=e=>e?()=>ee():()=>J(),V=e=>e?()=>te():()=>K();h((()=>{g&&Y(g)}),[g]);const Y=e=>{M(e.toString())},q=()=>{F(!1),j(!1)},U=e=>{w&&(w(e),Y(e))},Q=()=>{const e=Math.min(T,g+5);U(e),Y(e),F(!0),j(!1)},Z=()=>{const e=Math.max(1,g-5);U(e),Y(e),F(!1),j(!0)},X=e=>{const t=e.target.value;if(void 0===t||0===t.length)M("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));Y(Math.max(1,Math.min(T,e)))}else M(t.replace(/[^0-9]/g,""))},G=e=>{e.preventDefault(),D&&w(parseInt(D))},J=()=>{F(!0)},K=()=>{F(!1)},ee=()=>{j(!0)},te=()=>{j(!1)},re=(r,o,a)=>e(pd,{children:[t(dd,{focusHighlight:!1,focusOutline:"browser","aria-label":r?"Previous 5 pages":"Next 5 pages",onMouseOver:W(r),onMouseOut:V(r),onFocus:W(r),onBlur:V(r),onClick:r?Z:Q,children:t(r&&k?n:o&&O?i:u,{"aria-hidden":!0})}),r&&k&&t(bd,{children:"Previous 5 pages"}),o&&O&&t(bd,{children:"Next 5 pages"})]},a);return e(ld,{className:d,ref:x,id:r||"pagination-wrapper","data-testid":c||"pagination","aria-label":"Pagination",children:[t(ud,{children:e(cd,{children:[v&&t(hd,{onClick:N,disabled:I,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser",children:t(a,{"aria-hidden":!0})}),t(hd,{onClick:L,disabled:I,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser",children:t(o,{"aria-hidden":!0})}),S?e(md,{children:[t("form",{onSubmit:G,children:t(vd,{value:D,onChange:X,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(c||"pagination")+"-input"})}),t(yd,{children:"/"}),t(gd,{children:T})]}):[...Array(T)].map(((e,r)=>{const n=r+1,i=T-5,o=g===n;if(T<=7)return t(fd,{onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:q,onFocus:q,children:n},n);const a=g+1>5&&2===n,s=g-1<=i&&n===T-1-1;return a||s?re(a,s,n):n<=5&&g+1<=5||n<=1||n===g||n<=g+1&&n>=g-1-1||n>i&&g-1>i||n>T-1?t(fd,{onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:q,onFocus:q,children:n},n):null})),t(hd,{onClick:R,disabled:z,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser",children:t(l,{"aria-hidden":!0})}),v&&t(hd,{onClick:H,disabled:z,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser",children:t(s,{"aria-hidden":!0})})]})}),b&&!S&&t(wd,{children:t(Cc,{options:_,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:B,onSelectOption:e=>{A(e);const t=e.value,r=Math.ceil(m/t);E(t);$&&$(g>=r?r:g,t)}})})]})})),xd=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}];export{$d as Pagination};
//# sourceMappingURL=index.js.map
