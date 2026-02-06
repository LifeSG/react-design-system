import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,version as g,useCallback as m,useMemo as b,forwardRef as p,useContext as f,createContext as y}from"react";import v,{css as x,keyframes as w,isStyledComponent as $,ThemeContext as F}from"styled-components";import C,{findDOMNode as E,unstable_batchedUpdates as D}from"react-dom";import{SquareIcon as k,SquareFillIcon as S,SquareTickFillIcon as A,MinusSquareFillIcon as B,ChevronDownIcon as O,FilterIcon as _,CrossIcon as M}from"@lifesg/react-icons";import{ChevronDownIcon as z}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as j}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as T}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as I}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as P}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as L}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as R}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as W}from"@lifesg/react-icons/external";import{CircleIcon as N}from"@lifesg/react-icons/circle";import{CircleDotIcon as H}from"@lifesg/react-icons/circle-dot";import{CrossIcon as Y}from"@lifesg/react-icons/cross";import{SquareIcon as V}from"@lifesg/react-icons/square";import{SquareTickFillIcon as q}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as Q}from"@lifesg/react-icons/tick";import{useFloatingTree as U,FloatingTree as Z,useFloatingNodeId as X,FloatingNode as G,useFloating as J,useTransitionStatus as K,useDismiss as ee,useInteractions as re,FloatingFocusManager as te,autoUpdate as ne,offset as ie,flip as oe,shift as ae,limitShift as se,size as le,useClick as de,useHover as ce,FloatingPortal as ue}from"@floating-ui/react";import{ChevronLeftIcon as he}from"@lifesg/react-icons/chevron-left";function ge(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var me="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function be(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pe,fe={exports:{}};pe=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,r)=>{r.match=function(e,r){return s(e).some((function(e){var t=e.inverse,n="all"===e.type||r.type===e.type;if(n&&t||!n&&!t)return!1;var i=e.expressions.every((function(e){var t=e.feature,n=e.modifier,i=e.value,o=r[t];if(!o)return!1;switch(t){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=c(i),o=c(o);break;case"resolution":i=d(i),o=d(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!t||!i&&t}))},r.parse=s;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var r=(e=e.trim()).match(t),o=r[1],a=r[2],s=r[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var r=e.match(n),t=r[1].toLowerCase().match(i);return{modifier:t[1],feature:t[2],value:r[2]}})),l}))}function l(e){var r,t=Number(e);return t||(t=(r=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/r[2]),t}function d(e){var r=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return r/2.54;case"dppx":return 96*r;default:return r}}function c(e){var r=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*r;case"cm":return 96*r/2.54;case"mm":return 96*r/2.54/10;case"in":return 96*r;case"pt":return 72*r;case"pc":return 72*r/12;default:return r}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var n=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(o.hasOwnProperty(e))return o[e];var r=e.replace(n,a);return o[e]=i.test(r)?"-"+r:r}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,r,t)=>{var n=t(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,r,t){var o=this;if(i&&!t){var a=i.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,r),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,r,t){return new o(e,r,t)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in o=Object(arguments[l]))t.call(o,d)&&(s[d]=o[d]);if(r){a=r(o);for(var c=0;c<a.length;c++)n.call(o,a[c])&&(s[a[c]]=o[a[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,r,t)=>{var n,i=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,r,t,s,l){for(var d in e)if(a(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+t+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](r,d,s,t,null,i)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+t+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in o)){o[c.message]=!0;var h=l?l():"";n("Failed "+t+" type: "+c.message+(null!=h?h:""))}}}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,r,t)=>{var n,i=t(/*! react-is */"./node_modules/react-is/index.js"),o=t(/*! object-assign */"./node_modules/object-assign/index.js"),a=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:b("array"),bigint:b("bigint"),bool:b("boolean"),func:b("function"),number:b("number"),object:b("object"),string:b("string"),symbol:b("symbol"),any:m(d),arrayOf:function(e){return m((function(r,t,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=r[t];if(!Array.isArray(s))return new g("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,i,o+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:m((function(r,t,n,i,o){var a=r[t];return e(a)?null:new g("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,r,t,n,o){var a=e[r];return i.isValidElementType(a)?null:new g("Invalid "+n+" `"+o+"` of type `"+y(a)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(r,t,n,i,o){if(!(r[t]instanceof e)){var a=e.name||c;return new g("Invalid "+i+" `"+o+"` of type `"+((s=r[t]).constructor&&s.constructor.name?s.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,r,t,n,i){return f(e[r])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(r,t,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],d=y(l);if("object"!==d)return new g("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,i,o+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(r,t,n,i,o){for(var a=r[t],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===v(r)?String(r):r}));return new g("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(t)+" at index "+r+"."),d}return m((function(r,t,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,t,n,i,o,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new g("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(r,t,n,i,o){var s=r[t],l=y(s);if("object"!==l)return new g("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return p(n,i,o,d,v(c));var u=c(s,d,n,i,o+"."+d,a);if(u)return u}return null}))},exact:function(e){return m((function(r,t,n,i,l){var d=r[t],c=y(d);if("object"!==c)return new g("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},r[t],e);for(var h in u){var m=e[h];if(s(e,h)&&"function"!=typeof m)return p(n,i,l,h,v(m));if(!m)return new g("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var b=m(d,h,n,i,l+"."+h,a);if(b)return b}return null}))}};function h(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function g(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function m(e){var t={},i=0;function o(o,s,l,d,u,h,m){if(d=d||c,h=h||l,m!==a){if(r){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}if("undefined"!=typeof console){var p=d+":"+l;!t[p]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[p]=!0,i++)}}return null==s[l]?o?null===s[l]?new g("The "+u+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new g("The "+u+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,u,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function b(e){return m((function(r,t,n,i,o,a){var s=r[t];return y(s)!==e?new g("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function p(e,r,t,n,i){return new g((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function f(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(f);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!n)return!1;var i,o=n.call(r);if(n!==r.entries){for(;!(i=o.next()).done;)if(!f(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!f(a[1]))return!1}return!0;default:return!1}}function y(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function v(e){if(null==e)return""+e;var r=y(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function x(e){var r=v(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return g.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,r,t)=>{var n=t(/*! react-is */"./node_modules/react-is/index.js");e.exports=t(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,f=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var g=e.type;switch(g){case d:case c:case i:case a:case o:case h:return g;default:var p=g&&g.$$typeof;switch(p){case l:case u:case b:case m:case s:return p;default:return r}}case n:return r}}}var w=d,$=c,F=l,C=s,E=t,D=u,k=i,S=b,A=m,B=n,O=a,_=o,M=h,z=!1;function j(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=$,r.ContextConsumer=F,r.ContextProvider=C,r.Element=E,r.ForwardRef=D,r.Fragment=k,r.Lazy=S,r.Memo=A,r.Portal=B,r.Profiler=O,r.StrictMode=_,r.Suspense=M,r.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===d},r.isConcurrentMode=j,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===b},r.isMemo=function(e){return x(e)===m},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===a},r.isStrictMode=function(e){return x(e)===o},r.isSuspense=function(e){return x(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===f||e.$$typeof===y||e.$$typeof===v||e.$$typeof===p)},r.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,r,t)=>{e.exports=t(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,r,t)=>{function n(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=Object.keys(e),n=Object.keys(r),i=t.length;if(n.length!==i)return!1;for(var o=0;o<i;o++){var a=t[o];if(e[a]!==r[a]||!Object.prototype.hasOwnProperty.call(r,a))return!1}return!0}function i(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=e.length;if(r.length!==t)return!1;for(var n=0;n<t;n++)if(e[n]!==r[n])return!1;return!0}t.r(r),t.d(r,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,r,t){var n=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=i(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.default=function(e){var r=e.children,t=e.device,i=e.onChange,a=n(e,["children","device","onChange"]),s=(0,o.default)(a,t,i);return"function"==typeof r?r(s):s?r:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=(0,t(/*! react */"react").createContext)(void 0);r.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Context=r.toQuery=r.useMediaQuery=r.default=void 0;var i=n(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.useMediaQuery=i.default;var o=n(t(/*! ./Component */"./src/Component.ts"));r.default=o.default;var a=n(t(/*! ./toQuery */"./src/toQuery.ts"));r.toQuery=a.default;var s=n(t(/*! ./Context */"./src/Context.ts"));r.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,r,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=o(t(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},d={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},c=i(d,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},c),h=n(n({},l),u);r.default={all:h,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(t(/*! ./mediaQuery */"./src/mediaQuery.ts"));r.default=function(e){var r=[];return Object.keys(o.default.all).forEach((function(t){var n=e[t];null!=n&&r.push(function(e,r){var t=(0,i.default)(e);return"number"==typeof r&&(r="".concat(r,"px")),!0===r?t:!1===r?"not ".concat(t):"(".concat(t,": ").concat(r,")")}(t,n))})),r.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(/*! react */"react"),o=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),d=n(t(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,a.default)(t)]=e[t],r}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,i.useState)(r),n=t[0],o=t[1];return(0,i.useEffect)((function(){var e=r();n!==e&&o(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,i.useContext)(d.default),t=function(){return c(e)||c(r)},n=(0,i.useState)(t),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=t();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,r]),o}(r),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,o.default)(e,r||{},!!r)},n=(0,i.useState)(t),a=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=t();return s(e),function(){e&&e.dispose()}}}),[e,r]),a}(a,n),g=function(e){var r=(0,i.useState)(e.matches),t=r[0],n=r[1];return(0,i.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),m=u();return(0,i.useEffect)((function(){m&&t&&t(g)}),[g]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),g}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var ye=fe.exports=pe(i),ve=Array.isArray,xe="object"==typeof me&&me&&me.Object===Object&&me,we="object"==typeof self&&self&&self.Object===Object&&self,$e=xe||we||Function("return this")(),Fe=$e.Symbol,Ce=Fe,Ee=Object.prototype,De=Ee.hasOwnProperty,ke=Ee.toString,Se=Ce?Ce.toStringTag:void 0;var Ae=function(e){var r=De.call(e,Se),t=e[Se];try{e[Se]=void 0;var n=!0}catch(e){}var i=ke.call(e);return n&&(r?e[Se]=t:delete e[Se]),i},Be=Object.prototype.toString;var Oe=Ae,_e=function(e){return Be.call(e)},Me=Fe?Fe.toStringTag:void 0;var ze=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Me&&Me in Object(e)?Oe(e):_e(e)};var je=ze,Te=function(e){return null!=e&&"object"==typeof e};var Ie=function(e){return"symbol"==typeof e||Te(e)&&"[object Symbol]"==je(e)},Pe=ve,Le=Ie,Re=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,We=/^\w*$/;var Ne=function(e,r){if(Pe(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Le(e))||(We.test(e)||!Re.test(e)||null!=r&&e in Object(r))};var He=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Ye=ze,Ve=He;var qe,Qe=function(e){if(!Ve(e))return!1;var r=Ye(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Ue=$e["__core-js_shared__"],Ze=(qe=/[^.]+$/.exec(Ue&&Ue.keys&&Ue.keys.IE_PROTO||""))?"Symbol(src)_1."+qe:"";var Xe=function(e){return!!Ze&&Ze in e},Ge=Function.prototype.toString;var Je=Qe,Ke=Xe,er=He,rr=function(e){if(null!=e){try{return Ge.call(e)}catch(e){}try{return e+""}catch(e){}}return""},tr=/^\[object .+?Constructor\]$/,nr=Function.prototype,ir=Object.prototype,or=nr.toString,ar=ir.hasOwnProperty,sr=RegExp("^"+or.call(ar).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var lr=function(e,r){return null==e?void 0:e[r]},dr=function(e){return!(!er(e)||Ke(e))&&(Je(e)?sr:tr).test(rr(e))},cr=lr;var ur=function(e,r){var t=cr(e,r);return dr(t)?t:void 0},hr=ur(Object,"create"),gr=hr;var mr=function(){this.__data__=gr?gr(null):{},this.size=0};var br=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},pr=hr,fr=Object.prototype.hasOwnProperty;var yr=function(e){var r=this.__data__;if(pr){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return fr.call(r,e)?r[e]:void 0},vr=hr,xr=Object.prototype.hasOwnProperty;var wr=function(e){var r=this.__data__;return vr?void 0!==r[e]:xr.call(r,e)},$r=hr;var Fr=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=$r&&void 0===r?"__lodash_hash_undefined__":r,this},Cr=mr,Er=br,Dr=yr,kr=wr,Sr=Fr;function Ar(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ar.prototype.clear=Cr,Ar.prototype.delete=Er,Ar.prototype.get=Dr,Ar.prototype.has=kr,Ar.prototype.set=Sr;var Br=Ar;var Or=function(){this.__data__=[],this.size=0};var _r=function(e,r){return e===r||e!=e&&r!=r};var Mr=function(e,r){for(var t=e.length;t--;)if(_r(e[t][0],r))return t;return-1},zr=Mr,jr=Array.prototype.splice;var Tr=function(e){var r=this.__data__,t=zr(r,e);return!(t<0)&&(t==r.length-1?r.pop():jr.call(r,t,1),--this.size,!0)},Ir=Mr;var Pr=function(e){var r=this.__data__,t=Ir(r,e);return t<0?void 0:r[t][1]},Lr=Mr;var Rr=function(e){return Lr(this.__data__,e)>-1},Wr=Mr;var Nr=function(e,r){var t=this.__data__,n=Wr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},Hr=Or,Yr=Tr,Vr=Pr,qr=Rr,Qr=Nr;function Ur(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ur.prototype.clear=Hr,Ur.prototype.delete=Yr,Ur.prototype.get=Vr,Ur.prototype.has=qr,Ur.prototype.set=Qr;var Zr=Ur,Xr=ur($e,"Map"),Gr=Br,Jr=Zr,Kr=Xr;var et=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var rt=function(e,r){var t=e.__data__;return et(r)?t["string"==typeof r?"string":"hash"]:t.map},tt=rt;var nt=function(e){var r=tt(this,e).delete(e);return this.size-=r?1:0,r},it=rt;var ot=function(e){return it(this,e).get(e)},at=rt;var st=function(e){return at(this,e).has(e)},lt=rt;var dt=function(e,r){var t=lt(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},ct=function(){this.size=0,this.__data__={hash:new Gr,map:new(Kr||Jr),string:new Gr}},ut=nt,ht=ot,gt=st,mt=dt;function bt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}bt.prototype.clear=ct,bt.prototype.delete=ut,bt.prototype.get=ht,bt.prototype.has=gt,bt.prototype.set=mt;var pt=bt;function ft(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(ft.Cache||pt),t}ft.Cache=pt;var yt=ft;var vt=function(e){var r=yt(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},xt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wt=/\\(\\)?/g,$t=vt((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(xt,(function(e,t,n,i){r.push(n?i.replace(wt,"$1"):t||e)})),r}));var Ft=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Ct=ve,Et=Ie,Dt=Fe?Fe.prototype:void 0,kt=Dt?Dt.toString:void 0;var St=function e(r){if("string"==typeof r)return r;if(Ct(r))return Ft(r,e)+"";if(Et(r))return kt?kt.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},At=St;var Bt=ve,Ot=Ne,_t=$t,Mt=function(e){return null==e?"":At(e)};var zt=Ie;var jt=function(e,r){return Bt(e)?e:Ot(e,r)?[e]:_t(Mt(e))},Tt=function(e){if("string"==typeof e||zt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var It=function(e,r){for(var t=0,n=(r=jt(r,e)).length;null!=e&&t<n;)e=e[Tt(r[t++])];return t&&t==n?e:void 0};var Pt=be((function(e,r,t){var n=null==e?void 0:It(e,r);return void 0===n?t:n}));const Lt=(e,r,t)=>Pt(t,r)||Pt(e,r),Rt=(e,r)=>{const t=r||e.defaultValue;return Pt(e.collections,t)},Wt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Nt=e=>r=>{var t;const n=r.theme,i=Rt(Wt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Lt(i,e,n.overrides.border)}px`:`${i[e]}px`},Ht={"width-005":Nt("width-005"),"width-010":Nt("width-010"),"width-020":Nt("width-020"),"width-040":Nt("width-040"),solid:(Yt="solid",e=>{var r;const t=e.theme,n=Rt(Wt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Lt(n,Yt,t.overrides.border):n[Yt];return"function"==typeof i?i(e):i})};var Yt;const Vt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ut={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xt={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Gt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jt={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Kt={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},en={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rn={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},tn={collections:{lifesg:Qt,bookingsg:Vt,rbs:Gt,mylegacy:Ut,ccube:qt,oneservice:Zt,pa:Xt,a11yplayground:Jt,supportgowhere:Kt,imda:en,spf:rn},defaultValue:"lifesg"},nn={collections:{lifesg:Qt,bookingsg:Vt,rbs:Gt,mylegacy:Ut,ccube:qt,oneservice:Zt,pa:Xt,a11yplayground:Jt,supportgowhere:Kt,imda:en,spf:rn},defaultValue:"lifesg"},on=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=Rt(i?nn:tn,null==n?void 0:n.colourScheme),a=i?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a];return s?Lt(o,e,s):o[e]},an={"brand-10":on("brand-10"),"brand-20":on("brand-20"),"brand-30":on("brand-30"),"brand-40":on("brand-40"),"brand-50":on("brand-50"),"brand-60":on("brand-60"),"brand-70":on("brand-70"),"brand-80":on("brand-80"),"brand-90":on("brand-90"),"brand-95":on("brand-95"),"brand-100":on("brand-100"),"primary-10":on("primary-10"),"primary-20":on("primary-20"),"primary-30":on("primary-30"),"primary-40":on("primary-40"),"primary-50":on("primary-50"),"primary-60":on("primary-60"),"primary-70":on("primary-70"),"primary-80":on("primary-80"),"primary-90":on("primary-90"),"primary-95":on("primary-95"),"primary-100":on("primary-100"),"secondary-10":on("secondary-10"),"secondary-20":on("secondary-20"),"secondary-30":on("secondary-30"),"secondary-40":on("secondary-40"),"secondary-50":on("secondary-50"),"secondary-60":on("secondary-60"),"secondary-70":on("secondary-70"),"secondary-80":on("secondary-80"),"secondary-90":on("secondary-90"),"secondary-95":on("secondary-95"),"secondary-100":on("secondary-100"),"neutral-10":on("neutral-10"),"neutral-20":on("neutral-20"),"neutral-30":on("neutral-30"),"neutral-40":on("neutral-40"),"neutral-50":on("neutral-50"),"neutral-60":on("neutral-60"),"neutral-70":on("neutral-70"),"neutral-80":on("neutral-80"),"neutral-90":on("neutral-90"),"neutral-95":on("neutral-95"),"neutral-100":on("neutral-100"),"success-10":on("success-10"),"success-20":on("success-20"),"success-30":on("success-30"),"success-40":on("success-40"),"success-50":on("success-50"),"success-60":on("success-60"),"success-70":on("success-70"),"success-80":on("success-80"),"success-90":on("success-90"),"success-95":on("success-95"),"success-100":on("success-100"),"warning-10":on("warning-10"),"warning-20":on("warning-20"),"warning-30":on("warning-30"),"warning-40":on("warning-40"),"warning-50":on("warning-50"),"warning-60":on("warning-60"),"warning-70":on("warning-70"),"warning-80":on("warning-80"),"warning-90":on("warning-90"),"warning-95":on("warning-95"),"warning-100":on("warning-100"),"error-10":on("error-10"),"error-20":on("error-20"),"error-30":on("error-30"),"error-40":on("error-40"),"error-50":on("error-50"),"error-60":on("error-60"),"error-70":on("error-70"),"error-80":on("error-80"),"error-90":on("error-90"),"error-95":on("error-95"),"error-100":on("error-100"),"info-10":on("info-10"),"info-20":on("info-20"),"info-30":on("info-30"),"info-40":on("info-40"),"info-50":on("info-50"),"info-60":on("info-60"),"info-70":on("info-70"),"info-80":on("info-80"),"info-90":on("info-90"),"info-95":on("info-95"),"info-100":on("info-100"),white:on("white"),black:on("black"),"primary-inverse":on("primary-inverse")},sn={text:on("neutral-20"),"text-subtle":on("neutral-30"),"text-subtler":on("neutral-50"),"text-subtlest":on("neutral-60"),"text-primary":on("primary-50"),"text-primary-strongest":on("primary-20"),"text-hover":on("primary-40"),"text-selected":on("primary-50"),"text-selected-hover":on("primary-40"),"text-disabled":on("neutral-50"),"text-disabled-subtle":on("neutral-60"),"text-disabled-subtlest":on("neutral-80"),"text-selected-disabled":on("neutral-20"),"text-success":on("success-40"),"text-warning":on("warning-40"),"text-error":on("error-40"),"text-info":on("info-40"),"text-inverse":on("white"),icon:on("neutral-50"),"icon-subtle":on("neutral-60"),"icon-strongest":on("neutral-20"),"icon-primary":on("primary-50"),"icon-primary-subtle":on("primary-60"),"icon-primary-subtlest":on("primary-70"),"icon-hover":on("primary-40"),"icon-selected":on("primary-50"),"icon-selected-hover":on("primary-40"),"icon-disabled":on("neutral-50"),"icon-disabled-subtle":on("neutral-60"),"icon-selected-disabled":on("neutral-60"),"icon-success":on("success-50"),"icon-warning":on("warning-60"),"icon-error":on("error-50"),"icon-error-strong":on("error-40"),"icon-info":on("info-50"),"icon-inverse":on("white"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-90"),"border-strong":on("neutral-70"),"border-stronger":on("neutral-50"),"border-primary":on("primary-50"),"border-primary-subtle":on("primary-60"),"border-hover":on("primary-90"),"border-hover-strong":on("primary-60"),"border-selected":on("primary-50"),"border-selected-subtle":on("primary-70"),"border-selected-subtlest":on("primary-90"),"border-selected-hover":on("primary-40"),"border-focus":on("primary-60"),"border-focus-strong":on("primary-50"),"border-disabled":on("neutral-90"),"border-selected-disabled":on("neutral-70"),"border-success":on("success-60"),"border-warning":on("warning-60"),"border-error":on("error-60"),"border-error-focus":on("error-60"),"border-error-focus-strong":on("error-40"),"border-error-strong":on("error-40"),"border-info":on("info-60"),bg:on("white"),"bg-strong":on("neutral-100"),"bg-stronger":on("neutral-95"),"bg-strongest":on("neutral-90"),"bg-hover":on("primary-95"),"bg-hover-strong":on("primary-90"),"bg-hover-subtle":on("primary-100"),"bg-hover-neutral":on("neutral-100"),"bg-hover-neutral-strong":on("neutral-90"),"bg-selected":on("primary-95"),"bg-selected-hover":on("primary-90"),"bg-selected-strong":on("primary-90"),"bg-selected-stronger":on("primary-70"),"bg-selected-strongest":on("primary-50"),"bg-selected-strongest-hover":on("primary-40"),"bg-disabled":on("neutral-95"),"bg-selected-disabled":on("neutral-95"),"bg-selected-stronger-disabled":on("neutral-70"),"bg-success":on("success-100"),"bg-success-hover":on("success-95"),"bg-success-strong":on("success-50"),"bg-success-strong-hover":on("success-40"),"bg-warning":on("warning-100"),"bg-warning-hover":on("warning-95"),"bg-warning-strong":on("warning-50"),"bg-warning-strong-hover":on("warning-40"),"bg-info":on("info-100"),"bg-info-hover":on("info-95"),"bg-info-strong":on("info-50"),"bg-info-strong-hover":on("info-40"),"bg-error":on("error-100"),"bg-error-hover":on("error-95"),"bg-error-strong":on("error-50"),"bg-error-strong-hover":on("error-40"),"bg-inverse":on("neutral-20"),"bg-inverse-subtle":on("neutral-30"),"bg-inverse-subtler":on("neutral-50"),"bg-inverse-subtlest":on("neutral-60"),"bg-inverse-hover":on("neutral-40"),"bg-primary":on("primary-50"),"bg-primary-subtle":on("primary-60"),"bg-primary-subtler":on("primary-95"),"bg-primary-subtlest":on("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":on("primary-40"),"bg-primary-subtlest-hover":on("primary-90"),"bg-primary-subtlest-selected":on("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:on("primary-50"),"hyperlink-hover":on("primary-40"),"hyperlink-visited":on("primary-40"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-50"),"focus-ring-inverse":on("white")},ln={text:on("neutral-100"),"text-subtle":on("neutral-80"),"text-subtler":on("neutral-60"),"text-subtlest":on("neutral-50"),"text-primary":on("primary-60"),"text-primary-strongest":on("primary-90"),"text-hover":on("primary-70"),"text-selected":on("primary-60"),"text-selected-hover":on("primary-70"),"text-disabled":on("neutral-60"),"text-disabled-subtle":on("neutral-50"),"text-disabled-subtlest":on("neutral-30"),"text-selected-disabled":on("neutral-90"),"text-success":on("success-70"),"text-warning":on("warning-70"),"text-error":on("error-70"),"text-info":on("info-70"),"text-inverse":on("black"),icon:on("neutral-60"),"icon-subtle":on("neutral-50"),"icon-strongest":on("neutral-90"),"icon-primary":on("primary-60"),"icon-primary-subtle":on("primary-50"),"icon-primary-subtlest":on("primary-40"),"icon-hover":on("primary-70"),"icon-selected":on("primary-60"),"icon-selected-hover":on("primary-70"),"icon-disabled":on("neutral-60"),"icon-disabled-subtle":on("neutral-50"),"icon-selected-disabled":on("neutral-50"),"icon-success":on("success-60"),"icon-warning":on("warning-50"),"icon-error":on("error-60"),"icon-error-strong":on("error-70"),"icon-info":on("info-60"),"icon-inverse":on("black"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-20"),"border-strong":on("neutral-40"),"border-stronger":on("neutral-60"),"border-primary":on("primary-60"),"border-primary-subtle":on("primary-50"),"border-hover":on("primary-20"),"border-hover-strong":on("primary-50"),"border-selected":on("primary-60"),"border-selected-subtle":on("primary-40"),"border-selected-subtlest":on("primary-20"),"border-selected-hover":on("primary-70"),"border-focus":on("primary-50"),"border-focus-strong":on("primary-60"),"border-disabled":on("neutral-20"),"border-selected-disabled":on("neutral-40"),"border-success":on("success-50"),"border-warning":on("warning-50"),"border-error":on("error-50"),"border-error-focus":on("error-50"),"border-error-focus-strong":on("error-70"),"border-error-strong":on("error-70"),"border-info":on("info-50"),bg:on("black"),"bg-strong":on("neutral-10"),"bg-stronger":on("neutral-20"),"bg-strongest":on("neutral-20"),"bg-hover":on("primary-20"),"bg-hover-strong":on("primary-20"),"bg-hover-subtle":on("primary-10"),"bg-hover-neutral":on("neutral-10"),"bg-hover-neutral-strong":on("neutral-20"),"bg-selected":on("primary-20"),"bg-selected-hover":on("primary-20"),"bg-selected-strong":on("primary-20"),"bg-selected-stronger":on("primary-40"),"bg-selected-strongest":on("primary-60"),"bg-selected-strongest-hover":on("primary-70"),"bg-disabled":on("neutral-20"),"bg-selected-disabled":on("neutral-20"),"bg-selected-stronger-disabled":on("neutral-40"),"bg-success":on("success-10"),"bg-success-hover":on("success-20"),"bg-success-strong":on("success-60"),"bg-success-strong-hover":on("success-70"),"bg-warning":on("warning-10"),"bg-warning-hover":on("warning-20"),"bg-warning-strong":on("warning-60"),"bg-warning-strong-hover":on("warning-70"),"bg-info":on("info-10"),"bg-info-hover":on("info-20"),"bg-info-strong":on("info-60"),"bg-info-strong-hover":on("info-70"),"bg-error":on("error-10"),"bg-error-hover":on("error-20"),"bg-error-strong":on("error-60"),"bg-error-strong-hover":on("error-70"),"bg-inverse":on("neutral-90"),"bg-inverse-subtle":on("neutral-80"),"bg-inverse-subtler":on("neutral-60"),"bg-inverse-subtlest":on("neutral-50"),"bg-inverse-hover":on("neutral-70"),"bg-primary":on("primary-60"),"bg-primary-subtle":on("primary-50"),"bg-primary-subtler":on("primary-20"),"bg-primary-subtlest":on("primary-10"),"bg-available":"#185339","bg-primary-hover":on("primary-70"),"bg-primary-subtlest-hover":on("primary-20"),"bg-primary-subtlest-selected":on("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:on("primary-60"),"hyperlink-hover":on("primary-70"),"hyperlink-visited":on("primary-70"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-60"),"focus-ring-inverse":on("black")},dn={text:on("neutral-30"),"text-subtle":on("neutral-40"),"text-subtler":on("neutral-50"),"text-subtlest":on("neutral-70"),"text-primary":on("neutral-10"),"text-primary-strongest":on("neutral-10"),"text-hover":on("neutral-70"),"text-selected":on("neutral-20"),"text-selected-hover":on("neutral-10"),"text-disabled":on("neutral-50"),"text-disabled-subtle":on("neutral-70"),"text-disabled-subtlest":on("neutral-80"),"text-selected-disabled":on("neutral-40"),"text-success":on("success-40"),"text-warning":on("warning-40"),"text-error":on("brand-30"),"text-info":on("neutral-40"),"text-inverse":on("neutral-100"),icon:on("neutral-40"),"icon-subtle":on("neutral-50"),"icon-strongest":on("neutral-10"),"icon-primary":on("neutral-10"),"icon-primary-subtle":on("neutral-30"),"icon-primary-subtlest":on("neutral-60"),"icon-hover":on("neutral-70"),"icon-selected":on("brand-20"),"icon-selected-hover":on("brand-10"),"icon-disabled":on("neutral-50"),"icon-disabled-subtle":on("neutral-70"),"icon-selected-disabled":on("neutral-40"),"icon-success":on("success-40"),"icon-warning":on("warning-60"),"icon-error":on("brand-30"),"icon-error-strong":on("brand-10"),"icon-info":on("neutral-40"),"icon-inverse":on("neutral-100"),"icon-primary-inverse":"#F9B371",border:on("neutral-90"),"border-strong":on("neutral-30"),"border-stronger":on("neutral-20"),"border-primary":on("neutral-40"),"border-primary-subtle":on("neutral-60"),"border-hover":on("neutral-80"),"border-hover-strong":on("neutral-10"),"border-selected":on("brand-20"),"border-selected-subtle":on("neutral-40"),"border-selected-subtlest":on("neutral-70"),"border-selected-hover":on("neutral-10"),"border-focus":on("neutral-20"),"border-focus-strong":on("neutral-10"),"border-disabled":on("neutral-90"),"border-selected-disabled":on("neutral-80"),"border-success":on("success-40"),"border-warning":on("warning-60"),"border-error":on("brand-30"),"border-error-focus":on("brand-20"),"border-error-focus-strong":on("brand-10"),"border-error-strong":on("brand-20"),"border-info":on("neutral-40"),bg:on("neutral-100"),"bg-strong":on("neutral-95"),"bg-stronger":on("neutral-90"),"bg-strongest":on("neutral-80"),"bg-hover":on("brand-90"),"bg-hover-strong":on("brand-80"),"bg-hover-subtle":on("neutral-90"),"bg-hover-neutral":on("neutral-90"),"bg-hover-neutral-strong":on("neutral-90"),"bg-selected":on("brand-100"),"bg-selected-hover":on("brand-30"),"bg-selected-strong":on("brand-50"),"bg-selected-stronger":on("brand-40"),"bg-selected-strongest":on("brand-20"),"bg-selected-strongest-hover":on("brand-10"),"bg-disabled":on("neutral-90"),"bg-selected-disabled":on("neutral-90"),"bg-selected-stronger-disabled":on("neutral-80"),"bg-success":on("success-100"),"bg-success-hover":on("success-95"),"bg-success-strong":on("success-50"),"bg-success-strong-hover":on("success-40"),"bg-warning":on("warning-100"),"bg-warning-hover":on("warning-95"),"bg-warning-strong":on("warning-50"),"bg-warning-strong-hover":on("warning-40"),"bg-info":on("neutral-95"),"bg-info-hover":on("info-95"),"bg-info-strong":on("info-50"),"bg-info-strong-hover":on("info-40"),"bg-error":on("brand-100"),"bg-error-hover":on("error-95"),"bg-error-strong":on("error-50"),"bg-error-strong-hover":on("error-40"),"bg-inverse":on("neutral-40"),"bg-inverse-subtle":on("neutral-60"),"bg-inverse-subtler":on("neutral-70"),"bg-inverse-subtlest":on("neutral-80"),"bg-inverse-hover":on("neutral-30"),"bg-primary":on("brand-20"),"bg-primary-subtle":on("brand-60"),"bg-primary-subtler":on("brand-80"),"bg-primary-subtlest":on("brand-100"),"bg-available":on("success-60"),"bg-primary-hover":on("brand-10"),"bg-primary-subtlest-hover":on("brand-80"),"bg-primary-subtlest-selected":on("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:on("neutral-10"),"hyperlink-hover":on("neutral-40"),"hyperlink-visited":on("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":on("primary-50"),"focus-ring-inverse":on("white")},cn={text:on("neutral-20"),"text-subtle":on("neutral-30"),"text-subtler":on("neutral-50"),"text-subtlest":on("neutral-60"),"text-primary":on("primary-50"),"text-primary-strongest":on("primary-20"),"text-hover":on("primary-40"),"text-selected":on("primary-50"),"text-selected-hover":on("primary-40"),"text-disabled":on("neutral-50"),"text-disabled-subtle":on("neutral-60"),"text-disabled-subtlest":on("neutral-80"),"text-selected-disabled":on("neutral-20"),"text-success":on("success-40"),"text-warning":on("warning-40"),"text-error":on("error-40"),"text-info":on("info-40"),"text-inverse":on("white"),icon:on("neutral-50"),"icon-subtle":on("neutral-60"),"icon-strongest":on("neutral-20"),"icon-primary":on("primary-50"),"icon-primary-subtle":on("primary-60"),"icon-primary-subtlest":on("primary-70"),"icon-hover":on("primary-40"),"icon-selected":on("primary-50"),"icon-selected-hover":on("primary-40"),"icon-disabled":on("neutral-50"),"icon-disabled-subtle":on("neutral-60"),"icon-selected-disabled":on("neutral-60"),"icon-success":on("success-50"),"icon-warning":on("warning-60"),"icon-error":on("error-50"),"icon-error-strong":on("error-40"),"icon-info":on("info-50"),"icon-inverse":on("white"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-90"),"border-strong":on("neutral-70"),"border-stronger":on("neutral-50"),"border-primary":on("primary-50"),"border-primary-subtle":on("primary-60"),"border-hover":on("primary-90"),"border-hover-strong":on("primary-60"),"border-selected":on("primary-50"),"border-selected-subtle":on("primary-70"),"border-selected-subtlest":on("primary-90"),"border-selected-hover":on("primary-40"),"border-focus":on("primary-60"),"border-focus-strong":on("primary-50"),"border-disabled":on("neutral-90"),"border-selected-disabled":on("neutral-70"),"border-success":on("success-60"),"border-warning":on("warning-60"),"border-error":on("error-60"),"border-error-focus":on("error-60"),"border-error-focus-strong":on("error-40"),"border-error-strong":on("error-40"),"border-info":on("info-60"),bg:on("white"),"bg-strong":on("neutral-100"),"bg-stronger":on("neutral-95"),"bg-strongest":on("neutral-90"),"bg-hover":on("primary-95"),"bg-hover-strong":on("primary-90"),"bg-hover-subtle":on("primary-100"),"bg-hover-neutral":on("neutral-100"),"bg-hover-neutral-strong":on("neutral-90"),"bg-selected":on("primary-95"),"bg-selected-hover":on("primary-90"),"bg-selected-strong":on("primary-90"),"bg-selected-stronger":on("primary-70"),"bg-selected-strongest":on("primary-50"),"bg-selected-strongest-hover":on("primary-40"),"bg-disabled":on("neutral-95"),"bg-selected-disabled":on("neutral-95"),"bg-selected-stronger-disabled":on("neutral-70"),"bg-success":on("success-100"),"bg-success-hover":on("success-95"),"bg-success-strong":on("success-50"),"bg-success-strong-hover":on("success-40"),"bg-warning":on("warning-100"),"bg-warning-hover":on("warning-95"),"bg-warning-strong":on("warning-50"),"bg-warning-strong-hover":on("warning-40"),"bg-info":on("info-100"),"bg-info-hover":on("info-95"),"bg-info-strong":on("info-50"),"bg-info-strong-hover":on("info-40"),"bg-error":on("error-100"),"bg-error-hover":on("error-95"),"bg-error-strong":on("error-50"),"bg-error-strong-hover":on("error-40"),"bg-inverse":on("neutral-20"),"bg-inverse-subtle":on("neutral-30"),"bg-inverse-subtler":on("neutral-50"),"bg-inverse-subtlest":on("neutral-60"),"bg-inverse-hover":on("neutral-40"),"bg-primary":on("primary-50"),"bg-primary-subtle":on("primary-60"),"bg-primary-subtler":on("primary-95"),"bg-primary-subtlest":on("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":on("primary-40"),"bg-primary-subtlest-hover":on("primary-90"),"bg-primary-subtlest-selected":on("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:on("primary-50"),"hyperlink-hover":on("primary-40"),"hyperlink-visited":on("primary-40"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-50"),"focus-ring-inverse":on("white")},un={text:on("neutral-100"),"text-subtle":on("neutral-80"),"text-subtler":on("neutral-60"),"text-subtlest":on("neutral-50"),"text-primary":on("primary-60"),"text-primary-strongest":on("primary-90"),"text-hover":on("primary-70"),"text-selected":on("primary-60"),"text-selected-hover":on("primary-70"),"text-disabled":on("neutral-60"),"text-disabled-subtle":on("neutral-50"),"text-disabled-subtlest":on("neutral-30"),"text-selected-disabled":on("neutral-90"),"text-success":on("success-70"),"text-warning":on("warning-70"),"text-error":on("error-70"),"text-info":on("info-70"),"text-inverse":on("black"),icon:on("neutral-60"),"icon-subtle":on("neutral-50"),"icon-strongest":on("neutral-90"),"icon-primary":on("primary-60"),"icon-primary-subtle":on("primary-50"),"icon-primary-subtlest":on("primary-40"),"icon-hover":on("primary-70"),"icon-selected":on("primary-60"),"icon-selected-hover":on("primary-70"),"icon-disabled":on("neutral-60"),"icon-disabled-subtle":on("neutral-50"),"icon-selected-disabled":on("neutral-50"),"icon-success":on("success-60"),"icon-warning":on("warning-50"),"icon-error":on("error-60"),"icon-error-strong":on("error-70"),"icon-info":on("info-60"),"icon-inverse":on("black"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-20"),"border-strong":on("neutral-40"),"border-stronger":on("neutral-60"),"border-primary":on("primary-60"),"border-primary-subtle":on("primary-50"),"border-hover":on("primary-20"),"border-hover-strong":on("primary-50"),"border-selected":on("primary-60"),"border-selected-subtle":on("primary-40"),"border-selected-subtlest":on("primary-20"),"border-selected-hover":on("primary-70"),"border-focus":on("primary-50"),"border-focus-strong":on("primary-60"),"border-disabled":on("neutral-20"),"border-selected-disabled":on("neutral-40"),"border-success":on("success-50"),"border-warning":on("warning-50"),"border-error":on("error-50"),"border-error-focus":on("error-50"),"border-error-focus-strong":on("error-70"),"border-error-strong":on("error-70"),"border-info":on("info-50"),bg:on("black"),"bg-strong":on("neutral-10"),"bg-stronger":on("neutral-20"),"bg-strongest":on("neutral-20"),"bg-hover":on("primary-20"),"bg-hover-strong":on("primary-20"),"bg-hover-subtle":on("primary-10"),"bg-hover-neutral":on("neutral-10"),"bg-hover-neutral-strong":on("neutral-20"),"bg-selected":on("primary-20"),"bg-selected-hover":on("primary-20"),"bg-selected-strong":on("primary-20"),"bg-selected-stronger":on("primary-40"),"bg-selected-strongest":on("primary-60"),"bg-selected-strongest-hover":on("primary-70"),"bg-disabled":on("neutral-20"),"bg-selected-disabled":on("neutral-20"),"bg-selected-stronger-disabled":on("neutral-40"),"bg-success":on("success-10"),"bg-success-hover":on("success-20"),"bg-success-strong":on("success-60"),"bg-success-strong-hover":on("success-70"),"bg-warning":on("warning-10"),"bg-warning-hover":on("warning-20"),"bg-warning-strong":on("warning-60"),"bg-warning-strong-hover":on("warning-70"),"bg-info":on("info-10"),"bg-info-hover":on("info-20"),"bg-info-strong":on("info-60"),"bg-info-strong-hover":on("info-70"),"bg-error":on("error-10"),"bg-error-hover":on("error-20"),"bg-error-strong":on("error-60"),"bg-error-strong-hover":on("error-70"),"bg-inverse":on("neutral-90"),"bg-inverse-subtle":on("neutral-80"),"bg-inverse-subtler":on("neutral-60"),"bg-inverse-subtlest":on("neutral-50"),"bg-inverse-hover":on("neutral-70"),"bg-primary":on("primary-60"),"bg-primary-subtle":on("primary-50"),"bg-primary-subtler":on("primary-20"),"bg-primary-subtlest":on("primary-10"),"bg-available":"#185339","bg-primary-hover":on("primary-70"),"bg-primary-subtlest-hover":on("primary-20"),"bg-primary-subtlest-selected":on("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:on("primary-60"),"hyperlink-hover":on("primary-70"),"hyperlink-visited":on("primary-70"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-60"),"focus-ring-inverse":on("black")},hn={collections:{lifesg:sn,bookingsg:sn,rbs:sn,mylegacy:sn,ccube:sn,oneservice:sn,pa:dn,a11yplayground:cn,supportgowhere:sn,imda:sn,spf:sn},defaultValue:"lifesg"},gn={collections:{lifesg:ln,bookingsg:ln,rbs:ln,mylegacy:ln,ccube:ln,oneservice:ln,pa:ln,a11yplayground:un,supportgowhere:ln,imda:ln,spf:ln},defaultValue:"lifesg"},mn=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=Rt(i?gn:hn,null==n?void 0:n.colourScheme),a=i?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a],l=s?Lt(o,e,s):o[e];return"function"==typeof l?l(r):l},bn={text:mn("text"),"text-subtle":mn("text-subtle"),"text-subtler":mn("text-subtler"),"text-subtlest":mn("text-subtlest"),"text-primary":mn("text-primary"),"text-primary-strongest":mn("text-primary-strongest"),"text-hover":mn("text-hover"),"text-selected":mn("text-selected"),"text-selected-hover":mn("text-selected-hover"),"text-disabled":mn("text-disabled"),"text-disabled-subtle":mn("text-disabled-subtle"),"text-disabled-subtlest":mn("text-disabled-subtlest"),"text-selected-disabled":mn("text-selected-disabled"),"text-success":mn("text-success"),"text-warning":mn("text-warning"),"text-error":mn("text-error"),"text-info":mn("text-info"),"text-inverse":mn("text-inverse"),icon:mn("icon"),"icon-subtle":mn("icon-subtle"),"icon-strongest":mn("icon-strongest"),"icon-primary":mn("icon-primary"),"icon-primary-subtle":mn("icon-primary-subtle"),"icon-primary-subtlest":mn("icon-primary-subtlest"),"icon-hover":mn("icon-hover"),"icon-selected":mn("icon-selected"),"icon-selected-hover":mn("icon-selected-hover"),"icon-disabled":mn("icon-disabled"),"icon-disabled-subtle":mn("icon-disabled-subtle"),"icon-selected-disabled":mn("icon-selected-disabled"),"icon-success":mn("icon-success"),"icon-warning":mn("icon-warning"),"icon-error":mn("icon-error"),"icon-error-strong":mn("icon-error-strong"),"icon-info":mn("icon-info"),"icon-inverse":mn("icon-inverse"),"icon-primary-inverse":mn("icon-primary-inverse"),border:mn("border"),"border-strong":mn("border-strong"),"border-stronger":mn("border-stronger"),"border-primary":mn("border-primary"),"border-primary-subtle":mn("border-primary-subtle"),"border-hover":mn("border-hover"),"border-hover-strong":mn("border-hover-strong"),"border-selected":mn("border-selected"),"border-selected-subtle":mn("border-selected-subtle"),"border-selected-subtlest":mn("border-selected-subtlest"),"border-selected-hover":mn("border-selected-hover"),"border-focus":mn("border-focus"),"border-focus-strong":mn("border-focus-strong"),"border-disabled":mn("border-disabled"),"border-selected-disabled":mn("border-selected-disabled"),"border-success":mn("border-success"),"border-warning":mn("border-warning"),"border-error":mn("border-error"),"border-error-focus":mn("border-error-focus"),"border-error-focus-strong":mn("border-error-focus-strong"),"border-error-strong":mn("border-error-strong"),"border-info":mn("border-info"),bg:mn("bg"),"bg-strong":mn("bg-strong"),"bg-stronger":mn("bg-stronger"),"bg-strongest":mn("bg-strongest"),"bg-hover":mn("bg-hover"),"bg-hover-strong":mn("bg-hover-strong"),"bg-hover-subtle":mn("bg-hover-subtle"),"bg-hover-neutral":mn("bg-hover-neutral"),"bg-hover-neutral-strong":mn("bg-hover-neutral-strong"),"bg-selected":mn("bg-selected"),"bg-selected-hover":mn("bg-selected-hover"),"bg-selected-strong":mn("bg-selected-strong"),"bg-selected-stronger":mn("bg-selected-stronger"),"bg-selected-strongest":mn("bg-selected-strongest"),"bg-selected-strongest-hover":mn("bg-selected-strongest-hover"),"bg-disabled":mn("bg-disabled"),"bg-selected-disabled":mn("bg-selected-disabled"),"bg-selected-stronger-disabled":mn("bg-selected-stronger-disabled"),"bg-success":mn("bg-success"),"bg-success-hover":mn("bg-success-hover"),"bg-success-strong":mn("bg-success-strong"),"bg-success-strong-hover":mn("bg-success-strong-hover"),"bg-warning":mn("bg-warning"),"bg-warning-hover":mn("bg-warning-hover"),"bg-warning-strong":mn("bg-warning-strong"),"bg-warning-strong-hover":mn("bg-warning-strong-hover"),"bg-info":mn("bg-info"),"bg-info-hover":mn("bg-info-hover"),"bg-info-strong":mn("bg-info-strong"),"bg-info-strong-hover":mn("bg-info-strong-hover"),"bg-error":mn("bg-error"),"bg-error-hover":mn("bg-error-hover"),"bg-error-strong":mn("bg-error-strong"),"bg-error-strong-hover":mn("bg-error-strong-hover"),"bg-inverse":mn("bg-inverse"),"bg-inverse-subtle":mn("bg-inverse-subtle"),"bg-inverse-subtler":mn("bg-inverse-subtler"),"bg-inverse-subtlest":mn("bg-inverse-subtlest"),"bg-inverse-hover":mn("bg-inverse-hover"),"bg-primary":mn("bg-primary"),"bg-primary-subtle":mn("bg-primary-subtle"),"bg-primary-subtler":mn("bg-primary-subtler"),"bg-primary-subtlest":mn("bg-primary-subtlest"),"bg-available":mn("bg-available"),"bg-primary-hover":mn("bg-primary-hover"),"bg-primary-subtlest-hover":mn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":mn("bg-primary-subtlest-selected"),"overlay-strong":mn("overlay-strong"),"overlay-subtle":mn("overlay-subtle"),hyperlink:mn("hyperlink"),"hyperlink-hover":mn("hyperlink-hover"),"hyperlink-visited":mn("hyperlink-visited"),"hyperlink-inverse":mn("hyperlink-inverse"),"focus-ring":mn("focus-ring"),"focus-ring-inverse":mn("focus-ring-inverse")},pn={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o+"px")&&void 0!==t?t:Ht["width-010"](r),d=null!==(n="function"==typeof a?a(r):a+"px")&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:bn.border(r),u=Ht.solid;return x`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:Ht["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:bn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return x`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},fn=e=>1===e.length&&"theme"in e[0],yn=e=>(...r)=>t=>{const n=fn(r)?[]:r,i=fn(r)?r[0]:t,o=i.theme;return(0,Rt(pn,null==o?void 0:o.borderScheme)[e])(...n)(i)},vn={solid:yn("solid"),"dashed-default":yn("dashed-default")},xn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},wn=e=>r=>{var t;const n=r.theme,i=Rt(xn,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Lt(i,e,n.overrides.breakpoint):i[e],o},$n={"xxs-min":wn("xxs-min"),"xxs-max":wn("xxs-max"),"xs-min":wn("xs-min"),"xs-max":wn("xs-max"),"sm-min":wn("sm-min"),"sm-max":wn("sm-max"),"md-min":wn("md-min"),"md-max":wn("md-max"),"lg-min":wn("lg-min"),"lg-max":wn("lg-max"),"xl-min":wn("xl-min"),"xl-max":wn("xl-max"),"xxl-min":wn("xxl-min"),"xxs-column":wn("xxs-column"),"xs-column":wn("xs-column"),"sm-column":wn("sm-column"),"md-column":wn("md-column"),"lg-column":wn("lg-column"),"xl-column":wn("xl-column"),"xxl-column":wn("xxl-column"),"xxs-gutter":wn("xxs-gutter"),"xs-gutter":wn("xs-gutter"),"sm-gutter":wn("sm-gutter"),"md-gutter":wn("md-gutter"),"lg-gutter":wn("lg-gutter"),"xl-gutter":wn("xl-gutter"),"xxl-gutter":wn("xxl-gutter"),"xxs-margin":wn("xxs-margin"),"xs-margin":wn("xs-margin"),"sm-margin":wn("sm-margin"),"md-margin":wn("md-margin"),"lg-margin":wn("lg-margin"),"xl-margin":wn("xl-margin"),"xxl-margin":wn("xxl-margin")},Fn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=$n["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Cn={MaxWidth:Fn("max-width"),MinWidth:Fn("min-width")},En={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},Dn=e=>r=>{var t;const n=r.theme,i=Rt(En,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Lt(i,e,n.overrides.fontSpec):i[e]},kn={"heading-size-xxl":Dn("heading-size-xxl"),"heading-size-xl":Dn("heading-size-xl"),"heading-size-lg":Dn("heading-size-lg"),"heading-size-md":Dn("heading-size-md"),"heading-size-sm":Dn("heading-size-sm"),"heading-size-xs":Dn("heading-size-xs"),"heading-lh-xxl":Dn("heading-lh-xxl"),"heading-lh-xl":Dn("heading-lh-xl"),"heading-lh-lg":Dn("heading-lh-lg"),"heading-lh-md":Dn("heading-lh-md"),"heading-lh-sm":Dn("heading-lh-sm"),"heading-lh-xs":Dn("heading-lh-xs"),"heading-ls-xxl":Dn("heading-ls-xxl"),"heading-ls-xl":Dn("heading-ls-xl"),"heading-ls-lg":Dn("heading-ls-lg"),"heading-ls-md":Dn("heading-ls-md"),"heading-ls-sm":Dn("heading-ls-sm"),"heading-ls-xs":Dn("heading-ls-xs"),"weight-light":Dn("weight-light"),"weight-regular":Dn("weight-regular"),"weight-semibold":Dn("weight-semibold"),"weight-bold":Dn("weight-bold"),"font-family":Dn("font-family"),"body-size-baseline":Dn("body-size-baseline"),"body-size-md":Dn("body-size-md"),"body-size-sm":Dn("body-size-sm"),"body-size-xs":Dn("body-size-xs"),"body-lh-baseline":Dn("body-lh-baseline"),"body-lh-md":Dn("body-lh-md"),"body-lh-sm":Dn("body-lh-sm"),"body-lh-xs":Dn("body-lh-xs"),"body-ls-baseline":Dn("body-ls-baseline"),"body-ls-md":Dn("body-ls-md"),"body-ls-sm":Dn("body-ls-sm"),"body-ls-xs":Dn("body-ls-xs"),"form-label-size":Dn("form-label-size"),"form-description-size":Dn("form-description-size"),"form-label-lh":Dn("form-label-lh"),"form-description-lh":Dn("form-description-lh"),"form-label-ls":Dn("form-label-ls"),"form-description-ls":Dn("form-description-ls")},Sn=(e,r,t,n,i)=>{const{disableLigatures:o}=i||{};return x`
        font-family: ${Dn("font-family")};
        font-size: ${Dn(e)};
        font-weight: ${Dn(r)};
        line-height: ${Dn(t)};
        letter-spacing: ${Dn(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},An=(e={})=>({"heading-xxl-light":Sn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Sn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Sn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Sn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Sn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Sn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Sn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Sn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Sn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Sn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Sn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Sn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Sn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Sn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Sn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Sn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Sn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Sn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Sn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Sn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Sn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Sn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Sn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Sn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Sn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Sn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Sn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Sn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Sn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Sn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Sn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Sn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Sn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Sn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Sn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Sn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Sn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Sn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Sn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Sn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Sn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Sn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Bn=An({disableLigatures:!0}),On=An(),_n={collections:{default:On,bookingsg:Bn,mylegacy:On,pa:An({disableLigatures:!0}),a11yplayground:An({disableLigatures:!0}),supportgowhere:An({disableLigatures:!0}),imda:An({disableLigatures:!0}),spf:An({disableLigatures:!0}),oneservice:An()},defaultValue:"default"},Mn=e=>r=>{var t;const n=r.theme,i=Rt(_n,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Lt(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},zn={"heading-xxl-light":Mn("heading-xxl-light"),"heading-xxl-regular":Mn("heading-xxl-regular"),"heading-xxl-semibold":Mn("heading-xxl-semibold"),"heading-xxl-bold":Mn("heading-xxl-bold"),"heading-xl-light":Mn("heading-xl-light"),"heading-xl-regular":Mn("heading-xl-regular"),"heading-xl-semibold":Mn("heading-xl-semibold"),"heading-xl-bold":Mn("heading-xl-bold"),"heading-lg-light":Mn("heading-lg-light"),"heading-lg-regular":Mn("heading-lg-regular"),"heading-lg-semibold":Mn("heading-lg-semibold"),"heading-lg-bold":Mn("heading-lg-bold"),"heading-md-light":Mn("heading-md-light"),"heading-md-regular":Mn("heading-md-regular"),"heading-md-semibold":Mn("heading-md-semibold"),"heading-md-bold":Mn("heading-md-bold"),"heading-sm-light":Mn("heading-sm-light"),"heading-sm-regular":Mn("heading-sm-regular"),"heading-sm-semibold":Mn("heading-sm-semibold"),"heading-sm-bold":Mn("heading-sm-bold"),"heading-xs-light":Mn("heading-xs-light"),"heading-xs-regular":Mn("heading-xs-regular"),"heading-xs-semibold":Mn("heading-xs-semibold"),"heading-xs-bold":Mn("heading-xs-bold"),"body-baseline-light":Mn("body-baseline-light"),"body-baseline-regular":Mn("body-baseline-regular"),"body-baseline-semibold":Mn("body-baseline-semibold"),"body-baseline-bold":Mn("body-baseline-bold"),"body-md-light":Mn("body-md-light"),"body-md-regular":Mn("body-md-regular"),"body-md-semibold":Mn("body-md-semibold"),"body-md-bold":Mn("body-md-bold"),"body-sm-light":Mn("body-sm-light"),"body-sm-regular":Mn("body-sm-regular"),"body-sm-semibold":Mn("body-sm-semibold"),"body-sm-bold":Mn("body-sm-bold"),"body-xs-light":Mn("body-xs-light"),"body-xs-regular":Mn("body-xs-regular"),"body-xs-semibold":Mn("body-xs-semibold"),"body-xs-bold":Mn("body-xs-bold"),"form-label":Mn("form-label"),"form-description":Mn("form-description")},jn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Tn=e=>r=>{var t;const n=r.theme,i=Rt(jn,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Lt(i,e,n.overrides.motion):i[e]},In={"duration-150":Tn("duration-150"),"duration-250":Tn("duration-250"),"duration-350":Tn("duration-350"),"duration-500":Tn("duration-500"),"duration-800":Tn("duration-800"),"duration-1000":Tn("duration-1000"),"ease-default":Tn("ease-default"),"ease-standard":Tn("ease-standard"),"ease-entrance":Tn("ease-entrance"),"ease-exit":Tn("ease-exit")},Pn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},Ln=e=>r=>{var t;const n=r.theme,i=Rt(Pn,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Lt(i,e,n.overrides.radius)}px`:`${i[e]}px`},Rn={none:Ln("none"),xs:Ln("xs"),sm:Ln("sm"),md:Ln("md"),lg:Ln("lg"),full:Ln("full")},Wn=(e,r,t)=>n=>{const i=mn(r)(n)||on(r)(n);return`${e} rgba(from ${i} r g b / ${100*t}%)`},Nn={collections:{default:{"xs-subtle":Wn("0 0 4px 1px","neutral-50",.24),"xs-strong":Wn("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":Wn("0 0 4px 1px","border-focus",.5),"xs-error-strong":Wn("0 0 4px 1px","border-error",.5),"sm-subtle":Wn("0 2px 4px 0","neutral-50",.24),"sm-strong":Wn("0 2px 4px 0","neutral-50",.5),"md-subtle":Wn("0 2px 8px 0","neutral-50",.24),"md-strong":Wn("0 2px 8px 0","neutral-50",.5),"lg-subtle":Wn("0 2px 12px 1px","neutral-50",.24),"lg-strong":Wn("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},Hn=e=>r=>{var t;const n=r.theme,i=Rt(Nn,null==n?void 0:n.shadowScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.shadow)?Lt(i,e,n.overrides.shadow):i[e];return"function"==typeof o?o(r):o},Yn={"xs-subtle":Hn("xs-subtle"),"xs-strong":Hn("xs-strong"),"xs-focus-strong":Hn("xs-focus-strong"),"xs-error-strong":Hn("xs-error-strong"),"sm-subtle":Hn("sm-subtle"),"sm-strong":Hn("sm-strong"),"md-subtle":Hn("md-subtle"),"md-strong":Hn("md-strong"),"lg-subtle":Hn("lg-subtle"),"lg-strong":Hn("lg-strong")},Vn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},qn=e=>r=>{var t;const n=r.theme,i=Rt(Vn,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Lt(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Qn={"spacing-0":qn("spacing-0"),"spacing-4":qn("spacing-4"),"spacing-8":qn("spacing-8"),"spacing-12":qn("spacing-12"),"spacing-16":qn("spacing-16"),"spacing-20":qn("spacing-20"),"spacing-24":qn("spacing-24"),"spacing-32":qn("spacing-32"),"spacing-40":qn("spacing-40"),"spacing-48":qn("spacing-48"),"spacing-64":qn("spacing-64"),"spacing-72":qn("spacing-72"),"layout-xs":qn("layout-xs"),"layout-sm":qn("layout-sm"),"layout-md":qn("layout-md"),"layout-lg":qn("layout-lg"),"layout-xl":qn("layout-xl"),"layout-xxl":qn("layout-xxl"),"layout-xxxl":qn("layout-xxxl")},Un=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),Zn=Object.assign(Object.assign({},bn),{Primitive:an}),Xn=Object.assign(Object.assign({},zn),{Spec:kn}),Gn=In,Jn=Object.assign(Object.assign({},Ht),{Util:vn}),Kn=Qn,ei=Rn,ri=Yn,ti=$n,ni=Cn,ii={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},oi={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},ai={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},si={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},li={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},di={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},ci={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},ui={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},hi={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},gi={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},mi={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},ii),{light:Un(ii,"light"),dark:Un(ii,"dark")}),Object.assign(Object.assign({},oi),{light:Un(oi,"light"),dark:Un(oi,"dark")}),Object.assign(Object.assign({},ai),{light:Un(ai,"light"),dark:Un(ai,"dark")}),Object.assign(Object.assign({},si),{light:Un(si,"light"),dark:Un(si,"dark")}),Object.assign(Object.assign({},li),{light:Un(li,"light"),dark:Un(li,"dark")}),Object.assign(Object.assign({},di),{light:Un(di,"light"),dark:Un(di,"dark")}),Object.assign(Object.assign({},ci),{light:Un(ci,"light"),dark:Un(ci,"dark")}),Object.assign(Object.assign({},ui),{light:Un(ui,"light"),dark:Un(ui,"dark")}),Object.assign(Object.assign({},hi),{light:Un(hi,"light"),dark:Un(hi,"dark")}),Object.assign(Object.assign({},gi),{light:Un(gi,"light"),dark:Un(gi,"dark")}),Object.assign(Object.assign({},mi),{light:Un(mi,"light"),dark:Un(mi,"dark")});var bi=function(e,r){return bi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},bi(e,r)};var pi=function(){return pi=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},pi.apply(this,arguments)};var fi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var yi=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},vi="object"==typeof fi&&fi&&fi.Object===Object&&fi,xi="object"==typeof self&&self&&self.Object===Object&&self,wi=vi||xi||Function("return this")(),$i=wi,Fi=function(){return $i.Date.now()},Ci=/\s/;var Ei=function(e){for(var r=e.length;r--&&Ci.test(e.charAt(r)););return r},Di=/^\s+/;var ki=function(e){return e?e.slice(0,Ei(e)+1).replace(Di,""):e},Si=wi.Symbol,Ai=Si,Bi=Object.prototype,Oi=Bi.hasOwnProperty,_i=Bi.toString,Mi=Ai?Ai.toStringTag:void 0;var zi=function(e){var r=Oi.call(e,Mi),t=e[Mi];try{e[Mi]=void 0;var n=!0}catch(e){}var i=_i.call(e);return n&&(r?e[Mi]=t:delete e[Mi]),i},ji=Object.prototype.toString;var Ti=zi,Ii=function(e){return ji.call(e)},Pi=Si?Si.toStringTag:void 0;var Li=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Pi&&Pi in Object(e)?Ti(e):Ii(e)},Ri=function(e){return null!=e&&"object"==typeof e};var Wi=ki,Ni=yi,Hi=function(e){return"symbol"==typeof e||Ri(e)&&"[object Symbol]"==Li(e)},Yi=/^[-+]0x[0-9a-f]+$/i,Vi=/^0b[01]+$/i,qi=/^0o[0-7]+$/i,Qi=parseInt;var Ui=yi,Zi=Fi,Xi=function(e){if("number"==typeof e)return e;if(Hi(e))return NaN;if(Ni(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Ni(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Wi(e);var t=Vi.test(e);return t||qi.test(e)?Qi(e.slice(2),t?2:8):Yi.test(e)?NaN:+e},Gi=Math.max,Ji=Math.min;var Ki=function(e,r,t){var n,i,o,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=n,o=i;return n=i=void 0,d=r,a=e.apply(o,t)}function m(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function b(){var e=Zi();if(m(e))return p(e);s=setTimeout(b,function(e){var t=r-(e-l);return u?Ji(t,o-(e-d)):t}(e))}function p(e){return s=void 0,h&&n?g(e):(n=i=void 0,a)}function f(){var e=Zi(),t=m(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(b,r),c?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(b,r),g(l)}return void 0===s&&(s=setTimeout(b,r)),a}return r=Xi(r)||0,Ui(t)&&(c=!!t.leading,o=(u="maxWait"in t)?Gi(Xi(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),f.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},f.flush=function(){return void 0===s?a:p(Zi())},f},eo=Ki,ro=yi;var to=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ro(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),eo(e,r,{leading:n,maxWait:r,trailing:i})},no=function(e,r,t,n){switch(r){case"debounce":return Ki(e,t,n);case"throttle":return to(e,t,n);default:return e}},io=function(e){return"function"==typeof e},oo=function(){return"undefined"==typeof window},ao=function(e){return e instanceof Element||e instanceof HTMLDocument},so=function(e,r,t,n){return function(i){var o=i.width,a=i.height;r((function(r){return r.width===o&&r.height===a||r.width===o&&!n||r.height===a&&!t?r:(e&&io(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!oo()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(oo())return null;if(r)return document.querySelector(r);if(n&&ao(n))return n;if(t.targetRef&&ao(t.targetRef.current))return t.targetRef.current;var i=E(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,a=void 0===o||o,s=r.onResize;if(i||a){var l=so(s,t.setState.bind(t),i,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!oo()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return io(r)?"renderProp":io(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,a=void 0===o?1e3:o,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,oo()||(t.resizeHandler=no(t.createResizeHandler,i,a,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}bi(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){oo()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(a,null)}}}(c);var lo=oo()?u:h;function co(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,b=e.onResize,p=o(t),f=o(null),y=null!=g?g:f,v=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return lo((function(){if(!oo()){var e=so(b,$,c,h);v.current=no((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!oo()&&e({width:n,height:i}),p.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,m),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,b,m,y.current]),pi({ref:y},w)}const uo=i.createContext({mode:"default",rootNode:{current:null}}),ho=e=>e.join("."),go=(e,r=[],t,n)=>{const i=[];return e.forEach(((o,a)=>{const s=t?t(o):o.value,l=n?n(o):o.label,d=o.options,c=[...r,s],u=!!(d&&d.length>0);i.push({originalItem:o,value:s,label:l,keyPath:c,level:r.length,hasChildren:u,parentKeyPath:r.length>0?r:void 0,indexInParent:a,parentSetSize:e.length}),u&&i.push(...go(d,c,t,n))})),i},mo=(e,r)=>{if(r.length<=e.length)return!1;const t=ho(e);return ho(r).startsWith(t+".")},bo=v.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,po=w`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,fo=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 100%;
    border-color: currentColor transparent transparent transparent;
    animation: ${po} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,yo=v(fo)`
    animation-delay: -0.45s;
`,vo=v(fo)`
    animation-delay: -0.3s;
`,xo=v(fo)`
    animation-delay: -0.15s;
`,wo=({color:t,className:n,size:i})=>e(bo,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[r(fo,{id:"inner1"}),r(yo,{id:"inner2"}),r(vo,{id:"inner3"}),r(xo,{id:"inner4"})]}),$o={Button:{"button-radius":Rn.md,"button-default-colour-bg":bn["bg-primary"],"button-default-colour-bg-hover":bn["bg-primary-hover"],"button-default-colour-text":bn["text-inverse"],"button-secondary-colour-border":bn["border-primary"],"button-secondary-colour-text":bn["text-primary"],"button-light-colour-text":bn["text-primary"],"button-link-colour-text":bn["text-primary"]},Animation:{"loading-dots-spinner-colour":bn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":bn.bg,"navbar-colour-icon":bn.icon,"navbar-link-colour-text":bn.text,"navbar-link-colour-text-hover":bn["text-hover"],"navbar-link-colour-text-selected-hover":bn["text-selected-hover"]},Footer:{"footer-colour-bg":bn["bg-strong"],"footer-colour-text":bn.text,"footer-link-colour-text":bn.text,"footer-link-colour-text-hover":bn["text-hover"],"footer-disclaimer-link-colour-text":bn.text,"footer-disclaimer-link-colour-text-hover":bn["text-subtler"]}},Fo={Button:{"button-radius":Rn.sm,"button-default-colour-bg":bn["bg-primary"],"button-default-colour-bg-hover":bn["bg-primary-hover"],"button-default-colour-text":bn["text-inverse"],"button-secondary-colour-border":bn["border-primary"],"button-secondary-colour-text":bn["text-primary"],"button-light-colour-text":bn["text-primary"],"button-link-colour-text":bn["text-primary"]},Animation:{"loading-dots-spinner-colour":bn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":bn.bg,"navbar-colour-icon":bn.icon,"navbar-link-colour-text":bn.text,"navbar-link-colour-text-hover":bn["text-hover"],"navbar-link-colour-text-selected-hover":bn["text-selected-hover"]},Footer:{"footer-colour-bg":bn["bg-strong"],"footer-colour-text":bn.text,"footer-link-colour-text":bn.text,"footer-link-colour-text-hover":bn["text-hover"],"footer-disclaimer-link-colour-text":bn.text,"footer-disclaimer-link-colour-text-hover":bn["text-subtler"]}},Co={Button:{"button-radius":Rn.sm,"button-default-colour-bg":bn["bg-primary"],"button-default-colour-bg-hover":bn["bg-primary-hover"],"button-default-colour-text":bn["text-inverse"],"button-secondary-colour-border":bn["border-primary"],"button-secondary-colour-text":bn["text-primary"],"button-light-colour-text":bn["text-primary"],"button-link-colour-text":bn["text-primary"]},Animation:{"loading-dots-spinner-colour":Zn.Primitive["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":bn.bg,"navbar-colour-icon":bn.icon,"navbar-link-colour-text":bn.text,"navbar-link-colour-text-hover":bn["text-hover"],"navbar-link-colour-text-selected-hover":bn["text-selected-hover"]},Footer:{"footer-colour-bg":bn["bg-strong"],"footer-colour-text":bn.text,"footer-link-colour-text":bn.text,"footer-link-colour-text-hover":bn["text-hover"],"footer-disclaimer-link-colour-text":bn.text,"footer-disclaimer-link-colour-text-hover":bn["text-subtler"]}},Eo={collections:{default:Fo,pa:{Button:{"button-radius":Rn.full,"button-default-colour-bg":bn["bg-primary"],"button-default-colour-bg-hover":bn["bg-primary-hover"],"button-default-colour-text":bn["text-inverse"],"button-secondary-colour-border":bn["border-primary"],"button-secondary-colour-text":bn["text-primary"],"button-light-colour-text":bn["text-primary"],"button-link-colour-text":bn["text-primary"]},Animation:{"loading-dots-spinner-colour":bn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":bn.bg,"navbar-colour-icon":bn.icon,"navbar-link-colour-text":bn.text,"navbar-link-colour-text-hover":bn["text-hover"],"navbar-link-colour-text-selected-hover":bn["text-selected-hover"]},Footer:{"footer-colour-bg":bn["bg-strong"],"footer-colour-text":bn.text,"footer-link-colour-text":bn.text,"footer-link-colour-text-hover":bn["text-hover"],"footer-disclaimer-link-colour-text":bn.text,"footer-disclaimer-link-colour-text-hover":bn["text-subtler"]}},a11yplayground:$o,lifesg:Co,spf:{Button:{"button-radius":Rn.md,"button-default-colour-bg":bn["bg-primary"],"button-default-colour-bg-hover":bn["bg-primary-hover"],"button-default-colour-text":bn["text-inverse"],"button-secondary-colour-border":bn["border-primary"],"button-secondary-colour-text":bn["text-primary"],"button-light-colour-text":bn["text-primary"],"button-link-colour-text":bn["text-primary"]},Animation:{"loading-dots-spinner-colour":bn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":bn.bg,"navbar-colour-icon":bn.icon,"navbar-link-colour-text":bn["text-primary-strongest"],"navbar-link-colour-text-hover":bn["text-subtler"],"navbar-link-colour-text-selected-hover":bn["text-subtler"]},Footer:{"footer-colour-bg":bn["bg-inverse"],"footer-colour-text":bn["text-inverse"],"footer-link-colour-text":bn["text-inverse"],"footer-link-colour-text-hover":bn["text-inverse"],"footer-disclaimer-link-colour-text":bn["text-inverse"],"footer-disclaimer-link-colour-text-hover":bn["text-inverse"]}}},defaultValue:"default"},Do=(e,r)=>t=>{var n,i;const o=t.theme,a=Rt(Eo,null==o?void 0:o.componentScheme);return ko((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||a[e][r],t)},ko=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},So=Do("Button","button-radius"),Ao=Do("Button","button-default-colour-bg"),Bo=Do("Button","button-default-colour-bg-hover"),Oo=Do("Button","button-default-colour-text"),_o=Do("Button","button-secondary-colour-border"),Mo=Do("Button","button-secondary-colour-text"),zo=Do("Button","button-light-colour-text"),jo=Do("Button","button-link-colour-text"),To=v.button`
    padding: ${Kn["spacing-8"]} ${Kn["spacing-16"]};
    min-width: 4rem;
    border: ${Jn["width-010"]} ${Jn.solid} transparent;
    transition: all ${Gn["duration-250"]} ${Gn["ease-default"]};
    border-radius: ${So};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return x`
                    background-color: ${Zn.bg};
                    border-color: ${e.$buttonIsDanger?Zn["border-error-strong"]:_o};

                    color: ${e.$buttonIsDanger?Zn["text-error"]:Mo};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Zn["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return x`
                    background-color: ${Zn.bg};
                    border-color: ${Zn.border};

                    color: ${e.$buttonIsDanger?Zn["text-error"]:zo};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Zn["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return x`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Zn["text-error"]:jo};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Zn["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return x`
                    background-color: ${Zn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Zn["text-disabled"]};
                `;default:return x`
                    background-color: ${e.$buttonIsDanger?Zn["bg-error-strong"]:Ao};

                    ${ni.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Oo};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Zn["bg-error-strong-hover"]:Bo};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return x`
                    height: 2.5rem;
                    ${Xn["body-md-semibold"]}

                    ${ni.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return x`
                    height: 4rem;
                    ${Xn["heading-md-semibold"]}

                    ${ni.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return x`
                    height: 3rem;
                    ${Xn["heading-xs-semibold"]}

                    ${ni.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Io=v(wo)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,Po=e=>i.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),Lo=(t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ge(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(To,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},h,u,{children:[a&&r(Io,{$hasChildren:Po(i)}),r("span",{children:i})]}))};Lo.displayName="Button.Default";const Ro=(t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ge(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(To,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},h,u,{children:[a&&r(Io,{$hasChildren:Po(i)}),r("span",{children:i})]}))};Ro.displayName="Button.Small";const Wo=(t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ge(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(To,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},h,u,{children:[a&&r(Io,{$hasChildren:Po(i)}),r("span",{children:i})]}))};Wo.displayName="Button.Large";const No={Default:i.forwardRef(Lo),Small:i.forwardRef(Ro),Large:i.forwardRef(Wo)},Ho=w`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Yo=x`
    animation: ${Gn["duration-150"]} ${Gn["ease-default"]} ${Ho};
    width: 100%;
    height: 100%;
    transition: color ${Gn["duration-150"]} ${Gn["ease-default"]};
`,Vo=v(k)`
    ${Yo}
    color: ${Zn["icon-primary-subtlest"]};
`,qo=v(S)`
    ${Yo}
    color: ${Zn["icon-disabled-subtle"]};
`,Qo=v(A)`
    ${Yo}
    color: ${e=>e.$disabled?Zn["icon-disabled-subtle"](e):Zn["icon-selected"](e)};
`,Uo=v(B)`
    ${Yo}
    color: ${e=>e.$disabled?Zn["icon-disabled-subtle"](e):Zn["icon-selected"](e)};
`,Zo=v.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>x`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}

    // Show custom focus ring when input is focused
    input:focus-visible + svg {
        outline: 2px solid ${Zn["focus-ring"]};
        outline-offset: 0px;
        border-radius: 4px;
    }
`,Xo=v.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Vo},
        &:hover
        + ${Qo},
        &:hover
        + ${Uo} {
        @media (pointer: fine) {
            color: ${e=>!e.disabled&&Zn["icon-hover"](e)};
        }
    }
`;var Go={exports:{}};Go.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,a=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===g)},f.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return C(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<C(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),g=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var v=this.$locale().weekStart||0,x=(b<v?b+7:b)-v;return g(n?f-x:f+(6-x),p);case s:case h:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case o:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(h,1);b.$d[g](m),b.init(),this.$d=b.set(h,Math.min(this.$D,b.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),b=function(e){var r=C(g);return E.w(r.date(r.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return b(1);if(m===l)return b(7);var p=(h={},h[o]=r,h[a]=t,h[i]=e,h)[m]||1,f=this.$d.getTime()+n*p;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(o,a,!0);case"A":return m(o,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,g){var m,b=this,p=E.p(h),f=C(n),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(b,f)};switch(p){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case s:m=(v-y)/864e5;break;case a:m=v/t;break;case o:m=v/r;break;case i:m=v/e;break;default:m=v}return g?m:E.a(m)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),k=D.prototype;return C.prototype=k,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var Jo=be(Go.exports),Ko={exports:{}};Ko.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],g=c&&c[1];a[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=a||(i||o?1:g.getDate()),b=i||g.getFullYear(),p=0;i&&!o||(p=o>0?o-1:g.getMonth());var f=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(b,p,m,f,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(b,p,m,f,y,v,x)):new Date(b,p,m,f,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var g=s.length,m=1;m<=g;m+=1){a[1]=s[m-1];var b=t.apply(this,a);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ea=be(Ko.exports),ra={exports:{}};ra.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),a=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var ta=be(ra.exports),na={exports:{}};na.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var ia=be(na.exports),oa={exports:{}};oa.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var aa,sa,la,da=be(oa.exports),ca={exports:{}},ua=be(ca.exports=(aa={year:0,month:1,day:2,hour:3,minute:4,second:5},sa={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=sa[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),sa[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=aa[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",m=+e;return(t.utc(g).valueOf()-(m-=m%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,s=i||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var a=o(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Jo.extend(ta),Jo.extend(da),Jo.extend(ia),Jo.extend(ea),Jo.extend(ua),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Jo(r).startOf("week");return ha(t).map((e=>ga(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return ga(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Jo(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Jo(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Jo(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?Jo(n):void 0,i?Jo(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(la||(la={}));const ha=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},ga=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},ma=[1,3,5,7,8,10,12],ba=[4,6,9,11];var pa,fa;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),a=parseInt(n);return 0==i?"1":ma.includes(o)?Math.min(i,31).toString():ba.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Jo(e,t);return Jo(r,t).diff(n,"minute")},e.toDayjs=e=>e?Jo(e):Jo(),e.addMinutesToTime=(e,r,t="HH:mm")=>Jo(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Jo(e).isSame(Jo(r),t)}(pa||(pa={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!Jo(e).isBefore(n,"day"))||!(!i||!Jo(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){const t=r(e);if(Jo(t,"YYYY-MM-DD",!0).isValid())return t}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,t,n,i]=r;if(t.length<=2||parseInt(t,10)<100)return"";return`${t.padStart(4,"0")}-${n.padStart(2,"0")}-${i.padStart(2,"0")}`}}(fa||(fa={}));var ya,va;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ya||(ya={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const a=n+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`},e.getMaskedDescription=(e,r,t)=>{if(!e||"masked"!==r||!t)return"";const[n,i]=t,o=n>0,a=i<e.length-1,s=o?e.substring(0,n):"",l=a?e.substring(i+1):"";return o&&a?`Starting with ${s} and ending with ${l}`:o?`Starting with ${s}`:a?`Ending with ${l}`:""}}(va||(va={}));const xa=v.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,wa=e=>(()=>{const e=g.split(".");return parseInt(e[0],10)>=19})()?e:e?"true":void 0,$a=e=>{const{textSize:r}=e||{};return x`
        // Text styling
        ${r&&Xn[`${r}-regular`]}

        strong {
            font-weight: ${Xn.Spec["weight-semibold"]};
            ${r&&Xn[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Xn.Spec["weight-semibold"]};
            ${r&&Xn[`${r}-semibold`]}
            color: ${Zn.hyperlink};
            text-decoration: underline;

            svg {
                color: ${Zn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Zn["hyperlink-hover"]};

                svg {
                    color: ${Zn["icon-hover"]};
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
    `},Fa=(e,r,t=!1)=>x`
        ${Xn[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Ca=e=>{if(e)return x`
            ${r=e,x`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},Ea=(e,r,t,n,i)=>x`
    ${Fa(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?x`
            display: block;
            ${Ca(t)}
        `:e?x`
            display: inline;
        `:x`
            display: block;
            ${Ca(t)}
        `)(t,n,i)}
    color: ${Zn.text};
`,Da=v.div`
    ${e=>Ea(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,ka=v.a`
    ${e=>{var r;return x`
        ${Fa(e.$textStyle,e.$weight||"regular")}
        color: ${Zn.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${Zn["text-hover"]};
        }
    `}}
`,Sa=v(W)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Aa;!function(t){const n=(e,t,n)=>{const o=(n,i)=>{var{weight:o,inline:a,paragraph:s,maxLines:l}=n,d=ge(n,["weight","inline","paragraph","maxLines"]);return r(Da,Object.assign({ref:i,as:a?"span":e,$textStyle:t,$weight:o,$inline:a,$paragraph:s,$maxLines:l},d))};return o.displayName=`Typography.${n}`,i.forwardRef(o)};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const n=(t,n)=>{var{weight:i,inline:o,paragraph:a,maxLines:s}=t,l=ge(t,["weight","inline","paragraph","maxLines"]);return r(Da,Object.assign({ref:n,as:o?"span":"p",$textStyle:e,$weight:i,$inline:o,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${t}`,i.forwardRef(n)};t.BodyBL=o("body-baseline","BodyBL"),t.BodyMD=o("body-md","BodyMD"),t.BodySM=o("body-sm","BodySM"),t.BodyXS=o("body-xs","BodyXS");const a=(t,n)=>{const o=(n,i)=>{var{weight:o,children:a,external:s,underlineStyle:l="underline"}=n,d=ge(n,["weight","children","external","underlineStyle"]);return e(ka,Object.assign({ref:i,$textStyle:t,$weight:o,$underlineStyle:l},d,{children:[a,s&&r(Sa,{})]}))};return o.displayName=`Typography.${n}`,i.forwardRef(o)};t.LinkBL=a("body-baseline","LinkBL"),t.LinkMD=a("body-md","LinkMD"),t.LinkSM=a("body-sm","LinkSM"),t.LinkXS=a("body-xs","LinkXS")}(Aa||(Aa={}));const Ba=v.div`
    padding: ${Kn["spacing-8"]} ${Kn["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=Zn["bg-error"](e),t=Zn["border-error"](e);break;case"success":r=Zn["bg-success"](e),t=Zn["border-success"](e);break;case"warning":default:r=Zn["bg-warning"](e),t=Zn["border-warning"](e);break;case"info":r=Zn["bg-info"](e),t=Zn["border-info"](e);break;case"description":r=Zn["bg-strong"](e),t=Zn["border-strong"](e)}return x`
            background: ${r};
            border-left: ${Jn["width-020"]} ${Jn.solid}
                ${t};
        `}}
`,Oa=v.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Kn["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=Zn["icon-error"](e);break;case"success":r=Zn["icon-success"](e);break;case"warning":default:r=Zn["icon-warning"](e);break;case"info":r=Zn["icon-info"](e);break;case"description":r=Zn["icon-subtle"](e)}return x`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,_a=v(Aa.LinkSM)`
    ${e=>"small"===e.$sizeType?x`
                ${Xn["body-sm-semibold"]}
                margin-top: ${Kn["spacing-4"]};
            `:x`
                ${Xn["body-md-semibold"]}
                margin-top: ${Kn["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Kn["spacing-4"]};
    }
`,Ma=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,za=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return x`
                margin-bottom: ${Kn["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,ja=v.div`
    color: ${Zn.text};

    ${e=>"small"===e.$sizeType?$a({textSize:"body-sm"}):$a({textSize:"body-md"})}
`,Ta=v.button`
    ${e=>"small"===e.$sizeType?x`
                ${Xn["body-sm-semibold"]}
            `:x`
                ${Xn["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Kn["spacing-4"]};
    margin-top: ${Kn["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Zn["text-primary"]};
`,Ia=v(O)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Gn["duration-350"]} ${Gn["ease-standard"]};
`,Pa=v.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?x`
                    color: ${Zn["icon-selected-disabled"]};
                `:x`
                    color: ${Zn["icon-disabled-subtle"]};
                `:e.$active?x`
                color: ${Zn["icon-selected"]};
            `:x`
            color: ${Zn["icon-subtle"]};
        `};
`,La=x`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&Xn[`${e.$size}-regular`]}
    font-weight: ${Xn.Spec["weight-regular"]};
    color: ${Zn.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,Ra=v.ol`
    ${La}

    margin-left: 3em;

    ${ni.MaxWidth.lg} {
        margin-left: 2.5em;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:r}=e,t=e.$counterType||"decimal",n=e.$counterSeparator||")";return x`
            li:before {
                content: counter(list, ${t}) "${n}";
                counter-increment: ${r?"list -1":"list"};
                position: absolute;
                left: -2em;
            }
        `}}

    ${e=>{const{reversed:r,start:t}=e;if(t){return x`
                counter-reset: list ${r?t+1:t-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,Wa=v.ul`
    ${La}

    margin-left: 2.5em;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Na=e=>{var{size:t,bulletType:n,bottomMargin:i,children:o}=e,a=ge(e,["size","bulletType","bottomMargin","children"]);return r(Wa,Object.assign({$size:t,$bulletType:n,$bottomMargin:i},a,{children:o}))};Na.displayName="TextList.Ul";const Ha=e=>{var{size:t,counterType:n,counterSeparator:i,bottomMargin:o,children:a}=e,s=ge(e,["size","counterType","counterSeparator","bottomMargin","children"]);return r(Ra,Object.assign({$size:t,$counterType:n,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};Ha.displayName="TextList.Ol";const Ya=Na,Va=v.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${ei.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Zn.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${Zn["focus-ring"]};
        outline-offset: 0;
    }

    ${e=>{if(!e.$indicator)return x`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return x`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?x`
                            border-color: ${Zn["border-error"]};
                        `:x`
                            border-color: ${Zn["border-error"]};

                            &:has(${Ga}:hover) {
                                @media (pointer: fine) {
                                    background: ${Zn["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?x`
                            border: none;
                            background: ${Zn["bg-selected-disabled"]};
                        `:x`
                            border: none;
                        `:e.$selected?x`
                        border: none;
                        background: ${Zn["bg-selected"]};

                        &:has(${Ga}:hover) {
                            @media (pointer: fine) {
                                background: ${Zn["bg-selected-hover"]};

                                & ${Ua} {
                                    color: ${Zn["text-selected-hover"]};
                                }

                                & ${as} {
                                    color: ${Zn["icon-selected-hover"]};
                                }
                            }
                        }
                    `:x`
                    border: none;

                    &:has(${Ga}:hover) {
                        @media (pointer: fine) {
                            background: ${Zn["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?x`
                            border-color: ${Zn["border-error"]};
                        `:x`
                            border-color: ${Zn["border-error"]};

                            &:has(${Ga}:hover) {
                                @media (pointer: fine) {
                                    background: ${Zn["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?x`
                            border-color: ${Zn["border-selected-disabled"]};
                            background: ${Zn["bg-selected-disabled"]};
                        `:x`
                            border-color: ${Zn["border-disabled"]};
                            background: ${Zn["bg-disabled"]};
                        `:e.$selected?x`
                        border-color: ${Zn["border-selected"]};
                        background: ${Zn["bg-selected"]};

                        &:has(${Ga}:hover) {
                            @media (pointer: fine) {
                                background: ${Zn["bg-selected-hover"]};

                                & ${Ua} {
                                    color: ${Zn["text-selected-hover"]};
                                }

                                & ${as} {
                                    color: ${Zn["icon-selected-hover"]};
                                }
                            }
                        }
                    `:x`
                    border-color: ${Zn.border};

                    &:has(${Ga}:hover) {
                        @media (pointer: fine) {
                            background: ${Zn["bg-hover-subtle"]};
                        }
                    }
                `}
`,qa=v.input`
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
`,Qa=v.div`
    display: flex;
`,Ua=v.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?x`
                    color: ${Zn["text-selected-disabled"]};
                `:x`
                    color: ${Zn["text-disabled"]};
                `:e.$selected?x`
                color: ${Zn["text-selected"]};
            `:x`
            color: ${Zn.text};
        `}
`,Za=v.label`
    ${Xn["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${ni.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${ni.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,Xa=v.div`
    ${Xn["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Xn["body-md-semibold"]}
    }
`,Ga=v.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Ja=v.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Ka=v.button`
    color: ${e=>e.$disabled?Zn["text-disabled"]:Zn["text-error"]};
    white-space: nowrap;
    ${Xn["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,es=v.button`
    color: ${e=>e.disabled?Zn["text-disabled"]:Zn["text-primary"]};
    ${Xn["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Zn.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,rs=v.div`
    width: 100%;
    color: ${e=>e.$disabled?Zn["text-disabled"]:Zn["text-error"]};
    border: none;
    background: ${Zn.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ts=v((t=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:h,maxCollapsedHeight:g,role:b}=t,p=ge(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[f,y]=a(!1),[v,x]=a(!1),{height:w,ref:$}=co(),[F]=a((()=>ya.generate())),C=m((()=>{y(!g),x(E())}),[g,w]),E=()=>!(!w||!g)&&w>g;u((()=>{C()}),[g,w,C]);return e(Ba,{className:i,$type:n,$sizeType:d,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":p["data-testid"],role:b,children:[c&&r(Oa,{$sizeType:d,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return r(R,{"aria-hidden":!0});case"warning":return r(P,{"aria-hidden":!0});case"error":return r(I,{"aria-hidden":!0});case"info":case"description":return r(L,{"aria-hidden":!0});default:return null}})()}),e(Ma,{children:[v&&e(Ta,{$sizeType:d,$type:n,type:"button","aria-expanded":f,"aria-controls":F,onClick:()=>y(!f),children:["Show ",f?"less":"more",r(Ia,{$expanded:f})]}),e(za,{id:F,$maxCollapsedHeight:E()?g:void 0,$showMore:f,$hasActionLink:!!s,inert:wa(!!g&&!f),children:[r(ja,{ref:$,$type:n,$sizeType:d,children:o}),s?e(_a,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d,underlineStyle:"none"},s,{children:[s.children,l||r(T,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,ns=v.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Zn.bg};
    ${$a({textSize:"body-md"})}

    ${e=>e.$disabled?x`
                color: ${Zn["text-disabled"]};
            `:e.$selected?x`
                color: ${Zn["text-selected"]};
            `:x`
                color: ${Zn.text};
            `}
`,is=v(Aa.BodyMD)`
    color: ${e=>e.$disabled?Zn["text-disabled"]:Zn["text-error"]};
`,os=v(Ya)`
    color: ${e=>e.$disabled?Zn["text-disabled"]:Zn["text-error"]};
`,as=v((({type:e,active:t=!1,disabled:n,className:i})=>{let o;switch(e){case"checkbox":o=r(t?q:V,{});break;case"radio":o=r(t?H:N,{});break;case"tick":o=r(Q,{});break;case"cross":o=r(Y,{});break;default:o=null}return r(Pa,{className:i,$active:t,$disabled:n,"aria-hidden":!0,children:o})}))`
    ${e=>e.$disabled?e.$selected?x`
                    color: ${Zn["icon-selected-disabled"]};
                `:x`
                    color: ${Zn["icon-disabled-subtle"]};
                `:e.$selected?x`
                color: ${Zn["icon-selected"]};
            `:x`
            color: ${Zn["icon-subtle"]};
        `};
`;var ss=Fs(),ls=e=>vs(e,ss),ds=Fs();ls.write=e=>vs(e,ds);var cs=Fs();ls.onStart=e=>vs(e,cs);var us=Fs();ls.onFrame=e=>vs(e,us);var hs=Fs();ls.onFinish=e=>vs(e,hs);var gs=[];ls.setTimeout=(e,r)=>{const t=ls.now()+r,n=()=>{const e=gs.findIndex((e=>e.cancel==n));~e&&gs.splice(e,1),fs-=~e?1:0},i={time:t,handler:e,cancel:n};return gs.splice(ms(t),0,i),fs+=1,xs(),i};var ms=e=>~(~gs.findIndex((r=>r.time>e))||~gs.length);ls.cancel=e=>{cs.delete(e),us.delete(e),hs.delete(e),ss.delete(e),ds.delete(e)},ls.sync=e=>{ys=!0,ls.batchedUpdates(e),ys=!1},ls.throttle=e=>{let r;function t(){try{e(...r)}finally{r=null}}function n(...e){r=e,ls.onStart(t)}return n.handler=e,n.cancel=()=>{cs.delete(t),r=null},n};var bs="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ls.use=e=>bs=e,ls.now="undefined"!=typeof performance?()=>performance.now():Date.now,ls.batchedUpdates=e=>e(),ls.catch=console.error,ls.frameLoop="always",ls.advance=()=>{"demand"!==ls.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):$s()};var ps=-1,fs=0,ys=!1;function vs(e,r){ys?(r.delete(e),e(0)):(r.add(e),xs())}function xs(){ps<0&&(ps=0,"demand"!==ls.frameLoop&&bs(ws))}function ws(){~ps&&(bs(ws),ls.batchedUpdates($s))}function $s(){const e=ps;ps=ls.now();const r=ms(ps);r&&(Cs(gs.splice(0,r),(e=>e.handler())),fs-=r),fs?(cs.flush(),ss.flush(e?Math.min(64,ps-e):16.667),us.flush(),ds.flush(),hs.flush()):ps=-1}function Fs(){let e=new Set,r=e;return{add(t){fs+=r!=e||e.has(t)?0:1,e.add(t)},delete:t=>(fs-=r==e&&e.has(t)?1:0,e.delete(t)),flush(t){r.size&&(e=new Set,fs-=r.size,Cs(r,(r=>r(t)&&e.add(r))),fs+=e.size,r=e)}}}function Cs(e,r){e.forEach((e=>{try{r(e)}catch(e){ls.catch(e)}}))}var Es=Object.defineProperty,Ds={};function ks(){}((e,r)=>{for(var t in r)Es(e,t,{get:r[t],enumerable:!0})})(Ds,{assign:()=>Ws,colors:()=>Ps,createStringInterpolator:()=>zs,skipAnimation:()=>Ls,to:()=>js,willAdvance:()=>Rs});var Ss={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function As(e,r){if(Ss.arr(e)){if(!Ss.arr(r)||e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}return e===r}var Bs=(e,r)=>e.forEach(r);function Os(e,r,t){if(Ss.arr(e))for(let n=0;n<e.length;n++)r.call(t,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&r.call(t,e[n],n)}var _s=e=>Ss.und(e)?[]:Ss.arr(e)?e:[e];function Ms(e,r){if(e.size){const t=Array.from(e);e.clear(),Bs(t,r)}}var zs,js,Ts=(e,...r)=>Ms(e,(e=>e(...r))),Is=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ps=null,Ls=!1,Rs=ks,Ws=e=>{e.to&&(js=e.to),e.now&&(ls.now=e.now),void 0!==e.colors&&(Ps=e.colors),null!=e.skipAnimation&&(Ls=e.skipAnimation),e.createStringInterpolator&&(zs=e.createStringInterpolator),e.requestAnimationFrame&&ls.use(e.requestAnimationFrame),e.batchedUpdates&&(ls.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Rs=e.willAdvance),e.frameLoop&&(ls.frameLoop=e.frameLoop)},Ns=new Set,Hs=[],Ys=[],Vs=0,qs={get idle(){return!Ns.size&&!Hs.length},start(e){Vs>e.priority?(Ns.add(e),ls.onStart(Qs)):(Us(e),ls(Xs))},advance:Xs,sort(e){if(Vs)ls.onFrame((()=>qs.sort(e)));else{const r=Hs.indexOf(e);~r&&(Hs.splice(r,1),Zs(e))}},clear(){Hs=[],Ns.clear()}};function Qs(){Ns.forEach(Us),Ns.clear(),ls(Xs)}function Us(e){Hs.includes(e)||Zs(e)}function Zs(e){Hs.splice(function(e,r){const t=e.findIndex(r);return t<0?e.length:t}(Hs,(r=>r.priority>e.priority)),0,e)}function Xs(e){const r=Ys;for(let t=0;t<Hs.length;t++){const n=Hs[t];Vs=n.priority,n.idle||(Rs(n),n.advance(e),n.idle||r.push(n))}return Vs=0,(Ys=Hs).length=0,(Hs=r).length>0}var Gs="[-+]?\\d*\\.?\\d+",Js=Gs+"%";function Ks(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var el=new RegExp("rgb"+Ks(Gs,Gs,Gs)),rl=new RegExp("rgba"+Ks(Gs,Gs,Gs,Gs)),tl=new RegExp("hsl"+Ks(Gs,Js,Js)),nl=new RegExp("hsla"+Ks(Gs,Js,Js,Gs)),il=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ol=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,al=/^#([0-9a-fA-F]{6})$/,sl=/^#([0-9a-fA-F]{8})$/;function ll(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function dl(e,r,t){const n=t<.5?t*(1+r):t+r-t*r,i=2*t-n,o=ll(i,n,e+1/3),a=ll(i,n,e),s=ll(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function cl(e){const r=parseInt(e,10);return r<0?0:r>255?255:r}function ul(e){return(parseFloat(e)%360+360)%360/360}function hl(e){const r=parseFloat(e);return r<0?0:r>1?255:Math.round(255*r)}function gl(e){const r=parseFloat(e);return r<0?0:r>100?1:r/100}function ml(e){let r=function(e){let r;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(r=al.exec(e))?parseInt(r[1]+"ff",16)>>>0:Ps&&void 0!==Ps[e]?Ps[e]:(r=el.exec(e))?(cl(r[1])<<24|cl(r[2])<<16|cl(r[3])<<8|255)>>>0:(r=rl.exec(e))?(cl(r[1])<<24|cl(r[2])<<16|cl(r[3])<<8|hl(r[4]))>>>0:(r=il.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=sl.exec(e))?parseInt(r[1],16)>>>0:(r=ol.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=tl.exec(e))?(255|dl(ul(r[1]),gl(r[2]),gl(r[3])))>>>0:(r=nl.exec(e))?(dl(ul(r[1]),gl(r[2]),gl(r[3]))|hl(r[4]))>>>0:null}(e);if(null===r)return e;r=r||0;return`rgba(${(4278190080&r)>>>24}, ${(16711680&r)>>>16}, ${(65280&r)>>>8}, ${(255&r)/255})`}var bl=(e,r,t)=>{if(Ss.fun(e))return e;if(Ss.arr(e))return bl({range:e,output:r,extrapolate:t});if(Ss.str(e.output[0]))return zs(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const r=function(e,r){for(var t=1;t<r.length-1&&!(r[t]>=e);++t);return t-1}(e,o);return function(e,r,t,n,i,o,a,s,l){let d=l?l(e):e;if(d<r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(d>t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(n===i)return n;if(r===t)return e<=r?n:i;r===-1/0?d=-d:t===1/0?d-=r:d=(d-r)/(t-r);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[r],o[r+1],i[r],i[r+1],l,a,s,n.map)}};var pl=1.70158,fl=1.525*pl,yl=pl+1,vl=2*Math.PI/3,xl=2*Math.PI/4.5,wl=e=>{const r=7.5625,t=2.75;return e<1/t?r*e*e:e<2/t?r*(e-=1.5/t)*e+.75:e<2.5/t?r*(e-=2.25/t)*e+.9375:r*(e-=2.625/t)*e+.984375},$l={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>yl*e*e*e-pl*e*e,easeOutBack:e=>1+yl*Math.pow(e-1,3)+pl*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-fl)/2:(Math.pow(2*e-2,2)*((fl+1)*(2*e-2)+fl)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*vl),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*vl)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*xl)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*xl)/2+1,easeInBounce:e=>1-wl(1-e),easeOutBounce:wl,easeInOutBounce:e=>e<.5?(1-wl(1-2*e))/2:(1+wl(2*e-1))/2,steps:(e,r="end")=>t=>{const n=(t="end"===r?Math.min(t,.999):Math.max(t,.001))*e,i="end"===r?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Fl=Symbol.for("FluidValue.get"),Cl=Symbol.for("FluidValue.observers"),El=e=>Boolean(e&&e[Fl]),Dl=e=>e&&e[Fl]?e[Fl]():e,kl=e=>e[Cl]||null;function Sl(e,r){const t=e[Cl];t&&t.forEach((e=>{!function(e,r){e.eventObserved?e.eventObserved(r):e(r)}(e,r)}))}var Al=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Bl(this,e)}},Bl=(e,r)=>zl(e,Fl,r);function Ol(e,r){if(e[Fl]){let t=e[Cl];t||zl(e,Cl,t=new Set),t.has(r)||(t.add(r),e.observerAdded&&e.observerAdded(t.size,r))}return r}function _l(e,r){const t=e[Cl];if(t&&t.has(r)){const n=t.size-1;n?t.delete(r):e[Cl]=null,e.observerRemoved&&e.observerRemoved(n,r)}}var Ml,zl=(e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}),jl=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Tl=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Il=new RegExp(`(${jl.source})(%|[a-z]+)`,"i"),Pl=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ll=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Rl=e=>{const[r,t]=Wl(e);if(!r||Is())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(n)return n.trim();if(t&&t.startsWith("--")){const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);return r||e}return t&&Ll.test(t)?Rl(t):t||e},Wl=e=>{const r=Ll.exec(e);if(!r)return[,];const[,t,n]=r;return[t,n]},Nl=(e,r,t,n,i)=>`rgba(${Math.round(r)}, ${Math.round(t)}, ${Math.round(n)}, ${i})`,Hl=e=>{Ml||(Ml=Ps?new RegExp(`(${Object.keys(Ps).join("|")})(?!\\w)`,"g"):/^\b$/);const r=e.output.map((e=>Dl(e).replace(Ll,Rl).replace(Tl,ml).replace(Ml,ml))),t=r.map((e=>e.match(jl).map(Number))),n=t[0].map(((e,r)=>t.map((e=>{if(!(r in e))throw Error('The arity of each "output" value must be equal');return e[r]})))).map((r=>bl({...e,output:r})));return e=>{const t=!Il.test(r[0])&&r.find((e=>Il.test(e)))?.replace(jl,"");let i=0;return r[0].replace(jl,(()=>`${n[i++](e)}${t||""}`)).replace(Pl,Nl)}},Yl="react-spring: ",Vl=e=>{const r=e;let t=!1;if("function"!=typeof r)throw new TypeError(`${Yl}once requires a function parameter`);return(...e)=>{t||(r(...e),t=!0)}},ql=Vl(console.warn);var Ql=Vl(console.warn);function Ul(e){return Ss.str(e)&&("#"==e[0]||/\d/.test(e)||!Is()&&Ll.test(e)||e in(Ps||{}))}var Zl=Is()?u:h;function Xl(){const e=a()[1],r=(()=>{const e=o(!1);return Zl((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{r.current&&e(Math.random())}}var Gl=e=>u(e,Jl),Jl=[];function Kl(e){const r=o(void 0);return u((()=>{r.current=e})),r.current}var ed=Symbol.for("Animated:node"),rd=e=>e&&e[ed],td=(e,r)=>((e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}))(e,ed,r),nd=e=>e&&e[ed]&&e[ed].getPayload(),id=class{constructor(){td(this,this)}getPayload(){return this.payload||[]}},od=class e extends id{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Ss.num(this._value)&&(this.lastPosition=this._value)}static create(r){return new e(r)}getPayload(){return[this]}getValue(){return this._value}setValue(e,r){return Ss.num(e)&&(this.lastPosition=e,r&&(e=Math.round(e/r)*r,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ss.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ad=class e extends od{constructor(e){super(0),this._string=null,this._toString=bl({output:[e,e]})}static create(r){return new e(r)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ss.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=bl({output:[this.getValue(),e]})),this._value=0,super.reset()}},sd={dependencies:null},ld=class extends id{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const r={};return Os(this.source,((t,n)=>{var i;(i=t)&&i[ed]===i?r[n]=t.getValue(e):El(t)?r[n]=Dl(t):e||(r[n]=t)})),r}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Bs(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const r=new Set;return Os(e,this._addToPayload,r),Array.from(r)}}_addToPayload(e){sd.dependencies&&El(e)&&sd.dependencies.add(e);const r=nd(e);r&&Bs(r,(e=>this.add(e)))}},dd=class e extends ld{constructor(e){super(e)}static create(r){return new e(r)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const r=this.getPayload();return e.length==r.length?r.map(((r,t)=>r.setValue(e[t]))).some(Boolean):(super.setValue(e.map(cd)),!0)}};function cd(e){return(Ul(e)?ad:od).create(e)}function ud(e){const r=rd(e);return r?r.constructor:Ss.arr(e)?dd:Ul(e)?ad:od}var hd=(e,r)=>{const t=!Ss.fun(e)||e.prototype&&e.prototype.isReactComponent;return p(((i,a)=>{const s=o(null),l=t&&m((e=>{s.current=function(e,r){e&&(Ss.fun(e)?e(r):e.current=r);return r}(a,e)}),[a]),[d,c]=function(e,r){const t=new Set;sd.dependencies=t,e.style&&(e={...e,style:r.createAnimatedStyle(e.style)});return e=new ld(e),sd.dependencies=null,[e,t]}(i,r),h=Xl(),g=()=>{const e=s.current;if(t&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,d.getValue(!0)))&&h()},b=new gd(g,c),p=o(void 0);Zl((()=>(p.current=b,Bs(c,(e=>Ol(e,b))),()=>{p.current&&(Bs(p.current.deps,(e=>_l(e,p.current))),ls.cancel(p.current.update))}))),u(g,[]),Gl((()=>()=>{const e=p.current;Bs(e.deps,(r=>_l(r,e)))}));const f=r.getComponentProps(d.getValue());return n.createElement(e,{...f,ref:l})}))},gd=class{constructor(e,r){this.update=e,this.deps=r}eventObserved(e){"change"==e.type&&ls.write(this.update)}};var md=Symbol.for("AnimatedComponent"),bd=e=>Ss.str(e)?e:e&&Ss.str(e.displayName)?e.displayName:Ss.fun(e)&&e.name||null;function pd(e,...r){return Ss.fun(e)?e(...r):e}var fd=(e,r)=>!0===e||!!(r&&e&&(Ss.fun(e)?e(r):_s(e).includes(r))),yd=(e,r)=>Ss.obj(e)?r&&e[r]:e,vd=(e,r)=>!0===e.default?e[r]:e.default?e.default[r]:void 0,xd=e=>e,wd=(e,r=xd)=>{let t=$d;e.default&&!0!==e.default&&(e=e.default,t=Object.keys(e));const n={};for(const i of t){const t=r(e[i],i);Ss.und(t)||(n[i]=t)}return n},$d=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Fd={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Cd(e){const r=function(e){const r={};let t=0;if(Os(e,((e,n)=>{Fd[n]||(r[n]=e,t++)})),t)return r}(e);if(r){const t={to:r};return Os(e,((e,n)=>n in r||(t[n]=e))),t}return{...e}}function Ed(e){return e=Dl(e),Ss.arr(e)?e.map(Ed):Ul(e)?Ds.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Dd(e){return Ss.fun(e)||Ss.arr(e)&&Ss.obj(e[0])}var kd={tension:170,friction:26,mass:1,damping:1,easing:$l.linear,clamp:!1},Sd=class{constructor(){this.velocity=0,Object.assign(this,kd)}};function Ad(e,r){if(Ss.und(r.decay)){const t=!Ss.und(r.tension)||!Ss.und(r.friction);!t&&Ss.und(r.frequency)&&Ss.und(r.damping)&&Ss.und(r.mass)||(e.duration=void 0,e.decay=void 0),t&&(e.frequency=void 0)}else e.duration=void 0}var Bd=[],Od=class{constructor(){this.changed=!1,this.values=Bd,this.toValues=null,this.fromValues=Bd,this.config=new Sd,this.immediate=!1}};function _d(e,{key:r,props:t,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,d,c=fd(t.cancel??n?.cancel,r);if(c)g();else{Ss.und(t.pause)||(i.paused=fd(t.pause,r));let e=n?.pause;!0!==e&&(e=i.paused||fd(e,r)),l=pd(t.delay||0,r),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-ls.now()}function h(){l>0&&!Ds.skipAnimation?(i.delayed=!0,d=ls.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(d)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...t,callId:e,cancel:c},a)}catch(e){s(e)}}}))}var Md=(e,r)=>1==r.length?r[0]:r.some((e=>e.cancelled))?Td(e.get()):r.every((e=>e.noop))?zd(e.get()):jd(e.get(),r.every((e=>e.finished))),zd=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),jd=(e,r,t=!1)=>({value:e,finished:r,cancelled:t}),Td=e=>({value:e,cancelled:!0,finished:!1});function Id(e,r,t,n){const{callId:i,parentId:o,onRest:a}=r,{asyncTo:s,promise:l}=t;return o||e!==s||r.reset?t.promise=(async()=>{t.asyncId=i,t.asyncTo=e;const d=wd(r,((e,r)=>"onRest"===r?void 0:e));let c,u;const h=new Promise(((e,r)=>(c=e,u=r))),g=e=>{const r=i<=(t.cancelId||0)&&Td(n)||i!==t.asyncId&&jd(n,!1);if(r)throw e.result=r,u(e),e},m=(e,r)=>{const o=new Ld,a=new Rd;return(async()=>{if(Ds.skipAnimation)throw Pd(t),a.result=jd(n,!1),u(a),a;g(o);const s=Ss.obj(e)?{...e}:{...r,to:e};s.parentId=i,Os(d,((e,r)=>{Ss.und(s[r])&&(s[r]=e)}));const l=await n.start(s);return g(o),t.paused&&await new Promise((e=>{t.resumeQueue.add(e)})),l})()};let b;if(Ds.skipAnimation)return Pd(t),jd(n,!1);try{let r;r=Ss.arr(e)?(async e=>{for(const r of e)await m(r)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([r.then(c),h]),b=jd(n.get(),!0,!1)}catch(e){if(e instanceof Ld)b=e.result;else{if(!(e instanceof Rd))throw e;b=e.result}}finally{i==t.asyncId&&(t.asyncId=o,t.asyncTo=o?s:void 0,t.promise=o?l:void 0)}return Ss.fun(a)&&ls.batchedUpdates((()=>{a(b,n,n.item)})),b})():l}function Pd(e,r){Ms(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,r&&(e.cancelId=r)}var Ld=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Rd=class extends Error{constructor(){super("SkipAnimationSignal")}},Wd=e=>e instanceof Hd,Nd=1,Hd=class extends Al{constructor(){super(...arguments),this.id=Nd++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=rd(this);return e&&e.getValue()}to(...e){return Ds.to(this,e)}interpolate(...e){return ql(`${Yl}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ds.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,r=!1){Sl(this,{type:"change",parent:this,value:e,idle:r})}_onPriorityChange(e){this.idle||qs.sort(this),Sl(this,{type:"priority",parent:this,priority:e})}},Yd=Symbol.for("SpringPhase"),Vd=e=>(1&e[Yd])>0,qd=e=>(2&e[Yd])>0,Qd=e=>(4&e[Yd])>0,Ud=(e,r)=>r?e[Yd]|=3:e[Yd]&=-3,Zd=(e,r)=>r?e[Yd]|=4:e[Yd]&=-5,Xd=class extends Hd{constructor(e,r){if(super(),this.animation=new Od,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ss.und(e)||!Ss.und(r)){const t=Ss.obj(e)?{...e}:{...r,from:e};Ss.und(t.default)&&(t.default=!0),this.start(t)}}get idle(){return!(qd(this)||this._state.asyncTo)||Qd(this)}get goal(){return Dl(this.animation.to)}get velocity(){const e=rd(this);return e instanceof od?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Vd(this)}get isAnimating(){return qd(this)}get isPaused(){return Qd(this)}get isDelayed(){return this._state.delayed}advance(e){let r=!0,t=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=nd(n.to);!a&&El(n.to)&&(i=_s(Dl(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const d=s.constructor==ad?1:a?a[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let r=s.elapsedTime+=e;const t=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Ss.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(t==d?.005:Math.min(1,.001*Math.abs(d-t)));if(Ss.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*r);u=t+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-u)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const r=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Ss.und(n),g=t==d?s.v0>0:t<d;let m,b=!1;const p=1,f=Math.ceil(e/p);for(let e=0;e<f&&(m=Math.abs(a)>r,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(b=u==d||u>d==g,b&&(a=-a*n,u=d));a+=(1e-6*-o.tension*(u-d)+.001*-o.friction*a)/o.mass*p,u+=a*p}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,r=s.elapsedTime+=e)),n=(o.progress||0)+r/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=t+o.easing(n)*(d-t),a=(u-s.lastPosition)/e,c=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:r=!1,s.setValue(u,o.round)&&(t=!0)}));const s=rd(this),l=s.getValue();if(r){const e=Dl(n.to);l===e&&!t||o.decay?t&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else t&&this._onChange(l)}set(e){return ls.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(qd(this)){const{to:e,config:r}=this.animation;ls.batchedUpdates((()=>{this._onStart(),r.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,r){let t;return Ss.und(e)?(t=this.queue||[],this.queue=[]):t=[Ss.obj(e)?e:{...r,to:e}],Promise.all(t.map((e=>this._update(e)))).then((e=>Md(this,e)))}stop(e){const{to:r}=this.animation;return this._focus(this.get()),Pd(this._state,e&&this._lastCallId),ls.batchedUpdates((()=>this._stop(r,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const r=this.key||"";let{to:t,from:n}=e;t=Ss.obj(t)?t[r]:t,(null==t||Dd(t))&&(t=void 0),n=Ss.obj(n)?n[r]:n,null==n&&(n=void 0);const i={to:t,from:n};return Vd(this)||(e.reverse&&([t,n]=[n,t]),n=Dl(n),Ss.und(n)?rd(this)||this._set(t):this._set(n)),i}_update({...e},r){const{key:t,defaultProps:n}=this;e.default&&Object.assign(n,wd(e,((e,r)=>/^on/.test(r)?yd(e,t):e))),nc(this,e,"onProps"),ic(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return _d(++this._lastCallId,{key:t,props:e,defaultProps:n,state:o,actions:{pause:()=>{Qd(this)||(Zd(this,!0),Ts(o.pauseQueue),ic(this,"onPause",jd(this,Gd(this,this.animation.to)),this))},resume:()=>{Qd(this)&&(Zd(this,!1),qd(this)&&this._resume(),Ts(o.resumeQueue),ic(this,"onResume",jd(this,Gd(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((t=>{if(e.loop&&t.finished&&(!r||!t.noop)){const r=Jd(e);if(r)return this._update(r,!0)}return t}))}_merge(e,r,t){if(r.cancel)return this.stop(!0),t(Td(this));const n=!Ss.und(e.to),i=!Ss.und(e.from);if(n||i){if(!(r.callId>this._lastToId))return t(Td(this));this._lastToId=r.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:d}=s;let{to:c=l,from:u=d}=e;!i||n||r.default&&!Ss.und(c)||(c=u),r.reverse&&([c,u]=[u,c]);const h=!As(u,d);h&&(s.from=u),u=Dl(u);const g=!As(c,l);g&&this._focus(c);const m=Dd(r.to),{config:b}=s,{decay:p,velocity:f}=b;(n||i)&&(b.velocity=0),r.config&&!m&&function(e,r,t){t&&(Ad(t={...t},r),r={...t,...r}),Ad(e,r),Object.assign(e,r);for(const r in kd)null==e[r]&&(e[r]=kd[r]);let{frequency:n,damping:i}=e;const{mass:o}=e;Ss.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(b,pd(r.config,o),r.config!==a.config?pd(a.config,o):void 0);let y=rd(this);if(!y||Ss.und(c))return t(jd(this,!0));const v=Ss.und(r.reset)?i&&!r.default:!Ss.und(u)&&fd(r.reset,o),x=v?u:this.get(),w=Ed(c),$=Ss.num(w)||Ss.arr(w)||Ul(w),F=!m&&(!$||fd(a.immediate||r.immediate,o));if(g){const e=ud(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=El(c),D=!1;if(!E){const e=v||!Vd(this)&&h;(g||e)&&(D=As(Ed(x),w),E=!D),(As(s.immediate,F)||F)&&As(b.decay,p)&&As(b.velocity,f)||(E=!0)}if(D&&qd(this)&&(s.changed&&!v?E=!0:E||this._stop(l)),!m&&((E||El(l))&&(s.values=y.getPayload(),s.toValues=El(c)?null:C==ad?[1]:_s(w)),s.immediate!=F&&(s.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=s;Bs(tc,(e=>nc(this,r,e)));const n=jd(this,Gd(this,l));Ts(this._pendingCalls,n),this._pendingCalls.add(t),s.changed&&ls.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?pd(a.onRest,n):s.onStart?.(n,this)}))}v&&this._set(x),m?t(Id(r.to,r,this._state,this)):E?this._start():qd(this)&&!g?this._pendingCalls.add(t):t(zd(x))}_focus(e){const r=this.animation;e!==r.to&&(kl(this)&&this._detach(),r.to=e,kl(this)&&this._attach())}_attach(){let e=0;const{to:r}=this.animation;El(r)&&(Ol(r,this),Wd(r)&&(e=r.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;El(e)&&_l(e,this)}_set(e,r=!0){const t=Dl(e);if(!Ss.und(t)){const e=rd(this);if(!e||!As(t,e.getValue())){const n=ud(t);e&&e.constructor==n?e.setValue(t):td(this,n.create(t)),e&&ls.batchedUpdates((()=>{this._onChange(t,r)}))}}return rd(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ic(this,"onStart",jd(this,Gd(this,e.to)),this))}_onChange(e,r){r||(this._onStart(),pd(this.animation.onChange,e,this)),pd(this.defaultProps.onChange,e,this),super._onChange(e,r)}_start(){const e=this.animation;rd(this).reset(Dl(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),qd(this)||(Ud(this,!0),Qd(this)||this._resume())}_resume(){Ds.skipAnimation?this.finish():qs.start(this)}_stop(e,r){if(qd(this)){Ud(this,!1);const t=this.animation;Bs(t.values,(e=>{e.done=!0})),t.toValues&&(t.onChange=t.onPause=t.onResume=void 0),Sl(this,{type:"idle",parent:this});const n=r?Td(this.get()):jd(this.get(),Gd(this,e??t.to));Ts(this._pendingCalls,n),t.changed&&(t.changed=!1,ic(this,"onRest",n,this))}}};function Gd(e,r){const t=Ed(r);return As(Ed(e.get()),t)}function Jd(e,r=e.loop,t=e.to){const n=pd(r);if(n){const i=!0!==n&&Cd(n),o=(i||e).reverse,a=!i||i.reset;return Kd({...e,loop:r,default:!1,pause:void 0,to:!o||Dd(t)?t:void 0,from:a?e.from:void 0,reset:a,...i})}}function Kd(e){const{to:r,from:t}=e=Cd(e),n=new Set;return Ss.obj(r)&&rc(r,n),Ss.obj(t)&&rc(t,n),e.keys=n.size?Array.from(n):null,e}function ec(e){const r=Kd(e);return Ss.und(r.default)&&(r.default=wd(r)),r}function rc(e,r){Os(e,((e,t)=>null!=e&&r.add(t)))}var tc=["onStart","onRest","onChange","onPause","onResume"];function nc(e,r,t){e.animation[t]=r[t]!==vd(r,t)?yd(r[t],e.key):void 0}function ic(e,r,...t){e.animation[r]?.(...t),e.defaultProps[r]?.(...t)}var oc=["onStart","onChange","onRest"],ac=1,sc=class{constructor(e,r){this.id=ac++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),r&&(this._flush=r),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((r,t)=>e[t]=r.get())),e}set(e){for(const r in e){const t=e[r];Ss.und(t)||this.springs[r].set(t)}}update(e){return e&&this.queue.push(Kd(e)),this}start(e){let{queue:r}=this;return e?r=_s(e).map(Kd):this.queue=[],this._flush?this._flush(this,r):(mc(this,r),lc(this,r))}stop(e,r){if(e!==!!e&&(r=e),r){const t=this.springs;Bs(_s(r),(r=>t[r].stop(!!e)))}else Pd(this._state,this._lastAsyncId),this.each((r=>r.stop(!!e)));return this}pause(e){if(Ss.und(e))this.start({pause:!0});else{const r=this.springs;Bs(_s(e),(e=>r[e].pause()))}return this}resume(e){if(Ss.und(e))this.start({pause:!1});else{const r=this.springs;Bs(_s(e),(e=>r[e].resume()))}return this}each(e){Os(this.springs,e)}_onFrame(){const{onStart:e,onChange:r,onRest:t}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Ms(e,(([e,r])=>{r.value=this.get(),e(r,this,this._item)})));const o=!n&&this._started,a=i||o&&t.size?this.get():null;i&&r.size&&Ms(r,(([e,r])=>{r.value=a,e(r,this,this._item)})),o&&(this._started=!1,Ms(t,(([e,r])=>{r.value=a,e(r,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ls.onFrame(this._onFrame)}};function lc(e,r){return Promise.all(r.map((r=>dc(e,r)))).then((r=>Md(e,r)))}async function dc(e,r,t){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=r,d=Ss.obj(r.default)&&r.default;a&&(r.loop=!1),!1===i&&(r.to=null),!1===o&&(r.from=null);const c=Ss.arr(i)||Ss.fun(i)?i:void 0;c?(r.to=void 0,r.onRest=void 0,d&&(d.onRest=void 0)):Bs(oc,(t=>{const n=r[t];if(Ss.fun(n)){const i=e._events[t];r[t]=({finished:e,cancelled:r})=>{const t=i.get(n);t?(e||(t.finished=!1),r&&(t.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:r||!1})},d&&(d[t]=r[t])}}));const u=e._state;r.pause===!u.paused?(u.paused=r.pause,Ts(r.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(r.pause=!0);const h=(n||Object.keys(e.springs)).map((t=>e.springs[t].start(r))),g=!0===r.cancel||!0===vd(r,"cancel");(c||g&&u.asyncId)&&h.push(_d(++e._lastAsyncId,{props:r,state:u,actions:{pause:ks,resume:ks,start(r,t){g?(Pd(u,e._lastAsyncId),t(Td(e))):(r.onRest=s,t(Id(c,r,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=Md(e,await Promise.all(h));if(a&&m.finished&&(!t||!m.noop)){const t=Jd(r,a,i);if(t)return mc(e,[t]),dc(e,t,!0)}return l&&ls.batchedUpdates((()=>l(m,e,e.item))),m}function cc(e,r){const t={...e.springs};return r&&Bs(_s(r),(e=>{Ss.und(e.keys)&&(e=Kd(e)),Ss.obj(e.to)||(e={...e,to:void 0}),gc(t,e,(e=>hc(e)))})),uc(e,t),t}function uc(e,r){Os(r,((r,t)=>{e.springs[t]||(e.springs[t]=r,Ol(r,e))}))}function hc(e,r){const t=new Xd;return t.key=e,r&&Ol(t,r),t}function gc(e,r,t){r.keys&&Bs(r.keys,(n=>{(e[n]||(e[n]=t(n)))._prepareNode(r)}))}function mc(e,r){Bs(r,(r=>{gc(e.springs,r,(r=>hc(r,e)))}))}var bc=n.createContext({pause:!1,immediate:!1}),pc=()=>{const e=[],r=function(r){Ql(`${Yl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Bs(e,((e,i)=>{if(Ss.und(r))n.push(e.start());else{const o=t(r,e,i);o&&n.push(e.start(o))}})),n};r.current=e,r.add=function(r){e.includes(r)||e.push(r)},r.delete=function(r){const t=e.indexOf(r);~t&&e.splice(t,1)},r.pause=function(){return Bs(e,(e=>e.pause(...arguments))),this},r.resume=function(){return Bs(e,(e=>e.resume(...arguments))),this},r.set=function(r){Bs(e,((e,t)=>{const n=Ss.fun(r)?r(t,e):r;n&&e.set(n)}))},r.start=function(r){const t=[];return Bs(e,((e,n)=>{if(Ss.und(r))t.push(e.start());else{const i=this._getProps(r,e,n);i&&t.push(e.start(i))}})),t},r.stop=function(){return Bs(e,(e=>e.stop(...arguments))),this},r.update=function(r){return Bs(e,((e,t)=>e.update(this._getProps(r,e,t)))),this};const t=function(e,r,t){return Ss.fun(e)?e(t,r):e};return r._getProps=t,r};function fc(e,r){const t=Ss.fun(e),[[n],i]=function(e,r,t){const n=Ss.fun(r)&&r;n&&!t&&(t=[]);const i=b((()=>n||3==arguments.length?pc():void 0),[]),a=o(0),s=Xl(),l=b((()=>({ctrls:[],queue:[],flush(e,r){const t=cc(e,r),n=a.current>0&&!l.queue.length&&!Object.keys(t).some((r=>!e.springs[r]));return n?lc(e,r):new Promise((n=>{uc(e,t),l.queue.push((()=>{n(lc(e,r))})),s()}))}})),[]),d=o([...l.ctrls]),c=o([]),u=Kl(e)||0;function h(e,t){for(let i=e;i<t;i++){const e=d.current[i]||(d.current[i]=new sc(null,l.flush)),t=n?n(i,e):r[i];t&&(c.current[i]=ec(t))}}b((()=>{Bs(d.current.slice(e,u),(e=>{!function(e,r){e.ref?.delete(e),r?.delete(e)}(e,i),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),b((()=>{h(0,Math.min(u,e))}),t);const g=d.current.map(((e,r)=>cc(e,c.current[r]))),m=f(bc),p=Kl(m),y=m!==p&&function(e){for(const r in e)return!0;return!1}(m);Zl((()=>{a.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],Bs(e,(e=>e()))),Bs(d.current,((e,r)=>{i?.add(e),y&&e.start({default:m});const t=c.current[r];t&&(function(e,r){r&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r)}(e,t.ref),e.ref?e.queue.push(t):e.start(t))}))})),Gl((()=>()=>{Bs(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return i?[v,i]:v}(1,t?e:[e],t?r||[]:r);return t||2==arguments.length?[n,i]:n}var yc=class extends Hd{constructor(e,r){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=bl(...r);const t=this._get(),n=ud(t);td(this,n.create(t))}advance(e){const r=this._get();As(r,this.get())||(rd(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&xc(this._active)&&wc(this)}_get(){const e=Ss.arr(this.source)?this.source.map(Dl):_s(Dl(this.source));return this.calc(...e)}_start(){this.idle&&!xc(this._active)&&(this.idle=!1,Bs(nd(this),(e=>{e.done=!1})),Ds.skipAnimation?(ls.batchedUpdates((()=>this.advance())),wc(this)):qs.start(this))}_attach(){let e=1;Bs(_s(this.source),(r=>{El(r)&&Ol(r,this),Wd(r)&&(r.idle||this._active.add(r),e=Math.max(e,r.priority+1))})),this.priority=e,this._start()}_detach(){Bs(_s(this.source),(e=>{El(e)&&_l(e,this)})),this._active.clear(),wc(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=_s(this.source).reduce(((e,r)=>Math.max(e,(Wd(r)?r.priority:0)+1)),0))}};function vc(e){return!1!==e.idle}function xc(e){return!e.size||Array.from(e).every(vc)}function wc(e){e.idle||(e.idle=!0,Bs(nd(e),(e=>{e.done=!0})),Sl(e,{type:"idle",parent:e}))}Ds.assign({createStringInterpolator:Hl,to:(e,r)=>new yc(e,r)});var $c=/^--/;function Fc(e,r){return null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||$c.test(e)||Ec.hasOwnProperty(e)&&Ec[e]?(""+r).trim():r+"px"}var Cc={};var Ec={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dc=["Webkit","Ms","Moz","O"];Ec=Object.keys(Ec).reduce(((e,r)=>(Dc.forEach((t=>e[((e,r)=>e+r.charAt(0).toUpperCase()+r.substring(1))(t,r)]=e[r])),e)),Ec);var kc=/^(matrix|translate|scale|rotate|skew)/,Sc=/^(translate)/,Ac=/^(rotate|skew)/,Bc=(e,r)=>Ss.num(e)&&0!==e?e+r:e,Oc=(e,r)=>Ss.arr(e)?e.every((e=>Oc(e,r))):Ss.num(e)?e===r:parseFloat(e)===r,_c=class extends ld{constructor({x:e,y:r,z:t,...n}){const i=[],o=[];(e||r||t)&&(i.push([e||0,r||0,t||0]),o.push((e=>[`translate3d(${e.map((e=>Bc(e,"px"))).join(",")})`,Oc(e,0)]))),Os(n,((e,r)=>{if("transform"===r)i.push([e||""]),o.push((e=>[e,""===e]));else if(kc.test(r)){if(delete n[r],Ss.und(e))return;const t=Sc.test(r)?"px":Ac.test(r)?"deg":"";i.push(_s(e)),o.push("rotate3d"===r?([e,r,n,i])=>[`rotate3d(${e},${r},${n},${Bc(i,t)})`,Oc(i,0)]:e=>[`${r}(${e.map((e=>Bc(e,t))).join(",")})`,Oc(e,r.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Mc(i,o)),super(n)}},Mc=class extends Al{constructor(e,r){super(),this.inputs=e,this.transforms=r,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",r=!0;return Bs(this.inputs,((t,n)=>{const i=Dl(t[0]),[o,a]=this.transforms[n](Ss.arr(i)?i:t.map(Dl));e+=" "+o,r=r&&a})),r?"none":e}observerAdded(e){1==e&&Bs(this.inputs,(e=>Bs(e,(e=>El(e)&&Ol(e,this)))))}observerRemoved(e){0==e&&Bs(this.inputs,(e=>Bs(e,(e=>El(e)&&_l(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Sl(this,e)}};Ds.assign({batchedUpdates:D,createStringInterpolator:Hl,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var zc=((e,{applyAnimatedValues:r=()=>!1,createAnimatedStyle:t=e=>new ld(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:r,createAnimatedStyle:t,getComponentProps:n},o=e=>{const r=bd(e)||"Anonymous";return(e=Ss.str(e)?o[e]||(o[e]=hd(e,i)):e[md]||(e[md]=hd(e,i))).displayName=`Animated(${r})`,e};return Os(e,((r,t)=>{Ss.arr(e)&&(t=bd(r)),o[t]=o(r)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,r){if(!e.nodeType||!e.setAttribute)return!1;const t="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l,...d}=r,c=Object.values(d),u=Object.keys(d).map((r=>t||e.hasAttribute(r)?r:Cc[r]||(Cc[r]=r.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const r in i)if(i.hasOwnProperty(r)){const t=Fc(r,i[r]);$c.test(r)?e.style.setProperty(r,t):e.style[r]=t}u.forEach(((r,t)=>{e.setAttribute(r,c[t])})),void 0!==n&&(e.className=n),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new _c(e),getComponentProps:({scrollTop:e,scrollLeft:r,...t})=>t}),jc=zc.animated;var Tc=be((function(e){return null==e}));const Ic=v.div`
    border-radius: ${ei.md};
    background: ${Zn.bg};
    padding: ${Kn["spacing-16"]} ${Kn["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?x`
                  border: ${Jn["width-010"]} ${Jn.solid}
                      ${Zn.border};
              `:x`
                  box-shadow: ${ri["md-subtle"]};
              `}}
`,Pc=v.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Kn["spacing-24"]};
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

        ${({$highlight:e})=>e&&x`
                background-color: ${Zn["bg-hover-neutral"]};
            `}
    }
`,Lc=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=ge(e,["children","focusHighlight","focusOutline","type"]);return r(Pc,Object.assign({ref:t,$outline:o,$highlight:i,type:a},s,{children:n}))})),Rc=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Zn.bg};
    box-shadow: ${ri["lg-strong"]};
    border-radius: ${ei.lg};
    overflow: hidden;

    ${ni.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Wc=v(Lc)`
    position: absolute;
    top: var(--close-button-top-inset, ${Kn["spacing-16"]});
    right: var(--close-button-right-inset, ${Kn["spacing-16"]});
    padding: 0;
    color: ${Zn.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${ni.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Kn["spacing-20"]});
    }
`,Nc=v.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,Hc=v((e=>{var{children:t}=e,n=ge(e,["children"]);const i=n["data-testid"]||"card";return r(Ic,Object.assign({},n,{"data-testid":i,children:"string"==typeof t?r(Aa.BodyBL,{children:t}):t}))}))`
    color: ${Zn.text};
    ${$a({textSize:"body-md"})}

    ${ni.MaxWidth.sm} {
        display: none;
    }

    ${({$maxHeight:e})=>void 0!==e&&`\n        max-height: ${e}px;\n    `}

    ${({$overflow:e})=>e&&`\n        overflow-y: ${e};\n    `}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Zn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ei.full};
        background-clip: padding-box;
    }
`;v((t=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=t,s=ge(t,["id","children","onClose","showCloseButton"]);return e(Rc,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&r(Wc,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:r(Y,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,v.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Zn.text};
    ${$a({textSize:"body-md"})}
`;const Yc=v.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return x`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Vc=v.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Zn["overlay-subtle"]:Zn["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=x`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=x`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=x`
                transition: none;
            `),r}};
`;var qc;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(qc||(qc={}));const Qc=({show:e=!1,rootId:t,onOverlayClick:n,children:s,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:h=!1,zIndex:g,id:m})=>{const[b,p]=a(null),[f,y]=a(),[v]=a((()=>ya.generate())),x=X(),w=o(),$=o(null),F=s&&i.cloneElement(s,{ref:$}),E=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root",D=null!=g?g:f?99999:99998;(e=>{const r=U();u((()=>{if(!r)return;const t={zIndex:e};r.events.emit(qc.Change,t)}),[r,e]),u((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(qc.Change,t)};return null==r||r.events.on(qc.Ready,t),()=>null==r?void 0:r.events.off(qc.Ready,t)}),[r,e])})(D),u((()=>(O(),p(A()),()=>{j(),M().length<1&&(T("remove"),P(),_("remove"))})),[]),u((()=>{if(e){const e=B();k(e),z(),S()&&1===M().length&&(I(),T("add"));const r=setTimeout((()=>{_("add")}),200);return()=>clearTimeout(r)}{j(),S()&&M().length<1&&(T("remove"),P());const e=setTimeout((()=>{M().length<1&&_("remove")}),200);return()=>clearTimeout(e)}}),[e]);const k=e=>{w.current=e,y(e)},S=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),A=()=>document&&t?document.getElementById(t):document?document.body:null,B=()=>M().length>0,O=()=>{if(!document.getElementById(Zc)){const e=document.createElement("style");e.id=Zc;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${Xc} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Xc}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${Gc} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${Jc}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},_=e=>{const r=document.body.classList.contains(Xc);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Xc):document.body.classList.add(Xc)},M=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},z=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},j=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},T=e=>{if(!S())return;const r=document.body.classList.contains(Gc);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Gc):document.body.classList.add(Gc)},I=()=>{const e=document.body.style,r=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(Jc,r)},P=()=>{const e=document.body.style.getPropertyValue(Jc);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},L=e=>{var r;const t=null===(r=$.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&h&&(e.preventDefault(),n())};return b?C.createPortal(r(Yc,{id:E,"data-testid":E,$show:e,$zIndex:D,children:s&&r(G,{id:x,children:r(Vc,{"data-testid":"overlay-wrapper",$show:e,$stacked:f,$backgroundBlur:d,$disableTransition:c,onClick:L,children:F})})}),b):null},Uc=e=>r(Z,{children:r(Qc,Object.assign({},e))}),Zc="lifesg-ds-overlay-stylesheet",Xc="lifesg-ds-overlay-open",Gc="lifesg-ds-overlay-scroll-lock",Jc="--lifesg-ds-overlay-scroll-y",Kc=y({onClose:()=>{}}),eu=v.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${ni.MaxWidth.sm} {
        ${e=>x`
                height: calc(
                    ${e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
                );
            `}

        top: ${e=>e.$offsetTop||0}px;
    }

    ${e=>x`
        &[data-status="initial"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${e.$animationFrom}: 0;
            transition: all ${Gn["duration-250"]}
                ${Gn["ease-entrance"]}
            transition-delay: ${Gn["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${Gn["duration-250"]}
                ${Gn["ease-exit"]};
        }
    `}
`,ru=v.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,tu=v.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,nu=v.div`
    width: 40rem;
    margin: ${Kn["spacing-64"]} auto;
    background: ${Zn.bg};
    box-shadow: ${ri["xs-strong"]};
    border-radius: ${ei.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${ti["xxl-margin"]}px * 2);

    ${ni.MaxWidth.xl} {
        max-width: calc(100% - ${ti["xl-margin"]}px * 2);
    }

    ${ni.MaxWidth.lg} {
        max-width: calc(100% - ${ti["lg-margin"]}px * 2);
    }

    ${ni.MaxWidth.md} {
        max-width: calc(100% - ${ti["md-margin"]}px * 2);
    }

    ${ni.MaxWidth.sm} {
        max-width: calc(100% - ${ti["sm-margin"]}px * 2);
    }

    ${ni.MaxWidth.xs} {
        max-width: calc(100% - ${ti["xs-margin"]}px * 2);
    }

    ${ni.MaxWidth.xxs} {
        max-width: calc(100% - ${ti["xxs-margin"]}px * 2);
    }
`,iu=v.div`
    margin-right: ${Kn["spacing-16"]};
    margin-left: auto;
    margin-top: ${Kn["spacing-16"]};
    margin-bottom: ${Kn["spacing-16"]};
`,ou=v(Lc)`
    padding: 0;
    color: ${Zn.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,au=v.div`
    margin-right: ${Kn["spacing-64"]};
    margin-left: ${Kn["spacing-64"]};

    ${ni.MaxWidth.sm} {
        margin-right: ${Kn["spacing-20"]};
        margin-left: ${Kn["spacing-20"]};
    }
`,su=v.div`
    margin-right: ${Kn["spacing-64"]};
    margin-left: ${Kn["spacing-64"]};

    ${ni.MaxWidth.sm} {
        margin-right: ${Kn["spacing-20"]};
        margin-left: ${Kn["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${Kn["spacing-32"]};
    row-gap: ${Kn["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${ni.MaxWidth.md} {
        flex-direction: column;
    }
`,lu=v.div`
    :where(& > ${au}:last-child) {
        margin-bottom: ${Kn["spacing-64"]};
    }

    :where(& > ${su}:not(:first-child)) {
        margin-top: ${Kn["spacing-32"]};
    }

    :where(& > ${su}:last-child) {
        margin-bottom: ${Kn["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?x`
                  :where(& > ${au}:first-child),
                  :where(& > ${su}:first-child) {
                      margin-top: 0;
                  }
              `:x`
                  :where(& > ${au}:first-child),
                  :where(& > ${su}:first-child) {
                      margin-top: ${Kn["spacing-64"]};
                  }
              `}
`,du=e=>{var{"data-testid":t="modal-close-button"}=e,n=ge(e,["data-testid"]);const{onClose:i}=f(Kc);return r(iu,Object.assign({"data-testid":t},n,{children:r(ou,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:r(Y,{"aria-hidden":!0})})}))};du.displayName="ModalV2.CloseButton";const cu=e=>{var{"data-testid":t="modal-content",children:n}=e,i=ge(e,["data-testid","children"]);return r(au,Object.assign({"data-testid":t},i,{children:n}))};cu.displayName="ModalV2.Content";const uu=r=>{var{"data-testid":t="modal-footer",primaryButton:n,secondaryButton:i}=r,o=ge(r,["data-testid","primaryButton","secondaryButton"]);return e(su,Object.assign({"data-testid":t},o,{children:[n,i]}))};uu.displayName="ModalV2.Footer";const hu=r=>{var{id:t,"data-testid":n="modal-card",children:o}=r,a=ge(r,["id","data-testid","children"]);const s=e=>i.Children.toArray(o).find((r=>((e,r)=>$(e.type)?e.type.target===r:e.type===r)(r,e))),l=s(du),d=s(cu),c=s(uu),u=!!l;return e(nu,Object.assign({id:t,"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[e(lu,{$hasCloseButton:u,children:[d,c]}),u&&l]}))};hu.displayName="ModalV2.Card";const gu=Object.assign((e=>{var{id:t,show:n,onClose:i,animationFrom:o="bottom",children:s,enableOverlayClick:l=!0,rootComponentId:d,zIndex:c,onOverlayClick:h,dismissKeyboardOnShow:g=!0,"data-testid":b="modal"}=e,p=ge(e,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid"]);const{verticalHeight:f,offsetTop:y}=(()=>{const[e,r]=a(),[t,n]=a(),i=m((()=>{const e=.01*window.innerHeight;r(e)}),[]),o=m((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;r(e),n(window.visualViewport.offsetTop)}}),[]);return u((()=>window.visualViewport?(o(),window.visualViewport.addEventListener("resize",o),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",o)}):(i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)})),[]),{verticalHeight:e,offsetTop:t}})(),{refs:v,context:x}=J({open:n,onOpenChange:e=>{e||null==i||i()}}),{isMounted:w,status:$}=K(x,{duration:300}),F=ee(x,{outsidePress:!1,enabled:!!i}),{getFloatingProps:C}=re([F]);return u((()=>{var e,r;n&&g&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[g,n]),r(Uc,{"data-testid":`${b}-overlay`,show:w,enableOverlayClick:l,onOverlayClick:h,id:t,rootId:d,zIndex:c,children:r(eu,Object.assign({$show:w,$animationFrom:o,"data-testid":b,$verticalHeight:f,$offsetTop:y},p,{"data-status":$,children:r(Kc.Provider,{value:{onClose:i},children:w&&r(te,{context:x,initialFocus:v.floating,children:r(ru,{children:r(tu,Object.assign({ref:v.setFloating},C(),{"aria-modal":!0,role:"dialog",children:s}))})})})}))})}),{Card:hu,CloseButton:du,Content:cu,Footer:uu}),mu=n=>{var{children:i,visible:o,onMobileClose:a,maxHeight:s,overflow:l,ariaLabel:d,id:c}=n,u=ge(n,["children","visible","onMobileClose","maxHeight","overflow","ariaLabel","id"]);const h=u["data-testid"]||"popover",g=f(F),m=ti["sm-max"]({theme:g}),b=ye.useMediaQuery({maxWidth:m}),p=()=>{a&&a()},y=()=>"string"==typeof i?r(Aa.BodyMD,{children:i}):i;return e(t,{children:[o&&r(Nc,Object.assign({tabIndex:0,"data-testid":h},u,{id:c,role:"dialog","aria-label":null!=d?d:"More information",children:r(Hc,{$maxHeight:s,$overflow:l,children:y()})})),b&&r(gu,{show:null!=o&&o,onOverlayClick:p,onClose:p,id:c,role:"dialog","aria-label":null!=d?d:"More information",children:e(gu.Card,{children:[r(gu.Content,{children:y()}),r(gu.CloseButton,{})]})})]})},bu=v.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,pu=n=>{var i,s,{children:l,popoverContent:d,trigger:c="click",position:h="top",zIndex:g,rootNode:m,customOffset:b,delay:p,onPopoverAppear:y,onPopoverDismiss:v,popoverAriaLabel:x,enableFlip:w=!0,enableResize:$=!1,overflow:C="auto"}=n,E=ge(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","popoverAriaLabel","enableFlip","enableResize","overflow"]);const[D,k]=a(!1),S=o(null),A=o(null),B=f(F),O=ti["sm-max"]({theme:B}),_=ye.useMediaQuery({maxWidth:O}),[M,z]=a(0),j=`${o(ya.generate()).current}-popover`,{refs:T,floatingStyles:I,context:P}=J({open:D,placement:h,whileElementsMounted:ne,middleware:[ie(null!=b?b:16),w&&oe(),ae({limiter:se()}),$&&le({apply({availableHeight:e}){z(e)}})],onOpenChange:e=>{k(e),D!==e&&Q(e)}}),L=(()=>{const[e,r]=a(void 0),t=U();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(qc.Change,e),t.events.emit(qc.Ready),()=>t.events.off(qc.Change,e)}),[t]),e})(),R="hover"===(_?"click":c),W=de(P,{ignoreMouse:R}),N=ee(P),H=ce(P,{enabled:R,delay:{open:null!==(i=null==p?void 0:p.open)&&void 0!==i?i:0,close:null!==(s=null==p?void 0:p.close)&&void 0!==s?s:500}}),{getReferenceProps:Y,getFloatingProps:V}=re([W,N,H]),q=()=>{k(!1),Q(!1)},Q=e=>{e&&y&&y(),!e&&v&&v()};return e(t,{children:[r(bu,Object.assign({ref:e=>{S.current=e,T.setReference(e)}},Y({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),E,{children:l})),D&&r(ue,{root:m,children:r(te,{context:P,children:r("div",Object.assign({ref:e=>{A.current=e,T.setFloating(e)},style:Object.assign(Object.assign({},I),{outline:"none",zIndex:null!=g?g:L})},V(),{children:"function"==typeof d?d($?{maxHeight:M,overflow:C}:{}):r(mu,{visible:!0,onMobileClose:q,maxHeight:$?M:void 0,overflow:$?C:void 0,ariaLabel:x,id:j,children:d})}))})})]})},fu=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},yu=v.span`
    color: ${Zn["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>fu(e)}

    &:hover,
    &:focus-visible {
        color: ${Zn["text-hover"]};
        ${({$hoverStyle:e})=>fu(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,vu=v.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,xu=t=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=t,l=ge(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return r(pu,Object.assign({},l,{children:e(yu,{"aria-label":null!=n?n:d?void 0:"More info",role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,children:[i,o&&r(vu,{$standalone:!d,children:o})]})}))},wu=v.div`
    padding-left: ${Kn["spacing-4"]};
    display: inline;
`,$u=({addon:e,rootNode:t})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=e;return r(wu,{children:r(xu,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:t,zIndex:s,icon:null!=o?o:r(L,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Fu=v.div`
    background-color: ${e=>e.$collapsible?Zn["bg-strong"]:Zn.bg};
    ${e=>e.$isMobile&&x`
            background-color: ${Zn["bg-strong"]};
        `}
`,Cu=v.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Zn.border};

    ${e=>e.$isMobile&&x`
            display: ${e.$showMobileDivider?"block":"none"};
            margin: 0 ${Kn["spacing-16"]};
        `}
`,Eu=v.div`
    display: flex;
    align-items: center;

    background-color: ${Zn.bg};

    ${e=>e.$isMobile&&x`
            background-color: transparent;
        `}
`,Du=v(Lc)`
    margin: 0 0 0 auto;

    color: ${Zn.icon};
    &:hover {
        color: ${Zn["icon-hover"]};
    }
`,ku=v(z)`
    height: ${Xn.Spec["body-size-baseline"]};
    width: ${Xn.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Gn["duration-350"]} ${Gn["ease-standard"]};
`,Su=v.h3`
    ${Xn["heading-xs-semibold"]}
    color: ${Zn.text};

    margin: ${Kn["spacing-24"]} 0 ${Kn["spacing-24"]}
        ${Kn["spacing-20"]};

    ${e=>e.$isMobile&&x`
            ${Xn["body-md-semibold"]}
            color: ${Zn["text-subtle"]};

            margin: ${Kn["spacing-24"]} ${Kn["spacing-20"]} 0
                ${Kn["spacing-20"]};
        `}
`,Au=jc(v.div`
    overflow: hidden;
`),Bu=v.div`
    padding: ${Kn["spacing-24"]} ${Kn["spacing-20"]};
`,Ou=jc(v.div`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`),_u=v(No.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Kn["spacing-16"]} 0 0 0;
`,Mu=t=>{var n,{collapsible:i=!0,initialExpanded:s=!1,expanded:l,onExpandChange:d,minimisable:c=!1,minimisedHeight:h,showDivider:g=!0,showMobileDivider:m=!0,title:b,addon:p,children:y}=t,v=ge(t,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:x,rootNode:w}=f(uo),$="mobile"===x,[F,C]=a(j()),[E,D]=a(c),k=!$&&i,S=co(),A=co(),B=fc({height:F?S.height:0}),O=E?null!=h?h:Math.min(.5*(null!==(n=A.height)&&void 0!==n?n:0),216):A.height,_=o(ya.generate()),M=`${_.current}-content`,z=`${_.current}-title`;u((()=>{C(j())}),[i,l]),u((()=>{D(c)}),[c]);function j(){return!!$||(Tc(l)?!i||s:l)}return e(Fu,{$isMobile:$,$collapsible:k,"aria-labelledby":z,children:[r(Cu,{$isMobile:$,$showDivider:g,$showMobileDivider:m}),(b||k)&&e(Eu,{$isMobile:$,children:[b&&e(Su,{id:z,"data-testid":"filter-item-title",$isMobile:$,children:[b," ",p&&("popover"===(null==p?void 0:p.type)?r($u,{addon:p,rootNode:$?w:void 0}):null)]}),k&&e(Du,{"data-testid":"expand-collapse-button",focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!F;Tc(l)&&C(e),d&&d(e)},"aria-expanded":F,"aria-disabled":!k,"aria-controls":M,children:[b&&r(xa,{children:b}),r(ku,{$expanded:F,"aria-hidden":!0})]})]}),r(Au,{id:M,"data-testid":"expandable-container","data-expanded":F,style:B,inert:wa(!F),children:r("div",{ref:S.ref,children:e(Bu,Object.assign({},v,{children:[r(Ou,{"data-testid":"minimisable-container",$height:O,$minimisable:c,children:r("div",{ref:A.ref,children:r("div",{"data-id":"content-container",children:"function"==typeof y?y(x,{minimised:E}):y})})}),c&&e(_u,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{D(!E)},children:[r(xa,{children:`view ${E?"more":"less"} in ${b}`}),e("span",{"aria-hidden":!0,children:["View ",E?"more":"less"]})]})]}))})})]})};Mu.displayName="Filter.Item";const zu=v(Mu)`
    padding: 0 0 ${Kn["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${Kn["spacing-8"]} ${Kn["spacing-8"]} 0;

        ${ni.MaxWidth.lg} {
            padding: ${Kn["spacing-16"]} ${Kn["spacing-20"]}
                ${Kn["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${Kn["spacing-8"]} ${Kn["spacing-20"]} 0;
    }
`,ju=v.div`
    display: flex;
    flex-direction: column;

    ${ni.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${e=>e.$isMobileToggleMode?Kn["spacing-16"]:0};
    }
`,Tu=v.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${Kn["spacing-8"]} ${Kn["spacing-12"]};
    ${e=>e.$level&&x`
            padding-left: calc(
                ${Kn["spacing-12"]} + ${e.$level} *
                    ${Kn["spacing-32"]}
            );
        `}

    cursor: pointer;
    ${Xn["body-md-regular"]}
    color: ${Zn.text};
    ${e=>e.$selected&&x`
            color: ${Zn["text-selected"]};
        `}
    ${ni.MaxWidth.lg} {
        padding: ${Kn["spacing-8"]};
        ${e=>e.$level&&x`
                padding-left: calc(
                    ${Kn["spacing-8"]} + ${e.$level} *
                        ${Kn["spacing-32"]}
                );
            `}
    }
`,Iu=v((t=>{var{className:n,checked:i,disabled:a,indeterminate:s,displaySize:l="default",id:d}=t,c=ge(t,["className","checked","disabled","indeterminate","displaySize","id"]);const h=o(null);u((()=>{h.current&&(h.current.indeterminate=null!=s&&s)}),[s]);return e(Zo,{className:n,"data-testid":"checkbox",$displaySize:l,children:[r(Xo,Object.assign({id:d,"data-testid":"checkbox-input",type:"checkbox",checked:i,ref:h,tabIndex:a?-1:0,disabled:a,"aria-checked":s?"mixed":i},c)),s?r(Uo,{$disabled:a,"data-testid":"indeterminate","aria-hidden":!0}):i?r(Qo,{$disabled:a,"data-testid":"checkmark","aria-hidden":!0}):a?r(qo,{"data-testid":"empty-disabled-checkbox","aria-hidden":!0}):r(Vo,{$disabled:a,"data-testid":"empty-checkbox","aria-hidden":!0})]})}))`
    flex-shrink: 0;
    margin-right: ${Kn["spacing-8"]};
`,Pu=v((n=>{var{type:i="checkbox",indicator:s,checked:l,styleType:d="default",children:c,childrenMaxLines:h,subLabel:g,disabled:m,error:p,name:f,id:y,className:v,compositeSection:x,removable:w,onRemove:$,"data-testid":F,onChange:C,useContentWidth:E,"aria-describedby":D}=n,k=ge(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:S=!0,errors:A,children:B,initialExpanded:O}=x||{},[_,M]=a(l),[T,I]=a(!!O),P=b((()=>{const e=Array.isArray(A)&&(null==A?void 0:A.length)>0,r=!Array.isArray(A)&&!!A;return e||r}),[A]),[L]=a(ya.generate()),R=y?`${y}`:`tg-${L}`,W=o(null);u((()=>{M(l)}),[l]),u((()=>{_&&I(null==O||O)}),[_]);const N=e=>{if(!m){if(C)return void C(e);switch(i){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":_||M(!0)}}},H=()=>{m||I(!T)},Y=()=>{m||!$||$()},V=()=>{var e;null===(e=null==W?void 0:W.current)||void 0===e||e.click()},q=e=>{e.stopPropagation()},Q=()=>{let e;switch(i){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=i}return r(as,{type:e,active:_,disabled:m,$selected:_,$disabled:m})},U=()=>{if(!g)return null;let e;return e="function"==typeof g?g():g,r(Xa,{"data-id":"toggle-sublabel",id:`${R}-sublabel`,"aria-hidden":!0,children:e})},Z=n=>e(t,{children:[r(is,{weight:"semibold",$disabled:m,children:"Error"}),r(os,{$disabled:m,children:null==n?void 0:n.map(((e,t)=>r("li",{id:`${R}-error-list-item-${t}`,children:r(is,{weight:"semibold",$disabled:m,children:e})},t)))})]});return e(Va,{$selected:_,$disabled:m,className:v,$styleType:d,$error:p,$indicator:s,$useContentWidth:E,id:y,"data-testid":F,children:[(()=>{const t=["string"==typeof g?`${R}-sublabel`:null,D].filter(Boolean).join(" ")||void 0;return e(Ga,{id:`${R}-header-container`,$disabled:m,$error:p,$selected:_,$indicator:s,$styleType:d,children:[r(Ja,{$addPadding:w,children:e(Qa,{id:`${R}-input-container`,onClick:V,children:[r(qa,Object.assign({ref:W,name:f,id:`${R}-input`,type:"checkbox"===i?"checkbox":"radio","data-testid":"toggle-input",disabled:m,onChange:N,onClick:q,checked:_,"aria-describedby":t},k)),s&&Q(),e(Ua,{$selected:_,$disabled:m,children:[r(Za,{htmlFor:`${R}-input`,"data-testid":"toggle-label",id:`${R}-label`,$maxLines:h,children:c}),g&&U()]})]})}),w&&r(Ka,{type:"button",$disabled:m,onClick:Y,id:`${R}-remove-button`,children:"Remove"})]})})(),B&&e("div",{children:[(!S||T)&&r(ns,{"data-id":"toggle-composite-children",$isFinalItem:!S,$disabled:m,children:B}),S&&!T&&P&&r(rs,{$disabled:m,onClick:H,id:`${R}-error-alert`,children:r(ts,{type:m?"description":"error",className:v,showIcon:!0,children:Array.isArray(A)?Z(A):A})}),S&&e(es,{$paddingTopRequired:!T&&!P,disabled:m,onClick:H,"data-testid":T?"collapse-button":"expand-button",children:[T?"Show less":"Show more",r(T?j:z,{"aria-hidden":!0})]})]})]})}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
    min-width: 5rem;
`,Lu=v(No.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Kn["spacing-16"]} 0 ${Kn["spacing-8"]}
        ${Kn["spacing-12"]};

    ${ni.MaxWidth.lg} {
        margin: 0 0 ${Kn["spacing-16"]} 0;
    }
`,Ru=n=>{var{selectedOptions:i,options:s,showAsCheckboxInMobile:l=!1,minimisableOptions:d=!0,onSelect:c,labelExtractor:h,valueExtractor:g,useToggleContentWidth:p}=n,y=ge(n,["selectedOptions","options","showAsCheckboxInMobile","minimisableOptions","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:v}=f(uo),[x,w]=a(i||[]),[$,F]=a(),[C,E]=a(s.length),D=o(null),k=o(null),S=b((()=>((e,r)=>e.some((e=>{const t=r?r(e):e.options;return t&&t.length>0})))(s,(e=>e.options))),[s]),A="mobile"===v&&!l&&!S,B=b((()=>go(s,[],g||(e=>e.value),h||(e=>e.label))),[s,g,h]),O=B.length,_=e=>()=>{const r=B.find((r=>r.originalItem===e));if(r)if(r.hasChildren){const e=((e,r)=>{const t=ho(r),n=[],i=e.findIndex((e=>ho(e.keyPath)===t));if(-1===i)return n;for(let t=i+1;t<e.length;t++){const i=e[t];if(!mo(r,i.keyPath))break;i.hasChildren||n.push(i.originalItem)}return n})(B,r.keyPath),t=e.filter((e=>x.some((r=>P(r)===P(e)))));let n=[...x];t.length===e.length?n=n.filter((r=>!e.some((e=>P(e)===P(r))))):e.forEach((e=>{n.some((r=>P(r)===P(e)))||n.push(e)})),w(n),null==c||c(n)}else{const r=[...x],t=x.findIndex((r=>P(r)===P(e)));t>=0?r.splice(t,1):r.push(e),w(r),null==c||c(r)}},M=()=>{if(S)if(x.length>0)w([]),null==c||c([]);else{const e=B.filter((e=>!e.hasChildren)).map((e=>e.originalItem));w(e),null==c||c(e)}else{const e=x.length?[]:s;w(e),null==c||c(e)}},z=e=>r=>{!S||" "!==r.key&&"Enter"!==r.key||(r.preventDefault(),_(e)())},j=e=>()=>{S||_(e)()},T=e=>{if(!e.hasChildren)return{checked:x.some((r=>P(r)===P(e.originalItem))),indeterminate:!1};const r=((e,r)=>e.filter((e=>mo(r,e.keyPath))).map((e=>e.keyPath)))(B,e.keyPath).map((e=>B.find((r=>ho(r.keyPath)===ho(e))))).filter((e=>e&&!e.hasChildren)).map((e=>e.originalItem)),t=r.filter((e=>x.some((r=>P(r)===P(e)))));return{checked:t.length===r.length&&r.length>0,indeterminate:t.length>0&&t.length<r.length}},I=e=>{var r;return h?h(e):null!==(r=e.label)&&void 0!==r?r:null==e?void 0:e.toString()},P=e=>{var r;return g?g(e):null!==(r=e.value)&&void 0!==r?r:null==e?void 0:e.toString()},L=()=>{const e=k.current?k.current.offsetTop+k.current.clientHeight:void 0;F(e)},R=m((()=>{if(!D.current)return void F(void 0);const e=Array.from(D.current.children);let r=0,t=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(t++,n=o,t>2))break;r=i}E(r),F(t>2?n-8:void 0)}),[]);u((()=>{i!==x&&w(i||[])}),[i]),u((()=>{A?R():L()}),[s]),co({handleWidth:!0,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:D,onResize:A?R:L});const W=(e,t)=>{const{checked:n,indeterminate:i}=T(t);return r(Iu,{displaySize:"small",checked:n,indeterminate:i,onChange:j(e),tabIndex:S?-1:void 0,"aria-hidden":S?"true":void 0})},N=()=>{var e;return O<3?null:r(Lu,{styleType:"link",type:"button",onClick:M,"aria-label":x.length?"Clear all selections":`Select all in ${(null===(e=D.current)||void 0===e?void 0:e.ariaLabel)||"this group"}`,children:x.length?"Clear all":"Select all"})};return r(zu,Object.assign({minimisable:!!d&&(A?!!$:O>5),minimisedHeight:$},y,{children:(n,{minimised:i})=>e(t,{children:[N(),r(ju,{role:S?"tree":"group","aria-label":y.title,"aria-multiselectable":!0,ref:D,$isMobileToggleMode:A,children:B.map(((t,n)=>A?((e,t,n)=>{const i=e.originalItem,o=I(i),a=P(i),s=!!x.find((e=>P(e)===a));return r(Pu,{type:"checkbox",checked:s,$visible:!n||!!$&&t<=C,onChange:_(i),useContentWidth:p,children:o},a)})(t,n,i):((r,t,n)=>{const i=r.originalItem,o=I(i),{checked:a,indeterminate:s}=T(r),l=a||s,d=!n||t<5,c=S?{"aria-checked":s?"mixed":a,"aria-selected":!!a,"aria-level":r.level+1,"aria-posinset":r.indexInParent+1,"aria-setsize":r.parentSetSize}:{};return e(Tu,Object.assign({as:S?"div":"label",role:S?"treeitem":void 0},c,{onClick:S?_(i):void 0,onKeyDown:z(i),tabIndex:S?0:void 0,$visible:d,$selected:l,$level:r.level,ref:4===t?k:void 0,children:[W(i,r),o]}),ho(r.keyPath))})(t,n,i)))})]})}))};Ru.displayName="Filter.Checkbox";const Wu=v.div`
    background-color: ${Zn.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Nu=v.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,Hu=v(Lc)`
    padding: ${Kn["spacing-24"]} ${Kn["spacing-20"]};
    margin-right: auto;
    color: ${Zn.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Zn["icon-hover"]};
    }
`,Yu=v.div`
    padding: ${Kn["spacing-24"]} ${Kn["spacing-20"]};
    background-color: ${Zn.bg};
    border-top: ${Jn["width-010"]} ${Jn.solid} ${Zn.border};
    ${e=>e.$insetBottom&&`padding-bottom: ${e.$insetBottom}px;`}
`,Vu=v(No.Default)`
    width: 100%;
`,qu=({onDismiss:t,onDone:n,children:i})=>e(Wu,{children:[r(Hu,{onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:r(he,{})}),r(Nu,{children:i}),r(Yu,{children:r(Vu,{onClick:n,type:"button",children:"Done"})})]});qu.displayName="Filter.Page";const Qu=v(To)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Uu=(t,n)=>{const{children:o,disabled:a=!1,styleType:s="default",danger:l=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:g}=t,m=ge(t,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),b={$buttonIconPosition:c,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Qu,Object.assign({ref:n,"data-testid":m["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:g},b,m,{children:[u?r(wo,{}):d?i.cloneElement(d,{"aria-hidden":!0}):null,r("span",{children:o})]}))};Uu.displayName="ButtonWithIcon.Default";const Zu=(t,n)=>{const{children:o,disabled:a=!1,styleType:s="default",danger:l=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:g}=t,m=ge(t,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),b={$buttonIconPosition:c,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Qu,Object.assign({ref:n,"data-testid":m["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:g},b,m,{children:[u?r(wo,{}):d?i.cloneElement(d,{"aria-hidden":!0}):null,r("span",{children:o})]}))};Zu.displayName="ButtonWithIcon.Small";const Xu={Default:i.forwardRef(Uu),Small:i.forwardRef(Zu)},Gu=v.div`
    background-color: ${Zn["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Ju=v.div`
    background-color: ${Zn.bg};
    height: 100%;
    width: 100%;
`,Ku=v.div`
    height: 100%;
`,eh=v.div`
    display: flex;
    align-items: center;
    background-color: ${Zn.bg};
    ${e=>e.$insetTop&&`padding-top: ${e.$insetTop}px;`}
`,rh=v.h2`
    ${Xn["heading-xs-semibold"]}
    flex: 1;
    text-align: center;
    margin: ${Kn["spacing-24"]} 0;
`,th=v(No.Small)`
    background-color: transparent;
    height: 100%;
    padding: ${Kn["spacing-24"]} ${Kn["spacing-20"]};
`,nh=v(Xu.Default)`
    width: 100%;
`,ih=t=>{var{customLabels:n,onClear:i,onDone:s,onDismiss:l,onModalOpen:d,toggleFilterButtonStyle:c="light",clearButtonDisabled:h=!1,insets:g,children:m,toggleFilterButtonLabel:b,headerTitle:p,doneButtonLabel:f}=t,y=ge(t,["customLabels","onClear","onDone","onDismiss","onModalOpen","toggleFilterButtonStyle","clearButtonDisabled","insets","children","toggleFilterButtonLabel","headerTitle","doneButtonLabel"]);const{context:v,refs:x}=J(),w=o(null),[$,F]=a(!1),C={toggle:(null==n?void 0:n.toggleFilterButtonLabel)||b||"Filters",title:(null==n?void 0:n.headerTitle)||p||"Filters",done:(null==n?void 0:n.doneButtonLabel)||f||"Done",clear:(null==n?void 0:n.clearButtonLabel)||"Clear"};return u((()=>{var e;$&&(null===(e=w.current)||void 0===e||e.focus())}),[$]),e(uo.Provider,{value:{mode:"mobile",rootNode:w},children:[r("div",Object.assign({},y,{children:r(nh,{"data-testid":"filter-show-button",styleType:c,onClick:()=>{F(!0),null==d||d()},type:"button",icon:r(_,{}),children:C.toggle})})),r(Uc,{show:$,disableTransition:!0,children:r(Ku,{inert:wa(!$),children:r(te,{context:v,disabled:!$,children:r(Ju,{"data-id":"filter-mobile","data-testid":"filter-mobile",ref:x.setFloating,children:e(Gu,{ref:w,tabIndex:0,children:[e(eh,{$insetTop:null==g?void 0:g.top,children:[r(Hu,{onClick:()=>{F(!1),null==l||l()},focusOutline:"browser",focusHighlight:!1,"aria-label":`close ${C.title}`,children:r(M,{})}),r(rh,{children:C.title}),r(th,{styleType:"link",type:"button",onClick:()=>null==i?void 0:i(),disabled:h,"aria-label":`clear ${C.title}`,children:C.clear})]}),r(Nu,{children:m}),r(Yu,{$insetBottom:null==g?void 0:g.bottom,children:r(Vu,{onClick:()=>{F(!1),null==s||s()},children:C.done})})]})})})})})]})};ih.displayName="Filter.Modal";const oh=v.div`
    background-color: ${Zn.bg};
    border: ${Jn["width-010"]} ${Jn.solid} ${Zn.border};
    border-radius: ${ei.md};
    overflow: hidden;
    width: 100%;
`,ah=v.div`
    display: flex;
    align-items: center;

    background-color: ${Zn.bg};
`,sh=v.h2`
    ${Xn["heading-xs-semibold"]}
    flex: 1;
    margin: ${Kn["spacing-24"]} 0 ${Kn["spacing-24"]}
        ${Kn["spacing-20"]};
`,lh=v(No.Small)`
    background-color: transparent;
    padding-right: ${Kn["spacing-20"]};
    padding-left: ${Kn["spacing-20"]};
    height: 100%;
`,dh=t=>{var{customLabels:n,onClear:i,clearButtonDisabled:a=!1,children:s,headerTitle:l}=t,d=ge(t,["customLabels","onClear","clearButtonDisabled","children","headerTitle"]);const c=o(null),u={title:(null==n?void 0:n.headerTitle)||l||"Filters",clear:(null==n?void 0:n.clearButtonLabel)||"Clear"};return r(uo.Provider,{value:{mode:"default",rootNode:c},children:e(oh,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:c},d,{children:[e(ah,{children:[r(sh,{children:u.title}),r(lh,{styleType:"link",type:"button",onClick:()=>null==i?void 0:i(),disabled:a,"aria-label":`clear ${u.title}`,children:u.clear})]}),r(Nu,{children:s})]}))})};dh.displayName="Filter.Sidebar";const ch=e=>{var{children:t,className:n,style:i,onDismiss:o,onDone:a,onModalOpen:s,toggleFilterButtonStyle:l,insets:d,id:c,"data-testid":h}=e,g=ge(e,["children","className","style","onDismiss","onDone","onModalOpen","toggleFilterButtonStyle","insets","id","data-testid"]);const m=f(F),b=ti["lg-max"]({theme:m}),p=ye.useMediaQuery({maxWidth:b});return u((()=>{p||null==o||o()}),[p]),r("div",{className:n,style:i,id:c,"data-testid":h,children:p?r(ih,Object.assign({onDismiss:o,onDone:a,onModalOpen:s,toggleFilterButtonStyle:l,insets:d},g,{children:"function"==typeof t?t("mobile"):t})):r(dh,Object.assign({},g,{children:"function"==typeof t?t("default"):t}))})};ch.Sidebar=dh,ch.Modal=ih,ch.Item=Mu,ch.Page=qu,ch.Checkbox=Ru;export{ch as Filter};
//# sourceMappingURL=index.js.map
