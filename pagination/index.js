import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import{Chevron2LeftIcon as n}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as o}from"@lifesg/react-icons/chevron-2-right";import{ChevronLeftIcon as i}from"@lifesg/react-icons/chevron-left";import{ChevronLineLeftIcon as s}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as a}from"@lifesg/react-icons/chevron-line-right";import{ChevronRightIcon as l}from"@lifesg/react-icons/chevron-right";import{EllipsisHorizontalIcon as c}from"@lifesg/react-icons/ellipsis-horizontal";import*as d from"react";import u,{useRef as h,useState as f,isValidElement as g,createRef as m,cloneElement as p,PureComponent as b,useEffect as v,useLayoutEffect as y,useCallback as x,useMemo as w,createElement as $,forwardRef as F,useContext as C,useImperativeHandle as E}from"react";import S,{css as T,useTheme as D,keyframes as I}from"styled-components";import O,{findDOMNode as B}from"react-dom";import{ExclamationCircleFillIcon as z}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as k}from"@lifesg/react-icons/square";import{SquareFillIcon as A}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as j}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as M}from"@lifesg/react-icons/tick";import{CrossIcon as _}from"@lifesg/react-icons/cross";import{MagnifierIcon as R}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as H}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as L}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as P,useFloating as W,autoUpdate as Y,offset as N,flip as V,shift as U,limitShift as q,size as G,useTransitionStyles as Z,useClick as X,useDismiss as Q,useInteractions as J,FloatingPortal as K,FloatingFocusManager as ee}from"@floating-ui/react";import{ExternalIcon as te}from"@lifesg/react-icons/external";var re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ne(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oe,ie={exports:{}};oe=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return a(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=d(o),i=d(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!r||!o&&r}))},t.parse=a;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function a(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],s=t[2],a=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=s?s.toLowerCase():"all",a=a.match(/\([^\)]+\)/g)||[],l.expressions=a.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function d(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=/[A-Z]/g,o=/^ms-/,i={};function s(e){return"-"+e.toLowerCase()}const a=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(n,s);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,r){var i=this;if(o&&!r){var s=o.call(window,e);this.matches=s.matches,this.media=s.media,s.addListener(a)}else this.matches=n(e,t),this.media=e;function a(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){s&&s.addListener(e)},this.removeListener=function(e){s&&s.removeListener(e)},this.dispose=function(){s&&s.removeListener(a)}}e.exports=function(e,t,r){return new i(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))r.call(i,c)&&(a[c]=i[c]);if(t){s=t(i);for(var d=0;d<s.length;d++)n.call(i,s[d])&&(a[s[d]]=i[s[d]])}}return a}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function a(e,t,r,a,l){for(var c in e)if(s(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((a||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,a,r,null,o)}catch(e){d=e}if(!d||d instanceof Error||n((a||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in i)){i[d.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+d.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},a.resetWarningCache=function(){i={}},e.exports=a},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,o=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),s=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(c),arrayOf:function(e){return g((function(t,r,n,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=t[r];if(!Array.isArray(a))return new f("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<a.length;l++){var c=e(a,l,n,o,i+"["+l+"]",s);if(c instanceof Error)return c}return null}))},element:g((function(t,r,n,o,i){var s=t[r];return e(s)?null:new f("Invalid "+o+" `"+i+"` of type `"+v(s)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(e,t,r,n,i){var s=e[t];return o.isValidElementType(s)?null:new f("Invalid "+n+" `"+i+"` of type `"+v(s)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,r,n,o,i){if(!(t[r]instanceof e)){var s=e.name||d;return new f("Invalid "+o+" `"+i+"` of type `"+((a=t[r]).constructor&&a.constructor.name?a.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+s+"`.")}var a;return null}))},node:g((function(e,t,r,n,o){return b(e[t])?null:new f("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,r,n,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=v(l);if("object"!==c)return new f("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(a(l,d)){var u=e(l,d,n,o,i+"."+d,s);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,r,n,o,i){for(var s=t[r],a=0;a<e.length;a++)if(h(s,e[a]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new f("Invalid "+o+" `"+i+"` of value `"+String(s)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),c}return g((function(t,r,n,o,i){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,o,i,s);if(null==d)return null;d.data&&a(d.data,"expectedType")&&l.push(d.data.expectedType)}return new f("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,r,n,o,i){var a=t[r],l=v(a);if("object"!==l)return new f("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return p(n,o,i,c,y(d));var u=d(a,c,n,o,i+"."+c,s);if(u)return u}return null}))},exact:function(e){return g((function(t,r,n,o,l){var c=t[r],d=v(c);if("object"!==d)return new f("Invalid "+o+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=i({},t[r],e);for(var h in u){var g=e[h];if(a(e,h)&&"function"!=typeof g)return p(n,o,l,h,y(g));if(!g)return new f("Invalid "+o+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=g(c,h,n,o,l+"."+h,s);if(m)return m}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var r={},o=0;function i(i,a,l,c,u,h,g){if(c=c||d,h=h||l,g!==s){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var p=c+":"+l;!r[p]&&o<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[p]=!0,o++)}}return null==a[l]?i?null===a[l]?new f("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new f("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,l,c,u,h)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function m(e){return g((function(t,r,n,o,i,s){var a=t[r];return v(a)!==e?new f("Invalid "+o+" `"+i+"` of type `"+y(a)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function p(e,t,r,n,o){return new f((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!b(o.value))return!1}else for(;!(o=i.next()).done;){var s=o.value;if(s&&!b(s[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case c:case d:case o:case s:case i:case h:return f;default:var p=f&&f.$$typeof;switch(p){case l:case u:case m:case g:case a:return p;default:return t}}case n:return t}}}var w=c,$=d,F=l,C=a,E=r,S=u,T=o,D=m,I=g,O=n,B=s,z=i,k=h,A=!1;function j(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=F,t.ContextProvider=C,t.Element=E,t.ForwardRef=S,t.Fragment=T,t.Lazy=D,t.Memo=I,t.Portal=O,t.Profiler=B,t.StrictMode=z,t.Suspense=k,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===c},t.isConcurrentMode=j,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===g},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===s||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===a||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===p)},t.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var i=0;i<o;i++){var s=r[i];if(e[s]!==t[s]||!Object.prototype.hasOwnProperty.call(t,s))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,o=e.onChange,s=n(e,["children","device","onChange"]),a=(0,i.default)(s,r,o);return"function"==typeof t?t(a):a?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=n(r(/*! ./Component */"./src/Component.ts"));t.default=i.default;var s=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=s.default;var a=n(r(/*! ./Context */"./src/Context.ts"));t.Context=a.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),a=s.default.oneOfType([s.default.string,s.default.number]),l={all:s.default.bool,grid:s.default.bool,aural:s.default.bool,braille:s.default.bool,handheld:s.default.bool,print:s.default.bool,projection:s.default.bool,screen:s.default.bool,tty:s.default.bool,tv:s.default.bool,embossed:s.default.bool},c={orientation:s.default.oneOf(["portrait","landscape"]),scan:s.default.oneOf(["progressive","interlace"]),aspectRatio:s.default.string,deviceAspectRatio:s.default.string,height:a,deviceHeight:a,width:a,deviceWidth:a,color:s.default.bool,colorIndex:s.default.bool,monochrome:s.default.bool,resolution:a,type:Object.keys(l)},d=o(c,["type"]),u=n({minAspectRatio:s.default.string,maxAspectRatio:s.default.string,minDeviceAspectRatio:s.default.string,maxDeviceAspectRatio:s.default.string,minHeight:a,maxHeight:a,minDeviceHeight:a,maxDeviceHeight:a,minWidth:a,maxWidth:a,minDeviceWidth:a,maxDeviceWidth:a,minColor:s.default.number,maxColor:s.default.number,minColorIndex:s.default.number,maxColorIndex:s.default.number,minMonochrome:s.default.number,maxMonochrome:s.default.number,minResolution:a,maxResolution:a},d),h=n(n({},l),u);t.default={all:h,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),s=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,s.default)(r)]=e[r],t}),{})},u=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(c.default),r=function(){return d(e)||d(t)},n=(0,o.useState)(r),i=n[0],s=n[1];return(0,o.useEffect)((function(){var e=r();(0,a.shallowEqualObjects)(i,e)||s(e)}),[e,t]),i}(t),s=h(e);if(!s)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),s=n[0],a=n[1],l=u();return(0,o.useEffect)((function(){if(l){var e=r();return a(e),function(){e&&e.dispose()}}}),[e,t]),s}(s,n),f=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),g=u();return(0,o.useEffect)((function(){g&&r&&r(f)}),[f]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var se=ie.exports=oe(u),ae=function(e,t){return ae=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},ae(e,t)};var le=function(){return le=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},le.apply(this,arguments)};var ce="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var de=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ue="object"==typeof ce&&ce&&ce.Object===Object&&ce,he="object"==typeof self&&self&&self.Object===Object&&self,fe=ue||he||Function("return this")(),ge=fe,me=function(){return ge.Date.now()},pe=/\s/;var be=function(e){for(var t=e.length;t--&&pe.test(e.charAt(t)););return t},ve=/^\s+/;var ye=function(e){return e?e.slice(0,be(e)+1).replace(ve,""):e},xe=fe.Symbol,we=xe,$e=Object.prototype,Fe=$e.hasOwnProperty,Ce=$e.toString,Ee=we?we.toStringTag:void 0;var Se=function(e){var t=Fe.call(e,Ee),r=e[Ee];try{e[Ee]=void 0;var n=!0}catch(e){}var o=Ce.call(e);return n&&(t?e[Ee]=r:delete e[Ee]),o},Te=Object.prototype.toString;var De=Se,Ie=function(e){return Te.call(e)},Oe=xe?xe.toStringTag:void 0;var Be=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Oe&&Oe in Object(e)?De(e):Ie(e)},ze=function(e){return null!=e&&"object"==typeof e};var ke=ye,Ae=de,je=function(e){return"symbol"==typeof e||ze(e)&&"[object Symbol]"==Be(e)},Me=/^[-+]0x[0-9a-f]+$/i,_e=/^0b[01]+$/i,Re=/^0o[0-7]+$/i,He=parseInt;var Le=de,Pe=me,We=function(e){if("number"==typeof e)return e;if(je(e))return NaN;if(Ae(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ae(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ke(e);var r=_e.test(e);return r||Re.test(e)?He(e.slice(2),r?2:8):Me.test(e)?NaN:+e},Ye=Math.max,Ne=Math.min;var Ve=function(e,t,r){var n,o,i,s,a,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,c=t,s=e.apply(i,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function m(){var e=Pe();if(g(e))return p(e);a=setTimeout(m,function(e){var r=t-(e-l);return u?Ne(r,i-(e-c)):r}(e))}function p(e){return a=void 0,h&&n?f(e):(n=o=void 0,s)}function b(){var e=Pe(),r=g(e);if(n=arguments,o=this,l=e,r){if(void 0===a)return function(e){return c=e,a=setTimeout(m,t),d?f(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,t),f(l)}return void 0===a&&(a=setTimeout(m,t)),s}return t=We(t)||0,Le(r)&&(d=!!r.leading,i=(u="maxWait"in r)?Ye(We(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=l=o=a=void 0},b.flush=function(){return void 0===a?s:p(Pe())},b},Ue=Ve,qe=de;var Ge=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return qe(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Ue(e,t,{leading:n,maxWait:t,trailing:o})},Ze=function(e,t,r,n){switch(t){case"debounce":return Ve(e,r,n);case"throttle":return Ge(e,r,n);default:return e}},Xe=function(e){return"function"==typeof e},Qe=function(){return"undefined"==typeof window},Je=function(e){return e instanceof Element||e instanceof HTMLDocument},Ke=function(e,t,r,n){return function(o){var i=o.width,s=o.height;t((function(t){return t.width===i&&t.height===s||t.width===i&&!n||t.height===s&&!r?t:(e&&Xe(e)&&e(i,s),{width:i,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Qe()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Qe())return null;if(t)return document.querySelector(t);if(n&&Je(n))return n;if(r.targetRef&&Je(r.targetRef.current))return r.targetRef.current;var o=B(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,s=void 0===i||i,a=t.onResize;if(o||s){var l=Ke(a,r.setState.bind(r),o,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Qe()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Xe(t)?"renderProp":Xe(n)?"childFunction":g(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,s=void 0===i?1e3:i,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=m(),r.observableElement=null,Qe()||(r.resizeHandler=Ze(r.createResizeHandler,o,s,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}ae(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Qe()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,o=t.nodeType,i=void 0===o?"div":o,s=this.state,a={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(a);case"childFunction":return(e=n)(a);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(a,["targetRef"]);return p(e,l)}return p(e,a);case"childArray":return(e=n).map((function(e){return!!e&&p(e,a)}));default:return d.createElement(i,null)}}}(b);var et=Qe()?v:y;function tt(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,s=e.refreshOptions,a=e.handleWidth,l=void 0===a||a,c=e.handleHeight,d=void 0===c||c,u=e.targetRef,g=e.observerOptions,m=e.onResize,p=h(r),b=h(null),v=null!=u?u:b,y=h(),x=f({width:void 0,height:void 0}),w=x[0],$=x[1];return et((function(){if(!Qe()){var e=Ke(m,$,l,d);y.current=Ze((function(t){(l||d)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!p.current&&!Qe()&&e({width:n,height:o}),p.current=!1}))}),n,i,s);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,g),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,s,l,d,m,g,v.current]),le({ref:v},w)}var rt=Array.isArray,nt="object"==typeof re&&re&&re.Object===Object&&re,ot=nt,it="object"==typeof self&&self&&self.Object===Object&&self,st=ot||it||Function("return this")(),at=st.Symbol,lt=at,ct=Object.prototype,dt=ct.hasOwnProperty,ut=ct.toString,ht=lt?lt.toStringTag:void 0;var ft=function(e){var t=dt.call(e,ht),r=e[ht];try{e[ht]=void 0;var n=!0}catch(e){}var o=ut.call(e);return n&&(t?e[ht]=r:delete e[ht]),o},gt=Object.prototype.toString;var mt=ft,pt=function(e){return gt.call(e)},bt=at?at.toStringTag:void 0;var vt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":bt&&bt in Object(e)?mt(e):pt(e)};var yt=function(e){return null!=e&&"object"==typeof e},xt=vt,wt=yt;var $t=function(e){return"symbol"==typeof e||wt(e)&&"[object Symbol]"==xt(e)},Ft=rt,Ct=$t,Et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,St=/^\w*$/;var Tt=function(e,t){if(Ft(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ct(e))||(St.test(e)||!Et.test(e)||null!=t&&e in Object(t))};var Dt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},It=vt,Ot=Dt;var Bt,zt=function(e){if(!Ot(e))return!1;var t=It(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},kt=st["__core-js_shared__"],At=(Bt=/[^.]+$/.exec(kt&&kt.keys&&kt.keys.IE_PROTO||""))?"Symbol(src)_1."+Bt:"";var jt=function(e){return!!At&&At in e},Mt=Function.prototype.toString;var _t=function(e){if(null!=e){try{return Mt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Rt=zt,Ht=jt,Lt=Dt,Pt=_t,Wt=/^\[object .+?Constructor\]$/,Yt=Function.prototype,Nt=Object.prototype,Vt=Yt.toString,Ut=Nt.hasOwnProperty,qt=RegExp("^"+Vt.call(Ut).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Gt=function(e,t){return null==e?void 0:e[t]},Zt=function(e){return!(!Lt(e)||Ht(e))&&(Rt(e)?qt:Wt).test(Pt(e))},Xt=Gt;var Qt=function(e,t){var r=Xt(e,t);return Zt(r)?r:void 0},Jt=Qt(Object,"create"),Kt=Jt;var er=function(){this.__data__=Kt?Kt(null):{},this.size=0};var tr=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},rr=Jt,nr=Object.prototype.hasOwnProperty;var or=function(e){var t=this.__data__;if(rr){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return nr.call(t,e)?t[e]:void 0},ir=Jt,sr=Object.prototype.hasOwnProperty;var ar=function(e){var t=this.__data__;return ir?void 0!==t[e]:sr.call(t,e)},lr=Jt;var cr=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=lr&&void 0===t?"__lodash_hash_undefined__":t,this},dr=er,ur=tr,hr=or,fr=ar,gr=cr;function mr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}mr.prototype.clear=dr,mr.prototype.delete=ur,mr.prototype.get=hr,mr.prototype.has=fr,mr.prototype.set=gr;var pr=mr;var br=function(){this.__data__=[],this.size=0};var vr=function(e,t){return e===t||e!=e&&t!=t},yr=vr;var xr=function(e,t){for(var r=e.length;r--;)if(yr(e[r][0],t))return r;return-1},wr=xr,$r=Array.prototype.splice;var Fr=function(e){var t=this.__data__,r=wr(t,e);return!(r<0)&&(r==t.length-1?t.pop():$r.call(t,r,1),--this.size,!0)},Cr=xr;var Er=function(e){var t=this.__data__,r=Cr(t,e);return r<0?void 0:t[r][1]},Sr=xr;var Tr=function(e){return Sr(this.__data__,e)>-1},Dr=xr;var Ir=function(e,t){var r=this.__data__,n=Dr(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Or=br,Br=Fr,zr=Er,kr=Tr,Ar=Ir;function jr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}jr.prototype.clear=Or,jr.prototype.delete=Br,jr.prototype.get=zr,jr.prototype.has=kr,jr.prototype.set=Ar;var Mr=jr,_r=Qt(st,"Map"),Rr=pr,Hr=Mr,Lr=_r;var Pr=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Wr=function(e,t){var r=e.__data__;return Pr(t)?r["string"==typeof t?"string":"hash"]:r.map},Yr=Wr;var Nr=function(e){var t=Yr(this,e).delete(e);return this.size-=t?1:0,t},Vr=Wr;var Ur=function(e){return Vr(this,e).get(e)},qr=Wr;var Gr=function(e){return qr(this,e).has(e)},Zr=Wr;var Xr=function(e,t){var r=Zr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Qr=function(){this.size=0,this.__data__={hash:new Rr,map:new(Lr||Hr),string:new Rr}},Jr=Nr,Kr=Ur,en=Gr,tn=Xr;function rn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}rn.prototype.clear=Qr,rn.prototype.delete=Jr,rn.prototype.get=Kr,rn.prototype.has=en,rn.prototype.set=tn;var nn=rn,on=nn;function sn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(sn.Cache||on),r}sn.Cache=on;var an=sn;var ln=function(e){var t=an(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},cn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,dn=/\\(\\)?/g,un=ln((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(cn,(function(e,r,n,o){t.push(n?o.replace(dn,"$1"):r||e)})),t}));var hn=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},fn=rt,gn=$t,mn=at?at.prototype:void 0,pn=mn?mn.toString:void 0;var bn=function e(t){if("string"==typeof t)return t;if(fn(t))return hn(t,e)+"";if(gn(t))return pn?pn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},vn=bn;var yn=rt,xn=Tt,wn=un,$n=function(e){return null==e?"":vn(e)};var Fn=function(e,t){return yn(e)?e:xn(e,t)?[e]:wn($n(e))},Cn=$t;var En=function(e){if("string"==typeof e||Cn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Sn=Fn,Tn=En;var Dn=function(e,t){for(var r=0,n=(t=Sn(t,e)).length;null!=e&&r<n;)e=e[Tn(t[r++])];return r&&r==n?e:void 0},In=Dn;var On=function(e,t,r){var n=null==e?void 0:In(e,t);return void 0===n?r:n},Bn=ne(On);const zn=(e,t,r)=>Bn(r,t)||Bn(e,t),kn=(e,t)=>{const r=t||e.defaultValue;return Bn(e.collections,r)},An={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},jn=e=>t=>{var r;const n=t.theme,o=kn(An,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${zn(o,e,n.overrides.border)}px`:`${o[e]}px`},Mn={"width-005":jn("width-005"),"width-010":jn("width-010"),"width-020":jn("width-020"),"width-040":jn("width-040"),solid:(_n="solid",e=>{var t;const r=e.theme,n=kn(An,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?zn(n,_n,r.overrides.border):n[_n];return"function"==typeof o?o(e):o})};var _n;const Rn={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Hn=e=>t=>{var r;const n=t.theme,o=kn(Rn,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?zn(o,e,n.overrides.primitiveColour):o[e]},Ln={"brand-10":Hn("brand-10"),"brand-20":Hn("brand-20"),"brand-30":Hn("brand-30"),"brand-40":Hn("brand-40"),"brand-50":Hn("brand-50"),"brand-60":Hn("brand-60"),"brand-70":Hn("brand-70"),"brand-80":Hn("brand-80"),"brand-90":Hn("brand-90"),"brand-95":Hn("brand-95"),"brand-100":Hn("brand-100"),"primary-10":Hn("primary-10"),"primary-20":Hn("primary-20"),"primary-30":Hn("primary-30"),"primary-40":Hn("primary-40"),"primary-50":Hn("primary-50"),"primary-60":Hn("primary-60"),"primary-70":Hn("primary-70"),"primary-80":Hn("primary-80"),"primary-90":Hn("primary-90"),"primary-95":Hn("primary-95"),"primary-100":Hn("primary-100"),"secondary-10":Hn("secondary-10"),"secondary-20":Hn("secondary-20"),"secondary-30":Hn("secondary-30"),"secondary-40":Hn("secondary-40"),"secondary-50":Hn("secondary-50"),"secondary-60":Hn("secondary-60"),"secondary-70":Hn("secondary-70"),"secondary-80":Hn("secondary-80"),"secondary-90":Hn("secondary-90"),"secondary-95":Hn("secondary-95"),"secondary-100":Hn("secondary-100"),"neutral-10":Hn("neutral-10"),"neutral-20":Hn("neutral-20"),"neutral-30":Hn("neutral-30"),"neutral-40":Hn("neutral-40"),"neutral-50":Hn("neutral-50"),"neutral-60":Hn("neutral-60"),"neutral-70":Hn("neutral-70"),"neutral-80":Hn("neutral-80"),"neutral-90":Hn("neutral-90"),"neutral-95":Hn("neutral-95"),"neutral-100":Hn("neutral-100"),"success-10":Hn("success-10"),"success-20":Hn("success-20"),"success-30":Hn("success-30"),"success-40":Hn("success-40"),"success-50":Hn("success-50"),"success-60":Hn("success-60"),"success-70":Hn("success-70"),"success-80":Hn("success-80"),"success-90":Hn("success-90"),"success-95":Hn("success-95"),"success-100":Hn("success-100"),"warning-10":Hn("warning-10"),"warning-20":Hn("warning-20"),"warning-30":Hn("warning-30"),"warning-40":Hn("warning-40"),"warning-50":Hn("warning-50"),"warning-60":Hn("warning-60"),"warning-70":Hn("warning-70"),"warning-80":Hn("warning-80"),"warning-90":Hn("warning-90"),"warning-95":Hn("warning-95"),"warning-100":Hn("warning-100"),"error-10":Hn("error-10"),"error-20":Hn("error-20"),"error-30":Hn("error-30"),"error-40":Hn("error-40"),"error-50":Hn("error-50"),"error-60":Hn("error-60"),"error-70":Hn("error-70"),"error-80":Hn("error-80"),"error-90":Hn("error-90"),"error-95":Hn("error-95"),"error-100":Hn("error-100"),"info-10":Hn("info-10"),"info-20":Hn("info-20"),"info-30":Hn("info-30"),"info-40":Hn("info-40"),"info-50":Hn("info-50"),"info-60":Hn("info-60"),"info-70":Hn("info-70"),"info-80":Hn("info-80"),"info-90":Hn("info-90"),"info-95":Hn("info-95"),"info-100":Hn("info-100"),white:Hn("white"),black:Hn("black"),"primary-inverse":Hn("primary-inverse")},Pn={text:Hn("neutral-20"),"text-subtle":Hn("neutral-30"),"text-subtler":Hn("neutral-50"),"text-subtlest":Hn("neutral-60"),"text-primary":Hn("primary-50"),"text-hover":Hn("primary-40"),"text-selected":Hn("primary-50"),"text-selected-hover":Hn("primary-40"),"text-disabled":Hn("neutral-50"),"text-disabled-subtle":Hn("neutral-60"),"text-disabled-subtlest":Hn("neutral-80"),"text-selected-disabled":Hn("neutral-20"),"text-success":Hn("success-40"),"text-warning":Hn("warning-40"),"text-error":Hn("error-40"),"text-info":Hn("info-40"),"text-inverse":Hn("white"),icon:Hn("neutral-50"),"icon-subtle":Hn("neutral-60"),"icon-strongest":Hn("neutral-20"),"icon-primary":Hn("primary-50"),"icon-primary-subtle":Hn("primary-60"),"icon-primary-subtlest":Hn("primary-70"),"icon-hover":Hn("primary-40"),"icon-selected":Hn("primary-50"),"icon-selected-hover":Hn("primary-40"),"icon-disabled":Hn("neutral-50"),"icon-disabled-subtle":Hn("neutral-60"),"icon-selected-disabled":Hn("neutral-60"),"icon-success":Hn("success-50"),"icon-warning":Hn("warning-60"),"icon-error":Hn("error-50"),"icon-error-strong":Hn("error-40"),"icon-info":Hn("info-50"),"icon-inverse":Hn("white"),"icon-primary-inverse":Hn("primary-inverse"),border:Hn("neutral-90"),"border-strong":Hn("neutral-70"),"border-stronger":Hn("neutral-50"),"border-primary":Hn("primary-50"),"border-primary-subtle":Hn("primary-60"),"border-hover":Hn("primary-90"),"border-hover-strong":Hn("primary-60"),"border-selected":Hn("primary-50"),"border-selected-subtle":Hn("primary-70"),"border-selected-subtlest":Hn("primary-90"),"border-selected-hover":Hn("primary-40"),"border-focus":Hn("primary-60"),"border-focus-strong":Hn("primary-50"),"border-disabled":Hn("neutral-90"),"border-selected-disabled":Hn("neutral-70"),"border-success":Hn("success-60"),"border-warning":Hn("warning-60"),"border-error":Hn("error-60"),"border-error-focus":Hn("error-60"),"border-error-focus-strong":Hn("error-40"),"border-error-strong":Hn("error-40"),"border-info":Hn("info-60"),bg:Hn("white"),"bg-strong":Hn("neutral-100"),"bg-stronger":Hn("neutral-95"),"bg-strongest":Hn("neutral-90"),"bg-hover":Hn("primary-95"),"bg-hover-strong":Hn("primary-90"),"bg-hover-subtle":Hn("primary-100"),"bg-hover-neutral":Hn("neutral-100"),"bg-hover-neutral-strong":Hn("neutral-90"),"bg-selected":Hn("primary-95"),"bg-selected-hover":Hn("primary-90"),"bg-selected-strong":Hn("primary-90"),"bg-selected-stronger":Hn("primary-70"),"bg-selected-strongest":Hn("primary-50"),"bg-selected-strongest-hover":Hn("primary-40"),"bg-disabled":Hn("neutral-95"),"bg-selected-disabled":Hn("neutral-95"),"bg-selected-stronger-disabled":Hn("neutral-70"),"bg-success":Hn("success-100"),"bg-success-hover":Hn("success-95"),"bg-success-strong":Hn("success-50"),"bg-success-strong-hover":Hn("success-40"),"bg-warning":Hn("warning-100"),"bg-warning-hover":Hn("warning-95"),"bg-warning-strong":Hn("warning-50"),"bg-warning-strong-hover":Hn("warning-40"),"bg-info":Hn("info-100"),"bg-info-hover":Hn("info-95"),"bg-info-strong":Hn("info-50"),"bg-info-strong-hover":Hn("info-40"),"bg-error":Hn("error-100"),"bg-error-hover":Hn("error-95"),"bg-error-strong":Hn("error-50"),"bg-error-strong-hover":Hn("error-40"),"bg-inverse":Hn("neutral-20"),"bg-inverse-subtle":Hn("neutral-30"),"bg-inverse-subtler":Hn("neutral-50"),"bg-inverse-subtlest":Hn("neutral-60"),"bg-inverse-hover":Hn("neutral-40"),"bg-primary":Hn("primary-50"),"bg-primary-subtle":Hn("primary-60"),"bg-primary-subtler":Hn("primary-95"),"bg-primary-subtlest":Hn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Hn("primary-40"),"bg-primary-subtlest-hover":Hn("primary-90"),"bg-primary-subtlest-selected":Hn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Hn("primary-50"),"hyperlink-hover":Hn("primary-40"),"hyperlink-visited":Hn("primary-40"),"hyperlink-inverse":Hn("primary-inverse"),"focus-ring":Hn("black"),"focus-ring-inverse":Hn("white")},Wn={collections:{lifesg:Pn,bookingsg:Pn,rbs:Pn,mylegacy:Pn,ccube:Pn,oneservice:Pn,pa:{text:Hn("neutral-30"),"text-subtle":Hn("neutral-40"),"text-subtler":Hn("neutral-50"),"text-subtlest":Hn("neutral-70"),"text-primary":Hn("neutral-10"),"text-hover":Hn("neutral-70"),"text-selected":Hn("neutral-20"),"text-selected-hover":Hn("neutral-10"),"text-disabled":Hn("neutral-50"),"text-disabled-subtle":Hn("neutral-60"),"text-disabled-subtlest":Hn("neutral-80"),"text-selected-disabled":Hn("neutral-40"),"text-success":Hn("success-40"),"text-warning":Hn("warning-40"),"text-error":Hn("brand-30"),"text-info":Hn("neutral-40"),"text-inverse":Hn("neutral-100"),icon:Hn("neutral-40"),"icon-subtle":Hn("neutral-50"),"icon-strongest":Hn("neutral-10"),"icon-primary":Hn("neutral-10"),"icon-primary-subtle":Hn("neutral-30"),"icon-primary-subtlest":Hn("neutral-60"),"icon-hover":Hn("neutral-70"),"icon-selected":Hn("brand-20"),"icon-selected-hover":Hn("brand-10"),"icon-disabled":Hn("neutral-50"),"icon-disabled-subtle":Hn("neutral-60"),"icon-selected-disabled":Hn("neutral-40"),"icon-success":Hn("success-40"),"icon-warning":Hn("warning-60"),"icon-error":Hn("brand-30"),"icon-error-strong":Hn("brand-10"),"icon-info":Hn("neutral-40"),"icon-inverse":Hn("neutral-100"),"icon-primary-inverse":"#F9B371",border:Hn("neutral-90"),"border-strong":Hn("neutral-30"),"border-stronger":Hn("neutral-20"),"border-primary":Hn("neutral-40"),"border-primary-subtle":Hn("neutral-60"),"border-hover":Hn("neutral-80"),"border-hover-strong":Hn("neutral-10"),"border-selected":Hn("brand-20"),"border-selected-subtle":Hn("neutral-40"),"border-selected-subtlest":Hn("neutral-70"),"border-selected-hover":Hn("neutral-10"),"border-focus":Hn("neutral-20"),"border-focus-strong":Hn("neutral-10"),"border-disabled":Hn("neutral-90"),"border-selected-disabled":Hn("neutral-80"),"border-success":Hn("success-40"),"border-warning":Hn("warning-60"),"border-error":Hn("brand-30"),"border-error-focus":Hn("brand-20"),"border-error-focus-strong":Hn("brand-10"),"border-error-strong":Hn("brand-20"),"border-info":Hn("neutral-40"),bg:Hn("neutral-100"),"bg-strong":Hn("neutral-95"),"bg-stronger":Hn("neutral-90"),"bg-strongest":Hn("neutral-80"),"bg-hover":Hn("brand-90"),"bg-hover-strong":Hn("brand-80"),"bg-hover-subtle":Hn("neutral-90"),"bg-hover-neutral":Hn("neutral-90"),"bg-hover-neutral-strong":Hn("neutral-90"),"bg-selected":Hn("brand-100"),"bg-selected-hover":Hn("brand-30"),"bg-selected-strong":Hn("brand-50"),"bg-selected-stronger":Hn("brand-40"),"bg-selected-strongest":Hn("brand-20"),"bg-selected-strongest-hover":Hn("brand-10"),"bg-disabled":Hn("neutral-90"),"bg-selected-disabled":Hn("neutral-90"),"bg-selected-stronger-disabled":Hn("neutral-80"),"bg-success":Hn("success-100"),"bg-success-hover":Hn("success-95"),"bg-success-strong":Hn("success-50"),"bg-success-strong-hover":Hn("success-40"),"bg-warning":Hn("warning-100"),"bg-warning-hover":Hn("warning-95"),"bg-warning-strong":Hn("warning-50"),"bg-warning-strong-hover":Hn("warning-40"),"bg-info":Hn("neutral-95"),"bg-info-hover":Hn("info-95"),"bg-info-strong":Hn("info-50"),"bg-info-strong-hover":Hn("info-40"),"bg-error":Hn("brand-100"),"bg-error-hover":Hn("error-95"),"bg-error-strong":Hn("error-50"),"bg-error-strong-hover":Hn("error-40"),"bg-inverse":Hn("neutral-40"),"bg-inverse-subtle":Hn("neutral-60"),"bg-inverse-subtler":Hn("neutral-70"),"bg-inverse-subtlest":Hn("neutral-80"),"bg-inverse-hover":Hn("neutral-30"),"bg-primary":Hn("brand-20"),"bg-primary-subtle":Hn("brand-60"),"bg-primary-subtler":Hn("brand-80"),"bg-primary-subtlest":Hn("brand-100"),"bg-available":Hn("success-60"),"bg-primary-hover":Hn("brand-10"),"bg-primary-subtlest-hover":Hn("brand-80"),"bg-primary-subtlest-selected":Hn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Hn("neutral-10"),"hyperlink-hover":Hn("neutral-40"),"hyperlink-visited":Hn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Hn("black"),"focus-ring-inverse":Hn("white")}},defaultValue:"lifesg"},Yn=e=>t=>{var r;const n=t.theme,o=kn(Wn,null==n?void 0:n.colourScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?zn(o,e,n.overrides.semanticColour):o[e];return"function"==typeof i?i(t):i},Nn={text:Yn("text"),"text-subtle":Yn("text-subtle"),"text-subtler":Yn("text-subtler"),"text-subtlest":Yn("text-subtlest"),"text-primary":Yn("text-primary"),"text-hover":Yn("text-hover"),"text-selected":Yn("text-selected"),"text-selected-hover":Yn("text-selected-hover"),"text-disabled":Yn("text-disabled"),"text-disabled-subtle":Yn("text-disabled-subtle"),"text-disabled-subtlest":Yn("text-disabled-subtlest"),"text-selected-disabled":Yn("text-selected-disabled"),"text-success":Yn("text-success"),"text-warning":Yn("text-warning"),"text-error":Yn("text-error"),"text-info":Yn("text-info"),"text-inverse":Yn("text-inverse"),icon:Yn("icon"),"icon-subtle":Yn("icon-subtle"),"icon-strongest":Yn("icon-strongest"),"icon-primary":Yn("icon-primary"),"icon-primary-subtle":Yn("icon-primary-subtle"),"icon-primary-subtlest":Yn("icon-primary-subtlest"),"icon-hover":Yn("icon-hover"),"icon-selected":Yn("icon-selected"),"icon-selected-hover":Yn("icon-selected-hover"),"icon-disabled":Yn("icon-disabled"),"icon-disabled-subtle":Yn("icon-disabled-subtle"),"icon-selected-disabled":Yn("icon-selected-disabled"),"icon-success":Yn("icon-success"),"icon-warning":Yn("icon-warning"),"icon-error":Yn("icon-error"),"icon-error-strong":Yn("icon-error-strong"),"icon-info":Yn("icon-info"),"icon-inverse":Yn("icon-inverse"),"icon-primary-inverse":Yn("icon-primary-inverse"),border:Yn("border"),"border-strong":Yn("border-strong"),"border-stronger":Yn("border-stronger"),"border-primary":Yn("border-primary"),"border-primary-subtle":Yn("border-primary-subtle"),"border-hover":Yn("border-hover"),"border-hover-strong":Yn("border-hover-strong"),"border-selected":Yn("border-selected"),"border-selected-subtle":Yn("border-selected-subtle"),"border-selected-subtlest":Yn("border-selected-subtlest"),"border-selected-hover":Yn("border-selected-hover"),"border-focus":Yn("border-focus"),"border-focus-strong":Yn("border-focus-strong"),"border-disabled":Yn("border-disabled"),"border-selected-disabled":Yn("border-selected-disabled"),"border-success":Yn("border-success"),"border-warning":Yn("border-warning"),"border-error":Yn("border-error"),"border-error-focus":Yn("border-error-focus"),"border-error-focus-strong":Yn("border-error-focus-strong"),"border-error-strong":Yn("border-error-strong"),"border-info":Yn("border-info"),bg:Yn("bg"),"bg-strong":Yn("bg-strong"),"bg-stronger":Yn("bg-stronger"),"bg-strongest":Yn("bg-strongest"),"bg-hover":Yn("bg-hover"),"bg-hover-strong":Yn("bg-hover-strong"),"bg-hover-subtle":Yn("bg-hover-subtle"),"bg-hover-neutral":Yn("bg-hover-neutral"),"bg-hover-neutral-strong":Yn("bg-hover-neutral-strong"),"bg-selected":Yn("bg-selected"),"bg-selected-hover":Yn("bg-selected-hover"),"bg-selected-strong":Yn("bg-selected-strong"),"bg-selected-stronger":Yn("bg-selected-stronger"),"bg-selected-strongest":Yn("bg-selected-strongest"),"bg-selected-strongest-hover":Yn("bg-selected-strongest-hover"),"bg-disabled":Yn("bg-disabled"),"bg-selected-disabled":Yn("bg-selected-disabled"),"bg-selected-stronger-disabled":Yn("bg-selected-stronger-disabled"),"bg-success":Yn("bg-success"),"bg-success-hover":Yn("bg-success-hover"),"bg-success-strong":Yn("bg-success-strong"),"bg-success-strong-hover":Yn("bg-success-strong-hover"),"bg-warning":Yn("bg-warning"),"bg-warning-hover":Yn("bg-warning-hover"),"bg-warning-strong":Yn("bg-warning-strong"),"bg-warning-strong-hover":Yn("bg-warning-strong-hover"),"bg-info":Yn("bg-info"),"bg-info-hover":Yn("bg-info-hover"),"bg-info-strong":Yn("bg-info-strong"),"bg-info-strong-hover":Yn("bg-info-strong-hover"),"bg-error":Yn("bg-error"),"bg-error-hover":Yn("bg-error-hover"),"bg-error-strong":Yn("bg-error-strong"),"bg-error-strong-hover":Yn("bg-error-strong-hover"),"bg-inverse":Yn("bg-inverse"),"bg-inverse-subtle":Yn("bg-inverse-subtle"),"bg-inverse-subtler":Yn("bg-inverse-subtler"),"bg-inverse-subtlest":Yn("bg-inverse-subtlest"),"bg-inverse-hover":Yn("bg-inverse-hover"),"bg-primary":Yn("bg-primary"),"bg-primary-subtle":Yn("bg-primary-subtle"),"bg-primary-subtler":Yn("bg-primary-subtler"),"bg-primary-subtlest":Yn("bg-primary-subtlest"),"bg-available":Yn("bg-available"),"bg-primary-hover":Yn("bg-primary-hover"),"bg-primary-subtlest-hover":Yn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Yn("bg-primary-subtlest-selected"),"overlay-strong":Yn("overlay-strong"),"overlay-subtle":Yn("overlay-subtle"),hyperlink:Yn("hyperlink"),"hyperlink-hover":Yn("hyperlink-hover"),"hyperlink-visited":Yn("hyperlink-visited"),"hyperlink-inverse":Yn("hyperlink-inverse"),"focus-ring":Yn("focus-ring"),"focus-ring-inverse":Yn("focus-ring-inverse")},Vn={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Mn["width-010"](t),c=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,d=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:Nn.border(t),u=Mn.solid;return T`
            border: ${l} ${u} ${d};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Mn["width-010"](t),c=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,d=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:Nn.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return T`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"default"},Un=e=>1===e.length&&"theme"in e[0],qn=e=>(...t)=>r=>{const n=Un(t)?[]:t,o=Un(t)?t[0]:r,i=o.theme;return(0,kn(Vn,null==i?void 0:i.borderScheme)[e])(...n)(o)},Gn={solid:qn("solid"),"dashed-default":qn("dashed-default")},Zn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Xn=e=>t=>{var r;const n=t.theme,o=kn(Zn,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?zn(o,e,n.overrides.breakpoint):o[e],i},Qn={"xxs-min":Xn("xxs-min"),"xxs-max":Xn("xxs-max"),"xs-min":Xn("xs-min"),"xs-max":Xn("xs-max"),"sm-min":Xn("sm-min"),"sm-max":Xn("sm-max"),"md-min":Xn("md-min"),"md-max":Xn("md-max"),"lg-min":Xn("lg-min"),"lg-max":Xn("lg-max"),"xl-min":Xn("xl-min"),"xl-max":Xn("xl-max"),"xxl-min":Xn("xxl-min"),"xxs-column":Xn("xxs-column"),"xs-column":Xn("xs-column"),"sm-column":Xn("sm-column"),"md-column":Xn("md-column"),"lg-column":Xn("lg-column"),"xl-column":Xn("xl-column"),"xxl-column":Xn("xxl-column"),"xxs-gutter":Xn("xxs-gutter"),"xs-gutter":Xn("xs-gutter"),"sm-gutter":Xn("sm-gutter"),"md-gutter":Xn("md-gutter"),"lg-gutter":Xn("lg-gutter"),"xl-gutter":Xn("xl-gutter"),"xxl-gutter":Xn("xxl-gutter"),"xxs-margin":Xn("xxs-margin"),"xs-margin":Xn("xs-margin"),"sm-margin":Xn("sm-margin"),"md-margin":Xn("md-margin"),"lg-margin":Xn("lg-margin"),"xl-margin":Xn("xl-margin"),"xxl-margin":Xn("xxl-margin")},Jn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Qn["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Kn={MaxWidth:Jn("max-width"),MinWidth:Jn("min-width")},eo={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},to=e=>t=>{var r;const n=t.theme,o=kn(eo,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?zn(o,e,n.overrides.fontSpec):o[e]},ro={"heading-size-xxl":to("heading-size-xxl"),"heading-size-xl":to("heading-size-xl"),"heading-size-lg":to("heading-size-lg"),"heading-size-md":to("heading-size-md"),"heading-size-sm":to("heading-size-sm"),"heading-size-xs":to("heading-size-xs"),"heading-lh-xxl":to("heading-lh-xxl"),"heading-lh-xl":to("heading-lh-xl"),"heading-lh-lg":to("heading-lh-lg"),"heading-lh-md":to("heading-lh-md"),"heading-lh-sm":to("heading-lh-sm"),"heading-lh-xs":to("heading-lh-xs"),"heading-ls-xxl":to("heading-ls-xxl"),"heading-ls-xl":to("heading-ls-xl"),"heading-ls-lg":to("heading-ls-lg"),"heading-ls-md":to("heading-ls-md"),"heading-ls-sm":to("heading-ls-sm"),"heading-ls-xs":to("heading-ls-xs"),"weight-light":to("weight-light"),"weight-regular":to("weight-regular"),"weight-semibold":to("weight-semibold"),"weight-bold":to("weight-bold"),"font-family":to("font-family"),"body-size-baseline":to("body-size-baseline"),"body-size-md":to("body-size-md"),"body-size-sm":to("body-size-sm"),"body-size-xs":to("body-size-xs"),"body-lh-baseline":to("body-lh-baseline"),"body-lh-md":to("body-lh-md"),"body-lh-sm":to("body-lh-sm"),"body-lh-xs":to("body-lh-xs"),"body-ls-baseline":to("body-ls-baseline"),"body-ls-md":to("body-ls-md"),"body-ls-sm":to("body-ls-sm"),"body-ls-xs":to("body-ls-xs"),"form-label-size":to("form-label-size"),"form-description-size":to("form-description-size"),"form-label-lh":to("form-label-lh"),"form-description-lh":to("form-description-lh"),"form-label-ls":to("form-label-ls"),"form-description-ls":to("form-description-ls")},no=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return T`
        font-family: ${to("font-family")};
        font-size: ${to(e)};
        font-weight: ${to(t)};
        line-height: ${to(r)};
        letter-spacing: ${to(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},oo=(e={})=>({"heading-xxl-light":no("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":no("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":no("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":no("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":no("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":no("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":no("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":no("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":no("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":no("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":no("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":no("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":no("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":no("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":no("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":no("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":no("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":no("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":no("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":no("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":no("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":no("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":no("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":no("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":no("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":no("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":no("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":no("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":no("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":no("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":no("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":no("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":no("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":no("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":no("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":no("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":no("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":no("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":no("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":no("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":no("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":no("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),io=oo({disableLigatures:!0}),so={collections:{default:oo(),bookingsg:io,pa:oo({disableLigatures:!0})},defaultValue:"default"},ao=e=>t=>{var r;const n=t.theme,o=kn(so,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?zn(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},lo={"heading-xxl-light":ao("heading-xxl-light"),"heading-xxl-regular":ao("heading-xxl-regular"),"heading-xxl-semibold":ao("heading-xxl-semibold"),"heading-xxl-bold":ao("heading-xxl-bold"),"heading-xl-light":ao("heading-xl-light"),"heading-xl-regular":ao("heading-xl-regular"),"heading-xl-semibold":ao("heading-xl-semibold"),"heading-xl-bold":ao("heading-xl-bold"),"heading-lg-light":ao("heading-lg-light"),"heading-lg-regular":ao("heading-lg-regular"),"heading-lg-semibold":ao("heading-lg-semibold"),"heading-lg-bold":ao("heading-lg-bold"),"heading-md-light":ao("heading-md-light"),"heading-md-regular":ao("heading-md-regular"),"heading-md-semibold":ao("heading-md-semibold"),"heading-md-bold":ao("heading-md-bold"),"heading-sm-light":ao("heading-sm-light"),"heading-sm-regular":ao("heading-sm-regular"),"heading-sm-semibold":ao("heading-sm-semibold"),"heading-sm-bold":ao("heading-sm-bold"),"heading-xs-light":ao("heading-xs-light"),"heading-xs-regular":ao("heading-xs-regular"),"heading-xs-semibold":ao("heading-xs-semibold"),"heading-xs-bold":ao("heading-xs-bold"),"body-baseline-light":ao("body-baseline-light"),"body-baseline-regular":ao("body-baseline-regular"),"body-baseline-semibold":ao("body-baseline-semibold"),"body-baseline-bold":ao("body-baseline-bold"),"body-md-light":ao("body-md-light"),"body-md-regular":ao("body-md-regular"),"body-md-semibold":ao("body-md-semibold"),"body-md-bold":ao("body-md-bold"),"body-sm-light":ao("body-sm-light"),"body-sm-regular":ao("body-sm-regular"),"body-sm-semibold":ao("body-sm-semibold"),"body-sm-bold":ao("body-sm-bold"),"body-xs-light":ao("body-xs-light"),"body-xs-regular":ao("body-xs-regular"),"body-xs-semibold":ao("body-xs-semibold"),"body-xs-bold":ao("body-xs-bold"),"form-label":ao("form-label"),"form-description":ao("form-description")},co={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},uo=e=>t=>{var r;const n=t.theme,o=kn(co,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?zn(o,e,n.overrides.motion):o[e]},ho={"duration-150":uo("duration-150"),"duration-250":uo("duration-250"),"duration-350":uo("duration-350"),"duration-500":uo("duration-500"),"duration-800":uo("duration-800"),"duration-1000":uo("duration-1000"),"ease-default":uo("ease-default"),"ease-standard":uo("ease-standard"),"ease-entrance":uo("ease-entrance"),"ease-exit":uo("ease-exit")},fo={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},go=e=>t=>{var r;const n=t.theme,o=kn(fo,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${zn(o,e,n.overrides.radius)}px`:`${o[e]}px`},mo={none:go("none"),xs:go("xs"),sm:go("sm"),md:go("md"),lg:go("lg"),full:go("full")},po={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},bo=e=>t=>{var r;const n=t.theme,o=kn(po,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${zn(o,e,n.overrides.spacing)}px`:`${o[e]}px`},vo={"spacing-0":bo("spacing-0"),"spacing-4":bo("spacing-4"),"spacing-8":bo("spacing-8"),"spacing-12":bo("spacing-12"),"spacing-16":bo("spacing-16"),"spacing-20":bo("spacing-20"),"spacing-24":bo("spacing-24"),"spacing-32":bo("spacing-32"),"spacing-40":bo("spacing-40"),"spacing-48":bo("spacing-48"),"spacing-64":bo("spacing-64"),"spacing-72":bo("spacing-72"),"layout-xs":bo("layout-xs"),"layout-sm":bo("layout-sm"),"layout-md":bo("layout-md"),"layout-lg":bo("layout-lg"),"layout-xl":bo("layout-xl"),"layout-xxl":bo("layout-xxl"),"layout-xxxl":bo("layout-xxxl")},yo=Object.assign(Object.assign({},Nn),{Primitive:Ln}),xo=Object.assign(Object.assign({},lo),{Spec:ro}),wo=ho,$o=Object.assign(Object.assign({},Mn),{Util:Gn}),Fo=vo,Co=mo,Eo=Qn,So=Kn;var To;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const s=n+i;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),s=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(To||(To={}));const Do=e=>T`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Io=S.div`
    font-weight: ${e=>e.$bold?xo.Spec["weight-semibold"]:xo.Spec["weight-regular"]};

    ${e=>e.$disabled?T`
                color: ${yo["text-disabled"]};
            `:e.$selected?T`
                color: ${yo["text-selected"]};
            `:T`
                color: ${yo.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Do(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Oo=S.div`
    color: ${yo["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Do(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?T`
                    ${xo["body-md-semibold"]}
                `:T`
                    ${xo["body-baseline-regular"]}
                `}
`,Bo=S.span`
    font-weight: ${xo.Spec["weight-semibold"]};
`,zo=S.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?xo["body-md-regular"]:xo["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return T`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return T`
                    ${Io} {
                        display: inline;
                    }

                    ${Oo} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,ko=S.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Ao=S.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,jo=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:a=2,selected:l,disabled:c,sublabel:d,truncationType:u="middle",variant:h="default"})=>{const f=D(),g="small"===h?xo.Spec["body-size-md"]({theme:f}):xo.Spec["body-size-baseline"]({theme:f}),m=xo.Spec["font-family"]({theme:f}),{ref:p,width:b}=tt(),v=x((e=>{if("inline"!==o||!b)return!1;return To.getTextWidth(e,`${g} '${m}'`)>b*a-50}),[b,o,g,m,a]),y=w((()=>v(i)),[v,i]),$=w((()=>d&&v(d)),[v,d]),F=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(r,{children:[i.slice(0,a),t(Bo,{$variant:h,children:i.slice(a,l)}),i.slice(l)]})},C=n=>e(r,{children:[t(ko,{$maxLines:a,"aria-hidden":!0,children:F(n)}),t(Ao,{$maxLines:a,"aria-hidden":!0,children:F(n)})]});return e(zo,{ref:p,$labelDisplayType:y||$?"next-line":o,$variant:h,children:[t(Io,{"aria-label":i,$bold:n,$maxLines:a,$selected:l,$disabled:c,$truncateType:u,children:"middle"===u&&y?C(i):F(i)}),d&&t(Oo,{"aria-label":d,$maxLines:a,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&$?C(d):d})]})};var Mo=Mr;var _o=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Ro=function(e){return this.__data__.get(e)};var Ho=function(e){return this.__data__.has(e)},Lo=Mr,Po=_r,Wo=nn;var Yo=function(e,t){var r=this.__data__;if(r instanceof Lo){var n=r.__data__;if(!Po||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Wo(n)}return r.set(e,t),this.size=r.size,this},No=Mr,Vo=function(){this.__data__=new Mo,this.size=0},Uo=_o,qo=Ro,Go=Ho,Zo=Yo;function Xo(e){var t=this.__data__=new No(e);this.size=t.size}Xo.prototype.clear=Vo,Xo.prototype.delete=Uo,Xo.prototype.get=qo,Xo.prototype.has=Go,Xo.prototype.set=Zo;var Qo=Xo;var Jo=nn,Ko=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},ei=function(e){return this.__data__.has(e)};function ti(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Jo;++t<r;)this.add(e[t])}ti.prototype.add=ti.prototype.push=Ko,ti.prototype.has=ei;var ri=function(e,t){return e.has(t)},ni=ti,oi=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},ii=ri;var si=function(e,t,r,n,o,i){var s=1&r,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,f=2&r?new ni:void 0;for(i.set(e,t),i.set(t,e);++u<a;){var g=e[u],m=t[u];if(n)var p=s?n(m,g,u,t,e,i):n(g,m,u,e,t,i);if(void 0!==p){if(p)continue;h=!1;break}if(f){if(!oi(t,(function(e,t){if(!ii(f,t)&&(g===e||o(g,e,r,n,i)))return f.push(t)}))){h=!1;break}}else if(g!==m&&!o(g,m,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var ai=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var li=st.Uint8Array,ci=vr,di=si,ui=ai,hi=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},fi=at?at.prototype:void 0,gi=fi?fi.valueOf:void 0;var mi=function(e,t,r,n,o,i,s){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new li(e),new li(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ci(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=ui;case"[object Set]":var l=1&n;if(a||(a=hi),e.size!=t.size&&!l)return!1;var c=s.get(e);if(c)return c==t;n|=2,s.set(e,t);var d=di(a(e),a(t),n,o,i,s);return s.delete(e),d;case"[object Symbol]":if(gi)return gi.call(e)==gi.call(t)}return!1};var pi=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},bi=pi,vi=rt;var yi=function(e,t,r){var n=t(e);return vi(e)?n:bi(n,r(e))};var xi=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[o++]=s)}return i},wi=function(){return[]},$i=Object.prototype.propertyIsEnumerable,Fi=Object.getOwnPropertySymbols,Ci=Fi?function(e){return null==e?[]:(e=Object(e),xi(Fi(e),(function(t){return $i.call(e,t)})))}:wi;var Ei=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Si=vt,Ti=yt;var Di=function(e){return Ti(e)&&"[object Arguments]"==Si(e)},Ii=yt,Oi=Object.prototype,Bi=Oi.hasOwnProperty,zi=Oi.propertyIsEnumerable,ki=Di(function(){return arguments}())?Di:function(e){return Ii(e)&&Bi.call(e,"callee")&&!zi.call(e,"callee")},Ai={exports:{}};var ji=function(){return!1};!function(e,t){var r=st,n=ji,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,s=i&&i.exports===o?r.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(Ai,Ai.exports);var Mi=Ai.exports,_i=/^(?:0|[1-9]\d*)$/;var Ri=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&_i.test(e))&&e>-1&&e%1==0&&e<t};var Hi=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Li=vt,Pi=Hi,Wi=yt,Yi={};Yi["[object Float32Array]"]=Yi["[object Float64Array]"]=Yi["[object Int8Array]"]=Yi["[object Int16Array]"]=Yi["[object Int32Array]"]=Yi["[object Uint8Array]"]=Yi["[object Uint8ClampedArray]"]=Yi["[object Uint16Array]"]=Yi["[object Uint32Array]"]=!0,Yi["[object Arguments]"]=Yi["[object Array]"]=Yi["[object ArrayBuffer]"]=Yi["[object Boolean]"]=Yi["[object DataView]"]=Yi["[object Date]"]=Yi["[object Error]"]=Yi["[object Function]"]=Yi["[object Map]"]=Yi["[object Number]"]=Yi["[object Object]"]=Yi["[object RegExp]"]=Yi["[object Set]"]=Yi["[object String]"]=Yi["[object WeakMap]"]=!1;var Ni=function(e){return Wi(e)&&Pi(e.length)&&!!Yi[Li(e)]};var Vi=function(e){return function(t){return e(t)}},Ui={exports:{}};!function(e,t){var r=nt,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,s=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s}(Ui,Ui.exports);var qi=Ui.exports,Gi=Ni,Zi=Vi,Xi=qi&&qi.isTypedArray,Qi=Xi?Zi(Xi):Gi,Ji=Ei,Ki=ki,es=rt,ts=Mi,rs=Ri,ns=Qi,os=Object.prototype.hasOwnProperty;var is=function(e,t){var r=es(e),n=!r&&Ki(e),o=!r&&!n&&ts(e),i=!r&&!n&&!o&&ns(e),s=r||n||o||i,a=s?Ji(e.length,String):[],l=a.length;for(var c in e)!t&&!os.call(e,c)||s&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||rs(c,l))||a.push(c);return a},ss=Object.prototype;var as=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ss)};var ls=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),cs=as,ds=ls,us=Object.prototype.hasOwnProperty;var hs=function(e){if(!cs(e))return ds(e);var t=[];for(var r in Object(e))us.call(e,r)&&"constructor"!=r&&t.push(r);return t},fs=zt,gs=Hi;var ms=function(e){return null!=e&&gs(e.length)&&!fs(e)},ps=is,bs=hs,vs=ms;var ys=function(e){return vs(e)?ps(e):bs(e)},xs=yi,ws=Ci,$s=ys;var Fs=function(e){return xs(e,$s,ws)},Cs=Object.prototype.hasOwnProperty;var Es=function(e,t,r,n,o,i){var s=1&r,a=Fs(e),l=a.length;if(l!=Fs(t).length&&!s)return!1;for(var c=l;c--;){var d=a[c];if(!(s?d in t:Cs.call(t,d)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var g=s;++c<l;){var m=e[d=a[c]],p=t[d];if(n)var b=s?n(p,m,d,t,e,i):n(m,p,d,e,t,i);if(!(void 0===b?m===p||o(m,p,r,n,i):b)){f=!1;break}g||(g="constructor"==d)}if(f&&!g){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(f=!1)}return i.delete(e),i.delete(t),f},Ss=Qt(st,"DataView"),Ts=_r,Ds=Qt(st,"Promise"),Is=Qt(st,"Set"),Os=Qt(st,"WeakMap"),Bs=vt,zs=_t,ks="[object Map]",As="[object Promise]",js="[object Set]",Ms="[object WeakMap]",_s="[object DataView]",Rs=zs(Ss),Hs=zs(Ts),Ls=zs(Ds),Ps=zs(Is),Ws=zs(Os),Ys=Bs;(Ss&&Ys(new Ss(new ArrayBuffer(1)))!=_s||Ts&&Ys(new Ts)!=ks||Ds&&Ys(Ds.resolve())!=As||Is&&Ys(new Is)!=js||Os&&Ys(new Os)!=Ms)&&(Ys=function(e){var t=Bs(e),r="[object Object]"==t?e.constructor:void 0,n=r?zs(r):"";if(n)switch(n){case Rs:return _s;case Hs:return ks;case Ls:return As;case Ps:return js;case Ws:return Ms}return t});var Ns=Qo,Vs=si,Us=mi,qs=Es,Gs=Ys,Zs=rt,Xs=Mi,Qs=Qi,Js="[object Arguments]",Ks="[object Array]",ea="[object Object]",ta=Object.prototype.hasOwnProperty;var ra=function(e,t,r,n,o,i){var s=Zs(e),a=Zs(t),l=s?Ks:Gs(e),c=a?Ks:Gs(t),d=(l=l==Js?ea:l)==ea,u=(c=c==Js?ea:c)==ea,h=l==c;if(h&&Xs(e)){if(!Xs(t))return!1;s=!0,d=!1}if(h&&!d)return i||(i=new Ns),s||Qs(e)?Vs(e,t,r,n,o,i):Us(e,t,l,r,n,o,i);if(!(1&r)){var f=d&&ta.call(e,"__wrapped__"),g=u&&ta.call(t,"__wrapped__");if(f||g){var m=f?e.value():e,p=g?t.value():t;return i||(i=new Ns),o(m,p,r,n,i)}}return!!h&&(i||(i=new Ns),qs(e,t,r,n,o,i))},na=yt;var oa=function e(t,r,n,o,i){return t===r||(null==t||null==r||!na(t)&&!na(r)?t!=t&&r!=r:ra(t,r,n,o,e,i))},ia=Qo,sa=oa;var aa=function(e,t,r,n){var o=r.length,i=o,s=!n;if(null==e)return!i;for(e=Object(e);o--;){var a=r[o];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++o<i;){var l=(a=r[o])[0],c=e[l],d=a[1];if(s&&a[2]){if(void 0===c&&!(l in e))return!1}else{var u=new ia;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?sa(d,c,3,n,u):h))return!1}}return!0},la=Dt;var ca=function(e){return e==e&&!la(e)},da=ca,ua=ys;var ha=function(e){for(var t=ua(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,da(o)]}return t};var fa=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},ga=aa,ma=ha,pa=fa;var ba=function(e,t){return null!=e&&t in Object(e)},va=Fn,ya=ki,xa=rt,wa=Ri,$a=Hi,Fa=En;var Ca=function(e,t,r){for(var n=-1,o=(t=va(t,e)).length,i=!1;++n<o;){var s=Fa(t[n]);if(!(i=null!=e&&r(e,s)))break;e=e[s]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&$a(o)&&wa(s,o)&&(xa(e)||ya(e))},Ea=ba,Sa=Ca;var Ta=oa,Da=On,Ia=function(e,t){return null!=e&&Sa(e,t,Ea)},Oa=Tt,Ba=ca,za=fa,ka=En;var Aa=function(e){return function(t){return null==t?void 0:t[e]}},ja=Dn;var Ma=Aa,_a=function(e){return function(t){return ja(t,e)}},Ra=Tt,Ha=En;var La=function(e){var t=ma(e);return 1==t.length&&t[0][2]?pa(t[0][0],t[0][1]):function(r){return r===e||ga(r,e,t)}},Pa=function(e,t){return Oa(e)&&Ba(t)?za(ka(e),t):function(r){var n=Da(r,e);return void 0===n&&n===t?Ia(r,e):Ta(t,n,3)}},Wa=function(e){return e},Ya=rt,Na=function(e){return Ra(e)?Ma(Ha(e)):_a(e)};var Va=function(e){return"function"==typeof e?e:null==e?Wa:"object"==typeof e?Ya(e)?Pa(e[0],e[1]):La(e):Na(e)},Ua=Va,qa=ms,Ga=ys;var Za=function(e){return function(t,r,n){var o=Object(t);if(!qa(t)){var i=Ua(r);t=Ga(t),r=function(e){return i(o[e],e,o)}}var s=e(t,r,n);return s>-1?o[i?t[s]:s]:void 0}};var Xa=/\s/;var Qa=function(e){for(var t=e.length;t--&&Xa.test(e.charAt(t)););return t},Ja=/^\s+/;var Ka=function(e){return e?e.slice(0,Qa(e)+1).replace(Ja,""):e},el=Dt,tl=$t,rl=/^[-+]0x[0-9a-f]+$/i,nl=/^0b[01]+$/i,ol=/^0o[0-7]+$/i,il=parseInt;var sl=function(e){if("number"==typeof e)return e;if(tl(e))return NaN;if(el(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=el(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ka(e);var r=nl.test(e);return r||ol.test(e)?il(e.slice(2),r?2:8):rl.test(e)?NaN:+e},al=1/0;var ll=function(e){return e?(e=sl(e))===al||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var cl=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},dl=Va,ul=function(e){var t=ll(e),r=t%1;return t==t?r?t-r:t:0},hl=Math.max;var fl=ne(Za((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ul(r);return o<0&&(o=hl(n+o,0)),cl(e,dl(t),o)}))),gl=oa;var ml=ne((function(e,t){return gl(e,t)}));function pl(e){return()=>e}function bl(e){e()}function vl(e,t){return r=>e(t(r))}function yl(e,t){return()=>e(t)}function xl(e,t){return r=>e(t,r)}function wl(e){return void 0!==e}function $l(){}function Fl(e,t){return t(e),e}function Cl(e,t){return t(e)}function El(...e){return e}function Sl(e,t){return e(1,t)}function Tl(e,t){e(0,t)}function Dl(e){e(2)}function Il(e){return e(4)}function Ol(e,t){return Sl(e,xl(t,0))}function Bl(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function zl(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function kl(e,t){return e===t}function Al(e=kl){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function jl(e){return t=>r=>{e(r)&&t(r)}}function Ml(e){return t=>vl(t,e)}function _l(e){return t=>()=>{t(e)}}function Rl(e,...t){const r=function(...e){return t=>e.reduceRight(Cl,t)}(...t);return(t,n)=>{switch(t){case 2:return void Dl(e);case 1:return Sl(e,r(n))}}}function Hl(e,t){return r=>n=>{r(t=e(t,n))}}function Ll(e){return t=>r=>{e>0?e--:t(r)}}function Pl(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Wl(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);Sl(e,(e=>{const a=r;r|=s,t[i]=e,a!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const s=()=>{e([i].concat(t))};r===o?s():n=s}}function Yl(e){let t=e;const r=Vl();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Nl(e,t){return Fl(Yl(t),(t=>Ol(e,t)))}function Vl(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Ul(e){return Fl(Vl(),(t=>Ol(e,t)))}function ql(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Gl(),singleton:r}}const Gl=()=>Symbol();function Zl(...e){const t=Vl(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);Sl(e,(e=>{r[i]=e,n|=s,n===o&&Tl(t,r)}))})),function(e,i){switch(e){case 2:return void Dl(t);case 1:return n===o&&i(r),Sl(t,i)}}}function Xl(e,t=kl){return Rl(e,Al(t))}function Ql(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(bl)}}(...e.map((e=>Sl(e,r))))}}}var Jl=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Jl||{});const Kl={0:"debug",3:"error",1:"log",2:"warn"},ec=ql((()=>{const e=Yl(3);return{log:Yl(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:Il(e))&&console[Kl[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function tc(e,t,r){return rc(e,t,r).callbackRef}function rc(e,t,r){const n=u.useRef(null);let o=e=>{};if(typeof ResizeObserver<"u"){const i=u.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);o=e=>{e&&t?(i.observe(e),n.current=e):(n.current&&i.unobserve(n.current),n.current=null)}}return{callbackRef:o,ref:n}}function nc(e,t,r,n,o,i,s,a,l){const c=u.useCallback((r=>{const l=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let s=0;s<o;s++){const o=e.item(s);if(void 0===o.dataset.index)continue;const a=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),c=t(o,r);if(0===c&&n("Zero-sized element, this should not happen",{child:o},Jl.ERROR),c===l)continue;const d=i[i.length-1];0===i.length||d.size!==c||d.endIndex!==a-1?i.push({endIndex:a,size:c,startIndex:a}):i[i.length-1].endIndex++}return i}(r.children,t,a?"offsetWidth":"offsetHeight",o);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?a?s.scrollLeft:s.scrollTop:d?a?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:a?c.scrollLeft:c.scrollTop,h=s?a?s.scrollWidth:s.scrollHeight:d?a?document.documentElement.scrollWidth:document.documentElement.scrollHeight:a?c.scrollWidth:c.scrollHeight,f=s?a?s.offsetWidth:s.offsetHeight:d?a?window.innerWidth:window.innerHeight:a?c.offsetWidth:c.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:f}),null==i||i(a?oc("column-gap",getComputedStyle(r).columnGap,o):oc("row-gap",getComputedStyle(r).rowGap,o)),null!==l&&e(l)}),[e,t,o,i,s,n]);return rc(c,r,l)}function oc(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Jl.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function ic(e,t,r){const n=u.useRef(null),o=u.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let s,a;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;a=e.height-Math.max(0,r),s=r+t.scrollTop}else a=window.innerHeight-Math.max(0,o.top),s=o.top+window.pageYOffset;n.current={offsetTop:s,visibleHeight:a,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:i,ref:s}=rc(o,!0,r),a=u.useCallback((()=>{o(s.current)}),[o,s]);return u.useEffect((()=>{if(t){t.addEventListener("scroll",a);const e=new ResizeObserver((()=>{requestAnimationFrame(a)}));return e.observe(t),()=>{t.removeEventListener("scroll",a),e.unobserve(t)}}return window.addEventListener("scroll",a),window.addEventListener("resize",a),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}}),[a,t]),i}const sc=ql((()=>{const e=Vl(),t=Vl(),r=Yl(0),n=Vl(),o=Yl(0),i=Vl(),s=Vl(),a=Yl(0),l=Yl(0),c=Yl(0),d=Yl(0),u=Vl(),h=Vl(),f=Yl(!1),g=Yl(!1),m=Yl(!1);return Ol(Rl(e,Ml((({scrollTop:e})=>e))),t),Ol(Rl(e,Ml((({scrollHeight:e})=>e))),s),Ol(t,o),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:a,horizontalDirection:g,scrollBy:h,scrollContainerState:e,scrollHeight:s,scrollingInProgress:f,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:m,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),ac={lvl:0};function lc(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let s=1;s<r;s++){const{index:r,value:a}=t(e[s]);i.push({end:r-1,start:n,value:o}),n=r,o=a}return i.push({end:1/0,start:n,value:o}),i}function cc(e){return e===ac}function dc(e,t){if(!cc(e))return t===e.k?e.v:t<e.k?dc(e.l,t):dc(e.r,t)}function uc(e,t,r="k"){if(cc(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=uc(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return uc(e.l,t,r)}function hc(e,t,r){return cc(e)?Fc(t,r,1):t===e.k?yc(e,{k:t,v:r}):t<e.k?Cc(yc(e,{l:hc(e.l,t,r)})):Cc(yc(e,{r:hc(e.r,t,r)}))}function fc(){return ac}function gc(e,t,r){if(cc(e))return[];return function(e){return lc(e,(({k:e,v:t})=>({index:e,value:t})))}(bc(e,uc(e,t)[0],r))}function mc(e,t){if(cc(e))return ac;const{k:r,l:n,r:o}=e;if(t===r){if(cc(n))return o;if(cc(o))return n;{const[t,r]=$c(n);return vc(yc(e,{k:t,l:xc(n),v:r}))}}return vc(yc(e,t<r?{l:mc(n,t)}:{r:mc(o,t)}))}function pc(e){return cc(e)?[]:[...pc(e.l),{k:e.k,v:e.v},...pc(e.r)]}function bc(e,t,r){if(cc(e))return[];const{k:n,l:o,r:i,v:s}=e;let a=[];return n>t&&(a=a.concat(bc(o,t,r))),n>=t&&n<=r&&a.push({k:n,v:s}),n<=r&&(a=a.concat(bc(i,t,r))),a}function vc(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(wc(t))return Ec(yc(e,{lvl:r-1}));if(!cc(t)&&!cc(t.r))return yc(t.r,{l:yc(t,{r:t.r.l}),lvl:r,r:yc(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(wc(e))return Sc(yc(e,{lvl:r-1}));if(cc(n)||cc(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=wc(t)?n.lvl-1:n.lvl;return yc(t,{l:yc(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:Sc(yc(n,{l:t.r,lvl:o}))})}}function yc(e,t){return Fc(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function xc(e){return cc(e.r)?e.l:vc(yc(e,{r:xc(e.r)}))}function wc(e){return cc(e)||e.lvl>e.r.lvl}function $c(e){return cc(e.r)?[e.k,e.v]:$c(e.r)}function Fc(e,t,r,n=ac,o=ac){return{k:e,l:n,lvl:r,r:o,v:t}}function Cc(e){return Sc(Ec(e))}function Ec(e){const{l:t}=e;return cc(t)||t.lvl!==e.lvl?e:yc(t,{r:yc(e,{l:t.r})})}function Sc(e){const{lvl:t,r:r}=e;return cc(r)||cc(r.r)||r.lvl!==t||r.r.lvl!==t?e:yc(r,{l:yc(e,{r:r.l}),lvl:t+1})}function Tc(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function Dc(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const Ic=ql((()=>({recalcInProgress:Yl(!1)})),[],{singleton:!0});function Oc(e,t,r){return e[Bc(e,t,r)]}function Bc(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),s=r(e[i],t);if(0===s)return i;if(-1===s){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function zc(e,t){return Math.round(e.getBoundingClientRect()[t])}function kc(e){return!cc(e.groupOffsetTree)}function Ac({index:e},t){return t===e?0:t<e?-1:1}function jc({offset:e},t){return t===e?0:t<e?-1:1}function Mc(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=Oc(t,e,Ac),s=e-n,a=i*s+(s-1)*r+o;return a>0?a+r:a}function _c(e,t){if(!kc(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function Rc(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=_c("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function Hc(e,t,r,n=0){return n>0&&(t=Math.max(t,Oc(e,n,Ac).offset)),lc(function(e,t,r,n){const o=Bc(e,t,n),i=Bc(e,r,n,o);return e.slice(o,i+1)}(e,t,r,jc),Yc)}function Lc(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,Jl.DEBUG);const i=e.sizeTree;let s=i,a=0;if(r.length>0&&cc(i)&&2===t.length){const e=t[0].size,n=t[1].size;s=r.reduce(((t,r)=>hc(hc(t,r,e),r+1,n)),s)}else[s,a]=function(e,t){let r=cc(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),cc(e)){e=hc(e,0,o);continue}const s=gc(e,i-1,t+1);if(s.some(Nc(n)))continue;let a=!1,l=!1;for(const{end:r,start:n,value:i}of s)a?(t>=n||o===i)&&(e=mc(e,n)):(l=i!==o,a=!0),r>t&&t>=n&&i!==o&&(e=hc(e,t+1,i));l&&(e=hc(e,i,o))}return[e,r]}(s,t);if(s===i)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=Wc(e.offsetTree,a,s,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>hc(e,t,Mc(t,u,o))),fc()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:s}}function Pc(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Wc(e,t,r,n){let o=e,i=0,s=0,a=0,l=0;if(0!==t){l=Bc(o,t-1,Ac),a=o[l].offset;const e=uc(r,t-1);i=e[0],s=e[1],o.length&&o[l].size===uc(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of gc(r,t,1/0)){const t=e-i,r=t*s+a+t*n;o.push({index:e,offset:r,size:l}),i=e,a=r,s=l}return{lastIndex:i,lastOffset:a,lastSize:s,offsetTree:o}}function Yc(e){return{index:e.index,value:e}}function Nc(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Vc={offsetHeight:"height",offsetWidth:"width"},Uc=ql((([{log:e},{recalcInProgress:t}])=>{const r=Vl(),n=Vl(),o=Nl(n,0),i=Vl(),s=Vl(),a=Yl(0),l=Yl([]),c=Yl(void 0),d=Yl(void 0),u=Yl(((e,t)=>zc(e,Vc[t]))),h=Yl(void 0),f=Yl(0),g={groupIndices:[],groupOffsetTree:fc(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:fc()},m=Nl(Rl(r,Wl(l,e,f),Hl(Lc,g),Al()),g),p=Nl(Rl(l,Al(),Hl(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Ml((({prev:e})=>e))),[]);Ol(Rl(l,jl((e=>e.length>0)),Wl(m,f),Ml((([e,t,r])=>{const n=e.reduce(((e,n,o)=>hc(e,n,Mc(n,t.offsetTree,r)||o)),fc());return{...t,groupIndices:e,groupOffsetTree:n}}))),m),Ol(Rl(n,Wl(m),jl((([e,{lastIndex:t}])=>e<t)),Ml((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),Ol(c,d);const b=Nl(Rl(c,Ml((e=>void 0===e))),!0);Ol(Rl(d,jl((e=>void 0!==e&&cc(Il(m).sizeTree))),Ml((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Ul(Rl(r,Wl(m),Hl((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:g}),Ml((e=>e.changed))));Sl(Rl(a,Hl(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Ml((e=>e.diff))),(e=>{const{groupIndices:r}=Il(m);if(e>0)Tl(t,!0),Tl(i,e+Pc(e,r));else if(e<0){const t=Il(p);t.length>0&&(e-=Pc(-e,t)),Tl(s,e)}})),Sl(Rl(a,Wl(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:a},Jl.ERROR)}));const y=Ul(i);Ol(Rl(i,Wl(m),Ml((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=dc(t.sizeTree,0);let i=0,s=0;for(;i<e;){const e=t.groupIndices[s],a=t.groupIndices.length===s+1?1/0:t.groupIndices[s+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+a-1,size:o,startIndex:e+1}),s++,i+=a+1}const a=pc(t.sizeTree);return i!==e&&a.shift(),a.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return pc(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Ul(Rl(s,Wl(m,f),Ml((([e,{offsetTree:t},r])=>Mc(-e,t,r)))));return Ol(Rl(s,Wl(m,f),Ml((([e,t,r])=>{if(t.groupIndices.length>0){if(cc(t.sizeTree))return t;let n=fc();const o=Il(p);let i=0,s=0,a=0;for(;i<-e;){a=o[s];const e=o[s+1]-a-1;s++,i+=e+1}if(n=pc(t.sizeTree).reduce(((t,{k:r,v:n})=>hc(t,Math.max(0,r+e),n)),n),i!==-e){n=hc(n,0,dc(t.sizeTree,a));n=hc(n,1,uc(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Wc(t.offsetTree,0,n,r)}}{const n=pc(t.sizeTree).reduce(((t,{k:r,v:n})=>hc(t,Math.max(0,r+e),n)),fc());return{...t,sizeTree:n,...Wc(t.offsetTree,0,n,r)}}}))),m),{beforeUnshiftWith:y,data:h,defaultItemSize:d,firstItemIndex:a,fixedItemSize:c,gap:f,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:s,shiftWithOffset:x,sizeRanges:r,sizes:m,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),El(ec,Ic),{singleton:!0});function qc(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Gc=ql((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Vl(),s=Vl(),a=Ul(Rl(i,Ml(qc)));return Ol(Rl(a,Ml((e=>e.totalCount))),r),Ol(Rl(a,Ml((e=>e.groupIndices))),e),Ol(Rl(Zl(o,t,n),jl((([e,t])=>kc(t))),Ml((([e,t,r])=>uc(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),Al(),Ml((e=>[e]))),s),{groupCounts:i,topItemsIndexes:s}}),El(Uc,sc)),Zc=ql((([{log:e}])=>{const t=Yl(!1),r=Ul(Rl(t,jl((e=>e)),Al()));return Sl(t,(t=>{t&&Il(e)("props updated",{},Jl.DEBUG)})),{didMount:r,propsReady:t}}),El(ec),{singleton:!0}),Xc=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Qc(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Xc)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Jc=ql((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:s,headerHeight:a,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:h}])=>{const f=Vl(),g=Vl(),m=Yl(0);let p=null,b=null,v=null;function y(){p&&(p(),p=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),Tl(l,!1)}return Ol(Rl(f,Wl(r,u,n,m,a,s,h),Wl(e,i,o),Ml((([[e,r,n,o,i,s,a,c],u,h,m])=>{const x=Qc(e),{align:w,behavior:$,offset:F}=x,C=o-1,E=Rc(x,r,C);let S=Mc(E,r.offsetTree,u)+s;"end"===w?(S+=h+uc(r.sizeTree,E)[1]-n+m,E===C&&(S+=a)):"center"===w?S+=(h+uc(r.sizeTree,E)[1]-n+m)/2:S-=i,F&&(S+=F);const T=t=>{y(),t?(c("retrying to scroll to",{location:e},Jl.DEBUG),Tl(f,e)):(Tl(g,!0),c("list did not change, scroll successful",{},Jl.DEBUG))};if(y(),"smooth"===$){let e=!1;v=Sl(t,(t=>{e=e||t})),p=Bl(d,(()=>{T(e)}))}else p=Bl(Rl(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),T);return b=setTimeout((()=>{y()}),1200),Tl(l,!0),c("scrolling from index to",{behavior:$,index:E,top:S},Jl.DEBUG),{behavior:$,top:S}}))),c),{scrollTargetReached:g,scrollToIndex:f,topListHeight:m}}),El(Uc,sc,ec),{singleton:!0});function Kc(e,t){0==e?t():requestAnimationFrame((()=>{Kc(e-1,t)}))}function ed(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const td=ql((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:s}])=>{const a=Yl(!0),l=Yl(0),c=Yl(!0);return Ol(Rl(s,Wl(l),jl((([e,t])=>!!t)),_l(!1)),a),Ol(Rl(s,Wl(l),jl((([e,t])=>!!t)),_l(!1)),c),Sl(Rl(Zl(t,s),Wl(a,r,e,c),jl((([[,e],t,{sizeTree:r},n,o])=>e&&(!cc(r)||wl(n))&&!t&&!o)),Wl(l)),(([,e])=>{Bl(o,(()=>{Tl(c,!0)})),Kc(4,(()=>{Bl(n,(()=>{Tl(a,!0)})),Tl(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:a}}),El(Uc,sc,Jc,Zc),{singleton:!0});function rd(e,t){return Math.abs(e-t)<1.01}const nd="up",od="down",id={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},sd=ql((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const s=Yl(!1),a=Yl(!0),l=Vl(),c=Vl(),d=Yl(4),u=Yl(0),h=Nl(Rl(Ql(Rl(Xl(o),Ll(1),_l(!0)),Rl(Xl(o),Ll(1),_l(!1),zl(100))),Al()),!1),f=Nl(Rl(Ql(Rl(r,_l(!0)),Rl(r,_l(!1),zl(200))),Al()),!1);Ol(Rl(Zl(Xl(o),Xl(u)),Ml((([e,t])=>e<=t)),Al()),a),Ol(Rl(a,Pl(50)),c);const g=Ul(Rl(Zl(n,Xl(i),Xl(t),Xl(e),Xl(d)),Hl(((e,[{scrollHeight:t,scrollTop:r},n,o,i,s])=>{const a={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-s){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:a}}let l;return l=a.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:a}}),id),Al(((e,t)=>e&&e.atBottom===t.atBottom)))),m=Nl(Rl(n,Hl(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(rd(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),jl((e=>e.changed)),Ml((e=>e.jump))),0);Ol(Rl(g,Ml((e=>e.atBottom))),s),Ol(Rl(s,Pl(50)),l);const p=Yl(od);Ol(Rl(n,Ml((({scrollTop:e})=>e)),Al(),Hl(((e,t)=>Il(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?nd:od,prevScrollTop:t}),{direction:od,prevScrollTop:0}),Ml((e=>e.direction))),p),Ol(Rl(n,Pl(50),_l("none")),p);const b=Yl(0);return Ol(Rl(h,jl((e=>!e)),_l(0)),b),Ol(Rl(o,Pl(100),Wl(h),jl((([e,t])=>!!t)),Hl((([e,t],[r])=>[t,r]),[0,0]),Ml((([e,t])=>t-e))),b),{atBottomState:g,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:s,isAtTop:a,isScrolling:h,lastJumpDueToItemResize:m,scrollDirection:p,scrollVelocity:b}}),El(sc)),ad="top",ld="bottom",cd="none";function dd(e,t,r){return"number"==typeof e?r===nd&&t===ad||r===od&&t===ld?e:0:r===nd?t===ad?e.main:e.reverse:t===ld?e.main:e.reverse}function ud(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const hd=ql((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Vl(),s=Yl(0),a=Yl(0),l=Yl(0);return{increaseViewportBy:a,listBoundary:i,overscan:l,topListHeight:s,visibleRange:Nl(Rl(Zl(Xl(n),Xl(o),Xl(r),Xl(i,Dc),Xl(l),Xl(s),Xl(t),Xl(e),Xl(a)),Ml((([e,t,r,[n,o],i,s,a,l,c])=>{const d=e-l,u=s+a,h=Math.max(r-d,0);let f=cd;const g=ud(c,ad),m=ud(c,ld);return n-=l,o+=r+a,(n+=r+a)>e+u-g&&(f=nd),(o-=l)<e-h+t+m&&(f=od),f!==cd?[Math.max(d-r-dd(i,ad,f)-g,0),d-h-a+t+dd(i,ld,f)+m]:null})),jl((e=>null!=e)),Al(Dc)),[0,0])}}),El(sc),{singleton:!0});const fd={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function gd(e,t,r,n,o,i){const{lastIndex:s,lastOffset:a,lastSize:l}=o;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-s,h=c,f=a+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:i,items:pd(e,o,i),offsetBottom:f,offsetTop:c,top:h,topItems:pd(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function md(e,t,r,n,o,i){let s=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-s>=e)break;s++}const a=e+s,l=ed(t,a);return gd(Array.from({length:a}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],a,o,r,n)}function pd(e,t,r){if(0===e.length)return[];if(!kc(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],s=gc(t.groupOffsetTree,n,o);let a,l=0;for(const n of e){let e;(!a||a.end<n.index)&&(a=s.shift(),l=t.groupIndices.indexOf(a.start)),e=n.index===a.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const bd=ql((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:s,topListHeight:a,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},h,{didMount:f},{recalcInProgress:g}])=>{const m=Yl([]),p=Yl(0),b=Vl();Ol(i.topItemsIndexes,m);const v=Nl(Rl(Zl(f,g,Xl(l,Dc),Xl(o),Xl(n),Xl(c),d,Xl(m),Xl(t),Xl(r),e),jl((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),Ml((([,,[e,t],r,n,o,i,s,a,l,c])=>{const d=n,{offsetTree:u,sizeTree:h}=d,f=Il(p);if(0===r)return{...fd,totalCount:r};if(0===e&&0===t)return 0===f?{...fd,totalCount:r}:md(f,o,n,a,l,c||[]);if(cc(h))return f>0?null:gd(function(e,t,r){if(kc(t)){const n=_c(e,t);return[{index:uc(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(ed(o,r),d,c),[],r,l,d,a);const g=[];if(s.length>0){const e=s[0],t=s[s.length-1];let r=0;for(const n of gc(h,e,t)){const o=n.value,i=Math.max(n.start,e),s=Math.min(n.end,t);for(let e=i;e<=s;e++)g.push({data:null==c?void 0:c[e],index:e,offset:r,size:o}),r+=o}}if(!i)return gd([],g,r,l,d,a);const m=s.length>0?s[s.length-1]+1:0,b=Hc(u,e,t,m);if(0===b.length)return null;const v=r-1;return gd(Fl([],(r=>{for(const n of b){const o=n.value;let i=o.offset,s=n.start;const a=o.size;if(o.offset<e){s+=Math.floor((e-o.offset+l)/(a+l));const t=s-n.start;i+=t*a+t*l}s<m&&(i+=(m-s)*a,s=m);const d=Math.min(n.end,v);for(let e=s;e<=d&&!(i>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:i,size:a}),i+=a+l}})),g,r,l,d,a)})),jl((e=>null!==e)),Al()),fd);Ol(Rl(e,jl(wl),Ml((e=>null==e?void 0:e.length))),o),Ol(Rl(v,Ml((e=>e.topListHeight))),u),Ol(u,a),Ol(Rl(v,Ml((e=>[e.top,e.bottom]))),s),Ol(Rl(v,Ml((e=>e.items))),b);const y=Ul(Rl(v,jl((({items:e})=>e.length>0)),Wl(o,e),jl((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Ml((([,e,t])=>[e-1,t])),Al(Dc),Ml((([e])=>e)))),x=Ul(Rl(v,Pl(200),jl((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Ml((({items:e})=>e[0].index)),Al())),w=Ul(Rl(v,jl((({items:e})=>e.length>0)),Ml((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),Al(Tc)));return{endReached:y,initialItemCount:p,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:m,...h}}),El(Uc,Gc,hd,td,Jc,sd,Zc,Ic),{singleton:!0}),vd=ql((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Vl(),s=Nl(Rl(Zl(r,e,n,t,o),Ml((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return Ol(Xl(s),i),{totalListHeight:s,totalListHeightChanged:i}}),El(sc,bd),{singleton:!0}),yd=ql((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Yl(!1);return{alignToBottom:r,paddingTopAddition:Nl(Rl(Zl(r,e,t),jl((([e])=>e)),Ml((([,e,t])=>Math.max(0,e-t))),Pl(0),Al()),0)}}),El(sc,vd),{singleton:!0});function xd(e){return!!e&&("smooth"===e?"smooth":"auto")}const wd=ql((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:s,propsReady:a},{log:l},{scrollingInProgress:c}])=>{const d=Yl(!1),u=Vl();let h=null;function f(e){Tl(o,{align:"end",behavior:e,index:"LAST"})}function g(e){const t=Bl(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(Il(l)("scrolling to bottom due to increased size",{},Jl.DEBUG),f("auto"))}));setTimeout(t,100)}return Sl(Rl(Zl(Rl(Xl(t),Ll(1)),s),Wl(Xl(d),n,i,c),Ml((([[e,t],r,n,o,i])=>{let s=t&&o,a="auto";return s&&(a=((e,t)=>"function"==typeof e?xd(e(t)):t&&xd(e))(r,n||i),s=s&&!!a),{followOutputBehavior:a,shouldFollow:s,totalCount:e}})),jl((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=Bl(e,(()=>{Il(l)("following output to ",{totalCount:r},Jl.DEBUG),f(t),h=null}))})),Sl(Rl(Zl(Xl(d),t,a),jl((([e,,t])=>e&&t)),Hl((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),jl((({refreshed:e})=>e)),Wl(d,t)),(([,e])=>{Il(i)&&g(!1!==e)})),Sl(u,(()=>{g(!1!==Il(d))})),Sl(Zl(Xl(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&f("auto")})),{autoscrollToBottom:u,followOutput:d}}),El(Uc,sd,Jc,td,Zc,ec,sc)),$d=ql((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:s},{didMount:a}])=>(Ol(Rl(a,Wl(i),jl((([,e])=>0!==e)),Wl(o,n,t,r,e),Ml((([[,e],t,r,n,o,i=[]])=>md(e,t,r,n,o,i)))),s),{})),El(Uc,td,bd,Zc),{singleton:!0}),Fd=ql((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Yl(0);return Sl(Rl(e,Wl(n),jl((([,e])=>0!==e)),Ml((([,e])=>({top:e})))),(e=>{Bl(Rl(r,Ll(1),jl((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{Tl(t,e)}))}))})),{initialScrollTop:n}}),El(Zc,sc,bd),{singleton:!0}),Cd=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:s})=>t<s?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,Ed=ql((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:s,scrollTop:a,viewportHeight:l},{scrollToIndex:c}])=>{const d=Vl();return Ol(Rl(d,Wl(t,l,r,i,o,n,a),Wl(e),Ml((([[e,t,r,n,o,i,a,l],c])=>{const{align:d,behavior:u,calculateViewLocation:h=Cd,done:f,...g}=e,m=Rc(e,t,n-1),p=Mc(m,t.offsetTree,c)+o+i,b=h({itemBottom:p+uc(t.sizeTree,m)[1],itemTop:p,locationParams:{align:d,behavior:u,...g},viewportBottom:l+r-a,viewportTop:l+i});return b?f&&Bl(Rl(s,jl((e=>!e)),Ll(Il(s)?1:2)),f):f&&f(),b})),jl((e=>null!==e))),c),{scrollIntoView:d}}),El(Uc,sc,Jc,bd,ec),{singleton:!0}),Sd=ql((([{scrollVelocity:e}])=>{const t=Yl(!1),r=Vl(),n=Yl(!1);return Ol(Rl(e,Wl(n,t,r),jl((([e,t])=>!!t)),Ml((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),Al()),t),Sl(Rl(Zl(t,e,r),Wl(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),El(sd),{singleton:!0}),Td=ql((([{scrollContainerState:e,scrollTo:t}])=>{const r=Vl(),n=Vl(),o=Vl(),i=Yl(!1),s=Yl(void 0);return Ol(Rl(Zl(r,n),Ml((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),Ol(Rl(t,Wl(n),Ml((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:s,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),El(sc)),Dd=ql((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:s,windowScrollContainerState:a,windowViewportRect:l}])=>{const c=Vl(),d=Yl(void 0),u=Yl(null),h=Yl(null);return Ol(a,u),Ol(l,h),Sl(Rl(c,Wl(t,n,s,u,h,r)),(([e,t,r,n,o,i,s])=>{const a=function(e){return pc(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:a,scrollTop:r-=s})})),Ol(Rl(d,jl(wl),Ml(Id)),o),Ol(Rl(i,Wl(d),jl((([,e])=>void 0!==e)),Al(),Ml((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),El(Uc,sc,td,Zc,Td));function Id(e){return{align:"start",index:0,offset:e.scrollTop}}const Od=ql((([{topItemsIndexes:e}])=>{const t=Yl(0);return Ol(Rl(t,jl((e=>e>=0)),Ml((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),El(bd));function Bd(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const zd=Bd((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),kd=ql((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:s,scrollDirection:a},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:h},{log:f},{recalcInProgress:g}])=>{const m=Ul(Rl(l,Wl(s),Hl((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:s},a])=>{const l=n+i;let c=0;return t===s&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=a))),[c,o,s,l]}),[0,[],0,0]),jl((([e])=>0!==e)),Wl(n,a,r,o,f,g),jl((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===nd)),Ml((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Jl.DEBUG),e)))));function p(r){r>0?(Tl(t,{behavior:"auto",top:-r}),Tl(e,0)):(Tl(e,0),Tl(t,{behavior:"auto",top:-r}))}return Sl(Rl(m,Wl(e,i)),(([t,r,n])=>{n&&zd()?Tl(e,r-t):p(-t)})),Sl(Rl(Zl(Nl(i,!1),e,g),jl((([e,t,r])=>!e&&!r&&0!==t)),Ml((([e,t])=>t)),Pl(1)),p),Ol(Rl(u,Ml((e=>({top:-e})))),t),Sl(Rl(c,Wl(h,d),Ml((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=dc(n,0);let s=0,a=0;for(;s<e;){s++,r+=o;let n=t.length===a+1?1/0:t[a+1]-t[a]-1;s+n>e&&(r-=o,n=e-s+1),s+=n,r+=i(n),a++}return r}}))),(r=>{Tl(e,r),requestAnimationFrame((()=>{Tl(t,{top:r}),requestAnimationFrame((()=>{Tl(e,0),Tl(g,!1)}))}))})),{deviation:e}}),El(sc,sd,bd,Uc,ec,Ic)),Ad=ql((([e,t,r,n,o,i,s,a,l,c])=>({...e,...t,...r,...n,...o,...i,...s,...a,...l,...c})),El(hd,$d,Zc,Sd,vd,Fd,yd,Td,Ed,ec)),jd=ql((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:s,sizeRanges:a,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:g},m,p,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:F},{groupCounts:C},E])=>(Ol(x.rangeChanged,E.scrollSeekRangeChanged),Ol(Rl(E.windowViewportRect,Ml((e=>e.visibleHeight))),m.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:g,sizeRanges:a,topItemCount:F,topItemsIndexes:y,totalCount:d,...b,groupIndices:i,itemSize:s,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...E,...m,sizes:l,...p})),El(Uc,td,sc,Dd,wd,bd,Jc,kd,Od,Gc,Ad));function Md(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const _d=typeof document<"u"?u.useLayoutEffect:u.useEffect;function Rd(e,r,n){const o=Object.keys(r.required||{}),i=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),a=Object.keys(r.events||{}),l=u.createContext({});function c(e,t){e.propsReady&&Tl(e.propsReady,!1);for(const n of o){Tl(e[r.required[n]],t[n])}for(const n of i)if(n in t){Tl(e[r.optional[n]],t[n])}e.propsReady&&Tl(e.propsReady,!0)}function d(e){return a.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=Sl(e,i),t):(n(),$l);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=u.forwardRef(((h,f)=>{const{children:g,...m}=h,[p]=u.useState((()=>Fl(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const s=e(n.map((e=>r(e))));return i&&t.set(o,s),s};return r(e)}(e),(e=>{c(e,m)})))),[b]=u.useState(yl(d,p));_d((()=>{for(const e of a)e in m&&Sl(b[e],m[e]);return()=>{Object.values(b).map(Dl)}}),[m,b,p]),_d((()=>{c(p,m)})),u.useImperativeHandle(f,pl(function(e){return s.reduce(((t,n)=>(t[n]=t=>{Tl(e[r.methods[n]],t)},t)),{})}(p)));const v=n;return t(l.Provider,{value:p,children:n?t(v,{...Md([...o,...i,...a],m),children:g}):g})}));return{Component:h,useEmitter:(e,t)=>{const r=u.useContext(l)[e];_d((()=>Sl(r,t)),[t,r])},useEmitterValue:u.version.startsWith("18")?e=>{const t=u.useContext(l)[e],r=u.useCallback((e=>Sl(t,e)),[t]);return u.useSyncExternalStore(r,(()=>Il(t)),(()=>Il(t)))}:e=>{const t=u.useContext(l)[e],[r,n]=u.useState(yl(Il,t));return _d((()=>Sl(t,(e=>{e!==r&&n(pl(e))}))),[t,r]),r},usePublisher:e=>u.useCallback(xl(Tl,u.useContext(l)[e]),[e])}}const Hd=u.createContext(void 0),Ld=u.createContext(void 0),Pd=typeof document<"u"?u.useLayoutEffect:u.useEffect;function Wd(e,t,r,n=$l,o,i){const s=u.useRef(null),a=u.useRef(null),l=u.useRef(null),c=u.useCallback((r=>{const n=r.target,o=n===window||n===document,s=i?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,c=i?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,d=i?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:c,scrollTop:Math.max(s,0),viewportHeight:d})};r.suppressFlushSync?u():O.flushSync(u),null!==a.current&&(s===a.current||s<=0||s===c-d)&&(a.current=null,t(!0),l.current&&(clearTimeout(l.current),l.current=null))}),[e,t]);return u.useEffect((()=>{const e=o||s.current;return n(o||s.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[s,c,r,n,o]),{scrollByCallback:function(e){i&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(i?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let c,d,u;n===window?(d=Math.max(zc(document.documentElement,i?"width":"height"),i?document.documentElement.scrollWidth:document.documentElement.scrollHeight),c=i?window.innerWidth:window.innerHeight,u=i?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[i?"scrollWidth":"scrollHeight"],c=zc(n,i?"width":"height"),u=n[i?"scrollLeft":"scrollTop"]);const h=d-c;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),rd(c,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:c}),void(o&&t(!0));o?(a.current=r.top,l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{l.current=null,a.current=null,t(!0)}),1e3)):a.current=null,i&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const Yd="-webkit-sticky",Nd="sticky",Vd=Bd((()=>{if(typeof document>"u")return Nd;const e=document.createElement("div");return e.style.position=Yd,e.style.position===Yd?Yd:Nd}));function Ud(e){return e}const qd=ql((()=>{const e=Yl((e=>`Item ${e}`)),t=Yl(null),r=Yl((e=>`Group ${e}`)),n=Yl({}),o=Yl(Ud),i=Yl("div"),s=Yl($l),a=(e,t=null)=>Nl(Rl(n,Ml((t=>t[e])),Al()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:a("EmptyPlaceholder"),FooterComponent:a("Footer"),GroupComponent:a("Group","div"),groupContent:r,HeaderComponent:a("Header"),HeaderFooterTag:i,ItemComponent:a("Item","div"),itemContent:e,ListComponent:a("List","div"),ScrollerComponent:a("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:a("ScrollSeekPlaceholder"),TopItemListComponent:a("TopItemList")}})),Gd=ql((([e,t])=>({...e,...t})),El(jd,qd)),Zd=({height:e})=>t("div",{style:{height:e}}),Xd={overflowAnchor:"none",position:Vd(),zIndex:1},Qd={overflowAnchor:"none"},Jd={...Qd,display:"inline-block",height:"100%"},Kd=u.memo((function({showTopList:e=!1}){const r=pu("listState"),n=bu("sizeRanges"),o=pu("useWindowScroll"),i=pu("customScrollParent"),s=bu("windowScrollContainerState"),a=bu("scrollContainerState"),l=i||o?s:a,c=pu("itemContent"),d=pu("context"),h=pu("groupContent"),f=pu("trackItemSizes"),g=pu("itemSize"),m=pu("log"),p=bu("gap"),b=pu("horizontalDirection"),{callbackRef:v}=nc(n,g,f,e?$l:l,m,p,i,b,pu("skipAnimationFrameInResizeObserver")),[y,x]=u.useState(0);mu("deviation",(e=>{y!==e&&x(e)}));const w=pu("EmptyPlaceholder"),F=pu("ScrollSeekPlaceholder")||Zd,C=pu("ListComponent"),E=pu("ItemComponent"),S=pu("GroupComponent"),T=pu("computeItemKey"),D=pu("isSeeking"),I=pu("groupIndices").length>0,O=pu("alignToBottom"),B=pu("initialItemFinalLocationReached"),z=e?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:O?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:O?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...B?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&w?t(w,{...ou(w,d)}):t(C,{...ou(C,d),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:z,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=T(t+r.firstItemIndex,e.data,d);return D?$(F,{...ou(F,d),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?$(S,{...ou(S,d),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Xd},h(e.index,d)):$(E,{...ou(E,d),...iu(E,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?Jd:Qd},I?c(e.index,e.groupIndex,e.data,d):c(e.index,e.data,d))}))})})),eu={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},tu={outline:"none",overflowX:"auto",position:"relative"},ru=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),nu={position:Vd(),top:0,width:"100%",zIndex:1};function ou(e,t){if("string"!=typeof e)return{context:t}}function iu(e,t){return{item:"string"==typeof e?void 0:t}}const su=u.memo((function(){const e=pu("HeaderComponent"),r=bu("headerHeight"),n=pu("HeaderFooterTag"),o=tc(u.useMemo((()=>e=>{r(zc(e,"height"))}),[r]),!0,pu("skipAnimationFrameInResizeObserver")),i=pu("context");return e?t(n,{ref:o,children:t(e,{...ou(e,i)})}):null})),au=u.memo((function(){const e=pu("FooterComponent"),r=bu("footerHeight"),n=pu("HeaderFooterTag"),o=tc(u.useMemo((()=>e=>{r(zc(e,"height"))}),[r]),!0,pu("skipAnimationFrameInResizeObserver")),i=pu("context");return e?t(n,{ref:o,children:t(e,{...ou(e,i)})}):null}));function lu({useEmitter:e,useEmitterValue:r,usePublisher:n}){return u.memo((function({children:o,style:i,...s}){const a=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:g,scrollToCallback:m}=Wd(a,c,l,d,void 0,h);return e("scrollTo",m),e("scrollBy",f),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:g,style:{...h?tu:eu,...i},tabIndex:0,...s,...ou(l,u),children:o})}))}function cu({useEmitter:e,useEmitterValue:r,usePublisher:n}){return u.memo((function({children:o,style:i,...s}){const a=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),f=r("context"),{scrollByCallback:g,scrollerRef:m,scrollToCallback:p}=Wd(a,c,l,$l,h);return Pd((()=>(m.current=h||window,()=>{m.current=null})),[m,h]),e("windowScrollTo",p),e("scrollBy",g),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==d?{height:d+u}:{}},...s,...ou(l,f),children:o})}))}const du=({children:e})=>{const r=u.useContext(Hd),n=bu("viewportHeight"),o=bu("fixedItemHeight"),i=pu("alignToBottom"),s=pu("horizontalDirection"),a=tc(u.useMemo((()=>vl(n,(e=>zc(e,s?"width":"height")))),[n,s]),!0,pu("skipAnimationFrameInResizeObserver"));return u.useEffect((()=>{r&&(n(r.viewportHeight),o(r.itemHeight))}),[r,n,o]),t("div",{"data-viewport-type":"element",ref:a,style:ru(i),children:e})},uu=({children:e})=>{const r=u.useContext(Hd),n=bu("windowViewportRect"),o=bu("fixedItemHeight"),i=pu("customScrollParent"),s=ic(n,i,pu("skipAnimationFrameInResizeObserver")),a=pu("alignToBottom");return u.useEffect((()=>{r&&(o(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,o]),t("div",{"data-viewport-type":"window",ref:s,style:ru(a),children:e})},hu=({children:e})=>{const r=pu("TopItemListComponent")||"div",n=pu("headerHeight"),o={...nu,marginTop:`${n}px`},i=pu("context");return t(r,{style:o,...ou(r,i),children:e})},fu=u.memo((function(r){const n=pu("useWindowScroll"),o=pu("topItemsIndexes").length>0,i=pu("customScrollParent"),s=pu("context"),a=i||n?yu:vu,l=i||n?uu:du;return e(a,{...r,...ou(a,s),children:[o&&t(hu,{children:t(Kd,{showTopList:!0})}),e(l,{children:[t(su,{}),t(Kd,{}),t(au,{})]})]})})),{Component:gu,useEmitter:mu,useEmitterValue:pu,usePublisher:bu}=Rd(Gd,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},fu),vu=lu({useEmitter:mu,useEmitterValue:pu,usePublisher:bu}),yu=cu({useEmitter:mu,useEmitterValue:pu,usePublisher:bu}),xu=gu,wu={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},$u={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Fu,floor:Cu,max:Eu,min:Su,round:Tu}=Math;function Du(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function Iu(e,t){return e&&e.width===t.width&&e.height===t.height}function Ou(e,t){return e&&e.column===t.column&&e.row===t.row}const Bu=ql((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:s,scrollContainerState:a,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},h,f,{didMount:g,propsReady:m},{customScrollParent:p,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Yl(0),F=Yl(0),C=Yl(wu),E=Yl({height:0,width:0}),S=Yl({height:0,width:0}),T=Vl(),D=Vl(),I=Yl(0),O=Yl(null),B=Yl({column:0,row:0}),z=Vl(),k=Vl(),A=Yl(!1),j=Yl(0),M=Yl(!0),_=Yl(!1),R=Yl(!1);Sl(Rl(g,Wl(j),jl((([e,t])=>!!t))),(()=>{Tl(M,!1)})),Sl(Rl(Zl(g,M,S,E,j,_),jl((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{Tl(_,!0),Kc(1,(()=>{Tl(T,e)})),Bl(Rl(c),(()=>{Tl(t,[0,0]),Tl(M,!0)}))})),Ol(Rl(k,jl((e=>null!=e&&e.scrollTop>0)),_l(0)),F),Sl(Rl(g,Wl(k),jl((([,e])=>null!=e))),(([,e])=>{e&&(Tl(E,e.viewport),Tl(S,e.item),Tl(B,e.gap),e.scrollTop>0&&(Tl(A,!0),Bl(Rl(c,Ll(1)),(e=>{Tl(A,!1)})),Tl(l,{top:e.scrollTop})))})),Ol(Rl(E,Ml((({height:e})=>e))),u),Ol(Rl(Zl(Xl(E,Iu),Xl(S,Iu),Xl(B,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Xl(c)),Ml((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),z),Ol(Rl(Zl(Xl($),n,Xl(B,Ou),Xl(S,Iu),Xl(E,Iu),Xl(O),Xl(F),Xl(A),Xl(M),Xl(j)),jl((([,,,,,,,e])=>!e)),Ml((([e,[t,r],n,o,i,s,a,,l,c])=>{const{column:d,row:u}=n,{height:h,width:f}=o,{width:g}=i;if(0===a&&(0===e||0===g))return wu;if(0===f){const t=ed(c,e);return function(e){return{...$u,items:e}}(Du(t,t+Math.max(a-1,0),s))}const m=zu(g,f,d);let p,b;l?0===t&&0===r&&a>0?(p=0,b=a-1):(p=m*Cu((t+u)/(h+u)),b=m*Fu((r+u)/(h+u))-1,b=Su(e-1,Eu(b,m-1)),p=Su(b,Eu(0,p))):(p=0,b=-1);const v=Du(p,b,s),{bottom:y,top:x}=ku(i,n,o,v),w=Fu(e/m);return{bottom:y,itemHeight:h,items:v,itemWidth:f,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),C),Ol(Rl(O,jl((e=>null!==e)),Ml((e=>e.length))),$),Ol(Rl(Zl(E,S,C,B),jl((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),Ml((([e,t,{items:r},n])=>{const{bottom:o,top:i}=ku(e,n,t,r);return[i,o]})),Al(Dc)),t);const H=Yl(!1);Ol(Rl(c,Wl(H),Ml((([e,t])=>t||0!==e))),H);const L=Ul(Rl(Zl(C,$),jl((([{items:e}])=>e.length>0)),Wl(H),jl((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),Ml((([[,e]])=>e-1)),Al())),P=Ul(Rl(Xl(C),jl((({items:e})=>e.length>0&&0===e[0].index)),_l(0),Al())),W=Ul(Rl(Xl(C),Wl(A),jl((([{items:e},t])=>e.length>0&&!t)),Ml((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Al(Tc),Pl(0)));Ol(W,f.scrollSeekRangeChanged),Ol(Rl(T,Wl(E,S,$,B),Ml((([e,t,r,n,o])=>{const i=Qc(e),{align:s,behavior:a,offset:l}=i;let c=i.index;"LAST"===c&&(c=n-1),c=Eu(0,c,Su(n-1,c));let d=Au(t,o,r,c);return"end"===s?d=Tu(d-t.height+r.height):"center"===s&&(d=Tu(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:a,top:d}}))),l);const Y=Nl(Rl(C,Ml((e=>e.offsetBottom+e.bottom))),0);return Ol(Rl(x,Ml((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:p,data:O,deviation:I,footerHeight:o,gap:B,headerHeight:i,increaseViewportBy:e,initialItemCount:F,itemDimensions:S,overscan:r,restoreStateFrom:k,scrollBy:s,scrollContainerState:a,scrollHeight:D,scrollTo:l,scrollToIndex:T,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:E,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...f,gridState:C,horizontalDirection:R,initialTopMostItemIndex:j,totalListHeight:Y,...h,endReached:L,propsReady:m,rangeChanged:W,startReached:P,stateChanged:z,stateRestoreInProgress:A,...w}}),El(hd,sc,sd,Sd,Zc,Td,ec));function zu(e,t,r){return Eu(1,Cu((e+r)/(Cu(t)+r)))}function ku(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=Au(e,t,r,n[0].index);return{bottom:Au(e,t,r,n[n.length-1].index)+o,top:i}}function Au(e,t,r,n){const o=zu(e.width,r.width,t.column),i=Cu(n/o),s=i*r.height+Eu(0,i-1)*t.row;return s>0?s+t.row:s}const ju=ql((()=>{const e=Yl((e=>`Item ${e}`)),t=Yl({}),r=Yl(null),n=Yl("virtuoso-grid-item"),o=Yl("virtuoso-grid-list"),i=Yl(Ud),s=Yl("div"),a=Yl($l),l=(e,r=null)=>Nl(Rl(t,Ml((t=>t[e])),Al()),r),c=Yl(!1),d=Yl(!1);return Ol(Xl(d),c),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:s,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),Mu=ql((([e,t])=>({...e,...t})),El(Bu,ju)),_u=u.memo((function(){const e=Vu("gridState"),r=Vu("listClassName"),n=Vu("itemClassName"),o=Vu("itemContent"),i=Vu("computeItemKey"),s=Vu("isSeeking"),a=Uu("scrollHeight"),l=Vu("ItemComponent"),c=Vu("ListComponent"),d=Vu("ScrollSeekPlaceholder"),h=Vu("context"),f=Uu("itemDimensions"),g=Uu("gap"),m=Vu("log"),p=Vu("stateRestoreInProgress"),b=Uu("reportReadyState"),v=tc(u.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;a(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();f({height:e,width:t})}g({column:Zu("column-gap",getComputedStyle(e).columnGap,m),row:Zu("row-gap",getComputedStyle(e).rowGap,m)})}),[a,f,g,m]),!0,!1);return Pd((()=>{e.itemHeight>0&&e.itemWidth>0&&b(!0)}),[e]),p?null:t(c,{className:r,ref:v,...ou(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const a=i(r.index,r.data,h);return s?t(d,{...ou(d,h),height:e.itemHeight,index:r.index,width:e.itemWidth},a):$(l,{...ou(l,h),className:n,"data-index":r.index,key:a},o(r.index,r.data,h))}))})})),Ru=u.memo((function(){const e=Vu("HeaderComponent"),r=Uu("headerHeight"),n=Vu("headerFooterTag"),o=tc(u.useMemo((()=>e=>{r(zc(e,"height"))}),[r]),!0,!1),i=Vu("context");return e?t(n,{ref:o,children:t(e,{...ou(e,i)})}):null})),Hu=u.memo((function(){const e=Vu("FooterComponent"),r=Uu("footerHeight"),n=Vu("headerFooterTag"),o=tc(u.useMemo((()=>e=>{r(zc(e,"height"))}),[r]),!0,!1),i=Vu("context");return e?t(n,{ref:o,children:t(e,{...ou(e,i)})}):null})),Lu=({children:e})=>{const r=u.useContext(Ld),n=Uu("itemDimensions"),o=Uu("viewportDimensions"),i=tc(u.useMemo((()=>e=>{o(e.getBoundingClientRect())}),[o]),!0,!1);return u.useEffect((()=>{r&&(o({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,o,n]),t("div",{ref:i,style:ru(!1),children:e})},Pu=({children:e})=>{const r=u.useContext(Ld),n=Uu("windowViewportRect"),o=Uu("itemDimensions"),i=Vu("customScrollParent"),s=ic(n,i,!1);return u.useEffect((()=>{r&&(o({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,o]),t("div",{ref:s,style:ru(!1),children:e})},Wu=u.memo((function({...r}){const n=Vu("useWindowScroll"),o=Vu("customScrollParent"),i=o||n?Gu:qu,s=o||n?Pu:Lu,a=Vu("context");return t(i,{...r,...ou(i,a),children:e(s,{children:[t(Ru,{}),t(_u,{}),t(Hu,{})]})})})),{Component:Yu,useEmitter:Nu,useEmitterValue:Vu,usePublisher:Uu}=Rd(Mu,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Wu),qu=lu({useEmitter:Nu,useEmitterValue:Vu,usePublisher:Uu}),Gu=cu({useEmitter:Nu,useEmitterValue:Vu,usePublisher:Uu});function Zu(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Jl.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}var Xu={exports:{}};Xu.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",s="hour",a="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,c),i=r-o<0,s=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:a,D:h,h:s,m:i,s:o,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=p;var w="$isDayjsObject",$=function(e){return e instanceof S||!(!e||!e[w])},F=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var s=t.split("-");if(!o&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,o=a}return!n&&o&&(y=o),o||!n&&y},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new S(r)},E=v;E.l=F,E.i=$,E.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return E},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return E.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!E.u(t)||t,d=E.p(e),f=function(e,t){var o=E.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(a)},g=function(e,t){return E.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,p=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,p):f(0,p+1);case l:var y=this.$locale().weekStart||0,x=(m<y?m+7:m)-y;return f(n?b-x:b+(6-x),p);case a:case h:return g(v+"Hours",0);case s:return g(v+"Minutes",1);case i:return g(v+"Seconds",2);case o:return g(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=E.p(e),d="set"+(this.$u?"UTC":""),f=(r={},r[a]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[s]=d+"Hours",r[i]=d+"Minutes",r[o]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],g=l===a?this.$D+(t-this.$W):t;if(l===c||l===u){var m=this.clone().set(h,1);m.$d[f](g),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[E.p(e)]()},b.add=function(n,d){var h,f=this;n=Number(n);var g=E.p(d),m=function(e){var t=C(f);return E.w(t.date(t.date()+Math.round(e*n)),f)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===a)return m(1);if(g===l)return m(7);var p=(h={},h[i]=t,h[s]=r,h[o]=e,h)[g]||1,b=this.$d.getTime()+n*p;return E.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,s=this.$m,a=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return E.s(i%12||12,e,"0")},g=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return E.s(t.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(r.monthsShort,a,c,3);case"MMMM":return u(c,a);case"D":return t.$D;case"DD":return E.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,s,!0);case"A":return g(i,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(t.$s);case"ss":return E.s(t.$s,2,"0");case"SSS":return E.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,f){var g,m=this,p=E.p(h),b=C(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return E.m(m,b)};switch(p){case u:g=x()/12;break;case c:g=x();break;case d:g=x()/3;break;case l:g=(y-v)/6048e5;break;case a:g=(y-v)/864e5;break;case s:g=y/r;break;case i:g=y/t;break;case o:g=y/e;break;default:g=y}return f?g:E.a(g)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return E.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),T=S.prototype;return C.prototype=T,[["$ms",n],["$s",o],["$m",i],["$H",s],["$W",a],["$M",c],["$y",u],["$D",h]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,S,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[y],C.Ls=x,C.p={},C}();var Qu=ne(Xu.exports),Ju={exports:{}};Ju.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=d(e,!1)}],a:[o,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[o,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var c=s[l],d=u[c],h=d&&d[0],f=d&&d[1];s[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var o=s[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],c=!0===s[3],d=l||c,u=s[2];c&&(u=s[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,s=n.day,a=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,g=s||(o||i?1:f.getDate()),m=o||f.getFullYear(),p=0;o&&!i||(p=i>0?i-1:f.getMonth());var b=a||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(m,p,g,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(m,p,g,b,v,y,x)):new Date(m,p,g,b,v,y,x)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(a)&&(this.$d=new Date("")),i={}}else if(a instanceof Array)for(var f=a.length,g=1;g<=f;g+=1){s[1]=a[g-1];var m=r.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Ku=ne(Ju.exports),eh={exports:{}};eh.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),s=r(t),a="("===(o=o||"()")[0],l=")"===o[1];return(a?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var th=ne(eh.exports),rh={exports:{}};rh.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var nh=ne(rh.exports),oh={exports:{}};oh.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var ih,sh,ah,lh=ne(oh.exports),ch={exports:{}},dh=ne(ch.exports=(ih={year:0,month:1,day:2,hour:3,minute:4,second:5},sh={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=sh[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),sh[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,c=a.value,d=ih[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),s=i.toLocaleString("en-US",{timeZone:e}),a=Math.round((i-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-a,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var s=o&&t,a=o||t||n,l=i(+r(),a);if("string"!=typeof e)return r(e).tz(a);var c=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var s=i(n-=60*(o-t)*1e3,r);return o===s?[n,o]:[e-60*Math.min(o,s)*1e3,Math.max(o,s)]}(r.utc(e,s).valueOf(),l,a),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));Qu.extend(th),Qu.extend(lh),Qu.extend(nh),Qu.extend(Ku),Qu.extend(dh),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Qu(t).startOf("week");return uh(r).map((e=>hh(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return hh(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Qu(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Qu(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Qu(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Qu(n):void 0,o?Qu(o):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!s}}(ah||(ah={}));const uh=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},hh=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},fh=[1,3,5,7,8,10,12],gh=[4,6,9,11];var mh,ph,bh;function vh(e){const t=h(null);return y((()=>{t.current=e}),[e]),x(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),s=parseInt(n);return 0==o?"1":fh.includes(i)?Math.min(o,31).toString():gh.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(s)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Qu(e,r);return Qu(t,r).diff(n,"minute")},e.toDayjs=e=>e?Qu(e):Qu(),e.addMinutesToTime=(e,t,r="HH:mm")=>Qu(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Qu(e).isSame(Qu(t),r)}(mh||(mh={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Qu(e).isBefore(n,"day"))||!(!o||!Qu(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Qu(e).isValid())return e}return""}}(ph||(ph={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(bh||(bh={}));const yh=e=>{const t=(e=>{const t=h(e),r=h();return v((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},xh=u.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),wh=({children:e})=>{const[r,n]=f(-1);return t(xh.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},$h=S.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Fh=I`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ch=S.div`
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
    animation: ${Fh} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Eh=S(Ch)`
    animation-delay: -0.45s;
`,Sh=S(Ch)`
    animation-delay: -0.3s;
`,Th=S(Ch)`
    animation-delay: -0.15s;
`,Dh=({color:r,className:n,size:o})=>e($h,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(Ch,{id:"inner1"}),t(Eh,{id:"inner2"}),t(Sh,{id:"inner3"}),t(Th,{id:"inner4"})]}),Ih=T`
    outline-offset: -1px;
    outline: ${$o["width-020"]} ${$o.solid} ${yo["border-focus"]};
`,Oh=T`
    outline-color: ${yo["border-focus"]};
`,Bh=T`
    outline-color: ${yo["border-disabled"]};
`,zh=T`
    outline-color: ${yo["border-error-focus"]};
`,kh=S.div`
    border: ${$o["width-010"]} ${$o.solid} ${yo.border};
    border-radius: ${Co.sm};
    background: ${yo.bg};

    :focus-within {
        ${Ih}
    }
    ${e=>e.$focused&&Ih}

    ${e=>e.$readOnly?T`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Oh}
                }
                ${e.$focused&&Oh}
            `:e.$disabled?T`
                background: ${yo["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Bh}
                }
                ${e.$focused&&Bh}
            `:e.$error?T`
                border-color: ${yo["border-error"]};

                :focus-within {
                    ${zh}
                }
                ${e.$focused&&zh}
            `:void 0}
`;S(kh)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Fo["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Ah=S.input`
    ${e=>"small"===e.$variant?xo["body-md-regular"]:xo["body-baseline-regular"]}
    color: ${yo.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${yo["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${yo["text-subtler"]};
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
`,jh=S.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${$o["width-010"]} ${$o.solid}
            ${yo["border-focus"]};
        border-radius: ${Co.sm};
    }
`,Mh=S.div`
    overflow: hidden;
    border: ${$o["width-010"]} ${$o.solid} ${yo.border};
    border-radius: ${Co.sm};
    background: ${yo.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?xo["body-md-regular"]:xo["body-baseline-regular"]}

    ${So.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Eo["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${So.MaxWidth.xs} {
        width: calc(100vw - ${Eo["xs-margin"]} * 2);
    }

    ${So.MaxWidth.xxs} {
        width: calc(100vw - ${Eo["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${yo["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,_h=S.div`
    background: transparent;
    padding: ${Fo["spacing-8"]};
`,Rh=S.ul`
    list-style-type: none;
`,Hh=S.li`
    display: flex;
    align-items: flex-start;
    gap: ${Fo["spacing-8"]};
    padding: ${Fo["spacing-12"]} ${Fo["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?T`
                cursor: not-allowed;
            `:e.$active&&e.$selected?T`
                background: ${yo["bg-hover"]};
            `:e.$active?T`
                background: ${yo["bg-hover-subtle"]};
            `:void 0}
`,Lh=S(M)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${yo["icon-selected"]};
`,Ph=S.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Wh=S(j)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${yo["icon-selected"]};
`,Yh=S(k)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${yo["icon-primary-subtlest"]};
`,Nh=S(A)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${yo["icon-disabled-subtle"]};
`,Vh=S.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Uh=S(jh)`
    cursor: pointer;
    overflow: hidden;
    color: ${yo["text-primary"]};
    font-size: inherit;
`,qh=S(Uh)`
    ${xo["body-baseline-semibold"]}
`,Gh=S(Uh)`
    ${xo["body-md-semibold"]}
    padding: ${Fo["spacing-8"]} ${Fo["spacing-8"]};
`,Zh=S.div`
    width: 100%;
    display: flex;
    padding: ${Fo["spacing-12"]} ${Fo["spacing-16"]};
    align-items: center;
`,Xh=S(z)`
    margin-right: ${Fo["spacing-4"]};
    color: ${yo["icon-error"]};
    height: 1em;
    width: 1em;
`,Qh=S(Dh)`
    margin-right: ${Fo["spacing-8"]};
    color: ${yo.icon};
`,Jh=S.div`
    ${(e=>{const{textSize:t}=e||{};return T`
        // Text styling
        ${t&&xo[`${t}-regular`]}

        strong {
            font-weight: ${xo.Spec["weight-semibold"]};
            ${t&&xo[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${xo.Spec["weight-semibold"]};
            ${t&&xo[`${t}-semibold`]}
            color: ${yo.hyperlink};
            text-decoration: none;

            svg {
                color: ${yo["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${yo["hyperlink-hover"]};

                svg {
                    color: ${yo["icon-hover"]};
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
    `})()}
    color: ${yo["text-subtle"]};
    padding: 0 ${Fo["spacing-16"]} ${Fo["spacing-12"]}
        ${Fo["spacing-16"]};
`;function Kh(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;const ef=S.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Fo["spacing-24"]};
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

        ${({$highlight:e})=>e&&T`
                background-color: ${yo["bg-hover-neutral"]};
            `}
    }
`,tf=u.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:s="button"}=e,a=Kh(e,["children","focusHighlight","focusOutline","type"]);return t(ef,Object.assign({ref:r,$outline:i,$highlight:o,type:s},a,{children:n}))})),rf=S.div`
    background: ${yo["bg-strong"]};
    border-radius: ${Co.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?xo["body-md-regular"]:xo["body-baseline-regular"]}
`,nf=S.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Fo["spacing-8"]};
    padding: ${e=>"small"===e.$variant?T`
                  ${Fo["spacing-8"]} ${Fo["spacing-16"]}
              `:T`10px ${Fo["spacing-16"]}`};
`,of=S(Ah)`
    flex: 1;
`,sf=S(R)`
    color: ${yo.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,af=S(tf)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Fo["spacing-8"]};
    margin-left: -${Fo["spacing-8"]};
    color: ${yo.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,lf=F(((r,n)=>{var{value:o,variant:i,onClear:s}=r,a=Kh(r,["value","variant","onClear"]);return e(rf,{$variant:i,children:[e(nf,{$variant:i,children:[t(sf,{"aria-hidden":!0}),t(of,Object.assign({ref:n,value:o,$variant:i},a))]}),o&&t(af,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:t(_,{"aria-hidden":!0})})]})})),cf=({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:s,disableItemFocus:a,itemsLoadState:l="success",itemTruncationType:c="end",itemMaxLines:d=2,labelDisplayType:u="inline",variant:g="default",listboxId:m,width:p,topScrollItem:b,onSelectItem:y,onSelectAll:w,onDismiss:$,onRetry:F,valueExtractor:E,listExtractor:S,renderListItem:T,renderCustomCallToAction:D,enableSearch:I,hideNoResultsDisplay:O,noResultsDescription:B,searchPlaceholder:z="Search",searchFunction:k,onSearch:A})=>{const{focusedIndex:j,setFocusedIndex:M}=C(xh),[_,R]=f(""),[H,L]=f(null!=n?n:[]),P=yh(l),W=(()=>{const[e,t]=f(!1);return v((()=>{t(!0)}),[]),e})(),Y=h(null),N=h(null),V=h([]),U=h(null),q=h(null),G=!!i&&!!s&&(null==s?void 0:s.length)===i,Z=e=>{const t=S?S(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},X=x((e=>!!fl(s,(t=>ml(t,e)))),[s]),Q=vh((()=>null==k?void 0:k(_))),J=vh((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=Z(e),n=_.trim().toLowerCase();return t.includes(n)||r&&r.includes(n)})))),K=(e,t)=>{G&&!X(e)||(M(t),null==y||y(e,(e=>E?E(e):e)(e)))},ee=e=>{const t=e.target.value;R(t),null==A||A()},te=()=>{var e;R(""),null===(e=U.current)||void 0===e||e.focus(),null==A||A()},re=()=>{null==F||F()};((e,t,r="window",n)=>{const o=h();v((()=>{o.current=t}),[t]),v((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])})("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),j<H.length-1){const e=j+1;null===(t=V.current[e])||void 0===t||t.focus(),M(e)}break;case"ArrowUp":if(e.preventDefault(),j>0){const e=j-1;null===(r=V.current[e])||void 0===r||r.focus(),M(e)}else 0===j&&U.current&&(U.current.focus(),M(-1));break;case"Space":case"Enter":document.activeElement===V.current[j]&&(e.preventDefault(),H[j]&&K(H[j],j))}})),v((()=>{var e;if(!b)return void(null===(e=q.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(b);q.current&&-1!==e&&(q.current.scrollToIndex({index:e}),M(e))}),0);return()=>clearTimeout(t)}),[V,n,M,b]),v((()=>{var e,t,r;if(W)return;if(a||!n)return;const o=n.findIndex((e=>X(e)));U.current?(M(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):j>0?(null===(e=q.current)||void 0===e||e.scrollToIndex({index:j,align:"center"}),setTimeout((()=>{var e;return null===(e=V.current[j])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=q.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),M(o),setTimeout((()=>{var e;return null===(e=V.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=q.current)||void 0===r||r.scrollToIndex({index:0}),M(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200))}),[X,a,j,n,W,M]),v((()=>{W&&P&&(a||"success"===l&&U.current&&(M(-1),U.current.focus()))}),[W,P,l,M,a]),v((()=>{var e;L(null!==(e=""===_?n:k?Q():J())&&void 0!==e?e:[])}),[Q,J,n,k,_]);const ne=e=>o?t(G&&!e?Nh:e?Wh:Yh,{"aria-hidden":!0}):e?t(Lh,{"aria-hidden":!0}):t(Ph,{}),oe=(e,r)=>{const{title:n,secondaryLabel:o}=Z(e);return t(jo,{displayType:u,label:n,maxLines:d,selected:r,disabled:!r&&G,sublabel:o,truncationType:c,variant:g})},ie=(n,i)=>{if(!F||"success"===l){const s=X(n),a=i===j;return t(Hh,{"aria-selected":s,"aria-multiselectable":o,"aria-disabled":!s&&G,"data-testid":"list-item",onClick:()=>K(n,i),onMouseEnter:()=>(e=>{M(e)})(i),ref:e=>{V.current[i]=e},role:"option",tabIndex:a?0:-1,$active:a,$selected:s,$disabled:!s&&G,children:T?T(n,{selected:s}):e(r,{children:[ne(s),oe(n,s)]})},((e,t)=>`item_${t}__${E?E(e):e}`)(n,i))}},se=()=>{if(s&&o&&H.length>0&&!_&&"success"===l)return t(Vh,{children:t(Gh,{onClick:w,type:"button",$variant:g,children:i||0!==s.length?"Clear all":"Select all"})})},ae=()=>{if(!O&&(_||!I)&&0===H.length&&"success"===l)return e(r,{children:[e(Zh,{"data-testid":"list-no-results",children:[t(Xh,{"data-testid":"no-result-icon"}),"No results found."]}),B&&t(Jh,{"data-testid":"no-result-desc",children:B})]})},le=()=>{if(F&&"loading"===l)return e(Zh,{"data-testid":"list-loading",children:[t(Qh,{}),"Loading..."]})},ce=()=>{if(F&&"fail"===l)return e(Zh,{"data-testid":"list-fail",children:[t(Xh,{"data-testid":"load-error-icon"}),"Failed to load. ",t(qh,{onClick:re,type:"button",$variant:g,children:"Try again."})]})},de=()=>{var e;const r="test"===process.env.NODE_ENV;return t(Rh,{role:"listbox",id:m,children:t(xu,Object.assign({ref:q,style:{height:"100%"},data:H,customScrollParent:null!==(e=Y.current)&&void 0!==e?e:void 0,itemContent:(e,t)=>ie(t,e)},r?{initialItemCount:H.length}:{}),r?H.length:void 0)})};return e(Mh,{"data-testid":"dropdown-container",ref:Y,$width:p,$variant:g,children:[e(_h,{ref:N,"data-testid":"dropdown-list",children:[(()=>{if((I||k)&&"success"===l)return t(lf,{ref:U,onChange:ee,value:_,placeholder:z,"data-testid":"search-input","aria-label":"Enter text to search",onClear:te,variant:g})})(),se(),ae(),le(),ce(),de()]}),(()=>{if(D)return t("div",{"data-testid":"custom-cta",children:D($,H)})})()]})},df=S(jh)`
    display: flex;
    align-items: center;
    gap: ${Fo["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Fo["spacing-16"]};

    ${e=>"small"===e.$variant?xo["body-md-regular"]:xo["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,uf=S.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${wo["duration-250"]} ${wo["ease-default"]};

    svg {
        color: ${yo.icon};
        height: 1em;
        width: 1em;
    }
`,hf=F((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:s,readOnly:a,variant:l},c)=>e(df,{ref:c,type:"button","aria-expanded":o,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!a&&t(uf,{$expanded:o,$variant:l,children:t(H,{"aria-hidden":!0})})]}))),ff={collections:{default:{Button:{"button-radius":mo.sm,"button-default-colour-bg":Nn["bg-primary"],"button-default-colour-bg-hover":Nn["bg-primary-hover"],"button-default-colour-text":Nn["text-inverse"],"button-secondary-colour-border":Nn["border-primary"],"button-secondary-colour-text":Nn["text-primary"],"button-light-colour-text":Nn["text-primary"],"button-link-colour-text":Nn["text-primary"]}},pa:{Button:{"button-radius":mo.full,"button-default-colour-bg":Nn["bg-primary"],"button-default-colour-bg-hover":Nn["bg-primary-hover"],"button-default-colour-text":Nn["text-inverse"],"button-secondary-colour-border":Nn["border-primary"],"button-secondary-colour-text":Nn["text-primary"],"button-light-colour-text":Nn["text-primary"],"button-link-colour-text":Nn["text-primary"]}}},defaultValue:"default"},gf=(e,t)=>r=>{var n,o;const i=r.theme,s=kn(ff,null==i?void 0:i.componentScheme);return mf((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||s[e][t],r)},mf=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},pf=gf("Button","button-radius"),bf=gf("Button","button-default-colour-bg"),vf=gf("Button","button-default-colour-bg-hover"),yf=gf("Button","button-default-colour-text"),xf=gf("Button","button-secondary-colour-border"),wf=gf("Button","button-secondary-colour-text"),$f=gf("Button","button-light-colour-text"),Ff=gf("Button","button-link-colour-text");S.button`
    padding: ${Fo["spacing-8"]} ${Fo["spacing-16"]};
    min-width: 4rem;
    border: ${$o["width-010"]} ${$o.solid} transparent;
    transition: all ${wo["duration-250"]} ${wo["ease-default"]};
    border-radius: ${pf};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return T`
                    background-color: ${yo.Primitive.white};
                    border-color: ${e.$buttonIsDanger?yo["border-error-strong"]:xf};

                    color: ${e.$buttonIsDanger?yo["text-error"]:wf};

                    &:hover,
                    &:active {
                        background-color: ${yo["bg-hover-neutral"]};
                    }
                `;case"light":return T`
                    background-color: ${yo.bg};
                    border-color: ${yo.border};

                    color: ${e.$buttonIsDanger?yo["text-error"]:$f};

                    &:hover,
                    &:active {
                        background-color: ${yo["bg-hover-neutral"]};
                    }
                `;case"link":return T`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?yo["text-error"]:Ff};
                    &:hover,
                    &:active {
                        background-color: ${yo["bg-hover-neutral"]};
                    }
                `;case"disabled":return T`
                    background-color: ${yo["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${yo["text-disabled"]};
                `;default:return T`
                    background-color: ${e.$buttonIsDanger?yo["bg-error-strong"]:bf};};

                    ${So.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${yf}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?yo["bg-error-strong-hover"]:vf}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return T`
                    height: 2.5rem;
                    ${xo["body-md-semibold"]}

                    ${So.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return T`
                    height: 4rem;
                    ${xo["heading-md-semibold"]}

                    ${So.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return T`
                    height: 3rem;
                    ${xo["heading-xs-semibold"]}

                    ${So.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,S(Dh)`
    margin-right: 0.5rem;
`,S.li`
    display: ${e=>e.$visible?"flex":"none"};
`,S.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Fo["spacing-8"]};
    padding: ${Fo["spacing-12"]} ${Fo["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&T`
            background: ${yo["bg-hover"]};
        `}
`,S.div`
    height: 1px;
    width: calc((1lh + ${Fo["spacing-8"]}) * ${e=>e.$level});
`,S.div`
    width: 1lh;
    height: 1lh;
    color: ${yo["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${wo["duration-350"]}
            ${wo["ease-standard"]};

        ${e=>{if(e.$expanded)return T`
                    transform: rotate(90deg);
                `}}
    }
`,S.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Fo["spacing-8"]};
`,S.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Fo["spacing-16"]};

    display: flex;
    justify-content: center;
`,S(L)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${yo["icon-selected"]};
`;const Cf=e=>"small"===e?2.5:3;S.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Cf(e.$variant);return T`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Ef=T`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Fo["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Cf(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Co.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${yo["border-focus"]};
    }
`,Sf=S.button`
    ${Ef}
    cursor: pointer;
`;S.div`
    ${Ef}
`;const Tf=I`
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
`;S.div`
    position: relative;
    border: ${$o["width-010"]} ${$o.solid} ${yo.border};
    border-radius: ${Co.sm};
    background: ${yo.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${yo["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${yo["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?T`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:T`
                animation: ${Tf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?T`
                background: ${yo["bg-disabled"]};

                ${Sf} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${yo.border};
                    box-shadow: none;
                }
            `:e.$readOnly?T`
                border: none;
                background: transparent !important;

                ${Sf} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?T`
                border-color: ${yo["border-error"]};

                :focus-within {
                    border-color: ${yo["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${yo["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,S.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${wo["duration-250"]} ${wo["ease-default"]};
    margin-left: ${Fo["spacing-16"]};
`,S(H)`
    color: ${yo.icon};
`,S.div`
    height: 1px;
    background: ${yo.border};
    margin: 0 ${Fo["spacing-8"]};
`;const Df=S.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return T`
                color: ${yo["text-disabled"]};
            `}}
`,If=S.div`
    ${e=>"small"===e.$variant?xo["body-md-regular"]:xo["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return T`
                    ${Do(1)}
                `}}
    overflow: hidden;
`,Of=S(If)`
    color: ${yo["text-subtler"]};
`;var Bf;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Bf||(Bf={}));const zf=S.div`
    display: flex;
    flex-direction: column;
`,kf=e=>"right"===e?"bottom-end":"bottom-start",Af=({enabled:n,isOpen:o,onOpen:i,onClose:s,onDismiss:a,renderElement:l,renderDropdown:c,customZIndex:d,clickToToggle:u=!1,offset:g=0,alignment:m="left",fitAvailableHeight:p})=>{var b;const y=D(),x=Eo["sm-max"]({theme:y}),w=h(null),$=h(null),{width:F=0}=tt({targetRef:w,handleHeight:!1}),C={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<x;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:E,floatingStyles:S,context:T}=W({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==a||a():e&&!o?null==i||i():!e&&o&&(null==s||s(r))},whileElementsMounted:Y,placement:kf(m),middleware:[N(g),V(),U({limiter:q()}),G({apply({availableHeight:e}){$.current&&Object.assign($.current.style,{maxHeight:p?`${e}px`:void 0,overflowY:p?"hidden":void 0})}}),C]}),I=(()=>{const[e,t]=f(void 0),r=P();return v((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Bf.Change,e),r.events.emit(Bf.Ready),()=>r.events.off(Bf.Change,e)}),[r]),e})(),{isMounted:O,styles:B}=Z(T,{initial:{opacity:0},open:{opacity:1},duration:300}),z=X(T,{enabled:n,toggle:u}),k=Q(T,{enabled:n}),{getReferenceProps:A,getFloatingProps:j}=J([z,k]);return e(r,{children:[t("div",Object.assign({ref:e=>{w.current=e,E.setReference(e)}},A(),{children:l()})),O&&t(K,{children:t(ee,{context:T,modal:!1,initialFocus:$,returnFocus:!1,children:t("div",Object.assign({ref:E.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(b=null!=d?d:I)&&void 0!==b?b:50})},j(),{children:t(zf,{ref:$,style:Object.assign({},B),inert:B.opacity<1?"":void 0,children:c({elementWidth:F})})}))})})]})},jf=({selectedOption:e,placeholder:r="Select",options:n,disabled:o,error:i,className:s,"data-testid":a,id:l,enableSearch:c=!1,searchFunction:d,searchPlaceholder:u,valueExtractor:g,valueToStringFunction:m,listExtractor:p,displayValueExtractor:b,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:F="success",optionTruncationType:C="end",renderCustomSelectedOption:E,renderListItem:S,hideNoResultsDisplay:T,noResultsDescription:D,renderCustomCallToAction:I,onBlur:O,variant:B="default",readOnly:z,alignment:k,dropdownZIndex:A})=>{const[j,M]=f(e),[_,R]=f(!1),[H,L]=f(!1),[P]=f((()=>bh.generate())),W=h(null),Y=h(null),N=h(null);v((()=>{M(e)}),[e]);const V=(e,t)=>{var r;null===(r=Y.current)||void 0===r||r.focus(),M(e),R(!1),Q(!1),null==y||y(e,t)},U=()=>{_&&(R(!1),Q(!1))},q=()=>{H||_||L(!0)},G=e=>{H&&!_&&W.current&&!W.current.contains(e.relatedTarget)&&(L(!1),null==O||O())},Z=()=>{var e;if(!j)return"";if(b)return b(j);if(g){const t=g(j);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return j.toString()},X=e=>{if("middle"===C){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),To.truncateOneLine(e,t,120,8)}return e},Q=e=>{e?null==x||x():null==w||w()};return t(wh,{children:t(Af,{enabled:!z&&!o,isOpen:_,renderElement:()=>t(kh,{className:s,"data-testid":a,id:l,ref:W,tabIndex:-1,onFocus:q,onBlur:G,$focused:H,$disabled:o,$readOnly:z,$error:i,children:t(hf,{ref:Y,disabled:o,expanded:_,listboxId:P,popupRole:"listbox",readOnly:z,variant:B,children:t(Df,{ref:N,$disabled:o,children:j?E?E(j):t(If,{truncateType:C,$variant:B,children:X(Z())}):t(Of,{truncateType:C,$variant:B,children:r})})})}),renderDropdown:({elementWidth:e})=>t(cf,{listboxId:P,listItems:n,onSelectItem:V,onDismiss:U,valueExtractor:g,listExtractor:p,enableSearch:c,searchPlaceholder:u,searchFunction:d,selectedItems:j?[j]:[],onRetry:$,itemsLoadState:F,itemTruncationType:C,renderListItem:S,hideNoResultsDisplay:T,noResultsDescription:D,renderCustomCallToAction:I,variant:B,width:e}),onOpen:()=>{R(!0),Q(!0),L(!0)},onClose:e=>{R(!1),Q(!1),"click"!==e&&(L(!1),null==O||O())},onDismiss:()=>{var e;null===(e=Y.current)||void 0===e||e.focus(),R(!1),Q(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:A})})},Mf=S(Ah)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&T`
            padding-left: ${Fo["spacing-16"]};
            padding-right: ${e.$showClear?0:Fo["spacing-16"]};
        `}
`,_f=S(jh)`
    height: auto;
    padding: ${Fo["spacing-12"]} ${Fo["spacing-16"]};

    cursor: pointer;
    color: ${yo.icon};

    ${e=>"no-border"===e.$styleType&&T`
            margin-right: -${Fo["spacing-12"]};
        `}
`,Rf=S(_)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Hf=S.div`
    display: flex;
    width: 100%;
`,Lf=S(kh)`
    display: flex;
    align-items: center;
    width: 100%;
`,Pf=u.forwardRef(((n,o)=>{var{value:i,spacing:s,type:a,error:l,disabled:c,readOnly:d,onChange:u,onClear:f,allowClear:g=!1,className:m,styleType:p="bordered"}=n,b=Kh(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=((e,t)=>"tel"===e&&!!t)(a,s),y=h(null);E(o,(()=>y.current),[]);const x=function({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),s=null!==(r=n.selectionEnd)&&void 0!==r?r:0,a=o.substring(0,s),l=t(a),c=a.length-l.length,d=Math.max(0,s-c);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(d,d)}}}}({ref:y,formatter:e=>v?To.transformWithSpaces(e,s):e}),w=e=>{u&&(v?F(e):u(e))},$=()=>{f&&f(),y&&y.current&&y.current.focus()},F=e=>{const t=x();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==u||u(e),n()},C=i?(e=>e?v?To.transformWithSpaces(e,s):e:"")(i):i,S=g&&!c&&!d&&!!i,T=()=>e(r,{children:[t(Mf,Object.assign({"data-testid":"input",ref:y,disabled:c,value:C,onChange:w,type:a,readOnly:d,$showClear:S,$styleType:p},b)),S&&t(_f,{onClick:$,type:"button",$styleType:p,children:t(Rf,{"aria-hidden":!0})})]});return t(r,{children:"no-border"===p?t(Hf,{className:m,children:T()}):t(Lf,{$disabled:c,$error:l,$readOnly:d,className:m,children:T()})})})),Wf=(e,t,r=!1)=>T`
        ${xo[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Yf=e=>{if(e)return T`
            ${Do(e)}
        `},Nf=(e,t)=>T`
    ${Wf(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?T`
            display: block;
            ${Yf(r)}
        `:e?T`
            display: inline;
        `:T`
            display: block;
            ${Yf(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${yo.text};
`;var Vf;!function(r){const n=(e,t,r)=>{const n=S(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Nf(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const r=S.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Nf(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=o("body-baseline","BodyBL"),r.BodyMD=o("body-md","BodyMD"),r.BodySM=o("body-sm","BodySM"),r.BodyXS=o("body-xs","BodyXS");const i=(r,n)=>{const o=S.a`
            ${e=>T`
                ${Wf(r,e.weight||"regular")}
                color: ${yo.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${yo["text-hover"]};
                }
            `}
        `,i=r=>{var{external:n=!1,children:i}=r,s=Kh(r,["external","children"]);return e(o,Object.assign({},s,{children:[i,n&&t(Uf,{})]}))};return i.displayName=`Typography.${n}`,i};r.LinkBL=i("body-baseline","LinkBL"),r.LinkMD=i("body-md","LinkMD"),r.LinkSM=i("body-sm","LinkSM"),r.LinkXS=i("body-xs","LinkXS")}(Vf||(Vf={}));const Uf=S(te)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,qf=S.nav`
    display: flex;
`,Gf=S.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${So.MaxWidth.lg} {
        align-self: center;
    }
`,Zf=S.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,Xf=S(tf)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Co.sm};
    color: ${yo["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${yo["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${yo["bg-hover"]};
    }
`,Qf=S(tf)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Co.sm};
    color: ${yo["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${yo["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${yo["bg-hover"]};
    }

    ${e=>"left"===e.$position?T`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:T`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${So.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,Jf=S.button`
    background: ${e=>e.$selected?yo["bg-primary"]:yo.bg};
    border: ${$o["width-010"]} ${$o.solid}
        ${e=>T`
                ${e.$selected?yo["bg-primary"]:yo.border}
            `};
    color: ${e=>e.$selected?yo["text-inverse"]:yo.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${Co.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;

    ${e=>e.$selected?T`
                  ${xo["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${yo["bg-selected-strongest-hover"]};
                      background-color: ${yo["bg-selected-strongest-hover"]};
                      color: ${yo["text-inverse"]};
                  }
              `:T`
                  ${xo["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${yo["bg-hover"]};
                      background-color: ${yo["bg-hover"]};
                      color: ${yo["text-hover"]};
                      ${xo["body-baseline-semibold"]};
                  }
              `}
`;S(tf)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${yo["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${Co.sm};
    white-space: nowrap;
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :focus-visible {
        svg {
            color: ${yo["icon-hover"]};
        }
    }
`;const Kf=S.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${Co.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,eg=S.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${yo.text};

    display: flex;
    justify-content: center;
`,tg=S(Vf.BodyBL)`
    white-space: nowrap;
`,rg=S(Vf.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,ng=S(Pf)`
    ${xo["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${Co.sm};
    border: ${$o["width-010"]} ${$o.solid} ${yo.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${xo["body-xs-regular"]}
        }
    }
`,og=S.div`
    ${xo["body-xs-regular"]}
    background-color: ${yo["bg-hover"]};
    border: none;
    border-radius: ${Co.sm};
    color: ${yo["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,ig=S.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,sg=u.forwardRef((({id:r,"data-testid":d,className:u,pageSize:h=10,totalItems:g,activePage:m,pageSizeOptions:p=ag,showFirstAndLastNav:b,showPageSizeChanger:y=!1,onPageChange:x,onPageSizeChange:w},$)=>{const F=D(),C=Eo["sm-max"]({theme:F}),E=se.useMediaQuery({maxWidth:C}),[S,T]=f(!1),[I,O]=f(!1),[B,z]=f(""),[k,A]=f(p[0]),[j,M]=f(!E&&y&&k?k.value:h),_=Math.ceil(g/j),R=1===m,H=m===_,L=m>1?()=>G(1):void 0,P=m<_?()=>G(_):void 0,W=m>1?()=>G(m-1):void 0,Y=m<_?()=>G(parseInt(m.toString())+1):void 0,N=e=>e?()=>te():()=>K(),V=e=>e?()=>re():()=>ee();v((()=>{m&&U(m)}),[m]),v((()=>{M(h),A(p.find((e=>e.value===h)))}),[h]);const U=e=>{z(e.toString())},q=()=>{T(!1),O(!1)},G=e=>{x&&(x(e),U(e))},Z=()=>{const e=Math.min(_,m+5);G(e),U(e),T(!0),O(!1)},X=()=>{const e=Math.max(1,m-5);G(e),U(e),T(!1),O(!0)},Q=e=>{const t=e.target.value;if(void 0===t||0===t.length)z("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));U(Math.max(1,Math.min(_,e)))}else z(t.replace(/[^0-9]/g,""))},J=e=>{e.preventDefault(),B&&(null==x||x(parseInt(B)))},K=()=>{T(!0)},ee=()=>{T(!1)},te=()=>{O(!0)},re=()=>{O(!1)},ne=(r,i,s)=>e(Kf,{children:[t(Xf,{focusHighlight:!1,focusOutline:"browser","aria-label":r?"Previous 5 pages":"Next 5 pages",onMouseOver:N(r),onMouseOut:V(r),onFocus:N(r),onBlur:V(r),onClick:r?X:Z,children:t(r&&I?n:i&&S?o:c,{"aria-hidden":!0})}),r&&I&&t(og,{children:"Previous 5 pages"}),i&&S&&t(og,{children:"Next 5 pages"})]},s);return e(qf,{className:u,ref:$,id:r||"pagination-wrapper","data-testid":d||"pagination","aria-label":"Pagination",children:[t(Gf,{children:e(Zf,{children:[b&&t(Qf,{onClick:L,disabled:R,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser",children:t(s,{"aria-hidden":!0})}),t(Qf,{onClick:W,disabled:R,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser",children:t(i,{"aria-hidden":!0})}),E?e(eg,{children:[t("form",{onSubmit:J,children:t(ng,{value:B,onChange:Q,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(d||"pagination")+"-input"})}),t(rg,{children:"/"}),t(tg,{children:_})]}):[...Array(_)].map(((e,r)=>{const n=r+1,o=_-5,i=m===n;if(_<=7)return t(Jf,{onClick:()=>G(n),$selected:i,"aria-label":"Page "+n,"aria-current":!!i&&"page",onMouseOver:q,onFocus:q,children:n},n);const s=m+1>5&&2===n,a=m-1<=o&&n===_-1-1;return s||a?ne(s,a,n):n<=5&&m+1<=5||n<=1||n===m||n<=m+1&&n>=m-1-1||n>o&&m-1>o||n>_-1?t(Jf,{onClick:()=>G(n),$selected:i,"aria-label":"Page "+n,"aria-current":!!i&&"page",onMouseOver:q,onFocus:q,children:n},n):null})),t(Qf,{onClick:Y,disabled:H,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser",children:t(l,{"aria-hidden":!0})}),b&&t(Qf,{onClick:P,disabled:H,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser",children:t(a,{"aria-hidden":!0})})]})}),y&&!E&&t(ig,{children:t(jf,{options:p,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{A(e);const t=e.value,r=Math.ceil(g/t);M(t);w&&w(m>=r?r:m,t)}})})]})})),ag=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}];export{sg as Pagination};
//# sourceMappingURL=index.js.map
