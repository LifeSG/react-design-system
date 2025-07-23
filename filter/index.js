import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import{SquareIcon as n,SquareFillIcon as i,SquareTickFillIcon as o,MinusSquareFillIcon as s,ChevronDownIcon as a,FilterIcon as l,CrossIcon as d}from"@lifesg/react-icons";import*as c from"react";import u,{useRef as h,useState as g,isValidElement as m,createRef as b,cloneElement as p,PureComponent as f,useEffect as y,useLayoutEffect as v,useMemo as x,forwardRef as w,useCallback as $,useContext as F,version as C}from"react";import E,{css as D,keyframes as k,useTheme as S}from"styled-components";import{useFloatingTree as O,FloatingTree as _,useFloatingNodeId as A,FloatingNode as B,useFloating as M,autoUpdate as z,offset as j,flip as T,shift as I,limitShift as P,useClick as R,useDismiss as L,useHover as W,useInteractions as Y,FloatingPortal as H,FloatingFocusManager as N}from"@floating-ui/react";import V,{findDOMNode as q,unstable_batchedUpdates as Q}from"react-dom";import{ChevronDownIcon as U}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as Z}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as X}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as G}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as J}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as K}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as ee}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as re}from"@lifesg/react-icons/external";import{CircleIcon as te}from"@lifesg/react-icons/circle";import{CircleDotIcon as ne}from"@lifesg/react-icons/circle-dot";import{CrossIcon as ie}from"@lifesg/react-icons/cross";import{SquareIcon as oe}from"@lifesg/react-icons/square";import{SquareTickFillIcon as se}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as ae}from"@lifesg/react-icons/tick";import{ChevronLeftIcon as le}from"@lifesg/react-icons/chevron-left";function de(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var ce="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ue(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var he,ge={exports:{}};he=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,r)=>{r.match=function(e,r){return a(e).some((function(e){var t=e.inverse,n="all"===e.type||r.type===e.type;if(n&&t||!n&&!t)return!1;var i=e.expressions.every((function(e){var t=e.feature,n=e.modifier,i=e.value,o=r[t];if(!o)return!1;switch(t){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=c(i),o=c(o);break;case"resolution":i=d(i),o=d(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!t||!i&&t}))},r.parse=a;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function a(e){return e.split(",").map((function(e){var r=(e=e.trim()).match(t),o=r[1],s=r[2],a=r[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=s?s.toLowerCase():"all",a=a.match(/\([^\)]+\)/g)||[],l.expressions=a.map((function(e){var r=e.match(n),t=r[1].toLowerCase().match(i);return{modifier:t[1],feature:t[2],value:r[2]}})),l}))}function l(e){var r,t=Number(e);return t||(t=(r=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/r[2]),t}function d(e){var r=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return r/2.54;case"dppx":return 96*r;default:return r}}function c(e){var r=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*r;case"cm":return 96*r/2.54;case"mm":return 96*r/2.54/10;case"in":return 96*r;case"pt":return 72*r;case"pc":return 72*r/12;default:return r}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});var n=/[A-Z]/g,i=/^ms-/,o={};function s(e){return"-"+e.toLowerCase()}const a=function(e){if(o.hasOwnProperty(e))return o[e];var r=e.replace(n,s);return o[e]=i.test(r)?"-"+r:r}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,r,t)=>{var n=t(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,r,t){var o=this;if(i&&!t){var s=i.call(window,e);this.matches=s.matches,this.media=s.media,s.addListener(a)}else this.matches=n(e,r),this.media=e;function a(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){s&&s.addListener(e)},this.removeListener=function(e){s&&s.removeListener(e)},this.dispose=function(){s&&s.removeListener(a)}}e.exports=function(e,r,t){return new o(e,r,t)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in o=Object(arguments[l]))t.call(o,d)&&(a[d]=o[d]);if(r){s=r(o);for(var c=0;c<s.length;c++)n.call(o,s[c])&&(a[s[c]]=o[s[c]])}}return a}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,r,t)=>{var n,i=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},s=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function a(e,r,t,a,l){for(var d in e)if(s(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((a||"React class")+": "+t+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](r,d,a,t,null,i)}catch(e){c=e}if(!c||c instanceof Error||n((a||"React class")+": type specification of "+t+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in o)){o[c.message]=!0;var h=l?l():"";n("Failed "+t+" type: "+c.message+(null!=h?h:""))}}}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},a.resetWarningCache=function(){o={}},e.exports=a},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,r,t)=>{var n,i=t(/*! react-is */"./node_modules/react-is/index.js"),o=t(/*! object-assign */"./node_modules/object-assign/index.js"),s=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:b("array"),bigint:b("bigint"),bool:b("boolean"),func:b("function"),number:b("number"),object:b("object"),string:b("string"),symbol:b("symbol"),any:m(d),arrayOf:function(e){return m((function(r,t,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=r[t];if(!Array.isArray(a))return new g("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<a.length;l++){var d=e(a,l,n,i,o+"["+l+"]",s);if(d instanceof Error)return d}return null}))},element:m((function(r,t,n,i,o){var s=r[t];return e(s)?null:new g("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,r,t,n,o){var s=e[r];return i.isValidElementType(s)?null:new g("Invalid "+n+" `"+o+"` of type `"+y(s)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(r,t,n,i,o){if(!(r[t]instanceof e)){var s=e.name||c;return new g("Invalid "+i+" `"+o+"` of type `"+((a=r[t]).constructor&&a.constructor.name?a.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+s+"`.")}var a;return null}))},node:m((function(e,r,t,n,i){return f(e[r])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(r,t,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],d=y(l);if("object"!==d)return new g("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(a(l,c)){var u=e(l,c,n,i,o+"."+c,s);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(r,t,n,i,o){for(var s=r[t],a=0;a<e.length;a++)if(h(s,e[a]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===v(r)?String(r):r}));return new g("Invalid "+i+" `"+o+"` of value `"+String(s)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(t)+" at index "+r+"."),d}return m((function(r,t,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,t,n,i,o,s);if(null==c)return null;c.data&&a(c.data,"expectedType")&&l.push(c.data.expectedType)}return new g("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(r,t,n,i,o){var a=r[t],l=y(a);if("object"!==l)return new g("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return p(n,i,o,d,v(c));var u=c(a,d,n,i,o+"."+d,s);if(u)return u}return null}))},exact:function(e){return m((function(r,t,n,i,l){var d=r[t],c=y(d);if("object"!==c)return new g("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},r[t],e);for(var h in u){var m=e[h];if(a(e,h)&&"function"!=typeof m)return p(n,i,l,h,v(m));if(!m)return new g("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var b=m(d,h,n,i,l+"."+h,s);if(b)return b}return null}))}};function h(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function g(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function m(e){var t={},i=0;function o(o,a,l,d,u,h,m){if(d=d||c,h=h||l,m!==s){if(r){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}if("undefined"!=typeof console){var p=d+":"+l;!t[p]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[p]=!0,i++)}}return null==a[l]?o?null===a[l]?new g("The "+u+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new g("The "+u+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(a,l,d,u,h)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function b(e){return m((function(r,t,n,i,o,s){var a=r[t];return y(a)!==e?new g("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function p(e,r,t,n,i){return new g((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function f(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(f);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!n)return!1;var i,o=n.call(r);if(n!==r.entries){for(;!(i=o.next()).done;)if(!f(i.value))return!1}else for(;!(i=o.next()).done;){var s=i.value;if(s&&!f(s[1]))return!1}return!0;default:return!1}}function y(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function v(e){if(null==e)return""+e;var r=y(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function x(e){var r=v(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return g.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,f=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var g=e.type;switch(g){case d:case c:case i:case s:case o:case h:return g;default:var p=g&&g.$$typeof;switch(p){case l:case u:case b:case m:case a:return p;default:return r}}case n:return r}}}var w=d,$=c,F=l,C=a,E=t,D=u,k=i,S=b,O=m,_=n,A=s,B=o,M=h,z=!1;function j(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=$,r.ContextConsumer=F,r.ContextProvider=C,r.Element=E,r.ForwardRef=D,r.Fragment=k,r.Lazy=S,r.Memo=O,r.Portal=_,r.Profiler=A,r.StrictMode=B,r.Suspense=M,r.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===d},r.isConcurrentMode=j,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===a},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===b},r.isMemo=function(e){return x(e)===m},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===s},r.isStrictMode=function(e){return x(e)===o},r.isSuspense=function(e){return x(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===s||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===a||e.$$typeof===l||e.$$typeof===u||e.$$typeof===f||e.$$typeof===y||e.$$typeof===v||e.$$typeof===p)},r.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,r,t)=>{e.exports=t(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,r,t)=>{function n(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=Object.keys(e),n=Object.keys(r),i=t.length;if(n.length!==i)return!1;for(var o=0;o<i;o++){var s=t[o];if(e[s]!==r[s]||!Object.prototype.hasOwnProperty.call(r,s))return!1}return!0}function i(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=e.length;if(r.length!==t)return!1;for(var n=0;n<t;n++)if(e[n]!==r[n])return!1;return!0}t.r(r),t.d(r,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,r,t){var n=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=i(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.default=function(e){var r=e.children,t=e.device,i=e.onChange,s=n(e,["children","device","onChange"]),a=(0,o.default)(s,t,i);return"function"==typeof r?r(a):a?r:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=(0,t(/*! react */"react").createContext)(void 0);r.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Context=r.toQuery=r.useMediaQuery=r.default=void 0;var i=n(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.useMediaQuery=i.default;var o=n(t(/*! ./Component */"./src/Component.ts"));r.default=o.default;var s=n(t(/*! ./toQuery */"./src/toQuery.ts"));r.toQuery=s.default;var a=n(t(/*! ./Context */"./src/Context.ts"));r.Context=a.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,r,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var s=o(t(/*! prop-types */"./node_modules/prop-types/index.js")),a=s.default.oneOfType([s.default.string,s.default.number]),l={all:s.default.bool,grid:s.default.bool,aural:s.default.bool,braille:s.default.bool,handheld:s.default.bool,print:s.default.bool,projection:s.default.bool,screen:s.default.bool,tty:s.default.bool,tv:s.default.bool,embossed:s.default.bool},d={orientation:s.default.oneOf(["portrait","landscape"]),scan:s.default.oneOf(["progressive","interlace"]),aspectRatio:s.default.string,deviceAspectRatio:s.default.string,height:a,deviceHeight:a,width:a,deviceWidth:a,color:s.default.bool,colorIndex:s.default.bool,monochrome:s.default.bool,resolution:a,type:Object.keys(l)},c=i(d,["type"]),u=n({minAspectRatio:s.default.string,maxAspectRatio:s.default.string,minDeviceAspectRatio:s.default.string,maxDeviceAspectRatio:s.default.string,minHeight:a,maxHeight:a,minDeviceHeight:a,maxDeviceHeight:a,minWidth:a,maxWidth:a,minDeviceWidth:a,maxDeviceWidth:a,minColor:s.default.number,maxColor:s.default.number,minColorIndex:s.default.number,maxColorIndex:s.default.number,minMonochrome:s.default.number,maxMonochrome:s.default.number,minResolution:a,maxResolution:a},c),h=n(n({},l),u);r.default={all:h,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(t(/*! ./mediaQuery */"./src/mediaQuery.ts"));r.default=function(e){var r=[];return Object.keys(o.default.all).forEach((function(t){var n=e[t];null!=n&&r.push(function(e,r){var t=(0,i.default)(e);return"number"==typeof r&&(r="".concat(r,"px")),!0===r?t:!1===r?"not ".concat(t):"(".concat(t,": ").concat(r,")")}(t,n))})),r.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(/*! react */"react"),o=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),s=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),d=n(t(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,s.default)(t)]=e[t],r}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,i.useState)(r),n=t[0],o=t[1];return(0,i.useEffect)((function(){var e=r();n!==e&&o(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,i.useContext)(d.default),t=function(){return c(e)||c(r)},n=(0,i.useState)(t),o=n[0],s=n[1];return(0,i.useEffect)((function(){var e=t();(0,a.shallowEqualObjects)(o,e)||s(e)}),[e,r]),o}(r),s=h(e);if(!s)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,o.default)(e,r||{},!!r)},n=(0,i.useState)(t),s=n[0],a=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=t();return a(e),function(){e&&e.dispose()}}}),[e,r]),s}(s,n),g=function(e){var r=(0,i.useState)(e.matches),t=r[0],n=r[1];return(0,i.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),m=u();return(0,i.useEffect)((function(){m&&t&&t(g)}),[g]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),g}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var me=ge.exports=he(u),be={exports:{}};be.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,s=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!n&&i&&(v=i),i||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===g)},f.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return C(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<C(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),g=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(a)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var v=this.$locale().weekStart||0,x=(b<v?b+7:b)-v;return g(n?f-x:f+(6-x),p);case a:case h:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case o:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[a]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(h,1);b.$d[g](m),b.init(),this.$d=b.set(h,Math.min(this.$D,b.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),b=function(e){var r=C(g);return E.w(r.date(r.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===a)return b(1);if(m===l)return b(7);var p=(h={},h[o]=r,h[s]=t,h[i]=e,h)[m]||1,f=this.$d.getTime()+n*p;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,s=this.$m,a=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(t.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(o,s,!0);case"A":return m(o,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,g){var m,b=this,p=E.p(h),f=C(n),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(b,f)};switch(p){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case a:m=(v-y)/864e5;break;case s:m=v/t;break;case o:m=v/r;break;case i:m=v/e;break;default:m=v}return g?m:E.a(m)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),k=D.prototype;return C.prototype=k,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var pe=ue(be.exports),fe={exports:{}};fe.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[t,a("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[t,a("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<a;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(i||o?1:g.getDate()),b=i||g.getFullYear(),p=0;i&&!o||(p=o>0?o-1:g.getMonth());var f=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(b,p,m,f,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(b,p,m,f,y,v,x)):new Date(b,p,m,f,y,v,x)}catch(e){return new Date("")}}(r,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var g=a.length,m=1;m<=g;m+=1){s[1]=a[m-1];var b=t.apply(this,s);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ye=ue(fe.exports),ve={exports:{}};ve.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),s=t(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var xe=ue(ve.exports),we={exports:{}};we.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var $e=ue(we.exports),Fe={exports:{}};Fe.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Ce,Ee,De,ke=ue(Fe.exports),Se={exports:{}},Oe=ue(Se.exports=(Ce={year:0,month:1,day:2,hour:3,minute:4,second:5},Ee={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Ee[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Ee[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Ce[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",m=+e;return(t.utc(g).valueOf()-(m-=m%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,a=i||r||n,l=o(+t(),a);if("string"!=typeof e)return t(e).tz(a);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var s=o(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=a,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));pe.extend(xe),pe.extend(ke),pe.extend($e),pe.extend(ye),pe.extend(Oe),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=pe(r).startOf("week");return _e(t).map((e=>Ae(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Ae(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(pe(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+pe(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=pe(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?pe(n):void 0,i?pe(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(De||(De={}));const _e=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Ae=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Be=[1,3,5,7,8,10,12],Me=[4,6,9,11];var ze,je,Te,Ie;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),s=parseInt(n);return 0==i?"1":Be.includes(o)?Math.min(i,31).toString():Me.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=pe(e,t);return pe(r,t).diff(n,"minute")},e.toDayjs=e=>e?pe(e):pe(),e.addMinutesToTime=(e,r,t="HH:mm")=>pe(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>pe(e).isSame(pe(r),t)}(ze||(ze={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!pe(e).isBefore(n,"day"))||!(!i||!pe(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(pe(e).isValid())return e}return""}}(je||(je={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Te||(Te={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const s=n+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=t;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(Ie||(Ie={}));var Pe=function(e,r){return Pe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Pe(e,r)};var Re=function(){return Re=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Re.apply(this,arguments)};var Le="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var We=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Ye="object"==typeof Le&&Le&&Le.Object===Object&&Le,He="object"==typeof self&&self&&self.Object===Object&&self,Ne=Ye||He||Function("return this")(),Ve=Ne,qe=function(){return Ve.Date.now()},Qe=/\s/;var Ue=function(e){for(var r=e.length;r--&&Qe.test(e.charAt(r)););return r},Ze=/^\s+/;var Xe=function(e){return e?e.slice(0,Ue(e)+1).replace(Ze,""):e},Ge=Ne.Symbol,Je=Ge,Ke=Object.prototype,er=Ke.hasOwnProperty,rr=Ke.toString,tr=Je?Je.toStringTag:void 0;var nr=function(e){var r=er.call(e,tr),t=e[tr];try{e[tr]=void 0;var n=!0}catch(e){}var i=rr.call(e);return n&&(r?e[tr]=t:delete e[tr]),i},ir=Object.prototype.toString;var or=nr,sr=function(e){return ir.call(e)},ar=Ge?Ge.toStringTag:void 0;var lr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ar&&ar in Object(e)?or(e):sr(e)},dr=function(e){return null!=e&&"object"==typeof e};var cr=Xe,ur=We,hr=function(e){return"symbol"==typeof e||dr(e)&&"[object Symbol]"==lr(e)},gr=/^[-+]0x[0-9a-f]+$/i,mr=/^0b[01]+$/i,br=/^0o[0-7]+$/i,pr=parseInt;var fr=We,yr=qe,vr=function(e){if("number"==typeof e)return e;if(hr(e))return NaN;if(ur(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=ur(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=cr(e);var t=mr.test(e);return t||br.test(e)?pr(e.slice(2),t?2:8):gr.test(e)?NaN:+e},xr=Math.max,wr=Math.min;var $r=function(e,r,t){var n,i,o,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=n,o=i;return n=i=void 0,d=r,s=e.apply(o,t)}function m(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function b(){var e=yr();if(m(e))return p(e);a=setTimeout(b,function(e){var t=r-(e-l);return u?wr(t,o-(e-d)):t}(e))}function p(e){return a=void 0,h&&n?g(e):(n=i=void 0,s)}function f(){var e=yr(),t=m(e);if(n=arguments,i=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(b,r),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(b,r),g(l)}return void 0===a&&(a=setTimeout(b,r)),s}return r=vr(r)||0,fr(t)&&(c=!!t.leading,o=(u="maxWait"in t)?xr(vr(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),f.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},f.flush=function(){return void 0===a?s:p(yr())},f},Fr=$r,Cr=We;var Er=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Cr(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),Fr(e,r,{leading:n,maxWait:r,trailing:i})},Dr=function(e,r,t,n){switch(r){case"debounce":return $r(e,t,n);case"throttle":return Er(e,t,n);default:return e}},kr=function(e){return"function"==typeof e},Sr=function(){return"undefined"==typeof window},Or=function(e){return e instanceof Element||e instanceof HTMLDocument},_r=function(e,r,t,n){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!n||r.height===s&&!t?r:(e&&kr(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Sr()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Sr())return null;if(r)return document.querySelector(r);if(n&&Or(n))return n;if(t.targetRef&&Or(t.targetRef.current))return t.targetRef.current;var i=q(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=_r(a,t.setState.bind(t),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Sr()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return kr(r)?"renderProp":kr(n)?"childFunction":m(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=b(),t.observableElement=null,Sr()||(t.resizeHandler=Dr(t.createResizeHandler,i,s,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Pe(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Sr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,n=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,a={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(a);case"childFunction":return(e=n)(a);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(a,["targetRef"]);return p(e,l)}return p(e,a);case"childArray":return(e=n).map((function(e){return!!e&&p(e,a)}));default:return c.createElement(o,null)}}}(f);var Ar=Sr()?y:v;function Br(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,s=e.refreshOptions,a=e.handleWidth,l=void 0===a||a,d=e.handleHeight,c=void 0===d||d,u=e.targetRef,m=e.observerOptions,b=e.onResize,p=h(t),f=h(null),y=null!=u?u:f,v=h(),x=g({width:void 0,height:void 0}),w=x[0],$=x[1];return Ar((function(){if(!Sr()){var e=_r(b,$,l,c);v.current=Dr((function(r){(l||c)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!Sr()&&e({width:n,height:i}),p.current=!1}))}),n,o,s);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,m),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,s,l,c,b,m,y.current]),Re({ref:y},w)}var Mr=Array.isArray,zr="object"==typeof ce&&ce&&ce.Object===Object&&ce,jr="object"==typeof self&&self&&self.Object===Object&&self,Tr=zr||jr||Function("return this")(),Ir=Tr.Symbol,Pr=Ir,Rr=Object.prototype,Lr=Rr.hasOwnProperty,Wr=Rr.toString,Yr=Pr?Pr.toStringTag:void 0;var Hr=function(e){var r=Lr.call(e,Yr),t=e[Yr];try{e[Yr]=void 0;var n=!0}catch(e){}var i=Wr.call(e);return n&&(r?e[Yr]=t:delete e[Yr]),i},Nr=Object.prototype.toString;var Vr=Hr,qr=function(e){return Nr.call(e)},Qr=Ir?Ir.toStringTag:void 0;var Ur=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Qr&&Qr in Object(e)?Vr(e):qr(e)};var Zr=Ur,Xr=function(e){return null!=e&&"object"==typeof e};var Gr=function(e){return"symbol"==typeof e||Xr(e)&&"[object Symbol]"==Zr(e)},Jr=Mr,Kr=Gr,et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rt=/^\w*$/;var tt=function(e,r){if(Jr(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Kr(e))||(rt.test(e)||!et.test(e)||null!=r&&e in Object(r))};var nt=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},it=Ur,ot=nt;var st,at=function(e){if(!ot(e))return!1;var r=it(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},lt=Tr["__core-js_shared__"],dt=(st=/[^.]+$/.exec(lt&&lt.keys&&lt.keys.IE_PROTO||""))?"Symbol(src)_1."+st:"";var ct=function(e){return!!dt&&dt in e},ut=Function.prototype.toString;var ht=at,gt=ct,mt=nt,bt=function(e){if(null!=e){try{return ut.call(e)}catch(e){}try{return e+""}catch(e){}}return""},pt=/^\[object .+?Constructor\]$/,ft=Function.prototype,yt=Object.prototype,vt=ft.toString,xt=yt.hasOwnProperty,wt=RegExp("^"+vt.call(xt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var $t=function(e,r){return null==e?void 0:e[r]},Ft=function(e){return!(!mt(e)||gt(e))&&(ht(e)?wt:pt).test(bt(e))},Ct=$t;var Et=function(e,r){var t=Ct(e,r);return Ft(t)?t:void 0},Dt=Et(Object,"create"),kt=Dt;var St=function(){this.__data__=kt?kt(null):{},this.size=0};var Ot=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},_t=Dt,At=Object.prototype.hasOwnProperty;var Bt=function(e){var r=this.__data__;if(_t){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return At.call(r,e)?r[e]:void 0},Mt=Dt,zt=Object.prototype.hasOwnProperty;var jt=function(e){var r=this.__data__;return Mt?void 0!==r[e]:zt.call(r,e)},Tt=Dt;var It=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Tt&&void 0===r?"__lodash_hash_undefined__":r,this},Pt=St,Rt=Ot,Lt=Bt,Wt=jt,Yt=It;function Ht(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ht.prototype.clear=Pt,Ht.prototype.delete=Rt,Ht.prototype.get=Lt,Ht.prototype.has=Wt,Ht.prototype.set=Yt;var Nt=Ht;var Vt=function(){this.__data__=[],this.size=0};var qt=function(e,r){return e===r||e!=e&&r!=r};var Qt=function(e,r){for(var t=e.length;t--;)if(qt(e[t][0],r))return t;return-1},Ut=Qt,Zt=Array.prototype.splice;var Xt=function(e){var r=this.__data__,t=Ut(r,e);return!(t<0)&&(t==r.length-1?r.pop():Zt.call(r,t,1),--this.size,!0)},Gt=Qt;var Jt=function(e){var r=this.__data__,t=Gt(r,e);return t<0?void 0:r[t][1]},Kt=Qt;var en=function(e){return Kt(this.__data__,e)>-1},rn=Qt;var tn=function(e,r){var t=this.__data__,n=rn(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},nn=Vt,on=Xt,sn=Jt,an=en,ln=tn;function dn(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}dn.prototype.clear=nn,dn.prototype.delete=on,dn.prototype.get=sn,dn.prototype.has=an,dn.prototype.set=ln;var cn=dn,un=Et(Tr,"Map"),hn=Nt,gn=cn,mn=un;var bn=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var pn=function(e,r){var t=e.__data__;return bn(r)?t["string"==typeof r?"string":"hash"]:t.map},fn=pn;var yn=function(e){var r=fn(this,e).delete(e);return this.size-=r?1:0,r},vn=pn;var xn=function(e){return vn(this,e).get(e)},wn=pn;var $n=function(e){return wn(this,e).has(e)},Fn=pn;var Cn=function(e,r){var t=Fn(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},En=function(){this.size=0,this.__data__={hash:new hn,map:new(mn||gn),string:new hn}},Dn=yn,kn=xn,Sn=$n,On=Cn;function _n(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}_n.prototype.clear=En,_n.prototype.delete=Dn,_n.prototype.get=kn,_n.prototype.has=Sn,_n.prototype.set=On;var An=_n;function Bn(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Bn.Cache||An),t}Bn.Cache=An;var Mn=Bn;var zn=function(e){var r=Mn(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Tn=/\\(\\)?/g,In=zn((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(jn,(function(e,t,n,i){r.push(n?i.replace(Tn,"$1"):t||e)})),r}));var Pn=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Rn=Mr,Ln=Gr,Wn=Ir?Ir.prototype:void 0,Yn=Wn?Wn.toString:void 0;var Hn=function e(r){if("string"==typeof r)return r;if(Rn(r))return Pn(r,e)+"";if(Ln(r))return Yn?Yn.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Nn=Hn;var Vn=Mr,qn=tt,Qn=In,Un=function(e){return null==e?"":Nn(e)};var Zn=Gr;var Xn=function(e,r){return Vn(e)?e:qn(e,r)?[e]:Qn(Un(e))},Gn=function(e){if("string"==typeof e||Zn(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Jn=function(e,r){for(var t=0,n=(r=Xn(r,e)).length;null!=e&&t<n;)e=e[Gn(r[t++])];return t&&t==n?e:void 0};var Kn=ue((function(e,r,t){var n=null==e?void 0:Jn(e,r);return void 0===n?t:n}));const ei=(e,r,t)=>Kn(t,r)||Kn(e,r),ri=(e,r)=>{const t=r||e.defaultValue;return Kn(e.collections,t)},ti={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ni=e=>r=>{var t;const n=r.theme,i=ri(ti,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ei(i,e,n.overrides.border)}px`:`${i[e]}px`},ii={"width-005":ni("width-005"),"width-010":ni("width-010"),"width-020":ni("width-020"),"width-040":ni("width-040"),solid:(oi="solid",e=>{var r;const t=e.theme,n=ri(ti,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ei(n,oi,t.overrides.border):n[oi];return"function"==typeof i?i(e):i})};var oi;const si={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ai={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},li={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},di={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ci={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ui={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},hi={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},gi={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mi={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bi={collections:{lifesg:li,bookingsg:si,rbs:hi,mylegacy:di,ccube:ai,oneservice:ci,pa:ui,a11yplayground:gi,supportgowhere:mi},defaultValue:"lifesg"},pi={collections:{lifesg:li,bookingsg:si,rbs:hi,mylegacy:di,ccube:ai,oneservice:ci,pa:ui,a11yplayground:gi,supportgowhere:mi},defaultValue:"lifesg"},fi=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=ri(i?pi:bi,null==n?void 0:n.colourScheme),s=i?"primitiveColourDark":"primitiveColour",a=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s];return a?ei(o,e,a):o[e]},yi={"brand-10":fi("brand-10"),"brand-20":fi("brand-20"),"brand-30":fi("brand-30"),"brand-40":fi("brand-40"),"brand-50":fi("brand-50"),"brand-60":fi("brand-60"),"brand-70":fi("brand-70"),"brand-80":fi("brand-80"),"brand-90":fi("brand-90"),"brand-95":fi("brand-95"),"brand-100":fi("brand-100"),"primary-10":fi("primary-10"),"primary-20":fi("primary-20"),"primary-30":fi("primary-30"),"primary-40":fi("primary-40"),"primary-50":fi("primary-50"),"primary-60":fi("primary-60"),"primary-70":fi("primary-70"),"primary-80":fi("primary-80"),"primary-90":fi("primary-90"),"primary-95":fi("primary-95"),"primary-100":fi("primary-100"),"secondary-10":fi("secondary-10"),"secondary-20":fi("secondary-20"),"secondary-30":fi("secondary-30"),"secondary-40":fi("secondary-40"),"secondary-50":fi("secondary-50"),"secondary-60":fi("secondary-60"),"secondary-70":fi("secondary-70"),"secondary-80":fi("secondary-80"),"secondary-90":fi("secondary-90"),"secondary-95":fi("secondary-95"),"secondary-100":fi("secondary-100"),"neutral-10":fi("neutral-10"),"neutral-20":fi("neutral-20"),"neutral-30":fi("neutral-30"),"neutral-40":fi("neutral-40"),"neutral-50":fi("neutral-50"),"neutral-60":fi("neutral-60"),"neutral-70":fi("neutral-70"),"neutral-80":fi("neutral-80"),"neutral-90":fi("neutral-90"),"neutral-95":fi("neutral-95"),"neutral-100":fi("neutral-100"),"success-10":fi("success-10"),"success-20":fi("success-20"),"success-30":fi("success-30"),"success-40":fi("success-40"),"success-50":fi("success-50"),"success-60":fi("success-60"),"success-70":fi("success-70"),"success-80":fi("success-80"),"success-90":fi("success-90"),"success-95":fi("success-95"),"success-100":fi("success-100"),"warning-10":fi("warning-10"),"warning-20":fi("warning-20"),"warning-30":fi("warning-30"),"warning-40":fi("warning-40"),"warning-50":fi("warning-50"),"warning-60":fi("warning-60"),"warning-70":fi("warning-70"),"warning-80":fi("warning-80"),"warning-90":fi("warning-90"),"warning-95":fi("warning-95"),"warning-100":fi("warning-100"),"error-10":fi("error-10"),"error-20":fi("error-20"),"error-30":fi("error-30"),"error-40":fi("error-40"),"error-50":fi("error-50"),"error-60":fi("error-60"),"error-70":fi("error-70"),"error-80":fi("error-80"),"error-90":fi("error-90"),"error-95":fi("error-95"),"error-100":fi("error-100"),"info-10":fi("info-10"),"info-20":fi("info-20"),"info-30":fi("info-30"),"info-40":fi("info-40"),"info-50":fi("info-50"),"info-60":fi("info-60"),"info-70":fi("info-70"),"info-80":fi("info-80"),"info-90":fi("info-90"),"info-95":fi("info-95"),"info-100":fi("info-100"),white:fi("white"),black:fi("black"),"primary-inverse":fi("primary-inverse")},vi={text:fi("neutral-20"),"text-subtle":fi("neutral-30"),"text-subtler":fi("neutral-50"),"text-subtlest":fi("neutral-60"),"text-primary":fi("primary-50"),"text-hover":fi("primary-40"),"text-selected":fi("primary-50"),"text-selected-hover":fi("primary-40"),"text-disabled":fi("neutral-50"),"text-disabled-subtle":fi("neutral-60"),"text-disabled-subtlest":fi("neutral-80"),"text-selected-disabled":fi("neutral-20"),"text-success":fi("success-40"),"text-warning":fi("warning-40"),"text-error":fi("error-40"),"text-info":fi("info-40"),"text-inverse":fi("white"),icon:fi("neutral-50"),"icon-subtle":fi("neutral-60"),"icon-strongest":fi("neutral-20"),"icon-primary":fi("primary-50"),"icon-primary-subtle":fi("primary-60"),"icon-primary-subtlest":fi("primary-70"),"icon-hover":fi("primary-40"),"icon-selected":fi("primary-50"),"icon-selected-hover":fi("primary-40"),"icon-disabled":fi("neutral-50"),"icon-disabled-subtle":fi("neutral-60"),"icon-selected-disabled":fi("neutral-60"),"icon-success":fi("success-50"),"icon-warning":fi("warning-60"),"icon-error":fi("error-50"),"icon-error-strong":fi("error-40"),"icon-info":fi("info-50"),"icon-inverse":fi("white"),"icon-primary-inverse":fi("primary-inverse"),border:fi("neutral-90"),"border-strong":fi("neutral-70"),"border-stronger":fi("neutral-50"),"border-primary":fi("primary-50"),"border-primary-subtle":fi("primary-60"),"border-hover":fi("primary-90"),"border-hover-strong":fi("primary-60"),"border-selected":fi("primary-50"),"border-selected-subtle":fi("primary-70"),"border-selected-subtlest":fi("primary-90"),"border-selected-hover":fi("primary-40"),"border-focus":fi("primary-60"),"border-focus-strong":fi("primary-50"),"border-disabled":fi("neutral-90"),"border-selected-disabled":fi("neutral-70"),"border-success":fi("success-60"),"border-warning":fi("warning-60"),"border-error":fi("error-60"),"border-error-focus":fi("error-60"),"border-error-focus-strong":fi("error-40"),"border-error-strong":fi("error-40"),"border-info":fi("info-60"),bg:fi("white"),"bg-strong":fi("neutral-100"),"bg-stronger":fi("neutral-95"),"bg-strongest":fi("neutral-90"),"bg-hover":fi("primary-95"),"bg-hover-strong":fi("primary-90"),"bg-hover-subtle":fi("primary-100"),"bg-hover-neutral":fi("neutral-100"),"bg-hover-neutral-strong":fi("neutral-90"),"bg-selected":fi("primary-95"),"bg-selected-hover":fi("primary-90"),"bg-selected-strong":fi("primary-90"),"bg-selected-stronger":fi("primary-70"),"bg-selected-strongest":fi("primary-50"),"bg-selected-strongest-hover":fi("primary-40"),"bg-disabled":fi("neutral-95"),"bg-selected-disabled":fi("neutral-95"),"bg-selected-stronger-disabled":fi("neutral-70"),"bg-success":fi("success-100"),"bg-success-hover":fi("success-95"),"bg-success-strong":fi("success-50"),"bg-success-strong-hover":fi("success-40"),"bg-warning":fi("warning-100"),"bg-warning-hover":fi("warning-95"),"bg-warning-strong":fi("warning-50"),"bg-warning-strong-hover":fi("warning-40"),"bg-info":fi("info-100"),"bg-info-hover":fi("info-95"),"bg-info-strong":fi("info-50"),"bg-info-strong-hover":fi("info-40"),"bg-error":fi("error-100"),"bg-error-hover":fi("error-95"),"bg-error-strong":fi("error-50"),"bg-error-strong-hover":fi("error-40"),"bg-inverse":fi("neutral-20"),"bg-inverse-subtle":fi("neutral-30"),"bg-inverse-subtler":fi("neutral-50"),"bg-inverse-subtlest":fi("neutral-60"),"bg-inverse-hover":fi("neutral-40"),"bg-primary":fi("primary-50"),"bg-primary-subtle":fi("primary-60"),"bg-primary-subtler":fi("primary-95"),"bg-primary-subtlest":fi("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":fi("primary-40"),"bg-primary-subtlest-hover":fi("primary-90"),"bg-primary-subtlest-selected":fi("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:fi("primary-50"),"hyperlink-hover":fi("primary-40"),"hyperlink-visited":fi("primary-40"),"hyperlink-inverse":fi("primary-inverse"),"focus-ring":fi("primary-50"),"focus-ring-inverse":fi("white")},xi={text:fi("neutral-100"),"text-subtle":fi("neutral-80"),"text-subtler":fi("neutral-60"),"text-subtlest":fi("neutral-50"),"text-primary":fi("primary-60"),"text-hover":fi("primary-70"),"text-selected":fi("primary-60"),"text-selected-hover":fi("primary-70"),"text-disabled":fi("neutral-60"),"text-disabled-subtle":fi("neutral-50"),"text-disabled-subtlest":fi("neutral-30"),"text-selected-disabled":fi("neutral-90"),"text-success":fi("success-70"),"text-warning":fi("warning-70"),"text-error":fi("error-70"),"text-info":fi("info-70"),"text-inverse":fi("black"),icon:fi("neutral-60"),"icon-subtle":fi("neutral-50"),"icon-strongest":fi("neutral-90"),"icon-primary":fi("primary-60"),"icon-primary-subtle":fi("primary-50"),"icon-primary-subtlest":fi("primary-40"),"icon-hover":fi("primary-70"),"icon-selected":fi("primary-60"),"icon-selected-hover":fi("primary-70"),"icon-disabled":fi("neutral-60"),"icon-disabled-subtle":fi("neutral-50"),"icon-selected-disabled":fi("neutral-50"),"icon-success":fi("success-60"),"icon-warning":fi("warning-50"),"icon-error":fi("error-60"),"icon-error-strong":fi("error-70"),"icon-info":fi("info-60"),"icon-inverse":fi("black"),"icon-primary-inverse":fi("primary-inverse"),border:fi("neutral-20"),"border-strong":fi("neutral-40"),"border-stronger":fi("neutral-60"),"border-primary":fi("primary-60"),"border-primary-subtle":fi("primary-50"),"border-hover":fi("primary-20"),"border-hover-strong":fi("primary-50"),"border-selected":fi("primary-60"),"border-selected-subtle":fi("primary-40"),"border-selected-subtlest":fi("primary-20"),"border-selected-hover":fi("primary-70"),"border-focus":fi("primary-50"),"border-focus-strong":fi("primary-60"),"border-disabled":fi("neutral-20"),"border-selected-disabled":fi("neutral-40"),"border-success":fi("success-50"),"border-warning":fi("warning-50"),"border-error":fi("error-50"),"border-error-focus":fi("error-50"),"border-error-focus-strong":fi("error-70"),"border-error-strong":fi("error-70"),"border-info":fi("info-50"),bg:fi("black"),"bg-strong":fi("neutral-10"),"bg-stronger":fi("neutral-20"),"bg-strongest":fi("neutral-20"),"bg-hover":fi("primary-20"),"bg-hover-strong":fi("primary-20"),"bg-hover-subtle":fi("primary-10"),"bg-hover-neutral":fi("neutral-10"),"bg-hover-neutral-strong":fi("neutral-20"),"bg-selected":fi("primary-20"),"bg-selected-hover":fi("primary-20"),"bg-selected-strong":fi("primary-20"),"bg-selected-stronger":fi("primary-40"),"bg-selected-strongest":fi("primary-60"),"bg-selected-strongest-hover":fi("primary-70"),"bg-disabled":fi("neutral-20"),"bg-selected-disabled":fi("neutral-20"),"bg-selected-stronger-disabled":fi("neutral-40"),"bg-success":fi("success-10"),"bg-success-hover":fi("success-20"),"bg-success-strong":fi("success-60"),"bg-success-strong-hover":fi("success-70"),"bg-warning":fi("warning-10"),"bg-warning-hover":fi("warning-20"),"bg-warning-strong":fi("warning-60"),"bg-warning-strong-hover":fi("warning-70"),"bg-info":fi("info-10"),"bg-info-hover":fi("info-20"),"bg-info-strong":fi("info-60"),"bg-info-strong-hover":fi("info-70"),"bg-error":fi("error-10"),"bg-error-hover":fi("error-20"),"bg-error-strong":fi("error-60"),"bg-error-strong-hover":fi("error-70"),"bg-inverse":fi("neutral-90"),"bg-inverse-subtle":fi("neutral-80"),"bg-inverse-subtler":fi("neutral-60"),"bg-inverse-subtlest":fi("neutral-50"),"bg-inverse-hover":fi("neutral-70"),"bg-primary":fi("primary-60"),"bg-primary-subtle":fi("primary-50"),"bg-primary-subtler":fi("primary-20"),"bg-primary-subtlest":fi("primary-10"),"bg-available":"#185339","bg-primary-hover":fi("primary-70"),"bg-primary-subtlest-hover":fi("primary-20"),"bg-primary-subtlest-selected":fi("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:fi("primary-60"),"hyperlink-hover":fi("primary-70"),"hyperlink-visited":fi("primary-70"),"hyperlink-inverse":fi("primary-inverse"),"focus-ring":fi("primary-60"),"focus-ring-inverse":fi("black")},wi={text:fi("neutral-30"),"text-subtle":fi("neutral-40"),"text-subtler":fi("neutral-50"),"text-subtlest":fi("neutral-70"),"text-primary":fi("neutral-10"),"text-hover":fi("neutral-70"),"text-selected":fi("neutral-20"),"text-selected-hover":fi("neutral-10"),"text-disabled":fi("neutral-50"),"text-disabled-subtle":fi("neutral-60"),"text-disabled-subtlest":fi("neutral-80"),"text-selected-disabled":fi("neutral-40"),"text-success":fi("success-40"),"text-warning":fi("warning-40"),"text-error":fi("brand-30"),"text-info":fi("neutral-40"),"text-inverse":fi("neutral-100"),icon:fi("neutral-40"),"icon-subtle":fi("neutral-50"),"icon-strongest":fi("neutral-10"),"icon-primary":fi("neutral-10"),"icon-primary-subtle":fi("neutral-30"),"icon-primary-subtlest":fi("neutral-60"),"icon-hover":fi("neutral-70"),"icon-selected":fi("brand-20"),"icon-selected-hover":fi("brand-10"),"icon-disabled":fi("neutral-50"),"icon-disabled-subtle":fi("neutral-60"),"icon-selected-disabled":fi("neutral-40"),"icon-success":fi("success-40"),"icon-warning":fi("warning-60"),"icon-error":fi("brand-30"),"icon-error-strong":fi("brand-10"),"icon-info":fi("neutral-40"),"icon-inverse":fi("neutral-100"),"icon-primary-inverse":"#F9B371",border:fi("neutral-90"),"border-strong":fi("neutral-30"),"border-stronger":fi("neutral-20"),"border-primary":fi("neutral-40"),"border-primary-subtle":fi("neutral-60"),"border-hover":fi("neutral-80"),"border-hover-strong":fi("neutral-10"),"border-selected":fi("brand-20"),"border-selected-subtle":fi("neutral-40"),"border-selected-subtlest":fi("neutral-70"),"border-selected-hover":fi("neutral-10"),"border-focus":fi("neutral-20"),"border-focus-strong":fi("neutral-10"),"border-disabled":fi("neutral-90"),"border-selected-disabled":fi("neutral-80"),"border-success":fi("success-40"),"border-warning":fi("warning-60"),"border-error":fi("brand-30"),"border-error-focus":fi("brand-20"),"border-error-focus-strong":fi("brand-10"),"border-error-strong":fi("brand-20"),"border-info":fi("neutral-40"),bg:fi("neutral-100"),"bg-strong":fi("neutral-95"),"bg-stronger":fi("neutral-90"),"bg-strongest":fi("neutral-80"),"bg-hover":fi("brand-90"),"bg-hover-strong":fi("brand-80"),"bg-hover-subtle":fi("neutral-90"),"bg-hover-neutral":fi("neutral-90"),"bg-hover-neutral-strong":fi("neutral-90"),"bg-selected":fi("brand-100"),"bg-selected-hover":fi("brand-30"),"bg-selected-strong":fi("brand-50"),"bg-selected-stronger":fi("brand-40"),"bg-selected-strongest":fi("brand-20"),"bg-selected-strongest-hover":fi("brand-10"),"bg-disabled":fi("neutral-90"),"bg-selected-disabled":fi("neutral-90"),"bg-selected-stronger-disabled":fi("neutral-80"),"bg-success":fi("success-100"),"bg-success-hover":fi("success-95"),"bg-success-strong":fi("success-50"),"bg-success-strong-hover":fi("success-40"),"bg-warning":fi("warning-100"),"bg-warning-hover":fi("warning-95"),"bg-warning-strong":fi("warning-50"),"bg-warning-strong-hover":fi("warning-40"),"bg-info":fi("neutral-95"),"bg-info-hover":fi("info-95"),"bg-info-strong":fi("info-50"),"bg-info-strong-hover":fi("info-40"),"bg-error":fi("brand-100"),"bg-error-hover":fi("error-95"),"bg-error-strong":fi("error-50"),"bg-error-strong-hover":fi("error-40"),"bg-inverse":fi("neutral-40"),"bg-inverse-subtle":fi("neutral-60"),"bg-inverse-subtler":fi("neutral-70"),"bg-inverse-subtlest":fi("neutral-80"),"bg-inverse-hover":fi("neutral-30"),"bg-primary":fi("brand-20"),"bg-primary-subtle":fi("brand-60"),"bg-primary-subtler":fi("brand-80"),"bg-primary-subtlest":fi("brand-100"),"bg-available":fi("success-60"),"bg-primary-hover":fi("brand-10"),"bg-primary-subtlest-hover":fi("brand-80"),"bg-primary-subtlest-selected":fi("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:fi("neutral-10"),"hyperlink-hover":fi("neutral-40"),"hyperlink-visited":fi("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":fi("primary-50"),"focus-ring-inverse":fi("white")},$i={text:fi("neutral-20"),"text-subtle":fi("neutral-30"),"text-subtler":fi("neutral-50"),"text-subtlest":fi("neutral-60"),"text-primary":fi("primary-50"),"text-hover":fi("primary-40"),"text-selected":fi("primary-50"),"text-selected-hover":fi("primary-40"),"text-disabled":fi("neutral-50"),"text-disabled-subtle":fi("neutral-60"),"text-disabled-subtlest":fi("neutral-80"),"text-selected-disabled":fi("neutral-20"),"text-success":fi("success-40"),"text-warning":fi("warning-40"),"text-error":fi("error-40"),"text-info":fi("info-40"),"text-inverse":fi("white"),icon:fi("neutral-50"),"icon-subtle":fi("neutral-60"),"icon-strongest":fi("neutral-20"),"icon-primary":fi("primary-50"),"icon-primary-subtle":fi("primary-60"),"icon-primary-subtlest":fi("primary-70"),"icon-hover":fi("primary-40"),"icon-selected":fi("primary-50"),"icon-selected-hover":fi("primary-40"),"icon-disabled":fi("neutral-50"),"icon-disabled-subtle":fi("neutral-60"),"icon-selected-disabled":fi("neutral-60"),"icon-success":fi("success-50"),"icon-warning":fi("warning-60"),"icon-error":fi("error-50"),"icon-error-strong":fi("error-40"),"icon-info":fi("info-50"),"icon-inverse":fi("white"),"icon-primary-inverse":fi("primary-inverse"),border:fi("neutral-90"),"border-strong":fi("neutral-70"),"border-stronger":fi("neutral-50"),"border-primary":fi("primary-50"),"border-primary-subtle":fi("primary-60"),"border-hover":fi("primary-90"),"border-hover-strong":fi("primary-60"),"border-selected":fi("primary-50"),"border-selected-subtle":fi("primary-70"),"border-selected-subtlest":fi("primary-90"),"border-selected-hover":fi("primary-40"),"border-focus":fi("primary-60"),"border-focus-strong":fi("primary-50"),"border-disabled":fi("neutral-90"),"border-selected-disabled":fi("neutral-70"),"border-success":fi("success-60"),"border-warning":fi("warning-60"),"border-error":fi("error-60"),"border-error-focus":fi("error-60"),"border-error-focus-strong":fi("error-40"),"border-error-strong":fi("error-40"),"border-info":fi("info-60"),bg:fi("white"),"bg-strong":fi("neutral-100"),"bg-stronger":fi("neutral-95"),"bg-strongest":fi("neutral-90"),"bg-hover":fi("primary-95"),"bg-hover-strong":fi("primary-90"),"bg-hover-subtle":fi("primary-100"),"bg-hover-neutral":fi("neutral-100"),"bg-hover-neutral-strong":fi("neutral-90"),"bg-selected":fi("primary-95"),"bg-selected-hover":fi("primary-90"),"bg-selected-strong":fi("primary-90"),"bg-selected-stronger":fi("primary-70"),"bg-selected-strongest":fi("primary-50"),"bg-selected-strongest-hover":fi("primary-40"),"bg-disabled":fi("neutral-95"),"bg-selected-disabled":fi("neutral-95"),"bg-selected-stronger-disabled":fi("neutral-70"),"bg-success":fi("success-100"),"bg-success-hover":fi("success-95"),"bg-success-strong":fi("success-50"),"bg-success-strong-hover":fi("success-40"),"bg-warning":fi("warning-100"),"bg-warning-hover":fi("warning-95"),"bg-warning-strong":fi("warning-50"),"bg-warning-strong-hover":fi("warning-40"),"bg-info":fi("info-100"),"bg-info-hover":fi("info-95"),"bg-info-strong":fi("info-50"),"bg-info-strong-hover":fi("info-40"),"bg-error":fi("error-100"),"bg-error-hover":fi("error-95"),"bg-error-strong":fi("error-50"),"bg-error-strong-hover":fi("error-40"),"bg-inverse":fi("neutral-20"),"bg-inverse-subtle":fi("neutral-30"),"bg-inverse-subtler":fi("neutral-50"),"bg-inverse-subtlest":fi("neutral-60"),"bg-inverse-hover":fi("neutral-40"),"bg-primary":fi("primary-50"),"bg-primary-subtle":fi("primary-60"),"bg-primary-subtler":fi("primary-95"),"bg-primary-subtlest":fi("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":fi("primary-40"),"bg-primary-subtlest-hover":fi("primary-90"),"bg-primary-subtlest-selected":fi("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:fi("primary-50"),"hyperlink-hover":fi("primary-40"),"hyperlink-visited":fi("primary-40"),"hyperlink-inverse":fi("primary-inverse"),"focus-ring":fi("primary-50"),"focus-ring-inverse":fi("white")},Fi={text:fi("neutral-100"),"text-subtle":fi("neutral-80"),"text-subtler":fi("neutral-60"),"text-subtlest":fi("neutral-50"),"text-primary":fi("primary-60"),"text-hover":fi("primary-70"),"text-selected":fi("primary-60"),"text-selected-hover":fi("primary-70"),"text-disabled":fi("neutral-60"),"text-disabled-subtle":fi("neutral-50"),"text-disabled-subtlest":fi("neutral-30"),"text-selected-disabled":fi("neutral-90"),"text-success":fi("success-70"),"text-warning":fi("warning-70"),"text-error":fi("error-70"),"text-info":fi("info-70"),"text-inverse":fi("black"),icon:fi("neutral-60"),"icon-subtle":fi("neutral-50"),"icon-strongest":fi("neutral-90"),"icon-primary":fi("primary-60"),"icon-primary-subtle":fi("primary-50"),"icon-primary-subtlest":fi("primary-40"),"icon-hover":fi("primary-70"),"icon-selected":fi("primary-60"),"icon-selected-hover":fi("primary-70"),"icon-disabled":fi("neutral-60"),"icon-disabled-subtle":fi("neutral-50"),"icon-selected-disabled":fi("neutral-50"),"icon-success":fi("success-60"),"icon-warning":fi("warning-50"),"icon-error":fi("error-60"),"icon-error-strong":fi("error-70"),"icon-info":fi("info-60"),"icon-inverse":fi("black"),"icon-primary-inverse":fi("primary-inverse"),border:fi("neutral-20"),"border-strong":fi("neutral-40"),"border-stronger":fi("neutral-60"),"border-primary":fi("primary-60"),"border-primary-subtle":fi("primary-50"),"border-hover":fi("primary-20"),"border-hover-strong":fi("primary-50"),"border-selected":fi("primary-60"),"border-selected-subtle":fi("primary-40"),"border-selected-subtlest":fi("primary-20"),"border-selected-hover":fi("primary-70"),"border-focus":fi("primary-50"),"border-focus-strong":fi("primary-60"),"border-disabled":fi("neutral-20"),"border-selected-disabled":fi("neutral-40"),"border-success":fi("success-50"),"border-warning":fi("warning-50"),"border-error":fi("error-50"),"border-error-focus":fi("error-50"),"border-error-focus-strong":fi("error-70"),"border-error-strong":fi("error-70"),"border-info":fi("info-50"),bg:fi("black"),"bg-strong":fi("neutral-10"),"bg-stronger":fi("neutral-20"),"bg-strongest":fi("neutral-20"),"bg-hover":fi("primary-20"),"bg-hover-strong":fi("primary-20"),"bg-hover-subtle":fi("primary-10"),"bg-hover-neutral":fi("neutral-10"),"bg-hover-neutral-strong":fi("neutral-20"),"bg-selected":fi("primary-20"),"bg-selected-hover":fi("primary-20"),"bg-selected-strong":fi("primary-20"),"bg-selected-stronger":fi("primary-40"),"bg-selected-strongest":fi("primary-60"),"bg-selected-strongest-hover":fi("primary-70"),"bg-disabled":fi("neutral-20"),"bg-selected-disabled":fi("neutral-20"),"bg-selected-stronger-disabled":fi("neutral-40"),"bg-success":fi("success-10"),"bg-success-hover":fi("success-20"),"bg-success-strong":fi("success-60"),"bg-success-strong-hover":fi("success-70"),"bg-warning":fi("warning-10"),"bg-warning-hover":fi("warning-20"),"bg-warning-strong":fi("warning-60"),"bg-warning-strong-hover":fi("warning-70"),"bg-info":fi("info-10"),"bg-info-hover":fi("info-20"),"bg-info-strong":fi("info-60"),"bg-info-strong-hover":fi("info-70"),"bg-error":fi("error-10"),"bg-error-hover":fi("error-20"),"bg-error-strong":fi("error-60"),"bg-error-strong-hover":fi("error-70"),"bg-inverse":fi("neutral-90"),"bg-inverse-subtle":fi("neutral-80"),"bg-inverse-subtler":fi("neutral-60"),"bg-inverse-subtlest":fi("neutral-50"),"bg-inverse-hover":fi("neutral-70"),"bg-primary":fi("primary-60"),"bg-primary-subtle":fi("primary-50"),"bg-primary-subtler":fi("primary-20"),"bg-primary-subtlest":fi("primary-10"),"bg-available":"#185339","bg-primary-hover":fi("primary-70"),"bg-primary-subtlest-hover":fi("primary-20"),"bg-primary-subtlest-selected":fi("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:fi("primary-60"),"hyperlink-hover":fi("primary-70"),"hyperlink-visited":fi("primary-70"),"hyperlink-inverse":fi("primary-inverse"),"focus-ring":fi("primary-60"),"focus-ring-inverse":fi("black")},Ci={collections:{lifesg:vi,bookingsg:vi,rbs:vi,mylegacy:vi,ccube:vi,oneservice:vi,pa:wi,a11yplayground:$i,supportgowhere:vi},defaultValue:"lifesg"},Ei={collections:{lifesg:xi,bookingsg:xi,rbs:xi,mylegacy:xi,ccube:xi,oneservice:xi,pa:xi,a11yplayground:Fi,supportgowhere:xi},defaultValue:"lifesg"},Di=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=ri(i?Ei:Ci,null==n?void 0:n.colourScheme),s=i?"semanticColourDark":"semanticColour",a=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s],l=a?ei(o,e,a):o[e];return"function"==typeof l?l(r):l},ki={text:Di("text"),"text-subtle":Di("text-subtle"),"text-subtler":Di("text-subtler"),"text-subtlest":Di("text-subtlest"),"text-primary":Di("text-primary"),"text-hover":Di("text-hover"),"text-selected":Di("text-selected"),"text-selected-hover":Di("text-selected-hover"),"text-disabled":Di("text-disabled"),"text-disabled-subtle":Di("text-disabled-subtle"),"text-disabled-subtlest":Di("text-disabled-subtlest"),"text-selected-disabled":Di("text-selected-disabled"),"text-success":Di("text-success"),"text-warning":Di("text-warning"),"text-error":Di("text-error"),"text-info":Di("text-info"),"text-inverse":Di("text-inverse"),icon:Di("icon"),"icon-subtle":Di("icon-subtle"),"icon-strongest":Di("icon-strongest"),"icon-primary":Di("icon-primary"),"icon-primary-subtle":Di("icon-primary-subtle"),"icon-primary-subtlest":Di("icon-primary-subtlest"),"icon-hover":Di("icon-hover"),"icon-selected":Di("icon-selected"),"icon-selected-hover":Di("icon-selected-hover"),"icon-disabled":Di("icon-disabled"),"icon-disabled-subtle":Di("icon-disabled-subtle"),"icon-selected-disabled":Di("icon-selected-disabled"),"icon-success":Di("icon-success"),"icon-warning":Di("icon-warning"),"icon-error":Di("icon-error"),"icon-error-strong":Di("icon-error-strong"),"icon-info":Di("icon-info"),"icon-inverse":Di("icon-inverse"),"icon-primary-inverse":Di("icon-primary-inverse"),border:Di("border"),"border-strong":Di("border-strong"),"border-stronger":Di("border-stronger"),"border-primary":Di("border-primary"),"border-primary-subtle":Di("border-primary-subtle"),"border-hover":Di("border-hover"),"border-hover-strong":Di("border-hover-strong"),"border-selected":Di("border-selected"),"border-selected-subtle":Di("border-selected-subtle"),"border-selected-subtlest":Di("border-selected-subtlest"),"border-selected-hover":Di("border-selected-hover"),"border-focus":Di("border-focus"),"border-focus-strong":Di("border-focus-strong"),"border-disabled":Di("border-disabled"),"border-selected-disabled":Di("border-selected-disabled"),"border-success":Di("border-success"),"border-warning":Di("border-warning"),"border-error":Di("border-error"),"border-error-focus":Di("border-error-focus"),"border-error-focus-strong":Di("border-error-focus-strong"),"border-error-strong":Di("border-error-strong"),"border-info":Di("border-info"),bg:Di("bg"),"bg-strong":Di("bg-strong"),"bg-stronger":Di("bg-stronger"),"bg-strongest":Di("bg-strongest"),"bg-hover":Di("bg-hover"),"bg-hover-strong":Di("bg-hover-strong"),"bg-hover-subtle":Di("bg-hover-subtle"),"bg-hover-neutral":Di("bg-hover-neutral"),"bg-hover-neutral-strong":Di("bg-hover-neutral-strong"),"bg-selected":Di("bg-selected"),"bg-selected-hover":Di("bg-selected-hover"),"bg-selected-strong":Di("bg-selected-strong"),"bg-selected-stronger":Di("bg-selected-stronger"),"bg-selected-strongest":Di("bg-selected-strongest"),"bg-selected-strongest-hover":Di("bg-selected-strongest-hover"),"bg-disabled":Di("bg-disabled"),"bg-selected-disabled":Di("bg-selected-disabled"),"bg-selected-stronger-disabled":Di("bg-selected-stronger-disabled"),"bg-success":Di("bg-success"),"bg-success-hover":Di("bg-success-hover"),"bg-success-strong":Di("bg-success-strong"),"bg-success-strong-hover":Di("bg-success-strong-hover"),"bg-warning":Di("bg-warning"),"bg-warning-hover":Di("bg-warning-hover"),"bg-warning-strong":Di("bg-warning-strong"),"bg-warning-strong-hover":Di("bg-warning-strong-hover"),"bg-info":Di("bg-info"),"bg-info-hover":Di("bg-info-hover"),"bg-info-strong":Di("bg-info-strong"),"bg-info-strong-hover":Di("bg-info-strong-hover"),"bg-error":Di("bg-error"),"bg-error-hover":Di("bg-error-hover"),"bg-error-strong":Di("bg-error-strong"),"bg-error-strong-hover":Di("bg-error-strong-hover"),"bg-inverse":Di("bg-inverse"),"bg-inverse-subtle":Di("bg-inverse-subtle"),"bg-inverse-subtler":Di("bg-inverse-subtler"),"bg-inverse-subtlest":Di("bg-inverse-subtlest"),"bg-inverse-hover":Di("bg-inverse-hover"),"bg-primary":Di("bg-primary"),"bg-primary-subtle":Di("bg-primary-subtle"),"bg-primary-subtler":Di("bg-primary-subtler"),"bg-primary-subtlest":Di("bg-primary-subtlest"),"bg-available":Di("bg-available"),"bg-primary-hover":Di("bg-primary-hover"),"bg-primary-subtlest-hover":Di("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Di("bg-primary-subtlest-selected"),"overlay-strong":Di("overlay-strong"),"overlay-subtle":Di("overlay-subtle"),hyperlink:Di("hyperlink"),"hyperlink-hover":Di("hyperlink-hover"),"hyperlink-visited":Di("hyperlink-visited"),"hyperlink-inverse":Di("hyperlink-inverse"),"focus-ring":Di("focus-ring"),"focus-ring-inverse":Di("focus-ring-inverse")},Si={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ii["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:ki.border(r),u=ii.solid;return D`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ii["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:ki.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return D`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Oi=e=>1===e.length&&"theme"in e[0],_i=e=>(...r)=>t=>{const n=Oi(r)?[]:r,i=Oi(r)?r[0]:t,o=i.theme;return(0,ri(Si,null==o?void 0:o.borderScheme)[e])(...n)(i)},Ai={solid:_i("solid"),"dashed-default":_i("dashed-default")},Bi={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1024,"xl-min":1025,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Mi=e=>r=>{var t;const n=r.theme,i=ri(Bi,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ei(i,e,n.overrides.breakpoint):i[e],o},zi={"xxs-min":Mi("xxs-min"),"xxs-max":Mi("xxs-max"),"xs-min":Mi("xs-min"),"xs-max":Mi("xs-max"),"sm-min":Mi("sm-min"),"sm-max":Mi("sm-max"),"md-min":Mi("md-min"),"md-max":Mi("md-max"),"lg-min":Mi("lg-min"),"lg-max":Mi("lg-max"),"xl-min":Mi("xl-min"),"xl-max":Mi("xl-max"),"xxl-min":Mi("xxl-min"),"xxs-column":Mi("xxs-column"),"xs-column":Mi("xs-column"),"sm-column":Mi("sm-column"),"md-column":Mi("md-column"),"lg-column":Mi("lg-column"),"xl-column":Mi("xl-column"),"xxl-column":Mi("xxl-column"),"xxs-gutter":Mi("xxs-gutter"),"xs-gutter":Mi("xs-gutter"),"sm-gutter":Mi("sm-gutter"),"md-gutter":Mi("md-gutter"),"lg-gutter":Mi("lg-gutter"),"xl-gutter":Mi("xl-gutter"),"xxl-gutter":Mi("xxl-gutter"),"xxs-margin":Mi("xxs-margin"),"xs-margin":Mi("xs-margin"),"sm-margin":Mi("sm-margin"),"md-margin":Mi("md-margin"),"lg-margin":Mi("lg-margin"),"xl-margin":Mi("xl-margin"),"xxl-margin":Mi("xxl-margin")},ji=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=zi["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Ti={MaxWidth:ji("max-width"),MinWidth:ji("min-width")},Ii={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Pi=e=>r=>{var t;const n=r.theme,i=ri(Ii,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ei(i,e,n.overrides.fontSpec):i[e]},Ri={"heading-size-xxl":Pi("heading-size-xxl"),"heading-size-xl":Pi("heading-size-xl"),"heading-size-lg":Pi("heading-size-lg"),"heading-size-md":Pi("heading-size-md"),"heading-size-sm":Pi("heading-size-sm"),"heading-size-xs":Pi("heading-size-xs"),"heading-lh-xxl":Pi("heading-lh-xxl"),"heading-lh-xl":Pi("heading-lh-xl"),"heading-lh-lg":Pi("heading-lh-lg"),"heading-lh-md":Pi("heading-lh-md"),"heading-lh-sm":Pi("heading-lh-sm"),"heading-lh-xs":Pi("heading-lh-xs"),"heading-ls-xxl":Pi("heading-ls-xxl"),"heading-ls-xl":Pi("heading-ls-xl"),"heading-ls-lg":Pi("heading-ls-lg"),"heading-ls-md":Pi("heading-ls-md"),"heading-ls-sm":Pi("heading-ls-sm"),"heading-ls-xs":Pi("heading-ls-xs"),"weight-light":Pi("weight-light"),"weight-regular":Pi("weight-regular"),"weight-semibold":Pi("weight-semibold"),"weight-bold":Pi("weight-bold"),"font-family":Pi("font-family"),"body-size-baseline":Pi("body-size-baseline"),"body-size-md":Pi("body-size-md"),"body-size-sm":Pi("body-size-sm"),"body-size-xs":Pi("body-size-xs"),"body-lh-baseline":Pi("body-lh-baseline"),"body-lh-md":Pi("body-lh-md"),"body-lh-sm":Pi("body-lh-sm"),"body-lh-xs":Pi("body-lh-xs"),"body-ls-baseline":Pi("body-ls-baseline"),"body-ls-md":Pi("body-ls-md"),"body-ls-sm":Pi("body-ls-sm"),"body-ls-xs":Pi("body-ls-xs"),"form-label-size":Pi("form-label-size"),"form-description-size":Pi("form-description-size"),"form-label-lh":Pi("form-label-lh"),"form-description-lh":Pi("form-description-lh"),"form-label-ls":Pi("form-label-ls"),"form-description-ls":Pi("form-description-ls")},Li=(e,r,t,n,i)=>{const{disableLigatures:o}=i||{};return D`
        font-family: ${Pi("font-family")};
        font-size: ${Pi(e)};
        font-weight: ${Pi(r)};
        line-height: ${Pi(t)};
        letter-spacing: ${Pi(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Wi=(e={})=>({"heading-xxl-light":Li("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Li("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Li("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Li("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Li("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Li("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Li("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Li("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Li("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Li("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Li("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Li("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Li("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Li("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Li("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Li("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Li("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Li("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Li("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Li("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Li("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Li("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Li("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Li("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Li("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Li("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Li("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Li("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Li("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Li("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Li("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Li("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Li("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Li("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Li("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Li("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Li("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Li("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Li("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Li("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Li("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Li("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Yi=Wi({disableLigatures:!0}),Hi={collections:{default:Wi(),bookingsg:Yi,pa:Wi({disableLigatures:!0}),a11yplayground:Wi({disableLigatures:!0}),supportgowhere:Wi({disableLigatures:!0})},defaultValue:"default"},Ni=e=>r=>{var t;const n=r.theme,i=ri(Hi,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ei(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},Vi={"heading-xxl-light":Ni("heading-xxl-light"),"heading-xxl-regular":Ni("heading-xxl-regular"),"heading-xxl-semibold":Ni("heading-xxl-semibold"),"heading-xxl-bold":Ni("heading-xxl-bold"),"heading-xl-light":Ni("heading-xl-light"),"heading-xl-regular":Ni("heading-xl-regular"),"heading-xl-semibold":Ni("heading-xl-semibold"),"heading-xl-bold":Ni("heading-xl-bold"),"heading-lg-light":Ni("heading-lg-light"),"heading-lg-regular":Ni("heading-lg-regular"),"heading-lg-semibold":Ni("heading-lg-semibold"),"heading-lg-bold":Ni("heading-lg-bold"),"heading-md-light":Ni("heading-md-light"),"heading-md-regular":Ni("heading-md-regular"),"heading-md-semibold":Ni("heading-md-semibold"),"heading-md-bold":Ni("heading-md-bold"),"heading-sm-light":Ni("heading-sm-light"),"heading-sm-regular":Ni("heading-sm-regular"),"heading-sm-semibold":Ni("heading-sm-semibold"),"heading-sm-bold":Ni("heading-sm-bold"),"heading-xs-light":Ni("heading-xs-light"),"heading-xs-regular":Ni("heading-xs-regular"),"heading-xs-semibold":Ni("heading-xs-semibold"),"heading-xs-bold":Ni("heading-xs-bold"),"body-baseline-light":Ni("body-baseline-light"),"body-baseline-regular":Ni("body-baseline-regular"),"body-baseline-semibold":Ni("body-baseline-semibold"),"body-baseline-bold":Ni("body-baseline-bold"),"body-md-light":Ni("body-md-light"),"body-md-regular":Ni("body-md-regular"),"body-md-semibold":Ni("body-md-semibold"),"body-md-bold":Ni("body-md-bold"),"body-sm-light":Ni("body-sm-light"),"body-sm-regular":Ni("body-sm-regular"),"body-sm-semibold":Ni("body-sm-semibold"),"body-sm-bold":Ni("body-sm-bold"),"body-xs-light":Ni("body-xs-light"),"body-xs-regular":Ni("body-xs-regular"),"body-xs-semibold":Ni("body-xs-semibold"),"body-xs-bold":Ni("body-xs-bold"),"form-label":Ni("form-label"),"form-description":Ni("form-description")},qi={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Qi=e=>r=>{var t;const n=r.theme,i=ri(qi,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ei(i,e,n.overrides.motion):i[e]},Ui={"duration-150":Qi("duration-150"),"duration-250":Qi("duration-250"),"duration-350":Qi("duration-350"),"duration-500":Qi("duration-500"),"duration-800":Qi("duration-800"),"duration-1000":Qi("duration-1000"),"ease-default":Qi("ease-default"),"ease-standard":Qi("ease-standard"),"ease-entrance":Qi("ease-entrance"),"ease-exit":Qi("ease-exit")},Zi={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Xi=e=>r=>{var t;const n=r.theme,i=ri(Zi,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ei(i,e,n.overrides.radius)}px`:`${i[e]}px`},Gi={none:Xi("none"),xs:Xi("xs"),sm:Xi("sm"),md:Xi("md"),lg:Xi("lg"),full:Xi("full")},Ji={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ki=e=>r=>{var t;const n=r.theme,i=ri(Ji,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ei(i,e,n.overrides.spacing)}px`:`${i[e]}px`},eo={"spacing-0":Ki("spacing-0"),"spacing-4":Ki("spacing-4"),"spacing-8":Ki("spacing-8"),"spacing-12":Ki("spacing-12"),"spacing-16":Ki("spacing-16"),"spacing-20":Ki("spacing-20"),"spacing-24":Ki("spacing-24"),"spacing-32":Ki("spacing-32"),"spacing-40":Ki("spacing-40"),"spacing-48":Ki("spacing-48"),"spacing-64":Ki("spacing-64"),"spacing-72":Ki("spacing-72"),"layout-xs":Ki("layout-xs"),"layout-sm":Ki("layout-sm"),"layout-md":Ki("layout-md"),"layout-lg":Ki("layout-lg"),"layout-xl":Ki("layout-xl"),"layout-xxl":Ki("layout-xxl"),"layout-xxxl":Ki("layout-xxxl")},ro=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),to=Object.assign(Object.assign({},ki),{Primitive:yi}),no=Object.assign(Object.assign({},Vi),{Spec:Ri}),io=Ui,oo=Object.assign(Object.assign({},ii),{Util:Ai}),so=eo,ao=Gi,lo=zi,co=Ti,uo={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},ho={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},go={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},mo={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},bo={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},po={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},fo={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},yo={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},vo={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},uo),{light:ro(uo,"light"),dark:ro(uo,"dark")}),Object.assign(Object.assign({},ho),{light:ro(ho,"light"),dark:ro(ho,"dark")}),Object.assign(Object.assign({},go),{light:ro(go,"light"),dark:ro(go,"dark")}),Object.assign(Object.assign({},mo),{light:ro(mo,"light"),dark:ro(mo,"dark")}),Object.assign(Object.assign({},bo),{light:ro(bo,"light"),dark:ro(bo,"dark")}),Object.assign(Object.assign({},po),{light:ro(po,"light"),dark:ro(po,"dark")}),Object.assign(Object.assign({},fo),{light:ro(fo,"light"),dark:ro(fo,"dark")}),Object.assign(Object.assign({},yo),{light:ro(yo,"light"),dark:ro(yo,"dark")}),Object.assign(Object.assign({},vo),{light:ro(vo,"light"),dark:ro(vo,"dark")});const xo=E.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return D`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,wo=E.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?to["overlay-subtle"]:to["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=D`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=D`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=D`
                transition: none;
            `),r}}
`;var $o;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}($o||($o={}));const Fo=({show:r=!1,rootId:t,onOverlayClick:n,children:i,backgroundOpacity:o,backgroundBlur:s=!0,disableTransition:a=!1,enableOverlayClick:l=!1,zIndex:d,id:c})=>{const[m,b]=g(null),[p,f]=g(),[v]=g((()=>Te.generate())),x=A(),w=h(),$=h(null),F=i&&u.cloneElement(i,{ref:$}),C=c?`lifesg-ds-overlay-root-${c}`:"lifesg-ds-overlay-root",E=null!=d?d:p?99999:99998;(e=>{const r=O();y((()=>{if(!r)return;const t={zIndex:e};r.events.emit($o.Change,t)}),[r,e]),y((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit($o.Change,t)};return null==r||r.events.on($o.Ready,t),()=>null==r?void 0:r.events.off($o.Ready,t)}),[r,e])})(E),y((()=>(_(),b(k()),()=>{T(),z().length<1&&M("remove")})),[]),y((()=>{if(r){const e=S();D(e),j();const r=setTimeout((()=>{M("add")}),200);return()=>clearTimeout(r)}{T();const e=setTimeout((()=>{z().length<1&&M("remove")}),200);return()=>clearTimeout(e)}}),[r]);const D=e=>{w.current=e,f(e)},k=()=>document&&t?document.getElementById(t):document?document.body:null,S=()=>z().length>0,_=()=>{if(!document.getElementById(Eo)){const e=document.createElement("style");e.id=Eo;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${Do} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Do}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},M=e=>{const r=document.body.classList.contains(Do);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Do):document.body.classList.add(Do)},z=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},j=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},T=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},I=e=>{var r;const t=null===(r=$.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&l&&(e.preventDefault(),n())};return m?V.createPortal(e(xo,{id:C,"data-testid":C,$show:r,$zIndex:E,children:i&&e(B,{id:x,children:e(wo,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:s,$disableTransition:a,onClick:I,children:F})})}),m):null},Co=r=>e(_,{children:e(Fo,Object.assign({},r))}),Eo="lifesg-ds-overlay-stylesheet",Do="lifesg-ds-overlay-open",ko=u.createContext({mode:"default",rootNode:{current:null}}),So=E.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Oo=k`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,_o=E.div`
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
    animation: ${Oo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ao=E(_o)`
    animation-delay: -0.45s;
`,Bo=E(_o)`
    animation-delay: -0.3s;
`,Mo=E(_o)`
    animation-delay: -0.15s;
`,zo=({color:t,className:n,size:i})=>r(So,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[e(_o,{id:"inner1"}),e(Ao,{id:"inner2"}),e(Bo,{id:"inner3"}),e(Mo,{id:"inner4"})]}),jo={Button:{"button-radius":Gi.md,"button-default-colour-bg":ki["bg-primary"],"button-default-colour-bg-hover":ki["bg-primary-hover"],"button-default-colour-text":ki["text-inverse"],"button-secondary-colour-border":ki["border-primary"],"button-secondary-colour-text":ki["text-primary"],"button-light-colour-text":ki["text-primary"],"button-link-colour-text":ki["text-primary"]}},To={collections:{default:{Button:{"button-radius":Gi.sm,"button-default-colour-bg":ki["bg-primary"],"button-default-colour-bg-hover":ki["bg-primary-hover"],"button-default-colour-text":ki["text-inverse"],"button-secondary-colour-border":ki["border-primary"],"button-secondary-colour-text":ki["text-primary"],"button-light-colour-text":ki["text-primary"],"button-link-colour-text":ki["text-primary"]}},pa:{Button:{"button-radius":Gi.full,"button-default-colour-bg":ki["bg-primary"],"button-default-colour-bg-hover":ki["bg-primary-hover"],"button-default-colour-text":ki["text-inverse"],"button-secondary-colour-border":ki["border-primary"],"button-secondary-colour-text":ki["text-primary"],"button-light-colour-text":ki["text-primary"],"button-link-colour-text":ki["text-primary"]}},a11yplayground:jo},defaultValue:"default"},Io=(e,r)=>t=>{var n,i;const o=t.theme,s=ri(To,null==o?void 0:o.componentScheme);return Po((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||s[e][r],t)},Po=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Ro=Io("Button","button-radius"),Lo=Io("Button","button-default-colour-bg"),Wo=Io("Button","button-default-colour-bg-hover"),Yo=Io("Button","button-default-colour-text"),Ho=Io("Button","button-secondary-colour-border"),No=Io("Button","button-secondary-colour-text"),Vo=Io("Button","button-light-colour-text"),qo=Io("Button","button-link-colour-text"),Qo=E.button`
    padding: ${so["spacing-8"]} ${so["spacing-16"]};
    min-width: 4rem;
    border: ${oo["width-010"]} ${oo.solid} transparent;
    transition: all ${io["duration-250"]} ${io["ease-default"]};
    border-radius: ${Ro};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return D`
                    background-color: ${to.bg};
                    border-color: ${e.$buttonIsDanger?to["border-error-strong"]:Ho};

                    color: ${e.$buttonIsDanger?to["text-error"]:No};

                    &:hover,
                    &:active {
                        background-color: ${to["bg-hover-neutral"]};
                    }
                `;case"light":return D`
                    background-color: ${to.bg};
                    border-color: ${to.border};

                    color: ${e.$buttonIsDanger?to["text-error"]:Vo};

                    &:hover,
                    &:active {
                        background-color: ${to["bg-hover-neutral"]};
                    }
                `;case"link":return D`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?to["text-error"]:qo};
                    &:hover,
                    &:active {
                        background-color: ${to["bg-hover-neutral"]};
                    }
                `;case"disabled":return D`
                    background-color: ${to["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${to["text-disabled"]};
                `;default:return D`
                    background-color: ${e.$buttonIsDanger?to["bg-error-strong"]:Lo};};

                    ${co.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Yo}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?to["bg-error-strong-hover"]:Wo}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return D`
                    height: 2.5rem;
                    ${no["body-md-semibold"]}

                    ${co.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return D`
                    height: 4rem;
                    ${no["heading-md-semibold"]}

                    ${co.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return D`
                    height: 3rem;
                    ${no["heading-xs-semibold"]}

                    ${co.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Uo=E(zo)`
    margin-right: 0.5rem;
`,Zo=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=de(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(Qo,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":s,onClick:o?void 0:c},h,u,{children:[s&&e(Uo,{}),e("span",{children:i})]}))};Zo.displayName="Button.Default";const Xo=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=de(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(Qo,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":s,onClick:o?void 0:c},h,u,{children:[s&&e(Uo,{}),e("span",{children:i})]}))};Xo.displayName="Button.Small";const Go=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=de(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(Qo,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":s,onClick:o?void 0:c},h,u,{children:[s&&e(Uo,{}),e("span",{children:i})]}))};Go.displayName="Button.Large";const Jo={Default:u.forwardRef(Zo),Small:u.forwardRef(Xo),Large:u.forwardRef(Go)},Ko=k`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,es=D`
    animation: ${io["duration-150"]} ${io["ease-default"]} ${Ko};
    width: 100%;
    height: 100%;
    transition: color ${io["duration-150"]} ${io["ease-default"]};
`,rs=E(n)`
    ${es}
    color: ${to["icon-primary-subtlest"]};
`,ts=E(i)`
    ${es}
    color: ${to["icon-disabled-subtle"]};
`,ns=E(o)`
    ${es}
    color: ${e=>e.$disabled?to["icon-disabled-subtle"](e):to["icon-selected"](e)};
`,is=E(s)`
    ${es}
    color: ${e=>e.$disabled?to["icon-disabled-subtle"](e):to["icon-selected"](e)};
`,os=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>D`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}

    // Show custom focus ring when input is focused
    input:focus-visible + svg {
        outline: 2px solid ${to["focus-ring"]};
        outline-offset: 0px;
        border-radius: 4px;
    }
`,ss=E.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${rs},
        &:hover
        + ${ns},
        &:hover
        + ${is} {
        color: ${e=>!e.disabled&&to["icon-hover"](e)};
    }
`,as=e=>{const{textSize:r}=e||{};return D`
        // Text styling
        ${r&&no[`${r}-regular`]}

        strong {
            font-weight: ${no.Spec["weight-semibold"]};
            ${r&&no[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${no.Spec["weight-semibold"]};
            ${r&&no[`${r}-semibold`]}
            color: ${to.hyperlink};
            text-decoration: none;

            svg {
                color: ${to["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${to["hyperlink-hover"]};

                svg {
                    color: ${to["icon-hover"]};
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
    `},ls=(e,r,t=!1)=>D`
        ${no[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,ds=e=>{if(e)return D`
            ${r=e,D`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},cs=(e,r)=>D`
    ${ls(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?D`
            display: block;
            ${ds(t)}
        `:e?D`
            display: inline;
        `:D`
            display: block;
            ${ds(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${to.text};
`;var us;!function(t){const n=(e,r,t)=>{const n=E(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>cs(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,r)=>{const t=E.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>cs(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=E.a`
            ${e=>D`
                ${ls(t,e.weight||"regular")}
                color: ${to.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${to["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,s=de(t,["external","children"]);return r(i,Object.assign({},s,{children:[o,n&&e(hs,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(us||(us={}));const hs=E(re)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,gs=E.div`
    padding: ${so["spacing-8"]} ${so["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=to["bg-error"](e),t=to["border-error"](e);break;case"success":r=to["bg-success"](e),t=to["border-success"](e);break;case"warning":default:r=to["bg-warning"](e),t=to["border-warning"](e);break;case"info":r=to["bg-info"](e),t=to["border-info"](e);break;case"description":r=to["bg-strong"](e),t=to["border-strong"](e)}return D`
            background: ${r};
            border-left: ${oo["width-020"]} ${oo.solid}
                ${t};
        `}}

    color: ${to.text};
    ${e=>"small"===e.$sizeType?as({textSize:"body-sm"}):as({textSize:"body-md"})}
`,ms=E.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${so["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=to["icon-error"](e);break;case"success":r=to["icon-success"](e);break;case"warning":default:r=to["icon-warning"](e);break;case"info":r=to["icon-info"](e);break;case"description":r=to["icon-subtle"](e)}return D`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,bs=E(us.LinkSM)`
    ${e=>"small"===e.$sizeType?D`
                ${no["body-sm-semibold"]}
                margin-top: ${so["spacing-4"]};
            `:D`
                ${no["body-md-semibold"]}
                margin-top: ${so["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${so["spacing-4"]};
    }
`,ps=E.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,fs=E.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return D`
                margin-bottom: ${so["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,ys=E.button`
    ${e=>"small"===e.$sizeType?D`
                ${no["body-sm-semibold"]}
            `:D`
                ${no["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${so["spacing-4"]};
    margin-top: ${so["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${to["text-primary"]};
`,vs=E(a)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${io["duration-350"]} ${io["ease-standard"]};
`,xs=E.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?D`
                    color: ${to["icon-selected-disabled"]};
                `:D`
                    color: ${to["icon-disabled-subtle"]};
                `:e.$active?D`
                color: ${to["icon-selected"]};
            `:D`
            color: ${to["icon-subtle"]};
        `};
`,ws=D`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${no.Spec["weight-regular"]};
        ${e=>e.$size&&no[`${e.$size}-regular`]}
        color: ${to.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,$s=E.ol`
    ${ws}

    margin-left: 3rem;

    ${co.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:r}=e,t=e.$counterType||"decimal",n=e.$counterSeparator||")";return D`
            li:before {
                content: counter(list, ${t}) "${n}";
                counter-increment: ${r?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:r,start:t}=e;if(t){return D`
                counter-reset: list ${r?t+1:t-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,Fs=E.ul`
    ${ws}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Cs=r=>{var{size:t,bulletType:n,bottomMargin:i,children:o}=r,s=de(r,["size","bulletType","bottomMargin","children"]);return e(Fs,Object.assign({$size:t,$bulletType:n,$bottomMargin:i},s,{children:o}))};Cs.displayName="TextList.Ul";const Es=r=>{var{size:t,counterType:n,counterSeparator:i,bottomMargin:o,children:s}=r,a=de(r,["size","counterType","counterSeparator","bottomMargin","children"]);return e($s,Object.assign({$size:t,$counterType:n,$counterSeparator:i,$bottomMargin:o},a,{children:s}))};Es.displayName="TextList.Ol";const Ds=Cs,ks=E.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${ao.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${to.bg};

    ${e=>{if(!e.$indicator)return D`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return D`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?D`
                            border-color: ${to["border-error"]};
                        `:D`
                            border-color: ${to["border-error"]};

                            &:has(${Bs}:hover) {
                                background: ${to["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?D`
                            border: none;
                            background: ${to["bg-selected-disabled"]};
                        `:D`
                            border: none;
                        `:e.$selected?D`
                        border: none;
                        background: ${to["bg-selected"]};

                        &:has(${Bs}:hover) {
                            background: ${to["bg-selected-hover"]};

                            & ${Os} {
                                color: ${to["text-selected-hover"]};
                            }

                            & ${Ws} {
                                color: ${to["icon-selected-hover"]};
                            }
                        }
                    `:D`
                    border: none;

                    &:has(${Bs}:hover) {
                        background: ${to["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?D`
                            border-color: ${to["border-error"]};
                        `:D`
                            border-color: ${to["border-error"]};

                            &:has(${Bs}:hover) {
                                background: ${to["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?D`
                            border-color: ${to["border-selected-disabled"]};
                            background: ${to["bg-selected-disabled"]};
                        `:D`
                            border-color: ${to["border-disabled"]};
                            background: ${to["bg-disabled"]};
                        `:e.$selected?D`
                        border-color: ${to["border-selected"]};
                        background: ${to["bg-selected"]};

                        &:has(${Bs}:hover) {
                            background: ${to["bg-selected-hover"]};

                            & ${Os} {
                                color: ${to["text-selected-hover"]};
                            }

                            & ${Ws} {
                                color: ${to["icon-selected-hover"]};
                            }
                        }
                    `:D`
                    border-color: ${to.border};

                    &:has(${Bs}:hover) {
                        background: ${to["bg-hover-subtle"]};
                    }
                `}
`,Ss=E.input`
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
`,Os=E.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?D`
                    color: ${to["text-selected-disabled"]};
                `:D`
                    color: ${to["text-disabled"]};
                `:e.$selected?D`
                color: ${to["text-selected"]};
            `:D`
            color: ${to.text};
        `}
`,_s=E.label`
    ${no["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${co.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${co.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,As=E.div`
    ${no["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${no["body-md-semibold"]}
    }
`,Bs=E.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Ms=E.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,zs=E.button`
    color: ${e=>e.$disabled?to["text-disabled"]:to["text-error"]};
    white-space: nowrap;
    ${no["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,js=E.button`
    color: ${e=>e.disabled?to["text-disabled"]:to["text-primary"]};
    ${no["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${to.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Ts=E.div`
    width: 100%;
    color: ${e=>e.$disabled?to["text-disabled"]:to["text-error"]};
    border: none;
    background: ${to.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Is=E((t=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:a,sizeType:l="default",showIcon:d=!1,customIcon:c,maxCollapsedHeight:u}=t,h=de(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[m,b]=g(!1),[p,f]=g(!1),{height:v,ref:x}=Br();y((()=>{w()}),[u,v]);const w=()=>{b(!u),f($())},$=()=>!(!v||!u)&&v>u;return r(gs,{className:i,$type:n,$sizeType:l,"data-testid":h["data-testid"],children:[d&&e(ms,{$sizeType:l,$type:n,children:(()=>{if(n&&c)return c;switch(n){case"success":return e(ee,{});case"warning":return e(J,{});case"error":return e(G,{});case"info":case"description":return e(K,{});default:return null}})()}),r(ps,{children:[r(fs,{$maxCollapsedHeight:$()?u:void 0,$showMore:m,$hasActionLink:!!s,children:[e("div",{ref:x,children:o}),s?r(bs,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},s,{children:[s.children,a||e(X,{})]})):null]}),p&&r(ys,{$sizeType:l,$type:n,type:"button",onClick:()=>b(!m),children:["Show ",m?"less":"more",e(vs,{$expanded:m})]})]})]})}))`
    width: 100%;
    user-select: none;
`,Ps=E.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${to.bg};
    ${as({textSize:"body-md"})}

    ${e=>e.$disabled?D`
                color: ${to["text-disabled"]};
            `:e.$selected?D`
                color: ${to["text-selected"]};
            `:D`
                color: ${to.text};
            `}
`,Rs=E(us.BodyMD)`
    color: ${e=>e.$disabled?to["text-disabled"]:to["text-error"]};
`,Ls=E(Ds)`
    color: ${e=>e.$disabled?to["text-disabled"]:to["text-error"]};
`,Ws=E((({type:r,active:t=!1,disabled:n,className:i})=>{let o;switch(r){case"checkbox":o=e(t?se:oe,{});break;case"radio":o=e(t?ne:te,{});break;case"tick":o=e(ae,{});break;case"cross":o=e(ie,{});break;default:o=null}return e(xs,{className:i,$active:t,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?D`
                    color: ${to["icon-selected-disabled"]};
                `:D`
                    color: ${to["icon-disabled-subtle"]};
                `:e.$selected?D`
                color: ${to["icon-selected"]};
            `:D`
            color: ${to["icon-subtle"]};
        `};
`;var Ys=ue((function(e){return null==e})),Hs=Object.defineProperty,Ns={};((e,r)=>{for(var t in r)Hs(e,t,{get:r[t],enumerable:!0})})(Ns,{assign:()=>Fa,colors:()=>xa,createStringInterpolator:()=>pa,skipAnimation:()=>wa,to:()=>fa,willAdvance:()=>$a});var Vs=aa(),qs=e=>na(e,Vs),Qs=aa();qs.write=e=>na(e,Qs);var Us=aa();qs.onStart=e=>na(e,Us);var Zs=aa();qs.onFrame=e=>na(e,Zs);var Xs=aa();qs.onFinish=e=>na(e,Xs);var Gs=[];qs.setTimeout=(e,r)=>{const t=qs.now()+r,n=()=>{const e=Gs.findIndex((e=>e.cancel==n));~e&&Gs.splice(e,1),ra-=~e?1:0},i={time:t,handler:e,cancel:n};return Gs.splice(Js(t),0,i),ra+=1,ia(),i};var Js=e=>~(~Gs.findIndex((r=>r.time>e))||~Gs.length);qs.cancel=e=>{Us.delete(e),Zs.delete(e),Xs.delete(e),Vs.delete(e),Qs.delete(e)},qs.sync=e=>{ta=!0,qs.batchedUpdates(e),ta=!1},qs.throttle=e=>{let r;function t(){try{e(...r)}finally{r=null}}function n(...e){r=e,qs.onStart(t)}return n.handler=e,n.cancel=()=>{Us.delete(t),r=null},n};var Ks="undefined"!=typeof window?window.requestAnimationFrame:()=>{};qs.use=e=>Ks=e,qs.now="undefined"!=typeof performance?()=>performance.now():Date.now,qs.batchedUpdates=e=>e(),qs.catch=console.error,qs.frameLoop="always",qs.advance=()=>{"demand"!==qs.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):sa()};var ea=-1,ra=0,ta=!1;function na(e,r){ta?(r.delete(e),e(0)):(r.add(e),ia())}function ia(){ea<0&&(ea=0,"demand"!==qs.frameLoop&&Ks(oa))}function oa(){~ea&&(Ks(oa),qs.batchedUpdates(sa))}function sa(){const e=ea;ea=qs.now();const r=Js(ea);r&&(la(Gs.splice(0,r),(e=>e.handler())),ra-=r),ra?(Us.flush(),Vs.flush(e?Math.min(64,ea-e):16.667),Zs.flush(),Qs.flush(),Xs.flush()):ea=-1}function aa(){let e=new Set,r=e;return{add(t){ra+=r!=e||e.has(t)?0:1,e.add(t)},delete:t=>(ra-=r==e&&e.has(t)?1:0,e.delete(t)),flush(t){r.size&&(e=new Set,ra-=r.size,la(r,(r=>r(t)&&e.add(r))),ra+=e.size,r=e)}}}function la(e,r){e.forEach((e=>{try{r(e)}catch(e){qs.catch(e)}}))}function da(){}var ca={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function ua(e,r){if(ca.arr(e)){if(!ca.arr(r)||e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}return e===r}var ha=(e,r)=>e.forEach(r);function ga(e,r,t){if(ca.arr(e))for(let n=0;n<e.length;n++)r.call(t,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&r.call(t,e[n],n)}var ma=e=>ca.und(e)?[]:ca.arr(e)?e:[e];function ba(e,r){if(e.size){const t=Array.from(e);e.clear(),ha(t,r)}}var pa,fa,ya=(e,...r)=>ba(e,(e=>e(...r))),va=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),xa=null,wa=!1,$a=da,Fa=e=>{e.to&&(fa=e.to),e.now&&(qs.now=e.now),void 0!==e.colors&&(xa=e.colors),null!=e.skipAnimation&&(wa=e.skipAnimation),e.createStringInterpolator&&(pa=e.createStringInterpolator),e.requestAnimationFrame&&qs.use(e.requestAnimationFrame),e.batchedUpdates&&(qs.batchedUpdates=e.batchedUpdates),e.willAdvance&&($a=e.willAdvance),e.frameLoop&&(qs.frameLoop=e.frameLoop)},Ca=new Set,Ea=[],Da=[],ka=0,Sa={get idle(){return!Ca.size&&!Ea.length},start(e){ka>e.priority?(Ca.add(e),qs.onStart(Oa)):(_a(e),qs(Ba))},advance:Ba,sort(e){if(ka)qs.onFrame((()=>Sa.sort(e)));else{const r=Ea.indexOf(e);~r&&(Ea.splice(r,1),Aa(e))}},clear(){Ea=[],Ca.clear()}};function Oa(){Ca.forEach(_a),Ca.clear(),qs(Ba)}function _a(e){Ea.includes(e)||Aa(e)}function Aa(e){Ea.splice(function(e,r){const t=e.findIndex(r);return t<0?e.length:t}(Ea,(r=>r.priority>e.priority)),0,e)}function Ba(e){const r=Da;for(let t=0;t<Ea.length;t++){const n=Ea[t];ka=n.priority,n.idle||($a(n),n.advance(e),n.idle||r.push(n))}return ka=0,(Da=Ea).length=0,(Ea=r).length>0}var Ma="[-+]?\\d*\\.?\\d+",za=Ma+"%";function ja(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Ta=new RegExp("rgb"+ja(Ma,Ma,Ma)),Ia=new RegExp("rgba"+ja(Ma,Ma,Ma,Ma)),Pa=new RegExp("hsl"+ja(Ma,za,za)),Ra=new RegExp("hsla"+ja(Ma,za,za,Ma)),La=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Wa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ya=/^#([0-9a-fA-F]{6})$/,Ha=/^#([0-9a-fA-F]{8})$/;function Na(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function Va(e,r,t){const n=t<.5?t*(1+r):t+r-t*r,i=2*t-n,o=Na(i,n,e+1/3),s=Na(i,n,e),a=Na(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function qa(e){const r=parseInt(e,10);return r<0?0:r>255?255:r}function Qa(e){return(parseFloat(e)%360+360)%360/360}function Ua(e){const r=parseFloat(e);return r<0?0:r>1?255:Math.round(255*r)}function Za(e){const r=parseFloat(e);return r<0?0:r>100?1:r/100}function Xa(e){let r=function(e){let r;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(r=Ya.exec(e))?parseInt(r[1]+"ff",16)>>>0:xa&&void 0!==xa[e]?xa[e]:(r=Ta.exec(e))?(qa(r[1])<<24|qa(r[2])<<16|qa(r[3])<<8|255)>>>0:(r=Ia.exec(e))?(qa(r[1])<<24|qa(r[2])<<16|qa(r[3])<<8|Ua(r[4]))>>>0:(r=La.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=Ha.exec(e))?parseInt(r[1],16)>>>0:(r=Wa.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=Pa.exec(e))?(255|Va(Qa(r[1]),Za(r[2]),Za(r[3])))>>>0:(r=Ra.exec(e))?(Va(Qa(r[1]),Za(r[2]),Za(r[3]))|Ua(r[4]))>>>0:null}(e);if(null===r)return e;r=r||0;return`rgba(${(4278190080&r)>>>24}, ${(16711680&r)>>>16}, ${(65280&r)>>>8}, ${(255&r)/255})`}var Ga=(e,r,t)=>{if(ca.fun(e))return e;if(ca.arr(e))return Ga({range:e,output:r,extrapolate:t});if(ca.str(e.output[0]))return pa(e);const n=e,i=n.output,o=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const r=function(e,r){for(var t=1;t<r.length-1&&!(r[t]>=e);++t);return t-1}(e,o);return function(e,r,t,n,i,o,s,a,l){let d=l?l(e):e;if(d<r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(d>t){if("identity"===a)return d;"clamp"===a&&(d=t)}if(n===i)return n;if(r===t)return e<=r?n:i;r===-1/0?d=-d:t===1/0?d-=r:d=(d-r)/(t-r);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[r],o[r+1],i[r],i[r+1],l,s,a,n.map)}};var Ja=1.70158,Ka=1.525*Ja,el=Ja+1,rl=2*Math.PI/3,tl=2*Math.PI/4.5,nl=e=>{const r=7.5625,t=2.75;return e<1/t?r*e*e:e<2/t?r*(e-=1.5/t)*e+.75:e<2.5/t?r*(e-=2.25/t)*e+.9375:r*(e-=2.625/t)*e+.984375},il={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>el*e*e*e-Ja*e*e,easeOutBack:e=>1+el*Math.pow(e-1,3)+Ja*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ka)/2:(Math.pow(2*e-2,2)*((Ka+1)*(2*e-2)+Ka)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*rl),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*rl)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*tl)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*tl)/2+1,easeInBounce:e=>1-nl(1-e),easeOutBounce:nl,easeInOutBounce:e=>e<.5?(1-nl(1-2*e))/2:(1+nl(2*e-1))/2,steps:(e,r="end")=>t=>{const n=(t="end"===r?Math.min(t,.999):Math.max(t,.001))*e,i="end"===r?Math.floor(n):Math.ceil(n);return o=0,s=1,a=i/e,Math.min(Math.max(a,o),s);var o,s,a}},ol=Symbol.for("FluidValue.get"),sl=Symbol.for("FluidValue.observers"),al=e=>Boolean(e&&e[ol]),ll=e=>e&&e[ol]?e[ol]():e,dl=e=>e[sl]||null;function cl(e,r){const t=e[sl];t&&t.forEach((e=>{!function(e,r){e.eventObserved?e.eventObserved(r):e(r)}(e,r)}))}var ul=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");hl(this,e)}},hl=(e,r)=>pl(e,ol,r);function gl(e,r){if(e[ol]){let t=e[sl];t||pl(e,sl,t=new Set),t.has(r)||(t.add(r),e.observerAdded&&e.observerAdded(t.size,r))}return r}function ml(e,r){const t=e[sl];if(t&&t.has(r)){const n=t.size-1;n?t.delete(r):e[sl]=null,e.observerRemoved&&e.observerRemoved(n,r)}}var bl,pl=(e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}),fl=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,yl=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,vl=new RegExp(`(${fl.source})(%|[a-z]+)`,"i"),xl=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,wl=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,$l=e=>{const[r,t]=Fl(e);if(!r||va())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(n)return n.trim();if(t&&t.startsWith("--")){const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);return r||e}return t&&wl.test(t)?$l(t):t||e},Fl=e=>{const r=wl.exec(e);if(!r)return[,];const[,t,n]=r;return[t,n]},Cl=(e,r,t,n,i)=>`rgba(${Math.round(r)}, ${Math.round(t)}, ${Math.round(n)}, ${i})`,El=e=>{bl||(bl=xa?new RegExp(`(${Object.keys(xa).join("|")})(?!\\w)`,"g"):/^\b$/);const r=e.output.map((e=>ll(e).replace(wl,$l).replace(yl,Xa).replace(bl,Xa))),t=r.map((e=>e.match(fl).map(Number))),n=t[0].map(((e,r)=>t.map((e=>{if(!(r in e))throw Error('The arity of each "output" value must be equal');return e[r]})))).map((r=>Ga({...e,output:r})));return e=>{const t=!vl.test(r[0])&&r.find((e=>vl.test(e)))?.replace(fl,"");let i=0;return r[0].replace(fl,(()=>`${n[i++](e)}${t||""}`)).replace(xl,Cl)}},Dl="react-spring: ",kl=e=>{const r=e;let t=!1;if("function"!=typeof r)throw new TypeError(`${Dl}once requires a function parameter`);return(...e)=>{t||(r(...e),t=!0)}},Sl=kl(console.warn);var Ol=kl(console.warn);function _l(e){return ca.str(e)&&("#"==e[0]||/\d/.test(e)||!va()&&wl.test(e)||e in(xa||{}))}var Al=va()?y:v;function Bl(){const e=g()[1],r=(()=>{const e=h(!1);return Al((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{r.current&&e(Math.random())}}var Ml=e=>y(e,zl),zl=[];function jl(e){const r=h();return y((()=>{r.current=e})),r.current}var Tl=Symbol.for("Animated:node"),Il=e=>e&&e[Tl],Pl=(e,r)=>((e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}))(e,Tl,r),Rl=e=>e&&e[Tl]&&e[Tl].getPayload(),Ll=class{constructor(){Pl(this,this)}getPayload(){return this.payload||[]}},Wl=class extends Ll{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,ca.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Wl(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,r){return ca.num(e)&&(this.lastPosition=e,r&&(e=Math.round(e/r)*r,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,ca.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Yl=class extends Wl{constructor(e){super(0),this._string=null,this._toString=Ga({output:[e,e]})}static create(e){return new Yl(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(ca.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ga({output:[this.getValue(),e]})),this._value=0,super.reset()}},Hl={dependencies:null},Nl=class extends Ll{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const r={};return ga(this.source,((t,n)=>{var i;(i=t)&&i[Tl]===i?r[n]=t.getValue(e):al(t)?r[n]=ll(t):e||(r[n]=t)})),r}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&ha(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const r=new Set;return ga(e,this._addToPayload,r),Array.from(r)}}_addToPayload(e){Hl.dependencies&&al(e)&&Hl.dependencies.add(e);const r=Rl(e);r&&ha(r,(e=>this.add(e)))}},Vl=class extends Nl{constructor(e){super(e)}static create(e){return new Vl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const r=this.getPayload();return e.length==r.length?r.map(((r,t)=>r.setValue(e[t]))).some(Boolean):(super.setValue(e.map(ql)),!0)}};function ql(e){return(_l(e)?Yl:Wl).create(e)}function Ql(e){const r=Il(e);return r?r.constructor:ca.arr(e)?Vl:_l(e)?Yl:Wl}var Ul=(e,r)=>{const t=!ca.fun(e)||e.prototype&&e.prototype.isReactComponent;return w(((n,i)=>{const o=h(null),s=t&&$((e=>{o.current=function(e,r){e&&(ca.fun(e)?e(r):e.current=r);return r}(i,e)}),[i]),[a,l]=function(e,r){const t=new Set;Hl.dependencies=t,e.style&&(e={...e,style:r.createAnimatedStyle(e.style)});return e=new Nl(e),Hl.dependencies=null,[e,t]}(n,r),d=Bl(),u=()=>{const e=o.current;if(t&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,a.getValue(!0)))&&d()},g=new Zl(u,l),m=h();Al((()=>(m.current=g,ha(l,(e=>gl(e,g))),()=>{m.current&&(ha(m.current.deps,(e=>ml(e,m.current))),qs.cancel(m.current.update))}))),y(u,[]),Ml((()=>()=>{const e=m.current;ha(e.deps,(r=>ml(r,e)))}));const b=r.getComponentProps(a.getValue());return c.createElement(e,{...b,ref:s})}))},Zl=class{constructor(e,r){this.update=e,this.deps=r}eventObserved(e){"change"==e.type&&qs.write(this.update)}};var Xl=Symbol.for("AnimatedComponent"),Gl=e=>ca.str(e)?e:e&&ca.str(e.displayName)?e.displayName:ca.fun(e)&&e.name||null;function Jl(e,...r){return ca.fun(e)?e(...r):e}var Kl=(e,r)=>!0===e||!!(r&&e&&(ca.fun(e)?e(r):ma(e).includes(r))),ed=(e,r)=>ca.obj(e)?r&&e[r]:e,rd=(e,r)=>!0===e.default?e[r]:e.default?e.default[r]:void 0,td=e=>e,nd=(e,r=td)=>{let t=id;e.default&&!0!==e.default&&(e=e.default,t=Object.keys(e));const n={};for(const i of t){const t=r(e[i],i);ca.und(t)||(n[i]=t)}return n},id=["config","onProps","onStart","onChange","onPause","onResume","onRest"],od={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function sd(e){const r=function(e){const r={};let t=0;if(ga(e,((e,n)=>{od[n]||(r[n]=e,t++)})),t)return r}(e);if(r){const t={to:r};return ga(e,((e,n)=>n in r||(t[n]=e))),t}return{...e}}function ad(e){return e=ll(e),ca.arr(e)?e.map(ad):_l(e)?Ns.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ld(e){return ca.fun(e)||ca.arr(e)&&ca.obj(e[0])}var dd={tension:170,friction:26,mass:1,damping:1,easing:il.linear,clamp:!1},cd=class{constructor(){this.velocity=0,Object.assign(this,dd)}};function ud(e,r){if(ca.und(r.decay)){const t=!ca.und(r.tension)||!ca.und(r.friction);!t&&ca.und(r.frequency)&&ca.und(r.damping)&&ca.und(r.mass)||(e.duration=void 0,e.decay=void 0),t&&(e.frequency=void 0)}else e.duration=void 0}var hd=[],gd=class{constructor(){this.changed=!1,this.values=hd,this.toValues=null,this.fromValues=hd,this.config=new cd,this.immediate=!1}};function md(e,{key:r,props:t,defaultProps:n,state:i,actions:o}){return new Promise(((s,a)=>{let l,d,c=Kl(t.cancel??n?.cancel,r);if(c)g();else{ca.und(t.pause)||(i.paused=Kl(t.pause,r));let e=n?.pause;!0!==e&&(e=i.paused||Kl(e,r)),l=Jl(t.delay||0,r),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-qs.now()}function h(){l>0&&!Ns.skipAnimation?(i.delayed=!0,d=qs.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(d)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...t,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var bd=(e,r)=>1==r.length?r[0]:r.some((e=>e.cancelled))?yd(e.get()):r.every((e=>e.noop))?pd(e.get()):fd(e.get(),r.every((e=>e.finished))),pd=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),fd=(e,r,t=!1)=>({value:e,finished:r,cancelled:t}),yd=e=>({value:e,cancelled:!0,finished:!1});function vd(e,r,t,n){const{callId:i,parentId:o,onRest:s}=r,{asyncTo:a,promise:l}=t;return o||e!==a||r.reset?t.promise=(async()=>{t.asyncId=i,t.asyncTo=e;const d=nd(r,((e,r)=>"onRest"===r?void 0:e));let c,u;const h=new Promise(((e,r)=>(c=e,u=r))),g=e=>{const r=i<=(t.cancelId||0)&&yd(n)||i!==t.asyncId&&fd(n,!1);if(r)throw e.result=r,u(e),e},m=(e,r)=>{const o=new wd,s=new $d;return(async()=>{if(Ns.skipAnimation)throw xd(t),s.result=fd(n,!1),u(s),s;g(o);const a=ca.obj(e)?{...e}:{...r,to:e};a.parentId=i,ga(d,((e,r)=>{ca.und(a[r])&&(a[r]=e)}));const l=await n.start(a);return g(o),t.paused&&await new Promise((e=>{t.resumeQueue.add(e)})),l})()};let b;if(Ns.skipAnimation)return xd(t),fd(n,!1);try{let r;r=ca.arr(e)?(async e=>{for(const r of e)await m(r)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([r.then(c),h]),b=fd(n.get(),!0,!1)}catch(e){if(e instanceof wd)b=e.result;else{if(!(e instanceof $d))throw e;b=e.result}}finally{i==t.asyncId&&(t.asyncId=o,t.asyncTo=o?a:void 0,t.promise=o?l:void 0)}return ca.fun(s)&&qs.batchedUpdates((()=>{s(b,n,n.item)})),b})():l}function xd(e,r){ba(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,r&&(e.cancelId=r)}var wd=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},$d=class extends Error{constructor(){super("SkipAnimationSignal")}},Fd=e=>e instanceof Ed,Cd=1,Ed=class extends ul{constructor(){super(...arguments),this.id=Cd++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Il(this);return e&&e.getValue()}to(...e){return Ns.to(this,e)}interpolate(...e){return Sl(`${Dl}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ns.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,r=!1){cl(this,{type:"change",parent:this,value:e,idle:r})}_onPriorityChange(e){this.idle||Sa.sort(this),cl(this,{type:"priority",parent:this,priority:e})}},Dd=Symbol.for("SpringPhase"),kd=e=>(1&e[Dd])>0,Sd=e=>(2&e[Dd])>0,Od=e=>(4&e[Dd])>0,_d=(e,r)=>r?e[Dd]|=3:e[Dd]&=-3,Ad=(e,r)=>r?e[Dd]|=4:e[Dd]&=-5,Bd=class extends Ed{constructor(e,r){if(super(),this.animation=new gd,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!ca.und(e)||!ca.und(r)){const t=ca.obj(e)?{...e}:{...r,from:e};ca.und(t.default)&&(t.default=!0),this.start(t)}}get idle(){return!(Sd(this)||this._state.asyncTo)||Od(this)}get goal(){return ll(this.animation.to)}get velocity(){const e=Il(this);return e instanceof Wl?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return kd(this)}get isAnimating(){return Sd(this)}get isPaused(){return Od(this)}get isDelayed(){return this._state.delayed}advance(e){let r=!0,t=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,s=Rl(n.to);!s&&al(n.to)&&(i=ma(ll(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==Yl?1:s?s[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,o.tension<=0)return void(a.done=!0);let r=a.elapsedTime+=e;const t=n.fromValues[l],i=null!=a.v0?a.v0:a.v0=ca.arr(o.velocity)?o.velocity[l]:o.velocity;let s;const h=o.precision||(t==d?.005:Math.min(1,.001*Math.abs(d-t)));if(ca.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*r);u=t+i/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=i*n}else{s=null==a.lastVelocity?i:a.lastVelocity;const r=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!ca.und(n),g=t==d?a.v0>0:t<d;let m,b=!1;const p=1,f=Math.ceil(e/p);for(let e=0;e<f&&(m=Math.abs(s)>r,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(b=u==d||u>d==g,b&&(s=-s*n,u=d));s+=(1e-6*-o.tension*(u-d)+.001*-o.friction*s)/o.mass*p,u+=s*p}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,a.durationProgress>0&&(a.elapsedTime=o.duration*a.durationProgress,r=a.elapsedTime+=e)),n=(o.progress||0)+r/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=t+o.easing(n)*(d-t),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:r=!1,a.setValue(u,o.round)&&(t=!0)}));const a=Il(this),l=a.getValue();if(r){const e=ll(n.to);l===e&&!t||o.decay?t&&o.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else t&&this._onChange(l)}set(e){return qs.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Sd(this)){const{to:e,config:r}=this.animation;qs.batchedUpdates((()=>{this._onStart(),r.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,r){let t;return ca.und(e)?(t=this.queue||[],this.queue=[]):t=[ca.obj(e)?e:{...r,to:e}],Promise.all(t.map((e=>this._update(e)))).then((e=>bd(this,e)))}stop(e){const{to:r}=this.animation;return this._focus(this.get()),xd(this._state,e&&this._lastCallId),qs.batchedUpdates((()=>this._stop(r,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const r=this.key||"";let{to:t,from:n}=e;t=ca.obj(t)?t[r]:t,(null==t||ld(t))&&(t=void 0),n=ca.obj(n)?n[r]:n,null==n&&(n=void 0);const i={to:t,from:n};return kd(this)||(e.reverse&&([t,n]=[n,t]),n=ll(n),ca.und(n)?Il(this)||this._set(t):this._set(n)),i}_update({...e},r){const{key:t,defaultProps:n}=this;e.default&&Object.assign(n,nd(e,((e,r)=>/^on/.test(r)?ed(e,t):e))),Rd(this,e,"onProps"),Ld(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return md(++this._lastCallId,{key:t,props:e,defaultProps:n,state:o,actions:{pause:()=>{Od(this)||(Ad(this,!0),ya(o.pauseQueue),Ld(this,"onPause",fd(this,Md(this,this.animation.to)),this))},resume:()=>{Od(this)&&(Ad(this,!1),Sd(this)&&this._resume(),ya(o.resumeQueue),Ld(this,"onResume",fd(this,Md(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((t=>{if(e.loop&&t.finished&&(!r||!t.noop)){const r=zd(e);if(r)return this._update(r,!0)}return t}))}_merge(e,r,t){if(r.cancel)return this.stop(!0),t(yd(this));const n=!ca.und(e.to),i=!ca.und(e.from);if(n||i){if(!(r.callId>this._lastToId))return t(yd(this));this._lastToId=r.callId}const{key:o,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!i||n||r.default&&!ca.und(c)||(c=u),r.reverse&&([c,u]=[u,c]);const h=!ua(u,d);h&&(a.from=u),u=ll(u);const g=!ua(c,l);g&&this._focus(c);const m=ld(r.to),{config:b}=a,{decay:p,velocity:f}=b;(n||i)&&(b.velocity=0),r.config&&!m&&function(e,r,t){t&&(ud(t={...t},r),r={...t,...r}),ud(e,r),Object.assign(e,r);for(const r in dd)null==e[r]&&(e[r]=dd[r]);let{frequency:n,damping:i}=e;const{mass:o}=e;ca.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(b,Jl(r.config,o),r.config!==s.config?Jl(s.config,o):void 0);let y=Il(this);if(!y||ca.und(c))return t(fd(this,!0));const v=ca.und(r.reset)?i&&!r.default:!ca.und(u)&&Kl(r.reset,o),x=v?u:this.get(),w=ad(c),$=ca.num(w)||ca.arr(w)||_l(w),F=!m&&(!$||Kl(s.immediate||r.immediate,o));if(g){const e=Ql(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=al(c),D=!1;if(!E){const e=v||!kd(this)&&h;(g||e)&&(D=ua(ad(x),w),E=!D),(ua(a.immediate,F)||F)&&ua(b.decay,p)&&ua(b.velocity,f)||(E=!0)}if(D&&Sd(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!m&&((E||al(l))&&(a.values=y.getPayload(),a.toValues=al(c)?null:C==Yl?[1]:ma(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=a;ha(Pd,(e=>Rd(this,r,e)));const n=fd(this,Md(this,l));ya(this._pendingCalls,n),this._pendingCalls.add(t),a.changed&&qs.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?Jl(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),m?t(vd(r.to,r,this._state,this)):E?this._start():Sd(this)&&!g?this._pendingCalls.add(t):t(pd(x))}_focus(e){const r=this.animation;e!==r.to&&(dl(this)&&this._detach(),r.to=e,dl(this)&&this._attach())}_attach(){let e=0;const{to:r}=this.animation;al(r)&&(gl(r,this),Fd(r)&&(e=r.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;al(e)&&ml(e,this)}_set(e,r=!0){const t=ll(e);if(!ca.und(t)){const e=Il(this);if(!e||!ua(t,e.getValue())){const n=Ql(t);e&&e.constructor==n?e.setValue(t):Pl(this,n.create(t)),e&&qs.batchedUpdates((()=>{this._onChange(t,r)}))}}return Il(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Ld(this,"onStart",fd(this,Md(this,e.to)),this))}_onChange(e,r){r||(this._onStart(),Jl(this.animation.onChange,e,this)),Jl(this.defaultProps.onChange,e,this),super._onChange(e,r)}_start(){const e=this.animation;Il(this).reset(ll(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Sd(this)||(_d(this,!0),Od(this)||this._resume())}_resume(){Ns.skipAnimation?this.finish():Sa.start(this)}_stop(e,r){if(Sd(this)){_d(this,!1);const t=this.animation;ha(t.values,(e=>{e.done=!0})),t.toValues&&(t.onChange=t.onPause=t.onResume=void 0),cl(this,{type:"idle",parent:this});const n=r?yd(this.get()):fd(this.get(),Md(this,e??t.to));ya(this._pendingCalls,n),t.changed&&(t.changed=!1,Ld(this,"onRest",n,this))}}};function Md(e,r){const t=ad(r);return ua(ad(e.get()),t)}function zd(e,r=e.loop,t=e.to){const n=Jl(r);if(n){const i=!0!==n&&sd(n),o=(i||e).reverse,s=!i||i.reset;return jd({...e,loop:r,default:!1,pause:void 0,to:!o||ld(t)?t:void 0,from:s?e.from:void 0,reset:s,...i})}}function jd(e){const{to:r,from:t}=e=sd(e),n=new Set;return ca.obj(r)&&Id(r,n),ca.obj(t)&&Id(t,n),e.keys=n.size?Array.from(n):null,e}function Td(e){const r=jd(e);return ca.und(r.default)&&(r.default=nd(r)),r}function Id(e,r){ga(e,((e,t)=>null!=e&&r.add(t)))}var Pd=["onStart","onRest","onChange","onPause","onResume"];function Rd(e,r,t){e.animation[t]=r[t]!==rd(r,t)?ed(r[t],e.key):void 0}function Ld(e,r,...t){e.animation[r]?.(...t),e.defaultProps[r]?.(...t)}var Wd=["onStart","onChange","onRest"],Yd=1,Hd=class{constructor(e,r){this.id=Yd++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),r&&(this._flush=r),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((r,t)=>e[t]=r.get())),e}set(e){for(const r in e){const t=e[r];ca.und(t)||this.springs[r].set(t)}}update(e){return e&&this.queue.push(jd(e)),this}start(e){let{queue:r}=this;return e?r=ma(e).map(jd):this.queue=[],this._flush?this._flush(this,r):(Xd(this,r),Nd(this,r))}stop(e,r){if(e!==!!e&&(r=e),r){const t=this.springs;ha(ma(r),(r=>t[r].stop(!!e)))}else xd(this._state,this._lastAsyncId),this.each((r=>r.stop(!!e)));return this}pause(e){if(ca.und(e))this.start({pause:!0});else{const r=this.springs;ha(ma(e),(e=>r[e].pause()))}return this}resume(e){if(ca.und(e))this.start({pause:!1});else{const r=this.springs;ha(ma(e),(e=>r[e].resume()))}return this}each(e){ga(this.springs,e)}_onFrame(){const{onStart:e,onChange:r,onRest:t}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,ba(e,(([e,r])=>{r.value=this.get(),e(r,this,this._item)})));const o=!n&&this._started,s=i||o&&t.size?this.get():null;i&&r.size&&ba(r,(([e,r])=>{r.value=s,e(r,this,this._item)})),o&&(this._started=!1,ba(t,(([e,r])=>{r.value=s,e(r,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}qs.onFrame(this._onFrame)}};function Nd(e,r){return Promise.all(r.map((r=>Vd(e,r)))).then((r=>bd(e,r)))}async function Vd(e,r,t){const{keys:n,to:i,from:o,loop:s,onRest:a,onResolve:l}=r,d=ca.obj(r.default)&&r.default;s&&(r.loop=!1),!1===i&&(r.to=null),!1===o&&(r.from=null);const c=ca.arr(i)||ca.fun(i)?i:void 0;c?(r.to=void 0,r.onRest=void 0,d&&(d.onRest=void 0)):ha(Wd,(t=>{const n=r[t];if(ca.fun(n)){const i=e._events[t];r[t]=({finished:e,cancelled:r})=>{const t=i.get(n);t?(e||(t.finished=!1),r&&(t.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:r||!1})},d&&(d[t]=r[t])}}));const u=e._state;r.pause===!u.paused?(u.paused=r.pause,ya(r.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(r.pause=!0);const h=(n||Object.keys(e.springs)).map((t=>e.springs[t].start(r))),g=!0===r.cancel||!0===rd(r,"cancel");(c||g&&u.asyncId)&&h.push(md(++e._lastAsyncId,{props:r,state:u,actions:{pause:da,resume:da,start(r,t){g?(xd(u,e._lastAsyncId),t(yd(e))):(r.onRest=a,t(vd(c,r,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=bd(e,await Promise.all(h));if(s&&m.finished&&(!t||!m.noop)){const t=zd(r,s,i);if(t)return Xd(e,[t]),Vd(e,t,!0)}return l&&qs.batchedUpdates((()=>l(m,e,e.item))),m}function qd(e,r){const t={...e.springs};return r&&ha(ma(r),(e=>{ca.und(e.keys)&&(e=jd(e)),ca.obj(e.to)||(e={...e,to:void 0}),Zd(t,e,(e=>Ud(e)))})),Qd(e,t),t}function Qd(e,r){ga(r,((r,t)=>{e.springs[t]||(e.springs[t]=r,gl(r,e))}))}function Ud(e,r){const t=new Bd;return t.key=e,r&&gl(t,r),t}function Zd(e,r,t){r.keys&&ha(r.keys,(n=>{(e[n]||(e[n]=t(n)))._prepareNode(r)}))}function Xd(e,r){ha(r,(r=>{Zd(e.springs,r,(r=>Ud(r,e)))}))}var Gd,Jd,Kd=({children:e,...r})=>{const t=F(ec),n=r.pause||!!t.pause,i=r.immediate||!!t.immediate;r=function(e,r){const[t]=g((()=>({inputs:r,result:e()}))),n=h(),i=n.current;let o=i;o?Boolean(r&&o.inputs&&function(e,r){if(e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}(r,o.inputs))||(o={inputs:r,result:e()}):o=t;return y((()=>{n.current=o,i==t&&(t.inputs=t.result=void 0)}),[o]),o.result}((()=>({pause:n,immediate:i})),[n,i]);const{Provider:o}=ec;return c.createElement(o,{value:r},e)},ec=(Gd=Kd,Jd={},Object.assign(Gd,c.createContext(Jd)),Gd.Provider._context=Gd,Gd.Consumer._context=Gd,Gd);Kd.Provider=ec.Provider,Kd.Consumer=ec.Consumer;var rc=()=>{const e=[],r=function(r){Ol(`${Dl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return ha(e,((e,i)=>{if(ca.und(r))n.push(e.start());else{const o=t(r,e,i);o&&n.push(e.start(o))}})),n};r.current=e,r.add=function(r){e.includes(r)||e.push(r)},r.delete=function(r){const t=e.indexOf(r);~t&&e.splice(t,1)},r.pause=function(){return ha(e,(e=>e.pause(...arguments))),this},r.resume=function(){return ha(e,(e=>e.resume(...arguments))),this},r.set=function(r){ha(e,((e,t)=>{const n=ca.fun(r)?r(t,e):r;n&&e.set(n)}))},r.start=function(r){const t=[];return ha(e,((e,n)=>{if(ca.und(r))t.push(e.start());else{const i=this._getProps(r,e,n);i&&t.push(e.start(i))}})),t},r.stop=function(){return ha(e,(e=>e.stop(...arguments))),this},r.update=function(r){return ha(e,((e,t)=>e.update(this._getProps(r,e,t)))),this};const t=function(e,r,t){return ca.fun(e)?e(t,r):e};return r._getProps=t,r};function tc(e,r){const t=ca.fun(e),[[n],i]=function(e,r,t){const n=ca.fun(r)&&r;n&&!t&&(t=[]);const i=x((()=>n||3==arguments.length?rc():void 0),[]),o=h(0),s=Bl(),a=x((()=>({ctrls:[],queue:[],flush(e,r){const t=qd(e,r),n=o.current>0&&!a.queue.length&&!Object.keys(t).some((r=>!e.springs[r]));return n?Nd(e,r):new Promise((n=>{Qd(e,t),a.queue.push((()=>{n(Nd(e,r))})),s()}))}})),[]),l=h([...a.ctrls]),d=[],c=jl(e)||0;function u(e,t){for(let i=e;i<t;i++){const e=l.current[i]||(l.current[i]=new Hd(null,a.flush)),t=n?n(i,e):r[i];t&&(d[i]=Td(t))}}x((()=>{ha(l.current.slice(e,c),(e=>{!function(e,r){e.ref?.delete(e),r?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,u(c,e)}),[e]),x((()=>{u(0,Math.min(c,e))}),t);const g=l.current.map(((e,r)=>qd(e,d[r]))),m=F(Kd),b=jl(m),p=m!==b&&function(e){for(const r in e)return!0;return!1}(m);Al((()=>{o.current++,a.ctrls=l.current;const{queue:e}=a;e.length&&(a.queue=[],ha(e,(e=>e()))),ha(l.current,((e,r)=>{i?.add(e),p&&e.start({default:m});const t=d[r];t&&(function(e,r){r&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r)}(e,t.ref),e.ref?e.queue.push(t):e.start(t))}))})),Ml((()=>()=>{ha(a.ctrls,(e=>e.stop(!0)))}));const f=g.map((e=>({...e})));return i?[f,i]:f}(1,t?e:[e],t?r||[]:r);return t||2==arguments.length?[n,i]:n}var nc=class extends Ed{constructor(e,r){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ga(...r);const t=this._get(),n=Ql(t);Pl(this,n.create(t))}advance(e){const r=this._get();ua(r,this.get())||(Il(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&oc(this._active)&&sc(this)}_get(){const e=ca.arr(this.source)?this.source.map(ll):ma(ll(this.source));return this.calc(...e)}_start(){this.idle&&!oc(this._active)&&(this.idle=!1,ha(Rl(this),(e=>{e.done=!1})),Ns.skipAnimation?(qs.batchedUpdates((()=>this.advance())),sc(this)):Sa.start(this))}_attach(){let e=1;ha(ma(this.source),(r=>{al(r)&&gl(r,this),Fd(r)&&(r.idle||this._active.add(r),e=Math.max(e,r.priority+1))})),this.priority=e,this._start()}_detach(){ha(ma(this.source),(e=>{al(e)&&ml(e,this)})),this._active.clear(),sc(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ma(this.source).reduce(((e,r)=>Math.max(e,(Fd(r)?r.priority:0)+1)),0))}};function ic(e){return!1!==e.idle}function oc(e){return!e.size||Array.from(e).every(ic)}function sc(e){e.idle||(e.idle=!0,ha(Rl(e),(e=>{e.done=!0})),cl(e,{type:"idle",parent:e}))}Ns.assign({createStringInterpolator:El,to:(e,r)=>new nc(e,r)});var ac=/^--/;function lc(e,r){return null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||ac.test(e)||cc.hasOwnProperty(e)&&cc[e]?(""+r).trim():r+"px"}var dc={};var cc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uc=["Webkit","Ms","Moz","O"];cc=Object.keys(cc).reduce(((e,r)=>(uc.forEach((t=>e[((e,r)=>e+r.charAt(0).toUpperCase()+r.substring(1))(t,r)]=e[r])),e)),cc);var hc=/^(matrix|translate|scale|rotate|skew)/,gc=/^(translate)/,mc=/^(rotate|skew)/,bc=(e,r)=>ca.num(e)&&0!==e?e+r:e,pc=(e,r)=>ca.arr(e)?e.every((e=>pc(e,r))):ca.num(e)?e===r:parseFloat(e)===r,fc=class extends Nl{constructor({x:e,y:r,z:t,...n}){const i=[],o=[];(e||r||t)&&(i.push([e||0,r||0,t||0]),o.push((e=>[`translate3d(${e.map((e=>bc(e,"px"))).join(",")})`,pc(e,0)]))),ga(n,((e,r)=>{if("transform"===r)i.push([e||""]),o.push((e=>[e,""===e]));else if(hc.test(r)){if(delete n[r],ca.und(e))return;const t=gc.test(r)?"px":mc.test(r)?"deg":"";i.push(ma(e)),o.push("rotate3d"===r?([e,r,n,i])=>[`rotate3d(${e},${r},${n},${bc(i,t)})`,pc(i,0)]:e=>[`${r}(${e.map((e=>bc(e,t))).join(",")})`,pc(e,r.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new yc(i,o)),super(n)}},yc=class extends ul{constructor(e,r){super(),this.inputs=e,this.transforms=r,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",r=!0;return ha(this.inputs,((t,n)=>{const i=ll(t[0]),[o,s]=this.transforms[n](ca.arr(i)?i:t.map(ll));e+=" "+o,r=r&&s})),r?"none":e}observerAdded(e){1==e&&ha(this.inputs,(e=>ha(e,(e=>al(e)&&gl(e,this)))))}observerRemoved(e){0==e&&ha(this.inputs,(e=>ha(e,(e=>al(e)&&ml(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),cl(this,e)}};Ns.assign({batchedUpdates:Q,createStringInterpolator:El,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var vc=((e,{applyAnimatedValues:r=()=>!1,createAnimatedStyle:t=e=>new Nl(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:r,createAnimatedStyle:t,getComponentProps:n},o=e=>{const r=Gl(e)||"Anonymous";return(e=ca.str(e)?o[e]||(o[e]=Ul(e,i)):e[Xl]||(e[Xl]=Ul(e,i))).displayName=`Animated(${r})`,e};return ga(e,((r,t)=>{ca.arr(e)&&(t=Gl(r)),o[t]=o(r)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,r){if(!e.nodeType||!e.setAttribute)return!1;const t="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:s,viewBox:a,...l}=r,d=Object.values(l),c=Object.keys(l).map((r=>t||e.hasAttribute(r)?r:dc[r]||(dc[r]=r.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const r in n)if(n.hasOwnProperty(r)){const t=lc(r,n[r]);ac.test(r)?e.style.setProperty(r,t):e.style[r]=t}c.forEach(((r,t)=>{e.setAttribute(r,d[t])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new fc(e),getComponentProps:({scrollTop:e,scrollLeft:r,...t})=>t}),xc=vc.animated;const wc=E.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,t=e.animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${co.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,$c=r=>{var{id:t="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:a,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=r,u=de(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,m]=g(),[b,p]=g();y((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(f(),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)})),[]),y((()=>{var e,r;n&&c&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[n]);const f=()=>{const e=.01*window.innerHeight;m(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;m(e),p(window.visualViewport.offsetTop)}};return e(Co,{"data-testid":`${t}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:t,rootId:a,zIndex:l,children:e(wc,Object.assign({show:n,animationFrom:i,"data-testid":t,verticalHeight:h,offsetTop:b},u,{children:o}))})},Fc=E.div`
    border-radius: ${ao.md};
    background: ${to.bg};
    padding: ${so["spacing-16"]} ${so["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?D`
                  border: ${oo["width-010"]} ${oo.solid}
                      ${to.border};
              `:D`
                  box-shadow: 0 2px 8px
                      rgba(from ${to.Primitive["neutral-50"]} r g b / 24%);
              `}}
`,Cc=E.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${so["spacing-24"]};
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

        ${({$highlight:e})=>e&&D`
                background-color: ${to["bg-hover-neutral"]};
            `}
    }
`,Ec=u.forwardRef(((r,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=r,a=de(r,["children","focusHighlight","focusOutline","type"]);return e(Cc,Object.assign({ref:t,$outline:o,$highlight:i,type:s},a,{children:n}))})),Dc=E.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${to.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: ${ao.lg};
    overflow: hidden;

    ${co.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,kc=E(Ec)`
    position: absolute;
    top: var(--close-button-top-inset, ${so["spacing-16"]});
    right: var(--close-button-right-inset, ${so["spacing-16"]});
    padding: 0;
    color: ${to.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${co.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${so["spacing-20"]});
    }
`,Sc=E.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Oc=E((r=>{var{children:t}=r,n=de(r,["children"]);const i=n["data-testid"]||"card";return e(Fc,Object.assign({},n,{"data-testid":i,children:"string"==typeof t?e(us.BodyBL,{children:t}):t}))}))`
    color: ${to.text};
    ${as({textSize:"body-md"})}

    ${co.MaxWidth.sm} {
        display: none;
    }
`,_c=E((t=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:s=!0}=t,a=de(t,["id","children","onClose","showCloseButton"]);return r(Dc,Object.assign({"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[s&&e(kc,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(ie,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Ac=E.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${to.text};
    ${as({textSize:"body-md"})}
`,Bc=n=>{var{children:i,visible:o,onMobileClose:s}=n,a=de(n,["children","visible","onMobileClose"]);const l=a["data-testid"]||"popover",d=S(),c=lo["sm-max"]({theme:d}),u=me.useMediaQuery({maxWidth:c}),h=()=>{s&&s()},g=()=>"string"==typeof i?e(us.BodyMD,{children:i}):i;return r(t,{children:[o&&e(Sc,Object.assign({"data-testid":l},a,{children:e(Oc,{children:g()})})),u&&e($c,{show:null!=o&&o,onOverlayClick:h,children:e(_c,{onClose:h,children:e(Ac,{children:g()})})})]})},Mc=E.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,zc=n=>{var i,o,{children:s,popoverContent:a,trigger:l="click",position:d="top",zIndex:c,rootNode:u,customOffset:m,delay:b,onPopoverAppear:p,onPopoverDismiss:f}=n,v=de(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[x,w]=g(!1),$=h(null),F=h(null),C=S(),E=lo["sm-max"]({theme:C}),D=me.useMediaQuery({maxWidth:E}),{refs:k,floatingStyles:_,context:A}=M({open:x,placement:d,whileElementsMounted:z,middleware:[j(null!=m?m:16),T(),I({limiter:P()})],onOpenChange:e=>{w(e),x!==e&&J(e)}}),B=(()=>{const[e,r]=g(void 0),t=O();return y((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on($o.Change,e),t.events.emit($o.Ready),()=>t.events.off($o.Change,e)}),[t]),e})(),V=D?"click":l,q=R(A,{ignoreMouse:"hover"===V}),Q=L(A),U=W(A,{enabled:"hover"===V,delay:{open:null!==(i=null==b?void 0:b.open)&&void 0!==i?i:0,close:null!==(o=null==b?void 0:b.close)&&void 0!==o?o:500}}),{getReferenceProps:Z,getFloatingProps:X}=Y([q,Q,U]),G=()=>{w(!1),J(!1)},J=e=>{e&&p&&p(),!e&&f&&f()};return r(t,{children:[e(Mc,Object.assign({ref:e=>{$.current=e,k.setReference(e)}},Z({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:s})),x&&e(H,{root:u,children:e(N,{context:A,children:e("div",Object.assign({ref:e=>{F.current=e,k.setFloating(e)},style:Object.assign(Object.assign({},_),{outline:"none",zIndex:null!=c?c:B})},X(),{children:"function"==typeof a?a():e(Bc,{visible:!0,onMobileClose:G,children:a})}))})})]})},jc=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Tc=E.span`
    color: ${to["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>jc(e)}

    &:hover,
    &:focus-visible {
        color: ${to["text-hover"]};
        ${({$hoverStyle:e})=>jc(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Ic=E.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Pc=t=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:s="default",underlineHoverStyle:a="default"}=t,l=de(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return e(zc,Object.assign({},l,{children:r(Tc,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:s,$hoverStyle:a,"aria-label":null!=n?n:d?void 0:"More info",children:[i,o&&e(Ic,{$standalone:!d,children:o})]})}))},Rc=E.div`
    padding-left: ${so["spacing-4"]};
    display: inline;
`,Lc=({addon:r,rootNode:t})=>{const{content:n,type:i,icon:o,id:s,zIndex:a,"data-testid":l}=r;return e(Rc,{children:e(Pc,{trigger:"click",id:s,"data-testid":l,popoverContent:n,rootNode:t,zIndex:a,icon:null!=o?o:e(K,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Wc=E.div`
    background-color: ${e=>e.$collapsible?to["bg-strong"]:to.bg};
    ${co.MaxWidth.lg} {
        background-color: ${to["bg-strong"]};
    }
`,Yc=E.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${to.border};

    ${co.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${so["spacing-16"]};
    }
`,Hc=E.div`
    display: flex;
    align-items: center;

    background-color: ${to.bg};

    ${co.MaxWidth.lg} {
        background-color: transparent;
    }
`,Nc=E(Ec)`
    margin: 0 0 0 auto;

    color: ${to.icon};
    &:hover {
        color: ${to["icon-hover"]};
    }
`,Vc=E(U)`
    height: ${no.Spec["body-size-baseline"]};
    width: ${no.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${io["duration-350"]} ${io["ease-standard"]};
`,qc=E.p`
    ${no["heading-xs-semibold"]}
    color: ${to.text};

    margin: ${so["spacing-24"]} 0 ${so["spacing-24"]}
        ${so["spacing-20"]};

    ${co.MaxWidth.lg} {
        ${no["body-md-semibold"]}
        color: ${to["text-subtle"]};

        margin: ${so["spacing-24"]} ${so["spacing-20"]} 0
            ${so["spacing-20"]};
    }
`,Qc=E(xc.div)`
    overflow: hidden;
`,Uc=E.div`
    padding: ${so["spacing-24"]} ${so["spacing-20"]};
`,Zc=E(xc.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,Xc=E(Jo.Small)`
    height: fit-content;
    padding: 0;
    margin: ${so["spacing-16"]} 0 0 0;
`;E.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const Gc=e=>{const r=C.split(".");return parseInt(r[0],10)>=19?e:e?"true":void 0},Jc=t=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:s,onExpandChange:a,minimisable:l=!1,minimisedHeight:d,showDivider:c=!0,showMobileDivider:u=!0,title:h,addon:m,children:b}=t,p=de(t,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:f,rootNode:v}=F(ko),x="mobile"===f,[w,$]=g(A()),[C,E]=g(l),D=!x&&i,k=Br(),S=Br(),O=tc({height:w?k.height:0}),_=C?null!=d?d:Math.min(.5*(null!==(n=S.height)&&void 0!==n?n:0),216):S.height;y((()=>{$(A())}),[i,s]),y((()=>{E(l)}),[l]);function A(){return!!x||(Ys(s)?!i||o:s)}return r(Wc,{$collapsible:D,children:[e(Yc,{$showDivider:c,$showMobileDivider:u}),(h||D)&&r(Hc,{children:[h&&r(qc,{children:[h," ",m&&("popover"===(null==m?void 0:m.type)?e(Lc,{addon:m,rootNode:x?v:void 0}):null)]}),D&&e(Nc,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!w;Ys(s)&&$(e),a&&a(e)},"aria-label":w?"Collapse":"Expand",children:e(Vc,{$expanded:w})})]}),e(Qc,{"data-testid":"expandable-container","data-expanded":w,style:O,inert:Gc(!w),children:e("div",{ref:k.ref,children:r(Uc,Object.assign({},p,{children:[e(Zc,{"data-testid":"minimisable-container",$height:_,$minimisable:l,children:e("div",{ref:S.ref,children:e("div",{"data-id":"content-container",children:"function"==typeof b?b(f,{minimised:C}):b})})}),l&&r(Xc,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{E(!C)},children:["View ",C?"more":"less"]})]}))})})]})};Jc.displayName="Filter.Item";const Kc=E(Jc)`
    padding: 0 0 ${so["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${so["spacing-8"]} ${so["spacing-8"]} 0;

        ${co.MaxWidth.lg} {
            padding: ${so["spacing-16"]} ${so["spacing-20"]}
                ${so["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${so["spacing-8"]} ${so["spacing-20"]} 0;
    }
`,eu=E.div`
    display: flex;
    flex-direction: column;

    ${co.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${so["spacing-16"]};
    }
`,ru=E.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${so["spacing-8"]} ${so["spacing-12"]};

    cursor: pointer;
    ${no["body-md-regular"]}
    color: ${to.text};
    ${e=>e.$selected&&D`
            color: ${to["text-selected"]};
        `}

    ${co.MaxWidth.lg} {
        padding: ${so["spacing-8"]};
    }
`,tu=E((t=>{var{className:n,checked:i,disabled:o,indeterminate:s,displaySize:a="default",id:l}=t,d=de(t,["className","checked","disabled","indeterminate","displaySize","id"]);const c=h(null);y((()=>{c.current&&(c.current.indeterminate=null!=s&&s)}),[s]);return r(os,{className:n,"data-testid":"checkbox",$displaySize:a,children:[e(ss,Object.assign({id:l,"data-testid":"checkbox-input",type:"checkbox",checked:i,ref:c,tabIndex:o?-1:0,disabled:o,"aria-checked":s?"mixed":i},d)),s?e(is,{$disabled:o,"data-testid":"indeterminate","aria-hidden":!0}):i?e(ns,{$disabled:o,"data-testid":"checkmark","aria-hidden":!0}):o?e(ts,{"data-testid":"empty-disabled-checkbox","aria-hidden":!0}):e(rs,{$disabled:o,"data-testid":"empty-checkbox","aria-hidden":!0})]})}))`
    flex-shrink: 0;
    margin-right: ${so["spacing-8"]};
`,nu=E((({type:n="checkbox",indicator:i,checked:o,styleType:s="default",children:a,childrenMaxLines:l,subLabel:d,disabled:c,error:u,name:m,id:b,className:p,compositeSection:f,removable:v,onRemove:w,"data-testid":$,onChange:F,useContentWidth:C})=>{const{collapsible:E=!0,errors:D,children:k,initialExpanded:S}=f||{},[O,_]=g(o),[A,B]=g(!!S),M=x((()=>{const e=Array.isArray(D)&&(null==D?void 0:D.length)>0,r=!Array.isArray(D)&&!!D;return e||r}),[D]),[z]=g(Te.generate()),j=b?`${b}`:`tg-${z}`,T=h(null);y((()=>{_(o)}),[o]),y((()=>{O&&B(null==S||S)}),[O]);const I=()=>{c||B(!A)},P=()=>{c||!w||w()},R=()=>{let r;switch(n){case"yes":r="tick";break;case"no":r="cross";break;case"checkbox":case"radio":r=n}return e(Ws,{type:r,active:O,disabled:c,$selected:O,$disabled:c})},L=()=>{if(!d)return null;let r;return r="function"==typeof d?d():d,e(As,{"data-id":"toggle-sublabel",children:r})},W=n=>r(t,{children:[e(Rs,{weight:"semibold",$disabled:c,children:"Error"}),e(Ls,{$disabled:c,children:null==n?void 0:n.map(((r,t)=>e("li",{id:`${j}-error-list-item-${t}`,children:e(Rs,{weight:"semibold",$disabled:c,children:r})},t)))})]});return r(ks,{$selected:O,$disabled:c,className:p,$styleType:s,$error:u,$indicator:i,$useContentWidth:C,id:b,"data-testid":$,children:[r(Bs,{id:`${j}-header-container`,$disabled:c,$error:u,$selected:O,$indicator:i,$styleType:s,children:[r(Ms,{$addPadding:v,children:[e(Ss,{ref:T,name:m,id:`${j}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:c,onChange:e=>{if(!c){if(F)return void F(e);switch(n){case"checkbox":_((e=>!e));break;case"radio":case"yes":case"no":O||_(!0)}}},checked:O}),i&&R(),r(Os,{$selected:O,$disabled:c,children:[e(_s,{htmlFor:`${j}-input`,"data-testid":`${j}-toggle-label`,$maxLines:l,children:a}),d&&L()]})]}),v&&e(zs,{type:"button",$disabled:c,onClick:P,id:`${j}-remove-button`,children:"Remove"})]}),k&&r("div",{children:[(!E||A)&&e(Ps,{"data-id":"toggle-composite-children",$isFinalItem:!E,$disabled:c,children:k}),E&&!A&&M&&e(Ts,{$disabled:c,onClick:I,id:`${j}-error-alert`,children:e(Is,{type:c?"description":"error",className:p,showIcon:!0,children:Array.isArray(D)?W(D):D})}),E&&r(js,{$paddingTopRequired:!A&&!M,disabled:c,onClick:I,"data-testid":A?"collapse-button":"expand-button",children:[A?"Show less":"Show more",e(A?Z:U,{"aria-hidden":!0})]})]})]})}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
    min-width: 5rem;
`,iu=E(Jo.Small)`
    height: fit-content;
    padding: 0;
    margin: ${so["spacing-16"]} 0 ${so["spacing-8"]}
        ${so["spacing-12"]};

    ${co.MaxWidth.lg} {
        margin: 0 0 ${so["spacing-16"]} 0;
    }
`,ou=n=>{var{selectedOptions:i,options:o,onSelect:s,labelExtractor:a,valueExtractor:l,useToggleContentWidth:d}=n,c=de(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:u}=F(ko),[m,b]=g(i||[]),[p,f]=g(),[v,x]=g(o.length),w=h(null),C=h(null),E=e=>()=>{const r=[...m],t=m.findIndex((r=>S(r)===S(e)));t>=0?r.splice(t,1):r.push(e),b(r),null==s||s(r)},D=()=>{const e=m.length?[]:o;b(e),null==s||s(e)},k=e=>{var r;return a?a(e):null!==(r=e.label)&&void 0!==r?r:null==e?void 0:e.toString()},S=e=>{var r;return l?l(e):null!==(r=e.value)&&void 0!==r?r:null==e?void 0:e.toString()},O=$((()=>{if(!w.current)return void f(void 0);const e=Array.from(w.current.children);let r=0,t=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(t++,n=o,t>2))break;r=i}x(r),f(t>2?n-8:void 0)}),[]);y((()=>{i!==m&&b(i||[])}),[i]),y((()=>{"default"===u?(()=>{const e=C.current?C.current.offsetTop+C.current.clientHeight:void 0;f(e)})():O()}),[o]),Br({handleWidth:"mobile"===u,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:w,onResize:O});return e(Kc,Object.assign({minimisable:"default"===u?o.length>5:!!p,minimisedHeight:p},c,{children:(n,{minimised:i})=>r(t,{children:[o.length<3?null:e(iu,{styleType:"link",type:"button",onClick:D,children:m.length?"Clear all":"Select all"}),e(eu,{role:"group","aria-label":c.title,ref:w,children:o.map(((t,o)=>"default"===n?((t,n,i)=>{const o=k(t),s=S(t),a=!!m.find((e=>S(e)===s));return r(ru,{$visible:!i||n<5,$selected:a,ref:4===n?C:void 0,children:[e(tu,{displaySize:"small",checked:a,onChange:E(t)}),o]},s)})(t,o,i):((r,t,n)=>{const i=k(r),o=S(r),s=!!m.find((e=>S(e)===o));return e(nu,{type:"checkbox",checked:s,$visible:!n||!!p&&t<=v,onChange:E(r),useContentWidth:d,children:i},o)})(t,o,i)))})]})}))};ou.displayName="Filter.Checkbox";const su=E.div`
    background-color: ${to.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,au=E(Qo)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,lu=(t,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left",loading:c=!1,focusableWhenDisabled:h=!1,onClick:g}=t,m=de(t,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),b={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:a};return r(au,Object.assign({ref:n,"data-testid":m["data-testid"]||"button-with-icon",disabled:o&&!h,"aria-disabled":o,"aria-busy":c,onClick:o?void 0:g},b,m,{children:[c?e(zo,{}):u.cloneElement(l,{"aria-hidden":!0}),e("span",{children:i})]}))};lu.displayName="ButtonWithIcon.Default";const du=(t,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left",loading:c=!1,focusableWhenDisabled:h=!1,onClick:g}=t,m=de(t,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),b={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:a};return r(au,Object.assign({ref:n,"data-testid":m["data-testid"]||"button-with-icon",disabled:o&&!h,"aria-disabled":o,"aria-busy":c,onClick:o?void 0:g},b,m,{children:[c?e(zo,{}):u.cloneElement(l,{"aria-hidden":!0}),e("span",{children:i})]}))};du.displayName="ButtonWithIcon.Small";const cu={Default:u.forwardRef(lu),Small:u.forwardRef(du)},uu=E.div`
    background-color: ${to.bg};
    border: ${oo["width-010"]} ${oo.solid} ${to.border};
    border-radius: ${ao.md};
    overflow: hidden;
    width: 100%;
`,hu=E.div`
    background-color: ${to["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,gu=E.div`
    background-color: ${to.bg};
    height: 100%;
    width: 100%;
`,mu=E.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,bu=E.div`
    display: flex;
    align-items: center;

    background-color: ${to.bg};

    ${co.MaxWidth.lg} {
        border-bottom: ${oo["width-010"]} ${oo.solid}
            ${to.border};
    }
`,pu=E(us.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${so["spacing-24"]} 0 ${so["spacing-24"]}
        ${so["spacing-20"]};

    ${co.MaxWidth.lg} {
        text-align: center;
        margin: ${so["spacing-24"]} 0;
    }
`,fu=E(Ec)`
    padding: ${so["spacing-24"]} ${so["spacing-20"]};
    margin-right: auto;
    color: ${to.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${to["icon-hover"]};
    }
`,yu=E(Jo.Small)`
    background-color: transparent;
    padding-right: ${so["spacing-20"]};
    padding-left: ${so["spacing-20"]};
    height: 100%;

    ${co.MaxWidth.lg} {
        padding: ${so["spacing-24"]} ${so["spacing-20"]};
    }
`,vu=E(cu.Default)`
    width: 100%;
`,xu=E.div`
    padding: ${so["spacing-24"]} ${so["spacing-20"]};
    background-color: ${to.bg};
    border-top: ${oo["width-010"]} ${oo.solid} ${to.border};
`,wu=E(Jo.Default)`
    width: 100%;
`,$u=({onDismiss:t,onDone:n,children:i})=>r(su,{children:[e(fu,{onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(le,{})}),e(mu,{children:i}),e(xu,{children:e(wu,{onClick:n,type:"button",children:"Done"})})]});$u.displayName="Filter.Page";const Fu=n=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:o="light",headerTitle:s="Filters",clearButtonDisabled:a=!1,onClear:c,onDismiss:u,onDone:m,children:b}=n,p=de(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[f,v]=g(!1),x=h(null),w=h(null),$=S(),F=lo["lg-max"]({theme:$}),C=me.useMediaQuery({maxWidth:F});y((()=>{C||D()}),[C]);const E=()=>{v(!0)},D=()=>{v(!1),u&&u()},k=()=>{v(!1),m&&m()},O=()=>{c&&c()},_=e=>"function"==typeof b?b(e):b,A=t=>r(bu,{children:["mobile"===t&&e(fu,{onClick:D,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(d,{})}),e(pu,{weight:"semibold",children:s}),e(yu,{styleType:"link",type:"button",onClick:O,disabled:a,children:"Clear"})]});return e("div",Object.assign({},p,{children:e(ko.Provider,C?{value:{mode:"mobile",rootNode:x},children:r(t,{children:[e(vu,{"data-testid":"filter-show-button",styleType:o,onClick:E,type:"button",icon:e(l,{}),children:i}),e(Co,{show:f,disableTransition:!0,children:e(gu,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:r(hu,{ref:x,children:[A("mobile"),e(mu,{children:_("mobile")}),e(xu,{children:e(wu,{onClick:k,type:"button",children:"Done"})})]})})})]})}:{value:{mode:"default",rootNode:w},children:r(uu,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:w,children:[A("default"),_("default")]})})}))};Fu.displayName="Filter";const Cu=Object.assign(Fu,{Item:Jc,Page:$u,Checkbox:ou});export{Cu as Filter};
//# sourceMappingURL=index.js.map
