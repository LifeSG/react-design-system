import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import{Chevron2LeftIcon as n}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as i}from"@lifesg/react-icons/chevron-2-right";import{ChevronLeftIcon as o}from"@lifesg/react-icons/chevron-left";import{ChevronLineLeftIcon as a}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as l}from"@lifesg/react-icons/chevron-line-right";import{ChevronRightIcon as s}from"@lifesg/react-icons/chevron-right";import{EllipsisHorizontalIcon as c}from"@lifesg/react-icons/ellipsis-horizontal";import*as u from"react";import d,{useRef as f,useState as h,isValidElement as p,createRef as g,cloneElement as m,PureComponent as y,useEffect as v,useLayoutEffect as b,useCallback as $,useMemo as S,forwardRef as x,useContext as w,useImperativeHandle as F}from"react";import O,{css as B,useTheme as D,keyframes as j}from"styled-components";import{ExternalIcon as k}from"@lifesg/react-icons/external";import{findDOMNode as E}from"react-dom";import{ExclamationCircleFillIcon as _}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as T}from"@lifesg/react-icons/square";import{SquareTickFillIcon as H}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as C}from"@lifesg/react-icons/tick";import{CrossIcon as A}from"@lifesg/react-icons/cross";import{MagnifierIcon as M}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as P}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as z}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as I,useFloating as L,autoUpdate as R,offset as N,flip as W,shift as Y,limitShift as V,size as J,useTransitionStyles as q,useClick as U,useDismiss as Z,useInteractions as X,FloatingPortal as Q,FloatingFocusManager as G}from"@floating-ui/react";var K="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ee(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var te,re={exports:{}};te=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return l(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var i=e.expressions.every((function(e){var r=e.feature,n=e.modifier,i=e.value,o=t[r];if(!o)return!1;switch(r){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=u(i),o=u(o);break;case"resolution":i=c(i),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=s(i),o=s(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!r||!i&&r}))},t.parse=l;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function l(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),o=t[1],a=t[2],l=t[3]||"",s={};return s.inverse=!!o&&"not"===o.toLowerCase(),s.type=a?a.toLowerCase():"all",l=l.match(/\([^\)]+\)/g)||[],s.expressions=l.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(i);return{modifier:r[1],feature:r[2],value:t[2]}})),s}))}function s(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}const l=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(n,a);return o[e]=i.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,t,r){var o=this;if(i&&!r){var a=i.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(l)}else this.matches=n(e,t),this.media=e;function l(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(l)}}e.exports=function(e,t,r){return new o(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in o=Object(arguments[s]))r.call(o,c)&&(l[c]=o[c]);if(t){a=t(o);for(var u=0;u<a.length;u++)n.call(o,a[u])&&(l[a[u]]=o[a[u]])}}return l}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function l(e,t,r,l,s){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((l||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,l,r,null,i)}catch(e){u=e}if(!u||u instanceof Error||n((l||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var f=s?s():"";n("Failed "+r+" type: "+u.message+(null!=f?f:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},l.resetWarningCache=function(){o={}},e.exports=l},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),l=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),s=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(c),arrayOf:function(e){return g((function(t,r,n,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var l=t[r];if(!Array.isArray(l))return new p("Invalid "+i+" `"+o+"` of type `"+b(l)+"` supplied to `"+n+"`, expected an array.");for(var s=0;s<l.length;s++){var c=e(l,s,n,i,o+"["+s+"]",a);if(c instanceof Error)return c}return null}))},element:g((function(t,r,n,i,o){var a=t[r];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(e,t,r,n,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+n+" `"+o+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||d;return new p("Invalid "+i+" `"+o+"` of type `"+((l=t[r]).constructor&&l.constructor.name?l.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var l;return null}))},node:g((function(e,t,r,n,i){return v(e[t])?null:new p("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,r,n,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var s=t[r],c=b(s);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var u in s)if(l(s,u)){var d=e(s,u,n,i,o+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,r,n,i,o){for(var a=t[r],l=0;l<e.length;l++)if(h(a,e[l]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===$(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+s+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(r)+" at index "+t+"."),c}return g((function(t,r,n,i,o){for(var s=[],c=0;c<e.length;c++){var u=(0,e[c])(t,r,n,i,o,a);if(null==u)return null;u.data&&l(u.data,"expectedType")&&s.push(u.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(s.length>0?", expected one of type ["+s.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,r,n,i,o){var l=t[r],s=b(l);if("object"!==s)return new p("Invalid "+i+" `"+o+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(n,i,o,c,$(u));var d=u(l,c,n,i,o+"."+c,a);if(d)return d}return null}))},exact:function(e){return g((function(t,r,n,i,s){var c=t[r],u=b(c);if("object"!==u)return new p("Invalid "+i+" `"+s+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var d=o({},t[r],e);for(var f in d){var h=e[f];if(l(e,f)&&"function"!=typeof h)return y(n,i,s,f,$(h));if(!h)return new p("Invalid "+i+" `"+s+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=h(c,f,n,i,s+"."+f,a);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var r={},i=0;function o(o,l,s,c,u,f,h){if(c=c||d,f=f||s,h!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+s;!r[m]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,i++)}}return null==l[s]?o?null===l[s]?new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(l,s,c,u,f)}var l=o.bind(null,!1);return l.isRequired=o.bind(null,!0),l}function m(e){return g((function(t,r,n,i,o,a){var l=t[r];return b(l)!==e?new p("Invalid "+i+" `"+o+"` of type `"+$(l)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,r,n,i){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[u]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function $(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=$(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=s,f.resetWarningCache=s.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var h=e.type;switch(h){case c:case u:case i:case a:case o:case f:return h;default:var m=h&&h.$$typeof;switch(m){case s:case d:case g:case p:case l:return m;default:return t}}case n:return t}}}var S=c,x=u,w=s,F=l,O=r,B=d,D=i,j=g,k=p,E=n,_=a,T=o,H=f,C=!1;function A(e){return $(e)===u}t.AsyncMode=S,t.ConcurrentMode=x,t.ContextConsumer=w,t.ContextProvider=F,t.Element=O,t.ForwardRef=B,t.Fragment=D,t.Lazy=j,t.Memo=k,t.Portal=E,t.Profiler=_,t.StrictMode=T,t.Suspense=H,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||$(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return $(e)===s},t.isContextProvider=function(e){return $(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return $(e)===d},t.isFragment=function(e){return $(e)===i},t.isLazy=function(e){return $(e)===g},t.isMemo=function(e){return $(e)===p},t.isPortal=function(e){return $(e)===n},t.isProfiler=function(e){return $(e)===a},t.isStrictMode=function(e){return $(e)===o},t.isSuspense=function(e){return $(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===o||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===l||e.$$typeof===s||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===m)},t.typeOf=$}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),i=r.length;if(n.length!==i)return!1;for(var o=0;o<i;o++){var a=r[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,i=e.onChange,a=n(e,["children","device","onChange"]),l=(0,o.default)(a,r,i);return"function"==typeof t?t(l):l?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var i=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=i.default;var o=n(r(/*! ./Component */"./src/Component.ts"));t.default=o.default;var a=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var l=n(r(/*! ./Context */"./src/Context.ts"));t.Context=l.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(/*! prop-types */"./node_modules/prop-types/index.js")),l=a.default.oneOfType([a.default.string,a.default.number]),s={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:l,deviceHeight:l,width:l,deviceWidth:l,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:l,type:Object.keys(s)},u=i(c,["type"]),d=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:l,maxHeight:l,minDeviceHeight:l,maxDeviceHeight:l,minWidth:l,maxWidth:l,minDeviceWidth:l,maxDeviceWidth:l,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:l,maxResolution:l},u),f=n(n({},s),d);t.default={all:f,types:s,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),o=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),l=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),s=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,s.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],o=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(c.default),r=function(){return u(e)||u(t)},n=(0,i.useState)(r),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=r();(0,l.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var s=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,i.useState)(r),a=n[0],l=n[1],s=d();return(0,i.useEffect)((function(){if(s){var e=r();return l(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),h=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(s),p=d();return(0,i.useEffect)((function(){p&&r&&r(h)}),[h]),(0,i.useEffect)((function(){return function(){s&&s.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var ne=re.exports=te(d),ie=function(e,t){return ie=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},ie(e,t)};var oe=function(){return oe=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},oe.apply(this,arguments)};var ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var le=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},se="object"==typeof ae&&ae&&ae.Object===Object&&ae,ce="object"==typeof self&&self&&self.Object===Object&&self,ue=se||ce||Function("return this")(),de=ue,fe=function(){return de.Date.now()},he=/\s/;var pe=function(e){for(var t=e.length;t--&&he.test(e.charAt(t)););return t},ge=/^\s+/;var me=function(e){return e?e.slice(0,pe(e)+1).replace(ge,""):e},ye=ue.Symbol,ve=ye,be=Object.prototype,$e=be.hasOwnProperty,Se=be.toString,xe=ve?ve.toStringTag:void 0;var we=function(e){var t=$e.call(e,xe),r=e[xe];try{e[xe]=void 0;var n=!0}catch(e){}var i=Se.call(e);return n&&(t?e[xe]=r:delete e[xe]),i},Fe=Object.prototype.toString;var Oe=we,Be=function(e){return Fe.call(e)},De=ye?ye.toStringTag:void 0;var je=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":De&&De in Object(e)?Oe(e):Be(e)},ke=function(e){return null!=e&&"object"==typeof e};var Ee=me,_e=le,Te=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==je(e)},He=/^[-+]0x[0-9a-f]+$/i,Ce=/^0b[01]+$/i,Ae=/^0o[0-7]+$/i,Me=parseInt;var Pe=le,ze=fe,Ie=function(e){if("number"==typeof e)return e;if(Te(e))return NaN;if(_e(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=_e(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ee(e);var r=Ce.test(e);return r||Ae.test(e)?Me(e.slice(2),r?2:8):He.test(e)?NaN:+e},Le=Math.max,Re=Math.min;var Ne=function(e,t,r){var n,i,o,a,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-s;return void 0===s||r>=t||r<0||d&&e-c>=o}function g(){var e=ze();if(p(e))return m(e);l=setTimeout(g,function(e){var r=t-(e-s);return d?Re(r,o-(e-c)):r}(e))}function m(e){return l=void 0,f&&n?h(e):(n=i=void 0,a)}function y(){var e=ze(),r=p(e);if(n=arguments,i=this,s=e,r){if(void 0===l)return function(e){return c=e,l=setTimeout(g,t),u?h(e):a}(s);if(d)return clearTimeout(l),l=setTimeout(g,t),h(s)}return void 0===l&&(l=setTimeout(g,t)),a}return t=Ie(t)||0,Pe(r)&&(u=!!r.leading,o=(d="maxWait"in r)?Le(Ie(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),y.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=s=i=l=void 0},y.flush=function(){return void 0===l?a:m(ze())},y},We=Ne,Ye=le;var Ve=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ye(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),We(e,t,{leading:n,maxWait:t,trailing:i})},Je=function(e,t,r,n){switch(t){case"debounce":return Ne(e,r,n);case"throttle":return Ve(e,r,n);default:return e}},qe=function(e){return"function"==typeof e},Ue=function(){return"undefined"==typeof window},Ze=function(e){return e instanceof Element||e instanceof HTMLDocument},Xe=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&qe(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Ue()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Ue())return null;if(t)return document.querySelector(t);if(n&&Ze(n))return n;if(r.targetRef&&Ze(r.targetRef.current))return r.targetRef.current;var i=E(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,a=void 0===o||o,l=t.onResize;if(i||a){var s=Xe(l,r.setState.bind(r),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!Ue()&&s({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return qe(t)?"renderProp":qe(n)?"childFunction":p(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,l=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=g(),r.observableElement=null,Ue()||(r.resizeHandler=Je(r.createResizeHandler,i,a,l),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}ie(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Ue()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,i=t.nodeType,o=void 0===i?"div":i,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=n)(l);case"child":if((e=n).type&&"string"==typeof e.type){var s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return m(e,s)}return m(e,l);case"childArray":return(e=n).map((function(e){return!!e&&m(e,l)}));default:return u.createElement(o,null)}}}(y);var Qe=Ue()?v:b;function Ge(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,a=e.refreshOptions,l=e.handleWidth,s=void 0===l||l,c=e.handleHeight,u=void 0===c||c,d=e.targetRef,p=e.observerOptions,g=e.onResize,m=f(r),y=f(null),v=null!=d?d:y,b=f(),$=h({width:void 0,height:void 0}),S=$[0],x=$[1];return Qe((function(){if(!Ue()){var e=Xe(g,x,s,u);b.current=Je((function(t){(s||u)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!Ue()&&e({width:n,height:i}),m.current=!1}))}),n,o,a);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[n,o,a,s,u,g,p,v.current]),oe({ref:v},S)}const Ke={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},et={D1:{fontFamily:Ke.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ke.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ke.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ke.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ke.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ke.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ke.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ke.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ke.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ke.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ke.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ke.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ke.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ke.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},tt={D1:{fontFamily:Ke.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Ke.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Ke.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ke.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ke.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ke.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Ke.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ke.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ke.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Ke.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Ke.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Ke.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Ke.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ke.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},rt={D1:{fontFamily:Ke.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Ke.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Ke.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ke.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ke.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Ke.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Ke.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Ke.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Ke.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Ke.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Ke.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Ke.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Ke.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Ke.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var nt=Array.isArray,it="object"==typeof K&&K&&K.Object===Object&&K,ot=it,at="object"==typeof self&&self&&self.Object===Object&&self,lt=ot||at||Function("return this")(),st=lt.Symbol,ct=st,ut=Object.prototype,dt=ut.hasOwnProperty,ft=ut.toString,ht=ct?ct.toStringTag:void 0;var pt=function(e){var t=dt.call(e,ht),r=e[ht];try{e[ht]=void 0;var n=!0}catch(e){}var i=ft.call(e);return n&&(t?e[ht]=r:delete e[ht]),i},gt=Object.prototype.toString;var mt=pt,yt=function(e){return gt.call(e)},vt=st?st.toStringTag:void 0;var bt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":vt&&vt in Object(e)?mt(e):yt(e)};var $t=function(e){return null!=e&&"object"==typeof e},St=bt,xt=$t;var wt=function(e){return"symbol"==typeof e||xt(e)&&"[object Symbol]"==St(e)},Ft=nt,Ot=wt,Bt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dt=/^\w*$/;var jt=function(e,t){if(Ft(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ot(e))||(Dt.test(e)||!Bt.test(e)||null!=t&&e in Object(t))};var kt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Et=bt,_t=kt;var Tt,Ht=function(e){if(!_t(e))return!1;var t=Et(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ct=lt["__core-js_shared__"],At=(Tt=/[^.]+$/.exec(Ct&&Ct.keys&&Ct.keys.IE_PROTO||""))?"Symbol(src)_1."+Tt:"";var Mt=function(e){return!!At&&At in e},Pt=Function.prototype.toString;var zt=function(e){if(null!=e){try{return Pt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},It=Ht,Lt=Mt,Rt=kt,Nt=zt,Wt=/^\[object .+?Constructor\]$/,Yt=Function.prototype,Vt=Object.prototype,Jt=Yt.toString,qt=Vt.hasOwnProperty,Ut=RegExp("^"+Jt.call(qt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Zt=function(e){return!(!Rt(e)||Lt(e))&&(It(e)?Ut:Wt).test(Nt(e))},Xt=function(e,t){return null==e?void 0:e[t]};var Qt=function(e,t){var r=Xt(e,t);return Zt(r)?r:void 0},Gt=Qt(Object,"create"),Kt=Gt;var er=function(){this.__data__=Kt?Kt(null):{},this.size=0};var tr=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},rr=Gt,nr=Object.prototype.hasOwnProperty;var ir=function(e){var t=this.__data__;if(rr){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return nr.call(t,e)?t[e]:void 0},or=Gt,ar=Object.prototype.hasOwnProperty;var lr=Gt;var sr=er,cr=tr,ur=ir,dr=function(e){var t=this.__data__;return or?void 0!==t[e]:ar.call(t,e)},fr=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=lr&&void 0===t?"__lodash_hash_undefined__":t,this};function hr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}hr.prototype.clear=sr,hr.prototype.delete=cr,hr.prototype.get=ur,hr.prototype.has=dr,hr.prototype.set=fr;var pr=hr;var gr=function(){this.__data__=[],this.size=0};var mr=function(e,t){return e===t||e!=e&&t!=t},yr=mr;var vr=function(e,t){for(var r=e.length;r--;)if(yr(e[r][0],t))return r;return-1},br=vr,$r=Array.prototype.splice;var Sr=vr;var xr=vr;var wr=vr;var Fr=gr,Or=function(e){var t=this.__data__,r=br(t,e);return!(r<0)&&(r==t.length-1?t.pop():$r.call(t,r,1),--this.size,!0)},Br=function(e){var t=this.__data__,r=Sr(t,e);return r<0?void 0:t[r][1]},Dr=function(e){return xr(this.__data__,e)>-1},jr=function(e,t){var r=this.__data__,n=wr(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function kr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}kr.prototype.clear=Fr,kr.prototype.delete=Or,kr.prototype.get=Br,kr.prototype.has=Dr,kr.prototype.set=jr;var Er=kr,_r=Qt(lt,"Map"),Tr=pr,Hr=Er,Cr=_r;var Ar=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Mr=function(e,t){var r=e.__data__;return Ar(t)?r["string"==typeof t?"string":"hash"]:r.map},Pr=Mr;var zr=Mr;var Ir=Mr;var Lr=Mr;var Rr=function(e,t){var r=Lr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Nr=function(){this.size=0,this.__data__={hash:new Tr,map:new(Cr||Hr),string:new Tr}},Wr=function(e){var t=Pr(this,e).delete(e);return this.size-=t?1:0,t},Yr=function(e){return zr(this,e).get(e)},Vr=function(e){return Ir(this,e).has(e)},Jr=Rr;function qr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}qr.prototype.clear=Nr,qr.prototype.delete=Wr,qr.prototype.get=Yr,qr.prototype.has=Vr,qr.prototype.set=Jr;var Ur=qr,Zr=Ur;function Xr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Xr.Cache||Zr),r}Xr.Cache=Zr;var Qr=Xr;var Gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kr=/\\(\\)?/g,en=function(e){var t=Qr(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Gr,(function(e,r,n,i){t.push(n?i.replace(Kr,"$1"):r||e)})),t}));var tn=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},rn=nt,nn=wt,on=st?st.prototype:void 0,an=on?on.toString:void 0;var ln=function e(t){if("string"==typeof t)return t;if(rn(t))return tn(t,e)+"";if(nn(t))return an?an.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},sn=ln;var cn=nt,un=jt,dn=en,fn=function(e){return null==e?"":sn(e)};var hn=function(e,t){return cn(e)?e:un(e,t)?[e]:dn(fn(e))},pn=wt;var gn=function(e){if("string"==typeof e||pn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},mn=hn,yn=gn;var vn=function(e,t){for(var r=0,n=(t=mn(t,e)).length;null!=e&&r<n;)e=e[yn(t[r++])];return r&&r==n?e:void 0},bn=vn;var $n=function(e,t,r){var n=null==e?void 0:bn(e,t);return void 0===n?r:n},Sn=ee($n);const xn=(e,t,r)=>t?Sn(r,t)||Sn(e,t):r||e,wn=(e,t)=>{const r=t||e.defaultValue;return Sn(e.collections,r)};var Fn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Fn||(Fn={}));const On={collections:{base:et,oneservice:rt,plusJakartaSans:tt},defaultValue:"base"},Bn=e=>t=>{const r=t.theme,n=wn(On,r[Fn.textStyleScheme]);return r.options&&r.options.textStyle?xn(n,e,r.options.textStyle):xn(n,e)},Dn={D1:{fontFamily:Bn("D1.fontFamily"),fontSize:Bn("D1.fontSize"),fontWeight:Bn("D1.fontWeight"),lineHeight:Bn("D1.lineHeight"),letterSpacing:Bn("D1.letterSpacing")},D2:{fontFamily:Bn("D2.fontFamily"),fontSize:Bn("D2.fontSize"),fontWeight:Bn("D2.fontWeight"),lineHeight:Bn("D2.lineHeight"),letterSpacing:Bn("D2.letterSpacing")},D3:{fontFamily:Bn("D3.fontFamily"),fontSize:Bn("D3.fontSize"),fontWeight:Bn("D3.fontWeight"),lineHeight:Bn("D3.lineHeight"),letterSpacing:Bn("D3.letterSpacing")},D4:{fontFamily:Bn("D4.fontFamily"),fontSize:Bn("D4.fontSize"),fontWeight:Bn("D4.fontWeight"),lineHeight:Bn("D4.lineHeight"),letterSpacing:Bn("D4.letterSpacing")},DBody:{fontFamily:Bn("DBody.fontFamily"),fontSize:Bn("DBody.fontSize"),fontWeight:Bn("DBody.fontWeight"),lineHeight:Bn("DBody.lineHeight"),letterSpacing:Bn("DBody.letterSpacing")},H1:{fontFamily:Bn("H1.fontFamily"),fontSize:Bn("H1.fontSize"),fontWeight:Bn("H1.fontWeight"),lineHeight:Bn("H1.lineHeight"),letterSpacing:Bn("H1.letterSpacing")},H2:{fontFamily:Bn("H2.fontFamily"),fontSize:Bn("H2.fontSize"),fontWeight:Bn("H2.fontWeight"),lineHeight:Bn("H2.lineHeight"),letterSpacing:Bn("H2.letterSpacing")},H3:{fontFamily:Bn("H3.fontFamily"),fontSize:Bn("H3.fontSize"),fontWeight:Bn("H3.fontWeight"),lineHeight:Bn("H3.lineHeight"),letterSpacing:Bn("H3.letterSpacing")},H4:{fontFamily:Bn("H4.fontFamily"),fontSize:Bn("H4.fontSize"),fontWeight:Bn("H4.fontWeight"),lineHeight:Bn("H4.lineHeight"),letterSpacing:Bn("H4.letterSpacing")},H5:{fontFamily:Bn("H5.fontFamily"),fontSize:Bn("H5.fontSize"),fontWeight:Bn("H5.fontWeight"),lineHeight:Bn("H5.lineHeight"),letterSpacing:Bn("H5.letterSpacing")},H6:{fontFamily:Bn("H6.fontFamily"),fontSize:Bn("H6.fontSize"),fontWeight:Bn("H6.fontWeight"),lineHeight:Bn("H6.lineHeight"),letterSpacing:Bn("H6.letterSpacing")},Body:{fontFamily:Bn("Body.fontFamily"),fontSize:Bn("Body.fontSize"),fontWeight:Bn("Body.fontWeight"),lineHeight:Bn("Body.lineHeight"),letterSpacing:Bn("Body.letterSpacing")},BodySmall:{fontFamily:Bn("BodySmall.fontFamily"),fontSize:Bn("BodySmall.fontSize"),fontWeight:Bn("BodySmall.fontWeight"),lineHeight:Bn("BodySmall.lineHeight"),letterSpacing:Bn("BodySmall.letterSpacing")},XSmall:{fontFamily:Bn("XSmall.fontFamily"),fontSize:Bn("XSmall.fontSize"),fontWeight:Bn("XSmall.fontWeight"),lineHeight:Bn("XSmall.lineHeight"),letterSpacing:Bn("XSmall.letterSpacing")}},jn=[Ke.OpenSans,Ke.PlusJakartaSans],kn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},En=(e,t)=>r=>{var n;const i=Dn[e].fontFamily(r),o=Dn[e].fontWeight(r),a=jn.find((e=>Object.values(e).includes(i)));return a?B`
                font-family: ${kn(a,t)||kn(a,o)||i};
                font-weight: normal !important;
            `:B`
            font-family: ${i};
            font-weight: ${null!==(n=_n(t)||o)&&void 0!==n?n:"normal"};
        `},_n=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Tn=e=>{if(e>0)return B`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Hn=(e,t,r=!1)=>n=>{const i=Dn[e],o=i.fontSize(n);return B`
            ${En(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${B`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Cn=(e=!1,t=!1,r=void 0)=>t?B`
            display: block;
            ${Tn(r)}
        `:e?B`
            display: inline;
        `:B`
            display: block;
            ${Tn(r)}
        `;function An(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;const Mn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Pn=e=>t=>{const r=t.theme,n=wn(Mn,r[Fn.colorScheme]);return r.options&&r.options.color?xn(n,e,r.options.color):xn(n,e)},zn={Brand:{1:Pn("Brand.1"),2:Pn("Brand.2"),3:Pn("Brand.3"),4:Pn("Brand.4"),5:Pn("Brand.5"),6:Pn("Brand.6")},Primary:Pn("Primary"),PrimaryDark:Pn("PrimaryDark"),Secondary:Pn("Secondary"),Accent:{Light:{1:Pn("Accent.Light.1"),2:Pn("Accent.Light.2"),3:Pn("Accent.Light.3"),4:Pn("Accent.Light.4"),5:Pn("Accent.Light.5"),6:Pn("Accent.Light.6")},Dark:{1:Pn("Accent.Dark.1"),2:Pn("Accent.Dark.2"),3:Pn("Accent.Dark.3")}},Neutral:{1:Pn("Neutral.1"),2:Pn("Neutral.2"),3:Pn("Neutral.3"),4:Pn("Neutral.4"),5:Pn("Neutral.5"),6:Pn("Neutral.6"),7:Pn("Neutral.7"),8:Pn("Neutral.8")},Validation:{Green:{Text:Pn("Validation.Green.Text"),Icon:Pn("Validation.Green.Icon"),Border:Pn("Validation.Green.Border"),Background:Pn("Validation.Green.Background")},Orange:{Text:Pn("Validation.Orange.Text"),Icon:Pn("Validation.Orange.Icon"),Border:Pn("Validation.Orange.Border"),Background:Pn("Validation.Orange.Background"),Badge:Pn("Validation.Orange.Badge")},Red:{Text:Pn("Validation.Red.Text"),Icon:Pn("Validation.Red.Icon"),Border:Pn("Validation.Red.Border"),Background:Pn("Validation.Red.Background")},Blue:{Text:Pn("Validation.Blue.Text"),Icon:Pn("Validation.Blue.Icon"),Border:Pn("Validation.Blue.Border"),Background:Pn("Validation.Blue.Background")}},Shadow:{Accent:Pn("Shadow.Accent"),Red:Pn("Shadow.Red"),Elevation:Pn("Shadow.Elevation")}};var In;!function(e){e.D1=O.h1`
        ${e=>B`
                ${Hn("D1",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=O.h1`
        ${e=>B`
                ${Hn("D2",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=O.h1`
        ${e=>B`
                ${Hn("D3",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=O.h1`
        ${e=>B`
                ${Hn("D4",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=O.h1`
        ${e=>B`
                ${Hn("DBody",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=O.h1`
        ${e=>B`
                ${Hn("H1",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=O.h2`
        ${e=>B`
                ${Hn("H2",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=O.h3`
        ${e=>B`
                ${Hn("H3",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=O.h4`
        ${e=>B`
                ${Hn("H4",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=O.h5`
        ${e=>B`
                ${Hn("H5",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=O.h6`
        ${e=>B`
                ${Hn("H6",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=O.p`
        ${e=>B`
                ${Hn("Body",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=O.p`
        ${e=>B`
                ${Hn("BodySmall",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=O.span`
        ${e=>B`
                ${Hn("XSmall",e.weight,e.paragraph)}
                color: ${zn.Neutral[1]};
                ${Cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Nn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Nn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(In||(In={}));const Ln=O.a`
    ${e=>B`
            ${Hn(e.textStyle,e.weight)}
            color: ${zn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${zn.Secondary};

                svg {
                    color: ${zn.Secondary};
                }
            }
        `}
`,Rn=O(k)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Nn=r=>{var{external:n=!1,children:i}=r,o=An(r,["external","children"]);return e(Ln,Object.assign({},o,{children:[i,n&&t(Rn,{})]}))};var Wn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Wn||(Wn={}));const Yn={[Fn.colorScheme]:"base",[Fn.textStyleScheme]:"base",[Fn.designTokenScheme]:"base",[Fn.resourceScheme]:"base"};var Vn;Fn.colorScheme,Fn.textStyleScheme,Fn.designTokenScheme,Fn.resourceScheme,Fn.colorScheme,Fn.textStyleScheme,Fn.designTokenScheme,Fn.resourceScheme,Fn.colorScheme,Fn.textStyleScheme,Fn.designTokenScheme,Fn.resourceScheme,Fn.colorScheme,Fn.textStyleScheme,Fn.designTokenScheme,Fn.resourceScheme,Fn.colorScheme,Fn.textStyleScheme,Fn.designTokenScheme,Fn.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:l}=r;if(l)return l(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Vn||(Vn={}));const Jn=B`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,qn=O.div`
    ${e=>Hn("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?zn.Primary:zn.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Jn}
`,Un=O.div`
    color: ${zn.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Jn}

    ${e=>"next-line"===e.$labelDisplayType?B`
                    ${Hn("BodySmall","semibold")}
                `:B`
                    ${Hn("Body","regular")}
                `}
`,Zn=O.span`
    ${e=>Hn("small"===e.$variant?"BodySmall":"Body","semibold")}
`,Xn=O.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return B`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return B`
                    ${qn} {
                        display: inline;
                    }

                    ${Un} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Qn=O.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Gn=O.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Kn=({bold:n,displayType:i="inline",label:o,searchTerm:a,maxLines:l=2,selected:s,sublabel:c,truncationType:u="middle",variant:d})=>{const f=D()||Yn,h=Dn.Body.fontSize({theme:f}),p=Dn.Body.fontFamily({theme:f}),{ref:g,width:m}=Ge(),y=$((e=>{if("inline"!==i)return!1;return Vn.getTextWidth(e,`${h}rem '${p}'`)>m*l-50}),[m,i,h,p,l]),v=S((()=>y(o)),[y,o]),b=S((()=>c&&y(c)),[y,c]),x=v||b?"next-line":i,w=n=>{if(!a)return n;const i=a.toLowerCase().trim(),l=n.toLowerCase().indexOf(i),s=l+a.length;return-1===l?n:e(r,{children:[o.slice(0,l),t(Zn,Object.assign({$variant:d},{children:o.slice(l,s)})),o.slice(s)]})},F=n=>e(r,{children:[t(Qn,Object.assign({$maxLines:l,"aria-hidden":!0},{children:w(n)})),t(Gn,Object.assign({$maxLines:l,"aria-hidden":!0},{children:w(n)}))]});return e(Xn,Object.assign({ref:g,$labelDisplayType:x},{children:[t(qn,Object.assign({"aria-label":o,$bold:n,$maxLines:l,$selected:s,$truncateType:u,$variant:d},{children:"middle"===u&&v?F(o):w(o)})),c&&t(Un,Object.assign({"aria-label":c,$maxLines:l,$truncateType:u,$labelDisplayType:i},{children:"middle"===u&&b?F(c):c}))]}))};var ei=Er;var ti=Er,ri=_r,ni=Ur;var ii=Er,oi=function(){this.__data__=new ei,this.size=0},ai=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},li=function(e){return this.__data__.get(e)},si=function(e){return this.__data__.has(e)},ci=function(e,t){var r=this.__data__;if(r instanceof ti){var n=r.__data__;if(!ri||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new ni(n)}return r.set(e,t),this.size=r.size,this};function ui(e){var t=this.__data__=new ii(e);this.size=t.size}ui.prototype.clear=oi,ui.prototype.delete=ai,ui.prototype.get=li,ui.prototype.has=si,ui.prototype.set=ci;var di=ui;var fi=Ur,hi=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},pi=function(e){return this.__data__.has(e)};function gi(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new fi;++t<r;)this.add(e[t])}gi.prototype.add=gi.prototype.push=hi,gi.prototype.has=pi;var mi=gi,yi=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},vi=function(e,t){return e.has(t)};var bi=function(e,t,r,n,i,o){var a=1&r,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=2&r?new mi:void 0;for(o.set(e,t),o.set(t,e);++d<l;){var p=e[d],g=t[d];if(n)var m=a?n(g,p,d,t,e,o):n(p,g,d,e,t,o);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!yi(t,(function(e,t){if(!vi(h,t)&&(p===e||i(p,e,r,n,o)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!i(p,g,r,n,o)){f=!1;break}}return o.delete(e),o.delete(t),f};var $i=lt.Uint8Array,Si=mr,xi=bi,wi=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Fi=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Oi=st?st.prototype:void 0,Bi=Oi?Oi.valueOf:void 0;var Di=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new $i(e),new $i(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Si(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=wi;case"[object Set]":var s=1&n;if(l||(l=Fi),e.size!=t.size&&!s)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=xi(l(e),l(t),n,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Bi)return Bi.call(e)==Bi.call(t)}return!1};var ji=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},ki=ji,Ei=nt;var _i=function(e,t,r){var n=t(e);return Ei(e)?n:ki(n,r(e))};var Ti=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},Hi=function(){return[]},Ci=Object.prototype.propertyIsEnumerable,Ai=Object.getOwnPropertySymbols,Mi=Ai?function(e){return null==e?[]:(e=Object(e),Ti(Ai(e),(function(t){return Ci.call(e,t)})))}:Hi;var Pi=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},zi=bt,Ii=$t;var Li=function(e){return Ii(e)&&"[object Arguments]"==zi(e)},Ri=$t,Ni=Object.prototype,Wi=Ni.hasOwnProperty,Yi=Ni.propertyIsEnumerable,Vi=Li(function(){return arguments}())?Li:function(e){return Ri(e)&&Wi.call(e,"callee")&&!Yi.call(e,"callee")},Ji={exports:{}};var qi=function(){return!1};!function(e,t){var r=lt,n=qi,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,l=(a?a.isBuffer:void 0)||n;e.exports=l}(Ji,Ji.exports);var Ui=Ji.exports,Zi=/^(?:0|[1-9]\d*)$/;var Xi=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Zi.test(e))&&e>-1&&e%1==0&&e<t};var Qi=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Gi=bt,Ki=Qi,eo=$t,to={};to["[object Float32Array]"]=to["[object Float64Array]"]=to["[object Int8Array]"]=to["[object Int16Array]"]=to["[object Int32Array]"]=to["[object Uint8Array]"]=to["[object Uint8ClampedArray]"]=to["[object Uint16Array]"]=to["[object Uint32Array]"]=!0,to["[object Arguments]"]=to["[object Array]"]=to["[object ArrayBuffer]"]=to["[object Boolean]"]=to["[object DataView]"]=to["[object Date]"]=to["[object Error]"]=to["[object Function]"]=to["[object Map]"]=to["[object Number]"]=to["[object Object]"]=to["[object RegExp]"]=to["[object Set]"]=to["[object String]"]=to["[object WeakMap]"]=!1;var ro=function(e){return eo(e)&&Ki(e.length)&&!!to[Gi(e)]};var no=function(e){return function(t){return e(t)}},io={exports:{}};!function(e,t){var r=it,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(io,io.exports);var oo=io.exports,ao=ro,lo=no,so=oo&&oo.isTypedArray,co=so?lo(so):ao,uo=Pi,fo=Vi,ho=nt,po=Ui,go=Xi,mo=co,yo=Object.prototype.hasOwnProperty;var vo=function(e,t){var r=ho(e),n=!r&&fo(e),i=!r&&!n&&po(e),o=!r&&!n&&!i&&mo(e),a=r||n||i||o,l=a?uo(e.length,String):[],s=l.length;for(var c in e)!t&&!yo.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||go(c,s))||l.push(c);return l},bo=Object.prototype;var $o=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||bo)};var So=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),xo=$o,wo=So,Fo=Object.prototype.hasOwnProperty;var Oo=Ht,Bo=Qi;var Do=function(e){return null!=e&&Bo(e.length)&&!Oo(e)},jo=vo,ko=function(e){if(!xo(e))return wo(e);var t=[];for(var r in Object(e))Fo.call(e,r)&&"constructor"!=r&&t.push(r);return t},Eo=Do;var _o=function(e){return Eo(e)?jo(e):ko(e)},To=_i,Ho=Mi,Co=_o;var Ao=function(e){return To(e,Co,Ho)},Mo=Object.prototype.hasOwnProperty;var Po=function(e,t,r,n,i,o){var a=1&r,l=Ao(e),s=l.length;if(s!=Ao(t).length&&!a)return!1;for(var c=s;c--;){var u=l[c];if(!(a?u in t:Mo.call(t,u)))return!1}var d=o.get(e),f=o.get(t);if(d&&f)return d==t&&f==e;var h=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<s;){var g=e[u=l[c]],m=t[u];if(n)var y=a?n(m,g,u,t,e,o):n(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){h=!1;break}p||(p="constructor"==u)}if(h&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(h=!1)}return o.delete(e),o.delete(t),h},zo=Qt(lt,"DataView"),Io=_r,Lo=Qt(lt,"Promise"),Ro=Qt(lt,"Set"),No=Qt(lt,"WeakMap"),Wo=bt,Yo=zt,Vo="[object Map]",Jo="[object Promise]",qo="[object Set]",Uo="[object WeakMap]",Zo="[object DataView]",Xo=Yo(zo),Qo=Yo(Io),Go=Yo(Lo),Ko=Yo(Ro),ea=Yo(No),ta=Wo;(zo&&ta(new zo(new ArrayBuffer(1)))!=Zo||Io&&ta(new Io)!=Vo||Lo&&ta(Lo.resolve())!=Jo||Ro&&ta(new Ro)!=qo||No&&ta(new No)!=Uo)&&(ta=function(e){var t=Wo(e),r="[object Object]"==t?e.constructor:void 0,n=r?Yo(r):"";if(n)switch(n){case Xo:return Zo;case Qo:return Vo;case Go:return Jo;case Ko:return qo;case ea:return Uo}return t});var ra=di,na=bi,ia=Di,oa=Po,aa=ta,la=nt,sa=Ui,ca=co,ua="[object Arguments]",da="[object Array]",fa="[object Object]",ha=Object.prototype.hasOwnProperty;var pa=function(e,t,r,n,i,o){var a=la(e),l=la(t),s=a?da:aa(e),c=l?da:aa(t),u=(s=s==ua?fa:s)==fa,d=(c=c==ua?fa:c)==fa,f=s==c;if(f&&sa(e)){if(!sa(t))return!1;a=!0,u=!1}if(f&&!u)return o||(o=new ra),a||ca(e)?na(e,t,r,n,i,o):ia(e,t,s,r,n,i,o);if(!(1&r)){var h=u&&ha.call(e,"__wrapped__"),p=d&&ha.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return o||(o=new ra),i(g,m,r,n,o)}}return!!f&&(o||(o=new ra),oa(e,t,r,n,i,o))},ga=$t;var ma=function e(t,r,n,i,o){return t===r||(null==t||null==r||!ga(t)&&!ga(r)?t!=t&&r!=r:pa(t,r,n,i,e,o))},ya=di,va=ma;var ba=kt;var $a=function(e){return e==e&&!ba(e)},Sa=$a,xa=_o;var wa=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Fa=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var l=r[i];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<o;){var s=(l=r[i])[0],c=e[s],u=l[1];if(a&&l[2]){if(void 0===c&&!(s in e))return!1}else{var d=new ya;if(n)var f=n(c,u,s,e,t,d);if(!(void 0===f?va(u,c,3,n,d):f))return!1}}return!0},Oa=function(e){for(var t=xa(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Sa(i)]}return t},Ba=wa;var Da=hn,ja=Vi,ka=nt,Ea=Xi,_a=Qi,Ta=gn;var Ha=function(e,t){return null!=e&&t in Object(e)},Ca=function(e,t,r){for(var n=-1,i=(t=Da(t,e)).length,o=!1;++n<i;){var a=Ta(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&_a(i)&&Ea(a,i)&&(ka(e)||ja(e))};var Aa=ma,Ma=$n,Pa=function(e,t){return null!=e&&Ca(e,t,Ha)},za=jt,Ia=$a,La=wa,Ra=gn;var Na=vn;var Wa=function(e){return function(t){return null==t?void 0:t[e]}},Ya=function(e){return function(t){return Na(t,e)}},Va=jt,Ja=gn;var qa=function(e){var t=Oa(e);return 1==t.length&&t[0][2]?Ba(t[0][0],t[0][1]):function(r){return r===e||Fa(r,e,t)}},Ua=function(e,t){return za(e)&&Ia(t)?La(Ra(e),t):function(r){var n=Ma(r,e);return void 0===n&&n===t?Pa(r,e):Aa(t,n,3)}},Za=function(e){return e},Xa=nt,Qa=function(e){return Va(e)?Wa(Ja(e)):Ya(e)};var Ga=function(e){return"function"==typeof e?e:null==e?Za:"object"==typeof e?Xa(e)?Ua(e[0],e[1]):qa(e):Qa(e)},Ka=Ga,el=Do,tl=_o;var rl=function(e){return function(t,r,n){var i=Object(t);if(!el(t)){var o=Ka(r);t=tl(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var nl=/\s/;var il=function(e){for(var t=e.length;t--&&nl.test(e.charAt(t)););return t},ol=/^\s+/;var al=function(e){return e?e.slice(0,il(e)+1).replace(ol,""):e},ll=kt,sl=wt,cl=/^[-+]0x[0-9a-f]+$/i,ul=/^0b[01]+$/i,dl=/^0o[0-7]+$/i,fl=parseInt;var hl=function(e){if("number"==typeof e)return e;if(sl(e))return NaN;if(ll(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ll(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=al(e);var r=ul.test(e);return r||dl.test(e)?fl(e.slice(2),r?2:8):cl.test(e)?NaN:+e},pl=1/0;var gl=function(e){return e?(e=hl(e))===pl||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var ml=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},yl=Ga,vl=function(e){var t=gl(e),r=t%1;return t==t?r?t-r:t:0},bl=Math.max;var $l=ee(rl((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:vl(r);return i<0&&(i=bl(n+i,0)),ml(e,yl(t),i)}))),Sl=ma;var xl=ee((function(e,t){return Sl(e,t)}));const wl={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Fl=e=>Object.keys(wl).reduce(((t,r)=>{const n=wl[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Ol=Fl("max-width"),Bl=(Fl("min-width"),wl),Dl=O.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,jl=j`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,kl=O.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||zn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${jl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,El=O(kl)`
    animation-delay: -0.45s;
`,_l=O(kl)`
    animation-delay: -0.3s;
`,Tl=O(kl)`
    animation-delay: -0.15s;
`,Hl={collections:{base:{InputBoxShadow:B`
        inset 0 0 4px 0px ${zn.Shadow.Accent}
    `,InputErrorBoxShadow:B`
        inset 0 0 4px 0px ${zn.Shadow.Red}
    `,ElevationBoxShadow:B`
      0px 2px 8px ${zn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:B`
        inset 0 0 3px 0px ${zn.Shadow.Accent}
    `,InputErrorBoxShadow:B`
        inset 0 0 3px 0px ${zn.Shadow.Red}
    `,ElevationBoxShadow:B`
      0px 2px 8px ${zn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Cl=e=>t=>{var r;const n=t.theme,i=wn(Hl,n[Fn.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?xn(i,e,n.options.designToken):xn(i,e)},Al={InputBoxShadow:Cl("InputBoxShadow"),InputErrorBoxShadow:Cl("InputErrorBoxShadow"),ElevationBoxShadow:Cl("ElevationBoxShadow"),Table:{Header:Cl("Table.Header"),Cell:{Primary:Cl("Table.Cell.Primary"),Secondary:Cl("Table.Cell.Secondary"),Selected:Cl("Table.Cell.Selected"),Hover:Cl("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Cl("Button.Danger.BackgroundColor"),Hover:Cl("Button.Danger.Hover"),Primary:Cl("Button.Danger.Primary"),Border:Cl("Button.Danger.Border")}}},Ml=O.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return B`
                    background-color: ${zn.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Al.Button.Danger.Border:zn.Primary};

                    color: ${e.$buttonIsDanger?Al.Button.Danger.Primary:zn.Primary};
                `;case"light":return B`
                    background-color: ${zn.Neutral[8]};
                    border: 1px solid ${zn.Neutral[5]};

                    color: ${e.$buttonIsDanger?Al.Button.Danger.Primary:zn.Primary};
                `;case"disabled":return B`
                    background-color: ${zn.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${zn.Neutral[3]};
                `;case"link":return B`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Al.Button.Danger.Primary:zn.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Al.Button.Danger.Hover:zn.Secondary};
                    }
                `;default:return B`
                    background-color: ${e.$buttonIsDanger?Al.Button.Danger.BackgroundColor:zn.Primary};
                    border: 1px solid transparent;

                    ${Ol.mobileL} {
                        width: 100%;
                    }

                    color: ${zn.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?B`
                    height: 2.5rem;
                    ${Hn("H5","semibold")}

                    ${Ol.mobileS} {
                        height: auto;
                    }
                `:B`
                    height: 3rem;
                    ${Hn("H4","semibold")}

                    ${Ol.mobileS} {
                        height: auto;
                    }
                `}
`,Pl=O((({color:r,className:n,size:i=18})=>e(Dl,Object.assign({className:n,$size:i,$color:r},{children:[t(kl,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),t(El,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),t(_l,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),t(Tl,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Al.Button.Danger.Primary:zn.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=zn.Neutral[3](e);break;default:t=zn.Neutral[8](e)}return B`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var zl={exports:{}};zl.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:a,m:o,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=m;var S="$isDayjsObject",x=function(e){return e instanceof B||!(!e||!e[S])},w=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(i=o),r&&($[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var l=t.name;$[l]=t,i=l}return!n&&i&&(b=i),i||!n&&b},F=function(e,t){if(x(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new B(r)},O=v;O.l=w,O.i=x,O.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[S]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var r=F(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,r){return O.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!O.u(t)||t,u=O.p(e),h=function(e,t){var i=O.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(l)},p=function(e,t){return O.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,$=(g<b?g+7:g)-b;return h(n?y-$:y+(6-$),m);case l:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,s=O.p(e),u="set"+(this.$u?"UTC":""),h=(r={},r[l]=u+"Date",r[f]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[a]=u+"Hours",r[o]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[s],p=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[O.p(e)]()},y.add=function(n,u){var f,h=this;n=Number(n);var p=O.p(u),g=function(e){var t=F(h);return O.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===l)return g(1);if(p===s)return g(7);var m=(f={},f[o]=t,f[a]=r,f[i]=e,f)[p]||1,y=this.$d.getTime()+n*m;return O.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),o=this.$H,a=this.$m,l=this.$M,s=r.weekdays,c=r.months,u=r.meridiem,d=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},f=function(e){return O.s(o%12||12,e,"0")},p=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return O.s(t.$y,4,"0");case"M":return l+1;case"MM":return O.s(l+1,2,"0");case"MMM":return d(r.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return O.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,s,2);case"ddd":return d(r.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(o);case"HH":return O.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return O.s(a,2,"0");case"s":return String(t.$s);case"ss":return O.s(t.$s,2,"0");case"SSS":return O.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,f,h){var p,g=this,m=O.p(f),y=F(n),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,$=function(){return O.m(g,y)};switch(m){case d:p=$()/12;break;case c:p=$();break;case u:p=$()/3;break;case s:p=(b-v)/6048e5;break;case l:p=(b-v)/864e5;break;case a:p=b/r;break;case o:p=b/t;break;case i:p=b/e;break;default:p=b}return h?p:O.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=w(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),D=B.prototype;return F.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,B,F),e.$i=!0),F},F.locale=w,F.isDayjs=x,F.unix=function(e){return F(1e3*e)},F.en=$[b],F.Ls=$,F.p={},F}();var Il=ee(zl.exports),Ll={exports:{}};Ll.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,l("seconds")],ss:[n,l("seconds")],m:[n,l("minutes")],mm:[n,l("minutes")],H:[n,l("hours")],h:[n,l("hours")],HH:[n,l("hours")],hh:[n,l("hours")],D:[n,l("day")],DD:[r,l("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,l("month")],MM:[r,l("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],u=d[c],f=u&&u[0],h=u&&u[1];a[s]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<l;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,s=i.parser,c=e.slice(n),u=o.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],u=s||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!s&&d&&(o=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),i=n.year,o=n.month,a=n.day,l=n.hours,s=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,h=new Date,p=a||(i||o?1:h.getDate()),g=i||h.getFullYear(),m=0;i&&!o||(m=o>0?o-1:h.getMonth());var y=l||0,v=s||0,b=c||0,$=u||0;return d?new Date(Date.UTC(g,m,p,y,v,b,$+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,y,v,b,$)):new Date(g,m,p,y,v,b,$)}catch(e){return new Date("")}}(t,l,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var h=l.length,p=1;p<=h;p+=1){a[1]=l[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Rl=ee(Ll.exports),Nl={exports:{}};Nl.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(o,n):!this.isBefore(o,n))&&(s?this.isBefore(a,n):!this.isAfter(a,n))||(l?this.isBefore(o,n):!this.isAfter(o,n))&&(s?this.isAfter(a,n):!this.isBefore(a,n))}};var Wl=ee(Nl.exports),Yl={exports:{}};Yl.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Vl=ee(Yl.exports),Jl={exports:{}};Jl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var ql,Ul,Zl,Xl=ee(Jl.exports),Ql={exports:{}},Gl=ee(Ql.exports=(ql={year:0,month:1,day:2,hour:3,minute:4,second:5},Ul={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Ul[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Ul[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var l=n[a],s=l.type,c=l.value,u=ql[s];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],f=24===d?0:d,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),l=Math.round((o-new Date(a))/1e3/60),s=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,l=i||t||n,s=o(+r(),l);if("string"!=typeof e)return r(e).tz(l);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],f=r(u).utcOffset(d);return f.$x.$timezone=l,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));Il.extend(Wl),Il.extend(Xl),Il.extend(Vl),Il.extend(Rl),Il.extend(Gl),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Il(t).startOf("week");return Kl(r).map((e=>es(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return es(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Il(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Il(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Il(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?Il(n):void 0,i?Il(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Zl||(Zl={}));const Kl=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},es=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},ts=[1,3,5,7,8,10,12],rs=[4,6,9,11];var ns,is,os;function as(e){const t=f(null);return b((()=>{t.current=e}),[e]),$(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":ts.includes(o)?Math.min(i,31).toString():rs.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Il(e,r);return Il(t,r).diff(n,"minute")},e.toDayjs=e=>e?Il(e):Il(),e.addMinutesToTime=(e,t,r="HH:mm")=>Il(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Il(e).isSame(Il(t),r)}(ns||(ns={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Il(e).isBefore(n,"day"))||!(!i||!Il(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Il(e).isValid())return e}return""}}(is||(is={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(os||(os={}));const ls=e=>{const t=(e=>{const t=f(e),r=f();return v((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},ss=d.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),cs=({children:e})=>{const[r,n]=h(-1);return t(ss.Provider,Object.assign({value:{focusedIndex:r,setFocusedIndex:n}},{children:e}))},us=B`
    border: 1px solid ${zn.Accent.Light[1]};
    box-shadow: ${Al.InputBoxShadow};
`,ds=B`
    border: 1px solid ${zn.Accent.Light[1]};
    box-shadow: none;
`,fs=B`
    border: 1px solid ${zn.Neutral[5]};
    box-shadow: none;
`,hs=B`
    border: 1px solid ${zn.Validation.Red.Border};
    box-shadow: ${Al.InputErrorBoxShadow};
`,ps=O.div`
    border: 1px solid ${zn.Neutral[5]};
    border-radius: 4px;
    background: ${zn.Neutral[8]};

    :focus-within {
        ${us}
    }
    ${e=>e.$focused&&us}

    ${e=>e.$readOnly?B`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${ds}
                }
                ${e.$focused&&ds}
            `:e.$disabled?B`
                background: ${zn.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${fs}
                }
                ${e.$focused&&fs}
            `:e.$error?B`
                border: 1px solid ${zn.Validation.Red.Border};

                :focus-within {
                    ${hs}
                }
                ${e.$focused&&hs}
            `:void 0}
`,gs=O(ps)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,ms=O.input`
    ${e=>Hn("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${zn.Neutral[1]};
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
        color: ${zn.Neutral[3]};
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
`,ys=O.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${zn.Primary};
    }
`,vs=O.div`
    overflow: hidden;
    border: 1px solid ${zn.Neutral[5]};
    border-radius: 4px;
    background: ${zn.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${Ol.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${zn.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,bs=O.div`
    background: transparent;
    padding: 0.5rem;
`,$s=O.ul`
    list-style-type: none;
`,Ss=O.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${zn.Accent.Light[3]};

    ${e=>e.$active&&B`
            background: ${zn.Accent.Light[5]};
        `}
`,xs=O(C)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${zn.Primary};
`,ws=O.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,Fs=O(H)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${zn.Primary};
`,Os=O(T)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${zn.Accent.Light[2]};
`,Bs=O.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Ds=O(ys)`
    ${e=>Hn("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${zn.Primary};
`,js=O(Ds)`
    outline-offset: 0.25rem;
`,ks=O(Ds)`
    padding: 0.5rem 1rem;
`,Es=O.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,_s=O.div`
    ${e=>Hn("small"===e.$variant?"BodySmall":"Body","regular")}
`,Ts=O(_)`
    ${e=>{const t="small"===e.$variant?1:1.125;return B`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${zn.Validation.Red.Icon};
`,Hs=O.button`
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

        ${({$highlight:e})=>e&&B`
                background-color: ${zn.Neutral[7]};
            `}
    }
`,Cs=d.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,l=An(e,["children","focusHighlight","focusOutline","type"]);return t(Hs,Object.assign({ref:r,$outline:o,$highlight:i,type:a},l,{children:n}))})),As=e=>"small"===e?1:1.125,Ms=e=>B`
        height: ${As(e)}rem;
        width: ${As(e)}rem;
    `,Ps=O.div`
    background: ${zn.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,zs=O.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,Is=O(ms)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,Ls=O(M)`
    color: ${zn.Neutral[3]};
    flex-shrink: 0;
    ${e=>Ms(e.$variant)}
`,Rs=O(Cs)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${zn.Neutral[3]};
    cursor: pointer;

    ${e=>B`
            svg {
                ${Ms(e.$variant)}
            }
        `}
`,Ns=x(((r,n)=>{var{value:i,variant:o,onClear:a}=r,l=An(r,["value","variant","onClear"]);return e(Ps,{children:[e(zs,{children:[t(Ls,{$variant:o,"aria-hidden":!0}),t(Is,Object.assign({ref:n,value:i,$variant:o},l))]}),i&&t(Rs,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:o},{children:t(A,{"aria-hidden":!0})}))]})})),Ws=({listItems:n,multiSelect:i,selectedItems:o,disableItemFocus:a,itemsLoadState:l="success",itemTruncationType:s="end",itemMaxLines:c=2,labelDisplayType:u="inline",variant:d="default",listboxId:p,width:g,topScrollItem:m,onSelectItem:y,onSelectAll:b,onDismiss:S,onRetry:x,valueExtractor:F,listExtractor:O,renderListItem:B,renderCustomCallToAction:D,enableSearch:j,hideNoResultsDisplay:k,searchPlaceholder:E="Search",searchFunction:_,onSearch:T})=>{const{focusedIndex:H,setFocusedIndex:C}=w(ss),[A,M]=h(""),[P,z]=h(n),I=ls(l),L=(()=>{const[e,t]=h(!1);return v((()=>{t(!0)}),[]),e})(),R=f(),N=f(),W=f([]),Y=f(),V=e=>O?O(e):e.toString(),J=$((e=>!!$l(o,(t=>xl(t,e)))),[o]),q=as((()=>_(A))),U=as((()=>n.filter((e=>{var t;const r=V(e),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),i="string"==typeof r||null===(t=r.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),o=A.trim().toLowerCase();return n.includes(o)||i&&i.includes(o)})))),Z=(e,t)=>{C(t),null==y||y(e,(e=>F?F(e):e)(e))},X=e=>{const t=e.target.value;M(t),null==T||T()},Q=()=>{var e;M(""),null===(e=Y.current)||void 0===e||e.focus(),null==T||T()},G=()=>{null==x||x()};((e,t,r="window",n)=>{const i=f();v((()=>{i.current=t}),[t]),v((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r])})("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),H<P.length-1){const e=H+1;null===(t=W.current[e])||void 0===t||t.focus(),C(e)}break;case"ArrowUp":if(e.preventDefault(),H>0){const e=H-1;null===(r=W.current[e])||void 0===r||r.focus(),C(e)}else 0===H&&Y.current&&(Y.current.focus(),C(-1));break;case"Space":case"Enter":document.activeElement===W.current[H]&&(e.preventDefault(),P[H]&&Z(P[H],H))}})),v((()=>{if(void 0===m)return;const e=setTimeout((()=>{var e;const t=n.indexOf(m),r=W.current[t];if(R.current){const t=null!==(e=null==r?void 0:r.offsetTop)&&void 0!==e?e:0;R.current.scrollTop=t-8}C(t)}),0);return()=>clearTimeout(e)}),[W,n,C,m]),v((()=>{if(L)return;if(a)return;const e=n.findIndex((e=>J(e)));Y.current?(C(-1),setTimeout((()=>{var e;return null===(e=Y.current)||void 0===e?void 0:e.focus()}),200)):W.current[H]?setTimeout((()=>{var e;return null===(e=W.current[H])||void 0===e?void 0:e.focus()}),200):W.current[e]?(C(e),setTimeout((()=>{var t;return null===(t=W.current[e])||void 0===t?void 0:t.focus()}),200)):(C(0),setTimeout((()=>{var e;return null===(e=W.current[0])||void 0===e?void 0:e.focus()}),200))}),[J,a,H,n,L,C]),v((()=>{L&&I&&(a||"success"===l&&Y.current&&(C(-1),Y.current.focus()))}),[L,I,l,C,a]),v((()=>{z(""===A?n:_?q():U())}),[q,U,n,_,A]);const K=e=>i?t(e?Fs:Os,{"aria-hidden":!0}):e?t(xs,{"aria-hidden":!0}):t(ws,{}),ee=(e,r)=>{const n=V(e),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel;return t(Kn,{displayType:u,label:i,maxLines:c,selected:r,sublabel:o,truncationType:s,variant:d})},te=()=>{if(!x||x&&"success"===l)return P.map(((n,o)=>{const a=J(n),l=o===H;return t(Ss,Object.assign({"aria-selected":a,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>Z(n,o),onMouseEnter:()=>(e=>{C(e)})(o),ref:e=>W.current[o]=e,role:"option",tabIndex:l?0:-1,$active:l},{children:B?B(n,{selected:a}):e(r,{children:[K(a),ee(n,a)]})}),((e,t)=>`item_${t}__${F?F(e):e}`)(n,o))}))},re=()=>{if((j||_)&&"success"===l)return t(Ns,{ref:Y,onChange:X,value:A,placeholder:E,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Q,variant:d})},ne=()=>{if(i&&P.length>0&&!A&&"success"===l)return t(Bs,{children:t(ks,Object.assign({onClick:b,type:"button",$variant:d},{children:0===o.length?"Select all":"Clear all"}))})},ie=()=>{if(!k&&(A||!j)&&0===P.length&&"success"===l)return e(Es,Object.assign({"data-testid":"list-no-results"},{children:[t(Ts,{"data-testid":"no-result-icon",$variant:d}),t(_s,Object.assign({$variant:d},{children:"No results found."}))]}))},oe=()=>{if(x&&"loading"===l){const r="small"===d?16:18;return e(Es,Object.assign({"data-testid":"list-loading"},{children:[t(Pl,{$buttonStyle:"secondary",size:r}),t(_s,Object.assign({$variant:d},{children:"Loading..."}))]}))}},ae=()=>{if(x&&"fail"===l)return e(Es,Object.assign({"data-testid":"list-fail"},{children:[t(Ts,{"data-testid":"load-error-icon",$variant:d}),t(_s,Object.assign({$variant:d},{children:"Failed to load."}))," ",t(js,Object.assign({onClick:G,type:"button",$variant:d},{children:"Try again."}))]}))};return e(vs,Object.assign({"data-testid":"dropdown-container",ref:R,$width:g},{children:[e(bs,Object.assign({ref:N,"data-testid":"dropdown-list"},{children:[re(),ne(),ie(),oe(),ae(),t($s,Object.assign({role:"listbox",id:p},{children:te()}))]})),(()=>{if(D)return t("div",Object.assign({"data-testid":"custom-cta"},{children:D(S,P)}))})()]}))},Ys="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Vs=O(ys)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Hn("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Js=O.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ys};

    svg {
        color: ${zn.Neutral[3]};
        ${e=>{const t="small"===e.$variant?Dn.BodySmall.fontSize:Dn.Body.fontSize;return B`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,qs=x((({children:r,disabled:n,expanded:i,listboxId:o,popupRole:a,readOnly:l,variant:s},c)=>e(Vs,Object.assign({ref:c,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:s},{children:[r,!l&&t(Js,Object.assign({$expanded:i,$variant:s},{children:t(P,{"aria-hidden":!0})}))]}))));O.li`
    display: ${e=>e.$visible?"flex":"none"};
`,O.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${zn.Accent.Light[3]};

    ${e=>e.$active&&B`
            background: ${zn.Accent.Light[5]};
        `}
`,O.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,O.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${zn.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return B`
                    transform: rotate(90deg);
                `}}
    }
`,O.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,O.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,O(C)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${zn.Primary};
`,O(z)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${zn.Primary};
`;const Us=e=>"small"===e?2.5:3;O.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Us(e.$variant);return B`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Zs=B`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Us(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${zn.Accent.Light[3]};
    }
`,Xs=O.button`
    ${Zs}
    cursor: pointer;
`;O.div`
    ${Zs}
`;const Qs=j`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
        width: 100%;
	}
`;O.div`
    position: relative;
    border: 1px solid ${zn.Neutral[5]};
    border-radius: ${"4px"};
    background: ${zn.Neutral[8]};

    :focus-within {
        border: 1px solid ${zn.Accent.Light[1]};
        box-shadow: ${Al.InputBoxShadow};
    }

    ${e=>e.expanded?B`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:B`
                animation: ${Qs} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?B`
                background: ${zn.Neutral[6](e)};

                ${Xs} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${zn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?B`
                border: none;
                background: transparent !important;

                ${Xs} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?B`
                border: 1px solid ${zn.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${zn.Validation.Red.Border(e)};
                    box-shadow: ${Al.InputErrorBoxShadow};
                }
            `:void 0}
`,O.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Ys};
    margin-left: 1rem;
`,O(P)`
    color: ${zn.Neutral[3]};
    ${e=>{let t=Dn.Body.fontSize;return"small"===e.$variant&&(t=Dn.BodySmall.fontSize),B`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,O.div`
    height: 1px;
    background: ${zn.Neutral[5]};
    margin: 0 0.5rem;
`;const Gs=O.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return B`
                color: ${zn.Neutral[3]};
            `}}
`,Ks=O.div`
    ${e=>Hn("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return B`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,ec=O(Ks)`
    color: ${zn.Neutral[3]};
`;var tc;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(tc||(tc={}));const rc=O.div`
    display: flex;
    flex-direction: column;
`,nc=e=>"right"===e?"bottom-end":"bottom-start",ic=({enabled:n,isOpen:i,onOpen:o,onClose:a,onDismiss:l,renderElement:s,renderDropdown:c,customZIndex:u,clickToToggle:d=!1,offset:p=0,alignment:g="left",fitAvailableHeight:m})=>{var y;const b=f(null),$=f(null),{width:S}=Ge({targetRef:b,handleHeight:!1}),x={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<Bl.mobileL;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:w,floatingStyles:F,context:O}=L({open:i,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!i?null==o||o():!e&&i&&(null==a||a(r))},whileElementsMounted:R,placement:nc(g),middleware:[N(p),W(),Y({limiter:V()}),J({apply({availableHeight:e}){$.current&&Object.assign($.current.style,{maxHeight:m?`${e}px`:void 0,overflowY:m?"hidden":void 0})}}),x]}),B=(()=>{const[e,t]=h(void 0),r=I();return v((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(tc.Change,e),r.events.emit(tc.Ready),()=>r.events.off(tc.Change,e)}),[r]),e})(),{isMounted:D,styles:j}=q(O,{initial:{opacity:0},open:{opacity:1},duration:300}),k=U(O,{enabled:n,toggle:d}),E=Z(O,{enabled:n}),{getReferenceProps:_,getFloatingProps:T}=X([k,E]);return e(r,{children:[t("div",Object.assign({ref:e=>{b.current=e,w.setReference(e)}},_(),{children:s()})),D&&t(Q,{children:t(G,Object.assign({context:O,modal:!1,initialFocus:$,returnFocus:!1},{children:t("div",Object.assign({ref:w.setFloating,style:Object.assign(Object.assign({},F),{zIndex:null!==(y=null!=u?u:B)&&void 0!==y?y:50})},T(),{children:t(rc,Object.assign({ref:$,style:Object.assign({},j),inert:j.opacity<1?"":void 0},{children:c({elementWidth:S})}))}))}))})]})},oc=({selectedOption:e,placeholder:r="Select",options:n,disabled:i,error:o,className:a,"data-testid":l,id:s,enableSearch:c=!1,searchFunction:u,searchPlaceholder:d,valueExtractor:p,valueToStringFunction:g,listExtractor:m,displayValueExtractor:y,onSelectOption:b,onShowOptions:$,onHideOptions:S,onRetry:x,optionsLoadState:w="success",optionTruncationType:F="end",renderCustomSelectedOption:O,renderListItem:B,hideNoResultsDisplay:D,renderCustomCallToAction:j,onBlur:k,variant:E="default",readOnly:_,alignment:T,dropdownZIndex:H})=>{const[C,A]=h(e),[M,P]=h(!1),[z,I]=h(!1),[L]=h((()=>os.generate())),R=f(),N=f(),W=f();v((()=>{A(e)}),[e]);const Y=(e,t)=>{N.current.focus(),A(e),P(!1),Z(!1),null==b||b(e,t)},V=()=>{M&&(P(!1),Z(!1))},J=()=>{z||M||I(!0)},q=e=>{!z||M||R.current.contains(e.relatedTarget)||(I(!1),null==k||k())},U=e=>{if("middle"===F){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),Vn.truncateOneLine((e=>"string"==typeof e?e:g(e)||e.toString())(e),t,120,8)}return e},Z=e=>{e?null==$||$():null==S||S()};return t(cs,{children:t(ic,{enabled:!_&&!i,isOpen:M,renderElement:()=>t(ps,Object.assign({className:a,"data-testid":l,id:s,ref:R,tabIndex:-1,onFocus:J,onBlur:q,$focused:z,$disabled:i,$readOnly:_,$error:o},{children:t(qs,Object.assign({ref:N,disabled:i,expanded:M,listboxId:L,popupRole:"listbox",readOnly:_,variant:E},{children:t(Gs,Object.assign({ref:W,$disabled:i},{children:C?O?O(C):t(Ks,Object.assign({truncateType:F,$variant:E},{children:U(y?y(C):p?p(C):C.toString())})):t(ec,Object.assign({truncateType:F,$variant:E},{children:r}))}))}))})),renderDropdown:({elementWidth:e})=>t(Ws,{listboxId:L,listItems:n,onSelectItem:Y,onDismiss:V,valueExtractor:p,listExtractor:m,enableSearch:c,searchPlaceholder:d,searchFunction:u,selectedItems:C?[C]:[],onRetry:x,itemsLoadState:w,itemTruncationType:F,renderListItem:B,hideNoResultsDisplay:D,renderCustomCallToAction:j,variant:E,width:e}),onOpen:()=>{P(!0),Z(!0),I(!0)},onClose:e=>{P(!1),Z(!1),"click"!==e&&(I(!1),null==k||k())},onDismiss:()=>{N.current.focus(),P(!1),Z(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:H})})},ac={Default:d.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",danger:s=!1}=r,c=An(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(Ml,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[a&&t(Pl,Object.assign({},u)),t("span",{children:i})]}))})),Small:d.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",danger:s=!1}=r,c=An(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(Ml,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[a&&t(Pl,Object.assign({},u,{size:16})),t("span",{children:i})]}))}))},lc=O.input`
    ${Hn("Body","regular")}
    color: ${zn.Neutral[1]};

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
        color: ${zn.Neutral[3]};
    }

    ${e=>"number"===e.type?B`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?B`
                cursor: not-allowed;
            `:void 0}
`,sc=O.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${zn.Neutral[3]};
    background-color: transparent;
    border: none;
`,cc=O(A)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,uc=O.div`
    display: flex;
    width: 100%;
`,dc=d.forwardRef(((n,i)=>{var{value:o,spacing:a,type:l,error:s,disabled:c,readOnly:u,onChange:d,onClear:h,allowClear:p=!1,className:g,styleType:m="bordered"}=n,y=An(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=f();F(i,(()=>v.current),[]);const b=function({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),o=n.substring(0,r.selectionEnd),a=t(o),l=o.length-a.length,s=Math.max(0,r.selectionEnd-l);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(s,s)}}}}({ref:v,formatter:e=>Vn.transformWithSpaces(e,a)}),$=e=>{d&&(x()?w(e):d(e))},S=()=>{h&&h(),v&&v.current&&v.current.focus()},x=()=>"tel"===l&&a,w=e=>{const{nextValue:t,updateCaretPosition:r}=b(),n=t.replace(/\s/g,"");e.target.value=n,d(e),r()},O=o?(e=>e?x()?Vn.transformWithSpaces(e,a):e:"")(o):o,B=()=>e(r,{children:[t(lc,Object.assign({"data-testid":"input",ref:v,disabled:c,value:O,onChange:$,type:l,readOnly:u},y)),p&&!c&&!u&&!!o&&t(sc,Object.assign({onClick:S,type:"button"},{children:t(cc,{"aria-hidden":!0})}))]});return t(r,{children:"no-border"===m?t(uc,Object.assign({className:g},{children:B()})):t(gs,Object.assign({$disabled:c,$error:s,$readOnly:u,className:g},{children:B()}))})})),fc=O.nav`
    display: flex;
`,hc=O.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${Ol.tablet} {
        align-self: center;
    }
`,pc=O.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,gc=O(Cs)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${zn.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${zn.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${zn.Accent.Light[1]};
    }
`,mc=O(Cs)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${zn.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${zn.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${zn.Accent.Light[1]};
    }
    ${e=>"left"===e.$position?B`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:B`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${Ol.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,yc=O(ac.Default)`
    background: ${e=>e.$selected?zn.Primary:zn.Neutral[8]};
    border: 1px solid
        ${e=>e.$selected?zn.Primary:zn.Neutral[5]};
    color: ${e=>e.$selected?zn.Neutral[8]:zn.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${e=>e.$selected?zn.Neutral[8]:zn.Neutral[1]};
        ${e=>e.$selected?B`
                    ${Hn("Body",700)};
                `:B`
                    ${Hn("Body",400)};
                `}
    }
    :hover {
        box-shadow: none;

        background: ${e=>e.$selected?zn.Primary:zn.Accent.Light[5]};
        border: 1px solid
            ${e=>e.$selected?zn.Primary:zn.Accent.Light[5]};
        span {
            color: ${e=>e.$selected?zn.Neutral[8]:zn.Primary};
            ${e=>e.$selected?B`
                        ${Hn("Body",700)};
                    `:B`
                        ${Hn("Body",600)};
                    `}
        }
    }

    :active,
    :focus {
        background: ${e=>e.$selected?zn.Primary:zn.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${zn.Accent.Light[1]};
        span {
            color: ${e=>e.$selected?zn.Neutral[8]:zn.Primary};

            ${e=>e.$selected?B`
                        ${Hn("Body",700)};
                    `:B`
                        ${Hn("Body",400)};
                    `}
        }
    }
`;O(Cs)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${zn.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${zn.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${zn.Accent.Light[1]};
    }
`;const vc=O.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,bc=O.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${zn.Neutral[1]};

    display: flex;
    justify-content: center;
`,$c=O(In.Body)`
    white-space: nowrap;
`,Sc=O(In.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,xc=O(dc)`
    ${Hn("Body",400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${zn.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${Hn("XSmall",400)};
        }
    }
`,wc=O.div`
    ${Hn("XSmall",400)};

    background-color: ${zn.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${zn.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,Fc=O.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,Oc=d.forwardRef((({id:r,"data-testid":u,className:d,pageSize:f=10,totalItems:p,activePage:g,pageSizeOptions:m=Bc,showFirstAndLastNav:y,showPageSizeChanger:b=!1,onPageChange:$,onPageSizeChange:S},x)=>{const w=ne.useMediaQuery({maxWidth:wl.mobileL}),F=m,[O,B]=h(!1),[D,j]=h(!1),[k,E]=h(""),[_,T]=h(F&&F.length>=1?F[0]:null),[H,C]=h(!w&&b&&_?_.value:f),A=Math.ceil(p/H),M=1===g,P=g===A,z=g>1?()=>J(1):void 0,I=g<A?()=>J(A):void 0,L=g>1?()=>J(g-1):void 0,R=g<A?()=>J(parseInt(g.toString())+1):void 0,N=e=>e?()=>K():()=>Q(),W=e=>e?()=>ee():()=>G();v((()=>{g&&Y(g)}),[g]),v((()=>{var e;C(f),T(null!==(e=F.find((e=>e.value===f)))&&void 0!==e?e:null)}),[f]);const Y=e=>{E(e.toString())},V=()=>{B(!1),j(!1)},J=e=>{$&&($(e),Y(e))},q=()=>{const e=Math.min(A,g+5);J(e),Y(e),B(!0),j(!1)},U=()=>{const e=Math.max(1,g-5);J(e),Y(e),B(!1),j(!0)},Z=e=>{const t=e.target.value;if(void 0===t||0===t.length)E("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));Y(Math.max(1,Math.min(A,e)))}else E(t.replace(/[^0-9]/g,""))},X=e=>{e.preventDefault(),k&&$(parseInt(k))},Q=()=>{B(!0)},G=()=>{B(!1)},K=()=>{j(!0)},ee=()=>{j(!1)},te=(r,o,a)=>e(vc,{children:[t(gc,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":r?"Previous 5 pages":"Next 5 pages",onMouseOver:N(r),onMouseOut:W(r),onFocus:N(r),onBlur:W(r),onClick:r?U:q},{children:t(r&&D?n:o&&O?i:c,{"aria-hidden":!0})})),r&&D&&t(wc,{children:"Previous 5 pages"}),o&&O&&t(wc,{children:"Next 5 pages"})]},a);return e(fc,Object.assign({className:d,ref:x,id:r||"pagination-wrapper","data-testid":u||"pagination","aria-label":"Pagination"},{children:[t(hc,{children:e(pc,{children:[y&&t(mc,Object.assign({onClick:z,disabled:M,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:t(a,{"aria-hidden":!0})})),t(mc,Object.assign({onClick:L,disabled:M,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:t(o,{"aria-hidden":!0})})),w?e(bc,{children:[t("form",Object.assign({onSubmit:X},{children:t(xc,{value:k,onChange:Z,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(u||"pagination")+"-input"})})),t(Sc,{children:"/"}),t($c,{children:A})]}):[...Array(A)].map(((e,r)=>{const n=r+1,i=A-5,o=g===n;if(A<=7)return t(yc,Object.assign({onClick:()=>J(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:V,onFocus:V},{children:n}),n);const a=g+1>5&&2===n,l=g-1<=i&&n===A-1-1;return a||l?te(a,l,n):n<=5&&g+1<=5||n<=1||n===g||n<=g+1&&n>=g-1-1||n>i&&g-1>i||n>A-1?t(yc,Object.assign({onClick:()=>J(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:V,onFocus:V},{children:n}),n):null})),t(mc,Object.assign({onClick:R,disabled:P,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:t(s,{"aria-hidden":!0})})),y&&t(mc,Object.assign({onClick:I,disabled:P,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:t(l,{"aria-hidden":!0})}))]})}),b&&!w&&t(Fc,{children:t(oc,{options:F,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:_,onSelectOption:e=>{T(e);const t=e.value,r=Math.ceil(p/t);C(t);S&&S(g>=r?r:g,t)}})})]}))})),Bc=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}];export{Oc as Pagination};
//# sourceMappingURL=index.js.map
