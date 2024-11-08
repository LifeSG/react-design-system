import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import{Chevron2LeftIcon as n}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as i}from"@lifesg/react-icons/chevron-2-right";import{ChevronLeftIcon as a}from"@lifesg/react-icons/chevron-left";import{ChevronLineLeftIcon as o}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as s}from"@lifesg/react-icons/chevron-line-right";import{ChevronRightIcon as l}from"@lifesg/react-icons/chevron-right";import{EllipsisHorizontalIcon as c}from"@lifesg/react-icons/ellipsis-horizontal";import*as d from"react";import u,{useRef as f,useState as h,isValidElement as g,createRef as m,cloneElement as p,PureComponent as b,useEffect as y,useLayoutEffect as v,useCallback as x,useMemo as F,forwardRef as w,useContext as $,useImperativeHandle as S}from"react";import D,{css as B,useTheme as E,keyframes as C}from"styled-components";import{ExternalIcon as O}from"@lifesg/react-icons/external";import{findDOMNode as A}from"react-dom";import{ExclamationCircleFillIcon as j}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as k}from"@lifesg/react-icons/square";import{SquareTickFillIcon as _}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as z}from"@lifesg/react-icons/tick";import{CrossIcon as T}from"@lifesg/react-icons/cross";import{MagnifierIcon as H}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as M}from"@lifesg/react-icons/chevron-down";import{useFloatingTree as P,useFloating as I,autoUpdate as L,offset as R,flip as W,shift as N,limitShift as Y,size as V,useTransitionStyles as J,useClick as U,useDismiss as Z,useInteractions as q,FloatingPortal as X,FloatingFocusManager as Q}from"@floating-ui/react";var G="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function K(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ee,re={exports:{}};ee=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,r)=>{r.match=function(e,r){return s(e).some((function(e){var t=e.inverse,n="all"===e.type||r.type===e.type;if(n&&t||!n&&!t)return!1;var i=e.expressions.every((function(e){var t=e.feature,n=e.modifier,i=e.value,a=r[t];if(!a)return!1;switch(t){case"orientation":case"scan":return a.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=d(i),a=d(a);break;case"resolution":i=c(i),a=c(a);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),a=l(a);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,a=parseInt(a,10)||0}switch(n){case"min":return a>=i;case"max":return a<=i;default:return a===i}}));return i&&!t||!i&&t}))},r.parse=s;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var r=(e=e.trim()).match(t),a=r[1],o=r[2],s=r[3]||"",l={};return l.inverse=!!a&&"not"===a.toLowerCase(),l.type=o?o.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var r=e.match(n),t=r[1].toLowerCase().match(i);return{modifier:t[1],feature:t[2],value:r[2]}})),l}))}function l(e){var r,t=Number(e);return t||(t=(r=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/r[2]),t}function c(e){var r=parseFloat(e);switch(String(e).match(o)[1]){case"dpcm":return r/2.54;case"dppx":return 96*r;default:return r}}function d(e){var r=parseFloat(e);switch(String(e).match(a)[1]){case"em":case"rem":return 16*r;case"cm":return 96*r/2.54;case"mm":return 96*r/2.54/10;case"in":return 96*r;case"pt":return 72*r;case"pc":return 72*r/12;default:return r}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var n=/[A-Z]/g,i=/^ms-/,a={};function o(e){return"-"+e.toLowerCase()}const s=function(e){if(a.hasOwnProperty(e))return a[e];var r=e.replace(n,o);return a[e]=i.test(r)?"-"+r:r}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,r,t)=>{var n=t(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function a(e,r,t){var a=this;if(i&&!t){var o=i.call(window,e);this.matches=o.matches,this.media=o.media,o.addListener(s)}else this.matches=n(e,r),this.media=e;function s(e){a.matches=e.matches,a.media=e.media}this.addListener=function(e){o&&o.addListener(e)},this.removeListener=function(e){o&&o.removeListener(e)},this.dispose=function(){o&&o.removeListener(s)}}e.exports=function(e,r,t){return new a(e,r,t)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))t.call(a,c)&&(s[c]=a[c]);if(r){o=r(a);for(var d=0;d<o.length;d++)n.call(a,o[d])&&(s[o[d]]=a[o[d]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,r,t)=>{var n,i=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a={},o=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,r,t,s,l){for(var c in e)if(o(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+t+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](r,c,s,t,null,i)}catch(e){d=e}if(!d||d instanceof Error||n((s||"React class")+": type specification of "+t+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in a)){a[d.message]=!0;var f=l?l():"";n("Failed "+t+" type: "+d.message+(null!=f?f:""))}}}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},s.resetWarningCache=function(){a={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,r,t)=>{var n,i=t(/*! react-is */"./node_modules/react-is/index.js"),a=t(/*! object-assign */"./node_modules/object-assign/index.js"),o=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",f={array:p("array"),bigint:p("bigint"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:m(c),arrayOf:function(e){return m((function(r,t,n,i,a){if("function"!=typeof e)return new g("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=r[t];if(!Array.isArray(s))return new g("Invalid "+i+" `"+a+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,i,a+"["+l+"]",o);if(c instanceof Error)return c}return null}))},element:m((function(r,t,n,i,a){var o=r[t];return e(o)?null:new g("Invalid "+i+" `"+a+"` of type `"+v(o)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,r,t,n,a){var o=e[r];return i.isValidElementType(o)?null:new g("Invalid "+n+" `"+a+"` of type `"+v(o)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(r,t,n,i,a){if(!(r[t]instanceof e)){var o=e.name||u;return new g("Invalid "+i+" `"+a+"` of type `"+((s=r[t]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+o+"`.")}var s;return null}))},node:m((function(e,r,t,n,i){return y(e[r])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(r,t,n,i,a){if("function"!=typeof e)return new g("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],c=v(l);if("object"!==c)return new g("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,i,a+"."+d,o);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(r,t,n,i,a){for(var o=r[t],s=0;s<e.length;s++)if(h(o,e[s]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===x(r)?String(r):r}));return new g("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+F(t)+" at index "+r+"."),c}return m((function(r,t,n,i,a){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(r,t,n,i,a,o);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new g("Invalid "+i+" `"+a+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(r,t,n,i,a){var s=r[t],l=v(s);if("object"!==l)return new g("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(n,i,a,c,x(d));var u=d(s,c,n,i,a+"."+c,o);if(u)return u}return null}))},exact:function(e){return m((function(r,t,n,i,l){var c=r[t],d=v(c);if("object"!==d)return new g("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=a({},r[t],e);for(var f in u){var h=e[f];if(s(e,f)&&"function"!=typeof h)return b(n,i,l,f,x(h));if(!h)return new g("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=h(c,f,n,i,l+"."+f,o);if(m)return m}return null}))}};function h(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function g(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function m(e){var t={},i=0;function a(a,s,l,c,d,f,h){if(c=c||u,f=f||l,h!==o){if(r){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var p=c+":"+l;!t[p]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[p]=!0,i++)}}return null==s[l]?a?null===s[l]?new g("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new g("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,f)}var s=a.bind(null,!1);return s.isRequired=a.bind(null,!0),s}function p(e){return m((function(r,t,n,i,a,o){var s=r[t];return v(s)!==e?new g("Invalid "+i+" `"+a+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,r,t,n,i){return new g((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function y(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(y);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e[d]);if("function"==typeof r)return r}(r);if(!n)return!1;var i,a=n.call(r);if(n!==r.entries){for(;!(i=a.next()).done;)if(!y(i.value))return!1}else for(;!(i=a.next()).done;){var o=i.value;if(o&&!y(o[1]))return!1}return!0;default:return!1}}function v(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function x(e){if(null==e)return""+e;var r=v(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function F(e){var r=x(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return g.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var h=e.type;switch(h){case c:case d:case i:case o:case a:case f:return h;default:var p=h&&h.$$typeof;switch(p){case l:case u:case m:case g:case s:return p;default:return r}}case n:return r}}}var F=c,w=d,$=l,S=s,D=t,B=u,E=i,C=m,O=g,A=n,j=o,k=a,_=f,z=!1;function T(e){return x(e)===d}r.AsyncMode=F,r.ConcurrentMode=w,r.ContextConsumer=$,r.ContextProvider=S,r.Element=D,r.ForwardRef=B,r.Fragment=E,r.Lazy=C,r.Memo=O,r.Portal=A,r.Profiler=j,r.StrictMode=k,r.Suspense=_,r.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),T(e)||x(e)===c},r.isConcurrentMode=T,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===m},r.isMemo=function(e){return x(e)===g},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===o},r.isStrictMode=function(e){return x(e)===a},r.isSuspense=function(e){return x(e)===f},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===o||e===a||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===p)},r.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,r,t)=>{e.exports=t(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,r,t)=>{function n(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=Object.keys(e),n=Object.keys(r),i=t.length;if(n.length!==i)return!1;for(var a=0;a<i;a++){var o=t[a];if(e[o]!==r[o]||!Object.prototype.hasOwnProperty.call(r,o))return!1}return!0}function i(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=e.length;if(r.length!==t)return!1;for(var n=0;n<t;n++)if(e[n]!==r[n])return!1;return!0}t.r(r),t.d(r,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,r,t){var n=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=i(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.default=function(e){var r=e.children,t=e.device,i=e.onChange,o=n(e,["children","device","onChange"]),s=(0,a.default)(o,t,i);return"function"==typeof r?r(s):s?r:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=(0,t(/*! react */"react").createContext)(void 0);r.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Context=r.toQuery=r.useMediaQuery=r.default=void 0;var i=n(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.useMediaQuery=i.default;var a=n(t(/*! ./Component */"./src/Component.ts"));r.default=a.default;var o=n(t(/*! ./toQuery */"./src/toQuery.ts"));r.toQuery=o.default;var s=n(t(/*! ./Context */"./src/Context.ts"));r.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,r,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=a(t(/*! prop-types */"./node_modules/prop-types/index.js")),s=o.default.oneOfType([o.default.string,o.default.number]),l={all:o.default.bool,grid:o.default.bool,aural:o.default.bool,braille:o.default.bool,handheld:o.default.bool,print:o.default.bool,projection:o.default.bool,screen:o.default.bool,tty:o.default.bool,tv:o.default.bool,embossed:o.default.bool},c={orientation:o.default.oneOf(["portrait","landscape"]),scan:o.default.oneOf(["progressive","interlace"]),aspectRatio:o.default.string,deviceAspectRatio:o.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:o.default.bool,colorIndex:o.default.bool,monochrome:o.default.bool,resolution:s,type:Object.keys(l)},d=i(c,["type"]),u=n({minAspectRatio:o.default.string,maxAspectRatio:o.default.string,minDeviceAspectRatio:o.default.string,maxDeviceAspectRatio:o.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:o.default.number,maxColor:o.default.number,minColorIndex:o.default.number,maxColorIndex:o.default.number,minMonochrome:o.default.number,maxMonochrome:o.default.number,minResolution:s,maxResolution:s},d),f=n(n({},l),u);r.default={all:f,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=n(t(/*! ./mediaQuery */"./src/mediaQuery.ts"));r.default=function(e){var r=[];return Object.keys(a.default.all).forEach((function(t){var n=e[t];null!=n&&r.push(function(e,r){var t=(0,i.default)(e);return"number"==typeof r&&(r="".concat(r,"px")),!0===r?t:!1===r?"not ".concat(t):"(".concat(t,": ").concat(r,")")}(t,n))})),r.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(/*! react */"react"),a=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),c=n(t(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,o.default)(t)]=e[t],r}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,i.useState)(r),n=t[0],a=t[1];return(0,i.useEffect)((function(){var e=r();n!==e&&a(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,i.useContext)(c.default),t=function(){return d(e)||d(r)},n=(0,i.useState)(t),a=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();(0,s.shallowEqualObjects)(a,e)||o(e)}),[e,r]),a}(r),o=f(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,a.default)(e,r||{},!!r)},n=(0,i.useState)(t),o=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=t();return s(e),function(){e&&e.dispose()}}}),[e,r]),o}(o,n),h=function(e){var r=(0,i.useState)(e.matches),t=r[0],n=r[1];return(0,i.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),g=u();return(0,i.useEffect)((function(){g&&t&&t(h)}),[h]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var a=t[e]={exports:{}};return r[e].call(a.exports,a,a.exports,n),a.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var te=re.exports=ee(u),ne=function(e,r){return ne=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},ne(e,r)};var ie=function(){return ie=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},ie.apply(this,arguments)};var ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var oe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},se="object"==typeof ae&&ae&&ae.Object===Object&&ae,le="object"==typeof self&&self&&self.Object===Object&&self,ce=se||le||Function("return this")(),de=ce,ue=function(){return de.Date.now()},fe=/\s/;var he=function(e){for(var r=e.length;r--&&fe.test(e.charAt(r)););return r},ge=/^\s+/;var me=function(e){return e?e.slice(0,he(e)+1).replace(ge,""):e},pe=ce.Symbol,be=pe,ye=Object.prototype,ve=ye.hasOwnProperty,xe=ye.toString,Fe=be?be.toStringTag:void 0;var we=function(e){var r=ve.call(e,Fe),t=e[Fe];try{e[Fe]=void 0;var n=!0}catch(e){}var i=xe.call(e);return n&&(r?e[Fe]=t:delete e[Fe]),i},$e=Object.prototype.toString;var Se=we,De=function(e){return $e.call(e)},Be=pe?pe.toStringTag:void 0;var Ee=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Be&&Be in Object(e)?Se(e):De(e)},Ce=function(e){return null!=e&&"object"==typeof e};var Oe=me,Ae=oe,je=function(e){return"symbol"==typeof e||Ce(e)&&"[object Symbol]"==Ee(e)},ke=/^[-+]0x[0-9a-f]+$/i,_e=/^0b[01]+$/i,ze=/^0o[0-7]+$/i,Te=parseInt;var He=oe,Me=ue,Pe=function(e){if("number"==typeof e)return e;if(je(e))return NaN;if(Ae(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Ae(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Oe(e);var t=_e.test(e);return t||ze.test(e)?Te(e.slice(2),t?2:8):ke.test(e)?NaN:+e},Ie=Math.max,Le=Math.min;var Re=function(e,r,t){var n,i,a,o,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var t=n,a=i;return n=i=void 0,c=r,o=e.apply(a,t)}function g(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-c>=a}function m(){var e=Me();if(g(e))return p(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?Le(t,a-(e-c)):t}(e))}function p(e){return s=void 0,f&&n?h(e):(n=i=void 0,o)}function b(){var e=Me(),t=g(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return c=e,s=setTimeout(m,r),d?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),h(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=Pe(r)||0,He(t)&&(d=!!t.leading,a=(u="maxWait"in t)?Ie(Pe(t.maxWait)||0,r):a,f="trailing"in t?!!t.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?o:p(Me())},b},We=Re,Ne=oe;var Ye=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ne(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),We(e,r,{leading:n,maxWait:r,trailing:i})},Ve=function(e,r,t,n){switch(r){case"debounce":return Re(e,t,n);case"throttle":return Ye(e,t,n);default:return e}},Je=function(e){return"function"==typeof e},Ue=function(){return"undefined"==typeof window},Ze=function(e){return e instanceof Element||e instanceof HTMLDocument},qe=function(e,r,t,n){return function(i){var a=i.width,o=i.height;r((function(r){return r.width===a&&r.height===o||r.width===a&&!n||r.height===o&&!t?r:(e&&Je(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Ue()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Ue())return null;if(r)return document.querySelector(r);if(n&&Ze(n))return n;if(t.targetRef&&Ze(t.targetRef.current))return t.targetRef.current;var i=A(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,a=r.handleHeight,o=void 0===a||a,s=r.onResize;if(i||o){var l=qe(s,t.setState.bind(t),i,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Ue()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Je(r)?"renderProp":Je(n)?"childFunction":g(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,a=r.refreshRate,o=void 0===a?1e3:a,s=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=m(),t.observableElement=null,Ue()||(t.resizeHandler=Ve(t.createResizeHandler,i,o,s),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}ne(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Ue()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,n=r.children,i=r.nodeType,a=void 0===i?"div":i,o=this.state,s={width:o.width,height:o.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(s);case"childFunction":return(e=n)(s);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(s,["targetRef"]);return p(e,l)}return p(e,s);case"childArray":return(e=n).map((function(e){return!!e&&p(e,s)}));default:return d.createElement(a,null)}}}(b);var Xe=Ue()?y:v;function Qe(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,a=void 0===i?1e3:i,o=e.refreshOptions,s=e.handleWidth,l=void 0===s||s,c=e.handleHeight,d=void 0===c||c,u=e.targetRef,g=e.observerOptions,m=e.onResize,p=f(t),b=f(null),y=null!=u?u:b,v=f(),x=h({width:void 0,height:void 0}),F=x[0],w=x[1];return Xe((function(){if(!Ue()){var e=qe(m,w,l,d);v.current=Ve((function(r){(l||d)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!Ue()&&e({width:n,height:i}),p.current=!1}))}),n,a,o);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,g),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,a,o,l,d,m,g,y.current]),ie({ref:y},F)}const Ge={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Ke={D1:{fontFamily:Ge.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ge.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ge.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ge.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ge.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ge.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ge.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ge.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ge.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ge.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ge.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ge.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ge.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ge.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},er={D1:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ge.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Ge.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Ge.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ge.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},rr={D1:{fontFamily:Ge.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Ge.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Ge.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ge.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ge.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Ge.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Ge.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Ge.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Ge.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Ge.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Ge.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Ge.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Ge.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Ge.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var tr=Array.isArray,nr="object"==typeof G&&G&&G.Object===Object&&G,ir=nr,ar="object"==typeof self&&self&&self.Object===Object&&self,or=ir||ar||Function("return this")(),sr=or.Symbol,lr=sr,cr=Object.prototype,dr=cr.hasOwnProperty,ur=cr.toString,fr=lr?lr.toStringTag:void 0;var hr=function(e){var r=dr.call(e,fr),t=e[fr];try{e[fr]=void 0;var n=!0}catch(e){}var i=ur.call(e);return n&&(r?e[fr]=t:delete e[fr]),i},gr=Object.prototype.toString;var mr=hr,pr=function(e){return gr.call(e)},br=sr?sr.toStringTag:void 0;var yr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":br&&br in Object(e)?mr(e):pr(e)};var vr=function(e){return null!=e&&"object"==typeof e},xr=yr,Fr=vr;var wr=function(e){return"symbol"==typeof e||Fr(e)&&"[object Symbol]"==xr(e)},$r=tr,Sr=wr,Dr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Br=/^\w*$/;var Er=function(e,r){if($r(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Sr(e))||(Br.test(e)||!Dr.test(e)||null!=r&&e in Object(r))};var Cr=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Or=yr,Ar=Cr;var jr,kr=function(e){if(!Ar(e))return!1;var r=Or(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},_r=or["__core-js_shared__"],zr=(jr=/[^.]+$/.exec(_r&&_r.keys&&_r.keys.IE_PROTO||""))?"Symbol(src)_1."+jr:"";var Tr=function(e){return!!zr&&zr in e},Hr=Function.prototype.toString;var Mr=function(e){if(null!=e){try{return Hr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Pr=kr,Ir=Tr,Lr=Cr,Rr=Mr,Wr=/^\[object .+?Constructor\]$/,Nr=Function.prototype,Yr=Object.prototype,Vr=Nr.toString,Jr=Yr.hasOwnProperty,Ur=RegExp("^"+Vr.call(Jr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Zr=function(e){return!(!Lr(e)||Ir(e))&&(Pr(e)?Ur:Wr).test(Rr(e))},qr=function(e,r){return null==e?void 0:e[r]};var Xr=function(e,r){var t=qr(e,r);return Zr(t)?t:void 0},Qr=Xr(Object,"create"),Gr=Qr;var Kr=function(){this.__data__=Gr?Gr(null):{},this.size=0};var et=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},rt=Qr,tt=Object.prototype.hasOwnProperty;var nt=function(e){var r=this.__data__;if(rt){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return tt.call(r,e)?r[e]:void 0},it=Qr,at=Object.prototype.hasOwnProperty;var ot=Qr;var st=Kr,lt=et,ct=nt,dt=function(e){var r=this.__data__;return it?void 0!==r[e]:at.call(r,e)},ut=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ot&&void 0===r?"__lodash_hash_undefined__":r,this};function ft(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ft.prototype.clear=st,ft.prototype.delete=lt,ft.prototype.get=ct,ft.prototype.has=dt,ft.prototype.set=ut;var ht=ft;var gt=function(){this.__data__=[],this.size=0};var mt=function(e,r){return e===r||e!=e&&r!=r},pt=mt;var bt=function(e,r){for(var t=e.length;t--;)if(pt(e[t][0],r))return t;return-1},yt=bt,vt=Array.prototype.splice;var xt=bt;var Ft=bt;var wt=bt;var $t=gt,St=function(e){var r=this.__data__,t=yt(r,e);return!(t<0)&&(t==r.length-1?r.pop():vt.call(r,t,1),--this.size,!0)},Dt=function(e){var r=this.__data__,t=xt(r,e);return t<0?void 0:r[t][1]},Bt=function(e){return Ft(this.__data__,e)>-1},Et=function(e,r){var t=this.__data__,n=wt(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this};function Ct(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ct.prototype.clear=$t,Ct.prototype.delete=St,Ct.prototype.get=Dt,Ct.prototype.has=Bt,Ct.prototype.set=Et;var Ot=Ct,At=Xr(or,"Map"),jt=ht,kt=Ot,_t=At;var zt=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Tt=function(e,r){var t=e.__data__;return zt(r)?t["string"==typeof r?"string":"hash"]:t.map},Ht=Tt;var Mt=Tt;var Pt=Tt;var It=Tt;var Lt=function(e,r){var t=It(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Rt=function(){this.size=0,this.__data__={hash:new jt,map:new(_t||kt),string:new jt}},Wt=function(e){var r=Ht(this,e).delete(e);return this.size-=r?1:0,r},Nt=function(e){return Mt(this,e).get(e)},Yt=function(e){return Pt(this,e).has(e)},Vt=Lt;function Jt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Jt.prototype.clear=Rt,Jt.prototype.delete=Wt,Jt.prototype.get=Nt,Jt.prototype.has=Yt,Jt.prototype.set=Vt;var Ut=Jt,Zt=Ut;function qt(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=t.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return t.cache=a.set(i,o)||a,o};return t.cache=new(qt.Cache||Zt),t}qt.Cache=Zt;var Xt=qt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gt=/\\(\\)?/g,Kt=function(e){var r=Xt(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Qt,(function(e,t,n,i){r.push(n?i.replace(Gt,"$1"):t||e)})),r}));var en=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},rn=tr,tn=wr,nn=sr?sr.prototype:void 0,an=nn?nn.toString:void 0;var on=function e(r){if("string"==typeof r)return r;if(rn(r))return en(r,e)+"";if(tn(r))return an?an.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},sn=on;var ln=tr,cn=Er,dn=Kt,un=function(e){return null==e?"":sn(e)};var fn=function(e,r){return ln(e)?e:cn(e,r)?[e]:dn(un(e))},hn=wr;var gn=function(e){if("string"==typeof e||hn(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},mn=fn,pn=gn;var bn=function(e,r){for(var t=0,n=(r=mn(r,e)).length;null!=e&&t<n;)e=e[pn(r[t++])];return t&&t==n?e:void 0},yn=bn;var vn=function(e,r,t){var n=null==e?void 0:yn(e,r);return void 0===n?t:n},xn=K(vn);const Fn=(e,r,t)=>r?xn(t,r)||xn(e,r):t||e,wn=(e,r)=>{const t=r||e.defaultValue;return xn(e.collections,t)};var $n;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($n||($n={}));const Sn={collections:{base:Ke,oneservice:rr,plusJakartaSans:er},defaultValue:"base"},Dn=e=>r=>{const t=r.theme,n=wn(Sn,t[$n.textStyleScheme]);return t.options&&t.options.textStyle?Fn(n,e,t.options.textStyle):Fn(n,e)},Bn={D1:{fontFamily:Dn("D1.fontFamily"),fontSize:Dn("D1.fontSize"),fontWeight:Dn("D1.fontWeight"),lineHeight:Dn("D1.lineHeight"),letterSpacing:Dn("D1.letterSpacing")},D2:{fontFamily:Dn("D2.fontFamily"),fontSize:Dn("D2.fontSize"),fontWeight:Dn("D2.fontWeight"),lineHeight:Dn("D2.lineHeight"),letterSpacing:Dn("D2.letterSpacing")},D3:{fontFamily:Dn("D3.fontFamily"),fontSize:Dn("D3.fontSize"),fontWeight:Dn("D3.fontWeight"),lineHeight:Dn("D3.lineHeight"),letterSpacing:Dn("D3.letterSpacing")},D4:{fontFamily:Dn("D4.fontFamily"),fontSize:Dn("D4.fontSize"),fontWeight:Dn("D4.fontWeight"),lineHeight:Dn("D4.lineHeight"),letterSpacing:Dn("D4.letterSpacing")},DBody:{fontFamily:Dn("DBody.fontFamily"),fontSize:Dn("DBody.fontSize"),fontWeight:Dn("DBody.fontWeight"),lineHeight:Dn("DBody.lineHeight"),letterSpacing:Dn("DBody.letterSpacing")},H1:{fontFamily:Dn("H1.fontFamily"),fontSize:Dn("H1.fontSize"),fontWeight:Dn("H1.fontWeight"),lineHeight:Dn("H1.lineHeight"),letterSpacing:Dn("H1.letterSpacing")},H2:{fontFamily:Dn("H2.fontFamily"),fontSize:Dn("H2.fontSize"),fontWeight:Dn("H2.fontWeight"),lineHeight:Dn("H2.lineHeight"),letterSpacing:Dn("H2.letterSpacing")},H3:{fontFamily:Dn("H3.fontFamily"),fontSize:Dn("H3.fontSize"),fontWeight:Dn("H3.fontWeight"),lineHeight:Dn("H3.lineHeight"),letterSpacing:Dn("H3.letterSpacing")},H4:{fontFamily:Dn("H4.fontFamily"),fontSize:Dn("H4.fontSize"),fontWeight:Dn("H4.fontWeight"),lineHeight:Dn("H4.lineHeight"),letterSpacing:Dn("H4.letterSpacing")},H5:{fontFamily:Dn("H5.fontFamily"),fontSize:Dn("H5.fontSize"),fontWeight:Dn("H5.fontWeight"),lineHeight:Dn("H5.lineHeight"),letterSpacing:Dn("H5.letterSpacing")},H6:{fontFamily:Dn("H6.fontFamily"),fontSize:Dn("H6.fontSize"),fontWeight:Dn("H6.fontWeight"),lineHeight:Dn("H6.lineHeight"),letterSpacing:Dn("H6.letterSpacing")},Body:{fontFamily:Dn("Body.fontFamily"),fontSize:Dn("Body.fontSize"),fontWeight:Dn("Body.fontWeight"),lineHeight:Dn("Body.lineHeight"),letterSpacing:Dn("Body.letterSpacing")},BodySmall:{fontFamily:Dn("BodySmall.fontFamily"),fontSize:Dn("BodySmall.fontSize"),fontWeight:Dn("BodySmall.fontWeight"),lineHeight:Dn("BodySmall.lineHeight"),letterSpacing:Dn("BodySmall.letterSpacing")},XSmall:{fontFamily:Dn("XSmall.fontFamily"),fontSize:Dn("XSmall.fontSize"),fontWeight:Dn("XSmall.fontWeight"),lineHeight:Dn("XSmall.lineHeight"),letterSpacing:Dn("XSmall.letterSpacing")}},En=[Ge.OpenSans,Ge.PlusJakartaSans],Cn=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},On=(e,r)=>t=>{var n;const i=Bn[e].fontFamily(t),a=Bn[e].fontWeight(t),o=En.find((e=>Object.values(e).includes(i)));return o?B`
                font-family: ${Cn(o,r)||Cn(o,a)||i};
                font-weight: normal !important;
            `:B`
            font-family: ${i};
            font-weight: ${null!==(n=An(r)||a)&&void 0!==n?n:"normal"};
        `},An=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},jn=e=>{if(e>0)return B`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},kn=(e,r,t=!1)=>n=>{const i=Bn[e],a=i.fontSize(n);return B`
            ${On(e,r)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${B`
                margin-bottom: ${a*(t?1.05:0)}rem;
            `}
        `},_n=(e=!1,r=!1,t=void 0)=>r?B`
            display: block;
            ${jn(t)}
        `:e?B`
            display: inline;
        `:B`
            display: block;
            ${jn(t)}
        `;function zn(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;const Tn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Hn=e=>r=>{const t=r.theme,n=wn(Tn,t[$n.colorScheme]);return t.options&&t.options.color?Fn(n,e,t.options.color):Fn(n,e)},Mn={Brand:{1:Hn("Brand.1"),2:Hn("Brand.2"),3:Hn("Brand.3"),4:Hn("Brand.4"),5:Hn("Brand.5"),6:Hn("Brand.6")},Primary:Hn("Primary"),PrimaryDark:Hn("PrimaryDark"),Secondary:Hn("Secondary"),Accent:{Light:{1:Hn("Accent.Light.1"),2:Hn("Accent.Light.2"),3:Hn("Accent.Light.3"),4:Hn("Accent.Light.4"),5:Hn("Accent.Light.5"),6:Hn("Accent.Light.6")},Dark:{1:Hn("Accent.Dark.1"),2:Hn("Accent.Dark.2"),3:Hn("Accent.Dark.3")}},Neutral:{1:Hn("Neutral.1"),2:Hn("Neutral.2"),3:Hn("Neutral.3"),4:Hn("Neutral.4"),5:Hn("Neutral.5"),6:Hn("Neutral.6"),7:Hn("Neutral.7"),8:Hn("Neutral.8")},Validation:{Green:{Text:Hn("Validation.Green.Text"),Icon:Hn("Validation.Green.Icon"),Border:Hn("Validation.Green.Border"),Background:Hn("Validation.Green.Background")},Orange:{Text:Hn("Validation.Orange.Text"),Icon:Hn("Validation.Orange.Icon"),Border:Hn("Validation.Orange.Border"),Background:Hn("Validation.Orange.Background"),Badge:Hn("Validation.Orange.Badge")},Red:{Text:Hn("Validation.Red.Text"),Icon:Hn("Validation.Red.Icon"),Border:Hn("Validation.Red.Border"),Background:Hn("Validation.Red.Background")},Blue:{Text:Hn("Validation.Blue.Text"),Icon:Hn("Validation.Blue.Icon"),Border:Hn("Validation.Blue.Border"),Background:Hn("Validation.Blue.Background")}},Shadow:{Accent:Hn("Shadow.Accent"),Red:Hn("Shadow.Red"),Elevation:Hn("Shadow.Elevation")}};var Pn;!function(e){e.D1=D.h1`
        ${e=>B`
                ${kn("D1",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=D.h1`
        ${e=>B`
                ${kn("D2",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=D.h1`
        ${e=>B`
                ${kn("D3",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=D.h1`
        ${e=>B`
                ${kn("D4",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=D.h1`
        ${e=>B`
                ${kn("DBody",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=D.h1`
        ${e=>B`
                ${kn("H1",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=D.h2`
        ${e=>B`
                ${kn("H2",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=D.h3`
        ${e=>B`
                ${kn("H3",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=D.h4`
        ${e=>B`
                ${kn("H4",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=D.h5`
        ${e=>B`
                ${kn("H5",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=D.h6`
        ${e=>B`
                ${kn("H6",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=D.p`
        ${e=>B`
                ${kn("Body",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=D.p`
        ${e=>B`
                ${kn("BodySmall",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=D.span`
        ${e=>B`
                ${kn("XSmall",e.weight,e.paragraph)}
                color: ${Mn.Neutral[1]};
                ${_n(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Rn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Rn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Pn||(Pn={}));const In=D.a`
    ${e=>B`
            ${kn(e.textStyle,e.weight)}
            color: ${Mn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Mn.Secondary};

                svg {
                    color: ${Mn.Secondary};
                }
            }
        `}
`,Ln=D(O)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Rn=t=>{var{external:n=!1,children:i}=t,a=zn(t,["external","children"]);return e(In,Object.assign({},a,{children:[i,n&&r(Ln,{})]}))};var Wn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Wn||(Wn={}));const Nn={[$n.colorScheme]:"base",[$n.textStyleScheme]:"base",[$n.designTokenScheme]:"base",[$n.resourceScheme]:"base"};var Yn;$n.colorScheme,$n.textStyleScheme,$n.designTokenScheme,$n.resourceScheme,$n.colorScheme,$n.textStyleScheme,$n.designTokenScheme,$n.resourceScheme,$n.colorScheme,$n.textStyleScheme,$n.designTokenScheme,$n.resourceScheme,$n.colorScheme,$n.textStyleScheme,$n.designTokenScheme,$n.resourceScheme,$n.colorScheme,$n.textStyleScheme,$n.designTokenScheme,$n.resourceScheme,function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let a=0;r>t&&(a=Math.floor((r-t)/i));const o=n+a;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+a.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return a.repeat(e.substring(0,t).length)+e.substring(t,n+1)+a.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Yn||(Yn={}));const Vn=B`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Jn=D.div`
    ${e=>kn("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${e=>e.$selected?Mn.Primary:Mn.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Vn}
`,Un=D.div`
    color: ${Mn.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Vn}

    ${e=>"next-line"===e.$labelDisplayType?B`
                    ${kn("BodySmall","semibold")}
                `:B`
                    ${kn("Body","regular")}
                `}
`,Zn=D.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return B`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return B`
                    ${Jn} {
                        display: inline;
                    }

                    ${Un} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,qn=D.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Xn=D.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Qn=({displayType:n="inline",label:i,maxLines:a=2,selected:o,sublabel:s,truncationType:l="middle",variant:c})=>{const d=E()||Nn,u=Bn.Body.fontSize({theme:d}),f=Bn.Body.fontFamily({theme:d}),{ref:h,width:g}=Qe(),m=x((e=>{if("inline"!==n)return!1;return Yn.getTextWidth(e,`${u}rem '${f}'`)>g*a-50}),[g,n,u,f,a]),p=F((()=>m(i)),[m,i]),b=F((()=>s&&m(s)),[m,s]),y=p||b?"next-line":n,v=n=>e(t,{children:[r(qn,Object.assign({$maxLines:a,"aria-hidden":!0},{children:n})),r(Xn,Object.assign({$maxLines:a,"aria-hidden":!0},{children:n}))]});return e(Zn,Object.assign({ref:h,$labelDisplayType:y},{children:[r(Jn,Object.assign({"aria-label":i,$maxLines:a,$selected:o,$truncateType:l,$variant:c},{children:"middle"===l&&p?v(i):i})),s&&r(Un,Object.assign({"aria-label":s,$maxLines:a,$truncateType:l,$labelDisplayType:n},{children:"middle"===l&&b?v(s):s}))]}))};var Gn=Ot;var Kn=Ot,ei=At,ri=Ut;var ti=Ot,ni=function(){this.__data__=new Gn,this.size=0},ii=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t},ai=function(e){return this.__data__.get(e)},oi=function(e){return this.__data__.has(e)},si=function(e,r){var t=this.__data__;if(t instanceof Kn){var n=t.__data__;if(!ei||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new ri(n)}return t.set(e,r),this.size=t.size,this};function li(e){var r=this.__data__=new ti(e);this.size=r.size}li.prototype.clear=ni,li.prototype.delete=ii,li.prototype.get=ai,li.prototype.has=oi,li.prototype.set=si;var ci=li;var di=Ut,ui=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},fi=function(e){return this.__data__.has(e)};function hi(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new di;++r<t;)this.add(e[r])}hi.prototype.add=hi.prototype.push=ui,hi.prototype.has=fi;var gi=hi,mi=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},pi=function(e,r){return e.has(r)};var bi=function(e,r,t,n,i,a){var o=1&t,s=e.length,l=r.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),d=a.get(r);if(c&&d)return c==r&&d==e;var u=-1,f=!0,h=2&t?new gi:void 0;for(a.set(e,r),a.set(r,e);++u<s;){var g=e[u],m=r[u];if(n)var p=o?n(m,g,u,r,e,a):n(g,m,u,e,r,a);if(void 0!==p){if(p)continue;f=!1;break}if(h){if(!mi(r,(function(e,r){if(!pi(h,r)&&(g===e||i(g,e,t,n,a)))return h.push(r)}))){f=!1;break}}else if(g!==m&&!i(g,m,t,n,a)){f=!1;break}}return a.delete(e),a.delete(r),f};var yi=or.Uint8Array,vi=mt,xi=bi,Fi=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t},wi=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},$i=sr?sr.prototype:void 0,Si=$i?$i.valueOf:void 0;var Di=function(e,r,t,n,i,a,o){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!a(new yi(e),new yi(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return vi(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=Fi;case"[object Set]":var l=1&n;if(s||(s=wi),e.size!=r.size&&!l)return!1;var c=o.get(e);if(c)return c==r;n|=2,o.set(e,r);var d=xi(s(e),s(r),n,i,a,o);return o.delete(e),d;case"[object Symbol]":if(Si)return Si.call(e)==Si.call(r)}return!1};var Bi=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},Ei=Bi,Ci=tr;var Oi=function(e,r,t){var n=r(e);return Ci(e)?n:Ei(n,t(e))};var Ai=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,a=[];++t<n;){var o=e[t];r(o,t,e)&&(a[i++]=o)}return a},ji=function(){return[]},ki=Object.prototype.propertyIsEnumerable,_i=Object.getOwnPropertySymbols,zi=_i?function(e){return null==e?[]:(e=Object(e),Ai(_i(e),(function(r){return ki.call(e,r)})))}:ji;var Ti=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},Hi=yr,Mi=vr;var Pi=function(e){return Mi(e)&&"[object Arguments]"==Hi(e)},Ii=vr,Li=Object.prototype,Ri=Li.hasOwnProperty,Wi=Li.propertyIsEnumerable,Ni=Pi(function(){return arguments}())?Pi:function(e){return Ii(e)&&Ri.call(e,"callee")&&!Wi.call(e,"callee")},Yi={exports:{}};var Vi=function(){return!1};!function(e,r){var t=or,n=Vi,i=r&&!r.nodeType&&r,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?t.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(Yi,Yi.exports);var Ji=Yi.exports,Ui=/^(?:0|[1-9]\d*)$/;var Zi=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&Ui.test(e))&&e>-1&&e%1==0&&e<r};var qi=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Xi=yr,Qi=qi,Gi=vr,Ki={};Ki["[object Float32Array]"]=Ki["[object Float64Array]"]=Ki["[object Int8Array]"]=Ki["[object Int16Array]"]=Ki["[object Int32Array]"]=Ki["[object Uint8Array]"]=Ki["[object Uint8ClampedArray]"]=Ki["[object Uint16Array]"]=Ki["[object Uint32Array]"]=!0,Ki["[object Arguments]"]=Ki["[object Array]"]=Ki["[object ArrayBuffer]"]=Ki["[object Boolean]"]=Ki["[object DataView]"]=Ki["[object Date]"]=Ki["[object Error]"]=Ki["[object Function]"]=Ki["[object Map]"]=Ki["[object Number]"]=Ki["[object Object]"]=Ki["[object RegExp]"]=Ki["[object Set]"]=Ki["[object String]"]=Ki["[object WeakMap]"]=!1;var ea=function(e){return Gi(e)&&Qi(e.length)&&!!Ki[Xi(e)]};var ra=function(e){return function(r){return e(r)}},ta={exports:{}};!function(e,r){var t=nr,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&t.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(ta,ta.exports);var na=ta.exports,ia=ea,aa=ra,oa=na&&na.isTypedArray,sa=oa?aa(oa):ia,la=Ti,ca=Ni,da=tr,ua=Ji,fa=Zi,ha=sa,ga=Object.prototype.hasOwnProperty;var ma=function(e,r){var t=da(e),n=!t&&ca(e),i=!t&&!n&&ua(e),a=!t&&!n&&!i&&ha(e),o=t||n||i||a,s=o?la(e.length,String):[],l=s.length;for(var c in e)!r&&!ga.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||fa(c,l))||s.push(c);return s},pa=Object.prototype;var ba=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||pa)};var ya=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),va=ba,xa=ya,Fa=Object.prototype.hasOwnProperty;var wa=kr,$a=qi;var Sa=function(e){return null!=e&&$a(e.length)&&!wa(e)},Da=ma,Ba=function(e){if(!va(e))return xa(e);var r=[];for(var t in Object(e))Fa.call(e,t)&&"constructor"!=t&&r.push(t);return r},Ea=Sa;var Ca=function(e){return Ea(e)?Da(e):Ba(e)},Oa=Oi,Aa=zi,ja=Ca;var ka=function(e){return Oa(e,ja,Aa)},_a=Object.prototype.hasOwnProperty;var za=function(e,r,t,n,i,a){var o=1&t,s=ka(e),l=s.length;if(l!=ka(r).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in r:_a.call(r,d)))return!1}var u=a.get(e),f=a.get(r);if(u&&f)return u==r&&f==e;var h=!0;a.set(e,r),a.set(r,e);for(var g=o;++c<l;){var m=e[d=s[c]],p=r[d];if(n)var b=o?n(p,m,d,r,e,a):n(m,p,d,e,r,a);if(!(void 0===b?m===p||i(m,p,t,n,a):b)){h=!1;break}g||(g="constructor"==d)}if(h&&!g){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(h=!1)}return a.delete(e),a.delete(r),h},Ta=Xr(or,"DataView"),Ha=At,Ma=Xr(or,"Promise"),Pa=Xr(or,"Set"),Ia=Xr(or,"WeakMap"),La=yr,Ra=Mr,Wa="[object Map]",Na="[object Promise]",Ya="[object Set]",Va="[object WeakMap]",Ja="[object DataView]",Ua=Ra(Ta),Za=Ra(Ha),qa=Ra(Ma),Xa=Ra(Pa),Qa=Ra(Ia),Ga=La;(Ta&&Ga(new Ta(new ArrayBuffer(1)))!=Ja||Ha&&Ga(new Ha)!=Wa||Ma&&Ga(Ma.resolve())!=Na||Pa&&Ga(new Pa)!=Ya||Ia&&Ga(new Ia)!=Va)&&(Ga=function(e){var r=La(e),t="[object Object]"==r?e.constructor:void 0,n=t?Ra(t):"";if(n)switch(n){case Ua:return Ja;case Za:return Wa;case qa:return Na;case Xa:return Ya;case Qa:return Va}return r});var Ka=ci,eo=bi,ro=Di,to=za,no=Ga,io=tr,ao=Ji,oo=sa,so="[object Arguments]",lo="[object Array]",co="[object Object]",uo=Object.prototype.hasOwnProperty;var fo=function(e,r,t,n,i,a){var o=io(e),s=io(r),l=o?lo:no(e),c=s?lo:no(r),d=(l=l==so?co:l)==co,u=(c=c==so?co:c)==co,f=l==c;if(f&&ao(e)){if(!ao(r))return!1;o=!0,d=!1}if(f&&!d)return a||(a=new Ka),o||oo(e)?eo(e,r,t,n,i,a):ro(e,r,l,t,n,i,a);if(!(1&t)){var h=d&&uo.call(e,"__wrapped__"),g=u&&uo.call(r,"__wrapped__");if(h||g){var m=h?e.value():e,p=g?r.value():r;return a||(a=new Ka),i(m,p,t,n,a)}}return!!f&&(a||(a=new Ka),to(e,r,t,n,i,a))},ho=vr;var go=function e(r,t,n,i,a){return r===t||(null==r||null==t||!ho(r)&&!ho(t)?r!=r&&t!=t:fo(r,t,n,i,e,a))},mo=ci,po=go;var bo=Cr;var yo=function(e){return e==e&&!bo(e)},vo=yo,xo=Ca;var Fo=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},wo=function(e,r,t,n){var i=t.length,a=i,o=!n;if(null==e)return!a;for(e=Object(e);i--;){var s=t[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=t[i])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new mo;if(n)var f=n(c,d,l,e,r,u);if(!(void 0===f?po(d,c,3,n,u):f))return!1}}return!0},$o=function(e){for(var r=xo(e),t=r.length;t--;){var n=r[t],i=e[n];r[t]=[n,i,vo(i)]}return r},So=Fo;var Do=fn,Bo=Ni,Eo=tr,Co=Zi,Oo=qi,Ao=gn;var jo=function(e,r){return null!=e&&r in Object(e)},ko=function(e,r,t){for(var n=-1,i=(r=Do(r,e)).length,a=!1;++n<i;){var o=Ao(r[n]);if(!(a=null!=e&&t(e,o)))break;e=e[o]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&Oo(i)&&Co(o,i)&&(Eo(e)||Bo(e))};var _o=go,zo=vn,To=function(e,r){return null!=e&&ko(e,r,jo)},Ho=Er,Mo=yo,Po=Fo,Io=gn;var Lo=bn;var Ro=function(e){return function(r){return null==r?void 0:r[e]}},Wo=function(e){return function(r){return Lo(r,e)}},No=Er,Yo=gn;var Vo=function(e){var r=$o(e);return 1==r.length&&r[0][2]?So(r[0][0],r[0][1]):function(t){return t===e||wo(t,e,r)}},Jo=function(e,r){return Ho(e)&&Mo(r)?Po(Io(e),r):function(t){var n=zo(t,e);return void 0===n&&n===r?To(t,e):_o(r,n,3)}},Uo=function(e){return e},Zo=tr,qo=function(e){return No(e)?Ro(Yo(e)):Wo(e)};var Xo=function(e){return"function"==typeof e?e:null==e?Uo:"object"==typeof e?Zo(e)?Jo(e[0],e[1]):Vo(e):qo(e)},Qo=Xo,Go=Sa,Ko=Ca;var es=function(e){return function(r,t,n){var i=Object(r);if(!Go(r)){var a=Qo(t);r=Ko(r),t=function(e){return a(i[e],e,i)}}var o=e(r,t,n);return o>-1?i[a?r[o]:o]:void 0}};var rs=/\s/;var ts=function(e){for(var r=e.length;r--&&rs.test(e.charAt(r)););return r},ns=/^\s+/;var is=function(e){return e?e.slice(0,ts(e)+1).replace(ns,""):e},as=Cr,os=wr,ss=/^[-+]0x[0-9a-f]+$/i,ls=/^0b[01]+$/i,cs=/^0o[0-7]+$/i,ds=parseInt;var us=function(e){if("number"==typeof e)return e;if(os(e))return NaN;if(as(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=as(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=is(e);var t=ls.test(e);return t||cs.test(e)?ds(e.slice(2),t?2:8):ss.test(e)?NaN:+e},fs=1/0;var hs=function(e){return e?(e=us(e))===fs||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var gs=function(e,r,t,n){for(var i=e.length,a=t+(n?1:-1);n?a--:++a<i;)if(r(e[a],a,e))return a;return-1},ms=Xo,ps=function(e){var r=hs(e),t=r%1;return r==r?t?r-t:r:0},bs=Math.max;var ys=K(es((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var i=null==t?0:ps(t);return i<0&&(i=bs(n+i,0)),gs(e,ms(r),i)}))),vs=go;var xs=K((function(e,r){return vs(e,r)})),Fs={exports:{}};Fs.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},b=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:b,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,c),a=t-i<0,o=r.clone().add(n+(a?-1:1),c);return+(-(n+(t-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:f,h:o,m:a,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var F="$isDayjsObject",w=function(e){return e instanceof B||!(!e||!e[F])},$=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var a=r.toLowerCase();x[a]&&(i=a),t&&(x[a]=t,i=a);var o=r.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},S=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new B(t)},D=y;D.l=$,D.i=w,D.w=function(e,r){return S(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var B=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(D.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(r)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,r){var t=S(e);return this.startOf(r)<=t&&t<=this.endOf(r)},b.isAfter=function(e,r){return S(e)<this.startOf(r)},b.isBefore=function(e,r){return this.endOf(r)<S(e)},b.$g=function(e,r,t){return D.u(e)?this[r]:this.set(t,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,r){var t=this,n=!!D.u(r)||r,d=D.p(e),h=function(e,r){var i=D.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},g=function(e,r){return D.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,p=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return n?h(1,0):h(31,11);case c:return n?h(1,p):h(0,p+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return h(n?b-x:b+(6-x),p);case s:case f:return g(y+"Hours",0);case o:return g(y+"Minutes",1);case a:return g(y+"Seconds",2);case i:return g(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,r){var t,l=D.p(e),d="set"+(this.$u?"UTC":""),h=(t={},t[s]=d+"Date",t[f]=d+"Date",t[c]=d+"Month",t[u]=d+"FullYear",t[o]=d+"Hours",t[a]=d+"Minutes",t[i]=d+"Seconds",t[n]=d+"Milliseconds",t)[l],g=l===s?this.$D+(r-this.$W):r;if(l===c||l===u){var m=this.clone().set(f,1);m.$d[h](g),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},b.set=function(e,r){return this.clone().$set(e,r)},b.get=function(e){return this[D.p(e)]()},b.add=function(n,d){var f,h=this;n=Number(n);var g=D.p(d),m=function(e){var r=S(h);return D.w(r.date(r.date()+Math.round(e*n)),h)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return m(1);if(g===l)return m(7);var p=(f={},f[a]=r,f[o]=t,f[i]=e,f)[g]||1,b=this.$d.getTime()+n*p;return D.w(b,this)},b.subtract=function(e,r){return this.add(-1*e,r)},b.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,l=t.weekdays,c=t.months,d=t.meridiem,u=function(e,t,i,a){return e&&(e[t]||e(r,n))||i[t].slice(0,a)},f=function(e){return D.s(a%12||12,e,"0")},g=d||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return D.s(r.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return r.$D;case"DD":return D.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return D.s(o,2,"0");case"s":return String(r.$s);case"ss":return D.s(r.$s,2,"0");case"SSS":return D.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var g,m=this,p=D.p(f),b=S(n),y=(b.utcOffset()-this.utcOffset())*r,v=this-b,x=function(){return D.m(m,b)};switch(p){case u:g=x()/12;break;case c:g=x();break;case d:g=x()/3;break;case l:g=(v-y)/6048e5;break;case s:g=(v-y)/864e5;break;case o:g=v/t;break;case a:g=v/r;break;case i:g=v/e;break;default:g=v}return h?g:D.a(g)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),E=B.prototype;return S.prototype=E,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",f]].forEach((function(e){E[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),S.extend=function(e,r){return e.$i||(e(r,B,S),e.$i=!0),S},S.locale=$,S.isDayjs=w,S.unix=function(e){return S(1e3*e)},S.en=x[v],S.Ls=x,S.p={},S}();var ws=K(Fs.exports),$s={exports:{}};$s.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],c=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},d=function(e,r){var t,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=a.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=c("months"),t=(c("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=c("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(t){var n,i;n=t,i=a&&a.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var a=n&&n.toUpperCase();return t||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],f=d&&d[0],h=d&&d[1];o[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=o[t];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(n),d=a.exec(c)[0];l.call(r,d),e=e.replace(d,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=f(r)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,h=new Date,g=o||(i||a?1:h.getDate()),m=i||h.getFullYear(),p=0;i&&!a||(p=a>0?a-1:h.getMonth());var b=s||0,y=l||0,v=c||0,x=d||0;return u?new Date(Date.UTC(m,p,g,b,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,p,g,b,y,v,x)):new Date(m,p,g,b,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&r!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var h=s.length,g=1;g<=h;g+=1){o[1]=s[g-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Ss=K($s.exports),Ds={exports:{}};Ds.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var a=t(e),o=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Bs=K(Ds.exports),Es={exports:{}};Es.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Cs=K(Es.exports),Os={exports:{}};Os.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var As,js,ks,_s=K(Os.exports),zs={exports:{}},Ts=K(zs.exports=(As={year:0,month:1,day:2,hour:3,minute:4,second:5},js={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=js[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),js[n]=i),i}(r,t);return i.formatToParts(n)},a=function(e,r){for(var n=i(e,r),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=As[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],f=24===u?0:u,h=a[0]+"-"+a[1]+"-"+a[2]+" "+f+":"+a[4]+":"+a[5]+":000",g=+e;return(t.utc(h).valueOf()-(g-=g%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(r){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var o=i&&r,s=i||r||n,l=a(+t(),s);if("string"!=typeof e)return t(e).tz(s);var c=function(e,r,t){var n=e-60*r*1e3,i=a(n,t);if(r===i)return[n,r];var o=a(n-=60*(i-r)*1e3,t);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(t.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],f=t(d).utcOffset(u);return f.$x.$timezone=s,f},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));ws.extend(Bs),ws.extend(_s),ws.extend(Cs),ws.extend(Ss),ws.extend(Ts),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=ws(r).startOf("week");return Hs(t).map((e=>Ms(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Ms(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(ws(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+ws(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=ws(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const a=e.isWithinRange(r,n?ws(n):void 0,i?ws(i):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!a||!!o}}(ks||(ks={}));const Hs=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Ms=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Ps=[1,3,5,7,8,10,12],Is=[4,6,9,11];var Ls,Rs,Ws;function Ns(e){const r=f(null);return v((()=>{r.current=e}),[e]),x(((...e)=>r.current(...e)),[])}!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),a=parseInt(t),o=parseInt(n);return 0==i?"1":Ps.includes(a)?Math.min(i,31).toString():Is.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=ws(e,t);return ws(r,t).diff(n,"minute")},e.toDayjs=e=>e?ws(e):ws(),e.addMinutesToTime=(e,r,t="HH:mm")=>ws(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>ws(e).isSame(ws(r),t)}(Ls||(Ls={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!ws(e).isBefore(n,"day"))||!(!i||!ws(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(ws(e).isValid())return e}return""}}(Rs||(Rs={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ws||(Ws={}));const Ys=e=>{const r=(e=>{const r=f(e),t=f();return y((()=>{t.current=r.current,r.current=e}),[e]),t.current})(e);return r!==e},Vs=u.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Js=({children:e})=>{const[t,n]=h(-1);return r(Vs.Provider,Object.assign({value:{focusedIndex:t,setFocusedIndex:n}},{children:e}))},Us={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Zs=e=>Object.keys(Us).reduce(((r,t)=>{const n=Us[t];return r[t]=`@media screen and (${e}: ${n}px)`,r}),{}),qs=Zs("max-width"),Xs=(Zs("min-width"),Us),Qs=D.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Gs=C`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ks=D.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${Gs} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,el=D(Ks)`
    animation-delay: -0.45s;
`,rl=D(Ks)`
    animation-delay: -0.3s;
`,tl=D(Ks)`
    animation-delay: -0.15s;
`,nl=({color:t,className:n,size:i})=>e(Qs,Object.assign({className:n,$size:i,$color:t},{children:[r(Ks,{id:"inner1"}),r(el,{id:"inner2"}),r(rl,{id:"inner3"}),r(tl,{id:"inner4"})]})),il={collections:{base:{InputBoxShadow:B`
        inset 0 0 4px 0px ${Mn.Shadow.Accent}
    `,InputErrorBoxShadow:B`
        inset 0 0 4px 0px ${Mn.Shadow.Red}
    `,ElevationBoxShadow:B`
      0px 2px 8px ${Mn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:B`
        inset 0 0 3px 0px ${Mn.Shadow.Accent}
    `,InputErrorBoxShadow:B`
        inset 0 0 3px 0px ${Mn.Shadow.Red}
    `,ElevationBoxShadow:B`
      0px 2px 8px ${Mn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},al=e=>r=>{var t;const n=r.theme,i=wn(il,n[$n.designTokenScheme]);return(null===(t=n.options)||void 0===t?void 0:t.designToken)?Fn(i,e,n.options.designToken):Fn(i,e)},ol=al("InputBoxShadow"),sl=al("InputErrorBoxShadow"),ll=(al("ElevationBoxShadow"),al("Table.Header"),al("Table.Cell.Primary"),al("Table.Cell.Secondary"),al("Table.Cell.Selected"),al("Table.Cell.Hover"),al("Button.Danger.BackgroundColor"),al("Button.Danger.Hover"),al("Button.Danger.Primary"),al("Button.Danger.Border"),B`
    border: 1px solid ${Mn.Accent.Light[1]};
    box-shadow: ${ol};
`),cl=B`
    border: 1px solid ${Mn.Accent.Light[1]};
    box-shadow: none;
`,dl=B`
    border: 1px solid ${Mn.Neutral[5]};
    box-shadow: none;
`,ul=B`
    border: 1px solid ${Mn.Validation.Red.Border};
    box-shadow: ${sl};
`,fl=D.div`
    border: 1px solid ${Mn.Neutral[5]};
    border-radius: 4px;
    background: ${Mn.Neutral[8]};

    :focus-within {
        ${ll}
    }
    ${e=>e.$focused&&ll}

    ${e=>e.$readOnly?B`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${cl}
                }
                ${e.$focused&&cl}
            `:e.$disabled?B`
                background: ${Mn.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${dl}
                }
                ${e.$focused&&dl}
            `:e.$error?B`
                border: 1px solid ${Mn.Validation.Red.Border};

                :focus-within {
                    ${ul}
                }
                ${e.$focused&&ul}
            `:void 0}
`,hl=D(fl)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,gl=D.input`
    ${e=>kn("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Mn.Neutral[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Mn.Neutral[3]};
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
`,ml=D.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Mn.Primary};
    }
`,pl=D.div`
    overflow: hidden;
    border: 1px solid ${Mn.Neutral[5]};
    border-radius: 4px;
    background: ${Mn.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${qs.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Mn.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,bl=D.div`
    background: transparent;
    padding: 0.5rem;
`,yl=D.ul`
    list-style-type: none;
`,vl=D.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Mn.Accent.Light[3]};

    ${e=>e.$active&&B`
            background: ${Mn.Accent.Light[5]};
        `}
`,xl=D(z)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Mn.Primary};
`,Fl=D.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,wl=D(_)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Mn.Primary};
`,$l=D(k)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Mn.Accent.Light[2]};
`,Sl=D.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Dl=D(ml)`
    ${e=>kn("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Mn.Primary};
`,Bl=D(Dl)`
    outline-offset: 0.25rem;
`,El=D(Dl)`
    padding: 0.5rem 1rem;
`,Cl=D.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;

    ${e=>kn("small"===e.$variant?"BodySmall":"Body","regular")}
`,Ol=D(j)`
    ${e=>{const r="small"===e.$variant?1:1.125;return B`
            height: ${r}rem;
            width: ${r}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Mn.Validation.Red.Icon};
`,Al=D(nl)`
    margin-right: 0.625rem;
    color: ${Mn.Primary};
`,jl=D.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
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

        ${({$highlight:e})=>e&&B`
                background-color: ${Mn.Neutral[7]};
            `}
    }
`,kl=u.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=zn(e,["children","focusHighlight","focusOutline","type"]);return r(jl,Object.assign({ref:t,$outline:a,$highlight:i,type:o},s,{children:n}))})),_l=e=>"small"===e?1:1.125,zl=e=>B`
        height: ${_l(e)}rem;
        width: ${_l(e)}rem;
    `,Tl=D.div`
    background: ${Mn.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,Hl=D.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,Ml=D(gl)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,Pl=D(H)`
    color: ${Mn.Neutral[3]};
    flex-shrink: 0;
    ${e=>zl(e.$variant)}
`,Il=D(kl)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Mn.Neutral[3]};
    cursor: pointer;

    ${e=>B`
            svg {
                ${zl(e.$variant)}
            }
        `}
`,Ll=w(((t,n)=>{var{value:i,variant:a,onClear:o}=t,s=zn(t,["value","variant","onClear"]);return e(Tl,{children:[e(Hl,{children:[r(Pl,{$variant:a,"aria-hidden":!0}),r(Ml,Object.assign({ref:n,value:i,$variant:a},s))]}),i&&r(Il,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:a},{children:r(T,{"aria-hidden":!0})}))]})})),Rl=({listItems:n,multiSelect:i,selectedItems:a,disableItemFocus:o,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:c=2,labelDisplayType:d="inline",variant:u="default",listboxId:g,width:m,topScrollItem:p,onSelectItem:b,onSelectAll:v,onDismiss:F,onRetry:w,valueExtractor:S,listExtractor:D,renderListItem:B,renderCustomCallToAction:E,enableSearch:C,hideNoResultsDisplay:O,searchPlaceholder:A="Search",searchFunction:j,onSearch:k})=>{const{focusedIndex:_,setFocusedIndex:z}=$(Vs),[T,H]=h(""),[M,P]=h(n),I=Ys(s),L=(()=>{const[e,r]=h(!1);return y((()=>{r(!0)}),[]),e})(),R=f(),W=f(),N=f([]),Y=f(),V=e=>D?D(e):e.toString(),J=x((e=>!!ys(a,(r=>xs(r,e)))),[a]),U=Ns((()=>j(T))),Z=Ns((()=>n.filter((e=>{var r;const t=V(e),n="object"==typeof t?t.title.toLowerCase():t.toLowerCase(),i="string"==typeof t||null===(r=t.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),a=T.trim().toLowerCase();return n.includes(a)||i&&i.includes(a)})))),q=(e,r)=>{z(r),null==b||b(e,(e=>S?S(e):e)(e))},X=e=>{const r=e.target.value;H(r),null==k||k()},Q=()=>{var e;H(""),null===(e=Y.current)||void 0===e||e.focus(),null==k||k()},G=()=>{null==w||w()};((e,r,t="window",n)=>{const i=f();y((()=>{i.current=r}),[r]),y((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const a=e=>i.current(e);return r.addEventListener(e,a,n),()=>{r.removeEventListener(e,a,n)}}),[e,t])})("keydown",(e=>{var r,t;switch(e.code){case"ArrowDown":if(e.preventDefault(),_<M.length-1){const e=_+1;null===(r=N.current[e])||void 0===r||r.focus(),z(e)}break;case"ArrowUp":if(e.preventDefault(),_>0){const e=_-1;null===(t=N.current[e])||void 0===t||t.focus(),z(e)}else 0===_&&Y.current&&(Y.current.focus(),z(-1));break;case"Space":case"Enter":document.activeElement===N.current[_]&&(e.preventDefault(),M[_]&&q(M[_],_))}})),y((()=>{if(void 0===p)return;const e=setTimeout((()=>{var e;const r=n.indexOf(p),t=N.current[r];if(R.current){const r=null!==(e=null==t?void 0:t.offsetTop)&&void 0!==e?e:0;R.current.scrollTop=r-8}z(r)}),0);return()=>clearTimeout(e)}),[N,n,z,p]),y((()=>{if(L)return;if(o)return;const e=n.findIndex((e=>J(e)));Y.current?(z(-1),setTimeout((()=>{var e;return null===(e=Y.current)||void 0===e?void 0:e.focus()}),200)):N.current[_]?setTimeout((()=>{var e;return null===(e=N.current[_])||void 0===e?void 0:e.focus()}),200):N.current[e]?(z(e),setTimeout((()=>{var r;return null===(r=N.current[e])||void 0===r?void 0:r.focus()}),200)):(z(0),setTimeout((()=>{var e;return null===(e=N.current[0])||void 0===e?void 0:e.focus()}),200))}),[J,o,_,n,L,z]),y((()=>{L&&I&&(o||"success"===s&&Y.current&&(z(-1),Y.current.focus()))}),[L,I,s,z,o]),y((()=>{P(""===T?n:j?U():Z())}),[U,Z,n,j,T]);const K=e=>i?r(e?wl:$l,{"aria-hidden":!0}):e?r(xl,{"aria-hidden":!0}):r(Fl,{}),ee=(e,t)=>{const n=V(e),i="string"==typeof n?n:n.title,a="string"==typeof n?void 0:n.secondaryLabel;return r(Qn,{displayType:d,label:i,maxLines:c,selected:t,sublabel:a,truncationType:l,variant:u})},re=()=>{if(!w||w&&"success"===s)return M.map(((n,a)=>{const o=J(n),s=a===_;return r(vl,Object.assign({"aria-selected":o,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>q(n,a),onMouseEnter:()=>(e=>{z(e)})(a),ref:e=>N.current[a]=e,role:"option",tabIndex:s?0:-1,$active:s},{children:B?B(n,{selected:o}):e(t,{children:[K(o),ee(n,o)]})}),((e,r)=>`item_${r}__${S?S(e):e}`)(n,a))}))},te=()=>{if((C||j)&&"success"===s)return r(Ll,{ref:Y,onChange:X,value:T,placeholder:A,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Q,variant:u})},ne=()=>{if(i&&M.length>0&&!T&&"success"===s)return r(Sl,{children:r(El,Object.assign({onClick:v,type:"button",$variant:u},{children:0===a.length?"Select all":"Clear all"}))})},ie=()=>{if(!O&&(T||!C)&&0===M.length&&"success"===s)return e(Cl,Object.assign({"data-testid":"list-no-results",$variant:u},{children:[r(Ol,{"data-testid":"no-result-icon",$variant:u}),"No results found."]}))},ae=()=>{if(w&&"loading"===s)return e(Cl,Object.assign({"data-testid":"list-loading",$variant:u},{children:[r(Al,{}),"Loading..."]}))},oe=()=>{if(w&&"fail"===s)return e(Cl,Object.assign({"data-testid":"list-fail",$variant:u},{children:[r(Ol,{"data-testid":"load-error-icon",$variant:u}),"Failed to load. ",r(Bl,Object.assign({onClick:G,type:"button",$variant:u},{children:"Try again."}))]}))};return e(pl,Object.assign({"data-testid":"dropdown-container",ref:R,$width:m},{children:[e(bl,Object.assign({ref:W,"data-testid":"dropdown-list"},{children:[te(),ne(),ie(),ae(),oe(),r(yl,Object.assign({role:"listbox",id:g},{children:re()}))]})),(()=>{if(E)return r("div",Object.assign({"data-testid":"custom-cta"},{children:E(F,M)}))})()]}))},Wl="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Nl=D(ml)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>kn("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Yl=D.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Wl};

    svg {
        color: ${Mn.Neutral[3]};
        ${e=>{const r="small"===e.$variant?Bn.BodySmall.fontSize:Bn.Body.fontSize;return B`
                height: ${r}rem;
                width: ${r}rem;
            `}}
    }
`,Vl=w((({children:t,disabled:n,expanded:i,listboxId:a,readOnly:o,variant:s},l)=>e(Nl,Object.assign({ref:l,type:"button","aria-expanded":i,"aria-haspopup":"listbox","data-testid":"selector",disabled:n,"aria-controls":a,$variant:s},{children:[t,!o&&r(Yl,Object.assign({$expanded:i,$variant:s},{children:r(M,{"aria-hidden":!0})}))]})))),Jl=e=>"small"===e?2.5:3;D.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Jl(e.$variant);return B`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Ul=B`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Jl(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Mn.Accent.Light[3]};
    }
`,Zl=D.button`
    ${Ul}
    cursor: pointer;
`;D.div`
    ${Ul}
`;const ql=C`
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
`;D.div`
    position: relative;
    border: 1px solid ${Mn.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Mn.Neutral[8]};

    :focus-within {
        border: 1px solid ${Mn.Accent.Light[1]};
        box-shadow: ${ol};
    }

    ${e=>e.expanded?B`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:B`
                animation: ${ql} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?B`
                background: ${Mn.Neutral[6](e)};

                ${Zl} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Mn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?B`
                border: none;
                background: transparent !important;

                ${Zl} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?B`
                border: 1px solid ${Mn.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Mn.Validation.Red.Border(e)};
                    box-shadow: ${sl};
                }
            `:void 0}
`,D.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Wl};
    margin-left: 1rem;
`,D(M)`
    color: ${Mn.Neutral[3]};
    ${e=>{let r=Bn.Body.fontSize;return"small"===e.$variant&&(r=Bn.BodySmall.fontSize),B`
            height: ${r}rem;
            width: ${r}rem;
        `}}
`,D.div`
    height: 1px;
    background: ${Mn.Neutral[5]};
    margin: 0 0.5rem;
`;const Xl=D.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`,Ql=D.div`
    ${e=>kn("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return B`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Gl=D(Ql)`
    color: ${Mn.Neutral[3]};
`;var Kl;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Kl||(Kl={}));const ec=D.div`
    display: flex;
    flex-direction: column;
`,rc=e=>"right"===e?"bottom-end":"bottom-start",tc=({enabled:n,isOpen:i,onOpen:a,onClose:o,onDismiss:s,renderElement:l,renderDropdown:c,customZIndex:d,clickToToggle:u=!1,offset:g=0,alignment:m="left",fitAvailableHeight:p})=>{var b;const v=f(null),x=f(null),{width:F}=Qe({targetRef:v,handleHeight:!1}),w={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<Xs.mobileL;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:$,floatingStyles:S,context:D}=I({open:i,onOpenChange:(e,r,t)=>{"escape-key"===t?null==s||s():e&&!i?null==a||a():!e&&i&&(null==o||o(t))},whileElementsMounted:L,placement:rc(m),middleware:[R(g),W(),N({limiter:Y()}),V({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:p?`${e}px`:void 0,overflowY:p?"hidden":void 0})}}),w]}),B=(()=>{const[e,r]=h(void 0),t=P();return y((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Kl.Change,e),t.events.emit(Kl.Ready),()=>t.events.off(Kl.Change,e)}),[t]),e})(),{isMounted:E,styles:C}=J(D,{initial:{opacity:0},open:{opacity:1},duration:300}),O=U(D,{enabled:n,toggle:u}),A=Z(D,{enabled:n}),{getReferenceProps:j,getFloatingProps:k}=q([O,A]);return e(t,{children:[r("div",Object.assign({ref:e=>{v.current=e,$.setReference(e)}},j(),{children:l()})),E&&r(X,{children:r(Q,Object.assign({context:D,modal:!1,initialFocus:x,returnFocus:!1},{children:r("div",Object.assign({ref:$.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(b=null!=d?d:B)&&void 0!==b?b:50})},k(),{children:r(ec,Object.assign({ref:x,style:Object.assign({},C),inert:C.opacity<1?"":void 0},{children:c({elementWidth:F})}))}))}))})]})},nc=({selectedOption:e,placeholder:t="Select",options:n,disabled:i,error:a,className:o,"data-testid":s,id:l,enableSearch:c=!1,searchFunction:d,searchPlaceholder:u,valueExtractor:g,valueToStringFunction:m,listExtractor:p,displayValueExtractor:b,onSelectOption:v,onShowOptions:x,onHideOptions:F,onRetry:w,optionsLoadState:$="success",optionTruncationType:S="end",renderCustomSelectedOption:D,renderListItem:B,hideNoResultsDisplay:E,renderCustomCallToAction:C,onBlur:O,variant:A="default",readOnly:j,alignment:k,dropdownZIndex:_})=>{const[z,T]=h(e),[H,M]=h(!1),[P,I]=h(!1),[L]=h((()=>Ws.generate())),R=f(),W=f(),N=f();y((()=>{T(e)}),[e]);const Y=(e,r)=>{W.current.focus(),T(e),M(!1),q(!1),null==v||v(e,r)},V=()=>{H&&(M(!1),q(!1))},J=()=>{P||H||I(!0)},U=e=>{!P||H||R.current.contains(e.relatedTarget)||(I(!1),null==O||O())},Z=e=>{if("middle"===S){let r=0;return N&&N.current&&(r=N.current.getBoundingClientRect().width),Yn.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(e),r,120,8)}return e},q=e=>{e?null==x||x():null==F||F()};return r(Js,{children:r(tc,{enabled:!j&&!i,isOpen:H,renderElement:()=>r(fl,Object.assign({className:o,"data-testid":s,id:l,ref:R,tabIndex:-1,onFocus:J,onBlur:U,$focused:P,$disabled:i,$readOnly:j,$error:a},{children:r(Vl,Object.assign({ref:W,disabled:i,expanded:H,listboxId:L,readOnly:j,variant:A},{children:r(Xl,Object.assign({ref:N},{children:z?D?D(z):r(Ql,Object.assign({truncateType:S,$variant:A},{children:Z(b?b(z):g?g(z):z.toString())})):r(Gl,Object.assign({truncateType:S,$variant:A},{children:t}))}))}))})),renderDropdown:({elementWidth:e})=>r(Rl,{listboxId:L,listItems:n,onSelectItem:Y,onDismiss:V,valueExtractor:g,listExtractor:p,enableSearch:c,searchPlaceholder:u,searchFunction:d,selectedItems:z?[z]:[],onRetry:w,itemsLoadState:$,itemTruncationType:S,renderListItem:B,hideNoResultsDisplay:E,renderCustomCallToAction:C,variant:A,width:e}),onOpen:()=>{M(!0),q(!0),I(!0)},onClose:e=>{M(!1),q(!1),"click"!==e&&(I(!1),null==O||O())},onDismiss:()=>{W.current.focus(),M(!1),q(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:_})})},ic=(e,r,t)=>xn(t,r)||xn(e,r),ac=(e,r)=>{const t=r||e.defaultValue;return xn(e.collections,t)},oc={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},sc=e=>r=>{const t=r.theme,n=ac(oc,t.colourScheme);return t.overrides&&t.overrides.primitiveColour?ic(n,e,t.overrides.primitiveColour):n[e]},lc={"primary-10":sc("primary-10"),"primary-20":sc("primary-20"),"primary-30":sc("primary-30"),"primary-40":sc("primary-40"),"primary-50":sc("primary-50"),"primary-60":sc("primary-60"),"primary-70":sc("primary-70"),"primary-80":sc("primary-80"),"primary-90":sc("primary-90"),"primary-95":sc("primary-95"),"primary-100":sc("primary-100"),"secondary-10":sc("secondary-10"),"secondary-20":sc("secondary-20"),"secondary-30":sc("secondary-30"),"secondary-40":sc("secondary-40"),"secondary-50":sc("secondary-50"),"secondary-60":sc("secondary-60"),"secondary-70":sc("secondary-70"),"secondary-80":sc("secondary-80"),"secondary-90":sc("secondary-90"),"secondary-95":sc("secondary-95"),"secondary-100":sc("secondary-100"),"neutral-10":sc("neutral-10"),"neutral-20":sc("neutral-20"),"neutral-30":sc("neutral-30"),"neutral-40":sc("neutral-40"),"neutral-50":sc("neutral-50"),"neutral-60":sc("neutral-60"),"neutral-70":sc("neutral-70"),"neutral-80":sc("neutral-80"),"neutral-90":sc("neutral-90"),"neutral-95":sc("neutral-95"),"neutral-100":sc("neutral-100"),"success-10":sc("success-10"),"success-20":sc("success-20"),"success-30":sc("success-30"),"success-40":sc("success-40"),"success-50":sc("success-50"),"success-60":sc("success-60"),"success-70":sc("success-70"),"success-80":sc("success-80"),"success-90":sc("success-90"),"success-95":sc("success-95"),"success-100":sc("success-100"),"warning-10":sc("warning-10"),"warning-20":sc("warning-20"),"warning-30":sc("warning-30"),"warning-40":sc("warning-40"),"warning-50":sc("warning-50"),"warning-60":sc("warning-60"),"warning-70":sc("warning-70"),"warning-80":sc("warning-80"),"warning-90":sc("warning-90"),"warning-95":sc("warning-95"),"warning-100":sc("warning-100"),"error-10":sc("error-10"),"error-20":sc("error-20"),"error-30":sc("error-30"),"error-40":sc("error-40"),"error-50":sc("error-50"),"error-60":sc("error-60"),"error-70":sc("error-70"),"error-80":sc("error-80"),"error-90":sc("error-90"),"error-95":sc("error-95"),"error-100":sc("error-100"),"info-10":sc("info-10"),"info-20":sc("info-20"),"info-30":sc("info-30"),"info-40":sc("info-40"),"info-50":sc("info-50"),"info-60":sc("info-60"),"info-70":sc("info-70"),"info-80":sc("info-80"),"info-90":sc("info-90"),"info-95":sc("info-95"),"info-100":sc("info-100"),white:sc("white"),black:sc("black")},cc={text:sc("neutral-20"),"text-subtle":sc("neutral-30"),"text-subtler":sc("neutral-50"),"text-subtlest":sc("neutral-60"),"text-primary":sc("primary-50"),"text-hover":sc("primary-40"),"text-selected":sc("primary-50"),"text-selected-hover":sc("primary-40"),"text-disabled":sc("neutral-50"),"text-disabled-subtle":sc("neutral-60"),"text-disabled-subtlest":sc("neutral-80"),"text-selected-disabled":sc("neutral-50"),"text-success":sc("success-40"),"text-warning":sc("warning-40"),"text-error":sc("error-40"),"text-info":sc("info-40"),"text-inverse":sc("white"),icon:sc("neutral-50"),"icon-subtle":sc("neutral-60"),"icon-strongest":sc("neutral-20"),"icon-primary":sc("primary-50"),"icon-primary-subtle":sc("primary-60"),"icon-primary-subtlest":sc("primary-70"),"icon-hover":sc("primary-40"),"icon-selected":sc("primary-50"),"icon-selected-hover":sc("primary-40"),"icon-disabled":sc("neutral-50"),"icon-disabled-subtle":sc("neutral-60"),"icon-selected-disabled":sc("neutral-60"),"icon-success":sc("success-50"),"icon-warning":sc("warning-60"),"icon-error":sc("error-50"),"icon-error-strong":sc("error-40"),"icon-info":sc("info-50"),"icon-inverse":sc("white"),"icon-primary-inverse":"#FEAB10",border:sc("neutral-90"),"border-strong":sc("neutral-70"),"border-stronger":sc("neutral-30"),"border-primary":sc("primary-50"),"border-primary-subtle":sc("primary-60"),"border-hover":sc("primary-90"),"border-hover-strong":sc("primary-60"),"border-selected":sc("primary-50"),"border-selected-subtle":sc("primary-70"),"border-selected-subtlest":sc("primary-90"),"border-selected-hover":sc("primary-40"),"border-focus":sc("primary-60"),"border-focus-strong":sc("primary-50"),"border-disabled":sc("neutral-90"),"border-selected-disabled":sc("neutral-70"),"border-success":sc("success-60"),"border-warning":sc("warning-60"),"border-error":sc("error-60"),"border-error-focus":sc("error-60"),"border-error-strong":sc("error-40"),"border-info":sc("info-60"),bg:sc("white"),"bg-strong":sc("neutral-100"),"bg-stronger":sc("neutral-95"),"bg-strongest":sc("neutral-90"),"bg-hover":sc("primary-95"),"bg-hover-strong":sc("primary-90"),"bg-hover-subtle":sc("primary-100"),"bg-hover-neutral":sc("neutral-95"),"bg-selected":sc("primary-95"),"bg-selected-hover":sc("primary-90"),"bg-selected-strong":sc("primary-90"),"bg-selected-strongest":sc("primary-90"),"bg-disabled":sc("neutral-95"),"bg-selected-disabled":sc("neutral-95"),"bg-success":sc("success-100"),"bg-success-strong":sc("success-50"),"bg-warning":sc("warning-100"),"bg-warning-strong":sc("warning-50"),"bg-info":sc("info-100"),"bg-info-strong":sc("info-50"),"bg-error":sc("error-100"),"bg-error-strong":sc("error-50"),"bg-error-strong-hover":sc("error-30"),"bg-inverse":sc("neutral-20"),"bg-inverse-subtle":sc("neutral-30"),"bg-inverse-subtler":sc("neutral-50"),"bg-inverse-subtlest":sc("neutral-60"),"bg-primary":sc("primary-50"),"bg-primary-subtle":sc("primary-60"),"bg-primary-subtler":sc("primary-80"),"bg-primary-subtlest":sc("primary-100"),"bg-primary-hover":sc("primary-40"),"bg-primary-subtlest-hover":sc("primary-90"),"bg-primary-subtlest-selected":sc("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:sc("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":sc("black"),"focus-ring-inverse":sc("white")},dc={collections:{lifesg:cc,bookingsg:cc,rbs:cc,mylegacy:cc,ccube:cc},defaultValue:"lifesg"},uc=e=>r=>{const t=r.theme,n=ac(dc,t.colourScheme),i=t.overrides&&t.overrides.semanticColour?ic(n,e,t.overrides.semanticColour):n[e];return"function"==typeof i?i(r):i},fc={text:uc("text"),"text-subtle":uc("text-subtle"),"text-subtler":uc("text-subtler"),"text-subtlest":uc("text-subtlest"),"text-primary":uc("text-primary"),"text-hover":uc("text-hover"),"text-selected":uc("text-selected"),"text-selected-hover":uc("text-selected-hover"),"text-disabled":uc("text-disabled"),"text-disabled-subtle":uc("text-disabled-subtle"),"text-disabled-subtlest":uc("text-disabled-subtlest"),"text-selected-disabled":uc("text-selected-disabled"),"text-success":uc("text-success"),"text-warning":uc("text-warning"),"text-error":uc("text-error"),"text-info":uc("text-info"),"text-inverse":uc("text-inverse"),icon:uc("icon"),"icon-subtle":uc("icon-subtle"),"icon-strongest":uc("icon-strongest"),"icon-primary":uc("icon-primary"),"icon-primary-subtle":uc("icon-primary-subtle"),"icon-primary-subtlest":uc("icon-primary-subtlest"),"icon-hover":uc("icon-hover"),"icon-selected":uc("icon-selected"),"icon-selected-hover":uc("icon-selected-hover"),"icon-disabled":uc("icon-disabled"),"icon-disabled-subtle":uc("icon-disabled-subtle"),"icon-selected-disabled":uc("icon-selected-disabled"),"icon-success":uc("icon-success"),"icon-warning":uc("icon-warning"),"icon-error":uc("icon-error"),"icon-error-strong":uc("icon-error-strong"),"icon-info":uc("icon-info"),"icon-inverse":uc("icon-inverse"),"icon-primary-inverse":uc("icon-primary-inverse"),border:uc("border"),"border-strong":uc("border-strong"),"border-stronger":uc("border-stronger"),"border-primary":uc("border-primary"),"border-primary-subtle":uc("border-primary-subtle"),"border-hover":uc("border-hover"),"border-hover-strong":uc("border-hover-strong"),"border-selected":uc("border-selected"),"border-selected-subtle":uc("border-selected-subtle"),"border-selected-subtlest":uc("border-selected-subtlest"),"border-selected-hover":uc("border-selected-hover"),"border-focus":uc("border-focus"),"border-focus-strong":uc("border-focus-strong"),"border-disabled":uc("border-disabled"),"border-selected-disabled":uc("border-selected-disabled"),"border-success":uc("border-success"),"border-warning":uc("border-warning"),"border-error":uc("border-error"),"border-error-focus":uc("border-error-focus"),"border-error-strong":uc("border-error-strong"),"border-info":uc("border-info"),bg:uc("bg"),"bg-strong":uc("bg-strong"),"bg-stronger":uc("bg-stronger"),"bg-strongest":uc("bg-strongest"),"bg-hover":uc("bg-hover"),"bg-hover-strong":uc("bg-hover-strong"),"bg-hover-subtle":uc("bg-hover-subtle"),"bg-hover-neutral":uc("bg-hover-neutral"),"bg-selected":uc("bg-selected"),"bg-selected-hover":uc("bg-selected-hover"),"bg-selected-strong":uc("bg-selected-strong"),"bg-selected-strongest":uc("bg-selected-strongest"),"bg-disabled":uc("bg-disabled"),"bg-selected-disabled":uc("bg-selected-disabled"),"bg-success":uc("bg-success"),"bg-success-strong":uc("bg-success-strong"),"bg-warning":uc("bg-warning"),"bg-warning-strong":uc("bg-warning-strong"),"bg-info":uc("bg-info"),"bg-info-strong":uc("bg-info-strong"),"bg-error":uc("bg-error"),"bg-error-strong":uc("bg-error-strong"),"bg-error-strong-hover":uc("bg-error-strong-hover"),"bg-inverse":uc("bg-inverse"),"bg-inverse-subtle":uc("bg-inverse-subtle"),"bg-inverse-subtler":uc("bg-inverse-subtler"),"bg-inverse-subtlest":uc("bg-inverse-subtlest"),"bg-primary":uc("bg-primary"),"bg-primary-subtle":uc("bg-primary-subtle"),"bg-primary-subtler":uc("bg-primary-subtler"),"bg-primary-subtlest":uc("bg-primary-subtlest"),"bg-primary-hover":uc("bg-primary-hover"),"bg-primary-subtlest-hover":uc("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":uc("bg-primary-subtlest-selected"),"bg-available":uc("bg-available"),"overlay-strong":uc("overlay-strong"),"overlay-subtle":uc("overlay-subtle"),hyperlink:uc("hyperlink"),"hyperlink-inverse":uc("hyperlink-inverse"),"focus-ring":uc("focus-ring"),"focus-ring-inverse":uc("focus-ring-inverse")},hc={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},gc=e=>r=>{var t;const n=r.theme,i=ac(hc,null==n?void 0:n.breakpointScheme);let a;return a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ic(i,e,n.overrides.breakpoint):i[e],a},mc={"xxs-min":gc("xxs-min"),"xxs-max":gc("xxs-max"),"xs-min":gc("xs-min"),"xs-max":gc("xs-max"),"sm-min":gc("sm-min"),"sm-max":gc("sm-max"),"md-min":gc("md-min"),"md-max":gc("md-max"),"lg-min":gc("lg-min"),"lg-max":gc("lg-max"),"xl-min":gc("xl-min"),"xl-max":gc("xl-max"),"xxl-min":gc("xxl-min"),"xxs-column":gc("xxs-column"),"xs-column":gc("xs-column"),"sm-column":gc("sm-column"),"md-column":gc("md-column"),"lg-column":gc("lg-column"),"xl-column":gc("xl-column"),"xxl-column":gc("xxl-column"),"xxs-gutter":gc("xxs-gutter"),"xs-gutter":gc("xs-gutter"),"sm-gutter":gc("sm-gutter"),"md-gutter":gc("md-gutter"),"lg-gutter":gc("lg-gutter"),"xl-gutter":gc("xl-gutter"),"xxl-gutter":gc("xxl-gutter"),"xxs-margin":gc("xxs-margin"),"xs-margin":gc("xs-margin"),"sm-margin":gc("sm-margin"),"md-margin":gc("md-margin"),"lg-margin":gc("lg-margin"),"xl-margin":gc("xl-margin"),"xxl-margin":gc("xxl-margin")},pc=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=mc["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),bc={MaxWidth:pc("max-width"),MinWidth:pc("min-width")},yc={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},vc={collections:{lifesg:yc,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:yc,mylegacy:yc,ccube:yc},defaultValue:"lifesg"},xc=e=>r=>{const t=r.theme,n=ac(vc,t.fontScheme);return t.overrides&&t.overrides.fontSpec?ic(n,e,t.overrides.fontSpec):n[e]},Fc=(e,r,t,n)=>B`
    font-family: ${xc("font-family")};
    font-size: ${xc(e)};
    font-weight: ${xc(r)};
    line-height: ${xc(t)};
    letter-spacing: ${xc(n)};
`,wc={"header-xxl-light":Fc("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Fc("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Fc("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Fc("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Fc("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Fc("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Fc("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Fc("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Fc("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Fc("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Fc("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Fc("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Fc("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Fc("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Fc("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Fc("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Fc("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Fc("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Fc("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Fc("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Fc("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Fc("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Fc("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Fc("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Fc("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Fc("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Fc("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Fc("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Fc("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Fc("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Fc("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Fc("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Fc("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Fc("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Fc("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Fc("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Fc("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Fc("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Fc("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Fc("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Fc("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Fc("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},$c={collections:{lifesg:wc,bookingsg:wc,rbs:wc,mylegacy:wc,ccube:wc},defaultValue:"lifesg"},Sc=e=>r=>{const t=r.theme,n=ac($c,t.fontScheme),i=t.overrides&&t.overrides.font?ic(n,e,t.overrides.font):n[e];return"function"==typeof i?i(r):i},Dc={"header-xxl-light":Sc("header-xxl-light"),"header-xxl-regular":Sc("header-xxl-regular"),"header-xxl-semibold":Sc("header-xxl-semibold"),"header-xxl-bold":Sc("header-xxl-bold"),"header-xl-light":Sc("header-xl-light"),"header-xl-regular":Sc("header-xl-regular"),"header-xl-semibold":Sc("header-xl-semibold"),"header-xl-bold":Sc("header-xl-bold"),"header-lg-light":Sc("header-lg-light"),"header-lg-regular":Sc("header-lg-regular"),"header-lg-semibold":Sc("header-lg-semibold"),"header-lg-bold":Sc("header-lg-bold"),"header-md-light":Sc("header-md-light"),"header-md-regular":Sc("header-md-regular"),"header-md-semibold":Sc("header-md-semibold"),"header-md-bold":Sc("header-md-bold"),"header-sm-light":Sc("header-sm-light"),"header-sm-regular":Sc("header-sm-regular"),"header-sm-semibold":Sc("header-sm-semibold"),"header-sm-bold":Sc("header-sm-bold"),"header-xs-light":Sc("header-xs-light"),"header-xs-regular":Sc("header-xs-regular"),"header-xs-semibold":Sc("header-xs-semibold"),"header-xs-bold":Sc("header-xs-bold"),"body-baseline-light":Sc("body-baseline-light"),"body-baseline-regular":Sc("body-baseline-regular"),"body-baseline-semibold":Sc("body-baseline-semibold"),"body-baseline-bold":Sc("body-baseline-bold"),"body-md-light":Sc("body-md-light"),"body-md-regular":Sc("body-md-regular"),"body-md-semibold":Sc("body-md-semibold"),"body-md-bold":Sc("body-md-bold"),"body-sm-light":Sc("body-sm-light"),"body-sm-regular":Sc("body-sm-regular"),"body-sm-semibold":Sc("body-sm-semibold"),"body-sm-bold":Sc("body-sm-bold"),"body-xs-light":Sc("body-xs-light"),"body-xs-regular":Sc("body-xs-regular"),"body-xs-semibold":Sc("body-xs-semibold"),"body-xs-bold":Sc("body-xs-bold"),"formlabel-baseline-semibold":Sc("formlabel-baseline-semibold"),"formlabel-lg-semibold":Sc("formlabel-lg-semibold")},Bc=Object.assign(Object.assign({},fc),{Primitive:lc}),Ec=Dc,Cc=bc,Oc=D.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return B`
                    background-color: ${Bc.Primitive.white};
                    border: 1px solid
                        ${e.$buttonIsDanger?Bc["border-error-strong"]:Bc["border-primary"]};

                    color: ${e.$buttonIsDanger?Bc["text-error"]:Bc["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Bc["bg-hover-neutral"]};
                    }
                `;case"light":return B`
                    background-color: ${Bc.bg};
                    border: 1px solid ${Bc.border};

                    color: ${e.$buttonIsDanger?Bc["text-error"]:Bc["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Bc["bg-hover-neutral"]};
                    }
                `;case"link":return B`
                    background-color: transparent;
                    border: transparent;
                    color: ${e.$buttonIsDanger?Bc["text-error"]:Bc["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Bc["bg-hover-neutral"]};
                    }
                `;case"disabled":return B`
                    background-color: ${Bc["bg-disabled"]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Bc["text-disabled"]};
                `;default:return B`
                    background-color: ${e.$buttonIsDanger?Bc["bg-error-strong"]:Bc["bg-primary"]};
                    border: 1px solid transparent;

                    ${Cc.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Bc["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Bc["bg-error-strong-hover"]:Bc["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return B`
                    height: 2.5rem;
                    ${Ec["body-md-semibold"]}

                    ${Cc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return B`
                    height: 4rem;
                    ${Ec["header-md-semibold"]}

                    ${Cc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return B`
                    height: 3rem;
                    ${Ec["header-xs-semibold"]}

                    ${Cc.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ac=D(nl)`
    margin-right: 0.5rem;
`,jc={Default:u.forwardRef(((t,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,c=zn(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Oc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&r(Ac,{}),r("span",{children:i})]}))})),Small:u.forwardRef(((t,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,c=zn(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Oc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&r(Ac,{}),r("span",{children:i})]}))})),Large:u.forwardRef(((t,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,c=zn(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Oc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&r(Ac,{}),r("span",{children:i})]}))}))},kc=D.input`
    ${kn("Body","regular")}
    color: ${Mn.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Mn.Neutral[3]};
    }

    ${e=>"number"===e.type?B`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?B`
                cursor: not-allowed;
            `:void 0}
`,_c=D.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Mn.Neutral[3]};
    background-color: transparent;
    border: none;
`,zc=D(T)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Tc=D.div`
    display: flex;
    width: 100%;
`,Hc=u.forwardRef(((n,i)=>{var{value:a,spacing:o,type:s,error:l,disabled:c,readOnly:d,onChange:u,onClear:h,allowClear:g=!1,className:m,styleType:p="bordered"}=n,b=zn(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=f();S(i,(()=>y.current),[]);const v=function({ref:e,formatter:r}){return()=>{const t=e.current,n=t.value,i=r(n),a=n.substring(0,t.selectionEnd),o=r(a),s=a.length-o.length,l=Math.max(0,t.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{t.value=i,t.setSelectionRange(l,l)}}}}({ref:y,formatter:e=>Yn.transformWithSpaces(e,o)}),x=e=>{u&&(w()?$(e):u(e))},F=()=>{h&&h(),y&&y.current&&y.current.focus()},w=()=>"tel"===s&&o,$=e=>{const{nextValue:r,updateCaretPosition:t}=v(),n=r.replace(/\s/g,"");e.target.value=n,u(e),t()},D=a?(e=>e?w()?Yn.transformWithSpaces(e,o):e:"")(a):a,B=()=>e(t,{children:[r(kc,Object.assign({"data-testid":"input",ref:y,disabled:c,value:D,onChange:x,type:s,readOnly:d},b)),g&&!c&&!d&&!!a&&r(_c,Object.assign({onClick:F,type:"button"},{children:r(zc,{"aria-hidden":!0})}))]});return r(t,{children:"no-border"===p?r(Tc,Object.assign({className:m},{children:B()})):r(hl,Object.assign({$disabled:c,$error:l,$readOnly:d,className:m},{children:B()}))})})),Mc=D.nav`
    display: flex;
`,Pc=D.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${qs.tablet} {
        align-self: center;
    }
`,Ic=D.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,Lc=D(kl)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${Mn.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Mn.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${Mn.Accent.Light[1]};
    }
`,Rc=D(kl)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${Mn.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Mn.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${Mn.Accent.Light[1]};
    }
    ${e=>"left"===e.$position?B`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:B`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${qs.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,Wc=D(jc.Default)`
    background: ${e=>e.$selected?Mn.Primary:Mn.Neutral[8]};
    border: 1px solid
        ${e=>e.$selected?Mn.Primary:Mn.Neutral[5]};
    color: ${e=>e.$selected?Mn.Neutral[8]:Mn.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${e=>e.$selected?Mn.Neutral[8]:Mn.Neutral[1]};
        ${e=>e.$selected?B`
                    ${kn("Body",700)};
                `:B`
                    ${kn("Body",400)};
                `}
    }
    :hover {
        box-shadow: none;

        background: ${e=>e.$selected?Mn.Primary:Mn.Accent.Light[5]};
        border: 1px solid
            ${e=>e.$selected?Mn.Primary:Mn.Accent.Light[5]};
        span {
            color: ${e=>e.$selected?Mn.Neutral[8]:Mn.Primary};
            ${e=>e.$selected?B`
                        ${kn("Body",700)};
                    `:B`
                        ${kn("Body",600)};
                    `}
        }
    }

    :active,
    :focus {
        background: ${e=>e.$selected?Mn.Primary:Mn.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${Mn.Accent.Light[1]};
        span {
            color: ${e=>e.$selected?Mn.Neutral[8]:Mn.Primary};

            ${e=>e.$selected?B`
                        ${kn("Body",700)};
                    `:B`
                        ${kn("Body",400)};
                    `}
        }
    }
`;D(kl)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Mn.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${Mn.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${Mn.Accent.Light[1]};
    }
`;const Nc=D.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,Yc=D.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${Mn.Neutral[1]};

    display: flex;
    justify-content: center;
`,Vc=D(Pn.Body)`
    white-space: nowrap;
`,Jc=D(Pn.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,Uc=D(Hc)`
    ${kn("Body",400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${Mn.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${kn("XSmall",400)};
        }
    }
`,Zc=D.div`
    ${kn("XSmall",400)};

    background-color: ${Mn.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${Mn.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,qc=D.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,Xc=u.forwardRef((({id:t,"data-testid":d,className:u,pageSize:f=10,totalItems:g,activePage:m,pageSizeOptions:p=Qc,showFirstAndLastNav:b,showPageSizeChanger:v=!1,onPageChange:x,onPageSizeChange:F},w)=>{const $=te.useMediaQuery({maxWidth:Us.mobileL}),S=p,[D,B]=h(!1),[E,C]=h(!1),[O,A]=h(""),[j,k]=h(S&&S.length>=1?S[0]:null),[_,z]=h(!$&&v&&j?j.value:f),T=Math.ceil(g/_),H=1===m,M=m===T,P=m>1?()=>J(1):void 0,I=m<T?()=>J(T):void 0,L=m>1?()=>J(m-1):void 0,R=m<T?()=>J(parseInt(m.toString())+1):void 0,W=e=>e?()=>K():()=>Q(),N=e=>e?()=>ee():()=>G();y((()=>{m&&Y(m)}),[m]),y((()=>{var e;z(f),k(null!==(e=S.find((e=>e.value===f)))&&void 0!==e?e:null)}),[f]);const Y=e=>{A(e.toString())},V=()=>{B(!1),C(!1)},J=e=>{x&&(x(e),Y(e))},U=()=>{const e=Math.min(T,m+5);J(e),Y(e),B(!0),C(!1)},Z=()=>{const e=Math.max(1,m-5);J(e),Y(e),B(!1),C(!0)},q=e=>{const r=e.target.value;if(void 0===r||0===r.length)A("");else if(/^[0-9]+$/.test(r)){const e=parseInt(r.replace(/[^0-9]/g,""));Y(Math.max(1,Math.min(T,e)))}else A(r.replace(/[^0-9]/g,""))},X=e=>{e.preventDefault(),O&&x(parseInt(O))},Q=()=>{B(!0)},G=()=>{B(!1)},K=()=>{C(!0)},ee=()=>{C(!1)},re=(t,a,o)=>e(Nc,{children:[r(Lc,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":t?"Previous 5 pages":"Next 5 pages",onMouseOver:W(t),onMouseOut:N(t),onFocus:W(t),onBlur:N(t),onClick:t?Z:U},{children:r(t&&E?n:a&&D?i:c,{"aria-hidden":!0})})),t&&E&&r(Zc,{children:"Previous 5 pages"}),a&&D&&r(Zc,{children:"Next 5 pages"})]},o);return e(Mc,Object.assign({className:u,ref:w,id:t||"pagination-wrapper","data-testid":d||"pagination","aria-label":"Pagination"},{children:[r(Pc,{children:e(Ic,{children:[b&&r(Rc,Object.assign({onClick:P,disabled:H,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:r(o,{"aria-hidden":!0})})),r(Rc,Object.assign({onClick:L,disabled:H,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:r(a,{"aria-hidden":!0})})),$?e(Yc,{children:[r("form",Object.assign({onSubmit:X},{children:r(Uc,{value:O,onChange:q,autoComplete:"off",type:"numeric",id:(t||"pagination")+"-input","data-testid":(d||"pagination")+"-input"})})),r(Jc,{children:"/"}),r(Vc,{children:T})]}):[...Array(T)].map(((e,t)=>{const n=t+1,i=T-5,a=m===n;if(T<=7)return r(Wc,Object.assign({onClick:()=>J(n),$selected:a,"aria-label":"Page "+n,"aria-current":!!a&&"page",onMouseOver:V,onFocus:V},{children:n}),n);const o=m+1>5&&2===n,s=m-1<=i&&n===T-1-1;return o||s?re(o,s,n):n<=5&&m+1<=5||n<=1||n===m||n<=m+1&&n>=m-1-1||n>i&&m-1>i||n>T-1?r(Wc,Object.assign({onClick:()=>J(n),$selected:a,"aria-label":"Page "+n,"aria-current":!!a&&"page",onMouseOver:V,onFocus:V},{children:n}),n):null})),r(Rc,Object.assign({onClick:R,disabled:M,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:r(l,{"aria-hidden":!0})})),b&&r(Rc,Object.assign({onClick:I,disabled:M,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:r(s,{"aria-hidden":!0})}))]})}),v&&!$&&r(qc,{children:r(nc,{options:S,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:j,onSelectOption:e=>{k(e);const r=e.value,t=Math.ceil(g/r);z(r);F&&F(m>=t?t:m,r)}})})]}))})),Qc=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}];export{Xc as Pagination};
//# sourceMappingURL=index.js.map
