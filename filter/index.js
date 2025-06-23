import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import{SquareIcon as n,SquareFillIcon as i,SquareTickFillIcon as o,MinusSquareFillIcon as s,ChevronDownIcon as a,FilterIcon as l,CrossIcon as d}from"@lifesg/react-icons";import*as c from"react";import u,{useRef as h,useState as g,isValidElement as b,createRef as m,cloneElement as p,PureComponent as f,useEffect as y,useLayoutEffect as v,useMemo as x,forwardRef as w,useCallback as $,useContext as F}from"react";import C,{css as E,keyframes as k,useTheme as D}from"styled-components";import{useFloatingTree as S,FloatingTree as O,useFloatingNodeId as _,FloatingNode as A,useFloating as M,autoUpdate as B,offset as z,flip as j,shift as T,limitShift as I,useClick as P,useDismiss as R,useHover as L,useInteractions as W,FloatingPortal as Y,FloatingFocusManager as H}from"@floating-ui/react";import N,{findDOMNode as V,unstable_batchedUpdates as q}from"react-dom";import{ChevronDownIcon as Q}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as U}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as Z}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as X}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as G}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as J}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as K}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as ee}from"@lifesg/react-icons/external";import{CircleIcon as re}from"@lifesg/react-icons/circle";import{CircleDotIcon as te}from"@lifesg/react-icons/circle-dot";import{CrossIcon as ne}from"@lifesg/react-icons/cross";import{SquareIcon as ie}from"@lifesg/react-icons/square";import{SquareTickFillIcon as oe}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as se}from"@lifesg/react-icons/tick";import{ChevronLeftIcon as ae}from"@lifesg/react-icons/chevron-left";function le(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var de="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ce(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ue,he={exports:{}};ue=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,r,t)=>{var n,i=t(/*! react-is */"./node_modules/react-is/index.js"),o=t(/*! object-assign */"./node_modules/object-assign/index.js"),s=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:b(d),arrayOf:function(e){return b((function(r,t,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=r[t];if(!Array.isArray(a))return new g("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<a.length;l++){var d=e(a,l,n,i,o+"["+l+"]",s);if(d instanceof Error)return d}return null}))},element:b((function(r,t,n,i,o){var s=r[t];return e(s)?null:new g("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:b((function(e,r,t,n,o){var s=e[r];return i.isValidElementType(s)?null:new g("Invalid "+n+" `"+o+"` of type `"+y(s)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return b((function(r,t,n,i,o){if(!(r[t]instanceof e)){var s=e.name||c;return new g("Invalid "+i+" `"+o+"` of type `"+((a=r[t]).constructor&&a.constructor.name?a.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+s+"`.")}var a;return null}))},node:b((function(e,r,t,n,i){return f(e[r])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return b((function(r,t,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],d=y(l);if("object"!==d)return new g("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(a(l,c)){var u=e(l,c,n,i,o+"."+c,s);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?b((function(r,t,n,i,o){for(var s=r[t],a=0;a<e.length;a++)if(h(s,e[a]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===v(r)?String(r):r}));return new g("Invalid "+i+" `"+o+"` of value `"+String(s)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(t)+" at index "+r+"."),d}return b((function(r,t,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,t,n,i,o,s);if(null==c)return null;c.data&&a(c.data,"expectedType")&&l.push(c.data.expectedType)}return new g("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return b((function(r,t,n,i,o){var a=r[t],l=y(a);if("object"!==l)return new g("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return p(n,i,o,d,v(c));var u=c(a,d,n,i,o+"."+d,s);if(u)return u}return null}))},exact:function(e){return b((function(r,t,n,i,l){var d=r[t],c=y(d);if("object"!==c)return new g("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},r[t],e);for(var h in u){var b=e[h];if(a(e,h)&&"function"!=typeof b)return p(n,i,l,h,v(b));if(!b)return new g("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=b(d,h,n,i,l+"."+h,s);if(m)return m}return null}))}};function h(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function g(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function b(e){var t={},i=0;function o(o,a,l,d,u,h,b){if(d=d||c,h=h||l,b!==s){if(r){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var p=d+":"+l;!t[p]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[p]=!0,i++)}}return null==a[l]?o?null===a[l]?new g("The "+u+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new g("The "+u+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(a,l,d,u,h)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function m(e){return b((function(r,t,n,i,o,s){var a=r[t];return y(a)!==e?new g("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function p(e,r,t,n,i){return new g((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function f(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(f);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!n)return!1;var i,o=n.call(r);if(n!==r.entries){for(;!(i=o.next()).done;)if(!f(i.value))return!1}else for(;!(i=o.next()).done;){var s=i.value;if(s&&!f(s[1]))return!1}return!0;default:return!1}}function y(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function v(e){if(null==e)return""+e;var r=y(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function x(e){var r=v(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return g.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,f=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var g=e.type;switch(g){case d:case c:case i:case s:case o:case h:return g;default:var p=g&&g.$$typeof;switch(p){case l:case u:case m:case b:case a:return p;default:return r}}case n:return r}}}var w=d,$=c,F=l,C=a,E=t,k=u,D=i,S=m,O=b,_=n,A=s,M=o,B=h,z=!1;function j(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=$,r.ContextConsumer=F,r.ContextProvider=C,r.Element=E,r.ForwardRef=k,r.Fragment=D,r.Lazy=S,r.Memo=O,r.Portal=_,r.Profiler=A,r.StrictMode=M,r.Suspense=B,r.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===d},r.isConcurrentMode=j,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===a},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===m},r.isMemo=function(e){return x(e)===b},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===s},r.isStrictMode=function(e){return x(e)===o},r.isSuspense=function(e){return x(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===s||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===b||e.$$typeof===a||e.$$typeof===l||e.$$typeof===u||e.$$typeof===f||e.$$typeof===y||e.$$typeof===v||e.$$typeof===p)},r.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(/*! react */"react"),o=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),s=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),d=n(t(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,s.default)(t)]=e[t],r}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,i.useState)(r),n=t[0],o=t[1];return(0,i.useEffect)((function(){var e=r();n!==e&&o(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,i.useContext)(d.default),t=function(){return c(e)||c(r)},n=(0,i.useState)(t),o=n[0],s=n[1];return(0,i.useEffect)((function(){var e=t();(0,a.shallowEqualObjects)(o,e)||s(e)}),[e,r]),o}(r),s=h(e);if(!s)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,o.default)(e,r||{},!!r)},n=(0,i.useState)(t),s=n[0],a=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=t();return a(e),function(){e&&e.dispose()}}}),[e,r]),s}(s,n),g=function(e){var r=(0,i.useState)(e.matches),t=r[0],n=r[1];return(0,i.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),b=u();return(0,i.useEffect)((function(){b&&t&&t(g)}),[g]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),g}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var ge=he.exports=ue(u),be={exports:{}};be.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,s=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!n&&i&&(v=i),i||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new k(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var k=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===g)},f.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return C(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<C(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),g=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(a)},b=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return g(n?f-x:f+(6-x),p);case a:case h:return b(y+"Hours",0);case s:return b(y+"Minutes",1);case o:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[a]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[g](b),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else g&&this.$d[g](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var h,g=this;n=Number(n);var b=E.p(c),m=function(e){var r=C(g);return E.w(r.date(r.date()+Math.round(e*n)),g)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===a)return m(1);if(b===l)return m(7);var p=(h={},h[o]=r,h[s]=t,h[i]=e,h)[b]||1,f=this.$d.getTime()+n*p;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,s=this.$m,a=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(t.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return b(o,s,!0);case"A":return b(o,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,g){var b,m=this,p=E.p(h),f=C(n),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(m,f)};switch(p){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-y)/6048e5;break;case a:b=(v-y)/864e5;break;case s:b=v/t;break;case o:b=v/r;break;case i:b=v/e;break;default:b=v}return g?b:E.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),D=k.prototype;return C.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){D[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,k,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var me=ce(be.exports),pe={exports:{}};pe.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[t,a("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[t,a("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<a;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,b=s||(i||o?1:g.getDate()),m=i||g.getFullYear(),p=0;i&&!o||(p=o>0?o-1:g.getMonth());var f=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,p,b,f,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,p,b,f,y,v,x)):new Date(m,p,b,f,y,v,x)}catch(e){return new Date("")}}(r,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var g=a.length,b=1;b<=g;b+=1){s[1]=a[b-1];var m=t.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var fe=ce(pe.exports),ye={exports:{}};ye.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),s=t(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var ve=ce(ye.exports),xe={exports:{}};xe.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var we=ce(xe.exports),$e={exports:{}};$e.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Fe,Ce,Ee,ke=ce($e.exports),De={exports:{}},Se=ce(De.exports=(Fe={year:0,month:1,day:2,hour:3,minute:4,second:5},Ce={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Ce[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Ce[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Fe[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",b=+e;return(t.utc(g).valueOf()-(b-=b%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,a=i||r||n,l=o(+t(),a);if("string"!=typeof e)return t(e).tz(a);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var s=o(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=a,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));me.extend(ve),me.extend(ke),me.extend(we),me.extend(fe),me.extend(Se),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=me(r).startOf("week");return Oe(t).map((e=>_e(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return _e(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(me(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+me(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=me(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?me(n):void 0,i?me(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(Ee||(Ee={}));const Oe=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},_e=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Ae=[1,3,5,7,8,10,12],Me=[4,6,9,11];var Be,ze,je,Te;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),s=parseInt(n);return 0==i?"1":Ae.includes(o)?Math.min(i,31).toString():Me.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=me(e,t);return me(r,t).diff(n,"minute")},e.toDayjs=e=>e?me(e):me(),e.addMinutesToTime=(e,r,t="HH:mm")=>me(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>me(e).isSame(me(r),t)}(Be||(Be={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!me(e).isBefore(n,"day"))||!(!i||!me(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(me(e).isValid())return e}return""}}(ze||(ze={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(je||(je={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const s=n+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=t;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(Te||(Te={}));var Ie=function(e,r){return Ie=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Ie(e,r)};var Pe=function(){return Pe=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Pe.apply(this,arguments)};var Re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Le=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},We="object"==typeof Re&&Re&&Re.Object===Object&&Re,Ye="object"==typeof self&&self&&self.Object===Object&&self,He=We||Ye||Function("return this")(),Ne=He,Ve=function(){return Ne.Date.now()},qe=/\s/;var Qe=function(e){for(var r=e.length;r--&&qe.test(e.charAt(r)););return r},Ue=/^\s+/;var Ze=function(e){return e?e.slice(0,Qe(e)+1).replace(Ue,""):e},Xe=He.Symbol,Ge=Xe,Je=Object.prototype,Ke=Je.hasOwnProperty,er=Je.toString,rr=Ge?Ge.toStringTag:void 0;var tr=function(e){var r=Ke.call(e,rr),t=e[rr];try{e[rr]=void 0;var n=!0}catch(e){}var i=er.call(e);return n&&(r?e[rr]=t:delete e[rr]),i},nr=Object.prototype.toString;var ir=tr,or=function(e){return nr.call(e)},sr=Xe?Xe.toStringTag:void 0;var ar=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":sr&&sr in Object(e)?ir(e):or(e)},lr=function(e){return null!=e&&"object"==typeof e};var dr=Ze,cr=Le,ur=function(e){return"symbol"==typeof e||lr(e)&&"[object Symbol]"==ar(e)},hr=/^[-+]0x[0-9a-f]+$/i,gr=/^0b[01]+$/i,br=/^0o[0-7]+$/i,mr=parseInt;var pr=Le,fr=Ve,yr=function(e){if("number"==typeof e)return e;if(ur(e))return NaN;if(cr(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=cr(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=dr(e);var t=gr.test(e);return t||br.test(e)?mr(e.slice(2),t?2:8):hr.test(e)?NaN:+e},vr=Math.max,xr=Math.min;var wr=function(e,r,t){var n,i,o,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=n,o=i;return n=i=void 0,d=r,s=e.apply(o,t)}function b(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function m(){var e=fr();if(b(e))return p(e);a=setTimeout(m,function(e){var t=r-(e-l);return u?xr(t,o-(e-d)):t}(e))}function p(e){return a=void 0,h&&n?g(e):(n=i=void 0,s)}function f(){var e=fr(),t=b(e);if(n=arguments,i=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(m,r),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,r),g(l)}return void 0===a&&(a=setTimeout(m,r)),s}return r=yr(r)||0,pr(t)&&(c=!!t.leading,o=(u="maxWait"in t)?vr(yr(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),f.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},f.flush=function(){return void 0===a?s:p(fr())},f},$r=wr,Fr=Le;var Cr=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Fr(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),$r(e,r,{leading:n,maxWait:r,trailing:i})},Er=function(e,r,t,n){switch(r){case"debounce":return wr(e,t,n);case"throttle":return Cr(e,t,n);default:return e}},kr=function(e){return"function"==typeof e},Dr=function(){return"undefined"==typeof window},Sr=function(e){return e instanceof Element||e instanceof HTMLDocument},Or=function(e,r,t,n){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!n||r.height===s&&!t?r:(e&&kr(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Dr()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Dr())return null;if(r)return document.querySelector(r);if(n&&Sr(n))return n;if(t.targetRef&&Sr(t.targetRef.current))return t.targetRef.current;var i=V(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=Or(a,t.setState.bind(t),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Dr()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return kr(r)?"renderProp":kr(n)?"childFunction":b(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=m(),t.observableElement=null,Dr()||(t.resizeHandler=Er(t.createResizeHandler,i,s,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Ie(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Dr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,n=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,a={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(a);case"childFunction":return(e=n)(a);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(a,["targetRef"]);return p(e,l)}return p(e,a);case"childArray":return(e=n).map((function(e){return!!e&&p(e,a)}));default:return c.createElement(o,null)}}}(f);var _r=Dr()?y:v;function Ar(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,s=e.refreshOptions,a=e.handleWidth,l=void 0===a||a,d=e.handleHeight,c=void 0===d||d,u=e.targetRef,b=e.observerOptions,m=e.onResize,p=h(t),f=h(null),y=null!=u?u:f,v=h(),x=g({width:void 0,height:void 0}),w=x[0],$=x[1];return _r((function(){if(!Dr()){var e=Or(m,$,l,c);v.current=Er((function(r){(l||c)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!Dr()&&e({width:n,height:i}),p.current=!1}))}),n,o,s);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,s,l,c,m,b,y.current]),Pe({ref:y},w)}var Mr=Array.isArray,Br="object"==typeof de&&de&&de.Object===Object&&de,zr="object"==typeof self&&self&&self.Object===Object&&self,jr=Br||zr||Function("return this")(),Tr=jr.Symbol,Ir=Tr,Pr=Object.prototype,Rr=Pr.hasOwnProperty,Lr=Pr.toString,Wr=Ir?Ir.toStringTag:void 0;var Yr=function(e){var r=Rr.call(e,Wr),t=e[Wr];try{e[Wr]=void 0;var n=!0}catch(e){}var i=Lr.call(e);return n&&(r?e[Wr]=t:delete e[Wr]),i},Hr=Object.prototype.toString;var Nr=Yr,Vr=function(e){return Hr.call(e)},qr=Tr?Tr.toStringTag:void 0;var Qr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":qr&&qr in Object(e)?Nr(e):Vr(e)};var Ur=Qr,Zr=function(e){return null!=e&&"object"==typeof e};var Xr=function(e){return"symbol"==typeof e||Zr(e)&&"[object Symbol]"==Ur(e)},Gr=Mr,Jr=Xr,Kr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,et=/^\w*$/;var rt=function(e,r){if(Gr(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Jr(e))||(et.test(e)||!Kr.test(e)||null!=r&&e in Object(r))};var tt=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},nt=Qr,it=tt;var ot,st=function(e){if(!it(e))return!1;var r=nt(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},at=jr["__core-js_shared__"],lt=(ot=/[^.]+$/.exec(at&&at.keys&&at.keys.IE_PROTO||""))?"Symbol(src)_1."+ot:"";var dt=function(e){return!!lt&&lt in e},ct=Function.prototype.toString;var ut=st,ht=dt,gt=tt,bt=function(e){if(null!=e){try{return ct.call(e)}catch(e){}try{return e+""}catch(e){}}return""},mt=/^\[object .+?Constructor\]$/,pt=Function.prototype,ft=Object.prototype,yt=pt.toString,vt=ft.hasOwnProperty,xt=RegExp("^"+yt.call(vt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var wt=function(e,r){return null==e?void 0:e[r]},$t=function(e){return!(!gt(e)||ht(e))&&(ut(e)?xt:mt).test(bt(e))},Ft=wt;var Ct=function(e,r){var t=Ft(e,r);return $t(t)?t:void 0},Et=Ct(Object,"create"),kt=Et;var Dt=function(){this.__data__=kt?kt(null):{},this.size=0};var St=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ot=Et,_t=Object.prototype.hasOwnProperty;var At=function(e){var r=this.__data__;if(Ot){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return _t.call(r,e)?r[e]:void 0},Mt=Et,Bt=Object.prototype.hasOwnProperty;var zt=function(e){var r=this.__data__;return Mt?void 0!==r[e]:Bt.call(r,e)},jt=Et;var Tt=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=jt&&void 0===r?"__lodash_hash_undefined__":r,this},It=Dt,Pt=St,Rt=At,Lt=zt,Wt=Tt;function Yt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Yt.prototype.clear=It,Yt.prototype.delete=Pt,Yt.prototype.get=Rt,Yt.prototype.has=Lt,Yt.prototype.set=Wt;var Ht=Yt;var Nt=function(){this.__data__=[],this.size=0};var Vt=function(e,r){return e===r||e!=e&&r!=r};var qt=function(e,r){for(var t=e.length;t--;)if(Vt(e[t][0],r))return t;return-1},Qt=qt,Ut=Array.prototype.splice;var Zt=function(e){var r=this.__data__,t=Qt(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ut.call(r,t,1),--this.size,!0)},Xt=qt;var Gt=function(e){var r=this.__data__,t=Xt(r,e);return t<0?void 0:r[t][1]},Jt=qt;var Kt=function(e){return Jt(this.__data__,e)>-1},en=qt;var rn=function(e,r){var t=this.__data__,n=en(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},tn=Nt,nn=Zt,on=Gt,sn=Kt,an=rn;function ln(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ln.prototype.clear=tn,ln.prototype.delete=nn,ln.prototype.get=on,ln.prototype.has=sn,ln.prototype.set=an;var dn=ln,cn=Ct(jr,"Map"),un=Ht,hn=dn,gn=cn;var bn=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var mn=function(e,r){var t=e.__data__;return bn(r)?t["string"==typeof r?"string":"hash"]:t.map},pn=mn;var fn=function(e){var r=pn(this,e).delete(e);return this.size-=r?1:0,r},yn=mn;var vn=function(e){return yn(this,e).get(e)},xn=mn;var wn=function(e){return xn(this,e).has(e)},$n=mn;var Fn=function(e,r){var t=$n(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Cn=function(){this.size=0,this.__data__={hash:new un,map:new(gn||hn),string:new un}},En=fn,kn=vn,Dn=wn,Sn=Fn;function On(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}On.prototype.clear=Cn,On.prototype.delete=En,On.prototype.get=kn,On.prototype.has=Dn,On.prototype.set=Sn;var _n=On;function An(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(An.Cache||_n),t}An.Cache=_n;var Mn=An;var Bn=function(e){var r=Mn(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},zn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jn=/\\(\\)?/g,Tn=Bn((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(zn,(function(e,t,n,i){r.push(n?i.replace(jn,"$1"):t||e)})),r}));var In=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Pn=Mr,Rn=Xr,Ln=Tr?Tr.prototype:void 0,Wn=Ln?Ln.toString:void 0;var Yn=function e(r){if("string"==typeof r)return r;if(Pn(r))return In(r,e)+"";if(Rn(r))return Wn?Wn.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Hn=Yn;var Nn=Mr,Vn=rt,qn=Tn,Qn=function(e){return null==e?"":Hn(e)};var Un=Xr;var Zn=function(e,r){return Nn(e)?e:Vn(e,r)?[e]:qn(Qn(e))},Xn=function(e){if("string"==typeof e||Un(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Gn=function(e,r){for(var t=0,n=(r=Zn(r,e)).length;null!=e&&t<n;)e=e[Xn(r[t++])];return t&&t==n?e:void 0};var Jn=ce((function(e,r,t){var n=null==e?void 0:Gn(e,r);return void 0===n?t:n}));const Kn=(e,r,t)=>Jn(t,r)||Jn(e,r),ei=(e,r)=>{const t=r||e.defaultValue;return Jn(e.collections,t)},ri={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ti=e=>r=>{var t;const n=r.theme,i=ei(ri,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Kn(i,e,n.overrides.border)}px`:`${i[e]}px`},ni={"width-005":ti("width-005"),"width-010":ti("width-010"),"width-020":ti("width-020"),"width-040":ti("width-040"),solid:(ii="solid",e=>{var r;const t=e.theme,n=ei(ri,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Kn(n,ii,t.overrides.border):n[ii];return"function"==typeof i?i(e):i})};var ii;const oi={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},si={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ai={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},li={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},di={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ci={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ui={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},hi={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},gi={collections:{lifesg:ai,bookingsg:oi,rbs:ui,mylegacy:li,ccube:si,oneservice:di,pa:ci,a11yplayground:hi},defaultValue:"lifesg"},bi={collections:{lifesg:ai,bookingsg:oi,rbs:ui,mylegacy:li,ccube:si,oneservice:di,pa:ci,a11yplayground:hi},defaultValue:"lifesg"},mi=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=ei(i?bi:gi,null==n?void 0:n.colourScheme),s=i?"primitiveColourDark":"primitiveColour",a=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s];return a?Kn(o,e,a):o[e]},pi={"brand-10":mi("brand-10"),"brand-20":mi("brand-20"),"brand-30":mi("brand-30"),"brand-40":mi("brand-40"),"brand-50":mi("brand-50"),"brand-60":mi("brand-60"),"brand-70":mi("brand-70"),"brand-80":mi("brand-80"),"brand-90":mi("brand-90"),"brand-95":mi("brand-95"),"brand-100":mi("brand-100"),"primary-10":mi("primary-10"),"primary-20":mi("primary-20"),"primary-30":mi("primary-30"),"primary-40":mi("primary-40"),"primary-50":mi("primary-50"),"primary-60":mi("primary-60"),"primary-70":mi("primary-70"),"primary-80":mi("primary-80"),"primary-90":mi("primary-90"),"primary-95":mi("primary-95"),"primary-100":mi("primary-100"),"secondary-10":mi("secondary-10"),"secondary-20":mi("secondary-20"),"secondary-30":mi("secondary-30"),"secondary-40":mi("secondary-40"),"secondary-50":mi("secondary-50"),"secondary-60":mi("secondary-60"),"secondary-70":mi("secondary-70"),"secondary-80":mi("secondary-80"),"secondary-90":mi("secondary-90"),"secondary-95":mi("secondary-95"),"secondary-100":mi("secondary-100"),"neutral-10":mi("neutral-10"),"neutral-20":mi("neutral-20"),"neutral-30":mi("neutral-30"),"neutral-40":mi("neutral-40"),"neutral-50":mi("neutral-50"),"neutral-60":mi("neutral-60"),"neutral-70":mi("neutral-70"),"neutral-80":mi("neutral-80"),"neutral-90":mi("neutral-90"),"neutral-95":mi("neutral-95"),"neutral-100":mi("neutral-100"),"success-10":mi("success-10"),"success-20":mi("success-20"),"success-30":mi("success-30"),"success-40":mi("success-40"),"success-50":mi("success-50"),"success-60":mi("success-60"),"success-70":mi("success-70"),"success-80":mi("success-80"),"success-90":mi("success-90"),"success-95":mi("success-95"),"success-100":mi("success-100"),"warning-10":mi("warning-10"),"warning-20":mi("warning-20"),"warning-30":mi("warning-30"),"warning-40":mi("warning-40"),"warning-50":mi("warning-50"),"warning-60":mi("warning-60"),"warning-70":mi("warning-70"),"warning-80":mi("warning-80"),"warning-90":mi("warning-90"),"warning-95":mi("warning-95"),"warning-100":mi("warning-100"),"error-10":mi("error-10"),"error-20":mi("error-20"),"error-30":mi("error-30"),"error-40":mi("error-40"),"error-50":mi("error-50"),"error-60":mi("error-60"),"error-70":mi("error-70"),"error-80":mi("error-80"),"error-90":mi("error-90"),"error-95":mi("error-95"),"error-100":mi("error-100"),"info-10":mi("info-10"),"info-20":mi("info-20"),"info-30":mi("info-30"),"info-40":mi("info-40"),"info-50":mi("info-50"),"info-60":mi("info-60"),"info-70":mi("info-70"),"info-80":mi("info-80"),"info-90":mi("info-90"),"info-95":mi("info-95"),"info-100":mi("info-100"),white:mi("white"),black:mi("black"),"primary-inverse":mi("primary-inverse")},fi={text:mi("neutral-20"),"text-subtle":mi("neutral-30"),"text-subtler":mi("neutral-50"),"text-subtlest":mi("neutral-60"),"text-primary":mi("primary-50"),"text-hover":mi("primary-40"),"text-selected":mi("primary-50"),"text-selected-hover":mi("primary-40"),"text-disabled":mi("neutral-50"),"text-disabled-subtle":mi("neutral-60"),"text-disabled-subtlest":mi("neutral-80"),"text-selected-disabled":mi("neutral-20"),"text-success":mi("success-40"),"text-warning":mi("warning-40"),"text-error":mi("error-40"),"text-info":mi("info-40"),"text-inverse":mi("white"),icon:mi("neutral-50"),"icon-subtle":mi("neutral-60"),"icon-strongest":mi("neutral-20"),"icon-primary":mi("primary-50"),"icon-primary-subtle":mi("primary-60"),"icon-primary-subtlest":mi("primary-70"),"icon-hover":mi("primary-40"),"icon-selected":mi("primary-50"),"icon-selected-hover":mi("primary-40"),"icon-disabled":mi("neutral-50"),"icon-disabled-subtle":mi("neutral-60"),"icon-selected-disabled":mi("neutral-60"),"icon-success":mi("success-50"),"icon-warning":mi("warning-60"),"icon-error":mi("error-50"),"icon-error-strong":mi("error-40"),"icon-info":mi("info-50"),"icon-inverse":mi("white"),"icon-primary-inverse":mi("primary-inverse"),border:mi("neutral-90"),"border-strong":mi("neutral-70"),"border-stronger":mi("neutral-50"),"border-primary":mi("primary-50"),"border-primary-subtle":mi("primary-60"),"border-hover":mi("primary-90"),"border-hover-strong":mi("primary-60"),"border-selected":mi("primary-50"),"border-selected-subtle":mi("primary-70"),"border-selected-subtlest":mi("primary-90"),"border-selected-hover":mi("primary-40"),"border-focus":mi("primary-60"),"border-focus-strong":mi("primary-50"),"border-disabled":mi("neutral-90"),"border-selected-disabled":mi("neutral-70"),"border-success":mi("success-60"),"border-warning":mi("warning-60"),"border-error":mi("error-60"),"border-error-focus":mi("error-60"),"border-error-focus-strong":mi("error-40"),"border-error-strong":mi("error-40"),"border-info":mi("info-60"),bg:mi("white"),"bg-strong":mi("neutral-100"),"bg-stronger":mi("neutral-95"),"bg-strongest":mi("neutral-90"),"bg-hover":mi("primary-95"),"bg-hover-strong":mi("primary-90"),"bg-hover-subtle":mi("primary-100"),"bg-hover-neutral":mi("neutral-100"),"bg-hover-neutral-strong":mi("neutral-90"),"bg-selected":mi("primary-95"),"bg-selected-hover":mi("primary-90"),"bg-selected-strong":mi("primary-90"),"bg-selected-stronger":mi("primary-70"),"bg-selected-strongest":mi("primary-50"),"bg-selected-strongest-hover":mi("primary-40"),"bg-disabled":mi("neutral-95"),"bg-selected-disabled":mi("neutral-95"),"bg-selected-stronger-disabled":mi("neutral-70"),"bg-success":mi("success-100"),"bg-success-hover":mi("success-95"),"bg-success-strong":mi("success-50"),"bg-success-strong-hover":mi("success-40"),"bg-warning":mi("warning-100"),"bg-warning-hover":mi("warning-95"),"bg-warning-strong":mi("warning-50"),"bg-warning-strong-hover":mi("warning-40"),"bg-info":mi("info-100"),"bg-info-hover":mi("info-95"),"bg-info-strong":mi("info-50"),"bg-info-strong-hover":mi("info-40"),"bg-error":mi("error-100"),"bg-error-hover":mi("error-95"),"bg-error-strong":mi("error-50"),"bg-error-strong-hover":mi("error-40"),"bg-inverse":mi("neutral-20"),"bg-inverse-subtle":mi("neutral-30"),"bg-inverse-subtler":mi("neutral-50"),"bg-inverse-subtlest":mi("neutral-60"),"bg-inverse-hover":mi("neutral-40"),"bg-primary":mi("primary-50"),"bg-primary-subtle":mi("primary-60"),"bg-primary-subtler":mi("primary-95"),"bg-primary-subtlest":mi("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":mi("primary-40"),"bg-primary-subtlest-hover":mi("primary-90"),"bg-primary-subtlest-selected":mi("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:mi("primary-50"),"hyperlink-hover":mi("primary-40"),"hyperlink-visited":mi("primary-40"),"hyperlink-inverse":mi("primary-inverse"),"focus-ring":mi("black"),"focus-ring-inverse":mi("white")},yi={text:mi("neutral-100"),"text-subtle":mi("neutral-80"),"text-subtler":mi("neutral-60"),"text-subtlest":mi("neutral-50"),"text-primary":mi("primary-60"),"text-hover":mi("primary-70"),"text-selected":mi("primary-60"),"text-selected-hover":mi("primary-70"),"text-disabled":mi("neutral-60"),"text-disabled-subtle":mi("neutral-50"),"text-disabled-subtlest":mi("neutral-30"),"text-selected-disabled":mi("neutral-90"),"text-success":mi("success-70"),"text-warning":mi("warning-70"),"text-error":mi("error-70"),"text-info":mi("info-70"),"text-inverse":mi("black"),icon:mi("neutral-60"),"icon-subtle":mi("neutral-50"),"icon-strongest":mi("neutral-90"),"icon-primary":mi("primary-60"),"icon-primary-subtle":mi("primary-50"),"icon-primary-subtlest":mi("primary-40"),"icon-hover":mi("primary-70"),"icon-selected":mi("primary-60"),"icon-selected-hover":mi("primary-70"),"icon-disabled":mi("neutral-60"),"icon-disabled-subtle":mi("neutral-50"),"icon-selected-disabled":mi("neutral-50"),"icon-success":mi("success-60"),"icon-warning":mi("warning-50"),"icon-error":mi("error-60"),"icon-error-strong":mi("error-70"),"icon-info":mi("info-60"),"icon-inverse":mi("black"),"icon-primary-inverse":mi("primary-inverse"),border:mi("neutral-20"),"border-strong":mi("neutral-40"),"border-stronger":mi("neutral-60"),"border-primary":mi("primary-60"),"border-primary-subtle":mi("primary-50"),"border-hover":mi("primary-20"),"border-hover-strong":mi("primary-50"),"border-selected":mi("primary-60"),"border-selected-subtle":mi("primary-40"),"border-selected-subtlest":mi("primary-20"),"border-selected-hover":mi("primary-70"),"border-focus":mi("primary-50"),"border-focus-strong":mi("primary-60"),"border-disabled":mi("neutral-20"),"border-selected-disabled":mi("neutral-40"),"border-success":mi("success-50"),"border-warning":mi("warning-50"),"border-error":mi("error-50"),"border-error-focus":mi("error-50"),"border-error-focus-strong":mi("error-70"),"border-error-strong":mi("error-70"),"border-info":mi("info-50"),bg:mi("black"),"bg-strong":mi("neutral-10"),"bg-stronger":mi("neutral-20"),"bg-strongest":mi("neutral-20"),"bg-hover":mi("primary-20"),"bg-hover-strong":mi("primary-20"),"bg-hover-subtle":mi("primary-10"),"bg-hover-neutral":mi("neutral-10"),"bg-hover-neutral-strong":mi("neutral-20"),"bg-selected":mi("primary-20"),"bg-selected-hover":mi("primary-20"),"bg-selected-strong":mi("primary-20"),"bg-selected-stronger":mi("primary-40"),"bg-selected-strongest":mi("primary-60"),"bg-selected-strongest-hover":mi("primary-70"),"bg-disabled":mi("neutral-20"),"bg-selected-disabled":mi("neutral-20"),"bg-selected-stronger-disabled":mi("neutral-40"),"bg-success":mi("success-10"),"bg-success-hover":mi("success-20"),"bg-success-strong":mi("success-60"),"bg-success-strong-hover":mi("success-70"),"bg-warning":mi("warning-10"),"bg-warning-hover":mi("warning-20"),"bg-warning-strong":mi("warning-60"),"bg-warning-strong-hover":mi("warning-70"),"bg-info":mi("info-10"),"bg-info-hover":mi("info-20"),"bg-info-strong":mi("info-60"),"bg-info-strong-hover":mi("info-70"),"bg-error":mi("error-10"),"bg-error-hover":mi("error-20"),"bg-error-strong":mi("error-60"),"bg-error-strong-hover":mi("error-70"),"bg-inverse":mi("neutral-90"),"bg-inverse-subtle":mi("neutral-80"),"bg-inverse-subtler":mi("neutral-60"),"bg-inverse-subtlest":mi("neutral-50"),"bg-inverse-hover":mi("neutral-70"),"bg-primary":mi("primary-60"),"bg-primary-subtle":mi("primary-50"),"bg-primary-subtler":mi("primary-20"),"bg-primary-subtlest":mi("primary-10"),"bg-available":"#185339","bg-primary-hover":mi("primary-70"),"bg-primary-subtlest-hover":mi("primary-20"),"bg-primary-subtlest-selected":mi("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:mi("primary-60"),"hyperlink-hover":mi("primary-70"),"hyperlink-visited":mi("primary-70"),"hyperlink-inverse":mi("primary-inverse"),"focus-ring":mi("primary-60"),"focus-ring-inverse":mi("black")},vi={text:mi("neutral-30"),"text-subtle":mi("neutral-40"),"text-subtler":mi("neutral-50"),"text-subtlest":mi("neutral-70"),"text-primary":mi("neutral-10"),"text-hover":mi("neutral-70"),"text-selected":mi("neutral-20"),"text-selected-hover":mi("neutral-10"),"text-disabled":mi("neutral-50"),"text-disabled-subtle":mi("neutral-60"),"text-disabled-subtlest":mi("neutral-80"),"text-selected-disabled":mi("neutral-40"),"text-success":mi("success-40"),"text-warning":mi("warning-40"),"text-error":mi("brand-30"),"text-info":mi("neutral-40"),"text-inverse":mi("neutral-100"),icon:mi("neutral-40"),"icon-subtle":mi("neutral-50"),"icon-strongest":mi("neutral-10"),"icon-primary":mi("neutral-10"),"icon-primary-subtle":mi("neutral-30"),"icon-primary-subtlest":mi("neutral-60"),"icon-hover":mi("neutral-70"),"icon-selected":mi("brand-20"),"icon-selected-hover":mi("brand-10"),"icon-disabled":mi("neutral-50"),"icon-disabled-subtle":mi("neutral-60"),"icon-selected-disabled":mi("neutral-40"),"icon-success":mi("success-40"),"icon-warning":mi("warning-60"),"icon-error":mi("brand-30"),"icon-error-strong":mi("brand-10"),"icon-info":mi("neutral-40"),"icon-inverse":mi("neutral-100"),"icon-primary-inverse":"#F9B371",border:mi("neutral-90"),"border-strong":mi("neutral-30"),"border-stronger":mi("neutral-20"),"border-primary":mi("neutral-40"),"border-primary-subtle":mi("neutral-60"),"border-hover":mi("neutral-80"),"border-hover-strong":mi("neutral-10"),"border-selected":mi("brand-20"),"border-selected-subtle":mi("neutral-40"),"border-selected-subtlest":mi("neutral-70"),"border-selected-hover":mi("neutral-10"),"border-focus":mi("neutral-20"),"border-focus-strong":mi("neutral-10"),"border-disabled":mi("neutral-90"),"border-selected-disabled":mi("neutral-80"),"border-success":mi("success-40"),"border-warning":mi("warning-60"),"border-error":mi("brand-30"),"border-error-focus":mi("brand-20"),"border-error-focus-strong":mi("brand-10"),"border-error-strong":mi("brand-20"),"border-info":mi("neutral-40"),bg:mi("neutral-100"),"bg-strong":mi("neutral-95"),"bg-stronger":mi("neutral-90"),"bg-strongest":mi("neutral-80"),"bg-hover":mi("brand-90"),"bg-hover-strong":mi("brand-80"),"bg-hover-subtle":mi("neutral-90"),"bg-hover-neutral":mi("neutral-90"),"bg-hover-neutral-strong":mi("neutral-90"),"bg-selected":mi("brand-100"),"bg-selected-hover":mi("brand-30"),"bg-selected-strong":mi("brand-50"),"bg-selected-stronger":mi("brand-40"),"bg-selected-strongest":mi("brand-20"),"bg-selected-strongest-hover":mi("brand-10"),"bg-disabled":mi("neutral-90"),"bg-selected-disabled":mi("neutral-90"),"bg-selected-stronger-disabled":mi("neutral-80"),"bg-success":mi("success-100"),"bg-success-hover":mi("success-95"),"bg-success-strong":mi("success-50"),"bg-success-strong-hover":mi("success-40"),"bg-warning":mi("warning-100"),"bg-warning-hover":mi("warning-95"),"bg-warning-strong":mi("warning-50"),"bg-warning-strong-hover":mi("warning-40"),"bg-info":mi("neutral-95"),"bg-info-hover":mi("info-95"),"bg-info-strong":mi("info-50"),"bg-info-strong-hover":mi("info-40"),"bg-error":mi("brand-100"),"bg-error-hover":mi("error-95"),"bg-error-strong":mi("error-50"),"bg-error-strong-hover":mi("error-40"),"bg-inverse":mi("neutral-40"),"bg-inverse-subtle":mi("neutral-60"),"bg-inverse-subtler":mi("neutral-70"),"bg-inverse-subtlest":mi("neutral-80"),"bg-inverse-hover":mi("neutral-30"),"bg-primary":mi("brand-20"),"bg-primary-subtle":mi("brand-60"),"bg-primary-subtler":mi("brand-80"),"bg-primary-subtlest":mi("brand-100"),"bg-available":mi("success-60"),"bg-primary-hover":mi("brand-10"),"bg-primary-subtlest-hover":mi("brand-80"),"bg-primary-subtlest-selected":mi("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:mi("neutral-10"),"hyperlink-hover":mi("neutral-40"),"hyperlink-visited":mi("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":mi("black"),"focus-ring-inverse":mi("white")},xi={text:mi("neutral-20"),"text-subtle":mi("neutral-30"),"text-subtler":mi("neutral-50"),"text-subtlest":mi("neutral-60"),"text-primary":mi("primary-50"),"text-hover":mi("primary-40"),"text-selected":mi("primary-50"),"text-selected-hover":mi("primary-40"),"text-disabled":mi("neutral-50"),"text-disabled-subtle":mi("neutral-60"),"text-disabled-subtlest":mi("neutral-80"),"text-selected-disabled":mi("neutral-20"),"text-success":mi("success-40"),"text-warning":mi("warning-40"),"text-error":mi("error-40"),"text-info":mi("info-40"),"text-inverse":mi("white"),icon:mi("neutral-50"),"icon-subtle":mi("neutral-60"),"icon-strongest":mi("neutral-20"),"icon-primary":mi("primary-50"),"icon-primary-subtle":mi("primary-60"),"icon-primary-subtlest":mi("primary-70"),"icon-hover":mi("primary-40"),"icon-selected":mi("primary-50"),"icon-selected-hover":mi("primary-40"),"icon-disabled":mi("neutral-50"),"icon-disabled-subtle":mi("neutral-60"),"icon-selected-disabled":mi("neutral-60"),"icon-success":mi("success-50"),"icon-warning":mi("warning-60"),"icon-error":mi("error-50"),"icon-error-strong":mi("error-40"),"icon-info":mi("info-50"),"icon-inverse":mi("white"),"icon-primary-inverse":mi("primary-inverse"),border:mi("neutral-90"),"border-strong":mi("neutral-70"),"border-stronger":mi("neutral-50"),"border-primary":mi("primary-50"),"border-primary-subtle":mi("primary-60"),"border-hover":mi("primary-90"),"border-hover-strong":mi("primary-60"),"border-selected":mi("primary-50"),"border-selected-subtle":mi("primary-70"),"border-selected-subtlest":mi("primary-90"),"border-selected-hover":mi("primary-40"),"border-focus":mi("primary-60"),"border-focus-strong":mi("primary-50"),"border-disabled":mi("neutral-90"),"border-selected-disabled":mi("neutral-70"),"border-success":mi("success-60"),"border-warning":mi("warning-60"),"border-error":mi("error-60"),"border-error-focus":mi("error-60"),"border-error-focus-strong":mi("error-40"),"border-error-strong":mi("error-40"),"border-info":mi("info-60"),bg:mi("white"),"bg-strong":mi("neutral-100"),"bg-stronger":mi("neutral-95"),"bg-strongest":mi("neutral-90"),"bg-hover":mi("primary-95"),"bg-hover-strong":mi("primary-90"),"bg-hover-subtle":mi("primary-100"),"bg-hover-neutral":mi("neutral-100"),"bg-hover-neutral-strong":mi("neutral-90"),"bg-selected":mi("primary-95"),"bg-selected-hover":mi("primary-90"),"bg-selected-strong":mi("primary-90"),"bg-selected-stronger":mi("primary-70"),"bg-selected-strongest":mi("primary-50"),"bg-selected-strongest-hover":mi("primary-40"),"bg-disabled":mi("neutral-95"),"bg-selected-disabled":mi("neutral-95"),"bg-selected-stronger-disabled":mi("neutral-70"),"bg-success":mi("success-100"),"bg-success-hover":mi("success-95"),"bg-success-strong":mi("success-50"),"bg-success-strong-hover":mi("success-40"),"bg-warning":mi("warning-100"),"bg-warning-hover":mi("warning-95"),"bg-warning-strong":mi("warning-50"),"bg-warning-strong-hover":mi("warning-40"),"bg-info":mi("info-100"),"bg-info-hover":mi("info-95"),"bg-info-strong":mi("info-50"),"bg-info-strong-hover":mi("info-40"),"bg-error":mi("error-100"),"bg-error-hover":mi("error-95"),"bg-error-strong":mi("error-50"),"bg-error-strong-hover":mi("error-40"),"bg-inverse":mi("neutral-20"),"bg-inverse-subtle":mi("neutral-30"),"bg-inverse-subtler":mi("neutral-50"),"bg-inverse-subtlest":mi("neutral-60"),"bg-inverse-hover":mi("neutral-40"),"bg-primary":mi("primary-50"),"bg-primary-subtle":mi("primary-60"),"bg-primary-subtler":mi("primary-95"),"bg-primary-subtlest":mi("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":mi("primary-40"),"bg-primary-subtlest-hover":mi("primary-90"),"bg-primary-subtlest-selected":mi("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:mi("primary-50"),"hyperlink-hover":mi("primary-40"),"hyperlink-visited":mi("primary-40"),"hyperlink-inverse":mi("primary-inverse"),"focus-ring":mi("black"),"focus-ring-inverse":mi("white")},wi={text:mi("neutral-100"),"text-subtle":mi("neutral-80"),"text-subtler":mi("neutral-60"),"text-subtlest":mi("neutral-50"),"text-primary":mi("primary-60"),"text-hover":mi("primary-70"),"text-selected":mi("primary-60"),"text-selected-hover":mi("primary-70"),"text-disabled":mi("neutral-60"),"text-disabled-subtle":mi("neutral-50"),"text-disabled-subtlest":mi("neutral-30"),"text-selected-disabled":mi("neutral-90"),"text-success":mi("success-70"),"text-warning":mi("warning-70"),"text-error":mi("error-70"),"text-info":mi("info-70"),"text-inverse":mi("black"),icon:mi("neutral-60"),"icon-subtle":mi("neutral-50"),"icon-strongest":mi("neutral-90"),"icon-primary":mi("primary-60"),"icon-primary-subtle":mi("primary-50"),"icon-primary-subtlest":mi("primary-40"),"icon-hover":mi("primary-70"),"icon-selected":mi("primary-60"),"icon-selected-hover":mi("primary-70"),"icon-disabled":mi("neutral-60"),"icon-disabled-subtle":mi("neutral-50"),"icon-selected-disabled":mi("neutral-50"),"icon-success":mi("success-60"),"icon-warning":mi("warning-50"),"icon-error":mi("error-60"),"icon-error-strong":mi("error-70"),"icon-info":mi("info-60"),"icon-inverse":mi("black"),"icon-primary-inverse":mi("primary-inverse"),border:mi("neutral-20"),"border-strong":mi("neutral-40"),"border-stronger":mi("neutral-60"),"border-primary":mi("primary-60"),"border-primary-subtle":mi("primary-50"),"border-hover":mi("primary-20"),"border-hover-strong":mi("primary-50"),"border-selected":mi("primary-60"),"border-selected-subtle":mi("primary-40"),"border-selected-subtlest":mi("primary-20"),"border-selected-hover":mi("primary-70"),"border-focus":mi("primary-50"),"border-focus-strong":mi("primary-60"),"border-disabled":mi("neutral-20"),"border-selected-disabled":mi("neutral-40"),"border-success":mi("success-50"),"border-warning":mi("warning-50"),"border-error":mi("error-50"),"border-error-focus":mi("error-50"),"border-error-focus-strong":mi("error-70"),"border-error-strong":mi("error-70"),"border-info":mi("info-50"),bg:mi("black"),"bg-strong":mi("neutral-10"),"bg-stronger":mi("neutral-20"),"bg-strongest":mi("neutral-20"),"bg-hover":mi("primary-20"),"bg-hover-strong":mi("primary-20"),"bg-hover-subtle":mi("primary-10"),"bg-hover-neutral":mi("neutral-10"),"bg-hover-neutral-strong":mi("neutral-20"),"bg-selected":mi("primary-20"),"bg-selected-hover":mi("primary-20"),"bg-selected-strong":mi("primary-20"),"bg-selected-stronger":mi("primary-40"),"bg-selected-strongest":mi("primary-60"),"bg-selected-strongest-hover":mi("primary-70"),"bg-disabled":mi("neutral-20"),"bg-selected-disabled":mi("neutral-20"),"bg-selected-stronger-disabled":mi("neutral-40"),"bg-success":mi("success-10"),"bg-success-hover":mi("success-20"),"bg-success-strong":mi("success-60"),"bg-success-strong-hover":mi("success-70"),"bg-warning":mi("warning-10"),"bg-warning-hover":mi("warning-20"),"bg-warning-strong":mi("warning-60"),"bg-warning-strong-hover":mi("warning-70"),"bg-info":mi("info-10"),"bg-info-hover":mi("info-20"),"bg-info-strong":mi("info-60"),"bg-info-strong-hover":mi("info-70"),"bg-error":mi("error-10"),"bg-error-hover":mi("error-20"),"bg-error-strong":mi("error-60"),"bg-error-strong-hover":mi("error-70"),"bg-inverse":mi("neutral-90"),"bg-inverse-subtle":mi("neutral-80"),"bg-inverse-subtler":mi("neutral-60"),"bg-inverse-subtlest":mi("neutral-50"),"bg-inverse-hover":mi("neutral-70"),"bg-primary":mi("primary-60"),"bg-primary-subtle":mi("primary-50"),"bg-primary-subtler":mi("primary-20"),"bg-primary-subtlest":mi("primary-10"),"bg-available":"#185339","bg-primary-hover":mi("primary-70"),"bg-primary-subtlest-hover":mi("primary-20"),"bg-primary-subtlest-selected":mi("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:mi("primary-60"),"hyperlink-hover":mi("primary-70"),"hyperlink-visited":mi("primary-70"),"hyperlink-inverse":mi("primary-inverse"),"focus-ring":mi("primary-60"),"focus-ring-inverse":mi("black")},$i={collections:{lifesg:fi,bookingsg:fi,rbs:fi,mylegacy:fi,ccube:fi,oneservice:fi,pa:vi,a11yplayground:xi},defaultValue:"lifesg"},Fi={collections:{lifesg:yi,bookingsg:yi,rbs:yi,mylegacy:yi,ccube:yi,oneservice:yi,pa:yi,a11yplayground:wi},defaultValue:"lifesg"},Ci=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=ei(i?Fi:$i,null==n?void 0:n.colourScheme),s=i?"semanticColourDark":"semanticColour",a=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s],l=a?Kn(o,e,a):o[e];return"function"==typeof l?l(r):l},Ei={text:Ci("text"),"text-subtle":Ci("text-subtle"),"text-subtler":Ci("text-subtler"),"text-subtlest":Ci("text-subtlest"),"text-primary":Ci("text-primary"),"text-hover":Ci("text-hover"),"text-selected":Ci("text-selected"),"text-selected-hover":Ci("text-selected-hover"),"text-disabled":Ci("text-disabled"),"text-disabled-subtle":Ci("text-disabled-subtle"),"text-disabled-subtlest":Ci("text-disabled-subtlest"),"text-selected-disabled":Ci("text-selected-disabled"),"text-success":Ci("text-success"),"text-warning":Ci("text-warning"),"text-error":Ci("text-error"),"text-info":Ci("text-info"),"text-inverse":Ci("text-inverse"),icon:Ci("icon"),"icon-subtle":Ci("icon-subtle"),"icon-strongest":Ci("icon-strongest"),"icon-primary":Ci("icon-primary"),"icon-primary-subtle":Ci("icon-primary-subtle"),"icon-primary-subtlest":Ci("icon-primary-subtlest"),"icon-hover":Ci("icon-hover"),"icon-selected":Ci("icon-selected"),"icon-selected-hover":Ci("icon-selected-hover"),"icon-disabled":Ci("icon-disabled"),"icon-disabled-subtle":Ci("icon-disabled-subtle"),"icon-selected-disabled":Ci("icon-selected-disabled"),"icon-success":Ci("icon-success"),"icon-warning":Ci("icon-warning"),"icon-error":Ci("icon-error"),"icon-error-strong":Ci("icon-error-strong"),"icon-info":Ci("icon-info"),"icon-inverse":Ci("icon-inverse"),"icon-primary-inverse":Ci("icon-primary-inverse"),border:Ci("border"),"border-strong":Ci("border-strong"),"border-stronger":Ci("border-stronger"),"border-primary":Ci("border-primary"),"border-primary-subtle":Ci("border-primary-subtle"),"border-hover":Ci("border-hover"),"border-hover-strong":Ci("border-hover-strong"),"border-selected":Ci("border-selected"),"border-selected-subtle":Ci("border-selected-subtle"),"border-selected-subtlest":Ci("border-selected-subtlest"),"border-selected-hover":Ci("border-selected-hover"),"border-focus":Ci("border-focus"),"border-focus-strong":Ci("border-focus-strong"),"border-disabled":Ci("border-disabled"),"border-selected-disabled":Ci("border-selected-disabled"),"border-success":Ci("border-success"),"border-warning":Ci("border-warning"),"border-error":Ci("border-error"),"border-error-focus":Ci("border-error-focus"),"border-error-focus-strong":Ci("border-error-focus-strong"),"border-error-strong":Ci("border-error-strong"),"border-info":Ci("border-info"),bg:Ci("bg"),"bg-strong":Ci("bg-strong"),"bg-stronger":Ci("bg-stronger"),"bg-strongest":Ci("bg-strongest"),"bg-hover":Ci("bg-hover"),"bg-hover-strong":Ci("bg-hover-strong"),"bg-hover-subtle":Ci("bg-hover-subtle"),"bg-hover-neutral":Ci("bg-hover-neutral"),"bg-hover-neutral-strong":Ci("bg-hover-neutral-strong"),"bg-selected":Ci("bg-selected"),"bg-selected-hover":Ci("bg-selected-hover"),"bg-selected-strong":Ci("bg-selected-strong"),"bg-selected-stronger":Ci("bg-selected-stronger"),"bg-selected-strongest":Ci("bg-selected-strongest"),"bg-selected-strongest-hover":Ci("bg-selected-strongest-hover"),"bg-disabled":Ci("bg-disabled"),"bg-selected-disabled":Ci("bg-selected-disabled"),"bg-selected-stronger-disabled":Ci("bg-selected-stronger-disabled"),"bg-success":Ci("bg-success"),"bg-success-hover":Ci("bg-success-hover"),"bg-success-strong":Ci("bg-success-strong"),"bg-success-strong-hover":Ci("bg-success-strong-hover"),"bg-warning":Ci("bg-warning"),"bg-warning-hover":Ci("bg-warning-hover"),"bg-warning-strong":Ci("bg-warning-strong"),"bg-warning-strong-hover":Ci("bg-warning-strong-hover"),"bg-info":Ci("bg-info"),"bg-info-hover":Ci("bg-info-hover"),"bg-info-strong":Ci("bg-info-strong"),"bg-info-strong-hover":Ci("bg-info-strong-hover"),"bg-error":Ci("bg-error"),"bg-error-hover":Ci("bg-error-hover"),"bg-error-strong":Ci("bg-error-strong"),"bg-error-strong-hover":Ci("bg-error-strong-hover"),"bg-inverse":Ci("bg-inverse"),"bg-inverse-subtle":Ci("bg-inverse-subtle"),"bg-inverse-subtler":Ci("bg-inverse-subtler"),"bg-inverse-subtlest":Ci("bg-inverse-subtlest"),"bg-inverse-hover":Ci("bg-inverse-hover"),"bg-primary":Ci("bg-primary"),"bg-primary-subtle":Ci("bg-primary-subtle"),"bg-primary-subtler":Ci("bg-primary-subtler"),"bg-primary-subtlest":Ci("bg-primary-subtlest"),"bg-available":Ci("bg-available"),"bg-primary-hover":Ci("bg-primary-hover"),"bg-primary-subtlest-hover":Ci("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Ci("bg-primary-subtlest-selected"),"overlay-strong":Ci("overlay-strong"),"overlay-subtle":Ci("overlay-subtle"),hyperlink:Ci("hyperlink"),"hyperlink-hover":Ci("hyperlink-hover"),"hyperlink-visited":Ci("hyperlink-visited"),"hyperlink-inverse":Ci("hyperlink-inverse"),"focus-ring":Ci("focus-ring"),"focus-ring-inverse":Ci("focus-ring-inverse")},ki={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ni["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Ei.border(r),u=ni.solid;return E`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ni["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Ei.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return E`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Di=e=>1===e.length&&"theme"in e[0],Si=e=>(...r)=>t=>{const n=Di(r)?[]:r,i=Di(r)?r[0]:t,o=i.theme;return(0,ei(ki,null==o?void 0:o.borderScheme)[e])(...n)(i)},Oi={solid:Si("solid"),"dashed-default":Si("dashed-default")},_i={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Ai=e=>r=>{var t;const n=r.theme,i=ei(_i,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Kn(i,e,n.overrides.breakpoint):i[e],o},Mi={"xxs-min":Ai("xxs-min"),"xxs-max":Ai("xxs-max"),"xs-min":Ai("xs-min"),"xs-max":Ai("xs-max"),"sm-min":Ai("sm-min"),"sm-max":Ai("sm-max"),"md-min":Ai("md-min"),"md-max":Ai("md-max"),"lg-min":Ai("lg-min"),"lg-max":Ai("lg-max"),"xl-min":Ai("xl-min"),"xl-max":Ai("xl-max"),"xxl-min":Ai("xxl-min"),"xxs-column":Ai("xxs-column"),"xs-column":Ai("xs-column"),"sm-column":Ai("sm-column"),"md-column":Ai("md-column"),"lg-column":Ai("lg-column"),"xl-column":Ai("xl-column"),"xxl-column":Ai("xxl-column"),"xxs-gutter":Ai("xxs-gutter"),"xs-gutter":Ai("xs-gutter"),"sm-gutter":Ai("sm-gutter"),"md-gutter":Ai("md-gutter"),"lg-gutter":Ai("lg-gutter"),"xl-gutter":Ai("xl-gutter"),"xxl-gutter":Ai("xxl-gutter"),"xxs-margin":Ai("xxs-margin"),"xs-margin":Ai("xs-margin"),"sm-margin":Ai("sm-margin"),"md-margin":Ai("md-margin"),"lg-margin":Ai("lg-margin"),"xl-margin":Ai("xl-margin"),"xxl-margin":Ai("xxl-margin")},Bi=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Mi["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),zi={MaxWidth:Bi("max-width"),MinWidth:Bi("min-width")},ji={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},Ti=e=>r=>{var t;const n=r.theme,i=ei(ji,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Kn(i,e,n.overrides.fontSpec):i[e]},Ii={"heading-size-xxl":Ti("heading-size-xxl"),"heading-size-xl":Ti("heading-size-xl"),"heading-size-lg":Ti("heading-size-lg"),"heading-size-md":Ti("heading-size-md"),"heading-size-sm":Ti("heading-size-sm"),"heading-size-xs":Ti("heading-size-xs"),"heading-lh-xxl":Ti("heading-lh-xxl"),"heading-lh-xl":Ti("heading-lh-xl"),"heading-lh-lg":Ti("heading-lh-lg"),"heading-lh-md":Ti("heading-lh-md"),"heading-lh-sm":Ti("heading-lh-sm"),"heading-lh-xs":Ti("heading-lh-xs"),"heading-ls-xxl":Ti("heading-ls-xxl"),"heading-ls-xl":Ti("heading-ls-xl"),"heading-ls-lg":Ti("heading-ls-lg"),"heading-ls-md":Ti("heading-ls-md"),"heading-ls-sm":Ti("heading-ls-sm"),"heading-ls-xs":Ti("heading-ls-xs"),"weight-light":Ti("weight-light"),"weight-regular":Ti("weight-regular"),"weight-semibold":Ti("weight-semibold"),"weight-bold":Ti("weight-bold"),"font-family":Ti("font-family"),"body-size-baseline":Ti("body-size-baseline"),"body-size-md":Ti("body-size-md"),"body-size-sm":Ti("body-size-sm"),"body-size-xs":Ti("body-size-xs"),"body-lh-baseline":Ti("body-lh-baseline"),"body-lh-md":Ti("body-lh-md"),"body-lh-sm":Ti("body-lh-sm"),"body-lh-xs":Ti("body-lh-xs"),"body-ls-baseline":Ti("body-ls-baseline"),"body-ls-md":Ti("body-ls-md"),"body-ls-sm":Ti("body-ls-sm"),"body-ls-xs":Ti("body-ls-xs"),"form-label-size":Ti("form-label-size"),"form-description-size":Ti("form-description-size"),"form-label-lh":Ti("form-label-lh"),"form-description-lh":Ti("form-description-lh"),"form-label-ls":Ti("form-label-ls"),"form-description-ls":Ti("form-description-ls")},Pi=(e,r,t,n,i)=>{const{disableLigatures:o}=i||{};return E`
        font-family: ${Ti("font-family")};
        font-size: ${Ti(e)};
        font-weight: ${Ti(r)};
        line-height: ${Ti(t)};
        letter-spacing: ${Ti(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Ri=(e={})=>({"heading-xxl-light":Pi("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Pi("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Pi("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Pi("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Pi("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Pi("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Pi("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Pi("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Pi("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Pi("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Pi("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Pi("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Pi("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Pi("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Pi("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Pi("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Pi("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Pi("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Pi("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Pi("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Pi("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Pi("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Pi("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Pi("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Pi("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Pi("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Pi("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Pi("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Pi("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Pi("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Pi("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Pi("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Pi("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Pi("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Pi("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Pi("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Pi("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Pi("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Pi("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Pi("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Pi("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Pi("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Li=Ri({disableLigatures:!0}),Wi={collections:{default:Ri(),bookingsg:Li,pa:Ri({disableLigatures:!0}),a11yplayground:Ri({disableLigatures:!0})},defaultValue:"default"},Yi=e=>r=>{var t;const n=r.theme,i=ei(Wi,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Kn(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},Hi={"heading-xxl-light":Yi("heading-xxl-light"),"heading-xxl-regular":Yi("heading-xxl-regular"),"heading-xxl-semibold":Yi("heading-xxl-semibold"),"heading-xxl-bold":Yi("heading-xxl-bold"),"heading-xl-light":Yi("heading-xl-light"),"heading-xl-regular":Yi("heading-xl-regular"),"heading-xl-semibold":Yi("heading-xl-semibold"),"heading-xl-bold":Yi("heading-xl-bold"),"heading-lg-light":Yi("heading-lg-light"),"heading-lg-regular":Yi("heading-lg-regular"),"heading-lg-semibold":Yi("heading-lg-semibold"),"heading-lg-bold":Yi("heading-lg-bold"),"heading-md-light":Yi("heading-md-light"),"heading-md-regular":Yi("heading-md-regular"),"heading-md-semibold":Yi("heading-md-semibold"),"heading-md-bold":Yi("heading-md-bold"),"heading-sm-light":Yi("heading-sm-light"),"heading-sm-regular":Yi("heading-sm-regular"),"heading-sm-semibold":Yi("heading-sm-semibold"),"heading-sm-bold":Yi("heading-sm-bold"),"heading-xs-light":Yi("heading-xs-light"),"heading-xs-regular":Yi("heading-xs-regular"),"heading-xs-semibold":Yi("heading-xs-semibold"),"heading-xs-bold":Yi("heading-xs-bold"),"body-baseline-light":Yi("body-baseline-light"),"body-baseline-regular":Yi("body-baseline-regular"),"body-baseline-semibold":Yi("body-baseline-semibold"),"body-baseline-bold":Yi("body-baseline-bold"),"body-md-light":Yi("body-md-light"),"body-md-regular":Yi("body-md-regular"),"body-md-semibold":Yi("body-md-semibold"),"body-md-bold":Yi("body-md-bold"),"body-sm-light":Yi("body-sm-light"),"body-sm-regular":Yi("body-sm-regular"),"body-sm-semibold":Yi("body-sm-semibold"),"body-sm-bold":Yi("body-sm-bold"),"body-xs-light":Yi("body-xs-light"),"body-xs-regular":Yi("body-xs-regular"),"body-xs-semibold":Yi("body-xs-semibold"),"body-xs-bold":Yi("body-xs-bold"),"form-label":Yi("form-label"),"form-description":Yi("form-description")},Ni={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Vi=e=>r=>{var t;const n=r.theme,i=ei(Ni,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Kn(i,e,n.overrides.motion):i[e]},qi={"duration-150":Vi("duration-150"),"duration-250":Vi("duration-250"),"duration-350":Vi("duration-350"),"duration-500":Vi("duration-500"),"duration-800":Vi("duration-800"),"duration-1000":Vi("duration-1000"),"ease-default":Vi("ease-default"),"ease-standard":Vi("ease-standard"),"ease-entrance":Vi("ease-entrance"),"ease-exit":Vi("ease-exit")},Qi={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Ui=e=>r=>{var t;const n=r.theme,i=ei(Qi,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Kn(i,e,n.overrides.radius)}px`:`${i[e]}px`},Zi={none:Ui("none"),xs:Ui("xs"),sm:Ui("sm"),md:Ui("md"),lg:Ui("lg"),full:Ui("full")},Xi={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Gi=e=>r=>{var t;const n=r.theme,i=ei(Xi,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Kn(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Ji={"spacing-0":Gi("spacing-0"),"spacing-4":Gi("spacing-4"),"spacing-8":Gi("spacing-8"),"spacing-12":Gi("spacing-12"),"spacing-16":Gi("spacing-16"),"spacing-20":Gi("spacing-20"),"spacing-24":Gi("spacing-24"),"spacing-32":Gi("spacing-32"),"spacing-40":Gi("spacing-40"),"spacing-48":Gi("spacing-48"),"spacing-64":Gi("spacing-64"),"spacing-72":Gi("spacing-72"),"layout-xs":Gi("layout-xs"),"layout-sm":Gi("layout-sm"),"layout-md":Gi("layout-md"),"layout-lg":Gi("layout-lg"),"layout-xl":Gi("layout-xl"),"layout-xxl":Gi("layout-xxl"),"layout-xxxl":Gi("layout-xxxl")},Ki=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),eo=Object.assign(Object.assign({},Ei),{Primitive:pi}),ro=Object.assign(Object.assign({},Hi),{Spec:Ii}),to=qi,no=Object.assign(Object.assign({},ni),{Util:Oi}),io=Ji,oo=Zi,so=Mi,ao=zi,lo={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},co={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},uo={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},ho={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},go={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},bo={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},mo={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},po={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"default"};Object.assign(Object.assign({},lo),{light:Ki(lo,"light"),dark:Ki(lo,"dark")}),Object.assign(Object.assign({},co),{light:Ki(co,"light"),dark:Ki(co,"dark")}),Object.assign(Object.assign({},uo),{light:Ki(uo,"light"),dark:Ki(uo,"dark")}),Object.assign(Object.assign({},ho),{light:Ki(ho,"light"),dark:Ki(ho,"dark")}),Object.assign(Object.assign({},go),{light:Ki(go,"light"),dark:Ki(go,"dark")}),Object.assign(Object.assign({},bo),{light:Ki(bo,"light"),dark:Ki(bo,"dark")}),Object.assign(Object.assign({},mo),{light:Ki(mo,"light"),dark:Ki(mo,"dark")}),Object.assign(Object.assign({},po),{light:Ki(po,"light"),dark:Ki(po,"dark")});const fo=C.div`
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
`,yo=C.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?eo["overlay-subtle"]:eo["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=E`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=E`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=E`
                transition: none;
            `),r}}
`;var vo;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(vo||(vo={}));const xo=({show:r=!1,rootId:t,onOverlayClick:n,children:i,backgroundOpacity:o,backgroundBlur:s=!0,disableTransition:a=!1,enableOverlayClick:l=!1,zIndex:d,id:c})=>{const[b,m]=g(null),[p,f]=g(),[v]=g((()=>je.generate())),x=_(),w=h(),$=h(null),F=i&&u.cloneElement(i,{ref:$}),C=c?`lifesg-ds-overlay-root-${c}`:"lifesg-ds-overlay-root",E=null!=d?d:p?99999:99998;(e=>{const r=S();y((()=>{if(!r)return;const t={zIndex:e};r.events.emit(vo.Change,t)}),[r,e]),y((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(vo.Change,t)};return null==r||r.events.on(vo.Ready,t),()=>null==r?void 0:r.events.off(vo.Ready,t)}),[r,e])})(E),y((()=>(M(),m(D()),()=>{T(),z().length<1&&B("remove")})),[]),y((()=>{if(r){const e=O();k(e),j();const r=setTimeout((()=>{B("add")}),200);return()=>clearTimeout(r)}{T();const e=setTimeout((()=>{z().length<1&&B("remove")}),200);return()=>clearTimeout(e)}}),[r]);const k=e=>{w.current=e,f(e)},D=()=>document&&t?document.getElementById(t):document?document.body:null,O=()=>z().length>0,M=()=>{if(!document.getElementById($o)){const e=document.createElement("style");e.id=$o;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${Fo} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Fo}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},B=e=>{const r=document.body.classList.contains(Fo);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Fo):document.body.classList.add(Fo)},z=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},j=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},T=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},I=e=>{var r;const t=null===(r=$.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&l&&(e.preventDefault(),n())};return b?N.createPortal(e(fo,{id:C,"data-testid":C,$show:r,$zIndex:E,children:i&&e(A,{id:x,children:e(yo,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:s,$disableTransition:a,onClick:I,children:F})})}),b):null},wo=r=>e(O,{children:e(xo,Object.assign({},r))}),$o="lifesg-ds-overlay-stylesheet",Fo="lifesg-ds-overlay-open",Co=u.createContext({mode:"default",rootNode:{current:null}}),Eo=C.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ko=k`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Do=C.div`
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
    animation: ${ko} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,So=C(Do)`
    animation-delay: -0.45s;
`,Oo=C(Do)`
    animation-delay: -0.3s;
`,_o=C(Do)`
    animation-delay: -0.15s;
`,Ao=({color:t,className:n,size:i})=>r(Eo,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[e(Do,{id:"inner1"}),e(So,{id:"inner2"}),e(Oo,{id:"inner3"}),e(_o,{id:"inner4"})]}),Mo={collections:{default:{Button:{"button-radius":Zi.sm,"button-default-colour-bg":Ei["bg-primary"],"button-default-colour-bg-hover":Ei["bg-primary-hover"],"button-default-colour-text":Ei["text-inverse"],"button-secondary-colour-border":Ei["border-primary"],"button-secondary-colour-text":Ei["text-primary"],"button-light-colour-text":Ei["text-primary"],"button-link-colour-text":Ei["text-primary"]}},pa:{Button:{"button-radius":Zi.full,"button-default-colour-bg":Ei["bg-primary"],"button-default-colour-bg-hover":Ei["bg-primary-hover"],"button-default-colour-text":Ei["text-inverse"],"button-secondary-colour-border":Ei["border-primary"],"button-secondary-colour-text":Ei["text-primary"],"button-light-colour-text":Ei["text-primary"],"button-link-colour-text":Ei["text-primary"]}}},defaultValue:"default"},Bo=(e,r)=>t=>{var n,i;const o=t.theme,s=ei(Mo,null==o?void 0:o.componentScheme);return zo((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||s[e][r],t)},zo=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},jo=Bo("Button","button-radius"),To=Bo("Button","button-default-colour-bg"),Io=Bo("Button","button-default-colour-bg-hover"),Po=Bo("Button","button-default-colour-text"),Ro=Bo("Button","button-secondary-colour-border"),Lo=Bo("Button","button-secondary-colour-text"),Wo=Bo("Button","button-light-colour-text"),Yo=Bo("Button","button-link-colour-text"),Ho=C.button`
    padding: ${io["spacing-8"]} ${io["spacing-16"]};
    min-width: 4rem;
    border: ${no["width-010"]} ${no.solid} transparent;
    transition: all ${to["duration-250"]} ${to["ease-default"]};
    border-radius: ${jo};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return E`
                    background-color: ${eo.Primitive.white};
                    border-color: ${e.$buttonIsDanger?eo["border-error-strong"]:Ro};

                    color: ${e.$buttonIsDanger?eo["text-error"]:Lo};

                    &:hover,
                    &:active {
                        background-color: ${eo["bg-hover-neutral"]};
                    }
                `;case"light":return E`
                    background-color: ${eo.bg};
                    border-color: ${eo.border};

                    color: ${e.$buttonIsDanger?eo["text-error"]:Wo};

                    &:hover,
                    &:active {
                        background-color: ${eo["bg-hover-neutral"]};
                    }
                `;case"link":return E`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?eo["text-error"]:Yo};
                    &:hover,
                    &:active {
                        background-color: ${eo["bg-hover-neutral"]};
                    }
                `;case"disabled":return E`
                    background-color: ${eo["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${eo["text-disabled"]};
                `;default:return E`
                    background-color: ${e.$buttonIsDanger?eo["bg-error-strong"]:To};};

                    ${ao.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Po}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?eo["bg-error-strong-hover"]:Io}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return E`
                    height: 2.5rem;
                    ${ro["body-md-semibold"]}

                    ${ao.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return E`
                    height: 4rem;
                    ${ro["heading-md-semibold"]}

                    ${ao.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return E`
                    height: 3rem;
                    ${ro["heading-xs-semibold"]}

                    ${ao.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,No=C(Ao)`
    margin-right: 0.5rem;
`,Vo=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=t,d=le(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(Ho,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(No,{}),e("span",{children:i})]}))};Vo.displayName="Button.Default";const qo=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=t,d=le(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(Ho,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(No,{}),e("span",{children:i})]}))};qo.displayName="Button.Small";const Qo=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=t,d=le(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(Ho,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(No,{}),e("span",{children:i})]}))};Qo.displayName="Button.Large";const Uo={Default:u.forwardRef(Vo),Small:u.forwardRef(qo),Large:u.forwardRef(Qo)},Zo=k`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Xo=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>E`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,Go=E`
    animation: ${to["duration-150"]} ${to["ease-default"]} ${Zo};
    width: 100%;
    height: 100%;
    transition: color ${to["duration-150"]} ${to["ease-default"]};
`,Jo=C(n)`
    ${Go}
    color: ${eo["icon-primary-subtlest"]};
`,Ko=C(i)`
    ${Go}
    color: ${eo["icon-disabled-subtle"]};
`,es=C(o)`
    ${Go}
    color: ${e=>e.$disabled?eo["icon-disabled-subtle"](e):eo["icon-selected"](e)};
`,rs=C(s)`
    ${Go}
    color: ${e=>e.$disabled?eo["icon-disabled-subtle"](e):eo["icon-selected"](e)};
`,ts=C.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Jo},
        &:hover
        + ${es},
        &:hover
        + ${rs} {
        color: ${e=>!e.disabled&&eo["icon-hover"](e)};
    }
`,ns=e=>{const{textSize:r}=e||{};return E`
        // Text styling
        ${r&&ro[`${r}-regular`]}

        strong {
            font-weight: ${ro.Spec["weight-semibold"]};
            ${r&&ro[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${ro.Spec["weight-semibold"]};
            ${r&&ro[`${r}-semibold`]}
            color: ${eo.hyperlink};
            text-decoration: none;

            svg {
                color: ${eo["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${eo["hyperlink-hover"]};

                svg {
                    color: ${eo["icon-hover"]};
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
    `},is=(e,r,t=!1)=>E`
        ${ro[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,os=e=>{if(e)return E`
            ${r=e,E`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},ss=(e,r)=>E`
    ${is(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?E`
            display: block;
            ${os(t)}
        `:e?E`
            display: inline;
        `:E`
            display: block;
            ${os(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${eo.text};
`;var as;!function(t){const n=(e,r,t)=>{const n=C(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>ss(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,r)=>{const t=C.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>ss(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=C.a`
            ${e=>E`
                ${is(t,e.weight||"regular")}
                color: ${eo.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${eo["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,s=le(t,["external","children"]);return r(i,Object.assign({},s,{children:[o,n&&e(ls,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(as||(as={}));const ls=C(ee)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,ds=C.div`
    padding: ${io["spacing-8"]} ${io["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=eo["bg-error"](e),t=eo["border-error"](e);break;case"success":r=eo["bg-success"](e),t=eo["border-success"](e);break;case"warning":default:r=eo["bg-warning"](e),t=eo["border-warning"](e);break;case"info":r=eo["bg-info"](e),t=eo["border-info"](e);break;case"description":r=eo["bg-strong"](e),t=eo["border-strong"](e)}return E`
            background: ${r};
            border-left: ${no["width-020"]} ${no.solid}
                ${t};
        `}}

    color: ${eo.text};
    ${e=>"small"===e.$sizeType?ns({textSize:"body-sm"}):ns({textSize:"body-md"})}
`,cs=C.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${io["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=eo["icon-error"](e);break;case"success":r=eo["icon-success"](e);break;case"warning":default:r=eo["icon-warning"](e);break;case"info":r=eo["icon-info"](e);break;case"description":r=eo["icon-subtle"](e)}return E`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,us=C(as.LinkSM)`
    ${e=>"small"===e.$sizeType?E`
                ${ro["body-sm-semibold"]}
                margin-top: ${io["spacing-4"]};
            `:E`
                ${ro["body-md-semibold"]}
                margin-top: ${io["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${io["spacing-4"]};
    }
`,hs=C.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,gs=C.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return E`
                margin-bottom: ${io["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,bs=C.button`
    ${e=>"small"===e.$sizeType?E`
                ${ro["body-sm-semibold"]}
            `:E`
                ${ro["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${io["spacing-4"]};
    margin-top: ${io["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${eo["text-primary"]};
`,ms=C(a)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${to["duration-350"]} ${to["ease-standard"]};
`,ps=C.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?E`
                    color: ${eo["icon-selected-disabled"]};
                `:E`
                    color: ${eo["icon-disabled-subtle"]};
                `:e.$active?E`
                color: ${eo["icon-selected"]};
            `:E`
            color: ${eo["icon-subtle"]};
        `};
`,fs=E`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${ro.Spec["weight-regular"]};
        ${e=>e.$size&&ro[`${e.$size}-regular`]}
        color: ${eo.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,ys=C.ol`
    ${fs}

    margin-left: 3rem;

    ${ao.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:r}=e,t=e.$counterType||"decimal",n=e.$counterSeparator||")";return E`
            li:before {
                content: counter(list, ${t}) "${n}";
                counter-increment: ${r?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:r,start:t}=e;if(t){return E`
                counter-reset: list ${r?t+1:t-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,vs=C.ul`
    ${fs}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,xs=r=>{var{size:t,bulletType:n,bottomMargin:i,children:o}=r,s=le(r,["size","bulletType","bottomMargin","children"]);return e(vs,Object.assign({$size:t,$bulletType:n,$bottomMargin:i},s,{children:o}))};xs.displayName="TextList.Ul";const ws=r=>{var{size:t,counterType:n,counterSeparator:i,bottomMargin:o,children:s}=r,a=le(r,["size","counterType","counterSeparator","bottomMargin","children"]);return e(ys,Object.assign({$size:t,$counterType:n,$counterSeparator:i,$bottomMargin:o},a,{children:s}))};ws.displayName="TextList.Ol";const $s=xs,Fs=C.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${eo.bg};

    ${e=>{if(!e.$indicator)return E`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return E`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?E`
                            border-color: ${eo["border-error"]};
                        `:E`
                            border-color: ${eo["border-error"]};

                            &:has(${Ss}:hover) {
                                background: ${eo["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?E`
                            border: none;
                            background: ${eo["bg-selected-disabled"]};
                        `:E`
                            border: none;
                        `:e.$selected?E`
                        border: none;
                        background: ${eo["bg-selected"]};

                        &:has(${Ss}:hover) {
                            background: ${eo["bg-selected-hover"]};

                            & ${Es} {
                                color: ${eo["text-selected-hover"]};
                            }

                            & ${Is} {
                                color: ${eo["icon-selected-hover"]};
                            }
                        }
                    `:E`
                    border: none;

                    &:has(${Ss}:hover) {
                        background: ${eo["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?E`
                            border-color: ${eo["border-error"]};
                        `:E`
                            border-color: ${eo["border-error"]};

                            &:has(${Ss}:hover) {
                                background: ${eo["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?E`
                            border-color: ${eo["border-selected-disabled"]};
                            background: ${eo["bg-selected-disabled"]};
                        `:E`
                            border-color: ${eo["border-disabled"]};
                            background: ${eo["bg-disabled"]};
                        `:e.$selected?E`
                        border-color: ${eo["border-selected"]};
                        background: ${eo["bg-selected"]};

                        &:has(${Ss}:hover) {
                            background: ${eo["bg-selected-hover"]};

                            & ${Es} {
                                color: ${eo["text-selected-hover"]};
                            }

                            & ${Is} {
                                color: ${eo["icon-selected-hover"]};
                            }
                        }
                    `:E`
                    border-color: ${eo.border};

                    &:has(${Ss}:hover) {
                        background: ${eo["bg-hover-subtle"]};
                    }
                `}
`,Cs=C.input`
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
`,Es=C.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?E`
                    color: ${eo["text-selected-disabled"]};
                `:E`
                    color: ${eo["text-disabled"]};
                `:e.$selected?E`
                color: ${eo["text-selected"]};
            `:E`
            color: ${eo.text};
        `}
`,ks=C.label`
    ${ro["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${ao.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${ao.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,Ds=C.div`
    ${ro["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${ro["body-md-semibold"]}
    }
`,Ss=C.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Os=C.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,_s=C.button`
    color: ${e=>e.$disabled?eo["text-disabled"]:eo["text-error"]};
    white-space: nowrap;
    ${ro["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,As=C.button`
    color: ${e=>e.disabled?eo["text-disabled"]:eo["text-primary"]};
    ${ro["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${eo.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Ms=C.div`
    width: 100%;
    color: ${e=>e.$disabled?eo["text-disabled"]:eo["text-error"]};
    border: none;
    background: ${eo.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Bs=C((t=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:a,sizeType:l="default",showIcon:d=!1,customIcon:c,maxCollapsedHeight:u}=t,h=le(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[b,m]=g(!1),[p,f]=g(!1),{height:v,ref:x}=Ar();y((()=>{w()}),[u,v]);const w=()=>{m(!u),f($())},$=()=>!(!v||!u)&&v>u;return r(ds,{className:i,$type:n,$sizeType:l,"data-testid":h["data-testid"],children:[d&&e(cs,{$sizeType:l,$type:n,children:(()=>{if(n&&c)return c;switch(n){case"success":return e(K,{});case"warning":return e(G,{});case"error":return e(X,{});case"info":case"description":return e(J,{});default:return null}})()}),r(hs,{children:[r(gs,{$maxCollapsedHeight:$()?u:void 0,$showMore:b,$hasActionLink:!!s,children:[e("div",{ref:x,children:o}),s?r(us,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},s,{children:[s.children,a||e(Z,{})]})):null]}),p&&r(bs,{$sizeType:l,$type:n,type:"button",onClick:()=>m(!b),children:["Show ",b?"less":"more",e(ms,{$expanded:b})]})]})]})}))`
    width: 100%;
    user-select: none;
`,zs=C.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${eo.bg};
    ${ns({textSize:"body-md"})}

    ${e=>e.$disabled?E`
                color: ${eo["text-disabled"]};
            `:e.$selected?E`
                color: ${eo["text-selected"]};
            `:E`
                color: ${eo.text};
            `}
`,js=C(as.BodyMD)`
    color: ${e=>e.$disabled?eo["text-disabled"]:eo["text-error"]};
`,Ts=C($s)`
    color: ${e=>e.$disabled?eo["text-disabled"]:eo["text-error"]};
`,Is=C((({type:r,active:t=!1,disabled:n,className:i})=>{let o;switch(r){case"checkbox":o=e(t?oe:ie,{});break;case"radio":o=e(t?te:re,{});break;case"tick":o=e(se,{});break;case"cross":o=e(ne,{});break;default:o=null}return e(ps,{className:i,$active:t,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?E`
                    color: ${eo["icon-selected-disabled"]};
                `:E`
                    color: ${eo["icon-disabled-subtle"]};
                `:e.$selected?E`
                color: ${eo["icon-selected"]};
            `:E`
            color: ${eo["icon-subtle"]};
        `};
`;var Ps=ce((function(e){return null==e})),Rs=Object.defineProperty,Ls={};((e,r)=>{for(var t in r)Rs(e,t,{get:r[t],enumerable:!0})})(Ls,{assign:()=>va,colors:()=>pa,createStringInterpolator:()=>ha,skipAnimation:()=>fa,to:()=>ga,willAdvance:()=>ya});var Ws=na(),Ys=e=>Ks(e,Ws),Hs=na();Ys.write=e=>Ks(e,Hs);var Ns=na();Ys.onStart=e=>Ks(e,Ns);var Vs=na();Ys.onFrame=e=>Ks(e,Vs);var qs=na();Ys.onFinish=e=>Ks(e,qs);var Qs=[];Ys.setTimeout=(e,r)=>{const t=Ys.now()+r,n=()=>{const e=Qs.findIndex((e=>e.cancel==n));~e&&Qs.splice(e,1),Gs-=~e?1:0},i={time:t,handler:e,cancel:n};return Qs.splice(Us(t),0,i),Gs+=1,ea(),i};var Us=e=>~(~Qs.findIndex((r=>r.time>e))||~Qs.length);Ys.cancel=e=>{Ns.delete(e),Vs.delete(e),qs.delete(e),Ws.delete(e),Hs.delete(e)},Ys.sync=e=>{Js=!0,Ys.batchedUpdates(e),Js=!1},Ys.throttle=e=>{let r;function t(){try{e(...r)}finally{r=null}}function n(...e){r=e,Ys.onStart(t)}return n.handler=e,n.cancel=()=>{Ns.delete(t),r=null},n};var Zs="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ys.use=e=>Zs=e,Ys.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ys.batchedUpdates=e=>e(),Ys.catch=console.error,Ys.frameLoop="always",Ys.advance=()=>{"demand"!==Ys.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ta()};var Xs=-1,Gs=0,Js=!1;function Ks(e,r){Js?(r.delete(e),e(0)):(r.add(e),ea())}function ea(){Xs<0&&(Xs=0,"demand"!==Ys.frameLoop&&Zs(ra))}function ra(){~Xs&&(Zs(ra),Ys.batchedUpdates(ta))}function ta(){const e=Xs;Xs=Ys.now();const r=Us(Xs);r&&(ia(Qs.splice(0,r),(e=>e.handler())),Gs-=r),Gs?(Ns.flush(),Ws.flush(e?Math.min(64,Xs-e):16.667),Vs.flush(),Hs.flush(),qs.flush()):Xs=-1}function na(){let e=new Set,r=e;return{add(t){Gs+=r!=e||e.has(t)?0:1,e.add(t)},delete:t=>(Gs-=r==e&&e.has(t)?1:0,e.delete(t)),flush(t){r.size&&(e=new Set,Gs-=r.size,ia(r,(r=>r(t)&&e.add(r))),Gs+=e.size,r=e)}}}function ia(e,r){e.forEach((e=>{try{r(e)}catch(e){Ys.catch(e)}}))}function oa(){}var sa={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function aa(e,r){if(sa.arr(e)){if(!sa.arr(r)||e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}return e===r}var la=(e,r)=>e.forEach(r);function da(e,r,t){if(sa.arr(e))for(let n=0;n<e.length;n++)r.call(t,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&r.call(t,e[n],n)}var ca=e=>sa.und(e)?[]:sa.arr(e)?e:[e];function ua(e,r){if(e.size){const t=Array.from(e);e.clear(),la(t,r)}}var ha,ga,ba=(e,...r)=>ua(e,(e=>e(...r))),ma=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),pa=null,fa=!1,ya=oa,va=e=>{e.to&&(ga=e.to),e.now&&(Ys.now=e.now),void 0!==e.colors&&(pa=e.colors),null!=e.skipAnimation&&(fa=e.skipAnimation),e.createStringInterpolator&&(ha=e.createStringInterpolator),e.requestAnimationFrame&&Ys.use(e.requestAnimationFrame),e.batchedUpdates&&(Ys.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ya=e.willAdvance),e.frameLoop&&(Ys.frameLoop=e.frameLoop)},xa=new Set,wa=[],$a=[],Fa=0,Ca={get idle(){return!xa.size&&!wa.length},start(e){Fa>e.priority?(xa.add(e),Ys.onStart(Ea)):(ka(e),Ys(Sa))},advance:Sa,sort(e){if(Fa)Ys.onFrame((()=>Ca.sort(e)));else{const r=wa.indexOf(e);~r&&(wa.splice(r,1),Da(e))}},clear(){wa=[],xa.clear()}};function Ea(){xa.forEach(ka),xa.clear(),Ys(Sa)}function ka(e){wa.includes(e)||Da(e)}function Da(e){wa.splice(function(e,r){const t=e.findIndex(r);return t<0?e.length:t}(wa,(r=>r.priority>e.priority)),0,e)}function Sa(e){const r=$a;for(let t=0;t<wa.length;t++){const n=wa[t];Fa=n.priority,n.idle||(ya(n),n.advance(e),n.idle||r.push(n))}return Fa=0,($a=wa).length=0,(wa=r).length>0}var Oa="[-+]?\\d*\\.?\\d+",_a=Oa+"%";function Aa(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Ma=new RegExp("rgb"+Aa(Oa,Oa,Oa)),Ba=new RegExp("rgba"+Aa(Oa,Oa,Oa,Oa)),za=new RegExp("hsl"+Aa(Oa,_a,_a)),ja=new RegExp("hsla"+Aa(Oa,_a,_a,Oa)),Ta=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ia=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Pa=/^#([0-9a-fA-F]{6})$/,Ra=/^#([0-9a-fA-F]{8})$/;function La(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function Wa(e,r,t){const n=t<.5?t*(1+r):t+r-t*r,i=2*t-n,o=La(i,n,e+1/3),s=La(i,n,e),a=La(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function Ya(e){const r=parseInt(e,10);return r<0?0:r>255?255:r}function Ha(e){return(parseFloat(e)%360+360)%360/360}function Na(e){const r=parseFloat(e);return r<0?0:r>1?255:Math.round(255*r)}function Va(e){const r=parseFloat(e);return r<0?0:r>100?1:r/100}function qa(e){let r=function(e){let r;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(r=Pa.exec(e))?parseInt(r[1]+"ff",16)>>>0:pa&&void 0!==pa[e]?pa[e]:(r=Ma.exec(e))?(Ya(r[1])<<24|Ya(r[2])<<16|Ya(r[3])<<8|255)>>>0:(r=Ba.exec(e))?(Ya(r[1])<<24|Ya(r[2])<<16|Ya(r[3])<<8|Na(r[4]))>>>0:(r=Ta.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=Ra.exec(e))?parseInt(r[1],16)>>>0:(r=Ia.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=za.exec(e))?(255|Wa(Ha(r[1]),Va(r[2]),Va(r[3])))>>>0:(r=ja.exec(e))?(Wa(Ha(r[1]),Va(r[2]),Va(r[3]))|Na(r[4]))>>>0:null}(e);if(null===r)return e;r=r||0;return`rgba(${(4278190080&r)>>>24}, ${(16711680&r)>>>16}, ${(65280&r)>>>8}, ${(255&r)/255})`}var Qa=(e,r,t)=>{if(sa.fun(e))return e;if(sa.arr(e))return Qa({range:e,output:r,extrapolate:t});if(sa.str(e.output[0]))return ha(e);const n=e,i=n.output,o=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const r=function(e,r){for(var t=1;t<r.length-1&&!(r[t]>=e);++t);return t-1}(e,o);return function(e,r,t,n,i,o,s,a,l){let d=l?l(e):e;if(d<r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(d>t){if("identity"===a)return d;"clamp"===a&&(d=t)}if(n===i)return n;if(r===t)return e<=r?n:i;r===-1/0?d=-d:t===1/0?d-=r:d=(d-r)/(t-r);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[r],o[r+1],i[r],i[r+1],l,s,a,n.map)}};var Ua=1.70158,Za=1.525*Ua,Xa=Ua+1,Ga=2*Math.PI/3,Ja=2*Math.PI/4.5,Ka=e=>{const r=7.5625,t=2.75;return e<1/t?r*e*e:e<2/t?r*(e-=1.5/t)*e+.75:e<2.5/t?r*(e-=2.25/t)*e+.9375:r*(e-=2.625/t)*e+.984375},el={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Xa*e*e*e-Ua*e*e,easeOutBack:e=>1+Xa*Math.pow(e-1,3)+Ua*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Za)/2:(Math.pow(2*e-2,2)*((Za+1)*(2*e-2)+Za)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ga),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ga)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ja)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ja)/2+1,easeInBounce:e=>1-Ka(1-e),easeOutBounce:Ka,easeInOutBounce:e=>e<.5?(1-Ka(1-2*e))/2:(1+Ka(2*e-1))/2,steps:(e,r="end")=>t=>{const n=(t="end"===r?Math.min(t,.999):Math.max(t,.001))*e,i="end"===r?Math.floor(n):Math.ceil(n);return o=0,s=1,a=i/e,Math.min(Math.max(a,o),s);var o,s,a}},rl=Symbol.for("FluidValue.get"),tl=Symbol.for("FluidValue.observers"),nl=e=>Boolean(e&&e[rl]),il=e=>e&&e[rl]?e[rl]():e,ol=e=>e[tl]||null;function sl(e,r){const t=e[tl];t&&t.forEach((e=>{!function(e,r){e.eventObserved?e.eventObserved(r):e(r)}(e,r)}))}var al=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");ll(this,e)}},ll=(e,r)=>hl(e,rl,r);function dl(e,r){if(e[rl]){let t=e[tl];t||hl(e,tl,t=new Set),t.has(r)||(t.add(r),e.observerAdded&&e.observerAdded(t.size,r))}return r}function cl(e,r){const t=e[tl];if(t&&t.has(r)){const n=t.size-1;n?t.delete(r):e[tl]=null,e.observerRemoved&&e.observerRemoved(n,r)}}var ul,hl=(e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}),gl=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,bl=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ml=new RegExp(`(${gl.source})(%|[a-z]+)`,"i"),pl=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,fl=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,yl=e=>{const[r,t]=vl(e);if(!r||ma())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(n)return n.trim();if(t&&t.startsWith("--")){const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);return r||e}return t&&fl.test(t)?yl(t):t||e},vl=e=>{const r=fl.exec(e);if(!r)return[,];const[,t,n]=r;return[t,n]},xl=(e,r,t,n,i)=>`rgba(${Math.round(r)}, ${Math.round(t)}, ${Math.round(n)}, ${i})`,wl=e=>{ul||(ul=pa?new RegExp(`(${Object.keys(pa).join("|")})(?!\\w)`,"g"):/^\b$/);const r=e.output.map((e=>il(e).replace(fl,yl).replace(bl,qa).replace(ul,qa))),t=r.map((e=>e.match(gl).map(Number))),n=t[0].map(((e,r)=>t.map((e=>{if(!(r in e))throw Error('The arity of each "output" value must be equal');return e[r]})))).map((r=>Qa({...e,output:r})));return e=>{const t=!ml.test(r[0])&&r.find((e=>ml.test(e)))?.replace(gl,"");let i=0;return r[0].replace(gl,(()=>`${n[i++](e)}${t||""}`)).replace(pl,xl)}},$l="react-spring: ",Fl=e=>{const r=e;let t=!1;if("function"!=typeof r)throw new TypeError(`${$l}once requires a function parameter`);return(...e)=>{t||(r(...e),t=!0)}},Cl=Fl(console.warn);var El=Fl(console.warn);function kl(e){return sa.str(e)&&("#"==e[0]||/\d/.test(e)||!ma()&&fl.test(e)||e in(pa||{}))}var Dl=ma()?y:v;function Sl(){const e=g()[1],r=(()=>{const e=h(!1);return Dl((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{r.current&&e(Math.random())}}var Ol=e=>y(e,_l),_l=[];function Al(e){const r=h();return y((()=>{r.current=e})),r.current}var Ml=Symbol.for("Animated:node"),Bl=e=>e&&e[Ml],zl=(e,r)=>((e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}))(e,Ml,r),jl=e=>e&&e[Ml]&&e[Ml].getPayload(),Tl=class{constructor(){zl(this,this)}getPayload(){return this.payload||[]}},Il=class extends Tl{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,sa.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Il(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,r){return sa.num(e)&&(this.lastPosition=e,r&&(e=Math.round(e/r)*r,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,sa.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Pl=class extends Il{constructor(e){super(0),this._string=null,this._toString=Qa({output:[e,e]})}static create(e){return new Pl(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(sa.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Qa({output:[this.getValue(),e]})),this._value=0,super.reset()}},Rl={dependencies:null},Ll=class extends Tl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const r={};return da(this.source,((t,n)=>{var i;(i=t)&&i[Ml]===i?r[n]=t.getValue(e):nl(t)?r[n]=il(t):e||(r[n]=t)})),r}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&la(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const r=new Set;return da(e,this._addToPayload,r),Array.from(r)}}_addToPayload(e){Rl.dependencies&&nl(e)&&Rl.dependencies.add(e);const r=jl(e);r&&la(r,(e=>this.add(e)))}},Wl=class extends Ll{constructor(e){super(e)}static create(e){return new Wl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const r=this.getPayload();return e.length==r.length?r.map(((r,t)=>r.setValue(e[t]))).some(Boolean):(super.setValue(e.map(Yl)),!0)}};function Yl(e){return(kl(e)?Pl:Il).create(e)}function Hl(e){const r=Bl(e);return r?r.constructor:sa.arr(e)?Wl:kl(e)?Pl:Il}var Nl=(e,r)=>{const t=!sa.fun(e)||e.prototype&&e.prototype.isReactComponent;return w(((n,i)=>{const o=h(null),s=t&&$((e=>{o.current=function(e,r){e&&(sa.fun(e)?e(r):e.current=r);return r}(i,e)}),[i]),[a,l]=function(e,r){const t=new Set;Rl.dependencies=t,e.style&&(e={...e,style:r.createAnimatedStyle(e.style)});return e=new Ll(e),Rl.dependencies=null,[e,t]}(n,r),d=Sl(),u=()=>{const e=o.current;if(t&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,a.getValue(!0)))&&d()},g=new Vl(u,l),b=h();Dl((()=>(b.current=g,la(l,(e=>dl(e,g))),()=>{b.current&&(la(b.current.deps,(e=>cl(e,b.current))),Ys.cancel(b.current.update))}))),y(u,[]),Ol((()=>()=>{const e=b.current;la(e.deps,(r=>cl(r,e)))}));const m=r.getComponentProps(a.getValue());return c.createElement(e,{...m,ref:s})}))},Vl=class{constructor(e,r){this.update=e,this.deps=r}eventObserved(e){"change"==e.type&&Ys.write(this.update)}};var ql=Symbol.for("AnimatedComponent"),Ql=e=>sa.str(e)?e:e&&sa.str(e.displayName)?e.displayName:sa.fun(e)&&e.name||null;function Ul(e,...r){return sa.fun(e)?e(...r):e}var Zl=(e,r)=>!0===e||!!(r&&e&&(sa.fun(e)?e(r):ca(e).includes(r))),Xl=(e,r)=>sa.obj(e)?r&&e[r]:e,Gl=(e,r)=>!0===e.default?e[r]:e.default?e.default[r]:void 0,Jl=e=>e,Kl=(e,r=Jl)=>{let t=ed;e.default&&!0!==e.default&&(e=e.default,t=Object.keys(e));const n={};for(const i of t){const t=r(e[i],i);sa.und(t)||(n[i]=t)}return n},ed=["config","onProps","onStart","onChange","onPause","onResume","onRest"],rd={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function td(e){const r=function(e){const r={};let t=0;if(da(e,((e,n)=>{rd[n]||(r[n]=e,t++)})),t)return r}(e);if(r){const t={to:r};return da(e,((e,n)=>n in r||(t[n]=e))),t}return{...e}}function nd(e){return e=il(e),sa.arr(e)?e.map(nd):kl(e)?Ls.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function id(e){return sa.fun(e)||sa.arr(e)&&sa.obj(e[0])}var od={tension:170,friction:26,mass:1,damping:1,easing:el.linear,clamp:!1},sd=class{constructor(){this.velocity=0,Object.assign(this,od)}};function ad(e,r){if(sa.und(r.decay)){const t=!sa.und(r.tension)||!sa.und(r.friction);!t&&sa.und(r.frequency)&&sa.und(r.damping)&&sa.und(r.mass)||(e.duration=void 0,e.decay=void 0),t&&(e.frequency=void 0)}else e.duration=void 0}var ld=[],dd=class{constructor(){this.changed=!1,this.values=ld,this.toValues=null,this.fromValues=ld,this.config=new sd,this.immediate=!1}};function cd(e,{key:r,props:t,defaultProps:n,state:i,actions:o}){return new Promise(((s,a)=>{let l,d,c=Zl(t.cancel??n?.cancel,r);if(c)g();else{sa.und(t.pause)||(i.paused=Zl(t.pause,r));let e=n?.pause;!0!==e&&(e=i.paused||Zl(e,r)),l=Ul(t.delay||0,r),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-Ys.now()}function h(){l>0&&!Ls.skipAnimation?(i.delayed=!0,d=Ys.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(d)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...t,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var ud=(e,r)=>1==r.length?r[0]:r.some((e=>e.cancelled))?bd(e.get()):r.every((e=>e.noop))?hd(e.get()):gd(e.get(),r.every((e=>e.finished))),hd=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),gd=(e,r,t=!1)=>({value:e,finished:r,cancelled:t}),bd=e=>({value:e,cancelled:!0,finished:!1});function md(e,r,t,n){const{callId:i,parentId:o,onRest:s}=r,{asyncTo:a,promise:l}=t;return o||e!==a||r.reset?t.promise=(async()=>{t.asyncId=i,t.asyncTo=e;const d=Kl(r,((e,r)=>"onRest"===r?void 0:e));let c,u;const h=new Promise(((e,r)=>(c=e,u=r))),g=e=>{const r=i<=(t.cancelId||0)&&bd(n)||i!==t.asyncId&&gd(n,!1);if(r)throw e.result=r,u(e),e},b=(e,r)=>{const o=new fd,s=new yd;return(async()=>{if(Ls.skipAnimation)throw pd(t),s.result=gd(n,!1),u(s),s;g(o);const a=sa.obj(e)?{...e}:{...r,to:e};a.parentId=i,da(d,((e,r)=>{sa.und(a[r])&&(a[r]=e)}));const l=await n.start(a);return g(o),t.paused&&await new Promise((e=>{t.resumeQueue.add(e)})),l})()};let m;if(Ls.skipAnimation)return pd(t),gd(n,!1);try{let r;r=sa.arr(e)?(async e=>{for(const r of e)await b(r)})(e):Promise.resolve(e(b,n.stop.bind(n))),await Promise.all([r.then(c),h]),m=gd(n.get(),!0,!1)}catch(e){if(e instanceof fd)m=e.result;else{if(!(e instanceof yd))throw e;m=e.result}}finally{i==t.asyncId&&(t.asyncId=o,t.asyncTo=o?a:void 0,t.promise=o?l:void 0)}return sa.fun(s)&&Ys.batchedUpdates((()=>{s(m,n,n.item)})),m})():l}function pd(e,r){ua(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,r&&(e.cancelId=r)}var fd=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},yd=class extends Error{constructor(){super("SkipAnimationSignal")}},vd=e=>e instanceof wd,xd=1,wd=class extends al{constructor(){super(...arguments),this.id=xd++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Bl(this);return e&&e.getValue()}to(...e){return Ls.to(this,e)}interpolate(...e){return Cl(`${$l}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ls.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,r=!1){sl(this,{type:"change",parent:this,value:e,idle:r})}_onPriorityChange(e){this.idle||Ca.sort(this),sl(this,{type:"priority",parent:this,priority:e})}},$d=Symbol.for("SpringPhase"),Fd=e=>(1&e[$d])>0,Cd=e=>(2&e[$d])>0,Ed=e=>(4&e[$d])>0,kd=(e,r)=>r?e[$d]|=3:e[$d]&=-3,Dd=(e,r)=>r?e[$d]|=4:e[$d]&=-5,Sd=class extends wd{constructor(e,r){if(super(),this.animation=new dd,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!sa.und(e)||!sa.und(r)){const t=sa.obj(e)?{...e}:{...r,from:e};sa.und(t.default)&&(t.default=!0),this.start(t)}}get idle(){return!(Cd(this)||this._state.asyncTo)||Ed(this)}get goal(){return il(this.animation.to)}get velocity(){const e=Bl(this);return e instanceof Il?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Fd(this)}get isAnimating(){return Cd(this)}get isPaused(){return Ed(this)}get isDelayed(){return this._state.delayed}advance(e){let r=!0,t=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,s=jl(n.to);!s&&nl(n.to)&&(i=ca(il(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==Pl?1:s?s[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,o.tension<=0)return void(a.done=!0);let r=a.elapsedTime+=e;const t=n.fromValues[l],i=null!=a.v0?a.v0:a.v0=sa.arr(o.velocity)?o.velocity[l]:o.velocity;let s;const h=o.precision||(t==d?.005:Math.min(1,.001*Math.abs(d-t)));if(sa.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*r);u=t+i/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=i*n}else{s=null==a.lastVelocity?i:a.lastVelocity;const r=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!sa.und(n),g=t==d?a.v0>0:t<d;let b,m=!1;const p=1,f=Math.ceil(e/p);for(let e=0;e<f&&(b=Math.abs(s)>r,b||(c=Math.abs(d-u)<=h,!c));++e){l&&(m=u==d||u>d==g,m&&(s=-s*n,u=d));s+=(1e-6*-o.tension*(u-d)+.001*-o.friction*s)/o.mass*p,u+=s*p}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,a.durationProgress>0&&(a.elapsedTime=o.duration*a.durationProgress,r=a.elapsedTime+=e)),n=(o.progress||0)+r/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=t+o.easing(n)*(d-t),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:r=!1,a.setValue(u,o.round)&&(t=!0)}));const a=Bl(this),l=a.getValue();if(r){const e=il(n.to);l===e&&!t||o.decay?t&&o.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else t&&this._onChange(l)}set(e){return Ys.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Cd(this)){const{to:e,config:r}=this.animation;Ys.batchedUpdates((()=>{this._onStart(),r.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,r){let t;return sa.und(e)?(t=this.queue||[],this.queue=[]):t=[sa.obj(e)?e:{...r,to:e}],Promise.all(t.map((e=>this._update(e)))).then((e=>ud(this,e)))}stop(e){const{to:r}=this.animation;return this._focus(this.get()),pd(this._state,e&&this._lastCallId),Ys.batchedUpdates((()=>this._stop(r,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const r=this.key||"";let{to:t,from:n}=e;t=sa.obj(t)?t[r]:t,(null==t||id(t))&&(t=void 0),n=sa.obj(n)?n[r]:n,null==n&&(n=void 0);const i={to:t,from:n};return Fd(this)||(e.reverse&&([t,n]=[n,t]),n=il(n),sa.und(n)?Bl(this)||this._set(t):this._set(n)),i}_update({...e},r){const{key:t,defaultProps:n}=this;e.default&&Object.assign(n,Kl(e,((e,r)=>/^on/.test(r)?Xl(e,t):e))),jd(this,e,"onProps"),Td(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return cd(++this._lastCallId,{key:t,props:e,defaultProps:n,state:o,actions:{pause:()=>{Ed(this)||(Dd(this,!0),ba(o.pauseQueue),Td(this,"onPause",gd(this,Od(this,this.animation.to)),this))},resume:()=>{Ed(this)&&(Dd(this,!1),Cd(this)&&this._resume(),ba(o.resumeQueue),Td(this,"onResume",gd(this,Od(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((t=>{if(e.loop&&t.finished&&(!r||!t.noop)){const r=_d(e);if(r)return this._update(r,!0)}return t}))}_merge(e,r,t){if(r.cancel)return this.stop(!0),t(bd(this));const n=!sa.und(e.to),i=!sa.und(e.from);if(n||i){if(!(r.callId>this._lastToId))return t(bd(this));this._lastToId=r.callId}const{key:o,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!i||n||r.default&&!sa.und(c)||(c=u),r.reverse&&([c,u]=[u,c]);const h=!aa(u,d);h&&(a.from=u),u=il(u);const g=!aa(c,l);g&&this._focus(c);const b=id(r.to),{config:m}=a,{decay:p,velocity:f}=m;(n||i)&&(m.velocity=0),r.config&&!b&&function(e,r,t){t&&(ad(t={...t},r),r={...t,...r}),ad(e,r),Object.assign(e,r);for(const r in od)null==e[r]&&(e[r]=od[r]);let{frequency:n,damping:i}=e;const{mass:o}=e;sa.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(m,Ul(r.config,o),r.config!==s.config?Ul(s.config,o):void 0);let y=Bl(this);if(!y||sa.und(c))return t(gd(this,!0));const v=sa.und(r.reset)?i&&!r.default:!sa.und(u)&&Zl(r.reset,o),x=v?u:this.get(),w=nd(c),$=sa.num(w)||sa.arr(w)||kl(w),F=!b&&(!$||Zl(s.immediate||r.immediate,o));if(g){const e=Hl(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=nl(c),k=!1;if(!E){const e=v||!Fd(this)&&h;(g||e)&&(k=aa(nd(x),w),E=!k),(aa(a.immediate,F)||F)&&aa(m.decay,p)&&aa(m.velocity,f)||(E=!0)}if(k&&Cd(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!b&&((E||nl(l))&&(a.values=y.getPayload(),a.toValues=nl(c)?null:C==Pl?[1]:ca(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=a;la(zd,(e=>jd(this,r,e)));const n=gd(this,Od(this,l));ba(this._pendingCalls,n),this._pendingCalls.add(t),a.changed&&Ys.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?Ul(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),b?t(md(r.to,r,this._state,this)):E?this._start():Cd(this)&&!g?this._pendingCalls.add(t):t(hd(x))}_focus(e){const r=this.animation;e!==r.to&&(ol(this)&&this._detach(),r.to=e,ol(this)&&this._attach())}_attach(){let e=0;const{to:r}=this.animation;nl(r)&&(dl(r,this),vd(r)&&(e=r.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;nl(e)&&cl(e,this)}_set(e,r=!0){const t=il(e);if(!sa.und(t)){const e=Bl(this);if(!e||!aa(t,e.getValue())){const n=Hl(t);e&&e.constructor==n?e.setValue(t):zl(this,n.create(t)),e&&Ys.batchedUpdates((()=>{this._onChange(t,r)}))}}return Bl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Td(this,"onStart",gd(this,Od(this,e.to)),this))}_onChange(e,r){r||(this._onStart(),Ul(this.animation.onChange,e,this)),Ul(this.defaultProps.onChange,e,this),super._onChange(e,r)}_start(){const e=this.animation;Bl(this).reset(il(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Cd(this)||(kd(this,!0),Ed(this)||this._resume())}_resume(){Ls.skipAnimation?this.finish():Ca.start(this)}_stop(e,r){if(Cd(this)){kd(this,!1);const t=this.animation;la(t.values,(e=>{e.done=!0})),t.toValues&&(t.onChange=t.onPause=t.onResume=void 0),sl(this,{type:"idle",parent:this});const n=r?bd(this.get()):gd(this.get(),Od(this,e??t.to));ba(this._pendingCalls,n),t.changed&&(t.changed=!1,Td(this,"onRest",n,this))}}};function Od(e,r){const t=nd(r);return aa(nd(e.get()),t)}function _d(e,r=e.loop,t=e.to){const n=Ul(r);if(n){const i=!0!==n&&td(n),o=(i||e).reverse,s=!i||i.reset;return Ad({...e,loop:r,default:!1,pause:void 0,to:!o||id(t)?t:void 0,from:s?e.from:void 0,reset:s,...i})}}function Ad(e){const{to:r,from:t}=e=td(e),n=new Set;return sa.obj(r)&&Bd(r,n),sa.obj(t)&&Bd(t,n),e.keys=n.size?Array.from(n):null,e}function Md(e){const r=Ad(e);return sa.und(r.default)&&(r.default=Kl(r)),r}function Bd(e,r){da(e,((e,t)=>null!=e&&r.add(t)))}var zd=["onStart","onRest","onChange","onPause","onResume"];function jd(e,r,t){e.animation[t]=r[t]!==Gl(r,t)?Xl(r[t],e.key):void 0}function Td(e,r,...t){e.animation[r]?.(...t),e.defaultProps[r]?.(...t)}var Id=["onStart","onChange","onRest"],Pd=1,Rd=class{constructor(e,r){this.id=Pd++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),r&&(this._flush=r),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((r,t)=>e[t]=r.get())),e}set(e){for(const r in e){const t=e[r];sa.und(t)||this.springs[r].set(t)}}update(e){return e&&this.queue.push(Ad(e)),this}start(e){let{queue:r}=this;return e?r=ca(e).map(Ad):this.queue=[],this._flush?this._flush(this,r):(qd(this,r),Ld(this,r))}stop(e,r){if(e!==!!e&&(r=e),r){const t=this.springs;la(ca(r),(r=>t[r].stop(!!e)))}else pd(this._state,this._lastAsyncId),this.each((r=>r.stop(!!e)));return this}pause(e){if(sa.und(e))this.start({pause:!0});else{const r=this.springs;la(ca(e),(e=>r[e].pause()))}return this}resume(e){if(sa.und(e))this.start({pause:!1});else{const r=this.springs;la(ca(e),(e=>r[e].resume()))}return this}each(e){da(this.springs,e)}_onFrame(){const{onStart:e,onChange:r,onRest:t}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,ua(e,(([e,r])=>{r.value=this.get(),e(r,this,this._item)})));const o=!n&&this._started,s=i||o&&t.size?this.get():null;i&&r.size&&ua(r,(([e,r])=>{r.value=s,e(r,this,this._item)})),o&&(this._started=!1,ua(t,(([e,r])=>{r.value=s,e(r,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Ys.onFrame(this._onFrame)}};function Ld(e,r){return Promise.all(r.map((r=>Wd(e,r)))).then((r=>ud(e,r)))}async function Wd(e,r,t){const{keys:n,to:i,from:o,loop:s,onRest:a,onResolve:l}=r,d=sa.obj(r.default)&&r.default;s&&(r.loop=!1),!1===i&&(r.to=null),!1===o&&(r.from=null);const c=sa.arr(i)||sa.fun(i)?i:void 0;c?(r.to=void 0,r.onRest=void 0,d&&(d.onRest=void 0)):la(Id,(t=>{const n=r[t];if(sa.fun(n)){const i=e._events[t];r[t]=({finished:e,cancelled:r})=>{const t=i.get(n);t?(e||(t.finished=!1),r&&(t.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:r||!1})},d&&(d[t]=r[t])}}));const u=e._state;r.pause===!u.paused?(u.paused=r.pause,ba(r.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(r.pause=!0);const h=(n||Object.keys(e.springs)).map((t=>e.springs[t].start(r))),g=!0===r.cancel||!0===Gl(r,"cancel");(c||g&&u.asyncId)&&h.push(cd(++e._lastAsyncId,{props:r,state:u,actions:{pause:oa,resume:oa,start(r,t){g?(pd(u,e._lastAsyncId),t(bd(e))):(r.onRest=a,t(md(c,r,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const b=ud(e,await Promise.all(h));if(s&&b.finished&&(!t||!b.noop)){const t=_d(r,s,i);if(t)return qd(e,[t]),Wd(e,t,!0)}return l&&Ys.batchedUpdates((()=>l(b,e,e.item))),b}function Yd(e,r){const t={...e.springs};return r&&la(ca(r),(e=>{sa.und(e.keys)&&(e=Ad(e)),sa.obj(e.to)||(e={...e,to:void 0}),Vd(t,e,(e=>Nd(e)))})),Hd(e,t),t}function Hd(e,r){da(r,((r,t)=>{e.springs[t]||(e.springs[t]=r,dl(r,e))}))}function Nd(e,r){const t=new Sd;return t.key=e,r&&dl(t,r),t}function Vd(e,r,t){r.keys&&la(r.keys,(n=>{(e[n]||(e[n]=t(n)))._prepareNode(r)}))}function qd(e,r){la(r,(r=>{Vd(e.springs,r,(r=>Nd(r,e)))}))}var Qd,Ud,Zd=({children:e,...r})=>{const t=F(Xd),n=r.pause||!!t.pause,i=r.immediate||!!t.immediate;r=function(e,r){const[t]=g((()=>({inputs:r,result:e()}))),n=h(),i=n.current;let o=i;o?Boolean(r&&o.inputs&&function(e,r){if(e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}(r,o.inputs))||(o={inputs:r,result:e()}):o=t;return y((()=>{n.current=o,i==t&&(t.inputs=t.result=void 0)}),[o]),o.result}((()=>({pause:n,immediate:i})),[n,i]);const{Provider:o}=Xd;return c.createElement(o,{value:r},e)},Xd=(Qd=Zd,Ud={},Object.assign(Qd,c.createContext(Ud)),Qd.Provider._context=Qd,Qd.Consumer._context=Qd,Qd);Zd.Provider=Xd.Provider,Zd.Consumer=Xd.Consumer;var Gd=()=>{const e=[],r=function(r){El(`${$l}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return la(e,((e,i)=>{if(sa.und(r))n.push(e.start());else{const o=t(r,e,i);o&&n.push(e.start(o))}})),n};r.current=e,r.add=function(r){e.includes(r)||e.push(r)},r.delete=function(r){const t=e.indexOf(r);~t&&e.splice(t,1)},r.pause=function(){return la(e,(e=>e.pause(...arguments))),this},r.resume=function(){return la(e,(e=>e.resume(...arguments))),this},r.set=function(r){la(e,((e,t)=>{const n=sa.fun(r)?r(t,e):r;n&&e.set(n)}))},r.start=function(r){const t=[];return la(e,((e,n)=>{if(sa.und(r))t.push(e.start());else{const i=this._getProps(r,e,n);i&&t.push(e.start(i))}})),t},r.stop=function(){return la(e,(e=>e.stop(...arguments))),this},r.update=function(r){return la(e,((e,t)=>e.update(this._getProps(r,e,t)))),this};const t=function(e,r,t){return sa.fun(e)?e(t,r):e};return r._getProps=t,r};function Jd(e,r){const t=sa.fun(e),[[n],i]=function(e,r,t){const n=sa.fun(r)&&r;n&&!t&&(t=[]);const i=x((()=>n||3==arguments.length?Gd():void 0),[]),o=h(0),s=Sl(),a=x((()=>({ctrls:[],queue:[],flush(e,r){const t=Yd(e,r),n=o.current>0&&!a.queue.length&&!Object.keys(t).some((r=>!e.springs[r]));return n?Ld(e,r):new Promise((n=>{Hd(e,t),a.queue.push((()=>{n(Ld(e,r))})),s()}))}})),[]),l=h([...a.ctrls]),d=[],c=Al(e)||0;function u(e,t){for(let i=e;i<t;i++){const e=l.current[i]||(l.current[i]=new Rd(null,a.flush)),t=n?n(i,e):r[i];t&&(d[i]=Md(t))}}x((()=>{la(l.current.slice(e,c),(e=>{!function(e,r){e.ref?.delete(e),r?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,u(c,e)}),[e]),x((()=>{u(0,Math.min(c,e))}),t);const g=l.current.map(((e,r)=>Yd(e,d[r]))),b=F(Zd),m=Al(b),p=b!==m&&function(e){for(const r in e)return!0;return!1}(b);Dl((()=>{o.current++,a.ctrls=l.current;const{queue:e}=a;e.length&&(a.queue=[],la(e,(e=>e()))),la(l.current,((e,r)=>{i?.add(e),p&&e.start({default:b});const t=d[r];t&&(function(e,r){r&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r)}(e,t.ref),e.ref?e.queue.push(t):e.start(t))}))})),Ol((()=>()=>{la(a.ctrls,(e=>e.stop(!0)))}));const f=g.map((e=>({...e})));return i?[f,i]:f}(1,t?e:[e],t?r||[]:r);return t||2==arguments.length?[n,i]:n}var Kd=class extends wd{constructor(e,r){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Qa(...r);const t=this._get(),n=Hl(t);zl(this,n.create(t))}advance(e){const r=this._get();aa(r,this.get())||(Bl(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&rc(this._active)&&tc(this)}_get(){const e=sa.arr(this.source)?this.source.map(il):ca(il(this.source));return this.calc(...e)}_start(){this.idle&&!rc(this._active)&&(this.idle=!1,la(jl(this),(e=>{e.done=!1})),Ls.skipAnimation?(Ys.batchedUpdates((()=>this.advance())),tc(this)):Ca.start(this))}_attach(){let e=1;la(ca(this.source),(r=>{nl(r)&&dl(r,this),vd(r)&&(r.idle||this._active.add(r),e=Math.max(e,r.priority+1))})),this.priority=e,this._start()}_detach(){la(ca(this.source),(e=>{nl(e)&&cl(e,this)})),this._active.clear(),tc(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ca(this.source).reduce(((e,r)=>Math.max(e,(vd(r)?r.priority:0)+1)),0))}};function ec(e){return!1!==e.idle}function rc(e){return!e.size||Array.from(e).every(ec)}function tc(e){e.idle||(e.idle=!0,la(jl(e),(e=>{e.done=!0})),sl(e,{type:"idle",parent:e}))}Ls.assign({createStringInterpolator:wl,to:(e,r)=>new Kd(e,r)});var nc=/^--/;function ic(e,r){return null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||nc.test(e)||sc.hasOwnProperty(e)&&sc[e]?(""+r).trim():r+"px"}var oc={};var sc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ac=["Webkit","Ms","Moz","O"];sc=Object.keys(sc).reduce(((e,r)=>(ac.forEach((t=>e[((e,r)=>e+r.charAt(0).toUpperCase()+r.substring(1))(t,r)]=e[r])),e)),sc);var lc=/^(matrix|translate|scale|rotate|skew)/,dc=/^(translate)/,cc=/^(rotate|skew)/,uc=(e,r)=>sa.num(e)&&0!==e?e+r:e,hc=(e,r)=>sa.arr(e)?e.every((e=>hc(e,r))):sa.num(e)?e===r:parseFloat(e)===r,gc=class extends Ll{constructor({x:e,y:r,z:t,...n}){const i=[],o=[];(e||r||t)&&(i.push([e||0,r||0,t||0]),o.push((e=>[`translate3d(${e.map((e=>uc(e,"px"))).join(",")})`,hc(e,0)]))),da(n,((e,r)=>{if("transform"===r)i.push([e||""]),o.push((e=>[e,""===e]));else if(lc.test(r)){if(delete n[r],sa.und(e))return;const t=dc.test(r)?"px":cc.test(r)?"deg":"";i.push(ca(e)),o.push("rotate3d"===r?([e,r,n,i])=>[`rotate3d(${e},${r},${n},${uc(i,t)})`,hc(i,0)]:e=>[`${r}(${e.map((e=>uc(e,t))).join(",")})`,hc(e,r.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new bc(i,o)),super(n)}},bc=class extends al{constructor(e,r){super(),this.inputs=e,this.transforms=r,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",r=!0;return la(this.inputs,((t,n)=>{const i=il(t[0]),[o,s]=this.transforms[n](sa.arr(i)?i:t.map(il));e+=" "+o,r=r&&s})),r?"none":e}observerAdded(e){1==e&&la(this.inputs,(e=>la(e,(e=>nl(e)&&dl(e,this)))))}observerRemoved(e){0==e&&la(this.inputs,(e=>la(e,(e=>nl(e)&&cl(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),sl(this,e)}};Ls.assign({batchedUpdates:q,createStringInterpolator:wl,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var mc=((e,{applyAnimatedValues:r=()=>!1,createAnimatedStyle:t=e=>new Ll(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:r,createAnimatedStyle:t,getComponentProps:n},o=e=>{const r=Ql(e)||"Anonymous";return(e=sa.str(e)?o[e]||(o[e]=Nl(e,i)):e[ql]||(e[ql]=Nl(e,i))).displayName=`Animated(${r})`,e};return da(e,((r,t)=>{sa.arr(e)&&(t=Ql(r)),o[t]=o(r)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,r){if(!e.nodeType||!e.setAttribute)return!1;const t="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:s,viewBox:a,...l}=r,d=Object.values(l),c=Object.keys(l).map((r=>t||e.hasAttribute(r)?r:oc[r]||(oc[r]=r.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const r in n)if(n.hasOwnProperty(r)){const t=ic(r,n[r]);nc.test(r)?e.style.setProperty(r,t):e.style[r]=t}c.forEach(((r,t)=>{e.setAttribute(r,d[t])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new gc(e),getComponentProps:({scrollTop:e,scrollLeft:r,...t})=>t}),pc=mc.animated;const fc=C.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,t=e.animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${ao.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,yc=r=>{var{id:t="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:a,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=r,u=le(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,b]=g(),[m,p]=g();y((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(f(),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)})),[]),y((()=>{var e,r;n&&c&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[n]);const f=()=>{const e=.01*window.innerHeight;b(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;b(e),p(window.visualViewport.offsetTop)}};return e(wo,{"data-testid":`${t}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:t,rootId:a,zIndex:l,children:e(fc,Object.assign({show:n,animationFrom:i,"data-testid":t,verticalHeight:h,offsetTop:m},u,{children:o}))})},vc=C.div`
    border-radius: ${oo.md};
    background: ${eo.bg};
    padding: ${io["spacing-16"]} ${io["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,xc=C.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${io["spacing-24"]};
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
                background-color: ${eo["bg-hover-neutral"]};
            `}
    }
`,wc=u.forwardRef(((r,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=r,a=le(r,["children","focusHighlight","focusOutline","type"]);return e(xc,Object.assign({ref:t,$outline:o,$highlight:i,type:s},a,{children:n}))})),$c=C.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${eo.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${ao.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Fc=C(wc)`
    position: absolute;
    top: var(--close-button-top-inset, ${io["spacing-16"]});
    right: var(--close-button-right-inset, ${io["spacing-16"]});
    padding: 0;
    color: ${eo.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${ao.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${io["spacing-20"]});
    }
`,Cc=C.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Ec=C((r=>{var{children:t}=r,n=le(r,["children"]);const i=n["data-testid"]||"card";return e(vc,Object.assign({},n,{"data-testid":i,children:"string"==typeof t?e(as.BodyBL,{children:t}):t}))}))`
    color: ${eo.text};
    ${ns({textSize:"body-md"})}

    ${ao.MaxWidth.sm} {
        display: none;
    }
`,kc=C((t=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:s=!0}=t,a=le(t,["id","children","onClose","showCloseButton"]);return r($c,Object.assign({"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[s&&e(Fc,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(ne,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Dc=C.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${eo.text};
    ${ns({textSize:"body-md"})}
`,Sc=n=>{var{children:i,visible:o,onMobileClose:s}=n,a=le(n,["children","visible","onMobileClose"]);const l=a["data-testid"]||"popover",d=D(),c=so["sm-max"]({theme:d}),u=ge.useMediaQuery({maxWidth:c}),h=()=>{s&&s()},g=()=>"string"==typeof i?e(as.BodyMD,{children:i}):i;return r(t,{children:[o&&e(Cc,Object.assign({"data-testid":l},a,{children:e(Ec,{children:g()})})),u&&e(yc,{show:null!=o&&o,onOverlayClick:h,children:e(kc,{onClose:h,children:e(Dc,{children:g()})})})]})},Oc=C.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,_c=n=>{var i,o,{children:s,popoverContent:a,trigger:l="click",position:d="top",zIndex:c,rootNode:u,customOffset:b,delay:m,onPopoverAppear:p,onPopoverDismiss:f}=n,v=le(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[x,w]=g(!1),$=h(null),F=h(null),C=D(),E=so["sm-max"]({theme:C}),k=ge.useMediaQuery({maxWidth:E}),{refs:O,floatingStyles:_,context:A}=M({open:x,placement:d,whileElementsMounted:B,middleware:[z(null!=b?b:16),j(),T({limiter:I()})],onOpenChange:e=>{w(e),x!==e&&J(e)}}),N=(()=>{const[e,r]=g(void 0),t=S();return y((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(vo.Change,e),t.events.emit(vo.Ready),()=>t.events.off(vo.Change,e)}),[t]),e})(),V=k?"click":l,q=P(A,{ignoreMouse:"hover"===V}),Q=R(A),U=L(A,{enabled:"hover"===V,delay:{open:null!==(i=null==m?void 0:m.open)&&void 0!==i?i:0,close:null!==(o=null==m?void 0:m.close)&&void 0!==o?o:500}}),{getReferenceProps:Z,getFloatingProps:X}=W([q,Q,U]),G=()=>{w(!1),J(!1)},J=e=>{e&&p&&p(),!e&&f&&f()};return r(t,{children:[e(Oc,Object.assign({ref:e=>{$.current=e,O.setReference(e)}},Z({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:s})),x&&e(Y,{root:u,children:e(H,{context:A,children:e("div",Object.assign({ref:e=>{F.current=e,O.setFloating(e)},style:Object.assign(Object.assign({},_),{outline:"none",zIndex:null!=c?c:N})},X(),{children:"function"==typeof a?a():e(Sc,{visible:!0,onMobileClose:G,children:a})}))})})]})},Ac=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Mc=C.span`
    color: ${eo["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Ac(e)}

    &:hover,
    &:focus-visible {
        color: ${eo["text-hover"]};
        ${({$hoverStyle:e})=>Ac(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Bc=C.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,zc=t=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:s="default",underlineHoverStyle:a="default"}=t,l=le(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return e(_c,Object.assign({},l,{children:r(Mc,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:s,$hoverStyle:a,"aria-label":null!=n?n:d?void 0:"More info",children:[i,o&&e(Bc,{$standalone:!d,children:o})]})}))},jc=C.div`
    padding-left: ${io["spacing-4"]};
    display: inline;
`,Tc=({addon:r,rootNode:t})=>{const{content:n,type:i,icon:o,id:s,zIndex:a,"data-testid":l}=r;return e(jc,{children:e(zc,{trigger:"click",id:s,"data-testid":l,popoverContent:n,rootNode:t,zIndex:a,icon:null!=o?o:e(J,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Ic=C.div`
    background-color: ${e=>e.$collapsible?eo["bg-strong"]:eo.bg};
    ${ao.MaxWidth.lg} {
        background-color: ${eo["bg-strong"]};
    }
`,Pc=C.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${eo.border};

    ${ao.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${io["spacing-16"]};
    }
`,Rc=C.div`
    display: flex;
    align-items: center;

    background-color: ${eo.bg};

    ${ao.MaxWidth.lg} {
        background-color: transparent;
    }
`,Lc=C(wc)`
    margin: 0 0 0 auto;

    color: ${eo.icon};
    &:hover {
        color: ${eo["icon-hover"]};
    }
`,Wc=C(Q)`
    height: ${ro.Spec["body-size-baseline"]};
    width: ${ro.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${to["duration-350"]} ${to["ease-standard"]};
`,Yc=C.p`
    ${ro["heading-xs-semibold"]}
    color: ${eo.text};

    margin: ${io["spacing-24"]} 0 ${io["spacing-24"]}
        ${io["spacing-20"]};

    ${ao.MaxWidth.lg} {
        ${ro["body-md-semibold"]}
        color: ${eo["text-subtle"]};

        margin: ${io["spacing-24"]} ${io["spacing-20"]} 0
            ${io["spacing-20"]};
    }
`,Hc=C(pc.div)`
    overflow: hidden;
`,Nc=C.div`
    padding: ${io["spacing-24"]} ${io["spacing-20"]};
`,Vc=C(pc.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,qc=C(Uo.Small)`
    height: fit-content;
    padding: 0;
    margin: ${io["spacing-16"]} 0 0 0;
`,Qc=t=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:s,onExpandChange:a,minimisable:l=!1,minimisedHeight:d,showDivider:c=!0,showMobileDivider:u=!0,title:h,addon:b,children:m}=t,p=le(t,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:f,rootNode:v}=F(Co),x="mobile"===f,[w,$]=g(A()),[C,E]=g(l),k=!x&&i,D=Ar(),S=Ar(),O=Jd({height:w?D.height:0}),_=C?null!=d?d:Math.min(.5*(null!==(n=S.height)&&void 0!==n?n:0),216):S.height;y((()=>{$(A())}),[i,s]);function A(){return!!x||(Ps(s)?!i||o:s)}return r(Ic,{$collapsible:k,children:[e(Pc,{$showDivider:c,$showMobileDivider:u}),(h||k)&&r(Rc,{children:[h&&r(Yc,{children:[h," ",b&&("popover"===(null==b?void 0:b.type)?e(Tc,{addon:b,rootNode:x?v:void 0}):null)]}),k&&e(Lc,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!w;Ps(s)&&$(e),a&&a(e)},"aria-label":w?"Collapse":"Expand",children:e(Wc,{$expanded:w})})]}),e(Hc,{"data-testid":"expandable-container","data-expanded":w,style:O,children:e("div",{ref:D.ref,children:r(Nc,Object.assign({},p,{children:[e(Vc,{"data-testid":"minimisable-container",$height:_,$minimisable:l,children:e("div",{ref:S.ref,children:e("div",{"data-id":"content-container",children:"function"==typeof m?m(f,{minimised:C}):m})})}),l&&r(qc,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{E(!C)},children:["View ",C?"more":"less"]})]}))})})]})};Qc.displayName="Filter.Item";const Uc=C(Qc)`
    padding: 0 0 ${io["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${io["spacing-8"]} ${io["spacing-8"]} 0;

        ${ao.MaxWidth.lg} {
            padding: ${io["spacing-16"]} ${io["spacing-20"]}
                ${io["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${io["spacing-8"]} ${io["spacing-20"]} 0;
    }
`,Zc=C.div`
    display: flex;
    flex-direction: column;

    ${ao.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${io["spacing-16"]};
    }
`,Xc=C.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${io["spacing-8"]} ${io["spacing-12"]};

    cursor: pointer;
    ${ro["body-md-regular"]}
    color: ${eo.text};
    ${e=>e.$selected&&E`
            color: ${eo["text-selected"]};
        `}

    ${ao.MaxWidth.lg} {
        padding: ${io["spacing-8"]};
    }
`,Gc=C((t=>{var{className:n,checked:i,disabled:o,indeterminate:s,onChange:a,onKeyPress:l,displaySize:d="default"}=t,c=le(t,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=h(null);y((()=>{u.current&&(u.current.indeterminate=null!=s&&s)}),[s]);const g=e=>{if(!o){const r=e;if(!(" "===r.key||"change"===e.type))return;a&&a(e),l&&l(r)}};return r(Xo,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:g,$displaySize:d,$disabled:o,$unchecked:!(s||i||o),children:[e(ts,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:g,disabled:o},c)),s?e(rs,{$disabled:o,"data-testid":"indeterminate"}):i?e(es,{$disabled:o,"data-testid":"checkmark"}):o?e(Ko,{"data-testid":"empty-disabled-checkbox"}):e(Jo,{$disabled:o,"data-testid":"empty-checkbox"})]})}))`
    flex-shrink: 0;
    margin-right: ${io["spacing-8"]};
`,Jc=C((({type:n="checkbox",indicator:i,checked:o,styleType:s="default",children:a,childrenMaxLines:l,subLabel:d,disabled:c,error:u,name:b,id:m,className:p,compositeSection:f,removable:v,onRemove:w,"data-testid":$,onChange:F,useContentWidth:C})=>{const{collapsible:E=!0,errors:k,children:D,initialExpanded:S}=f||{},[O,_]=g(o),[A,M]=g(!!S),B=x((()=>{const e=Array.isArray(k)&&(null==k?void 0:k.length)>0,r=!Array.isArray(k)&&!!k;return e||r}),[k]),[z]=g(je.generate()),j=m?`${m}`:`tg-${z}`,T=h(null);y((()=>{_(o)}),[o]),y((()=>{O&&M(null==S||S)}),[O]);const I=()=>{c||M(!A)},P=()=>{c||!w||w()},R=()=>{let r;switch(n){case"yes":r="tick";break;case"no":r="cross";break;case"checkbox":case"radio":r=n}return e(Is,{type:r,active:O,disabled:c,$selected:O,$disabled:c})},L=()=>{if(!d)return null;let r;return r="function"==typeof d?d():d,e(Ds,{"data-id":"toggle-sublabel",children:r})},W=n=>r(t,{children:[e(js,{weight:"semibold",$disabled:c,children:"Error"}),e(Ts,{$disabled:c,children:null==n?void 0:n.map(((r,t)=>e("li",{id:`${j}-error-list-item-${t}`,children:e(js,{weight:"semibold",$disabled:c,children:r})},t)))})]});return r(Fs,{$selected:O,$disabled:c,className:p,$styleType:s,$error:u,$indicator:i,$useContentWidth:C,id:m,"data-testid":$,children:[r(Ss,{id:`${j}-header-container`,$disabled:c,$error:u,$selected:O,$indicator:i,$styleType:s,children:[r(Os,{$addPadding:v,children:[e(Cs,{ref:T,name:b,id:`${j}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:c,onChange:e=>{if(!c){if(F)return void F(e);switch(n){case"checkbox":_((e=>!e));break;case"radio":case"yes":case"no":O||_(!0)}}},checked:O}),i&&R(),r(Es,{$selected:O,$disabled:c,children:[e(ks,{htmlFor:`${j}-input`,"data-testid":`${j}-toggle-label`,$maxLines:l,children:a}),d&&L()]})]}),v&&e(_s,{type:"button",$disabled:c,onClick:P,id:`${j}-remove-button`,children:"Remove"})]}),D&&r("div",{children:[(!E||A)&&e(zs,{"data-id":"toggle-composite-children",$isFinalItem:!E,$disabled:c,children:D}),E&&!A&&B&&e(Ms,{$disabled:c,onClick:I,id:`${j}-error-alert`,children:e(Bs,{type:c?"description":"error",className:p,showIcon:!0,children:Array.isArray(k)?W(k):k})}),E&&r(As,{$paddingTopRequired:!A&&!B,disabled:c,onClick:I,"data-testid":A?"collapse-button":"expand-button",children:[A?"Show less":"Show more",e(A?U:Q,{"aria-hidden":!0})]})]})]})}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,Kc=C(Uo.Small)`
    height: fit-content;
    padding: 0;
    margin: ${io["spacing-16"]} 0 ${io["spacing-8"]}
        ${io["spacing-12"]};

    ${ao.MaxWidth.lg} {
        margin: 0 0 ${io["spacing-16"]} 0;
    }
`,eu=n=>{var{selectedOptions:i,options:o,onSelect:s,labelExtractor:a,valueExtractor:l,useToggleContentWidth:d}=n,c=le(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:u}=F(Co),[b,m]=g(i||[]),[p,f]=g(),[v,x]=g(o.length),w=h(null),C=h(null),E=e=>()=>{const r=[...b],t=b.findIndex((r=>S(r)===S(e)));t>=0?r.splice(t,1):r.push(e),m(r),null==s||s(r)},k=()=>{const e=b.length?[]:o;m(e),null==s||s(e)},D=e=>{var r;return a?a(e):null!==(r=e.label)&&void 0!==r?r:null==e?void 0:e.toString()},S=e=>{var r;return l?l(e):null!==(r=e.value)&&void 0!==r?r:null==e?void 0:e.toString()},O=$((()=>{if(!w.current)return void f(void 0);const e=Array.from(w.current.children);let r=0,t=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(t++,n=o,t>2))break;r=i}x(r),f(t>2?n-8:void 0)}),[]);y((()=>{i!==b&&m(i||[])}),[i]),y((()=>{"default"===u?(()=>{const e=C.current?C.current.offsetTop+C.current.clientHeight:void 0;f(e)})():O()}),[o]),Ar({handleWidth:"mobile"===u,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:w,onResize:O});return e(Uc,Object.assign({minimisable:o.length>5,minimisedHeight:p},c,{children:(n,{minimised:i})=>r(t,{children:[o.length<3?null:e(Kc,{styleType:"link",type:"button",onClick:k,children:b.length?"Clear all":"Select all"}),e(Zc,{role:"group","aria-label":c.title,ref:w,children:o.map(((t,o)=>"default"===n?((t,n,i)=>{const o=D(t),s=S(t),a=!!b.find((e=>S(e)===s));return r(Xc,{$visible:!i||n<5,$selected:a,ref:4===n?C:void 0,children:[e(Gc,{displaySize:"small",checked:a,onChange:E(t)}),o]},s)})(t,o,i):((r,t,n)=>{const i=D(r),o=S(r),s=!!b.find((e=>S(e)===o));return e(Jc,{type:"checkbox",checked:s,$visible:!n||!!p&&t<=v,onChange:E(r),useContentWidth:d,children:i},o)})(t,o,i)))})]})}))};eu.displayName="Filter.Checkbox";const ru=C.div`
    background-color: ${eo.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,tu=C(Ho)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,nu=(t,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left",loading:c=!1}=t,u=le(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:a};return r(tu,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[c?e(Ao,{}):l,e("span",{children:i})]}))};nu.displayName="ButtonWithIcon.Default";const iu=(t,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left",loading:c=!1}=t,u=le(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:a};return r(tu,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[c?e(Ao,{}):l,e("span",{children:i})]}))};iu.displayName="ButtonWithIcon.Small";const ou={Default:u.forwardRef(nu),Small:u.forwardRef(iu)},su=C.div`
    background-color: ${eo.bg};
    border: ${no["width-010"]} ${no.solid} ${eo.border};
    border-radius: ${oo.md};
    overflow: hidden;
    width: 100%;
`,au=C.div`
    background-color: ${eo["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,lu=C.div`
    background-color: ${eo.bg};
    height: 100%;
    width: 100%;
`,du=C.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,cu=C.div`
    display: flex;
    align-items: center;

    background-color: ${eo.bg};

    ${ao.MaxWidth.lg} {
        border-bottom: ${no["width-010"]} ${no.solid}
            ${eo.border};
    }
`,uu=C(as.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${io["spacing-24"]} 0 ${io["spacing-24"]}
        ${io["spacing-20"]};

    ${ao.MaxWidth.lg} {
        text-align: center;
        margin: ${io["spacing-24"]} 0;
    }
`,hu=C(wc)`
    padding: ${io["spacing-24"]} ${io["spacing-20"]};
    margin-right: auto;
    color: ${eo.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${eo["icon-hover"]};
    }
`,gu=C(Uo.Small)`
    background-color: transparent;
    padding-right: ${io["spacing-20"]};
    padding-left: ${io["spacing-20"]};
    height: 100%;

    ${ao.MaxWidth.lg} {
        padding: ${io["spacing-24"]} ${io["spacing-20"]};
    }
`,bu=C(ou.Default)`
    width: 100%;
`,mu=C.div`
    padding: ${io["spacing-24"]} ${io["spacing-20"]};
    background-color: ${eo.bg};
    border-top: ${no["width-010"]} ${no.solid} ${eo.border};
`,pu=C(Uo.Default)`
    width: 100%;
`,fu=({onDismiss:t,onDone:n,children:i})=>r(ru,{children:[e(hu,{onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(ae,{})}),e(du,{children:i}),e(mu,{children:e(pu,{onClick:n,type:"button",children:"Done"})})]});fu.displayName="Filter.Page";const yu=n=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:o="light",headerTitle:s="Filters",clearButtonDisabled:a=!1,onClear:c,onDismiss:u,onDone:b,children:m}=n,p=le(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[f,v]=g(!1),x=h(null),w=h(null),$=D(),F=so["lg-max"]({theme:$}),C=ge.useMediaQuery({maxWidth:F});y((()=>{C||k()}),[C]);const E=()=>{v(!0)},k=()=>{v(!1),u&&u()},S=()=>{v(!1),b&&b()},O=()=>{c&&c()},_=e=>"function"==typeof m?m(e):m,A=t=>r(cu,{children:["mobile"===t&&e(hu,{onClick:k,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(d,{})}),e(uu,{weight:"semibold",children:s}),e(gu,{styleType:"link",type:"button",onClick:O,disabled:a,children:"Clear"})]});return e("div",Object.assign({},p,{children:e(Co.Provider,C?{value:{mode:"mobile",rootNode:x},children:r(t,{children:[e(bu,{"data-testid":"filter-show-button",styleType:o,onClick:E,type:"button",icon:e(l,{}),children:i}),e(wo,{show:f,disableTransition:!0,children:e(lu,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:r(au,{ref:x,children:[A("mobile"),e(du,{children:_("mobile")}),e(mu,{children:e(pu,{onClick:S,type:"button",children:"Done"})})]})})})]})}:{value:{mode:"default",rootNode:w},children:r(su,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:w,children:[A("default"),_("default")]})})}))};yu.displayName="Filter";const vu=Object.assign(yu,{Item:Qc,Page:fu,Checkbox:eu});export{vu as Filter};
//# sourceMappingURL=index.js.map
