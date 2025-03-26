import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import{SquareIcon as n,SquareFillIcon as i,SquareTickFillIcon as o,MinusSquareFillIcon as s,ChevronDownIcon as a,FilterIcon as l,CrossIcon as d}from"@lifesg/react-icons";import*as c from"react";import u,{useRef as h,useState as g,isValidElement as m,createRef as p,cloneElement as f,PureComponent as b,useEffect as y,useLayoutEffect as v,useMemo as x,forwardRef as w,useCallback as $,useContext as F}from"react";import C,{css as E,keyframes as k,useTheme as D}from"styled-components";import{useFloatingTree as _,FloatingTree as O,useFloatingNodeId as S,FloatingNode as M,useFloating as A,autoUpdate as z,offset as j,flip as B,shift as T,limitShift as I,useClick as P,useDismiss as R,useHover as L,useInteractions as W,FloatingPortal as Y,FloatingFocusManager as H}from"@floating-ui/react";import N,{findDOMNode as V,unstable_batchedUpdates as q}from"react-dom";import{ChevronDownIcon as Q}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as U}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as Z}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as X}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as G}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as J}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as K}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as ee}from"@lifesg/react-icons/external";import{CircleIcon as te}from"@lifesg/react-icons/circle";import{CircleDotIcon as re}from"@lifesg/react-icons/circle-dot";import{CrossIcon as ne}from"@lifesg/react-icons/cross";import{SquareIcon as ie}from"@lifesg/react-icons/square";import{SquareTickFillIcon as oe}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as se}from"@lifesg/react-icons/tick";import{ChevronLeftIcon as ae}from"@lifesg/react-icons/chevron-left";function le(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var de="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ce(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ue,he={exports:{}};ue=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),s=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",u="<<anonymous>>",h={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:p(d),arrayOf:function(e){return p((function(t,r,n,i,o){if("function"!=typeof e)return new m("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=t[r];if(!Array.isArray(a))return new m("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<a.length;l++){var d=e(a,l,n,i,o+"["+l+"]",s);if(d instanceof Error)return d}return null}))},element:p((function(t,r,n,i,o){var s=t[r];return e(s)?null:new m("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(e,t,r,n,o){var s=e[t];return i.isValidElementType(s)?null:new m("Invalid "+n+" `"+o+"` of type `"+v(s)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,i,o){if(!(t[r]instanceof e)){var s=e.name||u;return new m("Invalid "+i+" `"+o+"` of type `"+((a=t[r]).constructor&&a.constructor.name?a.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+s+"`.")}var a;return null}))},node:p((function(e,t,r,n,i){return y(e[t])?null:new m("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,r,n,i,o){if("function"!=typeof e)return new m("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],d=v(l);if("object"!==d)return new m("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(a(l,c)){var u=e(l,c,n,i,o+"."+c,s);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,i,o){for(var s=t[r],a=0;a<e.length;a++)if(g(s,e[a]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new m("Invalid "+i+" `"+o+"` of value `"+String(s)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(r)+" at index "+t+"."),d}return p((function(t,r,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(t,r,n,i,o,s);if(null==c)return null;c.data&&a(c.data,"expectedType")&&l.push(c.data.expectedType)}return new m("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,r,n,i,o){var a=t[r],l=v(a);if("object"!==l)return new m("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return b(n,i,o,d,x(c));var u=c(a,d,n,i,o+"."+d,s);if(u)return u}return null}))},exact:function(e){return p((function(t,r,n,i,l){var d=t[r],c=v(d);if("object"!==c)return new m("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},t[r],e);for(var h in u){var g=e[h];if(a(e,h)&&"function"!=typeof g)return b(n,i,l,h,x(g));if(!g)return new m("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var p=g(d,h,n,i,l+"."+h,s);if(p)return p}return null}))}};function g(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function m(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},i=0;function o(o,a,l,d,c,h,g){if(d=d||u,h=h||l,g!==s){if(t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}if("undefined"!=typeof console){var f=d+":"+l;!r[f]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[f]=!0,i++)}}return null==a[l]?o?null===a[l]?new m("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new m("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(a,l,d,c,h)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function f(e){return p((function(t,r,n,i,o,s){var a=t[r];return v(a)!==e?new m("Invalid "+i+" `"+o+"` of type `"+x(a)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,i){return new m((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[c]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!y(i.value))return!1}else for(;!(i=o.next()).done;){var s=i.value;if(s&&!y(s[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return m.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var g=e.type;switch(g){case d:case c:case i:case s:case o:case h:return g;default:var f=g&&g.$$typeof;switch(f){case l:case u:case p:case m:case a:return f;default:return t}}case n:return t}}}var w=d,$=c,F=l,C=a,E=r,k=u,D=i,_=p,O=m,S=n,M=s,A=o,z=h,j=!1;function B(e){return x(e)===c}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=F,t.ContextProvider=C,t.Element=E,t.ForwardRef=k,t.Fragment=D,t.Lazy=_,t.Memo=O,t.Portal=S,t.Profiler=M,t.StrictMode=A,t.Suspense=z,t.isAsyncMode=function(e){return j||(j=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===d},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===p},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===s||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===m||e.$$typeof===a||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===f)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var ge=he.exports=ue(u),me={exports:{}};me.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,d),o=r-i<0,s=t.clone().add(n+(o?-1:1),d);return+(-(n+(r-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},F=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var s=t.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,i=a}return!n&&i&&(v=i),i||!n&&v},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},E=y;E.l=F,E.i=$,E.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=f.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(m);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return E},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return E.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!E.u(t)||t,c=E.p(e),g=function(e,t){var i=E.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(a)},m=function(e,t){return E.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,f=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,f):g(0,f+1);case l:var v=this.$locale().weekStart||0,x=(p<v?p+7:p)-v;return g(n?b-x:b+(6-x),f);case a:case h:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case o:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(r={},r[a]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[s]=c+"Hours",r[o]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],m=l===a?this.$D+(t-this.$W):t;if(l===d||l===u){var p=this.clone().set(h,1);p.$d[g](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[E.p(e)]()},b.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),p=function(e){var t=C(g);return E.w(t.date(t.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===a)return p(1);if(m===l)return p(7);var f=(h={},h[o]=t,h[s]=r,h[i]=e,h)[m]||1,b=this.$d.getTime()+n*f;return E.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,s=this.$m,a=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},m=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return E.s(t.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(r.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return t.$D;case"DD":return E.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(o,s,!0);case"A":return m(o,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(t.$s);case"ss":return E.s(t.$s,2,"0");case"SSS":return E.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var m,p=this,f=E.p(h),b=C(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return E.m(p,b)};switch(f){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case a:m=(v-y)/864e5;break;case s:m=v/r;break;case o:m=v/t;break;case i:m=v/e;break;default:m=v}return g?m:E.a(m)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return E.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},f}(),D=k.prototype;return C.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,k,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var pe=ce(me.exports),fe={exports:{}};fe.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[i,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var i=s[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(i||o?1:g.getDate()),p=i||g.getFullYear(),f=0;i&&!o||(f=o>0?o-1:g.getMonth());var b=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(p,f,m,b,y,v,x+60*u.offset*1e3)):r?new Date(Date.UTC(p,f,m,b,y,v,x)):new Date(p,f,m,b,y,v,x)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var g=a.length,m=1;m<=g;m+=1){s[1]=a[m-1];var p=r.apply(this,s);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var be=ce(fe.exports),ye={exports:{}};ye.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),s=r(t),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var ve=ce(ye.exports),xe={exports:{}};xe.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var we=ce(xe.exports),$e={exports:{}};$e.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Fe,Ce,Ee,ke=ce($e.exports),De={exports:{}},_e=ce(De.exports=(Fe={year:0,month:1,day:2,hour:3,minute:4,second:5},Ce={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Ce[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Ce[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Fe[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",m=+e;return(r.utc(g).valueOf()-(m-=m%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(t){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var s=i&&t,a=i||t||n,l=o(+r(),a);if("string"!=typeof e)return r(e).tz(a);var d=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var s=o(n-=60*(i-t)*1e3,r);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(r.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));pe.extend(ve),pe.extend(ke),pe.extend(we),pe.extend(be),pe.extend(_e),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=pe(t).startOf("week");return Oe(r).map((e=>Se(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Se(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(pe(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+pe(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=pe(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?pe(n):void 0,i?pe(i):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!s}}(Ee||(Ee={}));const Oe=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Se=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Me=[1,3,5,7,8,10,12],Ae=[4,6,9,11];var ze,je,Be,Te;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),s=parseInt(n);return 0==i?"1":Me.includes(o)?Math.min(i,31).toString():Ae.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=pe(e,r);return pe(t,r).diff(n,"minute")},e.toDayjs=e=>e?pe(e):pe(),e.addMinutesToTime=(e,t,r="HH:mm")=>pe(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>pe(e).isSame(pe(t),r)}(ze||(ze={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!pe(e).isBefore(n,"day"))||!(!i||!pe(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(pe(e).isValid())return e}return""}}(je||(je={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Be||(Be={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const s=n+o;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Te||(Te={}));var Ie=function(e,t){return Ie=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Ie(e,t)};var Pe=function(){return Pe=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Pe.apply(this,arguments)};var Re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Le=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},We="object"==typeof Re&&Re&&Re.Object===Object&&Re,Ye="object"==typeof self&&self&&self.Object===Object&&self,He=We||Ye||Function("return this")(),Ne=He,Ve=function(){return Ne.Date.now()},qe=/\s/;var Qe=function(e){for(var t=e.length;t--&&qe.test(e.charAt(t)););return t},Ue=/^\s+/;var Ze=function(e){return e?e.slice(0,Qe(e)+1).replace(Ue,""):e},Xe=He.Symbol,Ge=Xe,Je=Object.prototype,Ke=Je.hasOwnProperty,et=Je.toString,tt=Ge?Ge.toStringTag:void 0;var rt=function(e){var t=Ke.call(e,tt),r=e[tt];try{e[tt]=void 0;var n=!0}catch(e){}var i=et.call(e);return n&&(t?e[tt]=r:delete e[tt]),i},nt=Object.prototype.toString;var it=rt,ot=function(e){return nt.call(e)},st=Xe?Xe.toStringTag:void 0;var at=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":st&&st in Object(e)?it(e):ot(e)},lt=function(e){return null!=e&&"object"==typeof e};var dt=Ze,ct=Le,ut=function(e){return"symbol"==typeof e||lt(e)&&"[object Symbol]"==at(e)},ht=/^[-+]0x[0-9a-f]+$/i,gt=/^0b[01]+$/i,mt=/^0o[0-7]+$/i,pt=parseInt;var ft=Le,bt=Ve,yt=function(e){if("number"==typeof e)return e;if(ut(e))return NaN;if(ct(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ct(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=dt(e);var r=gt.test(e);return r||mt.test(e)?pt(e.slice(2),r?2:8):ht.test(e)?NaN:+e},vt=Math.max,xt=Math.min;var wt=function(e,t,r){var n,i,o,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,o=i;return n=i=void 0,d=t,s=e.apply(o,r)}function m(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=o}function p(){var e=bt();if(m(e))return f(e);a=setTimeout(p,function(e){var r=t-(e-l);return u?xt(r,o-(e-d)):r}(e))}function f(e){return a=void 0,h&&n?g(e):(n=i=void 0,s)}function b(){var e=bt(),r=m(e);if(n=arguments,i=this,l=e,r){if(void 0===a)return function(e){return d=e,a=setTimeout(p,t),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(p,t),g(l)}return void 0===a&&(a=setTimeout(p,t)),s}return t=yt(t)||0,ft(r)&&(c=!!r.leading,o=(u="maxWait"in r)?vt(yt(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},b.flush=function(){return void 0===a?s:f(bt())},b},$t=wt,Ft=Le;var Ct=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ft(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),$t(e,t,{leading:n,maxWait:t,trailing:i})},Et=function(e,t,r,n){switch(t){case"debounce":return wt(e,r,n);case"throttle":return Ct(e,r,n);default:return e}},kt=function(e){return"function"==typeof e},Dt=function(){return"undefined"==typeof window},_t=function(e){return e instanceof Element||e instanceof HTMLDocument},Ot=function(e,t,r,n){return function(i){var o=i.width,s=i.height;t((function(t){return t.width===o&&t.height===s||t.width===o&&!n||t.height===s&&!r?t:(e&&kt(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Dt()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Dt())return null;if(t)return document.querySelector(t);if(n&&_t(n))return n;if(r.targetRef&&_t(r.targetRef.current))return r.targetRef.current;var i=V(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,s=void 0===o||o,a=t.onResize;if(i||s){var l=Ot(a,r.setState.bind(r),i,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!Dt()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return kt(t)?"renderProp":kt(n)?"childFunction":m(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,s=void 0===o?1e3:o,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=p(),r.observableElement=null,Dt()||(r.resizeHandler=Et(r.createResizeHandler,i,s,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Ie(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Dt()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,i=t.nodeType,o=void 0===i?"div":i,s=this.state,a={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(a);case"childFunction":return(e=n)(a);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(a,["targetRef"]);return f(e,l)}return f(e,a);case"childArray":return(e=n).map((function(e){return!!e&&f(e,a)}));default:return c.createElement(o,null)}}}(b);var St=Dt()?y:v;function Mt(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,s=e.refreshOptions,a=e.handleWidth,l=void 0===a||a,d=e.handleHeight,c=void 0===d||d,u=e.targetRef,m=e.observerOptions,p=e.onResize,f=h(r),b=h(null),y=null!=u?u:b,v=h(),x=g({width:void 0,height:void 0}),w=x[0],$=x[1];return St((function(){if(!Dt()){var e=Ot(p,$,l,c);v.current=Et((function(t){(l||c)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!f.current&&!Dt()&&e({width:n,height:i}),f.current=!1}))}),n,o,s);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,m),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,s,l,c,p,m,y.current]),Pe({ref:y},w)}var At=Array.isArray,zt="object"==typeof de&&de&&de.Object===Object&&de,jt="object"==typeof self&&self&&self.Object===Object&&self,Bt=zt||jt||Function("return this")(),Tt=Bt.Symbol,It=Tt,Pt=Object.prototype,Rt=Pt.hasOwnProperty,Lt=Pt.toString,Wt=It?It.toStringTag:void 0;var Yt=function(e){var t=Rt.call(e,Wt),r=e[Wt];try{e[Wt]=void 0;var n=!0}catch(e){}var i=Lt.call(e);return n&&(t?e[Wt]=r:delete e[Wt]),i},Ht=Object.prototype.toString;var Nt=Yt,Vt=function(e){return Ht.call(e)},qt=Tt?Tt.toStringTag:void 0;var Qt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":qt&&qt in Object(e)?Nt(e):Vt(e)};var Ut=Qt,Zt=function(e){return null!=e&&"object"==typeof e};var Xt=function(e){return"symbol"==typeof e||Zt(e)&&"[object Symbol]"==Ut(e)},Gt=At,Jt=Xt,Kt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,er=/^\w*$/;var tr=function(e,t){if(Gt(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Jt(e))||(er.test(e)||!Kt.test(e)||null!=t&&e in Object(t))};var rr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},nr=Qt,ir=rr;var or,sr=function(e){if(!ir(e))return!1;var t=nr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ar=Bt["__core-js_shared__"],lr=(or=/[^.]+$/.exec(ar&&ar.keys&&ar.keys.IE_PROTO||""))?"Symbol(src)_1."+or:"";var dr=function(e){return!!lr&&lr in e},cr=Function.prototype.toString;var ur=sr,hr=dr,gr=rr,mr=function(e){if(null!=e){try{return cr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},pr=/^\[object .+?Constructor\]$/,fr=Function.prototype,br=Object.prototype,yr=fr.toString,vr=br.hasOwnProperty,xr=RegExp("^"+yr.call(vr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var wr=function(e,t){return null==e?void 0:e[t]},$r=function(e){return!(!gr(e)||hr(e))&&(ur(e)?xr:pr).test(mr(e))},Fr=wr;var Cr=function(e,t){var r=Fr(e,t);return $r(r)?r:void 0},Er=Cr(Object,"create"),kr=Er;var Dr=function(){this.__data__=kr?kr(null):{},this.size=0};var _r=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Or=Er,Sr=Object.prototype.hasOwnProperty;var Mr=function(e){var t=this.__data__;if(Or){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Sr.call(t,e)?t[e]:void 0},Ar=Er,zr=Object.prototype.hasOwnProperty;var jr=function(e){var t=this.__data__;return Ar?void 0!==t[e]:zr.call(t,e)},Br=Er;var Tr=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Br&&void 0===t?"__lodash_hash_undefined__":t,this},Ir=Dr,Pr=_r,Rr=Mr,Lr=jr,Wr=Tr;function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Yr.prototype.clear=Ir,Yr.prototype.delete=Pr,Yr.prototype.get=Rr,Yr.prototype.has=Lr,Yr.prototype.set=Wr;var Hr=Yr;var Nr=function(){this.__data__=[],this.size=0};var Vr=function(e,t){return e===t||e!=e&&t!=t};var qr=function(e,t){for(var r=e.length;r--;)if(Vr(e[r][0],t))return r;return-1},Qr=qr,Ur=Array.prototype.splice;var Zr=function(e){var t=this.__data__,r=Qr(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ur.call(t,r,1),--this.size,!0)},Xr=qr;var Gr=function(e){var t=this.__data__,r=Xr(t,e);return r<0?void 0:t[r][1]},Jr=qr;var Kr=function(e){return Jr(this.__data__,e)>-1},en=qr;var tn=function(e,t){var r=this.__data__,n=en(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},rn=Nr,nn=Zr,on=Gr,sn=Kr,an=tn;function ln(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ln.prototype.clear=rn,ln.prototype.delete=nn,ln.prototype.get=on,ln.prototype.has=sn,ln.prototype.set=an;var dn=ln,cn=Cr(Bt,"Map"),un=Hr,hn=dn,gn=cn;var mn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var pn=function(e,t){var r=e.__data__;return mn(t)?r["string"==typeof t?"string":"hash"]:r.map},fn=pn;var bn=function(e){var t=fn(this,e).delete(e);return this.size-=t?1:0,t},yn=pn;var vn=function(e){return yn(this,e).get(e)},xn=pn;var wn=function(e){return xn(this,e).has(e)},$n=pn;var Fn=function(e,t){var r=$n(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Cn=function(){this.size=0,this.__data__={hash:new un,map:new(gn||hn),string:new un}},En=bn,kn=vn,Dn=wn,_n=Fn;function On(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}On.prototype.clear=Cn,On.prototype.delete=En,On.prototype.get=kn,On.prototype.has=Dn,On.prototype.set=_n;var Sn=On;function Mn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(Mn.Cache||Sn),r}Mn.Cache=Sn;var An=Mn;var zn=function(e){var t=An(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bn=/\\(\\)?/g,Tn=zn((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(jn,(function(e,r,n,i){t.push(n?i.replace(Bn,"$1"):r||e)})),t}));var In=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Pn=At,Rn=Xt,Ln=Tt?Tt.prototype:void 0,Wn=Ln?Ln.toString:void 0;var Yn=function e(t){if("string"==typeof t)return t;if(Pn(t))return In(t,e)+"";if(Rn(t))return Wn?Wn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Hn=Yn;var Nn=At,Vn=tr,qn=Tn,Qn=function(e){return null==e?"":Hn(e)};var Un=Xt;var Zn=function(e,t){return Nn(e)?e:Vn(e,t)?[e]:qn(Qn(e))},Xn=function(e){if("string"==typeof e||Un(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Gn=function(e,t){for(var r=0,n=(t=Zn(t,e)).length;null!=e&&r<n;)e=e[Xn(t[r++])];return r&&r==n?e:void 0};var Jn=ce((function(e,t,r){var n=null==e?void 0:Gn(e,t);return void 0===n?r:n}));const Kn=(e,t,r)=>Jn(r,t)||Jn(e,t),ei=(e,t)=>{const r=t||e.defaultValue;return Jn(e.collections,r)},ti={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ri=e=>t=>{var r;const n=t.theme,i=ei(ti,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Kn(i,e,n.overrides.border)}px`:`${i[e]}px`},ni={"width-005":ri("width-005"),"width-010":ri("width-010"),"width-020":ri("width-020"),"width-040":ri("width-040"),solid:(ii="solid",e=>{var t;const r=e.theme,n=ei(ti,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Kn(n,ii,r.overrides.border):n[ii];return"function"==typeof i?i(e):i})};var ii;const oi={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},si=e=>t=>{var r;const n=t.theme,i=ei(oi,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?Kn(i,e,n.overrides.primitiveColour):i[e]},ai={"brand-10":si("brand-10"),"brand-20":si("brand-20"),"brand-30":si("brand-30"),"brand-40":si("brand-40"),"brand-50":si("brand-50"),"brand-60":si("brand-60"),"brand-70":si("brand-70"),"brand-80":si("brand-80"),"brand-90":si("brand-90"),"brand-95":si("brand-95"),"brand-100":si("brand-100"),"primary-10":si("primary-10"),"primary-20":si("primary-20"),"primary-30":si("primary-30"),"primary-40":si("primary-40"),"primary-50":si("primary-50"),"primary-60":si("primary-60"),"primary-70":si("primary-70"),"primary-80":si("primary-80"),"primary-90":si("primary-90"),"primary-95":si("primary-95"),"primary-100":si("primary-100"),"secondary-10":si("secondary-10"),"secondary-20":si("secondary-20"),"secondary-30":si("secondary-30"),"secondary-40":si("secondary-40"),"secondary-50":si("secondary-50"),"secondary-60":si("secondary-60"),"secondary-70":si("secondary-70"),"secondary-80":si("secondary-80"),"secondary-90":si("secondary-90"),"secondary-95":si("secondary-95"),"secondary-100":si("secondary-100"),"neutral-10":si("neutral-10"),"neutral-20":si("neutral-20"),"neutral-30":si("neutral-30"),"neutral-40":si("neutral-40"),"neutral-50":si("neutral-50"),"neutral-60":si("neutral-60"),"neutral-70":si("neutral-70"),"neutral-80":si("neutral-80"),"neutral-90":si("neutral-90"),"neutral-95":si("neutral-95"),"neutral-100":si("neutral-100"),"success-10":si("success-10"),"success-20":si("success-20"),"success-30":si("success-30"),"success-40":si("success-40"),"success-50":si("success-50"),"success-60":si("success-60"),"success-70":si("success-70"),"success-80":si("success-80"),"success-90":si("success-90"),"success-95":si("success-95"),"success-100":si("success-100"),"warning-10":si("warning-10"),"warning-20":si("warning-20"),"warning-30":si("warning-30"),"warning-40":si("warning-40"),"warning-50":si("warning-50"),"warning-60":si("warning-60"),"warning-70":si("warning-70"),"warning-80":si("warning-80"),"warning-90":si("warning-90"),"warning-95":si("warning-95"),"warning-100":si("warning-100"),"error-10":si("error-10"),"error-20":si("error-20"),"error-30":si("error-30"),"error-40":si("error-40"),"error-50":si("error-50"),"error-60":si("error-60"),"error-70":si("error-70"),"error-80":si("error-80"),"error-90":si("error-90"),"error-95":si("error-95"),"error-100":si("error-100"),"info-10":si("info-10"),"info-20":si("info-20"),"info-30":si("info-30"),"info-40":si("info-40"),"info-50":si("info-50"),"info-60":si("info-60"),"info-70":si("info-70"),"info-80":si("info-80"),"info-90":si("info-90"),"info-95":si("info-95"),"info-100":si("info-100"),white:si("white"),black:si("black"),"primary-inverse":si("primary-inverse")},li={text:si("neutral-20"),"text-subtle":si("neutral-30"),"text-subtler":si("neutral-50"),"text-subtlest":si("neutral-60"),"text-primary":si("primary-50"),"text-hover":si("primary-40"),"text-selected":si("primary-50"),"text-selected-hover":si("primary-40"),"text-disabled":si("neutral-50"),"text-disabled-subtle":si("neutral-60"),"text-disabled-subtlest":si("neutral-80"),"text-selected-disabled":si("neutral-20"),"text-success":si("success-40"),"text-warning":si("warning-40"),"text-error":si("error-40"),"text-info":si("info-40"),"text-inverse":si("white"),icon:si("neutral-50"),"icon-subtle":si("neutral-60"),"icon-strongest":si("neutral-20"),"icon-primary":si("primary-50"),"icon-primary-subtle":si("primary-60"),"icon-primary-subtlest":si("primary-70"),"icon-hover":si("primary-40"),"icon-selected":si("primary-50"),"icon-selected-hover":si("primary-40"),"icon-disabled":si("neutral-50"),"icon-disabled-subtle":si("neutral-60"),"icon-selected-disabled":si("neutral-60"),"icon-success":si("success-50"),"icon-warning":si("warning-60"),"icon-error":si("error-50"),"icon-error-strong":si("error-40"),"icon-info":si("info-50"),"icon-inverse":si("white"),"icon-primary-inverse":si("primary-inverse"),border:si("neutral-90"),"border-strong":si("neutral-70"),"border-stronger":si("neutral-50"),"border-primary":si("primary-50"),"border-primary-subtle":si("primary-60"),"border-hover":si("primary-90"),"border-hover-strong":si("primary-60"),"border-selected":si("primary-50"),"border-selected-subtle":si("primary-70"),"border-selected-subtlest":si("primary-90"),"border-selected-hover":si("primary-40"),"border-focus":si("primary-60"),"border-focus-strong":si("primary-50"),"border-disabled":si("neutral-90"),"border-selected-disabled":si("neutral-70"),"border-success":si("success-60"),"border-warning":si("warning-60"),"border-error":si("error-60"),"border-error-focus":si("error-60"),"border-error-focus-strong":si("error-40"),"border-error-strong":si("error-40"),"border-info":si("info-60"),bg:si("white"),"bg-strong":si("neutral-100"),"bg-stronger":si("neutral-95"),"bg-strongest":si("neutral-90"),"bg-hover":si("primary-95"),"bg-hover-strong":si("primary-90"),"bg-hover-subtle":si("primary-100"),"bg-hover-neutral":si("neutral-100"),"bg-hover-neutral-strong":si("neutral-90"),"bg-selected":si("primary-95"),"bg-selected-hover":si("primary-90"),"bg-selected-strong":si("primary-90"),"bg-selected-stronger":si("primary-70"),"bg-selected-strongest":si("primary-50"),"bg-selected-strongest-hover":si("primary-40"),"bg-disabled":si("neutral-95"),"bg-selected-disabled":si("neutral-95"),"bg-selected-stronger-disabled":si("neutral-70"),"bg-success":si("success-100"),"bg-success-hover":si("success-95"),"bg-success-strong":si("success-50"),"bg-success-strong-hover":si("success-40"),"bg-warning":si("warning-100"),"bg-warning-hover":si("warning-95"),"bg-warning-strong":si("warning-50"),"bg-warning-strong-hover":si("warning-40"),"bg-info":si("info-100"),"bg-info-hover":si("info-95"),"bg-info-strong":si("info-50"),"bg-info-strong-hover":si("info-40"),"bg-error":si("error-100"),"bg-error-hover":si("error-95"),"bg-error-strong":si("error-50"),"bg-error-strong-hover":si("error-40"),"bg-inverse":si("neutral-20"),"bg-inverse-subtle":si("neutral-30"),"bg-inverse-subtler":si("neutral-50"),"bg-inverse-subtlest":si("neutral-60"),"bg-inverse-hover":si("neutral-40"),"bg-primary":si("primary-50"),"bg-primary-subtle":si("primary-60"),"bg-primary-subtler":si("primary-95"),"bg-primary-subtlest":si("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":si("primary-40"),"bg-primary-subtlest-hover":si("primary-90"),"bg-primary-subtlest-selected":si("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:si("primary-50"),"hyperlink-hover":si("primary-40"),"hyperlink-visited":si("primary-40"),"hyperlink-inverse":si("primary-inverse"),"focus-ring":si("black"),"focus-ring-inverse":si("white")},di={collections:{lifesg:li,bookingsg:li,rbs:li,mylegacy:li,ccube:li,pa:{text:si("neutral-30"),"text-subtle":si("neutral-40"),"text-subtler":si("neutral-50"),"text-subtlest":si("neutral-70"),"text-primary":si("neutral-10"),"text-hover":si("neutral-70"),"text-selected":si("neutral-20"),"text-selected-hover":si("neutral-10"),"text-disabled":si("neutral-50"),"text-disabled-subtle":si("neutral-60"),"text-disabled-subtlest":si("neutral-80"),"text-selected-disabled":si("neutral-40"),"text-success":si("success-40"),"text-warning":si("warning-40"),"text-error":si("brand-30"),"text-info":si("neutral-40"),"text-inverse":si("neutral-100"),icon:si("neutral-40"),"icon-subtle":si("neutral-50"),"icon-strongest":si("neutral-10"),"icon-primary":si("neutral-10"),"icon-primary-subtle":si("neutral-30"),"icon-primary-subtlest":si("neutral-60"),"icon-hover":si("neutral-70"),"icon-selected":si("brand-20"),"icon-selected-hover":si("brand-10"),"icon-disabled":si("neutral-50"),"icon-disabled-subtle":si("neutral-60"),"icon-selected-disabled":si("neutral-40"),"icon-success":si("success-40"),"icon-warning":si("warning-60"),"icon-error":si("brand-30"),"icon-error-strong":si("brand-10"),"icon-info":si("neutral-40"),"icon-inverse":si("neutral-100"),"icon-primary-inverse":"#F9B371",border:si("neutral-90"),"border-strong":si("neutral-30"),"border-stronger":si("neutral-20"),"border-primary":si("neutral-40"),"border-primary-subtle":si("neutral-60"),"border-hover":si("neutral-80"),"border-hover-strong":si("neutral-10"),"border-selected":si("neutral-20"),"border-selected-subtle":si("neutral-40"),"border-selected-subtlest":si("neutral-70"),"border-selected-hover":si("neutral-10"),"border-focus":si("brand-60"),"border-focus-strong":si("brand-40"),"border-disabled":si("neutral-90"),"border-selected-disabled":si("neutral-80"),"border-success":si("success-40"),"border-warning":si("warning-60"),"border-error":si("brand-30"),"border-error-focus":si("brand-20"),"border-error-focus-strong":si("brand-10"),"border-error-strong":si("brand-20"),"border-info":si("neutral-40"),bg:si("neutral-100"),"bg-strong":si("neutral-95"),"bg-stronger":si("neutral-90"),"bg-strongest":si("neutral-80"),"bg-hover":si("brand-90"),"bg-hover-strong":si("brand-80"),"bg-hover-subtle":si("neutral-90"),"bg-hover-neutral":si("neutral-90"),"bg-hover-neutral-strong":si("neutral-90"),"bg-selected":si("brand-50"),"bg-selected-hover":si("brand-70"),"bg-selected-strong":si("brand-90"),"bg-selected-stronger":si("brand-40"),"bg-selected-strongest":si("brand-20"),"bg-selected-strongest-hover":si("brand-10"),"bg-disabled":si("neutral-90"),"bg-selected-disabled":si("neutral-90"),"bg-selected-stronger-disabled":si("neutral-80"),"bg-success":si("success-100"),"bg-success-hover":si("success-95"),"bg-success-strong":si("success-50"),"bg-success-strong-hover":si("success-40"),"bg-warning":si("warning-100"),"bg-warning-hover":si("warning-95"),"bg-warning-strong":si("warning-50"),"bg-warning-strong-hover":si("warning-40"),"bg-info":si("neutral-95"),"bg-info-hover":si("info-95"),"bg-info-strong":si("info-50"),"bg-info-strong-hover":si("info-40"),"bg-error":si("brand-100"),"bg-error-hover":si("error-95"),"bg-error-strong":si("error-50"),"bg-error-strong-hover":si("error-40"),"bg-inverse":si("neutral-40"),"bg-inverse-subtle":si("neutral-60"),"bg-inverse-subtler":si("neutral-70"),"bg-inverse-subtlest":si("neutral-80"),"bg-inverse-hover":si("neutral-30"),"bg-primary":si("brand-20"),"bg-primary-subtle":si("brand-60"),"bg-primary-subtler":si("brand-80"),"bg-primary-subtlest":si("brand-100"),"bg-available":si("success-60"),"bg-primary-hover":si("brand-10"),"bg-primary-subtlest-hover":si("brand-80"),"bg-primary-subtlest-selected":si("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:si("neutral-10"),"hyperlink-hover":si("neutral-40"),"hyperlink-visited":si("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":si("black"),"focus-ring-inverse":si("white")}},defaultValue:"lifesg"},ci=e=>t=>{var r;const n=t.theme,i=ei(di,null==n?void 0:n.colourScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?Kn(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(t):o},ui={text:ci("text"),"text-subtle":ci("text-subtle"),"text-subtler":ci("text-subtler"),"text-subtlest":ci("text-subtlest"),"text-primary":ci("text-primary"),"text-hover":ci("text-hover"),"text-selected":ci("text-selected"),"text-selected-hover":ci("text-selected-hover"),"text-disabled":ci("text-disabled"),"text-disabled-subtle":ci("text-disabled-subtle"),"text-disabled-subtlest":ci("text-disabled-subtlest"),"text-selected-disabled":ci("text-selected-disabled"),"text-success":ci("text-success"),"text-warning":ci("text-warning"),"text-error":ci("text-error"),"text-info":ci("text-info"),"text-inverse":ci("text-inverse"),icon:ci("icon"),"icon-subtle":ci("icon-subtle"),"icon-strongest":ci("icon-strongest"),"icon-primary":ci("icon-primary"),"icon-primary-subtle":ci("icon-primary-subtle"),"icon-primary-subtlest":ci("icon-primary-subtlest"),"icon-hover":ci("icon-hover"),"icon-selected":ci("icon-selected"),"icon-selected-hover":ci("icon-selected-hover"),"icon-disabled":ci("icon-disabled"),"icon-disabled-subtle":ci("icon-disabled-subtle"),"icon-selected-disabled":ci("icon-selected-disabled"),"icon-success":ci("icon-success"),"icon-warning":ci("icon-warning"),"icon-error":ci("icon-error"),"icon-error-strong":ci("icon-error-strong"),"icon-info":ci("icon-info"),"icon-inverse":ci("icon-inverse"),"icon-primary-inverse":ci("icon-primary-inverse"),border:ci("border"),"border-strong":ci("border-strong"),"border-stronger":ci("border-stronger"),"border-primary":ci("border-primary"),"border-primary-subtle":ci("border-primary-subtle"),"border-hover":ci("border-hover"),"border-hover-strong":ci("border-hover-strong"),"border-selected":ci("border-selected"),"border-selected-subtle":ci("border-selected-subtle"),"border-selected-subtlest":ci("border-selected-subtlest"),"border-selected-hover":ci("border-selected-hover"),"border-focus":ci("border-focus"),"border-focus-strong":ci("border-focus-strong"),"border-disabled":ci("border-disabled"),"border-selected-disabled":ci("border-selected-disabled"),"border-success":ci("border-success"),"border-warning":ci("border-warning"),"border-error":ci("border-error"),"border-error-focus":ci("border-error-focus"),"border-error-focus-strong":ci("border-error-focus-strong"),"border-error-strong":ci("border-error-strong"),"border-info":ci("border-info"),bg:ci("bg"),"bg-strong":ci("bg-strong"),"bg-stronger":ci("bg-stronger"),"bg-strongest":ci("bg-strongest"),"bg-hover":ci("bg-hover"),"bg-hover-strong":ci("bg-hover-strong"),"bg-hover-subtle":ci("bg-hover-subtle"),"bg-hover-neutral":ci("bg-hover-neutral"),"bg-hover-neutral-strong":ci("bg-hover-neutral-strong"),"bg-selected":ci("bg-selected"),"bg-selected-hover":ci("bg-selected-hover"),"bg-selected-strong":ci("bg-selected-strong"),"bg-selected-stronger":ci("bg-selected-stronger"),"bg-selected-strongest":ci("bg-selected-strongest"),"bg-selected-strongest-hover":ci("bg-selected-strongest-hover"),"bg-disabled":ci("bg-disabled"),"bg-selected-disabled":ci("bg-selected-disabled"),"bg-selected-stronger-disabled":ci("bg-selected-stronger-disabled"),"bg-success":ci("bg-success"),"bg-success-hover":ci("bg-success-hover"),"bg-success-strong":ci("bg-success-strong"),"bg-success-strong-hover":ci("bg-success-strong-hover"),"bg-warning":ci("bg-warning"),"bg-warning-hover":ci("bg-warning-hover"),"bg-warning-strong":ci("bg-warning-strong"),"bg-warning-strong-hover":ci("bg-warning-strong-hover"),"bg-info":ci("bg-info"),"bg-info-hover":ci("bg-info-hover"),"bg-info-strong":ci("bg-info-strong"),"bg-info-strong-hover":ci("bg-info-strong-hover"),"bg-error":ci("bg-error"),"bg-error-hover":ci("bg-error-hover"),"bg-error-strong":ci("bg-error-strong"),"bg-error-strong-hover":ci("bg-error-strong-hover"),"bg-inverse":ci("bg-inverse"),"bg-inverse-subtle":ci("bg-inverse-subtle"),"bg-inverse-subtler":ci("bg-inverse-subtler"),"bg-inverse-subtlest":ci("bg-inverse-subtlest"),"bg-inverse-hover":ci("bg-inverse-hover"),"bg-primary":ci("bg-primary"),"bg-primary-subtle":ci("bg-primary-subtle"),"bg-primary-subtler":ci("bg-primary-subtler"),"bg-primary-subtlest":ci("bg-primary-subtlest"),"bg-available":ci("bg-available"),"bg-primary-hover":ci("bg-primary-hover"),"bg-primary-subtlest-hover":ci("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ci("bg-primary-subtlest-selected"),"overlay-strong":ci("overlay-strong"),"overlay-subtle":ci("overlay-subtle"),hyperlink:ci("hyperlink"),"hyperlink-hover":ci("hyperlink-hover"),"hyperlink-visited":ci("hyperlink-visited"),"hyperlink-inverse":ci("hyperlink-inverse"),"focus-ring":ci("focus-ring"),"focus-ring-inverse":ci("focus-ring-inverse")},hi={collections:{default:{solid:e=>t=>{var r,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:ni["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(t):a)&&void 0!==i?i:ui.border(t),u=ni.solid;return E`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:ni["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(t):a)&&void 0!==i?i:ui.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return E`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},gi=e=>1===e.length&&"theme"in e[0],mi=e=>(...t)=>r=>{const n=gi(t)?[]:t,i=gi(t)?t[0]:r,o=i.theme;return(0,ei(hi,null==o?void 0:o.borderScheme)[e])(...n)(i)},pi={solid:mi("solid"),"dashed-default":mi("dashed-default")},fi={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},bi=e=>t=>{var r;const n=t.theme,i=ei(fi,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Kn(i,e,n.overrides.breakpoint):i[e],o},yi={"xxs-min":bi("xxs-min"),"xxs-max":bi("xxs-max"),"xs-min":bi("xs-min"),"xs-max":bi("xs-max"),"sm-min":bi("sm-min"),"sm-max":bi("sm-max"),"md-min":bi("md-min"),"md-max":bi("md-max"),"lg-min":bi("lg-min"),"lg-max":bi("lg-max"),"xl-min":bi("xl-min"),"xl-max":bi("xl-max"),"xxl-min":bi("xxl-min"),"xxs-column":bi("xxs-column"),"xs-column":bi("xs-column"),"sm-column":bi("sm-column"),"md-column":bi("md-column"),"lg-column":bi("lg-column"),"xl-column":bi("xl-column"),"xxl-column":bi("xxl-column"),"xxs-gutter":bi("xxs-gutter"),"xs-gutter":bi("xs-gutter"),"sm-gutter":bi("sm-gutter"),"md-gutter":bi("md-gutter"),"lg-gutter":bi("lg-gutter"),"xl-gutter":bi("xl-gutter"),"xxl-gutter":bi("xxl-gutter"),"xxs-margin":bi("xxs-margin"),"xs-margin":bi("xs-margin"),"sm-margin":bi("sm-margin"),"md-margin":bi("md-margin"),"lg-margin":bi("lg-margin"),"xl-margin":bi("xl-margin"),"xxl-margin":bi("xxl-margin")},vi=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=yi["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),xi={MaxWidth:vi("max-width"),MinWidth:vi("min-width")},wi={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},$i=e=>t=>{var r;const n=t.theme,i=ei(wi,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Kn(i,e,n.overrides.fontSpec):i[e]},Fi={"heading-size-xxl":$i("heading-size-xxl"),"heading-size-xl":$i("heading-size-xl"),"heading-size-lg":$i("heading-size-lg"),"heading-size-md":$i("heading-size-md"),"heading-size-sm":$i("heading-size-sm"),"heading-size-xs":$i("heading-size-xs"),"heading-lh-xxl":$i("heading-lh-xxl"),"heading-lh-xl":$i("heading-lh-xl"),"heading-lh-lg":$i("heading-lh-lg"),"heading-lh-md":$i("heading-lh-md"),"heading-lh-sm":$i("heading-lh-sm"),"heading-lh-xs":$i("heading-lh-xs"),"heading-ls-xxl":$i("heading-ls-xxl"),"heading-ls-xl":$i("heading-ls-xl"),"heading-ls-lg":$i("heading-ls-lg"),"heading-ls-md":$i("heading-ls-md"),"heading-ls-sm":$i("heading-ls-sm"),"heading-ls-xs":$i("heading-ls-xs"),"weight-light":$i("weight-light"),"weight-regular":$i("weight-regular"),"weight-semibold":$i("weight-semibold"),"weight-bold":$i("weight-bold"),"font-family":$i("font-family"),"body-size-baseline":$i("body-size-baseline"),"body-size-md":$i("body-size-md"),"body-size-sm":$i("body-size-sm"),"body-size-xs":$i("body-size-xs"),"body-lh-baseline":$i("body-lh-baseline"),"body-lh-md":$i("body-lh-md"),"body-lh-sm":$i("body-lh-sm"),"body-lh-xs":$i("body-lh-xs"),"body-ls-baseline":$i("body-ls-baseline"),"body-ls-md":$i("body-ls-md"),"body-ls-sm":$i("body-ls-sm"),"body-ls-xs":$i("body-ls-xs"),"form-label-size":$i("form-label-size"),"form-description-size":$i("form-description-size"),"form-label-lh":$i("form-label-lh"),"form-description-lh":$i("form-description-lh"),"form-label-ls":$i("form-label-ls"),"form-description-ls":$i("form-description-ls")},Ci=(e,t,r,n,i)=>{const{disableLigatures:o}=i||{};return E`
        font-family: ${$i("font-family")};
        font-size: ${$i(e)};
        font-weight: ${$i(t)};
        line-height: ${$i(r)};
        letter-spacing: ${$i(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Ei=(e={})=>({"heading-xxl-light":Ci("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Ci("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Ci("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Ci("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Ci("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Ci("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Ci("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Ci("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Ci("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Ci("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Ci("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Ci("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Ci("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Ci("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Ci("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Ci("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Ci("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Ci("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Ci("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Ci("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Ci("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Ci("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Ci("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Ci("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Ci("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Ci("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Ci("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Ci("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Ci("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Ci("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Ci("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Ci("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Ci("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Ci("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Ci("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Ci("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Ci("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Ci("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Ci("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Ci("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Ci("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Ci("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),ki={collections:{default:Ei(),bookingsg:Ei({disableLigatures:!0}),pa:Ei({disableLigatures:!0})},defaultValue:"default"},Di=e=>t=>{var r;const n=t.theme,i=ei(ki,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Kn(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},_i={"heading-xxl-light":Di("heading-xxl-light"),"heading-xxl-regular":Di("heading-xxl-regular"),"heading-xxl-semibold":Di("heading-xxl-semibold"),"heading-xxl-bold":Di("heading-xxl-bold"),"heading-xl-light":Di("heading-xl-light"),"heading-xl-regular":Di("heading-xl-regular"),"heading-xl-semibold":Di("heading-xl-semibold"),"heading-xl-bold":Di("heading-xl-bold"),"heading-lg-light":Di("heading-lg-light"),"heading-lg-regular":Di("heading-lg-regular"),"heading-lg-semibold":Di("heading-lg-semibold"),"heading-lg-bold":Di("heading-lg-bold"),"heading-md-light":Di("heading-md-light"),"heading-md-regular":Di("heading-md-regular"),"heading-md-semibold":Di("heading-md-semibold"),"heading-md-bold":Di("heading-md-bold"),"heading-sm-light":Di("heading-sm-light"),"heading-sm-regular":Di("heading-sm-regular"),"heading-sm-semibold":Di("heading-sm-semibold"),"heading-sm-bold":Di("heading-sm-bold"),"heading-xs-light":Di("heading-xs-light"),"heading-xs-regular":Di("heading-xs-regular"),"heading-xs-semibold":Di("heading-xs-semibold"),"heading-xs-bold":Di("heading-xs-bold"),"body-baseline-light":Di("body-baseline-light"),"body-baseline-regular":Di("body-baseline-regular"),"body-baseline-semibold":Di("body-baseline-semibold"),"body-baseline-bold":Di("body-baseline-bold"),"body-md-light":Di("body-md-light"),"body-md-regular":Di("body-md-regular"),"body-md-semibold":Di("body-md-semibold"),"body-md-bold":Di("body-md-bold"),"body-sm-light":Di("body-sm-light"),"body-sm-regular":Di("body-sm-regular"),"body-sm-semibold":Di("body-sm-semibold"),"body-sm-bold":Di("body-sm-bold"),"body-xs-light":Di("body-xs-light"),"body-xs-regular":Di("body-xs-regular"),"body-xs-semibold":Di("body-xs-semibold"),"body-xs-bold":Di("body-xs-bold"),"form-label":Di("form-label"),"form-description":Di("form-description")},Oi={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Si=e=>t=>{var r;const n=t.theme,i=ei(Oi,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Kn(i,e,n.overrides.motion):i[e]},Mi={"duration-150":Si("duration-150"),"duration-250":Si("duration-250"),"duration-350":Si("duration-350"),"duration-500":Si("duration-500"),"duration-800":Si("duration-800"),"duration-1000":Si("duration-1000"),"ease-default":Si("ease-default"),"ease-standard":Si("ease-standard"),"ease-entrance":Si("ease-entrance"),"ease-exit":Si("ease-exit")},Ai={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},zi=e=>t=>{var r;const n=t.theme,i=ei(Ai,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Kn(i,e,n.overrides.radius)}px`:`${i[e]}px`},ji={none:zi("none"),xs:zi("xs"),sm:zi("sm"),md:zi("md"),lg:zi("lg"),full:zi("full")},Bi={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ti=e=>t=>{var r;const n=t.theme,i=ei(Bi,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Kn(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Ii={"spacing-0":Ti("spacing-0"),"spacing-4":Ti("spacing-4"),"spacing-8":Ti("spacing-8"),"spacing-12":Ti("spacing-12"),"spacing-16":Ti("spacing-16"),"spacing-20":Ti("spacing-20"),"spacing-24":Ti("spacing-24"),"spacing-32":Ti("spacing-32"),"spacing-40":Ti("spacing-40"),"spacing-48":Ti("spacing-48"),"spacing-64":Ti("spacing-64"),"spacing-72":Ti("spacing-72"),"layout-xs":Ti("layout-xs"),"layout-sm":Ti("layout-sm"),"layout-md":Ti("layout-md"),"layout-lg":Ti("layout-lg"),"layout-xl":Ti("layout-xl"),"layout-xxl":Ti("layout-xxl"),"layout-xxxl":Ti("layout-xxxl")},Pi=Object.assign(Object.assign({},ui),{Primitive:ai}),Ri=Object.assign(Object.assign({},_i),{Spec:Fi}),Li=Mi,Wi=Object.assign(Object.assign({},ni),{Util:pi}),Yi=Ii,Hi=ji,Ni=yi,Vi=xi,qi=C.div`
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
`,Qi=C.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Pi["overlay-subtle"]:Pi["overlay-strong"]};
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
`;var Ui;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ui||(Ui={}));const Zi=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:o,backgroundBlur:s=!0,disableTransition:a=!1,enableOverlayClick:l=!1,zIndex:d,id:c})=>{const[m,p]=g(null),[f,b]=g(),[v]=g((()=>Be.generate())),x=S(),w=h(),$=h(null),F=i&&u.cloneElement(i,{ref:$}),C=c?`lifesg-ds-overlay-root-${c}`:"lifesg-ds-overlay-root",E=null!=d?d:f?99999:99998;(e=>{const t=_();y((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Ui.Change,r)}),[t,e]),y((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Ui.Change,r)};return null==t||t.events.on(Ui.Ready,r),()=>null==t?void 0:t.events.off(Ui.Ready,r)}),[t,e])})(E),y((()=>(A(),p(D()),()=>{T(),j().length<1&&z("remove")})),[]),y((()=>{if(t){const e=O();k(e),B();const t=setTimeout((()=>{z("add")}),200);return()=>clearTimeout(t)}{T();const e=setTimeout((()=>{j().length<1&&z("remove")}),200);return()=>clearTimeout(e)}}),[t]);const k=e=>{w.current=e,b(e)},D=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>j().length>0,A=()=>{if(!document.getElementById(Gi)){const e=document.createElement("style");e.id=Gi;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Ji} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Ji}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},z=e=>{const t=document.body.classList.contains(Ji);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Ji):document.body.classList.add(Ji)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},B=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},T=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},I=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&l&&(e.preventDefault(),n())};return m?N.createPortal(e(qi,{id:C,"data-testid":C,$show:t,$zIndex:E,children:i&&e(M,{id:x,children:e(Qi,{"data-testid":"overlay-wrapper",$show:t,$stacked:f,$backgroundBlur:s,$disableTransition:a,onClick:I,children:F})})}),m):null},Xi=t=>e(O,{children:e(Zi,Object.assign({},t))}),Gi="lifesg-ds-overlay-stylesheet",Ji="lifesg-ds-overlay-open",Ki=u.createContext({mode:"default",rootNode:{current:null}}),eo=C.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,to=k`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ro=C.div`
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
    animation: ${to} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,no=C(ro)`
    animation-delay: -0.45s;
`,io=C(ro)`
    animation-delay: -0.3s;
`,oo=C(ro)`
    animation-delay: -0.15s;
`,so=({color:r,className:n,size:i})=>t(eo,{className:n,$size:i,$color:r,"data-testid":"component-loading-spinner",children:[e(ro,{id:"inner1"}),e(no,{id:"inner2"}),e(io,{id:"inner3"}),e(oo,{id:"inner4"})]}),ao=C.button`
    padding: ${Yi["spacing-8"]} ${Yi["spacing-16"]};
    min-width: 4rem;
    border: ${Wi["width-010"]} ${Wi.solid} transparent;
    border-radius: ${Hi.sm};
    transition: all ${Li["duration-250"]} ${Li["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return E`
                    background-color: ${Pi.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Pi["border-error-strong"]:Pi["border-primary"]};

                    color: ${e.$buttonIsDanger?Pi["text-error"]:Pi["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Pi["bg-hover-neutral"]};
                    }
                `;case"light":return E`
                    background-color: ${Pi.bg};
                    border-color: ${Pi.border};

                    color: ${e.$buttonIsDanger?Pi["text-error"]:Pi["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Pi["bg-hover-neutral"]};
                    }
                `;case"link":return E`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Pi["text-error"]:Pi["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Pi["bg-hover-neutral"]};
                    }
                `;case"disabled":return E`
                    background-color: ${Pi["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Pi["text-disabled"]};
                `;default:return E`
                    background-color: ${e.$buttonIsDanger?Pi["bg-error-strong"]:Pi["bg-primary"]};

                    ${Vi.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Pi["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Pi["bg-error-strong-hover"]:Pi["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return E`
                    height: 2.5rem;
                    ${Ri["body-md-semibold"]}

                    ${Vi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return E`
                    height: 4rem;
                    ${Ri["heading-md-semibold"]}

                    ${Vi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return E`
                    height: 3rem;
                    ${Ri["heading-xs-semibold"]}

                    ${Vi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,lo=C(so)`
    margin-right: 0.5rem;
`,co=(r,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=le(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(ao,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(lo,{}),e("span",{children:i})]}))};co.displayName="Button.Default";const uo=(r,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=le(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(ao,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(lo,{}),e("span",{children:i})]}))};uo.displayName="Button.Small";const ho=(r,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=le(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(ao,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(lo,{}),e("span",{children:i})]}))};ho.displayName="Button.Large";const go={Default:u.forwardRef(co),Small:u.forwardRef(uo),Large:u.forwardRef(ho)},mo=k`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,po=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>E`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,fo=E`
    animation: ${Li["duration-150"]} ${Li["ease-default"]} ${mo};
    width: 100%;
    height: 100%;
    transition: color ${Li["duration-150"]} ${Li["ease-default"]};
`,bo=C(n)`
    ${fo}
    color: ${Pi["icon-primary-subtlest"]};
`,yo=C(i)`
    ${fo}
    color: ${Pi["icon-disabled-subtle"]};
`,vo=C(o)`
    ${fo}
    color: ${e=>e.$disabled?Pi["icon-disabled-subtle"](e):Pi["icon-selected"](e)};
`,xo=C(s)`
    ${fo}
    color: ${e=>e.$disabled?Pi["icon-disabled-subtle"](e):Pi["icon-selected"](e)};
`,wo=C.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${bo},
        &:hover
        + ${vo},
        &:hover
        + ${xo} {
        color: ${e=>!e.disabled&&Pi["icon-hover"](e)};
    }
`,$o=e=>{const{textSize:t}=e||{};return E`
        // Text styling
        ${t&&Ri[`${t}-regular`]}

        strong {
            font-weight: ${Ri.Spec["weight-semibold"]};
            ${t&&Ri[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Ri.Spec["weight-semibold"]};
            ${t&&Ri[`${t}-semibold`]}
            color: ${Pi.hyperlink};
            text-decoration: none;

            svg {
                color: ${Pi["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Pi["hyperlink-hover"]};

                svg {
                    color: ${Pi["icon-hover"]};
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
    `},Fo=(e,t,r=!1)=>E`
        ${Ri[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Co=e=>{if(e)return E`
            ${t=e,E`
    display: -webkit-box;
    -webkit-line-clamp: ${t};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var t},Eo=(e,t)=>E`
    ${Fo(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?E`
            display: block;
            ${Co(r)}
        `:e?E`
            display: inline;
        `:E`
            display: block;
            ${Co(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${Pi.text};
`;var ko;!function(r){const n=(e,t,r)=>{const n=C(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Eo(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,t)=>{const r=C.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Eo(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const o=(r,n)=>{const i=C.a`
            ${e=>E`
                ${Fo(r,e.weight||"regular")}
                color: ${Pi.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Pi["text-hover"]};
                }
            `}
        `,o=r=>{var{external:n=!1,children:o}=r,s=le(r,["external","children"]);return t(i,Object.assign({},s,{children:[o,n&&e(Do,{})]}))};return o.displayName=`Typography.${n}`,o};r.LinkBL=o("body-baseline","LinkBL"),r.LinkMD=o("body-md","LinkMD"),r.LinkSM=o("body-sm","LinkSM"),r.LinkXS=o("body-xs","LinkXS")}(ko||(ko={}));const Do=C(ee)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,_o=C.div`
    padding: ${Yi["spacing-8"]} ${Yi["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Pi["bg-error"](e),r=Pi["border-error"](e);break;case"success":t=Pi["bg-success"](e),r=Pi["border-success"](e);break;case"warning":default:t=Pi["bg-warning"](e),r=Pi["border-warning"](e);break;case"info":t=Pi["bg-info"](e),r=Pi["border-info"](e);break;case"description":t=Pi["bg-strong"](e),r=Pi["border-strong"](e)}return E`
            background: ${t};
            border-left: ${Wi["width-020"]} ${Wi.solid}
                ${r};
        `}}

    color: ${Pi.text};
    ${e=>"small"===e.$sizeType?$o({textSize:"body-sm"}):$o({textSize:"body-md"})}
`,Oo=C.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Yi["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Pi["icon-error"](e);break;case"success":t=Pi["icon-success"](e);break;case"warning":default:t=Pi["icon-warning"](e);break;case"info":t=Pi["icon-info"](e);break;case"description":t=Pi["icon-subtle"](e)}return E`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,So=C(ko.LinkSM)`
    ${e=>"small"===e.$sizeType?E`
                ${Ri["body-sm-semibold"]}
                margin-top: ${Yi["spacing-4"]};
            `:E`
                ${Ri["body-md-semibold"]}
                margin-top: ${Yi["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Yi["spacing-4"]};
    }
`,Mo=C.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Ao=C.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return E`
                margin-bottom: ${Yi["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,zo=C.button`
    ${e=>"small"===e.$sizeType?E`
                ${Ri["body-sm-semibold"]}
            `:E`
                ${Ri["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Yi["spacing-4"]};
    margin-top: ${Yi["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Pi["text-primary"]};
`,jo=C(a)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Li["duration-350"]} ${Li["ease-standard"]};
`,Bo=C.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?E`
                    color: ${Pi["icon-selected-disabled"]};
                `:E`
                    color: ${Pi["icon-disabled-subtle"]};
                `:e.$active?E`
                color: ${Pi["icon-selected"]};
            `:E`
            color: ${Pi["icon-subtle"]};
        `};
`,To=E`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Ri.Spec["weight-regular"]};
        ${e=>e.$size&&Ri[`${e.$size}-regular`]}
        color: ${Pi.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,Io=C.ol`
    ${To}

    margin-left: 3rem;

    ${Vi.MaxWidth.lg} {
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
`,Po=C.ul`
    ${To}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Ro=t=>{var{size:r,bulletType:n,bottomMargin:i,children:o}=t,s=le(t,["size","bulletType","bottomMargin","children"]);return e(Po,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},s,{children:o}))};Ro.displayName="TextList.Ul";const Lo=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:o,children:s}=t,a=le(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(Io,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:o},a,{children:s}))};Lo.displayName="TextList.Ol";const Wo=Ro,Yo=C.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Pi.bg};

    ${e=>{if(!e.$indicator)return E`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return E`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?E`
                            border-color: ${Pi["border-error"]};
                        `:E`
                            border-color: ${Pi["border-error"]};

                            &:has(${Qo}:hover) {
                                background: ${Pi["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?E`
                            border: none;
                            background: ${Pi["bg-selected-disabled"]};
                        `:E`
                            border: none;
                        `:e.$selected?E`
                        border: none;
                        background: ${Pi["bg-selected"]};

                        &:has(${Qo}:hover) {
                            background: ${Pi["bg-selected-hover"]};

                            & ${No} {
                                color: ${Pi["text-selected-hover"]};
                            }

                            & ${rs} {
                                color: ${Pi["icon-selected-hover"]};
                            }
                        }
                    `:E`
                    border: none;

                    &:has(${Qo}:hover) {
                        background: ${Pi["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?E`
                            border-color: ${Pi["border-error"]};
                        `:E`
                            border-color: ${Pi["border-error"]};

                            &:has(${Qo}:hover) {
                                background: ${Pi["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?E`
                            border-color: ${Pi["border-selected-disabled"]};
                            background: ${Pi["bg-selected-disabled"]};
                        `:E`
                            border-color: ${Pi["border-disabled"]};
                            background: ${Pi["bg-disabled"]};
                        `:e.$selected?E`
                        border-color: ${Pi["border-selected"]};
                        background: ${Pi["bg-selected"]};

                        &:has(${Qo}:hover) {
                            background: ${Pi["bg-selected-hover"]};

                            & ${No} {
                                color: ${Pi["text-selected-hover"]};
                            }

                            & ${rs} {
                                color: ${Pi["icon-selected-hover"]};
                            }
                        }
                    `:E`
                    border-color: ${Pi.border};

                    &:has(${Qo}:hover) {
                        background: ${Pi["bg-hover-subtle"]};
                    }
                `}
`,Ho=C.input`
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
`,No=C.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?E`
                    color: ${Pi["text-selected-disabled"]};
                `:E`
                    color: ${Pi["text-disabled"]};
                `:e.$selected?E`
                color: ${Pi["text-selected"]};
            `:E`
            color: ${Pi.text};
        `}
`,Vo=C.label`
    ${Ri["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Vi.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Vi.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,qo=C.div`
    ${Ri["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Ri["body-md-semibold"]}
    }
`,Qo=C.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Uo=C.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Zo=C.button`
    color: ${e=>e.$disabled?Pi["text-disabled"]:Pi["text-error"]};
    white-space: nowrap;
    ${Ri["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Xo=C.button`
    color: ${e=>e.disabled?Pi["text-disabled"]:Pi["text-primary"]};
    ${Ri["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Pi.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Go=C.div`
    width: 100%;
    color: ${e=>e.$disabled?Pi["text-disabled"]:Pi["text-error"]};
    border: none;
    background: ${Pi.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Jo=C((r=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:a,sizeType:l="default",showIcon:d=!1,customIcon:c,maxCollapsedHeight:u}=r,h=le(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[m,p]=g(!1),[f,b]=g(!1),{height:v,ref:x}=Mt();y((()=>{w()}),[u,v]);const w=()=>{p(!u),b($())},$=()=>!(!v||!u)&&v>u;return t(_o,{className:i,$type:n,$sizeType:l,"data-testid":h["data-testid"],children:[d&&e(Oo,{$sizeType:l,$type:n,children:(()=>{if(n&&c)return c;switch(n){case"success":return e(K,{});case"warning":return e(G,{});case"error":return e(X,{});case"info":case"description":return e(J,{});default:return null}})()}),t(Mo,{children:[t(Ao,{$maxCollapsedHeight:$()?u:void 0,$showMore:m,$hasActionLink:!!s,children:[e("div",{ref:x,children:o}),s?t(So,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},s,{children:[s.children,a||e(Z,{})]})):null]}),f&&t(zo,{$sizeType:l,$type:n,type:"button",onClick:()=>p(!m),children:["Show ",m?"less":"more",e(jo,{$expanded:m})]})]})]})}))`
    width: 100%;
    user-select: none;
`,Ko=C.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Pi.bg};
    ${$o({textSize:"body-md"})}

    ${e=>e.$disabled?E`
                color: ${Pi["text-disabled"]};
            `:e.$selected?E`
                color: ${Pi["text-selected"]};
            `:E`
                color: ${Pi.text};
            `}
`,es=C(ko.BodyMD)`
    color: ${e=>e.$disabled?Pi["text-disabled"]:Pi["text-error"]};
`,ts=C(Wo)`
    color: ${e=>e.$disabled?Pi["text-disabled"]:Pi["text-error"]};
`,rs=C((({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=e(r?oe:ie,{});break;case"radio":o=e(r?re:te,{});break;case"tick":o=e(se,{});break;case"cross":o=e(ne,{});break;default:o=null}return e(Bo,{className:i,$active:r,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?E`
                    color: ${Pi["icon-selected-disabled"]};
                `:E`
                    color: ${Pi["icon-disabled-subtle"]};
                `:e.$selected?E`
                color: ${Pi["icon-selected"]};
            `:E`
            color: ${Pi["icon-subtle"]};
        `};
`;var ns=ce((function(e){return null==e})),is=Object.defineProperty,os={};((e,t)=>{for(var r in t)is(e,r,{get:t[r],enumerable:!0})})(os,{assign:()=>Ps,colors:()=>Bs,createStringInterpolator:()=>Ms,skipAnimation:()=>Ts,to:()=>As,willAdvance:()=>Is});var ss=$s(),as=e=>ys(e,ss),ls=$s();as.write=e=>ys(e,ls);var ds=$s();as.onStart=e=>ys(e,ds);var cs=$s();as.onFrame=e=>ys(e,cs);var us=$s();as.onFinish=e=>ys(e,us);var hs=[];as.setTimeout=(e,t)=>{const r=as.now()+t,n=()=>{const e=hs.findIndex((e=>e.cancel==n));~e&&hs.splice(e,1),fs-=~e?1:0},i={time:r,handler:e,cancel:n};return hs.splice(gs(r),0,i),fs+=1,vs(),i};var gs=e=>~(~hs.findIndex((t=>t.time>e))||~hs.length);as.cancel=e=>{ds.delete(e),cs.delete(e),us.delete(e),ss.delete(e),ls.delete(e)},as.sync=e=>{bs=!0,as.batchedUpdates(e),bs=!1},as.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,as.onStart(r)}return n.handler=e,n.cancel=()=>{ds.delete(r),t=null},n};var ms="undefined"!=typeof window?window.requestAnimationFrame:()=>{};as.use=e=>ms=e,as.now="undefined"!=typeof performance?()=>performance.now():Date.now,as.batchedUpdates=e=>e(),as.catch=console.error,as.frameLoop="always",as.advance=()=>{"demand"!==as.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ws()};var ps=-1,fs=0,bs=!1;function ys(e,t){bs?(t.delete(e),e(0)):(t.add(e),vs())}function vs(){ps<0&&(ps=0,"demand"!==as.frameLoop&&ms(xs))}function xs(){~ps&&(ms(xs),as.batchedUpdates(ws))}function ws(){const e=ps;ps=as.now();const t=gs(ps);t&&(Fs(hs.splice(0,t),(e=>e.handler())),fs-=t),fs?(ds.flush(),ss.flush(e?Math.min(64,ps-e):16.667),cs.flush(),ls.flush(),us.flush()):ps=-1}function $s(){let e=new Set,t=e;return{add(r){fs+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(fs-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,fs-=t.size,Fs(t,(t=>t(r)&&e.add(t))),fs+=e.size,t=e)}}}function Fs(e,t){e.forEach((e=>{try{t(e)}catch(e){as.catch(e)}}))}function Cs(){}var Es={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function ks(e,t){if(Es.arr(e)){if(!Es.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Ds=(e,t)=>e.forEach(t);function _s(e,t,r){if(Es.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Os=e=>Es.und(e)?[]:Es.arr(e)?e:[e];function Ss(e,t){if(e.size){const r=Array.from(e);e.clear(),Ds(r,t)}}var Ms,As,zs=(e,...t)=>Ss(e,(e=>e(...t))),js=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Bs=null,Ts=!1,Is=Cs,Ps=e=>{e.to&&(As=e.to),e.now&&(as.now=e.now),void 0!==e.colors&&(Bs=e.colors),null!=e.skipAnimation&&(Ts=e.skipAnimation),e.createStringInterpolator&&(Ms=e.createStringInterpolator),e.requestAnimationFrame&&as.use(e.requestAnimationFrame),e.batchedUpdates&&(as.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Is=e.willAdvance),e.frameLoop&&(as.frameLoop=e.frameLoop)},Rs=new Set,Ls=[],Ws=[],Ys=0,Hs={get idle(){return!Rs.size&&!Ls.length},start(e){Ys>e.priority?(Rs.add(e),as.onStart(Ns)):(Vs(e),as(Qs))},advance:Qs,sort(e){if(Ys)as.onFrame((()=>Hs.sort(e)));else{const t=Ls.indexOf(e);~t&&(Ls.splice(t,1),qs(e))}},clear(){Ls=[],Rs.clear()}};function Ns(){Rs.forEach(Vs),Rs.clear(),as(Qs)}function Vs(e){Ls.includes(e)||qs(e)}function qs(e){Ls.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Ls,(t=>t.priority>e.priority)),0,e)}function Qs(e){const t=Ws;for(let r=0;r<Ls.length;r++){const n=Ls[r];Ys=n.priority,n.idle||(Is(n),n.advance(e),n.idle||t.push(n))}return Ys=0,(Ws=Ls).length=0,(Ls=t).length>0}var Us="[-+]?\\d*\\.?\\d+",Zs=Us+"%";function Xs(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Gs=new RegExp("rgb"+Xs(Us,Us,Us)),Js=new RegExp("rgba"+Xs(Us,Us,Us,Us)),Ks=new RegExp("hsl"+Xs(Us,Zs,Zs)),ea=new RegExp("hsla"+Xs(Us,Zs,Zs,Us)),ta=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ra=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,na=/^#([0-9a-fA-F]{6})$/,ia=/^#([0-9a-fA-F]{8})$/;function oa(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function sa(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=oa(i,n,e+1/3),s=oa(i,n,e),a=oa(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function aa(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function la(e){return(parseFloat(e)%360+360)%360/360}function da(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ca(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ua(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=na.exec(e))?parseInt(t[1]+"ff",16)>>>0:Bs&&void 0!==Bs[e]?Bs[e]:(t=Gs.exec(e))?(aa(t[1])<<24|aa(t[2])<<16|aa(t[3])<<8|255)>>>0:(t=Js.exec(e))?(aa(t[1])<<24|aa(t[2])<<16|aa(t[3])<<8|da(t[4]))>>>0:(t=ta.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ia.exec(e))?parseInt(t[1],16)>>>0:(t=ra.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Ks.exec(e))?(255|sa(la(t[1]),ca(t[2]),ca(t[3])))>>>0:(t=ea.exec(e))?(sa(la(t[1]),ca(t[2]),ca(t[3]))|da(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ha=(e,t,r)=>{if(Es.fun(e))return e;if(Es.arr(e))return ha({range:e,output:t,extrapolate:r});if(Es.str(e.output[0]))return Ms(e);const n=e,i=n.output,o=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,s,a,l){let d=l?l(e):e;if(d<t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(d>r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[t],o[t+1],i[t],i[t+1],l,s,a,n.map)}};var ga=1.70158,ma=1.525*ga,pa=ga+1,fa=2*Math.PI/3,ba=2*Math.PI/4.5,ya=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},va={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>pa*e*e*e-ga*e*e,easeOutBack:e=>1+pa*Math.pow(e-1,3)+ga*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ma)/2:(Math.pow(2*e-2,2)*((ma+1)*(2*e-2)+ma)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*fa),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*fa)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ba)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ba)/2+1,easeInBounce:e=>1-ya(1-e),easeOutBounce:ya,easeInOutBounce:e=>e<.5?(1-ya(1-2*e))/2:(1+ya(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,s=1,a=i/e,Math.min(Math.max(a,o),s);var o,s,a}},xa=Symbol.for("FluidValue.get"),wa=Symbol.for("FluidValue.observers"),$a=e=>Boolean(e&&e[xa]),Fa=e=>e&&e[xa]?e[xa]():e,Ca=e=>e[wa]||null;function Ea(e,t){const r=e[wa];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var ka=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Da(this,e)}},Da=(e,t)=>Ma(e,xa,t);function _a(e,t){if(e[xa]){let r=e[wa];r||Ma(e,wa,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Oa(e,t){const r=e[wa];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[wa]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Sa,Ma=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Aa=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,za=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ja=new RegExp(`(${Aa.source})(%|[a-z]+)`,"i"),Ba=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ta=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ia=e=>{const[t,r]=Pa(e);if(!t||js())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Ta.test(r)?Ia(r):r||e},Pa=e=>{const t=Ta.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Ra=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,La=e=>{Sa||(Sa=Bs?new RegExp(`(${Object.keys(Bs).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Fa(e).replace(Ta,Ia).replace(za,ua).replace(Sa,ua))),r=t.map((e=>e.match(Aa).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ha({...e,output:t})));return e=>{const r=!ja.test(t[0])&&t.find((e=>ja.test(e)))?.replace(Aa,"");let i=0;return t[0].replace(Aa,(()=>`${n[i++](e)}${r||""}`)).replace(Ba,Ra)}},Wa="react-spring: ",Ya=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Wa}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Ha=Ya(console.warn);var Na=Ya(console.warn);function Va(e){return Es.str(e)&&("#"==e[0]||/\d/.test(e)||!js()&&Ta.test(e)||e in(Bs||{}))}var qa=js()?y:v,Qa=()=>{const e=h(!1);return qa((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ua(){const e=g()[1],t=Qa();return()=>{t.current&&e(Math.random())}}var Za=e=>y(e,Xa),Xa=[];function Ga(e){const t=h();return y((()=>{t.current=e})),t.current}var Ja=Symbol.for("Animated:node"),Ka=e=>e&&e[Ja],el=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,Ja,t),tl=e=>e&&e[Ja]&&e[Ja].getPayload(),rl=class{constructor(){el(this,this)}getPayload(){return this.payload||[]}},nl=class extends rl{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Es.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new nl(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Es.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Es.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},il=class extends nl{constructor(e){super(0),this._string=null,this._toString=ha({output:[e,e]})}static create(e){return new il(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Es.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ha({output:[this.getValue(),e]})),this._value=0,super.reset()}},ol={dependencies:null},sl=class extends rl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return _s(this.source,((r,n)=>{var i;(i=r)&&i[Ja]===i?t[n]=r.getValue(e):$a(r)?t[n]=Fa(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ds(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return _s(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ol.dependencies&&$a(e)&&ol.dependencies.add(e);const t=tl(e);t&&Ds(t,(e=>this.add(e)))}},al=class extends sl{constructor(e){super(e)}static create(e){return new al(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(ll)),!0)}};function ll(e){return(Va(e)?il:nl).create(e)}function dl(e){const t=Ka(e);return t?t.constructor:Es.arr(e)?al:Va(e)?il:nl}var cl=(e,t)=>{const r=!Es.fun(e)||e.prototype&&e.prototype.isReactComponent;return w(((n,i)=>{const o=h(null),s=r&&$((e=>{o.current=function(e,t){e&&(Es.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[a,l]=function(e,t){const r=new Set;ol.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new sl(e),ol.dependencies=null,[e,r]}(n,t),d=Ua(),u=()=>{const e=o.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,a.getValue(!0)))&&d()},g=new ul(u,l),m=h();qa((()=>(m.current=g,Ds(l,(e=>_a(e,g))),()=>{m.current&&(Ds(m.current.deps,(e=>Oa(e,m.current))),as.cancel(m.current.update))}))),y(u,[]),Za((()=>()=>{const e=m.current;Ds(e.deps,(t=>Oa(t,e)))}));const p=t.getComponentProps(a.getValue());return c.createElement(e,{...p,ref:s})}))},ul=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&as.write(this.update)}};var hl=Symbol.for("AnimatedComponent"),gl=e=>Es.str(e)?e:e&&Es.str(e.displayName)?e.displayName:Es.fun(e)&&e.name||null;function ml(e,...t){return Es.fun(e)?e(...t):e}var pl=(e,t)=>!0===e||!!(t&&e&&(Es.fun(e)?e(t):Os(e).includes(t))),fl=(e,t)=>Es.obj(e)?t&&e[t]:e,bl=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,yl=e=>e,vl=(e,t=yl)=>{let r=xl;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Es.und(r)||(n[i]=r)}return n},xl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],wl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function $l(e){const t=function(e){const t={};let r=0;if(_s(e,((e,n)=>{wl[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return _s(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Fl(e){return e=Fa(e),Es.arr(e)?e.map(Fl):Va(e)?os.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Cl(e){return Es.fun(e)||Es.arr(e)&&Es.obj(e[0])}var El={tension:170,friction:26,mass:1,damping:1,easing:va.linear,clamp:!1},kl=class{constructor(){this.velocity=0,Object.assign(this,El)}};function Dl(e,t){if(Es.und(t.decay)){const r=!Es.und(t.tension)||!Es.und(t.friction);!r&&Es.und(t.frequency)&&Es.und(t.damping)&&Es.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var _l=[],Ol=class{constructor(){this.changed=!1,this.values=_l,this.toValues=null,this.fromValues=_l,this.config=new kl,this.immediate=!1}};function Sl(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((s,a)=>{let l,d,c=pl(r.cancel??n?.cancel,t);if(c)g();else{Es.und(r.pause)||(i.paused=pl(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||pl(e,t)),l=ml(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-as.now()}function h(){l>0&&!os.skipAnimation?(i.delayed=!0,d=as.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(d)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...r,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var Ml=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?jl(e.get()):t.every((e=>e.noop))?Al(e.get()):zl(e.get(),t.every((e=>e.finished))),Al=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),zl=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),jl=e=>({value:e,cancelled:!0,finished:!1});function Bl(e,t,r,n){const{callId:i,parentId:o,onRest:s}=t,{asyncTo:a,promise:l}=r;return o||e!==a||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const d=vl(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),g=e=>{const t=i<=(r.cancelId||0)&&jl(n)||i!==r.asyncId&&zl(n,!1);if(t)throw e.result=t,u(e),e},m=(e,t)=>{const o=new Il,s=new Pl;return(async()=>{if(os.skipAnimation)throw Tl(r),s.result=zl(n,!1),u(s),s;g(o);const a=Es.obj(e)?{...e}:{...t,to:e};a.parentId=i,_s(d,((e,t)=>{Es.und(a[t])&&(a[t]=e)}));const l=await n.start(a);return g(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let p;if(os.skipAnimation)return Tl(r),zl(n,!1);try{let t;t=Es.arr(e)?(async e=>{for(const t of e)await m(t)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([t.then(c),h]),p=zl(n.get(),!0,!1)}catch(e){if(e instanceof Il)p=e.result;else{if(!(e instanceof Pl))throw e;p=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?a:void 0,r.promise=o?l:void 0)}return Es.fun(s)&&as.batchedUpdates((()=>{s(p,n,n.item)})),p})():l}function Tl(e,t){Ss(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Il=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Pl=class extends Error{constructor(){super("SkipAnimationSignal")}},Rl=e=>e instanceof Wl,Ll=1,Wl=class extends ka{constructor(){super(...arguments),this.id=Ll++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Ka(this);return e&&e.getValue()}to(...e){return os.to(this,e)}interpolate(...e){return Ha(`${Wa}The "interpolate" function is deprecated in v9 (use "to" instead)`),os.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ea(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Hs.sort(this),Ea(this,{type:"priority",parent:this,priority:e})}},Yl=Symbol.for("SpringPhase"),Hl=e=>(1&e[Yl])>0,Nl=e=>(2&e[Yl])>0,Vl=e=>(4&e[Yl])>0,ql=(e,t)=>t?e[Yl]|=3:e[Yl]&=-3,Ql=(e,t)=>t?e[Yl]|=4:e[Yl]&=-5,Ul=class extends Wl{constructor(e,t){if(super(),this.animation=new Ol,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Es.und(e)||!Es.und(t)){const r=Es.obj(e)?{...e}:{...t,from:e};Es.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Nl(this)||this._state.asyncTo)||Vl(this)}get goal(){return Fa(this.animation.to)}get velocity(){const e=Ka(this);return e instanceof nl?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Hl(this)}get isAnimating(){return Nl(this)}get isPaused(){return Vl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,s=tl(n.to);!s&&$a(n.to)&&(i=Os(Fa(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==il?1:s?s[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,o.tension<=0)return void(a.done=!0);let t=a.elapsedTime+=e;const r=n.fromValues[l],i=null!=a.v0?a.v0:a.v0=Es.arr(o.velocity)?o.velocity[l]:o.velocity;let s;const h=o.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(Es.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=i*n}else{s=null==a.lastVelocity?i:a.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Es.und(n),g=r==d?a.v0>0:r<d;let m,p=!1;const f=1,b=Math.ceil(e/f);for(let e=0;e<b&&(m=Math.abs(s)>t,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(p=u==d||u>d==g,p&&(s=-s*n,u=d));s+=(1e-6*-o.tension*(u-d)+.001*-o.friction*s)/o.mass*f,u+=s*f}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,a.durationProgress>0&&(a.elapsedTime=o.duration*a.durationProgress,t=a.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=r+o.easing(n)*(d-r),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:t=!1,a.setValue(u,o.round)&&(r=!0)}));const a=Ka(this),l=a.getValue();if(t){const e=Fa(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return as.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Nl(this)){const{to:e,config:t}=this.animation;as.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Es.und(e)?(r=this.queue||[],this.queue=[]):r=[Es.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Ml(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Tl(this._state,e&&this._lastCallId),as.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Es.obj(r)?r[t]:r,(null==r||Cl(r))&&(r=void 0),n=Es.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return Hl(this)||(e.reverse&&([r,n]=[n,r]),n=Fa(n),Es.und(n)?Ka(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,vl(e,((e,t)=>/^on/.test(t)?fl(e,r):e))),td(this,e,"onProps"),rd(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Sl(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{Vl(this)||(Ql(this,!0),zs(o.pauseQueue),rd(this,"onPause",zl(this,Zl(this,this.animation.to)),this))},resume:()=>{Vl(this)&&(Ql(this,!1),Nl(this)&&this._resume(),zs(o.resumeQueue),rd(this,"onResume",zl(this,Zl(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Xl(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(jl(this));const n=!Es.und(e.to),i=!Es.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(jl(this));this._lastToId=t.callId}const{key:o,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!i||n||t.default&&!Es.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!ks(u,d);h&&(a.from=u),u=Fa(u);const g=!ks(c,l);g&&this._focus(c);const m=Cl(t.to),{config:p}=a,{decay:f,velocity:b}=p;(n||i)&&(p.velocity=0),t.config&&!m&&function(e,t,r){r&&(Dl(r={...r},t),t={...r,...t}),Dl(e,t),Object.assign(e,t);for(const t in El)null==e[t]&&(e[t]=El[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;Es.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(p,ml(t.config,o),t.config!==s.config?ml(s.config,o):void 0);let y=Ka(this);if(!y||Es.und(c))return r(zl(this,!0));const v=Es.und(t.reset)?i&&!t.default:!Es.und(u)&&pl(t.reset,o),x=v?u:this.get(),w=Fl(c),$=Es.num(w)||Es.arr(w)||Va(w),F=!m&&(!$||pl(s.immediate||t.immediate,o));if(g){const e=dl(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=$a(c),k=!1;if(!E){const e=v||!Hl(this)&&h;(g||e)&&(k=ks(Fl(x),w),E=!k),(ks(a.immediate,F)||F)&&ks(p.decay,f)&&ks(p.velocity,b)||(E=!0)}if(k&&Nl(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!m&&((E||$a(l))&&(a.values=y.getPayload(),a.toValues=$a(c)?null:C==il?[1]:Os(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=a;Ds(ed,(e=>td(this,t,e)));const n=zl(this,Zl(this,l));zs(this._pendingCalls,n),this._pendingCalls.add(r),a.changed&&as.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?ml(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),m?r(Bl(t.to,t,this._state,this)):E?this._start():Nl(this)&&!g?this._pendingCalls.add(r):r(Al(x))}_focus(e){const t=this.animation;e!==t.to&&(Ca(this)&&this._detach(),t.to=e,Ca(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;$a(t)&&(_a(t,this),Rl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;$a(e)&&Oa(e,this)}_set(e,t=!0){const r=Fa(e);if(!Es.und(r)){const e=Ka(this);if(!e||!ks(r,e.getValue())){const n=dl(r);e&&e.constructor==n?e.setValue(r):el(this,n.create(r)),e&&as.batchedUpdates((()=>{this._onChange(r,t)}))}}return Ka(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,rd(this,"onStart",zl(this,Zl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ml(this.animation.onChange,e,this)),ml(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Ka(this).reset(Fa(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Nl(this)||(ql(this,!0),Vl(this)||this._resume())}_resume(){os.skipAnimation?this.finish():Hs.start(this)}_stop(e,t){if(Nl(this)){ql(this,!1);const r=this.animation;Ds(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Ea(this,{type:"idle",parent:this});const n=t?jl(this.get()):zl(this.get(),Zl(this,e??r.to));zs(this._pendingCalls,n),r.changed&&(r.changed=!1,rd(this,"onRest",n,this))}}};function Zl(e,t){const r=Fl(t);return ks(Fl(e.get()),r)}function Xl(e,t=e.loop,r=e.to){const n=ml(t);if(n){const i=!0!==n&&$l(n),o=(i||e).reverse,s=!i||i.reset;return Gl({...e,loop:t,default:!1,pause:void 0,to:!o||Cl(r)?r:void 0,from:s?e.from:void 0,reset:s,...i})}}function Gl(e){const{to:t,from:r}=e=$l(e),n=new Set;return Es.obj(t)&&Kl(t,n),Es.obj(r)&&Kl(r,n),e.keys=n.size?Array.from(n):null,e}function Jl(e){const t=Gl(e);return Es.und(t.default)&&(t.default=vl(t)),t}function Kl(e,t){_s(e,((e,r)=>null!=e&&t.add(r)))}var ed=["onStart","onRest","onChange","onPause","onResume"];function td(e,t,r){e.animation[r]=t[r]!==bl(t,r)?fl(t[r],e.key):void 0}function rd(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var nd=["onStart","onChange","onRest"],id=1,od=class{constructor(e,t){this.id=id++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Es.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Gl(e)),this}start(e){let{queue:t}=this;return e?t=Os(e).map(Gl):this.queue=[],this._flush?this._flush(this,t):(hd(this,t),sd(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Ds(Os(t),(t=>r[t].stop(!!e)))}else Tl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Es.und(e))this.start({pause:!0});else{const t=this.springs;Ds(Os(e),(e=>t[e].pause()))}return this}resume(e){if(Es.und(e))this.start({pause:!1});else{const t=this.springs;Ds(Os(e),(e=>t[e].resume()))}return this}each(e){_s(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Ss(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,s=i||o&&r.size?this.get():null;i&&t.size&&Ss(t,(([e,t])=>{t.value=s,e(t,this,this._item)})),o&&(this._started=!1,Ss(r,(([e,t])=>{t.value=s,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}as.onFrame(this._onFrame)}};function sd(e,t){return Promise.all(t.map((t=>ad(e,t)))).then((t=>Ml(e,t)))}async function ad(e,t,r){const{keys:n,to:i,from:o,loop:s,onRest:a,onResolve:l}=t,d=Es.obj(t.default)&&t.default;s&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=Es.arr(i)||Es.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):Ds(nd,(r=>{const n=t[r];if(Es.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,zs(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===bl(t,"cancel");(c||g&&u.asyncId)&&h.push(Sl(++e._lastAsyncId,{props:t,state:u,actions:{pause:Cs,resume:Cs,start(t,r){g?(Tl(u,e._lastAsyncId),r(jl(e))):(t.onRest=a,r(Bl(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=Ml(e,await Promise.all(h));if(s&&m.finished&&(!r||!m.noop)){const r=Xl(t,s,i);if(r)return hd(e,[r]),ad(e,r,!0)}return l&&as.batchedUpdates((()=>l(m,e,e.item))),m}function ld(e,t){const r={...e.springs};return t&&Ds(Os(t),(e=>{Es.und(e.keys)&&(e=Gl(e)),Es.obj(e.to)||(e={...e,to:void 0}),ud(r,e,(e=>cd(e)))})),dd(e,r),r}function dd(e,t){_s(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,_a(t,e))}))}function cd(e,t){const r=new Ul;return r.key=e,t&&_a(r,t),r}function ud(e,t,r){t.keys&&Ds(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function hd(e,t){Ds(t,(t=>{ud(e.springs,t,(t=>cd(t,e)))}))}var gd,md,pd=({children:e,...t})=>{const r=F(fd),n=t.pause||!!r.pause,i=t.immediate||!!r.immediate;t=function(e,t){const[r]=g((()=>({inputs:t,result:e()}))),n=h(),i=n.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=r;return y((()=>{n.current=o,i==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:n,immediate:i})),[n,i]);const{Provider:o}=fd;return c.createElement(o,{value:t},e)},fd=(gd=pd,md={},Object.assign(gd,c.createContext(md)),gd.Provider._context=gd,gd.Consumer._context=gd,gd);pd.Provider=fd.Provider,pd.Consumer=fd.Consumer;var bd=()=>{const e=[],t=function(t){Na(`${Wa}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Ds(e,((e,i)=>{if(Es.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Ds(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ds(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ds(e,((e,r)=>{const n=Es.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Ds(e,((e,n)=>{if(Es.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Ds(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ds(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Es.fun(e)?e(r,t):e};return t._getProps=r,t};function yd(e,t){const r=Es.fun(e),[[n],i]=function(e,t,r){const n=Es.fun(t)&&t;n&&!r&&(r=[]);const i=x((()=>n||3==arguments.length?bd():void 0),[]),o=h(0),s=Ua(),a=x((()=>({ctrls:[],queue:[],flush(e,t){const r=ld(e,t),n=o.current>0&&!a.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?sd(e,t):new Promise((n=>{dd(e,r),a.queue.push((()=>{n(sd(e,t))})),s()}))}})),[]),l=h([...a.ctrls]),d=[],c=Ga(e)||0;function u(e,r){for(let i=e;i<r;i++){const e=l.current[i]||(l.current[i]=new od(null,a.flush)),r=n?n(i,e):t[i];r&&(d[i]=Jl(r))}}x((()=>{Ds(l.current.slice(e,c),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,u(c,e)}),[e]),x((()=>{u(0,Math.min(c,e))}),r);const g=l.current.map(((e,t)=>ld(e,d[t]))),m=F(pd),p=Ga(m),f=m!==p&&function(e){for(const t in e)return!0;return!1}(m);qa((()=>{o.current++,a.ctrls=l.current;const{queue:e}=a;e.length&&(a.queue=[],Ds(e,(e=>e()))),Ds(l.current,((e,t)=>{i?.add(e),f&&e.start({default:m});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Za((()=>()=>{Ds(a.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>({...e})));return i?[b,i]:b}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var vd=class extends Wl{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ha(...t);const r=this._get(),n=dl(r);el(this,n.create(r))}advance(e){const t=this._get();ks(t,this.get())||(Ka(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&wd(this._active)&&$d(this)}_get(){const e=Es.arr(this.source)?this.source.map(Fa):Os(Fa(this.source));return this.calc(...e)}_start(){this.idle&&!wd(this._active)&&(this.idle=!1,Ds(tl(this),(e=>{e.done=!1})),os.skipAnimation?(as.batchedUpdates((()=>this.advance())),$d(this)):Hs.start(this))}_attach(){let e=1;Ds(Os(this.source),(t=>{$a(t)&&_a(t,this),Rl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ds(Os(this.source),(e=>{$a(e)&&Oa(e,this)})),this._active.clear(),$d(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Os(this.source).reduce(((e,t)=>Math.max(e,(Rl(t)?t.priority:0)+1)),0))}};function xd(e){return!1!==e.idle}function wd(e){return!e.size||Array.from(e).every(xd)}function $d(e){e.idle||(e.idle=!0,Ds(tl(e),(e=>{e.done=!0})),Ea(e,{type:"idle",parent:e}))}os.assign({createStringInterpolator:La,to:(e,t)=>new vd(e,t)});var Fd=/^--/;function Cd(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Fd.test(e)||kd.hasOwnProperty(e)&&kd[e]?(""+t).trim():t+"px"}var Ed={};var kd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dd=["Webkit","Ms","Moz","O"];kd=Object.keys(kd).reduce(((e,t)=>(Dd.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),kd);var _d=/^(matrix|translate|scale|rotate|skew)/,Od=/^(translate)/,Sd=/^(rotate|skew)/,Md=(e,t)=>Es.num(e)&&0!==e?e+t:e,Ad=(e,t)=>Es.arr(e)?e.every((e=>Ad(e,t))):Es.num(e)?e===t:parseFloat(e)===t,zd=class extends sl{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>Md(e,"px"))).join(",")})`,Ad(e,0)]))),_s(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(_d.test(t)){if(delete n[t],Es.und(e))return;const r=Od.test(t)?"px":Sd.test(t)?"deg":"";i.push(Os(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Md(i,r)})`,Ad(i,0)]:e=>[`${t}(${e.map((e=>Md(e,r))).join(",")})`,Ad(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new jd(i,o)),super(n)}},jd=class extends ka{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ds(this.inputs,((r,n)=>{const i=Fa(r[0]),[o,s]=this.transforms[n](Es.arr(i)?i:r.map(Fa));e+=" "+o,t=t&&s})),t?"none":e}observerAdded(e){1==e&&Ds(this.inputs,(e=>Ds(e,(e=>$a(e)&&_a(e,this)))))}observerRemoved(e){0==e&&Ds(this.inputs,(e=>Ds(e,(e=>$a(e)&&Oa(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ea(this,e)}};os.assign({batchedUpdates:q,createStringInterpolator:La,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Bd=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new sl(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=gl(e)||"Anonymous";return(e=Es.str(e)?o[e]||(o[e]=cl(e,i)):e[hl]||(e[hl]=cl(e,i))).displayName=`Animated(${t})`,e};return _s(e,((t,r)=>{Es.arr(e)&&(r=gl(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:s,viewBox:a,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Ed[t]||(Ed[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Cd(t,n[t]);Fd.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new zd(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Td=Bd.animated;const Id=C.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Vi.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Pd=t=>{var{id:r="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:a,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=t,u=le(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,m]=g(),[p,f]=g();y((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),y((()=>{var e,t;n&&c&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const b=()=>{const e=.01*window.innerHeight;m(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;m(e),f(window.visualViewport.offsetTop)}};return e(Xi,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:a,zIndex:l,children:e(Id,Object.assign({show:n,animationFrom:i,"data-testid":r,verticalHeight:h,offsetTop:p},u,{children:o}))})},Rd=C.div`
    border-radius: ${Hi.md};
    background: ${Pi.bg};
    padding: ${Yi["spacing-16"]} ${Yi["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Ld=C.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Yi["spacing-24"]};
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
                background-color: ${Pi["bg-hover-neutral"]};
            `}
    }
`,Wd=u.forwardRef(((t,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=t,a=le(t,["children","focusHighlight","focusOutline","type"]);return e(Ld,Object.assign({ref:r,$outline:o,$highlight:i,type:s},a,{children:n}))})),Yd=C.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Pi.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Vi.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Hd=C(Wd)`
    position: absolute;
    top: var(--close-button-top-inset, ${Yi["spacing-16"]});
    right: var(--close-button-right-inset, ${Yi["spacing-16"]});
    padding: 0;
    color: ${Pi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Vi.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Yi["spacing-20"]});
    }
`,Nd=C.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Vd=C((t=>{var{children:r}=t,n=le(t,["children"]);const i=n["data-testid"]||"card";return e(Rd,Object.assign({},n,{"data-testid":i,children:"string"==typeof r?e(ko.BodyBL,{children:r}):r}))}))`
    color: ${Pi.text};
    ${$o({textSize:"body-md"})}

    ${Vi.MaxWidth.sm} {
        display: none;
    }
`,qd=C((r=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:s=!0}=r,a=le(r,["id","children","onClose","showCloseButton"]);return t(Yd,Object.assign({"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[s&&e(Hd,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(ne,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Qd=C.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Pi.text};
    ${$o({textSize:"body-md"})}
`,Ud=n=>{var{children:i,visible:o,onMobileClose:s}=n,a=le(n,["children","visible","onMobileClose"]);const l=a["data-testid"]||"popover",d=D(),c=Ni["sm-max"]({theme:d}),u=ge.useMediaQuery({maxWidth:c}),h=()=>{s&&s()},g=()=>"string"==typeof i?e(ko.BodyMD,{children:i}):i;return t(r,{children:[o&&e(Nd,Object.assign({"data-testid":l},a,{children:e(Vd,{children:g()})})),u&&e(Pd,{show:null!=o&&o,onOverlayClick:h,children:e(qd,{onClose:h,children:e(Qd,{children:g()})})})]})},Zd=C.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Xd=n=>{var i,o,{children:s,popoverContent:a,trigger:l="click",position:d="top",zIndex:c,rootNode:u,customOffset:m,delay:p,onPopoverAppear:f,onPopoverDismiss:b}=n,v=le(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[x,w]=g(!1),$=h(null),F=h(null),C=D(),E=Ni["sm-max"]({theme:C}),k=ge.useMediaQuery({maxWidth:E}),{refs:O,floatingStyles:S,context:M}=A({open:x,placement:d,whileElementsMounted:z,middleware:[j(null!=m?m:16),B(),T({limiter:I()})],onOpenChange:e=>{w(e),x!==e&&J(e)}}),N=(()=>{const[e,t]=g(void 0),r=_();return y((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Ui.Change,e),r.events.emit(Ui.Ready),()=>r.events.off(Ui.Change,e)}),[r]),e})(),V=k?"click":l,q=P(M,{ignoreMouse:"hover"===V}),Q=R(M),U=L(M,{enabled:"hover"===V,delay:{open:null!==(i=null==p?void 0:p.open)&&void 0!==i?i:0,close:null!==(o=null==p?void 0:p.close)&&void 0!==o?o:500}}),{getReferenceProps:Z,getFloatingProps:X}=W([q,Q,U]),G=()=>{w(!1),J(!1)},J=e=>{e&&f&&f(),!e&&b&&b()};return t(r,{children:[e(Zd,Object.assign({ref:e=>{$.current=e,O.setReference(e)}},Z({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:s})),x&&e(Y,{root:u,children:e(H,{context:M,children:e("div",Object.assign({ref:e=>{F.current=e,O.setFloating(e)},style:Object.assign(Object.assign({},S),{outline:"none",zIndex:null!=c?c:N})},X(),{children:"function"==typeof a?a():e(Ud,{visible:!0,onMobileClose:G,children:a})}))})})]})},Gd=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Jd=C.span`
    color: ${Pi["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Gd(e)}

    &:hover,
    &:focus-visible {
        color: ${Pi["text-hover"]};
        ${({$hoverStyle:e})=>Gd(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Kd=C.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,ec=r=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:s="default",underlineHoverStyle:a="default"}=r,l=le(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return e(Xd,Object.assign({},l,{children:t(Jd,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:s,$hoverStyle:a,"aria-label":null!=n?n:d?void 0:"More info",children:[i,o&&e(Kd,{$standalone:!d,children:o})]})}))},tc=C.div`
    padding-left: ${Yi["spacing-4"]};
    display: inline;
`,rc=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:o,id:s,zIndex:a,"data-testid":l}=t;return e(tc,{children:e(ec,{trigger:"click",id:s,"data-testid":l,popoverContent:n,rootNode:r,zIndex:a,icon:null!=o?o:e(J,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},nc=C.div`
    background-color: ${e=>e.$collapsible?Pi["bg-strong"]:Pi.bg};
    ${Vi.MaxWidth.lg} {
        background-color: ${Pi["bg-strong"]};
    }
`,ic=C.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Pi.border};

    ${Vi.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${Yi["spacing-16"]};
    }
`,oc=C.div`
    display: flex;
    align-items: center;

    background-color: ${Pi.bg};

    ${Vi.MaxWidth.lg} {
        background-color: transparent;
    }
`,sc=C(Wd)`
    margin: 0 0 0 auto;

    color: ${Pi.icon};
    &:hover {
        color: ${Pi["icon-hover"]};
    }
`,ac=C(Q)`
    height: ${Ri.Spec["body-size-baseline"]};
    width: ${Ri.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Li["duration-350"]} ${Li["ease-standard"]};
`,lc=C.p`
    ${Ri["heading-xs-semibold"]}
    color: ${Pi.text};

    margin: ${Yi["spacing-24"]} 0 ${Yi["spacing-24"]}
        ${Yi["spacing-20"]};

    ${Vi.MaxWidth.lg} {
        ${Ri["body-md-semibold"]}
        color: ${Pi["text-subtle"]};

        margin: ${Yi["spacing-24"]} ${Yi["spacing-20"]} 0
            ${Yi["spacing-20"]};
    }
`,dc=C(Td.div)`
    overflow: hidden;
`,cc=C.div`
    padding: ${Yi["spacing-24"]} ${Yi["spacing-20"]};
`,uc=C(Td.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,hc=C(go.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Yi["spacing-16"]} 0 0 0;
`,gc=r=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:s,onExpandChange:a,minimisable:l=!1,minimisedHeight:d,showDivider:c=!0,showMobileDivider:u=!0,title:h,addon:m,children:p}=r,f=le(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:b,rootNode:v}=F(Ki),x="mobile"===b,[w,$]=g(M()),[C,E]=g(l),k=!x&&i,D=Mt(),_=Mt(),O=yd({height:w?D.height:0}),S=C?null!=d?d:Math.min(.5*(null!==(n=_.height)&&void 0!==n?n:0),216):_.height;y((()=>{$(M())}),[i,s]);function M(){return!!x||(ns(s)?!i||o:s)}return t(nc,{$collapsible:k,children:[e(ic,{$showDivider:c,$showMobileDivider:u}),(h||k)&&t(oc,{children:[h&&t(lc,{children:[h," ",m&&("popover"===(null==m?void 0:m.type)?e(rc,{addon:m,rootNode:x?v:void 0}):null)]}),k&&e(sc,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!w;ns(s)&&$(e),a&&a(e)},"aria-label":w?"Collapse":"Expand",children:e(ac,{$expanded:w})})]}),e(dc,{"data-testid":"expandable-container","data-expanded":w,style:O,children:e("div",{ref:D.ref,children:t(cc,Object.assign({},f,{children:[e(uc,{"data-testid":"minimisable-container",$height:S,$minimisable:l,children:e("div",{ref:_.ref,children:e("div",{"data-id":"content-container",children:"function"==typeof p?p(b,{minimised:C}):p})})}),l&&t(hc,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{E(!C)},children:["View ",C?"more":"less"]})]}))})})]})};gc.displayName="Filter.Item";const mc=C(gc)`
    padding: 0 0 ${Yi["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${Yi["spacing-8"]} ${Yi["spacing-8"]} 0;

        ${Vi.MaxWidth.lg} {
            padding: ${Yi["spacing-16"]} ${Yi["spacing-20"]}
                ${Yi["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${Yi["spacing-8"]} ${Yi["spacing-20"]} 0;
    }
`,pc=C.div`
    display: flex;
    flex-direction: column;

    ${Vi.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${Yi["spacing-16"]};
    }
`,fc=C.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${Yi["spacing-8"]} ${Yi["spacing-12"]};

    cursor: pointer;
    ${Ri["body-md-regular"]}
    color: ${Pi.text};
    ${e=>e.$selected&&E`
            color: ${Pi["text-selected"]};
        `}

    ${Vi.MaxWidth.lg} {
        padding: ${Yi["spacing-8"]};
    }
`,bc=C((r=>{var{className:n,checked:i,disabled:o,indeterminate:s,onChange:a,onKeyPress:l,displaySize:d="default"}=r,c=le(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=h(null);y((()=>{u.current&&(u.current.indeterminate=null!=s&&s)}),[s]);const g=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;a&&a(e),l&&l(t)}};return t(po,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:g,$displaySize:d,$disabled:o,$unchecked:!(s||i||o),children:[e(wo,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:g,disabled:o},c)),s?e(xo,{$disabled:o,"data-testid":"indeterminate"}):i?e(vo,{$disabled:o,"data-testid":"checkmark"}):o?e(yo,{"data-testid":"empty-disabled-checkbox"}):e(bo,{$disabled:o,"data-testid":"empty-checkbox"})]})}))`
    flex-shrink: 0;
    margin-right: ${Yi["spacing-8"]};
`,yc=C((({type:n="checkbox",indicator:i,checked:o,styleType:s="default",children:a,childrenMaxLines:l,subLabel:d,disabled:c,error:u,name:m,id:p,className:f,compositeSection:b,removable:v,onRemove:w,"data-testid":$,onChange:F,useContentWidth:C})=>{const{collapsible:E=!0,errors:k,children:D,initialExpanded:_}=b||{},[O,S]=g(o),[M,A]=g(!!_),z=x((()=>{const e=Array.isArray(k)&&(null==k?void 0:k.length)>0,t=!Array.isArray(k)&&!!k;return e||t}),[k]),[j]=g(Be.generate()),B=p?`${p}`:`tg-${j}`,T=h(null);y((()=>{S(o)}),[o]),y((()=>{O&&A(null==_||_)}),[O]);const I=()=>{c||A(!M)},P=()=>{c||!w||w()},R=()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e(rs,{type:t,active:O,disabled:c,$selected:O,$disabled:c})},L=()=>{if(!d)return null;let t;return t="function"==typeof d?d():d,e(qo,{"data-id":"toggle-sublabel",children:t})},W=n=>t(r,{children:[e(es,{weight:"semibold",$disabled:c,children:"Error"}),e(ts,{$disabled:c,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${B}-error-list-item-${r}`,children:e(es,{weight:"semibold",$disabled:c,children:t})},r)))})]});return t(Yo,{$selected:O,$disabled:c,className:f,$styleType:s,$error:u,$indicator:i,$useContentWidth:C,id:p,"data-testid":$,children:[t(Qo,{id:`${B}-header-container`,$disabled:c,$error:u,$selected:O,$indicator:i,$styleType:s,children:[t(Uo,{$addPadding:v,children:[e(Ho,{ref:T,name:m,id:`${B}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:c,onChange:e=>{if(!c){if(F)return void F(e);switch(n){case"checkbox":S((e=>!e));break;case"radio":case"yes":case"no":O||S(!0)}}},checked:O}),i&&R(),t(No,{$selected:O,$disabled:c,children:[e(Vo,{htmlFor:`${B}-input`,"data-testid":`${B}-toggle-label`,$maxLines:l,children:a}),d&&L()]})]}),v&&e(Zo,{type:"button",$disabled:c,onClick:P,id:`${B}-remove-button`,children:"Remove"})]}),D&&t("div",{children:[(!E||M)&&e(Ko,{"data-id":"toggle-composite-children",$isFinalItem:!E,$disabled:c,children:D}),E&&!M&&z&&e(Go,{$disabled:c,onClick:I,id:`${B}-error-alert`,children:e(Jo,{type:c?"description":"error",className:f,showIcon:!0,children:Array.isArray(k)?W(k):k})}),E&&t(Xo,{$paddingTopRequired:!M&&!z,disabled:c,onClick:I,"data-testid":M?"collapse-button":"expand-button",children:[M?"Show less":"Show more",e(M?U:Q,{"aria-hidden":!0})]})]})]})}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,vc=C(go.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Yi["spacing-16"]} 0 ${Yi["spacing-8"]}
        ${Yi["spacing-12"]};

    ${Vi.MaxWidth.lg} {
        margin: 0 0 ${Yi["spacing-16"]} 0;
    }
`,xc=n=>{var{selectedOptions:i,options:o,onSelect:s,labelExtractor:a,valueExtractor:l,useToggleContentWidth:d}=n,c=le(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:u}=F(Ki),[m,p]=g(i||[]),[f,b]=g(),[v,x]=g(o.length),w=h(null),C=h(null),E=e=>()=>{const t=[...m],r=m.findIndex((t=>_(t)===_(e)));r>=0?t.splice(r,1):t.push(e),p(t),null==s||s(t)},k=()=>{const e=m.length?[]:o;p(e),null==s||s(e)},D=e=>{var t;return a?a(e):null!==(t=e.label)&&void 0!==t?t:null==e?void 0:e.toString()},_=e=>{var t;return l?l(e):null!==(t=e.value)&&void 0!==t?t:null==e?void 0:e.toString()},O=$((()=>{if(!w.current)return void b(void 0);const e=Array.from(w.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}x(t),b(r>2?n-8:void 0)}),[]);y((()=>{i!==m&&p(i||[])}),[i]),y((()=>{"default"===u?(()=>{const e=C.current?C.current.offsetTop+C.current.clientHeight:void 0;b(e)})():O()}),[o]),Mt({handleWidth:"mobile"===u,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:w,onResize:O});return e(mc,Object.assign({minimisable:o.length>5,minimisedHeight:f},c,{children:(n,{minimised:i})=>t(r,{children:[o.length<3?null:e(vc,{styleType:"link",type:"button",onClick:k,children:m.length?"Clear all":"Select all"}),e(pc,{role:"group","aria-label":c.title,ref:w,children:o.map(((r,o)=>"default"===n?((r,n,i)=>{const o=D(r),s=_(r),a=!!m.find((e=>_(e)===s));return t(fc,{$visible:!i||n<5,$selected:a,ref:4===n?C:void 0,children:[e(bc,{displaySize:"small",checked:a,onChange:E(r)}),o]},s)})(r,o,i):((t,r,n)=>{const i=D(t),o=_(t),s=!!m.find((e=>_(e)===o));return e(yc,{type:"checkbox",checked:s,$visible:!n||!!f&&r<=v,onChange:E(t),useContentWidth:d,children:i},o)})(r,o,i)))})]})}))};xc.displayName="Filter.Checkbox";const wc=C.div`
    background-color: ${Pi.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,$c=C(ao)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Fc=(r,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left",loading:c=!1}=r,u=le(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:a};return t($c,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[c?e(so,{}):l,e("span",{children:i})]}))};Fc.displayName="ButtonWithIcon.Default";const Cc=(r,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left",loading:c=!1}=r,u=le(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:a};return t($c,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[c?e(so,{}):l,e("span",{children:i})]}))};Cc.displayName="ButtonWithIcon.Small";const Ec={Default:u.forwardRef(Fc),Small:u.forwardRef(Cc)},kc=C.div`
    background-color: ${Pi.bg};
    border: ${Wi["width-010"]} ${Wi.solid} ${Pi.border};
    border-radius: ${Hi.md};
    overflow: hidden;
    width: 100%;
`,Dc=C.div`
    background-color: ${Pi["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,_c=C.div`
    background-color: ${Pi.bg};
    height: 100%;
    width: 100%;
`,Oc=C.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,Sc=C.div`
    display: flex;
    align-items: center;

    background-color: ${Pi.bg};

    ${Vi.MaxWidth.lg} {
        border-bottom: ${Wi["width-010"]} ${Wi.solid}
            ${Pi.border};
    }
`,Mc=C(ko.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${Yi["spacing-24"]} 0 ${Yi["spacing-24"]}
        ${Yi["spacing-20"]};

    ${Vi.MaxWidth.lg} {
        text-align: center;
        margin: ${Yi["spacing-24"]} 0;
    }
`,Ac=C(Wd)`
    padding: ${Yi["spacing-24"]} ${Yi["spacing-20"]};
    margin-right: auto;
    color: ${Pi.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Pi["icon-hover"]};
    }
`,zc=C(go.Small)`
    background-color: transparent;
    padding-right: ${Yi["spacing-20"]};
    padding-left: ${Yi["spacing-20"]};
    height: 100%;

    ${Vi.MaxWidth.lg} {
        padding: ${Yi["spacing-24"]} ${Yi["spacing-20"]};
    }
`,jc=C(Ec.Default)`
    width: 100%;
`,Bc=C.div`
    padding: ${Yi["spacing-24"]} ${Yi["spacing-20"]};
    background-color: ${Pi.bg};
    border-top: ${Wi["width-010"]} ${Wi.solid} ${Pi.border};
`,Tc=C(go.Default)`
    width: 100%;
`,Ic=({onDismiss:r,onDone:n,children:i})=>t(wc,{children:[e(Ac,{onClick:r,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(ae,{})}),e(Oc,{children:i}),e(Bc,{children:e(Tc,{onClick:n,type:"button",children:"Done"})})]});Ic.displayName="Filter.Page";const Pc=n=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:o="light",headerTitle:s="Filters",clearButtonDisabled:a=!1,onClear:c,onDismiss:u,onDone:m,children:p}=n,f=le(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[b,v]=g(!1),x=h(null),w=h(null),$=D(),F=Ni["lg-max"]({theme:$}),C=ge.useMediaQuery({maxWidth:F});y((()=>{C||k()}),[C]);const E=()=>{v(!0)},k=()=>{v(!1),u&&u()},_=()=>{v(!1),m&&m()},O=()=>{c&&c()},S=e=>"function"==typeof p?p(e):p,M=r=>t(Sc,{children:["mobile"===r&&e(Ac,{onClick:k,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(d,{})}),e(Mc,{weight:"semibold",children:s}),e(zc,{styleType:"link",type:"button",onClick:O,disabled:a,children:"Clear"})]});return e("div",Object.assign({},f,{children:e(Ki.Provider,C?{value:{mode:"mobile",rootNode:x},children:t(r,{children:[e(jc,{"data-testid":"filter-show-button",styleType:o,onClick:E,type:"button",icon:e(l,{}),children:i}),e(Xi,{show:b,disableTransition:!0,children:e(_c,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:t(Dc,{ref:x,children:[M("mobile"),e(Oc,{children:S("mobile")}),e(Bc,{children:e(Tc,{onClick:_,type:"button",children:"Done"})})]})})})]})}:{value:{mode:"default",rootNode:w},children:t(kc,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:w,children:[M("default"),S("default")]})})}))};Pc.displayName="Filter";const Rc=Object.assign(Pc,{Item:gc,Page:Ic,Checkbox:xc});export{Rc as Filter};
//# sourceMappingURL=index.js.map
