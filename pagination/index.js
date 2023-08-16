import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import{Chevron2LeftIcon as n}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as i}from"@lifesg/react-icons/chevron-2-right";import{ChevronLeftIcon as o}from"@lifesg/react-icons/chevron-left";import{ChevronLineLeftIcon as a}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as s}from"@lifesg/react-icons/chevron-line-right";import{ChevronRightIcon as l}from"@lifesg/react-icons/chevron-right";import{EllipsisHorizontalIcon as c}from"@lifesg/react-icons/ellipsis-horizontal";import*as u from"react";import d,{useEffect as h,useLayoutEffect as f,useState as p,useRef as m,forwardRef as g,useCallback as y,useContext as v,useMemo as b,useImperativeHandle as w}from"react";import{unstable_batchedUpdates as x}from"react-dom";import $,{keyframes as S,css as _}from"styled-components";import{ExternalIcon as O}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as j}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as F}from"@lifesg/react-icons/tick";import{CrossIcon as k}from"@lifesg/react-icons/cross";import{MagnifierIcon as D}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as M}from"@lifesg/react-icons/chevron-down";var B,P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},A={exports:{}};function C(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}B=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var i=e.expressions.every((function(e){var r=e.feature,n=e.modifier,i=e.value,o=t[r];if(!o)return!1;switch(r){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=u(i),o=u(o);break;case"resolution":i=c(i),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!r||!i&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),o=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(i);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))r.call(o,c)&&(s[c]=o[c]);if(t){a=t(o);for(var u=0;u<a.length;u++)n.call(o,a[u])&&(s[a[u]]=o[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,r)=>{var n,i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,r,null,i)}catch(e){u=e}if(!u||u instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+u.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,r,n,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+b(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,r,n,i,o){var a=t[r];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,t,r,n,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+n+" `"+o+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||d;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,r,n,i){return v(e[t])?null:new p("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,r,n,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=b(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,n,i,o+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),c}return m((function(t,r,n,i,o){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,r,n,i,o,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,n,i,o){var s=t[r],l=b(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(n,i,o,c,w(u));var d=u(s,c,n,i,o+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,r,n,i,l){var c=t[r],u=b(c);if("object"!==u)return new p("Invalid "+i+" `"+l+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var d=o({},t[r],e);for(var h in d){var f=e[h];if(s(e,h)&&"function"!=typeof f)return y(n,i,l,h,w(f));if(!f)return new p("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(c,h,n,i,l+"."+h,a);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var r={},i=0;function o(o,s,l,c,u,h,f){if(c=c||d,h=h||l,f!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!r[g]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[g]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function g(e){return m((function(t,r,n,i,o,a){var s=t[r];return b(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+w(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,r,n,i){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[u]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case c:case u:case i:case a:case o:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case n:return t}}}var x=c,$=u,S=l,_=s,O=r,j=d,F=i,k=m,D=p,M=n,B=a,P=o,A=h,C=!1;function E(e){return w(e)===u}t.AsyncMode=x,t.ConcurrentMode=$,t.ContextConsumer=S,t.ContextProvider=_,t.Element=O,t.ForwardRef=j,t.Fragment=F,t.Lazy=k,t.Memo=D,t.Portal=M,t.Profiler=B,t.StrictMode=P,t.Suspense=A,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),E(e)||w(e)===c},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===o||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=i(c,["type"]),d=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),h=n(n({},l),d);t.default={all:h,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),o=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],o=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(c.default),r=function(){return u(e)||u(t)},n=(0,i.useState)(r),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,i.useState)(r),a=n[0],s=n[1],l=d();return(0,i.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),f=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),p=d();return(0,i.useEffect)((function(){p&&r&&r(f)}),[f]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})(),A.exports=B(d);var E=function(){this.__data__=[],this.size=0};var T=function(e,t){return e===t||e!=e&&t!=t},I=T;var z=function(e,t){for(var r=e.length;r--;)if(I(e[r][0],t))return r;return-1},N=z,H=Array.prototype.splice;var L=z;var R=z;var W=z;var V=E,Y=function(e){var t=this.__data__,r=N(t,e);return!(r<0)&&(r==t.length-1?t.pop():H.call(t,r,1),--this.size,!0)},q=function(e){var t=this.__data__,r=L(t,e);return r<0?void 0:t[r][1]},U=function(e){return R(this.__data__,e)>-1},Q=function(e,t){var r=this.__data__,n=W(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Z(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Z.prototype.clear=V,Z.prototype.delete=Y,Z.prototype.get=q,Z.prototype.has=U,Z.prototype.set=Q;var X=Z,G=X;var J=function(){this.__data__=new G,this.size=0};var K=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var ee=function(e){return this.__data__.get(e)};var te=function(e){return this.__data__.has(e)},re="object"==typeof P&&P&&P.Object===Object&&P,ne=re,ie="object"==typeof self&&self&&self.Object===Object&&self,oe=ne||ie||Function("return this")(),ae=oe.Symbol,se=ae,le=Object.prototype,ce=le.hasOwnProperty,ue=le.toString,de=se?se.toStringTag:void 0;var he=function(e){var t=ce.call(e,de),r=e[de];try{e[de]=void 0;var n=!0}catch(e){}var i=ue.call(e);return n&&(t?e[de]=r:delete e[de]),i},fe=Object.prototype.toString;var pe=he,me=function(e){return fe.call(e)},ge=ae?ae.toStringTag:void 0;var ye=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ge&&ge in Object(e)?pe(e):me(e)};var ve=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},be=ye,we=ve;var xe,$e=function(e){if(!we(e))return!1;var t=be(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Se=oe["__core-js_shared__"],_e=(xe=/[^.]+$/.exec(Se&&Se.keys&&Se.keys.IE_PROTO||""))?"Symbol(src)_1."+xe:"";var Oe=function(e){return!!_e&&_e in e},je=Function.prototype.toString;var Fe=function(e){if(null!=e){try{return je.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ke=$e,De=Oe,Me=ve,Be=Fe,Pe=/^\[object .+?Constructor\]$/,Ae=Function.prototype,Ce=Object.prototype,Ee=Ae.toString,Te=Ce.hasOwnProperty,Ie=RegExp("^"+Ee.call(Te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ze=function(e){return!(!Me(e)||De(e))&&(ke(e)?Ie:Pe).test(Be(e))},Ne=function(e,t){return null==e?void 0:e[t]};var He=function(e,t){var r=Ne(e,t);return ze(r)?r:void 0},Le=He(oe,"Map"),Re=He(Object,"create"),We=Re;var Ve=function(){this.__data__=We?We(null):{},this.size=0};var Ye=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},qe=Re,Ue=Object.prototype.hasOwnProperty;var Qe=function(e){var t=this.__data__;if(qe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ue.call(t,e)?t[e]:void 0},Ze=Re,Xe=Object.prototype.hasOwnProperty;var Ge=Re;var Je=Ve,Ke=Ye,et=Qe,tt=function(e){var t=this.__data__;return Ze?void 0!==t[e]:Xe.call(t,e)},rt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ge&&void 0===t?"__lodash_hash_undefined__":t,this};function nt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}nt.prototype.clear=Je,nt.prototype.delete=Ke,nt.prototype.get=et,nt.prototype.has=tt,nt.prototype.set=rt;var it=nt,ot=X,at=Le;var st=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var lt=function(e,t){var r=e.__data__;return st(t)?r["string"==typeof t?"string":"hash"]:r.map},ct=lt;var ut=lt;var dt=lt;var ht=lt;var ft=function(){this.size=0,this.__data__={hash:new it,map:new(at||ot),string:new it}},pt=function(e){var t=ct(this,e).delete(e);return this.size-=t?1:0,t},mt=function(e){return ut(this,e).get(e)},gt=function(e){return dt(this,e).has(e)},yt=function(e,t){var r=ht(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function vt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}vt.prototype.clear=ft,vt.prototype.delete=pt,vt.prototype.get=mt,vt.prototype.has=gt,vt.prototype.set=yt;var bt=vt,wt=X,xt=Le,$t=bt;var St=X,_t=J,Ot=K,jt=ee,Ft=te,kt=function(e,t){var r=this.__data__;if(r instanceof wt){var n=r.__data__;if(!xt||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new $t(n)}return r.set(e,t),this.size=r.size,this};function Dt(e){var t=this.__data__=new St(e);this.size=t.size}Dt.prototype.clear=_t,Dt.prototype.delete=Ot,Dt.prototype.get=jt,Dt.prototype.has=Ft,Dt.prototype.set=kt;var Mt=Dt;var Bt=bt,Pt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},At=function(e){return this.__data__.has(e)};function Ct(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Bt;++t<r;)this.add(e[t])}Ct.prototype.add=Ct.prototype.push=Pt,Ct.prototype.has=At;var Et=Ct,Tt=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},It=function(e,t){return e.has(t)};var zt=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,f=2&r?new Et:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var p=e[d],m=t[d];if(n)var g=a?n(m,p,d,t,e,o):n(p,m,d,e,t,o);if(void 0!==g){if(g)continue;h=!1;break}if(f){if(!Tt(t,(function(e,t){if(!It(f,t)&&(p===e||i(p,e,r,n,o)))return f.push(t)}))){h=!1;break}}else if(p!==m&&!i(p,m,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Nt=oe.Uint8Array,Ht=T,Lt=zt,Rt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Wt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Vt=ae?ae.prototype:void 0,Yt=Vt?Vt.valueOf:void 0;var qt=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Nt(e),new Nt(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ht(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Rt;case"[object Set]":var l=1&n;if(s||(s=Wt),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=Lt(s(e),s(t),n,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Yt)return Yt.call(e)==Yt.call(t)}return!1};var Ut=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Qt=Array.isArray,Zt=Ut,Xt=Qt;var Gt=function(e,t,r){var n=t(e);return Xt(e)?n:Zt(n,r(e))};var Jt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},Kt=function(){return[]},er=Object.prototype.propertyIsEnumerable,tr=Object.getOwnPropertySymbols,rr=tr?function(e){return null==e?[]:(e=Object(e),Jt(tr(e),(function(t){return er.call(e,t)})))}:Kt;var nr=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var ir=function(e){return null!=e&&"object"==typeof e},or=ye,ar=ir;var sr=function(e){return ar(e)&&"[object Arguments]"==or(e)},lr=ir,cr=Object.prototype,ur=cr.hasOwnProperty,dr=cr.propertyIsEnumerable,hr=sr(function(){return arguments}())?sr:function(e){return lr(e)&&ur.call(e,"callee")&&!dr.call(e,"callee")},fr={exports:{}};var pr=function(){return!1};!function(e,t){var r=oe,n=pr,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(fr,fr.exports);var mr=/^(?:0|[1-9]\d*)$/;var gr=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&mr.test(e))&&e>-1&&e%1==0&&e<t};var yr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},vr=ye,br=yr,wr=ir,xr={};xr["[object Float32Array]"]=xr["[object Float64Array]"]=xr["[object Int8Array]"]=xr["[object Int16Array]"]=xr["[object Int32Array]"]=xr["[object Uint8Array]"]=xr["[object Uint8ClampedArray]"]=xr["[object Uint16Array]"]=xr["[object Uint32Array]"]=!0,xr["[object Arguments]"]=xr["[object Array]"]=xr["[object ArrayBuffer]"]=xr["[object Boolean]"]=xr["[object DataView]"]=xr["[object Date]"]=xr["[object Error]"]=xr["[object Function]"]=xr["[object Map]"]=xr["[object Number]"]=xr["[object Object]"]=xr["[object RegExp]"]=xr["[object Set]"]=xr["[object String]"]=xr["[object WeakMap]"]=!1;var $r=function(e){return wr(e)&&br(e.length)&&!!xr[vr(e)]};var Sr=function(e){return function(t){return e(t)}},_r={exports:{}};!function(e,t){var r=re,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(_r,_r.exports);var Or=$r,jr=Sr,Fr=_r.exports,kr=Fr&&Fr.isTypedArray,Dr=kr?jr(kr):Or,Mr=nr,Br=hr,Pr=Qt,Ar=fr.exports,Cr=gr,Er=Dr,Tr=Object.prototype.hasOwnProperty;var Ir=function(e,t){var r=Pr(e),n=!r&&Br(e),i=!r&&!n&&Ar(e),o=!r&&!n&&!i&&Er(e),a=r||n||i||o,s=a?Mr(e.length,String):[],l=s.length;for(var c in e)!t&&!Tr.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Cr(c,l))||s.push(c);return s},zr=Object.prototype;var Nr=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||zr)};var Hr=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Lr=Nr,Rr=Hr,Wr=Object.prototype.hasOwnProperty;var Vr=$e,Yr=yr;var qr=function(e){return null!=e&&Yr(e.length)&&!Vr(e)},Ur=Ir,Qr=function(e){if(!Lr(e))return Rr(e);var t=[];for(var r in Object(e))Wr.call(e,r)&&"constructor"!=r&&t.push(r);return t},Zr=qr;var Xr=function(e){return Zr(e)?Ur(e):Qr(e)},Gr=Gt,Jr=rr,Kr=Xr;var en=function(e){return Gr(e,Kr,Jr)},tn=Object.prototype.hasOwnProperty;var rn=function(e,t,r,n,i,o){var a=1&r,s=en(e),l=s.length;if(l!=en(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:tn.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var m=e[u=s[c]],g=t[u];if(n)var y=a?n(g,m,u,t,e,o):n(m,g,u,e,t,o);if(!(void 0===y?m===g||i(m,g,r,n,o):y)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return o.delete(e),o.delete(t),f},nn=He(oe,"DataView"),on=Le,an=He(oe,"Promise"),sn=He(oe,"Set"),ln=He(oe,"WeakMap"),cn=ye,un=Fe,dn="[object Map]",hn="[object Promise]",fn="[object Set]",pn="[object WeakMap]",mn="[object DataView]",gn=un(nn),yn=un(on),vn=un(an),bn=un(sn),wn=un(ln),xn=cn;(nn&&xn(new nn(new ArrayBuffer(1)))!=mn||on&&xn(new on)!=dn||an&&xn(an.resolve())!=hn||sn&&xn(new sn)!=fn||ln&&xn(new ln)!=pn)&&(xn=function(e){var t=cn(e),r="[object Object]"==t?e.constructor:void 0,n=r?un(r):"";if(n)switch(n){case gn:return mn;case yn:return dn;case vn:return hn;case bn:return fn;case wn:return pn}return t});var $n=Mt,Sn=zt,_n=qt,On=rn,jn=xn,Fn=Qt,kn=fr.exports,Dn=Dr,Mn="[object Arguments]",Bn="[object Array]",Pn="[object Object]",An=Object.prototype.hasOwnProperty;var Cn=function(e,t,r,n,i,o){var a=Fn(e),s=Fn(t),l=a?Bn:jn(e),c=s?Bn:jn(t),u=(l=l==Mn?Pn:l)==Pn,d=(c=c==Mn?Pn:c)==Pn,h=l==c;if(h&&kn(e)){if(!kn(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new $n),a||Dn(e)?Sn(e,t,r,n,i,o):_n(e,t,l,r,n,i,o);if(!(1&r)){var f=u&&An.call(e,"__wrapped__"),p=d&&An.call(t,"__wrapped__");if(f||p){var m=f?e.value():e,g=p?t.value():t;return o||(o=new $n),i(m,g,r,n,o)}}return!!h&&(o||(o=new $n),On(e,t,r,n,i,o))},En=ir;var Tn=function e(t,r,n,i,o){return t===r||(null==t||null==r||!En(t)&&!En(r)?t!=t&&r!=r:Cn(t,r,n,i,e,o))},In=Mt,zn=Tn;var Nn=ve;var Hn=function(e){return e==e&&!Nn(e)},Ln=Hn,Rn=Xr;var Wn=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Vn=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new In;if(n)var h=n(c,u,l,e,t,d);if(!(void 0===h?zn(u,c,3,n,d):h))return!1}}return!0},Yn=function(e){for(var t=Rn(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Ln(i)]}return t},qn=Wn;var Un=function(e){var t=Yn(e);return 1==t.length&&t[0][2]?qn(t[0][0],t[0][1]):function(r){return r===e||Vn(r,e,t)}},Qn=ye,Zn=ir;var Xn=function(e){return"symbol"==typeof e||Zn(e)&&"[object Symbol]"==Qn(e)},Gn=Qt,Jn=Xn,Kn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ei=/^\w*$/;var ti=function(e,t){if(Gn(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Jn(e))||(ei.test(e)||!Kn.test(e)||null!=t&&e in Object(t))},ri=bt;function ni(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(ni.Cache||ri),r}ni.Cache=ri;var ii=ni;var oi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ai=/\\(\\)?/g,si=function(e){var t=ii(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(oi,(function(e,r,n,i){t.push(n?i.replace(ai,"$1"):r||e)})),t}));var li=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ci=Qt,ui=Xn,di=ae?ae.prototype:void 0,hi=di?di.toString:void 0;var fi=function e(t){if("string"==typeof t)return t;if(ci(t))return li(t,e)+"";if(ui(t))return hi?hi.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},pi=fi;var mi=Qt,gi=ti,yi=si,vi=function(e){return null==e?"":pi(e)};var bi=function(e,t){return mi(e)?e:gi(e,t)?[e]:yi(vi(e))},wi=Xn;var xi=function(e){if("string"==typeof e||wi(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},$i=bi,Si=xi;var _i=function(e,t){for(var r=0,n=(t=$i(t,e)).length;null!=e&&r<n;)e=e[Si(t[r++])];return r&&r==n?e:void 0},Oi=_i;var ji=function(e,t,r){var n=null==e?void 0:Oi(e,t);return void 0===n?r:n};var Fi=bi,ki=hr,Di=Qt,Mi=gr,Bi=yr,Pi=xi;var Ai=function(e,t){return null!=e&&t in Object(e)},Ci=function(e,t,r){for(var n=-1,i=(t=Fi(t,e)).length,o=!1;++n<i;){var a=Pi(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Bi(i)&&Mi(a,i)&&(Di(e)||ki(e))};var Ei=Tn,Ti=ji,Ii=function(e,t){return null!=e&&Ci(e,t,Ai)},zi=ti,Ni=Hn,Hi=Wn,Li=xi;var Ri=_i;var Wi=function(e){return function(t){return null==t?void 0:t[e]}},Vi=function(e){return function(t){return Ri(t,e)}},Yi=ti,qi=xi;var Ui=Un,Qi=function(e,t){return zi(e)&&Ni(t)?Hi(Li(e),t):function(r){var n=Ti(r,e);return void 0===n&&n===t?Ii(r,e):Ei(t,n,3)}},Zi=function(e){return e},Xi=Qt,Gi=function(e){return Yi(e)?Wi(qi(e)):Vi(e)};var Ji=function(e){return"function"==typeof e?e:null==e?Zi:"object"==typeof e?Xi(e)?Qi(e[0],e[1]):Ui(e):Gi(e)},Ki=Ji,eo=qr,to=Xr;var ro=function(e){return function(t,r,n){var i=Object(t);if(!eo(t)){var o=Ki(r);t=to(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var no=/\s/;var io=function(e){for(var t=e.length;t--&&no.test(e.charAt(t)););return t},oo=/^\s+/;var ao=function(e){return e?e.slice(0,io(e)+1).replace(oo,""):e},so=ve,lo=Xn,co=/^[-+]0x[0-9a-f]+$/i,uo=/^0b[01]+$/i,ho=/^0o[0-7]+$/i,fo=parseInt;var po=function(e){if("number"==typeof e)return e;if(lo(e))return NaN;if(so(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=so(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ao(e);var r=uo.test(e);return r||ho.test(e)?fo(e.slice(2),r?2:8):co.test(e)?NaN:+e},mo=1/0;var go=function(e){return e?(e=po(e))===mo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var yo=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},vo=Ji,bo=function(e){var t=go(e),r=t%1;return t==t?r?t-r:t:0},wo=Math.max;var xo=ro((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:bo(r);return i<0&&(i=wo(n+i,0)),yo(e,vo(t),i)})),$o=Tn;var So=function(e,t){return $o(e,t)};let _o=Ho();const Oo=e=>To(e,_o);let jo=Ho();Oo.write=e=>To(e,jo);let Fo=Ho();Oo.onStart=e=>To(e,Fo);let ko=Ho();Oo.onFrame=e=>To(e,ko);let Do=Ho();Oo.onFinish=e=>To(e,Do);let Mo=[];Oo.setTimeout=(e,t)=>{let r=Oo.now()+t,n=()=>{let e=Mo.findIndex((e=>e.cancel==n));~e&&Mo.splice(e,1),Co-=~e?1:0},i={time:r,handler:e,cancel:n};return Mo.splice(Bo(r),0,i),Co+=1,Io(),i};let Bo=e=>~(~Mo.findIndex((t=>t.time>e))||~Mo.length);Oo.cancel=e=>{Fo.delete(e),ko.delete(e),Do.delete(e),_o.delete(e),jo.delete(e)},Oo.sync=e=>{Eo=!0,Oo.batchedUpdates(e),Eo=!1},Oo.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Oo.onStart(r)}return n.handler=e,n.cancel=()=>{Fo.delete(r),t=null},n};let Po="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Oo.use=e=>Po=e,Oo.now="undefined"!=typeof performance?()=>performance.now():Date.now,Oo.batchedUpdates=e=>e(),Oo.catch=console.error,Oo.frameLoop="always",Oo.advance=()=>{"demand"!==Oo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):No()};let Ao=-1,Co=0,Eo=!1;function To(e,t){Eo?(t.delete(e),e(0)):(t.add(e),Io())}function Io(){Ao<0&&(Ao=0,"demand"!==Oo.frameLoop&&Po(zo))}function zo(){~Ao&&(Po(zo),Oo.batchedUpdates(No))}function No(){let e=Ao;Ao=Oo.now();let t=Bo(Ao);t&&(Lo(Mo.splice(0,t),(e=>e.handler())),Co-=t),Co?(Fo.flush(),_o.flush(e?Math.min(64,Ao-e):16.667),ko.flush(),jo.flush(),Do.flush()):Ao=-1}function Ho(){let e=new Set,t=e;return{add(r){Co+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Co-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Co-=t.size,Lo(t,(t=>t(r)&&e.add(t))),Co+=e.size,t=e)}}}function Lo(e,t){e.forEach((e=>{try{t(e)}catch(e){Oo.catch(e)}}))}function Ro(){}const Wo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Vo(e,t){if(Wo.arr(e)){if(!Wo.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const Yo=(e,t)=>e.forEach(t);function qo(e,t,r){if(Wo.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const Uo=e=>Wo.und(e)?[]:Wo.arr(e)?e:[e];function Qo(e,t){if(e.size){const r=Array.from(e);e.clear(),Yo(r,t)}}const Zo=(e,...t)=>Qo(e,(e=>e(...t))),Xo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Go,Jo,Ko=null,ea=!1,ta=Ro;var ra=Object.freeze({__proto__:null,get createStringInterpolator(){return Go},get to(){return Jo},get colors(){return Ko},get skipAnimation(){return ea},get willAdvance(){return ta},assign:e=>{e.to&&(Jo=e.to),e.now&&(Oo.now=e.now),void 0!==e.colors&&(Ko=e.colors),null!=e.skipAnimation&&(ea=e.skipAnimation),e.createStringInterpolator&&(Go=e.createStringInterpolator),e.requestAnimationFrame&&Oo.use(e.requestAnimationFrame),e.batchedUpdates&&(Oo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ta=e.willAdvance),e.frameLoop&&(Oo.frameLoop=e.frameLoop)}});const na=new Set;let ia=[],oa=[],aa=0;const sa={get idle(){return!na.size&&!ia.length},start(e){aa>e.priority?(na.add(e),Oo.onStart(la)):(ca(e),Oo(da))},advance:da,sort(e){if(aa)Oo.onFrame((()=>sa.sort(e)));else{const t=ia.indexOf(e);~t&&(ia.splice(t,1),ua(e))}},clear(){ia=[],na.clear()}};function la(){na.forEach(ca),na.clear(),Oo(da)}function ca(e){ia.includes(e)||ua(e)}function ua(e){ia.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ia,(t=>t.priority>e.priority)),0,e)}function da(e){const t=oa;for(let r=0;r<ia.length;r++){const n=ia[r];aa=n.priority,n.idle||(ta(n),n.advance(e),n.idle||t.push(n))}return aa=0,oa=ia,oa.length=0,ia=t,ia.length>0}const ha="[-+]?\\d*\\.?\\d+",fa=ha+"%";function pa(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const ma=new RegExp("rgb"+pa(ha,ha,ha)),ga=new RegExp("rgba"+pa(ha,ha,ha,ha)),ya=new RegExp("hsl"+pa(ha,fa,fa)),va=new RegExp("hsla"+pa(ha,fa,fa,ha)),ba=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,wa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,xa=/^#([0-9a-fA-F]{6})$/,$a=/^#([0-9a-fA-F]{8})$/;function Sa(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function _a(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=Sa(i,n,e+1/3),a=Sa(i,n,e),s=Sa(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Oa(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ja(e){return(parseFloat(e)%360+360)%360/360}function Fa(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ka(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Da(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=xa.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ko&&void 0!==Ko[e]?Ko[e]:(t=ma.exec(e))?(Oa(t[1])<<24|Oa(t[2])<<16|Oa(t[3])<<8|255)>>>0:(t=ga.exec(e))?(Oa(t[1])<<24|Oa(t[2])<<16|Oa(t[3])<<8|Fa(t[4]))>>>0:(t=ba.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=$a.exec(e))?parseInt(t[1],16)>>>0:(t=wa.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ya.exec(e))?(255|_a(ja(t[1]),ka(t[2]),ka(t[3])))>>>0:(t=va.exec(e))?(_a(ja(t[1]),ka(t[2]),ka(t[3]))|Fa(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Ma=(e,t,r)=>{if(Wo.fun(e))return e;if(Wo.arr(e))return Ma({range:e,output:t,extrapolate:r});if(Wo.str(e.output[0]))return Go(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};const Ba=1.70158,Pa=1.525*Ba,Aa=Ba+1,Ca=2*Math.PI/3,Ea=2*Math.PI/4.5,Ta=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ia={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Aa*e*e*e-Ba*e*e,easeOutBack:e=>1+Aa*Math.pow(e-1,3)+Ba*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Pa)/2:(Math.pow(2*e-2,2)*((Pa+1)*(2*e-2)+Pa)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ca),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ca)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ea)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ea)/2+1,easeInBounce:e=>1-Ta(1-e),easeOutBounce:Ta,easeInOutBounce:e=>e<.5?(1-Ta(1-2*e))/2:(1+Ta(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function za(){return za=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},za.apply(this,arguments)}const Na=Symbol.for("FluidValue.get"),Ha=Symbol.for("FluidValue.observers"),La=e=>Boolean(e&&e[Na]),Ra=e=>e&&e[Na]?e[Na]():e,Wa=e=>e[Ha]||null;function Va(e,t){let r=e[Ha];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Ya{constructor(e){if(this[Na]=void 0,this[Ha]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");qa(this,e)}}const qa=(e,t)=>Za(e,Na,t);function Ua(e,t){if(e[Na]){let r=e[Ha];r||Za(e,Ha,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Qa(e,t){let r=e[Ha];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ha]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const Za=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Xa=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ga=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ja=new RegExp(`(${Xa.source})(%|[a-z]+)`,"i"),Ka=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,es=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ts=e=>{const[t,r]=rs(e);if(!t||Xo())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&es.test(r)?ts(r):r||e},rs=e=>{const t=es.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let ns;const is=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,os=e=>{ns||(ns=Ko?new RegExp(`(${Object.keys(Ko).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ra(e).replace(es,ts).replace(Ga,Da).replace(ns,Da))),r=t.map((e=>e.match(Xa).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ma(za({},e,{output:t}))));return e=>{var r;const i=!Ja.test(t[0])&&(null==(r=t.find((e=>Ja.test(e))))?void 0:r.replace(Xa,""));let o=0;return t[0].replace(Xa,(()=>`${n[o++](e)}${i||""}`)).replace(Ka,is)}},as="react-spring: ",ss=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${as}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ls=ss(console.warn);const cs=ss(console.warn);function us(e){return Wo.str(e)&&("#"==e[0]||/\d/.test(e)||!Xo()&&es.test(e)||e in(Ko||{}))}const ds=Xo()?h:f,hs=()=>{const e=m(!1);return ds((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function fs(){const e=p()[1],t=hs();return()=>{t.current&&e(Math.random())}}const ps=e=>h(e,ms),ms=[];function gs(e){const t=m();return h((()=>{t.current=e})),t.current}const ys=Symbol.for("Animated:node"),vs=e=>e&&e[ys],bs=(e,t)=>{return r=e,n=ys,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},ws=e=>e&&e[ys]&&e[ys].getPayload();class xs{constructor(){this.payload=void 0,bs(this,this)}getPayload(){return this.payload||[]}}class $s extends xs{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Wo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new $s(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Wo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Wo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class Ss extends $s{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Ma({output:[e,e]})}static create(e){return new Ss(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Wo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ma({output:[this.getValue(),e]})),this._value=0,super.reset()}}const _s={dependencies:null};class Os extends xs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return qo(this.source,((r,n)=>{var i;(i=r)&&i[ys]===i?t[n]=r.getValue(e):La(r)?t[n]=Ra(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Yo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return qo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){_s.dependencies&&La(e)&&_s.dependencies.add(e);const t=ws(e);t&&Yo(t,(e=>this.add(e)))}}class js extends Os{constructor(e){super(e)}static create(e){return new js(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Fs)),!0)}}function Fs(e){return(us(e)?Ss:$s).create(e)}function ks(e){const t=vs(e);return t?t.constructor:Wo.arr(e)?js:us(e)?Ss:$s}function Ds(){return Ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ds.apply(this,arguments)}const Ms=(e,t)=>{const r=!Wo.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((n,i)=>{const o=m(null),a=r&&y((e=>{o.current=function(e,t){e&&(Wo.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[s,l]=function(e,t){const r=new Set;_s.dependencies=r,e.style&&(e=Ds({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Os(e),_s.dependencies=null,[e,r]}(n,t),c=fs(),d=()=>{const e=o.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,s.getValue(!0)))&&c()},f=new Bs(d,l),p=m();ds((()=>(p.current=f,Yo(l,(e=>Ua(e,f))),()=>{p.current&&(Yo(p.current.deps,(e=>Qa(e,p.current))),Oo.cancel(p.current.update))}))),h(d,[]),ps((()=>()=>{const e=p.current;Yo(e.deps,(t=>Qa(t,e)))}));const g=t.getComponentProps(s.getValue());return u.createElement(e,Ds({},g,{ref:a}))}))};class Bs{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Oo.write(this.update)}}const Ps=Symbol.for("AnimatedComponent"),As=e=>Wo.str(e)?e:e&&Wo.str(e.displayName)?e.displayName:Wo.fun(e)&&e.name||null;function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Cs.apply(this,arguments)}function Es(e,...t){return Wo.fun(e)?e(...t):e}const Ts=(e,t)=>!0===e||!!(t&&e&&(Wo.fun(e)?e(t):Uo(e).includes(t))),Is=(e,t)=>Wo.obj(e)?t&&e[t]:e,zs=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ns=e=>e,Hs=(e,t=Ns)=>{let r=Ls;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Wo.und(r)||(n[i]=r)}return n},Ls=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Rs={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ws(e){const t=function(e){const t={};let r=0;if(qo(e,((e,n)=>{Rs[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return qo(e,((e,n)=>n in t||(r[n]=e))),r}return Cs({},e)}function Vs(e){return e=Ra(e),Wo.arr(e)?e.map(Vs):us(e)?ra.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ys(e){return Wo.fun(e)||Wo.arr(e)&&Wo.obj(e[0])}const qs=Cs({},{tension:170,friction:26},{mass:1,damping:1,easing:Ia.linear,clamp:!1});class Us{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,qs)}}function Qs(e,t){if(Wo.und(t.decay)){const r=!Wo.und(t.tension)||!Wo.und(t.friction);!r&&Wo.und(t.frequency)&&Wo.und(t.damping)&&Wo.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const Zs=[];class Xs{constructor(){this.changed=!1,this.values=Zs,this.toValues=null,this.fromValues=Zs,this.to=void 0,this.from=void 0,this.config=new Us,this.immediate=!1}}function Gs(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=Ts(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(d)p();else{Wo.und(r.pause)||(i.paused=Ts(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=i.paused||Ts(e,t)),c=Es(r.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-Oo.now()}function f(){c>0&&!ra.skipAnimation?(i.delayed=!0,u=Oo.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(Cs({},r,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Js=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?tl(e.get()):t.every((e=>e.noop))?Ks(e.get()):el(e.get(),t.every((e=>e.finished))),Ks=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),el=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),tl=e=>({value:e,cancelled:!0,finished:!1});function rl(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Hs(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&tl(n)||i!==r.asyncId&&el(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new il,a=new ol;return(async()=>{if(ra.skipAnimation)throw nl(r),a.result=el(n,!1),d(a),a;f(o);const s=Wo.obj(e)?Cs({},e):Cs({},t,{to:e});s.parentId=i,qo(c,((e,t)=>{Wo.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let m;if(ra.skipAnimation)return nl(r),el(n,!1);try{let t;t=Wo.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(u),h]),m=el(n.get(),!0,!1)}catch(e){if(e instanceof il)m=e.result;else{if(!(e instanceof ol))throw e;m=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Wo.fun(a)&&Oo.batchedUpdates((()=>{a(m,n,n.item)})),m})():l}function nl(e,t){Qo(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class il extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ol extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const al=e=>e instanceof ll;let sl=1;class ll extends Ya{constructor(...e){super(...e),this.id=sl++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=vs(this);return e&&e.getValue()}to(...e){return ra.to(this,e)}interpolate(...e){return ls(`${as}The "interpolate" function is deprecated in v9 (use "to" instead)`),ra.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Va(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||sa.sort(this),Va(this,{type:"priority",parent:this,priority:e})}}const cl=Symbol.for("SpringPhase"),ul=e=>(1&e[cl])>0,dl=e=>(2&e[cl])>0,hl=e=>(4&e[cl])>0,fl=(e,t)=>t?e[cl]|=3:e[cl]&=-3,pl=(e,t)=>t?e[cl]|=4:e[cl]&=-5;class ml extends ll{constructor(e,t){if(super(),this.key=void 0,this.animation=new Xs,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Wo.und(e)||!Wo.und(t)){const r=Wo.obj(e)?Cs({},e):Cs({},t,{from:e});Wo.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(dl(this)||this._state.asyncTo)||hl(this)}get goal(){return Ra(this.animation.to)}get velocity(){const e=vs(this);return e instanceof $s?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return ul(this)}get isAnimating(){return dl(this)}get isPaused(){return hl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:i,toValues:o}=n;const a=ws(n.to);!a&&La(n.to)&&(o=Uo(Ra(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Ss?1:a?a[l].lastPosition:o[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=Wo.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Wo.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);d=r+o/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Wo.und(n),f=r==c?s.v0>0:r<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(a=-a*n,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*g,d+=a*g}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+i.easing(n)*(c-r),a=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(r=!0)}));const s=vs(this),l=s.getValue();if(t){const e=Ra(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Oo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(dl(this)){const{to:e,config:t}=this.animation;Oo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Wo.und(e)?(r=this.queue||[],this.queue=[]):r=[Wo.obj(e)?e:Cs({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>Js(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),nl(this._state,e&&this._lastCallId),Oo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Wo.obj(r)?r[t]:r,(null==r||Ys(r))&&(r=void 0),n=Wo.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return ul(this)||(e.reverse&&([r,n]=[n,r]),n=Ra(n),Wo.und(n)?vs(this)||this._set(r):this._set(n)),i}_update(e,t){let r=Cs({},e);const{key:n,defaultProps:i}=this;r.default&&Object.assign(i,Hs(r,((e,t)=>/^on/.test(t)?Is(e,n):e))),$l(this,r,"onProps"),Sl(this,"onProps",r,this);const o=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Gs(++this._lastCallId,{key:n,props:r,defaultProps:i,state:a,actions:{pause:()=>{hl(this)||(pl(this,!0),Zo(a.pauseQueue),Sl(this,"onPause",el(this,gl(this,this.animation.to)),this))},resume:()=>{hl(this)&&(pl(this,!1),dl(this)&&this._resume(),Zo(a.resumeQueue),Sl(this,"onResume",el(this,gl(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=yl(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(tl(this));const n=!Wo.und(e.to),i=!Wo.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(tl(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||n||t.default&&!Wo.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Vo(d,c);h&&(s.from=d),d=Ra(d);const f=!Vo(u,l);f&&this._focus(u);const p=Ys(t.to),{config:m}=s,{decay:g,velocity:y}=m;(n||i)&&(m.velocity=0),t.config&&!p&&function(e,t,r){r&&(Qs(r=Cs({},r),t),t=Cs({},r,t)),Qs(e,t),Object.assign(e,t);for(const t in qs)null==e[t]&&(e[t]=qs[t]);let{mass:n,frequency:i,damping:o}=e;Wo.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*n,e.friction=4*Math.PI*o*n/i)}(m,Es(t.config,o),t.config!==a.config?Es(a.config,o):void 0);let v=vs(this);if(!v||Wo.und(u))return r(el(this,!0));const b=Wo.und(t.reset)?i&&!t.default:!Wo.und(d)&&Ts(t.reset,o),w=b?d:this.get(),x=Vs(u),$=Wo.num(x)||Wo.arr(x)||us(x),S=!p&&(!$||Ts(a.immediate||t.immediate,o));if(f){const e=ks(u);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(x)}}const _=v.constructor;let O=La(u),j=!1;if(!O){const e=b||!ul(this)&&h;(f||e)&&(j=Vo(Vs(w),x),O=!j),(Vo(s.immediate,S)||S)&&Vo(m.decay,g)&&Vo(m.velocity,y)||(O=!0)}if(j&&dl(this)&&(s.changed&&!b?O=!0:O||this._stop(l)),!p&&((O||La(l))&&(s.values=v.getPayload(),s.toValues=La(u)?null:_==Ss?[1]:Uo(x)),s.immediate!=S&&(s.immediate=S,S||b||this._set(l)),O)){const{onRest:e}=s;Yo(xl,(e=>$l(this,t,e)));const n=el(this,gl(this,l));Zo(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Oo.batchedUpdates((()=>{s.changed=!b,null==e||e(n,this),b?Es(a.onRest,n):null==s.onStart||s.onStart(n,this)}))}b&&this._set(w),p?r(rl(t.to,t,this._state,this)):O?this._start():dl(this)&&!f?this._pendingCalls.add(r):r(Ks(w))}_focus(e){const t=this.animation;e!==t.to&&(Wa(this)&&this._detach(),t.to=e,Wa(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;La(t)&&(Ua(t,this),al(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;La(e)&&Qa(e,this)}_set(e,t=!0){const r=Ra(e);if(!Wo.und(r)){const e=vs(this);if(!e||!Vo(r,e.getValue())){const n=ks(r);e&&e.constructor==n?e.setValue(r):bs(this,n.create(r)),e&&Oo.batchedUpdates((()=>{this._onChange(r,t)}))}}return vs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Sl(this,"onStart",el(this,gl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Es(this.animation.onChange,e,this)),Es(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;vs(this).reset(Ra(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),dl(this)||(fl(this,!0),hl(this)||this._resume())}_resume(){ra.skipAnimation?this.finish():sa.start(this)}_stop(e,t){if(dl(this)){fl(this,!1);const r=this.animation;Yo(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Va(this,{type:"idle",parent:this});const n=t?tl(this.get()):el(this.get(),gl(this,null!=e?e:r.to));Zo(this._pendingCalls,n),r.changed&&(r.changed=!1,Sl(this,"onRest",n,this))}}}function gl(e,t){const r=Vs(t);return Vo(Vs(e.get()),r)}function yl(e,t=e.loop,r=e.to){let n=Es(t);if(n){const i=!0!==n&&Ws(n),o=(i||e).reverse,a=!i||i.reset;return vl(Cs({},e,{loop:t,default:!1,pause:void 0,to:!o||Ys(r)?r:void 0,from:a?e.from:void 0,reset:a},i))}}function vl(e){const{to:t,from:r}=e=Ws(e),n=new Set;return Wo.obj(t)&&wl(t,n),Wo.obj(r)&&wl(r,n),e.keys=n.size?Array.from(n):null,e}function bl(e){const t=vl(e);return Wo.und(t.default)&&(t.default=Hs(t)),t}function wl(e,t){qo(e,((e,r)=>null!=e&&t.add(r)))}const xl=["onStart","onRest","onChange","onPause","onResume"];function $l(e,t,r){e.animation[r]=t[r]!==zs(t,r)?Is(t[r],e.key):void 0}function Sl(e,t,...r){var n,i,o,a;null==(n=(i=e.animation)[t])||n.call(i,...r),null==(o=(a=e.defaultProps)[t])||o.call(a,...r)}const _l=["onStart","onChange","onRest"];let Ol=1;class jl{constructor(e,t){this.id=Ol++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Cs({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Wo.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(vl(e)),this}start(e){let{queue:t}=this;return e?t=Uo(e).map(vl):this.queue=[],this._flush?this._flush(this,t):(Al(this,t),Fl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Yo(Uo(t),(t=>r[t].stop(!!e)))}else nl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Wo.und(e))this.start({pause:!0});else{const t=this.springs;Yo(Uo(e),(e=>t[e].pause()))}return this}resume(e){if(Wo.und(e))this.start({pause:!1});else{const t=this.springs;Yo(Uo(e),(e=>t[e].resume()))}return this}each(e){qo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Qo(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&Qo(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Qo(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Oo.onFrame(this._onFrame)}}function Fl(e,t){return Promise.all(t.map((t=>kl(e,t)))).then((t=>Js(e,t)))}async function kl(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Wo.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Wo.arr(i)||Wo.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Yo(_l,(r=>{const n=t[r];if(Wo.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Zo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===zs(t,"cancel");(u||f&&d.asyncId)&&h.push(Gs(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ro,resume:Ro,start(t,r){f?(nl(d,e._lastAsyncId),r(tl(e))):(t.onRest=s,r(rl(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Js(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=yl(t,a,i);if(r)return Al(e,[r]),kl(e,r,!0)}return l&&Oo.batchedUpdates((()=>l(p,e,e.item))),p}function Dl(e,t){const r=Cs({},e.springs);return t&&Yo(Uo(t),(e=>{Wo.und(e.keys)&&(e=vl(e)),Wo.obj(e.to)||(e=Cs({},e,{to:void 0})),Pl(r,e,(e=>Bl(e)))})),Ml(e,r),r}function Ml(e,t){qo(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Ua(t,e))}))}function Bl(e,t){const r=new ml;return r.key=e,t&&Ua(r,t),r}function Pl(e,t,r){t.keys&&Yo(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Al(e,t){Yo(t,(t=>{Pl(e.springs,t,(t=>Bl(t,e)))}))}const Cl=["children"],El=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,Cl);const n=v(Tl),i=r.pause||!!n.pause,o=r.immediate||!!n.immediate;r=function(e,t){const[r]=p((()=>({inputs:t,result:e()}))),n=m(),i=n.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=r;return h((()=>{n.current=o,i==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:i,immediate:o})),[i,o]);const{Provider:a}=Tl;return u.createElement(a,{value:r},t)},Tl=(Il=El,zl={},Object.assign(Il,u.createContext(zl)),Il.Provider._context=Il,Il.Consumer._context=Il,Il);var Il,zl;El.Provider=Tl.Provider,El.Consumer=Tl.Consumer;const Nl=()=>{const e=[],t=function(t){cs(`${as}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Yo(e,((e,i)=>{if(Wo.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Yo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Yo(e,(e=>e.resume(...arguments))),this},t.set=function(t){Yo(e,(e=>e.set(t)))},t.start=function(t){const r=[];return Yo(e,((e,n)=>{if(Wo.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Yo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Yo(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Wo.fun(e)?e(r,t):e};return t._getProps=r,t};function Hl(e,t){const r=Wo.fun(e),[[n],i]=function(e,t,r){const n=Wo.fun(t)&&t;n&&!r&&(r=[]);const i=b((()=>n||3==arguments.length?Nl():void 0),[]),o=m(0),a=fs(),s=b((()=>({ctrls:[],queue:[],flush(e,t){const r=Dl(e,t);return o.current>0&&!s.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Fl(e,t):new Promise((n=>{Ml(e,r),s.queue.push((()=>{n(Fl(e,t))})),a()}))}})),[]),l=m([...s.ctrls]),c=[],u=gs(e)||0;function d(e,r){for(let i=e;i<r;i++){const e=l.current[i]||(l.current[i]=new jl(null,s.flush)),r=n?n(i,e):t[i];r&&(c[i]=bl(r))}}b((()=>{Yo(l.current.slice(e,u),(e=>{!function(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,d(u,e)}),[e]),b((()=>{d(0,Math.min(u,e))}),r);const h=l.current.map(((e,t)=>Dl(e,c[t]))),f=v(El),p=gs(f),g=f!==p&&function(e){for(const t in e)return!0;return!1}(f);ds((()=>{o.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],Yo(e,(e=>e()))),Yo(l.current,((e,t)=>{null==i||i.add(e),g&&e.start({default:f});const r=c[t];r&&(function(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ps((()=>()=>{Yo(s.ctrls,(e=>e.stop(!0)))}));const y=h.map((e=>Cs({},e)));return i?[y,i]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}let Ll;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Ll||(Ll={}));class Rl extends ll{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Ma(...t);const r=this._get(),n=ks(r);bs(this,n.create(r))}advance(e){const t=this._get();Vo(t,this.get())||(vs(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Vl(this._active)&&Yl(this)}_get(){const e=Wo.arr(this.source)?this.source.map(Ra):Uo(Ra(this.source));return this.calc(...e)}_start(){this.idle&&!Vl(this._active)&&(this.idle=!1,Yo(ws(this),(e=>{e.done=!1})),ra.skipAnimation?(Oo.batchedUpdates((()=>this.advance())),Yl(this)):sa.start(this))}_attach(){let e=1;Yo(Uo(this.source),(t=>{La(t)&&Ua(t,this),al(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Yo(Uo(this.source),(e=>{La(e)&&Qa(e,this)})),this._active.clear(),Yl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Uo(this.source).reduce(((e,t)=>Math.max(e,(al(t)?t.priority:0)+1)),0))}}function Wl(e){return!1!==e.idle}function Vl(e){return!e.size||Array.from(e).every(Wl)}function Yl(e){e.idle||(e.idle=!0,Yo(ws(e),(e=>{e.done=!0})),Va(e,{type:"idle",parent:e}))}function ql(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}ra.assign({createStringInterpolator:os,to:(e,t)=>new Rl(e,t)});const Ul=["style","children","scrollTop","scrollLeft","viewBox"],Ql=/^--/;function Zl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ql.test(e)||Gl.hasOwnProperty(e)&&Gl[e]?(""+t).trim():t+"px"}const Xl={};let Gl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Jl=["Webkit","Ms","Moz","O"];Gl=Object.keys(Gl).reduce(((e,t)=>(Jl.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Gl);const Kl=["x","y","z"],ec=/^(matrix|translate|scale|rotate|skew)/,tc=/^(translate)/,rc=/^(rotate|skew)/,nc=(e,t)=>Wo.num(e)&&0!==e?e+t:e,ic=(e,t)=>Wo.arr(e)?e.every((e=>ic(e,t))):Wo.num(e)?e===t:parseFloat(e)===t;class oc extends Os{constructor(e){let{x:t,y:r,z:n}=e,i=ql(e,Kl);const o=[],a=[];(t||r||n)&&(o.push([t||0,r||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>nc(e,"px"))).join(",")})`,ic(e,0)]))),qo(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(ec.test(t)){if(delete i[t],Wo.und(e))return;const r=tc.test(t)?"px":rc.test(t)?"deg":"";o.push(Uo(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${nc(i,r)})`,ic(i,0)]:e=>[`${t}(${e.map((e=>nc(e,r))).join(",")})`,ic(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new ac(o,a)),super(i)}}class ac extends Ya{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Yo(this.inputs,((r,n)=>{const i=Ra(r[0]),[o,a]=this.transforms[n](Wo.arr(i)?i:r.map(Ra));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Yo(this.inputs,(e=>Yo(e,(e=>La(e)&&Ua(e,this)))))}observerRemoved(e){0==e&&Yo(this.inputs,(e=>Yo(e,(e=>La(e)&&Qa(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Va(this,e)}}const sc=["scrollTop","scrollLeft"];ra.assign({batchedUpdates:x,createStringInterpolator:os,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const lc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Os(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=As(e)||"Anonymous";return(e=Wo.str(e)?o[e]||(o[e]=Ms(e,i)):e[Ps]||(e[Ps]=Ms(e,i))).displayName=`Animated(${t})`,e};return qo(e,((t,r)=>{Wo.arr(e)&&(r=As(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=n,c=ql(n,Ul),u=Object.values(c),d=Object.keys(c).map((t=>r||e.hasAttribute(t)?t:Xl[t]||(Xl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const r=Zl(t,i[t]);Ql.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,u[r])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new oc(e),getComponentProps:e=>ql(e,sc)}),cc=lc.animated,uc=(e,t,r)=>t?ji(r,t)||ji(e,t):r||e,dc=(e,t)=>{const r=t||e.defaultValue;return ji(e.collections,r)};var hc;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(hc||(hc={}));const fc={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},pc=e=>t=>{const r=t.theme,n=dc(fc,r[hc.colorScheme]);return r.options&&r.options.color?uc(n,e,r.options.color):uc(n,e)},mc={Brand:{1:pc("Brand.1"),2:pc("Brand.2"),3:pc("Brand.3"),4:pc("Brand.4"),5:pc("Brand.5"),6:pc("Brand.6")},Primary:pc("Primary"),PrimaryDark:pc("PrimaryDark"),Secondary:pc("Secondary"),Accent:{Light:{1:pc("Accent.Light.1"),2:pc("Accent.Light.2"),3:pc("Accent.Light.3"),4:pc("Accent.Light.4"),5:pc("Accent.Light.5"),6:pc("Accent.Light.6")},Dark:{1:pc("Accent.Dark.1"),2:pc("Accent.Dark.2"),3:pc("Accent.Dark.3")}},Neutral:{1:pc("Neutral.1"),2:pc("Neutral.2"),3:pc("Neutral.3"),4:pc("Neutral.4"),5:pc("Neutral.5"),6:pc("Neutral.6"),7:pc("Neutral.7"),8:pc("Neutral.8")},Validation:{Green:{Text:pc("Validation.Green.Text"),Icon:pc("Validation.Green.Icon"),Border:pc("Validation.Green.Border"),Background:pc("Validation.Green.Background")},Orange:{Text:pc("Validation.Orange.Text"),Icon:pc("Validation.Orange.Icon"),Border:pc("Validation.Orange.Border"),Background:pc("Validation.Orange.Background"),Badge:pc("Validation.Orange.Badge")},Red:{Text:pc("Validation.Red.Text"),Icon:pc("Validation.Red.Icon"),Border:pc("Validation.Red.Border"),Background:pc("Validation.Red.Background")},Blue:{Text:pc("Validation.Blue.Text"),Icon:pc("Validation.Blue.Icon"),Border:pc("Validation.Blue.Border"),Background:pc("Validation.Blue.Background")}},Shadow:{Accent:pc("Shadow.Accent"),Red:pc("Shadow.Red"),Elevation:pc("Shadow.Elevation")}},gc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},yc=e=>Object.keys(gc).reduce(((t,r)=>{const n=gc[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),vc=yc("max-width"),bc=(yc("min-width"),$.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),wc=S`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,xc=$.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||mc.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${wc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,$c=$(xc)`
    animation-delay: -0.45s;
`,Sc=$(xc)`
    animation-delay: -0.3s;
`,_c=$(xc)`
    animation-delay: -0.15s;
`,Oc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},jc={collections:{base:{D1:{fontFamily:Oc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Oc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Oc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Oc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Oc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Oc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Oc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Oc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Oc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Oc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Oc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Oc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Fc=e=>t=>{const r=t.theme,n=dc(jc,r[hc.textStyleScheme]);return r.options&&r.options.textStyle?uc(n,e,r.options.textStyle):uc(n,e)},kc={D1:{fontFamily:Fc("D1.fontFamily"),fontSize:Fc("D1.fontSize"),fontWeight:Fc("D1.fontWeight"),lineHeight:Fc("D1.lineHeight"),letterSpacing:Fc("D1.letterSpacing")},D2:{fontFamily:Fc("D2.fontFamily"),fontSize:Fc("D2.fontSize"),fontWeight:Fc("D2.fontWeight"),lineHeight:Fc("D2.lineHeight"),letterSpacing:Fc("D2.letterSpacing")},D3:{fontFamily:Fc("D3.fontFamily"),fontSize:Fc("D3.fontSize"),fontWeight:Fc("D3.fontWeight"),lineHeight:Fc("D3.lineHeight"),letterSpacing:Fc("D3.letterSpacing")},D4:{fontFamily:Fc("D4.fontFamily"),fontSize:Fc("D4.fontSize"),fontWeight:Fc("D4.fontWeight"),lineHeight:Fc("D4.lineHeight"),letterSpacing:Fc("D4.letterSpacing")},DBody:{fontFamily:Fc("DBody.fontFamily"),fontSize:Fc("DBody.fontSize"),fontWeight:Fc("DBody.fontWeight"),lineHeight:Fc("DBody.lineHeight"),letterSpacing:Fc("DBody.letterSpacing")},H1:{fontFamily:Fc("H1.fontFamily"),fontSize:Fc("H1.fontSize"),fontWeight:Fc("H1.fontWeight"),lineHeight:Fc("H1.lineHeight"),letterSpacing:Fc("H1.letterSpacing")},H2:{fontFamily:Fc("H2.fontFamily"),fontSize:Fc("H2.fontSize"),fontWeight:Fc("H2.fontWeight"),lineHeight:Fc("H2.lineHeight"),letterSpacing:Fc("H2.letterSpacing")},H3:{fontFamily:Fc("H3.fontFamily"),fontSize:Fc("H3.fontSize"),fontWeight:Fc("H3.fontWeight"),lineHeight:Fc("H3.lineHeight"),letterSpacing:Fc("H3.letterSpacing")},H4:{fontFamily:Fc("H4.fontFamily"),fontSize:Fc("H4.fontSize"),fontWeight:Fc("H4.fontWeight"),lineHeight:Fc("H4.lineHeight"),letterSpacing:Fc("H4.letterSpacing")},H5:{fontFamily:Fc("H5.fontFamily"),fontSize:Fc("H5.fontSize"),fontWeight:Fc("H5.fontWeight"),lineHeight:Fc("H5.lineHeight"),letterSpacing:Fc("H5.letterSpacing")},H6:{fontFamily:Fc("H6.fontFamily"),fontSize:Fc("H6.fontSize"),fontWeight:Fc("H6.fontWeight"),lineHeight:Fc("H6.lineHeight"),letterSpacing:Fc("H6.letterSpacing")},Body:{fontFamily:Fc("Body.fontFamily"),fontSize:Fc("Body.fontSize"),fontWeight:Fc("Body.fontWeight"),lineHeight:Fc("Body.lineHeight"),letterSpacing:Fc("Body.letterSpacing")},BodySmall:{fontFamily:Fc("BodySmall.fontFamily"),fontSize:Fc("BodySmall.fontSize"),fontWeight:Fc("BodySmall.fontWeight"),lineHeight:Fc("BodySmall.lineHeight"),letterSpacing:Fc("BodySmall.letterSpacing")},XSmall:{fontFamily:Fc("XSmall.fontFamily"),fontSize:Fc("XSmall.fontSize"),fontWeight:Fc("XSmall.fontWeight"),lineHeight:Fc("XSmall.lineHeight"),letterSpacing:Fc("XSmall.letterSpacing")}},Dc=e=>{switch(e){case 700:case"bold":return Oc.Bold;case 600:case"semibold":return Oc.Semibold;case 300:case"light":return Oc.Light;case 400:case"regular":return Oc.Regular;default:return""}},Mc=(e,t)=>r=>{var n;const i=kc[e].fontFamily(r),o=kc[e].fontWeight(r);return Object.values(Oc).includes(i)?_`
                font-family: ${Dc(t)||Dc(o)||i};
                font-weight: normal !important;
            `:_`
            font-family: ${i};
            font-weight: ${null!==(n=Bc(t)||o)&&void 0!==n?n:"normal"};
        `},Bc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Pc=(e,t,r=!1)=>n=>{const i=kc[e],o=i.fontSize(n);return _`
            ${Mc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${_`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Ac=(e=!1,t=!1)=>t?_`
            display: block;
        `:e?_`
            display: inline;
        `:_`
            display: block;
        `;var Cc;!function(e){e.D1=$.h1`
        ${e=>_`
                ${Pc("D1",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.D2=$.h1`
        ${e=>_`
                ${Pc("D2",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.D3=$.h1`
        ${e=>_`
                ${Pc("D3",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.D4=$.h1`
        ${e=>_`
                ${Pc("D4",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.DBody=$.h1`
        ${e=>_`
                ${Pc("DBody",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.H1=$.h1`
        ${e=>_`
                ${Pc("H1",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.H2=$.h2`
        ${e=>_`
                ${Pc("H2",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.H3=$.h3`
        ${e=>_`
                ${Pc("H3",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.H4=$.h4`
        ${e=>_`
                ${Pc("H4",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.H5=$.h5`
        ${e=>_`
                ${Pc("H5",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.H6=$.h6`
        ${e=>_`
                ${Pc("H6",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.Body=$.p`
        ${e=>_`
                ${Pc("Body",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=$.p`
        ${e=>_`
                ${Pc("BodySmall",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.XSmall=$.span`
        ${e=>_`
                ${Pc("XSmall",e.weight,e.paragraph)}
                color: ${mc.Neutral[1]};
                ${Ac(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Ic(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ic(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Cc||(Cc={}));const Ec=$.a`
    ${e=>_`
            ${Pc(e.textStyle,e.weight)}
            color: ${mc.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${mc.Secondary};

                svg {
                    color: ${mc.Secondary};
                }
            }
        `}
`,Tc=$(O)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ic=r=>{var{external:n=!1,children:i}=r,o=C(r,["external","children"]);return e(Ec,Object.assign({},o,{children:[i,n&&t(Tc,{})]}))};var zc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(zc||(zc={}));const Nc=$.button`
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
                    background-color: ${mc.Neutral[8](e)};
                    border: 1px solid ${mc.Primary(e)};

                    span {
                        color: ${mc.Primary(e)};
                    }
                `;case"light":return _`
                    background-color: ${mc.Neutral[8](e)};
                    border: 1px solid ${mc.Neutral[5](e)};

                    span {
                        color: ${mc.Primary(e)};
                    }
                `;case"disabled":return _`
                    background-color: ${mc.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${mc.Neutral[3](e)};
                    }
                `;case"link":return _`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${mc.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${mc.Secondary};
                        }
                    }
                `;default:return _`
                    background-color: ${mc.Primary(e)};
                    border: 1px solid transparent;

                    ${vc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${mc.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?_`
                    height: 2.5rem;
                    span {
                        ${Pc("H5","semibold")}
                    }

                    ${vc.mobileS} {
                        height: auto;
                    }
                `:_`
                    height: 3rem;
                    span {
                        ${Pc("H4","semibold")}
                    }

                    ${vc.mobileS} {
                        height: auto;
                    }
                `}
`,Hc=$((({color:r,className:n,size:i=18})=>e(bc,Object.assign({className:n,$size:i,$color:r},{children:[t(xc,{id:"inner1",$size:i-2,$borderWidth:2}),t($c,{id:"inner2",$size:i-2,$borderWidth:2}),t(Sc,{id:"inner3",$size:i-2,$borderWidth:2}),t(_c,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=mc.Primary(e);break;case"disabled":t=mc.Neutral[3](e);break;default:t=mc.Neutral[8](e)}return _`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Lc;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(Lc||(Lc={}));const Rc=$.div`
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
    border: 1px solid ${mc.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,r;return e.selected&&(t=mc.Primary(e),r=mc.Primary(e)),e.disabled&&(t=mc.Neutral[6](e),r=mc.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${r};\n\t\t`}}
`,Wc=$.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Vc=$(F)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return _`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?mc.Neutral[4]:mc.Neutral[8]};
`,Yc=$(cc.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,qc=$.ul`
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
        background: ${mc.Neutral[4]};
        border-right: 5px solid ${mc.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${vc.mobileL} {
        max-height: 15rem;
    }
`,Uc=$.li`
    :hover,
    :focus,
    :active {
        background: ${mc.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return _`
                background: ${mc.Accent.Light[5]};
            `}}
`,Qc=$.button`
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
        outline-color: ${mc.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,Zc=_`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Xc=$.div`
    ${Pc("Body","regular")}
    color: ${mc.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Zc}
`,Gc=$.div`
    color: ${mc.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Zc}

    ${e=>"next-line"===e.$labelDisplayType?_`
                    ${Pc("BodySmall","semibold")}
                `:_`
                    ${Pc("Body","regular")}
                `}
`,Jc=$.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return _`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return _`
                    ${Xc} {
                        display: inline;
                    }

                    ${Gc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Kc=$.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,eu=$.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,tu=$((r=>{var{className:n,checked:i,disabled:o,onChange:a,onKeyPress:s,displaySize:l="default"}=r,c=C(r,["className","checked","disabled","onChange","onKeyPress","displaySize"]);const[u,d]=p(i);h((()=>{d(i)}),[i]);const f=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;a&&a(e),s&&s(t)}};return e(Rc,Object.assign({selected:u,disabled:o,className:n,"data-testid":"checkbox",$displaySize:l,role:"checkbox","aria-checked":u,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:f},{children:[t(Wc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:f,disabled:o,checked:u},c)),u&&t(Vc,{id:"checkmark","data-testid":"checkmark",disabled:o,$displaySize:l})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,ru=$.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,nu=$.button`
    ${Pc("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${mc.Primary(e)};\n\t\t`}
`,iu=$.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,ou=$(Cc.Body)``,au=$(j)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${mc.Validation.Red.Icon};
`,su=$.button`
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
                background-color: ${mc.Neutral[7]};
            `}
    }
`,lu=d.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=C(e,["children","focusHighlight","focusOutline","type"]);return t(su,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))})),cu={collections:{base:{InputBoxShadow:_`
        inset 0 0 6px 1px ${mc.Shadow.Accent}
    `,InputErrorBoxShadow:_`
        inset 0 0 6px 1px ${mc.Shadow.Red}
    `,ElevationBoxShadow:_`
      0px 2px 8px ${mc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:_`
        inset 0 0 6px 1px ${mc.Shadow.Accent}
    `,InputErrorBoxShadow:_`
        inset 0 0 6px 1px ${mc.Shadow.Red}
    `,ElevationBoxShadow:_`
      0px 2px 8px ${mc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},uu=e=>t=>{var r;const n=t.theme,i=dc(cu,n[hc.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?uc(i,e,n.options.designToken):uc(i,e)},du=uu("InputBoxShadow"),hu=uu("InputErrorBoxShadow"),fu=(uu("ElevationBoxShadow"),uu("Table.Header"),uu("Table.Cell.Primary"),uu("Table.Cell.Secondary"),uu("Table.Cell.Selected"),uu("Table.Cell.Hover"),$.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${mc.Neutral[5]};
    border-radius: 4px;
    background: ${mc.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${mc.Accent.Light[1]};
        box-shadow: ${du};
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
                background: ${mc.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${mc.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?_`
                border: 1px solid ${mc.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${mc.Validation.Red.Border};
                    box-shadow: ${hu};
                }
            `:void 0}
`),pu=$.input`
    ${Pc("Body","regular")}
    color: ${mc.Neutral[1]};
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
        color: ${mc.Neutral[3]};
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
`,mu=$.li`
    background: ${mc.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,gu=$(pu)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,yu=$(D)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${mc.Neutral[3]};
`,vu=$(lu)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${mc.Neutral[3]};
    cursor: pointer;
`,bu=$(k)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${mc.Neutral[3]};
`,wu=g(((r,n)=>{const{onClear:i}=r,o=C(r,["onClear"]);return e(mu,{children:[t(yu,{}),t(gu,Object.assign({ref:n},o)),o.value&&t(vu,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(bu,{})}))]},"search")})),xu=n=>{var{listItems:i,listExtractor:o,valueExtractor:a,onSelectItem:s,listStyleWidth:l,visible:c,enableSearch:u,searchPlaceholder:d="Search",onSearch:f,searchFunction:g,onDismiss:y,disableItemFocus:v,multiSelect:b,selectedItems:w,onSelectAll:x,onRetry:$,itemsLoadState:S="success",itemTruncationType:_="end",itemMaxLines:O=2,labelDisplayType:j="inline",renderListItem:F,onBlur:k,hideNoResultsDisplay:D,renderCustomCallToAction:M}=n,B=C(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[P,A]=p(0),[E,T]=p(""),[I,z]=p(i),[N,H]=p(0),L=Hl({height:N}),R=m(),W=m(),V=m([]),Y=m(),q=m(),U=m(P),Q=m(I),Z=e=>{U.current=e,A(e)},X=e=>{Q.current=e,z(e)};h((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),h((()=>{ee(E)}),[E]),h((()=>{if(T(""),c){if(setTimeout((()=>{H(te())})),v)return;Y&&Y.current?(Y.current.focus(),Z(-1)):V.current[P]&&V.current[P].focus()}else H(0)}),[c]),h((()=>{if(c){const e=te();H(e)}}),[I,S]),h((()=>{X(i),T(""),Z(0)}),[i]);const G=e=>o?o(e):e.toString(),J=e=>{if("inline"!==j)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return Lc.getTextWidth(e,"1.125rem 'Open Sans'")>t*O},K=e=>!!xo(w,(t=>So(t,e))),ee=e=>{if(""===e)X(i);else if(g){const t=g(e);X(t)}else{const t=i.filter((t=>{var r;const n=G(t),i="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));X(t)}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(q.current?q.current.getBoundingClientRect().height:0),re=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(U.current<Q.current.length-1){const e=U.current+1;V.current[e].focus(),Z(e)}break;case"ArrowUp":if(U.current>0){const e=U.current-1;V.current[e].focus(),Z(U.current-1)}break;case"Escape":y&&y(!0)}},ne=(e,t)=>{e.preventDefault(),s&&s(t,(e=>a?a(e):e)(t))},ie=e=>{const t=e.target.value;T(t),f&&f()},oe=()=>{T(""),Y.current.focus(),f&&f()},ae=()=>{$&&$()},se=()=>{k&&k()},le=n=>e(r,{children:[t(Kc,Object.assign({$maxLines:O,"aria-hidden":!0},{children:n})),t(eu,Object.assign({$maxLines:O,"aria-hidden":!0},{children:n}))]}),ce=r=>{const n=G(r),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel,a=J(i),s=o&&J(o),l=a||s?"next-line":j;return e(Jc,Object.assign({$labelDisplayType:l},{children:[t(Xc,Object.assign({$truncateType:_,$maxLines:O,"aria-label":i},{children:"middle"===_&&a?le(i):i})),o&&t(Gc,Object.assign({$truncateType:_,$maxLines:O,$labelDisplayType:j,"aria-label":o},{children:"middle"===_&&s?le(o):o}))]}))},ue=()=>{if(!$||$&&"success"===S)return I.map(((r,n)=>t(Uc,Object.assign({$checked:K(r)&&!b},{children:e(Qc,Object.assign({$hasNextLineLabel:"next-line"===j&&I.length>0&&o&&"string"!=typeof o(I[0]),onClick:e=>{ne(e,r)},ref:e=>V.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:c?0:-1,$multiSelect:b,onBlur:se},{children:[b&&t(tu,{checked:K(r),displaySize:"small"}),F?F(r,{selected:K(r)}):ce(r)]}))}),((e,t)=>`item_${t}__${a?a(e):e}`)(r,n))))},de=()=>{if(b&&I.length>0&&!E&&"success"===S)return t(ru,{children:t(nu,Object.assign({onClick:x,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!D&&(E||!u)&&0===I.length&&"success"===S)return e(iu,Object.assign({"data-testid":"list-no-results"},{children:[t(au,{"data-testid":"no-result-icon"}),t(ou,{children:"No results found."})]}),"noResults")},fe=()=>{if($&&"loading"===S)return e(iu,Object.assign({"data-testid":"list-loading"},{children:[t(Hc,{$buttonStyle:"secondary",size:24}),t(ou,{children:"Loading..."})]}),"loading")},pe=()=>{if($&&"fail"===S)return e(iu,Object.assign({"data-testid":"list-fail"},{children:[t(au,{"data-testid":"load-error-icon"}),t(ou,{children:"Failed to load."}),t(nu,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(Yc,Object.assign({style:L,"data-testid":c?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(c)return e(qc,Object.assign({ref:W,"data-testid":"dropdown-list",width:l,role:"list"},B,{children:[(u||g)&&"success"===S?t(wu,{ref:Y,onChange:ie,value:E,placeholder:d,"data-testid":"search-input","aria-label":"search-input",tabIndex:c?0:-1,onClear:oe}):null,de(),he(),fe(),pe(),ue()]}))})(),(()=>{if(c&&M)return t("div",Object.assign({ref:q,"data-testid":"custom-cta"},{children:M(y,I)}))})()]}))})},$u="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Su=$.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,_u=_`
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
        outline: 2px solid ${mc.Accent.Light[3]};
    }
`,Ou=$.button`
    ${_u}
    cursor: pointer;
`;$.div`
    ${_u}
`;const ju=S`
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
`,Fu=$.div`
    position: relative;
    border: 1px solid ${mc.Neutral[5]};
    border-radius: ${"4px"};
    background: ${mc.Neutral[8]};

    :focus-within {
        border: 1px solid ${mc.Accent.Light[1]};
        box-shadow: ${du};
    }

    ${e=>e.expanded?_`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:_`
                animation: ${ju} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?_`
                background: ${mc.Neutral[6](e)};

                ${Ou} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${mc.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?_`
                border: none;
                background: transparent !important;

                ${Ou} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?_`
                border: 1px solid ${mc.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${mc.Validation.Red.Border(e)};
                    box-shadow: ${hu};
                }
            `:void 0}
`,ku=$.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${$u};
    margin-left: 1rem;
`,Du=$(M)`
    color: ${mc.Neutral[3]};
    height: ${kc.Body.fontSize}rem;
    width: ${kc.Body.fontSize}rem;
`,Mu=$.div`
    height: 1px;
    background: ${mc.Neutral[5]};
    margin: 0 0.5rem;
`,Bu=$.div`
    display: flex;
    flex: 1;
`,Pu=$(Cc.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return _`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Au=$(Pu)`
    color: ${mc.Neutral[3]};
`,Cu=({children:e,show:r,error:n,disabled:i,testId:o,onBlur:a,readOnly:s})=>{const l=m();return((e,t,r="window",n)=>{const i=m();h((()=>{i.current=t}),[t]),h((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r])})("mousedown",(function(e){if(!i){if(l&&l.current.contains(e.target))return;r&&a()}}),"document"),t(Su,{children:t(Fu,Object.assign({ref:l,error:n&&!r,disabled:i,$readOnly:s,expanded:r,"data-testid":o},{children:e}))})},Eu=n=>{var{selectedOption:i,placeholder:o="Select",options:a,disabled:s,error:l,className:c,"data-testid":u,id:d,enableSearch:f=!1,searchFunction:g,searchPlaceholder:y,valueExtractor:v,valueToStringFunction:b,listExtractor:w,displayValueExtractor:x,onSelectOption:$,listStyleWidth:S,onShowOptions:_,onHideOptions:O,onRetry:j,optionsLoadState:F="success",optionTruncationType:k="end",renderCustomSelectedOption:D,renderListItem:M,hideNoResultsDisplay:B,renderCustomCallToAction:P}=n,A=C(n,["selectedOption","placeholder","options","disabled","error","className","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","hideNoResultsDisplay","renderCustomCallToAction"]);const[E,T]=p(i),[I,z]=p(!1),N=m(),H=m();h((()=>{T(i)}),[i]);const L=(e,t)=>{T(e),z(!1),V(!1),N&&N.current.focus(),$&&$(e,t)},R=e=>{I&&(z(!1),V(!1)),e&&N&&N.current.focus()},W=e=>{if("middle"===k){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),Lc.truncateOneLine((e=>"string"==typeof e?e:b(e)||e.toString())(e),t,120,8)}return e},V=e=>{!e&&O&&O(),e&&_&&_()};return e(Cu,Object.assign({className:c,show:I,error:l&&!I,disabled:s,readOnly:A.readOnly,testId:u,onBlur:()=>{z(!1),V(!1)}},{children:[t(Ou,Object.assign({ref:N,type:"button","data-testid":d||"selector",disabled:s,onClick:e=>{e.preventDefault(),s||A.readOnly||(z(!I),V(!I))}},A,{children:e(r,{children:[t(Bu,Object.assign({ref:H},{children:E?D?D(E):t(Pu,Object.assign({truncateType:k},{children:W(x?x(E):v?v(E):E.toString())})):t(Au,Object.assign({truncateType:k},{children:o}))})),!A.readOnly&&t(ku,Object.assign({expanded:I},{children:t(Du,{})}))]})})),I&&t(Mu,{}),a&&a.length>0?t(xu,{listItems:a,onSelectItem:L,onDismiss:R,valueExtractor:v,listExtractor:w,listStyleWidth:S,visible:I,enableSearch:f,searchPlaceholder:y,searchFunction:g,"data-testid":"dropdown-list",selectedItems:E?[E]:[],onRetry:j,itemsLoadState:F,itemTruncationType:k,renderListItem:M,hideNoResultsDisplay:B,renderCustomCallToAction:P}):null]}))},Tu={Default:d.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default"}=r,l=C(r,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default"};return e(Nc,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:o},c,l,{children:[a&&t(Hc,Object.assign({},c)),t("span",{children:i})]}))})),Small:d.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default"}=r,l=C(r,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small"};return e(Nc,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:o},c,l,{children:[a&&t(Hc,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))};var Iu={exports:{}};Iu.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(n),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,f=new Date,p=a||(i||o?1:f.getDate()),m=i||f.getFullYear(),g=0;i&&!o||(g=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,w+60*d.offset*1e3)):r?new Date(Date.UTC(m,g,p,y,v,b,w)):new Date(m,g,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var m=r.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var zu,Nu,Hu=Iu.exports,Lu={exports:{}},Ru=Lu.exports=(zu={year:0,month:1,day:2,hour:3,minute:4,second:5},Nu={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Nu[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Nu[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,u=zu[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=r(u).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),Wu={exports:{}};Wu.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var x=function(e){return e instanceof O},$=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),r&&(w[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!n&&i&&(b=i),i||!n&&b},S=function(e,t){if(x(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new O(r)},_=v;_.l=$,_.i=x,_.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function g(e){this.$L=$(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,r){return _.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!_.u(t)||t,u=_.p(e),f=function(e,t){var i=_.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return _.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return n?f(1,0):f(31,11);case c:return n?f(1,g):f(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return f(n?y-w:y+(6-w),g);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=_.p(e),u="set"+(this.$u?"UTC":""),f=(r={},r[s]=u+"Date",r[h]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[a]=u+"Hours",r[o]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(n,u){var h,f=this;n=Number(n);var p=_.p(u),m=function(e){var t=S(f);return _.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[o]=t,h[a]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*g;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},d=function(e){return _.s(o%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:u(r.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,l,2),ddd:u(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:_.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return n.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,m=_.p(h),g=S(n),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=_.m(this,g);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/r,p[o]=v/t,p[i]=v/e,p)[m]||v,f?b:_.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=$(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),j=O.prototype;return S.prototype=j,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){j[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,O,S),e.$i=!0),S},S.locale=$,S.isDayjs=x,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var Vu=Wu.exports,Yu={exports:{}};Yu.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var qu=Yu.exports,Uu={exports:{}};Uu.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Qu=Uu.exports,Zu={exports:{}};Zu.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Xu,Gu=Zu.exports;Vu.extend(qu),Vu.extend(Qu),Vu.extend(Gu),Vu.extend(Hu),Vu.extend(Ru),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Vu(t).startOf("week");return Ju(r).map((e=>Ku(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ku(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Vu(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Vu(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Vu(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")}}(Xu||(Xu={}));const Ju=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Ku=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},ed=[1,3,5,7,8,10,12],td=[4,6,9,11];var rd,nd;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":ed.includes(o)?Math.min(i,31).toString():td.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Vu(e,r);return Vu(t,r).diff(n,"minute")}}(rd||(rd={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(nd||(nd={}));const id=$.input`
    ${Pc("Body","regular")}
    color: ${mc.Neutral[1]};

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
        color: ${mc.Neutral[3]};
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
`,od=$.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${mc.Neutral[3]};
    background-color: transparent;
    border: none;
`,ad=$(k)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,sd=$.div`
    display: flex;
    width: 100%;
`,ld=d.forwardRef(((n,i)=>{var{value:o,spacing:a,type:s,error:l,disabled:c,readOnly:u,onChange:d,onClear:h,allowClear:f=!1,className:p,styleType:g="bordered"}=n,y=C(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=m();w(i,(()=>v.current),[]);const b=function({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),o=n.substring(0,r.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(l,l)}}}}({ref:v,formatter:e=>Lc.transformWithSpaces(e,a)}),x=e=>{d&&(S()?_(e):d(e))},$=()=>{h&&h(),v&&v.current&&v.current.focus()},S=()=>"tel"===s&&a,_=e=>{const{nextValue:t,updateCaretPosition:r}=b(),n=t.replace(/\s/g,"");e.target.value=n,d(e),r()},O=o?(e=>e?S()?Lc.transformWithSpaces(e,a):e:"")(o):o,j=()=>e(r,{children:[t(id,Object.assign({"data-testid":"input",ref:v,disabled:c,value:O,onChange:x,type:s,readOnly:u},y)),f&&!c&&!u&&!!o&&t(od,Object.assign({onClick:$,type:"button"},{children:t(ad,{"aria-hidden":!0})}))]});return t(r,{children:"no-border"===g?t(sd,Object.assign({className:p},{children:j()})):t(fu,Object.assign({$disabled:c,$error:l,$readOnly:u,className:p},{children:j()}))})})),cd=$.nav`
    display: flex;
`,ud=$.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${vc.tablet} {
        align-self: center;
    }
`,dd=$.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,hd=$(lu)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${mc.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${mc.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${mc.Accent.Light[1]};
    }
`,fd=$(lu)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${mc.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${mc.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${mc.Accent.Light[1]};
    }
    ${e=>"left"===e.$position?_`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:_`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${vc.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,pd=$(Tu.Default)`
    background: ${e=>e.$selected?mc.Primary:mc.Neutral[8]};
    border: 1px solid
        ${e=>e.$selected?mc.Primary:mc.Neutral[5]};
    color: ${e=>e.$selected?mc.Neutral[8]:mc.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${e=>e.$selected?mc.Neutral[8]:mc.Neutral[1]};
        ${e=>e.$selected?_`
                    ${Pc("Body",700)};
                `:_`
                    ${Pc("Body",400)};
                `}
    }
    :hover {
        box-shadow: none;

        background: ${e=>e.$selected?mc.Primary:mc.Accent.Light[5]};
        border: 1px solid
            ${e=>e.$selected?mc.Primary:mc.Accent.Light[5]};
        span {
            color: ${e=>e.$selected?mc.Neutral[8]:mc.Primary};
            ${e=>e.$selected?_`
                        ${Pc("Body",700)};
                    `:_`
                        ${Pc("Body",600)};
                    `}
        }
    }

    :active,
    :focus {
        background: ${e=>e.$selected?mc.Primary:mc.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${mc.Accent.Light[1]};
        span {
            color: ${e=>e.$selected?mc.Neutral[8]:mc.Primary};

            ${e=>e.$selected?_`
                        ${Pc("Body",700)};
                    `:_`
                        ${Pc("Body",400)};
                    `}
        }
    }
`;$(lu)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${mc.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${mc.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${mc.Accent.Light[1]};
    }
`;const md=$.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,gd=$.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${mc.Neutral[1]};

    display: flex;
    justify-content: center;
`,yd=$(Cc.Body)`
    white-space: nowrap;
`,vd=$(Cc.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,bd=$(ld)`
    ${Pc("Body",400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${mc.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${Pc("XSmall",400)};
        }
    }
`,wd=$.div`
    ${Pc("XSmall",400)};

    background-color: ${mc.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${mc.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,xd=$.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,$d=d.forwardRef((({id:r,"data-testid":u,className:d,pageSize:f=10,totalItems:m,activePage:g,pageSizeOptions:y=Sd,showFirstAndLastNav:v,showPageSizeChanger:b=!1,onPageChange:w,onPageSizeChange:x},$)=>{const S=A.exports.useMediaQuery({maxWidth:gc.mobileL}),_=y,[O,j]=p(!1),[F,k]=p(!1),[D,M]=p(""),[B,P]=p(_&&_.length>=1?_[0]:null),[C,E]=p(!S&&b&&B?B.value:f),T=Math.ceil(m/C),I=1===g,z=g===T,N=g>1?()=>U(1):void 0,H=g<T?()=>U(T):void 0,L=g>1?()=>U(g-1):void 0,R=g<T?()=>U(parseInt(g.toString())+1):void 0,W=e=>e?()=>ee():()=>J(),V=e=>e?()=>te():()=>K();h((()=>{g&&Y(g)}),[g]);const Y=e=>{M(e.toString())},q=()=>{j(!1),k(!1)},U=e=>{w&&(w(e),Y(e))},Q=()=>{const e=Math.min(T,g+5);U(e),Y(e),j(!0),k(!1)},Z=()=>{const e=Math.max(1,g-5);U(e),Y(e),j(!1),k(!0)},X=e=>{const t=e.target.value;if(void 0===t||0===t.length)M("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));Y(Math.max(1,Math.min(T,e)))}else M(t.replace(/[^0-9]/g,""))},G=e=>{e.preventDefault(),D&&w(parseInt(D))},J=()=>{j(!0)},K=()=>{j(!1)},ee=()=>{k(!0)},te=()=>{k(!1)},re=(r,o,a)=>e(md,{children:[t(hd,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":r?"Previous 5 pages":"Next 5 pages",onMouseOver:W(r),onMouseOut:V(r),onFocus:W(r),onBlur:V(r),onClick:r?Z:Q},{children:t(r&&F?n:o&&O?i:c,{"aria-hidden":!0})})),r&&F&&t(wd,{children:"Previous 5 pages"}),o&&O&&t(wd,{children:"Next 5 pages"})]},a);return e(cd,Object.assign({className:d,ref:$,id:r||"pagination-wrapper","data-testid":u||"pagination","aria-label":"Pagination"},{children:[t(ud,{children:e(dd,{children:[v&&t(fd,Object.assign({onClick:N,disabled:I,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:t(a,{"aria-hidden":!0})})),t(fd,Object.assign({onClick:L,disabled:I,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:t(o,{"aria-hidden":!0})})),S?e(gd,{children:[t("form",Object.assign({onSubmit:G},{children:t(bd,{value:D,onChange:X,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(u||"pagination")+"-input"})})),t(vd,{children:"/"}),t(yd,{children:T})]}):[...Array(T)].map(((e,r)=>{const n=r+1,i=T-5,o=g===n;if(T<=7)return t(pd,Object.assign({onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:q,onFocus:q},{children:n}),n);const a=g+1>5&&2===n,s=g-1<=i&&n===T-1-1;return a||s?re(a,s,n):n<=5&&g+1<=5||n<=1||n===g||n<=g+1&&n>=g-1-1||n>i&&g-1>i||n>T-1?t(pd,Object.assign({onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:q,onFocus:q},{children:n}),n):null})),t(fd,Object.assign({onClick:R,disabled:z,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:t(l,{"aria-hidden":!0})})),v&&t(fd,Object.assign({onClick:H,disabled:z,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:t(s,{"aria-hidden":!0})}))]})}),b&&!S&&t(xd,{children:t(Eu,{options:_,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:B,onSelectOption:e=>{P(e);const t=e.value,r=Math.ceil(m/t);E(t);x&&x(g>=r?r:g,t)}})})]}))})),Sd=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}];export{$d as Pagination};
//# sourceMappingURL=index.js.map
