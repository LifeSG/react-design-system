import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import{Chevron2LeftIcon as n}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as i}from"@lifesg/react-icons/chevron-2-right";import{ChevronLeftIcon as o}from"@lifesg/react-icons/chevron-left";import{ChevronLineLeftIcon as a}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as s}from"@lifesg/react-icons/chevron-line-right";import{ChevronRightIcon as l}from"@lifesg/react-icons/chevron-right";import{EllipsisHorizontalIcon as d}from"@lifesg/react-icons/ellipsis-horizontal";import*as c from"react";import u,{useRef as h,useState as f,isValidElement as b,createRef as g,cloneElement as m,PureComponent as p,useEffect as y,useLayoutEffect as v,useCallback as x,useMemo as w,forwardRef as $,useContext as F,useImperativeHandle as E}from"react";import C,{css as O,useTheme as D,keyframes as j}from"styled-components";import{findDOMNode as _}from"react-dom";import{ExclamationCircleFillIcon as S}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as A}from"@lifesg/react-icons/square";import{SquareTickFillIcon as k}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as B}from"@lifesg/react-icons/tick";import{CrossIcon as M}from"@lifesg/react-icons/cross";import{MagnifierIcon as z}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as T}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as L}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as I,useFloating as P,autoUpdate as R,offset as Y,flip as W,shift as H,limitShift as N,size as V,useTransitionStyles as q,useClick as U,useDismiss as Z,useInteractions as X,FloatingPortal as Q,FloatingFocusManager as J}from"@floating-ui/react";import{ExternalIcon as G}from"@lifesg/react-icons/external";var K="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ee(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var re,te={exports:{}};re=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,r,t)=>{var n,i=t(/*! react-is */"./node_modules/react-is/index.js"),o=t(/*! object-assign */"./node_modules/object-assign/index.js"),a=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",u="<<anonymous>>",h={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(d),arrayOf:function(e){return g((function(r,t,n,i,o){if("function"!=typeof e)return new b("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=r[t];if(!Array.isArray(s))return new b("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,i,o+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:g((function(r,t,n,i,o){var a=r[t];return e(a)?null:new b("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(e,r,t,n,o){var a=e[r];return i.isValidElementType(a)?null:new b("Invalid "+n+" `"+o+"` of type `"+v(a)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(r,t,n,i,o){if(!(r[t]instanceof e)){var a=e.name||u;return new b("Invalid "+i+" `"+o+"` of type `"+((s=r[t]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,r,t,n,i){return y(e[r])?null:new b("Invalid "+n+" `"+i+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(r,t,n,i,o){if("function"!=typeof e)return new b("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],d=v(l);if("object"!==d)return new b("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,i,o+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(r,t,n,i,o){for(var a=r[t],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===x(r)?String(r):r}));return new b("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(t)+" at index "+r+"."),d}return g((function(r,t,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,t,n,i,o,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new b("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(r,t,n,i,o){var s=r[t],l=v(s);if("object"!==l)return new b("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return p(n,i,o,d,x(c));var u=c(s,d,n,i,o+"."+d,a);if(u)return u}return null}))},exact:function(e){return g((function(r,t,n,i,l){var d=r[t],c=v(d);if("object"!==c)return new b("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},r[t],e);for(var h in u){var f=e[h];if(s(e,h)&&"function"!=typeof f)return p(n,i,l,h,x(f));if(!f)return new b("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=f(d,h,n,i,l+"."+h,a);if(g)return g}return null}))}};function f(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function b(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function g(e){var t={},i=0;function o(o,s,l,d,c,h,f){if(d=d||u,h=h||l,f!==a){if(r){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=d+":"+l;!t[m]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,i++)}}return null==s[l]?o?null===s[l]?new b("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new b("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,c,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function m(e){return g((function(r,t,n,i,o,a){var s=r[t];return v(s)!==e?new b("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function p(e,r,t,n,i){return new b((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function y(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(y);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e[c]);if("function"==typeof r)return r}(r);if(!n)return!1;var i,o=n.call(r);if(n!==r.entries){for(;!(i=o.next()).done;)if(!y(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function v(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function x(e){if(null==e)return""+e;var r=v(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function w(e){var r=x(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return b.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,p=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var f=e.type;switch(f){case d:case c:case i:case a:case o:case h:return f;default:var m=f&&f.$$typeof;switch(m){case l:case u:case g:case b:case s:return m;default:return r}}case n:return r}}}var w=d,$=c,F=l,E=s,C=t,O=u,D=i,j=g,_=b,S=n,A=a,k=o,B=h,M=!1;function z(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=$,r.ContextConsumer=F,r.ContextProvider=E,r.Element=C,r.ForwardRef=O,r.Fragment=D,r.Lazy=j,r.Memo=_,r.Portal=S,r.Profiler=A,r.StrictMode=k,r.Suspense=B,r.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),z(e)||x(e)===d},r.isConcurrentMode=z,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===g},r.isMemo=function(e){return x(e)===b},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===a},r.isStrictMode=function(e){return x(e)===o},r.isSuspense=function(e){return x(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===o||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===b||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p||e.$$typeof===y||e.$$typeof===v||e.$$typeof===m)},r.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(/*! react */"react"),o=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),d=n(t(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,a.default)(t)]=e[t],r}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,i.useState)(r),n=t[0],o=t[1];return(0,i.useEffect)((function(){var e=r();n!==e&&o(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,i.useContext)(d.default),t=function(){return c(e)||c(r)},n=(0,i.useState)(t),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=t();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,r]),o}(r),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,o.default)(e,r||{},!!r)},n=(0,i.useState)(t),a=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=t();return s(e),function(){e&&e.dispose()}}}),[e,r]),a}(a,n),f=function(e){var r=(0,i.useState)(e.matches),t=r[0],n=r[1];return(0,i.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),b=u();return(0,i.useEffect)((function(){b&&t&&t(f)}),[f]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var ne=te.exports=re(u),ie=function(e,r){return ie=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},ie(e,r)};var oe=function(){return oe=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},oe.apply(this,arguments)};var ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var se=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},le="object"==typeof ae&&ae&&ae.Object===Object&&ae,de="object"==typeof self&&self&&self.Object===Object&&self,ce=le||de||Function("return this")(),ue=ce,he=function(){return ue.Date.now()},fe=/\s/;var be=function(e){for(var r=e.length;r--&&fe.test(e.charAt(r)););return r},ge=/^\s+/;var me=function(e){return e?e.slice(0,be(e)+1).replace(ge,""):e},pe=ce.Symbol,ye=pe,ve=Object.prototype,xe=ve.hasOwnProperty,we=ve.toString,$e=ye?ye.toStringTag:void 0;var Fe=function(e){var r=xe.call(e,$e),t=e[$e];try{e[$e]=void 0;var n=!0}catch(e){}var i=we.call(e);return n&&(r?e[$e]=t:delete e[$e]),i},Ee=Object.prototype.toString;var Ce=Fe,Oe=function(e){return Ee.call(e)},De=pe?pe.toStringTag:void 0;var je=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":De&&De in Object(e)?Ce(e):Oe(e)},_e=function(e){return null!=e&&"object"==typeof e};var Se=me,Ae=se,ke=function(e){return"symbol"==typeof e||_e(e)&&"[object Symbol]"==je(e)},Be=/^[-+]0x[0-9a-f]+$/i,Me=/^0b[01]+$/i,ze=/^0o[0-7]+$/i,Te=parseInt;var Le=se,Ie=he,Pe=function(e){if("number"==typeof e)return e;if(ke(e))return NaN;if(Ae(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Ae(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Se(e);var t=Me.test(e);return t||ze.test(e)?Te(e.slice(2),t?2:8):Be.test(e)?NaN:+e},Re=Math.max,Ye=Math.min;var We=function(e,r,t){var n,i,o,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(r){var t=n,o=i;return n=i=void 0,d=r,a=e.apply(o,t)}function b(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function g(){var e=Ie();if(b(e))return m(e);s=setTimeout(g,function(e){var t=r-(e-l);return u?Ye(t,o-(e-d)):t}(e))}function m(e){return s=void 0,h&&n?f(e):(n=i=void 0,a)}function p(){var e=Ie(),t=b(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(g,r),c?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,r),f(l)}return void 0===s&&(s=setTimeout(g,r)),a}return r=Pe(r)||0,Le(t)&&(c=!!t.leading,o=(u="maxWait"in t)?Re(Pe(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},p.flush=function(){return void 0===s?a:m(Ie())},p},He=We,Ne=se;var Ve=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ne(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),He(e,r,{leading:n,maxWait:r,trailing:i})},qe=function(e,r,t,n){switch(r){case"debounce":return We(e,t,n);case"throttle":return Ve(e,t,n);default:return e}},Ue=function(e){return"function"==typeof e},Ze=function(){return"undefined"==typeof window},Xe=function(e){return e instanceof Element||e instanceof HTMLDocument},Qe=function(e,r,t,n){return function(i){var o=i.width,a=i.height;r((function(r){return r.width===o&&r.height===a||r.width===o&&!n||r.height===a&&!t?r:(e&&Ue(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Ze()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Ze())return null;if(r)return document.querySelector(r);if(n&&Xe(n))return n;if(t.targetRef&&Xe(t.targetRef.current))return t.targetRef.current;var i=_(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,a=void 0===o||o,s=r.onResize;if(i||a){var l=Qe(s,t.setState.bind(t),i,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Ze()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Ue(r)?"renderProp":Ue(n)?"childFunction":b(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,a=void 0===o?1e3:o,s=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=g(),t.observableElement=null,Ze()||(t.resizeHandler=qe(t.createResizeHandler,i,a,s),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}ie(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Ze()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,n=r.children,i=r.nodeType,o=void 0===i?"div":i,a=this.state,s={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(s);case"childFunction":return(e=n)(s);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(s,["targetRef"]);return m(e,l)}return m(e,s);case"childArray":return(e=n).map((function(e){return!!e&&m(e,s)}));default:return c.createElement(o,null)}}}(p);var Je=Ze()?y:v;function Ge(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,a=e.refreshOptions,s=e.handleWidth,l=void 0===s||s,d=e.handleHeight,c=void 0===d||d,u=e.targetRef,b=e.observerOptions,g=e.onResize,m=h(t),p=h(null),y=null!=u?u:p,v=h(),x=f({width:void 0,height:void 0}),w=x[0],$=x[1];return Je((function(){if(!Ze()){var e=Qe(g,$,l,c);v.current=qe((function(r){(l||c)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!m.current&&!Ze()&&e({width:n,height:i}),m.current=!1}))}),n,o,a);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,a,l,c,g,b,y.current]),oe({ref:y},w)}var Ke=Array.isArray,er="object"==typeof K&&K&&K.Object===Object&&K,rr=er,tr="object"==typeof self&&self&&self.Object===Object&&self,nr=rr||tr||Function("return this")(),ir=nr.Symbol,or=ir,ar=Object.prototype,sr=ar.hasOwnProperty,lr=ar.toString,dr=or?or.toStringTag:void 0;var cr=function(e){var r=sr.call(e,dr),t=e[dr];try{e[dr]=void 0;var n=!0}catch(e){}var i=lr.call(e);return n&&(r?e[dr]=t:delete e[dr]),i},ur=Object.prototype.toString;var hr=cr,fr=function(e){return ur.call(e)},br=ir?ir.toStringTag:void 0;var gr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":br&&br in Object(e)?hr(e):fr(e)};var mr=function(e){return null!=e&&"object"==typeof e},pr=gr,yr=mr;var vr=function(e){return"symbol"==typeof e||yr(e)&&"[object Symbol]"==pr(e)},xr=Ke,wr=vr,$r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fr=/^\w*$/;var Er=function(e,r){if(xr(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!wr(e))||(Fr.test(e)||!$r.test(e)||null!=r&&e in Object(r))};var Cr=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Or=gr,Dr=Cr;var jr,_r=function(e){if(!Dr(e))return!1;var r=Or(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Sr=nr["__core-js_shared__"],Ar=(jr=/[^.]+$/.exec(Sr&&Sr.keys&&Sr.keys.IE_PROTO||""))?"Symbol(src)_1."+jr:"";var kr=function(e){return!!Ar&&Ar in e},Br=Function.prototype.toString;var Mr=function(e){if(null!=e){try{return Br.call(e)}catch(e){}try{return e+""}catch(e){}}return""},zr=_r,Tr=kr,Lr=Cr,Ir=Mr,Pr=/^\[object .+?Constructor\]$/,Rr=Function.prototype,Yr=Object.prototype,Wr=Rr.toString,Hr=Yr.hasOwnProperty,Nr=RegExp("^"+Wr.call(Hr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Vr=function(e,r){return null==e?void 0:e[r]},qr=function(e){return!(!Lr(e)||Tr(e))&&(zr(e)?Nr:Pr).test(Ir(e))},Ur=Vr;var Zr=function(e,r){var t=Ur(e,r);return qr(t)?t:void 0},Xr=Zr(Object,"create"),Qr=Xr;var Jr=function(){this.__data__=Qr?Qr(null):{},this.size=0};var Gr=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Kr=Xr,et=Object.prototype.hasOwnProperty;var rt=function(e){var r=this.__data__;if(Kr){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return et.call(r,e)?r[e]:void 0},tt=Xr,nt=Object.prototype.hasOwnProperty;var it=function(e){var r=this.__data__;return tt?void 0!==r[e]:nt.call(r,e)},ot=Xr;var at=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ot&&void 0===r?"__lodash_hash_undefined__":r,this},st=Jr,lt=Gr,dt=rt,ct=it,ut=at;function ht(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ht.prototype.clear=st,ht.prototype.delete=lt,ht.prototype.get=dt,ht.prototype.has=ct,ht.prototype.set=ut;var ft=ht;var bt=function(){this.__data__=[],this.size=0};var gt=function(e,r){return e===r||e!=e&&r!=r},mt=gt;var pt=function(e,r){for(var t=e.length;t--;)if(mt(e[t][0],r))return t;return-1},yt=pt,vt=Array.prototype.splice;var xt=function(e){var r=this.__data__,t=yt(r,e);return!(t<0)&&(t==r.length-1?r.pop():vt.call(r,t,1),--this.size,!0)},wt=pt;var $t=function(e){var r=this.__data__,t=wt(r,e);return t<0?void 0:r[t][1]},Ft=pt;var Et=function(e){return Ft(this.__data__,e)>-1},Ct=pt;var Ot=function(e,r){var t=this.__data__,n=Ct(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},Dt=bt,jt=xt,_t=$t,St=Et,At=Ot;function kt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}kt.prototype.clear=Dt,kt.prototype.delete=jt,kt.prototype.get=_t,kt.prototype.has=St,kt.prototype.set=At;var Bt=kt,Mt=Zr(nr,"Map"),zt=ft,Tt=Bt,Lt=Mt;var It=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Pt=function(e,r){var t=e.__data__;return It(r)?t["string"==typeof r?"string":"hash"]:t.map},Rt=Pt;var Yt=function(e){var r=Rt(this,e).delete(e);return this.size-=r?1:0,r},Wt=Pt;var Ht=function(e){return Wt(this,e).get(e)},Nt=Pt;var Vt=function(e){return Nt(this,e).has(e)},qt=Pt;var Ut=function(e,r){var t=qt(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Zt=function(){this.size=0,this.__data__={hash:new zt,map:new(Lt||Tt),string:new zt}},Xt=Yt,Qt=Ht,Jt=Vt,Gt=Ut;function Kt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Kt.prototype.clear=Zt,Kt.prototype.delete=Xt,Kt.prototype.get=Qt,Kt.prototype.has=Jt,Kt.prototype.set=Gt;var en=Kt,rn=en;function tn(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(tn.Cache||rn),t}tn.Cache=rn;var nn=tn;var on=function(e){var r=nn(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},an=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,sn=/\\(\\)?/g,ln=on((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(an,(function(e,t,n,i){r.push(n?i.replace(sn,"$1"):t||e)})),r}));var dn=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},cn=Ke,un=vr,hn=ir?ir.prototype:void 0,fn=hn?hn.toString:void 0;var bn=function e(r){if("string"==typeof r)return r;if(cn(r))return dn(r,e)+"";if(un(r))return fn?fn.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},gn=bn;var mn=Ke,pn=Er,yn=ln,vn=function(e){return null==e?"":gn(e)};var xn=function(e,r){return mn(e)?e:pn(e,r)?[e]:yn(vn(e))},wn=vr;var $n=function(e){if("string"==typeof e||wn(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},Fn=xn,En=$n;var Cn=function(e,r){for(var t=0,n=(r=Fn(r,e)).length;null!=e&&t<n;)e=e[En(r[t++])];return t&&t==n?e:void 0},On=Cn;var Dn=function(e,r,t){var n=null==e?void 0:On(e,r);return void 0===n?t:n},jn=ee(Dn);const _n=(e,r,t)=>jn(t,r)||jn(e,r),Sn=(e,r)=>{const t=r||e.defaultValue;return jn(e.collections,t)},An={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},kn=e=>r=>{var t;const n=r.theme,i=Sn(An,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?_n(i,e,n.overrides.motion):i[e]},Bn={"duration-150":kn("duration-150"),"duration-250":kn("duration-250"),"duration-350":kn("duration-350"),"duration-500":kn("duration-500"),"duration-800":kn("duration-800"),"duration-1000":kn("duration-1000"),"ease-default":kn("ease-default"),"ease-standard":kn("ease-standard"),"ease-entrance":kn("ease-entrance"),"ease-exit":kn("ease-exit")},Mn={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#89000B","primary-20":"#B0000E","primary-30":"#C4000F","primary-40":"#D0333F","primary-50":"#DC666F","primary-60":"#E28087","primary-70":"#E7999F","primary-80":"#EDB3B7","primary-90":"#F3CCCF","primary-95":"#F9E6E7","primary-100":"#FCF2F3","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4d4d4d","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},zn=e=>r=>{var t;const n=r.theme,i=Sn(Mn,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?_n(i,e,n.overrides.primitiveColour):i[e]},Tn={"brand-10":zn("brand-10"),"brand-20":zn("brand-20"),"brand-30":zn("brand-30"),"brand-40":zn("brand-40"),"brand-50":zn("brand-50"),"brand-60":zn("brand-60"),"brand-70":zn("brand-70"),"brand-80":zn("brand-80"),"brand-90":zn("brand-90"),"brand-95":zn("brand-95"),"brand-100":zn("brand-100"),"primary-10":zn("primary-10"),"primary-20":zn("primary-20"),"primary-30":zn("primary-30"),"primary-40":zn("primary-40"),"primary-50":zn("primary-50"),"primary-60":zn("primary-60"),"primary-70":zn("primary-70"),"primary-80":zn("primary-80"),"primary-90":zn("primary-90"),"primary-95":zn("primary-95"),"primary-100":zn("primary-100"),"secondary-10":zn("secondary-10"),"secondary-20":zn("secondary-20"),"secondary-30":zn("secondary-30"),"secondary-40":zn("secondary-40"),"secondary-50":zn("secondary-50"),"secondary-60":zn("secondary-60"),"secondary-70":zn("secondary-70"),"secondary-80":zn("secondary-80"),"secondary-90":zn("secondary-90"),"secondary-95":zn("secondary-95"),"secondary-100":zn("secondary-100"),"neutral-10":zn("neutral-10"),"neutral-20":zn("neutral-20"),"neutral-30":zn("neutral-30"),"neutral-40":zn("neutral-40"),"neutral-50":zn("neutral-50"),"neutral-60":zn("neutral-60"),"neutral-70":zn("neutral-70"),"neutral-80":zn("neutral-80"),"neutral-90":zn("neutral-90"),"neutral-95":zn("neutral-95"),"neutral-100":zn("neutral-100"),"success-10":zn("success-10"),"success-20":zn("success-20"),"success-30":zn("success-30"),"success-40":zn("success-40"),"success-50":zn("success-50"),"success-60":zn("success-60"),"success-70":zn("success-70"),"success-80":zn("success-80"),"success-90":zn("success-90"),"success-95":zn("success-95"),"success-100":zn("success-100"),"warning-10":zn("warning-10"),"warning-20":zn("warning-20"),"warning-30":zn("warning-30"),"warning-40":zn("warning-40"),"warning-50":zn("warning-50"),"warning-60":zn("warning-60"),"warning-70":zn("warning-70"),"warning-80":zn("warning-80"),"warning-90":zn("warning-90"),"warning-95":zn("warning-95"),"warning-100":zn("warning-100"),"error-10":zn("error-10"),"error-20":zn("error-20"),"error-30":zn("error-30"),"error-40":zn("error-40"),"error-50":zn("error-50"),"error-60":zn("error-60"),"error-70":zn("error-70"),"error-80":zn("error-80"),"error-90":zn("error-90"),"error-95":zn("error-95"),"error-100":zn("error-100"),"info-10":zn("info-10"),"info-20":zn("info-20"),"info-30":zn("info-30"),"info-40":zn("info-40"),"info-50":zn("info-50"),"info-60":zn("info-60"),"info-70":zn("info-70"),"info-80":zn("info-80"),"info-90":zn("info-90"),"info-95":zn("info-95"),"info-100":zn("info-100"),white:zn("white"),black:zn("black"),"primary-inverse":zn("primary-inverse")},Ln={text:zn("neutral-20"),"text-subtle":zn("neutral-30"),"text-subtler":zn("neutral-50"),"text-subtlest":zn("neutral-60"),"text-primary":zn("primary-50"),"text-hover":zn("primary-40"),"text-selected":zn("primary-50"),"text-selected-hover":zn("primary-40"),"text-disabled":zn("neutral-50"),"text-disabled-subtle":zn("neutral-60"),"text-disabled-subtlest":zn("neutral-80"),"text-selected-disabled":zn("neutral-20"),"text-success":zn("success-40"),"text-warning":zn("warning-40"),"text-error":zn("error-40"),"text-info":zn("info-40"),"text-inverse":zn("white"),icon:zn("neutral-50"),"icon-subtle":zn("neutral-60"),"icon-strongest":zn("neutral-20"),"icon-primary":zn("primary-50"),"icon-primary-subtle":zn("primary-60"),"icon-primary-subtlest":zn("primary-70"),"icon-hover":zn("primary-40"),"icon-selected":zn("primary-50"),"icon-selected-hover":zn("primary-40"),"icon-disabled":zn("neutral-50"),"icon-disabled-subtle":zn("neutral-60"),"icon-selected-disabled":zn("neutral-60"),"icon-success":zn("success-50"),"icon-warning":zn("warning-60"),"icon-error":zn("error-50"),"icon-error-strong":zn("error-40"),"icon-info":zn("info-50"),"icon-inverse":zn("white"),"icon-primary-inverse":zn("primary-inverse"),border:zn("neutral-90"),"border-strong":zn("neutral-70"),"border-stronger":zn("neutral-50"),"border-primary":zn("primary-50"),"border-primary-subtle":zn("primary-60"),"border-hover":zn("primary-90"),"border-hover-strong":zn("primary-60"),"border-selected":zn("primary-50"),"border-selected-subtle":zn("primary-70"),"border-selected-subtlest":zn("primary-90"),"border-selected-hover":zn("primary-40"),"border-focus":zn("primary-60"),"border-focus-strong":zn("primary-50"),"border-disabled":zn("neutral-90"),"border-selected-disabled":zn("neutral-70"),"border-success":zn("success-60"),"border-warning":zn("warning-60"),"border-error":zn("error-60"),"border-error-focus":zn("error-60"),"border-error-focus-strong":zn("error-40"),"border-error-strong":zn("error-40"),"border-info":zn("info-60"),bg:zn("white"),"bg-strong":zn("neutral-100"),"bg-stronger":zn("neutral-95"),"bg-strongest":zn("neutral-90"),"bg-hover":zn("primary-95"),"bg-hover-strong":zn("primary-90"),"bg-hover-subtle":zn("primary-100"),"bg-hover-neutral":zn("neutral-100"),"bg-hover-neutral-strong":zn("neutral-90"),"bg-selected":zn("primary-95"),"bg-selected-hover":zn("primary-90"),"bg-selected-strong":zn("primary-90"),"bg-selected-stronger":zn("primary-70"),"bg-selected-strongest":zn("primary-50"),"bg-selected-strongest-hover":zn("primary-40"),"bg-disabled":zn("neutral-95"),"bg-selected-disabled":zn("neutral-95"),"bg-selected-stronger-disabled":zn("neutral-70"),"bg-success":zn("success-100"),"bg-success-hover":zn("success-95"),"bg-success-strong":zn("success-50"),"bg-success-strong-hover":zn("success-40"),"bg-warning":zn("warning-100"),"bg-warning-hover":zn("warning-95"),"bg-warning-strong":zn("warning-50"),"bg-warning-strong-hover":zn("warning-40"),"bg-info":zn("info-100"),"bg-info-hover":zn("info-95"),"bg-info-strong":zn("info-50"),"bg-info-strong-hover":zn("info-40"),"bg-error":zn("error-100"),"bg-error-hover":zn("error-95"),"bg-error-strong":zn("error-50"),"bg-error-strong-hover":zn("error-40"),"bg-inverse":zn("neutral-20"),"bg-inverse-subtle":zn("neutral-30"),"bg-inverse-subtler":zn("neutral-50"),"bg-inverse-subtlest":zn("neutral-60"),"bg-inverse-hover":zn("neutral-40"),"bg-primary":zn("primary-50"),"bg-primary-subtle":zn("primary-60"),"bg-primary-subtler":zn("primary-95"),"bg-primary-subtlest":zn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":zn("primary-40"),"bg-primary-subtlest-hover":zn("primary-90"),"bg-primary-subtlest-selected":zn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:zn("primary-50"),"hyperlink-hover":zn("primary-40"),"hyperlink-visited":zn("primary-40"),"hyperlink-inverse":zn("primary-inverse"),"focus-ring":zn("black"),"focus-ring-inverse":zn("white")},In={collections:{lifesg:Ln,bookingsg:Ln,rbs:Ln,mylegacy:Ln,ccube:Ln,pa:Ln},defaultValue:"lifesg"},Pn=e=>r=>{var t;const n=r.theme,i=Sn(In,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?_n(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},Rn={text:Pn("text"),"text-subtle":Pn("text-subtle"),"text-subtler":Pn("text-subtler"),"text-subtlest":Pn("text-subtlest"),"text-primary":Pn("text-primary"),"text-hover":Pn("text-hover"),"text-selected":Pn("text-selected"),"text-selected-hover":Pn("text-selected-hover"),"text-disabled":Pn("text-disabled"),"text-disabled-subtle":Pn("text-disabled-subtle"),"text-disabled-subtlest":Pn("text-disabled-subtlest"),"text-selected-disabled":Pn("text-selected-disabled"),"text-success":Pn("text-success"),"text-warning":Pn("text-warning"),"text-error":Pn("text-error"),"text-info":Pn("text-info"),"text-inverse":Pn("text-inverse"),icon:Pn("icon"),"icon-subtle":Pn("icon-subtle"),"icon-strongest":Pn("icon-strongest"),"icon-primary":Pn("icon-primary"),"icon-primary-subtle":Pn("icon-primary-subtle"),"icon-primary-subtlest":Pn("icon-primary-subtlest"),"icon-hover":Pn("icon-hover"),"icon-selected":Pn("icon-selected"),"icon-selected-hover":Pn("icon-selected-hover"),"icon-disabled":Pn("icon-disabled"),"icon-disabled-subtle":Pn("icon-disabled-subtle"),"icon-selected-disabled":Pn("icon-selected-disabled"),"icon-success":Pn("icon-success"),"icon-warning":Pn("icon-warning"),"icon-error":Pn("icon-error"),"icon-error-strong":Pn("icon-error-strong"),"icon-info":Pn("icon-info"),"icon-inverse":Pn("icon-inverse"),"icon-primary-inverse":Pn("icon-primary-inverse"),border:Pn("border"),"border-strong":Pn("border-strong"),"border-stronger":Pn("border-stronger"),"border-primary":Pn("border-primary"),"border-primary-subtle":Pn("border-primary-subtle"),"border-hover":Pn("border-hover"),"border-hover-strong":Pn("border-hover-strong"),"border-selected":Pn("border-selected"),"border-selected-subtle":Pn("border-selected-subtle"),"border-selected-subtlest":Pn("border-selected-subtlest"),"border-selected-hover":Pn("border-selected-hover"),"border-focus":Pn("border-focus"),"border-focus-strong":Pn("border-focus-strong"),"border-disabled":Pn("border-disabled"),"border-selected-disabled":Pn("border-selected-disabled"),"border-success":Pn("border-success"),"border-warning":Pn("border-warning"),"border-error":Pn("border-error"),"border-error-focus":Pn("border-error-focus"),"border-error-focus-strong":Pn("border-error-focus-strong"),"border-error-strong":Pn("border-error-strong"),"border-info":Pn("border-info"),bg:Pn("bg"),"bg-strong":Pn("bg-strong"),"bg-stronger":Pn("bg-stronger"),"bg-strongest":Pn("bg-strongest"),"bg-hover":Pn("bg-hover"),"bg-hover-strong":Pn("bg-hover-strong"),"bg-hover-subtle":Pn("bg-hover-subtle"),"bg-hover-neutral":Pn("bg-hover-neutral"),"bg-hover-neutral-strong":Pn("bg-hover-neutral-strong"),"bg-selected":Pn("bg-selected"),"bg-selected-hover":Pn("bg-selected-hover"),"bg-selected-strong":Pn("bg-selected-strong"),"bg-selected-stronger":Pn("bg-selected-stronger"),"bg-selected-strongest":Pn("bg-selected-strongest"),"bg-selected-strongest-hover":Pn("bg-selected-strongest-hover"),"bg-disabled":Pn("bg-disabled"),"bg-selected-disabled":Pn("bg-selected-disabled"),"bg-selected-stronger-disabled":Pn("bg-selected-stronger-disabled"),"bg-success":Pn("bg-success"),"bg-success-hover":Pn("bg-success-hover"),"bg-success-strong":Pn("bg-success-strong"),"bg-success-strong-hover":Pn("bg-success-strong-hover"),"bg-warning":Pn("bg-warning"),"bg-warning-hover":Pn("bg-warning-hover"),"bg-warning-strong":Pn("bg-warning-strong"),"bg-warning-strong-hover":Pn("bg-warning-strong-hover"),"bg-info":Pn("bg-info"),"bg-info-hover":Pn("bg-info-hover"),"bg-info-strong":Pn("bg-info-strong"),"bg-info-strong-hover":Pn("bg-info-strong-hover"),"bg-error":Pn("bg-error"),"bg-error-hover":Pn("bg-error-hover"),"bg-error-strong":Pn("bg-error-strong"),"bg-error-strong-hover":Pn("bg-error-strong-hover"),"bg-inverse":Pn("bg-inverse"),"bg-inverse-subtle":Pn("bg-inverse-subtle"),"bg-inverse-subtler":Pn("bg-inverse-subtler"),"bg-inverse-subtlest":Pn("bg-inverse-subtlest"),"bg-inverse-hover":Pn("bg-inverse-hover"),"bg-primary":Pn("bg-primary"),"bg-primary-subtle":Pn("bg-primary-subtle"),"bg-primary-subtler":Pn("bg-primary-subtler"),"bg-primary-subtlest":Pn("bg-primary-subtlest"),"bg-available":Pn("bg-available"),"bg-primary-hover":Pn("bg-primary-hover"),"bg-primary-subtlest-hover":Pn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Pn("bg-primary-subtlest-selected"),"overlay-strong":Pn("overlay-strong"),"overlay-subtle":Pn("overlay-subtle"),hyperlink:Pn("hyperlink"),"hyperlink-hover":Pn("hyperlink-hover"),"hyperlink-visited":Pn("hyperlink-visited"),"hyperlink-inverse":Pn("hyperlink-inverse"),"focus-ring":Pn("focus-ring"),"focus-ring-inverse":Pn("focus-ring-inverse")},Yn={collections:{lifesg:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:Nn["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:Rn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return O`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},Wn=e=>r=>{var t;const n=r.theme,i=Sn(Yn,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${_n(i,e,n.overrides.border)}px`:`${i[e]}px`},Hn=e=>1===e.length&&"theme"in e[0],Nn={"width-005":Wn("width-005"),"width-010":Wn("width-010"),"width-020":Wn("width-020"),"width-040":Wn("width-040"),solid:(Vn="solid",e=>{var r;const t=e.theme,n=Sn(Yn,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?_n(n,Vn,t.overrides.border):n[Vn];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>t=>{var n;const i=Hn(r)?[]:r,o=Hn(r)?r[0]:t,a=o.theme,s=Sn(Yn,null==a?void 0:a.borderScheme);return((null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.border)?_n(s,e,a.overrides.border):s[e])(...i)(o)})("dashed-default")};var Vn;const qn={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Un=e=>r=>{var t;const n=r.theme,i=Sn(qn,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?_n(i,e,n.overrides.breakpoint):i[e],o},Zn={"xxs-min":Un("xxs-min"),"xxs-max":Un("xxs-max"),"xs-min":Un("xs-min"),"xs-max":Un("xs-max"),"sm-min":Un("sm-min"),"sm-max":Un("sm-max"),"md-min":Un("md-min"),"md-max":Un("md-max"),"lg-min":Un("lg-min"),"lg-max":Un("lg-max"),"xl-min":Un("xl-min"),"xl-max":Un("xl-max"),"xxl-min":Un("xxl-min"),"xxs-column":Un("xxs-column"),"xs-column":Un("xs-column"),"sm-column":Un("sm-column"),"md-column":Un("md-column"),"lg-column":Un("lg-column"),"xl-column":Un("xl-column"),"xxl-column":Un("xxl-column"),"xxs-gutter":Un("xxs-gutter"),"xs-gutter":Un("xs-gutter"),"sm-gutter":Un("sm-gutter"),"md-gutter":Un("md-gutter"),"lg-gutter":Un("lg-gutter"),"xl-gutter":Un("xl-gutter"),"xxl-gutter":Un("xxl-gutter"),"xxs-margin":Un("xxs-margin"),"xs-margin":Un("xs-margin"),"sm-margin":Un("sm-margin"),"md-margin":Un("md-margin"),"lg-margin":Un("lg-margin"),"xl-margin":Un("xl-margin"),"xxl-margin":Un("xxl-margin")},Xn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Zn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Qn={MaxWidth:Xn("max-width"),MinWidth:Xn("min-width")},Jn={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Gn={collections:{lifesg:Jn,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Jn,mylegacy:Jn,ccube:Jn,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"}},defaultValue:"lifesg"},Kn=e=>r=>{var t;const n=r.theme,i=Sn(Gn,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?_n(i,e,n.overrides.fontSpec):i[e]},ei={"header-size-xxl":Kn("header-size-xxl"),"header-size-xl":Kn("header-size-xl"),"header-size-lg":Kn("header-size-lg"),"header-size-md":Kn("header-size-md"),"header-size-sm":Kn("header-size-sm"),"header-size-xs":Kn("header-size-xs"),"header-lh-xxl":Kn("header-lh-xxl"),"header-lh-xl":Kn("header-lh-xl"),"header-lh-lg":Kn("header-lh-lg"),"header-lh-md":Kn("header-lh-md"),"header-lh-sm":Kn("header-lh-sm"),"header-lh-xs":Kn("header-lh-xs"),"header-ls-xxl":Kn("header-ls-xxl"),"header-ls-xl":Kn("header-ls-xl"),"header-ls-lg":Kn("header-ls-lg"),"header-ls-md":Kn("header-ls-md"),"header-ls-sm":Kn("header-ls-sm"),"header-ls-xs":Kn("header-ls-xs"),"weight-light":Kn("weight-light"),"weight-regular":Kn("weight-regular"),"weight-semibold":Kn("weight-semibold"),"weight-bold":Kn("weight-bold"),"font-family":Kn("font-family"),"body-size-baseline":Kn("body-size-baseline"),"body-size-md":Kn("body-size-md"),"body-size-sm":Kn("body-size-sm"),"body-size-xs":Kn("body-size-xs"),"body-lh-baseline":Kn("body-lh-baseline"),"body-lh-md":Kn("body-lh-md"),"body-lh-sm":Kn("body-lh-sm"),"body-lh-xs":Kn("body-lh-xs"),"body-ls-baseline":Kn("body-ls-baseline"),"body-ls-md":Kn("body-ls-md"),"body-ls-sm":Kn("body-ls-sm"),"body-ls-xs":Kn("body-ls-xs"),"formlabel-size-baseline":Kn("formlabel-size-baseline"),"formlabel-size-lg":Kn("formlabel-size-lg"),"formlabel-lh-baseline":Kn("formlabel-lh-baseline"),"formlabel-lh-lg":Kn("formlabel-lh-lg"),"formlabel-ls-baseline":Kn("formlabel-ls-baseline"),"formlabel-ls-lg":Kn("formlabel-ls-lg")},ri={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},ti=e=>r=>{var t;const n=r.theme,i=Sn(ri,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${_n(i,e,n.overrides.radius)}px`:`${i[e]}px`},ni={none:ti("none"),xs:ti("xs"),sm:ti("sm"),md:ti("md"),lg:ti("lg"),full:ti("full")},ii={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},oi=e=>r=>{var t;const n=r.theme,i=Sn(ii,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${_n(i,e,n.overrides.spacing)}px`:`${i[e]}px`},ai={"spacing-0":oi("spacing-0"),"spacing-4":oi("spacing-4"),"spacing-8":oi("spacing-8"),"spacing-12":oi("spacing-12"),"spacing-16":oi("spacing-16"),"spacing-20":oi("spacing-20"),"spacing-24":oi("spacing-24"),"spacing-32":oi("spacing-32"),"spacing-40":oi("spacing-40"),"spacing-48":oi("spacing-48"),"spacing-64":oi("spacing-64"),"spacing-72":oi("spacing-72"),"layout-xs":oi("layout-xs"),"layout-sm":oi("layout-sm"),"layout-md":oi("layout-md"),"layout-lg":oi("layout-lg"),"layout-xl":oi("layout-xl"),"layout-xxl":oi("layout-xxl"),"layout-xxxl":oi("layout-xxxl")},si=(e,r,t,n)=>O`
    font-family: ${Kn("font-family")};
    font-size: ${Kn(e)};
    font-weight: ${Kn(r)};
    line-height: ${Kn(t)};
    letter-spacing: ${Kn(n)};
`,li={"header-xxl-light":si("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":si("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":si("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":si("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":si("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":si("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":si("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":si("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":si("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":si("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":si("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":si("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":si("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":si("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":si("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":si("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":si("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":si("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":si("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":si("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":si("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":si("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":si("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":si("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":si("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":si("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":si("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":si("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":si("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":si("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":si("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":si("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":si("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":si("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":si("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":si("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":si("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":si("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":si("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":si("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":si("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":si("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},di={collections:{lifesg:li,bookingsg:li,rbs:li,mylegacy:li,ccube:li,pa:li},defaultValue:"lifesg"},ci=e=>r=>{var t;const n=r.theme,i=Sn(di,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?_n(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},ui={"header-xxl-light":ci("header-xxl-light"),"header-xxl-regular":ci("header-xxl-regular"),"header-xxl-semibold":ci("header-xxl-semibold"),"header-xxl-bold":ci("header-xxl-bold"),"header-xl-light":ci("header-xl-light"),"header-xl-regular":ci("header-xl-regular"),"header-xl-semibold":ci("header-xl-semibold"),"header-xl-bold":ci("header-xl-bold"),"header-lg-light":ci("header-lg-light"),"header-lg-regular":ci("header-lg-regular"),"header-lg-semibold":ci("header-lg-semibold"),"header-lg-bold":ci("header-lg-bold"),"header-md-light":ci("header-md-light"),"header-md-regular":ci("header-md-regular"),"header-md-semibold":ci("header-md-semibold"),"header-md-bold":ci("header-md-bold"),"header-sm-light":ci("header-sm-light"),"header-sm-regular":ci("header-sm-regular"),"header-sm-semibold":ci("header-sm-semibold"),"header-sm-bold":ci("header-sm-bold"),"header-xs-light":ci("header-xs-light"),"header-xs-regular":ci("header-xs-regular"),"header-xs-semibold":ci("header-xs-semibold"),"header-xs-bold":ci("header-xs-bold"),"body-baseline-light":ci("body-baseline-light"),"body-baseline-regular":ci("body-baseline-regular"),"body-baseline-semibold":ci("body-baseline-semibold"),"body-baseline-bold":ci("body-baseline-bold"),"body-md-light":ci("body-md-light"),"body-md-regular":ci("body-md-regular"),"body-md-semibold":ci("body-md-semibold"),"body-md-bold":ci("body-md-bold"),"body-sm-light":ci("body-sm-light"),"body-sm-regular":ci("body-sm-regular"),"body-sm-semibold":ci("body-sm-semibold"),"body-sm-bold":ci("body-sm-bold"),"body-xs-light":ci("body-xs-light"),"body-xs-regular":ci("body-xs-regular"),"body-xs-semibold":ci("body-xs-semibold"),"body-xs-bold":ci("body-xs-bold"),"formlabel-baseline-semibold":ci("formlabel-baseline-semibold"),"formlabel-lg-semibold":ci("formlabel-lg-semibold")},hi=Object.assign(Object.assign({},Rn),{Primitive:Tn}),fi=Object.assign(Object.assign({},ui),{Spec:ei}),bi=Bn,gi=Nn,mi=ai,pi=ni,yi=Zn,vi=Qn;var xi;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const a=n+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(xi||(xi={}));const wi=e=>O`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,$i=C.div`
    font-weight: ${e=>e.$bold?fi.Spec["weight-semibold"]:fi.Spec["weight-regular"]};
    color: ${e=>e.$selected?hi["text-selected"]:hi.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&wi(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Fi=C.div`
    color: ${hi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&wi(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${fi["body-md-semibold"]}
                `:O`
                    ${fi["body-baseline-regular"]}
                `}
`,Ei=C.span`
    font-weight: ${fi.Spec["weight-semibold"]};
`,Ci=C.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?fi["body-md-regular"]:fi["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${$i} {
                        display: inline;
                    }

                    ${Fi} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Oi=C.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Di=C.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,ji=({bold:n,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,sublabel:d,truncationType:c="middle",variant:u})=>{const h=D(),f="small"===u?fi.Spec["body-size-md"]({theme:h}):fi.Spec["body-size-baseline"]({theme:h}),b=fi.Spec["font-family"]({theme:h}),{ref:g,width:m}=Ge(),p=x((e=>{if("inline"!==i)return!1;return xi.getTextWidth(e,`${f} '${b}'`)>m*s-50}),[m,i,f,b,s]),y=w((()=>p(o)),[p,o]),v=w((()=>d&&p(d)),[p,d]),$=y||v?"next-line":i,F=n=>{if(!a)return n;const i=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(i),l=s+a.length;return-1===s?n:e(t,{children:[o.slice(0,s),r(Ei,Object.assign({$variant:u},{children:o.slice(s,l)})),o.slice(l)]})},E=n=>e(t,{children:[r(Oi,Object.assign({$maxLines:s,"aria-hidden":!0},{children:F(n)})),r(Di,Object.assign({$maxLines:s,"aria-hidden":!0},{children:F(n)}))]});return e(Ci,Object.assign({ref:g,$labelDisplayType:$,$variant:u},{children:[r($i,Object.assign({"aria-label":o,$bold:n,$maxLines:s,$selected:l,$truncateType:c},{children:"middle"===c&&y?E(o):F(o)})),d&&r(Fi,Object.assign({"aria-label":d,$maxLines:s,$truncateType:c,$labelDisplayType:i},{children:"middle"===c&&v?E(d):d}))]}))};var _i=Bt;var Si=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var Ai=function(e){return this.__data__.get(e)};var ki=function(e){return this.__data__.has(e)},Bi=Bt,Mi=Mt,zi=en;var Ti=function(e,r){var t=this.__data__;if(t instanceof Bi){var n=t.__data__;if(!Mi||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new zi(n)}return t.set(e,r),this.size=t.size,this},Li=Bt,Ii=function(){this.__data__=new _i,this.size=0},Pi=Si,Ri=Ai,Yi=ki,Wi=Ti;function Hi(e){var r=this.__data__=new Li(e);this.size=r.size}Hi.prototype.clear=Ii,Hi.prototype.delete=Pi,Hi.prototype.get=Ri,Hi.prototype.has=Yi,Hi.prototype.set=Wi;var Ni=Hi;var Vi=en,qi=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ui=function(e){return this.__data__.has(e)};function Zi(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Vi;++r<t;)this.add(e[r])}Zi.prototype.add=Zi.prototype.push=qi,Zi.prototype.has=Ui;var Xi=function(e,r){return e.has(r)},Qi=Zi,Ji=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Gi=Xi;var Ki=function(e,r,t,n,i,o){var a=1&t,s=e.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var d=o.get(e),c=o.get(r);if(d&&c)return d==r&&c==e;var u=-1,h=!0,f=2&t?new Qi:void 0;for(o.set(e,r),o.set(r,e);++u<s;){var b=e[u],g=r[u];if(n)var m=a?n(g,b,u,r,e,o):n(b,g,u,e,r,o);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Ji(r,(function(e,r){if(!Gi(f,r)&&(b===e||i(b,e,t,n,o)))return f.push(r)}))){h=!1;break}}else if(b!==g&&!i(b,g,t,n,o)){h=!1;break}}return o.delete(e),o.delete(r),h};var eo=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var ro=nr.Uint8Array,to=gt,no=Ki,io=eo,oo=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},ao=ir?ir.prototype:void 0,so=ao?ao.valueOf:void 0;var lo=function(e,r,t,n,i,o,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!o(new ro(e),new ro(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return to(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=io;case"[object Set]":var l=1&n;if(s||(s=oo),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=no(s(e),s(r),n,i,o,a);return a.delete(e),c;case"[object Symbol]":if(so)return so.call(e)==so.call(r)}return!1};var co=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},uo=co,ho=Ke;var fo=function(e,r,t){var n=r(e);return ho(e)?n:uo(n,t(e))};var bo=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,o=[];++t<n;){var a=e[t];r(a,t,e)&&(o[i++]=a)}return o},go=function(){return[]},mo=Object.prototype.propertyIsEnumerable,po=Object.getOwnPropertySymbols,yo=po?function(e){return null==e?[]:(e=Object(e),bo(po(e),(function(r){return mo.call(e,r)})))}:go;var vo=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},xo=gr,wo=mr;var $o=function(e){return wo(e)&&"[object Arguments]"==xo(e)},Fo=mr,Eo=Object.prototype,Co=Eo.hasOwnProperty,Oo=Eo.propertyIsEnumerable,Do=$o(function(){return arguments}())?$o:function(e){return Fo(e)&&Co.call(e,"callee")&&!Oo.call(e,"callee")},jo={exports:{}};var _o=function(){return!1};!function(e,r){var t=nr,n=_o,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?t.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(jo,jo.exports);var So=jo.exports,Ao=/^(?:0|[1-9]\d*)$/;var ko=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&Ao.test(e))&&e>-1&&e%1==0&&e<r};var Bo=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Mo=gr,zo=Bo,To=mr,Lo={};Lo["[object Float32Array]"]=Lo["[object Float64Array]"]=Lo["[object Int8Array]"]=Lo["[object Int16Array]"]=Lo["[object Int32Array]"]=Lo["[object Uint8Array]"]=Lo["[object Uint8ClampedArray]"]=Lo["[object Uint16Array]"]=Lo["[object Uint32Array]"]=!0,Lo["[object Arguments]"]=Lo["[object Array]"]=Lo["[object ArrayBuffer]"]=Lo["[object Boolean]"]=Lo["[object DataView]"]=Lo["[object Date]"]=Lo["[object Error]"]=Lo["[object Function]"]=Lo["[object Map]"]=Lo["[object Number]"]=Lo["[object Object]"]=Lo["[object RegExp]"]=Lo["[object Set]"]=Lo["[object String]"]=Lo["[object WeakMap]"]=!1;var Io=function(e){return To(e)&&zo(e.length)&&!!Lo[Mo(e)]};var Po=function(e){return function(r){return e(r)}},Ro={exports:{}};!function(e,r){var t=er,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&t.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Ro,Ro.exports);var Yo=Ro.exports,Wo=Io,Ho=Po,No=Yo&&Yo.isTypedArray,Vo=No?Ho(No):Wo,qo=vo,Uo=Do,Zo=Ke,Xo=So,Qo=ko,Jo=Vo,Go=Object.prototype.hasOwnProperty;var Ko=function(e,r){var t=Zo(e),n=!t&&Uo(e),i=!t&&!n&&Xo(e),o=!t&&!n&&!i&&Jo(e),a=t||n||i||o,s=a?qo(e.length,String):[],l=s.length;for(var d in e)!r&&!Go.call(e,d)||a&&("length"==d||i&&("offset"==d||"parent"==d)||o&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Qo(d,l))||s.push(d);return s},ea=Object.prototype;var ra=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||ea)};var ta=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),na=ra,ia=ta,oa=Object.prototype.hasOwnProperty;var aa=function(e){if(!na(e))return ia(e);var r=[];for(var t in Object(e))oa.call(e,t)&&"constructor"!=t&&r.push(t);return r},sa=_r,la=Bo;var da=function(e){return null!=e&&la(e.length)&&!sa(e)},ca=Ko,ua=aa,ha=da;var fa=function(e){return ha(e)?ca(e):ua(e)},ba=fo,ga=yo,ma=fa;var pa=function(e){return ba(e,ma,ga)},ya=Object.prototype.hasOwnProperty;var va=function(e,r,t,n,i,o){var a=1&t,s=pa(e),l=s.length;if(l!=pa(r).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in r:ya.call(r,c)))return!1}var u=o.get(e),h=o.get(r);if(u&&h)return u==r&&h==e;var f=!0;o.set(e,r),o.set(r,e);for(var b=a;++d<l;){var g=e[c=s[d]],m=r[c];if(n)var p=a?n(m,g,c,r,e,o):n(g,m,c,e,r,o);if(!(void 0===p?g===m||i(g,m,t,n,o):p)){f=!1;break}b||(b="constructor"==c)}if(f&&!b){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(f=!1)}return o.delete(e),o.delete(r),f},xa=Zr(nr,"DataView"),wa=Mt,$a=Zr(nr,"Promise"),Fa=Zr(nr,"Set"),Ea=Zr(nr,"WeakMap"),Ca=gr,Oa=Mr,Da="[object Map]",ja="[object Promise]",_a="[object Set]",Sa="[object WeakMap]",Aa="[object DataView]",ka=Oa(xa),Ba=Oa(wa),Ma=Oa($a),za=Oa(Fa),Ta=Oa(Ea),La=Ca;(xa&&La(new xa(new ArrayBuffer(1)))!=Aa||wa&&La(new wa)!=Da||$a&&La($a.resolve())!=ja||Fa&&La(new Fa)!=_a||Ea&&La(new Ea)!=Sa)&&(La=function(e){var r=Ca(e),t="[object Object]"==r?e.constructor:void 0,n=t?Oa(t):"";if(n)switch(n){case ka:return Aa;case Ba:return Da;case Ma:return ja;case za:return _a;case Ta:return Sa}return r});var Ia=Ni,Pa=Ki,Ra=lo,Ya=va,Wa=La,Ha=Ke,Na=So,Va=Vo,qa="[object Arguments]",Ua="[object Array]",Za="[object Object]",Xa=Object.prototype.hasOwnProperty;var Qa=function(e,r,t,n,i,o){var a=Ha(e),s=Ha(r),l=a?Ua:Wa(e),d=s?Ua:Wa(r),c=(l=l==qa?Za:l)==Za,u=(d=d==qa?Za:d)==Za,h=l==d;if(h&&Na(e)){if(!Na(r))return!1;a=!0,c=!1}if(h&&!c)return o||(o=new Ia),a||Va(e)?Pa(e,r,t,n,i,o):Ra(e,r,l,t,n,i,o);if(!(1&t)){var f=c&&Xa.call(e,"__wrapped__"),b=u&&Xa.call(r,"__wrapped__");if(f||b){var g=f?e.value():e,m=b?r.value():r;return o||(o=new Ia),i(g,m,t,n,o)}}return!!h&&(o||(o=new Ia),Ya(e,r,t,n,i,o))},Ja=mr;var Ga=function e(r,t,n,i,o){return r===t||(null==r||null==t||!Ja(r)&&!Ja(t)?r!=r&&t!=t:Qa(r,t,n,i,e,o))},Ka=Ni,es=Ga;var rs=function(e,r,t,n){var i=t.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=t[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=t[i])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Ka;if(n)var h=n(d,c,l,e,r,u);if(!(void 0===h?es(c,d,3,n,u):h))return!1}}return!0},ts=Cr;var ns=function(e){return e==e&&!ts(e)},is=ns,os=fa;var as=function(e){for(var r=os(e),t=r.length;t--;){var n=r[t],i=e[n];r[t]=[n,i,is(i)]}return r};var ss=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},ls=rs,ds=as,cs=ss;var us=function(e,r){return null!=e&&r in Object(e)},hs=xn,fs=Do,bs=Ke,gs=ko,ms=Bo,ps=$n;var ys=function(e,r,t){for(var n=-1,i=(r=hs(r,e)).length,o=!1;++n<i;){var a=ps(r[n]);if(!(o=null!=e&&t(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&ms(i)&&gs(a,i)&&(bs(e)||fs(e))},vs=us,xs=ys;var ws=Ga,$s=Dn,Fs=function(e,r){return null!=e&&xs(e,r,vs)},Es=Er,Cs=ns,Os=ss,Ds=$n;var js=function(e){return function(r){return null==r?void 0:r[e]}},_s=Cn;var Ss=js,As=function(e){return function(r){return _s(r,e)}},ks=Er,Bs=$n;var Ms=function(e){var r=ds(e);return 1==r.length&&r[0][2]?cs(r[0][0],r[0][1]):function(t){return t===e||ls(t,e,r)}},zs=function(e,r){return Es(e)&&Cs(r)?Os(Ds(e),r):function(t){var n=$s(t,e);return void 0===n&&n===r?Fs(t,e):ws(r,n,3)}},Ts=function(e){return e},Ls=Ke,Is=function(e){return ks(e)?Ss(Bs(e)):As(e)};var Ps=function(e){return"function"==typeof e?e:null==e?Ts:"object"==typeof e?Ls(e)?zs(e[0],e[1]):Ms(e):Is(e)},Rs=Ps,Ys=da,Ws=fa;var Hs=function(e){return function(r,t,n){var i=Object(r);if(!Ys(r)){var o=Rs(t);r=Ws(r),t=function(e){return o(i[e],e,i)}}var a=e(r,t,n);return a>-1?i[o?r[a]:a]:void 0}};var Ns=/\s/;var Vs=function(e){for(var r=e.length;r--&&Ns.test(e.charAt(r)););return r},qs=/^\s+/;var Us=function(e){return e?e.slice(0,Vs(e)+1).replace(qs,""):e},Zs=Cr,Xs=vr,Qs=/^[-+]0x[0-9a-f]+$/i,Js=/^0b[01]+$/i,Gs=/^0o[0-7]+$/i,Ks=parseInt;var el=function(e){if("number"==typeof e)return e;if(Xs(e))return NaN;if(Zs(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Zs(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Us(e);var t=Js.test(e);return t||Gs.test(e)?Ks(e.slice(2),t?2:8):Qs.test(e)?NaN:+e},rl=1/0;var tl=function(e){return e?(e=el(e))===rl||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var nl=function(e,r,t,n){for(var i=e.length,o=t+(n?1:-1);n?o--:++o<i;)if(r(e[o],o,e))return o;return-1},il=Ps,ol=function(e){var r=tl(e),t=r%1;return r==r?t?r-t:r:0},al=Math.max;var sl=ee(Hs((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var i=null==t?0:ol(t);return i<0&&(i=al(n+i,0)),nl(e,il(r),i)}))),ll=Ga;var dl=ee((function(e,r){return ll(e,r)})),cl={exports:{}};cl.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",f="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,a=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=m;var w="$isDayjsObject",$=function(e){return e instanceof O||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},E=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new O(t)},C=y;C.l=F,C.i=$,C.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var O=function(){function m(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=m.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(C.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return C},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(e,r){var t=E(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return E(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<E(e)},p.$g=function(e,r,t){return C.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!C.u(r)||r,c=C.p(e),f=function(e,r){var i=C.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},b=function(e,r){return C.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},g=this.$W,m=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?f(1,0):f(31,11);case d:return n?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,x=(g<v?g+7:g)-v;return f(n?p-x:p+(6-x),m);case s:case h:return b(y+"Hours",0);case a:return b(y+"Minutes",1);case o:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=C.p(e),c="set"+(this.$u?"UTC":""),f=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var g=this.clone().set(h,1);g.$d[f](b),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](b);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[C.p(e)]()},p.add=function(n,c){var h,f=this;n=Number(n);var b=C.p(c),g=function(e){var r=E(f);return C.w(r.date(r.date()+Math.round(e*n)),f)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===s)return g(1);if(b===l)return g(7);var m=(h={},h[o]=r,h[a]=t,h[i]=e,h)[b]||1,p=this.$d.getTime()+n*m;return C.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=C.z(this),o=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return C.s(o%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return C.s(r.$y,4,"0");case"M":return s+1;case"MM":return C.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return C.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return C.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return b(o,a,!0);case"A":return b(o,a,!1);case"m":return String(a);case"mm":return C.s(a,2,"0");case"s":return String(r.$s);case"ss":return C.s(r.$s,2,"0");case"SSS":return C.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,h,f){var b,g=this,m=C.p(h),p=E(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return C.m(g,p)};switch(m){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-y)/6048e5;break;case s:b=(v-y)/864e5;break;case a:b=v/t;break;case o:b=v/r;break;case i:b=v/e;break;default:b=v}return f?b:C.a(b)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return C.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),D=O.prototype;return E.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){D[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,O,E),e.$i=!0),E},E.locale=F,E.isDayjs=$,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var ul=ee(cl.exports),hl={exports:{}};hl.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,f=new Date,b=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(g,m,b,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(g,m,b,p,y,v,x)):new Date(g,m,b,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,b=1;b<=f;b+=1){a[1]=s[b-1];var g=t.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}b===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var fl=ee(hl.exports),bl={exports:{}};bl.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),a=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var gl=ee(bl.exports),ml={exports:{}};ml.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var pl=ee(ml.exports),yl={exports:{}};yl.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var vl,xl,wl,$l=ee(yl.exports),Fl={exports:{}},El=ee(Fl.exports=(vl={year:0,month:1,day:2,hour:3,minute:4,second:5},xl={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=xl[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),xl[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=vl[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",b=+e;return(t.utc(f).valueOf()-(b-=b%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,s=i||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var a=o(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));ul.extend(gl),ul.extend($l),ul.extend(pl),ul.extend(fl),ul.extend(El),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=ul(r).startOf("week");return Cl(t).map((e=>Ol(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Ol(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(ul(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+ul(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=ul(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?ul(n):void 0,i?ul(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(wl||(wl={}));const Cl=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Ol=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Dl=[1,3,5,7,8,10,12],jl=[4,6,9,11];var _l,Sl,Al;function kl(e){const r=h(null);return v((()=>{r.current=e}),[e]),x(((...e)=>r.current(...e)),[])}!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),a=parseInt(n);return 0==i?"1":Dl.includes(o)?Math.min(i,31).toString():jl.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=ul(e,t);return ul(r,t).diff(n,"minute")},e.toDayjs=e=>e?ul(e):ul(),e.addMinutesToTime=(e,r,t="HH:mm")=>ul(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>ul(e).isSame(ul(r),t)}(_l||(_l={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!ul(e).isBefore(n,"day"))||!(!i||!ul(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(ul(e).isValid())return e}return""}}(Sl||(Sl={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Al||(Al={}));const Bl=e=>{const r=(e=>{const r=h(e),t=h();return y((()=>{t.current=r.current,r.current=e}),[e]),t.current})(e);return r!==e},Ml=u.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),zl=({children:e})=>{const[t,n]=f(-1);return r(Ml.Provider,Object.assign({value:{focusedIndex:t,setFocusedIndex:n}},{children:e}))},Tl=C.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ll=j`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Il=C.div`
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
    animation: ${Ll} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Pl=C(Il)`
    animation-delay: -0.45s;
`,Rl=C(Il)`
    animation-delay: -0.3s;
`,Yl=C(Il)`
    animation-delay: -0.15s;
`,Wl=({color:t,className:n,size:i})=>e(Tl,Object.assign({className:n,$size:i,$color:t},{children:[r(Il,{id:"inner1"}),r(Pl,{id:"inner2"}),r(Rl,{id:"inner3"}),r(Yl,{id:"inner4"})]})),Hl=O`
    outline-offset: -1px;
    outline: ${gi["width-020"]} ${gi.solid} ${hi["border-focus"]};
`,Nl=O`
    outline-color: ${hi["border-focus"]};
`,Vl=O`
    outline-color: ${hi["border-disabled"]};
`,ql=O`
    outline-color: ${hi["border-error-focus"]};
`,Ul=C.div`
    border: ${gi["width-010"]} ${gi.solid} ${hi.border};
    border-radius: ${pi.sm};
    background: ${hi.bg};

    :focus-within {
        ${Hl}
    }
    ${e=>e.$focused&&Hl}

    ${e=>e.$readOnly?O`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Nl}
                }
                ${e.$focused&&Nl}
            `:e.$disabled?O`
                background: ${hi["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Vl}
                }
                ${e.$focused&&Vl}
            `:e.$error?O`
                border-color: ${hi["border-error"]};

                :focus-within {
                    ${ql}
                }
                ${e.$focused&&ql}
            `:void 0}
`;C(Ul)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${mi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Zl=C.input`
    ${e=>"small"===e.$variant?fi["body-md-regular"]:fi["body-baseline-regular"]}
    color: ${hi.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${hi["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${hi["text-subtler"]};
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
`,Xl=C.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${gi["width-010"]} ${gi.solid}
            ${hi["border-focus"]};
        border-radius: ${pi.sm};
    }
`,Ql=C.div`
    overflow: hidden;
    border: ${gi["width-010"]} ${gi.solid} ${hi.border};
    border-radius: ${pi.sm};
    background: ${hi.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?fi["body-md-regular"]:fi["body-baseline-regular"]}

    ${vi.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${yi["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${vi.MaxWidth.xs} {
        width: calc(100vw - ${yi["xs-margin"]} * 2);
    }

    ${vi.MaxWidth.xxs} {
        width: calc(100vw - ${yi["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${hi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Jl=C.div`
    background: transparent;
    padding: ${mi["spacing-8"]};
`,Gl=C.ul`
    list-style-type: none;
`,Kl=C.li`
    display: flex;
    align-items: flex-start;
    gap: ${mi["spacing-8"]};
    padding: ${mi["spacing-12"]} ${mi["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?O`
                background: ${hi["bg-hover"]};
            `:e.$active?O`
                background: ${hi["bg-hover-subtle"]};
            `:void 0}
`,ed=C(B)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${hi["icon-selected"]};
`,rd=C.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,td=C(k)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${hi["icon-selected"]};
`,nd=C(A)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${hi["icon-primary-subtlest"]};
`,id=C.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,od=C(Xl)`
    cursor: pointer;
    overflow: hidden;
    color: ${hi["text-primary"]};
    font-size: inherit;
`,ad=C(od)`
    ${fi["body-baseline-semibold"]}
`,sd=C(od)`
    ${fi["body-md-semibold"]}
    padding: ${mi["spacing-8"]} ${mi["spacing-8"]};
`,ld=C.div`
    width: 100%;
    display: flex;
    padding: ${mi["spacing-12"]} ${mi[16]};
    align-items: center;
`,dd=C(S)`
    margin-right: ${mi["spacing-4"]};
    color: ${hi["icon-error"]};
    height: 1em;
    width: 1em;
`,cd=C(Wl)`
    margin-right: ${mi["spacing-8"]};
    color: ${hi.icon};
`;function ud(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;const hd=C.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${mi["spacing-24"]};
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

        ${({$highlight:e})=>e&&O`
                background-color: ${hi["bg-hover-neutral"]};
            `}
    }
`,fd=u.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=ud(e,["children","focusHighlight","focusOutline","type"]);return r(hd,Object.assign({ref:t,$outline:o,$highlight:i,type:a},s,{children:n}))})),bd=C.div`
    background: ${hi["bg-strong"]};
    border-radius: ${pi.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?fi["body-md-regular"]:fi["body-baseline-regular"]}
`,gd=C.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${mi["spacing-8"]};
    padding: ${e=>"small"===e.$variant?O`
                  ${mi["spacing-8"]} ${mi["spacing-16"]}
              `:O`10px ${mi["spacing-16"]}`};
`,md=C(Zl)`
    flex: 1;
`,pd=C(z)`
    color: ${hi.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,yd=C(fd)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${mi["spacing-8"]};
    margin-left: -${mi["spacing-8"]};
    color: ${hi.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,vd=$(((t,n)=>{var{value:i,variant:o,onClear:a}=t,s=ud(t,["value","variant","onClear"]);return e(bd,Object.assign({$variant:o},{children:[e(gd,Object.assign({$variant:o},{children:[r(pd,{"aria-hidden":!0}),r(md,Object.assign({ref:n,value:i,$variant:o},s))]})),i&&r(yd,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a},{children:r(M,{"aria-hidden":!0})}))]}))})),xd=({listItems:n,multiSelect:i,selectedItems:o,disableItemFocus:a,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:d=2,labelDisplayType:c="inline",variant:u="default",listboxId:b,width:g,topScrollItem:m,onSelectItem:p,onSelectAll:v,onDismiss:w,onRetry:$,valueExtractor:E,listExtractor:C,renderListItem:O,renderCustomCallToAction:D,enableSearch:j,hideNoResultsDisplay:_,searchPlaceholder:S="Search",searchFunction:A,onSearch:k})=>{const{focusedIndex:B,setFocusedIndex:M}=F(Ml),[z,T]=f(""),[L,I]=f(n),P=Bl(s),R=(()=>{const[e,r]=f(!1);return y((()=>{r(!0)}),[]),e})(),Y=h(),W=h(),H=h([]),N=h(),V=e=>C?C(e):e.toString(),q=x((e=>!!sl(o,(r=>dl(r,e)))),[o]),U=kl((()=>A(z))),Z=kl((()=>n.filter((e=>{var r;const t=V(e),n="object"==typeof t?t.title.toLowerCase():t.toLowerCase(),i="string"==typeof t||null===(r=t.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),o=z.trim().toLowerCase();return n.includes(o)||i&&i.includes(o)})))),X=(e,r)=>{M(r),null==p||p(e,(e=>E?E(e):e)(e))},Q=e=>{const r=e.target.value;T(r),null==k||k()},J=()=>{var e;T(""),null===(e=N.current)||void 0===e||e.focus(),null==k||k()},G=()=>{null==$||$()};((e,r,t="window",n)=>{const i=h();y((()=>{i.current=r}),[r]),y((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const o=e=>i.current(e);return r.addEventListener(e,o,n),()=>{r.removeEventListener(e,o,n)}}),[e,t])})("keydown",(e=>{var r,t;switch(e.code){case"ArrowDown":if(e.preventDefault(),B<L.length-1){const e=B+1;null===(r=H.current[e])||void 0===r||r.focus(),M(e)}break;case"ArrowUp":if(e.preventDefault(),B>0){const e=B-1;null===(t=H.current[e])||void 0===t||t.focus(),M(e)}else 0===B&&N.current&&(N.current.focus(),M(-1));break;case"Space":case"Enter":document.activeElement===H.current[B]&&(e.preventDefault(),L[B]&&X(L[B],B))}})),y((()=>{if(void 0===m)return;const e=setTimeout((()=>{var e;const r=n.indexOf(m),t=H.current[r];if(Y.current){const r=null!==(e=null==t?void 0:t.offsetTop)&&void 0!==e?e:0;Y.current.scrollTop=r-8}M(r)}),0);return()=>clearTimeout(e)}),[H,n,M,m]),y((()=>{if(R)return;if(a)return;const e=n.findIndex((e=>q(e)));N.current?(M(-1),setTimeout((()=>{var e;return null===(e=N.current)||void 0===e?void 0:e.focus()}),200)):H.current[B]?setTimeout((()=>{var e;return null===(e=H.current[B])||void 0===e?void 0:e.focus()}),200):H.current[e]?(M(e),setTimeout((()=>{var r;return null===(r=H.current[e])||void 0===r?void 0:r.focus()}),200)):(M(0),setTimeout((()=>{var e;return null===(e=H.current[0])||void 0===e?void 0:e.focus()}),200))}),[q,a,B,n,R,M]),y((()=>{R&&P&&(a||"success"===s&&N.current&&(M(-1),N.current.focus()))}),[R,P,s,M,a]),y((()=>{I(""===z?n:A?U():Z())}),[U,Z,n,A,z]);const K=e=>i?r(e?td:nd,{"aria-hidden":!0}):e?r(ed,{"aria-hidden":!0}):r(rd,{}),ee=(e,t)=>{const n=V(e),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel;return r(ji,{displayType:c,label:i,maxLines:d,selected:t,sublabel:o,truncationType:l,variant:u})},re=()=>{if(!$||$&&"success"===s)return L.map(((n,o)=>{const a=q(n),s=o===B;return r(Kl,Object.assign({"aria-selected":a,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>X(n,o),onMouseEnter:()=>(e=>{M(e)})(o),ref:e=>H.current[o]=e,role:"option",tabIndex:s?0:-1,$active:s,$selected:a},{children:O?O(n,{selected:a}):e(t,{children:[K(a),ee(n,a)]})}),((e,r)=>`item_${r}__${E?E(e):e}`)(n,o))}))},te=()=>{if((j||A)&&"success"===s)return r(vd,{ref:N,onChange:Q,value:z,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:J,variant:u})},ne=()=>{if(i&&L.length>0&&!z&&"success"===s)return r(id,{children:r(sd,Object.assign({onClick:v,type:"button",$variant:u},{children:0===o.length?"Select all":"Clear all"}))})},ie=()=>{if(!_&&(z||!j)&&0===L.length&&"success"===s)return e(ld,Object.assign({"data-testid":"list-no-results"},{children:[r(dd,{"data-testid":"no-result-icon"}),"No results found."]}))},oe=()=>{if($&&"loading"===s)return e(ld,Object.assign({"data-testid":"list-loading"},{children:[r(cd,{}),"Loading..."]}))},ae=()=>{if($&&"fail"===s)return e(ld,Object.assign({"data-testid":"list-fail"},{children:[r(dd,{"data-testid":"load-error-icon"}),"Failed to load. ",r(ad,Object.assign({onClick:G,type:"button",$variant:u},{children:"Try again."}))]}))};return e(Ql,Object.assign({"data-testid":"dropdown-container",ref:Y,$width:g,$variant:u},{children:[e(Jl,Object.assign({ref:W,"data-testid":"dropdown-list"},{children:[te(),ne(),ie(),oe(),ae(),r(Gl,Object.assign({role:"listbox",id:b},{children:re()}))]})),(()=>{if(D)return r("div",Object.assign({"data-testid":"custom-cta"},{children:D(w,L)}))})()]}))},wd=C(Xl)`
    display: flex;
    align-items: center;
    gap: ${mi["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${mi["spacing-16"]};

    ${e=>"small"===e.$variant?fi["body-md-regular"]:fi["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,$d=C.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${bi["duration-250"]} ${bi["ease-default"]};

    svg {
        color: ${hi.icon};
        height: 1em;
        width: 1em;
    }
`,Fd=$((({children:t,disabled:n,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},d)=>e(wd,Object.assign({ref:d,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l},{children:[t,!s&&r($d,Object.assign({$expanded:i,$variant:l},{children:r(T,{"aria-hidden":!0})}))]}))));C.button`
    padding: ${mi["spacing-8"]} ${mi["spacing-16"]};
    min-width: 4rem;
    border: ${gi["width-010"]} ${gi.solid} transparent;
    border-radius: ${pi.sm};
    transition: all ${bi["duration-250"]} ${bi["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return O`
                    background-color: ${hi.Primitive.white};
                    border-color: ${e.$buttonIsDanger?hi["border-error-strong"]:hi["border-primary"]};

                    color: ${e.$buttonIsDanger?hi["text-error"]:hi["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${hi["bg-hover-neutral"]};
                    }
                `;case"light":return O`
                    background-color: ${hi.bg};
                    border-color: ${hi.border};

                    color: ${e.$buttonIsDanger?hi["text-error"]:hi["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${hi["bg-hover-neutral"]};
                    }
                `;case"link":return O`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?hi["text-error"]:hi["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${hi["bg-hover-neutral"]};
                    }
                `;case"disabled":return O`
                    background-color: ${hi["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${hi["text-disabled"]};
                `;default:return O`
                    background-color: ${e.$buttonIsDanger?hi["bg-error-strong"]:hi["bg-primary"]};

                    ${vi.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${hi["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?hi["bg-error-strong-hover"]:hi["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return O`
                    height: 2.5rem;
                    ${fi["body-md-semibold"]}

                    ${vi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return O`
                    height: 4rem;
                    ${fi["header-md-semibold"]}

                    ${vi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return O`
                    height: 3rem;
                    ${fi["header-xs-semibold"]}

                    ${vi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,C(Wl)`
    margin-right: 0.5rem;
`,C.li`
    display: ${e=>e.$visible?"flex":"none"};
`,C.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${mi["spacing-8"]};
    padding: ${mi["spacing-12"]} ${mi["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&O`
            background: ${hi["bg-hover"]};
        `}
`,C.div`
    height: 1px;
    width: calc((1lh + ${mi["spacing-8"]}) * ${e=>e.$level});
`,C.div`
    width: 1lh;
    height: 1lh;
    color: ${hi["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${bi["duration-350"]}
            ${bi["ease-standard"]};

        ${e=>{if(e.$expanded)return O`
                    transform: rotate(90deg);
                `}}
    }
`,C.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${mi["spacing-8"]};
`,C.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":mi["spacing-16"]};

    display: flex;
    justify-content: center;
`,C(L)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${hi["icon-selected"]};
`;const Ed=e=>"small"===e?2.5:3;C.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Ed(e.$variant);return O`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Cd=O`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${mi["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Ed(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${pi.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${hi["border-focus"]};
    }
`,Od=C.button`
    ${Cd}
    cursor: pointer;
`;C.div`
    ${Cd}
`;const Dd=j`
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
`;C.div`
    position: relative;
    border: ${gi["width-010"]} ${gi.solid} ${hi.border};
    border-radius: ${pi.sm};
    background: ${hi.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${hi["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${hi["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?O`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:O`
                animation: ${Dd} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?O`
                background: ${hi["bg-disabled"]};

                ${Od} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${hi.border};
                    box-shadow: none;
                }
            `:e.$readOnly?O`
                border: none;
                background: transparent !important;

                ${Od} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?O`
                border-color: ${hi["border-error"]};

                :focus-within {
                    border-color: ${hi["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${hi["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,C.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${bi["duration-250"]} ${bi["ease-default"]};
    margin-left: ${mi["spacing-16"]};
`,C(T)`
    color: ${hi.icon};
`,C.div`
    height: 1px;
    background: ${hi.border};
    margin: 0 ${mi["spacing-8"]};
`;const jd=C.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return O`
                color: ${hi["text-disabled"]};
            `}}
`,_d=C.div`
    ${e=>"small"===e.$variant?fi["body-md-regular"]:fi["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return O`
                    ${wi(1)}
                `}}
    overflow: hidden;
`,Sd=C(_d)`
    color: ${hi["text-subtler"]};
`;var Ad;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ad||(Ad={}));const kd=C.div`
    display: flex;
    flex-direction: column;
`,Bd=e=>"right"===e?"bottom-end":"bottom-start",Md=({enabled:n,isOpen:i,onOpen:o,onClose:a,onDismiss:s,renderElement:l,renderDropdown:d,customZIndex:c,clickToToggle:u=!1,offset:b=0,alignment:g="left",fitAvailableHeight:m})=>{var p;const v=D(),x=yi["sm-max"]({theme:v}),w=h(null),$=h(null),{width:F}=Ge({targetRef:w,handleHeight:!1}),E={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<x;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:C,floatingStyles:O,context:j}=P({open:i,onOpenChange:(e,r,t)=>{"escape-key"===t?null==s||s():e&&!i?null==o||o():!e&&i&&(null==a||a(t))},whileElementsMounted:R,placement:Bd(g),middleware:[Y(b),W(),H({limiter:N()}),V({apply({availableHeight:e}){$.current&&Object.assign($.current.style,{maxHeight:m?`${e}px`:void 0,overflowY:m?"hidden":void 0})}}),E]}),_=(()=>{const[e,r]=f(void 0),t=I();return y((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Ad.Change,e),t.events.emit(Ad.Ready),()=>t.events.off(Ad.Change,e)}),[t]),e})(),{isMounted:S,styles:A}=q(j,{initial:{opacity:0},open:{opacity:1},duration:300}),k=U(j,{enabled:n,toggle:u}),B=Z(j,{enabled:n}),{getReferenceProps:M,getFloatingProps:z}=X([k,B]);return e(t,{children:[r("div",Object.assign({ref:e=>{w.current=e,C.setReference(e)}},M(),{children:l()})),S&&r(Q,{children:r(J,Object.assign({context:j,modal:!1,initialFocus:$,returnFocus:!1},{children:r("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},O),{zIndex:null!==(p=null!=c?c:_)&&void 0!==p?p:50})},z(),{children:r(kd,Object.assign({ref:$,style:Object.assign({},A),inert:A.opacity<1?"":void 0},{children:d({elementWidth:F})}))}))}))})]})},zd=({selectedOption:e,placeholder:t="Select",options:n,disabled:i,error:o,className:a,"data-testid":s,id:l,enableSearch:d=!1,searchFunction:c,searchPlaceholder:u,valueExtractor:b,valueToStringFunction:g,listExtractor:m,displayValueExtractor:p,onSelectOption:v,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:F="success",optionTruncationType:E="end",renderCustomSelectedOption:C,renderListItem:O,hideNoResultsDisplay:D,renderCustomCallToAction:j,onBlur:_,variant:S="default",readOnly:A,alignment:k,dropdownZIndex:B})=>{const[M,z]=f(e),[T,L]=f(!1),[I,P]=f(!1),[R]=f((()=>Al.generate())),Y=h(),W=h(),H=h();y((()=>{z(e)}),[e]);const N=(e,r)=>{W.current.focus(),z(e),L(!1),X(!1),null==v||v(e,r)},V=()=>{T&&(L(!1),X(!1))},q=()=>{I||T||P(!0)},U=e=>{!I||T||Y.current.contains(e.relatedTarget)||(P(!1),null==_||_())},Z=e=>{if("middle"===E){let r=0;return H&&H.current&&(r=H.current.getBoundingClientRect().width),xi.truncateOneLine((e=>"string"==typeof e?e:g(e)||e.toString())(e),r,120,8)}return e},X=e=>{e?null==x||x():null==w||w()};return r(zl,{children:r(Md,{enabled:!A&&!i,isOpen:T,renderElement:()=>r(Ul,Object.assign({className:a,"data-testid":s,id:l,ref:Y,tabIndex:-1,onFocus:q,onBlur:U,$focused:I,$disabled:i,$readOnly:A,$error:o},{children:r(Fd,Object.assign({ref:W,disabled:i,expanded:T,listboxId:R,popupRole:"listbox",readOnly:A,variant:S},{children:r(jd,Object.assign({ref:H,$disabled:i},{children:M?C?C(M):r(_d,Object.assign({truncateType:E,$variant:S},{children:Z(p?p(M):b?b(M):M.toString())})):r(Sd,Object.assign({truncateType:E,$variant:S},{children:t}))}))}))})),renderDropdown:({elementWidth:e})=>r(xd,{listboxId:R,listItems:n,onSelectItem:N,onDismiss:V,valueExtractor:b,listExtractor:m,enableSearch:d,searchPlaceholder:u,searchFunction:c,selectedItems:M?[M]:[],onRetry:$,itemsLoadState:F,itemTruncationType:E,renderListItem:O,hideNoResultsDisplay:D,renderCustomCallToAction:j,variant:S,width:e}),onOpen:()=>{L(!0),X(!0),P(!0)},onClose:e=>{L(!1),X(!1),"click"!==e&&(P(!1),null==_||_())},onDismiss:()=>{W.current.focus(),L(!1),X(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:B})})},Td=C(Zl)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&O`
            padding-left: ${mi["spacing-16"]};
            padding-right: ${e.$showClear?0:mi["spacing-16"]};
        `}
`,Ld=C(Xl)`
    height: auto;
    padding: ${mi["spacing-12"]} ${mi["spacing-16"]};

    cursor: pointer;
    color: ${hi.icon};

    ${e=>"no-border"===e.$styleType&&O`
            margin-right: -${mi["spacing-12"]};
        `}
`,Id=C(M)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Pd=C.div`
    display: flex;
    width: 100%;
`,Rd=C(Ul)`
    display: flex;
    align-items: center;
    width: 100%;
`,Yd=u.forwardRef(((n,i)=>{var{value:o,spacing:a,type:s,error:l,disabled:d,readOnly:c,onChange:u,onClear:f,allowClear:b=!1,className:g,styleType:m="bordered"}=n,p=ud(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=h();E(i,(()=>y.current),[]);const v=function({ref:e,formatter:r}){return()=>{const t=e.current,n=t.value,i=r(n),o=n.substring(0,t.selectionEnd),a=r(o),s=o.length-a.length,l=Math.max(0,t.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{t.value=i,t.setSelectionRange(l,l)}}}}({ref:y,formatter:e=>xi.transformWithSpaces(e,a)}),x=e=>{u&&($()?F(e):u(e))},w=()=>{f&&f(),y&&y.current&&y.current.focus()},$=()=>"tel"===s&&a,F=e=>{const{nextValue:r,updateCaretPosition:t}=v(),n=r.replace(/\s/g,"");e.target.value=n,u(e),t()},C=o?(e=>e?$()?xi.transformWithSpaces(e,a):e:"")(o):o,O=b&&!d&&!c&&!!o,D=()=>e(t,{children:[r(Td,Object.assign({"data-testid":"input",ref:y,disabled:d,value:C,onChange:x,type:s,readOnly:c,$showClear:O,$styleType:m},p)),O&&r(Ld,Object.assign({onClick:w,type:"button",$styleType:m},{children:r(Id,{"aria-hidden":!0})}))]});return r(t,{children:"no-border"===m?r(Pd,Object.assign({className:g},{children:D()})):r(Rd,Object.assign({$disabled:d,$error:l,$readOnly:c,className:g},{children:D()}))})})),Wd=(e,r,t=!1)=>{const n=`${e}-${r.toLowerCase()}`;return O`
        ${fi[n]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},Hd=(e,r)=>O`
    ${Wd(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?O`
            display: block;
        `:e?O`
            display: inline;
        `:O`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${hi.text};
`;var Nd;!function(t){const n=(e,r,t)=>{const n=C(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Hd(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeaderXXL=n("h1","header-xxl","HeaderXXL"),t.HeaderXL=n("h2","header-xl","HeaderXL"),t.HeaderLG=n("h3","header-lg","HeaderLG"),t.HeaderMD=n("h4","header-md","HeaderMD"),t.HeaderSM=n("h5","header-sm","HeaderSM"),t.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,r)=>{const t=C.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Hd(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=C.a`
            ${e=>O`
                ${Wd(t,e.weight||"regular")}
                color: ${hi.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${hi["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,a=ud(t,["external","children"]);return e(i,Object.assign({},a,{children:[o,n&&r(Vd,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(Nd||(Nd={}));const Vd=C(G)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,qd=C.nav`
    display: flex;
`,Ud=C.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${vi.MaxWidth.lg} {
        align-self: center;
    }
`,Zd=C.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,Xd=C(fd)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${pi.sm};
    color: ${hi["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${hi["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${hi["bg-hover"]};
    }
`,Qd=C(fd)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${pi.sm};
    color: ${hi["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${hi["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${hi["bg-hover"]};
    }

    ${e=>"left"===e.$position?O`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:O`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${vi.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,Jd=C.button`
    background: ${e=>e.$selected?hi["bg-primary"]:hi.bg};
    border: ${gi["width-010"]} ${gi.solid}
        ${e=>O`
                ${e.$selected?hi["bg-primary"]:hi.border}
            `};
    color: ${e=>e.$selected?hi["text-inverse"]:hi.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${pi.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;

    ${e=>e.$selected?O`
                  ${fi["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${hi["bg-selected-strongest-hover"]};
                      background-color: ${hi["bg-selected-strongest-hover"]};
                      color: ${hi["text-inverse"]};
                  }
              `:O`
                  ${fi["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${hi["bg-hover"]};
                      background-color: ${hi["bg-hover"]};
                      color: ${hi["text-hover"]};
                      ${fi["body-baseline-semibold"]};
                  }
              `}
`;C(fd)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${hi["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${pi.sm};
    white-space: nowrap;
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :focus-visible {
        svg {
            color: ${hi["icon-hover"]};
        }
    }
`;const Gd=C.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${pi.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,Kd=C.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${hi.text};

    display: flex;
    justify-content: center;
`,ec=C(Nd.BodyBL)`
    white-space: nowrap;
`,rc=C(Nd.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,tc=C(Yd)`
    ${fi["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${pi.sm};
    border: ${gi["width-010"]} ${gi.solid} ${hi.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${fi["body-xs-regular"]}
        }
    }
`,nc=C.div`
    ${fi["body-xs-regular"]}
    background-color: ${hi["bg-hover"]};
    border: none;
    border-radius: ${pi.sm};
    color: ${hi["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,ic=C.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,oc=u.forwardRef((({id:t,"data-testid":c,className:u,pageSize:h=10,totalItems:b,activePage:g,pageSizeOptions:m=ac,showFirstAndLastNav:p,showPageSizeChanger:v=!1,onPageChange:x,onPageSizeChange:w},$)=>{const F=D(),E=yi["sm-max"]({theme:F}),C=ne.useMediaQuery({maxWidth:E}),O=m,[j,_]=f(!1),[S,A]=f(!1),[k,B]=f(""),[M,z]=f(O&&O.length>=1?O[0]:null),[T,L]=f(!C&&v&&M?M.value:h),I=Math.ceil(b/T),P=1===g,R=g===I,Y=g>1?()=>X(1):void 0,W=g<I?()=>X(I):void 0,H=g>1?()=>X(g-1):void 0,N=g<I?()=>X(parseInt(g.toString())+1):void 0,V=e=>e?()=>te():()=>ee(),q=e=>e?()=>ie():()=>re();y((()=>{g&&U(g)}),[g]),y((()=>{var e;L(h),z(null!==(e=O.find((e=>e.value===h)))&&void 0!==e?e:null)}),[h]);const U=e=>{B(e.toString())},Z=()=>{_(!1),A(!1)},X=e=>{x&&(x(e),U(e))},Q=()=>{const e=Math.min(I,g+5);X(e),U(e),_(!0),A(!1)},J=()=>{const e=Math.max(1,g-5);X(e),U(e),_(!1),A(!0)},G=e=>{const r=e.target.value;if(void 0===r||0===r.length)B("");else if(/^[0-9]+$/.test(r)){const e=parseInt(r.replace(/[^0-9]/g,""));U(Math.max(1,Math.min(I,e)))}else B(r.replace(/[^0-9]/g,""))},K=e=>{e.preventDefault(),k&&x(parseInt(k))},ee=()=>{_(!0)},re=()=>{_(!1)},te=()=>{A(!0)},ie=()=>{A(!1)},oe=(t,o,a)=>e(Gd,{children:[r(Xd,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":t?"Previous 5 pages":"Next 5 pages",onMouseOver:V(t),onMouseOut:q(t),onFocus:V(t),onBlur:q(t),onClick:t?J:Q},{children:r(t&&S?n:o&&j?i:d,{"aria-hidden":!0})})),t&&S&&r(nc,{children:"Previous 5 pages"}),o&&j&&r(nc,{children:"Next 5 pages"})]},a);return e(qd,Object.assign({className:u,ref:$,id:t||"pagination-wrapper","data-testid":c||"pagination","aria-label":"Pagination"},{children:[r(Ud,{children:e(Zd,{children:[p&&r(Qd,Object.assign({onClick:Y,disabled:P,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:r(a,{"aria-hidden":!0})})),r(Qd,Object.assign({onClick:H,disabled:P,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:r(o,{"aria-hidden":!0})})),C?e(Kd,{children:[r("form",Object.assign({onSubmit:K},{children:r(tc,{value:k,onChange:G,autoComplete:"off",type:"numeric",id:(t||"pagination")+"-input","data-testid":(c||"pagination")+"-input"})})),r(rc,{children:"/"}),r(ec,{children:I})]}):[...Array(I)].map(((e,t)=>{const n=t+1,i=I-5,o=g===n;if(I<=7)return r(Jd,Object.assign({onClick:()=>X(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:Z,onFocus:Z},{children:n}),n);const a=g+1>5&&2===n,s=g-1<=i&&n===I-1-1;return a||s?oe(a,s,n):n<=5&&g+1<=5||n<=1||n===g||n<=g+1&&n>=g-1-1||n>i&&g-1>i||n>I-1?r(Jd,Object.assign({onClick:()=>X(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:Z,onFocus:Z},{children:n}),n):null})),r(Qd,Object.assign({onClick:N,disabled:R,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:r(l,{"aria-hidden":!0})})),p&&r(Qd,Object.assign({onClick:W,disabled:R,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:r(s,{"aria-hidden":!0})}))]})}),v&&!C&&r(ic,{children:r(zd,{options:O,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:M,onSelectOption:e=>{z(e);const r=e.value,t=Math.ceil(b/r);L(r);w&&w(g>=t?t:g,r)}})})]}))})),ac=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}];export{oc as Pagination};
//# sourceMappingURL=index.js.map
