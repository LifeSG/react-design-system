import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,version as g,useCallback as m,useMemo as b,forwardRef as p,useContext as f,createContext as y}from"react";import v,{css as x,keyframes as w,isStyledComponent as $,ThemeContext as F}from"styled-components";import C,{findDOMNode as E,unstable_batchedUpdates as D}from"react-dom";import{SquareIcon as k,SquareFillIcon as S,SquareTickFillIcon as A,MinusSquareFillIcon as B,ChevronDownIcon as O,FilterIcon as _,CrossIcon as z}from"@lifesg/react-icons";import{ChevronDownIcon as M}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as j}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as T}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as I}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as P}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as L}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as R}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as W}from"@lifesg/react-icons/external";import{CircleIcon as N}from"@lifesg/react-icons/circle";import{CircleDotIcon as H}from"@lifesg/react-icons/circle-dot";import{CrossIcon as Y}from"@lifesg/react-icons/cross";import{SquareIcon as V}from"@lifesg/react-icons/square";import{SquareTickFillIcon as q}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as Q}from"@lifesg/react-icons/tick";import{useFloatingTree as U,FloatingTree as Z,useFloatingNodeId as X,FloatingNode as G,useFloating as J,useTransitionStatus as K,useDismiss as ee,useInteractions as re,FloatingFocusManager as te,autoUpdate as ne,offset as ie,flip as oe,shift as ae,limitShift as se,size as le,useClick as de,useHover as ce,useFocus as ue,FloatingPortal as he}from"@floating-ui/react";import{ChevronLeftIcon as ge}from"@lifesg/react-icons/chevron-left";function me(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var be="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function pe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fe,ye={exports:{}};fe=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
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
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,f=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var g=e.type;switch(g){case d:case c:case i:case a:case o:case h:return g;default:var p=g&&g.$$typeof;switch(p){case l:case u:case b:case m:case s:return p;default:return r}}case n:return r}}}var w=d,$=c,F=l,C=s,E=t,D=u,k=i,S=b,A=m,B=n,O=a,_=o,z=h,M=!1;function j(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=$,r.ContextConsumer=F,r.ContextProvider=C,r.Element=E,r.ForwardRef=D,r.Fragment=k,r.Lazy=S,r.Memo=A,r.Portal=B,r.Profiler=O,r.StrictMode=_,r.Suspense=z,r.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===d},r.isConcurrentMode=j,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===b},r.isMemo=function(e){return x(e)===m},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===a},r.isStrictMode=function(e){return x(e)===o},r.isSuspense=function(e){return x(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===f||e.$$typeof===y||e.$$typeof===v||e.$$typeof===p)},r.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var ve=ye.exports=fe(i),xe=Array.isArray,we="object"==typeof be&&be&&be.Object===Object&&be,$e="object"==typeof self&&self&&self.Object===Object&&self,Fe=we||$e||Function("return this")(),Ce=Fe.Symbol,Ee=Ce,De=Object.prototype,ke=De.hasOwnProperty,Se=De.toString,Ae=Ee?Ee.toStringTag:void 0;var Be=function(e){var r=ke.call(e,Ae),t=e[Ae];try{e[Ae]=void 0;var n=!0}catch(e){}var i=Se.call(e);return n&&(r?e[Ae]=t:delete e[Ae]),i},Oe=Object.prototype.toString;var _e=Be,ze=function(e){return Oe.call(e)},Me=Ce?Ce.toStringTag:void 0;var je=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Me&&Me in Object(e)?_e(e):ze(e)};var Te=je,Ie=function(e){return null!=e&&"object"==typeof e};var Pe=function(e){return"symbol"==typeof e||Ie(e)&&"[object Symbol]"==Te(e)},Le=xe,Re=Pe,We=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ne=/^\w*$/;var He=function(e,r){if(Le(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Re(e))||(Ne.test(e)||!We.test(e)||null!=r&&e in Object(r))};var Ye=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Ve=je,qe=Ye;var Qe,Ue=function(e){if(!qe(e))return!1;var r=Ve(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Ze=Fe["__core-js_shared__"],Xe=(Qe=/[^.]+$/.exec(Ze&&Ze.keys&&Ze.keys.IE_PROTO||""))?"Symbol(src)_1."+Qe:"";var Ge=function(e){return!!Xe&&Xe in e},Je=Function.prototype.toString;var Ke=Ue,er=Ge,rr=Ye,tr=function(e){if(null!=e){try{return Je.call(e)}catch(e){}try{return e+""}catch(e){}}return""},nr=/^\[object .+?Constructor\]$/,ir=Function.prototype,or=Object.prototype,ar=ir.toString,sr=or.hasOwnProperty,lr=RegExp("^"+ar.call(sr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var dr=function(e,r){return null==e?void 0:e[r]},cr=function(e){return!(!rr(e)||er(e))&&(Ke(e)?lr:nr).test(tr(e))},ur=dr;var hr=function(e,r){var t=ur(e,r);return cr(t)?t:void 0},gr=hr(Object,"create"),mr=gr;var br=function(){this.__data__=mr?mr(null):{},this.size=0};var pr=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},fr=gr,yr=Object.prototype.hasOwnProperty;var vr=function(e){var r=this.__data__;if(fr){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return yr.call(r,e)?r[e]:void 0},xr=gr,wr=Object.prototype.hasOwnProperty;var $r=function(e){var r=this.__data__;return xr?void 0!==r[e]:wr.call(r,e)},Fr=gr;var Cr=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Fr&&void 0===r?"__lodash_hash_undefined__":r,this},Er=br,Dr=pr,kr=vr,Sr=$r,Ar=Cr;function Br(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Br.prototype.clear=Er,Br.prototype.delete=Dr,Br.prototype.get=kr,Br.prototype.has=Sr,Br.prototype.set=Ar;var Or=Br;var _r=function(){this.__data__=[],this.size=0};var zr=function(e,r){return e===r||e!=e&&r!=r};var Mr=function(e,r){for(var t=e.length;t--;)if(zr(e[t][0],r))return t;return-1},jr=Mr,Tr=Array.prototype.splice;var Ir=function(e){var r=this.__data__,t=jr(r,e);return!(t<0)&&(t==r.length-1?r.pop():Tr.call(r,t,1),--this.size,!0)},Pr=Mr;var Lr=function(e){var r=this.__data__,t=Pr(r,e);return t<0?void 0:r[t][1]},Rr=Mr;var Wr=function(e){return Rr(this.__data__,e)>-1},Nr=Mr;var Hr=function(e,r){var t=this.__data__,n=Nr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},Yr=_r,Vr=Ir,qr=Lr,Qr=Wr,Ur=Hr;function Zr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Zr.prototype.clear=Yr,Zr.prototype.delete=Vr,Zr.prototype.get=qr,Zr.prototype.has=Qr,Zr.prototype.set=Ur;var Xr=Zr,Gr=hr(Fe,"Map"),Jr=Or,Kr=Xr,et=Gr;var rt=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var tt=function(e,r){var t=e.__data__;return rt(r)?t["string"==typeof r?"string":"hash"]:t.map},nt=tt;var it=function(e){var r=nt(this,e).delete(e);return this.size-=r?1:0,r},ot=tt;var at=function(e){return ot(this,e).get(e)},st=tt;var lt=function(e){return st(this,e).has(e)},dt=tt;var ct=function(e,r){var t=dt(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},ut=function(){this.size=0,this.__data__={hash:new Jr,map:new(et||Kr),string:new Jr}},ht=it,gt=at,mt=lt,bt=ct;function pt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}pt.prototype.clear=ut,pt.prototype.delete=ht,pt.prototype.get=gt,pt.prototype.has=mt,pt.prototype.set=bt;var ft=pt;function yt(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(yt.Cache||ft),t}yt.Cache=ft;var vt=yt;var xt=function(e){var r=vt(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},wt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$t=/\\(\\)?/g,Ft=xt((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(wt,(function(e,t,n,i){r.push(n?i.replace($t,"$1"):t||e)})),r}));var Ct=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Et=xe,Dt=Pe,kt=Ce?Ce.prototype:void 0,St=kt?kt.toString:void 0;var At=function e(r){if("string"==typeof r)return r;if(Et(r))return Ct(r,e)+"";if(Dt(r))return St?St.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Bt=At;var Ot=xe,_t=He,zt=Ft,Mt=function(e){return null==e?"":Bt(e)};var jt=Pe;var Tt=function(e,r){return Ot(e)?e:_t(e,r)?[e]:zt(Mt(e))},It=function(e){if("string"==typeof e||jt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Pt=function(e,r){for(var t=0,n=(r=Tt(r,e)).length;null!=e&&t<n;)e=e[It(r[t++])];return t&&t==n?e:void 0};var Lt=pe((function(e,r,t){var n=null==e?void 0:Pt(e,r);return void 0===n?t:n}));const Rt=(e,r,t)=>Lt(t,r)||Lt(e,r),Wt=(e,r)=>{const t=r||e.defaultValue;return Lt(e.collections,t)},Nt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Ht=e=>r=>{var t;const n=r.theme,i=Wt(Nt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Rt(i,e,n.overrides.border)}px`:`${i[e]}px`},Yt={"width-005":Ht("width-005"),"width-010":Ht("width-010"),"width-020":Ht("width-020"),"width-040":Ht("width-040"),solid:(Vt="solid",e=>{var r;const t=e.theme,n=Wt(Nt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Rt(n,Vt,t.overrides.border):n[Vt];return"function"==typeof i?i(e):i})};var Vt;const qt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ut={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Gt={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Kt={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},en={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rn={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},tn={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},nn={collections:{lifesg:Ut,bookingsg:qt,rbs:Jt,mylegacy:Zt,ccube:Qt,oneservice:Xt,pa:Gt,a11yplayground:Kt,supportgowhere:en,imda:rn,spf:tn},defaultValue:"lifesg"},on={collections:{lifesg:Ut,bookingsg:qt,rbs:Jt,mylegacy:Zt,ccube:Qt,oneservice:Xt,pa:Gt,a11yplayground:Kt,supportgowhere:en,imda:rn,spf:tn},defaultValue:"lifesg"},an=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=Wt(i?on:nn,null==n?void 0:n.colourScheme),a=i?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a];return s?Rt(o,e,s):o[e]},sn={"brand-10":an("brand-10"),"brand-20":an("brand-20"),"brand-30":an("brand-30"),"brand-40":an("brand-40"),"brand-50":an("brand-50"),"brand-60":an("brand-60"),"brand-70":an("brand-70"),"brand-80":an("brand-80"),"brand-90":an("brand-90"),"brand-95":an("brand-95"),"brand-100":an("brand-100"),"primary-10":an("primary-10"),"primary-20":an("primary-20"),"primary-30":an("primary-30"),"primary-40":an("primary-40"),"primary-50":an("primary-50"),"primary-60":an("primary-60"),"primary-70":an("primary-70"),"primary-80":an("primary-80"),"primary-90":an("primary-90"),"primary-95":an("primary-95"),"primary-100":an("primary-100"),"secondary-10":an("secondary-10"),"secondary-20":an("secondary-20"),"secondary-30":an("secondary-30"),"secondary-40":an("secondary-40"),"secondary-50":an("secondary-50"),"secondary-60":an("secondary-60"),"secondary-70":an("secondary-70"),"secondary-80":an("secondary-80"),"secondary-90":an("secondary-90"),"secondary-95":an("secondary-95"),"secondary-100":an("secondary-100"),"neutral-10":an("neutral-10"),"neutral-20":an("neutral-20"),"neutral-30":an("neutral-30"),"neutral-40":an("neutral-40"),"neutral-50":an("neutral-50"),"neutral-60":an("neutral-60"),"neutral-70":an("neutral-70"),"neutral-80":an("neutral-80"),"neutral-90":an("neutral-90"),"neutral-95":an("neutral-95"),"neutral-100":an("neutral-100"),"success-10":an("success-10"),"success-20":an("success-20"),"success-30":an("success-30"),"success-40":an("success-40"),"success-50":an("success-50"),"success-60":an("success-60"),"success-70":an("success-70"),"success-80":an("success-80"),"success-90":an("success-90"),"success-95":an("success-95"),"success-100":an("success-100"),"warning-10":an("warning-10"),"warning-20":an("warning-20"),"warning-30":an("warning-30"),"warning-40":an("warning-40"),"warning-50":an("warning-50"),"warning-60":an("warning-60"),"warning-70":an("warning-70"),"warning-80":an("warning-80"),"warning-90":an("warning-90"),"warning-95":an("warning-95"),"warning-100":an("warning-100"),"error-10":an("error-10"),"error-20":an("error-20"),"error-30":an("error-30"),"error-40":an("error-40"),"error-50":an("error-50"),"error-60":an("error-60"),"error-70":an("error-70"),"error-80":an("error-80"),"error-90":an("error-90"),"error-95":an("error-95"),"error-100":an("error-100"),"info-10":an("info-10"),"info-20":an("info-20"),"info-30":an("info-30"),"info-40":an("info-40"),"info-50":an("info-50"),"info-60":an("info-60"),"info-70":an("info-70"),"info-80":an("info-80"),"info-90":an("info-90"),"info-95":an("info-95"),"info-100":an("info-100"),white:an("white"),black:an("black"),"primary-inverse":an("primary-inverse")},ln={text:an("neutral-20"),"text-subtle":an("neutral-30"),"text-subtler":an("neutral-50"),"text-subtlest":an("neutral-60"),"text-primary":an("primary-50"),"text-primary-strongest":an("primary-20"),"text-hover":an("primary-40"),"text-selected":an("primary-50"),"text-selected-hover":an("primary-40"),"text-disabled":an("neutral-50"),"text-disabled-subtle":an("neutral-60"),"text-disabled-subtlest":an("neutral-80"),"text-selected-disabled":an("neutral-20"),"text-success":an("success-40"),"text-warning":an("warning-40"),"text-error":an("error-40"),"text-info":an("info-40"),"text-inverse":an("white"),icon:an("neutral-50"),"icon-subtle":an("neutral-60"),"icon-strongest":an("neutral-20"),"icon-primary":an("primary-50"),"icon-primary-subtle":an("primary-60"),"icon-primary-subtlest":an("primary-70"),"icon-hover":an("primary-40"),"icon-selected":an("primary-50"),"icon-selected-hover":an("primary-40"),"icon-disabled":an("neutral-50"),"icon-disabled-subtle":an("neutral-60"),"icon-selected-disabled":an("neutral-60"),"icon-success":an("success-50"),"icon-warning":an("warning-60"),"icon-error":an("error-50"),"icon-error-strong":an("error-40"),"icon-info":an("info-50"),"icon-inverse":an("white"),"icon-primary-inverse":an("primary-inverse"),border:an("neutral-90"),"border-strong":an("neutral-70"),"border-stronger":an("neutral-50"),"border-primary":an("primary-50"),"border-primary-subtle":an("primary-60"),"border-hover":an("primary-90"),"border-hover-strong":an("primary-60"),"border-selected":an("primary-50"),"border-selected-subtle":an("primary-70"),"border-selected-subtlest":an("primary-90"),"border-selected-hover":an("primary-40"),"border-focus":an("primary-60"),"border-focus-strong":an("primary-50"),"border-disabled":an("neutral-90"),"border-selected-disabled":an("neutral-70"),"border-success":an("success-60"),"border-warning":an("warning-60"),"border-error":an("error-60"),"border-error-focus":an("error-60"),"border-error-focus-strong":an("error-40"),"border-error-strong":an("error-40"),"border-info":an("info-60"),bg:an("white"),"bg-strong":an("neutral-100"),"bg-stronger":an("neutral-95"),"bg-strongest":an("neutral-90"),"bg-hover":an("primary-95"),"bg-hover-strong":an("primary-90"),"bg-hover-subtle":an("primary-100"),"bg-hover-neutral":an("neutral-100"),"bg-hover-neutral-strong":an("neutral-90"),"bg-selected":an("primary-95"),"bg-selected-hover":an("primary-90"),"bg-selected-strong":an("primary-90"),"bg-selected-stronger":an("primary-70"),"bg-selected-strongest":an("primary-50"),"bg-selected-strongest-hover":an("primary-40"),"bg-disabled":an("neutral-95"),"bg-selected-disabled":an("neutral-95"),"bg-selected-stronger-disabled":an("neutral-70"),"bg-success":an("success-100"),"bg-success-hover":an("success-95"),"bg-success-strong":an("success-50"),"bg-success-strong-hover":an("success-40"),"bg-warning":an("warning-100"),"bg-warning-hover":an("warning-95"),"bg-warning-strong":an("warning-50"),"bg-warning-strong-hover":an("warning-40"),"bg-info":an("info-100"),"bg-info-hover":an("info-95"),"bg-info-strong":an("info-50"),"bg-info-strong-hover":an("info-40"),"bg-error":an("error-100"),"bg-error-hover":an("error-95"),"bg-error-strong":an("error-50"),"bg-error-strong-hover":an("error-40"),"bg-inverse":an("neutral-20"),"bg-inverse-subtle":an("neutral-30"),"bg-inverse-subtler":an("neutral-50"),"bg-inverse-subtlest":an("neutral-60"),"bg-inverse-hover":an("neutral-40"),"bg-primary":an("primary-50"),"bg-primary-subtle":an("primary-60"),"bg-primary-subtler":an("primary-95"),"bg-primary-subtlest":an("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":an("primary-40"),"bg-primary-subtlest-hover":an("primary-90"),"bg-primary-subtlest-selected":an("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:an("primary-50"),"hyperlink-hover":an("primary-40"),"hyperlink-visited":an("primary-40"),"hyperlink-inverse":an("primary-inverse"),"focus-ring":an("primary-50"),"focus-ring-inverse":an("white")},dn={text:an("neutral-100"),"text-subtle":an("neutral-80"),"text-subtler":an("neutral-60"),"text-subtlest":an("neutral-50"),"text-primary":an("primary-60"),"text-primary-strongest":an("primary-90"),"text-hover":an("primary-70"),"text-selected":an("primary-60"),"text-selected-hover":an("primary-70"),"text-disabled":an("neutral-60"),"text-disabled-subtle":an("neutral-50"),"text-disabled-subtlest":an("neutral-30"),"text-selected-disabled":an("neutral-90"),"text-success":an("success-70"),"text-warning":an("warning-70"),"text-error":an("error-70"),"text-info":an("info-70"),"text-inverse":an("black"),icon:an("neutral-60"),"icon-subtle":an("neutral-50"),"icon-strongest":an("neutral-90"),"icon-primary":an("primary-60"),"icon-primary-subtle":an("primary-50"),"icon-primary-subtlest":an("primary-40"),"icon-hover":an("primary-70"),"icon-selected":an("primary-60"),"icon-selected-hover":an("primary-70"),"icon-disabled":an("neutral-60"),"icon-disabled-subtle":an("neutral-50"),"icon-selected-disabled":an("neutral-50"),"icon-success":an("success-60"),"icon-warning":an("warning-50"),"icon-error":an("error-60"),"icon-error-strong":an("error-70"),"icon-info":an("info-60"),"icon-inverse":an("black"),"icon-primary-inverse":an("primary-inverse"),border:an("neutral-20"),"border-strong":an("neutral-40"),"border-stronger":an("neutral-60"),"border-primary":an("primary-60"),"border-primary-subtle":an("primary-50"),"border-hover":an("primary-20"),"border-hover-strong":an("primary-50"),"border-selected":an("primary-60"),"border-selected-subtle":an("primary-40"),"border-selected-subtlest":an("primary-20"),"border-selected-hover":an("primary-70"),"border-focus":an("primary-50"),"border-focus-strong":an("primary-60"),"border-disabled":an("neutral-20"),"border-selected-disabled":an("neutral-40"),"border-success":an("success-50"),"border-warning":an("warning-50"),"border-error":an("error-50"),"border-error-focus":an("error-50"),"border-error-focus-strong":an("error-70"),"border-error-strong":an("error-70"),"border-info":an("info-50"),bg:an("black"),"bg-strong":an("neutral-10"),"bg-stronger":an("neutral-20"),"bg-strongest":an("neutral-20"),"bg-hover":an("primary-20"),"bg-hover-strong":an("primary-20"),"bg-hover-subtle":an("primary-10"),"bg-hover-neutral":an("neutral-10"),"bg-hover-neutral-strong":an("neutral-20"),"bg-selected":an("primary-20"),"bg-selected-hover":an("primary-20"),"bg-selected-strong":an("primary-20"),"bg-selected-stronger":an("primary-40"),"bg-selected-strongest":an("primary-60"),"bg-selected-strongest-hover":an("primary-70"),"bg-disabled":an("neutral-20"),"bg-selected-disabled":an("neutral-20"),"bg-selected-stronger-disabled":an("neutral-40"),"bg-success":an("success-10"),"bg-success-hover":an("success-20"),"bg-success-strong":an("success-60"),"bg-success-strong-hover":an("success-70"),"bg-warning":an("warning-10"),"bg-warning-hover":an("warning-20"),"bg-warning-strong":an("warning-60"),"bg-warning-strong-hover":an("warning-70"),"bg-info":an("info-10"),"bg-info-hover":an("info-20"),"bg-info-strong":an("info-60"),"bg-info-strong-hover":an("info-70"),"bg-error":an("error-10"),"bg-error-hover":an("error-20"),"bg-error-strong":an("error-60"),"bg-error-strong-hover":an("error-70"),"bg-inverse":an("neutral-90"),"bg-inverse-subtle":an("neutral-80"),"bg-inverse-subtler":an("neutral-60"),"bg-inverse-subtlest":an("neutral-50"),"bg-inverse-hover":an("neutral-70"),"bg-primary":an("primary-60"),"bg-primary-subtle":an("primary-50"),"bg-primary-subtler":an("primary-20"),"bg-primary-subtlest":an("primary-10"),"bg-available":"#185339","bg-primary-hover":an("primary-70"),"bg-primary-subtlest-hover":an("primary-20"),"bg-primary-subtlest-selected":an("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:an("primary-60"),"hyperlink-hover":an("primary-70"),"hyperlink-visited":an("primary-70"),"hyperlink-inverse":an("primary-inverse"),"focus-ring":an("primary-60"),"focus-ring-inverse":an("black")},cn={text:an("neutral-30"),"text-subtle":an("neutral-40"),"text-subtler":an("neutral-50"),"text-subtlest":an("neutral-70"),"text-primary":an("neutral-10"),"text-primary-strongest":an("neutral-10"),"text-hover":an("neutral-70"),"text-selected":an("neutral-20"),"text-selected-hover":an("neutral-10"),"text-disabled":an("neutral-50"),"text-disabled-subtle":an("neutral-70"),"text-disabled-subtlest":an("neutral-80"),"text-selected-disabled":an("neutral-40"),"text-success":an("success-40"),"text-warning":an("warning-40"),"text-error":an("brand-30"),"text-info":an("neutral-40"),"text-inverse":an("neutral-100"),icon:an("neutral-40"),"icon-subtle":an("neutral-50"),"icon-strongest":an("neutral-10"),"icon-primary":an("neutral-10"),"icon-primary-subtle":an("neutral-30"),"icon-primary-subtlest":an("neutral-60"),"icon-hover":an("neutral-70"),"icon-selected":an("brand-20"),"icon-selected-hover":an("brand-10"),"icon-disabled":an("neutral-50"),"icon-disabled-subtle":an("neutral-70"),"icon-selected-disabled":an("neutral-40"),"icon-success":an("success-40"),"icon-warning":an("warning-60"),"icon-error":an("brand-30"),"icon-error-strong":an("brand-10"),"icon-info":an("neutral-40"),"icon-inverse":an("neutral-100"),"icon-primary-inverse":"#F9B371",border:an("neutral-90"),"border-strong":an("neutral-30"),"border-stronger":an("neutral-20"),"border-primary":an("neutral-40"),"border-primary-subtle":an("neutral-60"),"border-hover":an("neutral-80"),"border-hover-strong":an("neutral-10"),"border-selected":an("brand-20"),"border-selected-subtle":an("neutral-40"),"border-selected-subtlest":an("neutral-70"),"border-selected-hover":an("neutral-10"),"border-focus":an("neutral-20"),"border-focus-strong":an("neutral-10"),"border-disabled":an("neutral-90"),"border-selected-disabled":an("neutral-80"),"border-success":an("success-40"),"border-warning":an("warning-60"),"border-error":an("brand-30"),"border-error-focus":an("brand-20"),"border-error-focus-strong":an("brand-10"),"border-error-strong":an("brand-20"),"border-info":an("neutral-40"),bg:an("neutral-100"),"bg-strong":an("neutral-95"),"bg-stronger":an("neutral-90"),"bg-strongest":an("neutral-80"),"bg-hover":an("brand-90"),"bg-hover-strong":an("brand-80"),"bg-hover-subtle":an("neutral-90"),"bg-hover-neutral":an("neutral-90"),"bg-hover-neutral-strong":an("neutral-90"),"bg-selected":an("brand-100"),"bg-selected-hover":an("brand-30"),"bg-selected-strong":an("brand-50"),"bg-selected-stronger":an("brand-40"),"bg-selected-strongest":an("brand-20"),"bg-selected-strongest-hover":an("brand-10"),"bg-disabled":an("neutral-90"),"bg-selected-disabled":an("neutral-90"),"bg-selected-stronger-disabled":an("neutral-80"),"bg-success":an("success-100"),"bg-success-hover":an("success-95"),"bg-success-strong":an("success-50"),"bg-success-strong-hover":an("success-40"),"bg-warning":an("warning-100"),"bg-warning-hover":an("warning-95"),"bg-warning-strong":an("warning-50"),"bg-warning-strong-hover":an("warning-40"),"bg-info":an("neutral-95"),"bg-info-hover":an("info-95"),"bg-info-strong":an("info-50"),"bg-info-strong-hover":an("info-40"),"bg-error":an("brand-100"),"bg-error-hover":an("error-95"),"bg-error-strong":an("error-50"),"bg-error-strong-hover":an("error-40"),"bg-inverse":an("neutral-40"),"bg-inverse-subtle":an("neutral-60"),"bg-inverse-subtler":an("neutral-70"),"bg-inverse-subtlest":an("neutral-80"),"bg-inverse-hover":an("neutral-30"),"bg-primary":an("brand-20"),"bg-primary-subtle":an("brand-60"),"bg-primary-subtler":an("brand-80"),"bg-primary-subtlest":an("brand-100"),"bg-available":an("success-60"),"bg-primary-hover":an("brand-10"),"bg-primary-subtlest-hover":an("brand-80"),"bg-primary-subtlest-selected":an("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:an("neutral-10"),"hyperlink-hover":an("neutral-40"),"hyperlink-visited":an("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":an("primary-50"),"focus-ring-inverse":an("white")},un={text:an("neutral-20"),"text-subtle":an("neutral-30"),"text-subtler":an("neutral-50"),"text-subtlest":an("neutral-60"),"text-primary":an("primary-50"),"text-primary-strongest":an("primary-20"),"text-hover":an("primary-40"),"text-selected":an("primary-50"),"text-selected-hover":an("primary-40"),"text-disabled":an("neutral-50"),"text-disabled-subtle":an("neutral-60"),"text-disabled-subtlest":an("neutral-80"),"text-selected-disabled":an("neutral-20"),"text-success":an("success-40"),"text-warning":an("warning-40"),"text-error":an("error-40"),"text-info":an("info-40"),"text-inverse":an("white"),icon:an("neutral-50"),"icon-subtle":an("neutral-60"),"icon-strongest":an("neutral-20"),"icon-primary":an("primary-50"),"icon-primary-subtle":an("primary-60"),"icon-primary-subtlest":an("primary-70"),"icon-hover":an("primary-40"),"icon-selected":an("primary-50"),"icon-selected-hover":an("primary-40"),"icon-disabled":an("neutral-50"),"icon-disabled-subtle":an("neutral-60"),"icon-selected-disabled":an("neutral-60"),"icon-success":an("success-50"),"icon-warning":an("warning-60"),"icon-error":an("error-50"),"icon-error-strong":an("error-40"),"icon-info":an("info-50"),"icon-inverse":an("white"),"icon-primary-inverse":an("primary-inverse"),border:an("neutral-90"),"border-strong":an("neutral-70"),"border-stronger":an("neutral-50"),"border-primary":an("primary-50"),"border-primary-subtle":an("primary-60"),"border-hover":an("primary-90"),"border-hover-strong":an("primary-60"),"border-selected":an("primary-50"),"border-selected-subtle":an("primary-70"),"border-selected-subtlest":an("primary-90"),"border-selected-hover":an("primary-40"),"border-focus":an("primary-60"),"border-focus-strong":an("primary-50"),"border-disabled":an("neutral-90"),"border-selected-disabled":an("neutral-70"),"border-success":an("success-60"),"border-warning":an("warning-60"),"border-error":an("error-60"),"border-error-focus":an("error-60"),"border-error-focus-strong":an("error-40"),"border-error-strong":an("error-40"),"border-info":an("info-60"),bg:an("white"),"bg-strong":an("neutral-100"),"bg-stronger":an("neutral-95"),"bg-strongest":an("neutral-90"),"bg-hover":an("primary-95"),"bg-hover-strong":an("primary-90"),"bg-hover-subtle":an("primary-100"),"bg-hover-neutral":an("neutral-100"),"bg-hover-neutral-strong":an("neutral-90"),"bg-selected":an("primary-95"),"bg-selected-hover":an("primary-90"),"bg-selected-strong":an("primary-90"),"bg-selected-stronger":an("primary-70"),"bg-selected-strongest":an("primary-50"),"bg-selected-strongest-hover":an("primary-40"),"bg-disabled":an("neutral-95"),"bg-selected-disabled":an("neutral-95"),"bg-selected-stronger-disabled":an("neutral-70"),"bg-success":an("success-100"),"bg-success-hover":an("success-95"),"bg-success-strong":an("success-50"),"bg-success-strong-hover":an("success-40"),"bg-warning":an("warning-100"),"bg-warning-hover":an("warning-95"),"bg-warning-strong":an("warning-50"),"bg-warning-strong-hover":an("warning-40"),"bg-info":an("info-100"),"bg-info-hover":an("info-95"),"bg-info-strong":an("info-50"),"bg-info-strong-hover":an("info-40"),"bg-error":an("error-100"),"bg-error-hover":an("error-95"),"bg-error-strong":an("error-50"),"bg-error-strong-hover":an("error-40"),"bg-inverse":an("neutral-20"),"bg-inverse-subtle":an("neutral-30"),"bg-inverse-subtler":an("neutral-50"),"bg-inverse-subtlest":an("neutral-60"),"bg-inverse-hover":an("neutral-40"),"bg-primary":an("primary-50"),"bg-primary-subtle":an("primary-60"),"bg-primary-subtler":an("primary-95"),"bg-primary-subtlest":an("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":an("primary-40"),"bg-primary-subtlest-hover":an("primary-90"),"bg-primary-subtlest-selected":an("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:an("primary-50"),"hyperlink-hover":an("primary-40"),"hyperlink-visited":an("primary-40"),"hyperlink-inverse":an("primary-inverse"),"focus-ring":an("primary-50"),"focus-ring-inverse":an("white")},hn={text:an("neutral-100"),"text-subtle":an("neutral-80"),"text-subtler":an("neutral-60"),"text-subtlest":an("neutral-50"),"text-primary":an("primary-60"),"text-primary-strongest":an("primary-90"),"text-hover":an("primary-70"),"text-selected":an("primary-60"),"text-selected-hover":an("primary-70"),"text-disabled":an("neutral-60"),"text-disabled-subtle":an("neutral-50"),"text-disabled-subtlest":an("neutral-30"),"text-selected-disabled":an("neutral-90"),"text-success":an("success-70"),"text-warning":an("warning-70"),"text-error":an("error-70"),"text-info":an("info-70"),"text-inverse":an("black"),icon:an("neutral-60"),"icon-subtle":an("neutral-50"),"icon-strongest":an("neutral-90"),"icon-primary":an("primary-60"),"icon-primary-subtle":an("primary-50"),"icon-primary-subtlest":an("primary-40"),"icon-hover":an("primary-70"),"icon-selected":an("primary-60"),"icon-selected-hover":an("primary-70"),"icon-disabled":an("neutral-60"),"icon-disabled-subtle":an("neutral-50"),"icon-selected-disabled":an("neutral-50"),"icon-success":an("success-60"),"icon-warning":an("warning-50"),"icon-error":an("error-60"),"icon-error-strong":an("error-70"),"icon-info":an("info-60"),"icon-inverse":an("black"),"icon-primary-inverse":an("primary-inverse"),border:an("neutral-20"),"border-strong":an("neutral-40"),"border-stronger":an("neutral-60"),"border-primary":an("primary-60"),"border-primary-subtle":an("primary-50"),"border-hover":an("primary-20"),"border-hover-strong":an("primary-50"),"border-selected":an("primary-60"),"border-selected-subtle":an("primary-40"),"border-selected-subtlest":an("primary-20"),"border-selected-hover":an("primary-70"),"border-focus":an("primary-50"),"border-focus-strong":an("primary-60"),"border-disabled":an("neutral-20"),"border-selected-disabled":an("neutral-40"),"border-success":an("success-50"),"border-warning":an("warning-50"),"border-error":an("error-50"),"border-error-focus":an("error-50"),"border-error-focus-strong":an("error-70"),"border-error-strong":an("error-70"),"border-info":an("info-50"),bg:an("black"),"bg-strong":an("neutral-10"),"bg-stronger":an("neutral-20"),"bg-strongest":an("neutral-20"),"bg-hover":an("primary-20"),"bg-hover-strong":an("primary-20"),"bg-hover-subtle":an("primary-10"),"bg-hover-neutral":an("neutral-10"),"bg-hover-neutral-strong":an("neutral-20"),"bg-selected":an("primary-20"),"bg-selected-hover":an("primary-20"),"bg-selected-strong":an("primary-20"),"bg-selected-stronger":an("primary-40"),"bg-selected-strongest":an("primary-60"),"bg-selected-strongest-hover":an("primary-70"),"bg-disabled":an("neutral-20"),"bg-selected-disabled":an("neutral-20"),"bg-selected-stronger-disabled":an("neutral-40"),"bg-success":an("success-10"),"bg-success-hover":an("success-20"),"bg-success-strong":an("success-60"),"bg-success-strong-hover":an("success-70"),"bg-warning":an("warning-10"),"bg-warning-hover":an("warning-20"),"bg-warning-strong":an("warning-60"),"bg-warning-strong-hover":an("warning-70"),"bg-info":an("info-10"),"bg-info-hover":an("info-20"),"bg-info-strong":an("info-60"),"bg-info-strong-hover":an("info-70"),"bg-error":an("error-10"),"bg-error-hover":an("error-20"),"bg-error-strong":an("error-60"),"bg-error-strong-hover":an("error-70"),"bg-inverse":an("neutral-90"),"bg-inverse-subtle":an("neutral-80"),"bg-inverse-subtler":an("neutral-60"),"bg-inverse-subtlest":an("neutral-50"),"bg-inverse-hover":an("neutral-70"),"bg-primary":an("primary-60"),"bg-primary-subtle":an("primary-50"),"bg-primary-subtler":an("primary-20"),"bg-primary-subtlest":an("primary-10"),"bg-available":"#185339","bg-primary-hover":an("primary-70"),"bg-primary-subtlest-hover":an("primary-20"),"bg-primary-subtlest-selected":an("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:an("primary-60"),"hyperlink-hover":an("primary-70"),"hyperlink-visited":an("primary-70"),"hyperlink-inverse":an("primary-inverse"),"focus-ring":an("primary-60"),"focus-ring-inverse":an("black")},gn={collections:{lifesg:ln,bookingsg:ln,rbs:ln,mylegacy:ln,ccube:ln,oneservice:ln,pa:cn,a11yplayground:un,supportgowhere:ln,imda:ln,spf:ln},defaultValue:"lifesg"},mn={collections:{lifesg:dn,bookingsg:dn,rbs:dn,mylegacy:dn,ccube:dn,oneservice:dn,pa:dn,a11yplayground:hn,supportgowhere:dn,imda:dn,spf:dn},defaultValue:"lifesg"},bn=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=Wt(i?mn:gn,null==n?void 0:n.colourScheme),a=i?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a],l=s?Rt(o,e,s):o[e];return"function"==typeof l?l(r):l},pn={text:bn("text"),"text-subtle":bn("text-subtle"),"text-subtler":bn("text-subtler"),"text-subtlest":bn("text-subtlest"),"text-primary":bn("text-primary"),"text-primary-strongest":bn("text-primary-strongest"),"text-hover":bn("text-hover"),"text-selected":bn("text-selected"),"text-selected-hover":bn("text-selected-hover"),"text-disabled":bn("text-disabled"),"text-disabled-subtle":bn("text-disabled-subtle"),"text-disabled-subtlest":bn("text-disabled-subtlest"),"text-selected-disabled":bn("text-selected-disabled"),"text-success":bn("text-success"),"text-warning":bn("text-warning"),"text-error":bn("text-error"),"text-info":bn("text-info"),"text-inverse":bn("text-inverse"),icon:bn("icon"),"icon-subtle":bn("icon-subtle"),"icon-strongest":bn("icon-strongest"),"icon-primary":bn("icon-primary"),"icon-primary-subtle":bn("icon-primary-subtle"),"icon-primary-subtlest":bn("icon-primary-subtlest"),"icon-hover":bn("icon-hover"),"icon-selected":bn("icon-selected"),"icon-selected-hover":bn("icon-selected-hover"),"icon-disabled":bn("icon-disabled"),"icon-disabled-subtle":bn("icon-disabled-subtle"),"icon-selected-disabled":bn("icon-selected-disabled"),"icon-success":bn("icon-success"),"icon-warning":bn("icon-warning"),"icon-error":bn("icon-error"),"icon-error-strong":bn("icon-error-strong"),"icon-info":bn("icon-info"),"icon-inverse":bn("icon-inverse"),"icon-primary-inverse":bn("icon-primary-inverse"),border:bn("border"),"border-strong":bn("border-strong"),"border-stronger":bn("border-stronger"),"border-primary":bn("border-primary"),"border-primary-subtle":bn("border-primary-subtle"),"border-hover":bn("border-hover"),"border-hover-strong":bn("border-hover-strong"),"border-selected":bn("border-selected"),"border-selected-subtle":bn("border-selected-subtle"),"border-selected-subtlest":bn("border-selected-subtlest"),"border-selected-hover":bn("border-selected-hover"),"border-focus":bn("border-focus"),"border-focus-strong":bn("border-focus-strong"),"border-disabled":bn("border-disabled"),"border-selected-disabled":bn("border-selected-disabled"),"border-success":bn("border-success"),"border-warning":bn("border-warning"),"border-error":bn("border-error"),"border-error-focus":bn("border-error-focus"),"border-error-focus-strong":bn("border-error-focus-strong"),"border-error-strong":bn("border-error-strong"),"border-info":bn("border-info"),bg:bn("bg"),"bg-strong":bn("bg-strong"),"bg-stronger":bn("bg-stronger"),"bg-strongest":bn("bg-strongest"),"bg-hover":bn("bg-hover"),"bg-hover-strong":bn("bg-hover-strong"),"bg-hover-subtle":bn("bg-hover-subtle"),"bg-hover-neutral":bn("bg-hover-neutral"),"bg-hover-neutral-strong":bn("bg-hover-neutral-strong"),"bg-selected":bn("bg-selected"),"bg-selected-hover":bn("bg-selected-hover"),"bg-selected-strong":bn("bg-selected-strong"),"bg-selected-stronger":bn("bg-selected-stronger"),"bg-selected-strongest":bn("bg-selected-strongest"),"bg-selected-strongest-hover":bn("bg-selected-strongest-hover"),"bg-disabled":bn("bg-disabled"),"bg-selected-disabled":bn("bg-selected-disabled"),"bg-selected-stronger-disabled":bn("bg-selected-stronger-disabled"),"bg-success":bn("bg-success"),"bg-success-hover":bn("bg-success-hover"),"bg-success-strong":bn("bg-success-strong"),"bg-success-strong-hover":bn("bg-success-strong-hover"),"bg-warning":bn("bg-warning"),"bg-warning-hover":bn("bg-warning-hover"),"bg-warning-strong":bn("bg-warning-strong"),"bg-warning-strong-hover":bn("bg-warning-strong-hover"),"bg-info":bn("bg-info"),"bg-info-hover":bn("bg-info-hover"),"bg-info-strong":bn("bg-info-strong"),"bg-info-strong-hover":bn("bg-info-strong-hover"),"bg-error":bn("bg-error"),"bg-error-hover":bn("bg-error-hover"),"bg-error-strong":bn("bg-error-strong"),"bg-error-strong-hover":bn("bg-error-strong-hover"),"bg-inverse":bn("bg-inverse"),"bg-inverse-subtle":bn("bg-inverse-subtle"),"bg-inverse-subtler":bn("bg-inverse-subtler"),"bg-inverse-subtlest":bn("bg-inverse-subtlest"),"bg-inverse-hover":bn("bg-inverse-hover"),"bg-primary":bn("bg-primary"),"bg-primary-subtle":bn("bg-primary-subtle"),"bg-primary-subtler":bn("bg-primary-subtler"),"bg-primary-subtlest":bn("bg-primary-subtlest"),"bg-available":bn("bg-available"),"bg-primary-hover":bn("bg-primary-hover"),"bg-primary-subtlest-hover":bn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":bn("bg-primary-subtlest-selected"),"overlay-strong":bn("overlay-strong"),"overlay-subtle":bn("overlay-subtle"),hyperlink:bn("hyperlink"),"hyperlink-hover":bn("hyperlink-hover"),"hyperlink-visited":bn("hyperlink-visited"),"hyperlink-inverse":bn("hyperlink-inverse"),"focus-ring":bn("focus-ring"),"focus-ring-inverse":bn("focus-ring-inverse")},fn={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o+"px")&&void 0!==t?t:Yt["width-010"](r),d=null!==(n="function"==typeof a?a(r):a+"px")&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:pn.border(r),u=Yt.solid;return x`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:Yt["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:pn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return x`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},yn=e=>1===e.length&&"theme"in e[0],vn=e=>(...r)=>t=>{const n=yn(r)?[]:r,i=yn(r)?r[0]:t,o=i.theme;return(0,Wt(fn,null==o?void 0:o.borderScheme)[e])(...n)(i)},xn={solid:vn("solid"),"dashed-default":vn("dashed-default")},wn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},$n=e=>r=>{var t;const n=r.theme,i=Wt(wn,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Rt(i,e,n.overrides.breakpoint):i[e],o},Fn={"xxs-min":$n("xxs-min"),"xxs-max":$n("xxs-max"),"xs-min":$n("xs-min"),"xs-max":$n("xs-max"),"sm-min":$n("sm-min"),"sm-max":$n("sm-max"),"md-min":$n("md-min"),"md-max":$n("md-max"),"lg-min":$n("lg-min"),"lg-max":$n("lg-max"),"xl-min":$n("xl-min"),"xl-max":$n("xl-max"),"xxl-min":$n("xxl-min"),"xxs-column":$n("xxs-column"),"xs-column":$n("xs-column"),"sm-column":$n("sm-column"),"md-column":$n("md-column"),"lg-column":$n("lg-column"),"xl-column":$n("xl-column"),"xxl-column":$n("xxl-column"),"xxs-gutter":$n("xxs-gutter"),"xs-gutter":$n("xs-gutter"),"sm-gutter":$n("sm-gutter"),"md-gutter":$n("md-gutter"),"lg-gutter":$n("lg-gutter"),"xl-gutter":$n("xl-gutter"),"xxl-gutter":$n("xxl-gutter"),"xxs-margin":$n("xxs-margin"),"xs-margin":$n("xs-margin"),"sm-margin":$n("sm-margin"),"md-margin":$n("md-margin"),"lg-margin":$n("lg-margin"),"xl-margin":$n("xl-margin"),"xxl-margin":$n("xxl-margin")},Cn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Fn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),En={MaxWidth:Cn("max-width"),MinWidth:Cn("min-width")},Dn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},kn=e=>r=>{var t;const n=r.theme,i=Wt(Dn,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Rt(i,e,n.overrides.radius)}px`:`${i[e]}px`},Sn={none:kn("none"),xs:kn("xs"),sm:kn("sm"),md:kn("md"),lg:kn("lg"),full:kn("full")},An={Button:{"button-radius":Sn.md,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]},Animation:{"loading-dots-spinner-colour":pn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":pn.bg,"navbar-colour-icon":pn.icon,"navbar-link-colour-text":pn.text,"navbar-link-colour-text-hover":pn["text-hover"],"navbar-link-colour-text-selected-hover":pn["text-selected-hover"]},Footer:{"footer-colour-bg":pn["bg-strong"],"footer-colour-text":pn.text,"footer-link-colour-text":pn.text,"footer-link-colour-text-hover":pn["text-hover"],"footer-disclaimer-link-colour-text":pn.text,"footer-disclaimer-link-colour-text-hover":pn["text-subtler"]}},Bn={Button:{"button-radius":Sn.sm,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]},Animation:{"loading-dots-spinner-colour":pn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":pn.bg,"navbar-colour-icon":pn.icon,"navbar-link-colour-text":pn.text,"navbar-link-colour-text-hover":pn["text-hover"],"navbar-link-colour-text-selected-hover":pn["text-selected-hover"]},Footer:{"footer-colour-bg":pn["bg-strong"],"footer-colour-text":pn.text,"footer-link-colour-text":pn.text,"footer-link-colour-text-hover":pn["text-hover"],"footer-disclaimer-link-colour-text":pn.text,"footer-disclaimer-link-colour-text-hover":pn["text-subtler"]}},On={Button:{"button-radius":Sn.sm,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]},Animation:{"loading-dots-spinner-colour":sn["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":pn.bg,"navbar-colour-icon":pn.icon,"navbar-link-colour-text":pn.text,"navbar-link-colour-text-hover":pn["text-hover"],"navbar-link-colour-text-selected-hover":pn["text-selected-hover"]},Footer:{"footer-colour-bg":pn["bg-strong"],"footer-colour-text":pn.text,"footer-link-colour-text":pn.text,"footer-link-colour-text-hover":pn["text-hover"],"footer-disclaimer-link-colour-text":pn.text,"footer-disclaimer-link-colour-text-hover":pn["text-subtler"]}},_n={collections:{default:Bn,pa:{Button:{"button-radius":Sn.full,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]},Animation:{"loading-dots-spinner-colour":pn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":pn.bg,"navbar-colour-icon":pn.icon,"navbar-link-colour-text":pn.text,"navbar-link-colour-text-hover":pn["text-hover"],"navbar-link-colour-text-selected-hover":pn["text-selected-hover"]},Footer:{"footer-colour-bg":pn["bg-strong"],"footer-colour-text":pn.text,"footer-link-colour-text":pn.text,"footer-link-colour-text-hover":pn["text-hover"],"footer-disclaimer-link-colour-text":pn.text,"footer-disclaimer-link-colour-text-hover":pn["text-subtler"]}},a11yplayground:An,lifesg:On,spf:{Button:{"button-radius":Sn.md,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]},Animation:{"loading-dots-spinner-colour":pn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":pn.bg,"navbar-colour-icon":pn.icon,"navbar-link-colour-text":pn["text-primary-strongest"],"navbar-link-colour-text-hover":pn["text-subtler"],"navbar-link-colour-text-selected-hover":pn["text-subtler"]},Footer:{"footer-colour-bg":pn["bg-inverse"],"footer-colour-text":pn["text-inverse"],"footer-link-colour-text":pn["text-inverse"],"footer-link-colour-text-hover":pn["text-inverse"],"footer-disclaimer-link-colour-text":pn["text-inverse"],"footer-disclaimer-link-colour-text-hover":pn["text-inverse"]}}},defaultValue:"default"},zn=(e,r)=>t=>{var n,i;const o=t.theme,a=Wt(_n,null==o?void 0:o.componentScheme);return Mn((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||a[e][r],t)},Mn=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},jn=zn("Button","button-radius"),Tn=zn("Button","button-default-colour-bg"),In=zn("Button","button-default-colour-bg-hover"),Pn=zn("Button","button-default-colour-text"),Ln=zn("Button","button-secondary-colour-border"),Rn=zn("Button","button-secondary-colour-text"),Wn=zn("Button","button-light-colour-text"),Nn=zn("Button","button-link-colour-text"),Hn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},Yn=e=>r=>{var t;const n=r.theme,i=Wt(Hn,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Rt(i,e,n.overrides.fontSpec):i[e]},Vn={"heading-size-xxl":Yn("heading-size-xxl"),"heading-size-xl":Yn("heading-size-xl"),"heading-size-lg":Yn("heading-size-lg"),"heading-size-md":Yn("heading-size-md"),"heading-size-sm":Yn("heading-size-sm"),"heading-size-xs":Yn("heading-size-xs"),"heading-lh-xxl":Yn("heading-lh-xxl"),"heading-lh-xl":Yn("heading-lh-xl"),"heading-lh-lg":Yn("heading-lh-lg"),"heading-lh-md":Yn("heading-lh-md"),"heading-lh-sm":Yn("heading-lh-sm"),"heading-lh-xs":Yn("heading-lh-xs"),"heading-ls-xxl":Yn("heading-ls-xxl"),"heading-ls-xl":Yn("heading-ls-xl"),"heading-ls-lg":Yn("heading-ls-lg"),"heading-ls-md":Yn("heading-ls-md"),"heading-ls-sm":Yn("heading-ls-sm"),"heading-ls-xs":Yn("heading-ls-xs"),"weight-light":Yn("weight-light"),"weight-regular":Yn("weight-regular"),"weight-semibold":Yn("weight-semibold"),"weight-bold":Yn("weight-bold"),"font-family":Yn("font-family"),"body-size-baseline":Yn("body-size-baseline"),"body-size-md":Yn("body-size-md"),"body-size-sm":Yn("body-size-sm"),"body-size-xs":Yn("body-size-xs"),"body-lh-baseline":Yn("body-lh-baseline"),"body-lh-md":Yn("body-lh-md"),"body-lh-sm":Yn("body-lh-sm"),"body-lh-xs":Yn("body-lh-xs"),"body-ls-baseline":Yn("body-ls-baseline"),"body-ls-md":Yn("body-ls-md"),"body-ls-sm":Yn("body-ls-sm"),"body-ls-xs":Yn("body-ls-xs"),"form-label-size":Yn("form-label-size"),"form-description-size":Yn("form-description-size"),"form-label-lh":Yn("form-label-lh"),"form-description-lh":Yn("form-description-lh"),"form-label-ls":Yn("form-label-ls"),"form-description-ls":Yn("form-description-ls")},qn=(e,r,t,n,i)=>{const{disableLigatures:o}=i||{};return x`
        font-family: ${Yn("font-family")};
        font-size: ${Yn(e)};
        font-weight: ${Yn(r)};
        line-height: ${Yn(t)};
        letter-spacing: ${Yn(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Qn=(e={})=>({"heading-xxl-light":qn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":qn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":qn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":qn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":qn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":qn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":qn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":qn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":qn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":qn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":qn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":qn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":qn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":qn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":qn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":qn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":qn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":qn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":qn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":qn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":qn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":qn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":qn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":qn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":qn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":qn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":qn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":qn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":qn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":qn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":qn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":qn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":qn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":qn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":qn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":qn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":qn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":qn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":qn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":qn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":qn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":qn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Un=Qn({disableLigatures:!0}),Zn=Qn(),Xn=Qn({disableLigatures:!0}),Gn=Qn({disableLigatures:!0}),Jn=Qn({disableLigatures:!0}),Kn={collections:{default:Zn,bookingsg:Un,mylegacy:Zn,pa:Xn,a11yplayground:Gn,supportgowhere:Jn,sgwdigitallobby:Jn,imda:Qn({disableLigatures:!0}),spf:Qn({disableLigatures:!0}),oneservice:Qn()},defaultValue:"default"},ei=e=>r=>{var t;const n=r.theme,i=Wt(Kn,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Rt(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},ri={"heading-xxl-light":ei("heading-xxl-light"),"heading-xxl-regular":ei("heading-xxl-regular"),"heading-xxl-semibold":ei("heading-xxl-semibold"),"heading-xxl-bold":ei("heading-xxl-bold"),"heading-xl-light":ei("heading-xl-light"),"heading-xl-regular":ei("heading-xl-regular"),"heading-xl-semibold":ei("heading-xl-semibold"),"heading-xl-bold":ei("heading-xl-bold"),"heading-lg-light":ei("heading-lg-light"),"heading-lg-regular":ei("heading-lg-regular"),"heading-lg-semibold":ei("heading-lg-semibold"),"heading-lg-bold":ei("heading-lg-bold"),"heading-md-light":ei("heading-md-light"),"heading-md-regular":ei("heading-md-regular"),"heading-md-semibold":ei("heading-md-semibold"),"heading-md-bold":ei("heading-md-bold"),"heading-sm-light":ei("heading-sm-light"),"heading-sm-regular":ei("heading-sm-regular"),"heading-sm-semibold":ei("heading-sm-semibold"),"heading-sm-bold":ei("heading-sm-bold"),"heading-xs-light":ei("heading-xs-light"),"heading-xs-regular":ei("heading-xs-regular"),"heading-xs-semibold":ei("heading-xs-semibold"),"heading-xs-bold":ei("heading-xs-bold"),"body-baseline-light":ei("body-baseline-light"),"body-baseline-regular":ei("body-baseline-regular"),"body-baseline-semibold":ei("body-baseline-semibold"),"body-baseline-bold":ei("body-baseline-bold"),"body-md-light":ei("body-md-light"),"body-md-regular":ei("body-md-regular"),"body-md-semibold":ei("body-md-semibold"),"body-md-bold":ei("body-md-bold"),"body-sm-light":ei("body-sm-light"),"body-sm-regular":ei("body-sm-regular"),"body-sm-semibold":ei("body-sm-semibold"),"body-sm-bold":ei("body-sm-bold"),"body-xs-light":ei("body-xs-light"),"body-xs-regular":ei("body-xs-regular"),"body-xs-semibold":ei("body-xs-semibold"),"body-xs-bold":ei("body-xs-bold"),"form-label":ei("form-label"),"form-description":ei("form-description")},ti={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},ni=e=>r=>{var t;const n=r.theme,i=Wt(ti,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Rt(i,e,n.overrides.motion):i[e]},ii={"duration-150":ni("duration-150"),"duration-250":ni("duration-250"),"duration-350":ni("duration-350"),"duration-500":ni("duration-500"),"duration-800":ni("duration-800"),"duration-1000":ni("duration-1000"),"ease-default":ni("ease-default"),"ease-standard":ni("ease-standard"),"ease-entrance":ni("ease-entrance"),"ease-exit":ni("ease-exit")},oi=(e,r,t)=>n=>{const i=bn(r)(n)||an(r)(n);return`${e} rgba(from ${i} r g b / ${100*t}%)`},ai={collections:{default:{"xs-subtle":oi("0 0 4px 1px","neutral-50",.24),"xs-strong":oi("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":oi("0 0 4px 1px","border-focus",.5),"xs-error-strong":oi("0 0 4px 1px","border-error",.5),"sm-subtle":oi("0 2px 4px 0","neutral-50",.24),"sm-strong":oi("0 2px 4px 0","neutral-50",.5),"md-subtle":oi("0 2px 8px 0","neutral-50",.24),"md-strong":oi("0 2px 8px 0","neutral-50",.5),"lg-subtle":oi("0 2px 12px 1px","neutral-50",.24),"lg-strong":oi("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},si=e=>r=>{var t;const n=r.theme,i=Wt(ai,null==n?void 0:n.shadowScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.shadow)?Rt(i,e,n.overrides.shadow):i[e];return"function"==typeof o?o(r):o},li={"xs-subtle":si("xs-subtle"),"xs-strong":si("xs-strong"),"xs-focus-strong":si("xs-focus-strong"),"xs-error-strong":si("xs-error-strong"),"sm-subtle":si("sm-subtle"),"sm-strong":si("sm-strong"),"md-subtle":si("md-subtle"),"md-strong":si("md-strong"),"lg-subtle":si("lg-subtle"),"lg-strong":si("lg-strong")},di={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},ci=e=>r=>{var t;const n=r.theme,i=Wt(di,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Rt(i,e,n.overrides.spacing)}px`:`${i[e]}px`},ui={"spacing-0":ci("spacing-0"),"spacing-4":ci("spacing-4"),"spacing-8":ci("spacing-8"),"spacing-12":ci("spacing-12"),"spacing-16":ci("spacing-16"),"spacing-20":ci("spacing-20"),"spacing-24":ci("spacing-24"),"spacing-32":ci("spacing-32"),"spacing-40":ci("spacing-40"),"spacing-48":ci("spacing-48"),"spacing-64":ci("spacing-64"),"spacing-72":ci("spacing-72"),"layout-xs":ci("layout-xs"),"layout-sm":ci("layout-sm"),"layout-md":ci("layout-md"),"layout-lg":ci("layout-lg"),"layout-xl":ci("layout-xl"),"layout-xxl":ci("layout-xxl"),"layout-xxxl":ci("layout-xxxl")},hi=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),gi=Object.assign(Object.assign({},pn),{Primitive:sn}),mi=Object.assign(Object.assign({},ri),{Spec:Vn}),bi=ii,pi=Object.assign(Object.assign({},Yt),{Util:xn}),fi=ui,yi=Sn,vi=li,xi=Fn,wi=En,$i={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Fi={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Ci={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Ei={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Di={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},ki={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Si={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Ai={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Bi={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Oi={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},_i={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},zi={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},$i),{light:hi($i,"light"),dark:hi($i,"dark")}),Object.assign(Object.assign({},Fi),{light:hi(Fi,"light"),dark:hi(Fi,"dark")}),Object.assign(Object.assign({},Ci),{light:hi(Ci,"light"),dark:hi(Ci,"dark")}),Object.assign(Object.assign({},Ei),{light:hi(Ei,"light"),dark:hi(Ei,"dark")}),Object.assign(Object.assign({},Di),{light:hi(Di,"light"),dark:hi(Di,"dark")}),Object.assign(Object.assign({},ki),{light:hi(ki,"light"),dark:hi(ki,"dark")}),Object.assign(Object.assign({},Si),{light:hi(Si,"light"),dark:hi(Si,"dark")}),Object.assign(Object.assign({},Ai),{light:hi(Ai,"light"),dark:hi(Ai,"dark")}),Object.assign(Object.assign({},Bi),{light:hi(Bi,"light"),dark:hi(Bi,"dark")}),Object.assign(Object.assign({},Oi),{light:hi(Oi,"light"),dark:hi(Oi,"dark")}),Object.assign(Object.assign({},_i),{light:hi(_i,"light"),dark:hi(_i,"dark")}),Object.assign(Object.assign({},zi),{light:hi(zi,"light"),dark:hi(zi,"dark")});var Mi=function(e,r){return Mi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Mi(e,r)};var ji=function(){return ji=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},ji.apply(this,arguments)};var Ti="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Ii=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Pi="object"==typeof Ti&&Ti&&Ti.Object===Object&&Ti,Li="object"==typeof self&&self&&self.Object===Object&&self,Ri=Pi||Li||Function("return this")(),Wi=Ri,Ni=function(){return Wi.Date.now()},Hi=/\s/;var Yi=function(e){for(var r=e.length;r--&&Hi.test(e.charAt(r)););return r},Vi=/^\s+/;var qi=function(e){return e?e.slice(0,Yi(e)+1).replace(Vi,""):e},Qi=Ri.Symbol,Ui=Qi,Zi=Object.prototype,Xi=Zi.hasOwnProperty,Gi=Zi.toString,Ji=Ui?Ui.toStringTag:void 0;var Ki=function(e){var r=Xi.call(e,Ji),t=e[Ji];try{e[Ji]=void 0;var n=!0}catch(e){}var i=Gi.call(e);return n&&(r?e[Ji]=t:delete e[Ji]),i},eo=Object.prototype.toString;var ro=Ki,to=function(e){return eo.call(e)},no=Qi?Qi.toStringTag:void 0;var io=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":no&&no in Object(e)?ro(e):to(e)},oo=function(e){return null!=e&&"object"==typeof e};var ao=qi,so=Ii,lo=function(e){return"symbol"==typeof e||oo(e)&&"[object Symbol]"==io(e)},co=/^[-+]0x[0-9a-f]+$/i,uo=/^0b[01]+$/i,ho=/^0o[0-7]+$/i,go=parseInt;var mo=Ii,bo=Ni,po=function(e){if("number"==typeof e)return e;if(lo(e))return NaN;if(so(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=so(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ao(e);var t=uo.test(e);return t||ho.test(e)?go(e.slice(2),t?2:8):co.test(e)?NaN:+e},fo=Math.max,yo=Math.min;var vo=function(e,r,t){var n,i,o,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=n,o=i;return n=i=void 0,d=r,a=e.apply(o,t)}function m(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function b(){var e=bo();if(m(e))return p(e);s=setTimeout(b,function(e){var t=r-(e-l);return u?yo(t,o-(e-d)):t}(e))}function p(e){return s=void 0,h&&n?g(e):(n=i=void 0,a)}function f(){var e=bo(),t=m(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(b,r),c?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(b,r),g(l)}return void 0===s&&(s=setTimeout(b,r)),a}return r=po(r)||0,mo(t)&&(c=!!t.leading,o=(u="maxWait"in t)?fo(po(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),f.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},f.flush=function(){return void 0===s?a:p(bo())},f},xo=vo,wo=Ii;var $o=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return wo(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),xo(e,r,{leading:n,maxWait:r,trailing:i})},Fo=function(e,r,t,n){switch(r){case"debounce":return vo(e,t,n);case"throttle":return $o(e,t,n);default:return e}},Co=function(e){return"function"==typeof e},Eo=function(){return"undefined"==typeof window},Do=function(e){return e instanceof Element||e instanceof HTMLDocument},ko=function(e,r,t,n){return function(i){var o=i.width,a=i.height;r((function(r){return r.width===o&&r.height===a||r.width===o&&!n||r.height===a&&!t?r:(e&&Co(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Eo()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Eo())return null;if(r)return document.querySelector(r);if(n&&Do(n))return n;if(t.targetRef&&Do(t.targetRef.current))return t.targetRef.current;var i=E(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,a=void 0===o||o,s=r.onResize;if(i||a){var l=ko(s,t.setState.bind(t),i,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Eo()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Co(r)?"renderProp":Co(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,a=void 0===o?1e3:o,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Eo()||(t.resizeHandler=Fo(t.createResizeHandler,i,a,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Mi(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Eo()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(a,null)}}}(c);var So=Eo()?u:h;function Ao(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,b=e.onResize,p=o(t),f=o(null),y=null!=g?g:f,v=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return So((function(){if(!Eo()){var e=ko(b,$,c,h);v.current=Fo((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!Eo()&&e({width:n,height:i}),p.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,m),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,b,m,y.current]),ji({ref:y},w)}const Bo=i.createContext({mode:"default",rootNode:{current:null}}),Oo=e=>e.join("."),_o=(e,r=[],t,n)=>{const i=[];return e.forEach(((o,a)=>{const s=t?t(o):o.value,l=n?n(o):o.label,d=o.options,c=[...r,s],u=!!(d&&d.length>0);i.push({originalItem:o,value:s,label:l,keyPath:c,level:r.length,hasChildren:u,parentKeyPath:r.length>0?r:void 0,indexInParent:a,parentSetSize:e.length}),u&&i.push(..._o(d,c,t,n))})),i},zo=(e,r)=>{if(r.length<=e.length)return!1;const t=Oo(e);return Oo(r).startsWith(t+".")},Mo=v.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,jo=w`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,To=v.div`
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
    animation: ${jo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Io=v(To)`
    animation-delay: -0.45s;
`,Po=v(To)`
    animation-delay: -0.3s;
`,Lo=v(To)`
    animation-delay: -0.15s;
`,Ro=({color:t,className:n,size:i})=>e(Mo,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[r(To,{id:"inner1"}),r(Io,{id:"inner2"}),r(Po,{id:"inner3"}),r(Lo,{id:"inner4"})]}),Wo=v.button`
    padding: ${fi["spacing-8"]} ${fi["spacing-16"]};
    min-width: 4rem;
    border: ${pi["width-010"]} ${pi.solid} transparent;
    transition: all ${bi["duration-250"]} ${bi["ease-default"]};
    border-radius: ${jn};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return x`
                    background-color: ${gi.bg};
                    border-color: ${e.$buttonIsDanger?gi["border-error-strong"]:Ln};

                    color: ${e.$buttonIsDanger?gi["text-error"]:Rn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${gi["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return x`
                    background-color: ${gi.bg};
                    border-color: ${gi.border};

                    color: ${e.$buttonIsDanger?gi["text-error"]:Wn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${gi["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return x`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?gi["text-error"]:Nn};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${gi["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return x`
                    background-color: ${gi["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${gi["text-disabled"]};
                `;default:return x`
                    background-color: ${e.$buttonIsDanger?gi["bg-error-strong"]:Tn};

                    ${wi.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Pn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?gi["bg-error-strong-hover"]:In};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return x`
                    height: 2.5rem;
                    ${mi["body-md-semibold"]}

                    ${wi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return x`
                    height: 4rem;
                    ${mi["heading-md-semibold"]}

                    ${wi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return x`
                    height: 3rem;
                    ${mi["heading-xs-semibold"]}

                    ${wi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,No=v(Ro)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,Ho=e=>i.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),Yo=(t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=me(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Wo,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},h,u,{children:[a&&r(No,{$hasChildren:Ho(i)}),r("span",{children:i})]}))};Yo.displayName="Button.Default";const Vo=(t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=me(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Wo,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},h,u,{children:[a&&r(No,{$hasChildren:Ho(i)}),r("span",{children:i})]}))};Vo.displayName="Button.Small";const qo=(t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=me(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Wo,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},h,u,{children:[a&&r(No,{$hasChildren:Ho(i)}),r("span",{children:i})]}))};qo.displayName="Button.Large";const Qo={Default:i.forwardRef(Yo),Small:i.forwardRef(Vo),Large:i.forwardRef(qo)},Uo=w`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Zo=x`
    animation: ${bi["duration-150"]} ${bi["ease-default"]} ${Uo};
    width: 100%;
    height: 100%;
    transition: color ${bi["duration-150"]} ${bi["ease-default"]};
`,Xo=v(k)`
    ${Zo}
    color: ${gi["icon-primary-subtlest"]};
`,Go=v(S)`
    ${Zo}
    color: ${gi["icon-disabled-subtle"]};
`,Jo=v(A)`
    ${Zo}
    color: ${e=>e.$disabled?gi["icon-disabled-subtle"](e):gi["icon-selected"](e)};
`,Ko=v(B)`
    ${Zo}
    color: ${e=>e.$disabled?gi["icon-disabled-subtle"](e):gi["icon-selected"](e)};
`,ea=v.div`
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
        outline: 2px solid ${gi["focus-ring"]};
        outline-offset: 0px;
        border-radius: 4px;
    }
`,ra=v.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Xo},
        &:hover
        + ${Jo},
        &:hover
        + ${Ko} {
        @media (pointer: fine) {
            color: ${e=>!e.disabled&&gi["icon-hover"](e)};
        }
    }
`;var ta={exports:{}};ta.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,a=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===g)},f.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return C(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<C(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),g=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var v=this.$locale().weekStart||0,x=(b<v?b+7:b)-v;return g(n?f-x:f+(6-x),p);case s:case h:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case o:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(h,1);b.$d[g](m),b.init(),this.$d=b.set(h,Math.min(this.$D,b.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),b=function(e){var r=C(g);return E.w(r.date(r.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return b(1);if(m===l)return b(7);var p=(h={},h[o]=r,h[a]=t,h[i]=e,h)[m]||1,f=this.$d.getTime()+n*p;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(o,a,!0);case"A":return m(o,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,g){var m,b=this,p=E.p(h),f=C(n),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(b,f)};switch(p){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case s:m=(v-y)/864e5;break;case a:m=v/t;break;case o:m=v/r;break;case i:m=v/e;break;default:m=v}return g?m:E.a(m)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),k=D.prototype;return C.prototype=k,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var na=pe(ta.exports),ia={exports:{}};ia.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],g=c&&c[1];a[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=a||(i||o?1:g.getDate()),b=i||g.getFullYear(),p=0;i&&!o||(p=o>0?o-1:g.getMonth());var f=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(b,p,m,f,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(b,p,m,f,y,v,x)):new Date(b,p,m,f,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var g=s.length,m=1;m<=g;m+=1){a[1]=s[m-1];var b=t.apply(this,a);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var oa=pe(ia.exports),aa={exports:{}};aa.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),a=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var sa=pe(aa.exports),la={exports:{}};la.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var da=pe(la.exports),ca={exports:{}};ca.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var ua,ha,ga,ma=pe(ca.exports),ba={exports:{}},pa=pe(ba.exports=(ua={year:0,month:1,day:2,hour:3,minute:4,second:5},ha={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=ha[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ha[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=ua[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",m=+e;return(t.utc(g).valueOf()-(m-=m%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,s=i||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var a=o(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));na.extend(sa),na.extend(ma),na.extend(da),na.extend(oa),na.extend(pa),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=na(r).startOf("week");return fa(t).map((e=>ya(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return ya(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(na(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+na(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=na(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?na(n):void 0,i?na(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(ga||(ga={}));const fa=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},ya=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},va=[1,3,5,7,8,10,12],xa=[4,6,9,11];var wa,$a;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),a=parseInt(n);return 0==i?"1":va.includes(o)?Math.min(i,31).toString():xa.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=na(e,t);return na(r,t).diff(n,"minute")},e.toDayjs=e=>e?na(e):na(),e.addMinutesToTime=(e,r,t="HH:mm")=>na(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>na(e).isSame(na(r),t)}(wa||(wa={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!na(e).isBefore(n,"day"))||!(!i||!na(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){const t=r(e);if(na(t,"YYYY-MM-DD",!0).isValid())return t}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,t,n,i]=r;if(t.length<=2||parseInt(t,10)<100)return"";return`${t.padStart(4,"0")}-${n.padStart(2,"0")}-${i.padStart(2,"0")}`}}($a||($a={}));var Fa,Ca;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Fa||(Fa={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const a=n+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`},e.getMaskedDescription=(e,r,t)=>{if(!e||"masked"!==r||!t)return"";const[n,i]=t,o=n>0,a=i<e.length-1,s=o?e.substring(0,n):"",l=a?e.substring(i+1):"";return o&&a?`Starting with ${s} and ending with ${l}`:o?`Starting with ${s}`:a?`Ending with ${l}`:""}}(Ca||(Ca={}));const Ea=v.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,Da=e=>(()=>{const e=g.split(".");return parseInt(e[0],10)>=19})()?e:e?"true":void 0,ka=e=>{const{textSize:r}=e||{};return x`
        // Text styling
        ${r&&mi[`${r}-regular`]}

        strong {
            font-weight: ${mi.Spec["weight-semibold"]};
            ${r&&mi[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${mi.Spec["weight-semibold"]};
            ${r&&mi[`${r}-semibold`]}
            color: ${gi.hyperlink};
            text-decoration: underline;

            svg {
                color: ${gi["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${gi["hyperlink-hover"]};

                svg {
                    color: ${gi["icon-hover"]};
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
    `},Sa=(e,r,t=!1)=>x`
        ${mi[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Aa=e=>{if(e)return x`
            ${r=e,x`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},Ba=(e,r,t,n,i)=>x`
    ${Sa(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?x`
            display: block;
            ${Aa(t)}
        `:e?x`
            display: inline;
        `:x`
            display: block;
            ${Aa(t)}
        `)(t,n,i)}
    color: ${gi.text};
`,Oa=v.div`
    ${e=>Ba(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,_a=v.a`
    ${e=>{var r;return x`
        ${Sa(e.$textStyle,e.$weight||"regular")}
        color: ${gi.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${gi["text-hover"]};
        }
    `}}
`,za=v(W)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Ma;!function(t){const n=(e,t,n)=>{const o=(n,i)=>{var{weight:o,inline:a,paragraph:s,maxLines:l}=n,d=me(n,["weight","inline","paragraph","maxLines"]);return r(Oa,Object.assign({ref:i,as:a?"span":e,$textStyle:t,$weight:o,$inline:a,$paragraph:s,$maxLines:l},d))};return o.displayName=`Typography.${n}`,i.forwardRef(o)};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const n=(t,n)=>{var{weight:i,inline:o,paragraph:a,maxLines:s}=t,l=me(t,["weight","inline","paragraph","maxLines"]);return r(Oa,Object.assign({ref:n,as:o?"span":"p",$textStyle:e,$weight:i,$inline:o,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${t}`,i.forwardRef(n)};t.BodyBL=o("body-baseline","BodyBL"),t.BodyMD=o("body-md","BodyMD"),t.BodySM=o("body-sm","BodySM"),t.BodyXS=o("body-xs","BodyXS");const a=(t,n)=>{const o=(n,i)=>{var{weight:o,children:a,external:s,underlineStyle:l="underline"}=n,d=me(n,["weight","children","external","underlineStyle"]);return e(_a,Object.assign({ref:i,$textStyle:t,$weight:o,$underlineStyle:l},d,{children:[a,s&&r(za,{})]}))};return o.displayName=`Typography.${n}`,i.forwardRef(o)};t.LinkBL=a("body-baseline","LinkBL"),t.LinkMD=a("body-md","LinkMD"),t.LinkSM=a("body-sm","LinkSM"),t.LinkXS=a("body-xs","LinkXS")}(Ma||(Ma={}));const ja=v.div`
    padding: ${fi["spacing-8"]} ${fi["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=gi["bg-error"](e),t=gi["border-error"](e);break;case"success":r=gi["bg-success"](e),t=gi["border-success"](e);break;case"warning":default:r=gi["bg-warning"](e),t=gi["border-warning"](e);break;case"info":r=gi["bg-info"](e),t=gi["border-info"](e);break;case"description":r=gi["bg-strong"](e),t=gi["border-strong"](e)}return x`
            background: ${r};
            border-left: ${pi["width-020"]} ${pi.solid}
                ${t};
        `}}
`,Ta=v.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${fi["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=gi["icon-error"](e);break;case"success":r=gi["icon-success"](e);break;case"warning":default:r=gi["icon-warning"](e);break;case"info":r=gi["icon-info"](e);break;case"description":r=gi["icon-subtle"](e)}return x`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,Ia=v(Ma.LinkSM)`
    ${e=>"small"===e.$sizeType?x`
                ${mi["body-sm-semibold"]}
                margin-top: ${fi["spacing-4"]};
            `:x`
                ${mi["body-md-semibold"]}
                margin-top: ${fi["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${fi["spacing-4"]};
    }
`,Pa=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,La=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return x`
                margin-bottom: ${fi["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,Ra=v.div`
    color: ${gi.text};

    ${e=>"small"===e.$sizeType?ka({textSize:"body-sm"}):ka({textSize:"body-md"})}
`,Wa=v.button`
    ${e=>"small"===e.$sizeType?x`
                ${mi["body-sm-semibold"]}
            `:x`
                ${mi["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${fi["spacing-4"]};
    margin-top: ${fi["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${gi["text-primary"]};
`,Na=v(O)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${bi["duration-350"]} ${bi["ease-standard"]};
`,Ha=v.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?x`
                    color: ${gi["icon-selected-disabled"]};
                `:x`
                    color: ${gi["icon-disabled-subtle"]};
                `:e.$active?x`
                color: ${gi["icon-selected"]};
            `:x`
            color: ${gi["icon-subtle"]};
        `};
`,Ya=x`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&mi[`${e.$size}-regular`]}
    font-weight: ${mi.Spec["weight-regular"]};
    color: ${gi.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,Va=v.ol`
    ${Ya}

    margin-left: 3em;

    ${wi.MaxWidth.lg} {
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
`,qa=v.ul`
    ${Ya}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${e=>e.$hasCustomIcon&&x`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`,Qa=n=>{var{size:o,bulletType:a,bottomMargin:s,children:l}=n,d=me(n,["size","bulletType","bottomMargin","children"]);const c=void 0!==a&&"string"!=typeof a;return r(qa,Object.assign({$size:o,$bulletType:c?void 0:a,$bottomMargin:s,$hasCustomIcon:c},d,{children:c?i.Children.map(l,(n=>i.isValidElement(n)?i.cloneElement(n,{children:e(t,{children:[r("div",{"aria-hidden":!0,children:a}),r("div",{children:n.props.children})]})}):n)):l}))};Qa.displayName="TextList.Ul";const Ua=e=>{var{size:t,counterType:n,counterSeparator:i,bottomMargin:o,children:a}=e,s=me(e,["size","counterType","counterSeparator","bottomMargin","children"]);return r(Va,Object.assign({$size:t,$counterType:n,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};Ua.displayName="TextList.Ol";const Za=Qa,Xa=v.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${yi.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${gi.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${gi["focus-ring"]};
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
                            border-color: ${gi["border-error"]};
                        `:x`
                            border-color: ${gi["border-error"]};

                            &:has(${ts}:hover) {
                                @media (pointer: fine) {
                                    background: ${gi["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?x`
                            border: none;
                            background: ${gi["bg-selected-disabled"]};
                        `:x`
                            border: none;
                        `:e.$selected?x`
                        border: none;
                        background: ${gi["bg-selected"]};

                        &:has(${ts}:hover) {
                            @media (pointer: fine) {
                                background: ${gi["bg-selected-hover"]};

                                & ${Ka} {
                                    color: ${gi["text-selected-hover"]};
                                }

                                & ${us} {
                                    color: ${gi["icon-selected-hover"]};
                                }
                            }
                        }
                    `:x`
                    border: none;

                    &:has(${ts}:hover) {
                        @media (pointer: fine) {
                            background: ${gi["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?x`
                            border-color: ${gi["border-error"]};
                        `:x`
                            border-color: ${gi["border-error"]};

                            &:has(${ts}:hover) {
                                @media (pointer: fine) {
                                    background: ${gi["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?x`
                            border-color: ${gi["border-selected-disabled"]};
                            background: ${gi["bg-selected-disabled"]};
                        `:x`
                            border-color: ${gi["border-disabled"]};
                            background: ${gi["bg-disabled"]};
                        `:e.$selected?x`
                        border-color: ${gi["border-selected"]};
                        background: ${gi["bg-selected"]};

                        &:has(${ts}:hover) {
                            @media (pointer: fine) {
                                background: ${gi["bg-selected-hover"]};

                                & ${Ka} {
                                    color: ${gi["text-selected-hover"]};
                                }

                                & ${us} {
                                    color: ${gi["icon-selected-hover"]};
                                }
                            }
                        }
                    `:x`
                    border-color: ${gi.border};

                    &:has(${ts}:hover) {
                        @media (pointer: fine) {
                            background: ${gi["bg-hover-subtle"]};
                        }
                    }
                `}
`,Ga=v.input`
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
`,Ja=v.div`
    display: flex;
`,Ka=v.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?x`
                    color: ${gi["text-selected-disabled"]};
                `:x`
                    color: ${gi["text-disabled"]};
                `:e.$selected?x`
                color: ${gi["text-selected"]};
            `:x`
            color: ${gi.text};
        `}
`,es=v.label`
    ${e=>e.$selected?mi["body-baseline-semibold"]:mi["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${wi.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${wi.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,rs=v.div`
    ${mi["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${mi["body-md-semibold"]}
    }
`,ts=v.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,ns=v.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,is=v.button`
    color: ${e=>e.$disabled?gi["text-disabled"]:gi["text-error"]};
    white-space: nowrap;
    ${mi["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,os=v.button`
    color: ${e=>e.disabled?gi["text-disabled"]:gi["text-primary"]};
    ${mi["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${gi.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,as=v.div`
    width: 100%;
    color: ${e=>e.$disabled?gi["text-disabled"]:gi["text-error"]};
    border: none;
    background: ${gi.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ss=v((t=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:h,maxCollapsedHeight:g,role:b}=t,p=me(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[f,y]=a(!1),[v,x]=a(!1),{height:w,ref:$}=Ao(),[F]=a((()=>Fa.generate())),C=m((()=>{y(!g),x(E())}),[g,w]),E=()=>!(!w||!g)&&w>g;u((()=>{C()}),[g,w,C]);return e(ja,{className:i,$type:n,$sizeType:d,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":p["data-testid"],role:b,children:[c&&r(Ta,{$sizeType:d,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return r(R,{"aria-hidden":!0});case"warning":return r(P,{"aria-hidden":!0});case"error":return r(I,{"aria-hidden":!0});case"info":case"description":return r(L,{"aria-hidden":!0});default:return null}})()}),e(Pa,{children:[v&&e(Wa,{$sizeType:d,$type:n,type:"button","aria-expanded":f,"aria-controls":F,onClick:()=>y(!f),children:["Show ",f?"less":"more",r(Na,{$expanded:f})]}),e(La,{id:F,$maxCollapsedHeight:E()?g:void 0,$showMore:f,$hasActionLink:!!s,inert:Da(!!g&&!f),children:[r(Ra,{ref:$,$type:n,$sizeType:d,children:o}),s?e(Ia,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d,underlineStyle:"none"},s,{children:[s.children,l||r(T,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,ls=v.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${gi.bg};
    ${ka({textSize:"body-md"})}

    ${e=>e.$disabled?x`
                color: ${gi["text-disabled"]};
            `:e.$selected?x`
                color: ${gi["text-selected"]};
            `:x`
                color: ${gi.text};
            `}
`,ds=v(Ma.BodyMD)`
    color: ${e=>e.$disabled?gi["text-disabled"]:gi["text-error"]};
`,cs=v(Za)`
    color: ${e=>e.$disabled?gi["text-disabled"]:gi["text-error"]};
`,us=v((({type:e,active:t=!1,disabled:n,className:i})=>{let o;switch(e){case"checkbox":o=r(t?q:V,{});break;case"radio":o=r(t?H:N,{});break;case"tick":o=r(Q,{});break;case"cross":o=r(Y,{});break;default:o=null}return r(Ha,{className:i,$active:t,$disabled:n,"aria-hidden":!0,children:o})}))`
    ${e=>e.$disabled?e.$selected?x`
                    color: ${gi["icon-selected-disabled"]};
                `:x`
                    color: ${gi["icon-disabled-subtle"]};
                `:e.$selected?x`
                color: ${gi["icon-selected"]};
            `:x`
            color: ${gi["icon-subtle"]};
        `};
`;var hs=Ss(),gs=e=>Cs(e,hs),ms=Ss();gs.write=e=>Cs(e,ms);var bs=Ss();gs.onStart=e=>Cs(e,bs);var ps=Ss();gs.onFrame=e=>Cs(e,ps);var fs=Ss();gs.onFinish=e=>Cs(e,fs);var ys=[];gs.setTimeout=(e,r)=>{const t=gs.now()+r,n=()=>{const e=ys.findIndex((e=>e.cancel==n));~e&&ys.splice(e,1),$s-=~e?1:0},i={time:t,handler:e,cancel:n};return ys.splice(vs(t),0,i),$s+=1,Es(),i};var vs=e=>~(~ys.findIndex((r=>r.time>e))||~ys.length);gs.cancel=e=>{bs.delete(e),ps.delete(e),fs.delete(e),hs.delete(e),ms.delete(e)},gs.sync=e=>{Fs=!0,gs.batchedUpdates(e),Fs=!1},gs.throttle=e=>{let r;function t(){try{e(...r)}finally{r=null}}function n(...e){r=e,gs.onStart(t)}return n.handler=e,n.cancel=()=>{bs.delete(t),r=null},n};var xs="undefined"!=typeof window?window.requestAnimationFrame:()=>{};gs.use=e=>xs=e,gs.now="undefined"!=typeof performance?()=>performance.now():Date.now,gs.batchedUpdates=e=>e(),gs.catch=console.error,gs.frameLoop="always",gs.advance=()=>{"demand"!==gs.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ks()};var ws=-1,$s=0,Fs=!1;function Cs(e,r){Fs?(r.delete(e),e(0)):(r.add(e),Es())}function Es(){ws<0&&(ws=0,"demand"!==gs.frameLoop&&xs(Ds))}function Ds(){~ws&&(xs(Ds),gs.batchedUpdates(ks))}function ks(){const e=ws;ws=gs.now();const r=vs(ws);r&&(As(ys.splice(0,r),(e=>e.handler())),$s-=r),$s?(bs.flush(),hs.flush(e?Math.min(64,ws-e):16.667),ps.flush(),ms.flush(),fs.flush()):ws=-1}function Ss(){let e=new Set,r=e;return{add(t){$s+=r!=e||e.has(t)?0:1,e.add(t)},delete:t=>($s-=r==e&&e.has(t)?1:0,e.delete(t)),flush(t){r.size&&(e=new Set,$s-=r.size,As(r,(r=>r(t)&&e.add(r))),$s+=e.size,r=e)}}}function As(e,r){e.forEach((e=>{try{r(e)}catch(e){gs.catch(e)}}))}var Bs=Object.defineProperty,Os={};function _s(){}((e,r)=>{for(var t in r)Bs(e,t,{get:r[t],enumerable:!0})})(Os,{assign:()=>qs,colors:()=>Hs,createStringInterpolator:()=>Ls,skipAnimation:()=>Ys,to:()=>Rs,willAdvance:()=>Vs});var zs={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ms(e,r){if(zs.arr(e)){if(!zs.arr(r)||e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}return e===r}var js=(e,r)=>e.forEach(r);function Ts(e,r,t){if(zs.arr(e))for(let n=0;n<e.length;n++)r.call(t,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&r.call(t,e[n],n)}var Is=e=>zs.und(e)?[]:zs.arr(e)?e:[e];function Ps(e,r){if(e.size){const t=Array.from(e);e.clear(),js(t,r)}}var Ls,Rs,Ws=(e,...r)=>Ps(e,(e=>e(...r))),Ns=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Hs=null,Ys=!1,Vs=_s,qs=e=>{e.to&&(Rs=e.to),e.now&&(gs.now=e.now),void 0!==e.colors&&(Hs=e.colors),null!=e.skipAnimation&&(Ys=e.skipAnimation),e.createStringInterpolator&&(Ls=e.createStringInterpolator),e.requestAnimationFrame&&gs.use(e.requestAnimationFrame),e.batchedUpdates&&(gs.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Vs=e.willAdvance),e.frameLoop&&(gs.frameLoop=e.frameLoop)},Qs=new Set,Us=[],Zs=[],Xs=0,Gs={get idle(){return!Qs.size&&!Us.length},start(e){Xs>e.priority?(Qs.add(e),gs.onStart(Js)):(Ks(e),gs(rl))},advance:rl,sort(e){if(Xs)gs.onFrame((()=>Gs.sort(e)));else{const r=Us.indexOf(e);~r&&(Us.splice(r,1),el(e))}},clear(){Us=[],Qs.clear()}};function Js(){Qs.forEach(Ks),Qs.clear(),gs(rl)}function Ks(e){Us.includes(e)||el(e)}function el(e){Us.splice(function(e,r){const t=e.findIndex(r);return t<0?e.length:t}(Us,(r=>r.priority>e.priority)),0,e)}function rl(e){const r=Zs;for(let t=0;t<Us.length;t++){const n=Us[t];Xs=n.priority,n.idle||(Vs(n),n.advance(e),n.idle||r.push(n))}return Xs=0,(Zs=Us).length=0,(Us=r).length>0}var tl="[-+]?\\d*\\.?\\d+",nl=tl+"%";function il(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var ol=new RegExp("rgb"+il(tl,tl,tl)),al=new RegExp("rgba"+il(tl,tl,tl,tl)),sl=new RegExp("hsl"+il(tl,nl,nl)),ll=new RegExp("hsla"+il(tl,nl,nl,tl)),dl=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,cl=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ul=/^#([0-9a-fA-F]{6})$/,hl=/^#([0-9a-fA-F]{8})$/;function gl(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function ml(e,r,t){const n=t<.5?t*(1+r):t+r-t*r,i=2*t-n,o=gl(i,n,e+1/3),a=gl(i,n,e),s=gl(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function bl(e){const r=parseInt(e,10);return r<0?0:r>255?255:r}function pl(e){return(parseFloat(e)%360+360)%360/360}function fl(e){const r=parseFloat(e);return r<0?0:r>1?255:Math.round(255*r)}function yl(e){const r=parseFloat(e);return r<0?0:r>100?1:r/100}function vl(e){let r=function(e){let r;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(r=ul.exec(e))?parseInt(r[1]+"ff",16)>>>0:Hs&&void 0!==Hs[e]?Hs[e]:(r=ol.exec(e))?(bl(r[1])<<24|bl(r[2])<<16|bl(r[3])<<8|255)>>>0:(r=al.exec(e))?(bl(r[1])<<24|bl(r[2])<<16|bl(r[3])<<8|fl(r[4]))>>>0:(r=dl.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=hl.exec(e))?parseInt(r[1],16)>>>0:(r=cl.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=sl.exec(e))?(255|ml(pl(r[1]),yl(r[2]),yl(r[3])))>>>0:(r=ll.exec(e))?(ml(pl(r[1]),yl(r[2]),yl(r[3]))|fl(r[4]))>>>0:null}(e);if(null===r)return e;r=r||0;return`rgba(${(4278190080&r)>>>24}, ${(16711680&r)>>>16}, ${(65280&r)>>>8}, ${(255&r)/255})`}var xl=(e,r,t)=>{if(zs.fun(e))return e;if(zs.arr(e))return xl({range:e,output:r,extrapolate:t});if(zs.str(e.output[0]))return Ls(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const r=function(e,r){for(var t=1;t<r.length-1&&!(r[t]>=e);++t);return t-1}(e,o);return function(e,r,t,n,i,o,a,s,l){let d=l?l(e):e;if(d<r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(d>t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(n===i)return n;if(r===t)return e<=r?n:i;r===-1/0?d=-d:t===1/0?d-=r:d=(d-r)/(t-r);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[r],o[r+1],i[r],i[r+1],l,a,s,n.map)}};var wl=1.70158,$l=1.525*wl,Fl=wl+1,Cl=2*Math.PI/3,El=2*Math.PI/4.5,Dl=e=>{const r=7.5625,t=2.75;return e<1/t?r*e*e:e<2/t?r*(e-=1.5/t)*e+.75:e<2.5/t?r*(e-=2.25/t)*e+.9375:r*(e-=2.625/t)*e+.984375},kl={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Fl*e*e*e-wl*e*e,easeOutBack:e=>1+Fl*Math.pow(e-1,3)+wl*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-$l)/2:(Math.pow(2*e-2,2)*(($l+1)*(2*e-2)+$l)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Cl),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Cl)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*El)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*El)/2+1,easeInBounce:e=>1-Dl(1-e),easeOutBounce:Dl,easeInOutBounce:e=>e<.5?(1-Dl(1-2*e))/2:(1+Dl(2*e-1))/2,steps:(e,r="end")=>t=>{const n=(t="end"===r?Math.min(t,.999):Math.max(t,.001))*e,i="end"===r?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Sl=Symbol.for("FluidValue.get"),Al=Symbol.for("FluidValue.observers"),Bl=e=>Boolean(e&&e[Sl]),Ol=e=>e&&e[Sl]?e[Sl]():e,_l=e=>e[Al]||null;function zl(e,r){const t=e[Al];t&&t.forEach((e=>{!function(e,r){e.eventObserved?e.eventObserved(r):e(r)}(e,r)}))}var Ml=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");jl(this,e)}},jl=(e,r)=>Ll(e,Sl,r);function Tl(e,r){if(e[Sl]){let t=e[Al];t||Ll(e,Al,t=new Set),t.has(r)||(t.add(r),e.observerAdded&&e.observerAdded(t.size,r))}return r}function Il(e,r){const t=e[Al];if(t&&t.has(r)){const n=t.size-1;n?t.delete(r):e[Al]=null,e.observerRemoved&&e.observerRemoved(n,r)}}var Pl,Ll=(e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}),Rl=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Wl=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Nl=new RegExp(`(${Rl.source})(%|[a-z]+)`,"i"),Hl=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Yl=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Vl=e=>{const[r,t]=ql(e);if(!r||Ns())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(n)return n.trim();if(t&&t.startsWith("--")){const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);return r||e}return t&&Yl.test(t)?Vl(t):t||e},ql=e=>{const r=Yl.exec(e);if(!r)return[,];const[,t,n]=r;return[t,n]},Ql=(e,r,t,n,i)=>`rgba(${Math.round(r)}, ${Math.round(t)}, ${Math.round(n)}, ${i})`,Ul=e=>{Pl||(Pl=Hs?new RegExp(`(${Object.keys(Hs).join("|")})(?!\\w)`,"g"):/^\b$/);const r=e.output.map((e=>Ol(e).replace(Yl,Vl).replace(Wl,vl).replace(Pl,vl))),t=r.map((e=>e.match(Rl).map(Number))),n=t[0].map(((e,r)=>t.map((e=>{if(!(r in e))throw Error('The arity of each "output" value must be equal');return e[r]})))).map((r=>xl({...e,output:r})));return e=>{const t=!Nl.test(r[0])&&r.find((e=>Nl.test(e)))?.replace(Rl,"");let i=0;return r[0].replace(Rl,(()=>`${n[i++](e)}${t||""}`)).replace(Hl,Ql)}},Zl="react-spring: ",Xl=e=>{const r=e;let t=!1;if("function"!=typeof r)throw new TypeError(`${Zl}once requires a function parameter`);return(...e)=>{t||(r(...e),t=!0)}},Gl=Xl(console.warn);var Jl=Xl(console.warn);function Kl(e){return zs.str(e)&&("#"==e[0]||/\d/.test(e)||!Ns()&&Yl.test(e)||e in(Hs||{}))}var ed=Ns()?u:h;function rd(){const e=a()[1],r=(()=>{const e=o(!1);return ed((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{r.current&&e(Math.random())}}var td=e=>u(e,nd),nd=[];function id(e){const r=o(void 0);return u((()=>{r.current=e})),r.current}var od=Symbol.for("Animated:node"),ad=e=>e&&e[od],sd=(e,r)=>((e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}))(e,od,r),ld=e=>e&&e[od]&&e[od].getPayload(),dd=class{constructor(){sd(this,this)}getPayload(){return this.payload||[]}},cd=class e extends dd{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,zs.num(this._value)&&(this.lastPosition=this._value)}static create(r){return new e(r)}getPayload(){return[this]}getValue(){return this._value}setValue(e,r){return zs.num(e)&&(this.lastPosition=e,r&&(e=Math.round(e/r)*r,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,zs.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ud=class e extends cd{constructor(e){super(0),this._string=null,this._toString=xl({output:[e,e]})}static create(r){return new e(r)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(zs.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=xl({output:[this.getValue(),e]})),this._value=0,super.reset()}},hd={dependencies:null},gd=class extends dd{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const r={};return Ts(this.source,((t,n)=>{var i;(i=t)&&i[od]===i?r[n]=t.getValue(e):Bl(t)?r[n]=Ol(t):e||(r[n]=t)})),r}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&js(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const r=new Set;return Ts(e,this._addToPayload,r),Array.from(r)}}_addToPayload(e){hd.dependencies&&Bl(e)&&hd.dependencies.add(e);const r=ld(e);r&&js(r,(e=>this.add(e)))}},md=class e extends gd{constructor(e){super(e)}static create(r){return new e(r)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const r=this.getPayload();return e.length==r.length?r.map(((r,t)=>r.setValue(e[t]))).some(Boolean):(super.setValue(e.map(bd)),!0)}};function bd(e){return(Kl(e)?ud:cd).create(e)}function pd(e){const r=ad(e);return r?r.constructor:zs.arr(e)?md:Kl(e)?ud:cd}var fd=(e,r)=>{const t=!zs.fun(e)||e.prototype&&e.prototype.isReactComponent;return p(((i,a)=>{const s=o(null),l=t&&m((e=>{s.current=function(e,r){e&&(zs.fun(e)?e(r):e.current=r);return r}(a,e)}),[a]),[d,c]=function(e,r){const t=new Set;hd.dependencies=t,e.style&&(e={...e,style:r.createAnimatedStyle(e.style)});return e=new gd(e),hd.dependencies=null,[e,t]}(i,r),h=rd(),g=()=>{const e=s.current;if(t&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,d.getValue(!0)))&&h()},b=new yd(g,c),p=o(void 0);ed((()=>(p.current=b,js(c,(e=>Tl(e,b))),()=>{p.current&&(js(p.current.deps,(e=>Il(e,p.current))),gs.cancel(p.current.update))}))),u(g,[]),td((()=>()=>{const e=p.current;js(e.deps,(r=>Il(r,e)))}));const f=r.getComponentProps(d.getValue());return n.createElement(e,{...f,ref:l})}))},yd=class{constructor(e,r){this.update=e,this.deps=r}eventObserved(e){"change"==e.type&&gs.write(this.update)}};var vd=Symbol.for("AnimatedComponent"),xd=e=>zs.str(e)?e:e&&zs.str(e.displayName)?e.displayName:zs.fun(e)&&e.name||null;function wd(e,...r){return zs.fun(e)?e(...r):e}var $d=(e,r)=>!0===e||!!(r&&e&&(zs.fun(e)?e(r):Is(e).includes(r))),Fd=(e,r)=>zs.obj(e)?r&&e[r]:e,Cd=(e,r)=>!0===e.default?e[r]:e.default?e.default[r]:void 0,Ed=e=>e,Dd=(e,r=Ed)=>{let t=kd;e.default&&!0!==e.default&&(e=e.default,t=Object.keys(e));const n={};for(const i of t){const t=r(e[i],i);zs.und(t)||(n[i]=t)}return n},kd=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Sd={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ad(e){const r=function(e){const r={};let t=0;if(Ts(e,((e,n)=>{Sd[n]||(r[n]=e,t++)})),t)return r}(e);if(r){const t={to:r};return Ts(e,((e,n)=>n in r||(t[n]=e))),t}return{...e}}function Bd(e){return e=Ol(e),zs.arr(e)?e.map(Bd):Kl(e)?Os.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Od(e){return zs.fun(e)||zs.arr(e)&&zs.obj(e[0])}var _d={tension:170,friction:26,mass:1,damping:1,easing:kl.linear,clamp:!1},zd=class{constructor(){this.velocity=0,Object.assign(this,_d)}};function Md(e,r){if(zs.und(r.decay)){const t=!zs.und(r.tension)||!zs.und(r.friction);!t&&zs.und(r.frequency)&&zs.und(r.damping)&&zs.und(r.mass)||(e.duration=void 0,e.decay=void 0),t&&(e.frequency=void 0)}else e.duration=void 0}var jd=[],Td=class{constructor(){this.changed=!1,this.values=jd,this.toValues=null,this.fromValues=jd,this.config=new zd,this.immediate=!1}};function Id(e,{key:r,props:t,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,d,c=$d(t.cancel??n?.cancel,r);if(c)g();else{zs.und(t.pause)||(i.paused=$d(t.pause,r));let e=n?.pause;!0!==e&&(e=i.paused||$d(e,r)),l=wd(t.delay||0,r),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-gs.now()}function h(){l>0&&!Os.skipAnimation?(i.delayed=!0,d=gs.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(d)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...t,callId:e,cancel:c},a)}catch(e){s(e)}}}))}var Pd=(e,r)=>1==r.length?r[0]:r.some((e=>e.cancelled))?Wd(e.get()):r.every((e=>e.noop))?Ld(e.get()):Rd(e.get(),r.every((e=>e.finished))),Ld=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Rd=(e,r,t=!1)=>({value:e,finished:r,cancelled:t}),Wd=e=>({value:e,cancelled:!0,finished:!1});function Nd(e,r,t,n){const{callId:i,parentId:o,onRest:a}=r,{asyncTo:s,promise:l}=t;return o||e!==s||r.reset?t.promise=(async()=>{t.asyncId=i,t.asyncTo=e;const d=Dd(r,((e,r)=>"onRest"===r?void 0:e));let c,u;const h=new Promise(((e,r)=>(c=e,u=r))),g=e=>{const r=i<=(t.cancelId||0)&&Wd(n)||i!==t.asyncId&&Rd(n,!1);if(r)throw e.result=r,u(e),e},m=(e,r)=>{const o=new Yd,a=new Vd;return(async()=>{if(Os.skipAnimation)throw Hd(t),a.result=Rd(n,!1),u(a),a;g(o);const s=zs.obj(e)?{...e}:{...r,to:e};s.parentId=i,Ts(d,((e,r)=>{zs.und(s[r])&&(s[r]=e)}));const l=await n.start(s);return g(o),t.paused&&await new Promise((e=>{t.resumeQueue.add(e)})),l})()};let b;if(Os.skipAnimation)return Hd(t),Rd(n,!1);try{let r;r=zs.arr(e)?(async e=>{for(const r of e)await m(r)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([r.then(c),h]),b=Rd(n.get(),!0,!1)}catch(e){if(e instanceof Yd)b=e.result;else{if(!(e instanceof Vd))throw e;b=e.result}}finally{i==t.asyncId&&(t.asyncId=o,t.asyncTo=o?s:void 0,t.promise=o?l:void 0)}return zs.fun(a)&&gs.batchedUpdates((()=>{a(b,n,n.item)})),b})():l}function Hd(e,r){Ps(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,r&&(e.cancelId=r)}var Yd=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Vd=class extends Error{constructor(){super("SkipAnimationSignal")}},qd=e=>e instanceof Ud,Qd=1,Ud=class extends Ml{constructor(){super(...arguments),this.id=Qd++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ad(this);return e&&e.getValue()}to(...e){return Os.to(this,e)}interpolate(...e){return Gl(`${Zl}The "interpolate" function is deprecated in v9 (use "to" instead)`),Os.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,r=!1){zl(this,{type:"change",parent:this,value:e,idle:r})}_onPriorityChange(e){this.idle||Gs.sort(this),zl(this,{type:"priority",parent:this,priority:e})}},Zd=Symbol.for("SpringPhase"),Xd=e=>(1&e[Zd])>0,Gd=e=>(2&e[Zd])>0,Jd=e=>(4&e[Zd])>0,Kd=(e,r)=>r?e[Zd]|=3:e[Zd]&=-3,ec=(e,r)=>r?e[Zd]|=4:e[Zd]&=-5,rc=class extends Ud{constructor(e,r){if(super(),this.animation=new Td,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!zs.und(e)||!zs.und(r)){const t=zs.obj(e)?{...e}:{...r,from:e};zs.und(t.default)&&(t.default=!0),this.start(t)}}get idle(){return!(Gd(this)||this._state.asyncTo)||Jd(this)}get goal(){return Ol(this.animation.to)}get velocity(){const e=ad(this);return e instanceof cd?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Xd(this)}get isAnimating(){return Gd(this)}get isPaused(){return Jd(this)}get isDelayed(){return this._state.delayed}advance(e){let r=!0,t=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=ld(n.to);!a&&Bl(n.to)&&(i=Is(Ol(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const d=s.constructor==ud?1:a?a[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let r=s.elapsedTime+=e;const t=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=zs.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(t==d?.005:Math.min(1,.001*Math.abs(d-t)));if(zs.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*r);u=t+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-u)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const r=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!zs.und(n),g=t==d?s.v0>0:t<d;let m,b=!1;const p=1,f=Math.ceil(e/p);for(let e=0;e<f&&(m=Math.abs(a)>r,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(b=u==d||u>d==g,b&&(a=-a*n,u=d));a+=(1e-6*-o.tension*(u-d)+.001*-o.friction*a)/o.mass*p,u+=a*p}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,r=s.elapsedTime+=e)),n=(o.progress||0)+r/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=t+o.easing(n)*(d-t),a=(u-s.lastPosition)/e,c=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:r=!1,s.setValue(u,o.round)&&(t=!0)}));const s=ad(this),l=s.getValue();if(r){const e=Ol(n.to);l===e&&!t||o.decay?t&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else t&&this._onChange(l)}set(e){return gs.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Gd(this)){const{to:e,config:r}=this.animation;gs.batchedUpdates((()=>{this._onStart(),r.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,r){let t;return zs.und(e)?(t=this.queue||[],this.queue=[]):t=[zs.obj(e)?e:{...r,to:e}],Promise.all(t.map((e=>this._update(e)))).then((e=>Pd(this,e)))}stop(e){const{to:r}=this.animation;return this._focus(this.get()),Hd(this._state,e&&this._lastCallId),gs.batchedUpdates((()=>this._stop(r,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const r=this.key||"";let{to:t,from:n}=e;t=zs.obj(t)?t[r]:t,(null==t||Od(t))&&(t=void 0),n=zs.obj(n)?n[r]:n,null==n&&(n=void 0);const i={to:t,from:n};return Xd(this)||(e.reverse&&([t,n]=[n,t]),n=Ol(n),zs.und(n)?ad(this)||this._set(t):this._set(n)),i}_update({...e},r){const{key:t,defaultProps:n}=this;e.default&&Object.assign(n,Dd(e,((e,r)=>/^on/.test(r)?Fd(e,t):e))),lc(this,e,"onProps"),dc(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Id(++this._lastCallId,{key:t,props:e,defaultProps:n,state:o,actions:{pause:()=>{Jd(this)||(ec(this,!0),Ws(o.pauseQueue),dc(this,"onPause",Rd(this,tc(this,this.animation.to)),this))},resume:()=>{Jd(this)&&(ec(this,!1),Gd(this)&&this._resume(),Ws(o.resumeQueue),dc(this,"onResume",Rd(this,tc(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((t=>{if(e.loop&&t.finished&&(!r||!t.noop)){const r=nc(e);if(r)return this._update(r,!0)}return t}))}_merge(e,r,t){if(r.cancel)return this.stop(!0),t(Wd(this));const n=!zs.und(e.to),i=!zs.und(e.from);if(n||i){if(!(r.callId>this._lastToId))return t(Wd(this));this._lastToId=r.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:d}=s;let{to:c=l,from:u=d}=e;!i||n||r.default&&!zs.und(c)||(c=u),r.reverse&&([c,u]=[u,c]);const h=!Ms(u,d);h&&(s.from=u),u=Ol(u);const g=!Ms(c,l);g&&this._focus(c);const m=Od(r.to),{config:b}=s,{decay:p,velocity:f}=b;(n||i)&&(b.velocity=0),r.config&&!m&&function(e,r,t){t&&(Md(t={...t},r),r={...t,...r}),Md(e,r),Object.assign(e,r);for(const r in _d)null==e[r]&&(e[r]=_d[r]);let{frequency:n,damping:i}=e;const{mass:o}=e;zs.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(b,wd(r.config,o),r.config!==a.config?wd(a.config,o):void 0);let y=ad(this);if(!y||zs.und(c))return t(Rd(this,!0));const v=zs.und(r.reset)?i&&!r.default:!zs.und(u)&&$d(r.reset,o),x=v?u:this.get(),w=Bd(c),$=zs.num(w)||zs.arr(w)||Kl(w),F=!m&&(!$||$d(a.immediate||r.immediate,o));if(g){const e=pd(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=Bl(c),D=!1;if(!E){const e=v||!Xd(this)&&h;(g||e)&&(D=Ms(Bd(x),w),E=!D),(Ms(s.immediate,F)||F)&&Ms(b.decay,p)&&Ms(b.velocity,f)||(E=!0)}if(D&&Gd(this)&&(s.changed&&!v?E=!0:E||this._stop(l)),!m&&((E||Bl(l))&&(s.values=y.getPayload(),s.toValues=Bl(c)?null:C==ud?[1]:Is(w)),s.immediate!=F&&(s.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=s;js(sc,(e=>lc(this,r,e)));const n=Rd(this,tc(this,l));Ws(this._pendingCalls,n),this._pendingCalls.add(t),s.changed&&gs.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?wd(a.onRest,n):s.onStart?.(n,this)}))}v&&this._set(x),m?t(Nd(r.to,r,this._state,this)):E?this._start():Gd(this)&&!g?this._pendingCalls.add(t):t(Ld(x))}_focus(e){const r=this.animation;e!==r.to&&(_l(this)&&this._detach(),r.to=e,_l(this)&&this._attach())}_attach(){let e=0;const{to:r}=this.animation;Bl(r)&&(Tl(r,this),qd(r)&&(e=r.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Bl(e)&&Il(e,this)}_set(e,r=!0){const t=Ol(e);if(!zs.und(t)){const e=ad(this);if(!e||!Ms(t,e.getValue())){const n=pd(t);e&&e.constructor==n?e.setValue(t):sd(this,n.create(t)),e&&gs.batchedUpdates((()=>{this._onChange(t,r)}))}}return ad(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,dc(this,"onStart",Rd(this,tc(this,e.to)),this))}_onChange(e,r){r||(this._onStart(),wd(this.animation.onChange,e,this)),wd(this.defaultProps.onChange,e,this),super._onChange(e,r)}_start(){const e=this.animation;ad(this).reset(Ol(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Gd(this)||(Kd(this,!0),Jd(this)||this._resume())}_resume(){Os.skipAnimation?this.finish():Gs.start(this)}_stop(e,r){if(Gd(this)){Kd(this,!1);const t=this.animation;js(t.values,(e=>{e.done=!0})),t.toValues&&(t.onChange=t.onPause=t.onResume=void 0),zl(this,{type:"idle",parent:this});const n=r?Wd(this.get()):Rd(this.get(),tc(this,e??t.to));Ws(this._pendingCalls,n),t.changed&&(t.changed=!1,dc(this,"onRest",n,this))}}};function tc(e,r){const t=Bd(r);return Ms(Bd(e.get()),t)}function nc(e,r=e.loop,t=e.to){const n=wd(r);if(n){const i=!0!==n&&Ad(n),o=(i||e).reverse,a=!i||i.reset;return ic({...e,loop:r,default:!1,pause:void 0,to:!o||Od(t)?t:void 0,from:a?e.from:void 0,reset:a,...i})}}function ic(e){const{to:r,from:t}=e=Ad(e),n=new Set;return zs.obj(r)&&ac(r,n),zs.obj(t)&&ac(t,n),e.keys=n.size?Array.from(n):null,e}function oc(e){const r=ic(e);return zs.und(r.default)&&(r.default=Dd(r)),r}function ac(e,r){Ts(e,((e,t)=>null!=e&&r.add(t)))}var sc=["onStart","onRest","onChange","onPause","onResume"];function lc(e,r,t){e.animation[t]=r[t]!==Cd(r,t)?Fd(r[t],e.key):void 0}function dc(e,r,...t){e.animation[r]?.(...t),e.defaultProps[r]?.(...t)}var cc=["onStart","onChange","onRest"],uc=1,hc=class{constructor(e,r){this.id=uc++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),r&&(this._flush=r),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((r,t)=>e[t]=r.get())),e}set(e){for(const r in e){const t=e[r];zs.und(t)||this.springs[r].set(t)}}update(e){return e&&this.queue.push(ic(e)),this}start(e){let{queue:r}=this;return e?r=Is(e).map(ic):this.queue=[],this._flush?this._flush(this,r):(vc(this,r),gc(this,r))}stop(e,r){if(e!==!!e&&(r=e),r){const t=this.springs;js(Is(r),(r=>t[r].stop(!!e)))}else Hd(this._state,this._lastAsyncId),this.each((r=>r.stop(!!e)));return this}pause(e){if(zs.und(e))this.start({pause:!0});else{const r=this.springs;js(Is(e),(e=>r[e].pause()))}return this}resume(e){if(zs.und(e))this.start({pause:!1});else{const r=this.springs;js(Is(e),(e=>r[e].resume()))}return this}each(e){Ts(this.springs,e)}_onFrame(){const{onStart:e,onChange:r,onRest:t}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Ps(e,(([e,r])=>{r.value=this.get(),e(r,this,this._item)})));const o=!n&&this._started,a=i||o&&t.size?this.get():null;i&&r.size&&Ps(r,(([e,r])=>{r.value=a,e(r,this,this._item)})),o&&(this._started=!1,Ps(t,(([e,r])=>{r.value=a,e(r,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}gs.onFrame(this._onFrame)}};function gc(e,r){return Promise.all(r.map((r=>mc(e,r)))).then((r=>Pd(e,r)))}async function mc(e,r,t){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=r,d=zs.obj(r.default)&&r.default;a&&(r.loop=!1),!1===i&&(r.to=null),!1===o&&(r.from=null);const c=zs.arr(i)||zs.fun(i)?i:void 0;c?(r.to=void 0,r.onRest=void 0,d&&(d.onRest=void 0)):js(cc,(t=>{const n=r[t];if(zs.fun(n)){const i=e._events[t];r[t]=({finished:e,cancelled:r})=>{const t=i.get(n);t?(e||(t.finished=!1),r&&(t.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:r||!1})},d&&(d[t]=r[t])}}));const u=e._state;r.pause===!u.paused?(u.paused=r.pause,Ws(r.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(r.pause=!0);const h=(n||Object.keys(e.springs)).map((t=>e.springs[t].start(r))),g=!0===r.cancel||!0===Cd(r,"cancel");(c||g&&u.asyncId)&&h.push(Id(++e._lastAsyncId,{props:r,state:u,actions:{pause:_s,resume:_s,start(r,t){g?(Hd(u,e._lastAsyncId),t(Wd(e))):(r.onRest=s,t(Nd(c,r,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=Pd(e,await Promise.all(h));if(a&&m.finished&&(!t||!m.noop)){const t=nc(r,a,i);if(t)return vc(e,[t]),mc(e,t,!0)}return l&&gs.batchedUpdates((()=>l(m,e,e.item))),m}function bc(e,r){const t={...e.springs};return r&&js(Is(r),(e=>{zs.und(e.keys)&&(e=ic(e)),zs.obj(e.to)||(e={...e,to:void 0}),yc(t,e,(e=>fc(e)))})),pc(e,t),t}function pc(e,r){Ts(r,((r,t)=>{e.springs[t]||(e.springs[t]=r,Tl(r,e))}))}function fc(e,r){const t=new rc;return t.key=e,r&&Tl(t,r),t}function yc(e,r,t){r.keys&&js(r.keys,(n=>{(e[n]||(e[n]=t(n)))._prepareNode(r)}))}function vc(e,r){js(r,(r=>{yc(e.springs,r,(r=>fc(r,e)))}))}var xc=n.createContext({pause:!1,immediate:!1}),wc=()=>{const e=[],r=function(r){Jl(`${Zl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return js(e,((e,i)=>{if(zs.und(r))n.push(e.start());else{const o=t(r,e,i);o&&n.push(e.start(o))}})),n};r.current=e,r.add=function(r){e.includes(r)||e.push(r)},r.delete=function(r){const t=e.indexOf(r);~t&&e.splice(t,1)},r.pause=function(){return js(e,(e=>e.pause(...arguments))),this},r.resume=function(){return js(e,(e=>e.resume(...arguments))),this},r.set=function(r){js(e,((e,t)=>{const n=zs.fun(r)?r(t,e):r;n&&e.set(n)}))},r.start=function(r){const t=[];return js(e,((e,n)=>{if(zs.und(r))t.push(e.start());else{const i=this._getProps(r,e,n);i&&t.push(e.start(i))}})),t},r.stop=function(){return js(e,(e=>e.stop(...arguments))),this},r.update=function(r){return js(e,((e,t)=>e.update(this._getProps(r,e,t)))),this};const t=function(e,r,t){return zs.fun(e)?e(t,r):e};return r._getProps=t,r};function $c(e,r){const t=zs.fun(e),[[n],i]=function(e,r,t){const n=zs.fun(r)&&r;n&&!t&&(t=[]);const i=b((()=>n||3==arguments.length?wc():void 0),[]),a=o(0),s=rd(),l=b((()=>({ctrls:[],queue:[],flush(e,r){const t=bc(e,r),n=a.current>0&&!l.queue.length&&!Object.keys(t).some((r=>!e.springs[r]));return n?gc(e,r):new Promise((n=>{pc(e,t),l.queue.push((()=>{n(gc(e,r))})),s()}))}})),[]),d=o([...l.ctrls]),c=o([]),u=id(e)||0;function h(e,t){for(let i=e;i<t;i++){const e=d.current[i]||(d.current[i]=new hc(null,l.flush)),t=n?n(i,e):r[i];t&&(c.current[i]=oc(t))}}b((()=>{js(d.current.slice(e,u),(e=>{!function(e,r){e.ref?.delete(e),r?.delete(e)}(e,i),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),b((()=>{h(0,Math.min(u,e))}),t);const g=d.current.map(((e,r)=>bc(e,c.current[r]))),m=f(xc),p=id(m),y=m!==p&&function(e){for(const r in e)return!0;return!1}(m);ed((()=>{a.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],js(e,(e=>e()))),js(d.current,((e,r)=>{i?.add(e),y&&e.start({default:m});const t=c.current[r];t&&(function(e,r){r&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r)}(e,t.ref),e.ref?e.queue.push(t):e.start(t))}))})),td((()=>()=>{js(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return i?[v,i]:v}(1,t?e:[e],t?r||[]:r);return t||2==arguments.length?[n,i]:n}var Fc=class extends Ud{constructor(e,r){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=xl(...r);const t=this._get(),n=pd(t);sd(this,n.create(t))}advance(e){const r=this._get();Ms(r,this.get())||(ad(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&Ec(this._active)&&Dc(this)}_get(){const e=zs.arr(this.source)?this.source.map(Ol):Is(Ol(this.source));return this.calc(...e)}_start(){this.idle&&!Ec(this._active)&&(this.idle=!1,js(ld(this),(e=>{e.done=!1})),Os.skipAnimation?(gs.batchedUpdates((()=>this.advance())),Dc(this)):Gs.start(this))}_attach(){let e=1;js(Is(this.source),(r=>{Bl(r)&&Tl(r,this),qd(r)&&(r.idle||this._active.add(r),e=Math.max(e,r.priority+1))})),this.priority=e,this._start()}_detach(){js(Is(this.source),(e=>{Bl(e)&&Il(e,this)})),this._active.clear(),Dc(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Is(this.source).reduce(((e,r)=>Math.max(e,(qd(r)?r.priority:0)+1)),0))}};function Cc(e){return!1!==e.idle}function Ec(e){return!e.size||Array.from(e).every(Cc)}function Dc(e){e.idle||(e.idle=!0,js(ld(e),(e=>{e.done=!0})),zl(e,{type:"idle",parent:e}))}Os.assign({createStringInterpolator:Ul,to:(e,r)=>new Fc(e,r)});var kc=/^--/;function Sc(e,r){return null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||kc.test(e)||Bc.hasOwnProperty(e)&&Bc[e]?(""+r).trim():r+"px"}var Ac={};var Bc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","Ms","Moz","O"];Bc=Object.keys(Bc).reduce(((e,r)=>(Oc.forEach((t=>e[((e,r)=>e+r.charAt(0).toUpperCase()+r.substring(1))(t,r)]=e[r])),e)),Bc);var _c=/^(matrix|translate|scale|rotate|skew)/,zc=/^(translate)/,Mc=/^(rotate|skew)/,jc=(e,r)=>zs.num(e)&&0!==e?e+r:e,Tc=(e,r)=>zs.arr(e)?e.every((e=>Tc(e,r))):zs.num(e)?e===r:parseFloat(e)===r,Ic=class extends gd{constructor({x:e,y:r,z:t,...n}){const i=[],o=[];(e||r||t)&&(i.push([e||0,r||0,t||0]),o.push((e=>[`translate3d(${e.map((e=>jc(e,"px"))).join(",")})`,Tc(e,0)]))),Ts(n,((e,r)=>{if("transform"===r)i.push([e||""]),o.push((e=>[e,""===e]));else if(_c.test(r)){if(delete n[r],zs.und(e))return;const t=zc.test(r)?"px":Mc.test(r)?"deg":"";i.push(Is(e)),o.push("rotate3d"===r?([e,r,n,i])=>[`rotate3d(${e},${r},${n},${jc(i,t)})`,Tc(i,0)]:e=>[`${r}(${e.map((e=>jc(e,t))).join(",")})`,Tc(e,r.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Pc(i,o)),super(n)}},Pc=class extends Ml{constructor(e,r){super(),this.inputs=e,this.transforms=r,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",r=!0;return js(this.inputs,((t,n)=>{const i=Ol(t[0]),[o,a]=this.transforms[n](zs.arr(i)?i:t.map(Ol));e+=" "+o,r=r&&a})),r?"none":e}observerAdded(e){1==e&&js(this.inputs,(e=>js(e,(e=>Bl(e)&&Tl(e,this)))))}observerRemoved(e){0==e&&js(this.inputs,(e=>js(e,(e=>Bl(e)&&Il(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),zl(this,e)}};Os.assign({batchedUpdates:D,createStringInterpolator:Ul,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Lc=((e,{applyAnimatedValues:r=()=>!1,createAnimatedStyle:t=e=>new gd(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:r,createAnimatedStyle:t,getComponentProps:n},o=e=>{const r=xd(e)||"Anonymous";return(e=zs.str(e)?o[e]||(o[e]=fd(e,i)):e[vd]||(e[vd]=fd(e,i))).displayName=`Animated(${r})`,e};return Ts(e,((r,t)=>{zs.arr(e)&&(t=xd(r)),o[t]=o(r)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,r){if(!e.nodeType||!e.setAttribute)return!1;const t="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l,...d}=r,c=Object.values(d),u=Object.keys(d).map((r=>t||e.hasAttribute(r)?r:Ac[r]||(Ac[r]=r.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const r in i)if(i.hasOwnProperty(r)){const t=Sc(r,i[r]);kc.test(r)?e.style.setProperty(r,t):e.style[r]=t}u.forEach(((r,t)=>{e.setAttribute(r,c[t])})),void 0!==n&&(e.className=n),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Ic(e),getComponentProps:({scrollTop:e,scrollLeft:r,...t})=>t}),Rc=Lc.animated;var Wc=pe((function(e){return null==e}));const Nc=v.div`
    border-radius: ${yi.md};
    background: ${gi.bg};
    padding: ${fi["spacing-16"]} ${fi["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?x`
                  border: ${pi["width-010"]} ${pi.solid}
                      ${gi.border};
              `:x`
                  box-shadow: ${vi["md-subtle"]};
              `}}
`,Hc=v.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${fi["spacing-24"]};
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
                background-color: ${gi["bg-hover-neutral"]};
            `}
    }
`,Yc=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=me(e,["children","focusHighlight","focusOutline","type"]);return r(Hc,Object.assign({ref:t,$outline:o,$highlight:i,type:a},s,{children:n}))})),Vc=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${gi.bg};
    box-shadow: ${vi["lg-strong"]};
    border-radius: ${yi.lg};
    overflow: hidden;

    ${wi.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,qc=v(Yc)`
    position: absolute;
    top: var(--close-button-top-inset, ${fi["spacing-16"]});
    right: var(--close-button-right-inset, ${fi["spacing-16"]});
    padding: 0;
    color: ${gi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${wi.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${fi["spacing-20"]});
    }
`,Qc=v.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,Uc=v((e=>{var{children:t}=e,n=me(e,["children"]);const i=n["data-testid"]||"card";return r(Nc,Object.assign({},n,{"data-testid":i,children:"string"==typeof t?r(Ma.BodyBL,{children:t}):t}))}))`
    color: ${gi.text};
    ${ka({textSize:"body-md"})}

    ${wi.MaxWidth.sm} {
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
        background: ${gi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${yi.full};
        background-clip: padding-box;
    }
`;v((t=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=t,s=me(t,["id","children","onClose","showCloseButton"]);return e(Vc,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&r(qc,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:r(Y,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,v.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${gi.text};
    ${ka({textSize:"body-md"})}
`;const Zc=v.div`
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
`,Xc=v.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?gi["overlay-subtle"]:gi["overlay-strong"]};
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
`;var Gc;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Gc||(Gc={}));const Jc=({show:e=!1,rootId:t,onOverlayClick:n,children:s,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:h=!1,zIndex:g,id:m})=>{const[b,p]=a(null),[f,y]=a(),[v]=a((()=>Fa.generate())),x=X(),w=o(),$=o(null),F=s&&i.cloneElement(s,{ref:$}),E=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root",D=null!=g?g:f?99999:99998;(e=>{const r=U();u((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Gc.Change,t)}),[r,e]),u((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Gc.Change,t)};return null==r||r.events.on(Gc.Ready,t),()=>null==r?void 0:r.events.off(Gc.Ready,t)}),[r,e])})(D),u((()=>(O(),p(A()),()=>{j(),z().length<1&&(S()&&(T("remove"),P()),_("remove"))})),[]),u((()=>{if(e){const e=B();k(e),M(),S()&&1===z().length&&(I(),T("add"));const r=setTimeout((()=>{_("add")}),200);return()=>clearTimeout(r)}{j(),S()&&z().length<1&&(T("remove"),P());const e=setTimeout((()=>{z().length<1&&_("remove")}),200);return()=>clearTimeout(e)}}),[e]);const k=e=>{w.current=e,y(e)},S=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),A=()=>document&&t?document.getElementById(t):document?document.body:null,B=()=>z().length>0,O=()=>{if(!document.getElementById(eu)){const e=document.createElement("style");e.id=eu;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${ru} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ru}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${tu} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${nu}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},_=e=>{const r=document.body.classList.contains(ru);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(ru):document.body.classList.add(ru)},z=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},j=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},T=e=>{if(!S())return;const r=document.body.classList.contains(tu);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(tu):document.body.classList.add(tu)},I=()=>{const e=document.body.style,r=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(nu,r)},P=()=>{if(!S())return;const e=document.body.style.getPropertyValue(nu);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},L=e=>{var r;const t=null===(r=$.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&h&&(e.preventDefault(),n())};return b?C.createPortal(r(Zc,{id:E,"data-testid":E,$show:e,$zIndex:D,children:s&&r(G,{id:x,children:r(Xc,{"data-testid":"overlay-wrapper",$show:e,$stacked:f,$backgroundBlur:d,$disableTransition:c,onClick:L,children:F})})}),b):null},Kc=e=>r(Z,{children:r(Jc,Object.assign({},e))}),eu="lifesg-ds-overlay-stylesheet",ru="lifesg-ds-overlay-open",tu="lifesg-ds-overlay-scroll-lock",nu="--lifesg-ds-overlay-scroll-y",iu=y({onClose:()=>{}}),ou=v.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${wi.MaxWidth.sm} {
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
            transition: all ${bi["duration-250"]} ${bi["ease-entrance"]};
            transition-delay: ${bi["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${bi["duration-250"]} ${bi["ease-exit"]};
        }
    `}
`,au=v.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,su=v.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,lu=v.div`
    width: 40rem;
    margin: ${fi["spacing-64"]} auto;
    background: ${gi.bg};
    box-shadow: ${vi["xs-strong"]};
    border-radius: ${yi.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${xi["xxl-margin"]}px * 2);

    ${wi.MaxWidth.xl} {
        max-width: calc(100% - ${xi["xl-margin"]}px * 2);
    }

    ${wi.MaxWidth.lg} {
        max-width: calc(100% - ${xi["lg-margin"]}px * 2);
    }

    ${wi.MaxWidth.md} {
        max-width: calc(100% - ${xi["md-margin"]}px * 2);
    }

    ${wi.MaxWidth.sm} {
        max-width: calc(100% - ${xi["sm-margin"]}px * 2);
    }

    ${wi.MaxWidth.xs} {
        max-width: calc(100% - ${xi["xs-margin"]}px * 2);
    }

    ${wi.MaxWidth.xxs} {
        max-width: calc(100% - ${xi["xxs-margin"]}px * 2);
    }
`,du=v.div`
    margin-right: ${fi["spacing-16"]};
    margin-left: auto;
    margin-top: ${fi["spacing-16"]};
    margin-bottom: ${fi["spacing-16"]};
`,cu=v(Yc)`
    padding: 0;
    color: ${gi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,uu=v.div`
    margin-right: ${fi["spacing-64"]};
    margin-left: ${fi["spacing-64"]};

    ${wi.MaxWidth.sm} {
        margin-right: ${fi["spacing-20"]};
        margin-left: ${fi["spacing-20"]};
    }
`,hu=v.div`
    margin-right: ${fi["spacing-64"]};
    margin-left: ${fi["spacing-64"]};

    ${wi.MaxWidth.sm} {
        margin-right: ${fi["spacing-20"]};
        margin-left: ${fi["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${fi["spacing-32"]};
    row-gap: ${fi["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${wi.MaxWidth.md} {
        flex-direction: column;
    }
`,gu=v.div`
    :where(& > ${uu}:last-child) {
        margin-bottom: ${fi["spacing-64"]};
    }

    :where(& > ${hu}:not(:first-child)) {
        margin-top: ${fi["spacing-32"]};
    }

    :where(& > ${hu}:last-child) {
        margin-bottom: ${fi["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?x`
                  :where(& > ${uu}:first-child),
                  :where(& > ${hu}:first-child) {
                      margin-top: 0;
                  }
              `:x`
                  :where(& > ${uu}:first-child),
                  :where(& > ${hu}:first-child) {
                      margin-top: ${fi["spacing-64"]};
                  }
              `}
`,mu=e=>{var{"data-testid":t="modal-close-button"}=e,n=me(e,["data-testid"]);const{onClose:i}=f(iu);return r(du,Object.assign({"data-testid":t},n,{children:r(cu,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:r(Y,{"aria-hidden":!0})})}))};mu.displayName="ModalV2.CloseButton";const bu=e=>{var{"data-testid":t="modal-content",children:n}=e,i=me(e,["data-testid","children"]);return r(uu,Object.assign({"data-testid":t},i,{children:n}))};bu.displayName="ModalV2.Content";const pu=r=>{var{"data-testid":t="modal-footer",primaryButton:n,secondaryButton:i}=r,o=me(r,["data-testid","primaryButton","secondaryButton"]);return e(hu,Object.assign({"data-testid":t},o,{children:[n,i]}))};pu.displayName="ModalV2.Footer";const fu=r=>{var{id:t,"data-testid":n="modal-card",children:o}=r,a=me(r,["id","data-testid","children"]);const s=e=>i.Children.toArray(o).find((r=>((e,r)=>$(e.type)?e.type.target===r:e.type===r)(r,e))),l=s(mu),d=s(bu),c=s(pu),u=!!l;return e(lu,Object.assign({id:t,"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[e(gu,{$hasCloseButton:u,children:[d,c]}),u&&l]}))};fu.displayName="ModalV2.Card";const yu=Object.assign((e=>{var{id:t,show:n,onClose:i,animationFrom:o="bottom",children:s,enableOverlayClick:l=!0,rootComponentId:d,zIndex:c,onOverlayClick:h,dismissKeyboardOnShow:g=!0,"data-testid":b="modal","aria-label":p,"aria-labelledby":f,"aria-describedby":y,disableInitialFocus:v=!1}=e,x=me(e,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid","aria-label","aria-labelledby","aria-describedby","disableInitialFocus"]);const{verticalHeight:w,offsetTop:$}=(()=>{const[e,r]=a(),[t,n]=a(),i=m((()=>{const e=.01*window.innerHeight;r(e)}),[]),o=m((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;r(e),n(window.visualViewport.offsetTop)}}),[]);return u((()=>window.visualViewport?(o(),window.visualViewport.addEventListener("resize",o),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",o)}):(i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)})),[]),{verticalHeight:e,offsetTop:t}})(),{refs:F,context:C}=J({open:n,onOpenChange:e=>{e||null==i||i()}}),{isMounted:E,status:D}=K(C,{duration:300}),k=ee(C,{outsidePress:!1,enabled:!!i}),{getFloatingProps:S}=re([k]);return u((()=>{var e,r;n&&g&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[g,n]),r(Kc,{"data-testid":`${b}-overlay`,show:E,enableOverlayClick:l,onOverlayClick:h,id:t,rootId:d,zIndex:c,children:r(ou,Object.assign({$show:E,$animationFrom:o,"data-testid":b,$verticalHeight:w,$offsetTop:$,"data-status":D},x,{children:r(iu.Provider,{value:{onClose:i},children:E&&r(te,{context:C,initialFocus:v?-1:F.floating,children:r(au,{children:r(su,Object.assign({ref:F.setFloating},S(),{role:"dialog","aria-label":p,"aria-labelledby":f,"aria-describedby":y,children:s}))})})})}))})}),{Card:fu,CloseButton:mu,Content:bu,Footer:pu}),vu=n=>{var{children:i,visible:o,onMobileClose:a,maxHeight:s,overflow:l,ariaLabel:d,id:c}=n,u=me(n,["children","visible","onMobileClose","maxHeight","overflow","ariaLabel","id"]);const h=u["data-testid"]||"popover",g=f(F),m=xi["sm-max"]({theme:g}),b=ve.useMediaQuery({maxWidth:m}),p=()=>{a&&a()},y=()=>"string"==typeof i?r(Ma.BodyMD,{children:i}):i;return e(t,{children:[o&&r(Qc,Object.assign({tabIndex:0,"data-testid":h},u,{id:c,role:"dialog","aria-label":null!=d?d:"More information",children:r(Uc,{$maxHeight:s,$overflow:l,children:y()})})),b&&r(yu,{show:null!=o&&o,onOverlayClick:p,onClose:p,id:c,role:"dialog","aria-label":null!=d?d:"More information",children:e(yu.Card,{children:[r(yu.Content,{children:y()}),r(yu.CloseButton,{})]})})]})},xu=v.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,wu=n=>{var i,s,{children:l,popoverContent:d,trigger:c="click",position:h="top",zIndex:g,rootNode:m,customOffset:b,delay:p,onPopoverAppear:y,onPopoverDismiss:v,popoverAriaLabel:x,enableFlip:w=!0,enableResize:$=!1,overflow:C="auto",triggerOnFocus:E=!1,isModal:D=!0}=n,k=me(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","popoverAriaLabel","enableFlip","enableResize","overflow","triggerOnFocus","isModal"]);const[S,A]=a(!1),B=o(null),O=o(null),_=f(F),z=xi["sm-max"]({theme:_}),M=ve.useMediaQuery({maxWidth:z}),[j,T]=a(0),I=`${o(Fa.generate()).current}-popover`,{refs:P,floatingStyles:L,context:R}=J({open:S,placement:h,whileElementsMounted:ne,middleware:[ie(null!=b?b:16),w&&oe(),ae({limiter:se()}),$&&le({apply({availableHeight:e}){T(e)}})],onOpenChange:e=>{A(e),S!==e&&G(e)}}),W=(()=>{const[e,r]=a(void 0),t=U();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Gc.Change,e),t.events.emit(Gc.Ready),()=>t.events.off(Gc.Change,e)}),[t]),e})(),N="hover"===(M?"click":c),H=de(R,{ignoreMouse:N}),Y=ee(R),V=ce(R,{enabled:N,delay:{open:null!==(i=null==p?void 0:p.open)&&void 0!==i?i:0,close:null!==(s=null==p?void 0:p.close)&&void 0!==s?s:500}}),q=ue(R,{enabled:E}),{getReferenceProps:Q,getFloatingProps:Z}=re([H,Y,V,q]),X=()=>{A(!1),G(!1)},G=e=>{e&&y&&y(),!e&&v&&v()};return e(t,{children:[r(xu,Object.assign({ref:e=>{B.current=e,P.setReference(e)}},Q({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),k,{children:l})),S&&r(he,{root:m,children:r(te,Object.assign({context:R},!D&&{initialFocus:-1,returnFocus:!1,modal:!1},{children:r("div",Object.assign({ref:e=>{O.current=e,P.setFloating(e)},onBlur:e=>{var r;const t=null!==(r=e.relatedTarget)&&void 0!==r?r:document.activeElement;t&&(e=>{var r;if(!e)return!1;if(e instanceof HTMLElement&&e.hasAttribute("data-floating-ui-focus-guard"))return!0;const t=B.current,n=null===(r=O.current)||void 0===r?void 0:r.parentElement;return!!t&&t.contains(e)||!!n&&n.contains(e)})(t)||(A(!1),G(!1))},style:Object.assign(Object.assign({},L),{outline:"none",zIndex:null!=g?g:W})},Z(),{children:"function"==typeof d?d($?{maxHeight:j,overflow:C}:{}):r(vu,{visible:!0,onMobileClose:X,maxHeight:$?j:void 0,overflow:$?C:void 0,ariaLabel:x,id:I,children:d})}))}))})]})},$u=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Fu=v.span`
    color: ${gi["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>$u(e)}

    &:hover,
    &:focus-visible {
        color: ${gi["text-hover"]};
        ${({$hoverStyle:e})=>$u(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Cu=v.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Eu=t=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=t,l=me(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return r(wu,Object.assign({},l,{children:e(Fu,{"aria-label":null!=n?n:d?void 0:"More info",role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,children:[i,o&&r(Cu,{$standalone:!d,children:o})]})}))},Du=v.div`
    padding-left: ${fi["spacing-4"]};
    display: inline;
`,ku=({addon:e,rootNode:t})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=e;return r(Du,{children:r(Eu,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:t,zIndex:s,icon:null!=o?o:r(L,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Su=v.div`
    background-color: ${e=>e.$collapsible?gi["bg-strong"]:gi.bg};
    ${e=>e.$isMobile&&x`
            background-color: ${gi["bg-strong"]};
        `}
`,Au=v.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${gi.border};

    ${e=>e.$isMobile&&x`
            display: ${e.$showMobileDivider?"block":"none"};
            margin: 0 ${fi["spacing-16"]};
        `}
`,Bu=v.div`
    display: flex;
    align-items: center;

    background-color: ${gi.bg};

    ${e=>e.$isMobile&&x`
            background-color: transparent;
        `}
`,Ou=v(Yc)`
    margin: 0 0 0 auto;

    color: ${gi.icon};
    &:hover {
        color: ${gi["icon-hover"]};
    }
`,_u=v(M)`
    height: ${mi.Spec["body-size-baseline"]};
    width: ${mi.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${bi["duration-350"]} ${bi["ease-standard"]};
`,zu=v.h3`
    ${mi["heading-xs-semibold"]}
    color: ${gi.text};

    margin: ${fi["spacing-24"]} 0 ${fi["spacing-24"]}
        ${fi["spacing-20"]};

    ${e=>e.$isMobile&&x`
            ${mi["body-md-semibold"]}
            color: ${gi["text-subtle"]};

            margin: ${fi["spacing-24"]} ${fi["spacing-20"]} 0
                ${fi["spacing-20"]};
        `}
`,Mu=Rc(v.div`
    overflow: hidden;
`),ju=v.div`
    padding: ${fi["spacing-24"]} ${fi["spacing-20"]};
`,Tu=Rc(v.div`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`),Iu=v(Qo.Small)`
    height: fit-content;
    padding: 0;
    margin: ${fi["spacing-16"]} 0 0 0;
`,Pu=t=>{var n,{collapsible:i=!0,initialExpanded:s=!1,expanded:l,onExpandChange:d,minimisable:c=!1,minimisedHeight:h,showDivider:g=!0,showMobileDivider:m=!0,title:b,addon:p,children:y}=t,v=me(t,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:x,rootNode:w}=f(Bo),$="mobile"===x,[F,C]=a(j()),[E,D]=a(c),k=!$&&i,S=Ao(),A=Ao(),B=$c({height:F?S.height:0}),O=E?null!=h?h:Math.min(.5*(null!==(n=A.height)&&void 0!==n?n:0),216):A.height,_=o(Fa.generate()),z=`${_.current}-content`,M=`${_.current}-title`;u((()=>{C(j())}),[i,l]),u((()=>{D(c)}),[c]);function j(){return!!$||(Wc(l)?!i||s:l)}return e(Su,{$isMobile:$,$collapsible:k,"aria-labelledby":M,children:[r(Au,{$isMobile:$,$showDivider:g,$showMobileDivider:m}),(b||k)&&e(Bu,{$isMobile:$,children:[b&&e(zu,{id:M,"data-testid":"filter-item-title",$isMobile:$,children:[b," ",p&&("popover"===(null==p?void 0:p.type)?r(ku,{addon:p,rootNode:$?w:void 0}):null)]}),k&&e(Ou,{"data-testid":"expand-collapse-button",focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!F;Wc(l)&&C(e),d&&d(e)},"aria-expanded":F,"aria-disabled":!k,"aria-controls":z,children:[b&&r(Ea,{children:b}),r(_u,{$expanded:F,"aria-hidden":!0})]})]}),r(Mu,{id:z,"data-testid":"expandable-container","data-expanded":F,style:B,inert:Da(!F),children:r("div",{ref:S.ref,children:e(ju,Object.assign({},v,{children:[r(Tu,{"data-testid":"minimisable-container",$height:O,$minimisable:c,children:r("div",{ref:A.ref,children:r("div",{"data-id":"content-container",children:"function"==typeof y?y(x,{minimised:E}):y})})}),c&&e(Iu,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{D(!E)},children:[r(Ea,{children:`view ${E?"more":"less"} in ${b}`}),e("span",{"aria-hidden":!0,children:["View ",E?"more":"less"]})]})]}))})})]})};Pu.displayName="Filter.Item";const Lu=v(Pu)`
    padding: 0 0 ${fi["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${fi["spacing-8"]} ${fi["spacing-8"]} 0;

        ${wi.MaxWidth.lg} {
            padding: ${fi["spacing-16"]} ${fi["spacing-20"]}
                ${fi["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${fi["spacing-8"]} ${fi["spacing-20"]} 0;
    }
`,Ru=v.div`
    display: flex;
    flex-direction: column;

    ${wi.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${e=>e.$isMobileToggleMode?fi["spacing-16"]:0};
    }
`,Wu=v.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${fi["spacing-8"]} ${fi["spacing-12"]};
    ${e=>e.$level&&x`
            padding-left: calc(
                ${fi["spacing-12"]} + ${e.$level} *
                    ${fi["spacing-32"]}
            );
        `}

    cursor: pointer;
    ${mi["body-md-regular"]}
    color: ${gi.text};
    ${e=>e.$selected&&x`
            color: ${gi["text-selected"]};
        `}
    ${wi.MaxWidth.lg} {
        padding: ${fi["spacing-8"]};
        ${e=>e.$level&&x`
                padding-left: calc(
                    ${fi["spacing-8"]} + ${e.$level} *
                        ${fi["spacing-32"]}
                );
            `}
    }
`,Nu=v((t=>{var{className:n,checked:i,disabled:a,indeterminate:s,displaySize:l="default",id:d}=t,c=me(t,["className","checked","disabled","indeterminate","displaySize","id"]);const h=o(null);u((()=>{h.current&&(h.current.indeterminate=null!=s&&s)}),[s]);return e(ea,{className:n,"data-testid":"checkbox",$displaySize:l,children:[r(ra,Object.assign({id:d,"data-testid":"checkbox-input",type:"checkbox",checked:i,ref:h,tabIndex:a?-1:0,disabled:a,"aria-checked":s?"mixed":i},c)),s?r(Ko,{$disabled:a,"data-testid":"indeterminate","aria-hidden":!0}):i?r(Jo,{$disabled:a,"data-testid":"checkmark","aria-hidden":!0}):a?r(Go,{"data-testid":"empty-disabled-checkbox","aria-hidden":!0}):r(Xo,{$disabled:a,"data-testid":"empty-checkbox","aria-hidden":!0})]})}))`
    flex-shrink: 0;
    margin-right: ${fi["spacing-8"]};
`,Hu=v((n=>{var{type:i="checkbox",indicator:s,checked:l,styleType:d="default",children:c,childrenMaxLines:h,subLabel:g,disabled:m,error:p,name:f,id:y,className:v,compositeSection:x,removable:w,onRemove:$,"data-testid":F,onChange:C,useContentWidth:E,"aria-describedby":D}=n,k=me(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:S=!0,errors:A,children:B,initialExpanded:O}=x||{},[_,z]=a(l),[T,I]=a(!!O),P=b((()=>{const e=Array.isArray(A)&&(null==A?void 0:A.length)>0,r=!Array.isArray(A)&&!!A;return e||r}),[A]),[L]=a(Fa.generate()),R=y?`${y}`:`tg-${L}`,W=o(null);u((()=>{z(l)}),[l]),u((()=>{_&&I(null==O||O)}),[_]);const N=e=>{if(!m){if(C)return void C(e);switch(i){case"checkbox":z((e=>!e));break;case"radio":case"yes":case"no":_||z(!0)}}},H=()=>{m||I(!T)},Y=()=>{m||!$||$()},V=()=>{var e;null===(e=null==W?void 0:W.current)||void 0===e||e.click()},q=e=>{e.stopPropagation()},Q=()=>{let e;switch(i){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=i}return r(us,{type:e,active:_,disabled:m,$selected:_,$disabled:m})},U=()=>{if(!g)return null;let e;return e="function"==typeof g?g():g,r(rs,{"data-id":"toggle-sublabel",id:`${R}-sublabel`,"aria-hidden":!0,children:e})},Z=n=>e(t,{children:[r(ds,{weight:"semibold",$disabled:m,children:"Error"}),r(cs,{$disabled:m,children:null==n?void 0:n.map(((e,t)=>r("li",{id:`${R}-error-list-item-${t}`,children:r(ds,{weight:"semibold",$disabled:m,children:e})},t)))})]});return e(Xa,{$selected:_,$disabled:m,className:v,$styleType:d,$error:p,$indicator:s,$useContentWidth:E,id:y,"data-testid":F,children:[(()=>{const t=["string"==typeof g?`${R}-sublabel`:null,D].filter(Boolean).join(" ")||void 0;return e(ts,{id:`${R}-header-container`,$disabled:m,$error:p,$selected:_,$indicator:s,$styleType:d,children:[r(ns,{$addPadding:w,children:e(Ja,{id:`${R}-input-container`,onClick:V,children:[r(Ga,Object.assign({ref:W,name:f,id:`${R}-input`,type:"checkbox"===i?"checkbox":"radio","data-testid":"toggle-input",disabled:m,onChange:N,onClick:q,checked:_,"aria-describedby":t},k)),s&&Q(),e(Ka,{$selected:_,$disabled:m,children:[r(es,{htmlFor:`${R}-input`,"data-testid":"toggle-label",id:`${R}-label`,$maxLines:h,$selected:_,children:c}),g&&U()]})]})}),w&&r(is,{type:"button",$disabled:m,onClick:Y,id:`${R}-remove-button`,children:"Remove"})]})})(),B&&e("div",{children:[(!S||T)&&r(ls,{"data-id":"toggle-composite-children",$isFinalItem:!S,$disabled:m,children:B}),S&&!T&&P&&r(as,{$disabled:m,onClick:H,id:`${R}-error-alert`,children:r(ss,{type:m?"description":"error",className:v,showIcon:!0,children:Array.isArray(A)?Z(A):A})}),S&&e(os,{$paddingTopRequired:!T&&!P,disabled:m,onClick:H,"data-testid":T?"collapse-button":"expand-button",children:[T?"Show less":"Show more",r(T?j:M,{"aria-hidden":!0})]})]})]})}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
    min-width: 5rem;
`,Yu=v(Qo.Small)`
    height: fit-content;
    padding: 0;
    margin: ${fi["spacing-16"]} 0 ${fi["spacing-8"]}
        ${fi["spacing-12"]};

    ${wi.MaxWidth.lg} {
        margin: 0 0 ${fi["spacing-16"]} 0;
    }
`,Vu=n=>{var{selectedOptions:i,options:s,showAsCheckboxInMobile:l=!1,minimisableOptions:d=!0,onSelect:c,labelExtractor:h,valueExtractor:g,useToggleContentWidth:p}=n,y=me(n,["selectedOptions","options","showAsCheckboxInMobile","minimisableOptions","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:v}=f(Bo),[x,w]=a(i||[]),[$,F]=a(),[C,E]=a(s.length),D=o(null),k=o(null),S=b((()=>((e,r)=>e.some((e=>{const t=r?r(e):e.options;return t&&t.length>0})))(s,(e=>e.options))),[s]),A="mobile"===v&&!l&&!S,B=b((()=>_o(s,[],g||(e=>e.value),h||(e=>e.label))),[s,g,h]),O=B.length,_=e=>()=>{const r=B.find((r=>r.originalItem===e));if(r)if(r.hasChildren){const e=((e,r)=>{const t=Oo(r),n=[],i=e.findIndex((e=>Oo(e.keyPath)===t));if(-1===i)return n;for(let t=i+1;t<e.length;t++){const i=e[t];if(!zo(r,i.keyPath))break;i.hasChildren||n.push(i.originalItem)}return n})(B,r.keyPath),t=e.filter((e=>x.some((r=>P(r)===P(e)))));let n=[...x];t.length===e.length?n=n.filter((r=>!e.some((e=>P(e)===P(r))))):e.forEach((e=>{n.some((r=>P(r)===P(e)))||n.push(e)})),w(n),null==c||c(n)}else{const r=[...x],t=x.findIndex((r=>P(r)===P(e)));t>=0?r.splice(t,1):r.push(e),w(r),null==c||c(r)}},z=()=>{if(S)if(x.length>0)w([]),null==c||c([]);else{const e=B.filter((e=>!e.hasChildren)).map((e=>e.originalItem));w(e),null==c||c(e)}else{const e=x.length?[]:s;w(e),null==c||c(e)}},M=e=>r=>{!S||" "!==r.key&&"Enter"!==r.key||(r.preventDefault(),_(e)())},j=e=>()=>{S||_(e)()},T=e=>{if(!e.hasChildren)return{checked:x.some((r=>P(r)===P(e.originalItem))),indeterminate:!1};const r=((e,r)=>e.filter((e=>zo(r,e.keyPath))).map((e=>e.keyPath)))(B,e.keyPath).map((e=>B.find((r=>Oo(r.keyPath)===Oo(e))))).filter((e=>e&&!e.hasChildren)).map((e=>e.originalItem)),t=r.filter((e=>x.some((r=>P(r)===P(e)))));return{checked:t.length===r.length&&r.length>0,indeterminate:t.length>0&&t.length<r.length}},I=e=>{var r;return h?h(e):null!==(r=e.label)&&void 0!==r?r:null==e?void 0:e.toString()},P=e=>{var r;return g?g(e):null!==(r=e.value)&&void 0!==r?r:null==e?void 0:e.toString()},L=()=>{const e=k.current?k.current.offsetTop+k.current.clientHeight:void 0;F(e)},R=m((()=>{if(!D.current)return void F(void 0);const e=Array.from(D.current.children);let r=0,t=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(t++,n=o,t>2))break;r=i}E(r),F(t>2?n-8:void 0)}),[]);u((()=>{i!==x&&w(i||[])}),[i]),u((()=>{A?R():L()}),[s]),Ao({handleWidth:!0,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:D,onResize:A?R:L});const W=(e,t)=>{const{checked:n,indeterminate:i}=T(t);return r(Nu,{displaySize:"small",checked:n,indeterminate:i,onChange:j(e),tabIndex:S?-1:void 0,"aria-hidden":S?"true":void 0})},N=()=>{var e;return O<3?null:r(Yu,{styleType:"link",type:"button",onClick:z,"aria-label":x.length?"Clear all selections":`Select all in ${(null===(e=D.current)||void 0===e?void 0:e.ariaLabel)||"this group"}`,children:x.length?"Clear all":"Select all"})};return r(Lu,Object.assign({minimisable:!!d&&(A?!!$:O>5),minimisedHeight:$},y,{children:(n,{minimised:i})=>e(t,{children:[N(),r(Ru,{role:S?"tree":"group","aria-label":y.title,"aria-multiselectable":!0,ref:D,$isMobileToggleMode:A,children:B.map(((t,n)=>A?((e,t,n)=>{const i=e.originalItem,o=I(i),a=P(i),s=!!x.find((e=>P(e)===a));return r(Hu,{type:"checkbox",checked:s,$visible:!n||!!$&&t<=C,onChange:_(i),useContentWidth:p,children:o},a)})(t,n,i):((r,t,n)=>{const i=r.originalItem,o=I(i),{checked:a,indeterminate:s}=T(r),l=a||s,d=!n||t<5,c=S?{"aria-checked":s?"mixed":a,"aria-selected":!!a,"aria-level":r.level+1,"aria-posinset":r.indexInParent+1,"aria-setsize":r.parentSetSize}:{};return e(Wu,Object.assign({as:S?"div":"label",role:S?"treeitem":void 0},c,{onClick:S?_(i):void 0,onKeyDown:M(i),tabIndex:S?0:void 0,$visible:d,$selected:l,$level:r.level,ref:4===t?k:void 0,children:[W(i,r),o]}),Oo(r.keyPath))})(t,n,i)))})]})}))};Vu.displayName="Filter.Checkbox";const qu=v.div`
    background-color: ${gi.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Qu=v.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,Uu=v(Yc)`
    padding: ${fi["spacing-24"]} ${fi["spacing-20"]};
    margin-right: auto;
    color: ${gi.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${gi["icon-hover"]};
    }
`,Zu=v.div`
    padding: ${fi["spacing-24"]} ${fi["spacing-20"]};
    background-color: ${gi.bg};
    border-top: ${pi["width-010"]} ${pi.solid} ${gi.border};
    ${e=>e.$insetBottom&&`padding-bottom: ${e.$insetBottom}px;`}
`,Xu=v(Qo.Default)`
    width: 100%;
`,Gu=({onDismiss:t,onDone:n,children:i})=>e(qu,{children:[r(Uu,{onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:r(ge,{})}),r(Qu,{children:i}),r(Zu,{children:r(Xu,{onClick:n,type:"button",children:"Done"})})]});Gu.displayName="Filter.Page";const Ju=v(Wo)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Ku=(t,n)=>{const{children:o,disabled:a=!1,styleType:s="default",danger:l=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:g}=t,m=me(t,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),b={$buttonIconPosition:c,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Ju,Object.assign({ref:n,"data-testid":m["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:g},b,m,{children:[u?r(Ro,{}):d?i.cloneElement(d,{"aria-hidden":!0}):null,r("span",{children:o})]}))};Ku.displayName="ButtonWithIcon.Default";const eh=(t,n)=>{const{children:o,disabled:a=!1,styleType:s="default",danger:l=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:g}=t,m=me(t,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),b={$buttonIconPosition:c,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Ju,Object.assign({ref:n,"data-testid":m["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:g},b,m,{children:[u?r(Ro,{}):d?i.cloneElement(d,{"aria-hidden":!0}):null,r("span",{children:o})]}))};eh.displayName="ButtonWithIcon.Small";const rh={Default:i.forwardRef(Ku),Small:i.forwardRef(eh)},th=v.div`
    background-color: ${gi["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,nh=v.div`
    background-color: ${gi.bg};
    height: 100%;
    width: 100%;
`,ih=v.div`
    height: 100%;
`,oh=v.div`
    display: flex;
    align-items: center;
    background-color: ${gi.bg};
    ${e=>e.$insetTop&&`padding-top: ${e.$insetTop}px;`}
`,ah=v.h2`
    ${mi["heading-xs-semibold"]}
    flex: 1;
    text-align: center;
    margin: ${fi["spacing-24"]} 0;
`,sh=v(Qo.Small)`
    background-color: transparent;
    height: 100%;
    padding: ${fi["spacing-24"]} ${fi["spacing-20"]};
`,lh=v(rh.Default)`
    width: 100%;
`,dh=t=>{var{customLabels:n,onClear:i,onDone:s,onDismiss:l,onModalOpen:d,toggleFilterButtonStyle:c="light",clearButtonDisabled:h=!1,insets:g,children:m,toggleFilterButtonLabel:b,headerTitle:p,doneButtonLabel:f}=t,y=me(t,["customLabels","onClear","onDone","onDismiss","onModalOpen","toggleFilterButtonStyle","clearButtonDisabled","insets","children","toggleFilterButtonLabel","headerTitle","doneButtonLabel"]);const{context:v,refs:x}=J(),w=o(null),[$,F]=a(!1),C={toggle:(null==n?void 0:n.toggleFilterButtonLabel)||b||"Filters",title:(null==n?void 0:n.headerTitle)||p||"Filters",done:(null==n?void 0:n.doneButtonLabel)||f||"Done",clear:(null==n?void 0:n.clearButtonLabel)||"Clear"};return u((()=>{var e;$&&(null===(e=w.current)||void 0===e||e.focus())}),[$]),e(Bo.Provider,{value:{mode:"mobile",rootNode:w},children:[r("div",Object.assign({},y,{children:r(lh,{"data-testid":"filter-show-button",styleType:c,onClick:()=>{F(!0),null==d||d()},type:"button",icon:r(_,{}),children:C.toggle})})),r(Kc,{show:$,disableTransition:!0,children:r(ih,{inert:Da(!$),children:r(te,{context:v,disabled:!$,children:r(nh,{"data-id":"filter-mobile","data-testid":"filter-mobile",ref:x.setFloating,children:e(th,{ref:w,tabIndex:0,children:[e(oh,{$insetTop:null==g?void 0:g.top,children:[r(Uu,{onClick:()=>{F(!1),null==l||l()},focusOutline:"browser",focusHighlight:!1,"aria-label":`close ${C.title}`,children:r(z,{})}),r(ah,{children:C.title}),r(sh,{styleType:"link",type:"button",onClick:()=>null==i?void 0:i(),disabled:h,"aria-label":`clear ${C.title}`,children:C.clear})]}),r(Qu,{children:m}),r(Zu,{$insetBottom:null==g?void 0:g.bottom,children:r(Xu,{onClick:()=>{F(!1),null==s||s()},children:C.done})})]})})})})})]})};dh.displayName="Filter.Modal";const ch=v.div`
    background-color: ${gi.bg};
    border: ${pi["width-010"]} ${pi.solid} ${gi.border};
    border-radius: ${yi.md};
    overflow: hidden;
    width: 100%;
`,uh=v.div`
    display: flex;
    align-items: center;

    background-color: ${gi.bg};
`,hh=v.h2`
    ${mi["heading-xs-semibold"]}
    flex: 1;
    margin: ${fi["spacing-24"]} 0 ${fi["spacing-24"]}
        ${fi["spacing-20"]};
`,gh=v(Qo.Small)`
    background-color: transparent;
    padding-right: ${fi["spacing-20"]};
    padding-left: ${fi["spacing-20"]};
    height: 100%;
`,mh=t=>{var{customLabels:n,onClear:i,clearButtonDisabled:a=!1,children:s,headerTitle:l}=t,d=me(t,["customLabels","onClear","clearButtonDisabled","children","headerTitle"]);const c=o(null),u={title:(null==n?void 0:n.headerTitle)||l||"Filters",clear:(null==n?void 0:n.clearButtonLabel)||"Clear"};return r(Bo.Provider,{value:{mode:"default",rootNode:c},children:e(ch,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:c},d,{children:[e(uh,{children:[r(hh,{children:u.title}),r(gh,{styleType:"link",type:"button",onClick:()=>null==i?void 0:i(),disabled:a,"aria-label":`clear ${u.title}`,children:u.clear})]}),r(Qu,{children:s})]}))})};mh.displayName="Filter.Sidebar";const bh=e=>{var{children:t,className:n,style:i,onDismiss:o,onDone:a,onModalOpen:s,toggleFilterButtonStyle:l,insets:d,id:c,"data-testid":h}=e,g=me(e,["children","className","style","onDismiss","onDone","onModalOpen","toggleFilterButtonStyle","insets","id","data-testid"]);const m=f(F),b=xi["lg-max"]({theme:m}),p=ve.useMediaQuery({maxWidth:b});return u((()=>{p||null==o||o()}),[p]),r("div",{className:n,style:i,id:c,"data-testid":h,children:p?r(dh,Object.assign({onDismiss:o,onDone:a,onModalOpen:s,toggleFilterButtonStyle:l,insets:d},g,{children:"function"==typeof t?t("mobile"):t})):r(mh,Object.assign({},g,{children:"function"==typeof t?t("default"):t}))})};bh.Sidebar=mh,bh.Modal=dh,bh.Item=Pu,bh.Page=Gu,bh.Checkbox=Vu;export{bh as Filter};
//# sourceMappingURL=index.js.map
