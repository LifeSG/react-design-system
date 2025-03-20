import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import{SquareIcon as n,SquareFillIcon as i,SquareTickFillIcon as o,MinusSquareFillIcon as s,ChevronDownIcon as a,FilterIcon as l,CrossIcon as d}from"@lifesg/react-icons";import*as c from"react";import u,{useRef as h,useState as m,isValidElement as f,createRef as p,cloneElement as g,PureComponent as b,useEffect as y,useLayoutEffect as v,useMemo as x,forwardRef as w,useCallback as $,useContext as F}from"react";import C,{css as E,keyframes as k,useTheme as D}from"styled-components";import{useFloatingTree as _,FloatingTree as O,useFloatingNodeId as S,FloatingNode as M,useFloating as A,autoUpdate as z,offset as j,flip as B,shift as T,limitShift as I,useClick as P,useDismiss as R,useHover as L,useInteractions as W,FloatingPortal as Y,FloatingFocusManager as H}from"@floating-ui/react";import N,{findDOMNode as V,unstable_batchedUpdates as q}from"react-dom";import{ChevronDownIcon as Q}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as U}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as Z}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as X}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as G}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as J}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as K}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as ee}from"@lifesg/react-icons/external";import{CircleIcon as re}from"@lifesg/react-icons/circle";import{CircleDotIcon as te}from"@lifesg/react-icons/circle-dot";import{CrossIcon as ne}from"@lifesg/react-icons/cross";import{SquareIcon as ie}from"@lifesg/react-icons/square";import{SquareTickFillIcon as oe}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as se}from"@lifesg/react-icons/tick";import{ChevronLeftIcon as ae}from"@lifesg/react-icons/chevron-left";function le(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var de="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ce(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ue,he={exports:{}};ue=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,r,t)=>{var n,i=t(/*! react-is */"./node_modules/react-is/index.js"),o=t(/*! object-assign */"./node_modules/object-assign/index.js"),s=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",u="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(d),arrayOf:function(e){return p((function(r,t,n,i,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=r[t];if(!Array.isArray(a))return new f("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<a.length;l++){var d=e(a,l,n,i,o+"["+l+"]",s);if(d instanceof Error)return d}return null}))},element:p((function(r,t,n,i,o){var s=r[t];return e(s)?null:new f("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(e,r,t,n,o){var s=e[r];return i.isValidElementType(s)?null:new f("Invalid "+n+" `"+o+"` of type `"+v(s)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(r,t,n,i,o){if(!(r[t]instanceof e)){var s=e.name||u;return new f("Invalid "+i+" `"+o+"` of type `"+((a=r[t]).constructor&&a.constructor.name?a.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+s+"`.")}var a;return null}))},node:p((function(e,r,t,n,i){return y(e[r])?null:new f("Invalid "+n+" `"+i+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(r,t,n,i,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],d=v(l);if("object"!==d)return new f("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(a(l,c)){var u=e(l,c,n,i,o+"."+c,s);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(r,t,n,i,o){for(var s=r[t],a=0;a<e.length;a++)if(m(s,e[a]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===x(r)?String(r):r}));return new f("Invalid "+i+" `"+o+"` of value `"+String(s)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(t)+" at index "+r+"."),d}return p((function(r,t,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,t,n,i,o,s);if(null==c)return null;c.data&&a(c.data,"expectedType")&&l.push(c.data.expectedType)}return new f("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(r,t,n,i,o){var a=r[t],l=v(a);if("object"!==l)return new f("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return b(n,i,o,d,x(c));var u=c(a,d,n,i,o+"."+d,s);if(u)return u}return null}))},exact:function(e){return p((function(r,t,n,i,l){var d=r[t],c=v(d);if("object"!==c)return new f("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},r[t],e);for(var h in u){var m=e[h];if(a(e,h)&&"function"!=typeof m)return b(n,i,l,h,x(m));if(!m)return new f("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var p=m(d,h,n,i,l+"."+h,s);if(p)return p}return null}))}};function m(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function f(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function p(e){var t={},i=0;function o(o,a,l,d,c,h,m){if(d=d||u,h=h||l,m!==s){if(r){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}if("undefined"!=typeof console){var g=d+":"+l;!t[g]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[g]=!0,i++)}}return null==a[l]?o?null===a[l]?new f("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new f("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(a,l,d,c,h)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function g(e){return p((function(r,t,n,i,o,s){var a=r[t];return v(a)!==e?new f("Invalid "+i+" `"+o+"` of type `"+x(a)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,r,t,n,i){return new f((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function y(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(y);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e[c]);if("function"==typeof r)return r}(r);if(!n)return!1;var i,o=n.call(r);if(n!==r.entries){for(;!(i=o.next()).done;)if(!y(i.value))return!1}else for(;!(i=o.next()).done;){var s=i.value;if(s&&!y(s[1]))return!1}return!0;default:return!1}}function v(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function x(e){if(null==e)return""+e;var r=v(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function w(e){var r=x(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return f.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var m=e.type;switch(m){case d:case c:case i:case s:case o:case h:return m;default:var g=m&&m.$$typeof;switch(g){case l:case u:case p:case f:case a:return g;default:return r}}case n:return r}}}var w=d,$=c,F=l,C=a,E=t,k=u,D=i,_=p,O=f,S=n,M=s,A=o,z=h,j=!1;function B(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=$,r.ContextConsumer=F,r.ContextProvider=C,r.Element=E,r.ForwardRef=k,r.Fragment=D,r.Lazy=_,r.Memo=O,r.Portal=S,r.Profiler=M,r.StrictMode=A,r.Suspense=z,r.isAsyncMode=function(e){return j||(j=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===d},r.isConcurrentMode=B,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===a},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===p},r.isMemo=function(e){return x(e)===f},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===s},r.isStrictMode=function(e){return x(e)===o},r.isSuspense=function(e){return x(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===s||e===o||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===a||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===g)},r.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(/*! react */"react"),o=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),s=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),d=n(t(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,s.default)(t)]=e[t],r}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,i.useState)(r),n=t[0],o=t[1];return(0,i.useEffect)((function(){var e=r();n!==e&&o(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,i.useContext)(d.default),t=function(){return c(e)||c(r)},n=(0,i.useState)(t),o=n[0],s=n[1];return(0,i.useEffect)((function(){var e=t();(0,a.shallowEqualObjects)(o,e)||s(e)}),[e,r]),o}(r),s=h(e);if(!s)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,o.default)(e,r||{},!!r)},n=(0,i.useState)(t),s=n[0],a=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=t();return a(e),function(){e&&e.dispose()}}}),[e,r]),s}(s,n),m=function(e){var r=(0,i.useState)(e.matches),t=r[0],n=r[1];return(0,i.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),f=u();return(0,i.useEffect)((function(){f&&t&&t(m)}),[m]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),m}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var me=he.exports=ue(u),fe={exports:{}};fe.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",m="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},b=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:b,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,s=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=g;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!n&&i&&(v=i),i||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new k(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var k=function(){function g(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=g.prototype;return b.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(f);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return E},b.isValid=function(){return!(this.$d.toString()===m)},b.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},b.isAfter=function(e,r){return C(e)<this.startOf(r)},b.isBefore=function(e,r){return this.endOf(r)<C(e)},b.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),m=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(a)},f=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},p=this.$W,g=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?m(1,0):m(31,11);case d:return n?m(1,g):m(0,g+1);case l:var v=this.$locale().weekStart||0,x=(p<v?p+7:p)-v;return m(n?b-x:b+(6-x),g);case a:case h:return f(y+"Hours",0);case s:return f(y+"Minutes",1);case o:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),m=(t={},t[a]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],f=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var p=this.clone().set(h,1);p.$d[m](f),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else m&&this.$d[m](f);return this.init(),this},b.set=function(e,r){return this.clone().$set(e,r)},b.get=function(e){return this[E.p(e)]()},b.add=function(n,c){var h,m=this;n=Number(n);var f=E.p(c),p=function(e){var r=C(m);return E.w(r.date(r.date()+Math.round(e*n)),m)};if(f===d)return this.set(d,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return p(1);if(f===l)return p(7);var g=(h={},h[o]=r,h[s]=t,h[i]=e,h)[f]||1,b=this.$d.getTime()+n*g;return E.w(b,this)},b.subtract=function(e,r){return this.add(-1*e,r)},b.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,s=this.$m,a=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},f=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(t.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(o,s,!0);case"A":return f(o,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,m){var f,p=this,g=E.p(h),b=C(n),y=(b.utcOffset()-this.utcOffset())*r,v=this-b,x=function(){return E.m(p,b)};switch(g){case u:f=x()/12;break;case d:f=x();break;case c:f=x()/3;break;case l:f=(v-y)/6048e5;break;case a:f=(v-y)/864e5;break;case s:f=v/t;break;case o:f=v/r;break;case i:f=v/e;break;default:f=v}return m?f:E.a(f)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},b.clone=function(){return E.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},g}(),D=k.prototype;return C.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){D[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,k,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var pe=ce(fe.exports),ge={exports:{}};ge.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[t,a("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[t,a("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],m=c&&c[1];s[l]=m?{regex:h,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<a;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,m=new Date,f=s||(i||o?1:m.getDate()),p=i||m.getFullYear(),g=0;i&&!o||(g=o>0?o-1:m.getMonth());var b=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(p,g,f,b,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(p,g,f,b,y,v,x)):new Date(p,g,f,b,y,v,x)}catch(e){return new Date("")}}(r,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var m=a.length,f=1;f<=m;f+=1){s[1]=a[f-1];var p=t.apply(this,s);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}f===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var be=ce(ge.exports),ye={exports:{}};ye.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),s=t(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var ve=ce(ye.exports),xe={exports:{}};xe.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var we=ce(xe.exports),$e={exports:{}};$e.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Fe,Ce,Ee,ke=ce($e.exports),De={exports:{}},_e=ce(De.exports=(Fe={year:0,month:1,day:2,hour:3,minute:4,second:5},Ce={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Ce[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Ce[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Fe[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,m=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",f=+e;return(t.utc(m).valueOf()-(f-=f%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,a=i||r||n,l=o(+t(),a);if("string"!=typeof e)return t(e).tz(a);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var s=o(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=a,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));pe.extend(ve),pe.extend(ke),pe.extend(we),pe.extend(be),pe.extend(_e),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=pe(r).startOf("week");return Oe(t).map((e=>Se(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Se(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(pe(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+pe(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=pe(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?pe(n):void 0,i?pe(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(Ee||(Ee={}));const Oe=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Se=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Me=[1,3,5,7,8,10,12],Ae=[4,6,9,11];var ze,je,Be,Te;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),s=parseInt(n);return 0==i?"1":Me.includes(o)?Math.min(i,31).toString():Ae.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=pe(e,t);return pe(r,t).diff(n,"minute")},e.toDayjs=e=>e?pe(e):pe(),e.addMinutesToTime=(e,r,t="HH:mm")=>pe(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>pe(e).isSame(pe(r),t)}(ze||(ze={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!pe(e).isBefore(n,"day"))||!(!i||!pe(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(pe(e).isValid())return e}return""}}(je||(je={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Be||(Be={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const s=n+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=t;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Te||(Te={}));var Ie=function(e,r){return Ie=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Ie(e,r)};var Pe=function(){return Pe=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Pe.apply(this,arguments)};var Re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Le=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},We="object"==typeof Re&&Re&&Re.Object===Object&&Re,Ye="object"==typeof self&&self&&self.Object===Object&&self,He=We||Ye||Function("return this")(),Ne=He,Ve=function(){return Ne.Date.now()},qe=/\s/;var Qe=function(e){for(var r=e.length;r--&&qe.test(e.charAt(r)););return r},Ue=/^\s+/;var Ze=function(e){return e?e.slice(0,Qe(e)+1).replace(Ue,""):e},Xe=He.Symbol,Ge=Xe,Je=Object.prototype,Ke=Je.hasOwnProperty,er=Je.toString,rr=Ge?Ge.toStringTag:void 0;var tr=function(e){var r=Ke.call(e,rr),t=e[rr];try{e[rr]=void 0;var n=!0}catch(e){}var i=er.call(e);return n&&(r?e[rr]=t:delete e[rr]),i},nr=Object.prototype.toString;var ir=tr,or=function(e){return nr.call(e)},sr=Xe?Xe.toStringTag:void 0;var ar=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":sr&&sr in Object(e)?ir(e):or(e)},lr=function(e){return null!=e&&"object"==typeof e};var dr=Ze,cr=Le,ur=function(e){return"symbol"==typeof e||lr(e)&&"[object Symbol]"==ar(e)},hr=/^[-+]0x[0-9a-f]+$/i,mr=/^0b[01]+$/i,fr=/^0o[0-7]+$/i,pr=parseInt;var gr=Le,br=Ve,yr=function(e){if("number"==typeof e)return e;if(ur(e))return NaN;if(cr(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=cr(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=dr(e);var t=mr.test(e);return t||fr.test(e)?pr(e.slice(2),t?2:8):hr.test(e)?NaN:+e},vr=Math.max,xr=Math.min;var wr=function(e,r,t){var n,i,o,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var t=n,o=i;return n=i=void 0,d=r,s=e.apply(o,t)}function f(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function p(){var e=br();if(f(e))return g(e);a=setTimeout(p,function(e){var t=r-(e-l);return u?xr(t,o-(e-d)):t}(e))}function g(e){return a=void 0,h&&n?m(e):(n=i=void 0,s)}function b(){var e=br(),t=f(e);if(n=arguments,i=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(p,r),c?m(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(p,r),m(l)}return void 0===a&&(a=setTimeout(p,r)),s}return r=yr(r)||0,gr(t)&&(c=!!t.leading,o=(u="maxWait"in t)?vr(yr(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},b.flush=function(){return void 0===a?s:g(br())},b},$r=wr,Fr=Le;var Cr=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Fr(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),$r(e,r,{leading:n,maxWait:r,trailing:i})},Er=function(e,r,t,n){switch(r){case"debounce":return wr(e,t,n);case"throttle":return Cr(e,t,n);default:return e}},kr=function(e){return"function"==typeof e},Dr=function(){return"undefined"==typeof window},_r=function(e){return e instanceof Element||e instanceof HTMLDocument},Or=function(e,r,t,n){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!n||r.height===s&&!t?r:(e&&kr(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Dr()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Dr())return null;if(r)return document.querySelector(r);if(n&&_r(n))return n;if(t.targetRef&&_r(t.targetRef.current))return t.targetRef.current;var i=V(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=Or(a,t.setState.bind(t),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Dr()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return kr(r)?"renderProp":kr(n)?"childFunction":f(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=p(),t.observableElement=null,Dr()||(t.resizeHandler=Er(t.createResizeHandler,i,s,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Ie(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Dr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,n=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,a={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(a);case"childFunction":return(e=n)(a);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(a,["targetRef"]);return g(e,l)}return g(e,a);case"childArray":return(e=n).map((function(e){return!!e&&g(e,a)}));default:return c.createElement(o,null)}}}(b);var Sr=Dr()?y:v;function Mr(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,s=e.refreshOptions,a=e.handleWidth,l=void 0===a||a,d=e.handleHeight,c=void 0===d||d,u=e.targetRef,f=e.observerOptions,p=e.onResize,g=h(t),b=h(null),y=null!=u?u:b,v=h(),x=m({width:void 0,height:void 0}),w=x[0],$=x[1];return Sr((function(){if(!Dr()){var e=Or(p,$,l,c);v.current=Er((function(r){(l||c)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!g.current&&!Dr()&&e({width:n,height:i}),g.current=!1}))}),n,o,s);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,f),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,s,l,c,p,f,y.current]),Pe({ref:y},w)}var Ar=Array.isArray,zr="object"==typeof de&&de&&de.Object===Object&&de,jr="object"==typeof self&&self&&self.Object===Object&&self,Br=zr||jr||Function("return this")(),Tr=Br.Symbol,Ir=Tr,Pr=Object.prototype,Rr=Pr.hasOwnProperty,Lr=Pr.toString,Wr=Ir?Ir.toStringTag:void 0;var Yr=function(e){var r=Rr.call(e,Wr),t=e[Wr];try{e[Wr]=void 0;var n=!0}catch(e){}var i=Lr.call(e);return n&&(r?e[Wr]=t:delete e[Wr]),i},Hr=Object.prototype.toString;var Nr=Yr,Vr=function(e){return Hr.call(e)},qr=Tr?Tr.toStringTag:void 0;var Qr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":qr&&qr in Object(e)?Nr(e):Vr(e)};var Ur=Qr,Zr=function(e){return null!=e&&"object"==typeof e};var Xr=function(e){return"symbol"==typeof e||Zr(e)&&"[object Symbol]"==Ur(e)},Gr=Ar,Jr=Xr,Kr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,et=/^\w*$/;var rt=function(e,r){if(Gr(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Jr(e))||(et.test(e)||!Kr.test(e)||null!=r&&e in Object(r))};var tt=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},nt=Qr,it=tt;var ot,st=function(e){if(!it(e))return!1;var r=nt(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},at=Br["__core-js_shared__"],lt=(ot=/[^.]+$/.exec(at&&at.keys&&at.keys.IE_PROTO||""))?"Symbol(src)_1."+ot:"";var dt=function(e){return!!lt&&lt in e},ct=Function.prototype.toString;var ut=st,ht=dt,mt=tt,ft=function(e){if(null!=e){try{return ct.call(e)}catch(e){}try{return e+""}catch(e){}}return""},pt=/^\[object .+?Constructor\]$/,gt=Function.prototype,bt=Object.prototype,yt=gt.toString,vt=bt.hasOwnProperty,xt=RegExp("^"+yt.call(vt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var wt=function(e,r){return null==e?void 0:e[r]},$t=function(e){return!(!mt(e)||ht(e))&&(ut(e)?xt:pt).test(ft(e))},Ft=wt;var Ct=function(e,r){var t=Ft(e,r);return $t(t)?t:void 0},Et=Ct(Object,"create"),kt=Et;var Dt=function(){this.__data__=kt?kt(null):{},this.size=0};var _t=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ot=Et,St=Object.prototype.hasOwnProperty;var Mt=function(e){var r=this.__data__;if(Ot){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return St.call(r,e)?r[e]:void 0},At=Et,zt=Object.prototype.hasOwnProperty;var jt=function(e){var r=this.__data__;return At?void 0!==r[e]:zt.call(r,e)},Bt=Et;var Tt=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Bt&&void 0===r?"__lodash_hash_undefined__":r,this},It=Dt,Pt=_t,Rt=Mt,Lt=jt,Wt=Tt;function Yt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Yt.prototype.clear=It,Yt.prototype.delete=Pt,Yt.prototype.get=Rt,Yt.prototype.has=Lt,Yt.prototype.set=Wt;var Ht=Yt;var Nt=function(){this.__data__=[],this.size=0};var Vt=function(e,r){return e===r||e!=e&&r!=r};var qt=function(e,r){for(var t=e.length;t--;)if(Vt(e[t][0],r))return t;return-1},Qt=qt,Ut=Array.prototype.splice;var Zt=function(e){var r=this.__data__,t=Qt(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ut.call(r,t,1),--this.size,!0)},Xt=qt;var Gt=function(e){var r=this.__data__,t=Xt(r,e);return t<0?void 0:r[t][1]},Jt=qt;var Kt=function(e){return Jt(this.__data__,e)>-1},en=qt;var rn=function(e,r){var t=this.__data__,n=en(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},tn=Nt,nn=Zt,on=Gt,sn=Kt,an=rn;function ln(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ln.prototype.clear=tn,ln.prototype.delete=nn,ln.prototype.get=on,ln.prototype.has=sn,ln.prototype.set=an;var dn=ln,cn=Ct(Br,"Map"),un=Ht,hn=dn,mn=cn;var fn=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var pn=function(e,r){var t=e.__data__;return fn(r)?t["string"==typeof r?"string":"hash"]:t.map},gn=pn;var bn=function(e){var r=gn(this,e).delete(e);return this.size-=r?1:0,r},yn=pn;var vn=function(e){return yn(this,e).get(e)},xn=pn;var wn=function(e){return xn(this,e).has(e)},$n=pn;var Fn=function(e,r){var t=$n(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Cn=function(){this.size=0,this.__data__={hash:new un,map:new(mn||hn),string:new un}},En=bn,kn=vn,Dn=wn,_n=Fn;function On(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}On.prototype.clear=Cn,On.prototype.delete=En,On.prototype.get=kn,On.prototype.has=Dn,On.prototype.set=_n;var Sn=On;function Mn(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Mn.Cache||Sn),t}Mn.Cache=Sn;var An=Mn;var zn=function(e){var r=An(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bn=/\\(\\)?/g,Tn=zn((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(jn,(function(e,t,n,i){r.push(n?i.replace(Bn,"$1"):t||e)})),r}));var In=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Pn=Ar,Rn=Xr,Ln=Tr?Tr.prototype:void 0,Wn=Ln?Ln.toString:void 0;var Yn=function e(r){if("string"==typeof r)return r;if(Pn(r))return In(r,e)+"";if(Rn(r))return Wn?Wn.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Hn=Yn;var Nn=Ar,Vn=rt,qn=Tn,Qn=function(e){return null==e?"":Hn(e)};var Un=Xr;var Zn=function(e,r){return Nn(e)?e:Vn(e,r)?[e]:qn(Qn(e))},Xn=function(e){if("string"==typeof e||Un(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Gn=function(e,r){for(var t=0,n=(r=Zn(r,e)).length;null!=e&&t<n;)e=e[Xn(r[t++])];return t&&t==n?e:void 0};var Jn=ce((function(e,r,t){var n=null==e?void 0:Gn(e,r);return void 0===n?t:n}));const Kn=(e,r,t)=>Jn(t,r)||Jn(e,r),ei=(e,r)=>{const t=r||e.defaultValue;return Jn(e.collections,t)},ri={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ti=e=>r=>{var t;const n=r.theme,i=ei(ri,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Kn(i,e,n.overrides.border)}px`:`${i[e]}px`},ni={"width-005":ti("width-005"),"width-010":ti("width-010"),"width-020":ti("width-020"),"width-040":ti("width-040"),solid:(ii="solid",e=>{var r;const t=e.theme,n=ei(ri,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Kn(n,ii,t.overrides.border):n[ii];return"function"==typeof i?i(e):i})};var ii;const oi={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},si=e=>r=>{var t;const n=r.theme,i=ei(oi,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?Kn(i,e,n.overrides.primitiveColour):i[e]},ai={"brand-10":si("brand-10"),"brand-20":si("brand-20"),"brand-30":si("brand-30"),"brand-40":si("brand-40"),"brand-50":si("brand-50"),"brand-60":si("brand-60"),"brand-70":si("brand-70"),"brand-80":si("brand-80"),"brand-90":si("brand-90"),"brand-95":si("brand-95"),"brand-100":si("brand-100"),"primary-10":si("primary-10"),"primary-20":si("primary-20"),"primary-30":si("primary-30"),"primary-40":si("primary-40"),"primary-50":si("primary-50"),"primary-60":si("primary-60"),"primary-70":si("primary-70"),"primary-80":si("primary-80"),"primary-90":si("primary-90"),"primary-95":si("primary-95"),"primary-100":si("primary-100"),"secondary-10":si("secondary-10"),"secondary-20":si("secondary-20"),"secondary-30":si("secondary-30"),"secondary-40":si("secondary-40"),"secondary-50":si("secondary-50"),"secondary-60":si("secondary-60"),"secondary-70":si("secondary-70"),"secondary-80":si("secondary-80"),"secondary-90":si("secondary-90"),"secondary-95":si("secondary-95"),"secondary-100":si("secondary-100"),"neutral-10":si("neutral-10"),"neutral-20":si("neutral-20"),"neutral-30":si("neutral-30"),"neutral-40":si("neutral-40"),"neutral-50":si("neutral-50"),"neutral-60":si("neutral-60"),"neutral-70":si("neutral-70"),"neutral-80":si("neutral-80"),"neutral-90":si("neutral-90"),"neutral-95":si("neutral-95"),"neutral-100":si("neutral-100"),"success-10":si("success-10"),"success-20":si("success-20"),"success-30":si("success-30"),"success-40":si("success-40"),"success-50":si("success-50"),"success-60":si("success-60"),"success-70":si("success-70"),"success-80":si("success-80"),"success-90":si("success-90"),"success-95":si("success-95"),"success-100":si("success-100"),"warning-10":si("warning-10"),"warning-20":si("warning-20"),"warning-30":si("warning-30"),"warning-40":si("warning-40"),"warning-50":si("warning-50"),"warning-60":si("warning-60"),"warning-70":si("warning-70"),"warning-80":si("warning-80"),"warning-90":si("warning-90"),"warning-95":si("warning-95"),"warning-100":si("warning-100"),"error-10":si("error-10"),"error-20":si("error-20"),"error-30":si("error-30"),"error-40":si("error-40"),"error-50":si("error-50"),"error-60":si("error-60"),"error-70":si("error-70"),"error-80":si("error-80"),"error-90":si("error-90"),"error-95":si("error-95"),"error-100":si("error-100"),"info-10":si("info-10"),"info-20":si("info-20"),"info-30":si("info-30"),"info-40":si("info-40"),"info-50":si("info-50"),"info-60":si("info-60"),"info-70":si("info-70"),"info-80":si("info-80"),"info-90":si("info-90"),"info-95":si("info-95"),"info-100":si("info-100"),white:si("white"),black:si("black"),"primary-inverse":si("primary-inverse")},li={text:si("neutral-20"),"text-subtle":si("neutral-30"),"text-subtler":si("neutral-50"),"text-subtlest":si("neutral-60"),"text-primary":si("primary-50"),"text-hover":si("primary-40"),"text-selected":si("primary-50"),"text-selected-hover":si("primary-40"),"text-disabled":si("neutral-50"),"text-disabled-subtle":si("neutral-60"),"text-disabled-subtlest":si("neutral-80"),"text-selected-disabled":si("neutral-20"),"text-success":si("success-40"),"text-warning":si("warning-40"),"text-error":si("error-40"),"text-info":si("info-40"),"text-inverse":si("white"),icon:si("neutral-50"),"icon-subtle":si("neutral-60"),"icon-strongest":si("neutral-20"),"icon-primary":si("primary-50"),"icon-primary-subtle":si("primary-60"),"icon-primary-subtlest":si("primary-70"),"icon-hover":si("primary-40"),"icon-selected":si("primary-50"),"icon-selected-hover":si("primary-40"),"icon-disabled":si("neutral-50"),"icon-disabled-subtle":si("neutral-60"),"icon-selected-disabled":si("neutral-60"),"icon-success":si("success-50"),"icon-warning":si("warning-60"),"icon-error":si("error-50"),"icon-error-strong":si("error-40"),"icon-info":si("info-50"),"icon-inverse":si("white"),"icon-primary-inverse":si("primary-inverse"),border:si("neutral-90"),"border-strong":si("neutral-70"),"border-stronger":si("neutral-50"),"border-primary":si("primary-50"),"border-primary-subtle":si("primary-60"),"border-hover":si("primary-90"),"border-hover-strong":si("primary-60"),"border-selected":si("primary-50"),"border-selected-subtle":si("primary-70"),"border-selected-subtlest":si("primary-90"),"border-selected-hover":si("primary-40"),"border-focus":si("primary-60"),"border-focus-strong":si("primary-50"),"border-disabled":si("neutral-90"),"border-selected-disabled":si("neutral-70"),"border-success":si("success-60"),"border-warning":si("warning-60"),"border-error":si("error-60"),"border-error-focus":si("error-60"),"border-error-focus-strong":si("error-40"),"border-error-strong":si("error-40"),"border-info":si("info-60"),bg:si("white"),"bg-strong":si("neutral-100"),"bg-stronger":si("neutral-95"),"bg-strongest":si("neutral-90"),"bg-hover":si("primary-95"),"bg-hover-strong":si("primary-90"),"bg-hover-subtle":si("primary-100"),"bg-hover-neutral":si("neutral-100"),"bg-hover-neutral-strong":si("neutral-90"),"bg-selected":si("primary-95"),"bg-selected-hover":si("primary-90"),"bg-selected-strong":si("primary-90"),"bg-selected-stronger":si("primary-70"),"bg-selected-strongest":si("primary-50"),"bg-selected-strongest-hover":si("primary-40"),"bg-disabled":si("neutral-95"),"bg-selected-disabled":si("neutral-95"),"bg-selected-stronger-disabled":si("neutral-70"),"bg-success":si("success-100"),"bg-success-hover":si("success-95"),"bg-success-strong":si("success-50"),"bg-success-strong-hover":si("success-40"),"bg-warning":si("warning-100"),"bg-warning-hover":si("warning-95"),"bg-warning-strong":si("warning-50"),"bg-warning-strong-hover":si("warning-40"),"bg-info":si("info-100"),"bg-info-hover":si("info-95"),"bg-info-strong":si("info-50"),"bg-info-strong-hover":si("info-40"),"bg-error":si("error-100"),"bg-error-hover":si("error-95"),"bg-error-strong":si("error-50"),"bg-error-strong-hover":si("error-40"),"bg-inverse":si("neutral-20"),"bg-inverse-subtle":si("neutral-30"),"bg-inverse-subtler":si("neutral-50"),"bg-inverse-subtlest":si("neutral-60"),"bg-inverse-hover":si("neutral-40"),"bg-primary":si("primary-50"),"bg-primary-subtle":si("primary-60"),"bg-primary-subtler":si("primary-95"),"bg-primary-subtlest":si("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":si("primary-40"),"bg-primary-subtlest-hover":si("primary-90"),"bg-primary-subtlest-selected":si("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:si("primary-50"),"hyperlink-hover":si("primary-40"),"hyperlink-visited":si("primary-40"),"hyperlink-inverse":si("primary-inverse"),"focus-ring":si("black"),"focus-ring-inverse":si("white")},di={collections:{lifesg:li,bookingsg:li,rbs:li,mylegacy:li,ccube:li,pa:{text:si("neutral-30"),"text-subtle":si("neutral-40"),"text-subtler":si("neutral-50"),"text-subtlest":si("neutral-70"),"text-primary":si("neutral-10"),"text-hover":si("neutral-70"),"text-selected":si("neutral-20"),"text-selected-hover":si("neutral-10"),"text-disabled":si("neutral-50"),"text-disabled-subtle":si("neutral-60"),"text-disabled-subtlest":si("neutral-80"),"text-selected-disabled":si("neutral-40"),"text-success":si("success-40"),"text-warning":si("warning-40"),"text-error":si("brand-30"),"text-info":si("neutral-40"),"text-inverse":si("neutral-100"),icon:si("neutral-40"),"icon-subtle":si("neutral-50"),"icon-strongest":si("neutral-10"),"icon-primary":si("neutral-10"),"icon-primary-subtle":si("neutral-30"),"icon-primary-subtlest":si("neutral-60"),"icon-hover":si("neutral-70"),"icon-selected":si("brand-20"),"icon-selected-hover":si("brand-10"),"icon-disabled":si("neutral-50"),"icon-disabled-subtle":si("neutral-60"),"icon-selected-disabled":si("neutral-40"),"icon-success":si("success-40"),"icon-warning":si("warning-60"),"icon-error":si("brand-30"),"icon-error-strong":si("brand-10"),"icon-info":si("neutral-40"),"icon-inverse":si("neutral-100"),"icon-primary-inverse":"#F9B371",border:si("neutral-90"),"border-strong":si("neutral-30"),"border-stronger":si("neutral-20"),"border-primary":si("neutral-40"),"border-primary-subtle":si("neutral-60"),"border-hover":si("neutral-80"),"border-hover-strong":si("neutral-10"),"border-selected":si("neutral-20"),"border-selected-subtle":si("neutral-40"),"border-selected-subtlest":si("neutral-70"),"border-selected-hover":si("neutral-10"),"border-focus":si("brand-60"),"border-focus-strong":si("brand-40"),"border-disabled":si("neutral-90"),"border-selected-disabled":si("neutral-80"),"border-success":si("success-40"),"border-warning":si("warning-60"),"border-error":si("brand-30"),"border-error-focus":si("brand-20"),"border-error-focus-strong":si("brand-10"),"border-error-strong":si("brand-20"),"border-info":si("neutral-40"),bg:si("neutral-100"),"bg-strong":si("neutral-95"),"bg-stronger":si("neutral-90"),"bg-strongest":si("neutral-80"),"bg-hover":si("brand-90"),"bg-hover-strong":si("brand-80"),"bg-hover-subtle":si("neutral-90"),"bg-hover-neutral":si("neutral-90"),"bg-hover-neutral-strong":si("neutral-90"),"bg-selected":si("brand-50"),"bg-selected-hover":si("brand-70"),"bg-selected-strong":si("brand-90"),"bg-selected-stronger":si("brand-40"),"bg-selected-strongest":si("brand-20"),"bg-selected-strongest-hover":si("brand-10"),"bg-disabled":si("neutral-90"),"bg-selected-disabled":si("neutral-90"),"bg-selected-stronger-disabled":si("neutral-80"),"bg-success":si("success-100"),"bg-success-hover":si("success-95"),"bg-success-strong":si("success-50"),"bg-success-strong-hover":si("success-40"),"bg-warning":si("warning-100"),"bg-warning-hover":si("warning-95"),"bg-warning-strong":si("warning-50"),"bg-warning-strong-hover":si("warning-40"),"bg-info":si("neutral-95"),"bg-info-hover":si("info-95"),"bg-info-strong":si("info-50"),"bg-info-strong-hover":si("info-40"),"bg-error":si("brand-100"),"bg-error-hover":si("error-95"),"bg-error-strong":si("error-50"),"bg-error-strong-hover":si("error-40"),"bg-inverse":si("neutral-40"),"bg-inverse-subtle":si("neutral-60"),"bg-inverse-subtler":si("neutral-70"),"bg-inverse-subtlest":si("neutral-80"),"bg-inverse-hover":si("neutral-30"),"bg-primary":si("brand-20"),"bg-primary-subtle":si("brand-60"),"bg-primary-subtler":si("brand-80"),"bg-primary-subtlest":si("brand-100"),"bg-available":si("success-60"),"bg-primary-hover":si("brand-10"),"bg-primary-subtlest-hover":si("brand-80"),"bg-primary-subtlest-selected":si("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:si("neutral-10"),"hyperlink-hover":si("neutral-40"),"hyperlink-visited":si("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":si("black"),"focus-ring-inverse":si("white")}},defaultValue:"lifesg"},ci=e=>r=>{var t;const n=r.theme,i=ei(di,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?Kn(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},ui={text:ci("text"),"text-subtle":ci("text-subtle"),"text-subtler":ci("text-subtler"),"text-subtlest":ci("text-subtlest"),"text-primary":ci("text-primary"),"text-hover":ci("text-hover"),"text-selected":ci("text-selected"),"text-selected-hover":ci("text-selected-hover"),"text-disabled":ci("text-disabled"),"text-disabled-subtle":ci("text-disabled-subtle"),"text-disabled-subtlest":ci("text-disabled-subtlest"),"text-selected-disabled":ci("text-selected-disabled"),"text-success":ci("text-success"),"text-warning":ci("text-warning"),"text-error":ci("text-error"),"text-info":ci("text-info"),"text-inverse":ci("text-inverse"),icon:ci("icon"),"icon-subtle":ci("icon-subtle"),"icon-strongest":ci("icon-strongest"),"icon-primary":ci("icon-primary"),"icon-primary-subtle":ci("icon-primary-subtle"),"icon-primary-subtlest":ci("icon-primary-subtlest"),"icon-hover":ci("icon-hover"),"icon-selected":ci("icon-selected"),"icon-selected-hover":ci("icon-selected-hover"),"icon-disabled":ci("icon-disabled"),"icon-disabled-subtle":ci("icon-disabled-subtle"),"icon-selected-disabled":ci("icon-selected-disabled"),"icon-success":ci("icon-success"),"icon-warning":ci("icon-warning"),"icon-error":ci("icon-error"),"icon-error-strong":ci("icon-error-strong"),"icon-info":ci("icon-info"),"icon-inverse":ci("icon-inverse"),"icon-primary-inverse":ci("icon-primary-inverse"),border:ci("border"),"border-strong":ci("border-strong"),"border-stronger":ci("border-stronger"),"border-primary":ci("border-primary"),"border-primary-subtle":ci("border-primary-subtle"),"border-hover":ci("border-hover"),"border-hover-strong":ci("border-hover-strong"),"border-selected":ci("border-selected"),"border-selected-subtle":ci("border-selected-subtle"),"border-selected-subtlest":ci("border-selected-subtlest"),"border-selected-hover":ci("border-selected-hover"),"border-focus":ci("border-focus"),"border-focus-strong":ci("border-focus-strong"),"border-disabled":ci("border-disabled"),"border-selected-disabled":ci("border-selected-disabled"),"border-success":ci("border-success"),"border-warning":ci("border-warning"),"border-error":ci("border-error"),"border-error-focus":ci("border-error-focus"),"border-error-focus-strong":ci("border-error-focus-strong"),"border-error-strong":ci("border-error-strong"),"border-info":ci("border-info"),bg:ci("bg"),"bg-strong":ci("bg-strong"),"bg-stronger":ci("bg-stronger"),"bg-strongest":ci("bg-strongest"),"bg-hover":ci("bg-hover"),"bg-hover-strong":ci("bg-hover-strong"),"bg-hover-subtle":ci("bg-hover-subtle"),"bg-hover-neutral":ci("bg-hover-neutral"),"bg-hover-neutral-strong":ci("bg-hover-neutral-strong"),"bg-selected":ci("bg-selected"),"bg-selected-hover":ci("bg-selected-hover"),"bg-selected-strong":ci("bg-selected-strong"),"bg-selected-stronger":ci("bg-selected-stronger"),"bg-selected-strongest":ci("bg-selected-strongest"),"bg-selected-strongest-hover":ci("bg-selected-strongest-hover"),"bg-disabled":ci("bg-disabled"),"bg-selected-disabled":ci("bg-selected-disabled"),"bg-selected-stronger-disabled":ci("bg-selected-stronger-disabled"),"bg-success":ci("bg-success"),"bg-success-hover":ci("bg-success-hover"),"bg-success-strong":ci("bg-success-strong"),"bg-success-strong-hover":ci("bg-success-strong-hover"),"bg-warning":ci("bg-warning"),"bg-warning-hover":ci("bg-warning-hover"),"bg-warning-strong":ci("bg-warning-strong"),"bg-warning-strong-hover":ci("bg-warning-strong-hover"),"bg-info":ci("bg-info"),"bg-info-hover":ci("bg-info-hover"),"bg-info-strong":ci("bg-info-strong"),"bg-info-strong-hover":ci("bg-info-strong-hover"),"bg-error":ci("bg-error"),"bg-error-hover":ci("bg-error-hover"),"bg-error-strong":ci("bg-error-strong"),"bg-error-strong-hover":ci("bg-error-strong-hover"),"bg-inverse":ci("bg-inverse"),"bg-inverse-subtle":ci("bg-inverse-subtle"),"bg-inverse-subtler":ci("bg-inverse-subtler"),"bg-inverse-subtlest":ci("bg-inverse-subtlest"),"bg-inverse-hover":ci("bg-inverse-hover"),"bg-primary":ci("bg-primary"),"bg-primary-subtle":ci("bg-primary-subtle"),"bg-primary-subtler":ci("bg-primary-subtler"),"bg-primary-subtlest":ci("bg-primary-subtlest"),"bg-available":ci("bg-available"),"bg-primary-hover":ci("bg-primary-hover"),"bg-primary-subtlest-hover":ci("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ci("bg-primary-subtlest-selected"),"overlay-strong":ci("overlay-strong"),"overlay-subtle":ci("overlay-subtle"),hyperlink:ci("hyperlink"),"hyperlink-hover":ci("hyperlink-hover"),"hyperlink-visited":ci("hyperlink-visited"),"hyperlink-inverse":ci("hyperlink-inverse"),"focus-ring":ci("focus-ring"),"focus-ring-inverse":ci("focus-ring-inverse")},hi={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ni["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:ui.border(r),u=ni.solid;return E`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ni["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:ui.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return E`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},mi=e=>1===e.length&&"theme"in e[0],fi=e=>(...r)=>t=>{const n=mi(r)?[]:r,i=mi(r)?r[0]:t,o=i.theme;return(0,ei(hi,null==o?void 0:o.borderScheme)[e])(...n)(i)},pi={solid:fi("solid"),"dashed-default":fi("dashed-default")},gi={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},bi=e=>r=>{var t;const n=r.theme,i=ei(gi,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Kn(i,e,n.overrides.breakpoint):i[e],o},yi={"xxs-min":bi("xxs-min"),"xxs-max":bi("xxs-max"),"xs-min":bi("xs-min"),"xs-max":bi("xs-max"),"sm-min":bi("sm-min"),"sm-max":bi("sm-max"),"md-min":bi("md-min"),"md-max":bi("md-max"),"lg-min":bi("lg-min"),"lg-max":bi("lg-max"),"xl-min":bi("xl-min"),"xl-max":bi("xl-max"),"xxl-min":bi("xxl-min"),"xxs-column":bi("xxs-column"),"xs-column":bi("xs-column"),"sm-column":bi("sm-column"),"md-column":bi("md-column"),"lg-column":bi("lg-column"),"xl-column":bi("xl-column"),"xxl-column":bi("xxl-column"),"xxs-gutter":bi("xxs-gutter"),"xs-gutter":bi("xs-gutter"),"sm-gutter":bi("sm-gutter"),"md-gutter":bi("md-gutter"),"lg-gutter":bi("lg-gutter"),"xl-gutter":bi("xl-gutter"),"xxl-gutter":bi("xxl-gutter"),"xxs-margin":bi("xxs-margin"),"xs-margin":bi("xs-margin"),"sm-margin":bi("sm-margin"),"md-margin":bi("md-margin"),"lg-margin":bi("lg-margin"),"xl-margin":bi("xl-margin"),"xxl-margin":bi("xxl-margin")},vi=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=yi["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),xi={MaxWidth:vi("max-width"),MinWidth:vi("min-width")},wi={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},$i={collections:{lifesg:wi,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},rbs:wi,mylegacy:wi,ccube:wi,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"0rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"lifesg"},Fi=e=>r=>{var t;const n=r.theme,i=ei($i,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Kn(i,e,n.overrides.fontSpec):i[e]},Ci={"header-size-xxl":Fi("header-size-xxl"),"header-size-xl":Fi("header-size-xl"),"header-size-lg":Fi("header-size-lg"),"header-size-md":Fi("header-size-md"),"header-size-sm":Fi("header-size-sm"),"header-size-xs":Fi("header-size-xs"),"header-lh-xxl":Fi("header-lh-xxl"),"header-lh-xl":Fi("header-lh-xl"),"header-lh-lg":Fi("header-lh-lg"),"header-lh-md":Fi("header-lh-md"),"header-lh-sm":Fi("header-lh-sm"),"header-lh-xs":Fi("header-lh-xs"),"header-ls-xxl":Fi("header-ls-xxl"),"header-ls-xl":Fi("header-ls-xl"),"header-ls-lg":Fi("header-ls-lg"),"header-ls-md":Fi("header-ls-md"),"header-ls-sm":Fi("header-ls-sm"),"header-ls-xs":Fi("header-ls-xs"),"weight-light":Fi("weight-light"),"weight-regular":Fi("weight-regular"),"weight-semibold":Fi("weight-semibold"),"weight-bold":Fi("weight-bold"),"font-family":Fi("font-family"),"body-size-baseline":Fi("body-size-baseline"),"body-size-md":Fi("body-size-md"),"body-size-sm":Fi("body-size-sm"),"body-size-xs":Fi("body-size-xs"),"body-lh-baseline":Fi("body-lh-baseline"),"body-lh-md":Fi("body-lh-md"),"body-lh-sm":Fi("body-lh-sm"),"body-lh-xs":Fi("body-lh-xs"),"body-ls-baseline":Fi("body-ls-baseline"),"body-ls-md":Fi("body-ls-md"),"body-ls-sm":Fi("body-ls-sm"),"body-ls-xs":Fi("body-ls-xs"),"form-label-size":Fi("form-label-size"),"form-description-size":Fi("form-description-size"),"form-label-lh":Fi("form-label-lh"),"form-description-lh":Fi("form-description-lh"),"form-label-ls":Fi("form-label-ls"),"form-description-ls":Fi("form-description-ls")},Ei=(e,r,t,n)=>E`
    font-family: ${Fi("font-family")};
    font-size: ${Fi(e)};
    font-weight: ${Fi(r)};
    line-height: ${Fi(t)};
    letter-spacing: ${Fi(n)};
`,ki={"header-xxl-light":Ei("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Ei("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Ei("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Ei("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Ei("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Ei("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Ei("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Ei("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Ei("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Ei("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Ei("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Ei("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Ei("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Ei("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Ei("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Ei("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Ei("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Ei("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Ei("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Ei("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Ei("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Ei("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Ei("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Ei("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Ei("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Ei("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Ei("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Ei("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Ei("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Ei("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Ei("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Ei("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Ei("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Ei("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Ei("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Ei("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Ei("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Ei("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Ei("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Ei("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"form-label":Ei("form-label-size","weight-semibold","form-label-lh","form-label-ls"),"form-description":Ei("form-description-size","weight-regular","form-description-lh","form-description-ls")},Di={collections:{lifesg:ki,bookingsg:ki,rbs:ki,mylegacy:ki,ccube:ki,pa:ki},defaultValue:"lifesg"},_i=e=>r=>{var t;const n=r.theme,i=ei(Di,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Kn(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},Oi={"header-xxl-light":_i("header-xxl-light"),"header-xxl-regular":_i("header-xxl-regular"),"header-xxl-semibold":_i("header-xxl-semibold"),"header-xxl-bold":_i("header-xxl-bold"),"header-xl-light":_i("header-xl-light"),"header-xl-regular":_i("header-xl-regular"),"header-xl-semibold":_i("header-xl-semibold"),"header-xl-bold":_i("header-xl-bold"),"header-lg-light":_i("header-lg-light"),"header-lg-regular":_i("header-lg-regular"),"header-lg-semibold":_i("header-lg-semibold"),"header-lg-bold":_i("header-lg-bold"),"header-md-light":_i("header-md-light"),"header-md-regular":_i("header-md-regular"),"header-md-semibold":_i("header-md-semibold"),"header-md-bold":_i("header-md-bold"),"header-sm-light":_i("header-sm-light"),"header-sm-regular":_i("header-sm-regular"),"header-sm-semibold":_i("header-sm-semibold"),"header-sm-bold":_i("header-sm-bold"),"header-xs-light":_i("header-xs-light"),"header-xs-regular":_i("header-xs-regular"),"header-xs-semibold":_i("header-xs-semibold"),"header-xs-bold":_i("header-xs-bold"),"body-baseline-light":_i("body-baseline-light"),"body-baseline-regular":_i("body-baseline-regular"),"body-baseline-semibold":_i("body-baseline-semibold"),"body-baseline-bold":_i("body-baseline-bold"),"body-md-light":_i("body-md-light"),"body-md-regular":_i("body-md-regular"),"body-md-semibold":_i("body-md-semibold"),"body-md-bold":_i("body-md-bold"),"body-sm-light":_i("body-sm-light"),"body-sm-regular":_i("body-sm-regular"),"body-sm-semibold":_i("body-sm-semibold"),"body-sm-bold":_i("body-sm-bold"),"body-xs-light":_i("body-xs-light"),"body-xs-regular":_i("body-xs-regular"),"body-xs-semibold":_i("body-xs-semibold"),"body-xs-bold":_i("body-xs-bold"),"form-label":_i("form-label"),"form-description":_i("form-description")},Si={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Mi=e=>r=>{var t;const n=r.theme,i=ei(Si,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Kn(i,e,n.overrides.motion):i[e]},Ai={"duration-150":Mi("duration-150"),"duration-250":Mi("duration-250"),"duration-350":Mi("duration-350"),"duration-500":Mi("duration-500"),"duration-800":Mi("duration-800"),"duration-1000":Mi("duration-1000"),"ease-default":Mi("ease-default"),"ease-standard":Mi("ease-standard"),"ease-entrance":Mi("ease-entrance"),"ease-exit":Mi("ease-exit")},zi={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},ji=e=>r=>{var t;const n=r.theme,i=ei(zi,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Kn(i,e,n.overrides.radius)}px`:`${i[e]}px`},Bi={none:ji("none"),xs:ji("xs"),sm:ji("sm"),md:ji("md"),lg:ji("lg"),full:ji("full")},Ti={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ii=e=>r=>{var t;const n=r.theme,i=ei(Ti,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Kn(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Pi={"spacing-0":Ii("spacing-0"),"spacing-4":Ii("spacing-4"),"spacing-8":Ii("spacing-8"),"spacing-12":Ii("spacing-12"),"spacing-16":Ii("spacing-16"),"spacing-20":Ii("spacing-20"),"spacing-24":Ii("spacing-24"),"spacing-32":Ii("spacing-32"),"spacing-40":Ii("spacing-40"),"spacing-48":Ii("spacing-48"),"spacing-64":Ii("spacing-64"),"spacing-72":Ii("spacing-72"),"layout-xs":Ii("layout-xs"),"layout-sm":Ii("layout-sm"),"layout-md":Ii("layout-md"),"layout-lg":Ii("layout-lg"),"layout-xl":Ii("layout-xl"),"layout-xxl":Ii("layout-xxl"),"layout-xxxl":Ii("layout-xxxl")},Ri=Object.assign(Object.assign({},ui),{Primitive:ai}),Li=Object.assign(Object.assign({},Oi),{Spec:Ci}),Wi=Ai,Yi=Object.assign(Object.assign({},ni),{Util:pi}),Hi=Pi,Ni=Bi,Vi=yi,qi=xi,Qi=C.div`
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
`;var Zi;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Zi||(Zi={}));const Xi=({show:r=!1,rootId:t,onOverlayClick:n,children:i,backgroundOpacity:o,backgroundBlur:s=!0,disableTransition:a=!1,enableOverlayClick:l=!1,zIndex:d,id:c})=>{const[f,p]=m(null),[g,b]=m(),[v]=m((()=>Be.generate())),x=S(),w=h(),$=h(null),F=i&&u.cloneElement(i,{ref:$}),C=c?`lifesg-ds-overlay-root-${c}`:"lifesg-ds-overlay-root",E=null!=d?d:g?99999:99998;(e=>{const r=_();y((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Zi.Change,t)}),[r,e]),y((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Zi.Change,t)};return null==r||r.events.on(Zi.Ready,t),()=>null==r?void 0:r.events.off(Zi.Ready,t)}),[r,e])})(E),y((()=>(A(),p(D()),()=>{T(),j().length<1&&z("remove")})),[]),y((()=>{if(r){const e=O();k(e),B();const r=setTimeout((()=>{z("add")}),200);return()=>clearTimeout(r)}{T();const e=setTimeout((()=>{j().length<1&&z("remove")}),200);return()=>clearTimeout(e)}}),[r]);const k=e=>{w.current=e,b(e)},D=()=>document&&t?document.getElementById(t):document?document.body:null,O=()=>j().length>0,A=()=>{if(!document.getElementById(Ji)){const e=document.createElement("style");e.id=Ji;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${Ki} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Ki}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},z=e=>{const r=document.body.classList.contains(Ki);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Ki):document.body.classList.add(Ki)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},B=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},T=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},I=e=>{var r;const t=null===(r=$.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&l&&(e.preventDefault(),n())};return f?N.createPortal(e(Qi,{id:C,"data-testid":C,$show:r,$zIndex:E,children:i&&e(M,{id:x,children:e(Ui,{"data-testid":"overlay-wrapper",$show:r,$stacked:g,$backgroundBlur:s,$disableTransition:a,onClick:I,children:F})})}),f):null},Gi=r=>e(O,{children:e(Xi,Object.assign({},r))}),Ji="lifesg-ds-overlay-stylesheet",Ki="lifesg-ds-overlay-open",eo=u.createContext({mode:"default",rootNode:{current:null}}),ro=C.div`
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
    animation: ${to} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,io=C(no)`
    animation-delay: -0.45s;
`,oo=C(no)`
    animation-delay: -0.3s;
`,so=C(no)`
    animation-delay: -0.15s;
`,ao=C.button`
    padding: ${Hi["spacing-8"]} ${Hi["spacing-16"]};
    min-width: 4rem;
    border: ${Yi["width-010"]} ${Yi.solid} transparent;
    border-radius: ${Ni.sm};
    transition: all ${Wi["duration-250"]} ${Wi["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return E`
                    background-color: ${Ri.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Ri["border-error-strong"]:Ri["border-primary"]};

                    color: ${e.$buttonIsDanger?Ri["text-error"]:Ri["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ri["bg-hover-neutral"]};
                    }
                `;case"light":return E`
                    background-color: ${Ri.bg};
                    border-color: ${Ri.border};

                    color: ${e.$buttonIsDanger?Ri["text-error"]:Ri["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ri["bg-hover-neutral"]};
                    }
                `;case"link":return E`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ri["text-error"]:Ri["text-primary"]};
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
                    background-color: ${e.$buttonIsDanger?Ri["bg-error-strong"]:Ri["bg-primary"]};

                    ${qi.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Ri["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ri["bg-error-strong-hover"]:Ri["bg-primary-hover"]};
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
                    ${Li["header-md-semibold"]}

                    ${qi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return E`
                    height: 3rem;
                    ${Li["header-xs-semibold"]}

                    ${qi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,lo=C((({color:t,className:n,size:i})=>r(ro,{className:n,$size:i,$color:t,children:[e(no,{id:"inner1"}),e(io,{id:"inner2"}),e(oo,{id:"inner3"}),e(so,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,co=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=t,d=le(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(ao,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(lo,{}),e("span",{children:i})]}))};co.displayName="Button.Default";const uo=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=t,d=le(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(ao,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(lo,{}),e("span",{children:i})]}))};uo.displayName="Button.Small";const ho=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=t,d=le(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(ao,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[s&&e(lo,{}),e("span",{children:i})]}))};ho.displayName="Button.Large";const mo={Default:u.forwardRef(co),Small:u.forwardRef(uo),Large:u.forwardRef(ho)},fo=k`
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
`,go=E`
    animation: ${Wi["duration-150"]} ${Wi["ease-default"]} ${fo};
    width: 100%;
    height: 100%;
    transition: color ${Wi["duration-150"]} ${Wi["ease-default"]};
`,bo=C(n)`
    ${go}
    color: ${Ri["icon-primary-subtlest"]};
`,yo=C(i)`
    ${go}
    color: ${Ri["icon-disabled-subtle"]};
`,vo=C(o)`
    ${go}
    color: ${e=>e.$disabled?Ri["icon-disabled-subtle"](e):Ri["icon-selected"](e)};
`,xo=C(s)`
    ${go}
    color: ${e=>e.$disabled?Ri["icon-disabled-subtle"](e):Ri["icon-selected"](e)};
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
        color: ${e=>!e.disabled&&Ri["icon-hover"](e)};
    }
`,$o=e=>{const{textSize:r}=e||{};return E`
        // Text styling
        ${r&&Li[`${r}-regular`]}

        strong {
            font-weight: ${Li.Spec["weight-semibold"]};
            ${r&&Li[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Li.Spec["weight-semibold"]};
            ${r&&Li[`${r}-semibold`]}
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
    `},Fo=(e,r,t=!1)=>E`
        ${Li[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Co=e=>{if(e)return E`
            ${r=e,E`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},Eo=(e,r)=>E`
    ${Fo(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?E`
            display: block;
            ${Co(t)}
        `:e?E`
            display: inline;
        `:E`
            display: block;
            ${Co(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${Ri.text};
`;var ko;!function(t){const n=(e,r,t)=>{const n=C(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Eo(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeaderXXL=n("h1","header-xxl","HeaderXXL"),t.HeaderXL=n("h2","header-xl","HeaderXL"),t.HeaderLG=n("h3","header-lg","HeaderLG"),t.HeaderMD=n("h4","header-md","HeaderMD"),t.HeaderSM=n("h5","header-sm","HeaderSM"),t.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,r)=>{const t=C.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Eo(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=C.a`
            ${e=>E`
                ${Fo(t,e.weight||"regular")}
                color: ${Ri.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Ri["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,s=le(t,["external","children"]);return r(i,Object.assign({},s,{children:[o,n&&e(Do,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(ko||(ko={}));const Do=C(ee)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,_o=C.div`
    padding: ${Hi["spacing-8"]} ${Hi["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=Ri["bg-error"](e),t=Ri["border-error"](e);break;case"success":r=Ri["bg-success"](e),t=Ri["border-success"](e);break;case"warning":default:r=Ri["bg-warning"](e),t=Ri["border-warning"](e);break;case"info":r=Ri["bg-info"](e),t=Ri["border-info"](e);break;case"description":r=Ri["bg-strong"](e),t=Ri["border-strong"](e)}return E`
            background: ${r};
            border-left: ${Yi["width-020"]} ${Yi.solid}
                ${t};
        `}}

    color: ${Ri.text};
    ${e=>"small"===e.$sizeType?$o({textSize:"body-sm"}):$o({textSize:"body-md"})}
`,Oo=C.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Hi["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=Ri["icon-error"](e);break;case"success":r=Ri["icon-success"](e);break;case"warning":default:r=Ri["icon-warning"](e);break;case"info":r=Ri["icon-info"](e);break;case"description":r=Ri["icon-subtle"](e)}return E`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,So=C(ko.LinkSM)`
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
                margin-bottom: ${Hi["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,zo=C.button`
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
`,jo=C(a)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Wi["duration-350"]} ${Wi["ease-standard"]};
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
                    color: ${Ri["icon-selected-disabled"]};
                `:E`
                    color: ${Ri["icon-disabled-subtle"]};
                `:e.$active?E`
                color: ${Ri["icon-selected"]};
            `:E`
            color: ${Ri["icon-subtle"]};
        `};
`,To=E`
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
`,Io=C.ol`
    ${To}

    margin-left: 3rem;

    ${qi.MaxWidth.lg} {
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
`,Po=C.ul`
    ${To}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Ro=r=>{var{size:t,bulletType:n,bottomMargin:i,children:o}=r,s=le(r,["size","bulletType","bottomMargin","children"]);return e(Po,Object.assign({$size:t,$bulletType:n,$bottomMargin:i},s,{children:o}))};Ro.displayName="TextList.Ul";const Lo=r=>{var{size:t,counterType:n,counterSeparator:i,bottomMargin:o,children:s}=r,a=le(r,["size","counterType","counterSeparator","bottomMargin","children"]);return e(Io,Object.assign({$size:t,$counterType:n,$counterSeparator:i,$bottomMargin:o},a,{children:s}))};Lo.displayName="TextList.Ol";const Wo=Ro,Yo=C.div`
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

                            &:has(${Qo}:hover) {
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

                        &:has(${Qo}:hover) {
                            background: ${Ri["bg-selected-hover"]};

                            & ${No} {
                                color: ${Ri["text-selected-hover"]};
                            }

                            & ${ts} {
                                color: ${Ri["icon-selected-hover"]};
                            }
                        }
                    `:E`
                    border: none;

                    &:has(${Qo}:hover) {
                        background: ${Ri["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?E`
                            border-color: ${Ri["border-error"]};
                        `:E`
                            border-color: ${Ri["border-error"]};

                            &:has(${Qo}:hover) {
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

                        &:has(${Qo}:hover) {
                            background: ${Ri["bg-selected-hover"]};

                            & ${No} {
                                color: ${Ri["text-selected-hover"]};
                            }

                            & ${ts} {
                                color: ${Ri["icon-selected-hover"]};
                            }
                        }
                    `:E`
                    border-color: ${Ri.border};

                    &:has(${Qo}:hover) {
                        background: ${Ri["bg-hover-subtle"]};
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
                    color: ${Ri["text-selected-disabled"]};
                `:E`
                    color: ${Ri["text-disabled"]};
                `:e.$selected?E`
                color: ${Ri["text-selected"]};
            `:E`
            color: ${Ri.text};
        `}
`,Vo=C.label`
    ${Li["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${qi.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${qi.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,qo=C.div`
    ${Li["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Li["body-md-semibold"]}
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
    color: ${e=>e.$disabled?Ri["text-disabled"]:Ri["text-error"]};
    white-space: nowrap;
    ${Li["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Xo=C.button`
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
`,Go=C.div`
    width: 100%;
    color: ${e=>e.$disabled?Ri["text-disabled"]:Ri["text-error"]};
    border: none;
    background: ${Ri.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Jo=C((t=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:a,sizeType:l="default",showIcon:d=!1,customIcon:c,maxCollapsedHeight:u}=t,h=le(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,p]=m(!1),[g,b]=m(!1),{height:v,ref:x}=Mr();y((()=>{w()}),[u,v]);const w=()=>{p(!u),b($())},$=()=>!(!v||!u)&&v>u;return r(_o,{className:i,$type:n,$sizeType:l,"data-testid":h["data-testid"],children:[d&&e(Oo,{$sizeType:l,$type:n,children:(()=>{if(n&&c)return c;switch(n){case"success":return e(K,{});case"warning":return e(G,{});case"error":return e(X,{});case"info":case"description":return e(J,{});default:return null}})()}),r(Mo,{children:[r(Ao,{$maxCollapsedHeight:$()?u:void 0,$showMore:f,$hasActionLink:!!s,children:[e("div",{ref:x,children:o}),s?r(So,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},s,{children:[s.children,a||e(Z,{})]})):null]}),g&&r(zo,{$sizeType:l,$type:n,type:"button",onClick:()=>p(!f),children:["Show ",f?"less":"more",e(jo,{$expanded:f})]})]})]})}))`
    width: 100%;
    user-select: none;
`,Ko=C.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Ri.bg};
    ${$o({textSize:"body-md"})}

    ${e=>e.$disabled?E`
                color: ${Ri["text-disabled"]};
            `:e.$selected?E`
                color: ${Ri["text-selected"]};
            `:E`
                color: ${Ri.text};
            `}
`,es=C(ko.BodyMD)`
    color: ${e=>e.$disabled?Ri["text-disabled"]:Ri["text-error"]};
`,rs=C(Wo)`
    color: ${e=>e.$disabled?Ri["text-disabled"]:Ri["text-error"]};
`,ts=C((({type:r,active:t=!1,disabled:n,className:i})=>{let o;switch(r){case"checkbox":o=e(t?oe:ie,{});break;case"radio":o=e(t?te:re,{});break;case"tick":o=e(se,{});break;case"cross":o=e(ne,{});break;default:o=null}return e(Bo,{className:i,$active:t,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?E`
                    color: ${Ri["icon-selected-disabled"]};
                `:E`
                    color: ${Ri["icon-disabled-subtle"]};
                `:e.$selected?E`
                color: ${Ri["icon-selected"]};
            `:E`
            color: ${Ri["icon-subtle"]};
        `};
`;var ns=ce((function(e){return null==e})),is=Object.defineProperty,os={};((e,r)=>{for(var t in r)is(e,t,{get:r[t],enumerable:!0})})(os,{assign:()=>Ps,colors:()=>Bs,createStringInterpolator:()=>Ms,skipAnimation:()=>Ts,to:()=>As,willAdvance:()=>Is});var ss=$s(),as=e=>ys(e,ss),ls=$s();as.write=e=>ys(e,ls);var ds=$s();as.onStart=e=>ys(e,ds);var cs=$s();as.onFrame=e=>ys(e,cs);var us=$s();as.onFinish=e=>ys(e,us);var hs=[];as.setTimeout=(e,r)=>{const t=as.now()+r,n=()=>{const e=hs.findIndex((e=>e.cancel==n));~e&&hs.splice(e,1),gs-=~e?1:0},i={time:t,handler:e,cancel:n};return hs.splice(ms(t),0,i),gs+=1,vs(),i};var ms=e=>~(~hs.findIndex((r=>r.time>e))||~hs.length);as.cancel=e=>{ds.delete(e),cs.delete(e),us.delete(e),ss.delete(e),ls.delete(e)},as.sync=e=>{bs=!0,as.batchedUpdates(e),bs=!1},as.throttle=e=>{let r;function t(){try{e(...r)}finally{r=null}}function n(...e){r=e,as.onStart(t)}return n.handler=e,n.cancel=()=>{ds.delete(t),r=null},n};var fs="undefined"!=typeof window?window.requestAnimationFrame:()=>{};as.use=e=>fs=e,as.now="undefined"!=typeof performance?()=>performance.now():Date.now,as.batchedUpdates=e=>e(),as.catch=console.error,as.frameLoop="always",as.advance=()=>{"demand"!==as.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ws()};var ps=-1,gs=0,bs=!1;function ys(e,r){bs?(r.delete(e),e(0)):(r.add(e),vs())}function vs(){ps<0&&(ps=0,"demand"!==as.frameLoop&&fs(xs))}function xs(){~ps&&(fs(xs),as.batchedUpdates(ws))}function ws(){const e=ps;ps=as.now();const r=ms(ps);r&&(Fs(hs.splice(0,r),(e=>e.handler())),gs-=r),gs?(ds.flush(),ss.flush(e?Math.min(64,ps-e):16.667),cs.flush(),ls.flush(),us.flush()):ps=-1}function $s(){let e=new Set,r=e;return{add(t){gs+=r!=e||e.has(t)?0:1,e.add(t)},delete:t=>(gs-=r==e&&e.has(t)?1:0,e.delete(t)),flush(t){r.size&&(e=new Set,gs-=r.size,Fs(r,(r=>r(t)&&e.add(r))),gs+=e.size,r=e)}}}function Fs(e,r){e.forEach((e=>{try{r(e)}catch(e){as.catch(e)}}))}function Cs(){}var Es={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function ks(e,r){if(Es.arr(e)){if(!Es.arr(r)||e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}return e===r}var Ds=(e,r)=>e.forEach(r);function _s(e,r,t){if(Es.arr(e))for(let n=0;n<e.length;n++)r.call(t,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&r.call(t,e[n],n)}var Os=e=>Es.und(e)?[]:Es.arr(e)?e:[e];function Ss(e,r){if(e.size){const t=Array.from(e);e.clear(),Ds(t,r)}}var Ms,As,zs=(e,...r)=>Ss(e,(e=>e(...r))),js=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Bs=null,Ts=!1,Is=Cs,Ps=e=>{e.to&&(As=e.to),e.now&&(as.now=e.now),void 0!==e.colors&&(Bs=e.colors),null!=e.skipAnimation&&(Ts=e.skipAnimation),e.createStringInterpolator&&(Ms=e.createStringInterpolator),e.requestAnimationFrame&&as.use(e.requestAnimationFrame),e.batchedUpdates&&(as.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Is=e.willAdvance),e.frameLoop&&(as.frameLoop=e.frameLoop)},Rs=new Set,Ls=[],Ws=[],Ys=0,Hs={get idle(){return!Rs.size&&!Ls.length},start(e){Ys>e.priority?(Rs.add(e),as.onStart(Ns)):(Vs(e),as(Qs))},advance:Qs,sort(e){if(Ys)as.onFrame((()=>Hs.sort(e)));else{const r=Ls.indexOf(e);~r&&(Ls.splice(r,1),qs(e))}},clear(){Ls=[],Rs.clear()}};function Ns(){Rs.forEach(Vs),Rs.clear(),as(Qs)}function Vs(e){Ls.includes(e)||qs(e)}function qs(e){Ls.splice(function(e,r){const t=e.findIndex(r);return t<0?e.length:t}(Ls,(r=>r.priority>e.priority)),0,e)}function Qs(e){const r=Ws;for(let t=0;t<Ls.length;t++){const n=Ls[t];Ys=n.priority,n.idle||(Is(n),n.advance(e),n.idle||r.push(n))}return Ys=0,(Ws=Ls).length=0,(Ls=r).length>0}var Us="[-+]?\\d*\\.?\\d+",Zs=Us+"%";function Xs(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Gs=new RegExp("rgb"+Xs(Us,Us,Us)),Js=new RegExp("rgba"+Xs(Us,Us,Us,Us)),Ks=new RegExp("hsl"+Xs(Us,Zs,Zs)),ea=new RegExp("hsla"+Xs(Us,Zs,Zs,Us)),ra=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ta=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,na=/^#([0-9a-fA-F]{6})$/,ia=/^#([0-9a-fA-F]{8})$/;function oa(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function sa(e,r,t){const n=t<.5?t*(1+r):t+r-t*r,i=2*t-n,o=oa(i,n,e+1/3),s=oa(i,n,e),a=oa(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function aa(e){const r=parseInt(e,10);return r<0?0:r>255?255:r}function la(e){return(parseFloat(e)%360+360)%360/360}function da(e){const r=parseFloat(e);return r<0?0:r>1?255:Math.round(255*r)}function ca(e){const r=parseFloat(e);return r<0?0:r>100?1:r/100}function ua(e){let r=function(e){let r;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(r=na.exec(e))?parseInt(r[1]+"ff",16)>>>0:Bs&&void 0!==Bs[e]?Bs[e]:(r=Gs.exec(e))?(aa(r[1])<<24|aa(r[2])<<16|aa(r[3])<<8|255)>>>0:(r=Js.exec(e))?(aa(r[1])<<24|aa(r[2])<<16|aa(r[3])<<8|da(r[4]))>>>0:(r=ra.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=ia.exec(e))?parseInt(r[1],16)>>>0:(r=ta.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=Ks.exec(e))?(255|sa(la(r[1]),ca(r[2]),ca(r[3])))>>>0:(r=ea.exec(e))?(sa(la(r[1]),ca(r[2]),ca(r[3]))|da(r[4]))>>>0:null}(e);if(null===r)return e;r=r||0;return`rgba(${(4278190080&r)>>>24}, ${(16711680&r)>>>16}, ${(65280&r)>>>8}, ${(255&r)/255})`}var ha=(e,r,t)=>{if(Es.fun(e))return e;if(Es.arr(e))return ha({range:e,output:r,extrapolate:t});if(Es.str(e.output[0]))return Ms(e);const n=e,i=n.output,o=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const r=function(e,r){for(var t=1;t<r.length-1&&!(r[t]>=e);++t);return t-1}(e,o);return function(e,r,t,n,i,o,s,a,l){let d=l?l(e):e;if(d<r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(d>t){if("identity"===a)return d;"clamp"===a&&(d=t)}if(n===i)return n;if(r===t)return e<=r?n:i;r===-1/0?d=-d:t===1/0?d-=r:d=(d-r)/(t-r);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[r],o[r+1],i[r],i[r+1],l,s,a,n.map)}};var ma=1.70158,fa=1.525*ma,pa=ma+1,ga=2*Math.PI/3,ba=2*Math.PI/4.5,ya=e=>{const r=7.5625,t=2.75;return e<1/t?r*e*e:e<2/t?r*(e-=1.5/t)*e+.75:e<2.5/t?r*(e-=2.25/t)*e+.9375:r*(e-=2.625/t)*e+.984375},va={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>pa*e*e*e-ma*e*e,easeOutBack:e=>1+pa*Math.pow(e-1,3)+ma*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-fa)/2:(Math.pow(2*e-2,2)*((fa+1)*(2*e-2)+fa)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*ga),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*ga)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ba)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ba)/2+1,easeInBounce:e=>1-ya(1-e),easeOutBounce:ya,easeInOutBounce:e=>e<.5?(1-ya(1-2*e))/2:(1+ya(2*e-1))/2,steps:(e,r="end")=>t=>{const n=(t="end"===r?Math.min(t,.999):Math.max(t,.001))*e,i="end"===r?Math.floor(n):Math.ceil(n);return o=0,s=1,a=i/e,Math.min(Math.max(a,o),s);var o,s,a}},xa=Symbol.for("FluidValue.get"),wa=Symbol.for("FluidValue.observers"),$a=e=>Boolean(e&&e[xa]),Fa=e=>e&&e[xa]?e[xa]():e,Ca=e=>e[wa]||null;function Ea(e,r){const t=e[wa];t&&t.forEach((e=>{!function(e,r){e.eventObserved?e.eventObserved(r):e(r)}(e,r)}))}var ka=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Da(this,e)}},Da=(e,r)=>Ma(e,xa,r);function _a(e,r){if(e[xa]){let t=e[wa];t||Ma(e,wa,t=new Set),t.has(r)||(t.add(r),e.observerAdded&&e.observerAdded(t.size,r))}return r}function Oa(e,r){const t=e[wa];if(t&&t.has(r)){const n=t.size-1;n?t.delete(r):e[wa]=null,e.observerRemoved&&e.observerRemoved(n,r)}}var Sa,Ma=(e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}),Aa=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,za=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ja=new RegExp(`(${Aa.source})(%|[a-z]+)`,"i"),Ba=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ta=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ia=e=>{const[r,t]=Pa(e);if(!r||js())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(n)return n.trim();if(t&&t.startsWith("--")){const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);return r||e}return t&&Ta.test(t)?Ia(t):t||e},Pa=e=>{const r=Ta.exec(e);if(!r)return[,];const[,t,n]=r;return[t,n]},Ra=(e,r,t,n,i)=>`rgba(${Math.round(r)}, ${Math.round(t)}, ${Math.round(n)}, ${i})`,La=e=>{Sa||(Sa=Bs?new RegExp(`(${Object.keys(Bs).join("|")})(?!\\w)`,"g"):/^\b$/);const r=e.output.map((e=>Fa(e).replace(Ta,Ia).replace(za,ua).replace(Sa,ua))),t=r.map((e=>e.match(Aa).map(Number))),n=t[0].map(((e,r)=>t.map((e=>{if(!(r in e))throw Error('The arity of each "output" value must be equal');return e[r]})))).map((r=>ha({...e,output:r})));return e=>{const t=!ja.test(r[0])&&r.find((e=>ja.test(e)))?.replace(Aa,"");let i=0;return r[0].replace(Aa,(()=>`${n[i++](e)}${t||""}`)).replace(Ba,Ra)}},Wa="react-spring: ",Ya=e=>{const r=e;let t=!1;if("function"!=typeof r)throw new TypeError(`${Wa}once requires a function parameter`);return(...e)=>{t||(r(...e),t=!0)}},Ha=Ya(console.warn);var Na=Ya(console.warn);function Va(e){return Es.str(e)&&("#"==e[0]||/\d/.test(e)||!js()&&Ta.test(e)||e in(Bs||{}))}var qa=js()?y:v,Qa=()=>{const e=h(!1);return qa((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ua(){const e=m()[1],r=Qa();return()=>{r.current&&e(Math.random())}}var Za=e=>y(e,Xa),Xa=[];function Ga(e){const r=h();return y((()=>{r.current=e})),r.current}var Ja=Symbol.for("Animated:node"),Ka=e=>e&&e[Ja],el=(e,r)=>((e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}))(e,Ja,r),rl=e=>e&&e[Ja]&&e[Ja].getPayload(),tl=class{constructor(){el(this,this)}getPayload(){return this.payload||[]}},nl=class extends tl{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Es.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new nl(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,r){return Es.num(e)&&(this.lastPosition=e,r&&(e=Math.round(e/r)*r,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Es.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},il=class extends nl{constructor(e){super(0),this._string=null,this._toString=ha({output:[e,e]})}static create(e){return new il(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Es.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ha({output:[this.getValue(),e]})),this._value=0,super.reset()}},ol={dependencies:null},sl=class extends tl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const r={};return _s(this.source,((t,n)=>{var i;(i=t)&&i[Ja]===i?r[n]=t.getValue(e):$a(t)?r[n]=Fa(t):e||(r[n]=t)})),r}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ds(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const r=new Set;return _s(e,this._addToPayload,r),Array.from(r)}}_addToPayload(e){ol.dependencies&&$a(e)&&ol.dependencies.add(e);const r=rl(e);r&&Ds(r,(e=>this.add(e)))}},al=class extends sl{constructor(e){super(e)}static create(e){return new al(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const r=this.getPayload();return e.length==r.length?r.map(((r,t)=>r.setValue(e[t]))).some(Boolean):(super.setValue(e.map(ll)),!0)}};function ll(e){return(Va(e)?il:nl).create(e)}function dl(e){const r=Ka(e);return r?r.constructor:Es.arr(e)?al:Va(e)?il:nl}var cl=(e,r)=>{const t=!Es.fun(e)||e.prototype&&e.prototype.isReactComponent;return w(((n,i)=>{const o=h(null),s=t&&$((e=>{o.current=function(e,r){e&&(Es.fun(e)?e(r):e.current=r);return r}(i,e)}),[i]),[a,l]=function(e,r){const t=new Set;ol.dependencies=t,e.style&&(e={...e,style:r.createAnimatedStyle(e.style)});return e=new sl(e),ol.dependencies=null,[e,t]}(n,r),d=Ua(),u=()=>{const e=o.current;if(t&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,a.getValue(!0)))&&d()},m=new ul(u,l),f=h();qa((()=>(f.current=m,Ds(l,(e=>_a(e,m))),()=>{f.current&&(Ds(f.current.deps,(e=>Oa(e,f.current))),as.cancel(f.current.update))}))),y(u,[]),Za((()=>()=>{const e=f.current;Ds(e.deps,(r=>Oa(r,e)))}));const p=r.getComponentProps(a.getValue());return c.createElement(e,{...p,ref:s})}))},ul=class{constructor(e,r){this.update=e,this.deps=r}eventObserved(e){"change"==e.type&&as.write(this.update)}};var hl=Symbol.for("AnimatedComponent"),ml=e=>Es.str(e)?e:e&&Es.str(e.displayName)?e.displayName:Es.fun(e)&&e.name||null;function fl(e,...r){return Es.fun(e)?e(...r):e}var pl=(e,r)=>!0===e||!!(r&&e&&(Es.fun(e)?e(r):Os(e).includes(r))),gl=(e,r)=>Es.obj(e)?r&&e[r]:e,bl=(e,r)=>!0===e.default?e[r]:e.default?e.default[r]:void 0,yl=e=>e,vl=(e,r=yl)=>{let t=xl;e.default&&!0!==e.default&&(e=e.default,t=Object.keys(e));const n={};for(const i of t){const t=r(e[i],i);Es.und(t)||(n[i]=t)}return n},xl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],wl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function $l(e){const r=function(e){const r={};let t=0;if(_s(e,((e,n)=>{wl[n]||(r[n]=e,t++)})),t)return r}(e);if(r){const t={to:r};return _s(e,((e,n)=>n in r||(t[n]=e))),t}return{...e}}function Fl(e){return e=Fa(e),Es.arr(e)?e.map(Fl):Va(e)?os.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Cl(e){return Es.fun(e)||Es.arr(e)&&Es.obj(e[0])}var El={tension:170,friction:26,mass:1,damping:1,easing:va.linear,clamp:!1},kl=class{constructor(){this.velocity=0,Object.assign(this,El)}};function Dl(e,r){if(Es.und(r.decay)){const t=!Es.und(r.tension)||!Es.und(r.friction);!t&&Es.und(r.frequency)&&Es.und(r.damping)&&Es.und(r.mass)||(e.duration=void 0,e.decay=void 0),t&&(e.frequency=void 0)}else e.duration=void 0}var _l=[],Ol=class{constructor(){this.changed=!1,this.values=_l,this.toValues=null,this.fromValues=_l,this.config=new kl,this.immediate=!1}};function Sl(e,{key:r,props:t,defaultProps:n,state:i,actions:o}){return new Promise(((s,a)=>{let l,d,c=pl(t.cancel??n?.cancel,r);if(c)m();else{Es.und(t.pause)||(i.paused=pl(t.pause,r));let e=n?.pause;!0!==e&&(e=i.paused||pl(e,r)),l=fl(t.delay||0,r),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-as.now()}function h(){l>0&&!os.skipAnimation?(i.delayed=!0,d=as.setTimeout(m,l),i.pauseQueue.add(u),i.timeouts.add(d)):m()}function m(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...t,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var Ml=(e,r)=>1==r.length?r[0]:r.some((e=>e.cancelled))?jl(e.get()):r.every((e=>e.noop))?Al(e.get()):zl(e.get(),r.every((e=>e.finished))),Al=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),zl=(e,r,t=!1)=>({value:e,finished:r,cancelled:t}),jl=e=>({value:e,cancelled:!0,finished:!1});function Bl(e,r,t,n){const{callId:i,parentId:o,onRest:s}=r,{asyncTo:a,promise:l}=t;return o||e!==a||r.reset?t.promise=(async()=>{t.asyncId=i,t.asyncTo=e;const d=vl(r,((e,r)=>"onRest"===r?void 0:e));let c,u;const h=new Promise(((e,r)=>(c=e,u=r))),m=e=>{const r=i<=(t.cancelId||0)&&jl(n)||i!==t.asyncId&&zl(n,!1);if(r)throw e.result=r,u(e),e},f=(e,r)=>{const o=new Il,s=new Pl;return(async()=>{if(os.skipAnimation)throw Tl(t),s.result=zl(n,!1),u(s),s;m(o);const a=Es.obj(e)?{...e}:{...r,to:e};a.parentId=i,_s(d,((e,r)=>{Es.und(a[r])&&(a[r]=e)}));const l=await n.start(a);return m(o),t.paused&&await new Promise((e=>{t.resumeQueue.add(e)})),l})()};let p;if(os.skipAnimation)return Tl(t),zl(n,!1);try{let r;r=Es.arr(e)?(async e=>{for(const r of e)await f(r)})(e):Promise.resolve(e(f,n.stop.bind(n))),await Promise.all([r.then(c),h]),p=zl(n.get(),!0,!1)}catch(e){if(e instanceof Il)p=e.result;else{if(!(e instanceof Pl))throw e;p=e.result}}finally{i==t.asyncId&&(t.asyncId=o,t.asyncTo=o?a:void 0,t.promise=o?l:void 0)}return Es.fun(s)&&as.batchedUpdates((()=>{s(p,n,n.item)})),p})():l}function Tl(e,r){Ss(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,r&&(e.cancelId=r)}var Il=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Pl=class extends Error{constructor(){super("SkipAnimationSignal")}},Rl=e=>e instanceof Wl,Ll=1,Wl=class extends ka{constructor(){super(...arguments),this.id=Ll++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Ka(this);return e&&e.getValue()}to(...e){return os.to(this,e)}interpolate(...e){return Ha(`${Wa}The "interpolate" function is deprecated in v9 (use "to" instead)`),os.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,r=!1){Ea(this,{type:"change",parent:this,value:e,idle:r})}_onPriorityChange(e){this.idle||Hs.sort(this),Ea(this,{type:"priority",parent:this,priority:e})}},Yl=Symbol.for("SpringPhase"),Hl=e=>(1&e[Yl])>0,Nl=e=>(2&e[Yl])>0,Vl=e=>(4&e[Yl])>0,ql=(e,r)=>r?e[Yl]|=3:e[Yl]&=-3,Ql=(e,r)=>r?e[Yl]|=4:e[Yl]&=-5,Ul=class extends Wl{constructor(e,r){if(super(),this.animation=new Ol,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Es.und(e)||!Es.und(r)){const t=Es.obj(e)?{...e}:{...r,from:e};Es.und(t.default)&&(t.default=!0),this.start(t)}}get idle(){return!(Nl(this)||this._state.asyncTo)||Vl(this)}get goal(){return Fa(this.animation.to)}get velocity(){const e=Ka(this);return e instanceof nl?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Hl(this)}get isAnimating(){return Nl(this)}get isPaused(){return Vl(this)}get isDelayed(){return this._state.delayed}advance(e){let r=!0,t=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,s=rl(n.to);!s&&$a(n.to)&&(i=Os(Fa(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==il?1:s?s[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,o.tension<=0)return void(a.done=!0);let r=a.elapsedTime+=e;const t=n.fromValues[l],i=null!=a.v0?a.v0:a.v0=Es.arr(o.velocity)?o.velocity[l]:o.velocity;let s;const h=o.precision||(t==d?.005:Math.min(1,.001*Math.abs(d-t)));if(Es.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*r);u=t+i/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=i*n}else{s=null==a.lastVelocity?i:a.lastVelocity;const r=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Es.und(n),m=t==d?a.v0>0:t<d;let f,p=!1;const g=1,b=Math.ceil(e/g);for(let e=0;e<b&&(f=Math.abs(s)>r,f||(c=Math.abs(d-u)<=h,!c));++e){l&&(p=u==d||u>d==m,p&&(s=-s*n,u=d));s+=(1e-6*-o.tension*(u-d)+.001*-o.friction*s)/o.mass*g,u+=s*g}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,a.durationProgress>0&&(a.elapsedTime=o.duration*a.durationProgress,r=a.elapsedTime+=e)),n=(o.progress||0)+r/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=t+o.easing(n)*(d-t),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:r=!1,a.setValue(u,o.round)&&(t=!0)}));const a=Ka(this),l=a.getValue();if(r){const e=Fa(n.to);l===e&&!t||o.decay?t&&o.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else t&&this._onChange(l)}set(e){return as.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Nl(this)){const{to:e,config:r}=this.animation;as.batchedUpdates((()=>{this._onStart(),r.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,r){let t;return Es.und(e)?(t=this.queue||[],this.queue=[]):t=[Es.obj(e)?e:{...r,to:e}],Promise.all(t.map((e=>this._update(e)))).then((e=>Ml(this,e)))}stop(e){const{to:r}=this.animation;return this._focus(this.get()),Tl(this._state,e&&this._lastCallId),as.batchedUpdates((()=>this._stop(r,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const r=this.key||"";let{to:t,from:n}=e;t=Es.obj(t)?t[r]:t,(null==t||Cl(t))&&(t=void 0),n=Es.obj(n)?n[r]:n,null==n&&(n=void 0);const i={to:t,from:n};return Hl(this)||(e.reverse&&([t,n]=[n,t]),n=Fa(n),Es.und(n)?Ka(this)||this._set(t):this._set(n)),i}_update({...e},r){const{key:t,defaultProps:n}=this;e.default&&Object.assign(n,vl(e,((e,r)=>/^on/.test(r)?gl(e,t):e))),rd(this,e,"onProps"),td(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Sl(++this._lastCallId,{key:t,props:e,defaultProps:n,state:o,actions:{pause:()=>{Vl(this)||(Ql(this,!0),zs(o.pauseQueue),td(this,"onPause",zl(this,Zl(this,this.animation.to)),this))},resume:()=>{Vl(this)&&(Ql(this,!1),Nl(this)&&this._resume(),zs(o.resumeQueue),td(this,"onResume",zl(this,Zl(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((t=>{if(e.loop&&t.finished&&(!r||!t.noop)){const r=Xl(e);if(r)return this._update(r,!0)}return t}))}_merge(e,r,t){if(r.cancel)return this.stop(!0),t(jl(this));const n=!Es.und(e.to),i=!Es.und(e.from);if(n||i){if(!(r.callId>this._lastToId))return t(jl(this));this._lastToId=r.callId}const{key:o,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!i||n||r.default&&!Es.und(c)||(c=u),r.reverse&&([c,u]=[u,c]);const h=!ks(u,d);h&&(a.from=u),u=Fa(u);const m=!ks(c,l);m&&this._focus(c);const f=Cl(r.to),{config:p}=a,{decay:g,velocity:b}=p;(n||i)&&(p.velocity=0),r.config&&!f&&function(e,r,t){t&&(Dl(t={...t},r),r={...t,...r}),Dl(e,r),Object.assign(e,r);for(const r in El)null==e[r]&&(e[r]=El[r]);let{frequency:n,damping:i}=e;const{mass:o}=e;Es.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(p,fl(r.config,o),r.config!==s.config?fl(s.config,o):void 0);let y=Ka(this);if(!y||Es.und(c))return t(zl(this,!0));const v=Es.und(r.reset)?i&&!r.default:!Es.und(u)&&pl(r.reset,o),x=v?u:this.get(),w=Fl(c),$=Es.num(w)||Es.arr(w)||Va(w),F=!f&&(!$||pl(s.immediate||r.immediate,o));if(m){const e=dl(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=$a(c),k=!1;if(!E){const e=v||!Hl(this)&&h;(m||e)&&(k=ks(Fl(x),w),E=!k),(ks(a.immediate,F)||F)&&ks(p.decay,g)&&ks(p.velocity,b)||(E=!0)}if(k&&Nl(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!f&&((E||$a(l))&&(a.values=y.getPayload(),a.toValues=$a(c)?null:C==il?[1]:Os(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=a;Ds(ed,(e=>rd(this,r,e)));const n=zl(this,Zl(this,l));zs(this._pendingCalls,n),this._pendingCalls.add(t),a.changed&&as.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?fl(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),f?t(Bl(r.to,r,this._state,this)):E?this._start():Nl(this)&&!m?this._pendingCalls.add(t):t(Al(x))}_focus(e){const r=this.animation;e!==r.to&&(Ca(this)&&this._detach(),r.to=e,Ca(this)&&this._attach())}_attach(){let e=0;const{to:r}=this.animation;$a(r)&&(_a(r,this),Rl(r)&&(e=r.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;$a(e)&&Oa(e,this)}_set(e,r=!0){const t=Fa(e);if(!Es.und(t)){const e=Ka(this);if(!e||!ks(t,e.getValue())){const n=dl(t);e&&e.constructor==n?e.setValue(t):el(this,n.create(t)),e&&as.batchedUpdates((()=>{this._onChange(t,r)}))}}return Ka(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,td(this,"onStart",zl(this,Zl(this,e.to)),this))}_onChange(e,r){r||(this._onStart(),fl(this.animation.onChange,e,this)),fl(this.defaultProps.onChange,e,this),super._onChange(e,r)}_start(){const e=this.animation;Ka(this).reset(Fa(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Nl(this)||(ql(this,!0),Vl(this)||this._resume())}_resume(){os.skipAnimation?this.finish():Hs.start(this)}_stop(e,r){if(Nl(this)){ql(this,!1);const t=this.animation;Ds(t.values,(e=>{e.done=!0})),t.toValues&&(t.onChange=t.onPause=t.onResume=void 0),Ea(this,{type:"idle",parent:this});const n=r?jl(this.get()):zl(this.get(),Zl(this,e??t.to));zs(this._pendingCalls,n),t.changed&&(t.changed=!1,td(this,"onRest",n,this))}}};function Zl(e,r){const t=Fl(r);return ks(Fl(e.get()),t)}function Xl(e,r=e.loop,t=e.to){const n=fl(r);if(n){const i=!0!==n&&$l(n),o=(i||e).reverse,s=!i||i.reset;return Gl({...e,loop:r,default:!1,pause:void 0,to:!o||Cl(t)?t:void 0,from:s?e.from:void 0,reset:s,...i})}}function Gl(e){const{to:r,from:t}=e=$l(e),n=new Set;return Es.obj(r)&&Kl(r,n),Es.obj(t)&&Kl(t,n),e.keys=n.size?Array.from(n):null,e}function Jl(e){const r=Gl(e);return Es.und(r.default)&&(r.default=vl(r)),r}function Kl(e,r){_s(e,((e,t)=>null!=e&&r.add(t)))}var ed=["onStart","onRest","onChange","onPause","onResume"];function rd(e,r,t){e.animation[t]=r[t]!==bl(r,t)?gl(r[t],e.key):void 0}function td(e,r,...t){e.animation[r]?.(...t),e.defaultProps[r]?.(...t)}var nd=["onStart","onChange","onRest"],id=1,od=class{constructor(e,r){this.id=id++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),r&&(this._flush=r),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((r,t)=>e[t]=r.get())),e}set(e){for(const r in e){const t=e[r];Es.und(t)||this.springs[r].set(t)}}update(e){return e&&this.queue.push(Gl(e)),this}start(e){let{queue:r}=this;return e?r=Os(e).map(Gl):this.queue=[],this._flush?this._flush(this,r):(hd(this,r),sd(this,r))}stop(e,r){if(e!==!!e&&(r=e),r){const t=this.springs;Ds(Os(r),(r=>t[r].stop(!!e)))}else Tl(this._state,this._lastAsyncId),this.each((r=>r.stop(!!e)));return this}pause(e){if(Es.und(e))this.start({pause:!0});else{const r=this.springs;Ds(Os(e),(e=>r[e].pause()))}return this}resume(e){if(Es.und(e))this.start({pause:!1});else{const r=this.springs;Ds(Os(e),(e=>r[e].resume()))}return this}each(e){_s(this.springs,e)}_onFrame(){const{onStart:e,onChange:r,onRest:t}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Ss(e,(([e,r])=>{r.value=this.get(),e(r,this,this._item)})));const o=!n&&this._started,s=i||o&&t.size?this.get():null;i&&r.size&&Ss(r,(([e,r])=>{r.value=s,e(r,this,this._item)})),o&&(this._started=!1,Ss(t,(([e,r])=>{r.value=s,e(r,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}as.onFrame(this._onFrame)}};function sd(e,r){return Promise.all(r.map((r=>ad(e,r)))).then((r=>Ml(e,r)))}async function ad(e,r,t){const{keys:n,to:i,from:o,loop:s,onRest:a,onResolve:l}=r,d=Es.obj(r.default)&&r.default;s&&(r.loop=!1),!1===i&&(r.to=null),!1===o&&(r.from=null);const c=Es.arr(i)||Es.fun(i)?i:void 0;c?(r.to=void 0,r.onRest=void 0,d&&(d.onRest=void 0)):Ds(nd,(t=>{const n=r[t];if(Es.fun(n)){const i=e._events[t];r[t]=({finished:e,cancelled:r})=>{const t=i.get(n);t?(e||(t.finished=!1),r&&(t.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:r||!1})},d&&(d[t]=r[t])}}));const u=e._state;r.pause===!u.paused?(u.paused=r.pause,zs(r.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(r.pause=!0);const h=(n||Object.keys(e.springs)).map((t=>e.springs[t].start(r))),m=!0===r.cancel||!0===bl(r,"cancel");(c||m&&u.asyncId)&&h.push(Sl(++e._lastAsyncId,{props:r,state:u,actions:{pause:Cs,resume:Cs,start(r,t){m?(Tl(u,e._lastAsyncId),t(jl(e))):(r.onRest=a,t(Bl(c,r,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const f=Ml(e,await Promise.all(h));if(s&&f.finished&&(!t||!f.noop)){const t=Xl(r,s,i);if(t)return hd(e,[t]),ad(e,t,!0)}return l&&as.batchedUpdates((()=>l(f,e,e.item))),f}function ld(e,r){const t={...e.springs};return r&&Ds(Os(r),(e=>{Es.und(e.keys)&&(e=Gl(e)),Es.obj(e.to)||(e={...e,to:void 0}),ud(t,e,(e=>cd(e)))})),dd(e,t),t}function dd(e,r){_s(r,((r,t)=>{e.springs[t]||(e.springs[t]=r,_a(r,e))}))}function cd(e,r){const t=new Ul;return t.key=e,r&&_a(t,r),t}function ud(e,r,t){r.keys&&Ds(r.keys,(n=>{(e[n]||(e[n]=t(n)))._prepareNode(r)}))}function hd(e,r){Ds(r,(r=>{ud(e.springs,r,(r=>cd(r,e)))}))}var md,fd,pd=({children:e,...r})=>{const t=F(gd),n=r.pause||!!t.pause,i=r.immediate||!!t.immediate;r=function(e,r){const[t]=m((()=>({inputs:r,result:e()}))),n=h(),i=n.current;let o=i;o?Boolean(r&&o.inputs&&function(e,r){if(e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}(r,o.inputs))||(o={inputs:r,result:e()}):o=t;return y((()=>{n.current=o,i==t&&(t.inputs=t.result=void 0)}),[o]),o.result}((()=>({pause:n,immediate:i})),[n,i]);const{Provider:o}=gd;return c.createElement(o,{value:r},e)},gd=(md=pd,fd={},Object.assign(md,c.createContext(fd)),md.Provider._context=md,md.Consumer._context=md,md);pd.Provider=gd.Provider,pd.Consumer=gd.Consumer;var bd=()=>{const e=[],r=function(r){Na(`${Wa}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Ds(e,((e,i)=>{if(Es.und(r))n.push(e.start());else{const o=t(r,e,i);o&&n.push(e.start(o))}})),n};r.current=e,r.add=function(r){e.includes(r)||e.push(r)},r.delete=function(r){const t=e.indexOf(r);~t&&e.splice(t,1)},r.pause=function(){return Ds(e,(e=>e.pause(...arguments))),this},r.resume=function(){return Ds(e,(e=>e.resume(...arguments))),this},r.set=function(r){Ds(e,((e,t)=>{const n=Es.fun(r)?r(t,e):r;n&&e.set(n)}))},r.start=function(r){const t=[];return Ds(e,((e,n)=>{if(Es.und(r))t.push(e.start());else{const i=this._getProps(r,e,n);i&&t.push(e.start(i))}})),t},r.stop=function(){return Ds(e,(e=>e.stop(...arguments))),this},r.update=function(r){return Ds(e,((e,t)=>e.update(this._getProps(r,e,t)))),this};const t=function(e,r,t){return Es.fun(e)?e(t,r):e};return r._getProps=t,r};function yd(e,r){const t=Es.fun(e),[[n],i]=function(e,r,t){const n=Es.fun(r)&&r;n&&!t&&(t=[]);const i=x((()=>n||3==arguments.length?bd():void 0),[]),o=h(0),s=Ua(),a=x((()=>({ctrls:[],queue:[],flush(e,r){const t=ld(e,r),n=o.current>0&&!a.queue.length&&!Object.keys(t).some((r=>!e.springs[r]));return n?sd(e,r):new Promise((n=>{dd(e,t),a.queue.push((()=>{n(sd(e,r))})),s()}))}})),[]),l=h([...a.ctrls]),d=[],c=Ga(e)||0;function u(e,t){for(let i=e;i<t;i++){const e=l.current[i]||(l.current[i]=new od(null,a.flush)),t=n?n(i,e):r[i];t&&(d[i]=Jl(t))}}x((()=>{Ds(l.current.slice(e,c),(e=>{!function(e,r){e.ref?.delete(e),r?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,u(c,e)}),[e]),x((()=>{u(0,Math.min(c,e))}),t);const m=l.current.map(((e,r)=>ld(e,d[r]))),f=F(pd),p=Ga(f),g=f!==p&&function(e){for(const r in e)return!0;return!1}(f);qa((()=>{o.current++,a.ctrls=l.current;const{queue:e}=a;e.length&&(a.queue=[],Ds(e,(e=>e()))),Ds(l.current,((e,r)=>{i?.add(e),g&&e.start({default:f});const t=d[r];t&&(function(e,r){r&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r)}(e,t.ref),e.ref?e.queue.push(t):e.start(t))}))})),Za((()=>()=>{Ds(a.ctrls,(e=>e.stop(!0)))}));const b=m.map((e=>({...e})));return i?[b,i]:b}(1,t?e:[e],t?r||[]:r);return t||2==arguments.length?[n,i]:n}var vd=class extends Wl{constructor(e,r){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ha(...r);const t=this._get(),n=dl(t);el(this,n.create(t))}advance(e){const r=this._get();ks(r,this.get())||(Ka(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&wd(this._active)&&$d(this)}_get(){const e=Es.arr(this.source)?this.source.map(Fa):Os(Fa(this.source));return this.calc(...e)}_start(){this.idle&&!wd(this._active)&&(this.idle=!1,Ds(rl(this),(e=>{e.done=!1})),os.skipAnimation?(as.batchedUpdates((()=>this.advance())),$d(this)):Hs.start(this))}_attach(){let e=1;Ds(Os(this.source),(r=>{$a(r)&&_a(r,this),Rl(r)&&(r.idle||this._active.add(r),e=Math.max(e,r.priority+1))})),this.priority=e,this._start()}_detach(){Ds(Os(this.source),(e=>{$a(e)&&Oa(e,this)})),this._active.clear(),$d(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Os(this.source).reduce(((e,r)=>Math.max(e,(Rl(r)?r.priority:0)+1)),0))}};function xd(e){return!1!==e.idle}function wd(e){return!e.size||Array.from(e).every(xd)}function $d(e){e.idle||(e.idle=!0,Ds(rl(e),(e=>{e.done=!0})),Ea(e,{type:"idle",parent:e}))}os.assign({createStringInterpolator:La,to:(e,r)=>new vd(e,r)});var Fd=/^--/;function Cd(e,r){return null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||Fd.test(e)||kd.hasOwnProperty(e)&&kd[e]?(""+r).trim():r+"px"}var Ed={};var kd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dd=["Webkit","Ms","Moz","O"];kd=Object.keys(kd).reduce(((e,r)=>(Dd.forEach((t=>e[((e,r)=>e+r.charAt(0).toUpperCase()+r.substring(1))(t,r)]=e[r])),e)),kd);var _d=/^(matrix|translate|scale|rotate|skew)/,Od=/^(translate)/,Sd=/^(rotate|skew)/,Md=(e,r)=>Es.num(e)&&0!==e?e+r:e,Ad=(e,r)=>Es.arr(e)?e.every((e=>Ad(e,r))):Es.num(e)?e===r:parseFloat(e)===r,zd=class extends sl{constructor({x:e,y:r,z:t,...n}){const i=[],o=[];(e||r||t)&&(i.push([e||0,r||0,t||0]),o.push((e=>[`translate3d(${e.map((e=>Md(e,"px"))).join(",")})`,Ad(e,0)]))),_s(n,((e,r)=>{if("transform"===r)i.push([e||""]),o.push((e=>[e,""===e]));else if(_d.test(r)){if(delete n[r],Es.und(e))return;const t=Od.test(r)?"px":Sd.test(r)?"deg":"";i.push(Os(e)),o.push("rotate3d"===r?([e,r,n,i])=>[`rotate3d(${e},${r},${n},${Md(i,t)})`,Ad(i,0)]:e=>[`${r}(${e.map((e=>Md(e,t))).join(",")})`,Ad(e,r.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new jd(i,o)),super(n)}},jd=class extends ka{constructor(e,r){super(),this.inputs=e,this.transforms=r,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",r=!0;return Ds(this.inputs,((t,n)=>{const i=Fa(t[0]),[o,s]=this.transforms[n](Es.arr(i)?i:t.map(Fa));e+=" "+o,r=r&&s})),r?"none":e}observerAdded(e){1==e&&Ds(this.inputs,(e=>Ds(e,(e=>$a(e)&&_a(e,this)))))}observerRemoved(e){0==e&&Ds(this.inputs,(e=>Ds(e,(e=>$a(e)&&Oa(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ea(this,e)}};os.assign({batchedUpdates:q,createStringInterpolator:La,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Bd=((e,{applyAnimatedValues:r=(()=>!1),createAnimatedStyle:t=(e=>new sl(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:r,createAnimatedStyle:t,getComponentProps:n},o=e=>{const r=ml(e)||"Anonymous";return(e=Es.str(e)?o[e]||(o[e]=cl(e,i)):e[hl]||(e[hl]=cl(e,i))).displayName=`Animated(${r})`,e};return _s(e,((r,t)=>{Es.arr(e)&&(t=ml(r)),o[t]=o(r)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,r){if(!e.nodeType||!e.setAttribute)return!1;const t="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:s,viewBox:a,...l}=r,d=Object.values(l),c=Object.keys(l).map((r=>t||e.hasAttribute(r)?r:Ed[r]||(Ed[r]=r.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const r in n)if(n.hasOwnProperty(r)){const t=Cd(r,n[r]);Fd.test(r)?e.style.setProperty(r,t):e.style[r]=t}c.forEach(((r,t)=>{e.setAttribute(r,d[t])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new zd(e),getComponentProps:({scrollTop:e,scrollLeft:r,...t})=>t}),Td=Bd.animated;const Id=C.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,t=e.animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${qi.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Pd=r=>{var{id:t="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:a,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=r,u=le(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,f]=m(),[p,g]=m();y((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),y((()=>{var e,r;n&&c&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[n]);const b=()=>{const e=.01*window.innerHeight;f(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;f(e),g(window.visualViewport.offsetTop)}};return e(Gi,{"data-testid":`${t}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:t,rootId:a,zIndex:l,children:e(Id,Object.assign({show:n,animationFrom:i,"data-testid":t,verticalHeight:h,offsetTop:p},u,{children:o}))})},Rd=C.div`
    border-radius: ${Ni.md};
    background: ${Ri.bg};
    padding: ${Hi["spacing-16"]} ${Hi["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Ld=C.button`
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
`,Wd=u.forwardRef(((r,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=r,a=le(r,["children","focusHighlight","focusOutline","type"]);return e(Ld,Object.assign({ref:t,$outline:o,$highlight:i,type:s},a,{children:n}))})),Yd=C.div`
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
`,Hd=C(Wd)`
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
`,Nd=C.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Vd=C((r=>{var{children:t}=r,n=le(r,["children"]);const i=n["data-testid"]||"card";return e(Rd,Object.assign({},n,{"data-testid":i,children:"string"==typeof t?e(ko.BodyBL,{children:t}):t}))}))`
    color: ${Ri.text};
    ${$o({textSize:"body-md"})}

    ${qi.MaxWidth.sm} {
        display: none;
    }
`,qd=C((t=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:s=!0}=t,a=le(t,["id","children","onClose","showCloseButton"]);return r(Yd,Object.assign({"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[s&&e(Hd,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(ne,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Qd=C.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ri.text};
    ${$o({textSize:"body-md"})}
`,Ud=n=>{var{children:i,visible:o,onMobileClose:s}=n,a=le(n,["children","visible","onMobileClose"]);const l=a["data-testid"]||"popover",d=D(),c=Vi["sm-max"]({theme:d}),u=me.useMediaQuery({maxWidth:c}),h=()=>{s&&s()},m=()=>"string"==typeof i?e(ko.BodyMD,{children:i}):i;return r(t,{children:[o&&e(Nd,Object.assign({"data-testid":l},a,{children:e(Vd,{children:m()})})),u&&e(Pd,{show:null!=o&&o,onOverlayClick:h,children:e(qd,{onClose:h,children:e(Qd,{children:m()})})})]})},Zd=C.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Xd=n=>{var i,o,{children:s,popoverContent:a,trigger:l="click",position:d="top",zIndex:c,rootNode:u,customOffset:f,delay:p,onPopoverAppear:g,onPopoverDismiss:b}=n,v=le(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[x,w]=m(!1),$=h(null),F=h(null),C=D(),E=Vi["sm-max"]({theme:C}),k=me.useMediaQuery({maxWidth:E}),{refs:O,floatingStyles:S,context:M}=A({open:x,placement:d,whileElementsMounted:z,middleware:[j(null!=f?f:16),B(),T({limiter:I()})],onOpenChange:e=>{w(e),x!==e&&J(e)}}),N=(()=>{const[e,r]=m(void 0),t=_();return y((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Zi.Change,e),t.events.emit(Zi.Ready),()=>t.events.off(Zi.Change,e)}),[t]),e})(),V=k?"click":l,q=P(M,{ignoreMouse:"hover"===V}),Q=R(M),U=L(M,{enabled:"hover"===V,delay:{open:null!==(i=null==p?void 0:p.open)&&void 0!==i?i:0,close:null!==(o=null==p?void 0:p.close)&&void 0!==o?o:500}}),{getReferenceProps:Z,getFloatingProps:X}=W([q,Q,U]),G=()=>{w(!1),J(!1)},J=e=>{e&&g&&g(),!e&&b&&b()};return r(t,{children:[e(Zd,Object.assign({ref:e=>{$.current=e,O.setReference(e)}},Z({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:s})),x&&e(Y,{root:u,children:e(H,{context:M,children:e("div",Object.assign({ref:e=>{F.current=e,O.setFloating(e)},style:Object.assign(Object.assign({},S),{outline:"none",zIndex:null!=c?c:N})},X(),{children:"function"==typeof a?a():e(Ud,{visible:!0,onMobileClose:G,children:a})}))})})]})},Gd=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Jd=C.span`
    color: ${Ri["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Gd(e)}

    &:hover,
    &:focus-visible {
        color: ${Ri["text-hover"]};
        ${({$hoverStyle:e})=>Gd(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Kd=C.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,ec=t=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:s="default",underlineHoverStyle:a="default"}=t,l=le(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return e(Xd,Object.assign({},l,{children:r(Jd,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:s,$hoverStyle:a,"aria-label":null!=n?n:d?void 0:"More info",children:[i,o&&e(Kd,{$standalone:!d,children:o})]})}))},rc=C.div`
    padding-left: ${Hi["spacing-4"]};
    display: inline;
`,tc=({addon:r,rootNode:t})=>{const{content:n,type:i,icon:o,id:s,zIndex:a,"data-testid":l}=r;return e(rc,{children:e(ec,{trigger:"click",id:s,"data-testid":l,popoverContent:n,rootNode:t,zIndex:a,icon:null!=o?o:e(J,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},nc=C.div`
    background-color: ${e=>e.$collapsible?Ri["bg-strong"]:Ri.bg};
    ${qi.MaxWidth.lg} {
        background-color: ${Ri["bg-strong"]};
    }
`,ic=C.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Ri.border};

    ${qi.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${Hi["spacing-16"]};
    }
`,oc=C.div`
    display: flex;
    align-items: center;

    background-color: ${Ri.bg};

    ${qi.MaxWidth.lg} {
        background-color: transparent;
    }
`,sc=C(Wd)`
    margin: 0 0 0 auto;

    color: ${Ri.icon};
    &:hover {
        color: ${Ri["icon-hover"]};
    }
`,ac=C(Q)`
    height: ${Li.Spec["body-size-baseline"]};
    width: ${Li.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Wi["duration-350"]} ${Wi["ease-standard"]};
`,lc=C.p`
    ${Li["header-xs-semibold"]}
    color: ${Ri.text};

    margin: ${Hi["spacing-24"]} 0 ${Hi["spacing-24"]}
        ${Hi["spacing-20"]};

    ${qi.MaxWidth.lg} {
        ${Li["body-md-semibold"]}
        color: ${Ri["text-subtle"]};

        margin: ${Hi["spacing-24"]} ${Hi["spacing-20"]} 0
            ${Hi["spacing-20"]};
    }
`,dc=C(Td.div)`
    overflow: hidden;
`,cc=C.div`
    padding: ${Hi["spacing-24"]} ${Hi["spacing-20"]};
`,uc=C(Td.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,hc=C(mo.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Hi["spacing-16"]} 0 0 0;
`,mc=t=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:s,onExpandChange:a,minimisable:l=!1,minimisedHeight:d,showDivider:c=!0,showMobileDivider:u=!0,title:h,addon:f,children:p}=t,g=le(t,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:b,rootNode:v}=F(eo),x="mobile"===b,[w,$]=m(M()),[C,E]=m(l),k=!x&&i,D=Mr(),_=Mr(),O=yd({height:w?D.height:0}),S=C?null!=d?d:Math.min(.5*(null!==(n=_.height)&&void 0!==n?n:0),216):_.height;y((()=>{$(M())}),[i,s]);function M(){return!!x||(ns(s)?!i||o:s)}return r(nc,{$collapsible:k,children:[e(ic,{$showDivider:c,$showMobileDivider:u}),(h||k)&&r(oc,{children:[h&&r(lc,{children:[h," ",f&&("popover"===(null==f?void 0:f.type)?e(tc,{addon:f,rootNode:x?v:void 0}):null)]}),k&&e(sc,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!w;ns(s)&&$(e),a&&a(e)},"aria-label":w?"Collapse":"Expand",children:e(ac,{$expanded:w})})]}),e(dc,{"data-testid":"expandable-container","data-expanded":w,style:O,children:e("div",{ref:D.ref,children:r(cc,Object.assign({},g,{children:[e(uc,{"data-testid":"minimisable-container",$height:S,$minimisable:l,children:e("div",{ref:_.ref,children:e("div",{"data-id":"content-container",children:"function"==typeof p?p(b,{minimised:C}):p})})}),l&&r(hc,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{E(!C)},children:["View ",C?"more":"less"]})]}))})})]})};mc.displayName="Filter.Item";const fc=C(mc)`
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
`,pc=C.div`
    display: flex;
    flex-direction: column;

    ${qi.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${Hi["spacing-16"]};
    }
`,gc=C.label`
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
`,bc=C((t=>{var{className:n,checked:i,disabled:o,indeterminate:s,onChange:a,onKeyPress:l,displaySize:d="default"}=t,c=le(t,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=h(null);y((()=>{u.current&&(u.current.indeterminate=null!=s&&s)}),[s]);const m=e=>{if(!o){const r=e;if(!(" "===r.key||"change"===e.type))return;a&&a(e),l&&l(r)}};return r(po,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:m,$displaySize:d,$disabled:o,$unchecked:!(s||i||o),children:[e(wo,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:m,disabled:o},c)),s?e(xo,{$disabled:o,"data-testid":"indeterminate"}):i?e(vo,{$disabled:o,"data-testid":"checkmark"}):o?e(yo,{"data-testid":"empty-disabled-checkbox"}):e(bo,{$disabled:o,"data-testid":"empty-checkbox"})]})}))`
    flex-shrink: 0;
    margin-right: ${Hi["spacing-8"]};
`,yc=C((({type:n="checkbox",indicator:i,checked:o,styleType:s="default",children:a,childrenMaxLines:l,subLabel:d,disabled:c,error:u,name:f,id:p,className:g,compositeSection:b,removable:v,onRemove:w,"data-testid":$,onChange:F,useContentWidth:C})=>{const{collapsible:E=!0,errors:k,children:D,initialExpanded:_}=b||{},[O,S]=m(o),[M,A]=m(!!_),z=x((()=>{const e=Array.isArray(k)&&(null==k?void 0:k.length)>0,r=!Array.isArray(k)&&!!k;return e||r}),[k]),[j]=m(Be.generate()),B=p?`${p}`:`tg-${j}`,T=h(null);y((()=>{S(o)}),[o]),y((()=>{O&&A(null==_||_)}),[O]);const I=()=>{c||A(!M)},P=()=>{c||!w||w()},R=()=>{let r;switch(n){case"yes":r="tick";break;case"no":r="cross";break;case"checkbox":case"radio":r=n}return e(ts,{type:r,active:O,disabled:c,$selected:O,$disabled:c})},L=()=>{if(!d)return null;let r;return r="function"==typeof d?d():d,e(qo,{"data-id":"toggle-sublabel",children:r})},W=n=>r(t,{children:[e(es,{weight:"semibold",$disabled:c,children:"Error"}),e(rs,{$disabled:c,children:null==n?void 0:n.map(((r,t)=>e("li",{id:`${B}-error-list-item-${t}`,children:e(es,{weight:"semibold",$disabled:c,children:r})},t)))})]});return r(Yo,{$selected:O,$disabled:c,className:g,$styleType:s,$error:u,$indicator:i,$useContentWidth:C,id:p,"data-testid":$,children:[r(Qo,{id:`${B}-header-container`,$disabled:c,$error:u,$selected:O,$indicator:i,$styleType:s,children:[r(Uo,{$addPadding:v,children:[e(Ho,{ref:T,name:f,id:`${B}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:c,onChange:e=>{if(!c){if(F)return void F(e);switch(n){case"checkbox":S((e=>!e));break;case"radio":case"yes":case"no":O||S(!0)}}},checked:O}),i&&R(),r(No,{$selected:O,$disabled:c,children:[e(Vo,{htmlFor:`${B}-input`,"data-testid":`${B}-toggle-label`,$maxLines:l,children:a}),d&&L()]})]}),v&&e(Zo,{type:"button",$disabled:c,onClick:P,id:`${B}-remove-button`,children:"Remove"})]}),D&&r("div",{children:[(!E||M)&&e(Ko,{"data-id":"toggle-composite-children",$isFinalItem:!E,$disabled:c,children:D}),E&&!M&&z&&e(Go,{$disabled:c,onClick:I,id:`${B}-error-alert`,children:e(Jo,{type:c?"description":"error",className:g,showIcon:!0,children:Array.isArray(k)?W(k):k})}),E&&r(Xo,{$paddingTopRequired:!M&&!z,disabled:c,onClick:I,"data-testid":M?"collapse-button":"expand-button",children:[M?"Show less":"Show more",e(M?U:Q,{"aria-hidden":!0})]})]})]})}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,vc=C(mo.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Hi["spacing-16"]} 0 ${Hi["spacing-8"]}
        ${Hi["spacing-12"]};

    ${qi.MaxWidth.lg} {
        margin: 0 0 ${Hi["spacing-16"]} 0;
    }
`,xc=n=>{var{selectedOptions:i,options:o,onSelect:s,labelExtractor:a,valueExtractor:l,useToggleContentWidth:d}=n,c=le(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:u}=F(eo),[f,p]=m(i||[]),[g,b]=m(),[v,x]=m(o.length),w=h(null),C=h(null),E=e=>()=>{const r=[...f],t=f.findIndex((r=>_(r)===_(e)));t>=0?r.splice(t,1):r.push(e),p(r),null==s||s(r)},k=()=>{const e=f.length?[]:o;p(e),null==s||s(e)},D=e=>{var r;return a?a(e):null!==(r=e.label)&&void 0!==r?r:null==e?void 0:e.toString()},_=e=>{var r;return l?l(e):null!==(r=e.value)&&void 0!==r?r:null==e?void 0:e.toString()},O=$((()=>{if(!w.current)return void b(void 0);const e=Array.from(w.current.children);let r=0,t=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(t++,n=o,t>2))break;r=i}x(r),b(t>2?n-8:void 0)}),[]);y((()=>{i!==f&&p(i||[])}),[i]),y((()=>{"default"===u?(()=>{const e=C.current?C.current.offsetTop+C.current.clientHeight:void 0;b(e)})():O()}),[o]),Mr({handleWidth:"mobile"===u,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:w,onResize:O});return e(fc,Object.assign({minimisable:o.length>5,minimisedHeight:g},c,{children:(n,{minimised:i})=>r(t,{children:[o.length<3?null:e(vc,{styleType:"link",type:"button",onClick:k,children:f.length?"Clear all":"Select all"}),e(pc,{role:"group","aria-label":c.title,ref:w,children:o.map(((t,o)=>"default"===n?((t,n,i)=>{const o=D(t),s=_(t),a=!!f.find((e=>_(e)===s));return r(gc,{$visible:!i||n<5,$selected:a,ref:4===n?C:void 0,children:[e(bc,{displaySize:"small",checked:a,onChange:E(t)}),o]},s)})(t,o,i):((r,t,n)=>{const i=D(r),o=_(r),s=!!f.find((e=>_(e)===o));return e(yc,{type:"checkbox",checked:s,$visible:!n||!!g&&t<=v,onChange:E(r),useContentWidth:d,children:i},o)})(t,o,i)))})]})}))};xc.displayName="Filter.Checkbox";const wc=C.div`
    background-color: ${Ri.bg};
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
`,Fc=(t,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left"}=t,c=le(t,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:a};return r($c,Object.assign({ref:n,"data-testid":c["data-testid"]||"button-with-icon",disabled:o},u,c,{children:[l,e("span",{children:i})]}))};Fc.displayName="ButtonWithIcon.Default";const Cc=(t,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left"}=t,c=le(t,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:a};return r($c,Object.assign({ref:n,"data-testid":c["data-testid"]||"button-with-icon",disabled:o},u,c,{children:[l,e("span",{children:i})]}))};Cc.displayName="ButtonWithIcon.Small";const Ec={Default:u.forwardRef(Fc),Small:u.forwardRef(Cc)},kc=C.div`
    background-color: ${Ri.bg};
    border: ${Yi["width-010"]} ${Yi.solid} ${Ri.border};
    border-radius: ${Ni.md};
    overflow: hidden;
    width: 100%;
`,Dc=C.div`
    background-color: ${Ri["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,_c=C.div`
    background-color: ${Ri.bg};
    height: 100%;
    width: 100%;
`,Oc=C.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,Sc=C.div`
    display: flex;
    align-items: center;

    background-color: ${Ri.bg};

    ${qi.MaxWidth.lg} {
        border-bottom: ${Yi["width-010"]} ${Yi.solid}
            ${Ri.border};
    }
`,Mc=C(ko.HeaderXS).attrs({as:"p"})`
    flex: 1;
    margin: ${Hi["spacing-24"]} 0 ${Hi["spacing-24"]}
        ${Hi["spacing-20"]};

    ${qi.MaxWidth.lg} {
        text-align: center;
        margin: ${Hi["spacing-24"]} 0;
    }
`,Ac=C(Wd)`
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
`,zc=C(mo.Small)`
    background-color: transparent;
    padding-right: ${Hi["spacing-20"]};
    padding-left: ${Hi["spacing-20"]};
    height: 100%;

    ${qi.MaxWidth.lg} {
        padding: ${Hi["spacing-24"]} ${Hi["spacing-20"]};
    }
`,jc=C(Ec.Default)`
    width: 100%;
`,Bc=C.div`
    padding: ${Hi["spacing-24"]} ${Hi["spacing-20"]};
    background-color: ${Ri.bg};
    border-top: ${Yi["width-010"]} ${Yi.solid} ${Ri.border};
`,Tc=C(mo.Default)`
    width: 100%;
`,Ic=({onDismiss:t,onDone:n,children:i})=>r(wc,{children:[e(Ac,{onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(ae,{})}),e(Oc,{children:i}),e(Bc,{children:e(Tc,{onClick:n,type:"button",children:"Done"})})]});Ic.displayName="Filter.Page";const Pc=n=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:o="light",headerTitle:s="Filters",clearButtonDisabled:a=!1,onClear:c,onDismiss:u,onDone:f,children:p}=n,g=le(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[b,v]=m(!1),x=h(null),w=h(null),$=D(),F=Vi["lg-max"]({theme:$}),C=me.useMediaQuery({maxWidth:F});y((()=>{C||k()}),[C]);const E=()=>{v(!0)},k=()=>{v(!1),u&&u()},_=()=>{v(!1),f&&f()},O=()=>{c&&c()},S=e=>"function"==typeof p?p(e):p,M=t=>r(Sc,{children:["mobile"===t&&e(Ac,{onClick:k,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(d,{})}),e(Mc,{weight:"semibold",children:s}),e(zc,{styleType:"link",type:"button",onClick:O,disabled:a,children:"Clear"})]});return e("div",Object.assign({},g,{children:e(eo.Provider,C?{value:{mode:"mobile",rootNode:x},children:r(t,{children:[e(jc,{"data-testid":"filter-show-button",styleType:o,onClick:E,type:"button",icon:e(l,{}),children:i}),e(Gi,{show:b,disableTransition:!0,children:e(_c,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:r(Dc,{ref:x,children:[M("mobile"),e(Oc,{children:S("mobile")}),e(Bc,{children:e(Tc,{onClick:_,type:"button",children:"Done"})})]})})})]})}:{value:{mode:"default",rootNode:w},children:r(kc,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:w,children:[M("default"),S("default")]})})}))};Pc.displayName="Filter";const Rc=Object.assign(Pc,{Item:mc,Page:Ic,Checkbox:xc});export{Rc as Filter};
//# sourceMappingURL=index.js.map
