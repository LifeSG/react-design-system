import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import{useFloatingTree as n,FloatingTree as i,useFloatingNodeId as o,FloatingNode as a,useFloating as s,autoUpdate as l,offset as d,flip as c,shift as u,limitShift as h,size as g,useClick as m,useDismiss as b,useHover as p,useInteractions as f,FloatingPortal as y,FloatingFocusManager as v}from"@floating-ui/react";import{SquareIcon as x,SquareFillIcon as w,SquareTickFillIcon as $,MinusSquareFillIcon as F,ChevronDownIcon as C,FilterIcon as E,CrossIcon as D}from"@lifesg/react-icons";import*as k from"react";import S,{version as A,useRef as O,useState as B,isValidElement as _,createRef as M,cloneElement as z,PureComponent as j,useEffect as T,useLayoutEffect as I,useCallback as P,useMemo as L,forwardRef as R,useContext as W}from"react";import H,{css as Y,keyframes as N,ThemeContext as V}from"styled-components";import q,{findDOMNode as Q,unstable_batchedUpdates as U}from"react-dom";import{ChevronDownIcon as Z}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as X}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as G}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as J}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as K}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as ee}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as re}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as te}from"@lifesg/react-icons/external";import{CircleIcon as ne}from"@lifesg/react-icons/circle";import{CircleDotIcon as ie}from"@lifesg/react-icons/circle-dot";import{CrossIcon as oe}from"@lifesg/react-icons/cross";import{SquareIcon as ae}from"@lifesg/react-icons/square";import{SquareTickFillIcon as se}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as le}from"@lifesg/react-icons/tick";import{ChevronLeftIcon as de}from"@lifesg/react-icons/chevron-left";function ce(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var ue="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function he(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ge,me={exports:{}};ge=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
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
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,f=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var g=e.type;switch(g){case d:case c:case i:case a:case o:case h:return g;default:var p=g&&g.$$typeof;switch(p){case l:case u:case b:case m:case s:return p;default:return r}}case n:return r}}}var w=d,$=c,F=l,C=s,E=t,D=u,k=i,S=b,A=m,O=n,B=a,_=o,M=h,z=!1;function j(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=$,r.ContextConsumer=F,r.ContextProvider=C,r.Element=E,r.ForwardRef=D,r.Fragment=k,r.Lazy=S,r.Memo=A,r.Portal=O,r.Profiler=B,r.StrictMode=_,r.Suspense=M,r.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===d},r.isConcurrentMode=j,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===b},r.isMemo=function(e){return x(e)===m},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===a},r.isStrictMode=function(e){return x(e)===o},r.isSuspense=function(e){return x(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===f||e.$$typeof===y||e.$$typeof===v||e.$$typeof===p)},r.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var be=me.exports=ge(S),pe={exports:{}};pe.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,a=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===g)},f.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return C(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<C(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),g=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var v=this.$locale().weekStart||0,x=(b<v?b+7:b)-v;return g(n?f-x:f+(6-x),p);case s:case h:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case o:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(h,1);b.$d[g](m),b.init(),this.$d=b.set(h,Math.min(this.$D,b.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),b=function(e){var r=C(g);return E.w(r.date(r.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return b(1);if(m===l)return b(7);var p=(h={},h[o]=r,h[a]=t,h[i]=e,h)[m]||1,f=this.$d.getTime()+n*p;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(o,a,!0);case"A":return m(o,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,g){var m,b=this,p=E.p(h),f=C(n),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(b,f)};switch(p){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case s:m=(v-y)/864e5;break;case a:m=v/t;break;case o:m=v/r;break;case i:m=v/e;break;default:m=v}return g?m:E.a(m)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),k=D.prototype;return C.prototype=k,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var fe=he(pe.exports),ye={exports:{}};ye.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],g=c&&c[1];a[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=a||(i||o?1:g.getDate()),b=i||g.getFullYear(),p=0;i&&!o||(p=o>0?o-1:g.getMonth());var f=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(b,p,m,f,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(b,p,m,f,y,v,x)):new Date(b,p,m,f,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var g=s.length,m=1;m<=g;m+=1){a[1]=s[m-1];var b=t.apply(this,a);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ve=he(ye.exports),xe={exports:{}};xe.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),a=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var we=he(xe.exports),$e={exports:{}};$e.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Fe=he($e.exports),Ce={exports:{}};Ce.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Ee,De,ke,Se=he(Ce.exports),Ae={exports:{}},Oe=he(Ae.exports=(Ee={year:0,month:1,day:2,hour:3,minute:4,second:5},De={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=De[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),De[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=Ee[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",m=+e;return(t.utc(g).valueOf()-(m-=m%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,s=i||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var a=o(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));fe.extend(we),fe.extend(Se),fe.extend(Fe),fe.extend(ve),fe.extend(Oe),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=fe(r).startOf("week");return Be(t).map((e=>_e(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return _e(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(fe(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+fe(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=fe(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?fe(n):void 0,i?fe(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(ke||(ke={}));const Be=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},_e=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Me=[1,3,5,7,8,10,12],ze=[4,6,9,11];var je,Te;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),a=parseInt(n);return 0==i?"1":Me.includes(o)?Math.min(i,31).toString():ze.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=fe(e,t);return fe(r,t).diff(n,"minute")},e.toDayjs=e=>e?fe(e):fe(),e.addMinutesToTime=(e,r,t="HH:mm")=>fe(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>fe(e).isSame(fe(r),t)}(je||(je={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!fe(e).isBefore(n,"day"))||!(!i||!fe(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(fe(e).isValid())return e}return""}}(Te||(Te={}));var Ie,Pe;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ie||(Ie={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const a=n+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(Pe||(Pe={}));var Le=function(e,r){return Le=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Le(e,r)};var Re=function(){return Re=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Re.apply(this,arguments)};var We="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var He=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Ye="object"==typeof We&&We&&We.Object===Object&&We,Ne="object"==typeof self&&self&&self.Object===Object&&self,Ve=Ye||Ne||Function("return this")(),qe=Ve,Qe=function(){return qe.Date.now()},Ue=/\s/;var Ze=function(e){for(var r=e.length;r--&&Ue.test(e.charAt(r)););return r},Xe=/^\s+/;var Ge=function(e){return e?e.slice(0,Ze(e)+1).replace(Xe,""):e},Je=Ve.Symbol,Ke=Je,er=Object.prototype,rr=er.hasOwnProperty,tr=er.toString,nr=Ke?Ke.toStringTag:void 0;var ir=function(e){var r=rr.call(e,nr),t=e[nr];try{e[nr]=void 0;var n=!0}catch(e){}var i=tr.call(e);return n&&(r?e[nr]=t:delete e[nr]),i},or=Object.prototype.toString;var ar=ir,sr=function(e){return or.call(e)},lr=Je?Je.toStringTag:void 0;var dr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":lr&&lr in Object(e)?ar(e):sr(e)},cr=function(e){return null!=e&&"object"==typeof e};var ur=Ge,hr=He,gr=function(e){return"symbol"==typeof e||cr(e)&&"[object Symbol]"==dr(e)},mr=/^[-+]0x[0-9a-f]+$/i,br=/^0b[01]+$/i,pr=/^0o[0-7]+$/i,fr=parseInt;var yr=He,vr=Qe,xr=function(e){if("number"==typeof e)return e;if(gr(e))return NaN;if(hr(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=hr(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ur(e);var t=br.test(e);return t||pr.test(e)?fr(e.slice(2),t?2:8):mr.test(e)?NaN:+e},wr=Math.max,$r=Math.min;var Fr=function(e,r,t){var n,i,o,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=n,o=i;return n=i=void 0,d=r,a=e.apply(o,t)}function m(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function b(){var e=vr();if(m(e))return p(e);s=setTimeout(b,function(e){var t=r-(e-l);return u?$r(t,o-(e-d)):t}(e))}function p(e){return s=void 0,h&&n?g(e):(n=i=void 0,a)}function f(){var e=vr(),t=m(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(b,r),c?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(b,r),g(l)}return void 0===s&&(s=setTimeout(b,r)),a}return r=xr(r)||0,yr(t)&&(c=!!t.leading,o=(u="maxWait"in t)?wr(xr(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),f.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},f.flush=function(){return void 0===s?a:p(vr())},f},Cr=Fr,Er=He;var Dr=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Er(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),Cr(e,r,{leading:n,maxWait:r,trailing:i})},kr=function(e,r,t,n){switch(r){case"debounce":return Fr(e,t,n);case"throttle":return Dr(e,t,n);default:return e}},Sr=function(e){return"function"==typeof e},Ar=function(){return"undefined"==typeof window},Or=function(e){return e instanceof Element||e instanceof HTMLDocument},Br=function(e,r,t,n){return function(i){var o=i.width,a=i.height;r((function(r){return r.width===o&&r.height===a||r.width===o&&!n||r.height===a&&!t?r:(e&&Sr(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Ar()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Ar())return null;if(r)return document.querySelector(r);if(n&&Or(n))return n;if(t.targetRef&&Or(t.targetRef.current))return t.targetRef.current;var i=Q(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,a=void 0===o||o,s=r.onResize;if(i||a){var l=Br(s,t.setState.bind(t),i,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Ar()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Sr(r)?"renderProp":Sr(n)?"childFunction":_(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,a=void 0===o?1e3:o,s=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=M(),t.observableElement=null,Ar()||(t.resizeHandler=kr(t.createResizeHandler,i,a,s),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Le(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Ar()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,n=r.children,i=r.nodeType,o=void 0===i?"div":i,a=this.state,s={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(s);case"childFunction":return(e=n)(s);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(s,["targetRef"]);return z(e,l)}return z(e,s);case"childArray":return(e=n).map((function(e){return!!e&&z(e,s)}));default:return k.createElement(o,null)}}}(j);var _r=Ar()?T:I;function Mr(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,a=e.refreshOptions,s=e.handleWidth,l=void 0===s||s,d=e.handleHeight,c=void 0===d||d,u=e.targetRef,h=e.observerOptions,g=e.onResize,m=O(t),b=O(null),p=null!=u?u:b,f=O(),y=B({width:void 0,height:void 0}),v=y[0],x=y[1];return _r((function(){if(!Ar()){var e=Br(g,x,l,c);f.current=kr((function(r){(l||c)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!m.current&&!Ar()&&e({width:n,height:i}),m.current=!1}))}),n,o,a);var r=new window.ResizeObserver(f.current);return p.current&&r.observe(p.current,h),function(){r.disconnect();var e=f.current;e&&e.cancel&&e.cancel()}}}),[n,o,a,l,c,g,h,p.current]),Re({ref:p},v)}var zr=Array.isArray,jr="object"==typeof ue&&ue&&ue.Object===Object&&ue,Tr="object"==typeof self&&self&&self.Object===Object&&self,Ir=jr||Tr||Function("return this")(),Pr=Ir.Symbol,Lr=Pr,Rr=Object.prototype,Wr=Rr.hasOwnProperty,Hr=Rr.toString,Yr=Lr?Lr.toStringTag:void 0;var Nr=function(e){var r=Wr.call(e,Yr),t=e[Yr];try{e[Yr]=void 0;var n=!0}catch(e){}var i=Hr.call(e);return n&&(r?e[Yr]=t:delete e[Yr]),i},Vr=Object.prototype.toString;var qr=Nr,Qr=function(e){return Vr.call(e)},Ur=Pr?Pr.toStringTag:void 0;var Zr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ur&&Ur in Object(e)?qr(e):Qr(e)};var Xr=Zr,Gr=function(e){return null!=e&&"object"==typeof e};var Jr=function(e){return"symbol"==typeof e||Gr(e)&&"[object Symbol]"==Xr(e)},Kr=zr,et=Jr,rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tt=/^\w*$/;var nt=function(e,r){if(Kr(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!et(e))||(tt.test(e)||!rt.test(e)||null!=r&&e in Object(r))};var it=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ot=Zr,at=it;var st,lt=function(e){if(!at(e))return!1;var r=ot(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},dt=Ir["__core-js_shared__"],ct=(st=/[^.]+$/.exec(dt&&dt.keys&&dt.keys.IE_PROTO||""))?"Symbol(src)_1."+st:"";var ut=function(e){return!!ct&&ct in e},ht=Function.prototype.toString;var gt=lt,mt=ut,bt=it,pt=function(e){if(null!=e){try{return ht.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ft=/^\[object .+?Constructor\]$/,yt=Function.prototype,vt=Object.prototype,xt=yt.toString,wt=vt.hasOwnProperty,$t=RegExp("^"+xt.call(wt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ft=function(e,r){return null==e?void 0:e[r]},Ct=function(e){return!(!bt(e)||mt(e))&&(gt(e)?$t:ft).test(pt(e))},Et=Ft;var Dt=function(e,r){var t=Et(e,r);return Ct(t)?t:void 0},kt=Dt(Object,"create"),St=kt;var At=function(){this.__data__=St?St(null):{},this.size=0};var Ot=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Bt=kt,_t=Object.prototype.hasOwnProperty;var Mt=function(e){var r=this.__data__;if(Bt){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return _t.call(r,e)?r[e]:void 0},zt=kt,jt=Object.prototype.hasOwnProperty;var Tt=function(e){var r=this.__data__;return zt?void 0!==r[e]:jt.call(r,e)},It=kt;var Pt=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=It&&void 0===r?"__lodash_hash_undefined__":r,this},Lt=At,Rt=Ot,Wt=Mt,Ht=Tt,Yt=Pt;function Nt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Nt.prototype.clear=Lt,Nt.prototype.delete=Rt,Nt.prototype.get=Wt,Nt.prototype.has=Ht,Nt.prototype.set=Yt;var Vt=Nt;var qt=function(){this.__data__=[],this.size=0};var Qt=function(e,r){return e===r||e!=e&&r!=r};var Ut=function(e,r){for(var t=e.length;t--;)if(Qt(e[t][0],r))return t;return-1},Zt=Ut,Xt=Array.prototype.splice;var Gt=function(e){var r=this.__data__,t=Zt(r,e);return!(t<0)&&(t==r.length-1?r.pop():Xt.call(r,t,1),--this.size,!0)},Jt=Ut;var Kt=function(e){var r=this.__data__,t=Jt(r,e);return t<0?void 0:r[t][1]},en=Ut;var rn=function(e){return en(this.__data__,e)>-1},tn=Ut;var nn=function(e,r){var t=this.__data__,n=tn(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},on=qt,an=Gt,sn=Kt,ln=rn,dn=nn;function cn(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}cn.prototype.clear=on,cn.prototype.delete=an,cn.prototype.get=sn,cn.prototype.has=ln,cn.prototype.set=dn;var un=cn,hn=Dt(Ir,"Map"),gn=Vt,mn=un,bn=hn;var pn=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var fn=function(e,r){var t=e.__data__;return pn(r)?t["string"==typeof r?"string":"hash"]:t.map},yn=fn;var vn=function(e){var r=yn(this,e).delete(e);return this.size-=r?1:0,r},xn=fn;var wn=function(e){return xn(this,e).get(e)},$n=fn;var Fn=function(e){return $n(this,e).has(e)},Cn=fn;var En=function(e,r){var t=Cn(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Dn=function(){this.size=0,this.__data__={hash:new gn,map:new(bn||mn),string:new gn}},kn=vn,Sn=wn,An=Fn,On=En;function Bn(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Bn.prototype.clear=Dn,Bn.prototype.delete=kn,Bn.prototype.get=Sn,Bn.prototype.has=An,Bn.prototype.set=On;var _n=Bn;function Mn(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(Mn.Cache||_n),t}Mn.Cache=_n;var zn=Mn;var jn=function(e){var r=zn(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,In=/\\(\\)?/g,Pn=jn((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Tn,(function(e,t,n,i){r.push(n?i.replace(In,"$1"):t||e)})),r}));var Ln=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Rn=zr,Wn=Jr,Hn=Pr?Pr.prototype:void 0,Yn=Hn?Hn.toString:void 0;var Nn=function e(r){if("string"==typeof r)return r;if(Rn(r))return Ln(r,e)+"";if(Wn(r))return Yn?Yn.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Vn=Nn;var qn=zr,Qn=nt,Un=Pn,Zn=function(e){return null==e?"":Vn(e)};var Xn=Jr;var Gn=function(e,r){return qn(e)?e:Qn(e,r)?[e]:Un(Zn(e))},Jn=function(e){if("string"==typeof e||Xn(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Kn=function(e,r){for(var t=0,n=(r=Gn(r,e)).length;null!=e&&t<n;)e=e[Jn(r[t++])];return t&&t==n?e:void 0};var ei=he((function(e,r,t){var n=null==e?void 0:Kn(e,r);return void 0===n?t:n}));const ri=(e,r,t)=>ei(t,r)||ei(e,r),ti=(e,r)=>{const t=r||e.defaultValue;return ei(e.collections,t)},ni={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ii=e=>r=>{var t;const n=r.theme,i=ti(ni,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ri(i,e,n.overrides.border)}px`:`${i[e]}px`},oi={"width-005":ii("width-005"),"width-010":ii("width-010"),"width-020":ii("width-020"),"width-040":ii("width-040"),solid:(ai="solid",e=>{var r;const t=e.theme,n=ti(ni,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ri(n,ai,t.overrides.border):n[ai];return"function"==typeof i?i(e):i})};var ai;const si={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},li={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},di={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ci={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ui={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},hi={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},gi={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mi={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bi={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pi={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},fi={collections:{lifesg:di,bookingsg:si,rbs:gi,mylegacy:ci,ccube:li,oneservice:ui,pa:hi,a11yplayground:mi,supportgowhere:bi,imda:pi},defaultValue:"lifesg"},yi={collections:{lifesg:di,bookingsg:si,rbs:gi,mylegacy:ci,ccube:li,oneservice:ui,pa:hi,a11yplayground:mi,supportgowhere:bi,imda:pi},defaultValue:"lifesg"},vi=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=ti(i?yi:fi,null==n?void 0:n.colourScheme),a=i?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a];return s?ri(o,e,s):o[e]},xi={"brand-10":vi("brand-10"),"brand-20":vi("brand-20"),"brand-30":vi("brand-30"),"brand-40":vi("brand-40"),"brand-50":vi("brand-50"),"brand-60":vi("brand-60"),"brand-70":vi("brand-70"),"brand-80":vi("brand-80"),"brand-90":vi("brand-90"),"brand-95":vi("brand-95"),"brand-100":vi("brand-100"),"primary-10":vi("primary-10"),"primary-20":vi("primary-20"),"primary-30":vi("primary-30"),"primary-40":vi("primary-40"),"primary-50":vi("primary-50"),"primary-60":vi("primary-60"),"primary-70":vi("primary-70"),"primary-80":vi("primary-80"),"primary-90":vi("primary-90"),"primary-95":vi("primary-95"),"primary-100":vi("primary-100"),"secondary-10":vi("secondary-10"),"secondary-20":vi("secondary-20"),"secondary-30":vi("secondary-30"),"secondary-40":vi("secondary-40"),"secondary-50":vi("secondary-50"),"secondary-60":vi("secondary-60"),"secondary-70":vi("secondary-70"),"secondary-80":vi("secondary-80"),"secondary-90":vi("secondary-90"),"secondary-95":vi("secondary-95"),"secondary-100":vi("secondary-100"),"neutral-10":vi("neutral-10"),"neutral-20":vi("neutral-20"),"neutral-30":vi("neutral-30"),"neutral-40":vi("neutral-40"),"neutral-50":vi("neutral-50"),"neutral-60":vi("neutral-60"),"neutral-70":vi("neutral-70"),"neutral-80":vi("neutral-80"),"neutral-90":vi("neutral-90"),"neutral-95":vi("neutral-95"),"neutral-100":vi("neutral-100"),"success-10":vi("success-10"),"success-20":vi("success-20"),"success-30":vi("success-30"),"success-40":vi("success-40"),"success-50":vi("success-50"),"success-60":vi("success-60"),"success-70":vi("success-70"),"success-80":vi("success-80"),"success-90":vi("success-90"),"success-95":vi("success-95"),"success-100":vi("success-100"),"warning-10":vi("warning-10"),"warning-20":vi("warning-20"),"warning-30":vi("warning-30"),"warning-40":vi("warning-40"),"warning-50":vi("warning-50"),"warning-60":vi("warning-60"),"warning-70":vi("warning-70"),"warning-80":vi("warning-80"),"warning-90":vi("warning-90"),"warning-95":vi("warning-95"),"warning-100":vi("warning-100"),"error-10":vi("error-10"),"error-20":vi("error-20"),"error-30":vi("error-30"),"error-40":vi("error-40"),"error-50":vi("error-50"),"error-60":vi("error-60"),"error-70":vi("error-70"),"error-80":vi("error-80"),"error-90":vi("error-90"),"error-95":vi("error-95"),"error-100":vi("error-100"),"info-10":vi("info-10"),"info-20":vi("info-20"),"info-30":vi("info-30"),"info-40":vi("info-40"),"info-50":vi("info-50"),"info-60":vi("info-60"),"info-70":vi("info-70"),"info-80":vi("info-80"),"info-90":vi("info-90"),"info-95":vi("info-95"),"info-100":vi("info-100"),white:vi("white"),black:vi("black"),"primary-inverse":vi("primary-inverse")},wi={text:vi("neutral-20"),"text-subtle":vi("neutral-30"),"text-subtler":vi("neutral-50"),"text-subtlest":vi("neutral-60"),"text-primary":vi("primary-50"),"text-hover":vi("primary-40"),"text-selected":vi("primary-50"),"text-selected-hover":vi("primary-40"),"text-disabled":vi("neutral-50"),"text-disabled-subtle":vi("neutral-60"),"text-disabled-subtlest":vi("neutral-80"),"text-selected-disabled":vi("neutral-20"),"text-success":vi("success-40"),"text-warning":vi("warning-40"),"text-error":vi("error-40"),"text-info":vi("info-40"),"text-inverse":vi("white"),icon:vi("neutral-50"),"icon-subtle":vi("neutral-60"),"icon-strongest":vi("neutral-20"),"icon-primary":vi("primary-50"),"icon-primary-subtle":vi("primary-60"),"icon-primary-subtlest":vi("primary-70"),"icon-hover":vi("primary-40"),"icon-selected":vi("primary-50"),"icon-selected-hover":vi("primary-40"),"icon-disabled":vi("neutral-50"),"icon-disabled-subtle":vi("neutral-60"),"icon-selected-disabled":vi("neutral-60"),"icon-success":vi("success-50"),"icon-warning":vi("warning-60"),"icon-error":vi("error-50"),"icon-error-strong":vi("error-40"),"icon-info":vi("info-50"),"icon-inverse":vi("white"),"icon-primary-inverse":vi("primary-inverse"),border:vi("neutral-90"),"border-strong":vi("neutral-70"),"border-stronger":vi("neutral-50"),"border-primary":vi("primary-50"),"border-primary-subtle":vi("primary-60"),"border-hover":vi("primary-90"),"border-hover-strong":vi("primary-60"),"border-selected":vi("primary-50"),"border-selected-subtle":vi("primary-70"),"border-selected-subtlest":vi("primary-90"),"border-selected-hover":vi("primary-40"),"border-focus":vi("primary-60"),"border-focus-strong":vi("primary-50"),"border-disabled":vi("neutral-90"),"border-selected-disabled":vi("neutral-70"),"border-success":vi("success-60"),"border-warning":vi("warning-60"),"border-error":vi("error-60"),"border-error-focus":vi("error-60"),"border-error-focus-strong":vi("error-40"),"border-error-strong":vi("error-40"),"border-info":vi("info-60"),bg:vi("white"),"bg-strong":vi("neutral-100"),"bg-stronger":vi("neutral-95"),"bg-strongest":vi("neutral-90"),"bg-hover":vi("primary-95"),"bg-hover-strong":vi("primary-90"),"bg-hover-subtle":vi("primary-100"),"bg-hover-neutral":vi("neutral-100"),"bg-hover-neutral-strong":vi("neutral-90"),"bg-selected":vi("primary-95"),"bg-selected-hover":vi("primary-90"),"bg-selected-strong":vi("primary-90"),"bg-selected-stronger":vi("primary-70"),"bg-selected-strongest":vi("primary-50"),"bg-selected-strongest-hover":vi("primary-40"),"bg-disabled":vi("neutral-95"),"bg-selected-disabled":vi("neutral-95"),"bg-selected-stronger-disabled":vi("neutral-70"),"bg-success":vi("success-100"),"bg-success-hover":vi("success-95"),"bg-success-strong":vi("success-50"),"bg-success-strong-hover":vi("success-40"),"bg-warning":vi("warning-100"),"bg-warning-hover":vi("warning-95"),"bg-warning-strong":vi("warning-50"),"bg-warning-strong-hover":vi("warning-40"),"bg-info":vi("info-100"),"bg-info-hover":vi("info-95"),"bg-info-strong":vi("info-50"),"bg-info-strong-hover":vi("info-40"),"bg-error":vi("error-100"),"bg-error-hover":vi("error-95"),"bg-error-strong":vi("error-50"),"bg-error-strong-hover":vi("error-40"),"bg-inverse":vi("neutral-20"),"bg-inverse-subtle":vi("neutral-30"),"bg-inverse-subtler":vi("neutral-50"),"bg-inverse-subtlest":vi("neutral-60"),"bg-inverse-hover":vi("neutral-40"),"bg-primary":vi("primary-50"),"bg-primary-subtle":vi("primary-60"),"bg-primary-subtler":vi("primary-95"),"bg-primary-subtlest":vi("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":vi("primary-40"),"bg-primary-subtlest-hover":vi("primary-90"),"bg-primary-subtlest-selected":vi("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:vi("primary-50"),"hyperlink-hover":vi("primary-40"),"hyperlink-visited":vi("primary-40"),"hyperlink-inverse":vi("primary-inverse"),"focus-ring":vi("primary-50"),"focus-ring-inverse":vi("white")},$i={text:vi("neutral-100"),"text-subtle":vi("neutral-80"),"text-subtler":vi("neutral-60"),"text-subtlest":vi("neutral-50"),"text-primary":vi("primary-60"),"text-hover":vi("primary-70"),"text-selected":vi("primary-60"),"text-selected-hover":vi("primary-70"),"text-disabled":vi("neutral-60"),"text-disabled-subtle":vi("neutral-50"),"text-disabled-subtlest":vi("neutral-30"),"text-selected-disabled":vi("neutral-90"),"text-success":vi("success-70"),"text-warning":vi("warning-70"),"text-error":vi("error-70"),"text-info":vi("info-70"),"text-inverse":vi("black"),icon:vi("neutral-60"),"icon-subtle":vi("neutral-50"),"icon-strongest":vi("neutral-90"),"icon-primary":vi("primary-60"),"icon-primary-subtle":vi("primary-50"),"icon-primary-subtlest":vi("primary-40"),"icon-hover":vi("primary-70"),"icon-selected":vi("primary-60"),"icon-selected-hover":vi("primary-70"),"icon-disabled":vi("neutral-60"),"icon-disabled-subtle":vi("neutral-50"),"icon-selected-disabled":vi("neutral-50"),"icon-success":vi("success-60"),"icon-warning":vi("warning-50"),"icon-error":vi("error-60"),"icon-error-strong":vi("error-70"),"icon-info":vi("info-60"),"icon-inverse":vi("black"),"icon-primary-inverse":vi("primary-inverse"),border:vi("neutral-20"),"border-strong":vi("neutral-40"),"border-stronger":vi("neutral-60"),"border-primary":vi("primary-60"),"border-primary-subtle":vi("primary-50"),"border-hover":vi("primary-20"),"border-hover-strong":vi("primary-50"),"border-selected":vi("primary-60"),"border-selected-subtle":vi("primary-40"),"border-selected-subtlest":vi("primary-20"),"border-selected-hover":vi("primary-70"),"border-focus":vi("primary-50"),"border-focus-strong":vi("primary-60"),"border-disabled":vi("neutral-20"),"border-selected-disabled":vi("neutral-40"),"border-success":vi("success-50"),"border-warning":vi("warning-50"),"border-error":vi("error-50"),"border-error-focus":vi("error-50"),"border-error-focus-strong":vi("error-70"),"border-error-strong":vi("error-70"),"border-info":vi("info-50"),bg:vi("black"),"bg-strong":vi("neutral-10"),"bg-stronger":vi("neutral-20"),"bg-strongest":vi("neutral-20"),"bg-hover":vi("primary-20"),"bg-hover-strong":vi("primary-20"),"bg-hover-subtle":vi("primary-10"),"bg-hover-neutral":vi("neutral-10"),"bg-hover-neutral-strong":vi("neutral-20"),"bg-selected":vi("primary-20"),"bg-selected-hover":vi("primary-20"),"bg-selected-strong":vi("primary-20"),"bg-selected-stronger":vi("primary-40"),"bg-selected-strongest":vi("primary-60"),"bg-selected-strongest-hover":vi("primary-70"),"bg-disabled":vi("neutral-20"),"bg-selected-disabled":vi("neutral-20"),"bg-selected-stronger-disabled":vi("neutral-40"),"bg-success":vi("success-10"),"bg-success-hover":vi("success-20"),"bg-success-strong":vi("success-60"),"bg-success-strong-hover":vi("success-70"),"bg-warning":vi("warning-10"),"bg-warning-hover":vi("warning-20"),"bg-warning-strong":vi("warning-60"),"bg-warning-strong-hover":vi("warning-70"),"bg-info":vi("info-10"),"bg-info-hover":vi("info-20"),"bg-info-strong":vi("info-60"),"bg-info-strong-hover":vi("info-70"),"bg-error":vi("error-10"),"bg-error-hover":vi("error-20"),"bg-error-strong":vi("error-60"),"bg-error-strong-hover":vi("error-70"),"bg-inverse":vi("neutral-90"),"bg-inverse-subtle":vi("neutral-80"),"bg-inverse-subtler":vi("neutral-60"),"bg-inverse-subtlest":vi("neutral-50"),"bg-inverse-hover":vi("neutral-70"),"bg-primary":vi("primary-60"),"bg-primary-subtle":vi("primary-50"),"bg-primary-subtler":vi("primary-20"),"bg-primary-subtlest":vi("primary-10"),"bg-available":"#185339","bg-primary-hover":vi("primary-70"),"bg-primary-subtlest-hover":vi("primary-20"),"bg-primary-subtlest-selected":vi("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:vi("primary-60"),"hyperlink-hover":vi("primary-70"),"hyperlink-visited":vi("primary-70"),"hyperlink-inverse":vi("primary-inverse"),"focus-ring":vi("primary-60"),"focus-ring-inverse":vi("black")},Fi={text:vi("neutral-30"),"text-subtle":vi("neutral-40"),"text-subtler":vi("neutral-50"),"text-subtlest":vi("neutral-70"),"text-primary":vi("neutral-10"),"text-hover":vi("neutral-70"),"text-selected":vi("neutral-20"),"text-selected-hover":vi("neutral-10"),"text-disabled":vi("neutral-50"),"text-disabled-subtle":vi("neutral-60"),"text-disabled-subtlest":vi("neutral-80"),"text-selected-disabled":vi("neutral-40"),"text-success":vi("success-40"),"text-warning":vi("warning-40"),"text-error":vi("brand-30"),"text-info":vi("neutral-40"),"text-inverse":vi("neutral-100"),icon:vi("neutral-40"),"icon-subtle":vi("neutral-50"),"icon-strongest":vi("neutral-10"),"icon-primary":vi("neutral-10"),"icon-primary-subtle":vi("neutral-30"),"icon-primary-subtlest":vi("neutral-60"),"icon-hover":vi("neutral-70"),"icon-selected":vi("brand-20"),"icon-selected-hover":vi("brand-10"),"icon-disabled":vi("neutral-50"),"icon-disabled-subtle":vi("neutral-60"),"icon-selected-disabled":vi("neutral-40"),"icon-success":vi("success-40"),"icon-warning":vi("warning-60"),"icon-error":vi("brand-30"),"icon-error-strong":vi("brand-10"),"icon-info":vi("neutral-40"),"icon-inverse":vi("neutral-100"),"icon-primary-inverse":"#F9B371",border:vi("neutral-90"),"border-strong":vi("neutral-30"),"border-stronger":vi("neutral-20"),"border-primary":vi("neutral-40"),"border-primary-subtle":vi("neutral-60"),"border-hover":vi("neutral-80"),"border-hover-strong":vi("neutral-10"),"border-selected":vi("brand-20"),"border-selected-subtle":vi("neutral-40"),"border-selected-subtlest":vi("neutral-70"),"border-selected-hover":vi("neutral-10"),"border-focus":vi("neutral-20"),"border-focus-strong":vi("neutral-10"),"border-disabled":vi("neutral-90"),"border-selected-disabled":vi("neutral-80"),"border-success":vi("success-40"),"border-warning":vi("warning-60"),"border-error":vi("brand-30"),"border-error-focus":vi("brand-20"),"border-error-focus-strong":vi("brand-10"),"border-error-strong":vi("brand-20"),"border-info":vi("neutral-40"),bg:vi("neutral-100"),"bg-strong":vi("neutral-95"),"bg-stronger":vi("neutral-90"),"bg-strongest":vi("neutral-80"),"bg-hover":vi("brand-90"),"bg-hover-strong":vi("brand-80"),"bg-hover-subtle":vi("neutral-90"),"bg-hover-neutral":vi("neutral-90"),"bg-hover-neutral-strong":vi("neutral-90"),"bg-selected":vi("brand-100"),"bg-selected-hover":vi("brand-30"),"bg-selected-strong":vi("brand-50"),"bg-selected-stronger":vi("brand-40"),"bg-selected-strongest":vi("brand-20"),"bg-selected-strongest-hover":vi("brand-10"),"bg-disabled":vi("neutral-90"),"bg-selected-disabled":vi("neutral-90"),"bg-selected-stronger-disabled":vi("neutral-80"),"bg-success":vi("success-100"),"bg-success-hover":vi("success-95"),"bg-success-strong":vi("success-50"),"bg-success-strong-hover":vi("success-40"),"bg-warning":vi("warning-100"),"bg-warning-hover":vi("warning-95"),"bg-warning-strong":vi("warning-50"),"bg-warning-strong-hover":vi("warning-40"),"bg-info":vi("neutral-95"),"bg-info-hover":vi("info-95"),"bg-info-strong":vi("info-50"),"bg-info-strong-hover":vi("info-40"),"bg-error":vi("brand-100"),"bg-error-hover":vi("error-95"),"bg-error-strong":vi("error-50"),"bg-error-strong-hover":vi("error-40"),"bg-inverse":vi("neutral-40"),"bg-inverse-subtle":vi("neutral-60"),"bg-inverse-subtler":vi("neutral-70"),"bg-inverse-subtlest":vi("neutral-80"),"bg-inverse-hover":vi("neutral-30"),"bg-primary":vi("brand-20"),"bg-primary-subtle":vi("brand-60"),"bg-primary-subtler":vi("brand-80"),"bg-primary-subtlest":vi("brand-100"),"bg-available":vi("success-60"),"bg-primary-hover":vi("brand-10"),"bg-primary-subtlest-hover":vi("brand-80"),"bg-primary-subtlest-selected":vi("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:vi("neutral-10"),"hyperlink-hover":vi("neutral-40"),"hyperlink-visited":vi("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":vi("primary-50"),"focus-ring-inverse":vi("white")},Ci={text:vi("neutral-20"),"text-subtle":vi("neutral-30"),"text-subtler":vi("neutral-50"),"text-subtlest":vi("neutral-60"),"text-primary":vi("primary-50"),"text-hover":vi("primary-40"),"text-selected":vi("primary-50"),"text-selected-hover":vi("primary-40"),"text-disabled":vi("neutral-50"),"text-disabled-subtle":vi("neutral-60"),"text-disabled-subtlest":vi("neutral-80"),"text-selected-disabled":vi("neutral-20"),"text-success":vi("success-40"),"text-warning":vi("warning-40"),"text-error":vi("error-40"),"text-info":vi("info-40"),"text-inverse":vi("white"),icon:vi("neutral-50"),"icon-subtle":vi("neutral-60"),"icon-strongest":vi("neutral-20"),"icon-primary":vi("primary-50"),"icon-primary-subtle":vi("primary-60"),"icon-primary-subtlest":vi("primary-70"),"icon-hover":vi("primary-40"),"icon-selected":vi("primary-50"),"icon-selected-hover":vi("primary-40"),"icon-disabled":vi("neutral-50"),"icon-disabled-subtle":vi("neutral-60"),"icon-selected-disabled":vi("neutral-60"),"icon-success":vi("success-50"),"icon-warning":vi("warning-60"),"icon-error":vi("error-50"),"icon-error-strong":vi("error-40"),"icon-info":vi("info-50"),"icon-inverse":vi("white"),"icon-primary-inverse":vi("primary-inverse"),border:vi("neutral-90"),"border-strong":vi("neutral-70"),"border-stronger":vi("neutral-50"),"border-primary":vi("primary-50"),"border-primary-subtle":vi("primary-60"),"border-hover":vi("primary-90"),"border-hover-strong":vi("primary-60"),"border-selected":vi("primary-50"),"border-selected-subtle":vi("primary-70"),"border-selected-subtlest":vi("primary-90"),"border-selected-hover":vi("primary-40"),"border-focus":vi("primary-60"),"border-focus-strong":vi("primary-50"),"border-disabled":vi("neutral-90"),"border-selected-disabled":vi("neutral-70"),"border-success":vi("success-60"),"border-warning":vi("warning-60"),"border-error":vi("error-60"),"border-error-focus":vi("error-60"),"border-error-focus-strong":vi("error-40"),"border-error-strong":vi("error-40"),"border-info":vi("info-60"),bg:vi("white"),"bg-strong":vi("neutral-100"),"bg-stronger":vi("neutral-95"),"bg-strongest":vi("neutral-90"),"bg-hover":vi("primary-95"),"bg-hover-strong":vi("primary-90"),"bg-hover-subtle":vi("primary-100"),"bg-hover-neutral":vi("neutral-100"),"bg-hover-neutral-strong":vi("neutral-90"),"bg-selected":vi("primary-95"),"bg-selected-hover":vi("primary-90"),"bg-selected-strong":vi("primary-90"),"bg-selected-stronger":vi("primary-70"),"bg-selected-strongest":vi("primary-50"),"bg-selected-strongest-hover":vi("primary-40"),"bg-disabled":vi("neutral-95"),"bg-selected-disabled":vi("neutral-95"),"bg-selected-stronger-disabled":vi("neutral-70"),"bg-success":vi("success-100"),"bg-success-hover":vi("success-95"),"bg-success-strong":vi("success-50"),"bg-success-strong-hover":vi("success-40"),"bg-warning":vi("warning-100"),"bg-warning-hover":vi("warning-95"),"bg-warning-strong":vi("warning-50"),"bg-warning-strong-hover":vi("warning-40"),"bg-info":vi("info-100"),"bg-info-hover":vi("info-95"),"bg-info-strong":vi("info-50"),"bg-info-strong-hover":vi("info-40"),"bg-error":vi("error-100"),"bg-error-hover":vi("error-95"),"bg-error-strong":vi("error-50"),"bg-error-strong-hover":vi("error-40"),"bg-inverse":vi("neutral-20"),"bg-inverse-subtle":vi("neutral-30"),"bg-inverse-subtler":vi("neutral-50"),"bg-inverse-subtlest":vi("neutral-60"),"bg-inverse-hover":vi("neutral-40"),"bg-primary":vi("primary-50"),"bg-primary-subtle":vi("primary-60"),"bg-primary-subtler":vi("primary-95"),"bg-primary-subtlest":vi("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":vi("primary-40"),"bg-primary-subtlest-hover":vi("primary-90"),"bg-primary-subtlest-selected":vi("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:vi("primary-50"),"hyperlink-hover":vi("primary-40"),"hyperlink-visited":vi("primary-40"),"hyperlink-inverse":vi("primary-inverse"),"focus-ring":vi("primary-50"),"focus-ring-inverse":vi("white")},Ei={text:vi("neutral-100"),"text-subtle":vi("neutral-80"),"text-subtler":vi("neutral-60"),"text-subtlest":vi("neutral-50"),"text-primary":vi("primary-60"),"text-hover":vi("primary-70"),"text-selected":vi("primary-60"),"text-selected-hover":vi("primary-70"),"text-disabled":vi("neutral-60"),"text-disabled-subtle":vi("neutral-50"),"text-disabled-subtlest":vi("neutral-30"),"text-selected-disabled":vi("neutral-90"),"text-success":vi("success-70"),"text-warning":vi("warning-70"),"text-error":vi("error-70"),"text-info":vi("info-70"),"text-inverse":vi("black"),icon:vi("neutral-60"),"icon-subtle":vi("neutral-50"),"icon-strongest":vi("neutral-90"),"icon-primary":vi("primary-60"),"icon-primary-subtle":vi("primary-50"),"icon-primary-subtlest":vi("primary-40"),"icon-hover":vi("primary-70"),"icon-selected":vi("primary-60"),"icon-selected-hover":vi("primary-70"),"icon-disabled":vi("neutral-60"),"icon-disabled-subtle":vi("neutral-50"),"icon-selected-disabled":vi("neutral-50"),"icon-success":vi("success-60"),"icon-warning":vi("warning-50"),"icon-error":vi("error-60"),"icon-error-strong":vi("error-70"),"icon-info":vi("info-60"),"icon-inverse":vi("black"),"icon-primary-inverse":vi("primary-inverse"),border:vi("neutral-20"),"border-strong":vi("neutral-40"),"border-stronger":vi("neutral-60"),"border-primary":vi("primary-60"),"border-primary-subtle":vi("primary-50"),"border-hover":vi("primary-20"),"border-hover-strong":vi("primary-50"),"border-selected":vi("primary-60"),"border-selected-subtle":vi("primary-40"),"border-selected-subtlest":vi("primary-20"),"border-selected-hover":vi("primary-70"),"border-focus":vi("primary-50"),"border-focus-strong":vi("primary-60"),"border-disabled":vi("neutral-20"),"border-selected-disabled":vi("neutral-40"),"border-success":vi("success-50"),"border-warning":vi("warning-50"),"border-error":vi("error-50"),"border-error-focus":vi("error-50"),"border-error-focus-strong":vi("error-70"),"border-error-strong":vi("error-70"),"border-info":vi("info-50"),bg:vi("black"),"bg-strong":vi("neutral-10"),"bg-stronger":vi("neutral-20"),"bg-strongest":vi("neutral-20"),"bg-hover":vi("primary-20"),"bg-hover-strong":vi("primary-20"),"bg-hover-subtle":vi("primary-10"),"bg-hover-neutral":vi("neutral-10"),"bg-hover-neutral-strong":vi("neutral-20"),"bg-selected":vi("primary-20"),"bg-selected-hover":vi("primary-20"),"bg-selected-strong":vi("primary-20"),"bg-selected-stronger":vi("primary-40"),"bg-selected-strongest":vi("primary-60"),"bg-selected-strongest-hover":vi("primary-70"),"bg-disabled":vi("neutral-20"),"bg-selected-disabled":vi("neutral-20"),"bg-selected-stronger-disabled":vi("neutral-40"),"bg-success":vi("success-10"),"bg-success-hover":vi("success-20"),"bg-success-strong":vi("success-60"),"bg-success-strong-hover":vi("success-70"),"bg-warning":vi("warning-10"),"bg-warning-hover":vi("warning-20"),"bg-warning-strong":vi("warning-60"),"bg-warning-strong-hover":vi("warning-70"),"bg-info":vi("info-10"),"bg-info-hover":vi("info-20"),"bg-info-strong":vi("info-60"),"bg-info-strong-hover":vi("info-70"),"bg-error":vi("error-10"),"bg-error-hover":vi("error-20"),"bg-error-strong":vi("error-60"),"bg-error-strong-hover":vi("error-70"),"bg-inverse":vi("neutral-90"),"bg-inverse-subtle":vi("neutral-80"),"bg-inverse-subtler":vi("neutral-60"),"bg-inverse-subtlest":vi("neutral-50"),"bg-inverse-hover":vi("neutral-70"),"bg-primary":vi("primary-60"),"bg-primary-subtle":vi("primary-50"),"bg-primary-subtler":vi("primary-20"),"bg-primary-subtlest":vi("primary-10"),"bg-available":"#185339","bg-primary-hover":vi("primary-70"),"bg-primary-subtlest-hover":vi("primary-20"),"bg-primary-subtlest-selected":vi("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:vi("primary-60"),"hyperlink-hover":vi("primary-70"),"hyperlink-visited":vi("primary-70"),"hyperlink-inverse":vi("primary-inverse"),"focus-ring":vi("primary-60"),"focus-ring-inverse":vi("black")},Di={collections:{lifesg:wi,bookingsg:wi,rbs:wi,mylegacy:wi,ccube:wi,oneservice:wi,pa:Fi,a11yplayground:Ci,supportgowhere:wi,imda:wi},defaultValue:"lifesg"},ki={collections:{lifesg:$i,bookingsg:$i,rbs:$i,mylegacy:$i,ccube:$i,oneservice:$i,pa:$i,a11yplayground:Ei,supportgowhere:$i,imda:$i},defaultValue:"lifesg"},Si=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=ti(i?ki:Di,null==n?void 0:n.colourScheme),a=i?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a],l=s?ri(o,e,s):o[e];return"function"==typeof l?l(r):l},Ai={text:Si("text"),"text-subtle":Si("text-subtle"),"text-subtler":Si("text-subtler"),"text-subtlest":Si("text-subtlest"),"text-primary":Si("text-primary"),"text-hover":Si("text-hover"),"text-selected":Si("text-selected"),"text-selected-hover":Si("text-selected-hover"),"text-disabled":Si("text-disabled"),"text-disabled-subtle":Si("text-disabled-subtle"),"text-disabled-subtlest":Si("text-disabled-subtlest"),"text-selected-disabled":Si("text-selected-disabled"),"text-success":Si("text-success"),"text-warning":Si("text-warning"),"text-error":Si("text-error"),"text-info":Si("text-info"),"text-inverse":Si("text-inverse"),icon:Si("icon"),"icon-subtle":Si("icon-subtle"),"icon-strongest":Si("icon-strongest"),"icon-primary":Si("icon-primary"),"icon-primary-subtle":Si("icon-primary-subtle"),"icon-primary-subtlest":Si("icon-primary-subtlest"),"icon-hover":Si("icon-hover"),"icon-selected":Si("icon-selected"),"icon-selected-hover":Si("icon-selected-hover"),"icon-disabled":Si("icon-disabled"),"icon-disabled-subtle":Si("icon-disabled-subtle"),"icon-selected-disabled":Si("icon-selected-disabled"),"icon-success":Si("icon-success"),"icon-warning":Si("icon-warning"),"icon-error":Si("icon-error"),"icon-error-strong":Si("icon-error-strong"),"icon-info":Si("icon-info"),"icon-inverse":Si("icon-inverse"),"icon-primary-inverse":Si("icon-primary-inverse"),border:Si("border"),"border-strong":Si("border-strong"),"border-stronger":Si("border-stronger"),"border-primary":Si("border-primary"),"border-primary-subtle":Si("border-primary-subtle"),"border-hover":Si("border-hover"),"border-hover-strong":Si("border-hover-strong"),"border-selected":Si("border-selected"),"border-selected-subtle":Si("border-selected-subtle"),"border-selected-subtlest":Si("border-selected-subtlest"),"border-selected-hover":Si("border-selected-hover"),"border-focus":Si("border-focus"),"border-focus-strong":Si("border-focus-strong"),"border-disabled":Si("border-disabled"),"border-selected-disabled":Si("border-selected-disabled"),"border-success":Si("border-success"),"border-warning":Si("border-warning"),"border-error":Si("border-error"),"border-error-focus":Si("border-error-focus"),"border-error-focus-strong":Si("border-error-focus-strong"),"border-error-strong":Si("border-error-strong"),"border-info":Si("border-info"),bg:Si("bg"),"bg-strong":Si("bg-strong"),"bg-stronger":Si("bg-stronger"),"bg-strongest":Si("bg-strongest"),"bg-hover":Si("bg-hover"),"bg-hover-strong":Si("bg-hover-strong"),"bg-hover-subtle":Si("bg-hover-subtle"),"bg-hover-neutral":Si("bg-hover-neutral"),"bg-hover-neutral-strong":Si("bg-hover-neutral-strong"),"bg-selected":Si("bg-selected"),"bg-selected-hover":Si("bg-selected-hover"),"bg-selected-strong":Si("bg-selected-strong"),"bg-selected-stronger":Si("bg-selected-stronger"),"bg-selected-strongest":Si("bg-selected-strongest"),"bg-selected-strongest-hover":Si("bg-selected-strongest-hover"),"bg-disabled":Si("bg-disabled"),"bg-selected-disabled":Si("bg-selected-disabled"),"bg-selected-stronger-disabled":Si("bg-selected-stronger-disabled"),"bg-success":Si("bg-success"),"bg-success-hover":Si("bg-success-hover"),"bg-success-strong":Si("bg-success-strong"),"bg-success-strong-hover":Si("bg-success-strong-hover"),"bg-warning":Si("bg-warning"),"bg-warning-hover":Si("bg-warning-hover"),"bg-warning-strong":Si("bg-warning-strong"),"bg-warning-strong-hover":Si("bg-warning-strong-hover"),"bg-info":Si("bg-info"),"bg-info-hover":Si("bg-info-hover"),"bg-info-strong":Si("bg-info-strong"),"bg-info-strong-hover":Si("bg-info-strong-hover"),"bg-error":Si("bg-error"),"bg-error-hover":Si("bg-error-hover"),"bg-error-strong":Si("bg-error-strong"),"bg-error-strong-hover":Si("bg-error-strong-hover"),"bg-inverse":Si("bg-inverse"),"bg-inverse-subtle":Si("bg-inverse-subtle"),"bg-inverse-subtler":Si("bg-inverse-subtler"),"bg-inverse-subtlest":Si("bg-inverse-subtlest"),"bg-inverse-hover":Si("bg-inverse-hover"),"bg-primary":Si("bg-primary"),"bg-primary-subtle":Si("bg-primary-subtle"),"bg-primary-subtler":Si("bg-primary-subtler"),"bg-primary-subtlest":Si("bg-primary-subtlest"),"bg-available":Si("bg-available"),"bg-primary-hover":Si("bg-primary-hover"),"bg-primary-subtlest-hover":Si("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Si("bg-primary-subtlest-selected"),"overlay-strong":Si("overlay-strong"),"overlay-subtle":Si("overlay-subtle"),hyperlink:Si("hyperlink"),"hyperlink-hover":Si("hyperlink-hover"),"hyperlink-visited":Si("hyperlink-visited"),"hyperlink-inverse":Si("hyperlink-inverse"),"focus-ring":Si("focus-ring"),"focus-ring-inverse":Si("focus-ring-inverse")},Oi={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:oi["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:Ai.border(r),u=oi.solid;return Y`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:oi["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:Ai.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return Y`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Bi=e=>1===e.length&&"theme"in e[0],_i=e=>(...r)=>t=>{const n=Bi(r)?[]:r,i=Bi(r)?r[0]:t,o=i.theme;return(0,ti(Oi,null==o?void 0:o.borderScheme)[e])(...n)(i)},Mi={solid:_i("solid"),"dashed-default":_i("dashed-default")},zi={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},ji=e=>r=>{var t;const n=r.theme,i=ti(zi,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ri(i,e,n.overrides.breakpoint):i[e],o},Ti={"xxs-min":ji("xxs-min"),"xxs-max":ji("xxs-max"),"xs-min":ji("xs-min"),"xs-max":ji("xs-max"),"sm-min":ji("sm-min"),"sm-max":ji("sm-max"),"md-min":ji("md-min"),"md-max":ji("md-max"),"lg-min":ji("lg-min"),"lg-max":ji("lg-max"),"xl-min":ji("xl-min"),"xl-max":ji("xl-max"),"xxl-min":ji("xxl-min"),"xxs-column":ji("xxs-column"),"xs-column":ji("xs-column"),"sm-column":ji("sm-column"),"md-column":ji("md-column"),"lg-column":ji("lg-column"),"xl-column":ji("xl-column"),"xxl-column":ji("xxl-column"),"xxs-gutter":ji("xxs-gutter"),"xs-gutter":ji("xs-gutter"),"sm-gutter":ji("sm-gutter"),"md-gutter":ji("md-gutter"),"lg-gutter":ji("lg-gutter"),"xl-gutter":ji("xl-gutter"),"xxl-gutter":ji("xxl-gutter"),"xxs-margin":ji("xxs-margin"),"xs-margin":ji("xs-margin"),"sm-margin":ji("sm-margin"),"md-margin":ji("md-margin"),"lg-margin":ji("lg-margin"),"xl-margin":ji("xl-margin"),"xxl-margin":ji("xxl-margin")},Ii=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ti["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Pi={MaxWidth:Ii("max-width"),MinWidth:Ii("min-width")},Li={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Ri=e=>r=>{var t;const n=r.theme,i=ti(Li,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ri(i,e,n.overrides.fontSpec):i[e]},Wi={"heading-size-xxl":Ri("heading-size-xxl"),"heading-size-xl":Ri("heading-size-xl"),"heading-size-lg":Ri("heading-size-lg"),"heading-size-md":Ri("heading-size-md"),"heading-size-sm":Ri("heading-size-sm"),"heading-size-xs":Ri("heading-size-xs"),"heading-lh-xxl":Ri("heading-lh-xxl"),"heading-lh-xl":Ri("heading-lh-xl"),"heading-lh-lg":Ri("heading-lh-lg"),"heading-lh-md":Ri("heading-lh-md"),"heading-lh-sm":Ri("heading-lh-sm"),"heading-lh-xs":Ri("heading-lh-xs"),"heading-ls-xxl":Ri("heading-ls-xxl"),"heading-ls-xl":Ri("heading-ls-xl"),"heading-ls-lg":Ri("heading-ls-lg"),"heading-ls-md":Ri("heading-ls-md"),"heading-ls-sm":Ri("heading-ls-sm"),"heading-ls-xs":Ri("heading-ls-xs"),"weight-light":Ri("weight-light"),"weight-regular":Ri("weight-regular"),"weight-semibold":Ri("weight-semibold"),"weight-bold":Ri("weight-bold"),"font-family":Ri("font-family"),"body-size-baseline":Ri("body-size-baseline"),"body-size-md":Ri("body-size-md"),"body-size-sm":Ri("body-size-sm"),"body-size-xs":Ri("body-size-xs"),"body-lh-baseline":Ri("body-lh-baseline"),"body-lh-md":Ri("body-lh-md"),"body-lh-sm":Ri("body-lh-sm"),"body-lh-xs":Ri("body-lh-xs"),"body-ls-baseline":Ri("body-ls-baseline"),"body-ls-md":Ri("body-ls-md"),"body-ls-sm":Ri("body-ls-sm"),"body-ls-xs":Ri("body-ls-xs"),"form-label-size":Ri("form-label-size"),"form-description-size":Ri("form-description-size"),"form-label-lh":Ri("form-label-lh"),"form-description-lh":Ri("form-description-lh"),"form-label-ls":Ri("form-label-ls"),"form-description-ls":Ri("form-description-ls")},Hi=(e,r,t,n,i)=>{const{disableLigatures:o}=i||{};return Y`
        font-family: ${Ri("font-family")};
        font-size: ${Ri(e)};
        font-weight: ${Ri(r)};
        line-height: ${Ri(t)};
        letter-spacing: ${Ri(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Yi=(e={})=>({"heading-xxl-light":Hi("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Hi("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Hi("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Hi("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Hi("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Hi("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Hi("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Hi("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Hi("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Hi("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Hi("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Hi("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Hi("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Hi("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Hi("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Hi("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Hi("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Hi("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Hi("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Hi("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Hi("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Hi("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Hi("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Hi("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Hi("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Hi("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Hi("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Hi("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Hi("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Hi("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Hi("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Hi("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Hi("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Hi("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Hi("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Hi("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Hi("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Hi("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Hi("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Hi("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Hi("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Hi("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Ni=Yi({disableLigatures:!0}),Vi={collections:{default:Yi(),bookingsg:Ni,pa:Yi({disableLigatures:!0}),a11yplayground:Yi({disableLigatures:!0}),supportgowhere:Yi({disableLigatures:!0}),imda:Yi({disableLigatures:!0})},defaultValue:"default"},qi=e=>r=>{var t;const n=r.theme,i=ti(Vi,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ri(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},Qi={"heading-xxl-light":qi("heading-xxl-light"),"heading-xxl-regular":qi("heading-xxl-regular"),"heading-xxl-semibold":qi("heading-xxl-semibold"),"heading-xxl-bold":qi("heading-xxl-bold"),"heading-xl-light":qi("heading-xl-light"),"heading-xl-regular":qi("heading-xl-regular"),"heading-xl-semibold":qi("heading-xl-semibold"),"heading-xl-bold":qi("heading-xl-bold"),"heading-lg-light":qi("heading-lg-light"),"heading-lg-regular":qi("heading-lg-regular"),"heading-lg-semibold":qi("heading-lg-semibold"),"heading-lg-bold":qi("heading-lg-bold"),"heading-md-light":qi("heading-md-light"),"heading-md-regular":qi("heading-md-regular"),"heading-md-semibold":qi("heading-md-semibold"),"heading-md-bold":qi("heading-md-bold"),"heading-sm-light":qi("heading-sm-light"),"heading-sm-regular":qi("heading-sm-regular"),"heading-sm-semibold":qi("heading-sm-semibold"),"heading-sm-bold":qi("heading-sm-bold"),"heading-xs-light":qi("heading-xs-light"),"heading-xs-regular":qi("heading-xs-regular"),"heading-xs-semibold":qi("heading-xs-semibold"),"heading-xs-bold":qi("heading-xs-bold"),"body-baseline-light":qi("body-baseline-light"),"body-baseline-regular":qi("body-baseline-regular"),"body-baseline-semibold":qi("body-baseline-semibold"),"body-baseline-bold":qi("body-baseline-bold"),"body-md-light":qi("body-md-light"),"body-md-regular":qi("body-md-regular"),"body-md-semibold":qi("body-md-semibold"),"body-md-bold":qi("body-md-bold"),"body-sm-light":qi("body-sm-light"),"body-sm-regular":qi("body-sm-regular"),"body-sm-semibold":qi("body-sm-semibold"),"body-sm-bold":qi("body-sm-bold"),"body-xs-light":qi("body-xs-light"),"body-xs-regular":qi("body-xs-regular"),"body-xs-semibold":qi("body-xs-semibold"),"body-xs-bold":qi("body-xs-bold"),"form-label":qi("form-label"),"form-description":qi("form-description")},Ui={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Zi=e=>r=>{var t;const n=r.theme,i=ti(Ui,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ri(i,e,n.overrides.motion):i[e]},Xi={"duration-150":Zi("duration-150"),"duration-250":Zi("duration-250"),"duration-350":Zi("duration-350"),"duration-500":Zi("duration-500"),"duration-800":Zi("duration-800"),"duration-1000":Zi("duration-1000"),"ease-default":Zi("ease-default"),"ease-standard":Zi("ease-standard"),"ease-entrance":Zi("ease-entrance"),"ease-exit":Zi("ease-exit")},Gi={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Ji=e=>r=>{var t;const n=r.theme,i=ti(Gi,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ri(i,e,n.overrides.radius)}px`:`${i[e]}px`},Ki={none:Ji("none"),xs:Ji("xs"),sm:Ji("sm"),md:Ji("md"),lg:Ji("lg"),full:Ji("full")},eo=(e,r,t)=>n=>{const i=Si(r)(n)||vi(r)(n);return`${e} rgba(from ${i} r g b / ${100*t}%)`},ro={collections:{default:{"xs-subtle":eo("0 0 4px 1px","neutral-50",.24),"xs-strong":eo("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":eo("0 0 4px 1px","border-focus",.5),"xs-error-strong":eo("0 0 4px 1px","border-error",.5),"sm-subtle":eo("0 2px 4px 0","neutral-50",.24),"sm-strong":eo("0 2px 4px 0","neutral-50",.5),"md-subtle":eo("0 2px 8px 0","neutral-50",.24),"md-strong":eo("0 2px 8px 0","neutral-50",.5),"lg-subtle":eo("0 2px 12px 1px","neutral-50",.24),"lg-strong":eo("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},to=e=>r=>{var t;const n=r.theme,i=ti(ro,null==n?void 0:n.shadowScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.shadow)?ri(i,e,n.overrides.shadow):i[e];return"function"==typeof o?o(r):o},no={"xs-subtle":to("xs-subtle"),"xs-strong":to("xs-strong"),"xs-focus-strong":to("xs-focus-strong"),"xs-error-strong":to("xs-error-strong"),"sm-subtle":to("sm-subtle"),"sm-strong":to("sm-strong"),"md-subtle":to("md-subtle"),"md-strong":to("md-strong"),"lg-subtle":to("lg-subtle"),"lg-strong":to("lg-strong")},io={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},oo=e=>r=>{var t;const n=r.theme,i=ti(io,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ri(i,e,n.overrides.spacing)}px`:`${i[e]}px`},ao={"spacing-0":oo("spacing-0"),"spacing-4":oo("spacing-4"),"spacing-8":oo("spacing-8"),"spacing-12":oo("spacing-12"),"spacing-16":oo("spacing-16"),"spacing-20":oo("spacing-20"),"spacing-24":oo("spacing-24"),"spacing-32":oo("spacing-32"),"spacing-40":oo("spacing-40"),"spacing-48":oo("spacing-48"),"spacing-64":oo("spacing-64"),"spacing-72":oo("spacing-72"),"layout-xs":oo("layout-xs"),"layout-sm":oo("layout-sm"),"layout-md":oo("layout-md"),"layout-lg":oo("layout-lg"),"layout-xl":oo("layout-xl"),"layout-xxl":oo("layout-xxl"),"layout-xxxl":oo("layout-xxxl")},so=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),lo=Object.assign(Object.assign({},Ai),{Primitive:xi}),co=Object.assign(Object.assign({},Qi),{Spec:Wi}),uo=Xi,ho=Object.assign(Object.assign({},oi),{Util:Mi}),go=ao,mo=Ki,bo=no,po=Ti,fo=Pi,yo={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},vo={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},xo={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},wo={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},$o={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Fo={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Co={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Eo={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Do={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},ko={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"};Object.assign(Object.assign({},yo),{light:so(yo,"light"),dark:so(yo,"dark")}),Object.assign(Object.assign({},vo),{light:so(vo,"light"),dark:so(vo,"dark")}),Object.assign(Object.assign({},xo),{light:so(xo,"light"),dark:so(xo,"dark")}),Object.assign(Object.assign({},wo),{light:so(wo,"light"),dark:so(wo,"dark")}),Object.assign(Object.assign({},$o),{light:so($o,"light"),dark:so($o,"dark")}),Object.assign(Object.assign({},Fo),{light:so(Fo,"light"),dark:so(Fo,"dark")}),Object.assign(Object.assign({},Co),{light:so(Co,"light"),dark:so(Co,"dark")}),Object.assign(Object.assign({},Eo),{light:so(Eo,"light"),dark:so(Eo,"dark")}),Object.assign(Object.assign({},Do),{light:so(Do,"light"),dark:so(Do,"dark")}),Object.assign(Object.assign({},ko),{light:so(ko,"light"),dark:so(ko,"dark")});const So=H.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return Y`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Ao=H.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?lo["overlay-subtle"]:lo["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=Y`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=Y`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=Y`
                transition: none;
            `),r}};
`;var Oo;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Oo||(Oo={}));const Bo=({show:r=!1,rootId:t,onOverlayClick:i,children:s,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:u=!1,zIndex:h,id:g})=>{const[m,b]=B(null),[p,f]=B(),[y]=B((()=>Ie.generate())),v=o(),x=O(),w=O(null),$=s&&S.cloneElement(s,{ref:w}),F=g?`lifesg-ds-overlay-root-${g}`:"lifesg-ds-overlay-root",C=null!=h?h:p?99999:99998;(e=>{const r=n();T((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Oo.Change,t)}),[r,e]),T((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Oo.Change,t)};return null==r||r.events.on(Oo.Ready,t),()=>null==r?void 0:r.events.off(Oo.Ready,t)}),[r,e])})(C),T((()=>(_(),b(k()),()=>{I(),z().length<1&&(P("remove"),R(),M("remove"))})),[]),T((()=>{if(r){const e=A();E(e),j(),D()&&1===z().length&&(L(),P("add"));const r=setTimeout((()=>{M("add")}),200);return()=>clearTimeout(r)}{I(),D()&&z().length<1&&(P("remove"),R());const e=setTimeout((()=>{z().length<1&&M("remove")}),200);return()=>clearTimeout(e)}}),[r]);const E=e=>{x.current=e,f(e)},D=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),k=()=>document&&t?document.getElementById(t):document?document.body:null,A=()=>z().length>0,_=()=>{if(!document.getElementById(Mo)){const e=document.createElement("style");e.id=Mo;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${zo} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${zo}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${jo} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${To}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},M=e=>{const r=document.body.classList.contains(zo);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(zo):document.body.classList.add(zo)},z=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},j=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},I=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},P=e=>{if(!D())return;const r=document.body.classList.contains(jo);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(jo):document.body.classList.add(jo)},L=()=>{const e=document.body.style,r=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(To,r)},R=()=>{const e=document.body.style.getPropertyValue(To);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},W=e=>{var r;const t=null===(r=w.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||i&&u&&(e.preventDefault(),i())};return m?q.createPortal(e(So,{id:F,"data-testid":F,$show:r,$zIndex:C,children:s&&e(a,{id:v,children:e(Ao,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:d,$disableTransition:c,onClick:W,children:$})})}),m):null},_o=r=>e(i,{children:e(Bo,Object.assign({},r))}),Mo="lifesg-ds-overlay-stylesheet",zo="lifesg-ds-overlay-open",jo="lifesg-ds-overlay-scroll-lock",To="--lifesg-ds-overlay-scroll-y",Io=S.createContext({mode:"default",rootNode:{current:null}}),Po=e=>e.join("."),Lo=(e,r=[],t,n)=>{const i=[];return e.forEach(((o,a)=>{const s=t?t(o):o.value,l=n?n(o):o.label,d=o.options,c=[...r,s],u=!!(d&&d.length>0);i.push({originalItem:o,value:s,label:l,keyPath:c,level:r.length,hasChildren:u,parentKeyPath:r.length>0?r:void 0,indexInParent:a,parentSetSize:e.length}),u&&i.push(...Lo(d,c,t,n))})),i},Ro=(e,r)=>{if(r.length<=e.length)return!1;const t=Po(e);return Po(r).startsWith(t+".")},Wo=H.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ho=N`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Yo=H.div`
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
    animation: ${Ho} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,No=H(Yo)`
    animation-delay: -0.45s;
`,Vo=H(Yo)`
    animation-delay: -0.3s;
`,qo=H(Yo)`
    animation-delay: -0.15s;
`,Qo=({color:t,className:n,size:i})=>r(Wo,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[e(Yo,{id:"inner1"}),e(No,{id:"inner2"}),e(Vo,{id:"inner3"}),e(qo,{id:"inner4"})]}),Uo={Button:{"button-radius":Ki.md,"button-default-colour-bg":Ai["bg-primary"],"button-default-colour-bg-hover":Ai["bg-primary-hover"],"button-default-colour-text":Ai["text-inverse"],"button-secondary-colour-border":Ai["border-primary"],"button-secondary-colour-text":Ai["text-primary"],"button-light-colour-text":Ai["text-primary"],"button-link-colour-text":Ai["text-primary"]},Animation:{"loading-dots-spinner-colour":Ai["icon-primary"]}},Zo={Button:{"button-radius":Ki.sm,"button-default-colour-bg":Ai["bg-primary"],"button-default-colour-bg-hover":Ai["bg-primary-hover"],"button-default-colour-text":Ai["text-inverse"],"button-secondary-colour-border":Ai["border-primary"],"button-secondary-colour-text":Ai["text-primary"],"button-light-colour-text":Ai["text-primary"],"button-link-colour-text":Ai["text-primary"]},Animation:{"loading-dots-spinner-colour":Ai["icon-primary"]}},Xo={Button:{"button-radius":Ki.sm,"button-default-colour-bg":Ai["bg-primary"],"button-default-colour-bg-hover":Ai["bg-primary-hover"],"button-default-colour-text":Ai["text-inverse"],"button-secondary-colour-border":Ai["border-primary"],"button-secondary-colour-text":Ai["text-primary"],"button-light-colour-text":Ai["text-primary"],"button-link-colour-text":Ai["text-primary"]},Animation:{"loading-dots-spinner-colour":lo.Primitive["brand-50"]}},Go={collections:{default:Zo,pa:{Button:{"button-radius":Ki.full,"button-default-colour-bg":Ai["bg-primary"],"button-default-colour-bg-hover":Ai["bg-primary-hover"],"button-default-colour-text":Ai["text-inverse"],"button-secondary-colour-border":Ai["border-primary"],"button-secondary-colour-text":Ai["text-primary"],"button-light-colour-text":Ai["text-primary"],"button-link-colour-text":Ai["text-primary"]},Animation:{"loading-dots-spinner-colour":Ai["icon-primary"]}},a11yplayground:Uo,lifesg:Xo},defaultValue:"default"},Jo=(e,r)=>t=>{var n,i;const o=t.theme,a=ti(Go,null==o?void 0:o.componentScheme);return Ko((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||a[e][r],t)},Ko=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},ea=Jo("Button","button-radius"),ra=Jo("Button","button-default-colour-bg"),ta=Jo("Button","button-default-colour-bg-hover"),na=Jo("Button","button-default-colour-text"),ia=Jo("Button","button-secondary-colour-border"),oa=Jo("Button","button-secondary-colour-text"),aa=Jo("Button","button-light-colour-text"),sa=Jo("Button","button-link-colour-text"),la=H.button`
    padding: ${go["spacing-8"]} ${go["spacing-16"]};
    min-width: 4rem;
    border: ${ho["width-010"]} ${ho.solid} transparent;
    transition: all ${uo["duration-250"]} ${uo["ease-default"]};
    border-radius: ${ea};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return Y`
                    background-color: ${lo.bg};
                    border-color: ${e.$buttonIsDanger?lo["border-error-strong"]:ia};

                    color: ${e.$buttonIsDanger?lo["text-error"]:oa};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${lo["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return Y`
                    background-color: ${lo.bg};
                    border-color: ${lo.border};

                    color: ${e.$buttonIsDanger?lo["text-error"]:aa};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${lo["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return Y`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?lo["text-error"]:sa};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${lo["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return Y`
                    background-color: ${lo["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${lo["text-disabled"]};
                `;default:return Y`
                    background-color: ${e.$buttonIsDanger?lo["bg-error-strong"]:ra};

                    ${fo.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${na};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?lo["bg-error-strong-hover"]:ta};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return Y`
                    height: 2.5rem;
                    ${co["body-md-semibold"]}

                    ${fo.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return Y`
                    height: 4rem;
                    ${co["heading-md-semibold"]}

                    ${fo.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return Y`
                    height: 3rem;
                    ${co["heading-xs-semibold"]}

                    ${fo.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,da=H(Qo)`
    margin-right: 0.5rem;
`,ca=(t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ce(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(la,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},h,u,{children:[a&&e(da,{}),e("span",{children:i})]}))};ca.displayName="Button.Default";const ua=(t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ce(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(la,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},h,u,{children:[a&&e(da,{}),e("span",{children:i})]}))};ua.displayName="Button.Small";const ha=(t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ce(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(la,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},h,u,{children:[a&&e(da,{}),e("span",{children:i})]}))};ha.displayName="Button.Large";const ga={Default:S.forwardRef(ca),Small:S.forwardRef(ua),Large:S.forwardRef(ha)},ma=N`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,ba=Y`
    animation: ${uo["duration-150"]} ${uo["ease-default"]} ${ma};
    width: 100%;
    height: 100%;
    transition: color ${uo["duration-150"]} ${uo["ease-default"]};
`,pa=H(x)`
    ${ba}
    color: ${lo["icon-primary-subtlest"]};
`,fa=H(w)`
    ${ba}
    color: ${lo["icon-disabled-subtle"]};
`,ya=H($)`
    ${ba}
    color: ${e=>e.$disabled?lo["icon-disabled-subtle"](e):lo["icon-selected"](e)};
`,va=H(F)`
    ${ba}
    color: ${e=>e.$disabled?lo["icon-disabled-subtle"](e):lo["icon-selected"](e)};
`,xa=H.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>Y`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}

    // Show custom focus ring when input is focused
    input:focus-visible + svg {
        outline: 2px solid ${lo["focus-ring"]};
        outline-offset: 0px;
        border-radius: 4px;
    }
`,wa=H.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${pa},
        &:hover
        + ${ya},
        &:hover
        + ${va} {
        @media (pointer: fine) {
            color: ${e=>!e.disabled&&lo["icon-hover"](e)};
        }
    }
`,$a=H.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,Fa=e=>(()=>{const e=A.split(".");return parseInt(e[0],10)>=19})()?e:e?"true":void 0,Ca=e=>{const{textSize:r}=e||{};return Y`
        // Text styling
        ${r&&co[`${r}-regular`]}

        strong {
            font-weight: ${co.Spec["weight-semibold"]};
            ${r&&co[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${co.Spec["weight-semibold"]};
            ${r&&co[`${r}-semibold`]}
            color: ${lo.hyperlink};
            text-decoration: none;

            svg {
                color: ${lo["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${lo["hyperlink-hover"]};

                svg {
                    color: ${lo["icon-hover"]};
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
    `},Ea=(e,r,t=!1)=>Y`
        ${co[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Da=e=>{if(e)return Y`
            ${r=e,Y`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},ka=(e,r,t,n,i)=>Y`
    ${Ea(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?Y`
            display: block;
            ${Da(t)}
        `:e?Y`
            display: inline;
        `:Y`
            display: block;
            ${Da(t)}
        `)(t,n,i)}
    color: ${lo.text};
`,Sa=H.div`
    ${e=>ka(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Aa=H.a`
    ${e=>Y`
        ${Ea(e.$textStyle,e.$weight||"regular")}
        color: ${lo.hyperlink};
        text-decoration: none;

        &:hover,
        &:active,
        &:focus {
            color: ${lo["text-hover"]};
        }
    `}
`,Oa=H(te)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Ba;!function(t){const n=(r,t,n)=>{const i=(n,i)=>{var{weight:o,inline:a,paragraph:s,maxLines:l}=n,d=ce(n,["weight","inline","paragraph","maxLines"]);return e(Sa,Object.assign({ref:i,as:a?"span":r,$textStyle:t,$weight:o,$inline:a,$paragraph:s,$maxLines:l},d))};return i.displayName=`Typography.${n}`,S.forwardRef(i)};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(r,t)=>{const n=(t,n)=>{var{weight:i,inline:o,paragraph:a,maxLines:s}=t,l=ce(t,["weight","inline","paragraph","maxLines"]);return e(Sa,Object.assign({ref:n,as:o?"span":"p",$textStyle:r,$weight:i,$inline:o,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${t}`,S.forwardRef(n)};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=(n,i)=>{var{weight:o,children:a,external:s}=n,l=ce(n,["weight","children","external"]);return r(Aa,Object.assign({ref:i,$textStyle:t,$weight:o},l,{children:[a,s&&e(Oa,{})]}))};return i.displayName=`Typography.${n}`,S.forwardRef(i)};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(Ba||(Ba={}));const _a=H.div`
    padding: ${go["spacing-8"]} ${go["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=lo["bg-error"](e),t=lo["border-error"](e);break;case"success":r=lo["bg-success"](e),t=lo["border-success"](e);break;case"warning":default:r=lo["bg-warning"](e),t=lo["border-warning"](e);break;case"info":r=lo["bg-info"](e),t=lo["border-info"](e);break;case"description":r=lo["bg-strong"](e),t=lo["border-strong"](e)}return Y`
            background: ${r};
            border-left: ${ho["width-020"]} ${ho.solid}
                ${t};
        `}}

    color: ${lo.text};
    ${e=>"small"===e.$sizeType?Ca({textSize:"body-sm"}):Ca({textSize:"body-md"})}
`,Ma=H.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${go["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=lo["icon-error"](e);break;case"success":r=lo["icon-success"](e);break;case"warning":default:r=lo["icon-warning"](e);break;case"info":r=lo["icon-info"](e);break;case"description":r=lo["icon-subtle"](e)}return Y`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,za=H(Ba.LinkSM)`
    ${e=>"small"===e.$sizeType?Y`
                ${co["body-sm-semibold"]}
                margin-top: ${go["spacing-4"]};
            `:Y`
                ${co["body-md-semibold"]}
                margin-top: ${go["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${go["spacing-4"]};
    }
`,ja=H.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Ta=H.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return Y`
                margin-bottom: ${go["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,Ia=H.button`
    ${e=>"small"===e.$sizeType?Y`
                ${co["body-sm-semibold"]}
            `:Y`
                ${co["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${go["spacing-4"]};
    margin-top: ${go["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${lo["text-primary"]};
`,Pa=H(C)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${uo["duration-350"]} ${uo["ease-standard"]};
`,La=H.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?Y`
                    color: ${lo["icon-selected-disabled"]};
                `:Y`
                    color: ${lo["icon-disabled-subtle"]};
                `:e.$active?Y`
                color: ${lo["icon-selected"]};
            `:Y`
            color: ${lo["icon-subtle"]};
        `};
`,Ra=Y`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${co.Spec["weight-regular"]};
        ${e=>e.$size&&co[`${e.$size}-regular`]}
        color: ${lo.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,Wa=H.ol`
    ${Ra}

    margin-left: 3rem;

    ${fo.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:r}=e,t=e.$counterType||"decimal",n=e.$counterSeparator||")";return Y`
            li:before {
                content: counter(list, ${t}) "${n}";
                counter-increment: ${r?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:r,start:t}=e;if(t){return Y`
                counter-reset: list ${r?t+1:t-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,Ha=H.ul`
    ${Ra}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Ya=r=>{var{size:t,bulletType:n,bottomMargin:i,children:o}=r,a=ce(r,["size","bulletType","bottomMargin","children"]);return e(Ha,Object.assign({$size:t,$bulletType:n,$bottomMargin:i},a,{children:o}))};Ya.displayName="TextList.Ul";const Na=r=>{var{size:t,counterType:n,counterSeparator:i,bottomMargin:o,children:a}=r,s=ce(r,["size","counterType","counterSeparator","bottomMargin","children"]);return e(Wa,Object.assign({$size:t,$counterType:n,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};Na.displayName="TextList.Ol";const Va=Ya,qa=H.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${mo.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${lo.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${lo["focus-ring"]};
        outline-offset: 0;
    }

    ${e=>{if(!e.$indicator)return Y`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return Y`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?Y`
                            border-color: ${lo["border-error"]};
                        `:Y`
                            border-color: ${lo["border-error"]};

                            &:has(${Ja}:hover) {
                                @media (pointer: fine) {
                                    background: ${lo["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?Y`
                            border: none;
                            background: ${lo["bg-selected-disabled"]};
                        `:Y`
                            border: none;
                        `:e.$selected?Y`
                        border: none;
                        background: ${lo["bg-selected"]};

                        &:has(${Ja}:hover) {
                            @media (pointer: fine) {
                                background: ${lo["bg-selected-hover"]};

                                & ${Za} {
                                    color: ${lo["text-selected-hover"]};
                                }

                                & ${ss} {
                                    color: ${lo["icon-selected-hover"]};
                                }
                            }
                        }
                    `:Y`
                    border: none;

                    &:has(${Ja}:hover) {
                        @media (pointer: fine) {
                            background: ${lo["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?Y`
                            border-color: ${lo["border-error"]};
                        `:Y`
                            border-color: ${lo["border-error"]};

                            &:has(${Ja}:hover) {
                                @media (pointer: fine) {
                                    background: ${lo["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?Y`
                            border-color: ${lo["border-selected-disabled"]};
                            background: ${lo["bg-selected-disabled"]};
                        `:Y`
                            border-color: ${lo["border-disabled"]};
                            background: ${lo["bg-disabled"]};
                        `:e.$selected?Y`
                        border-color: ${lo["border-selected"]};
                        background: ${lo["bg-selected"]};

                        &:has(${Ja}:hover) {
                            @media (pointer: fine) {
                                background: ${lo["bg-selected-hover"]};

                                & ${Za} {
                                    color: ${lo["text-selected-hover"]};
                                }

                                & ${ss} {
                                    color: ${lo["icon-selected-hover"]};
                                }
                            }
                        }
                    `:Y`
                    border-color: ${lo.border};

                    &:has(${Ja}:hover) {
                        @media (pointer: fine) {
                            background: ${lo["bg-hover-subtle"]};
                        }
                    }
                `}
`,Qa=H.input`
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
`,Ua=H.div`
    display: flex;
`,Za=H.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?Y`
                    color: ${lo["text-selected-disabled"]};
                `:Y`
                    color: ${lo["text-disabled"]};
                `:e.$selected?Y`
                color: ${lo["text-selected"]};
            `:Y`
            color: ${lo.text};
        `}
`,Xa=H.label`
    ${co["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${fo.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${fo.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,Ga=H.div`
    ${co["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${co["body-md-semibold"]}
    }
`,Ja=H.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Ka=H.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,es=H.button`
    color: ${e=>e.$disabled?lo["text-disabled"]:lo["text-error"]};
    white-space: nowrap;
    ${co["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,rs=H.button`
    color: ${e=>e.disabled?lo["text-disabled"]:lo["text-primary"]};
    ${co["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${lo.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,ts=H.div`
    width: 100%;
    color: ${e=>e.$disabled?lo["text-disabled"]:lo["text-error"]};
    border: none;
    background: ${lo.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ns=H((t=>{var{type:n,className:i,children:o,actionLink:a,actionLinkIcon:s,sizeType:l="default",showIcon:d=!1,customIcon:c,maxCollapsedHeight:u,role:h}=t,g=ce(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[m,b]=B(!1),[p,f]=B(!1),{height:y,ref:v}=Mr(),[x]=B((()=>Ie.generate())),w=P((()=>{b(!u),f($())}),[u,y]),$=()=>!(!y||!u)&&y>u;T((()=>{w()}),[u,y,w]);return r(_a,{className:i,$type:n,$sizeType:l,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":g["data-testid"],role:h,children:[d&&e(Ma,{$sizeType:l,$type:n,children:(()=>{if(n&&c)return c;switch(n){case"success":return e(re,{"aria-hidden":!0});case"warning":return e(K,{"aria-hidden":!0});case"error":return e(J,{"aria-hidden":!0});case"info":case"description":return e(ee,{"aria-hidden":!0});default:return null}})()}),r(ja,{children:[p&&r(Ia,{$sizeType:l,$type:n,type:"button","aria-expanded":m,"aria-controls":x,onClick:()=>b(!m),children:["Show ",m?"less":"more",e(Pa,{$expanded:m})]}),r(Ta,{id:x,$maxCollapsedHeight:$()?u:void 0,$showMore:m,$hasActionLink:!!a,inert:Fa(!!u&&!m),children:[e("div",{ref:v,children:o}),a?r(za,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},a,{children:[a.children,s||e(G,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,is=H.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${lo.bg};
    ${Ca({textSize:"body-md"})}

    ${e=>e.$disabled?Y`
                color: ${lo["text-disabled"]};
            `:e.$selected?Y`
                color: ${lo["text-selected"]};
            `:Y`
                color: ${lo.text};
            `}
`,os=H(Ba.BodyMD)`
    color: ${e=>e.$disabled?lo["text-disabled"]:lo["text-error"]};
`,as=H(Va)`
    color: ${e=>e.$disabled?lo["text-disabled"]:lo["text-error"]};
`,ss=H((({type:r,active:t=!1,disabled:n,className:i})=>{let o;switch(r){case"checkbox":o=e(t?se:ae,{});break;case"radio":o=e(t?ie:ne,{});break;case"tick":o=e(le,{});break;case"cross":o=e(oe,{});break;default:o=null}return e(La,{className:i,$active:t,$disabled:n,"aria-hidden":!0,children:o})}))`
    ${e=>e.$disabled?e.$selected?Y`
                    color: ${lo["icon-selected-disabled"]};
                `:Y`
                    color: ${lo["icon-disabled-subtle"]};
                `:e.$selected?Y`
                color: ${lo["icon-selected"]};
            `:Y`
            color: ${lo["icon-subtle"]};
        `};
`;var ls=Cs(),ds=e=>xs(e,ls),cs=Cs();ds.write=e=>xs(e,cs);var us=Cs();ds.onStart=e=>xs(e,us);var hs=Cs();ds.onFrame=e=>xs(e,hs);var gs=Cs();ds.onFinish=e=>xs(e,gs);var ms=[];ds.setTimeout=(e,r)=>{const t=ds.now()+r,n=()=>{const e=ms.findIndex((e=>e.cancel==n));~e&&ms.splice(e,1),ys-=~e?1:0},i={time:t,handler:e,cancel:n};return ms.splice(bs(t),0,i),ys+=1,ws(),i};var bs=e=>~(~ms.findIndex((r=>r.time>e))||~ms.length);ds.cancel=e=>{us.delete(e),hs.delete(e),gs.delete(e),ls.delete(e),cs.delete(e)},ds.sync=e=>{vs=!0,ds.batchedUpdates(e),vs=!1},ds.throttle=e=>{let r;function t(){try{e(...r)}finally{r=null}}function n(...e){r=e,ds.onStart(t)}return n.handler=e,n.cancel=()=>{us.delete(t),r=null},n};var ps="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ds.use=e=>ps=e,ds.now="undefined"!=typeof performance?()=>performance.now():Date.now,ds.batchedUpdates=e=>e(),ds.catch=console.error,ds.frameLoop="always",ds.advance=()=>{"demand"!==ds.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Fs()};var fs=-1,ys=0,vs=!1;function xs(e,r){vs?(r.delete(e),e(0)):(r.add(e),ws())}function ws(){fs<0&&(fs=0,"demand"!==ds.frameLoop&&ps($s))}function $s(){~fs&&(ps($s),ds.batchedUpdates(Fs))}function Fs(){const e=fs;fs=ds.now();const r=bs(fs);r&&(Es(ms.splice(0,r),(e=>e.handler())),ys-=r),ys?(us.flush(),ls.flush(e?Math.min(64,fs-e):16.667),hs.flush(),cs.flush(),gs.flush()):fs=-1}function Cs(){let e=new Set,r=e;return{add(t){ys+=r!=e||e.has(t)?0:1,e.add(t)},delete:t=>(ys-=r==e&&e.has(t)?1:0,e.delete(t)),flush(t){r.size&&(e=new Set,ys-=r.size,Es(r,(r=>r(t)&&e.add(r))),ys+=e.size,r=e)}}}function Es(e,r){e.forEach((e=>{try{r(e)}catch(e){ds.catch(e)}}))}var Ds=Object.defineProperty,ks={};function Ss(){}((e,r)=>{for(var t in r)Ds(e,t,{get:r[t],enumerable:!0})})(ks,{assign:()=>Hs,colors:()=>Ls,createStringInterpolator:()=>js,skipAnimation:()=>Rs,to:()=>Ts,willAdvance:()=>Ws});var As={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Os(e,r){if(As.arr(e)){if(!As.arr(r)||e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}return e===r}var Bs=(e,r)=>e.forEach(r);function _s(e,r,t){if(As.arr(e))for(let n=0;n<e.length;n++)r.call(t,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&r.call(t,e[n],n)}var Ms=e=>As.und(e)?[]:As.arr(e)?e:[e];function zs(e,r){if(e.size){const t=Array.from(e);e.clear(),Bs(t,r)}}var js,Ts,Is=(e,...r)=>zs(e,(e=>e(...r))),Ps=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ls=null,Rs=!1,Ws=Ss,Hs=e=>{e.to&&(Ts=e.to),e.now&&(ds.now=e.now),void 0!==e.colors&&(Ls=e.colors),null!=e.skipAnimation&&(Rs=e.skipAnimation),e.createStringInterpolator&&(js=e.createStringInterpolator),e.requestAnimationFrame&&ds.use(e.requestAnimationFrame),e.batchedUpdates&&(ds.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Ws=e.willAdvance),e.frameLoop&&(ds.frameLoop=e.frameLoop)},Ys=new Set,Ns=[],Vs=[],qs=0,Qs={get idle(){return!Ys.size&&!Ns.length},start(e){qs>e.priority?(Ys.add(e),ds.onStart(Us)):(Zs(e),ds(Gs))},advance:Gs,sort(e){if(qs)ds.onFrame((()=>Qs.sort(e)));else{const r=Ns.indexOf(e);~r&&(Ns.splice(r,1),Xs(e))}},clear(){Ns=[],Ys.clear()}};function Us(){Ys.forEach(Zs),Ys.clear(),ds(Gs)}function Zs(e){Ns.includes(e)||Xs(e)}function Xs(e){Ns.splice(function(e,r){const t=e.findIndex(r);return t<0?e.length:t}(Ns,(r=>r.priority>e.priority)),0,e)}function Gs(e){const r=Vs;for(let t=0;t<Ns.length;t++){const n=Ns[t];qs=n.priority,n.idle||(Ws(n),n.advance(e),n.idle||r.push(n))}return qs=0,(Vs=Ns).length=0,(Ns=r).length>0}var Js="[-+]?\\d*\\.?\\d+",Ks=Js+"%";function el(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var rl=new RegExp("rgb"+el(Js,Js,Js)),tl=new RegExp("rgba"+el(Js,Js,Js,Js)),nl=new RegExp("hsl"+el(Js,Ks,Ks)),il=new RegExp("hsla"+el(Js,Ks,Ks,Js)),ol=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,al=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,sl=/^#([0-9a-fA-F]{6})$/,ll=/^#([0-9a-fA-F]{8})$/;function dl(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function cl(e,r,t){const n=t<.5?t*(1+r):t+r-t*r,i=2*t-n,o=dl(i,n,e+1/3),a=dl(i,n,e),s=dl(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ul(e){const r=parseInt(e,10);return r<0?0:r>255?255:r}function hl(e){return(parseFloat(e)%360+360)%360/360}function gl(e){const r=parseFloat(e);return r<0?0:r>1?255:Math.round(255*r)}function ml(e){const r=parseFloat(e);return r<0?0:r>100?1:r/100}function bl(e){let r=function(e){let r;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(r=sl.exec(e))?parseInt(r[1]+"ff",16)>>>0:Ls&&void 0!==Ls[e]?Ls[e]:(r=rl.exec(e))?(ul(r[1])<<24|ul(r[2])<<16|ul(r[3])<<8|255)>>>0:(r=tl.exec(e))?(ul(r[1])<<24|ul(r[2])<<16|ul(r[3])<<8|gl(r[4]))>>>0:(r=ol.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=ll.exec(e))?parseInt(r[1],16)>>>0:(r=al.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=nl.exec(e))?(255|cl(hl(r[1]),ml(r[2]),ml(r[3])))>>>0:(r=il.exec(e))?(cl(hl(r[1]),ml(r[2]),ml(r[3]))|gl(r[4]))>>>0:null}(e);if(null===r)return e;r=r||0;return`rgba(${(4278190080&r)>>>24}, ${(16711680&r)>>>16}, ${(65280&r)>>>8}, ${(255&r)/255})`}var pl=(e,r,t)=>{if(As.fun(e))return e;if(As.arr(e))return pl({range:e,output:r,extrapolate:t});if(As.str(e.output[0]))return js(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const r=function(e,r){for(var t=1;t<r.length-1&&!(r[t]>=e);++t);return t-1}(e,o);return function(e,r,t,n,i,o,a,s,l){let d=l?l(e):e;if(d<r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(d>t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(n===i)return n;if(r===t)return e<=r?n:i;r===-1/0?d=-d:t===1/0?d-=r:d=(d-r)/(t-r);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[r],o[r+1],i[r],i[r+1],l,a,s,n.map)}};var fl=1.70158,yl=1.525*fl,vl=fl+1,xl=2*Math.PI/3,wl=2*Math.PI/4.5,$l=e=>{const r=7.5625,t=2.75;return e<1/t?r*e*e:e<2/t?r*(e-=1.5/t)*e+.75:e<2.5/t?r*(e-=2.25/t)*e+.9375:r*(e-=2.625/t)*e+.984375},Fl={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>vl*e*e*e-fl*e*e,easeOutBack:e=>1+vl*Math.pow(e-1,3)+fl*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-yl)/2:(Math.pow(2*e-2,2)*((yl+1)*(2*e-2)+yl)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*xl),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*xl)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*wl)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*wl)/2+1,easeInBounce:e=>1-$l(1-e),easeOutBounce:$l,easeInOutBounce:e=>e<.5?(1-$l(1-2*e))/2:(1+$l(2*e-1))/2,steps:(e,r="end")=>t=>{const n=(t="end"===r?Math.min(t,.999):Math.max(t,.001))*e,i="end"===r?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Cl=Symbol.for("FluidValue.get"),El=Symbol.for("FluidValue.observers"),Dl=e=>Boolean(e&&e[Cl]),kl=e=>e&&e[Cl]?e[Cl]():e,Sl=e=>e[El]||null;function Al(e,r){const t=e[El];t&&t.forEach((e=>{!function(e,r){e.eventObserved?e.eventObserved(r):e(r)}(e,r)}))}var Ol=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Bl(this,e)}},Bl=(e,r)=>jl(e,Cl,r);function _l(e,r){if(e[Cl]){let t=e[El];t||jl(e,El,t=new Set),t.has(r)||(t.add(r),e.observerAdded&&e.observerAdded(t.size,r))}return r}function Ml(e,r){const t=e[El];if(t&&t.has(r)){const n=t.size-1;n?t.delete(r):e[El]=null,e.observerRemoved&&e.observerRemoved(n,r)}}var zl,jl=(e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}),Tl=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Il=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Pl=new RegExp(`(${Tl.source})(%|[a-z]+)`,"i"),Ll=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Rl=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Wl=e=>{const[r,t]=Hl(e);if(!r||Ps())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(n)return n.trim();if(t&&t.startsWith("--")){const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);return r||e}return t&&Rl.test(t)?Wl(t):t||e},Hl=e=>{const r=Rl.exec(e);if(!r)return[,];const[,t,n]=r;return[t,n]},Yl=(e,r,t,n,i)=>`rgba(${Math.round(r)}, ${Math.round(t)}, ${Math.round(n)}, ${i})`,Nl=e=>{zl||(zl=Ls?new RegExp(`(${Object.keys(Ls).join("|")})(?!\\w)`,"g"):/^\b$/);const r=e.output.map((e=>kl(e).replace(Rl,Wl).replace(Il,bl).replace(zl,bl))),t=r.map((e=>e.match(Tl).map(Number))),n=t[0].map(((e,r)=>t.map((e=>{if(!(r in e))throw Error('The arity of each "output" value must be equal');return e[r]})))).map((r=>pl({...e,output:r})));return e=>{const t=!Pl.test(r[0])&&r.find((e=>Pl.test(e)))?.replace(Tl,"");let i=0;return r[0].replace(Tl,(()=>`${n[i++](e)}${t||""}`)).replace(Ll,Yl)}},Vl="react-spring: ",ql=e=>{const r=e;let t=!1;if("function"!=typeof r)throw new TypeError(`${Vl}once requires a function parameter`);return(...e)=>{t||(r(...e),t=!0)}},Ql=ql(console.warn);var Ul=ql(console.warn);function Zl(e){return As.str(e)&&("#"==e[0]||/\d/.test(e)||!Ps()&&Rl.test(e)||e in(Ls||{}))}var Xl=Ps()?T:I;function Gl(){const e=B()[1],r=(()=>{const e=O(!1);return Xl((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{r.current&&e(Math.random())}}var Jl=e=>T(e,Kl),Kl=[];function ed(e){const r=O(void 0);return T((()=>{r.current=e})),r.current}var rd=Symbol.for("Animated:node"),td=e=>e&&e[rd],nd=(e,r)=>((e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}))(e,rd,r),id=e=>e&&e[rd]&&e[rd].getPayload(),od=class{constructor(){nd(this,this)}getPayload(){return this.payload||[]}},ad=class e extends od{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,As.num(this._value)&&(this.lastPosition=this._value)}static create(r){return new e(r)}getPayload(){return[this]}getValue(){return this._value}setValue(e,r){return As.num(e)&&(this.lastPosition=e,r&&(e=Math.round(e/r)*r,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,As.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},sd=class e extends ad{constructor(e){super(0),this._string=null,this._toString=pl({output:[e,e]})}static create(r){return new e(r)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(As.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=pl({output:[this.getValue(),e]})),this._value=0,super.reset()}},ld={dependencies:null},dd=class extends od{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const r={};return _s(this.source,((t,n)=>{var i;(i=t)&&i[rd]===i?r[n]=t.getValue(e):Dl(t)?r[n]=kl(t):e||(r[n]=t)})),r}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Bs(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const r=new Set;return _s(e,this._addToPayload,r),Array.from(r)}}_addToPayload(e){ld.dependencies&&Dl(e)&&ld.dependencies.add(e);const r=id(e);r&&Bs(r,(e=>this.add(e)))}},cd=class e extends dd{constructor(e){super(e)}static create(r){return new e(r)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const r=this.getPayload();return e.length==r.length?r.map(((r,t)=>r.setValue(e[t]))).some(Boolean):(super.setValue(e.map(ud)),!0)}};function ud(e){return(Zl(e)?sd:ad).create(e)}function hd(e){const r=td(e);return r?r.constructor:As.arr(e)?cd:Zl(e)?sd:ad}var gd=(e,r)=>{const t=!As.fun(e)||e.prototype&&e.prototype.isReactComponent;return R(((n,i)=>{const o=O(null),a=t&&P((e=>{o.current=function(e,r){e&&(As.fun(e)?e(r):e.current=r);return r}(i,e)}),[i]),[s,l]=function(e,r){const t=new Set;ld.dependencies=t,e.style&&(e={...e,style:r.createAnimatedStyle(e.style)});return e=new dd(e),ld.dependencies=null,[e,t]}(n,r),d=Gl(),c=()=>{const e=o.current;if(t&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,s.getValue(!0)))&&d()},u=new md(c,l),h=O(void 0);Xl((()=>(h.current=u,Bs(l,(e=>_l(e,u))),()=>{h.current&&(Bs(h.current.deps,(e=>Ml(e,h.current))),ds.cancel(h.current.update))}))),T(c,[]),Jl((()=>()=>{const e=h.current;Bs(e.deps,(r=>Ml(r,e)))}));const g=r.getComponentProps(s.getValue());return k.createElement(e,{...g,ref:a})}))},md=class{constructor(e,r){this.update=e,this.deps=r}eventObserved(e){"change"==e.type&&ds.write(this.update)}};var bd=Symbol.for("AnimatedComponent"),pd=e=>As.str(e)?e:e&&As.str(e.displayName)?e.displayName:As.fun(e)&&e.name||null;function fd(e,...r){return As.fun(e)?e(...r):e}var yd=(e,r)=>!0===e||!!(r&&e&&(As.fun(e)?e(r):Ms(e).includes(r))),vd=(e,r)=>As.obj(e)?r&&e[r]:e,xd=(e,r)=>!0===e.default?e[r]:e.default?e.default[r]:void 0,wd=e=>e,$d=(e,r=wd)=>{let t=Fd;e.default&&!0!==e.default&&(e=e.default,t=Object.keys(e));const n={};for(const i of t){const t=r(e[i],i);As.und(t)||(n[i]=t)}return n},Fd=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Cd={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ed(e){const r=function(e){const r={};let t=0;if(_s(e,((e,n)=>{Cd[n]||(r[n]=e,t++)})),t)return r}(e);if(r){const t={to:r};return _s(e,((e,n)=>n in r||(t[n]=e))),t}return{...e}}function Dd(e){return e=kl(e),As.arr(e)?e.map(Dd):Zl(e)?ks.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function kd(e){return As.fun(e)||As.arr(e)&&As.obj(e[0])}var Sd={tension:170,friction:26,mass:1,damping:1,easing:Fl.linear,clamp:!1},Ad=class{constructor(){this.velocity=0,Object.assign(this,Sd)}};function Od(e,r){if(As.und(r.decay)){const t=!As.und(r.tension)||!As.und(r.friction);!t&&As.und(r.frequency)&&As.und(r.damping)&&As.und(r.mass)||(e.duration=void 0,e.decay=void 0),t&&(e.frequency=void 0)}else e.duration=void 0}var Bd=[],_d=class{constructor(){this.changed=!1,this.values=Bd,this.toValues=null,this.fromValues=Bd,this.config=new Ad,this.immediate=!1}};function Md(e,{key:r,props:t,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,d,c=yd(t.cancel??n?.cancel,r);if(c)g();else{As.und(t.pause)||(i.paused=yd(t.pause,r));let e=n?.pause;!0!==e&&(e=i.paused||yd(e,r)),l=fd(t.delay||0,r),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-ds.now()}function h(){l>0&&!ks.skipAnimation?(i.delayed=!0,d=ds.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(d)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...t,callId:e,cancel:c},a)}catch(e){s(e)}}}))}var zd=(e,r)=>1==r.length?r[0]:r.some((e=>e.cancelled))?Id(e.get()):r.every((e=>e.noop))?jd(e.get()):Td(e.get(),r.every((e=>e.finished))),jd=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Td=(e,r,t=!1)=>({value:e,finished:r,cancelled:t}),Id=e=>({value:e,cancelled:!0,finished:!1});function Pd(e,r,t,n){const{callId:i,parentId:o,onRest:a}=r,{asyncTo:s,promise:l}=t;return o||e!==s||r.reset?t.promise=(async()=>{t.asyncId=i,t.asyncTo=e;const d=$d(r,((e,r)=>"onRest"===r?void 0:e));let c,u;const h=new Promise(((e,r)=>(c=e,u=r))),g=e=>{const r=i<=(t.cancelId||0)&&Id(n)||i!==t.asyncId&&Td(n,!1);if(r)throw e.result=r,u(e),e},m=(e,r)=>{const o=new Rd,a=new Wd;return(async()=>{if(ks.skipAnimation)throw Ld(t),a.result=Td(n,!1),u(a),a;g(o);const s=As.obj(e)?{...e}:{...r,to:e};s.parentId=i,_s(d,((e,r)=>{As.und(s[r])&&(s[r]=e)}));const l=await n.start(s);return g(o),t.paused&&await new Promise((e=>{t.resumeQueue.add(e)})),l})()};let b;if(ks.skipAnimation)return Ld(t),Td(n,!1);try{let r;r=As.arr(e)?(async e=>{for(const r of e)await m(r)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([r.then(c),h]),b=Td(n.get(),!0,!1)}catch(e){if(e instanceof Rd)b=e.result;else{if(!(e instanceof Wd))throw e;b=e.result}}finally{i==t.asyncId&&(t.asyncId=o,t.asyncTo=o?s:void 0,t.promise=o?l:void 0)}return As.fun(a)&&ds.batchedUpdates((()=>{a(b,n,n.item)})),b})():l}function Ld(e,r){zs(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,r&&(e.cancelId=r)}var Rd=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Wd=class extends Error{constructor(){super("SkipAnimationSignal")}},Hd=e=>e instanceof Nd,Yd=1,Nd=class extends Ol{constructor(){super(...arguments),this.id=Yd++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=td(this);return e&&e.getValue()}to(...e){return ks.to(this,e)}interpolate(...e){return Ql(`${Vl}The "interpolate" function is deprecated in v9 (use "to" instead)`),ks.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,r=!1){Al(this,{type:"change",parent:this,value:e,idle:r})}_onPriorityChange(e){this.idle||Qs.sort(this),Al(this,{type:"priority",parent:this,priority:e})}},Vd=Symbol.for("SpringPhase"),qd=e=>(1&e[Vd])>0,Qd=e=>(2&e[Vd])>0,Ud=e=>(4&e[Vd])>0,Zd=(e,r)=>r?e[Vd]|=3:e[Vd]&=-3,Xd=(e,r)=>r?e[Vd]|=4:e[Vd]&=-5,Gd=class extends Nd{constructor(e,r){if(super(),this.animation=new _d,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!As.und(e)||!As.und(r)){const t=As.obj(e)?{...e}:{...r,from:e};As.und(t.default)&&(t.default=!0),this.start(t)}}get idle(){return!(Qd(this)||this._state.asyncTo)||Ud(this)}get goal(){return kl(this.animation.to)}get velocity(){const e=td(this);return e instanceof ad?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return qd(this)}get isAnimating(){return Qd(this)}get isPaused(){return Ud(this)}get isDelayed(){return this._state.delayed}advance(e){let r=!0,t=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=id(n.to);!a&&Dl(n.to)&&(i=Ms(kl(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const d=s.constructor==sd?1:a?a[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let r=s.elapsedTime+=e;const t=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=As.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(t==d?.005:Math.min(1,.001*Math.abs(d-t)));if(As.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*r);u=t+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-u)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const r=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!As.und(n),g=t==d?s.v0>0:t<d;let m,b=!1;const p=1,f=Math.ceil(e/p);for(let e=0;e<f&&(m=Math.abs(a)>r,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(b=u==d||u>d==g,b&&(a=-a*n,u=d));a+=(1e-6*-o.tension*(u-d)+.001*-o.friction*a)/o.mass*p,u+=a*p}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,r=s.elapsedTime+=e)),n=(o.progress||0)+r/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=t+o.easing(n)*(d-t),a=(u-s.lastPosition)/e,c=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:r=!1,s.setValue(u,o.round)&&(t=!0)}));const s=td(this),l=s.getValue();if(r){const e=kl(n.to);l===e&&!t||o.decay?t&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else t&&this._onChange(l)}set(e){return ds.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Qd(this)){const{to:e,config:r}=this.animation;ds.batchedUpdates((()=>{this._onStart(),r.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,r){let t;return As.und(e)?(t=this.queue||[],this.queue=[]):t=[As.obj(e)?e:{...r,to:e}],Promise.all(t.map((e=>this._update(e)))).then((e=>zd(this,e)))}stop(e){const{to:r}=this.animation;return this._focus(this.get()),Ld(this._state,e&&this._lastCallId),ds.batchedUpdates((()=>this._stop(r,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const r=this.key||"";let{to:t,from:n}=e;t=As.obj(t)?t[r]:t,(null==t||kd(t))&&(t=void 0),n=As.obj(n)?n[r]:n,null==n&&(n=void 0);const i={to:t,from:n};return qd(this)||(e.reverse&&([t,n]=[n,t]),n=kl(n),As.und(n)?td(this)||this._set(t):this._set(n)),i}_update({...e},r){const{key:t,defaultProps:n}=this;e.default&&Object.assign(n,$d(e,((e,r)=>/^on/.test(r)?vd(e,t):e))),ic(this,e,"onProps"),oc(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Md(++this._lastCallId,{key:t,props:e,defaultProps:n,state:o,actions:{pause:()=>{Ud(this)||(Xd(this,!0),Is(o.pauseQueue),oc(this,"onPause",Td(this,Jd(this,this.animation.to)),this))},resume:()=>{Ud(this)&&(Xd(this,!1),Qd(this)&&this._resume(),Is(o.resumeQueue),oc(this,"onResume",Td(this,Jd(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((t=>{if(e.loop&&t.finished&&(!r||!t.noop)){const r=Kd(e);if(r)return this._update(r,!0)}return t}))}_merge(e,r,t){if(r.cancel)return this.stop(!0),t(Id(this));const n=!As.und(e.to),i=!As.und(e.from);if(n||i){if(!(r.callId>this._lastToId))return t(Id(this));this._lastToId=r.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:d}=s;let{to:c=l,from:u=d}=e;!i||n||r.default&&!As.und(c)||(c=u),r.reverse&&([c,u]=[u,c]);const h=!Os(u,d);h&&(s.from=u),u=kl(u);const g=!Os(c,l);g&&this._focus(c);const m=kd(r.to),{config:b}=s,{decay:p,velocity:f}=b;(n||i)&&(b.velocity=0),r.config&&!m&&function(e,r,t){t&&(Od(t={...t},r),r={...t,...r}),Od(e,r),Object.assign(e,r);for(const r in Sd)null==e[r]&&(e[r]=Sd[r]);let{frequency:n,damping:i}=e;const{mass:o}=e;As.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(b,fd(r.config,o),r.config!==a.config?fd(a.config,o):void 0);let y=td(this);if(!y||As.und(c))return t(Td(this,!0));const v=As.und(r.reset)?i&&!r.default:!As.und(u)&&yd(r.reset,o),x=v?u:this.get(),w=Dd(c),$=As.num(w)||As.arr(w)||Zl(w),F=!m&&(!$||yd(a.immediate||r.immediate,o));if(g){const e=hd(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=Dl(c),D=!1;if(!E){const e=v||!qd(this)&&h;(g||e)&&(D=Os(Dd(x),w),E=!D),(Os(s.immediate,F)||F)&&Os(b.decay,p)&&Os(b.velocity,f)||(E=!0)}if(D&&Qd(this)&&(s.changed&&!v?E=!0:E||this._stop(l)),!m&&((E||Dl(l))&&(s.values=y.getPayload(),s.toValues=Dl(c)?null:C==sd?[1]:Ms(w)),s.immediate!=F&&(s.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=s;Bs(nc,(e=>ic(this,r,e)));const n=Td(this,Jd(this,l));Is(this._pendingCalls,n),this._pendingCalls.add(t),s.changed&&ds.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?fd(a.onRest,n):s.onStart?.(n,this)}))}v&&this._set(x),m?t(Pd(r.to,r,this._state,this)):E?this._start():Qd(this)&&!g?this._pendingCalls.add(t):t(jd(x))}_focus(e){const r=this.animation;e!==r.to&&(Sl(this)&&this._detach(),r.to=e,Sl(this)&&this._attach())}_attach(){let e=0;const{to:r}=this.animation;Dl(r)&&(_l(r,this),Hd(r)&&(e=r.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Dl(e)&&Ml(e,this)}_set(e,r=!0){const t=kl(e);if(!As.und(t)){const e=td(this);if(!e||!Os(t,e.getValue())){const n=hd(t);e&&e.constructor==n?e.setValue(t):nd(this,n.create(t)),e&&ds.batchedUpdates((()=>{this._onChange(t,r)}))}}return td(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,oc(this,"onStart",Td(this,Jd(this,e.to)),this))}_onChange(e,r){r||(this._onStart(),fd(this.animation.onChange,e,this)),fd(this.defaultProps.onChange,e,this),super._onChange(e,r)}_start(){const e=this.animation;td(this).reset(kl(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Qd(this)||(Zd(this,!0),Ud(this)||this._resume())}_resume(){ks.skipAnimation?this.finish():Qs.start(this)}_stop(e,r){if(Qd(this)){Zd(this,!1);const t=this.animation;Bs(t.values,(e=>{e.done=!0})),t.toValues&&(t.onChange=t.onPause=t.onResume=void 0),Al(this,{type:"idle",parent:this});const n=r?Id(this.get()):Td(this.get(),Jd(this,e??t.to));Is(this._pendingCalls,n),t.changed&&(t.changed=!1,oc(this,"onRest",n,this))}}};function Jd(e,r){const t=Dd(r);return Os(Dd(e.get()),t)}function Kd(e,r=e.loop,t=e.to){const n=fd(r);if(n){const i=!0!==n&&Ed(n),o=(i||e).reverse,a=!i||i.reset;return ec({...e,loop:r,default:!1,pause:void 0,to:!o||kd(t)?t:void 0,from:a?e.from:void 0,reset:a,...i})}}function ec(e){const{to:r,from:t}=e=Ed(e),n=new Set;return As.obj(r)&&tc(r,n),As.obj(t)&&tc(t,n),e.keys=n.size?Array.from(n):null,e}function rc(e){const r=ec(e);return As.und(r.default)&&(r.default=$d(r)),r}function tc(e,r){_s(e,((e,t)=>null!=e&&r.add(t)))}var nc=["onStart","onRest","onChange","onPause","onResume"];function ic(e,r,t){e.animation[t]=r[t]!==xd(r,t)?vd(r[t],e.key):void 0}function oc(e,r,...t){e.animation[r]?.(...t),e.defaultProps[r]?.(...t)}var ac=["onStart","onChange","onRest"],sc=1,lc=class{constructor(e,r){this.id=sc++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),r&&(this._flush=r),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((r,t)=>e[t]=r.get())),e}set(e){for(const r in e){const t=e[r];As.und(t)||this.springs[r].set(t)}}update(e){return e&&this.queue.push(ec(e)),this}start(e){let{queue:r}=this;return e?r=Ms(e).map(ec):this.queue=[],this._flush?this._flush(this,r):(bc(this,r),dc(this,r))}stop(e,r){if(e!==!!e&&(r=e),r){const t=this.springs;Bs(Ms(r),(r=>t[r].stop(!!e)))}else Ld(this._state,this._lastAsyncId),this.each((r=>r.stop(!!e)));return this}pause(e){if(As.und(e))this.start({pause:!0});else{const r=this.springs;Bs(Ms(e),(e=>r[e].pause()))}return this}resume(e){if(As.und(e))this.start({pause:!1});else{const r=this.springs;Bs(Ms(e),(e=>r[e].resume()))}return this}each(e){_s(this.springs,e)}_onFrame(){const{onStart:e,onChange:r,onRest:t}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,zs(e,(([e,r])=>{r.value=this.get(),e(r,this,this._item)})));const o=!n&&this._started,a=i||o&&t.size?this.get():null;i&&r.size&&zs(r,(([e,r])=>{r.value=a,e(r,this,this._item)})),o&&(this._started=!1,zs(t,(([e,r])=>{r.value=a,e(r,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ds.onFrame(this._onFrame)}};function dc(e,r){return Promise.all(r.map((r=>cc(e,r)))).then((r=>zd(e,r)))}async function cc(e,r,t){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=r,d=As.obj(r.default)&&r.default;a&&(r.loop=!1),!1===i&&(r.to=null),!1===o&&(r.from=null);const c=As.arr(i)||As.fun(i)?i:void 0;c?(r.to=void 0,r.onRest=void 0,d&&(d.onRest=void 0)):Bs(ac,(t=>{const n=r[t];if(As.fun(n)){const i=e._events[t];r[t]=({finished:e,cancelled:r})=>{const t=i.get(n);t?(e||(t.finished=!1),r&&(t.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:r||!1})},d&&(d[t]=r[t])}}));const u=e._state;r.pause===!u.paused?(u.paused=r.pause,Is(r.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(r.pause=!0);const h=(n||Object.keys(e.springs)).map((t=>e.springs[t].start(r))),g=!0===r.cancel||!0===xd(r,"cancel");(c||g&&u.asyncId)&&h.push(Md(++e._lastAsyncId,{props:r,state:u,actions:{pause:Ss,resume:Ss,start(r,t){g?(Ld(u,e._lastAsyncId),t(Id(e))):(r.onRest=s,t(Pd(c,r,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=zd(e,await Promise.all(h));if(a&&m.finished&&(!t||!m.noop)){const t=Kd(r,a,i);if(t)return bc(e,[t]),cc(e,t,!0)}return l&&ds.batchedUpdates((()=>l(m,e,e.item))),m}function uc(e,r){const t={...e.springs};return r&&Bs(Ms(r),(e=>{As.und(e.keys)&&(e=ec(e)),As.obj(e.to)||(e={...e,to:void 0}),mc(t,e,(e=>gc(e)))})),hc(e,t),t}function hc(e,r){_s(r,((r,t)=>{e.springs[t]||(e.springs[t]=r,_l(r,e))}))}function gc(e,r){const t=new Gd;return t.key=e,r&&_l(t,r),t}function mc(e,r,t){r.keys&&Bs(r.keys,(n=>{(e[n]||(e[n]=t(n)))._prepareNode(r)}))}function bc(e,r){Bs(r,(r=>{mc(e.springs,r,(r=>gc(r,e)))}))}var pc=k.createContext({pause:!1,immediate:!1}),fc=()=>{const e=[],r=function(r){Ul(`${Vl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Bs(e,((e,i)=>{if(As.und(r))n.push(e.start());else{const o=t(r,e,i);o&&n.push(e.start(o))}})),n};r.current=e,r.add=function(r){e.includes(r)||e.push(r)},r.delete=function(r){const t=e.indexOf(r);~t&&e.splice(t,1)},r.pause=function(){return Bs(e,(e=>e.pause(...arguments))),this},r.resume=function(){return Bs(e,(e=>e.resume(...arguments))),this},r.set=function(r){Bs(e,((e,t)=>{const n=As.fun(r)?r(t,e):r;n&&e.set(n)}))},r.start=function(r){const t=[];return Bs(e,((e,n)=>{if(As.und(r))t.push(e.start());else{const i=this._getProps(r,e,n);i&&t.push(e.start(i))}})),t},r.stop=function(){return Bs(e,(e=>e.stop(...arguments))),this},r.update=function(r){return Bs(e,((e,t)=>e.update(this._getProps(r,e,t)))),this};const t=function(e,r,t){return As.fun(e)?e(t,r):e};return r._getProps=t,r};function yc(e,r){const t=As.fun(e),[[n],i]=function(e,r,t){const n=As.fun(r)&&r;n&&!t&&(t=[]);const i=L((()=>n||3==arguments.length?fc():void 0),[]),o=O(0),a=Gl(),s=L((()=>({ctrls:[],queue:[],flush(e,r){const t=uc(e,r),n=o.current>0&&!s.queue.length&&!Object.keys(t).some((r=>!e.springs[r]));return n?dc(e,r):new Promise((n=>{hc(e,t),s.queue.push((()=>{n(dc(e,r))})),a()}))}})),[]),l=O([...s.ctrls]),d=O([]),c=ed(e)||0;function u(e,t){for(let i=e;i<t;i++){const e=l.current[i]||(l.current[i]=new lc(null,s.flush)),t=n?n(i,e):r[i];t&&(d.current[i]=rc(t))}}L((()=>{Bs(l.current.slice(e,c),(e=>{!function(e,r){e.ref?.delete(e),r?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,u(c,e)}),[e]),L((()=>{u(0,Math.min(c,e))}),t);const h=l.current.map(((e,r)=>uc(e,d.current[r]))),g=W(pc),m=ed(g),b=g!==m&&function(e){for(const r in e)return!0;return!1}(g);Xl((()=>{o.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],Bs(e,(e=>e()))),Bs(l.current,((e,r)=>{i?.add(e),b&&e.start({default:g});const t=d.current[r];t&&(function(e,r){r&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r)}(e,t.ref),e.ref?e.queue.push(t):e.start(t))}))})),Jl((()=>()=>{Bs(s.ctrls,(e=>e.stop(!0)))}));const p=h.map((e=>({...e})));return i?[p,i]:p}(1,t?e:[e],t?r||[]:r);return t||2==arguments.length?[n,i]:n}var vc=class extends Nd{constructor(e,r){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=pl(...r);const t=this._get(),n=hd(t);nd(this,n.create(t))}advance(e){const r=this._get();Os(r,this.get())||(td(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&wc(this._active)&&$c(this)}_get(){const e=As.arr(this.source)?this.source.map(kl):Ms(kl(this.source));return this.calc(...e)}_start(){this.idle&&!wc(this._active)&&(this.idle=!1,Bs(id(this),(e=>{e.done=!1})),ks.skipAnimation?(ds.batchedUpdates((()=>this.advance())),$c(this)):Qs.start(this))}_attach(){let e=1;Bs(Ms(this.source),(r=>{Dl(r)&&_l(r,this),Hd(r)&&(r.idle||this._active.add(r),e=Math.max(e,r.priority+1))})),this.priority=e,this._start()}_detach(){Bs(Ms(this.source),(e=>{Dl(e)&&Ml(e,this)})),this._active.clear(),$c(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ms(this.source).reduce(((e,r)=>Math.max(e,(Hd(r)?r.priority:0)+1)),0))}};function xc(e){return!1!==e.idle}function wc(e){return!e.size||Array.from(e).every(xc)}function $c(e){e.idle||(e.idle=!0,Bs(id(e),(e=>{e.done=!0})),Al(e,{type:"idle",parent:e}))}ks.assign({createStringInterpolator:Nl,to:(e,r)=>new vc(e,r)});var Fc=/^--/;function Cc(e,r){return null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||Fc.test(e)||Dc.hasOwnProperty(e)&&Dc[e]?(""+r).trim():r+"px"}var Ec={};var Dc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kc=["Webkit","Ms","Moz","O"];Dc=Object.keys(Dc).reduce(((e,r)=>(kc.forEach((t=>e[((e,r)=>e+r.charAt(0).toUpperCase()+r.substring(1))(t,r)]=e[r])),e)),Dc);var Sc=/^(matrix|translate|scale|rotate|skew)/,Ac=/^(translate)/,Oc=/^(rotate|skew)/,Bc=(e,r)=>As.num(e)&&0!==e?e+r:e,_c=(e,r)=>As.arr(e)?e.every((e=>_c(e,r))):As.num(e)?e===r:parseFloat(e)===r,Mc=class extends dd{constructor({x:e,y:r,z:t,...n}){const i=[],o=[];(e||r||t)&&(i.push([e||0,r||0,t||0]),o.push((e=>[`translate3d(${e.map((e=>Bc(e,"px"))).join(",")})`,_c(e,0)]))),_s(n,((e,r)=>{if("transform"===r)i.push([e||""]),o.push((e=>[e,""===e]));else if(Sc.test(r)){if(delete n[r],As.und(e))return;const t=Ac.test(r)?"px":Oc.test(r)?"deg":"";i.push(Ms(e)),o.push("rotate3d"===r?([e,r,n,i])=>[`rotate3d(${e},${r},${n},${Bc(i,t)})`,_c(i,0)]:e=>[`${r}(${e.map((e=>Bc(e,t))).join(",")})`,_c(e,r.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new zc(i,o)),super(n)}},zc=class extends Ol{constructor(e,r){super(),this.inputs=e,this.transforms=r,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",r=!0;return Bs(this.inputs,((t,n)=>{const i=kl(t[0]),[o,a]=this.transforms[n](As.arr(i)?i:t.map(kl));e+=" "+o,r=r&&a})),r?"none":e}observerAdded(e){1==e&&Bs(this.inputs,(e=>Bs(e,(e=>Dl(e)&&_l(e,this)))))}observerRemoved(e){0==e&&Bs(this.inputs,(e=>Bs(e,(e=>Dl(e)&&Ml(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Al(this,e)}};ks.assign({batchedUpdates:U,createStringInterpolator:Nl,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var jc=((e,{applyAnimatedValues:r=()=>!1,createAnimatedStyle:t=e=>new dd(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:r,createAnimatedStyle:t,getComponentProps:n},o=e=>{const r=pd(e)||"Anonymous";return(e=As.str(e)?o[e]||(o[e]=gd(e,i)):e[bd]||(e[bd]=gd(e,i))).displayName=`Animated(${r})`,e};return _s(e,((r,t)=>{As.arr(e)&&(t=pd(r)),o[t]=o(r)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,r){if(!e.nodeType||!e.setAttribute)return!1;const t="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l,...d}=r,c=Object.values(d),u=Object.keys(d).map((r=>t||e.hasAttribute(r)?r:Ec[r]||(Ec[r]=r.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const r in i)if(i.hasOwnProperty(r)){const t=Cc(r,i[r]);Fc.test(r)?e.style.setProperty(r,t):e.style[r]=t}u.forEach(((r,t)=>{e.setAttribute(r,c[t])})),void 0!==n&&(e.className=n),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Mc(e),getComponentProps:({scrollTop:e,scrollLeft:r,...t})=>t}),Tc=jc.animated;var Ic=he((function(e){return null==e}));const Pc=H.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.$show,t=e.$animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${fo.MaxWidth.sm} {
        height: calc(
            ${e=>e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.$offsetTop||0}px;
    }
`,Lc=r=>{var{id:t="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=r,u=ce(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const{verticalHeight:h,offsetTop:g}=(()=>{const[e,r]=B(),[t,n]=B(),i=P((()=>{const e=.01*window.innerHeight;r(e)}),[]),o=P((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;r(e),n(window.visualViewport.offsetTop)}}),[]);return T((()=>window.visualViewport?(o(),window.visualViewport.addEventListener("resize",o),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",o)}):(i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)})),[]),{verticalHeight:e,offsetTop:t}})();return T((()=>{var e,r;n&&c&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[n]),e(_o,{"data-testid":`${t}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:d,id:t,rootId:s,zIndex:l,children:e(Pc,Object.assign({$show:n,$animationFrom:i,"data-testid":t,$verticalHeight:h,$offsetTop:g},u,{children:o}))})},Rc=H.div`
    border-radius: ${mo.md};
    background: ${lo.bg};
    padding: ${go["spacing-16"]} ${go["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?Y`
                  border: ${ho["width-010"]} ${ho.solid}
                      ${lo.border};
              `:Y`
                  box-shadow: ${bo["md-subtle"]};
              `}}
`,Wc=H.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${go["spacing-24"]};
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

        ${({$highlight:e})=>e&&Y`
                background-color: ${lo["bg-hover-neutral"]};
            `}
    }
`,Hc=S.forwardRef(((r,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=r,s=ce(r,["children","focusHighlight","focusOutline","type"]);return e(Wc,Object.assign({ref:t,$outline:o,$highlight:i,type:a},s,{children:n}))})),Yc=H.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${lo.bg};
    box-shadow: ${bo["lg-strong"]};
    border-radius: ${mo.lg};
    overflow: hidden;

    ${fo.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Nc=H(Hc)`
    position: absolute;
    top: var(--close-button-top-inset, ${go["spacing-16"]});
    right: var(--close-button-right-inset, ${go["spacing-16"]});
    padding: 0;
    color: ${lo.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${fo.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${go["spacing-20"]});
    }
`,Vc=H.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,qc=H((r=>{var{children:t}=r,n=ce(r,["children"]);const i=n["data-testid"]||"card";return e(Rc,Object.assign({},n,{"data-testid":i,children:"string"==typeof t?e(Ba.BodyBL,{children:t}):t}))}))`
    color: ${lo.text};
    ${Ca({textSize:"body-md"})}

    ${fo.MaxWidth.sm} {
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
        background: ${lo["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${mo.full};
        background-clip: padding-box;
    }
`,Qc=H((t=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=t,s=ce(t,["id","children","onClose","showCloseButton"]);return r(Yc,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Nc,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(oe,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Uc=H.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${lo.text};
    ${Ca({textSize:"body-md"})}
`,Zc=n=>{var{children:i,visible:o,onMobileClose:a,maxHeight:s,overflow:l}=n,d=ce(n,["children","visible","onMobileClose","maxHeight","overflow"]);const c=d["data-testid"]||"popover",u=W(V),h=po["sm-max"]({theme:u}),g=be.useMediaQuery({maxWidth:h}),m=()=>{a&&a()},b=()=>"string"==typeof i?e(Ba.BodyMD,{children:i}):i;return r(t,{children:[o&&e(Vc,Object.assign({"data-testid":c},d,{children:e(qc,{$maxHeight:s,$overflow:l,children:b()})})),g&&e(Lc,{show:null!=o&&o,onOverlayClick:m,children:e(Qc,{onClose:m,children:e(Uc,{children:b()})})})]})},Xc=H.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Gc=i=>{var o,a,{children:x,popoverContent:w,trigger:$="click",position:F="top",zIndex:C,rootNode:E,customOffset:D,delay:k,onPopoverAppear:S,onPopoverDismiss:A,enableFlip:_=!0,enableResize:M=!1,overflow:z="auto"}=i,j=ce(i,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","enableFlip","enableResize","overflow"]);const[I,P]=B(!1),L=O(null),R=O(null),H=W(V),Y=po["sm-max"]({theme:H}),N=be.useMediaQuery({maxWidth:Y}),[q,Q]=B(0),{refs:U,floatingStyles:Z,context:X}=s({open:I,placement:F,whileElementsMounted:l,middleware:[d(null!=D?D:16),_&&c(),u({limiter:h()}),M&&g({apply({availableHeight:e}){Q(e)}})],onOpenChange:e=>{P(e),I!==e&&oe(e)}}),G=(()=>{const[e,r]=B(void 0),t=n();return T((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Oo.Change,e),t.events.emit(Oo.Ready),()=>t.events.off(Oo.Change,e)}),[t]),e})(),J=N?"click":$,K=m(X,{ignoreMouse:"hover"===J}),ee=b(X),re=p(X,{enabled:"hover"===J,delay:{open:null!==(o=null==k?void 0:k.open)&&void 0!==o?o:0,close:null!==(a=null==k?void 0:k.close)&&void 0!==a?a:500}}),{getReferenceProps:te,getFloatingProps:ne}=f([K,ee,re]),ie=()=>{P(!1),oe(!1)},oe=e=>{e&&S&&S(),!e&&A&&A()};return r(t,{children:[e(Xc,Object.assign({ref:e=>{L.current=e,U.setReference(e)}},te({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),j,{children:x})),I&&e(y,{root:E,children:e(v,{context:X,children:e("div",Object.assign({ref:e=>{R.current=e,U.setFloating(e)},style:Object.assign(Object.assign({},Z),{outline:"none",zIndex:null!=C?C:G})},ne(),{children:"function"==typeof w?w(M?{maxHeight:q,overflow:z}:{}):e(Zc,{visible:!0,onMobileClose:ie,maxHeight:M?q:void 0,overflow:M?z:void 0,children:w})}))})})]})},Jc=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Kc=H.span`
    color: ${lo["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Jc(e)}

    &:hover,
    &:focus-visible {
        color: ${lo["text-hover"]};
        ${({$hoverStyle:e})=>Jc(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,eu=H.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,ru=t=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=t,l=ce(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return e(Gc,Object.assign({},l,{children:r(Kc,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:d?void 0:"More info",children:[i,o&&e(eu,{$standalone:!d,children:o})]})}))},tu=H.div`
    padding-left: ${go["spacing-4"]};
    display: inline;
`,nu=({addon:r,rootNode:t})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=r;return e(tu,{children:e(ru,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:t,zIndex:s,icon:null!=o?o:e(ee,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},iu=H.div`
    background-color: ${e=>e.$collapsible?lo["bg-strong"]:lo.bg};
    ${fo.MaxWidth.lg} {
        background-color: ${lo["bg-strong"]};
    }
`,ou=H.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${lo.border};

    ${fo.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${go["spacing-16"]};
    }
`,au=H.div`
    display: flex;
    align-items: center;

    background-color: ${lo.bg};

    ${fo.MaxWidth.lg} {
        background-color: transparent;
    }
`,su=H(Hc)`
    margin: 0 0 0 auto;

    color: ${lo.icon};
    &:hover {
        color: ${lo["icon-hover"]};
    }
`,lu=H(Z)`
    height: ${co.Spec["body-size-baseline"]};
    width: ${co.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${uo["duration-350"]} ${uo["ease-standard"]};
`,du=H.h3`
    ${co["heading-xs-semibold"]}
    color: ${lo.text};

    margin: ${go["spacing-24"]} 0 ${go["spacing-24"]}
        ${go["spacing-20"]};

    ${fo.MaxWidth.lg} {
        ${co["body-md-semibold"]}
        color: ${lo["text-subtle"]};

        margin: ${go["spacing-24"]} ${go["spacing-20"]} 0
            ${go["spacing-20"]};
    }
`,cu=Tc(H.div`
    overflow: hidden;
`),uu=H.div`
    padding: ${go["spacing-24"]} ${go["spacing-20"]};
`,hu=Tc(H.div`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`),gu=H(ga.Small)`
    height: fit-content;
    padding: 0;
    margin: ${go["spacing-16"]} 0 0 0;
`,mu=t=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:a,onExpandChange:s,minimisable:l=!1,minimisedHeight:d,showDivider:c=!0,showMobileDivider:u=!0,title:h,addon:g,children:m}=t,b=ce(t,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:p,rootNode:f}=W(Io),y="mobile"===p,[v,x]=B(M()),[w,$]=B(l),F=!y&&i,C=Mr(),E=Mr(),D=yc({height:v?C.height:0}),k=w?null!=d?d:Math.min(.5*(null!==(n=E.height)&&void 0!==n?n:0),216):E.height,S=O(Ie.generate()),A=`${S.current}-content`,_=`${S.current}-title`;T((()=>{x(M())}),[i,a]),T((()=>{$(l)}),[l]);function M(){return!!y||(Ic(a)?!i||o:a)}return r(iu,{$collapsible:F,"aria-labelledby":_,children:[e(ou,{$showDivider:c,$showMobileDivider:u}),(h||F)&&r(au,{children:[h&&r(du,{id:_,"data-testid":"filter-item-title",children:[h," ",g&&("popover"===(null==g?void 0:g.type)?e(nu,{addon:g,rootNode:y?f:void 0}):null)]}),F&&r(su,{"data-testid":"expand-collapse-button",focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!v;Ic(a)&&x(e),s&&s(e)},"aria-expanded":v,"aria-disabled":!F,"aria-controls":A,children:[h&&e($a,{as:"span",children:h}),e(lu,{$expanded:v,"aria-hidden":!0})]})]}),e(cu,{id:A,"data-testid":"expandable-container","data-expanded":v,style:D,inert:Fa(!v),children:e("div",{ref:C.ref,children:r(uu,Object.assign({},b,{children:[e(hu,{"data-testid":"minimisable-container",$height:k,$minimisable:l,children:e("div",{ref:E.ref,children:e("div",{"data-id":"content-container",children:"function"==typeof m?m(p,{minimised:w}):m})})}),l&&r(gu,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{$(!w)},children:[e($a,{as:"span",children:`view ${w?"more":"less"} in ${h}`}),r("span",{"aria-hidden":!0,children:["View ",w?"more":"less"]})]})]}))})})]})};mu.displayName="Filter.Item";const bu=H(mu)`
    padding: 0 0 ${go["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${go["spacing-8"]} ${go["spacing-8"]} 0;

        ${fo.MaxWidth.lg} {
            padding: ${go["spacing-16"]} ${go["spacing-20"]}
                ${go["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${go["spacing-8"]} ${go["spacing-20"]} 0;
    }
`,pu=H.div`
    display: flex;
    flex-direction: column;

    ${fo.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${e=>e.$isMobileToggleMode?go["spacing-16"]:0};
    }
`,fu=H.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${go["spacing-8"]} ${go["spacing-12"]};
    ${e=>e.$level&&Y`
            padding-left: calc(
                ${go["spacing-12"]} + ${e.$level} *
                    ${go["spacing-32"]}
            );
        `}

    cursor: pointer;
    ${co["body-md-regular"]}
    color: ${lo.text};
    ${e=>e.$selected&&Y`
            color: ${lo["text-selected"]};
        `}
    ${fo.MaxWidth.lg} {
        padding: ${go["spacing-8"]};
        ${e=>e.$level&&Y`
                padding-left: calc(
                    ${go["spacing-8"]} + ${e.$level} *
                        ${go["spacing-32"]}
                );
            `}
    }
`,yu=H((t=>{var{className:n,checked:i,disabled:o,indeterminate:a,displaySize:s="default",id:l}=t,d=ce(t,["className","checked","disabled","indeterminate","displaySize","id"]);const c=O(null);T((()=>{c.current&&(c.current.indeterminate=null!=a&&a)}),[a]);return r(xa,{className:n,"data-testid":"checkbox",$displaySize:s,children:[e(wa,Object.assign({id:l,"data-testid":"checkbox-input",type:"checkbox",checked:i,ref:c,tabIndex:o?-1:0,disabled:o,"aria-checked":a?"mixed":i},d)),a?e(va,{$disabled:o,"data-testid":"indeterminate","aria-hidden":!0}):i?e(ya,{$disabled:o,"data-testid":"checkmark","aria-hidden":!0}):o?e(fa,{"data-testid":"empty-disabled-checkbox","aria-hidden":!0}):e(pa,{$disabled:o,"data-testid":"empty-checkbox","aria-hidden":!0})]})}))`
    flex-shrink: 0;
    margin-right: ${go["spacing-8"]};
`,vu=H((n=>{var{type:i="checkbox",indicator:o,checked:a,styleType:s="default",children:l,childrenMaxLines:d,subLabel:c,disabled:u,error:h,name:g,id:m,className:b,compositeSection:p,removable:f,onRemove:y,"data-testid":v,onChange:x,useContentWidth:w,"aria-describedby":$}=n,F=ce(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:C=!0,errors:E,children:D,initialExpanded:k}=p||{},[S,A]=B(a),[_,M]=B(!!k),z=L((()=>{const e=Array.isArray(E)&&(null==E?void 0:E.length)>0,r=!Array.isArray(E)&&!!E;return e||r}),[E]),[j]=B(Ie.generate()),I=m?`${m}`:`tg-${j}`,P=O(null);T((()=>{A(a)}),[a]),T((()=>{S&&M(null==k||k)}),[S]);const R=e=>{if(!u){if(x)return void x(e);switch(i){case"checkbox":A((e=>!e));break;case"radio":case"yes":case"no":S||A(!0)}}},W=()=>{u||M(!_)},H=()=>{u||!y||y()},Y=()=>{var e;null===(e=null==P?void 0:P.current)||void 0===e||e.click()},N=e=>{e.stopPropagation()},V=()=>{let r;switch(i){case"yes":r="tick";break;case"no":r="cross";break;case"checkbox":case"radio":r=i}return e(ss,{type:r,active:S,disabled:u,$selected:S,$disabled:u})},q=()=>{if(!c)return null;let r;return r="function"==typeof c?c():c,e(Ga,{"data-id":"toggle-sublabel",id:`${I}-sublabel`,"aria-hidden":!0,children:r})},Q=n=>r(t,{children:[e(os,{weight:"semibold",$disabled:u,children:"Error"}),e(as,{$disabled:u,children:null==n?void 0:n.map(((r,t)=>e("li",{id:`${I}-error-list-item-${t}`,children:e(os,{weight:"semibold",$disabled:u,children:r})},t)))})]});return r(qa,{$selected:S,$disabled:u,className:b,$styleType:s,$error:h,$indicator:o,$useContentWidth:w,id:m,"data-testid":v,children:[(()=>{const t=["string"==typeof c?`${I}-sublabel`:null,$].filter(Boolean).join(" ")||void 0;return r(Ja,{id:`${I}-header-container`,$disabled:u,$error:h,$selected:S,$indicator:o,$styleType:s,children:[e(Ka,{$addPadding:f,children:r(Ua,{id:`${I}-input-container`,onClick:Y,children:[e(Qa,Object.assign({ref:P,name:g,id:`${I}-input`,type:"checkbox"===i?"checkbox":"radio","data-testid":"toggle-input",disabled:u,onChange:R,onClick:N,checked:S,"aria-describedby":t},F)),o&&V(),r(Za,{$selected:S,$disabled:u,children:[e(Xa,{htmlFor:`${I}-input`,"data-testid":"toggle-label",id:`${I}-label`,$maxLines:d,children:l}),c&&q()]})]})}),f&&e(es,{type:"button",$disabled:u,onClick:H,id:`${I}-remove-button`,children:"Remove"})]})})(),D&&r("div",{children:[(!C||_)&&e(is,{"data-id":"toggle-composite-children",$isFinalItem:!C,$disabled:u,children:D}),C&&!_&&z&&e(ts,{$disabled:u,onClick:W,id:`${I}-error-alert`,children:e(ns,{type:u?"description":"error",className:b,showIcon:!0,children:Array.isArray(E)?Q(E):E})}),C&&r(rs,{$paddingTopRequired:!_&&!z,disabled:u,onClick:W,"data-testid":_?"collapse-button":"expand-button",children:[_?"Show less":"Show more",e(_?X:Z,{"aria-hidden":!0})]})]})]})}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
    min-width: 5rem;
`,xu=H(ga.Small)`
    height: fit-content;
    padding: 0;
    margin: ${go["spacing-16"]} 0 ${go["spacing-8"]}
        ${go["spacing-12"]};

    ${fo.MaxWidth.lg} {
        margin: 0 0 ${go["spacing-16"]} 0;
    }
`,wu=n=>{var{selectedOptions:i,options:o,showAsCheckboxInMobile:a=!1,minimisableOptions:s=!0,onSelect:l,labelExtractor:d,valueExtractor:c,useToggleContentWidth:u}=n,h=ce(n,["selectedOptions","options","showAsCheckboxInMobile","minimisableOptions","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:g}=W(Io),[m,b]=B(i||[]),[p,f]=B(),[y,v]=B(o.length),x=O(null),w=O(null),$=L((()=>((e,r)=>e.some((e=>{const t=r?r(e):e.options;return t&&t.length>0})))(o,(e=>e.options))),[o]),F="mobile"===g&&!a&&!$,C=L((()=>Lo(o,[],c||(e=>e.value),d||(e=>e.label))),[o,c,d]),E=C.length,D=e=>()=>{const r=C.find((r=>r.originalItem===e));if(r)if(r.hasChildren){const e=((e,r)=>{const t=Po(r),n=[],i=e.findIndex((e=>Po(e.keyPath)===t));if(-1===i)return n;for(let t=i+1;t<e.length;t++){const i=e[t];if(!Ro(r,i.keyPath))break;i.hasChildren||n.push(i.originalItem)}return n})(C,r.keyPath),t=e.filter((e=>m.some((r=>z(r)===z(e)))));let n=[...m];t.length===e.length?n=n.filter((r=>!e.some((e=>z(e)===z(r))))):e.forEach((e=>{n.some((r=>z(r)===z(e)))||n.push(e)})),b(n),null==l||l(n)}else{const r=[...m],t=m.findIndex((r=>z(r)===z(e)));t>=0?r.splice(t,1):r.push(e),b(r),null==l||l(r)}},k=()=>{if($)if(m.length>0)b([]),null==l||l([]);else{const e=C.filter((e=>!e.hasChildren)).map((e=>e.originalItem));b(e),null==l||l(e)}else{const e=m.length?[]:o;b(e),null==l||l(e)}},S=e=>r=>{!$||" "!==r.key&&"Enter"!==r.key||(r.preventDefault(),D(e)())},A=e=>()=>{$||D(e)()},_=e=>{if(!e.hasChildren)return{checked:m.some((r=>z(r)===z(e.originalItem))),indeterminate:!1};const r=((e,r)=>e.filter((e=>Ro(r,e.keyPath))).map((e=>e.keyPath)))(C,e.keyPath).map((e=>C.find((r=>Po(r.keyPath)===Po(e))))).filter((e=>e&&!e.hasChildren)).map((e=>e.originalItem)),t=r.filter((e=>m.some((r=>z(r)===z(e)))));return{checked:t.length===r.length&&r.length>0,indeterminate:t.length>0&&t.length<r.length}},M=e=>{var r;return d?d(e):null!==(r=e.label)&&void 0!==r?r:null==e?void 0:e.toString()},z=e=>{var r;return c?c(e):null!==(r=e.value)&&void 0!==r?r:null==e?void 0:e.toString()},j=()=>{const e=w.current?w.current.offsetTop+w.current.clientHeight:void 0;f(e)},I=P((()=>{if(!x.current)return void f(void 0);const e=Array.from(x.current.children);let r=0,t=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(t++,n=o,t>2))break;r=i}v(r),f(t>2?n-8:void 0)}),[]);T((()=>{i!==m&&b(i||[])}),[i]),T((()=>{F?I():j()}),[o]),Mr({handleWidth:!0,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:x,onResize:F?I:j});const R=(r,t)=>{const{checked:n,indeterminate:i}=_(t);return e(yu,{displaySize:"small",checked:n,indeterminate:i,onChange:A(r),tabIndex:$?-1:void 0,"aria-hidden":$?"true":void 0})},H=()=>{var r;return E<3?null:e(xu,{styleType:"link",type:"button",onClick:k,"aria-label":m.length?"Clear all selections":`Select all in ${(null===(r=x.current)||void 0===r?void 0:r.ariaLabel)||"this group"}`,children:m.length?"Clear all":"Select all"})};return e(bu,Object.assign({minimisable:!!s&&(F?!!p:E>5),minimisedHeight:p},h,{children:(n,{minimised:i})=>r(t,{children:[H(),e(pu,{role:$?"tree":"group","aria-label":h.title,"aria-multiselectable":!0,ref:x,$isMobileToggleMode:F,children:C.map(((t,n)=>F?((r,t,n)=>{const i=r.originalItem,o=M(i),a=z(i),s=!!m.find((e=>z(e)===a));return e(vu,{type:"checkbox",checked:s,$visible:!n||!!p&&t<=y,onChange:D(i),useContentWidth:u,children:o},a)})(t,n,i):((e,t,n)=>{const i=e.originalItem,o=M(i),{checked:a,indeterminate:s}=_(e),l=a||s,d=!n||t<5,c=$?{"aria-checked":s?"mixed":a,"aria-selected":!!a,"aria-level":e.level+1,"aria-posinset":e.indexInParent+1,"aria-setsize":e.parentSetSize}:{};return r(fu,Object.assign({as:$?"div":"label",role:$?"treeitem":void 0},c,{onClick:$?D(i):void 0,onKeyDown:S(i),tabIndex:$?0:void 0,$visible:d,$selected:l,$level:e.level,ref:4===t?w:void 0,children:[R(i,e),o]}),Po(e.keyPath))})(t,n,i)))})]})}))};wu.displayName="Filter.Checkbox";const $u=H.div`
    background-color: ${lo.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Fu=H(la)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Cu=(t,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:d="left",loading:c=!1,focusableWhenDisabled:u=!1,onClick:h}=t,g=ce(t,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),m={$buttonIconPosition:d,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return r(Fu,Object.assign({ref:n,"data-testid":g["data-testid"]||"button-with-icon",disabled:o&&!u,"aria-disabled":o,"aria-busy":c,onClick:o?void 0:h},m,g,{children:[c?e(Qo,{}):l?S.cloneElement(l,{"aria-hidden":!0}):null,e("span",{children:i})]}))};Cu.displayName="ButtonWithIcon.Default";const Eu=(t,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:d="left",loading:c=!1,focusableWhenDisabled:u=!1,onClick:h}=t,g=ce(t,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),m={$buttonIconPosition:d,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return r(Fu,Object.assign({ref:n,"data-testid":g["data-testid"]||"button-with-icon",disabled:o&&!u,"aria-disabled":o,"aria-busy":c,onClick:o?void 0:h},m,g,{children:[c?e(Qo,{}):l?S.cloneElement(l,{"aria-hidden":!0}):null,e("span",{children:i})]}))};Eu.displayName="ButtonWithIcon.Small";const Du={Default:S.forwardRef(Cu),Small:S.forwardRef(Eu)},ku=H.div`
    background-color: ${lo.bg};
    border: ${ho["width-010"]} ${ho.solid} ${lo.border};
    border-radius: ${mo.md};
    overflow: hidden;
    width: 100%;
`,Su=H.div`
    background-color: ${lo["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Au=H.div`
    background-color: ${lo.bg};
    height: 100%;
    width: 100%;
`,Ou=H.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,Bu=H.div`
    height: 100%;
`,_u=H.div`
    display: flex;
    align-items: center;

    background-color: ${lo.bg};

    ${e=>e.$insetTop&&`padding-top: ${e.$insetTop}px;`}

    ${fo.MaxWidth.lg} {
        border-bottom: ${ho["width-010"]} ${ho.solid}
            ${lo.border};
    }
`,Mu=H.h2`
    ${co["heading-xs-semibold"]}
    flex: 1;
    margin: ${go["spacing-24"]} 0 ${go["spacing-24"]}
        ${go["spacing-20"]};

    ${fo.MaxWidth.lg} {
        text-align: center;
        margin: ${go["spacing-24"]} 0;
    }
`,zu=H(Hc)`
    padding: ${go["spacing-24"]} ${go["spacing-20"]};
    margin-right: auto;
    color: ${lo.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${lo["icon-hover"]};
    }
`,ju=H(ga.Small)`
    background-color: transparent;
    padding-right: ${go["spacing-20"]};
    padding-left: ${go["spacing-20"]};
    height: 100%;

    ${fo.MaxWidth.lg} {
        padding: ${go["spacing-24"]} ${go["spacing-20"]};
    }
`,Tu=H(Du.Default)`
    width: 100%;
`,Iu=H.div`
    padding: ${go["spacing-24"]} ${go["spacing-20"]};
    background-color: ${lo.bg};
    border-top: ${ho["width-010"]} ${ho.solid} ${lo.border};
    ${e=>e.$insetBottom&&`padding-bottom: ${e.$insetBottom}px;`}
`,Pu=H(ga.Default)`
    width: 100%;
`,Lu=({onDismiss:t,onDone:n,children:i})=>r($u,{children:[e(zu,{onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(de,{})}),e(Ou,{children:i}),e(Iu,{children:e(Pu,{onClick:n,type:"button",children:"Done"})})]});Lu.displayName="Filter.Page";const Ru=n=>{var{customLabels:i,toggleFilterButtonLabel:o,headerTitle:a,doneButtonLabel:l,toggleFilterButtonStyle:d="light",clearButtonDisabled:c=!1,onClear:u,onDismiss:h,onDone:g,onModalOpen:m,children:b,_dangerouslyForceMobile:p,insets:f}=n,y=ce(n,["customLabels","toggleFilterButtonLabel","headerTitle","doneButtonLabel","toggleFilterButtonStyle","clearButtonDisabled","onClear","onDismiss","onDone","onModalOpen","children","_dangerouslyForceMobile","insets"]);const x=(null==i?void 0:i.toggleFilterButtonLabel)||o||"Filters",w=(null==i?void 0:i.headerTitle)||a||"Filters",$=(null==i?void 0:i.doneButtonLabel)||l||"Done",F=(null==i?void 0:i.clearButtonLabel)||"Clear",[C,k]=B(!1),S=O(null),A=O(null),_=W(V),M=po["lg-max"]({theme:_}),z=be.useMediaQuery({maxWidth:M}),j=p||z,{context:I,refs:P}=s();T((()=>{j||R()}),[j]),T((()=>{var e;C&&j&&(null===(e=S.current)||void 0===e||e.focus())}),[C,j]);const L=()=>{k(!0),null==m||m()},R=()=>{k(!1),h&&h()},H=()=>{k(!1),g&&g()},Y=()=>{u&&u()},N=e=>"function"==typeof b?b(e):b,q=t=>r(_u,{$insetTop:null==f?void 0:f.top,children:["mobile"===t&&e(zu,{onClick:R,focusOutline:"browser",focusHighlight:!1,"aria-label":`close ${w}`,children:e(D,{})}),e(Mu,{children:w}),e(ju,{styleType:"link",type:"button",onClick:Y,disabled:c,"aria-label":`clear ${w}`,children:F})]});return e("div",Object.assign({},y,{children:e(Io.Provider,j?{value:{mode:"mobile",rootNode:S},children:r(t,{children:[e(Tu,{"data-testid":"filter-show-button",styleType:d,onClick:L,type:"button",icon:e(E,{}),children:x}),e(_o,{show:C,disableTransition:!0,children:e(Bu,{inert:Fa(!C),children:e(v,{context:I,initialFocus:-1,disabled:!C,children:e(Au,{"data-id":"filter-mobile","data-testid":"filter-mobile",ref:P.setFloating,children:r(Su,{ref:S,tabIndex:0,children:[q("mobile"),e(Ou,{children:N("mobile")}),e(Iu,{$insetBottom:null==f?void 0:f.bottom,children:e(Pu,{onClick:H,type:"button",children:$})})]})})})})})]})}:{value:{mode:"default",rootNode:A},children:r(ku,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:A,children:[q("default"),N("default")]})})}))};Ru.displayName="Filter";const Wu=Object.assign(Ru,{Item:mu,Page:Lu,Checkbox:wu});export{Wu as Filter};
//# sourceMappingURL=index.js.map
