import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import{SquareIcon as n,SquareFillIcon as i,SquareTickFillIcon as o,MinusSquareFillIcon as s,ChevronDownIcon as a,FilterIcon as l,CrossIcon as d}from"@lifesg/react-icons";import*as c from"react";import u,{useRef as h,useState as m,isValidElement as g,createRef as f,cloneElement as p,PureComponent as b,useEffect as y,useLayoutEffect as v,useMemo as x,forwardRef as w,useCallback as $,useContext as F}from"react";import C,{css as E,keyframes as O,useTheme as k}from"styled-components";import{useFloatingTree as D,FloatingTree as _,useFloatingNodeId as S,FloatingNode as M,useFloating as j,autoUpdate as A,offset as z,flip as B,shift as T,limitShift as I,useClick as P,useDismiss as R,useHover as L,useInteractions as W,FloatingPortal as Y,FloatingFocusManager as H}from"@floating-ui/react";import N,{findDOMNode as V,unstable_batchedUpdates as q}from"react-dom";import{ChevronDownIcon as Q}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as U}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as Z}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as X}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as G}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as J}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as K}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as ee}from"@lifesg/react-icons/external";import{CircleIcon as te}from"@lifesg/react-icons/circle";import{CircleDotIcon as re}from"@lifesg/react-icons/circle-dot";import{CrossIcon as ne}from"@lifesg/react-icons/cross";import{SquareIcon as ie}from"@lifesg/react-icons/square";import{SquareTickFillIcon as oe}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as se}from"@lifesg/react-icons/tick";import{ChevronLeftIcon as ae}from"@lifesg/react-icons/chevron-left";function le(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var de="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ce(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ue,he={exports:{}};ue=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return a(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var i=e.expressions.every((function(e){var r=e.feature,n=e.modifier,i=e.value,o=t[r];if(!o)return!1;switch(r){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=c(i),o=c(o);break;case"resolution":i=d(i),o=d(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!r||!i&&r}))},t.parse=a;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function a(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),o=t[1],s=t[2],a=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=s?s.toLowerCase():"all",a=a.match(/\([^\)]+\)/g)||[],l.expressions=a.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(i);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function d(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=/[A-Z]/g,i=/^ms-/,o={};function s(e){return"-"+e.toLowerCase()}const a=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(n,s);return o[e]=i.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,t,r){var o=this;if(i&&!r){var s=i.call(window,e);this.matches=s.matches,this.media=s.media,s.addListener(a)}else this.matches=n(e,t),this.media=e;function a(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){s&&s.addListener(e)},this.removeListener=function(e){s&&s.removeListener(e)},this.dispose=function(){s&&s.removeListener(a)}}e.exports=function(e,t,r){return new o(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in o=Object(arguments[l]))r.call(o,d)&&(a[d]=o[d]);if(t){s=t(o);for(var c=0;c<s.length;c++)n.call(o,s[c])&&(a[s[c]]=o[s[c]])}}return a}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function a(e,t,r,a,l){for(var d in e)if(s(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((a||"React class")+": "+r+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](t,d,a,r,null,i)}catch(e){c=e}if(!c||c instanceof Error||n((a||"React class")+": type specification of "+r+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in o)){o[c.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+c.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},a.resetWarningCache=function(){o={}},e.exports=a},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),s=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",u="<<anonymous>>",h={array:p("array"),bigint:p("bigint"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:f(d),arrayOf:function(e){return f((function(t,r,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=t[r];if(!Array.isArray(a))return new g("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<a.length;l++){var d=e(a,l,n,i,o+"["+l+"]",s);if(d instanceof Error)return d}return null}))},element:f((function(t,r,n,i,o){var s=t[r];return e(s)?null:new g("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:f((function(e,t,r,n,o){var s=e[t];return i.isValidElementType(s)?null:new g("Invalid "+n+" `"+o+"` of type `"+v(s)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,r,n,i,o){if(!(t[r]instanceof e)){var s=e.name||u;return new g("Invalid "+i+" `"+o+"` of type `"+((a=t[r]).constructor&&a.constructor.name?a.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+s+"`.")}var a;return null}))},node:f((function(e,t,r,n,i){return y(e[t])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,r,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],d=v(l);if("object"!==d)return new g("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(a(l,c)){var u=e(l,c,n,i,o+"."+c,s);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?f((function(t,r,n,i,o){for(var s=t[r],a=0;a<e.length;a++)if(m(s,e[a]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new g("Invalid "+i+" `"+o+"` of value `"+String(s)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(r)+" at index "+t+"."),d}return f((function(t,r,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(t,r,n,i,o,s);if(null==c)return null;c.data&&a(c.data,"expectedType")&&l.push(c.data.expectedType)}return new g("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return f((function(t,r,n,i,o){var a=t[r],l=v(a);if("object"!==l)return new g("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return b(n,i,o,d,x(c));var u=c(a,d,n,i,o+"."+d,s);if(u)return u}return null}))},exact:function(e){return f((function(t,r,n,i,l){var d=t[r],c=v(d);if("object"!==c)return new g("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},t[r],e);for(var h in u){var m=e[h];if(a(e,h)&&"function"!=typeof m)return b(n,i,l,h,x(m));if(!m)return new g("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=m(d,h,n,i,l+"."+h,s);if(f)return f}return null}))}};function m(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function g(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function f(e){var r={},i=0;function o(o,a,l,d,c,h,m){if(d=d||u,h=h||l,m!==s){if(t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!=typeof console){var p=d+":"+l;!r[p]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[p]=!0,i++)}}return null==a[l]?o?null===a[l]?new g("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new g("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(a,l,d,c,h)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function p(e){return f((function(t,r,n,i,o,s){var a=t[r];return v(a)!==e?new g("Invalid "+i+" `"+o+"` of type `"+x(a)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,i){return new g((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[c]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!y(i.value))return!1}else for(;!(i=o.next()).done;){var s=i.value;if(s&&!y(s[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return g.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var m=e.type;switch(m){case d:case c:case i:case s:case o:case h:return m;default:var p=m&&m.$$typeof;switch(p){case l:case u:case f:case g:case a:return p;default:return t}}case n:return t}}}var w=d,$=c,F=l,C=a,E=r,O=u,k=i,D=f,_=g,S=n,M=s,j=o,A=h,z=!1;function B(e){return x(e)===c}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=F,t.ContextProvider=C,t.Element=E,t.ForwardRef=O,t.Fragment=k,t.Lazy=D,t.Memo=_,t.Portal=S,t.Profiler=M,t.StrictMode=j,t.Suspense=A,t.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===d},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===f},t.isMemo=function(e){return x(e)===g},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===s||e===o||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===g||e.$$typeof===a||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===p)},t.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),i=r.length;if(n.length!==i)return!1;for(var o=0;o<i;o++){var s=r[o];if(e[s]!==t[s]||!Object.prototype.hasOwnProperty.call(t,s))return!1}return!0}function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,i=e.onChange,s=n(e,["children","device","onChange"]),a=(0,o.default)(s,r,i);return"function"==typeof t?t(a):a?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var i=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=i.default;var o=n(r(/*! ./Component */"./src/Component.ts"));t.default=o.default;var s=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=s.default;var a=n(r(/*! ./Context */"./src/Context.ts"));t.Context=a.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=o(r(/*! prop-types */"./node_modules/prop-types/index.js")),a=s.default.oneOfType([s.default.string,s.default.number]),l={all:s.default.bool,grid:s.default.bool,aural:s.default.bool,braille:s.default.bool,handheld:s.default.bool,print:s.default.bool,projection:s.default.bool,screen:s.default.bool,tty:s.default.bool,tv:s.default.bool,embossed:s.default.bool},d={orientation:s.default.oneOf(["portrait","landscape"]),scan:s.default.oneOf(["progressive","interlace"]),aspectRatio:s.default.string,deviceAspectRatio:s.default.string,height:a,deviceHeight:a,width:a,deviceWidth:a,color:s.default.bool,colorIndex:s.default.bool,monochrome:s.default.bool,resolution:a,type:Object.keys(l)},c=i(d,["type"]),u=n({minAspectRatio:s.default.string,maxAspectRatio:s.default.string,minDeviceAspectRatio:s.default.string,maxDeviceAspectRatio:s.default.string,minHeight:a,maxHeight:a,minDeviceHeight:a,maxDeviceHeight:a,minWidth:a,maxWidth:a,minDeviceWidth:a,maxDeviceWidth:a,minColor:s.default.number,maxColor:s.default.number,minColorIndex:s.default.number,maxColorIndex:s.default.number,minMonochrome:s.default.number,maxMonochrome:s.default.number,minResolution:a,maxResolution:a},c),h=n(n({},l),u);t.default={all:h,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),o=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),s=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),d=n(r(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,s.default)(r)]=e[r],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],o=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(d.default),r=function(){return c(e)||c(t)},n=(0,i.useState)(r),o=n[0],s=n[1];return(0,i.useEffect)((function(){var e=r();(0,a.shallowEqualObjects)(o,e)||s(e)}),[e,t]),o}(t),s=h(e);if(!s)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,i.useState)(r),s=n[0],a=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=r();return a(e),function(){e&&e.dispose()}}}),[e,t]),s}(s,n),m=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),g=u();return(0,i.useEffect)((function(){g&&r&&r(m)}),[m]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),m}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var me=he.exports=ue(u),ge={exports:{}};ge.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",m="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,d),o=r-i<0,s=t.clone().add(n+(o?-1:1),d);return+(-(n+(r-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",$=function(e){return e instanceof O||!(!e||!e[w])},F=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var s=t.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,i=a}return!n&&i&&(v=i),i||!n&&v},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new O(r)},E=y;E.l=F,E.i=$,E.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return E},b.isValid=function(){return!(this.$d.toString()===m)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return E.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!E.u(t)||t,c=E.p(e),m=function(e,t){var i=E.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(a)},g=function(e,t){return E.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,p=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?m(1,0):m(31,11);case d:return n?m(1,p):m(0,p+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return m(n?b-x:b+(6-x),p);case a:case h:return g(y+"Hours",0);case s:return g(y+"Minutes",1);case o:return g(y+"Seconds",2);case i:return g(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=E.p(e),c="set"+(this.$u?"UTC":""),m=(r={},r[a]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[s]=c+"Hours",r[o]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],g=l===a?this.$D+(t-this.$W):t;if(l===d||l===u){var f=this.clone().set(h,1);f.$d[m](g),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else m&&this.$d[m](g);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[E.p(e)]()},b.add=function(n,c){var h,m=this;n=Number(n);var g=E.p(c),f=function(e){var t=C(m);return E.w(t.date(t.date()+Math.round(e*n)),m)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===a)return f(1);if(g===l)return f(7);var p=(h={},h[o]=t,h[s]=r,h[i]=e,h)[g]||1,b=this.$d.getTime()+n*p;return E.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,s=this.$m,a=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},g=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return E.s(t.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(r.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return t.$D;case"DD":return E.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(o,s,!0);case"A":return g(o,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(t.$s);case"ss":return E.s(t.$s,2,"0");case"SSS":return E.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,m){var g,f=this,p=E.p(h),b=C(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return E.m(f,b)};switch(p){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-y)/6048e5;break;case a:g=(v-y)/864e5;break;case s:g=v/r;break;case o:g=v/t;break;case i:g=v/e;break;default:g=v}return m?g:E.a(g)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return E.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),k=O.prototype;return C.prototype=k,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,O,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var fe=ce(ge.exports),pe={exports:{}};pe.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[i,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],m=c&&c[1];s[l]=m?{regex:h,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var i=s[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,m=new Date,g=s||(i||o?1:m.getDate()),f=i||m.getFullYear(),p=0;i&&!o||(p=o>0?o-1:m.getMonth());var b=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(f,p,g,b,y,v,x+60*u.offset*1e3)):r?new Date(Date.UTC(f,p,g,b,y,v,x)):new Date(f,p,g,b,y,v,x)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var m=a.length,g=1;g<=m;g+=1){s[1]=a[g-1];var f=r.apply(this,s);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}g===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var be=ce(pe.exports),ye={exports:{}};ye.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),s=r(t),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var ve=ce(ye.exports),xe={exports:{}};xe.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var we=ce(xe.exports),$e={exports:{}};$e.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Fe,Ce,Ee,Oe=ce($e.exports),ke={exports:{}},De=ce(ke.exports=(Fe={year:0,month:1,day:2,hour:3,minute:4,second:5},Ce={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Ce[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Ce[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Fe[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,m=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(r.utc(m).valueOf()-(g-=g%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(t){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var s=i&&t,a=i||t||n,l=o(+r(),a);if("string"!=typeof e)return r(e).tz(a);var d=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var s=o(n-=60*(i-t)*1e3,r);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(r.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));fe.extend(ve),fe.extend(Oe),fe.extend(we),fe.extend(be),fe.extend(De),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=fe(t).startOf("week");return _e(r).map((e=>Se(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Se(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(fe(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+fe(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=fe(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?fe(n):void 0,i?fe(i):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!s}}(Ee||(Ee={}));const _e=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Se=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Me=[1,3,5,7,8,10,12],je=[4,6,9,11];var Ae,ze,Be,Te;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),s=parseInt(n);return 0==i?"1":Me.includes(o)?Math.min(i,31).toString():je.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=fe(e,r);return fe(t,r).diff(n,"minute")},e.toDayjs=e=>e?fe(e):fe(),e.addMinutesToTime=(e,t,r="HH:mm")=>fe(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>fe(e).isSame(fe(t),r)}(Ae||(Ae={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!fe(e).isBefore(n,"day"))||!(!i||!fe(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(fe(e).isValid())return e}return""}}(ze||(ze={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Be||(Be={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const s=n+o;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Te||(Te={}));var Ie=function(e,t){return Ie=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Ie(e,t)};var Pe=function(){return Pe=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Pe.apply(this,arguments)};var Re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Le=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},We="object"==typeof Re&&Re&&Re.Object===Object&&Re,Ye="object"==typeof self&&self&&self.Object===Object&&self,He=We||Ye||Function("return this")(),Ne=He,Ve=function(){return Ne.Date.now()},qe=/\s/;var Qe=function(e){for(var t=e.length;t--&&qe.test(e.charAt(t)););return t},Ue=/^\s+/;var Ze=function(e){return e?e.slice(0,Qe(e)+1).replace(Ue,""):e},Xe=He.Symbol,Ge=Xe,Je=Object.prototype,Ke=Je.hasOwnProperty,et=Je.toString,tt=Ge?Ge.toStringTag:void 0;var rt=function(e){var t=Ke.call(e,tt),r=e[tt];try{e[tt]=void 0;var n=!0}catch(e){}var i=et.call(e);return n&&(t?e[tt]=r:delete e[tt]),i},nt=Object.prototype.toString;var it=rt,ot=function(e){return nt.call(e)},st=Xe?Xe.toStringTag:void 0;var at=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":st&&st in Object(e)?it(e):ot(e)},lt=function(e){return null!=e&&"object"==typeof e};var dt=Ze,ct=Le,ut=function(e){return"symbol"==typeof e||lt(e)&&"[object Symbol]"==at(e)},ht=/^[-+]0x[0-9a-f]+$/i,mt=/^0b[01]+$/i,gt=/^0o[0-7]+$/i,ft=parseInt;var pt=Le,bt=Ve,yt=function(e){if("number"==typeof e)return e;if(ut(e))return NaN;if(ct(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ct(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=dt(e);var r=mt.test(e);return r||gt.test(e)?ft(e.slice(2),r?2:8):ht.test(e)?NaN:+e},vt=Math.max,xt=Math.min;var wt=function(e,t,r){var n,i,o,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=n,o=i;return n=i=void 0,d=t,s=e.apply(o,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=o}function f(){var e=bt();if(g(e))return p(e);a=setTimeout(f,function(e){var r=t-(e-l);return u?xt(r,o-(e-d)):r}(e))}function p(e){return a=void 0,h&&n?m(e):(n=i=void 0,s)}function b(){var e=bt(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===a)return function(e){return d=e,a=setTimeout(f,t),c?m(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(f,t),m(l)}return void 0===a&&(a=setTimeout(f,t)),s}return t=yt(t)||0,pt(r)&&(c=!!r.leading,o=(u="maxWait"in r)?vt(yt(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},b.flush=function(){return void 0===a?s:p(bt())},b},$t=wt,Ft=Le;var Ct=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ft(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),$t(e,t,{leading:n,maxWait:t,trailing:i})},Et=function(e,t,r,n){switch(t){case"debounce":return wt(e,r,n);case"throttle":return Ct(e,r,n);default:return e}},Ot=function(e){return"function"==typeof e},kt=function(){return"undefined"==typeof window},Dt=function(e){return e instanceof Element||e instanceof HTMLDocument},_t=function(e,t,r,n){return function(i){var o=i.width,s=i.height;t((function(t){return t.width===o&&t.height===s||t.width===o&&!n||t.height===s&&!r?t:(e&&Ot(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!kt()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(kt())return null;if(t)return document.querySelector(t);if(n&&Dt(n))return n;if(r.targetRef&&Dt(r.targetRef.current))return r.targetRef.current;var i=V(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,s=void 0===o||o,a=t.onResize;if(i||s){var l=_t(a,r.setState.bind(r),i,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!kt()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Ot(t)?"renderProp":Ot(n)?"childFunction":g(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,s=void 0===o?1e3:o,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=f(),r.observableElement=null,kt()||(r.resizeHandler=Et(r.createResizeHandler,i,s,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Ie(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){kt()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,i=t.nodeType,o=void 0===i?"div":i,s=this.state,a={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(a);case"childFunction":return(e=n)(a);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(a,["targetRef"]);return p(e,l)}return p(e,a);case"childArray":return(e=n).map((function(e){return!!e&&p(e,a)}));default:return c.createElement(o,null)}}}(b);var St=kt()?y:v;function Mt(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,s=e.refreshOptions,a=e.handleWidth,l=void 0===a||a,d=e.handleHeight,c=void 0===d||d,u=e.targetRef,g=e.observerOptions,f=e.onResize,p=h(r),b=h(null),y=null!=u?u:b,v=h(),x=m({width:void 0,height:void 0}),w=x[0],$=x[1];return St((function(){if(!kt()){var e=_t(f,$,l,c);v.current=Et((function(t){(l||c)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!p.current&&!kt()&&e({width:n,height:i}),p.current=!1}))}),n,o,s);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,g),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,s,l,c,f,g,y.current]),Pe({ref:y},w)}var jt=Array.isArray,At="object"==typeof de&&de&&de.Object===Object&&de,zt="object"==typeof self&&self&&self.Object===Object&&self,Bt=At||zt||Function("return this")(),Tt=Bt.Symbol,It=Tt,Pt=Object.prototype,Rt=Pt.hasOwnProperty,Lt=Pt.toString,Wt=It?It.toStringTag:void 0;var Yt=function(e){var t=Rt.call(e,Wt),r=e[Wt];try{e[Wt]=void 0;var n=!0}catch(e){}var i=Lt.call(e);return n&&(t?e[Wt]=r:delete e[Wt]),i},Ht=Object.prototype.toString;var Nt=Yt,Vt=function(e){return Ht.call(e)},qt=Tt?Tt.toStringTag:void 0;var Qt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":qt&&qt in Object(e)?Nt(e):Vt(e)};var Ut=Qt,Zt=function(e){return null!=e&&"object"==typeof e};var Xt=function(e){return"symbol"==typeof e||Zt(e)&&"[object Symbol]"==Ut(e)},Gt=jt,Jt=Xt,Kt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,er=/^\w*$/;var tr=function(e,t){if(Gt(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Jt(e))||(er.test(e)||!Kt.test(e)||null!=t&&e in Object(t))};var rr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},nr=Qt,ir=rr;var or,sr=function(e){if(!ir(e))return!1;var t=nr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ar=Bt["__core-js_shared__"],lr=(or=/[^.]+$/.exec(ar&&ar.keys&&ar.keys.IE_PROTO||""))?"Symbol(src)_1."+or:"";var dr=function(e){return!!lr&&lr in e},cr=Function.prototype.toString;var ur=sr,hr=dr,mr=rr,gr=function(e){if(null!=e){try{return cr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},fr=/^\[object .+?Constructor\]$/,pr=Function.prototype,br=Object.prototype,yr=pr.toString,vr=br.hasOwnProperty,xr=RegExp("^"+yr.call(vr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var wr=function(e,t){return null==e?void 0:e[t]},$r=function(e){return!(!mr(e)||hr(e))&&(ur(e)?xr:fr).test(gr(e))},Fr=wr;var Cr=function(e,t){var r=Fr(e,t);return $r(r)?r:void 0},Er=Cr(Object,"create"),Or=Er;var kr=function(){this.__data__=Or?Or(null):{},this.size=0};var Dr=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},_r=Er,Sr=Object.prototype.hasOwnProperty;var Mr=function(e){var t=this.__data__;if(_r){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Sr.call(t,e)?t[e]:void 0},jr=Er,Ar=Object.prototype.hasOwnProperty;var zr=function(e){var t=this.__data__;return jr?void 0!==t[e]:Ar.call(t,e)},Br=Er;var Tr=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Br&&void 0===t?"__lodash_hash_undefined__":t,this},Ir=kr,Pr=Dr,Rr=Mr,Lr=zr,Wr=Tr;function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Yr.prototype.clear=Ir,Yr.prototype.delete=Pr,Yr.prototype.get=Rr,Yr.prototype.has=Lr,Yr.prototype.set=Wr;var Hr=Yr;var Nr=function(){this.__data__=[],this.size=0};var Vr=function(e,t){return e===t||e!=e&&t!=t};var qr=function(e,t){for(var r=e.length;r--;)if(Vr(e[r][0],t))return r;return-1},Qr=qr,Ur=Array.prototype.splice;var Zr=function(e){var t=this.__data__,r=Qr(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ur.call(t,r,1),--this.size,!0)},Xr=qr;var Gr=function(e){var t=this.__data__,r=Xr(t,e);return r<0?void 0:t[r][1]},Jr=qr;var Kr=function(e){return Jr(this.__data__,e)>-1},en=qr;var tn=function(e,t){var r=this.__data__,n=en(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},rn=Nr,nn=Zr,on=Gr,sn=Kr,an=tn;function ln(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ln.prototype.clear=rn,ln.prototype.delete=nn,ln.prototype.get=on,ln.prototype.has=sn,ln.prototype.set=an;var dn=ln,cn=Cr(Bt,"Map"),un=Hr,hn=dn,mn=cn;var gn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var fn=function(e,t){var r=e.__data__;return gn(t)?r["string"==typeof t?"string":"hash"]:r.map},pn=fn;var bn=function(e){var t=pn(this,e).delete(e);return this.size-=t?1:0,t},yn=fn;var vn=function(e){return yn(this,e).get(e)},xn=fn;var wn=function(e){return xn(this,e).has(e)},$n=fn;var Fn=function(e,t){var r=$n(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Cn=function(){this.size=0,this.__data__={hash:new un,map:new(mn||hn),string:new un}},En=bn,On=vn,kn=wn,Dn=Fn;function _n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}_n.prototype.clear=Cn,_n.prototype.delete=En,_n.prototype.get=On,_n.prototype.has=kn,_n.prototype.set=Dn;var Sn=_n;function Mn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(Mn.Cache||Sn),r}Mn.Cache=Sn;var jn=Mn;var An=function(e){var t=jn(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},zn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bn=/\\(\\)?/g,Tn=An((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(zn,(function(e,r,n,i){t.push(n?i.replace(Bn,"$1"):r||e)})),t}));var In=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Pn=jt,Rn=Xt,Ln=Tt?Tt.prototype:void 0,Wn=Ln?Ln.toString:void 0;var Yn=function e(t){if("string"==typeof t)return t;if(Pn(t))return In(t,e)+"";if(Rn(t))return Wn?Wn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Hn=Yn;var Nn=jt,Vn=tr,qn=Tn,Qn=function(e){return null==e?"":Hn(e)};var Un=Xt;var Zn=function(e,t){return Nn(e)?e:Vn(e,t)?[e]:qn(Qn(e))},Xn=function(e){if("string"==typeof e||Un(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Gn=function(e,t){for(var r=0,n=(t=Zn(t,e)).length;null!=e&&r<n;)e=e[Xn(t[r++])];return r&&r==n?e:void 0};var Jn=ce((function(e,t,r){var n=null==e?void 0:Gn(e,t);return void 0===n?r:n}));const Kn=(e,t,r)=>Jn(r,t)||Jn(e,t),ei=(e,t)=>{const r=t||e.defaultValue;return Jn(e.collections,r)},ti={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},ri=e=>t=>{var r;const n=t.theme,i=ei(ti,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Kn(i,e,n.overrides.motion):i[e]},ni={"duration-150":ri("duration-150"),"duration-250":ri("duration-250"),"duration-350":ri("duration-350"),"duration-500":ri("duration-500"),"duration-800":ri("duration-800"),"duration-1000":ri("duration-1000"),"ease-default":ri("ease-default"),"ease-standard":ri("ease-standard"),"ease-entrance":ri("ease-entrance"),"ease-exit":ri("ease-exit")},ii={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#89000B","primary-20":"#B0000E","primary-30":"#C4000F","primary-40":"#D0333F","primary-50":"#DC666F","primary-60":"#E28087","primary-70":"#E7999F","primary-80":"#EDB3B7","primary-90":"#F3CCCF","primary-95":"#F9E6E7","primary-100":"#FCF2F3","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4d4d4d","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},oi=e=>t=>{var r;const n=t.theme,i=ei(ii,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?Kn(i,e,n.overrides.primitiveColour):i[e]},si={"brand-10":oi("brand-10"),"brand-20":oi("brand-20"),"brand-30":oi("brand-30"),"brand-40":oi("brand-40"),"brand-50":oi("brand-50"),"brand-60":oi("brand-60"),"brand-70":oi("brand-70"),"brand-80":oi("brand-80"),"brand-90":oi("brand-90"),"brand-95":oi("brand-95"),"brand-100":oi("brand-100"),"primary-10":oi("primary-10"),"primary-20":oi("primary-20"),"primary-30":oi("primary-30"),"primary-40":oi("primary-40"),"primary-50":oi("primary-50"),"primary-60":oi("primary-60"),"primary-70":oi("primary-70"),"primary-80":oi("primary-80"),"primary-90":oi("primary-90"),"primary-95":oi("primary-95"),"primary-100":oi("primary-100"),"secondary-10":oi("secondary-10"),"secondary-20":oi("secondary-20"),"secondary-30":oi("secondary-30"),"secondary-40":oi("secondary-40"),"secondary-50":oi("secondary-50"),"secondary-60":oi("secondary-60"),"secondary-70":oi("secondary-70"),"secondary-80":oi("secondary-80"),"secondary-90":oi("secondary-90"),"secondary-95":oi("secondary-95"),"secondary-100":oi("secondary-100"),"neutral-10":oi("neutral-10"),"neutral-20":oi("neutral-20"),"neutral-30":oi("neutral-30"),"neutral-40":oi("neutral-40"),"neutral-50":oi("neutral-50"),"neutral-60":oi("neutral-60"),"neutral-70":oi("neutral-70"),"neutral-80":oi("neutral-80"),"neutral-90":oi("neutral-90"),"neutral-95":oi("neutral-95"),"neutral-100":oi("neutral-100"),"success-10":oi("success-10"),"success-20":oi("success-20"),"success-30":oi("success-30"),"success-40":oi("success-40"),"success-50":oi("success-50"),"success-60":oi("success-60"),"success-70":oi("success-70"),"success-80":oi("success-80"),"success-90":oi("success-90"),"success-95":oi("success-95"),"success-100":oi("success-100"),"warning-10":oi("warning-10"),"warning-20":oi("warning-20"),"warning-30":oi("warning-30"),"warning-40":oi("warning-40"),"warning-50":oi("warning-50"),"warning-60":oi("warning-60"),"warning-70":oi("warning-70"),"warning-80":oi("warning-80"),"warning-90":oi("warning-90"),"warning-95":oi("warning-95"),"warning-100":oi("warning-100"),"error-10":oi("error-10"),"error-20":oi("error-20"),"error-30":oi("error-30"),"error-40":oi("error-40"),"error-50":oi("error-50"),"error-60":oi("error-60"),"error-70":oi("error-70"),"error-80":oi("error-80"),"error-90":oi("error-90"),"error-95":oi("error-95"),"error-100":oi("error-100"),"info-10":oi("info-10"),"info-20":oi("info-20"),"info-30":oi("info-30"),"info-40":oi("info-40"),"info-50":oi("info-50"),"info-60":oi("info-60"),"info-70":oi("info-70"),"info-80":oi("info-80"),"info-90":oi("info-90"),"info-95":oi("info-95"),"info-100":oi("info-100"),white:oi("white"),black:oi("black"),"primary-inverse":oi("primary-inverse")},ai={text:oi("neutral-20"),"text-subtle":oi("neutral-30"),"text-subtler":oi("neutral-50"),"text-subtlest":oi("neutral-60"),"text-primary":oi("primary-50"),"text-hover":oi("primary-40"),"text-selected":oi("primary-50"),"text-selected-hover":oi("primary-40"),"text-disabled":oi("neutral-50"),"text-disabled-subtle":oi("neutral-60"),"text-disabled-subtlest":oi("neutral-80"),"text-selected-disabled":oi("neutral-20"),"text-success":oi("success-40"),"text-warning":oi("warning-40"),"text-error":oi("error-40"),"text-info":oi("info-40"),"text-inverse":oi("white"),icon:oi("neutral-50"),"icon-subtle":oi("neutral-60"),"icon-strongest":oi("neutral-20"),"icon-primary":oi("primary-50"),"icon-primary-subtle":oi("primary-60"),"icon-primary-subtlest":oi("primary-70"),"icon-hover":oi("primary-40"),"icon-selected":oi("primary-50"),"icon-selected-hover":oi("primary-40"),"icon-disabled":oi("neutral-50"),"icon-disabled-subtle":oi("neutral-60"),"icon-selected-disabled":oi("neutral-60"),"icon-success":oi("success-50"),"icon-warning":oi("warning-60"),"icon-error":oi("error-50"),"icon-error-strong":oi("error-40"),"icon-info":oi("info-50"),"icon-inverse":oi("white"),"icon-primary-inverse":oi("primary-inverse"),border:oi("neutral-90"),"border-strong":oi("neutral-70"),"border-stronger":oi("neutral-50"),"border-primary":oi("primary-50"),"border-primary-subtle":oi("primary-60"),"border-hover":oi("primary-90"),"border-hover-strong":oi("primary-60"),"border-selected":oi("primary-50"),"border-selected-subtle":oi("primary-70"),"border-selected-subtlest":oi("primary-90"),"border-selected-hover":oi("primary-40"),"border-focus":oi("primary-60"),"border-focus-strong":oi("primary-50"),"border-disabled":oi("neutral-90"),"border-selected-disabled":oi("neutral-70"),"border-success":oi("success-60"),"border-warning":oi("warning-60"),"border-error":oi("error-60"),"border-error-focus":oi("error-60"),"border-error-focus-strong":oi("error-40"),"border-error-strong":oi("error-40"),"border-info":oi("info-60"),bg:oi("white"),"bg-strong":oi("neutral-100"),"bg-stronger":oi("neutral-95"),"bg-strongest":oi("neutral-90"),"bg-hover":oi("primary-95"),"bg-hover-strong":oi("primary-90"),"bg-hover-subtle":oi("primary-100"),"bg-hover-neutral":oi("neutral-100"),"bg-hover-neutral-strong":oi("neutral-90"),"bg-selected":oi("primary-95"),"bg-selected-hover":oi("primary-90"),"bg-selected-strong":oi("primary-90"),"bg-selected-stronger":oi("primary-70"),"bg-selected-strongest":oi("primary-50"),"bg-selected-strongest-hover":oi("primary-40"),"bg-disabled":oi("neutral-95"),"bg-selected-disabled":oi("neutral-95"),"bg-selected-stronger-disabled":oi("neutral-70"),"bg-success":oi("success-100"),"bg-success-hover":oi("success-95"),"bg-success-strong":oi("success-50"),"bg-success-strong-hover":oi("success-40"),"bg-warning":oi("warning-100"),"bg-warning-hover":oi("warning-95"),"bg-warning-strong":oi("warning-50"),"bg-warning-strong-hover":oi("warning-40"),"bg-info":oi("info-100"),"bg-info-hover":oi("info-95"),"bg-info-strong":oi("info-50"),"bg-info-strong-hover":oi("info-40"),"bg-error":oi("error-100"),"bg-error-hover":oi("error-95"),"bg-error-strong":oi("error-50"),"bg-error-strong-hover":oi("error-40"),"bg-inverse":oi("neutral-20"),"bg-inverse-subtle":oi("neutral-30"),"bg-inverse-subtler":oi("neutral-50"),"bg-inverse-subtlest":oi("neutral-60"),"bg-inverse-hover":oi("neutral-40"),"bg-primary":oi("primary-50"),"bg-primary-subtle":oi("primary-60"),"bg-primary-subtler":oi("primary-95"),"bg-primary-subtlest":oi("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":oi("primary-40"),"bg-primary-subtlest-hover":oi("primary-90"),"bg-primary-subtlest-selected":oi("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:oi("primary-50"),"hyperlink-hover":oi("primary-40"),"hyperlink-visited":oi("primary-40"),"hyperlink-inverse":oi("primary-inverse"),"focus-ring":oi("black"),"focus-ring-inverse":oi("white")},li={collections:{lifesg:ai,bookingsg:ai,rbs:ai,mylegacy:ai,ccube:ai,pa:ai},defaultValue:"lifesg"},di=e=>t=>{var r;const n=t.theme,i=ei(li,null==n?void 0:n.colourScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?Kn(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(t):o},ci={text:di("text"),"text-subtle":di("text-subtle"),"text-subtler":di("text-subtler"),"text-subtlest":di("text-subtlest"),"text-primary":di("text-primary"),"text-hover":di("text-hover"),"text-selected":di("text-selected"),"text-selected-hover":di("text-selected-hover"),"text-disabled":di("text-disabled"),"text-disabled-subtle":di("text-disabled-subtle"),"text-disabled-subtlest":di("text-disabled-subtlest"),"text-selected-disabled":di("text-selected-disabled"),"text-success":di("text-success"),"text-warning":di("text-warning"),"text-error":di("text-error"),"text-info":di("text-info"),"text-inverse":di("text-inverse"),icon:di("icon"),"icon-subtle":di("icon-subtle"),"icon-strongest":di("icon-strongest"),"icon-primary":di("icon-primary"),"icon-primary-subtle":di("icon-primary-subtle"),"icon-primary-subtlest":di("icon-primary-subtlest"),"icon-hover":di("icon-hover"),"icon-selected":di("icon-selected"),"icon-selected-hover":di("icon-selected-hover"),"icon-disabled":di("icon-disabled"),"icon-disabled-subtle":di("icon-disabled-subtle"),"icon-selected-disabled":di("icon-selected-disabled"),"icon-success":di("icon-success"),"icon-warning":di("icon-warning"),"icon-error":di("icon-error"),"icon-error-strong":di("icon-error-strong"),"icon-info":di("icon-info"),"icon-inverse":di("icon-inverse"),"icon-primary-inverse":di("icon-primary-inverse"),border:di("border"),"border-strong":di("border-strong"),"border-stronger":di("border-stronger"),"border-primary":di("border-primary"),"border-primary-subtle":di("border-primary-subtle"),"border-hover":di("border-hover"),"border-hover-strong":di("border-hover-strong"),"border-selected":di("border-selected"),"border-selected-subtle":di("border-selected-subtle"),"border-selected-subtlest":di("border-selected-subtlest"),"border-selected-hover":di("border-selected-hover"),"border-focus":di("border-focus"),"border-focus-strong":di("border-focus-strong"),"border-disabled":di("border-disabled"),"border-selected-disabled":di("border-selected-disabled"),"border-success":di("border-success"),"border-warning":di("border-warning"),"border-error":di("border-error"),"border-error-focus":di("border-error-focus"),"border-error-focus-strong":di("border-error-focus-strong"),"border-error-strong":di("border-error-strong"),"border-info":di("border-info"),bg:di("bg"),"bg-strong":di("bg-strong"),"bg-stronger":di("bg-stronger"),"bg-strongest":di("bg-strongest"),"bg-hover":di("bg-hover"),"bg-hover-strong":di("bg-hover-strong"),"bg-hover-subtle":di("bg-hover-subtle"),"bg-hover-neutral":di("bg-hover-neutral"),"bg-hover-neutral-strong":di("bg-hover-neutral-strong"),"bg-selected":di("bg-selected"),"bg-selected-hover":di("bg-selected-hover"),"bg-selected-strong":di("bg-selected-strong"),"bg-selected-stronger":di("bg-selected-stronger"),"bg-selected-strongest":di("bg-selected-strongest"),"bg-selected-strongest-hover":di("bg-selected-strongest-hover"),"bg-disabled":di("bg-disabled"),"bg-selected-disabled":di("bg-selected-disabled"),"bg-selected-stronger-disabled":di("bg-selected-stronger-disabled"),"bg-success":di("bg-success"),"bg-success-hover":di("bg-success-hover"),"bg-success-strong":di("bg-success-strong"),"bg-success-strong-hover":di("bg-success-strong-hover"),"bg-warning":di("bg-warning"),"bg-warning-hover":di("bg-warning-hover"),"bg-warning-strong":di("bg-warning-strong"),"bg-warning-strong-hover":di("bg-warning-strong-hover"),"bg-info":di("bg-info"),"bg-info-hover":di("bg-info-hover"),"bg-info-strong":di("bg-info-strong"),"bg-info-strong-hover":di("bg-info-strong-hover"),"bg-error":di("bg-error"),"bg-error-hover":di("bg-error-hover"),"bg-error-strong":di("bg-error-strong"),"bg-error-strong-hover":di("bg-error-strong-hover"),"bg-inverse":di("bg-inverse"),"bg-inverse-subtle":di("bg-inverse-subtle"),"bg-inverse-subtler":di("bg-inverse-subtler"),"bg-inverse-subtlest":di("bg-inverse-subtlest"),"bg-inverse-hover":di("bg-inverse-hover"),"bg-primary":di("bg-primary"),"bg-primary-subtle":di("bg-primary-subtle"),"bg-primary-subtler":di("bg-primary-subtler"),"bg-primary-subtlest":di("bg-primary-subtlest"),"bg-available":di("bg-available"),"bg-primary-hover":di("bg-primary-hover"),"bg-primary-subtlest-hover":di("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":di("bg-primary-subtlest-selected"),"overlay-strong":di("overlay-strong"),"overlay-subtle":di("overlay-subtle"),hyperlink:di("hyperlink"),"hyperlink-hover":di("hyperlink-hover"),"hyperlink-visited":di("hyperlink-visited"),"hyperlink-inverse":di("hyperlink-inverse"),"focus-ring":di("focus-ring"),"focus-ring-inverse":di("focus-ring-inverse")},ui={collections:{lifesg:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>t=>{var r,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:gi["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(t):a)&&void 0!==i?i:ci.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return E`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},hi=e=>t=>{var r;const n=t.theme,i=ei(ui,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Kn(i,e,n.overrides.border)}px`:`${i[e]}px`},mi=e=>1===e.length&&"theme"in e[0],gi={"width-005":hi("width-005"),"width-010":hi("width-010"),"width-020":hi("width-020"),"width-040":hi("width-040"),solid:(fi="solid",e=>{var t;const r=e.theme,n=ei(ui,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Kn(n,fi,r.overrides.border):n[fi];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...t)=>r=>{var n;const i=mi(t)?[]:t,o=mi(t)?t[0]:r,s=o.theme,a=ei(ui,null==s?void 0:s.borderScheme);return((null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.border)?Kn(a,e,s.overrides.border):a[e])(...i)(o)})("dashed-default")};var fi;const pi={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},bi=e=>t=>{var r;const n=t.theme,i=ei(pi,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Kn(i,e,n.overrides.breakpoint):i[e],o},yi={"xxs-min":bi("xxs-min"),"xxs-max":bi("xxs-max"),"xs-min":bi("xs-min"),"xs-max":bi("xs-max"),"sm-min":bi("sm-min"),"sm-max":bi("sm-max"),"md-min":bi("md-min"),"md-max":bi("md-max"),"lg-min":bi("lg-min"),"lg-max":bi("lg-max"),"xl-min":bi("xl-min"),"xl-max":bi("xl-max"),"xxl-min":bi("xxl-min"),"xxs-column":bi("xxs-column"),"xs-column":bi("xs-column"),"sm-column":bi("sm-column"),"md-column":bi("md-column"),"lg-column":bi("lg-column"),"xl-column":bi("xl-column"),"xxl-column":bi("xxl-column"),"xxs-gutter":bi("xxs-gutter"),"xs-gutter":bi("xs-gutter"),"sm-gutter":bi("sm-gutter"),"md-gutter":bi("md-gutter"),"lg-gutter":bi("lg-gutter"),"xl-gutter":bi("xl-gutter"),"xxl-gutter":bi("xxl-gutter"),"xxs-margin":bi("xxs-margin"),"xs-margin":bi("xs-margin"),"sm-margin":bi("sm-margin"),"md-margin":bi("md-margin"),"lg-margin":bi("lg-margin"),"xl-margin":bi("xl-margin"),"xxl-margin":bi("xxl-margin")},vi=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=yi["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),xi={MaxWidth:vi("max-width"),MinWidth:vi("min-width")},wi={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},$i={collections:{lifesg:wi,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:wi,mylegacy:wi,ccube:wi,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"}},defaultValue:"lifesg"},Fi=e=>t=>{var r;const n=t.theme,i=ei($i,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Kn(i,e,n.overrides.fontSpec):i[e]},Ci={"header-size-xxl":Fi("header-size-xxl"),"header-size-xl":Fi("header-size-xl"),"header-size-lg":Fi("header-size-lg"),"header-size-md":Fi("header-size-md"),"header-size-sm":Fi("header-size-sm"),"header-size-xs":Fi("header-size-xs"),"header-lh-xxl":Fi("header-lh-xxl"),"header-lh-xl":Fi("header-lh-xl"),"header-lh-lg":Fi("header-lh-lg"),"header-lh-md":Fi("header-lh-md"),"header-lh-sm":Fi("header-lh-sm"),"header-lh-xs":Fi("header-lh-xs"),"header-ls-xxl":Fi("header-ls-xxl"),"header-ls-xl":Fi("header-ls-xl"),"header-ls-lg":Fi("header-ls-lg"),"header-ls-md":Fi("header-ls-md"),"header-ls-sm":Fi("header-ls-sm"),"header-ls-xs":Fi("header-ls-xs"),"weight-light":Fi("weight-light"),"weight-regular":Fi("weight-regular"),"weight-semibold":Fi("weight-semibold"),"weight-bold":Fi("weight-bold"),"font-family":Fi("font-family"),"body-size-baseline":Fi("body-size-baseline"),"body-size-md":Fi("body-size-md"),"body-size-sm":Fi("body-size-sm"),"body-size-xs":Fi("body-size-xs"),"body-lh-baseline":Fi("body-lh-baseline"),"body-lh-md":Fi("body-lh-md"),"body-lh-sm":Fi("body-lh-sm"),"body-lh-xs":Fi("body-lh-xs"),"body-ls-baseline":Fi("body-ls-baseline"),"body-ls-md":Fi("body-ls-md"),"body-ls-sm":Fi("body-ls-sm"),"body-ls-xs":Fi("body-ls-xs"),"formlabel-size-baseline":Fi("formlabel-size-baseline"),"formlabel-size-lg":Fi("formlabel-size-lg"),"formlabel-lh-baseline":Fi("formlabel-lh-baseline"),"formlabel-lh-lg":Fi("formlabel-lh-lg"),"formlabel-ls-baseline":Fi("formlabel-ls-baseline"),"formlabel-ls-lg":Fi("formlabel-ls-lg")},Ei={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Oi=e=>t=>{var r;const n=t.theme,i=ei(Ei,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Kn(i,e,n.overrides.radius)}px`:`${i[e]}px`},ki={none:Oi("none"),xs:Oi("xs"),sm:Oi("sm"),md:Oi("md"),lg:Oi("lg"),full:Oi("full")},Di={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},_i=e=>t=>{var r;const n=t.theme,i=ei(Di,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Kn(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Si={"spacing-0":_i("spacing-0"),"spacing-4":_i("spacing-4"),"spacing-8":_i("spacing-8"),"spacing-12":_i("spacing-12"),"spacing-16":_i("spacing-16"),"spacing-20":_i("spacing-20"),"spacing-24":_i("spacing-24"),"spacing-32":_i("spacing-32"),"spacing-40":_i("spacing-40"),"spacing-48":_i("spacing-48"),"spacing-64":_i("spacing-64"),"spacing-72":_i("spacing-72"),"layout-xs":_i("layout-xs"),"layout-sm":_i("layout-sm"),"layout-md":_i("layout-md"),"layout-lg":_i("layout-lg"),"layout-xl":_i("layout-xl"),"layout-xxl":_i("layout-xxl"),"layout-xxxl":_i("layout-xxxl")},Mi=(e,t,r,n)=>E`
    font-family: ${Fi("font-family")};
    font-size: ${Fi(e)};
    font-weight: ${Fi(t)};
    line-height: ${Fi(r)};
    letter-spacing: ${Fi(n)};
`,ji={"header-xxl-light":Mi("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Mi("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Mi("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Mi("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Mi("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Mi("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Mi("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Mi("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Mi("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Mi("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Mi("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Mi("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Mi("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Mi("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Mi("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Mi("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Mi("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Mi("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Mi("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Mi("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Mi("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Mi("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Mi("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Mi("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Mi("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Mi("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Mi("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Mi("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Mi("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Mi("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Mi("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Mi("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Mi("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Mi("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Mi("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Mi("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Mi("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Mi("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Mi("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Mi("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Mi("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Mi("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Ai={collections:{lifesg:ji,bookingsg:ji,rbs:ji,mylegacy:ji,ccube:ji,pa:ji},defaultValue:"lifesg"},zi=e=>t=>{var r;const n=t.theme,i=ei(Ai,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Kn(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},Bi={"header-xxl-light":zi("header-xxl-light"),"header-xxl-regular":zi("header-xxl-regular"),"header-xxl-semibold":zi("header-xxl-semibold"),"header-xxl-bold":zi("header-xxl-bold"),"header-xl-light":zi("header-xl-light"),"header-xl-regular":zi("header-xl-regular"),"header-xl-semibold":zi("header-xl-semibold"),"header-xl-bold":zi("header-xl-bold"),"header-lg-light":zi("header-lg-light"),"header-lg-regular":zi("header-lg-regular"),"header-lg-semibold":zi("header-lg-semibold"),"header-lg-bold":zi("header-lg-bold"),"header-md-light":zi("header-md-light"),"header-md-regular":zi("header-md-regular"),"header-md-semibold":zi("header-md-semibold"),"header-md-bold":zi("header-md-bold"),"header-sm-light":zi("header-sm-light"),"header-sm-regular":zi("header-sm-regular"),"header-sm-semibold":zi("header-sm-semibold"),"header-sm-bold":zi("header-sm-bold"),"header-xs-light":zi("header-xs-light"),"header-xs-regular":zi("header-xs-regular"),"header-xs-semibold":zi("header-xs-semibold"),"header-xs-bold":zi("header-xs-bold"),"body-baseline-light":zi("body-baseline-light"),"body-baseline-regular":zi("body-baseline-regular"),"body-baseline-semibold":zi("body-baseline-semibold"),"body-baseline-bold":zi("body-baseline-bold"),"body-md-light":zi("body-md-light"),"body-md-regular":zi("body-md-regular"),"body-md-semibold":zi("body-md-semibold"),"body-md-bold":zi("body-md-bold"),"body-sm-light":zi("body-sm-light"),"body-sm-regular":zi("body-sm-regular"),"body-sm-semibold":zi("body-sm-semibold"),"body-sm-bold":zi("body-sm-bold"),"body-xs-light":zi("body-xs-light"),"body-xs-regular":zi("body-xs-regular"),"body-xs-semibold":zi("body-xs-semibold"),"body-xs-bold":zi("body-xs-bold"),"formlabel-baseline-semibold":zi("formlabel-baseline-semibold"),"formlabel-lg-semibold":zi("formlabel-lg-semibold")},Ti=Object.assign(Object.assign({},ci),{Primitive:si}),Ii=Object.assign(Object.assign({},Bi),{Spec:Ci}),Pi=ni,Ri=gi,Li=Si,Wi=ki,Yi=yi,Hi=xi,Ni=C.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return E`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Vi=C.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Ti["overlay-subtle"]:Ti["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=E`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=E`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=E`
                transition: none;
            `),t}}
`;var qi;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(qi||(qi={}));const Qi=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:o,backgroundBlur:s=!0,disableTransition:a=!1,enableOverlayClick:l=!1,zIndex:d,id:c})=>{const[g,f]=m(null),[p,b]=m(),[v]=m((()=>Be.generate())),x=S(),w=h(),$=h(null),F=i&&u.cloneElement(i,{ref:$}),C=c?`lifesg-ds-overlay-root-${c}`:"lifesg-ds-overlay-root",E=null!=d?d:p?99999:99998;(e=>{const t=D();y((()=>{if(!t)return;const r={zIndex:e};t.events.emit(qi.Change,r)}),[t,e]),y((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(qi.Change,r)};return null==t||t.events.on(qi.Ready,r),()=>null==t?void 0:t.events.off(qi.Ready,r)}),[t,e])})(E),y((()=>(j(),f(k()),()=>{T(),z().length<1&&A("remove")})),[]),y((()=>{if(t){const e=_();O(e),B();const t=setTimeout((()=>{A("add")}),200);return()=>clearTimeout(t)}{T();const e=setTimeout((()=>{z().length<1&&A("remove")}),200);return()=>clearTimeout(e)}}),[t]);const O=e=>{w.current=e,b(e)},k=()=>document&&r?document.getElementById(r):document?document.body:null,_=()=>z().length>0,j=()=>{if(!document.getElementById(Zi)){const e=document.createElement("style");e.id=Zi;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Xi} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Xi}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},A=e=>{const t=document.body.classList.contains(Xi);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Xi):document.body.classList.add(Xi)},z=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},B=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},T=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},I=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&l&&(e.preventDefault(),n())};return g?N.createPortal(e(Ni,Object.assign({id:C,"data-testid":C,$show:t,$zIndex:E},{children:i&&e(M,Object.assign({id:x},{children:e(Vi,Object.assign({"data-testid":"overlay-wrapper",$show:t,$stacked:p,$backgroundBlur:s,$disableTransition:a,onClick:I},{children:F}))}))})),g):null},Ui=t=>e(_,{children:e(Qi,Object.assign({},t))}),Zi="lifesg-ds-overlay-stylesheet",Xi="lifesg-ds-overlay-open",Gi=u.createContext({mode:"default",rootNode:null}),Ji=C.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ki=O`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,eo=C.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${Ki} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,to=C(eo)`
    animation-delay: -0.45s;
`,ro=C(eo)`
    animation-delay: -0.3s;
`,no=C(eo)`
    animation-delay: -0.15s;
`,io=C.button`
    padding: ${Li["spacing-8"]} ${Li["spacing-16"]};
    min-width: 4rem;
    border: ${Ri["width-010"]} ${Ri.solid} transparent;
    border-radius: ${Wi.sm};
    transition: all ${Pi["duration-250"]} ${Pi["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return E`
                    background-color: ${Ti.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Ti["border-error-strong"]:Ti["border-primary"]};

                    color: ${e.$buttonIsDanger?Ti["text-error"]:Ti["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ti["bg-hover-neutral"]};
                    }
                `;case"light":return E`
                    background-color: ${Ti.bg};
                    border-color: ${Ti.border};

                    color: ${e.$buttonIsDanger?Ti["text-error"]:Ti["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ti["bg-hover-neutral"]};
                    }
                `;case"link":return E`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ti["text-error"]:Ti["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Ti["bg-hover-neutral"]};
                    }
                `;case"disabled":return E`
                    background-color: ${Ti["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ti["text-disabled"]};
                `;default:return E`
                    background-color: ${e.$buttonIsDanger?Ti["bg-error-strong"]:Ti["bg-primary"]};

                    ${Hi.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Ti["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ti["bg-error-strong-hover"]:Ti["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return E`
                    height: 2.5rem;
                    ${Ii["body-md-semibold"]}

                    ${Hi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return E`
                    height: 4rem;
                    ${Ii["header-md-semibold"]}

                    ${Hi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return E`
                    height: 3rem;
                    ${Ii["header-xs-semibold"]}

                    ${Hi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,oo=C((({color:r,className:n,size:i})=>t(Ji,Object.assign({className:n,$size:i,$color:r},{children:[e(eo,{id:"inner1"}),e(to,{id:"inner2"}),e(ro,{id:"inner3"}),e(no,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,so=(r,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=le(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(io,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(oo,{}),e("span",{children:i})]}))};so.displayName="Button.Default";const ao=(r,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=le(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(io,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(oo,{}),e("span",{children:i})]}))};ao.displayName="Button.Small";const lo=(r,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=le(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(io,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(oo,{}),e("span",{children:i})]}))};lo.displayName="Button.Large";const co={Default:u.forwardRef(so),Small:u.forwardRef(ao),Large:u.forwardRef(lo)},uo=O`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,ho=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>E`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,mo=E`
    animation: ${Pi["duration-150"]} ${Pi["ease-default"]} ${uo};
    width: 100%;
    height: 100%;
    transition: color ${Pi["duration-150"]} ${Pi["ease-default"]};
`,go=C(n)`
    ${mo}
    color: ${Ti["icon-primary-subtlest"]};
`,fo=C(i)`
    ${mo}
    color: ${Ti["icon-disabled-subtle"]};
`,po=C(o)`
    ${mo}
    color: ${e=>e.$disabled?Ti["icon-disabled-subtle"](e):Ti["icon-selected"](e)};
`,bo=C(s)`
    ${mo}
    color: ${e=>e.$disabled?Ti["icon-disabled-subtle"](e):Ti["icon-selected"](e)};
`,yo=C.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${go},
        &:hover
        + ${po},
        &:hover
        + ${bo} {
        color: ${e=>!e.disabled&&Ti["icon-hover"](e)};
    }
`,vo=e=>{const{textSize:t}=e||{};return E`
        // Text styling
        ${t&&Ii[`${t}-regular`]}

        strong {
            font-weight: ${Ii.Spec["weight-semibold"]};
            ${t&&Ii[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Ii.Spec["weight-semibold"]};
            ${t&&Ii[`${t}-semibold`]}
            color: ${Ti.hyperlink};
            text-decoration: none;

            svg {
                color: ${Ti["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Ti["hyperlink-hover"]};

                svg {
                    color: ${Ti["icon-hover"]};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `},xo=(e,t,r=!1)=>{const n=`${e}-${t.toLowerCase()}`;return E`
        ${Ii[n]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},wo=(e,t)=>E`
    ${xo(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1)=>t?E`
            display: block;
        `:e?E`
            display: inline;
        `:E`
            display: block;
        `)(t.inline,t.paragraph)}
    color: ${Ti.text};
`;var $o;!function(r){const n=(e,t,r)=>{const n=C(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>wo(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeaderXXL=n("h1","header-xxl","HeaderXXL"),r.HeaderXL=n("h2","header-xl","HeaderXL"),r.HeaderLG=n("h3","header-lg","HeaderLG"),r.HeaderMD=n("h4","header-md","HeaderMD"),r.HeaderSM=n("h5","header-sm","HeaderSM"),r.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,t)=>{const r=C.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>wo(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const o=(r,n)=>{const i=C.a`
            ${e=>E`
                ${xo(r,e.weight||"regular")}
                color: ${Ti.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Ti["text-hover"]};
                }
            `}
        `,o=r=>{var{external:n=!1,children:o}=r,s=le(r,["external","children"]);return t(i,Object.assign({},s,{children:[o,n&&e(Fo,{})]}))};return o.displayName=`Typography.${n}`,o};r.LinkBL=o("body-baseline","LinkBL"),r.LinkMD=o("body-md","LinkMD"),r.LinkSM=o("body-sm","LinkSM"),r.LinkXS=o("body-xs","LinkXS")}($o||($o={}));const Fo=C(ee)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Co=C.div`
    padding: ${Li[8]} ${Li["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Ti["bg-error"](e),r=Ti["border-error"](e);break;case"success":t=Ti["bg-success"](e),r=Ti["border-success"](e);break;case"warning":default:t=Ti["bg-warning"](e),r=Ti["border-warning"](e);break;case"info":t=Ti["bg-info"](e),r=Ti["border-info"](e);break;case"description":t=Ti["bg-strong"](e),r=Ti["border-strong"](e)}return E`
            background: ${t};
            border-left: ${Ri["width-020"]} ${Ri.solid}
                ${r};
        `}}

    color: ${Ti.text};
    ${e=>"small"===e.$sizeType?vo({textSize:"body-sm"}):vo({textSize:"body-md"})}
`,Eo=C.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Li["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Ti["icon-error"](e);break;case"success":t=Ti["icon-success"](e);break;case"warning":default:t=Ti["icon-warning"](e);break;case"info":t=Ti["icon-info"](e);break;case"description":t=Ti["icon-subtle"](e)}return E`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Oo=C($o.LinkSM)`
    ${e=>"small"===e.$sizeType?E`
                ${Ii["body-sm-semibold"]}
                margin-top: ${Li["spacing-4"]};
            `:E`
                ${Ii["body-md-semibold"]}
                margin-top: ${Li["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Li["spacing-4"]};
    }
`,ko=C.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Do=C.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return E`
                margin-bottom: ${Li["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,_o=C.button`
    ${e=>"small"===e.$sizeType?E`
                ${Ii["body-sm-semibold"]}
            `:E`
                ${Ii["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Li["spacing-4"]};
    margin-top: ${Li["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Ti["text-primary"]};
`,So=C(a)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Pi["duration-350"]} ${Pi["ease-standard"]};
`,Mo=C.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?E`
                    color: ${Ti["icon-selected-disabled"]};
                `:E`
                    color: ${Ti["icon-disabled-subtle"]};
                `:e.$active?E`
                color: ${Ti["icon-selected"]};
            `:E`
            color: ${Ti["icon-subtle"]};
        `};
`,jo=E`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Ii.Spec["weight-regular"]};
        ${e=>e.$size&&Ii[`${e.$size}-regular`]}
        color: ${Ti.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,Ao=C.ol`
    ${jo}

    margin-left: 3rem;

    ${Hi.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return E`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return E`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,zo=C.ul`
    ${jo}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Bo=t=>{var{size:r,bulletType:n,bottomMargin:i,children:o}=t,s=le(t,["size","bulletType","bottomMargin","children"]);return e(zo,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},s,{children:o}))};Bo.displayName="TextList.Ul";const To=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:o,children:s}=t,a=le(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(Ao,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:o},a,{children:s}))};To.displayName="TextList.Ol";const Io=Bo,Po=C.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Ti.bg};

    ${e=>{if(!e.$indicator)return E`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return E`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?E`
                            border-color: ${Ti["border-error"]};
                        `:E`
                            border-color: ${Ti["border-error"]};

                            &:has(${Ho}:hover) {
                                background: ${Ti["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?E`
                            border: none;
                            background: ${Ti["bg-selected-disabled"]};
                        `:E`
                            border: none;
                        `:e.$selected?E`
                        border: none;
                        background: ${Ti["bg-selected"]};

                        &:has(${Ho}:hover) {
                            background: ${Ti["bg-selected-hover"]};

                            & ${Lo} {
                                color: ${Ti["text-selected-hover"]};
                            }

                            & ${Jo} {
                                color: ${Ti["icon-selected-hover"]};
                            }
                        }
                    `:E`
                    border: none;

                    &:has(${Ho}:hover) {
                        background: ${Ti["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?E`
                            border-color: ${Ti["border-error"]};
                        `:E`
                            border-color: ${Ti["border-error"]};

                            &:has(${Ho}:hover) {
                                background: ${Ti["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?E`
                            border-color: ${Ti["border-selected-disabled"]};
                            background: ${Ti["bg-selected-disabled"]};
                        `:E`
                            border-color: ${Ti["border-disabled"]};
                            background: ${Ti["bg-disabled"]};
                        `:e.$selected?E`
                        border-color: ${Ti["border-selected"]};
                        background: ${Ti["bg-selected"]};

                        &:has(${Ho}:hover) {
                            background: ${Ti["bg-selected-hover"]};

                            & ${Lo} {
                                color: ${Ti["text-selected-hover"]};
                            }

                            & ${Jo} {
                                color: ${Ti["icon-selected-hover"]};
                            }
                        }
                    `:E`
                    border-color: ${Ti.border};

                    &:has(${Ho}:hover) {
                        background: ${Ti["bg-hover-subtle"]};
                    }
                `}
`,Ro=C.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,Lo=C.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?E`
                    color: ${Ti["text-selected-disabled"]};
                `:E`
                    color: ${Ti["text-disabled"]};
                `:e.$selected?E`
                color: ${Ti["text-selected"]};
            `:E`
            color: ${Ti.text};
        `}
`,Wo=C.label`
    ${Ii["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Hi.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Hi.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,Yo=C.div`
    ${Ii["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Ii["body-md-semibold"]}
    }
`,Ho=C.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,No=C.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Vo=C.button`
    color: ${e=>e.$disabled?Ti["text-disabled"]:Ti["text-error"]};
    white-space: nowrap;
    ${Ii["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,qo=C.button`
    color: ${e=>e.disabled?Ti["text-disabled"]:Ti["text-primary"]};
    ${Ii["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Ti.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Qo=C.div`
    width: 100%;
    color: ${e=>e.$disabled?Ti["text-disabled"]:Ti["text-error"]};
    border: none;
    background: ${Ti.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Uo=C((r=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:a,sizeType:l="default",showIcon:d=!1,customIcon:c,maxCollapsedHeight:u}=r,h=le(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[g,f]=m(!1),[p,b]=m(!1),{height:v,ref:x}=Mt();y((()=>{w()}),[u,v]);const w=()=>{f(!u),b($())},$=()=>!!u&&v>u;return t(Co,Object.assign({className:i,$type:n,$sizeType:l,"data-testid":h["data-testid"]},{children:[d&&e(Eo,Object.assign({$sizeType:l,$type:n},{children:(()=>{if(n&&c)return c;switch(n){case"success":return e(K,{});case"warning":return e(G,{});case"error":return e(X,{});case"info":case"description":return e(J,{});default:return null}})()})),t(ko,{children:[t(Do,Object.assign({$maxCollapsedHeight:$()?u:void 0,$showMore:g,$hasActionLink:!!s},{children:[e("div",Object.assign({ref:x},{children:o})),s&&t(Oo,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},s,{children:[s.children,a||e(Z,{})]}))]})),p&&t(_o,Object.assign({$sizeType:l,$type:n,type:"button",onClick:()=>f(!g)},{children:["Show ",g?"less":"more",e(So,{$expanded:g})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,Zo=C.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Ti.bg};
    ${vo({textSize:"body-md"})}

    ${e=>e.$disabled?E`
                color: ${Ti["text-disabled"]};
            `:e.$selected?E`
                color: ${Ti["text-selected"]};
            `:E`
                color: ${Ti.text};
            `}
`,Xo=C($o.BodyMD)`
    color: ${e=>e.$disabled?Ti["text-disabled"]:Ti["text-error"]};
`,Go=C(Io)`
    color: ${e=>e.$disabled?Ti["text-disabled"]:Ti["text-error"]};
`,Jo=C((({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=e(r?oe:ie,{});break;case"radio":o=e(r?re:te,{});break;case"tick":o=e(se,{});break;case"cross":o=e(ne,{});break;default:o=null}return e(Mo,Object.assign({className:i,$active:r,$disabled:n},{children:o}))}))`
    ${e=>e.$disabled?e.$selected?E`
                    color: ${Ti["icon-selected-disabled"]};
                `:E`
                    color: ${Ti["icon-disabled-subtle"]};
                `:e.$selected?E`
                color: ${Ti["icon-selected"]};
            `:E`
            color: ${Ti["icon-subtle"]};
        `};
`;var Ko=ce((function(e){return null==e})),es=Object.defineProperty,ts={};((e,t)=>{for(var r in t)es(e,r,{get:t[r],enumerable:!0})})(ts,{assign:()=>zs,colors:()=>Ms,createStringInterpolator:()=>ks,skipAnimation:()=>js,to:()=>Ds,willAdvance:()=>As});var rs=ys(),ns=e=>gs(e,rs),is=ys();ns.write=e=>gs(e,is);var os=ys();ns.onStart=e=>gs(e,os);var ss=ys();ns.onFrame=e=>gs(e,ss);var as=ys();ns.onFinish=e=>gs(e,as);var ls=[];ns.setTimeout=(e,t)=>{const r=ns.now()+t,n=()=>{const e=ls.findIndex((e=>e.cancel==n));~e&&ls.splice(e,1),hs-=~e?1:0},i={time:r,handler:e,cancel:n};return ls.splice(ds(r),0,i),hs+=1,fs(),i};var ds=e=>~(~ls.findIndex((t=>t.time>e))||~ls.length);ns.cancel=e=>{os.delete(e),ss.delete(e),as.delete(e),rs.delete(e),is.delete(e)},ns.sync=e=>{ms=!0,ns.batchedUpdates(e),ms=!1},ns.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,ns.onStart(r)}return n.handler=e,n.cancel=()=>{os.delete(r),t=null},n};var cs="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ns.use=e=>cs=e,ns.now="undefined"!=typeof performance?()=>performance.now():Date.now,ns.batchedUpdates=e=>e(),ns.catch=console.error,ns.frameLoop="always",ns.advance=()=>{"demand"!==ns.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):bs()};var us=-1,hs=0,ms=!1;function gs(e,t){ms?(t.delete(e),e(0)):(t.add(e),fs())}function fs(){us<0&&(us=0,"demand"!==ns.frameLoop&&cs(ps))}function ps(){~us&&(cs(ps),ns.batchedUpdates(bs))}function bs(){const e=us;us=ns.now();const t=ds(us);t&&(vs(ls.splice(0,t),(e=>e.handler())),hs-=t),hs?(os.flush(),rs.flush(e?Math.min(64,us-e):16.667),ss.flush(),is.flush(),as.flush()):us=-1}function ys(){let e=new Set,t=e;return{add(r){hs+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(hs-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,hs-=t.size,vs(t,(t=>t(r)&&e.add(t))),hs+=e.size,t=e)}}}function vs(e,t){e.forEach((e=>{try{t(e)}catch(e){ns.catch(e)}}))}function xs(){}var ws={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function $s(e,t){if(ws.arr(e)){if(!ws.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Fs=(e,t)=>e.forEach(t);function Cs(e,t,r){if(ws.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Es=e=>ws.und(e)?[]:ws.arr(e)?e:[e];function Os(e,t){if(e.size){const r=Array.from(e);e.clear(),Fs(r,t)}}var ks,Ds,_s=(e,...t)=>Os(e,(e=>e(...t))),Ss=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ms=null,js=!1,As=xs,zs=e=>{e.to&&(Ds=e.to),e.now&&(ns.now=e.now),void 0!==e.colors&&(Ms=e.colors),null!=e.skipAnimation&&(js=e.skipAnimation),e.createStringInterpolator&&(ks=e.createStringInterpolator),e.requestAnimationFrame&&ns.use(e.requestAnimationFrame),e.batchedUpdates&&(ns.batchedUpdates=e.batchedUpdates),e.willAdvance&&(As=e.willAdvance),e.frameLoop&&(ns.frameLoop=e.frameLoop)},Bs=new Set,Ts=[],Is=[],Ps=0,Rs={get idle(){return!Bs.size&&!Ts.length},start(e){Ps>e.priority?(Bs.add(e),ns.onStart(Ls)):(Ws(e),ns(Hs))},advance:Hs,sort(e){if(Ps)ns.onFrame((()=>Rs.sort(e)));else{const t=Ts.indexOf(e);~t&&(Ts.splice(t,1),Ys(e))}},clear(){Ts=[],Bs.clear()}};function Ls(){Bs.forEach(Ws),Bs.clear(),ns(Hs)}function Ws(e){Ts.includes(e)||Ys(e)}function Ys(e){Ts.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Ts,(t=>t.priority>e.priority)),0,e)}function Hs(e){const t=Is;for(let r=0;r<Ts.length;r++){const n=Ts[r];Ps=n.priority,n.idle||(As(n),n.advance(e),n.idle||t.push(n))}return Ps=0,(Is=Ts).length=0,(Ts=t).length>0}var Ns="[-+]?\\d*\\.?\\d+",Vs=Ns+"%";function qs(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Qs=new RegExp("rgb"+qs(Ns,Ns,Ns)),Us=new RegExp("rgba"+qs(Ns,Ns,Ns,Ns)),Zs=new RegExp("hsl"+qs(Ns,Vs,Vs)),Xs=new RegExp("hsla"+qs(Ns,Vs,Vs,Ns)),Gs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Js=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ks=/^#([0-9a-fA-F]{6})$/,ea=/^#([0-9a-fA-F]{8})$/;function ta(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ra(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=ta(i,n,e+1/3),s=ta(i,n,e),a=ta(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function na(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ia(e){return(parseFloat(e)%360+360)%360/360}function oa(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function sa(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function aa(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Ks.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ms&&void 0!==Ms[e]?Ms[e]:(t=Qs.exec(e))?(na(t[1])<<24|na(t[2])<<16|na(t[3])<<8|255)>>>0:(t=Us.exec(e))?(na(t[1])<<24|na(t[2])<<16|na(t[3])<<8|oa(t[4]))>>>0:(t=Gs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ea.exec(e))?parseInt(t[1],16)>>>0:(t=Js.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Zs.exec(e))?(255|ra(ia(t[1]),sa(t[2]),sa(t[3])))>>>0:(t=Xs.exec(e))?(ra(ia(t[1]),sa(t[2]),sa(t[3]))|oa(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var la=(e,t,r)=>{if(ws.fun(e))return e;if(ws.arr(e))return la({range:e,output:t,extrapolate:r});if(ws.str(e.output[0]))return ks(e);const n=e,i=n.output,o=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,s,a,l){let d=l?l(e):e;if(d<t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(d>r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[t],o[t+1],i[t],i[t+1],l,s,a,n.map)}};var da=1.70158,ca=1.525*da,ua=da+1,ha=2*Math.PI/3,ma=2*Math.PI/4.5,ga=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},fa={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ua*e*e*e-da*e*e,easeOutBack:e=>1+ua*Math.pow(e-1,3)+da*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ca)/2:(Math.pow(2*e-2,2)*((ca+1)*(2*e-2)+ca)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*ha),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*ha)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ma)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ma)/2+1,easeInBounce:e=>1-ga(1-e),easeOutBounce:ga,easeInOutBounce:e=>e<.5?(1-ga(1-2*e))/2:(1+ga(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,s=1,a=i/e,Math.min(Math.max(a,o),s);var o,s,a}},pa=Symbol.for("FluidValue.get"),ba=Symbol.for("FluidValue.observers"),ya=e=>Boolean(e&&e[pa]),va=e=>e&&e[pa]?e[pa]():e,xa=e=>e[ba]||null;function wa(e,t){const r=e[ba];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var $a=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Fa(this,e)}},Fa=(e,t)=>ka(e,pa,t);function Ca(e,t){if(e[pa]){let r=e[ba];r||ka(e,ba,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ea(e,t){const r=e[ba];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[ba]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Oa,ka=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Da=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,_a=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Sa=new RegExp(`(${Da.source})(%|[a-z]+)`,"i"),Ma=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ja=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Aa=e=>{const[t,r]=za(e);if(!t||Ss())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&ja.test(r)?Aa(r):r||e},za=e=>{const t=ja.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Ba=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Ta=e=>{Oa||(Oa=Ms?new RegExp(`(${Object.keys(Ms).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>va(e).replace(ja,Aa).replace(_a,aa).replace(Oa,aa))),r=t.map((e=>e.match(Da).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>la({...e,output:t})));return e=>{const r=!Sa.test(t[0])&&t.find((e=>Sa.test(e)))?.replace(Da,"");let i=0;return t[0].replace(Da,(()=>`${n[i++](e)}${r||""}`)).replace(Ma,Ba)}},Ia="react-spring: ",Pa=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Ia}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Ra=Pa(console.warn);var La=Pa(console.warn);function Wa(e){return ws.str(e)&&("#"==e[0]||/\d/.test(e)||!Ss()&&ja.test(e)||e in(Ms||{}))}var Ya=Ss()?y:v,Ha=()=>{const e=h(!1);return Ya((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Na(){const e=m()[1],t=Ha();return()=>{t.current&&e(Math.random())}}var Va=e=>y(e,qa),qa=[];function Qa(e){const t=h();return y((()=>{t.current=e})),t.current}var Ua=Symbol.for("Animated:node"),Za=e=>e&&e[Ua],Xa=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,Ua,t),Ga=e=>e&&e[Ua]&&e[Ua].getPayload(),Ja=class{constructor(){Xa(this,this)}getPayload(){return this.payload||[]}},Ka=class extends Ja{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,ws.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Ka(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return ws.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,ws.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},el=class extends Ka{constructor(e){super(0),this._string=null,this._toString=la({output:[e,e]})}static create(e){return new el(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(ws.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=la({output:[this.getValue(),e]})),this._value=0,super.reset()}},tl={dependencies:null},rl=class extends Ja{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Cs(this.source,((r,n)=>{var i;(i=r)&&i[Ua]===i?t[n]=r.getValue(e):ya(r)?t[n]=va(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Fs(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Cs(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){tl.dependencies&&ya(e)&&tl.dependencies.add(e);const t=Ga(e);t&&Fs(t,(e=>this.add(e)))}},nl=class extends rl{constructor(e){super(e)}static create(e){return new nl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(il)),!0)}};function il(e){return(Wa(e)?el:Ka).create(e)}function ol(e){const t=Za(e);return t?t.constructor:ws.arr(e)?nl:Wa(e)?el:Ka}var sl=(e,t)=>{const r=!ws.fun(e)||e.prototype&&e.prototype.isReactComponent;return w(((n,i)=>{const o=h(null),s=r&&$((e=>{o.current=function(e,t){e&&(ws.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[a,l]=function(e,t){const r=new Set;tl.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new rl(e),tl.dependencies=null,[e,r]}(n,t),d=Na(),u=()=>{const e=o.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,a.getValue(!0)))&&d()},m=new al(u,l),g=h();Ya((()=>(g.current=m,Fs(l,(e=>Ca(e,m))),()=>{g.current&&(Fs(g.current.deps,(e=>Ea(e,g.current))),ns.cancel(g.current.update))}))),y(u,[]),Va((()=>()=>{const e=g.current;Fs(e.deps,(t=>Ea(t,e)))}));const f=t.getComponentProps(a.getValue());return c.createElement(e,{...f,ref:s})}))},al=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ns.write(this.update)}};var ll=Symbol.for("AnimatedComponent"),dl=e=>ws.str(e)?e:e&&ws.str(e.displayName)?e.displayName:ws.fun(e)&&e.name||null;function cl(e,...t){return ws.fun(e)?e(...t):e}var ul=(e,t)=>!0===e||!!(t&&e&&(ws.fun(e)?e(t):Es(e).includes(t))),hl=(e,t)=>ws.obj(e)?t&&e[t]:e,ml=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,gl=e=>e,fl=(e,t=gl)=>{let r=pl;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);ws.und(r)||(n[i]=r)}return n},pl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],bl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function yl(e){const t=function(e){const t={};let r=0;if(Cs(e,((e,n)=>{bl[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Cs(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function vl(e){return e=va(e),ws.arr(e)?e.map(vl):Wa(e)?ts.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function xl(e){return ws.fun(e)||ws.arr(e)&&ws.obj(e[0])}var wl={tension:170,friction:26,mass:1,damping:1,easing:fa.linear,clamp:!1},$l=class{constructor(){this.velocity=0,Object.assign(this,wl)}};function Fl(e,t){if(ws.und(t.decay)){const r=!ws.und(t.tension)||!ws.und(t.friction);!r&&ws.und(t.frequency)&&ws.und(t.damping)&&ws.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Cl=[],El=class{constructor(){this.changed=!1,this.values=Cl,this.toValues=null,this.fromValues=Cl,this.config=new $l,this.immediate=!1}};function Ol(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((s,a)=>{let l,d,c=ul(r.cancel??n?.cancel,t);if(c)m();else{ws.und(r.pause)||(i.paused=ul(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||ul(e,t)),l=cl(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-ns.now()}function h(){l>0&&!ts.skipAnimation?(i.delayed=!0,d=ns.setTimeout(m,l),i.pauseQueue.add(u),i.timeouts.add(d)):m()}function m(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...r,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var kl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Sl(e.get()):t.every((e=>e.noop))?Dl(e.get()):_l(e.get(),t.every((e=>e.finished))),Dl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),_l=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Sl=e=>({value:e,cancelled:!0,finished:!1});function Ml(e,t,r,n){const{callId:i,parentId:o,onRest:s}=t,{asyncTo:a,promise:l}=r;return o||e!==a||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const d=fl(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),m=e=>{const t=i<=(r.cancelId||0)&&Sl(n)||i!==r.asyncId&&_l(n,!1);if(t)throw e.result=t,u(e),e},g=(e,t)=>{const o=new Al,s=new zl;return(async()=>{if(ts.skipAnimation)throw jl(r),s.result=_l(n,!1),u(s),s;m(o);const a=ws.obj(e)?{...e}:{...t,to:e};a.parentId=i,Cs(d,((e,t)=>{ws.und(a[t])&&(a[t]=e)}));const l=await n.start(a);return m(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let f;if(ts.skipAnimation)return jl(r),_l(n,!1);try{let t;t=ws.arr(e)?(async e=>{for(const t of e)await g(t)})(e):Promise.resolve(e(g,n.stop.bind(n))),await Promise.all([t.then(c),h]),f=_l(n.get(),!0,!1)}catch(e){if(e instanceof Al)f=e.result;else{if(!(e instanceof zl))throw e;f=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?a:void 0,r.promise=o?l:void 0)}return ws.fun(s)&&ns.batchedUpdates((()=>{s(f,n,n.item)})),f})():l}function jl(e,t){Os(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Al=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},zl=class extends Error{constructor(){super("SkipAnimationSignal")}},Bl=e=>e instanceof Il,Tl=1,Il=class extends $a{constructor(){super(...arguments),this.id=Tl++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Za(this);return e&&e.getValue()}to(...e){return ts.to(this,e)}interpolate(...e){return Ra(`${Ia}The "interpolate" function is deprecated in v9 (use "to" instead)`),ts.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){wa(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Rs.sort(this),wa(this,{type:"priority",parent:this,priority:e})}},Pl=Symbol.for("SpringPhase"),Rl=e=>(1&e[Pl])>0,Ll=e=>(2&e[Pl])>0,Wl=e=>(4&e[Pl])>0,Yl=(e,t)=>t?e[Pl]|=3:e[Pl]&=-3,Hl=(e,t)=>t?e[Pl]|=4:e[Pl]&=-5,Nl=class extends Il{constructor(e,t){if(super(),this.animation=new El,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!ws.und(e)||!ws.und(t)){const r=ws.obj(e)?{...e}:{...t,from:e};ws.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Ll(this)||this._state.asyncTo)||Wl(this)}get goal(){return va(this.animation.to)}get velocity(){const e=Za(this);return e instanceof Ka?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Rl(this)}get isAnimating(){return Ll(this)}get isPaused(){return Wl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,s=Ga(n.to);!s&&ya(n.to)&&(i=Es(va(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==el?1:s?s[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,o.tension<=0)return void(a.done=!0);let t=a.elapsedTime+=e;const r=n.fromValues[l],i=null!=a.v0?a.v0:a.v0=ws.arr(o.velocity)?o.velocity[l]:o.velocity;let s;const h=o.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(ws.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=i*n}else{s=null==a.lastVelocity?i:a.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!ws.und(n),m=r==d?a.v0>0:r<d;let g,f=!1;const p=1,b=Math.ceil(e/p);for(let e=0;e<b&&(g=Math.abs(s)>t,g||(c=Math.abs(d-u)<=h,!c));++e){l&&(f=u==d||u>d==m,f&&(s=-s*n,u=d));s+=(1e-6*-o.tension*(u-d)+.001*-o.friction*s)/o.mass*p,u+=s*p}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,a.durationProgress>0&&(a.elapsedTime=o.duration*a.durationProgress,t=a.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=r+o.easing(n)*(d-r),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:t=!1,a.setValue(u,o.round)&&(r=!0)}));const a=Za(this),l=a.getValue();if(t){const e=va(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return ns.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ll(this)){const{to:e,config:t}=this.animation;ns.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return ws.und(e)?(r=this.queue||[],this.queue=[]):r=[ws.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>kl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),jl(this._state,e&&this._lastCallId),ns.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=ws.obj(r)?r[t]:r,(null==r||xl(r))&&(r=void 0),n=ws.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return Rl(this)||(e.reverse&&([r,n]=[n,r]),n=va(n),ws.und(n)?Za(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,fl(e,((e,t)=>/^on/.test(t)?hl(e,r):e))),Gl(this,e,"onProps"),Jl(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Ol(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{Wl(this)||(Hl(this,!0),_s(o.pauseQueue),Jl(this,"onPause",_l(this,Vl(this,this.animation.to)),this))},resume:()=>{Wl(this)&&(Hl(this,!1),Ll(this)&&this._resume(),_s(o.resumeQueue),Jl(this,"onResume",_l(this,Vl(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=ql(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Sl(this));const n=!ws.und(e.to),i=!ws.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Sl(this));this._lastToId=t.callId}const{key:o,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!i||n||t.default&&!ws.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!$s(u,d);h&&(a.from=u),u=va(u);const m=!$s(c,l);m&&this._focus(c);const g=xl(t.to),{config:f}=a,{decay:p,velocity:b}=f;(n||i)&&(f.velocity=0),t.config&&!g&&function(e,t,r){r&&(Fl(r={...r},t),t={...r,...t}),Fl(e,t),Object.assign(e,t);for(const t in wl)null==e[t]&&(e[t]=wl[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;ws.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(f,cl(t.config,o),t.config!==s.config?cl(s.config,o):void 0);let y=Za(this);if(!y||ws.und(c))return r(_l(this,!0));const v=ws.und(t.reset)?i&&!t.default:!ws.und(u)&&ul(t.reset,o),x=v?u:this.get(),w=vl(c),$=ws.num(w)||ws.arr(w)||Wa(w),F=!g&&(!$||ul(s.immediate||t.immediate,o));if(m){const e=ol(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=ya(c),O=!1;if(!E){const e=v||!Rl(this)&&h;(m||e)&&(O=$s(vl(x),w),E=!O),($s(a.immediate,F)||F)&&$s(f.decay,p)&&$s(f.velocity,b)||(E=!0)}if(O&&Ll(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!g&&((E||ya(l))&&(a.values=y.getPayload(),a.toValues=ya(c)?null:C==el?[1]:Es(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=a;Fs(Xl,(e=>Gl(this,t,e)));const n=_l(this,Vl(this,l));_s(this._pendingCalls,n),this._pendingCalls.add(r),a.changed&&ns.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?cl(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),g?r(Ml(t.to,t,this._state,this)):E?this._start():Ll(this)&&!m?this._pendingCalls.add(r):r(Dl(x))}_focus(e){const t=this.animation;e!==t.to&&(xa(this)&&this._detach(),t.to=e,xa(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;ya(t)&&(Ca(t,this),Bl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;ya(e)&&Ea(e,this)}_set(e,t=!0){const r=va(e);if(!ws.und(r)){const e=Za(this);if(!e||!$s(r,e.getValue())){const n=ol(r);e&&e.constructor==n?e.setValue(r):Xa(this,n.create(r)),e&&ns.batchedUpdates((()=>{this._onChange(r,t)}))}}return Za(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Jl(this,"onStart",_l(this,Vl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),cl(this.animation.onChange,e,this)),cl(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Za(this).reset(va(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ll(this)||(Yl(this,!0),Wl(this)||this._resume())}_resume(){ts.skipAnimation?this.finish():Rs.start(this)}_stop(e,t){if(Ll(this)){Yl(this,!1);const r=this.animation;Fs(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),wa(this,{type:"idle",parent:this});const n=t?Sl(this.get()):_l(this.get(),Vl(this,e??r.to));_s(this._pendingCalls,n),r.changed&&(r.changed=!1,Jl(this,"onRest",n,this))}}};function Vl(e,t){const r=vl(t);return $s(vl(e.get()),r)}function ql(e,t=e.loop,r=e.to){const n=cl(t);if(n){const i=!0!==n&&yl(n),o=(i||e).reverse,s=!i||i.reset;return Ql({...e,loop:t,default:!1,pause:void 0,to:!o||xl(r)?r:void 0,from:s?e.from:void 0,reset:s,...i})}}function Ql(e){const{to:t,from:r}=e=yl(e),n=new Set;return ws.obj(t)&&Zl(t,n),ws.obj(r)&&Zl(r,n),e.keys=n.size?Array.from(n):null,e}function Ul(e){const t=Ql(e);return ws.und(t.default)&&(t.default=fl(t)),t}function Zl(e,t){Cs(e,((e,r)=>null!=e&&t.add(r)))}var Xl=["onStart","onRest","onChange","onPause","onResume"];function Gl(e,t,r){e.animation[r]=t[r]!==ml(t,r)?hl(t[r],e.key):void 0}function Jl(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Kl=["onStart","onChange","onRest"],ed=1,td=class{constructor(e,t){this.id=ed++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];ws.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Ql(e)),this}start(e){let{queue:t}=this;return e?t=Es(e).map(Ql):this.queue=[],this._flush?this._flush(this,t):(ld(this,t),rd(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Fs(Es(t),(t=>r[t].stop(!!e)))}else jl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(ws.und(e))this.start({pause:!0});else{const t=this.springs;Fs(Es(e),(e=>t[e].pause()))}return this}resume(e){if(ws.und(e))this.start({pause:!1});else{const t=this.springs;Fs(Es(e),(e=>t[e].resume()))}return this}each(e){Cs(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Os(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,s=i||o&&r.size?this.get():null;i&&t.size&&Os(t,(([e,t])=>{t.value=s,e(t,this,this._item)})),o&&(this._started=!1,Os(r,(([e,t])=>{t.value=s,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ns.onFrame(this._onFrame)}};function rd(e,t){return Promise.all(t.map((t=>nd(e,t)))).then((t=>kl(e,t)))}async function nd(e,t,r){const{keys:n,to:i,from:o,loop:s,onRest:a,onResolve:l}=t,d=ws.obj(t.default)&&t.default;s&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=ws.arr(i)||ws.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):Fs(Kl,(r=>{const n=t[r];if(ws.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,_s(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),m=!0===t.cancel||!0===ml(t,"cancel");(c||m&&u.asyncId)&&h.push(Ol(++e._lastAsyncId,{props:t,state:u,actions:{pause:xs,resume:xs,start(t,r){m?(jl(u,e._lastAsyncId),r(Sl(e))):(t.onRest=a,r(Ml(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const g=kl(e,await Promise.all(h));if(s&&g.finished&&(!r||!g.noop)){const r=ql(t,s,i);if(r)return ld(e,[r]),nd(e,r,!0)}return l&&ns.batchedUpdates((()=>l(g,e,e.item))),g}function id(e,t){const r={...e.springs};return t&&Fs(Es(t),(e=>{ws.und(e.keys)&&(e=Ql(e)),ws.obj(e.to)||(e={...e,to:void 0}),ad(r,e,(e=>sd(e)))})),od(e,r),r}function od(e,t){Cs(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Ca(t,e))}))}function sd(e,t){const r=new Nl;return r.key=e,t&&Ca(r,t),r}function ad(e,t,r){t.keys&&Fs(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function ld(e,t){Fs(t,(t=>{ad(e.springs,t,(t=>sd(t,e)))}))}var dd,cd,ud=({children:e,...t})=>{const r=F(hd),n=t.pause||!!r.pause,i=t.immediate||!!r.immediate;t=function(e,t){const[r]=m((()=>({inputs:t,result:e()}))),n=h(),i=n.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=r;return y((()=>{n.current=o,i==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:n,immediate:i})),[n,i]);const{Provider:o}=hd;return c.createElement(o,{value:t},e)},hd=(dd=ud,cd={},Object.assign(dd,c.createContext(cd)),dd.Provider._context=dd,dd.Consumer._context=dd,dd);ud.Provider=hd.Provider,ud.Consumer=hd.Consumer;var md=()=>{const e=[],t=function(t){La(`${Ia}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Fs(e,((e,i)=>{if(ws.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Fs(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Fs(e,(e=>e.resume(...arguments))),this},t.set=function(t){Fs(e,((e,r)=>{const n=ws.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Fs(e,((e,n)=>{if(ws.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Fs(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Fs(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return ws.fun(e)?e(r,t):e};return t._getProps=r,t};function gd(e,t){const r=ws.fun(e),[[n],i]=function(e,t,r){const n=ws.fun(t)&&t;n&&!r&&(r=[]);const i=x((()=>n||3==arguments.length?md():void 0),[]),o=h(0),s=Na(),a=x((()=>({ctrls:[],queue:[],flush(e,t){const r=id(e,t),n=o.current>0&&!a.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?rd(e,t):new Promise((n=>{od(e,r),a.queue.push((()=>{n(rd(e,t))})),s()}))}})),[]),l=h([...a.ctrls]),d=[],c=Qa(e)||0;function u(e,r){for(let i=e;i<r;i++){const e=l.current[i]||(l.current[i]=new td(null,a.flush)),r=n?n(i,e):t[i];r&&(d[i]=Ul(r))}}x((()=>{Fs(l.current.slice(e,c),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,u(c,e)}),[e]),x((()=>{u(0,Math.min(c,e))}),r);const m=l.current.map(((e,t)=>id(e,d[t]))),g=F(ud),f=Qa(g),p=g!==f&&function(e){for(const t in e)return!0;return!1}(g);Ya((()=>{o.current++,a.ctrls=l.current;const{queue:e}=a;e.length&&(a.queue=[],Fs(e,(e=>e()))),Fs(l.current,((e,t)=>{i?.add(e),p&&e.start({default:g});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Va((()=>()=>{Fs(a.ctrls,(e=>e.stop(!0)))}));const b=m.map((e=>({...e})));return i?[b,i]:b}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var fd=class extends Il{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=la(...t);const r=this._get(),n=ol(r);Xa(this,n.create(r))}advance(e){const t=this._get();$s(t,this.get())||(Za(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&bd(this._active)&&yd(this)}_get(){const e=ws.arr(this.source)?this.source.map(va):Es(va(this.source));return this.calc(...e)}_start(){this.idle&&!bd(this._active)&&(this.idle=!1,Fs(Ga(this),(e=>{e.done=!1})),ts.skipAnimation?(ns.batchedUpdates((()=>this.advance())),yd(this)):Rs.start(this))}_attach(){let e=1;Fs(Es(this.source),(t=>{ya(t)&&Ca(t,this),Bl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Fs(Es(this.source),(e=>{ya(e)&&Ea(e,this)})),this._active.clear(),yd(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Es(this.source).reduce(((e,t)=>Math.max(e,(Bl(t)?t.priority:0)+1)),0))}};function pd(e){return!1!==e.idle}function bd(e){return!e.size||Array.from(e).every(pd)}function yd(e){e.idle||(e.idle=!0,Fs(Ga(e),(e=>{e.done=!0})),wa(e,{type:"idle",parent:e}))}ts.assign({createStringInterpolator:Ta,to:(e,t)=>new fd(e,t)});var vd=/^--/;function xd(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||vd.test(e)||$d.hasOwnProperty(e)&&$d[e]?(""+t).trim():t+"px"}var wd={};var $d={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fd=["Webkit","Ms","Moz","O"];$d=Object.keys($d).reduce(((e,t)=>(Fd.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),$d);var Cd=/^(matrix|translate|scale|rotate|skew)/,Ed=/^(translate)/,Od=/^(rotate|skew)/,kd=(e,t)=>ws.num(e)&&0!==e?e+t:e,Dd=(e,t)=>ws.arr(e)?e.every((e=>Dd(e,t))):ws.num(e)?e===t:parseFloat(e)===t,_d=class extends rl{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>kd(e,"px"))).join(",")})`,Dd(e,0)]))),Cs(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Cd.test(t)){if(delete n[t],ws.und(e))return;const r=Ed.test(t)?"px":Od.test(t)?"deg":"";i.push(Es(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${kd(i,r)})`,Dd(i,0)]:e=>[`${t}(${e.map((e=>kd(e,r))).join(",")})`,Dd(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Sd(i,o)),super(n)}},Sd=class extends $a{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Fs(this.inputs,((r,n)=>{const i=va(r[0]),[o,s]=this.transforms[n](ws.arr(i)?i:r.map(va));e+=" "+o,t=t&&s})),t?"none":e}observerAdded(e){1==e&&Fs(this.inputs,(e=>Fs(e,(e=>ya(e)&&Ca(e,this)))))}observerRemoved(e){0==e&&Fs(this.inputs,(e=>Fs(e,(e=>ya(e)&&Ea(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),wa(this,e)}};ts.assign({batchedUpdates:q,createStringInterpolator:Ta,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Md=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new rl(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=dl(e)||"Anonymous";return(e=ws.str(e)?o[e]||(o[e]=sl(e,i)):e[ll]||(e[ll]=sl(e,i))).displayName=`Animated(${t})`,e};return Cs(e,((t,r)=>{ws.arr(e)&&(r=dl(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:s,viewBox:a,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:wd[t]||(wd[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=xd(t,n[t]);vd.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new _d(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),jd=Md.animated;const Ad=C.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Hi.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,zd=t=>{var{id:r="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:a,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=t,u=le(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,g]=m(),[f,p]=m();y((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{window.visualViewport.removeEventListener("resize",v)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),y((()=>{var e,t;n&&c&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const b=()=>{const e=.01*window.innerHeight;g(e)},v=()=>{const e=.01*window.visualViewport.height;g(e),p(window.visualViewport.offsetTop)};return e(Ui,Object.assign({"data-testid":`${r}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:a,zIndex:l},{children:e(Ad,Object.assign({show:n,animationFrom:i,"data-testid":r,verticalHeight:h,offsetTop:f},u,{children:o}))}))},Bd=C.div`
    border-radius: ${Wi.md};
    background: ${Ti.bg};
    padding: ${Li["spacing-16"]} ${Li["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Td=C.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Li["spacing-24"]};
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

        ${({$highlight:e})=>e&&E`
                background-color: ${Ti["bg-hover-neutral"]};
            `}
    }
`,Id=u.forwardRef(((t,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=t,a=le(t,["children","focusHighlight","focusOutline","type"]);return e(Td,Object.assign({ref:r,$outline:o,$highlight:i,type:s},a,{children:n}))})),Pd=C.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ti.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Hi.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Rd=C(Id)`
    position: absolute;
    top: var(--close-button-top-inset, ${Li["spacing-16"]});
    right: var(--close-button-right-inset, ${Li["spacing-16"]});
    padding: 0;
    color: ${Ti.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Hi.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Li["spacing-20"]});
    }
`,Ld=C.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Wd=C((t=>{var{children:r}=t,n=le(t,["children"]);const i=n["data-testid"]||"card";return e(Bd,Object.assign({},n,{"data-testid":i},{children:"string"==typeof r?e($o.BodyBL,{children:r}):r}))}))`
    color: ${Ti.text};
    ${vo({textSize:"body-md"})}

    ${Hi.MaxWidth.sm} {
        display: none;
    }
`,Yd=C((r=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:s=!0}=r,a=le(r,["id","children","onClose","showCloseButton"]);return t(Pd,Object.assign({"data-testid":n},a,{onClick:e=>{e.stopPropagation()}},{children:[s&&e(Rd,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser"},{children:e(ne,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Hd=C.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ti.text};
    ${vo({textSize:"body-md"})}
`,Nd=n=>{var{children:i,visible:o,onMobileClose:s}=n,a=le(n,["children","visible","onMobileClose"]);const l=a["data-testid"]||"popover",d=k(),c=Yi["sm-max"]({theme:d}),u=me.useMediaQuery({maxWidth:c}),h=()=>{s&&s()},m=()=>"string"==typeof i?e($o.BodyMD,{children:i}):i;return t(r,{children:[o&&e(Ld,Object.assign({"data-testid":l},a,{children:e(Wd,{children:m()})})),u&&e(zd,Object.assign({show:o,onOverlayClick:h},{children:e(Yd,Object.assign({onClose:h},{children:e(Hd,{children:m()})}))}))]})},Vd=C.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,qd=n=>{var i,o,{children:s,popoverContent:a,trigger:l="click",position:d="top",zIndex:c,rootNode:u,customOffset:g,delay:f,onPopoverAppear:p,onPopoverDismiss:b}=n,v=le(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[x,w]=m(!1),$=h(),F=h(),C=k(),E=Yi["sm-max"]({theme:C}),O=me.useMediaQuery({maxWidth:E}),{refs:_,floatingStyles:S,context:M}=j({open:x,placement:d,whileElementsMounted:A,middleware:[z(null!=g?g:16),B(),T({limiter:I()})],onOpenChange:e=>{w(e),x!==e&&J(e)}}),N=(()=>{const[e,t]=m(void 0),r=D();return y((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(qi.Change,e),r.events.emit(qi.Ready),()=>r.events.off(qi.Change,e)}),[r]),e})(),V=O?"click":l,q=P(M,{ignoreMouse:"hover"===V}),Q=R(M),U=L(M,{enabled:"hover"===V,delay:{open:null!==(i=null==f?void 0:f.open)&&void 0!==i?i:0,close:null!==(o=null==f?void 0:f.close)&&void 0!==o?o:500}}),{getReferenceProps:Z,getFloatingProps:X}=W([q,Q,U]),G=()=>{w(!1),J(!1)},J=e=>{e&&p&&p(),!e&&b&&b()};return t(r,{children:[e(Vd,Object.assign({ref:e=>{$.current=e,_.setReference(e)}},Z({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:s})),x&&e(Y,Object.assign({root:u},{children:e(H,Object.assign({context:M},{children:e("div",Object.assign({ref:e=>{F.current=e,_.setFloating(e)},style:Object.assign(Object.assign({},S),{outline:"none",zIndex:null!=c?c:N})},X(),{children:"function"==typeof a?a():e(Nd,Object.assign({visible:!0,onMobileClose:G},{children:a}))}))}))}))]})},Qd=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Ud=C.span`
    color: ${Ti["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Qd(e)}

    &:hover,
    &:focus-visible {
        color: ${Ti["text-hover"]};
        ${({$hoverStyle:e})=>Qd(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Zd=C.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Xd=r=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:s="default",underlineHoverStyle:a="default"}=r,l=le(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return e(qd,Object.assign({},l,{children:t(Ud,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:s,$hoverStyle:a,"aria-label":null!=n?n:d?void 0:"More info"},{children:[i,o&&e(Zd,Object.assign({$standalone:!d},{children:o}))]}))}))},Gd=C.div`
    padding-left: ${Li["spacing-4"]};
    display: inline;
`,Jd=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:o,id:s,zIndex:a,"data-testid":l}=t;return e(Gd,{children:e(Xd,{trigger:"click",id:s,"data-testid":l,popoverContent:n,rootNode:r,zIndex:a,icon:null!=o?o:e(J,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Kd=C.div`
    background-color: ${e=>e.$collapsible?Ti["bg-strong"]:Ti.bg};
    ${Hi.MaxWidth.lg} {
        background-color: ${Ti["bg-strong"]};
    }
`,ec=C.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Ti.border};

    ${Hi.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${Li["spacing-16"]};
    }
`,tc=C.div`
    display: flex;
    align-items: center;

    background-color: ${Ti.bg};

    ${Hi.MaxWidth.lg} {
        background-color: transparent;
    }
`,rc=C(Id)`
    margin: 0 0 0 auto;

    color: ${Ti.icon};
    &:hover {
        color: ${Ti["icon-hover"]};
    }
`,nc=C(Q)`
    height: ${Ii.Spec["body-size-baseline"]};
    width: ${Ii.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Pi["duration-350"]} ${Pi["ease-standard"]};
`,ic=C.p`
    ${Ii["header-xs-semibold"]}
    color: ${Ti.text};

    margin: ${Li["spacing-24"]} 0 ${Li["spacing-24"]}
        ${Li["spacing-20"]};

    ${Hi.MaxWidth.lg} {
        ${Ii["body-md-semibold"]}
        color: ${Ti["text-subtle"]};

        margin: ${Li["spacing-24"]} ${Li["spacing-20"]} 0
            ${Li["spacing-20"]};
    }
`,oc=C(jd.div)`
    overflow: hidden;
`,sc=C.div`
    padding: ${Li["spacing-24"]} ${Li["spacing-20"]};
`,ac=C(jd.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,lc=C(co.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Li["spacing-16"]} 0 0 0;
`,dc=r=>{var{collapsible:n=!0,initialExpanded:i=!1,expanded:o,onExpandChange:s,minimisable:a=!1,minimisedHeight:l,showDivider:d=!0,showMobileDivider:c=!0,title:u,addon:h,children:g}=r,f=le(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:p,rootNode:b}=F(Gi),v="mobile"===p,[x,w]=m(S()),[$,C]=m(a),E=!v&&n,O=Mt(),k=Mt(),D=gd({height:x?O.height:0}),_=$?null!=l?l:Math.min(.5*k.height,216):k.height;y((()=>{w(S())}),[n,o]);function S(){return!!v||(Ko(o)?!n||i:o)}return t(Kd,Object.assign({$collapsible:E},{children:[e(ec,{$showDivider:d,$showMobileDivider:c}),(u||E)&&t(tc,{children:[u&&t(ic,{children:[u," ",h&&("popover"===h.type?e(Jd,{addon:h,rootNode:v?b:void 0}):null)]}),E&&e(rc,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!x;Ko(o)&&w(e),s&&s(e)},"aria-label":x?"Collapse":"Expand"},{children:e(nc,{$expanded:x})}))]}),e(oc,Object.assign({"data-testid":"expandable-container","data-expanded":x,style:D},{children:e("div",Object.assign({ref:O.ref},{children:t(sc,Object.assign({},f,{children:[e(ac,Object.assign({"data-testid":"minimisable-container",$height:_,$minimisable:a},{children:e("div",Object.assign({ref:k.ref},{children:e("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof g?g(p,{minimised:$}):g}))}))})),a&&t(lc,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{C(!$)}},{children:["View ",$?"more":"less"]}))]}))}))}))]}))};dc.displayName="Filter.Item";const cc=C(dc)`
    padding: 0 0 ${Li["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${Li["spacing-8"]} ${Li["spacing-8"]} 0;

        ${Hi.MaxWidth.lg} {
            padding: ${Li["spacing-16"]} ${Li["spacing-20"]}
                ${Li["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${Li["spacing-8"]} ${Li["spacing-20"]} 0;
    }
`,uc=C.div`
    display: flex;
    flex-direction: column;

    ${Hi.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${Li["spacing-16"]};
    }
`,hc=C.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${Li["spacing-8"]} ${Li["spacing-12"]};

    cursor: pointer;
    ${Ii["body-md-regular"]}
    color: ${Ti.text};
    ${e=>e.$selected&&E`
            color: ${Ti["text-selected"]};
        `}

    ${Hi.MaxWidth.lg} {
        padding: ${Li["spacing-8"]};
    }
`,mc=C((r=>{var{className:n,checked:i,disabled:o,indeterminate:s,onChange:a,onKeyPress:l,displaySize:d="default"}=r,c=le(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=h();y((()=>{u.current.indeterminate=s}),[s]);const m=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;a&&a(e),l&&l(t)}};return t(ho,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:m,$displaySize:d,$disabled:o,$unchecked:!(s||i||o)},{children:[e(yo,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:m,disabled:o},c)),s?e(bo,{$disabled:o,"data-testid":"indeterminate"}):i?e(po,{$disabled:o,"data-testid":"checkmark"}):o?e(fo,{"data-testid":"empty-disabled-checkbox"}):e(go,{$disabled:o,"data-testid":"empty-checkbox"})]}))}))`
    flex-shrink: 0;
    margin-right: ${Li["spacing-8"]};
`,gc=C((({type:n="checkbox",indicator:i,checked:o,styleType:s="default",children:a,childrenMaxLines:l,subLabel:d,disabled:c,error:u,name:g,id:f,className:p,compositeSection:b,removable:v,onRemove:w,"data-testid":$,onChange:F,useContentWidth:C})=>{const{collapsible:E=!0,errors:O,children:k,initialExpanded:D}=b||{},[_,S]=m(o),[M,j]=m(D),A=x((()=>{const e=Array.isArray(O)&&(null==O?void 0:O.length)>0,t=!Array.isArray(O)&&!!O;return e||t}),[O]),[z]=m(Be.generate()),B=f?`${f}`:`tg-${z}`,T=h();y((()=>{S(o)}),[o]),y((()=>{_&&j(null==D||D)}),[_]);const I=e=>{if(!c){if(F)return void F(e);switch(n){case"checkbox":S((e=>!e));break;case"radio":case"yes":case"no":_||S(!0)}}},P=()=>{c||j(!M)},R=()=>{c||!w||w()},L=()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e(Jo,{type:t,active:_,disabled:c,$selected:_,$disabled:c})},W=()=>{if(!d)return null;let t;return t="function"==typeof d?d():d,e(Yo,Object.assign({"data-id":"toggle-sublabel"},{children:t}))},Y=()=>{const r=!M&&!A;return E&&t(qo,Object.assign({$paddingTopRequired:r,disabled:c,onClick:P,"data-testid":M?"collapse-button":"expand-button"},{children:[M?"Show less":"Show more",e(M?U:Q,{"aria-hidden":!0})]}))},H=n=>t(r,{children:[e(Xo,Object.assign({weight:"semibold",$disabled:c},{children:"Error"})),e(Go,Object.assign({$disabled:c},{children:null==n?void 0:n.map(((t,r)=>e("li",Object.assign({id:`${B}-error-list-item-${r}`},{children:e(Xo,Object.assign({weight:"semibold",$disabled:c},{children:t}))}),r)))}))]});return t(Po,Object.assign({$selected:_,$disabled:c,className:p,$styleType:s,$error:u,$indicator:i,$useContentWidth:C,id:f,"data-testid":$},{children:[t(Ho,Object.assign({id:`${B}-header-container`,$disabled:c,$error:u,$selected:_,$indicator:i,$styleType:s},{children:[t(No,Object.assign({$addPadding:v},{children:[e(Ro,{ref:T,name:g,id:`${B}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:c,onChange:I,checked:_}),i&&L(),t(Lo,Object.assign({$selected:_,$disabled:c},{children:[e(Wo,Object.assign({htmlFor:`${B}-input`,"data-testid":`${B}-toggle-label`,$maxLines:l},{children:a})),d&&W()]}))]})),v&&e(Vo,Object.assign({type:"button",$disabled:c,onClick:R,id:`${B}-remove-button`},{children:"Remove"}))]})),k&&t("div",{children:[(!E||M)&&e(Zo,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!E,$disabled:c},{children:k})),E&&!M&&A&&e(Qo,Object.assign({$disabled:c,onClick:P,id:`${B}-error-alert`},{children:e(Uo,Object.assign({type:c?"description":"error",className:p,showIcon:!0},{children:Array.isArray(O)?H(O):O}))})),Y()]})]}))}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,fc=C(co.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Li["spacing-16"]} 0 ${Li["spacing-8"]}
        ${Li["spacing-12"]};

    ${Hi.MaxWidth.lg} {
        margin: 0 0 ${Li["spacing-16"]} 0;
    }
`,pc=n=>{var{selectedOptions:i,options:o,onSelect:s,labelExtractor:a,valueExtractor:l,useToggleContentWidth:d}=n,c=le(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:u}=F(Gi),[g,f]=m(i||[]),[p,b]=m(),[v,x]=m(o.length),w=h(),C=h(),E=e=>()=>{const t=[...g],r=g.findIndex((t=>D(t)===D(e)));r>=0?t.splice(r,1):t.push(e),f(t),null==s||s(t)},O=()=>{const e=g.length?[]:o;f(e),null==s||s(e)},k=e=>{var t;return a?a(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},D=e=>{var t;return l?l(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},_=$((()=>{if(!w.current)return void b(void 0);const e=Array.from(w.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}x(t),b(r>2?n-8:void 0)}),[]);y((()=>{i!==g&&f(i||[])}),[i]),y((()=>{"default"===u?(()=>{const e=C.current?C.current.offsetTop+C.current.clientHeight:void 0;b(e)})():_()}),[o]),Mt({handleWidth:"mobile"===u,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:w,onResize:_});return e(cc,Object.assign({minimisable:o.length>5,minimisedHeight:p},c,{children:(n,{minimised:i})=>t(r,{children:[o.length<3?null:e(fc,Object.assign({styleType:"link",type:"button",onClick:O},{children:g.length?"Clear all":"Select all"})),e(uc,Object.assign({role:"group","aria-label":c.title,ref:w},{children:o.map(((r,o)=>"default"===n?((r,n,i)=>{const o=k(r),s=D(r),a=!!g.find((e=>D(e)===s));return t(hc,Object.assign({$visible:!i||n<5,$selected:a,ref:4===n?C:void 0},{children:[e(mc,{displaySize:"small",checked:a,onChange:E(r)}),o]}),s)})(r,o,i):((t,r,n)=>{const i=k(t),o=D(t),s=!!g.find((e=>D(e)===o));return e(gc,Object.assign({type:"checkbox",checked:s,$visible:!n||p&&r<=v,onChange:E(t),useContentWidth:d},{children:i}),o)})(r,o,i)))}))]})}))};pc.displayName="Filter.Checkbox";const bc=C.div`
    background-color: ${Ti.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,yc=C(io)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,vc=(r,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left"}=r,c=le(r,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:a};return t(yc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button-with-icon",disabled:o},u,c,{children:[l,e("span",{children:i})]}))};vc.displayName="ButtonWithIcon.Default";const xc=(r,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left"}=r,c=le(r,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:a};return t(yc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button-with-icon",disabled:o},u,c,{children:[l,e("span",{children:i})]}))};xc.displayName="ButtonWithIcon.Small";const wc={Default:u.forwardRef(vc),Small:u.forwardRef(xc)},$c=C.div`
    background-color: ${Ti.bg};
    border: ${Ri["width-010"]} ${Ri.solid} ${Ti.border};
    border-radius: ${Wi.md};
    overflow: hidden;
    width: 100%;
`,Fc=C.div`
    background-color: ${Ti["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Cc=C.div`
    background-color: ${Ti.bg};
    height: 100%;
    width: 100%;
`,Ec=C.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,Oc=C.div`
    display: flex;
    align-items: center;

    background-color: ${Ti.bg};

    ${Hi.MaxWidth.lg} {
        border-bottom: ${Ri["width-010"]} ${Ri.solid}
            ${Ti.border};
    }
`,kc=C($o.HeaderXS).attrs({as:"p"})`
    flex: 1;
    margin: ${Li["spacing-24"]} 0 ${Li["spacing-24"]}
        ${Li["spacing-20"]};

    ${Hi.MaxWidth.lg} {
        text-align: center;
        margin: ${Li["spacing-24"]} 0;
    }
`,Dc=C(Id)`
    padding: ${Li["spacing-24"]} ${Li["spacing-20"]};
    margin-right: auto;
    color: ${Ti.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Ti["icon-hover"]};
    }
`,_c=C(co.Small)`
    background-color: transparent;
    padding-right: ${Li["spacing-20"]};
    padding-left: ${Li["spacing-20"]};
    height: 100%;

    ${Hi.MaxWidth.lg} {
        padding: ${Li["spacing-24"]} ${Li["spacing-20"]};
    }
`,Sc=C(wc.Default)`
    width: 100%;
`,Mc=C.div`
    padding: ${Li["spacing-24"]} ${Li["spacing-20"]};
    background-color: ${Ti.bg};
    border-top: ${Ri["width-010"]} ${Ri.solid} ${Ti.border};
`,jc=C(co.Default)`
    width: 100%;
`,Ac=({onDismiss:r,onDone:n,children:i})=>t(bc,{children:[e(Dc,Object.assign({onClick:r,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(ae,{})})),e(Ec,{children:i}),e(Mc,{children:e(jc,Object.assign({onClick:n,type:"button"},{children:"Done"}))})]});Ac.displayName="Filter.Page";const zc=n=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:o="light",headerTitle:s="Filters",clearButtonDisabled:a=!1,onClear:c,onDismiss:u,onDone:g,children:f}=n,p=le(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[b,v]=m(!1),x=h(null),w=h(null),$=k(),F=Yi["lg-max"]({theme:$}),C=me.useMediaQuery({maxWidth:F});y((()=>{C||O()}),[C]);const E=()=>{v(!0)},O=()=>{v(!1),u&&u()},D=()=>{v(!1),g&&g()},_=()=>{c&&c()},S=e=>"function"==typeof f?f(e):f,M=r=>t(Oc,{children:["mobile"===r&&e(Dc,Object.assign({onClick:O,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(d,{})})),e(kc,Object.assign({weight:"semibold"},{children:s})),e(_c,Object.assign({styleType:"link",type:"button",onClick:_,disabled:a},{children:"Clear"}))]});return e("div",Object.assign({},p,{children:e(Gi.Provider,C?Object.assign({value:{mode:"mobile",rootNode:x}},{children:t(r,{children:[e(Sc,Object.assign({"data-testid":"filter-show-button",styleType:o,onClick:E,type:"button",icon:e(l,{})},{children:i})),e(Ui,Object.assign({show:b,disableTransition:!0},{children:e(Cc,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:t(Fc,Object.assign({ref:x},{children:[M("mobile"),e(Ec,{children:S("mobile")}),e(Mc,{children:e(jc,Object.assign({onClick:D,type:"button"},{children:"Done"}))})]}))}))}))]})}):Object.assign({value:{mode:"default",rootNode:w}},{children:t($c,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:w},{children:[M("default"),S("default")]}))}))}))};zc.displayName="Filter";const Bc=Object.assign(zc,{Item:dc,Page:Ac,Checkbox:pc});export{Bc as Filter};
//# sourceMappingURL=index.js.map
