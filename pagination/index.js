import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import{Chevron2LeftIcon as n}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as i}from"@lifesg/react-icons/chevron-2-right";import{ChevronLeftIcon as o}from"@lifesg/react-icons/chevron-left";import{ChevronLineLeftIcon as a}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as s}from"@lifesg/react-icons/chevron-line-right";import{ChevronRightIcon as l}from"@lifesg/react-icons/chevron-right";import{EllipsisHorizontalIcon as c}from"@lifesg/react-icons/ellipsis-horizontal";import*as u from"react";import d,{useEffect as h,useLayoutEffect as f,useState as p,useRef as m,forwardRef as g,useCallback as y,useContext as v,useMemo as b,useImperativeHandle as w}from"react";import{unstable_batchedUpdates as x}from"react-dom";import $,{keyframes as S,css as _}from"styled-components";import{ExternalIcon as O}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as F}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as D,SquareTickFillIcon as j,SquareFillIcon as k,SquareIcon as B}from"@lifesg/react-icons";import{CrossIcon as M}from"@lifesg/react-icons/cross";import{MagnifierIcon as C}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as A}from"@lifesg/react-icons/chevron-down";var E,P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},I={exports:{}};function T(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}E=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case c:case u:case i:case a:case o:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case n:return t}}}var x=c,$=u,S=l,_=s,O=r,F=d,D=i,j=m,k=p,B=n,M=a,C=o,A=h,E=!1;function P(e){return w(e)===u}t.AsyncMode=x,t.ConcurrentMode=$,t.ContextConsumer=S,t.ContextProvider=_,t.Element=O,t.ForwardRef=F,t.Fragment=D,t.Lazy=j,t.Memo=k,t.Portal=B,t.Profiler=M,t.StrictMode=C,t.Suspense=A,t.isAsyncMode=function(e){return E||(E=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),P(e)||w(e)===c},t.isConcurrentMode=P,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===o||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})(),I.exports=E(d);var z=function(){this.__data__=[],this.size=0};var H=function(e,t){return e===t||e!=e&&t!=t},L=H;var N=function(e,t){for(var r=e.length;r--;)if(L(e[r][0],t))return r;return-1},R=N,W=Array.prototype.splice;var V=N;var Y=N;var q=N;var Q=z,U=function(e){var t=this.__data__,r=R(t,e);return!(r<0)&&(r==t.length-1?t.pop():W.call(t,r,1),--this.size,!0)},Z=function(e){var t=this.__data__,r=V(t,e);return r<0?void 0:t[r][1]},G=function(e){return Y(this.__data__,e)>-1},X=function(e,t){var r=this.__data__,n=q(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function J(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}J.prototype.clear=Q,J.prototype.delete=U,J.prototype.get=Z,J.prototype.has=G,J.prototype.set=X;var K=J,ee=K;var te=function(){this.__data__=new ee,this.size=0};var re=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var ne=function(e){return this.__data__.get(e)};var ie=function(e){return this.__data__.has(e)},oe="object"==typeof P&&P&&P.Object===Object&&P,ae=oe,se="object"==typeof self&&self&&self.Object===Object&&self,le=ae||se||Function("return this")(),ce=le.Symbol,ue=ce,de=Object.prototype,he=de.hasOwnProperty,fe=de.toString,pe=ue?ue.toStringTag:void 0;var me=function(e){var t=he.call(e,pe),r=e[pe];try{e[pe]=void 0;var n=!0}catch(e){}var i=fe.call(e);return n&&(t?e[pe]=r:delete e[pe]),i},ge=Object.prototype.toString;var ye=me,ve=function(e){return ge.call(e)},be=ce?ce.toStringTag:void 0;var we=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":be&&be in Object(e)?ye(e):ve(e)};var xe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},$e=we,Se=xe;var _e,Oe=function(e){if(!Se(e))return!1;var t=$e(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Fe=le["__core-js_shared__"],De=(_e=/[^.]+$/.exec(Fe&&Fe.keys&&Fe.keys.IE_PROTO||""))?"Symbol(src)_1."+_e:"";var je=function(e){return!!De&&De in e},ke=Function.prototype.toString;var Be=function(e){if(null!=e){try{return ke.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Me=Oe,Ce=je,Ae=xe,Ee=Be,Pe=/^\[object .+?Constructor\]$/,Ie=Function.prototype,Te=Object.prototype,ze=Ie.toString,He=Te.hasOwnProperty,Le=RegExp("^"+ze.call(He).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ne=function(e){return!(!Ae(e)||Ce(e))&&(Me(e)?Le:Pe).test(Ee(e))},Re=function(e,t){return null==e?void 0:e[t]};var We=function(e,t){var r=Re(e,t);return Ne(r)?r:void 0},Ve=We(le,"Map"),Ye=We(Object,"create"),qe=Ye;var Qe=function(){this.__data__=qe?qe(null):{},this.size=0};var Ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ze=Ye,Ge=Object.prototype.hasOwnProperty;var Xe=function(e){var t=this.__data__;if(Ze){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ge.call(t,e)?t[e]:void 0},Je=Ye,Ke=Object.prototype.hasOwnProperty;var et=Ye;var tt=Qe,rt=Ue,nt=Xe,it=function(e){var t=this.__data__;return Je?void 0!==t[e]:Ke.call(t,e)},ot=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=et&&void 0===t?"__lodash_hash_undefined__":t,this};function at(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}at.prototype.clear=tt,at.prototype.delete=rt,at.prototype.get=nt,at.prototype.has=it,at.prototype.set=ot;var st=at,lt=K,ct=Ve;var ut=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var dt=function(e,t){var r=e.__data__;return ut(t)?r["string"==typeof t?"string":"hash"]:r.map},ht=dt;var ft=dt;var pt=dt;var mt=dt;var gt=function(){this.size=0,this.__data__={hash:new st,map:new(ct||lt),string:new st}},yt=function(e){var t=ht(this,e).delete(e);return this.size-=t?1:0,t},vt=function(e){return ft(this,e).get(e)},bt=function(e){return pt(this,e).has(e)},wt=function(e,t){var r=mt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function xt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}xt.prototype.clear=gt,xt.prototype.delete=yt,xt.prototype.get=vt,xt.prototype.has=bt,xt.prototype.set=wt;var $t=xt,St=K,_t=Ve,Ot=$t;var Ft=K,Dt=te,jt=re,kt=ne,Bt=ie,Mt=function(e,t){var r=this.__data__;if(r instanceof St){var n=r.__data__;if(!_t||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ot(n)}return r.set(e,t),this.size=r.size,this};function Ct(e){var t=this.__data__=new Ft(e);this.size=t.size}Ct.prototype.clear=Dt,Ct.prototype.delete=jt,Ct.prototype.get=kt,Ct.prototype.has=Bt,Ct.prototype.set=Mt;var At=Ct;var Et=$t,Pt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},It=function(e){return this.__data__.has(e)};function Tt(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Et;++t<r;)this.add(e[t])}Tt.prototype.add=Tt.prototype.push=Pt,Tt.prototype.has=It;var zt=Tt,Ht=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Lt=function(e,t){return e.has(t)};var Nt=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,f=2&r?new zt:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var p=e[d],m=t[d];if(n)var g=a?n(m,p,d,t,e,o):n(p,m,d,e,t,o);if(void 0!==g){if(g)continue;h=!1;break}if(f){if(!Ht(t,(function(e,t){if(!Lt(f,t)&&(p===e||i(p,e,r,n,o)))return f.push(t)}))){h=!1;break}}else if(p!==m&&!i(p,m,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Rt=le.Uint8Array,Wt=H,Vt=Nt,Yt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},qt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Qt=ce?ce.prototype:void 0,Ut=Qt?Qt.valueOf:void 0;var Zt=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Rt(e),new Rt(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Wt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Yt;case"[object Set]":var l=1&n;if(s||(s=qt),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=Vt(s(e),s(t),n,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Ut)return Ut.call(e)==Ut.call(t)}return!1};var Gt=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Xt=Array.isArray,Jt=Gt,Kt=Xt;var er=function(e,t,r){var n=t(e);return Kt(e)?n:Jt(n,r(e))};var tr=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},rr=function(){return[]},nr=Object.prototype.propertyIsEnumerable,ir=Object.getOwnPropertySymbols,or=ir?function(e){return null==e?[]:(e=Object(e),tr(ir(e),(function(t){return nr.call(e,t)})))}:rr;var ar=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var sr=function(e){return null!=e&&"object"==typeof e},lr=we,cr=sr;var ur=function(e){return cr(e)&&"[object Arguments]"==lr(e)},dr=sr,hr=Object.prototype,fr=hr.hasOwnProperty,pr=hr.propertyIsEnumerable,mr=ur(function(){return arguments}())?ur:function(e){return dr(e)&&fr.call(e,"callee")&&!pr.call(e,"callee")},gr={exports:{}};var yr=function(){return!1};!function(e,t){var r=le,n=yr,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(gr,gr.exports);var vr=/^(?:0|[1-9]\d*)$/;var br=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&vr.test(e))&&e>-1&&e%1==0&&e<t};var wr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},xr=we,$r=wr,Sr=sr,_r={};_r["[object Float32Array]"]=_r["[object Float64Array]"]=_r["[object Int8Array]"]=_r["[object Int16Array]"]=_r["[object Int32Array]"]=_r["[object Uint8Array]"]=_r["[object Uint8ClampedArray]"]=_r["[object Uint16Array]"]=_r["[object Uint32Array]"]=!0,_r["[object Arguments]"]=_r["[object Array]"]=_r["[object ArrayBuffer]"]=_r["[object Boolean]"]=_r["[object DataView]"]=_r["[object Date]"]=_r["[object Error]"]=_r["[object Function]"]=_r["[object Map]"]=_r["[object Number]"]=_r["[object Object]"]=_r["[object RegExp]"]=_r["[object Set]"]=_r["[object String]"]=_r["[object WeakMap]"]=!1;var Or=function(e){return Sr(e)&&$r(e.length)&&!!_r[xr(e)]};var Fr=function(e){return function(t){return e(t)}},Dr={exports:{}};!function(e,t){var r=oe,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Dr,Dr.exports);var jr=Or,kr=Fr,Br=Dr.exports,Mr=Br&&Br.isTypedArray,Cr=Mr?kr(Mr):jr,Ar=ar,Er=mr,Pr=Xt,Ir=gr.exports,Tr=br,zr=Cr,Hr=Object.prototype.hasOwnProperty;var Lr=function(e,t){var r=Pr(e),n=!r&&Er(e),i=!r&&!n&&Ir(e),o=!r&&!n&&!i&&zr(e),a=r||n||i||o,s=a?Ar(e.length,String):[],l=s.length;for(var c in e)!t&&!Hr.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Tr(c,l))||s.push(c);return s},Nr=Object.prototype;var Rr=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Nr)};var Wr=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Vr=Rr,Yr=Wr,qr=Object.prototype.hasOwnProperty;var Qr=Oe,Ur=wr;var Zr=function(e){return null!=e&&Ur(e.length)&&!Qr(e)},Gr=Lr,Xr=function(e){if(!Vr(e))return Yr(e);var t=[];for(var r in Object(e))qr.call(e,r)&&"constructor"!=r&&t.push(r);return t},Jr=Zr;var Kr=function(e){return Jr(e)?Gr(e):Xr(e)},en=er,tn=or,rn=Kr;var nn=function(e){return en(e,rn,tn)},on=Object.prototype.hasOwnProperty;var an=function(e,t,r,n,i,o){var a=1&r,s=nn(e),l=s.length;if(l!=nn(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:on.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var m=e[u=s[c]],g=t[u];if(n)var y=a?n(g,m,u,t,e,o):n(m,g,u,e,t,o);if(!(void 0===y?m===g||i(m,g,r,n,o):y)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return o.delete(e),o.delete(t),f},sn=We(le,"DataView"),ln=Ve,cn=We(le,"Promise"),un=We(le,"Set"),dn=We(le,"WeakMap"),hn=we,fn=Be,pn="[object Map]",mn="[object Promise]",gn="[object Set]",yn="[object WeakMap]",vn="[object DataView]",bn=fn(sn),wn=fn(ln),xn=fn(cn),$n=fn(un),Sn=fn(dn),_n=hn;(sn&&_n(new sn(new ArrayBuffer(1)))!=vn||ln&&_n(new ln)!=pn||cn&&_n(cn.resolve())!=mn||un&&_n(new un)!=gn||dn&&_n(new dn)!=yn)&&(_n=function(e){var t=hn(e),r="[object Object]"==t?e.constructor:void 0,n=r?fn(r):"";if(n)switch(n){case bn:return vn;case wn:return pn;case xn:return mn;case $n:return gn;case Sn:return yn}return t});var On=At,Fn=Nt,Dn=Zt,jn=an,kn=_n,Bn=Xt,Mn=gr.exports,Cn=Cr,An="[object Arguments]",En="[object Array]",Pn="[object Object]",In=Object.prototype.hasOwnProperty;var Tn=function(e,t,r,n,i,o){var a=Bn(e),s=Bn(t),l=a?En:kn(e),c=s?En:kn(t),u=(l=l==An?Pn:l)==Pn,d=(c=c==An?Pn:c)==Pn,h=l==c;if(h&&Mn(e)){if(!Mn(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new On),a||Cn(e)?Fn(e,t,r,n,i,o):Dn(e,t,l,r,n,i,o);if(!(1&r)){var f=u&&In.call(e,"__wrapped__"),p=d&&In.call(t,"__wrapped__");if(f||p){var m=f?e.value():e,g=p?t.value():t;return o||(o=new On),i(m,g,r,n,o)}}return!!h&&(o||(o=new On),jn(e,t,r,n,i,o))},zn=sr;var Hn=function e(t,r,n,i,o){return t===r||(null==t||null==r||!zn(t)&&!zn(r)?t!=t&&r!=r:Tn(t,r,n,i,e,o))},Ln=At,Nn=Hn;var Rn=xe;var Wn=function(e){return e==e&&!Rn(e)},Vn=Wn,Yn=Kr;var qn=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Qn=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Ln;if(n)var h=n(c,u,l,e,t,d);if(!(void 0===h?Nn(u,c,3,n,d):h))return!1}}return!0},Un=function(e){for(var t=Yn(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Vn(i)]}return t},Zn=qn;var Gn=function(e){var t=Un(e);return 1==t.length&&t[0][2]?Zn(t[0][0],t[0][1]):function(r){return r===e||Qn(r,e,t)}},Xn=we,Jn=sr;var Kn=function(e){return"symbol"==typeof e||Jn(e)&&"[object Symbol]"==Xn(e)},ei=Xt,ti=Kn,ri=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ni=/^\w*$/;var ii=function(e,t){if(ei(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ti(e))||(ni.test(e)||!ri.test(e)||null!=t&&e in Object(t))},oi=$t;function ai(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(ai.Cache||oi),r}ai.Cache=oi;var si=ai;var li=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ci=/\\(\\)?/g,ui=function(e){var t=si(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(li,(function(e,r,n,i){t.push(n?i.replace(ci,"$1"):r||e)})),t}));var di=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},hi=Xt,fi=Kn,pi=ce?ce.prototype:void 0,mi=pi?pi.toString:void 0;var gi=function e(t){if("string"==typeof t)return t;if(hi(t))return di(t,e)+"";if(fi(t))return mi?mi.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},yi=gi;var vi=Xt,bi=ii,wi=ui,xi=function(e){return null==e?"":yi(e)};var $i=function(e,t){return vi(e)?e:bi(e,t)?[e]:wi(xi(e))},Si=Kn;var _i=function(e){if("string"==typeof e||Si(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},Oi=$i,Fi=_i;var Di=function(e,t){for(var r=0,n=(t=Oi(t,e)).length;null!=e&&r<n;)e=e[Fi(t[r++])];return r&&r==n?e:void 0},ji=Di;var ki=function(e,t,r){var n=null==e?void 0:ji(e,t);return void 0===n?r:n};var Bi=$i,Mi=mr,Ci=Xt,Ai=br,Ei=wr,Pi=_i;var Ii=function(e,t){return null!=e&&t in Object(e)},Ti=function(e,t,r){for(var n=-1,i=(t=Bi(t,e)).length,o=!1;++n<i;){var a=Pi(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ei(i)&&Ai(a,i)&&(Ci(e)||Mi(e))};var zi=Hn,Hi=ki,Li=function(e,t){return null!=e&&Ti(e,t,Ii)},Ni=ii,Ri=Wn,Wi=qn,Vi=_i;var Yi=Di;var qi=function(e){return function(t){return null==t?void 0:t[e]}},Qi=function(e){return function(t){return Yi(t,e)}},Ui=ii,Zi=_i;var Gi=Gn,Xi=function(e,t){return Ni(e)&&Ri(t)?Wi(Vi(e),t):function(r){var n=Hi(r,e);return void 0===n&&n===t?Li(r,e):zi(t,n,3)}},Ji=function(e){return e},Ki=Xt,eo=function(e){return Ui(e)?qi(Zi(e)):Qi(e)};var to=function(e){return"function"==typeof e?e:null==e?Ji:"object"==typeof e?Ki(e)?Xi(e[0],e[1]):Gi(e):eo(e)},ro=to,no=Zr,io=Kr;var oo=function(e){return function(t,r,n){var i=Object(t);if(!no(t)){var o=ro(r);t=io(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var ao=/\s/;var so=function(e){for(var t=e.length;t--&&ao.test(e.charAt(t)););return t},lo=/^\s+/;var co=function(e){return e?e.slice(0,so(e)+1).replace(lo,""):e},uo=xe,ho=Kn,fo=/^[-+]0x[0-9a-f]+$/i,po=/^0b[01]+$/i,mo=/^0o[0-7]+$/i,go=parseInt;var yo=function(e){if("number"==typeof e)return e;if(ho(e))return NaN;if(uo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=uo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=co(e);var r=po.test(e);return r||mo.test(e)?go(e.slice(2),r?2:8):fo.test(e)?NaN:+e},vo=1/0;var bo=function(e){return e?(e=yo(e))===vo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var wo=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},xo=to,$o=function(e){var t=bo(e),r=t%1;return t==t?r?t-r:t:0},So=Math.max;var _o=oo((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:$o(r);return i<0&&(i=So(n+i,0)),wo(e,xo(t),i)})),Oo=Hn;var Fo=function(e,t){return Oo(e,t)},Do=Object.defineProperty,jo={};((e,t)=>{for(var r in t)Do(e,r,{get:t[r],enumerable:!0})})(jo,{assign:()=>sa,colors:()=>ia,createStringInterpolator:()=>ea,skipAnimation:()=>oa,to:()=>ta,willAdvance:()=>aa});var ko=Yo(),Bo=e=>No(e,ko),Mo=Yo();Bo.write=e=>No(e,Mo);var Co=Yo();Bo.onStart=e=>No(e,Co);var Ao=Yo();Bo.onFrame=e=>No(e,Ao);var Eo=Yo();Bo.onFinish=e=>No(e,Eo);var Po=[];Bo.setTimeout=(e,t)=>{const r=Bo.now()+t,n=()=>{const e=Po.findIndex((e=>e.cancel==n));~e&&Po.splice(e,1),Ho-=~e?1:0},i={time:r,handler:e,cancel:n};return Po.splice(Io(r),0,i),Ho+=1,Ro(),i};var Io=e=>~(~Po.findIndex((t=>t.time>e))||~Po.length);Bo.cancel=e=>{Co.delete(e),Ao.delete(e),Eo.delete(e),ko.delete(e),Mo.delete(e)},Bo.sync=e=>{Lo=!0,Bo.batchedUpdates(e),Lo=!1},Bo.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Bo.onStart(r)}return n.handler=e,n.cancel=()=>{Co.delete(r),t=null},n};var To="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Bo.use=e=>To=e,Bo.now="undefined"!=typeof performance?()=>performance.now():Date.now,Bo.batchedUpdates=e=>e(),Bo.catch=console.error,Bo.frameLoop="always",Bo.advance=()=>{"demand"!==Bo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Vo()};var zo=-1,Ho=0,Lo=!1;function No(e,t){Lo?(t.delete(e),e(0)):(t.add(e),Ro())}function Ro(){zo<0&&(zo=0,"demand"!==Bo.frameLoop&&To(Wo))}function Wo(){~zo&&(To(Wo),Bo.batchedUpdates(Vo))}function Vo(){const e=zo;zo=Bo.now();const t=Io(zo);t&&(qo(Po.splice(0,t),(e=>e.handler())),Ho-=t),Ho?(Co.flush(),ko.flush(e?Math.min(64,zo-e):16.667),Ao.flush(),Mo.flush(),Eo.flush()):zo=-1}function Yo(){let e=new Set,t=e;return{add(r){Ho+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Ho-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Ho-=t.size,qo(t,(t=>t(r)&&e.add(t))),Ho+=e.size,t=e)}}}function qo(e,t){e.forEach((e=>{try{t(e)}catch(e){Bo.catch(e)}}))}function Qo(){}var Uo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Zo(e,t){if(Uo.arr(e)){if(!Uo.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Go=(e,t)=>e.forEach(t);function Xo(e,t,r){if(Uo.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Jo=e=>Uo.und(e)?[]:Uo.arr(e)?e:[e];function Ko(e,t){if(e.size){const r=Array.from(e);e.clear(),Go(r,t)}}var ea,ta,ra=(e,...t)=>Ko(e,(e=>e(...t))),na=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ia=null,oa=!1,aa=Qo,sa=e=>{e.to&&(ta=e.to),e.now&&(Bo.now=e.now),void 0!==e.colors&&(ia=e.colors),null!=e.skipAnimation&&(oa=e.skipAnimation),e.createStringInterpolator&&(ea=e.createStringInterpolator),e.requestAnimationFrame&&Bo.use(e.requestAnimationFrame),e.batchedUpdates&&(Bo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(aa=e.willAdvance),e.frameLoop&&(Bo.frameLoop=e.frameLoop)},la=new Set,ca=[],ua=[],da=0,ha={get idle(){return!la.size&&!ca.length},start(e){da>e.priority?(la.add(e),Bo.onStart(fa)):(pa(e),Bo(ga))},advance:ga,sort(e){if(da)Bo.onFrame((()=>ha.sort(e)));else{const t=ca.indexOf(e);~t&&(ca.splice(t,1),ma(e))}},clear(){ca=[],la.clear()}};function fa(){la.forEach(pa),la.clear(),Bo(ga)}function pa(e){ca.includes(e)||ma(e)}function ma(e){ca.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ca,(t=>t.priority>e.priority)),0,e)}function ga(e){const t=ua;for(let r=0;r<ca.length;r++){const n=ca[r];da=n.priority,n.idle||(aa(n),n.advance(e),n.idle||t.push(n))}return da=0,(ua=ca).length=0,(ca=t).length>0}var ya="[-+]?\\d*\\.?\\d+",va=ya+"%";function ba(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var wa=new RegExp("rgb"+ba(ya,ya,ya)),xa=new RegExp("rgba"+ba(ya,ya,ya,ya)),$a=new RegExp("hsl"+ba(ya,va,va)),Sa=new RegExp("hsla"+ba(ya,va,va,ya)),_a=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Oa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Fa=/^#([0-9a-fA-F]{6})$/,Da=/^#([0-9a-fA-F]{8})$/;function ja(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ka(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=ja(i,n,e+1/3),a=ja(i,n,e),s=ja(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Ba(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ma(e){return(parseFloat(e)%360+360)%360/360}function Ca(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Aa(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Ea(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Fa.exec(e))?parseInt(t[1]+"ff",16)>>>0:ia&&void 0!==ia[e]?ia[e]:(t=wa.exec(e))?(Ba(t[1])<<24|Ba(t[2])<<16|Ba(t[3])<<8|255)>>>0:(t=xa.exec(e))?(Ba(t[1])<<24|Ba(t[2])<<16|Ba(t[3])<<8|Ca(t[4]))>>>0:(t=_a.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Da.exec(e))?parseInt(t[1],16)>>>0:(t=Oa.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=$a.exec(e))?(255|ka(Ma(t[1]),Aa(t[2]),Aa(t[3])))>>>0:(t=Sa.exec(e))?(ka(Ma(t[1]),Aa(t[2]),Aa(t[3]))|Ca(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Pa=(e,t,r)=>{if(Uo.fun(e))return e;if(Uo.arr(e))return Pa({range:e,output:t,extrapolate:r});if(Uo.str(e.output[0]))return ea(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var Ia=1.70158,Ta=1.525*Ia,za=Ia+1,Ha=2*Math.PI/3,La=2*Math.PI/4.5,Na=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ra={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>za*e*e*e-Ia*e*e,easeOutBack:e=>1+za*Math.pow(e-1,3)+Ia*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ta)/2:(Math.pow(2*e-2,2)*((Ta+1)*(2*e-2)+Ta)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ha),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ha)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*La)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*La)/2+1,easeInBounce:e=>1-Na(1-e),easeOutBounce:Na,easeInOutBounce:e=>e<.5?(1-Na(1-2*e))/2:(1+Na(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Wa=Symbol.for("FluidValue.get"),Va=Symbol.for("FluidValue.observers"),Ya=e=>Boolean(e&&e[Wa]),qa=e=>e&&e[Wa]?e[Wa]():e,Qa=e=>e[Va]||null;function Ua(e,t){const r=e[Va];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Za=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Ga(this,e)}},Ga=(e,t)=>es(e,Wa,t);function Xa(e,t){if(e[Wa]){let r=e[Va];r||es(e,Va,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ja(e,t){const r=e[Va];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Va]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Ka,es=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),ts=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rs=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ns=new RegExp(`(${ts.source})(%|[a-z]+)`,"i"),is=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,os=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,as=e=>{const[t,r]=ss(e);if(!t||na())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&os.test(r)?as(r):r||e},ss=e=>{const t=os.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},ls=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,cs=e=>{Ka||(Ka=ia?new RegExp(`(${Object.keys(ia).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>qa(e).replace(os,as).replace(rs,Ea).replace(Ka,Ea))),r=t.map((e=>e.match(ts).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Pa({...e,output:t})));return e=>{const r=!ns.test(t[0])&&t.find((e=>ns.test(e)))?.replace(ts,"");let i=0;return t[0].replace(ts,(()=>`${n[i++](e)}${r||""}`)).replace(is,ls)}},us="react-spring: ",ds=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${us}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},hs=ds(console.warn);var fs=ds(console.warn);function ps(e){return Uo.str(e)&&("#"==e[0]||/\d/.test(e)||!na()&&os.test(e)||e in(ia||{}))}var ms=na()?h:f,gs=()=>{const e=m(!1);return ms((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ys(){const e=p()[1],t=gs();return()=>{t.current&&e(Math.random())}}var vs=e=>h(e,bs),bs=[];function ws(e){const t=m();return h((()=>{t.current=e})),t.current}var xs=Symbol.for("Animated:node"),$s=e=>e&&e[xs],Ss=(e,t)=>{return r=e,n=xs,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},_s=e=>e&&e[xs]&&e[xs].getPayload(),Os=class{constructor(){Ss(this,this)}getPayload(){return this.payload||[]}},Fs=class extends Os{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Uo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Fs(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Uo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Uo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Ds=class extends Fs{constructor(e){super(0),this._string=null,this._toString=Pa({output:[e,e]})}static create(e){return new Ds(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Uo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Pa({output:[this.getValue(),e]})),this._value=0,super.reset()}},js={dependencies:null},ks=class extends Os{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Xo(this.source,((r,n)=>{var i;(i=r)&&i[xs]===i?t[n]=r.getValue(e):Ya(r)?t[n]=qa(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Go(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Xo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){js.dependencies&&Ya(e)&&js.dependencies.add(e);const t=_s(e);t&&Go(t,(e=>this.add(e)))}},Bs=class extends ks{constructor(e){super(e)}static create(e){return new Bs(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Ms)),!0)}};function Ms(e){return(ps(e)?Ds:Fs).create(e)}function Cs(e){const t=$s(e);return t?t.constructor:Uo.arr(e)?Bs:ps(e)?Ds:Fs}var As=(e,t)=>{const r=!Uo.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((n,i)=>{const o=m(null),a=r&&y((e=>{o.current=function(e,t){e&&(Uo.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[s,l]=function(e,t){const r=new Set;js.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new ks(e),js.dependencies=null,[e,r]}(n,t),c=ys(),d=()=>{const e=o.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,s.getValue(!0)))&&c()},f=new Es(d,l),p=m();ms((()=>(p.current=f,Go(l,(e=>Xa(e,f))),()=>{p.current&&(Go(p.current.deps,(e=>Ja(e,p.current))),Bo.cancel(p.current.update))}))),h(d,[]),vs((()=>()=>{const e=p.current;Go(e.deps,(t=>Ja(t,e)))}));const g=t.getComponentProps(s.getValue());return u.createElement(e,{...g,ref:a})}))},Es=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Bo.write(this.update)}};var Ps=Symbol.for("AnimatedComponent"),Is=e=>Uo.str(e)?e:e&&Uo.str(e.displayName)?e.displayName:Uo.fun(e)&&e.name||null;function Ts(e,...t){return Uo.fun(e)?e(...t):e}var zs=(e,t)=>!0===e||!!(t&&e&&(Uo.fun(e)?e(t):Jo(e).includes(t))),Hs=(e,t)=>Uo.obj(e)?t&&e[t]:e,Ls=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ns=e=>e,Rs=(e,t=Ns)=>{let r=Ws;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Uo.und(r)||(n[i]=r)}return n},Ws=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Vs={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ys(e){const t=function(e){const t={};let r=0;if(Xo(e,((e,n)=>{Vs[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Xo(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function qs(e){return e=qa(e),Uo.arr(e)?e.map(qs):ps(e)?jo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Qs(e){return Uo.fun(e)||Uo.arr(e)&&Uo.obj(e[0])}var Us={tension:170,friction:26,mass:1,damping:1,easing:Ra.linear,clamp:!1},Zs=class{constructor(){this.velocity=0,Object.assign(this,Us)}};function Gs(e,t){if(Uo.und(t.decay)){const r=!Uo.und(t.tension)||!Uo.und(t.friction);!r&&Uo.und(t.frequency)&&Uo.und(t.damping)&&Uo.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Xs=[],Js=class{constructor(){this.changed=!1,this.values=Xs,this.toValues=null,this.fromValues=Xs,this.config=new Zs,this.immediate=!1}};function Ks(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,u=zs(r.cancel??n?.cancel,t);if(u)f();else{Uo.und(r.pause)||(i.paused=zs(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||zs(e,t)),l=Ts(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-Bo.now()}function h(){l>0&&!jo.skipAnimation?(i.delayed=!0,c=Bo.setTimeout(f,l),i.pauseQueue.add(d),i.timeouts.add(c)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{o.start({...r,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var el=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?nl(e.get()):t.every((e=>e.noop))?tl(e.get()):rl(e.get(),t.every((e=>e.finished))),tl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),rl=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),nl=e=>({value:e,cancelled:!0,finished:!1});function il(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Rs(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&nl(n)||i!==r.asyncId&&rl(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new al,a=new sl;return(async()=>{if(jo.skipAnimation)throw ol(r),a.result=rl(n,!1),d(a),a;f(o);const s=Uo.obj(e)?{...e}:{...t,to:e};s.parentId=i,Xo(c,((e,t)=>{Uo.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let m;if(jo.skipAnimation)return ol(r),rl(n,!1);try{let t;t=Uo.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(u),h]),m=rl(n.get(),!0,!1)}catch(e){if(e instanceof al)m=e.result;else{if(!(e instanceof sl))throw e;m=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Uo.fun(a)&&Bo.batchedUpdates((()=>{a(m,n,n.item)})),m})():l}function ol(e,t){Ko(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var al=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},sl=class extends Error{constructor(){super("SkipAnimationSignal")}},ll=e=>e instanceof ul,cl=1,ul=class extends Za{constructor(){super(...arguments),this.id=cl++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=$s(this);return e&&e.getValue()}to(...e){return jo.to(this,e)}interpolate(...e){return hs(`${us}The "interpolate" function is deprecated in v9 (use "to" instead)`),jo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ua(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ha.sort(this),Ua(this,{type:"priority",parent:this,priority:e})}},dl=Symbol.for("SpringPhase"),hl=e=>(1&e[dl])>0,fl=e=>(2&e[dl])>0,pl=e=>(4&e[dl])>0,ml=(e,t)=>t?e[dl]|=3:e[dl]&=-3,gl=(e,t)=>t?e[dl]|=4:e[dl]&=-5,yl=class extends ul{constructor(e,t){if(super(),this.animation=new Js,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Uo.und(e)||!Uo.und(t)){const r=Uo.obj(e)?{...e}:{...t,from:e};Uo.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(fl(this)||this._state.asyncTo)||pl(this)}get goal(){return qa(this.animation.to)}get velocity(){const e=$s(this);return e instanceof Fs?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return hl(this)}get isAnimating(){return fl(this)}get isPaused(){return pl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=_s(n.to);!a&&Ya(n.to)&&(i=Jo(qa(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Ds?1:a?a[l].lastPosition:i[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Uo.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Uo.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Uo.und(n),f=r==c?s.v0>0:r<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(a=-a*n,d=c));a+=(1e-6*-o.tension*(d-c)+.001*-o.friction*a)/o.mass*g,d+=a*g}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+o.easing(n)*(c-r),a=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,o.round)&&(r=!0)}));const s=$s(this),l=s.getValue();if(t){const e=qa(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Bo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(fl(this)){const{to:e,config:t}=this.animation;Bo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Uo.und(e)?(r=this.queue||[],this.queue=[]):r=[Uo.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>el(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),ol(this._state,e&&this._lastCallId),Bo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Uo.obj(r)?r[t]:r,(null==r||Qs(r))&&(r=void 0),n=Uo.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return hl(this)||(e.reverse&&([r,n]=[n,r]),n=qa(n),Uo.und(n)?$s(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Rs(e,((e,t)=>/^on/.test(t)?Hs(e,r):e))),_l(this,e,"onProps"),Ol(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Ks(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{pl(this)||(gl(this,!0),ra(o.pauseQueue),Ol(this,"onPause",rl(this,vl(this,this.animation.to)),this))},resume:()=>{pl(this)&&(gl(this,!1),fl(this)&&this._resume(),ra(o.resumeQueue),Ol(this,"onResume",rl(this,vl(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=bl(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(nl(this));const n=!Uo.und(e.to),i=!Uo.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(nl(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||n||t.default&&!Uo.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Zo(d,c);h&&(s.from=d),d=qa(d);const f=!Zo(u,l);f&&this._focus(u);const p=Qs(t.to),{config:m}=s,{decay:g,velocity:y}=m;(n||i)&&(m.velocity=0),t.config&&!p&&function(e,t,r){r&&(Gs(r={...r},t),t={...r,...t}),Gs(e,t),Object.assign(e,t);for(const t in Us)null==e[t]&&(e[t]=Us[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;Uo.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(m,Ts(t.config,o),t.config!==a.config?Ts(a.config,o):void 0);let v=$s(this);if(!v||Uo.und(u))return r(rl(this,!0));const b=Uo.und(t.reset)?i&&!t.default:!Uo.und(d)&&zs(t.reset,o),w=b?d:this.get(),x=qs(u),$=Uo.num(x)||Uo.arr(x)||ps(x),S=!p&&(!$||zs(a.immediate||t.immediate,o));if(f){const e=Cs(u);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(x)}}const _=v.constructor;let O=Ya(u),F=!1;if(!O){const e=b||!hl(this)&&h;(f||e)&&(F=Zo(qs(w),x),O=!F),(Zo(s.immediate,S)||S)&&Zo(m.decay,g)&&Zo(m.velocity,y)||(O=!0)}if(F&&fl(this)&&(s.changed&&!b?O=!0:O||this._stop(l)),!p&&((O||Ya(l))&&(s.values=v.getPayload(),s.toValues=Ya(u)?null:_==Ds?[1]:Jo(x)),s.immediate!=S&&(s.immediate=S,S||b||this._set(l)),O)){const{onRest:e}=s;Go(Sl,(e=>_l(this,t,e)));const n=rl(this,vl(this,l));ra(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Bo.batchedUpdates((()=>{s.changed=!b,e?.(n,this),b?Ts(a.onRest,n):s.onStart?.(n,this)}))}b&&this._set(w),p?r(il(t.to,t,this._state,this)):O?this._start():fl(this)&&!f?this._pendingCalls.add(r):r(tl(w))}_focus(e){const t=this.animation;e!==t.to&&(Qa(this)&&this._detach(),t.to=e,Qa(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ya(t)&&(Xa(t,this),ll(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ya(e)&&Ja(e,this)}_set(e,t=!0){const r=qa(e);if(!Uo.und(r)){const e=$s(this);if(!e||!Zo(r,e.getValue())){const n=Cs(r);e&&e.constructor==n?e.setValue(r):Ss(this,n.create(r)),e&&Bo.batchedUpdates((()=>{this._onChange(r,t)}))}}return $s(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Ol(this,"onStart",rl(this,vl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Ts(this.animation.onChange,e,this)),Ts(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;$s(this).reset(qa(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),fl(this)||(ml(this,!0),pl(this)||this._resume())}_resume(){jo.skipAnimation?this.finish():ha.start(this)}_stop(e,t){if(fl(this)){ml(this,!1);const r=this.animation;Go(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Ua(this,{type:"idle",parent:this});const n=t?nl(this.get()):rl(this.get(),vl(this,e??r.to));ra(this._pendingCalls,n),r.changed&&(r.changed=!1,Ol(this,"onRest",n,this))}}};function vl(e,t){const r=qs(t);return Zo(qs(e.get()),r)}function bl(e,t=e.loop,r=e.to){const n=Ts(t);if(n){const i=!0!==n&&Ys(n),o=(i||e).reverse,a=!i||i.reset;return wl({...e,loop:t,default:!1,pause:void 0,to:!o||Qs(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function wl(e){const{to:t,from:r}=e=Ys(e),n=new Set;return Uo.obj(t)&&$l(t,n),Uo.obj(r)&&$l(r,n),e.keys=n.size?Array.from(n):null,e}function xl(e){const t=wl(e);return Uo.und(t.default)&&(t.default=Rs(t)),t}function $l(e,t){Xo(e,((e,r)=>null!=e&&t.add(r)))}var Sl=["onStart","onRest","onChange","onPause","onResume"];function _l(e,t,r){e.animation[r]=t[r]!==Ls(t,r)?Hs(t[r],e.key):void 0}function Ol(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Fl=["onStart","onChange","onRest"],Dl=1,jl=class{constructor(e,t){this.id=Dl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Uo.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(wl(e)),this}start(e){let{queue:t}=this;return e?t=Jo(e).map(wl):this.queue=[],this._flush?this._flush(this,t):(Pl(this,t),kl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Go(Jo(t),(t=>r[t].stop(!!e)))}else ol(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Uo.und(e))this.start({pause:!0});else{const t=this.springs;Go(Jo(e),(e=>t[e].pause()))}return this}resume(e){if(Uo.und(e))this.start({pause:!1});else{const t=this.springs;Go(Jo(e),(e=>t[e].resume()))}return this}each(e){Xo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Ko(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&Ko(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ko(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Bo.onFrame(this._onFrame)}};function kl(e,t){return Promise.all(t.map((t=>Bl(e,t)))).then((t=>el(e,t)))}async function Bl(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Uo.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Uo.arr(i)||Uo.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Go(Fl,(r=>{const n=t[r];if(Uo.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,ra(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===Ls(t,"cancel");(u||f&&d.asyncId)&&h.push(Ks(++e._lastAsyncId,{props:t,state:d,actions:{pause:Qo,resume:Qo,start(t,r){f?(ol(d,e._lastAsyncId),r(nl(e))):(t.onRest=s,r(il(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=el(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=bl(t,a,i);if(r)return Pl(e,[r]),Bl(e,r,!0)}return l&&Bo.batchedUpdates((()=>l(p,e,e.item))),p}function Ml(e,t){const r={...e.springs};return t&&Go(Jo(t),(e=>{Uo.und(e.keys)&&(e=wl(e)),Uo.obj(e.to)||(e={...e,to:void 0}),El(r,e,(e=>Al(e)))})),Cl(e,r),r}function Cl(e,t){Xo(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Xa(t,e))}))}function Al(e,t){const r=new yl;return r.key=e,t&&Xa(r,t),r}function El(e,t,r){t.keys&&Go(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Pl(e,t){Go(t,(t=>{El(e.springs,t,(t=>Al(t,e)))}))}var Il,Tl,zl=({children:e,...t})=>{const r=v(Hl),n=t.pause||!!r.pause,i=t.immediate||!!r.immediate;t=function(e,t){const[r]=p((()=>({inputs:t,result:e()}))),n=m(),i=n.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=r;return h((()=>{n.current=o,i==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:n,immediate:i})),[n,i]);const{Provider:o}=Hl;return u.createElement(o,{value:t},e)},Hl=(Il=zl,Tl={},Object.assign(Il,u.createContext(Tl)),Il.Provider._context=Il,Il.Consumer._context=Il,Il);zl.Provider=Hl.Provider,zl.Consumer=Hl.Consumer;var Ll=()=>{const e=[],t=function(t){fs(`${us}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Go(e,((e,i)=>{if(Uo.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Go(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Go(e,(e=>e.resume(...arguments))),this},t.set=function(t){Go(e,((e,r)=>{const n=Uo.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Go(e,((e,n)=>{if(Uo.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Go(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Go(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Uo.fun(e)?e(r,t):e};return t._getProps=r,t};function Nl(e,t){const r=Uo.fun(e),[[n],i]=function(e,t,r){const n=Uo.fun(t)&&t;n&&!r&&(r=[]);const i=b((()=>n||3==arguments.length?Ll():void 0),[]),o=m(0),a=ys(),s=b((()=>({ctrls:[],queue:[],flush(e,t){const r=Ml(e,t);return o.current>0&&!s.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?kl(e,t):new Promise((n=>{Cl(e,r),s.queue.push((()=>{n(kl(e,t))})),a()}))}})),[]),l=m([...s.ctrls]),c=[],u=ws(e)||0;function d(e,r){for(let i=e;i<r;i++){const e=l.current[i]||(l.current[i]=new jl(null,s.flush)),r=n?n(i,e):t[i];r&&(c[i]=xl(r))}}b((()=>{Go(l.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,d(u,e)}),[e]),b((()=>{d(0,Math.min(u,e))}),r);const h=l.current.map(((e,t)=>Ml(e,c[t]))),f=v(zl),p=ws(f),g=f!==p&&function(e){for(const t in e)return!0;return!1}(f);ms((()=>{o.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],Go(e,(e=>e()))),Go(l.current,((e,t)=>{i?.add(e),g&&e.start({default:f});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),vs((()=>()=>{Go(s.ctrls,(e=>e.stop(!0)))}));const y=h.map((e=>({...e})));return i?[y,i]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var Rl=class extends ul{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Pa(...t);const r=this._get(),n=Cs(r);Ss(this,n.create(r))}advance(e){const t=this._get();Zo(t,this.get())||($s(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Vl(this._active)&&Yl(this)}_get(){const e=Uo.arr(this.source)?this.source.map(qa):Jo(qa(this.source));return this.calc(...e)}_start(){this.idle&&!Vl(this._active)&&(this.idle=!1,Go(_s(this),(e=>{e.done=!1})),jo.skipAnimation?(Bo.batchedUpdates((()=>this.advance())),Yl(this)):ha.start(this))}_attach(){let e=1;Go(Jo(this.source),(t=>{Ya(t)&&Xa(t,this),ll(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Go(Jo(this.source),(e=>{Ya(e)&&Ja(e,this)})),this._active.clear(),Yl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Jo(this.source).reduce(((e,t)=>Math.max(e,(ll(t)?t.priority:0)+1)),0))}};function Wl(e){return!1!==e.idle}function Vl(e){return!e.size||Array.from(e).every(Wl)}function Yl(e){e.idle||(e.idle=!0,Go(_s(e),(e=>{e.done=!0})),Ua(e,{type:"idle",parent:e}))}jo.assign({createStringInterpolator:cs,to:(e,t)=>new Rl(e,t)});var ql=/^--/;function Ql(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||ql.test(e)||Zl.hasOwnProperty(e)&&Zl[e]?(""+t).trim():t+"px"}var Ul={};var Zl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gl=["Webkit","Ms","Moz","O"];Zl=Object.keys(Zl).reduce(((e,t)=>(Gl.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Zl);var Xl=/^(matrix|translate|scale|rotate|skew)/,Jl=/^(translate)/,Kl=/^(rotate|skew)/,ec=(e,t)=>Uo.num(e)&&0!==e?e+t:e,tc=(e,t)=>Uo.arr(e)?e.every((e=>tc(e,t))):Uo.num(e)?e===t:parseFloat(e)===t,rc=class extends ks{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>ec(e,"px"))).join(",")})`,tc(e,0)]))),Xo(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Xl.test(t)){if(delete n[t],Uo.und(e))return;const r=Jl.test(t)?"px":Kl.test(t)?"deg":"";i.push(Jo(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${ec(i,r)})`,tc(i,0)]:e=>[`${t}(${e.map((e=>ec(e,r))).join(",")})`,tc(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new nc(i,o)),super(n)}},nc=class extends Za{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Go(this.inputs,((r,n)=>{const i=qa(r[0]),[o,a]=this.transforms[n](Uo.arr(i)?i:r.map(qa));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Go(this.inputs,(e=>Go(e,(e=>Ya(e)&&Xa(e,this)))))}observerRemoved(e){0==e&&Go(this.inputs,(e=>Go(e,(e=>Ya(e)&&Ja(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ua(this,e)}};jo.assign({batchedUpdates:x,createStringInterpolator:cs,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var ic=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new ks(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=Is(e)||"Anonymous";return(e=Uo.str(e)?o[e]||(o[e]=As(e,i)):e[Ps]||(e[Ps]=As(e,i))).displayName=`Animated(${t})`,e};return Xo(e,((t,r)=>{Uo.arr(e)&&(r=Is(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Ul[t]||(Ul[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Ql(t,n[t]);ql.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new rc(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),oc=ic.animated;const ac=(e,t,r)=>t?ki(r,t)||ki(e,t):r||e,sc=(e,t)=>{const r=t||e.defaultValue;return ki(e.collections,r)};var lc;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(lc||(lc={}));const cc={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},uc=e=>t=>{const r=t.theme,n=sc(cc,r[lc.colorScheme]);return r.options&&r.options.color?ac(n,e,r.options.color):ac(n,e)},dc={Brand:{1:uc("Brand.1"),2:uc("Brand.2"),3:uc("Brand.3"),4:uc("Brand.4"),5:uc("Brand.5"),6:uc("Brand.6")},Primary:uc("Primary"),PrimaryDark:uc("PrimaryDark"),Secondary:uc("Secondary"),Accent:{Light:{1:uc("Accent.Light.1"),2:uc("Accent.Light.2"),3:uc("Accent.Light.3"),4:uc("Accent.Light.4"),5:uc("Accent.Light.5"),6:uc("Accent.Light.6")},Dark:{1:uc("Accent.Dark.1"),2:uc("Accent.Dark.2"),3:uc("Accent.Dark.3")}},Neutral:{1:uc("Neutral.1"),2:uc("Neutral.2"),3:uc("Neutral.3"),4:uc("Neutral.4"),5:uc("Neutral.5"),6:uc("Neutral.6"),7:uc("Neutral.7"),8:uc("Neutral.8")},Validation:{Green:{Text:uc("Validation.Green.Text"),Icon:uc("Validation.Green.Icon"),Border:uc("Validation.Green.Border"),Background:uc("Validation.Green.Background")},Orange:{Text:uc("Validation.Orange.Text"),Icon:uc("Validation.Orange.Icon"),Border:uc("Validation.Orange.Border"),Background:uc("Validation.Orange.Background"),Badge:uc("Validation.Orange.Badge")},Red:{Text:uc("Validation.Red.Text"),Icon:uc("Validation.Red.Icon"),Border:uc("Validation.Red.Border"),Background:uc("Validation.Red.Background")},Blue:{Text:uc("Validation.Blue.Text"),Icon:uc("Validation.Blue.Icon"),Border:uc("Validation.Blue.Border"),Background:uc("Validation.Blue.Background")}},Shadow:{Accent:uc("Shadow.Accent"),Red:uc("Shadow.Red"),Elevation:uc("Shadow.Elevation")}},hc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},fc=e=>Object.keys(hc).reduce(((t,r)=>{const n=hc[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),pc=fc("max-width"),mc=(fc("min-width"),$.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),gc=S`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,yc=$.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||dc.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${gc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,vc=$(yc)`
    animation-delay: -0.45s;
`,bc=$(yc)`
    animation-delay: -0.3s;
`,wc=$(yc)`
    animation-delay: -0.15s;
`,xc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},$c={collections:{base:{D1:{fontFamily:xc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:xc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:xc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:xc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:xc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:xc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:xc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:xc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:xc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:xc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:xc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:xc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:xc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:xc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Sc=e=>t=>{const r=t.theme,n=sc($c,r[lc.textStyleScheme]);return r.options&&r.options.textStyle?ac(n,e,r.options.textStyle):ac(n,e)},_c={D1:{fontFamily:Sc("D1.fontFamily"),fontSize:Sc("D1.fontSize"),fontWeight:Sc("D1.fontWeight"),lineHeight:Sc("D1.lineHeight"),letterSpacing:Sc("D1.letterSpacing")},D2:{fontFamily:Sc("D2.fontFamily"),fontSize:Sc("D2.fontSize"),fontWeight:Sc("D2.fontWeight"),lineHeight:Sc("D2.lineHeight"),letterSpacing:Sc("D2.letterSpacing")},D3:{fontFamily:Sc("D3.fontFamily"),fontSize:Sc("D3.fontSize"),fontWeight:Sc("D3.fontWeight"),lineHeight:Sc("D3.lineHeight"),letterSpacing:Sc("D3.letterSpacing")},D4:{fontFamily:Sc("D4.fontFamily"),fontSize:Sc("D4.fontSize"),fontWeight:Sc("D4.fontWeight"),lineHeight:Sc("D4.lineHeight"),letterSpacing:Sc("D4.letterSpacing")},DBody:{fontFamily:Sc("DBody.fontFamily"),fontSize:Sc("DBody.fontSize"),fontWeight:Sc("DBody.fontWeight"),lineHeight:Sc("DBody.lineHeight"),letterSpacing:Sc("DBody.letterSpacing")},H1:{fontFamily:Sc("H1.fontFamily"),fontSize:Sc("H1.fontSize"),fontWeight:Sc("H1.fontWeight"),lineHeight:Sc("H1.lineHeight"),letterSpacing:Sc("H1.letterSpacing")},H2:{fontFamily:Sc("H2.fontFamily"),fontSize:Sc("H2.fontSize"),fontWeight:Sc("H2.fontWeight"),lineHeight:Sc("H2.lineHeight"),letterSpacing:Sc("H2.letterSpacing")},H3:{fontFamily:Sc("H3.fontFamily"),fontSize:Sc("H3.fontSize"),fontWeight:Sc("H3.fontWeight"),lineHeight:Sc("H3.lineHeight"),letterSpacing:Sc("H3.letterSpacing")},H4:{fontFamily:Sc("H4.fontFamily"),fontSize:Sc("H4.fontSize"),fontWeight:Sc("H4.fontWeight"),lineHeight:Sc("H4.lineHeight"),letterSpacing:Sc("H4.letterSpacing")},H5:{fontFamily:Sc("H5.fontFamily"),fontSize:Sc("H5.fontSize"),fontWeight:Sc("H5.fontWeight"),lineHeight:Sc("H5.lineHeight"),letterSpacing:Sc("H5.letterSpacing")},H6:{fontFamily:Sc("H6.fontFamily"),fontSize:Sc("H6.fontSize"),fontWeight:Sc("H6.fontWeight"),lineHeight:Sc("H6.lineHeight"),letterSpacing:Sc("H6.letterSpacing")},Body:{fontFamily:Sc("Body.fontFamily"),fontSize:Sc("Body.fontSize"),fontWeight:Sc("Body.fontWeight"),lineHeight:Sc("Body.lineHeight"),letterSpacing:Sc("Body.letterSpacing")},BodySmall:{fontFamily:Sc("BodySmall.fontFamily"),fontSize:Sc("BodySmall.fontSize"),fontWeight:Sc("BodySmall.fontWeight"),lineHeight:Sc("BodySmall.lineHeight"),letterSpacing:Sc("BodySmall.letterSpacing")},XSmall:{fontFamily:Sc("XSmall.fontFamily"),fontSize:Sc("XSmall.fontSize"),fontWeight:Sc("XSmall.fontWeight"),lineHeight:Sc("XSmall.lineHeight"),letterSpacing:Sc("XSmall.letterSpacing")}},Oc=e=>{switch(e){case 700:case"bold":return xc.Bold;case 600:case"semibold":return xc.Semibold;case 300:case"light":return xc.Light;case 400:case"regular":return xc.Regular;default:return""}},Fc=(e,t)=>r=>{var n;const i=_c[e].fontFamily(r),o=_c[e].fontWeight(r);return Object.values(xc).includes(i)?_`
                font-family: ${Oc(t)||Oc(o)||i};
                font-weight: normal !important;
            `:_`
            font-family: ${i};
            font-weight: ${null!==(n=Dc(t)||o)&&void 0!==n?n:"normal"};
        `},Dc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},jc=e=>{if(e>0)return _`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},kc=(e,t,r=!1)=>n=>{const i=_c[e],o=i.fontSize(n);return _`
            ${Fc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${_`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Bc=(e=!1,t=!1,r=void 0)=>t?_`
            display: block;
            ${jc(r)}
        `:e?_`
            display: inline;
        `:_`
            display: block;
            ${jc(r)}
        `;var Mc;!function(e){e.D1=$.h1`
        ${e=>_`
                ${kc("D1",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=$.h1`
        ${e=>_`
                ${kc("D2",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=$.h1`
        ${e=>_`
                ${kc("D3",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=$.h1`
        ${e=>_`
                ${kc("D4",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=$.h1`
        ${e=>_`
                ${kc("DBody",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=$.h1`
        ${e=>_`
                ${kc("H1",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=$.h2`
        ${e=>_`
                ${kc("H2",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=$.h3`
        ${e=>_`
                ${kc("H3",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=$.h4`
        ${e=>_`
                ${kc("H4",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=$.h5`
        ${e=>_`
                ${kc("H5",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=$.h6`
        ${e=>_`
                ${kc("H6",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=$.p`
        ${e=>_`
                ${kc("Body",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=$.p`
        ${e=>_`
                ${kc("BodySmall",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=$.span`
        ${e=>_`
                ${kc("XSmall",e.weight,e.paragraph)}
                color: ${dc.Neutral[1]};
                ${Bc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Ec(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ec(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Mc||(Mc={}));const Cc=$.a`
    ${e=>_`
            ${kc(e.textStyle,e.weight)}
            color: ${dc.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${dc.Secondary};

                svg {
                    color: ${dc.Secondary};
                }
            }
        `}
`,Ac=$(O)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ec=r=>{var{external:n=!1,children:i}=r,o=T(r,["external","children"]);return e(Cc,Object.assign({},o,{children:[i,n&&t(Ac,{})]}))};var Pc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Pc||(Pc={}));const Ic={collections:{base:{InputBoxShadow:_`
        inset 0 0 4px 0px ${dc.Shadow.Accent}
    `,InputErrorBoxShadow:_`
        inset 0 0 4px 0px ${dc.Shadow.Red}
    `,ElevationBoxShadow:_`
      0px 2px 8px ${dc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:_`
        inset 0 0 3px 0px ${dc.Shadow.Accent}
    `,InputErrorBoxShadow:_`
        inset 0 0 3px 0px ${dc.Shadow.Red}
    `,ElevationBoxShadow:_`
      0px 2px 8px ${dc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Tc=e=>t=>{var r;const n=t.theme,i=sc(Ic,n[lc.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?ac(i,e,n.options.designToken):ac(i,e)},zc={InputBoxShadow:Tc("InputBoxShadow"),InputErrorBoxShadow:Tc("InputErrorBoxShadow"),ElevationBoxShadow:Tc("ElevationBoxShadow"),Table:{Header:Tc("Table.Header"),Cell:{Primary:Tc("Table.Cell.Primary"),Secondary:Tc("Table.Cell.Secondary"),Selected:Tc("Table.Cell.Selected"),Hover:Tc("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Tc("Button.Danger.BackgroundColor"),Hover:Tc("Button.Danger.Hover"),Primary:Tc("Button.Danger.Primary"),Border:Tc("Button.Danger.Border")}}},Hc=$.button`
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
                    background-color: ${dc.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?zc.Button.Danger.Border:dc.Primary};

                    span {
                        color: ${e.$buttonIsDanger?zc.Button.Danger.Primary:dc.Primary};
                    }
                `;case"light":return _`
                    background-color: ${dc.Neutral[8]};
                    border: 1px solid ${dc.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?zc.Button.Danger.Primary:dc.Primary};
                    }
                `;case"disabled":return _`
                    background-color: ${dc.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${dc.Neutral[3]};
                    }
                `;case"link":return _`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?zc.Button.Danger.Primary:dc.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?zc.Button.Danger.Hover:dc.Secondary};
                        }
                    }
                `;default:return _`
                    background-color: ${e.$buttonIsDanger?zc.Button.Danger.BackgroundColor:dc.Primary};
                    border: 1px solid transparent;

                    ${pc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${dc.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?_`
                    height: 2.5rem;
                    span {
                        ${kc("H5","semibold")}
                    }

                    ${pc.mobileS} {
                        height: auto;
                    }
                `:_`
                    height: 3rem;
                    span {
                        ${kc("H4","semibold")}
                    }

                    ${pc.mobileS} {
                        height: auto;
                    }
                `}
`,Lc=$((({color:r,className:n,size:i=18})=>e(mc,Object.assign({className:n,$size:i,$color:r},{children:[t(yc,{id:"inner1",$size:i-2,$borderWidth:2}),t(vc,{id:"inner2",$size:i-2,$borderWidth:2}),t(bc,{id:"inner3",$size:i-2,$borderWidth:2}),t(wc,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?zc.Button.Danger.Primary:dc.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=dc.Neutral[3](e);break;default:t=dc.Neutral[8](e)}return _`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Nc;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(Nc||(Nc={}));const Rc=S`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Wc=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return _`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${Rc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?dc.Neutral[4](e):e.$unchecked?dc.Accent.Light[2](e):dc.Primary(e)};
    }
`,Vc=$.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Yc=$(oc.div)`
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
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${dc.Neutral[4]};
        border-right: 5px solid ${dc.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${pc.mobileL} {
        max-height: 15rem;
    }
`,Qc=$.li`
    :hover,
    :focus,
    :active {
        background: ${dc.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return _`
                background: ${dc.Accent.Light[5]};
            `}}
`,Uc=$.button`
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
        outline-color: ${dc.Accent.Light[3]};
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
`,Gc=$.div`
    ${kc("Body","regular")}
    color: ${dc.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Zc}
`,Xc=$.div`
    color: ${dc.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Zc}

    ${e=>"next-line"===e.$labelDisplayType?_`
                    ${kc("BodySmall","semibold")}
                `:_`
                    ${kc("Body","regular")}
                `}
`,Jc=$.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return _`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return _`
                    ${Gc} {
                        display: inline;
                    }

                    ${Xc} {
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
`,tu=$((r=>{var{className:n,checked:i,disabled:o,indeterminate:a,onChange:s,onKeyPress:l,displaySize:c="default"}=r,u=T(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const d=m();h((()=>{d.current.indeterminate=a}),[a]);const f=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;s&&s(e),l&&l(t)}};return e(Wc,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":a?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:f,$displaySize:c,$disabled:o,$unchecked:!(a||i||o)},{children:[t(Vc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:d,tabIndex:-1,onChange:f,disabled:o},u)),a?t(D,{"data-testid":"indeterminate"}):i?t(j,{"data-testid":"checkmark"}):o?t(k,{"data-testid":"disabled-empty-checkbox"}):t(B,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,ru=$.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,nu=$.button`
    ${kc("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${dc.Primary(e)};\n\t\t`}
`,iu=$.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,ou=$(Mc.Body)``,au=$(F)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${dc.Validation.Red.Icon};
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

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&_`
                background-color: ${dc.Neutral[7]};
            `}
    }
`,lu=d.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=T(e,["children","focusHighlight","focusOutline","type"]);return t(su,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))})),cu=$.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${dc.Neutral[5]};
    border-radius: 4px;
    background: ${dc.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${dc.Accent.Light[1]};
        box-shadow: ${zc.InputBoxShadow};
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
                background: ${dc.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${dc.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?_`
                border: 1px solid ${dc.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${dc.Validation.Red.Border};
                    box-shadow: ${zc.InputErrorBoxShadow};
                }
            `:void 0}
`,uu=$.input`
    ${kc("Body","regular")}
    color: ${dc.Neutral[1]};
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
        color: ${dc.Neutral[3]};
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
`,du=$.li`
    background: ${dc.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,hu=$(uu)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,fu=$(C)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${dc.Neutral[3]};
`,pu=$(lu)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${dc.Neutral[3]};
    cursor: pointer;
`,mu=$(M)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${dc.Neutral[3]};
`,gu=g(((r,n)=>{const{onClear:i}=r,o=T(r,["onClear"]);return e(du,{children:[t(fu,{}),t(hu,Object.assign({ref:n},o)),o.value&&t(pu,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(mu,{})}))]},"search")})),yu=n=>{var{listItems:i,listExtractor:o,valueExtractor:a,onSelectItem:s,listStyleWidth:l,visible:c,enableSearch:u,searchPlaceholder:d="Search",onSearch:f,searchFunction:g,onDismiss:y,disableItemFocus:v,multiSelect:b,selectedItems:w,onSelectAll:x,onRetry:$,itemsLoadState:S="success",itemTruncationType:_="end",itemMaxLines:O=2,labelDisplayType:F="inline",renderListItem:D,onBlur:j,hideNoResultsDisplay:k,renderCustomCallToAction:B}=n,M=T(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[C,A]=p(0),[E,P]=p(""),[I,z]=p(i),[H,L]=p(0),N=Nl({height:H}),R=m(),W=m(),V=m([]),Y=m(),q=m(),Q=m(C),U=m(I),Z=e=>{Q.current=e,A(e)},G=e=>{U.current=e,z(e)};h((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),h((()=>{ee(E)}),[E]),h((()=>{if(P(""),c){if(setTimeout((()=>{L(te())})),v)return;Y&&Y.current?(Y.current.focus(),Z(-1)):V.current[C]&&V.current[C].focus()}else L(0)}),[c]),h((()=>{if(c){const e=te();L(e)}}),[I,S]),h((()=>{G(i),P(""),Z(0)}),[i]);const X=e=>o?o(e):e.toString(),J=e=>{if("inline"!==F)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return Nc.getTextWidth(e,"1.125rem 'Open Sans'")>t*O},K=e=>!!_o(w,(t=>Fo(t,e))),ee=e=>{if(""===e)G(i);else if(g){const t=g(e);G(t)}else{const t=i.filter((t=>{var r;const n=X(t),i="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));G(t)}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(q.current?q.current.getBoundingClientRect().height:0),re=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(Q.current<U.current.length-1){const e=Q.current+1;V.current[e].focus(),Z(e)}break;case"ArrowUp":if(Q.current>0){const e=Q.current-1;V.current[e].focus(),Z(Q.current-1)}break;case"Escape":y&&y(!0)}},ne=(e,t)=>{e.preventDefault(),s&&s(t,(e=>a?a(e):e)(t))},ie=e=>{const t=e.target.value;P(t),f&&f()},oe=()=>{P(""),Y.current.focus(),f&&f()},ae=()=>{$&&$()},se=()=>{j&&j()},le=n=>e(r,{children:[t(Kc,Object.assign({$maxLines:O,"aria-hidden":!0},{children:n})),t(eu,Object.assign({$maxLines:O,"aria-hidden":!0},{children:n}))]}),ce=r=>{const n=X(r),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel,a=J(i),s=o&&J(o),l=a||s?"next-line":F;return e(Jc,Object.assign({$labelDisplayType:l},{children:[t(Gc,Object.assign({$truncateType:_,$maxLines:O,"aria-label":i},{children:"middle"===_&&a?le(i):i})),o&&t(Xc,Object.assign({$truncateType:_,$maxLines:O,$labelDisplayType:F,"aria-label":o},{children:"middle"===_&&s?le(o):o}))]}))},ue=()=>{if(!$||$&&"success"===S)return I.map(((r,n)=>t(Qc,Object.assign({$checked:K(r)&&!b},{children:e(Uc,Object.assign({$hasNextLineLabel:"next-line"===F&&I.length>0&&o&&"string"!=typeof o(I[0]),onClick:e=>{ne(e,r)},ref:e=>V.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:c?0:-1,$multiSelect:b,onBlur:se},{children:[b&&t(tu,{checked:K(r),displaySize:"small"}),D?D(r,{selected:K(r)}):ce(r)]}))}),((e,t)=>`item_${t}__${a?a(e):e}`)(r,n))))},de=()=>{if(b&&I.length>0&&!E&&"success"===S)return t(ru,{children:t(nu,Object.assign({onClick:x,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!k&&(E||!u)&&0===I.length&&"success"===S)return e(iu,Object.assign({"data-testid":"list-no-results"},{children:[t(au,{"data-testid":"no-result-icon"}),t(ou,{children:"No results found."})]}),"noResults")},fe=()=>{if($&&"loading"===S)return e(iu,Object.assign({"data-testid":"list-loading"},{children:[t(Lc,{$buttonStyle:"secondary",size:24}),t(ou,{children:"Loading..."})]}),"loading")},pe=()=>{if($&&"fail"===S)return e(iu,Object.assign({"data-testid":"list-fail"},{children:[t(au,{"data-testid":"load-error-icon"}),t(ou,{children:"Failed to load."}),t(nu,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(Yc,Object.assign({style:N,"data-testid":c?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(c)return e(qc,Object.assign({ref:W,"data-testid":"dropdown-list",width:l,role:"list"},M,{children:[(u||g)&&"success"===S?t(gu,{ref:Y,onChange:ie,value:E,placeholder:d,"data-testid":"search-input","aria-label":"search-input",tabIndex:c?0:-1,onClear:oe}):null,de(),he(),fe(),pe(),ue()]}))})(),(()=>{if(c&&B)return t("div",Object.assign({ref:q,"data-testid":"custom-cta"},{children:B(y,I)}))})()]}))})},vu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",bu=$.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,wu=_`
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
        outline: 2px solid ${dc.Accent.Light[3]};
    }
`,xu=$.button`
    ${wu}
    cursor: pointer;
`;$.div`
    ${wu}
`;const $u=S`
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
`,Su=$.div`
    position: relative;
    border: 1px solid ${dc.Neutral[5]};
    border-radius: ${"4px"};
    background: ${dc.Neutral[8]};

    :focus-within {
        border: 1px solid ${dc.Accent.Light[1]};
        box-shadow: ${zc.InputBoxShadow};
    }

    ${e=>e.expanded?_`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:_`
                animation: ${$u} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?_`
                background: ${dc.Neutral[6](e)};

                ${xu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${dc.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?_`
                border: none;
                background: transparent !important;

                ${xu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?_`
                border: 1px solid ${dc.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${dc.Validation.Red.Border(e)};
                    box-shadow: ${zc.InputErrorBoxShadow};
                }
            `:void 0}
`,_u=$.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${vu};
    margin-left: 1rem;
`,Ou=$(A)`
    color: ${dc.Neutral[3]};
    height: ${_c.Body.fontSize}rem;
    width: ${_c.Body.fontSize}rem;
`,Fu=$.div`
    height: 1px;
    background: ${dc.Neutral[5]};
    margin: 0 0.5rem;
`,Du=$.div`
    display: flex;
    flex: 1;
`,ju=$(Mc.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return _`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,ku=$(ju)`
    color: ${dc.Neutral[3]};
`,Bu=({children:e,show:r,error:n,disabled:i,testId:o,onBlur:a,readOnly:s,className:l})=>{const c=m();return((e,t,r="window",n)=>{const i=m();h((()=>{i.current=t}),[t]),h((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r])})("mousedown",(function(e){if(!i){if(c&&c.current.contains(e.target))return;r&&a()}}),"document"),t(bu,Object.assign({className:l},{children:t(Su,Object.assign({ref:c,error:n&&!r,disabled:i,$readOnly:s,expanded:r,"data-testid":o},{children:e}))}))},Mu=n=>{var{selectedOption:i,placeholder:o="Select",options:a,disabled:s,error:l,className:c,"data-testid":u,id:d,enableSearch:f=!1,searchFunction:g,searchPlaceholder:y,valueExtractor:v,valueToStringFunction:b,listExtractor:w,displayValueExtractor:x,onSelectOption:$,listStyleWidth:S,onShowOptions:_,onHideOptions:O,onRetry:F,optionsLoadState:D="success",optionTruncationType:j="end",renderCustomSelectedOption:k,renderListItem:B,hideNoResultsDisplay:M,renderCustomCallToAction:C,onBlur:A}=n,E=T(n,["selectedOption","placeholder","options","disabled","error","className","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","hideNoResultsDisplay","renderCustomCallToAction","onBlur"]);const[P,I]=p(i),[z,H]=p(!1),L=m(),N=m();h((()=>{I(i)}),[i]);const R=(e,t)=>{I(e),H(!1),Y(!1),L&&L.current.focus(),$&&$(e,t)},W=e=>{z&&(H(!1),Y(!1)),e&&L&&L.current.focus()},V=e=>{if("middle"===j){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),Nc.truncateOneLine((e=>"string"==typeof e?e:b(e)||e.toString())(e),t,120,8)}return e},Y=e=>{!e&&O&&O(),e&&_&&_()};return e(Bu,Object.assign({className:c,show:z,error:l&&!z,disabled:s,readOnly:E.readOnly,testId:u,onBlur:()=>{null==A||A(),H(!1),Y(!1)}},{children:[t(xu,Object.assign({ref:L,type:"button","data-testid":d||"selector",disabled:s,onClick:e=>{e.preventDefault(),s||E.readOnly||(H(!z),Y(!z),z&&(null==A||A()))},onBlur:()=>{z||null==A||A()}},E,{children:e(r,{children:[t(Du,Object.assign({ref:N},{children:P?k?k(P):t(ju,Object.assign({truncateType:j},{children:V(x?x(P):v?v(P):P.toString())})):t(ku,Object.assign({truncateType:j},{children:o}))})),!E.readOnly&&t(_u,Object.assign({expanded:z},{children:t(Ou,{})}))]})})),z&&t(Fu,{}),a&&a.length>0?t(yu,{listItems:a,onSelectItem:R,onDismiss:W,valueExtractor:v,listExtractor:w,listStyleWidth:S,visible:z,enableSearch:f,searchPlaceholder:y,searchFunction:g,"data-testid":"dropdown-list",selectedItems:P?[P]:[],onRetry:F,itemsLoadState:D,itemTruncationType:j,renderListItem:B,hideNoResultsDisplay:M,renderCustomCallToAction:C}):null]}))},Cu={Default:d.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=T(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Hc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[a&&t(Lc,Object.assign({},u)),t("span",{children:i})]}))})),Small:d.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=T(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Hc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[a&&t(Lc,Object.assign({},u,{size:16})),t("span",{children:i})]}))}))};var Au={exports:{}};Au.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(n),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,f=new Date,p=a||(i||o?1:f.getDate()),m=i||f.getFullYear(),g=0;i&&!o||(g=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,w+60*d.offset*1e3)):r?new Date(Date.UTC(m,g,p,y,v,b,w)):new Date(m,g,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var m=r.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Eu,Pu,Iu=Au.exports,Tu={exports:{}},zu=Tu.exports=(Eu={year:0,month:1,day:2,hour:3,minute:4,second:5},Pu={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Pu[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Pu[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,u=Eu[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=r(u).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),Hu={exports:{}};Hu.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var x=function(e){return e instanceof O},$=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),r&&(w[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!n&&i&&(b=i),i||!n&&b},S=function(e,t){if(x(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new O(r)},_=v;_.l=$,_.i=x,_.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function g(e){this.$L=$(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,r){return _.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!_.u(t)||t,u=_.p(e),f=function(e,t){var i=_.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return _.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return n?f(1,0):f(31,11);case c:return n?f(1,g):f(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return f(n?y-w:y+(6-w),g);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=_.p(e),u="set"+(this.$u?"UTC":""),f=(r={},r[s]=u+"Date",r[h]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[a]=u+"Hours",r[o]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(n,u){var h,f=this;n=Number(n);var p=_.p(u),m=function(e){var t=S(f);return _.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[o]=t,h[a]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*g;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},d=function(e){return _.s(o%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:u(r.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,l,2),ddd:u(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:_.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return n.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,m=_.p(h),g=S(n),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=_.m(this,g);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/r,p[o]=v/t,p[i]=v/e,p)[m]||v,f?b:_.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=$(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),F=O.prototype;return S.prototype=F,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,O,S),e.$i=!0),S},S.locale=$,S.isDayjs=x,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var Lu=Hu.exports,Nu={exports:{}};Nu.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Ru=Nu.exports,Wu={exports:{}};Wu.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Vu=Wu.exports,Yu={exports:{}};Yu.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var qu,Qu=Yu.exports;Lu.extend(Ru),Lu.extend(Vu),Lu.extend(Qu),Lu.extend(Iu),Lu.extend(zu),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Lu(t).startOf("week");return Uu(r).map((e=>Zu(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Zu(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Lu(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Lu(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Lu(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?Lu(n):void 0,i?Lu(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(qu||(qu={}));const Uu=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Zu=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Gu=[1,3,5,7,8,10,12],Xu=[4,6,9,11];var Ju,Ku,ed;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":Gu.includes(o)?Math.min(i,31).toString():Xu.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Lu(e,r);return Lu(t,r).diff(n,"minute")},e.toDayjs=e=>e?Lu(e):Lu(),e.addMinutesToTime=(e,t,r="HH:mm")=>Lu(e,r).add(t,"minutes").format(r)}(Ju||(Ju={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Lu(e).isBefore(n,"day"))||!(!i||!Lu(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Lu(e).isValid())return e}return""}}(Ku||(Ku={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ed||(ed={}));const td=$.input`
    ${kc("Body","regular")}
    color: ${dc.Neutral[1]};

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
        color: ${dc.Neutral[3]};
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
`,rd=$.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${dc.Neutral[3]};
    background-color: transparent;
    border: none;
`,nd=$(M)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,id=$.div`
    display: flex;
    width: 100%;
`,od=d.forwardRef(((n,i)=>{var{value:o,spacing:a,type:s,error:l,disabled:c,readOnly:u,onChange:d,onClear:h,allowClear:f=!1,className:p,styleType:g="bordered"}=n,y=T(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=m();w(i,(()=>v.current),[]);const b=function({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),o=n.substring(0,r.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(l,l)}}}}({ref:v,formatter:e=>Nc.transformWithSpaces(e,a)}),x=e=>{d&&(S()?_(e):d(e))},$=()=>{h&&h(),v&&v.current&&v.current.focus()},S=()=>"tel"===s&&a,_=e=>{const{nextValue:t,updateCaretPosition:r}=b(),n=t.replace(/\s/g,"");e.target.value=n,d(e),r()},O=o?(e=>e?S()?Nc.transformWithSpaces(e,a):e:"")(o):o,F=()=>e(r,{children:[t(td,Object.assign({"data-testid":"input",ref:v,disabled:c,value:O,onChange:x,type:s,readOnly:u},y)),f&&!c&&!u&&!!o&&t(rd,Object.assign({onClick:$,type:"button"},{children:t(nd,{"aria-hidden":!0})}))]});return t(r,{children:"no-border"===g?t(id,Object.assign({className:p},{children:F()})):t(cu,Object.assign({$disabled:c,$error:l,$readOnly:u,className:p},{children:F()}))})})),ad=$.nav`
    display: flex;
`,sd=$.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${pc.tablet} {
        align-self: center;
    }
`,ld=$.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,cd=$(lu)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${dc.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${dc.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${dc.Accent.Light[1]};
    }
`,ud=$(lu)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${dc.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${dc.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${dc.Accent.Light[1]};
    }
    ${e=>"left"===e.$position?_`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:_`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${pc.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,dd=$(Cu.Default)`
    background: ${e=>e.$selected?dc.Primary:dc.Neutral[8]};
    border: 1px solid
        ${e=>e.$selected?dc.Primary:dc.Neutral[5]};
    color: ${e=>e.$selected?dc.Neutral[8]:dc.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${e=>e.$selected?dc.Neutral[8]:dc.Neutral[1]};
        ${e=>e.$selected?_`
                    ${kc("Body",700)};
                `:_`
                    ${kc("Body",400)};
                `}
    }
    :hover {
        box-shadow: none;

        background: ${e=>e.$selected?dc.Primary:dc.Accent.Light[5]};
        border: 1px solid
            ${e=>e.$selected?dc.Primary:dc.Accent.Light[5]};
        span {
            color: ${e=>e.$selected?dc.Neutral[8]:dc.Primary};
            ${e=>e.$selected?_`
                        ${kc("Body",700)};
                    `:_`
                        ${kc("Body",600)};
                    `}
        }
    }

    :active,
    :focus {
        background: ${e=>e.$selected?dc.Primary:dc.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${dc.Accent.Light[1]};
        span {
            color: ${e=>e.$selected?dc.Neutral[8]:dc.Primary};

            ${e=>e.$selected?_`
                        ${kc("Body",700)};
                    `:_`
                        ${kc("Body",400)};
                    `}
        }
    }
`;$(lu)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${dc.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${dc.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${dc.Accent.Light[1]};
    }
`;const hd=$.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,fd=$.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${dc.Neutral[1]};

    display: flex;
    justify-content: center;
`,pd=$(Mc.Body)`
    white-space: nowrap;
`,md=$(Mc.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,gd=$(od)`
    ${kc("Body",400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${dc.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${kc("XSmall",400)};
        }
    }
`,yd=$.div`
    ${kc("XSmall",400)};

    background-color: ${dc.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${dc.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,vd=$.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,bd=d.forwardRef((({id:r,"data-testid":u,className:d,pageSize:f=10,totalItems:m,activePage:g,pageSizeOptions:y=wd,showFirstAndLastNav:v,showPageSizeChanger:b=!1,onPageChange:w,onPageSizeChange:x},$)=>{const S=I.exports.useMediaQuery({maxWidth:hc.mobileL}),_=y,[O,F]=p(!1),[D,j]=p(!1),[k,B]=p(""),[M,C]=p(_&&_.length>=1?_[0]:null),[A,E]=p(!S&&b&&M?M.value:f),P=Math.ceil(m/A),T=1===g,z=g===P,H=g>1?()=>Q(1):void 0,L=g<P?()=>Q(P):void 0,N=g>1?()=>Q(g-1):void 0,R=g<P?()=>Q(parseInt(g.toString())+1):void 0,W=e=>e?()=>ee():()=>J(),V=e=>e?()=>te():()=>K();h((()=>{g&&Y(g)}),[g]),h((()=>{var e;E(f),C(null!==(e=_.find((e=>e.value===f)))&&void 0!==e?e:null)}),[f]);const Y=e=>{B(e.toString())},q=()=>{F(!1),j(!1)},Q=e=>{w&&(w(e),Y(e))},U=()=>{const e=Math.min(P,g+5);Q(e),Y(e),F(!0),j(!1)},Z=()=>{const e=Math.max(1,g-5);Q(e),Y(e),F(!1),j(!0)},G=e=>{const t=e.target.value;if(void 0===t||0===t.length)B("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));Y(Math.max(1,Math.min(P,e)))}else B(t.replace(/[^0-9]/g,""))},X=e=>{e.preventDefault(),k&&w(parseInt(k))},J=()=>{F(!0)},K=()=>{F(!1)},ee=()=>{j(!0)},te=()=>{j(!1)},re=(r,o,a)=>e(hd,{children:[t(cd,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":r?"Previous 5 pages":"Next 5 pages",onMouseOver:W(r),onMouseOut:V(r),onFocus:W(r),onBlur:V(r),onClick:r?Z:U},{children:t(r&&D?n:o&&O?i:c,{"aria-hidden":!0})})),r&&D&&t(yd,{children:"Previous 5 pages"}),o&&O&&t(yd,{children:"Next 5 pages"})]},a);return e(ad,Object.assign({className:d,ref:$,id:r||"pagination-wrapper","data-testid":u||"pagination","aria-label":"Pagination"},{children:[t(sd,{children:e(ld,{children:[v&&t(ud,Object.assign({onClick:H,disabled:T,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:t(a,{"aria-hidden":!0})})),t(ud,Object.assign({onClick:N,disabled:T,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:t(o,{"aria-hidden":!0})})),S?e(fd,{children:[t("form",Object.assign({onSubmit:X},{children:t(gd,{value:k,onChange:G,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(u||"pagination")+"-input"})})),t(md,{children:"/"}),t(pd,{children:P})]}):[...Array(P)].map(((e,r)=>{const n=r+1,i=P-5,o=g===n;if(P<=7)return t(dd,Object.assign({onClick:()=>Q(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:q,onFocus:q},{children:n}),n);const a=g+1>5&&2===n,s=g-1<=i&&n===P-1-1;return a||s?re(a,s,n):n<=5&&g+1<=5||n<=1||n===g||n<=g+1&&n>=g-1-1||n>i&&g-1>i||n>P-1?t(dd,Object.assign({onClick:()=>Q(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:q,onFocus:q},{children:n}),n):null})),t(ud,Object.assign({onClick:R,disabled:z,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:t(l,{"aria-hidden":!0})})),v&&t(ud,Object.assign({onClick:L,disabled:z,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:t(s,{"aria-hidden":!0})}))]})}),b&&!S&&t(vd,{children:t(Mu,{options:_,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:M,onSelectOption:e=>{C(e);const t=e.value,r=Math.ceil(m/t);E(t);x&&x(g>=r?r:g,t)}})})]}))})),wd=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}];export{bd as Pagination};
//# sourceMappingURL=index.js.map
