import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import{SquareIcon as n,SquareFillIcon as i,SquareTickFillIcon as o,MinusSquareFillIcon as s,ChevronDownIcon as a,FilterIcon as l,CrossIcon as d}from"@lifesg/react-icons";import*as c from"react";import u,{useRef as h,useState as g,isValidElement as m,createRef as f,cloneElement as p,PureComponent as b,useEffect as y,useLayoutEffect as v,useMemo as x,forwardRef as w,useCallback as $,useContext as F}from"react";import C,{css as E,keyframes as D,useTheme as k}from"styled-components";import{useFloatingTree as _,FloatingTree as O,useFloatingNodeId as S,FloatingNode as M,useFloating as A,autoUpdate as B,offset as z,flip as j,shift as T,limitShift as I,useClick as P,useDismiss as R,useHover as L,useInteractions as W,FloatingPortal as Y,FloatingFocusManager as H}from"@floating-ui/react";import N,{findDOMNode as V,unstable_batchedUpdates as q}from"react-dom";import{ChevronDownIcon as Q}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as U}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as Z}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as X}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as G}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as J}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as K}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as ee}from"@lifesg/react-icons/external";import{CircleIcon as te}from"@lifesg/react-icons/circle";import{CircleDotIcon as re}from"@lifesg/react-icons/circle-dot";import{CrossIcon as ne}from"@lifesg/react-icons/cross";import{SquareIcon as ie}from"@lifesg/react-icons/square";import{SquareTickFillIcon as oe}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as se}from"@lifesg/react-icons/tick";import{ChevronLeftIcon as ae}from"@lifesg/react-icons/chevron-left";function le(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var de="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ce(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ue,he={exports:{}};ue=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),s=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:m(d),arrayOf:function(e){return m((function(t,r,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=t[r];if(!Array.isArray(a))return new g("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<a.length;l++){var d=e(a,l,n,i,o+"["+l+"]",s);if(d instanceof Error)return d}return null}))},element:m((function(t,r,n,i,o){var s=t[r];return e(s)?null:new g("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,t,r,n,o){var s=e[t];return i.isValidElementType(s)?null:new g("Invalid "+n+" `"+o+"` of type `"+y(s)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,n,i,o){if(!(t[r]instanceof e)){var s=e.name||c;return new g("Invalid "+i+" `"+o+"` of type `"+((a=t[r]).constructor&&a.constructor.name?a.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+s+"`.")}var a;return null}))},node:m((function(e,t,r,n,i){return b(e[t])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,r,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],d=y(l);if("object"!==d)return new g("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(a(l,c)){var u=e(l,c,n,i,o+"."+c,s);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,r,n,i,o){for(var s=t[r],a=0;a<e.length;a++)if(h(s,e[a]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===v(t)?String(t):t}));return new g("Invalid "+i+" `"+o+"` of value `"+String(s)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),d}return m((function(t,r,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(t,r,n,i,o,s);if(null==c)return null;c.data&&a(c.data,"expectedType")&&l.push(c.data.expectedType)}return new g("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,n,i,o){var a=t[r],l=y(a);if("object"!==l)return new g("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return p(n,i,o,d,v(c));var u=c(a,d,n,i,o+"."+d,s);if(u)return u}return null}))},exact:function(e){return m((function(t,r,n,i,l){var d=t[r],c=y(d);if("object"!==c)return new g("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},t[r],e);for(var h in u){var m=e[h];if(a(e,h)&&"function"!=typeof m)return p(n,i,l,h,v(m));if(!m)return new g("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=m(d,h,n,i,l+"."+h,s);if(f)return f}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function g(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var r={},i=0;function o(o,a,l,d,u,h,m){if(d=d||c,h=h||l,m!==s){if(t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!=typeof console){var p=d+":"+l;!r[p]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[p]=!0,i++)}}return null==a[l]?o?null===a[l]?new g("The "+u+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new g("The "+u+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(a,l,d,u,h)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function f(e){return m((function(t,r,n,i,o,s){var a=t[r];return y(a)!==e?new g("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function p(e,t,r,n,i){return new g((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!b(i.value))return!1}else for(;!(i=o.next()).done;){var s=i.value;if(s&&!b(s[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function v(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return g.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var g=e.type;switch(g){case d:case c:case i:case s:case o:case h:return g;default:var p=g&&g.$$typeof;switch(p){case l:case u:case f:case m:case a:return p;default:return t}}case n:return t}}}var w=d,$=c,F=l,C=a,E=r,D=u,k=i,_=f,O=m,S=n,M=s,A=o,B=h,z=!1;function j(e){return x(e)===c}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=F,t.ContextProvider=C,t.Element=E,t.ForwardRef=D,t.Fragment=k,t.Lazy=_,t.Memo=O,t.Portal=S,t.Profiler=M,t.StrictMode=A,t.Suspense=B,t.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===d},t.isConcurrentMode=j,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===f},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===s||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===m||e.$$typeof===a||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===p)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),o=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),s=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),d=n(r(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,s.default)(r)]=e[r],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],o=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(d.default),r=function(){return c(e)||c(t)},n=(0,i.useState)(r),o=n[0],s=n[1];return(0,i.useEffect)((function(){var e=r();(0,a.shallowEqualObjects)(o,e)||s(e)}),[e,t]),o}(t),s=h(e);if(!s)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,i.useState)(r),s=n[0],a=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=r();return a(e),function(){e&&e.dispose()}}}),[e,t]),s}(s,n),g=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),m=u();return(0,i.useEffect)((function(){m&&r&&r(g)}),[g]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),g}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var ge=he.exports=ue(u),me={exports:{}};me.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,d),o=r-i<0,s=t.clone().add(n+(o?-1:1),d);return+(-(n+(r-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},F=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var s=t.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,i=a}return!n&&i&&(v=i),i||!n&&v},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new D(r)},E=y;E.l=F,E.i=$,E.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(m);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return E},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return E.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!E.u(t)||t,c=E.p(e),g=function(e,t){var i=E.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(a)},m=function(e,t){return E.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,p=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return g(n?b-x:b+(6-x),p);case a:case h:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case o:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(r={},r[a]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[s]=c+"Hours",r[o]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],m=l===a?this.$D+(t-this.$W):t;if(l===d||l===u){var f=this.clone().set(h,1);f.$d[g](m),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[E.p(e)]()},b.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),f=function(e){var t=C(g);return E.w(t.date(t.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===a)return f(1);if(m===l)return f(7);var p=(h={},h[o]=t,h[s]=r,h[i]=e,h)[m]||1,b=this.$d.getTime()+n*p;return E.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,s=this.$m,a=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},m=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return E.s(t.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(r.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return t.$D;case"DD":return E.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(o,s,!0);case"A":return m(o,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(t.$s);case"ss":return E.s(t.$s,2,"0");case"SSS":return E.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var m,f=this,p=E.p(h),b=C(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return E.m(f,b)};switch(p){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case a:m=(v-y)/864e5;break;case s:m=v/r;break;case o:m=v/t;break;case i:m=v/e;break;default:m=v}return g?m:E.a(m)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return E.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),k=D.prototype;return C.prototype=k,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,D,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var fe=ce(me.exports),pe={exports:{}};pe.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[i,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var i=s[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(i||o?1:g.getDate()),f=i||g.getFullYear(),p=0;i&&!o||(p=o>0?o-1:g.getMonth());var b=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(f,p,m,b,y,v,x+60*u.offset*1e3)):r?new Date(Date.UTC(f,p,m,b,y,v,x)):new Date(f,p,m,b,y,v,x)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var g=a.length,m=1;m<=g;m+=1){s[1]=a[m-1];var f=r.apply(this,s);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}m===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var be=ce(pe.exports),ye={exports:{}};ye.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),s=r(t),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var ve=ce(ye.exports),xe={exports:{}};xe.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var we=ce(xe.exports),$e={exports:{}};$e.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Fe,Ce,Ee,De=ce($e.exports),ke={exports:{}},_e=ce(ke.exports=(Fe={year:0,month:1,day:2,hour:3,minute:4,second:5},Ce={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Ce[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Ce[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Fe[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",m=+e;return(r.utc(g).valueOf()-(m-=m%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(t){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var s=i&&t,a=i||t||n,l=o(+r(),a);if("string"!=typeof e)return r(e).tz(a);var d=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var s=o(n-=60*(i-t)*1e3,r);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(r.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));fe.extend(ve),fe.extend(De),fe.extend(we),fe.extend(be),fe.extend(_e),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=fe(t).startOf("week");return Oe(r).map((e=>Se(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Se(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(fe(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+fe(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=fe(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?fe(n):void 0,i?fe(i):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!s}}(Ee||(Ee={}));const Oe=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Se=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Me=[1,3,5,7,8,10,12],Ae=[4,6,9,11];var Be,ze,je,Te;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),s=parseInt(n);return 0==i?"1":Me.includes(o)?Math.min(i,31).toString():Ae.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=fe(e,r);return fe(t,r).diff(n,"minute")},e.toDayjs=e=>e?fe(e):fe(),e.addMinutesToTime=(e,t,r="HH:mm")=>fe(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>fe(e).isSame(fe(t),r)}(Be||(Be={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!fe(e).isBefore(n,"day"))||!(!i||!fe(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(fe(e).isValid())return e}return""}}(ze||(ze={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(je||(je={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const s=n+o;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Te||(Te={}));var Ie=function(e,t){return Ie=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Ie(e,t)};var Pe=function(){return Pe=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Pe.apply(this,arguments)};var Re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Le=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},We="object"==typeof Re&&Re&&Re.Object===Object&&Re,Ye="object"==typeof self&&self&&self.Object===Object&&self,He=We||Ye||Function("return this")(),Ne=He,Ve=function(){return Ne.Date.now()},qe=/\s/;var Qe=function(e){for(var t=e.length;t--&&qe.test(e.charAt(t)););return t},Ue=/^\s+/;var Ze=function(e){return e?e.slice(0,Qe(e)+1).replace(Ue,""):e},Xe=He.Symbol,Ge=Xe,Je=Object.prototype,Ke=Je.hasOwnProperty,et=Je.toString,tt=Ge?Ge.toStringTag:void 0;var rt=function(e){var t=Ke.call(e,tt),r=e[tt];try{e[tt]=void 0;var n=!0}catch(e){}var i=et.call(e);return n&&(t?e[tt]=r:delete e[tt]),i},nt=Object.prototype.toString;var it=rt,ot=function(e){return nt.call(e)},st=Xe?Xe.toStringTag:void 0;var at=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":st&&st in Object(e)?it(e):ot(e)},lt=function(e){return null!=e&&"object"==typeof e};var dt=Ze,ct=Le,ut=function(e){return"symbol"==typeof e||lt(e)&&"[object Symbol]"==at(e)},ht=/^[-+]0x[0-9a-f]+$/i,gt=/^0b[01]+$/i,mt=/^0o[0-7]+$/i,ft=parseInt;var pt=Le,bt=Ve,yt=function(e){if("number"==typeof e)return e;if(ut(e))return NaN;if(ct(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ct(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=dt(e);var r=gt.test(e);return r||mt.test(e)?ft(e.slice(2),r?2:8):ht.test(e)?NaN:+e},vt=Math.max,xt=Math.min;var wt=function(e,t,r){var n,i,o,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,o=i;return n=i=void 0,d=t,s=e.apply(o,r)}function m(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=o}function f(){var e=bt();if(m(e))return p(e);a=setTimeout(f,function(e){var r=t-(e-l);return u?xt(r,o-(e-d)):r}(e))}function p(e){return a=void 0,h&&n?g(e):(n=i=void 0,s)}function b(){var e=bt(),r=m(e);if(n=arguments,i=this,l=e,r){if(void 0===a)return function(e){return d=e,a=setTimeout(f,t),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(f,t),g(l)}return void 0===a&&(a=setTimeout(f,t)),s}return t=yt(t)||0,pt(r)&&(c=!!r.leading,o=(u="maxWait"in r)?vt(yt(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},b.flush=function(){return void 0===a?s:p(bt())},b},$t=wt,Ft=Le;var Ct=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ft(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),$t(e,t,{leading:n,maxWait:t,trailing:i})},Et=function(e,t,r,n){switch(t){case"debounce":return wt(e,r,n);case"throttle":return Ct(e,r,n);default:return e}},Dt=function(e){return"function"==typeof e},kt=function(){return"undefined"==typeof window},_t=function(e){return e instanceof Element||e instanceof HTMLDocument},Ot=function(e,t,r,n){return function(i){var o=i.width,s=i.height;t((function(t){return t.width===o&&t.height===s||t.width===o&&!n||t.height===s&&!r?t:(e&&Dt(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!kt()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(kt())return null;if(t)return document.querySelector(t);if(n&&_t(n))return n;if(r.targetRef&&_t(r.targetRef.current))return r.targetRef.current;var i=V(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,s=void 0===o||o,a=t.onResize;if(i||s){var l=Ot(a,r.setState.bind(r),i,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!kt()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Dt(t)?"renderProp":Dt(n)?"childFunction":m(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,s=void 0===o?1e3:o,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=f(),r.observableElement=null,kt()||(r.resizeHandler=Et(r.createResizeHandler,i,s,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Ie(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){kt()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,i=t.nodeType,o=void 0===i?"div":i,s=this.state,a={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(a);case"childFunction":return(e=n)(a);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(a,["targetRef"]);return p(e,l)}return p(e,a);case"childArray":return(e=n).map((function(e){return!!e&&p(e,a)}));default:return c.createElement(o,null)}}}(b);var St=kt()?y:v;function Mt(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,s=e.refreshOptions,a=e.handleWidth,l=void 0===a||a,d=e.handleHeight,c=void 0===d||d,u=e.targetRef,m=e.observerOptions,f=e.onResize,p=h(r),b=h(null),y=null!=u?u:b,v=h(),x=g({width:void 0,height:void 0}),w=x[0],$=x[1];return St((function(){if(!kt()){var e=Ot(f,$,l,c);v.current=Et((function(t){(l||c)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!p.current&&!kt()&&e({width:n,height:i}),p.current=!1}))}),n,o,s);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,m),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,s,l,c,f,m,y.current]),Pe({ref:y},w)}var At=Array.isArray,Bt="object"==typeof de&&de&&de.Object===Object&&de,zt="object"==typeof self&&self&&self.Object===Object&&self,jt=Bt||zt||Function("return this")(),Tt=jt.Symbol,It=Tt,Pt=Object.prototype,Rt=Pt.hasOwnProperty,Lt=Pt.toString,Wt=It?It.toStringTag:void 0;var Yt=function(e){var t=Rt.call(e,Wt),r=e[Wt];try{e[Wt]=void 0;var n=!0}catch(e){}var i=Lt.call(e);return n&&(t?e[Wt]=r:delete e[Wt]),i},Ht=Object.prototype.toString;var Nt=Yt,Vt=function(e){return Ht.call(e)},qt=Tt?Tt.toStringTag:void 0;var Qt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":qt&&qt in Object(e)?Nt(e):Vt(e)};var Ut=Qt,Zt=function(e){return null!=e&&"object"==typeof e};var Xt=function(e){return"symbol"==typeof e||Zt(e)&&"[object Symbol]"==Ut(e)},Gt=At,Jt=Xt,Kt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,er=/^\w*$/;var tr=function(e,t){if(Gt(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Jt(e))||(er.test(e)||!Kt.test(e)||null!=t&&e in Object(t))};var rr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},nr=Qt,ir=rr;var or,sr=function(e){if(!ir(e))return!1;var t=nr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ar=jt["__core-js_shared__"],lr=(or=/[^.]+$/.exec(ar&&ar.keys&&ar.keys.IE_PROTO||""))?"Symbol(src)_1."+or:"";var dr=function(e){return!!lr&&lr in e},cr=Function.prototype.toString;var ur=sr,hr=dr,gr=rr,mr=function(e){if(null!=e){try{return cr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},fr=/^\[object .+?Constructor\]$/,pr=Function.prototype,br=Object.prototype,yr=pr.toString,vr=br.hasOwnProperty,xr=RegExp("^"+yr.call(vr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var wr=function(e,t){return null==e?void 0:e[t]},$r=function(e){return!(!gr(e)||hr(e))&&(ur(e)?xr:fr).test(mr(e))},Fr=wr;var Cr=function(e,t){var r=Fr(e,t);return $r(r)?r:void 0},Er=Cr(Object,"create"),Dr=Er;var kr=function(){this.__data__=Dr?Dr(null):{},this.size=0};var _r=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Or=Er,Sr=Object.prototype.hasOwnProperty;var Mr=function(e){var t=this.__data__;if(Or){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Sr.call(t,e)?t[e]:void 0},Ar=Er,Br=Object.prototype.hasOwnProperty;var zr=function(e){var t=this.__data__;return Ar?void 0!==t[e]:Br.call(t,e)},jr=Er;var Tr=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=jr&&void 0===t?"__lodash_hash_undefined__":t,this},Ir=kr,Pr=_r,Rr=Mr,Lr=zr,Wr=Tr;function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Yr.prototype.clear=Ir,Yr.prototype.delete=Pr,Yr.prototype.get=Rr,Yr.prototype.has=Lr,Yr.prototype.set=Wr;var Hr=Yr;var Nr=function(){this.__data__=[],this.size=0};var Vr=function(e,t){return e===t||e!=e&&t!=t};var qr=function(e,t){for(var r=e.length;r--;)if(Vr(e[r][0],t))return r;return-1},Qr=qr,Ur=Array.prototype.splice;var Zr=function(e){var t=this.__data__,r=Qr(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ur.call(t,r,1),--this.size,!0)},Xr=qr;var Gr=function(e){var t=this.__data__,r=Xr(t,e);return r<0?void 0:t[r][1]},Jr=qr;var Kr=function(e){return Jr(this.__data__,e)>-1},en=qr;var tn=function(e,t){var r=this.__data__,n=en(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},rn=Nr,nn=Zr,on=Gr,sn=Kr,an=tn;function ln(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ln.prototype.clear=rn,ln.prototype.delete=nn,ln.prototype.get=on,ln.prototype.has=sn,ln.prototype.set=an;var dn=ln,cn=Cr(jt,"Map"),un=Hr,hn=dn,gn=cn;var mn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var fn=function(e,t){var r=e.__data__;return mn(t)?r["string"==typeof t?"string":"hash"]:r.map},pn=fn;var bn=function(e){var t=pn(this,e).delete(e);return this.size-=t?1:0,t},yn=fn;var vn=function(e){return yn(this,e).get(e)},xn=fn;var wn=function(e){return xn(this,e).has(e)},$n=fn;var Fn=function(e,t){var r=$n(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Cn=function(){this.size=0,this.__data__={hash:new un,map:new(gn||hn),string:new un}},En=bn,Dn=vn,kn=wn,_n=Fn;function On(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}On.prototype.clear=Cn,On.prototype.delete=En,On.prototype.get=Dn,On.prototype.has=kn,On.prototype.set=_n;var Sn=On;function Mn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(Mn.Cache||Sn),r}Mn.Cache=Sn;var An=Mn;var Bn=function(e){var t=An(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},zn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jn=/\\(\\)?/g,Tn=Bn((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(zn,(function(e,r,n,i){t.push(n?i.replace(jn,"$1"):r||e)})),t}));var In=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Pn=At,Rn=Xt,Ln=Tt?Tt.prototype:void 0,Wn=Ln?Ln.toString:void 0;var Yn=function e(t){if("string"==typeof t)return t;if(Pn(t))return In(t,e)+"";if(Rn(t))return Wn?Wn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Hn=Yn;var Nn=At,Vn=tr,qn=Tn,Qn=function(e){return null==e?"":Hn(e)};var Un=Xt;var Zn=function(e,t){return Nn(e)?e:Vn(e,t)?[e]:qn(Qn(e))},Xn=function(e){if("string"==typeof e||Un(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Gn=function(e,t){for(var r=0,n=(t=Zn(t,e)).length;null!=e&&r<n;)e=e[Xn(t[r++])];return r&&r==n?e:void 0};var Jn=ce((function(e,t,r){var n=null==e?void 0:Gn(e,t);return void 0===n?r:n}));const Kn=(e,t,r)=>Jn(r,t)||Jn(e,t),ei=(e,t)=>{const r=t||e.defaultValue;return Jn(e.collections,r)},ti={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ri=e=>t=>{var r;const n=t.theme,i=ei(ti,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Kn(i,e,n.overrides.border)}px`:`${i[e]}px`},ni={"width-005":ri("width-005"),"width-010":ri("width-010"),"width-020":ri("width-020"),"width-040":ri("width-040"),solid:(ii="solid",e=>{var t;const r=e.theme,n=ei(ti,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Kn(n,ii,r.overrides.border):n[ii];return"function"==typeof i?i(e):i})};var ii;const oi={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},si=e=>t=>{var r;const n=t.theme,i=ei(oi,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?Kn(i,e,n.overrides.primitiveColour):i[e]},ai={"brand-10":si("brand-10"),"brand-20":si("brand-20"),"brand-30":si("brand-30"),"brand-40":si("brand-40"),"brand-50":si("brand-50"),"brand-60":si("brand-60"),"brand-70":si("brand-70"),"brand-80":si("brand-80"),"brand-90":si("brand-90"),"brand-95":si("brand-95"),"brand-100":si("brand-100"),"primary-10":si("primary-10"),"primary-20":si("primary-20"),"primary-30":si("primary-30"),"primary-40":si("primary-40"),"primary-50":si("primary-50"),"primary-60":si("primary-60"),"primary-70":si("primary-70"),"primary-80":si("primary-80"),"primary-90":si("primary-90"),"primary-95":si("primary-95"),"primary-100":si("primary-100"),"secondary-10":si("secondary-10"),"secondary-20":si("secondary-20"),"secondary-30":si("secondary-30"),"secondary-40":si("secondary-40"),"secondary-50":si("secondary-50"),"secondary-60":si("secondary-60"),"secondary-70":si("secondary-70"),"secondary-80":si("secondary-80"),"secondary-90":si("secondary-90"),"secondary-95":si("secondary-95"),"secondary-100":si("secondary-100"),"neutral-10":si("neutral-10"),"neutral-20":si("neutral-20"),"neutral-30":si("neutral-30"),"neutral-40":si("neutral-40"),"neutral-50":si("neutral-50"),"neutral-60":si("neutral-60"),"neutral-70":si("neutral-70"),"neutral-80":si("neutral-80"),"neutral-90":si("neutral-90"),"neutral-95":si("neutral-95"),"neutral-100":si("neutral-100"),"success-10":si("success-10"),"success-20":si("success-20"),"success-30":si("success-30"),"success-40":si("success-40"),"success-50":si("success-50"),"success-60":si("success-60"),"success-70":si("success-70"),"success-80":si("success-80"),"success-90":si("success-90"),"success-95":si("success-95"),"success-100":si("success-100"),"warning-10":si("warning-10"),"warning-20":si("warning-20"),"warning-30":si("warning-30"),"warning-40":si("warning-40"),"warning-50":si("warning-50"),"warning-60":si("warning-60"),"warning-70":si("warning-70"),"warning-80":si("warning-80"),"warning-90":si("warning-90"),"warning-95":si("warning-95"),"warning-100":si("warning-100"),"error-10":si("error-10"),"error-20":si("error-20"),"error-30":si("error-30"),"error-40":si("error-40"),"error-50":si("error-50"),"error-60":si("error-60"),"error-70":si("error-70"),"error-80":si("error-80"),"error-90":si("error-90"),"error-95":si("error-95"),"error-100":si("error-100"),"info-10":si("info-10"),"info-20":si("info-20"),"info-30":si("info-30"),"info-40":si("info-40"),"info-50":si("info-50"),"info-60":si("info-60"),"info-70":si("info-70"),"info-80":si("info-80"),"info-90":si("info-90"),"info-95":si("info-95"),"info-100":si("info-100"),white:si("white"),black:si("black"),"primary-inverse":si("primary-inverse")},li={text:si("neutral-20"),"text-subtle":si("neutral-30"),"text-subtler":si("neutral-50"),"text-subtlest":si("neutral-60"),"text-primary":si("primary-50"),"text-hover":si("primary-40"),"text-selected":si("primary-50"),"text-selected-hover":si("primary-40"),"text-disabled":si("neutral-50"),"text-disabled-subtle":si("neutral-60"),"text-disabled-subtlest":si("neutral-80"),"text-selected-disabled":si("neutral-20"),"text-success":si("success-40"),"text-warning":si("warning-40"),"text-error":si("error-40"),"text-info":si("info-40"),"text-inverse":si("white"),icon:si("neutral-50"),"icon-subtle":si("neutral-60"),"icon-strongest":si("neutral-20"),"icon-primary":si("primary-50"),"icon-primary-subtle":si("primary-60"),"icon-primary-subtlest":si("primary-70"),"icon-hover":si("primary-40"),"icon-selected":si("primary-50"),"icon-selected-hover":si("primary-40"),"icon-disabled":si("neutral-50"),"icon-disabled-subtle":si("neutral-60"),"icon-selected-disabled":si("neutral-60"),"icon-success":si("success-50"),"icon-warning":si("warning-60"),"icon-error":si("error-50"),"icon-error-strong":si("error-40"),"icon-info":si("info-50"),"icon-inverse":si("white"),"icon-primary-inverse":si("primary-inverse"),border:si("neutral-90"),"border-strong":si("neutral-70"),"border-stronger":si("neutral-50"),"border-primary":si("primary-50"),"border-primary-subtle":si("primary-60"),"border-hover":si("primary-90"),"border-hover-strong":si("primary-60"),"border-selected":si("primary-50"),"border-selected-subtle":si("primary-70"),"border-selected-subtlest":si("primary-90"),"border-selected-hover":si("primary-40"),"border-focus":si("primary-60"),"border-focus-strong":si("primary-50"),"border-disabled":si("neutral-90"),"border-selected-disabled":si("neutral-70"),"border-success":si("success-60"),"border-warning":si("warning-60"),"border-error":si("error-60"),"border-error-focus":si("error-60"),"border-error-focus-strong":si("error-40"),"border-error-strong":si("error-40"),"border-info":si("info-60"),bg:si("white"),"bg-strong":si("neutral-100"),"bg-stronger":si("neutral-95"),"bg-strongest":si("neutral-90"),"bg-hover":si("primary-95"),"bg-hover-strong":si("primary-90"),"bg-hover-subtle":si("primary-100"),"bg-hover-neutral":si("neutral-100"),"bg-hover-neutral-strong":si("neutral-90"),"bg-selected":si("primary-95"),"bg-selected-hover":si("primary-90"),"bg-selected-strong":si("primary-90"),"bg-selected-stronger":si("primary-70"),"bg-selected-strongest":si("primary-50"),"bg-selected-strongest-hover":si("primary-40"),"bg-disabled":si("neutral-95"),"bg-selected-disabled":si("neutral-95"),"bg-selected-stronger-disabled":si("neutral-70"),"bg-success":si("success-100"),"bg-success-hover":si("success-95"),"bg-success-strong":si("success-50"),"bg-success-strong-hover":si("success-40"),"bg-warning":si("warning-100"),"bg-warning-hover":si("warning-95"),"bg-warning-strong":si("warning-50"),"bg-warning-strong-hover":si("warning-40"),"bg-info":si("info-100"),"bg-info-hover":si("info-95"),"bg-info-strong":si("info-50"),"bg-info-strong-hover":si("info-40"),"bg-error":si("error-100"),"bg-error-hover":si("error-95"),"bg-error-strong":si("error-50"),"bg-error-strong-hover":si("error-40"),"bg-inverse":si("neutral-20"),"bg-inverse-subtle":si("neutral-30"),"bg-inverse-subtler":si("neutral-50"),"bg-inverse-subtlest":si("neutral-60"),"bg-inverse-hover":si("neutral-40"),"bg-primary":si("primary-50"),"bg-primary-subtle":si("primary-60"),"bg-primary-subtler":si("primary-95"),"bg-primary-subtlest":si("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":si("primary-40"),"bg-primary-subtlest-hover":si("primary-90"),"bg-primary-subtlest-selected":si("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:si("primary-50"),"hyperlink-hover":si("primary-40"),"hyperlink-visited":si("primary-40"),"hyperlink-inverse":si("primary-inverse"),"focus-ring":si("black"),"focus-ring-inverse":si("white")},di={collections:{lifesg:li,bookingsg:li,rbs:li,mylegacy:li,ccube:li,oneservice:li,pa:{text:si("neutral-30"),"text-subtle":si("neutral-40"),"text-subtler":si("neutral-50"),"text-subtlest":si("neutral-70"),"text-primary":si("neutral-10"),"text-hover":si("neutral-70"),"text-selected":si("neutral-20"),"text-selected-hover":si("neutral-10"),"text-disabled":si("neutral-50"),"text-disabled-subtle":si("neutral-60"),"text-disabled-subtlest":si("neutral-80"),"text-selected-disabled":si("neutral-40"),"text-success":si("success-40"),"text-warning":si("warning-40"),"text-error":si("brand-30"),"text-info":si("neutral-40"),"text-inverse":si("neutral-100"),icon:si("neutral-40"),"icon-subtle":si("neutral-50"),"icon-strongest":si("neutral-10"),"icon-primary":si("neutral-10"),"icon-primary-subtle":si("neutral-30"),"icon-primary-subtlest":si("neutral-60"),"icon-hover":si("neutral-70"),"icon-selected":si("brand-20"),"icon-selected-hover":si("brand-10"),"icon-disabled":si("neutral-50"),"icon-disabled-subtle":si("neutral-60"),"icon-selected-disabled":si("neutral-40"),"icon-success":si("success-40"),"icon-warning":si("warning-60"),"icon-error":si("brand-30"),"icon-error-strong":si("brand-10"),"icon-info":si("neutral-40"),"icon-inverse":si("neutral-100"),"icon-primary-inverse":"#F9B371",border:si("neutral-90"),"border-strong":si("neutral-30"),"border-stronger":si("neutral-20"),"border-primary":si("neutral-40"),"border-primary-subtle":si("neutral-60"),"border-hover":si("neutral-80"),"border-hover-strong":si("neutral-10"),"border-selected":si("brand-20"),"border-selected-subtle":si("neutral-40"),"border-selected-subtlest":si("neutral-70"),"border-selected-hover":si("neutral-10"),"border-focus":si("neutral-20"),"border-focus-strong":si("neutral-10"),"border-disabled":si("neutral-90"),"border-selected-disabled":si("neutral-80"),"border-success":si("success-40"),"border-warning":si("warning-60"),"border-error":si("brand-30"),"border-error-focus":si("brand-20"),"border-error-focus-strong":si("brand-10"),"border-error-strong":si("brand-20"),"border-info":si("neutral-40"),bg:si("neutral-100"),"bg-strong":si("neutral-95"),"bg-stronger":si("neutral-90"),"bg-strongest":si("neutral-80"),"bg-hover":si("brand-90"),"bg-hover-strong":si("brand-80"),"bg-hover-subtle":si("neutral-90"),"bg-hover-neutral":si("neutral-90"),"bg-hover-neutral-strong":si("neutral-90"),"bg-selected":si("brand-100"),"bg-selected-hover":si("brand-30"),"bg-selected-strong":si("brand-50"),"bg-selected-stronger":si("brand-40"),"bg-selected-strongest":si("brand-20"),"bg-selected-strongest-hover":si("brand-10"),"bg-disabled":si("neutral-90"),"bg-selected-disabled":si("neutral-90"),"bg-selected-stronger-disabled":si("neutral-80"),"bg-success":si("success-100"),"bg-success-hover":si("success-95"),"bg-success-strong":si("success-50"),"bg-success-strong-hover":si("success-40"),"bg-warning":si("warning-100"),"bg-warning-hover":si("warning-95"),"bg-warning-strong":si("warning-50"),"bg-warning-strong-hover":si("warning-40"),"bg-info":si("neutral-95"),"bg-info-hover":si("info-95"),"bg-info-strong":si("info-50"),"bg-info-strong-hover":si("info-40"),"bg-error":si("brand-100"),"bg-error-hover":si("error-95"),"bg-error-strong":si("error-50"),"bg-error-strong-hover":si("error-40"),"bg-inverse":si("neutral-40"),"bg-inverse-subtle":si("neutral-60"),"bg-inverse-subtler":si("neutral-70"),"bg-inverse-subtlest":si("neutral-80"),"bg-inverse-hover":si("neutral-30"),"bg-primary":si("brand-20"),"bg-primary-subtle":si("brand-60"),"bg-primary-subtler":si("brand-80"),"bg-primary-subtlest":si("brand-100"),"bg-available":si("success-60"),"bg-primary-hover":si("brand-10"),"bg-primary-subtlest-hover":si("brand-80"),"bg-primary-subtlest-selected":si("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:si("neutral-10"),"hyperlink-hover":si("neutral-40"),"hyperlink-visited":si("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":si("black"),"focus-ring-inverse":si("white")}},defaultValue:"lifesg"},ci=e=>t=>{var r;const n=t.theme,i=ei(di,null==n?void 0:n.colourScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?Kn(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(t):o},ui={text:ci("text"),"text-subtle":ci("text-subtle"),"text-subtler":ci("text-subtler"),"text-subtlest":ci("text-subtlest"),"text-primary":ci("text-primary"),"text-hover":ci("text-hover"),"text-selected":ci("text-selected"),"text-selected-hover":ci("text-selected-hover"),"text-disabled":ci("text-disabled"),"text-disabled-subtle":ci("text-disabled-subtle"),"text-disabled-subtlest":ci("text-disabled-subtlest"),"text-selected-disabled":ci("text-selected-disabled"),"text-success":ci("text-success"),"text-warning":ci("text-warning"),"text-error":ci("text-error"),"text-info":ci("text-info"),"text-inverse":ci("text-inverse"),icon:ci("icon"),"icon-subtle":ci("icon-subtle"),"icon-strongest":ci("icon-strongest"),"icon-primary":ci("icon-primary"),"icon-primary-subtle":ci("icon-primary-subtle"),"icon-primary-subtlest":ci("icon-primary-subtlest"),"icon-hover":ci("icon-hover"),"icon-selected":ci("icon-selected"),"icon-selected-hover":ci("icon-selected-hover"),"icon-disabled":ci("icon-disabled"),"icon-disabled-subtle":ci("icon-disabled-subtle"),"icon-selected-disabled":ci("icon-selected-disabled"),"icon-success":ci("icon-success"),"icon-warning":ci("icon-warning"),"icon-error":ci("icon-error"),"icon-error-strong":ci("icon-error-strong"),"icon-info":ci("icon-info"),"icon-inverse":ci("icon-inverse"),"icon-primary-inverse":ci("icon-primary-inverse"),border:ci("border"),"border-strong":ci("border-strong"),"border-stronger":ci("border-stronger"),"border-primary":ci("border-primary"),"border-primary-subtle":ci("border-primary-subtle"),"border-hover":ci("border-hover"),"border-hover-strong":ci("border-hover-strong"),"border-selected":ci("border-selected"),"border-selected-subtle":ci("border-selected-subtle"),"border-selected-subtlest":ci("border-selected-subtlest"),"border-selected-hover":ci("border-selected-hover"),"border-focus":ci("border-focus"),"border-focus-strong":ci("border-focus-strong"),"border-disabled":ci("border-disabled"),"border-selected-disabled":ci("border-selected-disabled"),"border-success":ci("border-success"),"border-warning":ci("border-warning"),"border-error":ci("border-error"),"border-error-focus":ci("border-error-focus"),"border-error-focus-strong":ci("border-error-focus-strong"),"border-error-strong":ci("border-error-strong"),"border-info":ci("border-info"),bg:ci("bg"),"bg-strong":ci("bg-strong"),"bg-stronger":ci("bg-stronger"),"bg-strongest":ci("bg-strongest"),"bg-hover":ci("bg-hover"),"bg-hover-strong":ci("bg-hover-strong"),"bg-hover-subtle":ci("bg-hover-subtle"),"bg-hover-neutral":ci("bg-hover-neutral"),"bg-hover-neutral-strong":ci("bg-hover-neutral-strong"),"bg-selected":ci("bg-selected"),"bg-selected-hover":ci("bg-selected-hover"),"bg-selected-strong":ci("bg-selected-strong"),"bg-selected-stronger":ci("bg-selected-stronger"),"bg-selected-strongest":ci("bg-selected-strongest"),"bg-selected-strongest-hover":ci("bg-selected-strongest-hover"),"bg-disabled":ci("bg-disabled"),"bg-selected-disabled":ci("bg-selected-disabled"),"bg-selected-stronger-disabled":ci("bg-selected-stronger-disabled"),"bg-success":ci("bg-success"),"bg-success-hover":ci("bg-success-hover"),"bg-success-strong":ci("bg-success-strong"),"bg-success-strong-hover":ci("bg-success-strong-hover"),"bg-warning":ci("bg-warning"),"bg-warning-hover":ci("bg-warning-hover"),"bg-warning-strong":ci("bg-warning-strong"),"bg-warning-strong-hover":ci("bg-warning-strong-hover"),"bg-info":ci("bg-info"),"bg-info-hover":ci("bg-info-hover"),"bg-info-strong":ci("bg-info-strong"),"bg-info-strong-hover":ci("bg-info-strong-hover"),"bg-error":ci("bg-error"),"bg-error-hover":ci("bg-error-hover"),"bg-error-strong":ci("bg-error-strong"),"bg-error-strong-hover":ci("bg-error-strong-hover"),"bg-inverse":ci("bg-inverse"),"bg-inverse-subtle":ci("bg-inverse-subtle"),"bg-inverse-subtler":ci("bg-inverse-subtler"),"bg-inverse-subtlest":ci("bg-inverse-subtlest"),"bg-inverse-hover":ci("bg-inverse-hover"),"bg-primary":ci("bg-primary"),"bg-primary-subtle":ci("bg-primary-subtle"),"bg-primary-subtler":ci("bg-primary-subtler"),"bg-primary-subtlest":ci("bg-primary-subtlest"),"bg-available":ci("bg-available"),"bg-primary-hover":ci("bg-primary-hover"),"bg-primary-subtlest-hover":ci("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ci("bg-primary-subtlest-selected"),"overlay-strong":ci("overlay-strong"),"overlay-subtle":ci("overlay-subtle"),hyperlink:ci("hyperlink"),"hyperlink-hover":ci("hyperlink-hover"),"hyperlink-visited":ci("hyperlink-visited"),"hyperlink-inverse":ci("hyperlink-inverse"),"focus-ring":ci("focus-ring"),"focus-ring-inverse":ci("focus-ring-inverse")},hi={collections:{default:{solid:e=>t=>{var r,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:ni["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(t):a)&&void 0!==i?i:ui.border(t),u=ni.solid;return E`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:ni["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(t):a)&&void 0!==i?i:ui.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return E`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},gi=e=>1===e.length&&"theme"in e[0],mi=e=>(...t)=>r=>{const n=gi(t)?[]:t,i=gi(t)?t[0]:r,o=i.theme;return(0,ei(hi,null==o?void 0:o.borderScheme)[e])(...n)(i)},fi={solid:mi("solid"),"dashed-default":mi("dashed-default")},pi={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},bi=e=>t=>{var r;const n=t.theme,i=ei(pi,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Kn(i,e,n.overrides.breakpoint):i[e],o},yi={"xxs-min":bi("xxs-min"),"xxs-max":bi("xxs-max"),"xs-min":bi("xs-min"),"xs-max":bi("xs-max"),"sm-min":bi("sm-min"),"sm-max":bi("sm-max"),"md-min":bi("md-min"),"md-max":bi("md-max"),"lg-min":bi("lg-min"),"lg-max":bi("lg-max"),"xl-min":bi("xl-min"),"xl-max":bi("xl-max"),"xxl-min":bi("xxl-min"),"xxs-column":bi("xxs-column"),"xs-column":bi("xs-column"),"sm-column":bi("sm-column"),"md-column":bi("md-column"),"lg-column":bi("lg-column"),"xl-column":bi("xl-column"),"xxl-column":bi("xxl-column"),"xxs-gutter":bi("xxs-gutter"),"xs-gutter":bi("xs-gutter"),"sm-gutter":bi("sm-gutter"),"md-gutter":bi("md-gutter"),"lg-gutter":bi("lg-gutter"),"xl-gutter":bi("xl-gutter"),"xxl-gutter":bi("xxl-gutter"),"xxs-margin":bi("xxs-margin"),"xs-margin":bi("xs-margin"),"sm-margin":bi("sm-margin"),"md-margin":bi("md-margin"),"lg-margin":bi("lg-margin"),"xl-margin":bi("xl-margin"),"xxl-margin":bi("xxl-margin")},vi=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=yi["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),xi={MaxWidth:vi("max-width"),MinWidth:vi("min-width")},wi={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.012rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},$i=e=>t=>{var r;const n=t.theme,i=ei(wi,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Kn(i,e,n.overrides.fontSpec):i[e]},Fi={"heading-size-xxl":$i("heading-size-xxl"),"heading-size-xl":$i("heading-size-xl"),"heading-size-lg":$i("heading-size-lg"),"heading-size-md":$i("heading-size-md"),"heading-size-sm":$i("heading-size-sm"),"heading-size-xs":$i("heading-size-xs"),"heading-lh-xxl":$i("heading-lh-xxl"),"heading-lh-xl":$i("heading-lh-xl"),"heading-lh-lg":$i("heading-lh-lg"),"heading-lh-md":$i("heading-lh-md"),"heading-lh-sm":$i("heading-lh-sm"),"heading-lh-xs":$i("heading-lh-xs"),"heading-ls-xxl":$i("heading-ls-xxl"),"heading-ls-xl":$i("heading-ls-xl"),"heading-ls-lg":$i("heading-ls-lg"),"heading-ls-md":$i("heading-ls-md"),"heading-ls-sm":$i("heading-ls-sm"),"heading-ls-xs":$i("heading-ls-xs"),"weight-light":$i("weight-light"),"weight-regular":$i("weight-regular"),"weight-semibold":$i("weight-semibold"),"weight-bold":$i("weight-bold"),"font-family":$i("font-family"),"body-size-baseline":$i("body-size-baseline"),"body-size-md":$i("body-size-md"),"body-size-sm":$i("body-size-sm"),"body-size-xs":$i("body-size-xs"),"body-lh-baseline":$i("body-lh-baseline"),"body-lh-md":$i("body-lh-md"),"body-lh-sm":$i("body-lh-sm"),"body-lh-xs":$i("body-lh-xs"),"body-ls-baseline":$i("body-ls-baseline"),"body-ls-md":$i("body-ls-md"),"body-ls-sm":$i("body-ls-sm"),"body-ls-xs":$i("body-ls-xs"),"form-label-size":$i("form-label-size"),"form-description-size":$i("form-description-size"),"form-label-lh":$i("form-label-lh"),"form-description-lh":$i("form-description-lh"),"form-label-ls":$i("form-label-ls"),"form-description-ls":$i("form-description-ls")},Ci=(e,t,r,n,i)=>{const{disableLigatures:o}=i||{};return E`
        font-family: ${$i("font-family")};
        font-size: ${$i(e)};
        font-weight: ${$i(t)};
        line-height: ${$i(r)};
        letter-spacing: ${$i(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Ei=(e={})=>({"heading-xxl-light":Ci("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Ci("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Ci("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Ci("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Ci("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Ci("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Ci("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Ci("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Ci("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Ci("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Ci("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Ci("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Ci("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Ci("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Ci("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Ci("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Ci("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Ci("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Ci("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Ci("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Ci("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Ci("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Ci("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Ci("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Ci("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Ci("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Ci("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Ci("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Ci("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Ci("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Ci("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Ci("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Ci("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Ci("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Ci("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Ci("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Ci("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Ci("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Ci("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Ci("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Ci("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Ci("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Di=Ei({disableLigatures:!0}),ki={collections:{default:Ei(),bookingsg:Di,pa:Ei({disableLigatures:!0})},defaultValue:"default"},_i=e=>t=>{var r;const n=t.theme,i=ei(ki,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Kn(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},Oi={"heading-xxl-light":_i("heading-xxl-light"),"heading-xxl-regular":_i("heading-xxl-regular"),"heading-xxl-semibold":_i("heading-xxl-semibold"),"heading-xxl-bold":_i("heading-xxl-bold"),"heading-xl-light":_i("heading-xl-light"),"heading-xl-regular":_i("heading-xl-regular"),"heading-xl-semibold":_i("heading-xl-semibold"),"heading-xl-bold":_i("heading-xl-bold"),"heading-lg-light":_i("heading-lg-light"),"heading-lg-regular":_i("heading-lg-regular"),"heading-lg-semibold":_i("heading-lg-semibold"),"heading-lg-bold":_i("heading-lg-bold"),"heading-md-light":_i("heading-md-light"),"heading-md-regular":_i("heading-md-regular"),"heading-md-semibold":_i("heading-md-semibold"),"heading-md-bold":_i("heading-md-bold"),"heading-sm-light":_i("heading-sm-light"),"heading-sm-regular":_i("heading-sm-regular"),"heading-sm-semibold":_i("heading-sm-semibold"),"heading-sm-bold":_i("heading-sm-bold"),"heading-xs-light":_i("heading-xs-light"),"heading-xs-regular":_i("heading-xs-regular"),"heading-xs-semibold":_i("heading-xs-semibold"),"heading-xs-bold":_i("heading-xs-bold"),"body-baseline-light":_i("body-baseline-light"),"body-baseline-regular":_i("body-baseline-regular"),"body-baseline-semibold":_i("body-baseline-semibold"),"body-baseline-bold":_i("body-baseline-bold"),"body-md-light":_i("body-md-light"),"body-md-regular":_i("body-md-regular"),"body-md-semibold":_i("body-md-semibold"),"body-md-bold":_i("body-md-bold"),"body-sm-light":_i("body-sm-light"),"body-sm-regular":_i("body-sm-regular"),"body-sm-semibold":_i("body-sm-semibold"),"body-sm-bold":_i("body-sm-bold"),"body-xs-light":_i("body-xs-light"),"body-xs-regular":_i("body-xs-regular"),"body-xs-semibold":_i("body-xs-semibold"),"body-xs-bold":_i("body-xs-bold"),"form-label":_i("form-label"),"form-description":_i("form-description")},Si={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Mi=e=>t=>{var r;const n=t.theme,i=ei(Si,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Kn(i,e,n.overrides.motion):i[e]},Ai={"duration-150":Mi("duration-150"),"duration-250":Mi("duration-250"),"duration-350":Mi("duration-350"),"duration-500":Mi("duration-500"),"duration-800":Mi("duration-800"),"duration-1000":Mi("duration-1000"),"ease-default":Mi("ease-default"),"ease-standard":Mi("ease-standard"),"ease-entrance":Mi("ease-entrance"),"ease-exit":Mi("ease-exit")},Bi={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},zi=e=>t=>{var r;const n=t.theme,i=ei(Bi,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Kn(i,e,n.overrides.radius)}px`:`${i[e]}px`},ji={none:zi("none"),xs:zi("xs"),sm:zi("sm"),md:zi("md"),lg:zi("lg"),full:zi("full")},Ti={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ii=e=>t=>{var r;const n=t.theme,i=ei(Ti,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Kn(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Pi={"spacing-0":Ii("spacing-0"),"spacing-4":Ii("spacing-4"),"spacing-8":Ii("spacing-8"),"spacing-12":Ii("spacing-12"),"spacing-16":Ii("spacing-16"),"spacing-20":Ii("spacing-20"),"spacing-24":Ii("spacing-24"),"spacing-32":Ii("spacing-32"),"spacing-40":Ii("spacing-40"),"spacing-48":Ii("spacing-48"),"spacing-64":Ii("spacing-64"),"spacing-72":Ii("spacing-72"),"layout-xs":Ii("layout-xs"),"layout-sm":Ii("layout-sm"),"layout-md":Ii("layout-md"),"layout-lg":Ii("layout-lg"),"layout-xl":Ii("layout-xl"),"layout-xxl":Ii("layout-xxl"),"layout-xxxl":Ii("layout-xxxl")},Ri=Object.assign(Object.assign({},ui),{Primitive:ai}),Li=Object.assign(Object.assign({},Oi),{Spec:Fi}),Wi=Ai,Yi=Object.assign(Object.assign({},ni),{Util:fi}),Hi=Pi,Ni=ji,Vi=yi,qi=xi,Qi=C.div`
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
`,Ui=C.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Ri["overlay-subtle"]:Ri["overlay-strong"]};
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
`;var Zi;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Zi||(Zi={}));const Xi=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:o,backgroundBlur:s=!0,disableTransition:a=!1,enableOverlayClick:l=!1,zIndex:d,id:c})=>{const[m,f]=g(null),[p,b]=g(),[v]=g((()=>je.generate())),x=S(),w=h(),$=h(null),F=i&&u.cloneElement(i,{ref:$}),C=c?`lifesg-ds-overlay-root-${c}`:"lifesg-ds-overlay-root",E=null!=d?d:p?99999:99998;(e=>{const t=_();y((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Zi.Change,r)}),[t,e]),y((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Zi.Change,r)};return null==t||t.events.on(Zi.Ready,r),()=>null==t?void 0:t.events.off(Zi.Ready,r)}),[t,e])})(E),y((()=>(A(),f(k()),()=>{T(),z().length<1&&B("remove")})),[]),y((()=>{if(t){const e=O();D(e),j();const t=setTimeout((()=>{B("add")}),200);return()=>clearTimeout(t)}{T();const e=setTimeout((()=>{z().length<1&&B("remove")}),200);return()=>clearTimeout(e)}}),[t]);const D=e=>{w.current=e,b(e)},k=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>z().length>0,A=()=>{if(!document.getElementById(Ji)){const e=document.createElement("style");e.id=Ji;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Ki} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Ki}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},B=e=>{const t=document.body.classList.contains(Ki);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Ki):document.body.classList.add(Ki)},z=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},j=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},T=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},I=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&l&&(e.preventDefault(),n())};return m?N.createPortal(e(Qi,{id:C,"data-testid":C,$show:t,$zIndex:E,children:i&&e(M,{id:x,children:e(Ui,{"data-testid":"overlay-wrapper",$show:t,$stacked:p,$backgroundBlur:s,$disableTransition:a,onClick:I,children:F})})}),m):null},Gi=t=>e(O,{children:e(Xi,Object.assign({},t))}),Ji="lifesg-ds-overlay-stylesheet",Ki="lifesg-ds-overlay-open",eo=u.createContext({mode:"default",rootNode:{current:null}}),to=C.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ro=D`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,no=C.div`
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
    animation: ${ro} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,io=C(no)`
    animation-delay: -0.45s;
`,oo=C(no)`
    animation-delay: -0.3s;
`,so=C(no)`
    animation-delay: -0.15s;
`,ao=({color:r,className:n,size:i})=>t(to,{className:n,$size:i,$color:r,"data-testid":"component-loading-spinner",children:[e(no,{id:"inner1"}),e(io,{id:"inner2"}),e(oo,{id:"inner3"}),e(so,{id:"inner4"})]}),lo={collections:{default:{Button:{"button-radius":ji.sm,"button-default-colour-bg":ui["bg-primary"],"button-default-colour-bg-hover":ui["bg-primary-hover"],"button-default-colour-text":ui["text-inverse"],"button-secondary-colour-border":ui["border-primary"],"button-secondary-colour-text":ui["text-primary"],"button-light-colour-text":ui["text-primary"],"button-link-colour-text":ui["text-primary"]}},pa:{Button:{"button-radius":ji.full,"button-default-colour-bg":ui["bg-primary"],"button-default-colour-bg-hover":ui["bg-primary-hover"],"button-default-colour-text":ui["text-inverse"],"button-secondary-colour-border":ui["border-primary"],"button-secondary-colour-text":ui["text-primary"],"button-light-colour-text":ui["text-primary"],"button-link-colour-text":ui["text-primary"]}}},defaultValue:"default"},co=(e,t)=>r=>{var n,i;const o=r.theme,s=ei(lo,null==o?void 0:o.componentScheme);return uo((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[t])||s[e][t],r)},uo=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},ho=co("Button","button-radius"),go=co("Button","button-default-colour-bg"),mo=co("Button","button-default-colour-bg-hover"),fo=co("Button","button-default-colour-text"),po=co("Button","button-secondary-colour-border"),bo=co("Button","button-secondary-colour-text"),yo=co("Button","button-light-colour-text"),vo=co("Button","button-link-colour-text"),xo=C.button`
    padding: ${Hi["spacing-8"]} ${Hi["spacing-16"]};
    min-width: 4rem;
    border: ${Yi["width-010"]} ${Yi.solid} transparent;
    transition: all ${Wi["duration-250"]} ${Wi["ease-default"]};
    border-radius: ${ho};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return E`
                    background-color: ${Ri.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Ri["border-error-strong"]:po};

                    color: ${e.$buttonIsDanger?Ri["text-error"]:bo};

                    &:hover,
                    &:active {
                        background-color: ${Ri["bg-hover-neutral"]};
                    }
                `;case"light":return E`
                    background-color: ${Ri.bg};
                    border-color: ${Ri.border};

                    color: ${e.$buttonIsDanger?Ri["text-error"]:yo};

                    &:hover,
                    &:active {
                        background-color: ${Ri["bg-hover-neutral"]};
                    }
                `;case"link":return E`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ri["text-error"]:vo};
                    &:hover,
                    &:active {
                        background-color: ${Ri["bg-hover-neutral"]};
                    }
                `;case"disabled":return E`
                    background-color: ${Ri["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ri["text-disabled"]};
                `;default:return E`
                    background-color: ${e.$buttonIsDanger?Ri["bg-error-strong"]:go};};

                    ${qi.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${fo}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ri["bg-error-strong-hover"]:mo}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return E`
                    height: 2.5rem;
                    ${Li["body-md-semibold"]}

                    ${qi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return E`
                    height: 4rem;
                    ${Li["heading-md-semibold"]}

                    ${qi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return E`
                    height: 3rem;
                    ${Li["heading-xs-semibold"]}

                    ${qi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,wo=C(ao)`
    margin-right: 0.5rem;
`,$o=(r,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=le(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(xo,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(wo,{}),e("span",{children:i})]}))};$o.displayName="Button.Default";const Fo=(r,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=le(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(xo,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(wo,{}),e("span",{children:i})]}))};Fo.displayName="Button.Small";const Co=(r,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=le(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(xo,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(wo,{}),e("span",{children:i})]}))};Co.displayName="Button.Large";const Eo={Default:u.forwardRef($o),Small:u.forwardRef(Fo),Large:u.forwardRef(Co)},Do=D`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,ko=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>E`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,_o=E`
    animation: ${Wi["duration-150"]} ${Wi["ease-default"]} ${Do};
    width: 100%;
    height: 100%;
    transition: color ${Wi["duration-150"]} ${Wi["ease-default"]};
`,Oo=C(n)`
    ${_o}
    color: ${Ri["icon-primary-subtlest"]};
`,So=C(i)`
    ${_o}
    color: ${Ri["icon-disabled-subtle"]};
`,Mo=C(o)`
    ${_o}
    color: ${e=>e.$disabled?Ri["icon-disabled-subtle"](e):Ri["icon-selected"](e)};
`,Ao=C(s)`
    ${_o}
    color: ${e=>e.$disabled?Ri["icon-disabled-subtle"](e):Ri["icon-selected"](e)};
`,Bo=C.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Oo},
        &:hover
        + ${Mo},
        &:hover
        + ${Ao} {
        color: ${e=>!e.disabled&&Ri["icon-hover"](e)};
    }
`,zo=e=>{const{textSize:t}=e||{};return E`
        // Text styling
        ${t&&Li[`${t}-regular`]}

        strong {
            font-weight: ${Li.Spec["weight-semibold"]};
            ${t&&Li[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Li.Spec["weight-semibold"]};
            ${t&&Li[`${t}-semibold`]}
            color: ${Ri.hyperlink};
            text-decoration: none;

            svg {
                color: ${Ri["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Ri["hyperlink-hover"]};

                svg {
                    color: ${Ri["icon-hover"]};
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
    `},jo=(e,t,r=!1)=>E`
        ${Li[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,To=e=>{if(e)return E`
            ${t=e,E`
    display: -webkit-box;
    -webkit-line-clamp: ${t};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var t},Io=(e,t)=>E`
    ${jo(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?E`
            display: block;
            ${To(r)}
        `:e?E`
            display: inline;
        `:E`
            display: block;
            ${To(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${Ri.text};
`;var Po;!function(r){const n=(e,t,r)=>{const n=C(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Io(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,t)=>{const r=C.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Io(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const o=(r,n)=>{const i=C.a`
            ${e=>E`
                ${jo(r,e.weight||"regular")}
                color: ${Ri.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Ri["text-hover"]};
                }
            `}
        `,o=r=>{var{external:n=!1,children:o}=r,s=le(r,["external","children"]);return t(i,Object.assign({},s,{children:[o,n&&e(Ro,{})]}))};return o.displayName=`Typography.${n}`,o};r.LinkBL=o("body-baseline","LinkBL"),r.LinkMD=o("body-md","LinkMD"),r.LinkSM=o("body-sm","LinkSM"),r.LinkXS=o("body-xs","LinkXS")}(Po||(Po={}));const Ro=C(ee)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Lo=C.div`
    padding: ${Hi["spacing-8"]} ${Hi["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Ri["bg-error"](e),r=Ri["border-error"](e);break;case"success":t=Ri["bg-success"](e),r=Ri["border-success"](e);break;case"warning":default:t=Ri["bg-warning"](e),r=Ri["border-warning"](e);break;case"info":t=Ri["bg-info"](e),r=Ri["border-info"](e);break;case"description":t=Ri["bg-strong"](e),r=Ri["border-strong"](e)}return E`
            background: ${t};
            border-left: ${Yi["width-020"]} ${Yi.solid}
                ${r};
        `}}

    color: ${Ri.text};
    ${e=>"small"===e.$sizeType?zo({textSize:"body-sm"}):zo({textSize:"body-md"})}
`,Wo=C.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Hi["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Ri["icon-error"](e);break;case"success":t=Ri["icon-success"](e);break;case"warning":default:t=Ri["icon-warning"](e);break;case"info":t=Ri["icon-info"](e);break;case"description":t=Ri["icon-subtle"](e)}return E`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Yo=C(Po.LinkSM)`
    ${e=>"small"===e.$sizeType?E`
                ${Li["body-sm-semibold"]}
                margin-top: ${Hi["spacing-4"]};
            `:E`
                ${Li["body-md-semibold"]}
                margin-top: ${Hi["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Hi["spacing-4"]};
    }
`,Ho=C.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,No=C.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return E`
                margin-bottom: ${Hi["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Vo=C.button`
    ${e=>"small"===e.$sizeType?E`
                ${Li["body-sm-semibold"]}
            `:E`
                ${Li["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Hi["spacing-4"]};
    margin-top: ${Hi["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Ri["text-primary"]};
`,qo=C(a)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Wi["duration-350"]} ${Wi["ease-standard"]};
`,Qo=C.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?E`
                    color: ${Ri["icon-selected-disabled"]};
                `:E`
                    color: ${Ri["icon-disabled-subtle"]};
                `:e.$active?E`
                color: ${Ri["icon-selected"]};
            `:E`
            color: ${Ri["icon-subtle"]};
        `};
`,Uo=E`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Li.Spec["weight-regular"]};
        ${e=>e.$size&&Li[`${e.$size}-regular`]}
        color: ${Ri.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,Zo=C.ol`
    ${Uo}

    margin-left: 3rem;

    ${qi.MaxWidth.lg} {
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
`,Xo=C.ul`
    ${Uo}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Go=t=>{var{size:r,bulletType:n,bottomMargin:i,children:o}=t,s=le(t,["size","bulletType","bottomMargin","children"]);return e(Xo,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},s,{children:o}))};Go.displayName="TextList.Ul";const Jo=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:o,children:s}=t,a=le(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(Zo,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:o},a,{children:s}))};Jo.displayName="TextList.Ol";const Ko=Go,es=C.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Ri.bg};

    ${e=>{if(!e.$indicator)return E`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return E`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?E`
                            border-color: ${Ri["border-error"]};
                        `:E`
                            border-color: ${Ri["border-error"]};

                            &:has(${os}:hover) {
                                background: ${Ri["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?E`
                            border: none;
                            background: ${Ri["bg-selected-disabled"]};
                        `:E`
                            border: none;
                        `:e.$selected?E`
                        border: none;
                        background: ${Ri["bg-selected"]};

                        &:has(${os}:hover) {
                            background: ${Ri["bg-selected-hover"]};

                            & ${rs} {
                                color: ${Ri["text-selected-hover"]};
                            }

                            & ${ms} {
                                color: ${Ri["icon-selected-hover"]};
                            }
                        }
                    `:E`
                    border: none;

                    &:has(${os}:hover) {
                        background: ${Ri["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?E`
                            border-color: ${Ri["border-error"]};
                        `:E`
                            border-color: ${Ri["border-error"]};

                            &:has(${os}:hover) {
                                background: ${Ri["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?E`
                            border-color: ${Ri["border-selected-disabled"]};
                            background: ${Ri["bg-selected-disabled"]};
                        `:E`
                            border-color: ${Ri["border-disabled"]};
                            background: ${Ri["bg-disabled"]};
                        `:e.$selected?E`
                        border-color: ${Ri["border-selected"]};
                        background: ${Ri["bg-selected"]};

                        &:has(${os}:hover) {
                            background: ${Ri["bg-selected-hover"]};

                            & ${rs} {
                                color: ${Ri["text-selected-hover"]};
                            }

                            & ${ms} {
                                color: ${Ri["icon-selected-hover"]};
                            }
                        }
                    `:E`
                    border-color: ${Ri.border};

                    &:has(${os}:hover) {
                        background: ${Ri["bg-hover-subtle"]};
                    }
                `}
`,ts=C.input`
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
`,rs=C.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?E`
                    color: ${Ri["text-selected-disabled"]};
                `:E`
                    color: ${Ri["text-disabled"]};
                `:e.$selected?E`
                color: ${Ri["text-selected"]};
            `:E`
            color: ${Ri.text};
        `}
`,ns=C.label`
    ${Li["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${qi.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${qi.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,is=C.div`
    ${Li["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Li["body-md-semibold"]}
    }
`,os=C.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,ss=C.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,as=C.button`
    color: ${e=>e.$disabled?Ri["text-disabled"]:Ri["text-error"]};
    white-space: nowrap;
    ${Li["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,ls=C.button`
    color: ${e=>e.disabled?Ri["text-disabled"]:Ri["text-primary"]};
    ${Li["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Ri.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,ds=C.div`
    width: 100%;
    color: ${e=>e.$disabled?Ri["text-disabled"]:Ri["text-error"]};
    border: none;
    background: ${Ri.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,cs=C((r=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:a,sizeType:l="default",showIcon:d=!1,customIcon:c,maxCollapsedHeight:u}=r,h=le(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[m,f]=g(!1),[p,b]=g(!1),{height:v,ref:x}=Mt();y((()=>{w()}),[u,v]);const w=()=>{f(!u),b($())},$=()=>!(!v||!u)&&v>u;return t(Lo,{className:i,$type:n,$sizeType:l,"data-testid":h["data-testid"],children:[d&&e(Wo,{$sizeType:l,$type:n,children:(()=>{if(n&&c)return c;switch(n){case"success":return e(K,{});case"warning":return e(G,{});case"error":return e(X,{});case"info":case"description":return e(J,{});default:return null}})()}),t(Ho,{children:[t(No,{$maxCollapsedHeight:$()?u:void 0,$showMore:m,$hasActionLink:!!s,children:[e("div",{ref:x,children:o}),s?t(Yo,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},s,{children:[s.children,a||e(Z,{})]})):null]}),p&&t(Vo,{$sizeType:l,$type:n,type:"button",onClick:()=>f(!m),children:["Show ",m?"less":"more",e(qo,{$expanded:m})]})]})]})}))`
    width: 100%;
    user-select: none;
`,us=C.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Ri.bg};
    ${zo({textSize:"body-md"})}

    ${e=>e.$disabled?E`
                color: ${Ri["text-disabled"]};
            `:e.$selected?E`
                color: ${Ri["text-selected"]};
            `:E`
                color: ${Ri.text};
            `}
`,hs=C(Po.BodyMD)`
    color: ${e=>e.$disabled?Ri["text-disabled"]:Ri["text-error"]};
`,gs=C(Ko)`
    color: ${e=>e.$disabled?Ri["text-disabled"]:Ri["text-error"]};
`,ms=C((({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=e(r?oe:ie,{});break;case"radio":o=e(r?re:te,{});break;case"tick":o=e(se,{});break;case"cross":o=e(ne,{});break;default:o=null}return e(Qo,{className:i,$active:r,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?E`
                    color: ${Ri["icon-selected-disabled"]};
                `:E`
                    color: ${Ri["icon-disabled-subtle"]};
                `:e.$selected?E`
                color: ${Ri["icon-selected"]};
            `:E`
            color: ${Ri["icon-subtle"]};
        `};
`;var fs=ce((function(e){return null==e})),ps=Object.defineProperty,bs={};((e,t)=>{for(var r in t)ps(e,r,{get:t[r],enumerable:!0})})(bs,{assign:()=>Xs,colors:()=>Qs,createStringInterpolator:()=>Hs,skipAnimation:()=>Us,to:()=>Ns,willAdvance:()=>Zs});var ys=zs(),vs=e=>Ss(e,ys),xs=zs();vs.write=e=>Ss(e,xs);var ws=zs();vs.onStart=e=>Ss(e,ws);var $s=zs();vs.onFrame=e=>Ss(e,$s);var Fs=zs();vs.onFinish=e=>Ss(e,Fs);var Cs=[];vs.setTimeout=(e,t)=>{const r=vs.now()+t,n=()=>{const e=Cs.findIndex((e=>e.cancel==n));~e&&Cs.splice(e,1),_s-=~e?1:0},i={time:r,handler:e,cancel:n};return Cs.splice(Es(r),0,i),_s+=1,Ms(),i};var Es=e=>~(~Cs.findIndex((t=>t.time>e))||~Cs.length);vs.cancel=e=>{ws.delete(e),$s.delete(e),Fs.delete(e),ys.delete(e),xs.delete(e)},vs.sync=e=>{Os=!0,vs.batchedUpdates(e),Os=!1},vs.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,vs.onStart(r)}return n.handler=e,n.cancel=()=>{ws.delete(r),t=null},n};var Ds="undefined"!=typeof window?window.requestAnimationFrame:()=>{};vs.use=e=>Ds=e,vs.now="undefined"!=typeof performance?()=>performance.now():Date.now,vs.batchedUpdates=e=>e(),vs.catch=console.error,vs.frameLoop="always",vs.advance=()=>{"demand"!==vs.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Bs()};var ks=-1,_s=0,Os=!1;function Ss(e,t){Os?(t.delete(e),e(0)):(t.add(e),Ms())}function Ms(){ks<0&&(ks=0,"demand"!==vs.frameLoop&&Ds(As))}function As(){~ks&&(Ds(As),vs.batchedUpdates(Bs))}function Bs(){const e=ks;ks=vs.now();const t=Es(ks);t&&(js(Cs.splice(0,t),(e=>e.handler())),_s-=t),_s?(ws.flush(),ys.flush(e?Math.min(64,ks-e):16.667),$s.flush(),xs.flush(),Fs.flush()):ks=-1}function zs(){let e=new Set,t=e;return{add(r){_s+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(_s-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,_s-=t.size,js(t,(t=>t(r)&&e.add(t))),_s+=e.size,t=e)}}}function js(e,t){e.forEach((e=>{try{t(e)}catch(e){vs.catch(e)}}))}function Ts(){}var Is={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ps(e,t){if(Is.arr(e)){if(!Is.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Rs=(e,t)=>e.forEach(t);function Ls(e,t,r){if(Is.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Ws=e=>Is.und(e)?[]:Is.arr(e)?e:[e];function Ys(e,t){if(e.size){const r=Array.from(e);e.clear(),Rs(r,t)}}var Hs,Ns,Vs=(e,...t)=>Ys(e,(e=>e(...t))),qs=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Qs=null,Us=!1,Zs=Ts,Xs=e=>{e.to&&(Ns=e.to),e.now&&(vs.now=e.now),void 0!==e.colors&&(Qs=e.colors),null!=e.skipAnimation&&(Us=e.skipAnimation),e.createStringInterpolator&&(Hs=e.createStringInterpolator),e.requestAnimationFrame&&vs.use(e.requestAnimationFrame),e.batchedUpdates&&(vs.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Zs=e.willAdvance),e.frameLoop&&(vs.frameLoop=e.frameLoop)},Gs=new Set,Js=[],Ks=[],ea=0,ta={get idle(){return!Gs.size&&!Js.length},start(e){ea>e.priority?(Gs.add(e),vs.onStart(ra)):(na(e),vs(oa))},advance:oa,sort(e){if(ea)vs.onFrame((()=>ta.sort(e)));else{const t=Js.indexOf(e);~t&&(Js.splice(t,1),ia(e))}},clear(){Js=[],Gs.clear()}};function ra(){Gs.forEach(na),Gs.clear(),vs(oa)}function na(e){Js.includes(e)||ia(e)}function ia(e){Js.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Js,(t=>t.priority>e.priority)),0,e)}function oa(e){const t=Ks;for(let r=0;r<Js.length;r++){const n=Js[r];ea=n.priority,n.idle||(Zs(n),n.advance(e),n.idle||t.push(n))}return ea=0,(Ks=Js).length=0,(Js=t).length>0}var sa="[-+]?\\d*\\.?\\d+",aa=sa+"%";function la(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var da=new RegExp("rgb"+la(sa,sa,sa)),ca=new RegExp("rgba"+la(sa,sa,sa,sa)),ua=new RegExp("hsl"+la(sa,aa,aa)),ha=new RegExp("hsla"+la(sa,aa,aa,sa)),ga=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ma=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,fa=/^#([0-9a-fA-F]{6})$/,pa=/^#([0-9a-fA-F]{8})$/;function ba(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ya(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=ba(i,n,e+1/3),s=ba(i,n,e),a=ba(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function va(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function xa(e){return(parseFloat(e)%360+360)%360/360}function wa(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function $a(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Fa(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=fa.exec(e))?parseInt(t[1]+"ff",16)>>>0:Qs&&void 0!==Qs[e]?Qs[e]:(t=da.exec(e))?(va(t[1])<<24|va(t[2])<<16|va(t[3])<<8|255)>>>0:(t=ca.exec(e))?(va(t[1])<<24|va(t[2])<<16|va(t[3])<<8|wa(t[4]))>>>0:(t=ga.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=pa.exec(e))?parseInt(t[1],16)>>>0:(t=ma.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ua.exec(e))?(255|ya(xa(t[1]),$a(t[2]),$a(t[3])))>>>0:(t=ha.exec(e))?(ya(xa(t[1]),$a(t[2]),$a(t[3]))|wa(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Ca=(e,t,r)=>{if(Is.fun(e))return e;if(Is.arr(e))return Ca({range:e,output:t,extrapolate:r});if(Is.str(e.output[0]))return Hs(e);const n=e,i=n.output,o=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,s,a,l){let d=l?l(e):e;if(d<t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(d>r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[t],o[t+1],i[t],i[t+1],l,s,a,n.map)}};var Ea=1.70158,Da=1.525*Ea,ka=Ea+1,_a=2*Math.PI/3,Oa=2*Math.PI/4.5,Sa=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ma={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ka*e*e*e-Ea*e*e,easeOutBack:e=>1+ka*Math.pow(e-1,3)+Ea*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Da)/2:(Math.pow(2*e-2,2)*((Da+1)*(2*e-2)+Da)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*_a),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*_a)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Oa)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Oa)/2+1,easeInBounce:e=>1-Sa(1-e),easeOutBounce:Sa,easeInOutBounce:e=>e<.5?(1-Sa(1-2*e))/2:(1+Sa(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,s=1,a=i/e,Math.min(Math.max(a,o),s);var o,s,a}},Aa=Symbol.for("FluidValue.get"),Ba=Symbol.for("FluidValue.observers"),za=e=>Boolean(e&&e[Aa]),ja=e=>e&&e[Aa]?e[Aa]():e,Ta=e=>e[Ba]||null;function Ia(e,t){const r=e[Ba];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Pa=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Ra(this,e)}},Ra=(e,t)=>Ha(e,Aa,t);function La(e,t){if(e[Aa]){let r=e[Ba];r||Ha(e,Ba,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Wa(e,t){const r=e[Ba];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ba]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Ya,Ha=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Na=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Va=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,qa=new RegExp(`(${Na.source})(%|[a-z]+)`,"i"),Qa=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ua=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Za=e=>{const[t,r]=Xa(e);if(!t||qs())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Ua.test(r)?Za(r):r||e},Xa=e=>{const t=Ua.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Ga=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Ja=e=>{Ya||(Ya=Qs?new RegExp(`(${Object.keys(Qs).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>ja(e).replace(Ua,Za).replace(Va,Fa).replace(Ya,Fa))),r=t.map((e=>e.match(Na).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ca({...e,output:t})));return e=>{const r=!qa.test(t[0])&&t.find((e=>qa.test(e)))?.replace(Na,"");let i=0;return t[0].replace(Na,(()=>`${n[i++](e)}${r||""}`)).replace(Qa,Ga)}},Ka="react-spring: ",el=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Ka}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},tl=el(console.warn);var rl=el(console.warn);function nl(e){return Is.str(e)&&("#"==e[0]||/\d/.test(e)||!qs()&&Ua.test(e)||e in(Qs||{}))}var il=qs()?y:v;function ol(){const e=g()[1],t=(()=>{const e=h(!1);return il((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var sl=e=>y(e,al),al=[];function ll(e){const t=h();return y((()=>{t.current=e})),t.current}var dl=Symbol.for("Animated:node"),cl=e=>e&&e[dl],ul=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,dl,t),hl=e=>e&&e[dl]&&e[dl].getPayload(),gl=class{constructor(){ul(this,this)}getPayload(){return this.payload||[]}},ml=class extends gl{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Is.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ml(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Is.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Is.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},fl=class extends ml{constructor(e){super(0),this._string=null,this._toString=Ca({output:[e,e]})}static create(e){return new fl(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Is.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ca({output:[this.getValue(),e]})),this._value=0,super.reset()}},pl={dependencies:null},bl=class extends gl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ls(this.source,((r,n)=>{var i;(i=r)&&i[dl]===i?t[n]=r.getValue(e):za(r)?t[n]=ja(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Rs(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ls(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){pl.dependencies&&za(e)&&pl.dependencies.add(e);const t=hl(e);t&&Rs(t,(e=>this.add(e)))}},yl=class extends bl{constructor(e){super(e)}static create(e){return new yl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(vl)),!0)}};function vl(e){return(nl(e)?fl:ml).create(e)}function xl(e){const t=cl(e);return t?t.constructor:Is.arr(e)?yl:nl(e)?fl:ml}var wl=(e,t)=>{const r=!Is.fun(e)||e.prototype&&e.prototype.isReactComponent;return w(((n,i)=>{const o=h(null),s=r&&$((e=>{o.current=function(e,t){e&&(Is.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[a,l]=function(e,t){const r=new Set;pl.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new bl(e),pl.dependencies=null,[e,r]}(n,t),d=ol(),u=()=>{const e=o.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,a.getValue(!0)))&&d()},g=new $l(u,l),m=h();il((()=>(m.current=g,Rs(l,(e=>La(e,g))),()=>{m.current&&(Rs(m.current.deps,(e=>Wa(e,m.current))),vs.cancel(m.current.update))}))),y(u,[]),sl((()=>()=>{const e=m.current;Rs(e.deps,(t=>Wa(t,e)))}));const f=t.getComponentProps(a.getValue());return c.createElement(e,{...f,ref:s})}))},$l=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&vs.write(this.update)}};var Fl=Symbol.for("AnimatedComponent"),Cl=e=>Is.str(e)?e:e&&Is.str(e.displayName)?e.displayName:Is.fun(e)&&e.name||null;function El(e,...t){return Is.fun(e)?e(...t):e}var Dl=(e,t)=>!0===e||!!(t&&e&&(Is.fun(e)?e(t):Ws(e).includes(t))),kl=(e,t)=>Is.obj(e)?t&&e[t]:e,_l=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ol=e=>e,Sl=(e,t=Ol)=>{let r=Ml;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Is.und(r)||(n[i]=r)}return n},Ml=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Al={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Bl(e){const t=function(e){const t={};let r=0;if(Ls(e,((e,n)=>{Al[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Ls(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function zl(e){return e=ja(e),Is.arr(e)?e.map(zl):nl(e)?bs.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function jl(e){return Is.fun(e)||Is.arr(e)&&Is.obj(e[0])}var Tl={tension:170,friction:26,mass:1,damping:1,easing:Ma.linear,clamp:!1},Il=class{constructor(){this.velocity=0,Object.assign(this,Tl)}};function Pl(e,t){if(Is.und(t.decay)){const r=!Is.und(t.tension)||!Is.und(t.friction);!r&&Is.und(t.frequency)&&Is.und(t.damping)&&Is.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Rl=[],Ll=class{constructor(){this.changed=!1,this.values=Rl,this.toValues=null,this.fromValues=Rl,this.config=new Il,this.immediate=!1}};function Wl(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((s,a)=>{let l,d,c=Dl(r.cancel??n?.cancel,t);if(c)g();else{Is.und(r.pause)||(i.paused=Dl(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||Dl(e,t)),l=El(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-vs.now()}function h(){l>0&&!bs.skipAnimation?(i.delayed=!0,d=vs.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(d)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...r,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var Yl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Vl(e.get()):t.every((e=>e.noop))?Hl(e.get()):Nl(e.get(),t.every((e=>e.finished))),Hl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Nl=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Vl=e=>({value:e,cancelled:!0,finished:!1});function ql(e,t,r,n){const{callId:i,parentId:o,onRest:s}=t,{asyncTo:a,promise:l}=r;return o||e!==a||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const d=Sl(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),g=e=>{const t=i<=(r.cancelId||0)&&Vl(n)||i!==r.asyncId&&Nl(n,!1);if(t)throw e.result=t,u(e),e},m=(e,t)=>{const o=new Ul,s=new Zl;return(async()=>{if(bs.skipAnimation)throw Ql(r),s.result=Nl(n,!1),u(s),s;g(o);const a=Is.obj(e)?{...e}:{...t,to:e};a.parentId=i,Ls(d,((e,t)=>{Is.und(a[t])&&(a[t]=e)}));const l=await n.start(a);return g(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let f;if(bs.skipAnimation)return Ql(r),Nl(n,!1);try{let t;t=Is.arr(e)?(async e=>{for(const t of e)await m(t)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([t.then(c),h]),f=Nl(n.get(),!0,!1)}catch(e){if(e instanceof Ul)f=e.result;else{if(!(e instanceof Zl))throw e;f=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?a:void 0,r.promise=o?l:void 0)}return Is.fun(s)&&vs.batchedUpdates((()=>{s(f,n,n.item)})),f})():l}function Ql(e,t){Ys(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Ul=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Zl=class extends Error{constructor(){super("SkipAnimationSignal")}},Xl=e=>e instanceof Jl,Gl=1,Jl=class extends Pa{constructor(){super(...arguments),this.id=Gl++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=cl(this);return e&&e.getValue()}to(...e){return bs.to(this,e)}interpolate(...e){return tl(`${Ka}The "interpolate" function is deprecated in v9 (use "to" instead)`),bs.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ia(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ta.sort(this),Ia(this,{type:"priority",parent:this,priority:e})}},Kl=Symbol.for("SpringPhase"),ed=e=>(1&e[Kl])>0,td=e=>(2&e[Kl])>0,rd=e=>(4&e[Kl])>0,nd=(e,t)=>t?e[Kl]|=3:e[Kl]&=-3,id=(e,t)=>t?e[Kl]|=4:e[Kl]&=-5,od=class extends Jl{constructor(e,t){if(super(),this.animation=new Ll,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Is.und(e)||!Is.und(t)){const r=Is.obj(e)?{...e}:{...t,from:e};Is.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(td(this)||this._state.asyncTo)||rd(this)}get goal(){return ja(this.animation.to)}get velocity(){const e=cl(this);return e instanceof ml?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return ed(this)}get isAnimating(){return td(this)}get isPaused(){return rd(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,s=hl(n.to);!s&&za(n.to)&&(i=Ws(ja(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==fl?1:s?s[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,o.tension<=0)return void(a.done=!0);let t=a.elapsedTime+=e;const r=n.fromValues[l],i=null!=a.v0?a.v0:a.v0=Is.arr(o.velocity)?o.velocity[l]:o.velocity;let s;const h=o.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(Is.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=i*n}else{s=null==a.lastVelocity?i:a.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Is.und(n),g=r==d?a.v0>0:r<d;let m,f=!1;const p=1,b=Math.ceil(e/p);for(let e=0;e<b&&(m=Math.abs(s)>t,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(f=u==d||u>d==g,f&&(s=-s*n,u=d));s+=(1e-6*-o.tension*(u-d)+.001*-o.friction*s)/o.mass*p,u+=s*p}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,a.durationProgress>0&&(a.elapsedTime=o.duration*a.durationProgress,t=a.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=r+o.easing(n)*(d-r),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:t=!1,a.setValue(u,o.round)&&(r=!0)}));const a=cl(this),l=a.getValue();if(t){const e=ja(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return vs.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(td(this)){const{to:e,config:t}=this.animation;vs.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Is.und(e)?(r=this.queue||[],this.queue=[]):r=[Is.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Yl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ql(this._state,e&&this._lastCallId),vs.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Is.obj(r)?r[t]:r,(null==r||jl(r))&&(r=void 0),n=Is.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return ed(this)||(e.reverse&&([r,n]=[n,r]),n=ja(n),Is.und(n)?cl(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Sl(e,((e,t)=>/^on/.test(t)?kl(e,r):e))),hd(this,e,"onProps"),gd(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Wl(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{rd(this)||(id(this,!0),Vs(o.pauseQueue),gd(this,"onPause",Nl(this,sd(this,this.animation.to)),this))},resume:()=>{rd(this)&&(id(this,!1),td(this)&&this._resume(),Vs(o.resumeQueue),gd(this,"onResume",Nl(this,sd(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=ad(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Vl(this));const n=!Is.und(e.to),i=!Is.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Vl(this));this._lastToId=t.callId}const{key:o,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!i||n||t.default&&!Is.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!Ps(u,d);h&&(a.from=u),u=ja(u);const g=!Ps(c,l);g&&this._focus(c);const m=jl(t.to),{config:f}=a,{decay:p,velocity:b}=f;(n||i)&&(f.velocity=0),t.config&&!m&&function(e,t,r){r&&(Pl(r={...r},t),t={...r,...t}),Pl(e,t),Object.assign(e,t);for(const t in Tl)null==e[t]&&(e[t]=Tl[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;Is.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(f,El(t.config,o),t.config!==s.config?El(s.config,o):void 0);let y=cl(this);if(!y||Is.und(c))return r(Nl(this,!0));const v=Is.und(t.reset)?i&&!t.default:!Is.und(u)&&Dl(t.reset,o),x=v?u:this.get(),w=zl(c),$=Is.num(w)||Is.arr(w)||nl(w),F=!m&&(!$||Dl(s.immediate||t.immediate,o));if(g){const e=xl(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=za(c),D=!1;if(!E){const e=v||!ed(this)&&h;(g||e)&&(D=Ps(zl(x),w),E=!D),(Ps(a.immediate,F)||F)&&Ps(f.decay,p)&&Ps(f.velocity,b)||(E=!0)}if(D&&td(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!m&&((E||za(l))&&(a.values=y.getPayload(),a.toValues=za(c)?null:C==fl?[1]:Ws(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=a;Rs(ud,(e=>hd(this,t,e)));const n=Nl(this,sd(this,l));Vs(this._pendingCalls,n),this._pendingCalls.add(r),a.changed&&vs.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?El(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),m?r(ql(t.to,t,this._state,this)):E?this._start():td(this)&&!g?this._pendingCalls.add(r):r(Hl(x))}_focus(e){const t=this.animation;e!==t.to&&(Ta(this)&&this._detach(),t.to=e,Ta(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;za(t)&&(La(t,this),Xl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;za(e)&&Wa(e,this)}_set(e,t=!0){const r=ja(e);if(!Is.und(r)){const e=cl(this);if(!e||!Ps(r,e.getValue())){const n=xl(r);e&&e.constructor==n?e.setValue(r):ul(this,n.create(r)),e&&vs.batchedUpdates((()=>{this._onChange(r,t)}))}}return cl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,gd(this,"onStart",Nl(this,sd(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),El(this.animation.onChange,e,this)),El(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;cl(this).reset(ja(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),td(this)||(nd(this,!0),rd(this)||this._resume())}_resume(){bs.skipAnimation?this.finish():ta.start(this)}_stop(e,t){if(td(this)){nd(this,!1);const r=this.animation;Rs(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Ia(this,{type:"idle",parent:this});const n=t?Vl(this.get()):Nl(this.get(),sd(this,e??r.to));Vs(this._pendingCalls,n),r.changed&&(r.changed=!1,gd(this,"onRest",n,this))}}};function sd(e,t){const r=zl(t);return Ps(zl(e.get()),r)}function ad(e,t=e.loop,r=e.to){const n=El(t);if(n){const i=!0!==n&&Bl(n),o=(i||e).reverse,s=!i||i.reset;return ld({...e,loop:t,default:!1,pause:void 0,to:!o||jl(r)?r:void 0,from:s?e.from:void 0,reset:s,...i})}}function ld(e){const{to:t,from:r}=e=Bl(e),n=new Set;return Is.obj(t)&&cd(t,n),Is.obj(r)&&cd(r,n),e.keys=n.size?Array.from(n):null,e}function dd(e){const t=ld(e);return Is.und(t.default)&&(t.default=Sl(t)),t}function cd(e,t){Ls(e,((e,r)=>null!=e&&t.add(r)))}var ud=["onStart","onRest","onChange","onPause","onResume"];function hd(e,t,r){e.animation[r]=t[r]!==_l(t,r)?kl(t[r],e.key):void 0}function gd(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var md=["onStart","onChange","onRest"],fd=1,pd=class{constructor(e,t){this.id=fd++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Is.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(ld(e)),this}start(e){let{queue:t}=this;return e?t=Ws(e).map(ld):this.queue=[],this._flush?this._flush(this,t):(Fd(this,t),bd(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Rs(Ws(t),(t=>r[t].stop(!!e)))}else Ql(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Is.und(e))this.start({pause:!0});else{const t=this.springs;Rs(Ws(e),(e=>t[e].pause()))}return this}resume(e){if(Is.und(e))this.start({pause:!1});else{const t=this.springs;Rs(Ws(e),(e=>t[e].resume()))}return this}each(e){Ls(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Ys(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,s=i||o&&r.size?this.get():null;i&&t.size&&Ys(t,(([e,t])=>{t.value=s,e(t,this,this._item)})),o&&(this._started=!1,Ys(r,(([e,t])=>{t.value=s,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}vs.onFrame(this._onFrame)}};function bd(e,t){return Promise.all(t.map((t=>yd(e,t)))).then((t=>Yl(e,t)))}async function yd(e,t,r){const{keys:n,to:i,from:o,loop:s,onRest:a,onResolve:l}=t,d=Is.obj(t.default)&&t.default;s&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=Is.arr(i)||Is.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):Rs(md,(r=>{const n=t[r];if(Is.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Vs(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===_l(t,"cancel");(c||g&&u.asyncId)&&h.push(Wl(++e._lastAsyncId,{props:t,state:u,actions:{pause:Ts,resume:Ts,start(t,r){g?(Ql(u,e._lastAsyncId),r(Vl(e))):(t.onRest=a,r(ql(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=Yl(e,await Promise.all(h));if(s&&m.finished&&(!r||!m.noop)){const r=ad(t,s,i);if(r)return Fd(e,[r]),yd(e,r,!0)}return l&&vs.batchedUpdates((()=>l(m,e,e.item))),m}function vd(e,t){const r={...e.springs};return t&&Rs(Ws(t),(e=>{Is.und(e.keys)&&(e=ld(e)),Is.obj(e.to)||(e={...e,to:void 0}),$d(r,e,(e=>wd(e)))})),xd(e,r),r}function xd(e,t){Ls(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,La(t,e))}))}function wd(e,t){const r=new od;return r.key=e,t&&La(r,t),r}function $d(e,t,r){t.keys&&Rs(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Fd(e,t){Rs(t,(t=>{$d(e.springs,t,(t=>wd(t,e)))}))}var Cd,Ed,Dd=({children:e,...t})=>{const r=F(kd),n=t.pause||!!r.pause,i=t.immediate||!!r.immediate;t=function(e,t){const[r]=g((()=>({inputs:t,result:e()}))),n=h(),i=n.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=r;return y((()=>{n.current=o,i==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:n,immediate:i})),[n,i]);const{Provider:o}=kd;return c.createElement(o,{value:t},e)},kd=(Cd=Dd,Ed={},Object.assign(Cd,c.createContext(Ed)),Cd.Provider._context=Cd,Cd.Consumer._context=Cd,Cd);Dd.Provider=kd.Provider,Dd.Consumer=kd.Consumer;var _d=()=>{const e=[],t=function(t){rl(`${Ka}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Rs(e,((e,i)=>{if(Is.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Rs(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Rs(e,(e=>e.resume(...arguments))),this},t.set=function(t){Rs(e,((e,r)=>{const n=Is.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Rs(e,((e,n)=>{if(Is.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Rs(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Rs(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Is.fun(e)?e(r,t):e};return t._getProps=r,t};function Od(e,t){const r=Is.fun(e),[[n],i]=function(e,t,r){const n=Is.fun(t)&&t;n&&!r&&(r=[]);const i=x((()=>n||3==arguments.length?_d():void 0),[]),o=h(0),s=ol(),a=x((()=>({ctrls:[],queue:[],flush(e,t){const r=vd(e,t),n=o.current>0&&!a.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?bd(e,t):new Promise((n=>{xd(e,r),a.queue.push((()=>{n(bd(e,t))})),s()}))}})),[]),l=h([...a.ctrls]),d=[],c=ll(e)||0;function u(e,r){for(let i=e;i<r;i++){const e=l.current[i]||(l.current[i]=new pd(null,a.flush)),r=n?n(i,e):t[i];r&&(d[i]=dd(r))}}x((()=>{Rs(l.current.slice(e,c),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,u(c,e)}),[e]),x((()=>{u(0,Math.min(c,e))}),r);const g=l.current.map(((e,t)=>vd(e,d[t]))),m=F(Dd),f=ll(m),p=m!==f&&function(e){for(const t in e)return!0;return!1}(m);il((()=>{o.current++,a.ctrls=l.current;const{queue:e}=a;e.length&&(a.queue=[],Rs(e,(e=>e()))),Rs(l.current,((e,t)=>{i?.add(e),p&&e.start({default:m});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),sl((()=>()=>{Rs(a.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>({...e})));return i?[b,i]:b}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var Sd=class extends Jl{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ca(...t);const r=this._get(),n=xl(r);ul(this,n.create(r))}advance(e){const t=this._get();Ps(t,this.get())||(cl(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ad(this._active)&&Bd(this)}_get(){const e=Is.arr(this.source)?this.source.map(ja):Ws(ja(this.source));return this.calc(...e)}_start(){this.idle&&!Ad(this._active)&&(this.idle=!1,Rs(hl(this),(e=>{e.done=!1})),bs.skipAnimation?(vs.batchedUpdates((()=>this.advance())),Bd(this)):ta.start(this))}_attach(){let e=1;Rs(Ws(this.source),(t=>{za(t)&&La(t,this),Xl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Rs(Ws(this.source),(e=>{za(e)&&Wa(e,this)})),this._active.clear(),Bd(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ws(this.source).reduce(((e,t)=>Math.max(e,(Xl(t)?t.priority:0)+1)),0))}};function Md(e){return!1!==e.idle}function Ad(e){return!e.size||Array.from(e).every(Md)}function Bd(e){e.idle||(e.idle=!0,Rs(hl(e),(e=>{e.done=!0})),Ia(e,{type:"idle",parent:e}))}bs.assign({createStringInterpolator:Ja,to:(e,t)=>new Sd(e,t)});var zd=/^--/;function jd(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||zd.test(e)||Id.hasOwnProperty(e)&&Id[e]?(""+t).trim():t+"px"}var Td={};var Id={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pd=["Webkit","Ms","Moz","O"];Id=Object.keys(Id).reduce(((e,t)=>(Pd.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Id);var Rd=/^(matrix|translate|scale|rotate|skew)/,Ld=/^(translate)/,Wd=/^(rotate|skew)/,Yd=(e,t)=>Is.num(e)&&0!==e?e+t:e,Hd=(e,t)=>Is.arr(e)?e.every((e=>Hd(e,t))):Is.num(e)?e===t:parseFloat(e)===t,Nd=class extends bl{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>Yd(e,"px"))).join(",")})`,Hd(e,0)]))),Ls(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Rd.test(t)){if(delete n[t],Is.und(e))return;const r=Ld.test(t)?"px":Wd.test(t)?"deg":"";i.push(Ws(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Yd(i,r)})`,Hd(i,0)]:e=>[`${t}(${e.map((e=>Yd(e,r))).join(",")})`,Hd(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Vd(i,o)),super(n)}},Vd=class extends Pa{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Rs(this.inputs,((r,n)=>{const i=ja(r[0]),[o,s]=this.transforms[n](Is.arr(i)?i:r.map(ja));e+=" "+o,t=t&&s})),t?"none":e}observerAdded(e){1==e&&Rs(this.inputs,(e=>Rs(e,(e=>za(e)&&La(e,this)))))}observerRemoved(e){0==e&&Rs(this.inputs,(e=>Rs(e,(e=>za(e)&&Wa(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ia(this,e)}};bs.assign({batchedUpdates:q,createStringInterpolator:Ja,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var qd=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new bl(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=Cl(e)||"Anonymous";return(e=Is.str(e)?o[e]||(o[e]=wl(e,i)):e[Fl]||(e[Fl]=wl(e,i))).displayName=`Animated(${t})`,e};return Ls(e,((t,r)=>{Is.arr(e)&&(r=Cl(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:s,viewBox:a,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Td[t]||(Td[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=jd(t,n[t]);zd.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new Nd(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Qd=qd.animated;const Ud=C.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${qi.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Zd=t=>{var{id:r="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:a,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=t,u=le(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,m]=g(),[f,p]=g();y((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),y((()=>{var e,t;n&&c&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const b=()=>{const e=.01*window.innerHeight;m(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;m(e),p(window.visualViewport.offsetTop)}};return e(Gi,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:a,zIndex:l,children:e(Ud,Object.assign({show:n,animationFrom:i,"data-testid":r,verticalHeight:h,offsetTop:f},u,{children:o}))})},Xd=C.div`
    border-radius: ${Ni.md};
    background: ${Ri.bg};
    padding: ${Hi["spacing-16"]} ${Hi["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Gd=C.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Hi["spacing-24"]};
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
                background-color: ${Ri["bg-hover-neutral"]};
            `}
    }
`,Jd=u.forwardRef(((t,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=t,a=le(t,["children","focusHighlight","focusOutline","type"]);return e(Gd,Object.assign({ref:r,$outline:o,$highlight:i,type:s},a,{children:n}))})),Kd=C.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ri.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${qi.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,ec=C(Jd)`
    position: absolute;
    top: var(--close-button-top-inset, ${Hi["spacing-16"]});
    right: var(--close-button-right-inset, ${Hi["spacing-16"]});
    padding: 0;
    color: ${Ri.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${qi.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Hi["spacing-20"]});
    }
`,tc=C.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,rc=C((t=>{var{children:r}=t,n=le(t,["children"]);const i=n["data-testid"]||"card";return e(Xd,Object.assign({},n,{"data-testid":i,children:"string"==typeof r?e(Po.BodyBL,{children:r}):r}))}))`
    color: ${Ri.text};
    ${zo({textSize:"body-md"})}

    ${qi.MaxWidth.sm} {
        display: none;
    }
`,nc=C((r=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:s=!0}=r,a=le(r,["id","children","onClose","showCloseButton"]);return t(Kd,Object.assign({"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[s&&e(ec,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(ne,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,ic=C.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ri.text};
    ${zo({textSize:"body-md"})}
`,oc=n=>{var{children:i,visible:o,onMobileClose:s}=n,a=le(n,["children","visible","onMobileClose"]);const l=a["data-testid"]||"popover",d=k(),c=Vi["sm-max"]({theme:d}),u=ge.useMediaQuery({maxWidth:c}),h=()=>{s&&s()},g=()=>"string"==typeof i?e(Po.BodyMD,{children:i}):i;return t(r,{children:[o&&e(tc,Object.assign({"data-testid":l},a,{children:e(rc,{children:g()})})),u&&e(Zd,{show:null!=o&&o,onOverlayClick:h,children:e(nc,{onClose:h,children:e(ic,{children:g()})})})]})},sc=C.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,ac=n=>{var i,o,{children:s,popoverContent:a,trigger:l="click",position:d="top",zIndex:c,rootNode:u,customOffset:m,delay:f,onPopoverAppear:p,onPopoverDismiss:b}=n,v=le(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[x,w]=g(!1),$=h(null),F=h(null),C=k(),E=Vi["sm-max"]({theme:C}),D=ge.useMediaQuery({maxWidth:E}),{refs:O,floatingStyles:S,context:M}=A({open:x,placement:d,whileElementsMounted:B,middleware:[z(null!=m?m:16),j(),T({limiter:I()})],onOpenChange:e=>{w(e),x!==e&&J(e)}}),N=(()=>{const[e,t]=g(void 0),r=_();return y((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Zi.Change,e),r.events.emit(Zi.Ready),()=>r.events.off(Zi.Change,e)}),[r]),e})(),V=D?"click":l,q=P(M,{ignoreMouse:"hover"===V}),Q=R(M),U=L(M,{enabled:"hover"===V,delay:{open:null!==(i=null==f?void 0:f.open)&&void 0!==i?i:0,close:null!==(o=null==f?void 0:f.close)&&void 0!==o?o:500}}),{getReferenceProps:Z,getFloatingProps:X}=W([q,Q,U]),G=()=>{w(!1),J(!1)},J=e=>{e&&p&&p(),!e&&b&&b()};return t(r,{children:[e(sc,Object.assign({ref:e=>{$.current=e,O.setReference(e)}},Z({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:s})),x&&e(Y,{root:u,children:e(H,{context:M,children:e("div",Object.assign({ref:e=>{F.current=e,O.setFloating(e)},style:Object.assign(Object.assign({},S),{outline:"none",zIndex:null!=c?c:N})},X(),{children:"function"==typeof a?a():e(oc,{visible:!0,onMobileClose:G,children:a})}))})})]})},lc=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},dc=C.span`
    color: ${Ri["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>lc(e)}

    &:hover,
    &:focus-visible {
        color: ${Ri["text-hover"]};
        ${({$hoverStyle:e})=>lc(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,cc=C.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,uc=r=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:s="default",underlineHoverStyle:a="default"}=r,l=le(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return e(ac,Object.assign({},l,{children:t(dc,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:s,$hoverStyle:a,"aria-label":null!=n?n:d?void 0:"More info",children:[i,o&&e(cc,{$standalone:!d,children:o})]})}))},hc=C.div`
    padding-left: ${Hi["spacing-4"]};
    display: inline;
`,gc=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:o,id:s,zIndex:a,"data-testid":l}=t;return e(hc,{children:e(uc,{trigger:"click",id:s,"data-testid":l,popoverContent:n,rootNode:r,zIndex:a,icon:null!=o?o:e(J,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},mc=C.div`
    background-color: ${e=>e.$collapsible?Ri["bg-strong"]:Ri.bg};
    ${qi.MaxWidth.lg} {
        background-color: ${Ri["bg-strong"]};
    }
`,fc=C.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Ri.border};

    ${qi.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${Hi["spacing-16"]};
    }
`,pc=C.div`
    display: flex;
    align-items: center;

    background-color: ${Ri.bg};

    ${qi.MaxWidth.lg} {
        background-color: transparent;
    }
`,bc=C(Jd)`
    margin: 0 0 0 auto;

    color: ${Ri.icon};
    &:hover {
        color: ${Ri["icon-hover"]};
    }
`,yc=C(Q)`
    height: ${Li.Spec["body-size-baseline"]};
    width: ${Li.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Wi["duration-350"]} ${Wi["ease-standard"]};
`,vc=C.p`
    ${Li["heading-xs-semibold"]}
    color: ${Ri.text};

    margin: ${Hi["spacing-24"]} 0 ${Hi["spacing-24"]}
        ${Hi["spacing-20"]};

    ${qi.MaxWidth.lg} {
        ${Li["body-md-semibold"]}
        color: ${Ri["text-subtle"]};

        margin: ${Hi["spacing-24"]} ${Hi["spacing-20"]} 0
            ${Hi["spacing-20"]};
    }
`,xc=C(Qd.div)`
    overflow: hidden;
`,wc=C.div`
    padding: ${Hi["spacing-24"]} ${Hi["spacing-20"]};
`,$c=C(Qd.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,Fc=C(Eo.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Hi["spacing-16"]} 0 0 0;
`,Cc=r=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:s,onExpandChange:a,minimisable:l=!1,minimisedHeight:d,showDivider:c=!0,showMobileDivider:u=!0,title:h,addon:m,children:f}=r,p=le(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:b,rootNode:v}=F(eo),x="mobile"===b,[w,$]=g(M()),[C,E]=g(l),D=!x&&i,k=Mt(),_=Mt(),O=Od({height:w?k.height:0}),S=C?null!=d?d:Math.min(.5*(null!==(n=_.height)&&void 0!==n?n:0),216):_.height;y((()=>{$(M())}),[i,s]);function M(){return!!x||(fs(s)?!i||o:s)}return t(mc,{$collapsible:D,children:[e(fc,{$showDivider:c,$showMobileDivider:u}),(h||D)&&t(pc,{children:[h&&t(vc,{children:[h," ",m&&("popover"===(null==m?void 0:m.type)?e(gc,{addon:m,rootNode:x?v:void 0}):null)]}),D&&e(bc,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!w;fs(s)&&$(e),a&&a(e)},"aria-label":w?"Collapse":"Expand",children:e(yc,{$expanded:w})})]}),e(xc,{"data-testid":"expandable-container","data-expanded":w,style:O,children:e("div",{ref:k.ref,children:t(wc,Object.assign({},p,{children:[e($c,{"data-testid":"minimisable-container",$height:S,$minimisable:l,children:e("div",{ref:_.ref,children:e("div",{"data-id":"content-container",children:"function"==typeof f?f(b,{minimised:C}):f})})}),l&&t(Fc,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{E(!C)},children:["View ",C?"more":"less"]})]}))})})]})};Cc.displayName="Filter.Item";const Ec=C(Cc)`
    padding: 0 0 ${Hi["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${Hi["spacing-8"]} ${Hi["spacing-8"]} 0;

        ${qi.MaxWidth.lg} {
            padding: ${Hi["spacing-16"]} ${Hi["spacing-20"]}
                ${Hi["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${Hi["spacing-8"]} ${Hi["spacing-20"]} 0;
    }
`,Dc=C.div`
    display: flex;
    flex-direction: column;

    ${qi.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${Hi["spacing-16"]};
    }
`,kc=C.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${Hi["spacing-8"]} ${Hi["spacing-12"]};

    cursor: pointer;
    ${Li["body-md-regular"]}
    color: ${Ri.text};
    ${e=>e.$selected&&E`
            color: ${Ri["text-selected"]};
        `}

    ${qi.MaxWidth.lg} {
        padding: ${Hi["spacing-8"]};
    }
`,_c=C((r=>{var{className:n,checked:i,disabled:o,indeterminate:s,onChange:a,onKeyPress:l,displaySize:d="default"}=r,c=le(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=h(null);y((()=>{u.current&&(u.current.indeterminate=null!=s&&s)}),[s]);const g=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;a&&a(e),l&&l(t)}};return t(ko,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:g,$displaySize:d,$disabled:o,$unchecked:!(s||i||o),children:[e(Bo,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:g,disabled:o},c)),s?e(Ao,{$disabled:o,"data-testid":"indeterminate"}):i?e(Mo,{$disabled:o,"data-testid":"checkmark"}):o?e(So,{"data-testid":"empty-disabled-checkbox"}):e(Oo,{$disabled:o,"data-testid":"empty-checkbox"})]})}))`
    flex-shrink: 0;
    margin-right: ${Hi["spacing-8"]};
`,Oc=C((({type:n="checkbox",indicator:i,checked:o,styleType:s="default",children:a,childrenMaxLines:l,subLabel:d,disabled:c,error:u,name:m,id:f,className:p,compositeSection:b,removable:v,onRemove:w,"data-testid":$,onChange:F,useContentWidth:C})=>{const{collapsible:E=!0,errors:D,children:k,initialExpanded:_}=b||{},[O,S]=g(o),[M,A]=g(!!_),B=x((()=>{const e=Array.isArray(D)&&(null==D?void 0:D.length)>0,t=!Array.isArray(D)&&!!D;return e||t}),[D]),[z]=g(je.generate()),j=f?`${f}`:`tg-${z}`,T=h(null);y((()=>{S(o)}),[o]),y((()=>{O&&A(null==_||_)}),[O]);const I=()=>{c||A(!M)},P=()=>{c||!w||w()},R=()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e(ms,{type:t,active:O,disabled:c,$selected:O,$disabled:c})},L=()=>{if(!d)return null;let t;return t="function"==typeof d?d():d,e(is,{"data-id":"toggle-sublabel",children:t})},W=n=>t(r,{children:[e(hs,{weight:"semibold",$disabled:c,children:"Error"}),e(gs,{$disabled:c,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${j}-error-list-item-${r}`,children:e(hs,{weight:"semibold",$disabled:c,children:t})},r)))})]});return t(es,{$selected:O,$disabled:c,className:p,$styleType:s,$error:u,$indicator:i,$useContentWidth:C,id:f,"data-testid":$,children:[t(os,{id:`${j}-header-container`,$disabled:c,$error:u,$selected:O,$indicator:i,$styleType:s,children:[t(ss,{$addPadding:v,children:[e(ts,{ref:T,name:m,id:`${j}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:c,onChange:e=>{if(!c){if(F)return void F(e);switch(n){case"checkbox":S((e=>!e));break;case"radio":case"yes":case"no":O||S(!0)}}},checked:O}),i&&R(),t(rs,{$selected:O,$disabled:c,children:[e(ns,{htmlFor:`${j}-input`,"data-testid":`${j}-toggle-label`,$maxLines:l,children:a}),d&&L()]})]}),v&&e(as,{type:"button",$disabled:c,onClick:P,id:`${j}-remove-button`,children:"Remove"})]}),k&&t("div",{children:[(!E||M)&&e(us,{"data-id":"toggle-composite-children",$isFinalItem:!E,$disabled:c,children:k}),E&&!M&&B&&e(ds,{$disabled:c,onClick:I,id:`${j}-error-alert`,children:e(cs,{type:c?"description":"error",className:p,showIcon:!0,children:Array.isArray(D)?W(D):D})}),E&&t(ls,{$paddingTopRequired:!M&&!B,disabled:c,onClick:I,"data-testid":M?"collapse-button":"expand-button",children:[M?"Show less":"Show more",e(M?U:Q,{"aria-hidden":!0})]})]})]})}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,Sc=C(Eo.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Hi["spacing-16"]} 0 ${Hi["spacing-8"]}
        ${Hi["spacing-12"]};

    ${qi.MaxWidth.lg} {
        margin: 0 0 ${Hi["spacing-16"]} 0;
    }
`,Mc=n=>{var{selectedOptions:i,options:o,onSelect:s,labelExtractor:a,valueExtractor:l,useToggleContentWidth:d}=n,c=le(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:u}=F(eo),[m,f]=g(i||[]),[p,b]=g(),[v,x]=g(o.length),w=h(null),C=h(null),E=e=>()=>{const t=[...m],r=m.findIndex((t=>_(t)===_(e)));r>=0?t.splice(r,1):t.push(e),f(t),null==s||s(t)},D=()=>{const e=m.length?[]:o;f(e),null==s||s(e)},k=e=>{var t;return a?a(e):null!==(t=e.label)&&void 0!==t?t:null==e?void 0:e.toString()},_=e=>{var t;return l?l(e):null!==(t=e.value)&&void 0!==t?t:null==e?void 0:e.toString()},O=$((()=>{if(!w.current)return void b(void 0);const e=Array.from(w.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}x(t),b(r>2?n-8:void 0)}),[]);y((()=>{i!==m&&f(i||[])}),[i]),y((()=>{"default"===u?(()=>{const e=C.current?C.current.offsetTop+C.current.clientHeight:void 0;b(e)})():O()}),[o]),Mt({handleWidth:"mobile"===u,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:w,onResize:O});return e(Ec,Object.assign({minimisable:o.length>5,minimisedHeight:p},c,{children:(n,{minimised:i})=>t(r,{children:[o.length<3?null:e(Sc,{styleType:"link",type:"button",onClick:D,children:m.length?"Clear all":"Select all"}),e(Dc,{role:"group","aria-label":c.title,ref:w,children:o.map(((r,o)=>"default"===n?((r,n,i)=>{const o=k(r),s=_(r),a=!!m.find((e=>_(e)===s));return t(kc,{$visible:!i||n<5,$selected:a,ref:4===n?C:void 0,children:[e(_c,{displaySize:"small",checked:a,onChange:E(r)}),o]},s)})(r,o,i):((t,r,n)=>{const i=k(t),o=_(t),s=!!m.find((e=>_(e)===o));return e(Oc,{type:"checkbox",checked:s,$visible:!n||!!p&&r<=v,onChange:E(t),useContentWidth:d,children:i},o)})(r,o,i)))})]})}))};Mc.displayName="Filter.Checkbox";const Ac=C.div`
    background-color: ${Ri.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Bc=C(xo)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,zc=(r,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left",loading:c=!1}=r,u=le(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:a};return t(Bc,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[c?e(ao,{}):l,e("span",{children:i})]}))};zc.displayName="ButtonWithIcon.Default";const jc=(r,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left",loading:c=!1}=r,u=le(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:a};return t(Bc,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[c?e(ao,{}):l,e("span",{children:i})]}))};jc.displayName="ButtonWithIcon.Small";const Tc={Default:u.forwardRef(zc),Small:u.forwardRef(jc)},Ic=C.div`
    background-color: ${Ri.bg};
    border: ${Yi["width-010"]} ${Yi.solid} ${Ri.border};
    border-radius: ${Ni.md};
    overflow: hidden;
    width: 100%;
`,Pc=C.div`
    background-color: ${Ri["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Rc=C.div`
    background-color: ${Ri.bg};
    height: 100%;
    width: 100%;
`,Lc=C.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,Wc=C.div`
    display: flex;
    align-items: center;

    background-color: ${Ri.bg};

    ${qi.MaxWidth.lg} {
        border-bottom: ${Yi["width-010"]} ${Yi.solid}
            ${Ri.border};
    }
`,Yc=C(Po.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${Hi["spacing-24"]} 0 ${Hi["spacing-24"]}
        ${Hi["spacing-20"]};

    ${qi.MaxWidth.lg} {
        text-align: center;
        margin: ${Hi["spacing-24"]} 0;
    }
`,Hc=C(Jd)`
    padding: ${Hi["spacing-24"]} ${Hi["spacing-20"]};
    margin-right: auto;
    color: ${Ri.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Ri["icon-hover"]};
    }
`,Nc=C(Eo.Small)`
    background-color: transparent;
    padding-right: ${Hi["spacing-20"]};
    padding-left: ${Hi["spacing-20"]};
    height: 100%;

    ${qi.MaxWidth.lg} {
        padding: ${Hi["spacing-24"]} ${Hi["spacing-20"]};
    }
`,Vc=C(Tc.Default)`
    width: 100%;
`,qc=C.div`
    padding: ${Hi["spacing-24"]} ${Hi["spacing-20"]};
    background-color: ${Ri.bg};
    border-top: ${Yi["width-010"]} ${Yi.solid} ${Ri.border};
`,Qc=C(Eo.Default)`
    width: 100%;
`,Uc=({onDismiss:r,onDone:n,children:i})=>t(Ac,{children:[e(Hc,{onClick:r,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(ae,{})}),e(Lc,{children:i}),e(qc,{children:e(Qc,{onClick:n,type:"button",children:"Done"})})]});Uc.displayName="Filter.Page";const Zc=n=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:o="light",headerTitle:s="Filters",clearButtonDisabled:a=!1,onClear:c,onDismiss:u,onDone:m,children:f}=n,p=le(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[b,v]=g(!1),x=h(null),w=h(null),$=k(),F=Vi["lg-max"]({theme:$}),C=ge.useMediaQuery({maxWidth:F});y((()=>{C||D()}),[C]);const E=()=>{v(!0)},D=()=>{v(!1),u&&u()},_=()=>{v(!1),m&&m()},O=()=>{c&&c()},S=e=>"function"==typeof f?f(e):f,M=r=>t(Wc,{children:["mobile"===r&&e(Hc,{onClick:D,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(d,{})}),e(Yc,{weight:"semibold",children:s}),e(Nc,{styleType:"link",type:"button",onClick:O,disabled:a,children:"Clear"})]});return e("div",Object.assign({},p,{children:e(eo.Provider,C?{value:{mode:"mobile",rootNode:x},children:t(r,{children:[e(Vc,{"data-testid":"filter-show-button",styleType:o,onClick:E,type:"button",icon:e(l,{}),children:i}),e(Gi,{show:b,disableTransition:!0,children:e(Rc,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:t(Pc,{ref:x,children:[M("mobile"),e(Lc,{children:S("mobile")}),e(qc,{children:e(Qc,{onClick:_,type:"button",children:"Done"})})]})})})]})}:{value:{mode:"default",rootNode:w},children:t(Ic,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:w,children:[M("default"),S("default")]})})}))};Zc.displayName="Filter";const Xc=Object.assign(Zc,{Item:Cc,Page:Uc,Checkbox:Mc});export{Xc as Filter};
//# sourceMappingURL=index.js.map
