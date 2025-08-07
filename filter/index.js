import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import{SquareIcon as n,SquareFillIcon as i,SquareTickFillIcon as o,MinusSquareFillIcon as s,ChevronDownIcon as a,FilterIcon as l,CrossIcon as d}from"@lifesg/react-icons";import*as c from"react";import u,{useRef as h,useState as g,isValidElement as b,createRef as m,cloneElement as p,PureComponent as f,useEffect as y,useLayoutEffect as v,useMemo as x,forwardRef as w,useCallback as $,useContext as F,version as C}from"react";import E,{css as D,keyframes as k,useTheme as S}from"styled-components";import{useFloatingTree as O,FloatingTree as _,useFloatingNodeId as A,FloatingNode as B,useFloating as M,autoUpdate as z,offset as j,flip as T,shift as I,limitShift as P,size as R,useClick as L,useDismiss as W,useHover as H,useInteractions as Y,FloatingPortal as N,FloatingFocusManager as V}from"@floating-ui/react";import q,{findDOMNode as Q,unstable_batchedUpdates as U}from"react-dom";import{ChevronDownIcon as Z}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as X}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as G}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as J}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as K}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as ee}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as re}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as te}from"@lifesg/react-icons/external";import{CircleIcon as ne}from"@lifesg/react-icons/circle";import{CircleDotIcon as ie}from"@lifesg/react-icons/circle-dot";import{CrossIcon as oe}from"@lifesg/react-icons/cross";import{SquareIcon as se}from"@lifesg/react-icons/square";import{SquareTickFillIcon as ae}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as le}from"@lifesg/react-icons/tick";import{ChevronLeftIcon as de}from"@lifesg/react-icons/chevron-left";function ce(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var ue="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function he(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ge,be={exports:{}};ge=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
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
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,f=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var g=e.type;switch(g){case d:case c:case i:case s:case o:case h:return g;default:var p=g&&g.$$typeof;switch(p){case l:case u:case m:case b:case a:return p;default:return r}}case n:return r}}}var w=d,$=c,F=l,C=a,E=t,D=u,k=i,S=m,O=b,_=n,A=s,B=o,M=h,z=!1;function j(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=$,r.ContextConsumer=F,r.ContextProvider=C,r.Element=E,r.ForwardRef=D,r.Fragment=k,r.Lazy=S,r.Memo=O,r.Portal=_,r.Profiler=A,r.StrictMode=B,r.Suspense=M,r.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===d},r.isConcurrentMode=j,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===a},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===m},r.isMemo=function(e){return x(e)===b},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===s},r.isStrictMode=function(e){return x(e)===o},r.isSuspense=function(e){return x(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===s||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===b||e.$$typeof===a||e.$$typeof===l||e.$$typeof===u||e.$$typeof===f||e.$$typeof===y||e.$$typeof===v||e.$$typeof===p)},r.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var me=be.exports=ge(u),pe={exports:{}};pe.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,s=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!n&&i&&(v=i),i||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===g)},f.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return C(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<C(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),g=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(a)},b=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return g(n?f-x:f+(6-x),p);case a:case h:return b(y+"Hours",0);case s:return b(y+"Minutes",1);case o:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[a]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[g](b),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else g&&this.$d[g](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var h,g=this;n=Number(n);var b=E.p(c),m=function(e){var r=C(g);return E.w(r.date(r.date()+Math.round(e*n)),g)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===a)return m(1);if(b===l)return m(7);var p=(h={},h[o]=r,h[s]=t,h[i]=e,h)[b]||1,f=this.$d.getTime()+n*p;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,s=this.$m,a=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(t.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return b(o,s,!0);case"A":return b(o,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,g){var b,m=this,p=E.p(h),f=C(n),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(m,f)};switch(p){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-y)/6048e5;break;case a:b=(v-y)/864e5;break;case s:b=v/t;break;case o:b=v/r;break;case i:b=v/e;break;default:b=v}return g?b:E.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),k=D.prototype;return C.prototype=k,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var fe=he(pe.exports),ye={exports:{}};ye.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[t,a("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[t,a("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<a;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,b=s||(i||o?1:g.getDate()),m=i||g.getFullYear(),p=0;i&&!o||(p=o>0?o-1:g.getMonth());var f=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,p,b,f,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,p,b,f,y,v,x)):new Date(m,p,b,f,y,v,x)}catch(e){return new Date("")}}(r,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var g=a.length,b=1;b<=g;b+=1){s[1]=a[b-1];var m=t.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ve=he(ye.exports),xe={exports:{}};xe.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),s=t(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var we=he(xe.exports),$e={exports:{}};$e.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Fe=he($e.exports),Ce={exports:{}};Ce.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Ee,De,ke,Se=he(Ce.exports),Oe={exports:{}},_e=he(Oe.exports=(Ee={year:0,month:1,day:2,hour:3,minute:4,second:5},De={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=De[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),De[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Ee[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",b=+e;return(t.utc(g).valueOf()-(b-=b%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,a=i||r||n,l=o(+t(),a);if("string"!=typeof e)return t(e).tz(a);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var s=o(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=a,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));fe.extend(we),fe.extend(Se),fe.extend(Fe),fe.extend(ve),fe.extend(_e),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=fe(r).startOf("week");return Ae(t).map((e=>Be(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Be(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(fe(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+fe(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=fe(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?fe(n):void 0,i?fe(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(ke||(ke={}));const Ae=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Be=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Me=[1,3,5,7,8,10,12],ze=[4,6,9,11];var je,Te,Ie,Pe;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),s=parseInt(n);return 0==i?"1":Me.includes(o)?Math.min(i,31).toString():ze.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=fe(e,t);return fe(r,t).diff(n,"minute")},e.toDayjs=e=>e?fe(e):fe(),e.addMinutesToTime=(e,r,t="HH:mm")=>fe(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>fe(e).isSame(fe(r),t)}(je||(je={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!fe(e).isBefore(n,"day"))||!(!i||!fe(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(fe(e).isValid())return e}return""}}(Te||(Te={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ie||(Ie={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const s=n+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=t;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(Pe||(Pe={}));var Re=function(e,r){return Re=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Re(e,r)};var Le=function(){return Le=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Le.apply(this,arguments)};var We="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var He=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Ye="object"==typeof We&&We&&We.Object===Object&&We,Ne="object"==typeof self&&self&&self.Object===Object&&self,Ve=Ye||Ne||Function("return this")(),qe=Ve,Qe=function(){return qe.Date.now()},Ue=/\s/;var Ze=function(e){for(var r=e.length;r--&&Ue.test(e.charAt(r)););return r},Xe=/^\s+/;var Ge=function(e){return e?e.slice(0,Ze(e)+1).replace(Xe,""):e},Je=Ve.Symbol,Ke=Je,er=Object.prototype,rr=er.hasOwnProperty,tr=er.toString,nr=Ke?Ke.toStringTag:void 0;var ir=function(e){var r=rr.call(e,nr),t=e[nr];try{e[nr]=void 0;var n=!0}catch(e){}var i=tr.call(e);return n&&(r?e[nr]=t:delete e[nr]),i},or=Object.prototype.toString;var sr=ir,ar=function(e){return or.call(e)},lr=Je?Je.toStringTag:void 0;var dr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":lr&&lr in Object(e)?sr(e):ar(e)},cr=function(e){return null!=e&&"object"==typeof e};var ur=Ge,hr=He,gr=function(e){return"symbol"==typeof e||cr(e)&&"[object Symbol]"==dr(e)},br=/^[-+]0x[0-9a-f]+$/i,mr=/^0b[01]+$/i,pr=/^0o[0-7]+$/i,fr=parseInt;var yr=He,vr=Qe,xr=function(e){if("number"==typeof e)return e;if(gr(e))return NaN;if(hr(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=hr(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ur(e);var t=mr.test(e);return t||pr.test(e)?fr(e.slice(2),t?2:8):br.test(e)?NaN:+e},wr=Math.max,$r=Math.min;var Fr=function(e,r,t){var n,i,o,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=n,o=i;return n=i=void 0,d=r,s=e.apply(o,t)}function b(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function m(){var e=vr();if(b(e))return p(e);a=setTimeout(m,function(e){var t=r-(e-l);return u?$r(t,o-(e-d)):t}(e))}function p(e){return a=void 0,h&&n?g(e):(n=i=void 0,s)}function f(){var e=vr(),t=b(e);if(n=arguments,i=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(m,r),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,r),g(l)}return void 0===a&&(a=setTimeout(m,r)),s}return r=xr(r)||0,yr(t)&&(c=!!t.leading,o=(u="maxWait"in t)?wr(xr(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),f.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},f.flush=function(){return void 0===a?s:p(vr())},f},Cr=Fr,Er=He;var Dr=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Er(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),Cr(e,r,{leading:n,maxWait:r,trailing:i})},kr=function(e,r,t,n){switch(r){case"debounce":return Fr(e,t,n);case"throttle":return Dr(e,t,n);default:return e}},Sr=function(e){return"function"==typeof e},Or=function(){return"undefined"==typeof window},_r=function(e){return e instanceof Element||e instanceof HTMLDocument},Ar=function(e,r,t,n){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!n||r.height===s&&!t?r:(e&&Sr(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Or()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Or())return null;if(r)return document.querySelector(r);if(n&&_r(n))return n;if(t.targetRef&&_r(t.targetRef.current))return t.targetRef.current;var i=Q(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=Ar(a,t.setState.bind(t),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Or()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Sr(r)?"renderProp":Sr(n)?"childFunction":b(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=m(),t.observableElement=null,Or()||(t.resizeHandler=kr(t.createResizeHandler,i,s,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Re(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Or()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,n=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,a={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(a);case"childFunction":return(e=n)(a);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(a,["targetRef"]);return p(e,l)}return p(e,a);case"childArray":return(e=n).map((function(e){return!!e&&p(e,a)}));default:return c.createElement(o,null)}}}(f);var Br=Or()?y:v;function Mr(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,s=e.refreshOptions,a=e.handleWidth,l=void 0===a||a,d=e.handleHeight,c=void 0===d||d,u=e.targetRef,b=e.observerOptions,m=e.onResize,p=h(t),f=h(null),y=null!=u?u:f,v=h(),x=g({width:void 0,height:void 0}),w=x[0],$=x[1];return Br((function(){if(!Or()){var e=Ar(m,$,l,c);v.current=kr((function(r){(l||c)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!Or()&&e({width:n,height:i}),p.current=!1}))}),n,o,s);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,s,l,c,m,b,y.current]),Le({ref:y},w)}var zr=Array.isArray,jr="object"==typeof ue&&ue&&ue.Object===Object&&ue,Tr="object"==typeof self&&self&&self.Object===Object&&self,Ir=jr||Tr||Function("return this")(),Pr=Ir.Symbol,Rr=Pr,Lr=Object.prototype,Wr=Lr.hasOwnProperty,Hr=Lr.toString,Yr=Rr?Rr.toStringTag:void 0;var Nr=function(e){var r=Wr.call(e,Yr),t=e[Yr];try{e[Yr]=void 0;var n=!0}catch(e){}var i=Hr.call(e);return n&&(r?e[Yr]=t:delete e[Yr]),i},Vr=Object.prototype.toString;var qr=Nr,Qr=function(e){return Vr.call(e)},Ur=Pr?Pr.toStringTag:void 0;var Zr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ur&&Ur in Object(e)?qr(e):Qr(e)};var Xr=Zr,Gr=function(e){return null!=e&&"object"==typeof e};var Jr=function(e){return"symbol"==typeof e||Gr(e)&&"[object Symbol]"==Xr(e)},Kr=zr,et=Jr,rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tt=/^\w*$/;var nt=function(e,r){if(Kr(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!et(e))||(tt.test(e)||!rt.test(e)||null!=r&&e in Object(r))};var it=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ot=Zr,st=it;var at,lt=function(e){if(!st(e))return!1;var r=ot(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},dt=Ir["__core-js_shared__"],ct=(at=/[^.]+$/.exec(dt&&dt.keys&&dt.keys.IE_PROTO||""))?"Symbol(src)_1."+at:"";var ut=function(e){return!!ct&&ct in e},ht=Function.prototype.toString;var gt=lt,bt=ut,mt=it,pt=function(e){if(null!=e){try{return ht.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ft=/^\[object .+?Constructor\]$/,yt=Function.prototype,vt=Object.prototype,xt=yt.toString,wt=vt.hasOwnProperty,$t=RegExp("^"+xt.call(wt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ft=function(e,r){return null==e?void 0:e[r]},Ct=function(e){return!(!mt(e)||bt(e))&&(gt(e)?$t:ft).test(pt(e))},Et=Ft;var Dt=function(e,r){var t=Et(e,r);return Ct(t)?t:void 0},kt=Dt(Object,"create"),St=kt;var Ot=function(){this.__data__=St?St(null):{},this.size=0};var _t=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},At=kt,Bt=Object.prototype.hasOwnProperty;var Mt=function(e){var r=this.__data__;if(At){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Bt.call(r,e)?r[e]:void 0},zt=kt,jt=Object.prototype.hasOwnProperty;var Tt=function(e){var r=this.__data__;return zt?void 0!==r[e]:jt.call(r,e)},It=kt;var Pt=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=It&&void 0===r?"__lodash_hash_undefined__":r,this},Rt=Ot,Lt=_t,Wt=Mt,Ht=Tt,Yt=Pt;function Nt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Nt.prototype.clear=Rt,Nt.prototype.delete=Lt,Nt.prototype.get=Wt,Nt.prototype.has=Ht,Nt.prototype.set=Yt;var Vt=Nt;var qt=function(){this.__data__=[],this.size=0};var Qt=function(e,r){return e===r||e!=e&&r!=r};var Ut=function(e,r){for(var t=e.length;t--;)if(Qt(e[t][0],r))return t;return-1},Zt=Ut,Xt=Array.prototype.splice;var Gt=function(e){var r=this.__data__,t=Zt(r,e);return!(t<0)&&(t==r.length-1?r.pop():Xt.call(r,t,1),--this.size,!0)},Jt=Ut;var Kt=function(e){var r=this.__data__,t=Jt(r,e);return t<0?void 0:r[t][1]},en=Ut;var rn=function(e){return en(this.__data__,e)>-1},tn=Ut;var nn=function(e,r){var t=this.__data__,n=tn(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},on=qt,sn=Gt,an=Kt,ln=rn,dn=nn;function cn(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}cn.prototype.clear=on,cn.prototype.delete=sn,cn.prototype.get=an,cn.prototype.has=ln,cn.prototype.set=dn;var un=cn,hn=Dt(Ir,"Map"),gn=Vt,bn=un,mn=hn;var pn=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var fn=function(e,r){var t=e.__data__;return pn(r)?t["string"==typeof r?"string":"hash"]:t.map},yn=fn;var vn=function(e){var r=yn(this,e).delete(e);return this.size-=r?1:0,r},xn=fn;var wn=function(e){return xn(this,e).get(e)},$n=fn;var Fn=function(e){return $n(this,e).has(e)},Cn=fn;var En=function(e,r){var t=Cn(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Dn=function(){this.size=0,this.__data__={hash:new gn,map:new(mn||bn),string:new gn}},kn=vn,Sn=wn,On=Fn,_n=En;function An(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}An.prototype.clear=Dn,An.prototype.delete=kn,An.prototype.get=Sn,An.prototype.has=On,An.prototype.set=_n;var Bn=An;function Mn(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Mn.Cache||Bn),t}Mn.Cache=Bn;var zn=Mn;var jn=function(e){var r=zn(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,In=/\\(\\)?/g,Pn=jn((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Tn,(function(e,t,n,i){r.push(n?i.replace(In,"$1"):t||e)})),r}));var Rn=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Ln=zr,Wn=Jr,Hn=Pr?Pr.prototype:void 0,Yn=Hn?Hn.toString:void 0;var Nn=function e(r){if("string"==typeof r)return r;if(Ln(r))return Rn(r,e)+"";if(Wn(r))return Yn?Yn.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Vn=Nn;var qn=zr,Qn=nt,Un=Pn,Zn=function(e){return null==e?"":Vn(e)};var Xn=Jr;var Gn=function(e,r){return qn(e)?e:Qn(e,r)?[e]:Un(Zn(e))},Jn=function(e){if("string"==typeof e||Xn(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Kn=function(e,r){for(var t=0,n=(r=Gn(r,e)).length;null!=e&&t<n;)e=e[Jn(r[t++])];return t&&t==n?e:void 0};var ei=he((function(e,r,t){var n=null==e?void 0:Kn(e,r);return void 0===n?t:n}));const ri=(e,r,t)=>ei(t,r)||ei(e,r),ti=(e,r)=>{const t=r||e.defaultValue;return ei(e.collections,t)},ni={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ii=e=>r=>{var t;const n=r.theme,i=ti(ni,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ri(i,e,n.overrides.border)}px`:`${i[e]}px`},oi={"width-005":ii("width-005"),"width-010":ii("width-010"),"width-020":ii("width-020"),"width-040":ii("width-040"),solid:(si="solid",e=>{var r;const t=e.theme,n=ti(ni,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ri(n,si,t.overrides.border):n[si];return"function"==typeof i?i(e):i})};var si;const ai={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},li={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},di={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ci={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ui={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},hi={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},gi={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bi={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mi={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pi={collections:{lifesg:di,bookingsg:ai,rbs:gi,mylegacy:ci,ccube:li,oneservice:ui,pa:hi,a11yplayground:bi,supportgowhere:mi},defaultValue:"lifesg"},fi={collections:{lifesg:di,bookingsg:ai,rbs:gi,mylegacy:ci,ccube:li,oneservice:ui,pa:hi,a11yplayground:bi,supportgowhere:mi},defaultValue:"lifesg"},yi=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=ti(i?fi:pi,null==n?void 0:n.colourScheme),s=i?"primitiveColourDark":"primitiveColour",a=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s];return a?ri(o,e,a):o[e]},vi={"brand-10":yi("brand-10"),"brand-20":yi("brand-20"),"brand-30":yi("brand-30"),"brand-40":yi("brand-40"),"brand-50":yi("brand-50"),"brand-60":yi("brand-60"),"brand-70":yi("brand-70"),"brand-80":yi("brand-80"),"brand-90":yi("brand-90"),"brand-95":yi("brand-95"),"brand-100":yi("brand-100"),"primary-10":yi("primary-10"),"primary-20":yi("primary-20"),"primary-30":yi("primary-30"),"primary-40":yi("primary-40"),"primary-50":yi("primary-50"),"primary-60":yi("primary-60"),"primary-70":yi("primary-70"),"primary-80":yi("primary-80"),"primary-90":yi("primary-90"),"primary-95":yi("primary-95"),"primary-100":yi("primary-100"),"secondary-10":yi("secondary-10"),"secondary-20":yi("secondary-20"),"secondary-30":yi("secondary-30"),"secondary-40":yi("secondary-40"),"secondary-50":yi("secondary-50"),"secondary-60":yi("secondary-60"),"secondary-70":yi("secondary-70"),"secondary-80":yi("secondary-80"),"secondary-90":yi("secondary-90"),"secondary-95":yi("secondary-95"),"secondary-100":yi("secondary-100"),"neutral-10":yi("neutral-10"),"neutral-20":yi("neutral-20"),"neutral-30":yi("neutral-30"),"neutral-40":yi("neutral-40"),"neutral-50":yi("neutral-50"),"neutral-60":yi("neutral-60"),"neutral-70":yi("neutral-70"),"neutral-80":yi("neutral-80"),"neutral-90":yi("neutral-90"),"neutral-95":yi("neutral-95"),"neutral-100":yi("neutral-100"),"success-10":yi("success-10"),"success-20":yi("success-20"),"success-30":yi("success-30"),"success-40":yi("success-40"),"success-50":yi("success-50"),"success-60":yi("success-60"),"success-70":yi("success-70"),"success-80":yi("success-80"),"success-90":yi("success-90"),"success-95":yi("success-95"),"success-100":yi("success-100"),"warning-10":yi("warning-10"),"warning-20":yi("warning-20"),"warning-30":yi("warning-30"),"warning-40":yi("warning-40"),"warning-50":yi("warning-50"),"warning-60":yi("warning-60"),"warning-70":yi("warning-70"),"warning-80":yi("warning-80"),"warning-90":yi("warning-90"),"warning-95":yi("warning-95"),"warning-100":yi("warning-100"),"error-10":yi("error-10"),"error-20":yi("error-20"),"error-30":yi("error-30"),"error-40":yi("error-40"),"error-50":yi("error-50"),"error-60":yi("error-60"),"error-70":yi("error-70"),"error-80":yi("error-80"),"error-90":yi("error-90"),"error-95":yi("error-95"),"error-100":yi("error-100"),"info-10":yi("info-10"),"info-20":yi("info-20"),"info-30":yi("info-30"),"info-40":yi("info-40"),"info-50":yi("info-50"),"info-60":yi("info-60"),"info-70":yi("info-70"),"info-80":yi("info-80"),"info-90":yi("info-90"),"info-95":yi("info-95"),"info-100":yi("info-100"),white:yi("white"),black:yi("black"),"primary-inverse":yi("primary-inverse")},xi={text:yi("neutral-20"),"text-subtle":yi("neutral-30"),"text-subtler":yi("neutral-50"),"text-subtlest":yi("neutral-60"),"text-primary":yi("primary-50"),"text-hover":yi("primary-40"),"text-selected":yi("primary-50"),"text-selected-hover":yi("primary-40"),"text-disabled":yi("neutral-50"),"text-disabled-subtle":yi("neutral-60"),"text-disabled-subtlest":yi("neutral-80"),"text-selected-disabled":yi("neutral-20"),"text-success":yi("success-40"),"text-warning":yi("warning-40"),"text-error":yi("error-40"),"text-info":yi("info-40"),"text-inverse":yi("white"),icon:yi("neutral-50"),"icon-subtle":yi("neutral-60"),"icon-strongest":yi("neutral-20"),"icon-primary":yi("primary-50"),"icon-primary-subtle":yi("primary-60"),"icon-primary-subtlest":yi("primary-70"),"icon-hover":yi("primary-40"),"icon-selected":yi("primary-50"),"icon-selected-hover":yi("primary-40"),"icon-disabled":yi("neutral-50"),"icon-disabled-subtle":yi("neutral-60"),"icon-selected-disabled":yi("neutral-60"),"icon-success":yi("success-50"),"icon-warning":yi("warning-60"),"icon-error":yi("error-50"),"icon-error-strong":yi("error-40"),"icon-info":yi("info-50"),"icon-inverse":yi("white"),"icon-primary-inverse":yi("primary-inverse"),border:yi("neutral-90"),"border-strong":yi("neutral-70"),"border-stronger":yi("neutral-50"),"border-primary":yi("primary-50"),"border-primary-subtle":yi("primary-60"),"border-hover":yi("primary-90"),"border-hover-strong":yi("primary-60"),"border-selected":yi("primary-50"),"border-selected-subtle":yi("primary-70"),"border-selected-subtlest":yi("primary-90"),"border-selected-hover":yi("primary-40"),"border-focus":yi("primary-60"),"border-focus-strong":yi("primary-50"),"border-disabled":yi("neutral-90"),"border-selected-disabled":yi("neutral-70"),"border-success":yi("success-60"),"border-warning":yi("warning-60"),"border-error":yi("error-60"),"border-error-focus":yi("error-60"),"border-error-focus-strong":yi("error-40"),"border-error-strong":yi("error-40"),"border-info":yi("info-60"),bg:yi("white"),"bg-strong":yi("neutral-100"),"bg-stronger":yi("neutral-95"),"bg-strongest":yi("neutral-90"),"bg-hover":yi("primary-95"),"bg-hover-strong":yi("primary-90"),"bg-hover-subtle":yi("primary-100"),"bg-hover-neutral":yi("neutral-100"),"bg-hover-neutral-strong":yi("neutral-90"),"bg-selected":yi("primary-95"),"bg-selected-hover":yi("primary-90"),"bg-selected-strong":yi("primary-90"),"bg-selected-stronger":yi("primary-70"),"bg-selected-strongest":yi("primary-50"),"bg-selected-strongest-hover":yi("primary-40"),"bg-disabled":yi("neutral-95"),"bg-selected-disabled":yi("neutral-95"),"bg-selected-stronger-disabled":yi("neutral-70"),"bg-success":yi("success-100"),"bg-success-hover":yi("success-95"),"bg-success-strong":yi("success-50"),"bg-success-strong-hover":yi("success-40"),"bg-warning":yi("warning-100"),"bg-warning-hover":yi("warning-95"),"bg-warning-strong":yi("warning-50"),"bg-warning-strong-hover":yi("warning-40"),"bg-info":yi("info-100"),"bg-info-hover":yi("info-95"),"bg-info-strong":yi("info-50"),"bg-info-strong-hover":yi("info-40"),"bg-error":yi("error-100"),"bg-error-hover":yi("error-95"),"bg-error-strong":yi("error-50"),"bg-error-strong-hover":yi("error-40"),"bg-inverse":yi("neutral-20"),"bg-inverse-subtle":yi("neutral-30"),"bg-inverse-subtler":yi("neutral-50"),"bg-inverse-subtlest":yi("neutral-60"),"bg-inverse-hover":yi("neutral-40"),"bg-primary":yi("primary-50"),"bg-primary-subtle":yi("primary-60"),"bg-primary-subtler":yi("primary-95"),"bg-primary-subtlest":yi("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":yi("primary-40"),"bg-primary-subtlest-hover":yi("primary-90"),"bg-primary-subtlest-selected":yi("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:yi("primary-50"),"hyperlink-hover":yi("primary-40"),"hyperlink-visited":yi("primary-40"),"hyperlink-inverse":yi("primary-inverse"),"focus-ring":yi("primary-50"),"focus-ring-inverse":yi("white")},wi={text:yi("neutral-100"),"text-subtle":yi("neutral-80"),"text-subtler":yi("neutral-60"),"text-subtlest":yi("neutral-50"),"text-primary":yi("primary-60"),"text-hover":yi("primary-70"),"text-selected":yi("primary-60"),"text-selected-hover":yi("primary-70"),"text-disabled":yi("neutral-60"),"text-disabled-subtle":yi("neutral-50"),"text-disabled-subtlest":yi("neutral-30"),"text-selected-disabled":yi("neutral-90"),"text-success":yi("success-70"),"text-warning":yi("warning-70"),"text-error":yi("error-70"),"text-info":yi("info-70"),"text-inverse":yi("black"),icon:yi("neutral-60"),"icon-subtle":yi("neutral-50"),"icon-strongest":yi("neutral-90"),"icon-primary":yi("primary-60"),"icon-primary-subtle":yi("primary-50"),"icon-primary-subtlest":yi("primary-40"),"icon-hover":yi("primary-70"),"icon-selected":yi("primary-60"),"icon-selected-hover":yi("primary-70"),"icon-disabled":yi("neutral-60"),"icon-disabled-subtle":yi("neutral-50"),"icon-selected-disabled":yi("neutral-50"),"icon-success":yi("success-60"),"icon-warning":yi("warning-50"),"icon-error":yi("error-60"),"icon-error-strong":yi("error-70"),"icon-info":yi("info-60"),"icon-inverse":yi("black"),"icon-primary-inverse":yi("primary-inverse"),border:yi("neutral-20"),"border-strong":yi("neutral-40"),"border-stronger":yi("neutral-60"),"border-primary":yi("primary-60"),"border-primary-subtle":yi("primary-50"),"border-hover":yi("primary-20"),"border-hover-strong":yi("primary-50"),"border-selected":yi("primary-60"),"border-selected-subtle":yi("primary-40"),"border-selected-subtlest":yi("primary-20"),"border-selected-hover":yi("primary-70"),"border-focus":yi("primary-50"),"border-focus-strong":yi("primary-60"),"border-disabled":yi("neutral-20"),"border-selected-disabled":yi("neutral-40"),"border-success":yi("success-50"),"border-warning":yi("warning-50"),"border-error":yi("error-50"),"border-error-focus":yi("error-50"),"border-error-focus-strong":yi("error-70"),"border-error-strong":yi("error-70"),"border-info":yi("info-50"),bg:yi("black"),"bg-strong":yi("neutral-10"),"bg-stronger":yi("neutral-20"),"bg-strongest":yi("neutral-20"),"bg-hover":yi("primary-20"),"bg-hover-strong":yi("primary-20"),"bg-hover-subtle":yi("primary-10"),"bg-hover-neutral":yi("neutral-10"),"bg-hover-neutral-strong":yi("neutral-20"),"bg-selected":yi("primary-20"),"bg-selected-hover":yi("primary-20"),"bg-selected-strong":yi("primary-20"),"bg-selected-stronger":yi("primary-40"),"bg-selected-strongest":yi("primary-60"),"bg-selected-strongest-hover":yi("primary-70"),"bg-disabled":yi("neutral-20"),"bg-selected-disabled":yi("neutral-20"),"bg-selected-stronger-disabled":yi("neutral-40"),"bg-success":yi("success-10"),"bg-success-hover":yi("success-20"),"bg-success-strong":yi("success-60"),"bg-success-strong-hover":yi("success-70"),"bg-warning":yi("warning-10"),"bg-warning-hover":yi("warning-20"),"bg-warning-strong":yi("warning-60"),"bg-warning-strong-hover":yi("warning-70"),"bg-info":yi("info-10"),"bg-info-hover":yi("info-20"),"bg-info-strong":yi("info-60"),"bg-info-strong-hover":yi("info-70"),"bg-error":yi("error-10"),"bg-error-hover":yi("error-20"),"bg-error-strong":yi("error-60"),"bg-error-strong-hover":yi("error-70"),"bg-inverse":yi("neutral-90"),"bg-inverse-subtle":yi("neutral-80"),"bg-inverse-subtler":yi("neutral-60"),"bg-inverse-subtlest":yi("neutral-50"),"bg-inverse-hover":yi("neutral-70"),"bg-primary":yi("primary-60"),"bg-primary-subtle":yi("primary-50"),"bg-primary-subtler":yi("primary-20"),"bg-primary-subtlest":yi("primary-10"),"bg-available":"#185339","bg-primary-hover":yi("primary-70"),"bg-primary-subtlest-hover":yi("primary-20"),"bg-primary-subtlest-selected":yi("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:yi("primary-60"),"hyperlink-hover":yi("primary-70"),"hyperlink-visited":yi("primary-70"),"hyperlink-inverse":yi("primary-inverse"),"focus-ring":yi("primary-60"),"focus-ring-inverse":yi("black")},$i={text:yi("neutral-30"),"text-subtle":yi("neutral-40"),"text-subtler":yi("neutral-50"),"text-subtlest":yi("neutral-70"),"text-primary":yi("neutral-10"),"text-hover":yi("neutral-70"),"text-selected":yi("neutral-20"),"text-selected-hover":yi("neutral-10"),"text-disabled":yi("neutral-50"),"text-disabled-subtle":yi("neutral-60"),"text-disabled-subtlest":yi("neutral-80"),"text-selected-disabled":yi("neutral-40"),"text-success":yi("success-40"),"text-warning":yi("warning-40"),"text-error":yi("brand-30"),"text-info":yi("neutral-40"),"text-inverse":yi("neutral-100"),icon:yi("neutral-40"),"icon-subtle":yi("neutral-50"),"icon-strongest":yi("neutral-10"),"icon-primary":yi("neutral-10"),"icon-primary-subtle":yi("neutral-30"),"icon-primary-subtlest":yi("neutral-60"),"icon-hover":yi("neutral-70"),"icon-selected":yi("brand-20"),"icon-selected-hover":yi("brand-10"),"icon-disabled":yi("neutral-50"),"icon-disabled-subtle":yi("neutral-60"),"icon-selected-disabled":yi("neutral-40"),"icon-success":yi("success-40"),"icon-warning":yi("warning-60"),"icon-error":yi("brand-30"),"icon-error-strong":yi("brand-10"),"icon-info":yi("neutral-40"),"icon-inverse":yi("neutral-100"),"icon-primary-inverse":"#F9B371",border:yi("neutral-90"),"border-strong":yi("neutral-30"),"border-stronger":yi("neutral-20"),"border-primary":yi("neutral-40"),"border-primary-subtle":yi("neutral-60"),"border-hover":yi("neutral-80"),"border-hover-strong":yi("neutral-10"),"border-selected":yi("brand-20"),"border-selected-subtle":yi("neutral-40"),"border-selected-subtlest":yi("neutral-70"),"border-selected-hover":yi("neutral-10"),"border-focus":yi("neutral-20"),"border-focus-strong":yi("neutral-10"),"border-disabled":yi("neutral-90"),"border-selected-disabled":yi("neutral-80"),"border-success":yi("success-40"),"border-warning":yi("warning-60"),"border-error":yi("brand-30"),"border-error-focus":yi("brand-20"),"border-error-focus-strong":yi("brand-10"),"border-error-strong":yi("brand-20"),"border-info":yi("neutral-40"),bg:yi("neutral-100"),"bg-strong":yi("neutral-95"),"bg-stronger":yi("neutral-90"),"bg-strongest":yi("neutral-80"),"bg-hover":yi("brand-90"),"bg-hover-strong":yi("brand-80"),"bg-hover-subtle":yi("neutral-90"),"bg-hover-neutral":yi("neutral-90"),"bg-hover-neutral-strong":yi("neutral-90"),"bg-selected":yi("brand-100"),"bg-selected-hover":yi("brand-30"),"bg-selected-strong":yi("brand-50"),"bg-selected-stronger":yi("brand-40"),"bg-selected-strongest":yi("brand-20"),"bg-selected-strongest-hover":yi("brand-10"),"bg-disabled":yi("neutral-90"),"bg-selected-disabled":yi("neutral-90"),"bg-selected-stronger-disabled":yi("neutral-80"),"bg-success":yi("success-100"),"bg-success-hover":yi("success-95"),"bg-success-strong":yi("success-50"),"bg-success-strong-hover":yi("success-40"),"bg-warning":yi("warning-100"),"bg-warning-hover":yi("warning-95"),"bg-warning-strong":yi("warning-50"),"bg-warning-strong-hover":yi("warning-40"),"bg-info":yi("neutral-95"),"bg-info-hover":yi("info-95"),"bg-info-strong":yi("info-50"),"bg-info-strong-hover":yi("info-40"),"bg-error":yi("brand-100"),"bg-error-hover":yi("error-95"),"bg-error-strong":yi("error-50"),"bg-error-strong-hover":yi("error-40"),"bg-inverse":yi("neutral-40"),"bg-inverse-subtle":yi("neutral-60"),"bg-inverse-subtler":yi("neutral-70"),"bg-inverse-subtlest":yi("neutral-80"),"bg-inverse-hover":yi("neutral-30"),"bg-primary":yi("brand-20"),"bg-primary-subtle":yi("brand-60"),"bg-primary-subtler":yi("brand-80"),"bg-primary-subtlest":yi("brand-100"),"bg-available":yi("success-60"),"bg-primary-hover":yi("brand-10"),"bg-primary-subtlest-hover":yi("brand-80"),"bg-primary-subtlest-selected":yi("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:yi("neutral-10"),"hyperlink-hover":yi("neutral-40"),"hyperlink-visited":yi("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":yi("primary-50"),"focus-ring-inverse":yi("white")},Fi={text:yi("neutral-20"),"text-subtle":yi("neutral-30"),"text-subtler":yi("neutral-50"),"text-subtlest":yi("neutral-60"),"text-primary":yi("primary-50"),"text-hover":yi("primary-40"),"text-selected":yi("primary-50"),"text-selected-hover":yi("primary-40"),"text-disabled":yi("neutral-50"),"text-disabled-subtle":yi("neutral-60"),"text-disabled-subtlest":yi("neutral-80"),"text-selected-disabled":yi("neutral-20"),"text-success":yi("success-40"),"text-warning":yi("warning-40"),"text-error":yi("error-40"),"text-info":yi("info-40"),"text-inverse":yi("white"),icon:yi("neutral-50"),"icon-subtle":yi("neutral-60"),"icon-strongest":yi("neutral-20"),"icon-primary":yi("primary-50"),"icon-primary-subtle":yi("primary-60"),"icon-primary-subtlest":yi("primary-70"),"icon-hover":yi("primary-40"),"icon-selected":yi("primary-50"),"icon-selected-hover":yi("primary-40"),"icon-disabled":yi("neutral-50"),"icon-disabled-subtle":yi("neutral-60"),"icon-selected-disabled":yi("neutral-60"),"icon-success":yi("success-50"),"icon-warning":yi("warning-60"),"icon-error":yi("error-50"),"icon-error-strong":yi("error-40"),"icon-info":yi("info-50"),"icon-inverse":yi("white"),"icon-primary-inverse":yi("primary-inverse"),border:yi("neutral-90"),"border-strong":yi("neutral-70"),"border-stronger":yi("neutral-50"),"border-primary":yi("primary-50"),"border-primary-subtle":yi("primary-60"),"border-hover":yi("primary-90"),"border-hover-strong":yi("primary-60"),"border-selected":yi("primary-50"),"border-selected-subtle":yi("primary-70"),"border-selected-subtlest":yi("primary-90"),"border-selected-hover":yi("primary-40"),"border-focus":yi("primary-60"),"border-focus-strong":yi("primary-50"),"border-disabled":yi("neutral-90"),"border-selected-disabled":yi("neutral-70"),"border-success":yi("success-60"),"border-warning":yi("warning-60"),"border-error":yi("error-60"),"border-error-focus":yi("error-60"),"border-error-focus-strong":yi("error-40"),"border-error-strong":yi("error-40"),"border-info":yi("info-60"),bg:yi("white"),"bg-strong":yi("neutral-100"),"bg-stronger":yi("neutral-95"),"bg-strongest":yi("neutral-90"),"bg-hover":yi("primary-95"),"bg-hover-strong":yi("primary-90"),"bg-hover-subtle":yi("primary-100"),"bg-hover-neutral":yi("neutral-100"),"bg-hover-neutral-strong":yi("neutral-90"),"bg-selected":yi("primary-95"),"bg-selected-hover":yi("primary-90"),"bg-selected-strong":yi("primary-90"),"bg-selected-stronger":yi("primary-70"),"bg-selected-strongest":yi("primary-50"),"bg-selected-strongest-hover":yi("primary-40"),"bg-disabled":yi("neutral-95"),"bg-selected-disabled":yi("neutral-95"),"bg-selected-stronger-disabled":yi("neutral-70"),"bg-success":yi("success-100"),"bg-success-hover":yi("success-95"),"bg-success-strong":yi("success-50"),"bg-success-strong-hover":yi("success-40"),"bg-warning":yi("warning-100"),"bg-warning-hover":yi("warning-95"),"bg-warning-strong":yi("warning-50"),"bg-warning-strong-hover":yi("warning-40"),"bg-info":yi("info-100"),"bg-info-hover":yi("info-95"),"bg-info-strong":yi("info-50"),"bg-info-strong-hover":yi("info-40"),"bg-error":yi("error-100"),"bg-error-hover":yi("error-95"),"bg-error-strong":yi("error-50"),"bg-error-strong-hover":yi("error-40"),"bg-inverse":yi("neutral-20"),"bg-inverse-subtle":yi("neutral-30"),"bg-inverse-subtler":yi("neutral-50"),"bg-inverse-subtlest":yi("neutral-60"),"bg-inverse-hover":yi("neutral-40"),"bg-primary":yi("primary-50"),"bg-primary-subtle":yi("primary-60"),"bg-primary-subtler":yi("primary-95"),"bg-primary-subtlest":yi("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":yi("primary-40"),"bg-primary-subtlest-hover":yi("primary-90"),"bg-primary-subtlest-selected":yi("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:yi("primary-50"),"hyperlink-hover":yi("primary-40"),"hyperlink-visited":yi("primary-40"),"hyperlink-inverse":yi("primary-inverse"),"focus-ring":yi("primary-50"),"focus-ring-inverse":yi("white")},Ci={text:yi("neutral-100"),"text-subtle":yi("neutral-80"),"text-subtler":yi("neutral-60"),"text-subtlest":yi("neutral-50"),"text-primary":yi("primary-60"),"text-hover":yi("primary-70"),"text-selected":yi("primary-60"),"text-selected-hover":yi("primary-70"),"text-disabled":yi("neutral-60"),"text-disabled-subtle":yi("neutral-50"),"text-disabled-subtlest":yi("neutral-30"),"text-selected-disabled":yi("neutral-90"),"text-success":yi("success-70"),"text-warning":yi("warning-70"),"text-error":yi("error-70"),"text-info":yi("info-70"),"text-inverse":yi("black"),icon:yi("neutral-60"),"icon-subtle":yi("neutral-50"),"icon-strongest":yi("neutral-90"),"icon-primary":yi("primary-60"),"icon-primary-subtle":yi("primary-50"),"icon-primary-subtlest":yi("primary-40"),"icon-hover":yi("primary-70"),"icon-selected":yi("primary-60"),"icon-selected-hover":yi("primary-70"),"icon-disabled":yi("neutral-60"),"icon-disabled-subtle":yi("neutral-50"),"icon-selected-disabled":yi("neutral-50"),"icon-success":yi("success-60"),"icon-warning":yi("warning-50"),"icon-error":yi("error-60"),"icon-error-strong":yi("error-70"),"icon-info":yi("info-60"),"icon-inverse":yi("black"),"icon-primary-inverse":yi("primary-inverse"),border:yi("neutral-20"),"border-strong":yi("neutral-40"),"border-stronger":yi("neutral-60"),"border-primary":yi("primary-60"),"border-primary-subtle":yi("primary-50"),"border-hover":yi("primary-20"),"border-hover-strong":yi("primary-50"),"border-selected":yi("primary-60"),"border-selected-subtle":yi("primary-40"),"border-selected-subtlest":yi("primary-20"),"border-selected-hover":yi("primary-70"),"border-focus":yi("primary-50"),"border-focus-strong":yi("primary-60"),"border-disabled":yi("neutral-20"),"border-selected-disabled":yi("neutral-40"),"border-success":yi("success-50"),"border-warning":yi("warning-50"),"border-error":yi("error-50"),"border-error-focus":yi("error-50"),"border-error-focus-strong":yi("error-70"),"border-error-strong":yi("error-70"),"border-info":yi("info-50"),bg:yi("black"),"bg-strong":yi("neutral-10"),"bg-stronger":yi("neutral-20"),"bg-strongest":yi("neutral-20"),"bg-hover":yi("primary-20"),"bg-hover-strong":yi("primary-20"),"bg-hover-subtle":yi("primary-10"),"bg-hover-neutral":yi("neutral-10"),"bg-hover-neutral-strong":yi("neutral-20"),"bg-selected":yi("primary-20"),"bg-selected-hover":yi("primary-20"),"bg-selected-strong":yi("primary-20"),"bg-selected-stronger":yi("primary-40"),"bg-selected-strongest":yi("primary-60"),"bg-selected-strongest-hover":yi("primary-70"),"bg-disabled":yi("neutral-20"),"bg-selected-disabled":yi("neutral-20"),"bg-selected-stronger-disabled":yi("neutral-40"),"bg-success":yi("success-10"),"bg-success-hover":yi("success-20"),"bg-success-strong":yi("success-60"),"bg-success-strong-hover":yi("success-70"),"bg-warning":yi("warning-10"),"bg-warning-hover":yi("warning-20"),"bg-warning-strong":yi("warning-60"),"bg-warning-strong-hover":yi("warning-70"),"bg-info":yi("info-10"),"bg-info-hover":yi("info-20"),"bg-info-strong":yi("info-60"),"bg-info-strong-hover":yi("info-70"),"bg-error":yi("error-10"),"bg-error-hover":yi("error-20"),"bg-error-strong":yi("error-60"),"bg-error-strong-hover":yi("error-70"),"bg-inverse":yi("neutral-90"),"bg-inverse-subtle":yi("neutral-80"),"bg-inverse-subtler":yi("neutral-60"),"bg-inverse-subtlest":yi("neutral-50"),"bg-inverse-hover":yi("neutral-70"),"bg-primary":yi("primary-60"),"bg-primary-subtle":yi("primary-50"),"bg-primary-subtler":yi("primary-20"),"bg-primary-subtlest":yi("primary-10"),"bg-available":"#185339","bg-primary-hover":yi("primary-70"),"bg-primary-subtlest-hover":yi("primary-20"),"bg-primary-subtlest-selected":yi("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:yi("primary-60"),"hyperlink-hover":yi("primary-70"),"hyperlink-visited":yi("primary-70"),"hyperlink-inverse":yi("primary-inverse"),"focus-ring":yi("primary-60"),"focus-ring-inverse":yi("black")},Ei={collections:{lifesg:xi,bookingsg:xi,rbs:xi,mylegacy:xi,ccube:xi,oneservice:xi,pa:$i,a11yplayground:Fi,supportgowhere:xi},defaultValue:"lifesg"},Di={collections:{lifesg:wi,bookingsg:wi,rbs:wi,mylegacy:wi,ccube:wi,oneservice:wi,pa:wi,a11yplayground:Ci,supportgowhere:wi},defaultValue:"lifesg"},ki=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=ti(i?Di:Ei,null==n?void 0:n.colourScheme),s=i?"semanticColourDark":"semanticColour",a=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s],l=a?ri(o,e,a):o[e];return"function"==typeof l?l(r):l},Si={text:ki("text"),"text-subtle":ki("text-subtle"),"text-subtler":ki("text-subtler"),"text-subtlest":ki("text-subtlest"),"text-primary":ki("text-primary"),"text-hover":ki("text-hover"),"text-selected":ki("text-selected"),"text-selected-hover":ki("text-selected-hover"),"text-disabled":ki("text-disabled"),"text-disabled-subtle":ki("text-disabled-subtle"),"text-disabled-subtlest":ki("text-disabled-subtlest"),"text-selected-disabled":ki("text-selected-disabled"),"text-success":ki("text-success"),"text-warning":ki("text-warning"),"text-error":ki("text-error"),"text-info":ki("text-info"),"text-inverse":ki("text-inverse"),icon:ki("icon"),"icon-subtle":ki("icon-subtle"),"icon-strongest":ki("icon-strongest"),"icon-primary":ki("icon-primary"),"icon-primary-subtle":ki("icon-primary-subtle"),"icon-primary-subtlest":ki("icon-primary-subtlest"),"icon-hover":ki("icon-hover"),"icon-selected":ki("icon-selected"),"icon-selected-hover":ki("icon-selected-hover"),"icon-disabled":ki("icon-disabled"),"icon-disabled-subtle":ki("icon-disabled-subtle"),"icon-selected-disabled":ki("icon-selected-disabled"),"icon-success":ki("icon-success"),"icon-warning":ki("icon-warning"),"icon-error":ki("icon-error"),"icon-error-strong":ki("icon-error-strong"),"icon-info":ki("icon-info"),"icon-inverse":ki("icon-inverse"),"icon-primary-inverse":ki("icon-primary-inverse"),border:ki("border"),"border-strong":ki("border-strong"),"border-stronger":ki("border-stronger"),"border-primary":ki("border-primary"),"border-primary-subtle":ki("border-primary-subtle"),"border-hover":ki("border-hover"),"border-hover-strong":ki("border-hover-strong"),"border-selected":ki("border-selected"),"border-selected-subtle":ki("border-selected-subtle"),"border-selected-subtlest":ki("border-selected-subtlest"),"border-selected-hover":ki("border-selected-hover"),"border-focus":ki("border-focus"),"border-focus-strong":ki("border-focus-strong"),"border-disabled":ki("border-disabled"),"border-selected-disabled":ki("border-selected-disabled"),"border-success":ki("border-success"),"border-warning":ki("border-warning"),"border-error":ki("border-error"),"border-error-focus":ki("border-error-focus"),"border-error-focus-strong":ki("border-error-focus-strong"),"border-error-strong":ki("border-error-strong"),"border-info":ki("border-info"),bg:ki("bg"),"bg-strong":ki("bg-strong"),"bg-stronger":ki("bg-stronger"),"bg-strongest":ki("bg-strongest"),"bg-hover":ki("bg-hover"),"bg-hover-strong":ki("bg-hover-strong"),"bg-hover-subtle":ki("bg-hover-subtle"),"bg-hover-neutral":ki("bg-hover-neutral"),"bg-hover-neutral-strong":ki("bg-hover-neutral-strong"),"bg-selected":ki("bg-selected"),"bg-selected-hover":ki("bg-selected-hover"),"bg-selected-strong":ki("bg-selected-strong"),"bg-selected-stronger":ki("bg-selected-stronger"),"bg-selected-strongest":ki("bg-selected-strongest"),"bg-selected-strongest-hover":ki("bg-selected-strongest-hover"),"bg-disabled":ki("bg-disabled"),"bg-selected-disabled":ki("bg-selected-disabled"),"bg-selected-stronger-disabled":ki("bg-selected-stronger-disabled"),"bg-success":ki("bg-success"),"bg-success-hover":ki("bg-success-hover"),"bg-success-strong":ki("bg-success-strong"),"bg-success-strong-hover":ki("bg-success-strong-hover"),"bg-warning":ki("bg-warning"),"bg-warning-hover":ki("bg-warning-hover"),"bg-warning-strong":ki("bg-warning-strong"),"bg-warning-strong-hover":ki("bg-warning-strong-hover"),"bg-info":ki("bg-info"),"bg-info-hover":ki("bg-info-hover"),"bg-info-strong":ki("bg-info-strong"),"bg-info-strong-hover":ki("bg-info-strong-hover"),"bg-error":ki("bg-error"),"bg-error-hover":ki("bg-error-hover"),"bg-error-strong":ki("bg-error-strong"),"bg-error-strong-hover":ki("bg-error-strong-hover"),"bg-inverse":ki("bg-inverse"),"bg-inverse-subtle":ki("bg-inverse-subtle"),"bg-inverse-subtler":ki("bg-inverse-subtler"),"bg-inverse-subtlest":ki("bg-inverse-subtlest"),"bg-inverse-hover":ki("bg-inverse-hover"),"bg-primary":ki("bg-primary"),"bg-primary-subtle":ki("bg-primary-subtle"),"bg-primary-subtler":ki("bg-primary-subtler"),"bg-primary-subtlest":ki("bg-primary-subtlest"),"bg-available":ki("bg-available"),"bg-primary-hover":ki("bg-primary-hover"),"bg-primary-subtlest-hover":ki("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ki("bg-primary-subtlest-selected"),"overlay-strong":ki("overlay-strong"),"overlay-subtle":ki("overlay-subtle"),hyperlink:ki("hyperlink"),"hyperlink-hover":ki("hyperlink-hover"),"hyperlink-visited":ki("hyperlink-visited"),"hyperlink-inverse":ki("hyperlink-inverse"),"focus-ring":ki("focus-ring"),"focus-ring-inverse":ki("focus-ring-inverse")},Oi={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:oi["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Si.border(r),u=oi.solid;return D`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:oi["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Si.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return D`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},_i=e=>1===e.length&&"theme"in e[0],Ai=e=>(...r)=>t=>{const n=_i(r)?[]:r,i=_i(r)?r[0]:t,o=i.theme;return(0,ti(Oi,null==o?void 0:o.borderScheme)[e])(...n)(i)},Bi={solid:Ai("solid"),"dashed-default":Ai("dashed-default")},Mi={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1024,"xl-min":1025,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},zi=e=>r=>{var t;const n=r.theme,i=ti(Mi,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ri(i,e,n.overrides.breakpoint):i[e],o},ji={"xxs-min":zi("xxs-min"),"xxs-max":zi("xxs-max"),"xs-min":zi("xs-min"),"xs-max":zi("xs-max"),"sm-min":zi("sm-min"),"sm-max":zi("sm-max"),"md-min":zi("md-min"),"md-max":zi("md-max"),"lg-min":zi("lg-min"),"lg-max":zi("lg-max"),"xl-min":zi("xl-min"),"xl-max":zi("xl-max"),"xxl-min":zi("xxl-min"),"xxs-column":zi("xxs-column"),"xs-column":zi("xs-column"),"sm-column":zi("sm-column"),"md-column":zi("md-column"),"lg-column":zi("lg-column"),"xl-column":zi("xl-column"),"xxl-column":zi("xxl-column"),"xxs-gutter":zi("xxs-gutter"),"xs-gutter":zi("xs-gutter"),"sm-gutter":zi("sm-gutter"),"md-gutter":zi("md-gutter"),"lg-gutter":zi("lg-gutter"),"xl-gutter":zi("xl-gutter"),"xxl-gutter":zi("xxl-gutter"),"xxs-margin":zi("xxs-margin"),"xs-margin":zi("xs-margin"),"sm-margin":zi("sm-margin"),"md-margin":zi("md-margin"),"lg-margin":zi("lg-margin"),"xl-margin":zi("xl-margin"),"xxl-margin":zi("xxl-margin")},Ti=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=ji["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Ii={MaxWidth:Ti("max-width"),MinWidth:Ti("min-width")},Pi={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Ri=e=>r=>{var t;const n=r.theme,i=ti(Pi,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ri(i,e,n.overrides.fontSpec):i[e]},Li={"heading-size-xxl":Ri("heading-size-xxl"),"heading-size-xl":Ri("heading-size-xl"),"heading-size-lg":Ri("heading-size-lg"),"heading-size-md":Ri("heading-size-md"),"heading-size-sm":Ri("heading-size-sm"),"heading-size-xs":Ri("heading-size-xs"),"heading-lh-xxl":Ri("heading-lh-xxl"),"heading-lh-xl":Ri("heading-lh-xl"),"heading-lh-lg":Ri("heading-lh-lg"),"heading-lh-md":Ri("heading-lh-md"),"heading-lh-sm":Ri("heading-lh-sm"),"heading-lh-xs":Ri("heading-lh-xs"),"heading-ls-xxl":Ri("heading-ls-xxl"),"heading-ls-xl":Ri("heading-ls-xl"),"heading-ls-lg":Ri("heading-ls-lg"),"heading-ls-md":Ri("heading-ls-md"),"heading-ls-sm":Ri("heading-ls-sm"),"heading-ls-xs":Ri("heading-ls-xs"),"weight-light":Ri("weight-light"),"weight-regular":Ri("weight-regular"),"weight-semibold":Ri("weight-semibold"),"weight-bold":Ri("weight-bold"),"font-family":Ri("font-family"),"body-size-baseline":Ri("body-size-baseline"),"body-size-md":Ri("body-size-md"),"body-size-sm":Ri("body-size-sm"),"body-size-xs":Ri("body-size-xs"),"body-lh-baseline":Ri("body-lh-baseline"),"body-lh-md":Ri("body-lh-md"),"body-lh-sm":Ri("body-lh-sm"),"body-lh-xs":Ri("body-lh-xs"),"body-ls-baseline":Ri("body-ls-baseline"),"body-ls-md":Ri("body-ls-md"),"body-ls-sm":Ri("body-ls-sm"),"body-ls-xs":Ri("body-ls-xs"),"form-label-size":Ri("form-label-size"),"form-description-size":Ri("form-description-size"),"form-label-lh":Ri("form-label-lh"),"form-description-lh":Ri("form-description-lh"),"form-label-ls":Ri("form-label-ls"),"form-description-ls":Ri("form-description-ls")},Wi=(e,r,t,n,i)=>{const{disableLigatures:o}=i||{};return D`
        font-family: ${Ri("font-family")};
        font-size: ${Ri(e)};
        font-weight: ${Ri(r)};
        line-height: ${Ri(t)};
        letter-spacing: ${Ri(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Hi=(e={})=>({"heading-xxl-light":Wi("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Wi("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Wi("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Wi("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Wi("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Wi("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Wi("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Wi("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Wi("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Wi("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Wi("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Wi("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Wi("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Wi("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Wi("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Wi("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Wi("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Wi("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Wi("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Wi("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Wi("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Wi("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Wi("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Wi("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Wi("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Wi("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Wi("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Wi("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Wi("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Wi("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Wi("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Wi("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Wi("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Wi("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Wi("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Wi("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Wi("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Wi("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Wi("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Wi("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Wi("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Wi("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Yi=Hi({disableLigatures:!0}),Ni={collections:{default:Hi(),bookingsg:Yi,pa:Hi({disableLigatures:!0}),a11yplayground:Hi({disableLigatures:!0}),supportgowhere:Hi({disableLigatures:!0})},defaultValue:"default"},Vi=e=>r=>{var t;const n=r.theme,i=ti(Ni,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ri(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},qi={"heading-xxl-light":Vi("heading-xxl-light"),"heading-xxl-regular":Vi("heading-xxl-regular"),"heading-xxl-semibold":Vi("heading-xxl-semibold"),"heading-xxl-bold":Vi("heading-xxl-bold"),"heading-xl-light":Vi("heading-xl-light"),"heading-xl-regular":Vi("heading-xl-regular"),"heading-xl-semibold":Vi("heading-xl-semibold"),"heading-xl-bold":Vi("heading-xl-bold"),"heading-lg-light":Vi("heading-lg-light"),"heading-lg-regular":Vi("heading-lg-regular"),"heading-lg-semibold":Vi("heading-lg-semibold"),"heading-lg-bold":Vi("heading-lg-bold"),"heading-md-light":Vi("heading-md-light"),"heading-md-regular":Vi("heading-md-regular"),"heading-md-semibold":Vi("heading-md-semibold"),"heading-md-bold":Vi("heading-md-bold"),"heading-sm-light":Vi("heading-sm-light"),"heading-sm-regular":Vi("heading-sm-regular"),"heading-sm-semibold":Vi("heading-sm-semibold"),"heading-sm-bold":Vi("heading-sm-bold"),"heading-xs-light":Vi("heading-xs-light"),"heading-xs-regular":Vi("heading-xs-regular"),"heading-xs-semibold":Vi("heading-xs-semibold"),"heading-xs-bold":Vi("heading-xs-bold"),"body-baseline-light":Vi("body-baseline-light"),"body-baseline-regular":Vi("body-baseline-regular"),"body-baseline-semibold":Vi("body-baseline-semibold"),"body-baseline-bold":Vi("body-baseline-bold"),"body-md-light":Vi("body-md-light"),"body-md-regular":Vi("body-md-regular"),"body-md-semibold":Vi("body-md-semibold"),"body-md-bold":Vi("body-md-bold"),"body-sm-light":Vi("body-sm-light"),"body-sm-regular":Vi("body-sm-regular"),"body-sm-semibold":Vi("body-sm-semibold"),"body-sm-bold":Vi("body-sm-bold"),"body-xs-light":Vi("body-xs-light"),"body-xs-regular":Vi("body-xs-regular"),"body-xs-semibold":Vi("body-xs-semibold"),"body-xs-bold":Vi("body-xs-bold"),"form-label":Vi("form-label"),"form-description":Vi("form-description")},Qi={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Ui=e=>r=>{var t;const n=r.theme,i=ti(Qi,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ri(i,e,n.overrides.motion):i[e]},Zi={"duration-150":Ui("duration-150"),"duration-250":Ui("duration-250"),"duration-350":Ui("duration-350"),"duration-500":Ui("duration-500"),"duration-800":Ui("duration-800"),"duration-1000":Ui("duration-1000"),"ease-default":Ui("ease-default"),"ease-standard":Ui("ease-standard"),"ease-entrance":Ui("ease-entrance"),"ease-exit":Ui("ease-exit")},Xi={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Gi=e=>r=>{var t;const n=r.theme,i=ti(Xi,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ri(i,e,n.overrides.radius)}px`:`${i[e]}px`},Ji={none:Gi("none"),xs:Gi("xs"),sm:Gi("sm"),md:Gi("md"),lg:Gi("lg"),full:Gi("full")},Ki={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},eo=e=>r=>{var t;const n=r.theme,i=ti(Ki,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ri(i,e,n.overrides.spacing)}px`:`${i[e]}px`},ro={"spacing-0":eo("spacing-0"),"spacing-4":eo("spacing-4"),"spacing-8":eo("spacing-8"),"spacing-12":eo("spacing-12"),"spacing-16":eo("spacing-16"),"spacing-20":eo("spacing-20"),"spacing-24":eo("spacing-24"),"spacing-32":eo("spacing-32"),"spacing-40":eo("spacing-40"),"spacing-48":eo("spacing-48"),"spacing-64":eo("spacing-64"),"spacing-72":eo("spacing-72"),"layout-xs":eo("layout-xs"),"layout-sm":eo("layout-sm"),"layout-md":eo("layout-md"),"layout-lg":eo("layout-lg"),"layout-xl":eo("layout-xl"),"layout-xxl":eo("layout-xxl"),"layout-xxxl":eo("layout-xxxl")},to=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),no=Object.assign(Object.assign({},Si),{Primitive:vi}),io=Object.assign(Object.assign({},qi),{Spec:Li}),oo=Zi,so=Object.assign(Object.assign({},oi),{Util:Bi}),ao=ro,lo=Ji,co=ji,uo=Ii,ho={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},go={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},bo={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},mo={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},po={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},fo={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},yo={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},vo={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},xo={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},ho),{light:to(ho,"light"),dark:to(ho,"dark")}),Object.assign(Object.assign({},go),{light:to(go,"light"),dark:to(go,"dark")}),Object.assign(Object.assign({},bo),{light:to(bo,"light"),dark:to(bo,"dark")}),Object.assign(Object.assign({},mo),{light:to(mo,"light"),dark:to(mo,"dark")}),Object.assign(Object.assign({},po),{light:to(po,"light"),dark:to(po,"dark")}),Object.assign(Object.assign({},fo),{light:to(fo,"light"),dark:to(fo,"dark")}),Object.assign(Object.assign({},yo),{light:to(yo,"light"),dark:to(yo,"dark")}),Object.assign(Object.assign({},vo),{light:to(vo,"light"),dark:to(vo,"dark")}),Object.assign(Object.assign({},xo),{light:to(xo,"light"),dark:to(xo,"dark")});const wo=E.div`
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
`,$o=E.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?no["overlay-subtle"]:no["overlay-strong"]};
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
`;var Fo;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Fo||(Fo={}));const Co=({show:r=!1,rootId:t,onOverlayClick:n,children:i,backgroundOpacity:o,backgroundBlur:s=!0,disableTransition:a=!1,enableOverlayClick:l=!1,zIndex:d,id:c})=>{const[b,m]=g(null),[p,f]=g(),[v]=g((()=>Ie.generate())),x=A(),w=h(),$=h(null),F=i&&u.cloneElement(i,{ref:$}),C=c?`lifesg-ds-overlay-root-${c}`:"lifesg-ds-overlay-root",E=null!=d?d:p?99999:99998;(e=>{const r=O();y((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Fo.Change,t)}),[r,e]),y((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Fo.Change,t)};return null==r||r.events.on(Fo.Ready,t),()=>null==r?void 0:r.events.off(Fo.Ready,t)}),[r,e])})(E),y((()=>(_(),m(k()),()=>{T(),z().length<1&&M("remove")})),[]),y((()=>{if(r){const e=S();D(e),j();const r=setTimeout((()=>{M("add")}),200);return()=>clearTimeout(r)}{T();const e=setTimeout((()=>{z().length<1&&M("remove")}),200);return()=>clearTimeout(e)}}),[r]);const D=e=>{w.current=e,f(e)},k=()=>document&&t?document.getElementById(t):document?document.body:null,S=()=>z().length>0,_=()=>{if(!document.getElementById(Do)){const e=document.createElement("style");e.id=Do;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${ko} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ko}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},M=e=>{const r=document.body.classList.contains(ko);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(ko):document.body.classList.add(ko)},z=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},j=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},T=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},I=e=>{var r;const t=null===(r=$.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&l&&(e.preventDefault(),n())};return b?q.createPortal(e(wo,{id:C,"data-testid":C,$show:r,$zIndex:E,children:i&&e(B,{id:x,children:e($o,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:s,$disableTransition:a,onClick:I,children:F})})}),b):null},Eo=r=>e(_,{children:e(Co,Object.assign({},r))}),Do="lifesg-ds-overlay-stylesheet",ko="lifesg-ds-overlay-open",So=u.createContext({mode:"default",rootNode:{current:null}}),Oo=E.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,_o=k`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ao=E.div`
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
    animation: ${_o} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Bo=E(Ao)`
    animation-delay: -0.45s;
`,Mo=E(Ao)`
    animation-delay: -0.3s;
`,zo=E(Ao)`
    animation-delay: -0.15s;
`,jo=({color:t,className:n,size:i})=>r(Oo,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[e(Ao,{id:"inner1"}),e(Bo,{id:"inner2"}),e(Mo,{id:"inner3"}),e(zo,{id:"inner4"})]}),To={Button:{"button-radius":Ji.md,"button-default-colour-bg":Si["bg-primary"],"button-default-colour-bg-hover":Si["bg-primary-hover"],"button-default-colour-text":Si["text-inverse"],"button-secondary-colour-border":Si["border-primary"],"button-secondary-colour-text":Si["text-primary"],"button-light-colour-text":Si["text-primary"],"button-link-colour-text":Si["text-primary"]}},Io={collections:{default:{Button:{"button-radius":Ji.sm,"button-default-colour-bg":Si["bg-primary"],"button-default-colour-bg-hover":Si["bg-primary-hover"],"button-default-colour-text":Si["text-inverse"],"button-secondary-colour-border":Si["border-primary"],"button-secondary-colour-text":Si["text-primary"],"button-light-colour-text":Si["text-primary"],"button-link-colour-text":Si["text-primary"]}},pa:{Button:{"button-radius":Ji.full,"button-default-colour-bg":Si["bg-primary"],"button-default-colour-bg-hover":Si["bg-primary-hover"],"button-default-colour-text":Si["text-inverse"],"button-secondary-colour-border":Si["border-primary"],"button-secondary-colour-text":Si["text-primary"],"button-light-colour-text":Si["text-primary"],"button-link-colour-text":Si["text-primary"]}},a11yplayground:To},defaultValue:"default"},Po=(e,r)=>t=>{var n,i;const o=t.theme,s=ti(Io,null==o?void 0:o.componentScheme);return Ro((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||s[e][r],t)},Ro=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Lo=Po("Button","button-radius"),Wo=Po("Button","button-default-colour-bg"),Ho=Po("Button","button-default-colour-bg-hover"),Yo=Po("Button","button-default-colour-text"),No=Po("Button","button-secondary-colour-border"),Vo=Po("Button","button-secondary-colour-text"),qo=Po("Button","button-light-colour-text"),Qo=Po("Button","button-link-colour-text"),Uo=E.button`
    padding: ${ao["spacing-8"]} ${ao["spacing-16"]};
    min-width: 4rem;
    border: ${so["width-010"]} ${so.solid} transparent;
    transition: all ${oo["duration-250"]} ${oo["ease-default"]};
    border-radius: ${Lo};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return D`
                    background-color: ${no.bg};
                    border-color: ${e.$buttonIsDanger?no["border-error-strong"]:No};

                    color: ${e.$buttonIsDanger?no["text-error"]:Vo};

                    &:hover,
                    &:active {
                        background-color: ${no["bg-hover-neutral"]};
                    }
                `;case"light":return D`
                    background-color: ${no.bg};
                    border-color: ${no.border};

                    color: ${e.$buttonIsDanger?no["text-error"]:qo};

                    &:hover,
                    &:active {
                        background-color: ${no["bg-hover-neutral"]};
                    }
                `;case"link":return D`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?no["text-error"]:Qo};
                    &:hover,
                    &:active {
                        background-color: ${no["bg-hover-neutral"]};
                    }
                `;case"disabled":return D`
                    background-color: ${no["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${no["text-disabled"]};
                `;default:return D`
                    background-color: ${e.$buttonIsDanger?no["bg-error-strong"]:Wo};};

                    ${uo.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Yo}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?no["bg-error-strong-hover"]:Ho}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return D`
                    height: 2.5rem;
                    ${io["body-md-semibold"]}

                    ${uo.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return D`
                    height: 4rem;
                    ${io["heading-md-semibold"]}

                    ${uo.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return D`
                    height: 3rem;
                    ${io["heading-xs-semibold"]}

                    ${uo.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Zo=E(jo)`
    margin-right: 0.5rem;
`,Xo=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ce(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(Uo,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":s,onClick:o?void 0:c},h,u,{children:[s&&e(Zo,{}),e("span",{children:i})]}))};Xo.displayName="Button.Default";const Go=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ce(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(Uo,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":s,onClick:o?void 0:c},h,u,{children:[s&&e(Zo,{}),e("span",{children:i})]}))};Go.displayName="Button.Small";const Jo=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ce(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(Uo,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":s,onClick:o?void 0:c},h,u,{children:[s&&e(Zo,{}),e("span",{children:i})]}))};Jo.displayName="Button.Large";const Ko={Default:u.forwardRef(Xo),Small:u.forwardRef(Go),Large:u.forwardRef(Jo)},es=k`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,rs=D`
    animation: ${oo["duration-150"]} ${oo["ease-default"]} ${es};
    width: 100%;
    height: 100%;
    transition: color ${oo["duration-150"]} ${oo["ease-default"]};
`,ts=E(n)`
    ${rs}
    color: ${no["icon-primary-subtlest"]};
`,ns=E(i)`
    ${rs}
    color: ${no["icon-disabled-subtle"]};
`,is=E(o)`
    ${rs}
    color: ${e=>e.$disabled?no["icon-disabled-subtle"](e):no["icon-selected"](e)};
`,os=E(s)`
    ${rs}
    color: ${e=>e.$disabled?no["icon-disabled-subtle"](e):no["icon-selected"](e)};
`,ss=E.div`
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
        outline: 2px solid ${no["focus-ring"]};
        outline-offset: 0px;
        border-radius: 4px;
    }
`,as=E.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${ts},
        &:hover
        + ${is},
        &:hover
        + ${os} {
        color: ${e=>!e.disabled&&no["icon-hover"](e)};
    }
`,ls=e=>{const{textSize:r}=e||{};return D`
        // Text styling
        ${r&&io[`${r}-regular`]}

        strong {
            font-weight: ${io.Spec["weight-semibold"]};
            ${r&&io[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${io.Spec["weight-semibold"]};
            ${r&&io[`${r}-semibold`]}
            color: ${no.hyperlink};
            text-decoration: none;

            svg {
                color: ${no["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${no["hyperlink-hover"]};

                svg {
                    color: ${no["icon-hover"]};
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
    `},ds=(e,r,t=!1)=>D`
        ${io[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,cs=e=>{if(e)return D`
            ${r=e,D`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},us=(e,r)=>D`
    ${ds(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?D`
            display: block;
            ${cs(t)}
        `:e?D`
            display: inline;
        `:D`
            display: block;
            ${cs(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${no.text};
`;var hs;!function(t){const n=(e,r,t)=>{const n=E(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>us(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,r)=>{const t=E.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>us(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=E.a`
            ${e=>D`
                ${ds(t,e.weight||"regular")}
                color: ${no.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${no["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,s=ce(t,["external","children"]);return r(i,Object.assign({},s,{children:[o,n&&e(gs,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(hs||(hs={}));const gs=E(te)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,bs=E.div`
    padding: ${ao["spacing-8"]} ${ao["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=no["bg-error"](e),t=no["border-error"](e);break;case"success":r=no["bg-success"](e),t=no["border-success"](e);break;case"warning":default:r=no["bg-warning"](e),t=no["border-warning"](e);break;case"info":r=no["bg-info"](e),t=no["border-info"](e);break;case"description":r=no["bg-strong"](e),t=no["border-strong"](e)}return D`
            background: ${r};
            border-left: ${so["width-020"]} ${so.solid}
                ${t};
        `}}

    color: ${no.text};
    ${e=>"small"===e.$sizeType?ls({textSize:"body-sm"}):ls({textSize:"body-md"})}
`,ms=E.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${ao["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=no["icon-error"](e);break;case"success":r=no["icon-success"](e);break;case"warning":default:r=no["icon-warning"](e);break;case"info":r=no["icon-info"](e);break;case"description":r=no["icon-subtle"](e)}return D`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,ps=E(hs.LinkSM)`
    ${e=>"small"===e.$sizeType?D`
                ${io["body-sm-semibold"]}
                margin-top: ${ao["spacing-4"]};
            `:D`
                ${io["body-md-semibold"]}
                margin-top: ${ao["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${ao["spacing-4"]};
    }
`,fs=E.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,ys=E.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return D`
                margin-bottom: ${ao["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,vs=E.button`
    ${e=>"small"===e.$sizeType?D`
                ${io["body-sm-semibold"]}
            `:D`
                ${io["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${ao["spacing-4"]};
    margin-top: ${ao["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${no["text-primary"]};
`,xs=E(a)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${oo["duration-350"]} ${oo["ease-standard"]};
`,ws=E.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?D`
                    color: ${no["icon-selected-disabled"]};
                `:D`
                    color: ${no["icon-disabled-subtle"]};
                `:e.$active?D`
                color: ${no["icon-selected"]};
            `:D`
            color: ${no["icon-subtle"]};
        `};
`,$s=D`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${io.Spec["weight-regular"]};
        ${e=>e.$size&&io[`${e.$size}-regular`]}
        color: ${no.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,Fs=E.ol`
    ${$s}

    margin-left: 3rem;

    ${uo.MaxWidth.lg} {
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
`,Cs=E.ul`
    ${$s}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Es=r=>{var{size:t,bulletType:n,bottomMargin:i,children:o}=r,s=ce(r,["size","bulletType","bottomMargin","children"]);return e(Cs,Object.assign({$size:t,$bulletType:n,$bottomMargin:i},s,{children:o}))};Es.displayName="TextList.Ul";const Ds=r=>{var{size:t,counterType:n,counterSeparator:i,bottomMargin:o,children:s}=r,a=ce(r,["size","counterType","counterSeparator","bottomMargin","children"]);return e(Fs,Object.assign({$size:t,$counterType:n,$counterSeparator:i,$bottomMargin:o},a,{children:s}))};Ds.displayName="TextList.Ol";const ks=Es,Ss=E.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${lo.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${no.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${no["focus-ring"]};
        outline-offset: 0;
    }

    ${e=>{if(!e.$indicator)return D`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return D`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?D`
                            border-color: ${no["border-error"]};
                        `:D`
                            border-color: ${no["border-error"]};

                            &:has(${Ms}:hover) {
                                background: ${no["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?D`
                            border: none;
                            background: ${no["bg-selected-disabled"]};
                        `:D`
                            border: none;
                        `:e.$selected?D`
                        border: none;
                        background: ${no["bg-selected"]};

                        &:has(${Ms}:hover) {
                            background: ${no["bg-selected-hover"]};

                            & ${_s} {
                                color: ${no["text-selected-hover"]};
                            }

                            & ${Hs} {
                                color: ${no["icon-selected-hover"]};
                            }
                        }
                    `:D`
                    border: none;

                    &:has(${Ms}:hover) {
                        background: ${no["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?D`
                            border-color: ${no["border-error"]};
                        `:D`
                            border-color: ${no["border-error"]};

                            &:has(${Ms}:hover) {
                                background: ${no["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?D`
                            border-color: ${no["border-selected-disabled"]};
                            background: ${no["bg-selected-disabled"]};
                        `:D`
                            border-color: ${no["border-disabled"]};
                            background: ${no["bg-disabled"]};
                        `:e.$selected?D`
                        border-color: ${no["border-selected"]};
                        background: ${no["bg-selected"]};

                        &:has(${Ms}:hover) {
                            background: ${no["bg-selected-hover"]};

                            & ${_s} {
                                color: ${no["text-selected-hover"]};
                            }

                            & ${Hs} {
                                color: ${no["icon-selected-hover"]};
                            }
                        }
                    `:D`
                    border-color: ${no.border};

                    &:has(${Ms}:hover) {
                        background: ${no["bg-hover-subtle"]};
                    }
                `}
`,Os=E.input`
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
`,_s=E.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?D`
                    color: ${no["text-selected-disabled"]};
                `:D`
                    color: ${no["text-disabled"]};
                `:e.$selected?D`
                color: ${no["text-selected"]};
            `:D`
            color: ${no.text};
        `}
`,As=E.label`
    ${io["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${uo.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${uo.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,Bs=E.div`
    ${io["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${io["body-md-semibold"]}
    }
`,Ms=E.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,zs=E.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,js=E.button`
    color: ${e=>e.$disabled?no["text-disabled"]:no["text-error"]};
    white-space: nowrap;
    ${io["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Ts=E.button`
    color: ${e=>e.disabled?no["text-disabled"]:no["text-primary"]};
    ${io["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${no.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Is=E.div`
    width: 100%;
    color: ${e=>e.$disabled?no["text-disabled"]:no["text-error"]};
    border: none;
    background: ${no.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Ps=E((t=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:a,sizeType:l="default",showIcon:d=!1,customIcon:c,maxCollapsedHeight:u}=t,h=ce(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[b,m]=g(!1),[p,f]=g(!1),{height:v,ref:x}=Mr();y((()=>{w()}),[u,v]);const w=()=>{m(!u),f($())},$=()=>!(!v||!u)&&v>u;return r(bs,{className:i,$type:n,$sizeType:l,"data-testid":h["data-testid"],children:[d&&e(ms,{$sizeType:l,$type:n,children:(()=>{if(n&&c)return c;switch(n){case"success":return e(re,{});case"warning":return e(K,{});case"error":return e(J,{});case"info":case"description":return e(ee,{});default:return null}})()}),r(fs,{children:[r(ys,{$maxCollapsedHeight:$()?u:void 0,$showMore:b,$hasActionLink:!!s,children:[e("div",{ref:x,children:o}),s?r(ps,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},s,{children:[s.children,a||e(G,{})]})):null]}),p&&r(vs,{$sizeType:l,$type:n,type:"button",onClick:()=>m(!b),children:["Show ",b?"less":"more",e(xs,{$expanded:b})]})]})]})}))`
    width: 100%;
    user-select: none;
`,Rs=E.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${no.bg};
    ${ls({textSize:"body-md"})}

    ${e=>e.$disabled?D`
                color: ${no["text-disabled"]};
            `:e.$selected?D`
                color: ${no["text-selected"]};
            `:D`
                color: ${no.text};
            `}
`,Ls=E(hs.BodyMD)`
    color: ${e=>e.$disabled?no["text-disabled"]:no["text-error"]};
`,Ws=E(ks)`
    color: ${e=>e.$disabled?no["text-disabled"]:no["text-error"]};
`,Hs=E((({type:r,active:t=!1,disabled:n,className:i})=>{let o;switch(r){case"checkbox":o=e(t?ae:se,{});break;case"radio":o=e(t?ie:ne,{});break;case"tick":o=e(le,{});break;case"cross":o=e(oe,{});break;default:o=null}return e(ws,{className:i,$active:t,$disabled:n,"aria-hidden":!0,children:o})}))`
    ${e=>e.$disabled?e.$selected?D`
                    color: ${no["icon-selected-disabled"]};
                `:D`
                    color: ${no["icon-disabled-subtle"]};
                `:e.$selected?D`
                color: ${no["icon-selected"]};
            `:D`
            color: ${no["icon-subtle"]};
        `};
`;var Ys=he((function(e){return null==e})),Ns=Object.defineProperty,Vs={};((e,r)=>{for(var t in r)Ns(e,t,{get:r[t],enumerable:!0})})(Vs,{assign:()=>Ca,colors:()=>wa,createStringInterpolator:()=>fa,skipAnimation:()=>$a,to:()=>ya,willAdvance:()=>Fa});var qs=la(),Qs=e=>ia(e,qs),Us=la();Qs.write=e=>ia(e,Us);var Zs=la();Qs.onStart=e=>ia(e,Zs);var Xs=la();Qs.onFrame=e=>ia(e,Xs);var Gs=la();Qs.onFinish=e=>ia(e,Gs);var Js=[];Qs.setTimeout=(e,r)=>{const t=Qs.now()+r,n=()=>{const e=Js.findIndex((e=>e.cancel==n));~e&&Js.splice(e,1),ta-=~e?1:0},i={time:t,handler:e,cancel:n};return Js.splice(Ks(t),0,i),ta+=1,oa(),i};var Ks=e=>~(~Js.findIndex((r=>r.time>e))||~Js.length);Qs.cancel=e=>{Zs.delete(e),Xs.delete(e),Gs.delete(e),qs.delete(e),Us.delete(e)},Qs.sync=e=>{na=!0,Qs.batchedUpdates(e),na=!1},Qs.throttle=e=>{let r;function t(){try{e(...r)}finally{r=null}}function n(...e){r=e,Qs.onStart(t)}return n.handler=e,n.cancel=()=>{Zs.delete(t),r=null},n};var ea="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Qs.use=e=>ea=e,Qs.now="undefined"!=typeof performance?()=>performance.now():Date.now,Qs.batchedUpdates=e=>e(),Qs.catch=console.error,Qs.frameLoop="always",Qs.advance=()=>{"demand"!==Qs.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):aa()};var ra=-1,ta=0,na=!1;function ia(e,r){na?(r.delete(e),e(0)):(r.add(e),oa())}function oa(){ra<0&&(ra=0,"demand"!==Qs.frameLoop&&ea(sa))}function sa(){~ra&&(ea(sa),Qs.batchedUpdates(aa))}function aa(){const e=ra;ra=Qs.now();const r=Ks(ra);r&&(da(Js.splice(0,r),(e=>e.handler())),ta-=r),ta?(Zs.flush(),qs.flush(e?Math.min(64,ra-e):16.667),Xs.flush(),Us.flush(),Gs.flush()):ra=-1}function la(){let e=new Set,r=e;return{add(t){ta+=r!=e||e.has(t)?0:1,e.add(t)},delete:t=>(ta-=r==e&&e.has(t)?1:0,e.delete(t)),flush(t){r.size&&(e=new Set,ta-=r.size,da(r,(r=>r(t)&&e.add(r))),ta+=e.size,r=e)}}}function da(e,r){e.forEach((e=>{try{r(e)}catch(e){Qs.catch(e)}}))}function ca(){}var ua={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function ha(e,r){if(ua.arr(e)){if(!ua.arr(r)||e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}return e===r}var ga=(e,r)=>e.forEach(r);function ba(e,r,t){if(ua.arr(e))for(let n=0;n<e.length;n++)r.call(t,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&r.call(t,e[n],n)}var ma=e=>ua.und(e)?[]:ua.arr(e)?e:[e];function pa(e,r){if(e.size){const t=Array.from(e);e.clear(),ga(t,r)}}var fa,ya,va=(e,...r)=>pa(e,(e=>e(...r))),xa=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),wa=null,$a=!1,Fa=ca,Ca=e=>{e.to&&(ya=e.to),e.now&&(Qs.now=e.now),void 0!==e.colors&&(wa=e.colors),null!=e.skipAnimation&&($a=e.skipAnimation),e.createStringInterpolator&&(fa=e.createStringInterpolator),e.requestAnimationFrame&&Qs.use(e.requestAnimationFrame),e.batchedUpdates&&(Qs.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Fa=e.willAdvance),e.frameLoop&&(Qs.frameLoop=e.frameLoop)},Ea=new Set,Da=[],ka=[],Sa=0,Oa={get idle(){return!Ea.size&&!Da.length},start(e){Sa>e.priority?(Ea.add(e),Qs.onStart(_a)):(Aa(e),Qs(Ma))},advance:Ma,sort(e){if(Sa)Qs.onFrame((()=>Oa.sort(e)));else{const r=Da.indexOf(e);~r&&(Da.splice(r,1),Ba(e))}},clear(){Da=[],Ea.clear()}};function _a(){Ea.forEach(Aa),Ea.clear(),Qs(Ma)}function Aa(e){Da.includes(e)||Ba(e)}function Ba(e){Da.splice(function(e,r){const t=e.findIndex(r);return t<0?e.length:t}(Da,(r=>r.priority>e.priority)),0,e)}function Ma(e){const r=ka;for(let t=0;t<Da.length;t++){const n=Da[t];Sa=n.priority,n.idle||(Fa(n),n.advance(e),n.idle||r.push(n))}return Sa=0,(ka=Da).length=0,(Da=r).length>0}var za="[-+]?\\d*\\.?\\d+",ja=za+"%";function Ta(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Ia=new RegExp("rgb"+Ta(za,za,za)),Pa=new RegExp("rgba"+Ta(za,za,za,za)),Ra=new RegExp("hsl"+Ta(za,ja,ja)),La=new RegExp("hsla"+Ta(za,ja,ja,za)),Wa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ha=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ya=/^#([0-9a-fA-F]{6})$/,Na=/^#([0-9a-fA-F]{8})$/;function Va(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function qa(e,r,t){const n=t<.5?t*(1+r):t+r-t*r,i=2*t-n,o=Va(i,n,e+1/3),s=Va(i,n,e),a=Va(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function Qa(e){const r=parseInt(e,10);return r<0?0:r>255?255:r}function Ua(e){return(parseFloat(e)%360+360)%360/360}function Za(e){const r=parseFloat(e);return r<0?0:r>1?255:Math.round(255*r)}function Xa(e){const r=parseFloat(e);return r<0?0:r>100?1:r/100}function Ga(e){let r=function(e){let r;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(r=Ya.exec(e))?parseInt(r[1]+"ff",16)>>>0:wa&&void 0!==wa[e]?wa[e]:(r=Ia.exec(e))?(Qa(r[1])<<24|Qa(r[2])<<16|Qa(r[3])<<8|255)>>>0:(r=Pa.exec(e))?(Qa(r[1])<<24|Qa(r[2])<<16|Qa(r[3])<<8|Za(r[4]))>>>0:(r=Wa.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=Na.exec(e))?parseInt(r[1],16)>>>0:(r=Ha.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=Ra.exec(e))?(255|qa(Ua(r[1]),Xa(r[2]),Xa(r[3])))>>>0:(r=La.exec(e))?(qa(Ua(r[1]),Xa(r[2]),Xa(r[3]))|Za(r[4]))>>>0:null}(e);if(null===r)return e;r=r||0;return`rgba(${(4278190080&r)>>>24}, ${(16711680&r)>>>16}, ${(65280&r)>>>8}, ${(255&r)/255})`}var Ja=(e,r,t)=>{if(ua.fun(e))return e;if(ua.arr(e))return Ja({range:e,output:r,extrapolate:t});if(ua.str(e.output[0]))return fa(e);const n=e,i=n.output,o=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const r=function(e,r){for(var t=1;t<r.length-1&&!(r[t]>=e);++t);return t-1}(e,o);return function(e,r,t,n,i,o,s,a,l){let d=l?l(e):e;if(d<r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(d>t){if("identity"===a)return d;"clamp"===a&&(d=t)}if(n===i)return n;if(r===t)return e<=r?n:i;r===-1/0?d=-d:t===1/0?d-=r:d=(d-r)/(t-r);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[r],o[r+1],i[r],i[r+1],l,s,a,n.map)}};var Ka=1.70158,el=1.525*Ka,rl=Ka+1,tl=2*Math.PI/3,nl=2*Math.PI/4.5,il=e=>{const r=7.5625,t=2.75;return e<1/t?r*e*e:e<2/t?r*(e-=1.5/t)*e+.75:e<2.5/t?r*(e-=2.25/t)*e+.9375:r*(e-=2.625/t)*e+.984375},ol={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>rl*e*e*e-Ka*e*e,easeOutBack:e=>1+rl*Math.pow(e-1,3)+Ka*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-el)/2:(Math.pow(2*e-2,2)*((el+1)*(2*e-2)+el)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*tl),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*tl)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*nl)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*nl)/2+1,easeInBounce:e=>1-il(1-e),easeOutBounce:il,easeInOutBounce:e=>e<.5?(1-il(1-2*e))/2:(1+il(2*e-1))/2,steps:(e,r="end")=>t=>{const n=(t="end"===r?Math.min(t,.999):Math.max(t,.001))*e,i="end"===r?Math.floor(n):Math.ceil(n);return o=0,s=1,a=i/e,Math.min(Math.max(a,o),s);var o,s,a}},sl=Symbol.for("FluidValue.get"),al=Symbol.for("FluidValue.observers"),ll=e=>Boolean(e&&e[sl]),dl=e=>e&&e[sl]?e[sl]():e,cl=e=>e[al]||null;function ul(e,r){const t=e[al];t&&t.forEach((e=>{!function(e,r){e.eventObserved?e.eventObserved(r):e(r)}(e,r)}))}var hl=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");gl(this,e)}},gl=(e,r)=>fl(e,sl,r);function bl(e,r){if(e[sl]){let t=e[al];t||fl(e,al,t=new Set),t.has(r)||(t.add(r),e.observerAdded&&e.observerAdded(t.size,r))}return r}function ml(e,r){const t=e[al];if(t&&t.has(r)){const n=t.size-1;n?t.delete(r):e[al]=null,e.observerRemoved&&e.observerRemoved(n,r)}}var pl,fl=(e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}),yl=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,vl=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,xl=new RegExp(`(${yl.source})(%|[a-z]+)`,"i"),wl=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,$l=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Fl=e=>{const[r,t]=Cl(e);if(!r||xa())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(n)return n.trim();if(t&&t.startsWith("--")){const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);return r||e}return t&&$l.test(t)?Fl(t):t||e},Cl=e=>{const r=$l.exec(e);if(!r)return[,];const[,t,n]=r;return[t,n]},El=(e,r,t,n,i)=>`rgba(${Math.round(r)}, ${Math.round(t)}, ${Math.round(n)}, ${i})`,Dl=e=>{pl||(pl=wa?new RegExp(`(${Object.keys(wa).join("|")})(?!\\w)`,"g"):/^\b$/);const r=e.output.map((e=>dl(e).replace($l,Fl).replace(vl,Ga).replace(pl,Ga))),t=r.map((e=>e.match(yl).map(Number))),n=t[0].map(((e,r)=>t.map((e=>{if(!(r in e))throw Error('The arity of each "output" value must be equal');return e[r]})))).map((r=>Ja({...e,output:r})));return e=>{const t=!xl.test(r[0])&&r.find((e=>xl.test(e)))?.replace(yl,"");let i=0;return r[0].replace(yl,(()=>`${n[i++](e)}${t||""}`)).replace(wl,El)}},kl="react-spring: ",Sl=e=>{const r=e;let t=!1;if("function"!=typeof r)throw new TypeError(`${kl}once requires a function parameter`);return(...e)=>{t||(r(...e),t=!0)}},Ol=Sl(console.warn);var _l=Sl(console.warn);function Al(e){return ua.str(e)&&("#"==e[0]||/\d/.test(e)||!xa()&&$l.test(e)||e in(wa||{}))}var Bl=xa()?y:v;function Ml(){const e=g()[1],r=(()=>{const e=h(!1);return Bl((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{r.current&&e(Math.random())}}var zl=e=>y(e,jl),jl=[];function Tl(e){const r=h();return y((()=>{r.current=e})),r.current}var Il=Symbol.for("Animated:node"),Pl=e=>e&&e[Il],Rl=(e,r)=>((e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}))(e,Il,r),Ll=e=>e&&e[Il]&&e[Il].getPayload(),Wl=class{constructor(){Rl(this,this)}getPayload(){return this.payload||[]}},Hl=class extends Wl{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,ua.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Hl(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,r){return ua.num(e)&&(this.lastPosition=e,r&&(e=Math.round(e/r)*r,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,ua.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Yl=class extends Hl{constructor(e){super(0),this._string=null,this._toString=Ja({output:[e,e]})}static create(e){return new Yl(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(ua.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ja({output:[this.getValue(),e]})),this._value=0,super.reset()}},Nl={dependencies:null},Vl=class extends Wl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const r={};return ba(this.source,((t,n)=>{var i;(i=t)&&i[Il]===i?r[n]=t.getValue(e):ll(t)?r[n]=dl(t):e||(r[n]=t)})),r}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&ga(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const r=new Set;return ba(e,this._addToPayload,r),Array.from(r)}}_addToPayload(e){Nl.dependencies&&ll(e)&&Nl.dependencies.add(e);const r=Ll(e);r&&ga(r,(e=>this.add(e)))}},ql=class extends Vl{constructor(e){super(e)}static create(e){return new ql(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const r=this.getPayload();return e.length==r.length?r.map(((r,t)=>r.setValue(e[t]))).some(Boolean):(super.setValue(e.map(Ql)),!0)}};function Ql(e){return(Al(e)?Yl:Hl).create(e)}function Ul(e){const r=Pl(e);return r?r.constructor:ua.arr(e)?ql:Al(e)?Yl:Hl}var Zl=(e,r)=>{const t=!ua.fun(e)||e.prototype&&e.prototype.isReactComponent;return w(((n,i)=>{const o=h(null),s=t&&$((e=>{o.current=function(e,r){e&&(ua.fun(e)?e(r):e.current=r);return r}(i,e)}),[i]),[a,l]=function(e,r){const t=new Set;Nl.dependencies=t,e.style&&(e={...e,style:r.createAnimatedStyle(e.style)});return e=new Vl(e),Nl.dependencies=null,[e,t]}(n,r),d=Ml(),u=()=>{const e=o.current;if(t&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,a.getValue(!0)))&&d()},g=new Xl(u,l),b=h();Bl((()=>(b.current=g,ga(l,(e=>bl(e,g))),()=>{b.current&&(ga(b.current.deps,(e=>ml(e,b.current))),Qs.cancel(b.current.update))}))),y(u,[]),zl((()=>()=>{const e=b.current;ga(e.deps,(r=>ml(r,e)))}));const m=r.getComponentProps(a.getValue());return c.createElement(e,{...m,ref:s})}))},Xl=class{constructor(e,r){this.update=e,this.deps=r}eventObserved(e){"change"==e.type&&Qs.write(this.update)}};var Gl=Symbol.for("AnimatedComponent"),Jl=e=>ua.str(e)?e:e&&ua.str(e.displayName)?e.displayName:ua.fun(e)&&e.name||null;function Kl(e,...r){return ua.fun(e)?e(...r):e}var ed=(e,r)=>!0===e||!!(r&&e&&(ua.fun(e)?e(r):ma(e).includes(r))),rd=(e,r)=>ua.obj(e)?r&&e[r]:e,td=(e,r)=>!0===e.default?e[r]:e.default?e.default[r]:void 0,nd=e=>e,id=(e,r=nd)=>{let t=od;e.default&&!0!==e.default&&(e=e.default,t=Object.keys(e));const n={};for(const i of t){const t=r(e[i],i);ua.und(t)||(n[i]=t)}return n},od=["config","onProps","onStart","onChange","onPause","onResume","onRest"],sd={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ad(e){const r=function(e){const r={};let t=0;if(ba(e,((e,n)=>{sd[n]||(r[n]=e,t++)})),t)return r}(e);if(r){const t={to:r};return ba(e,((e,n)=>n in r||(t[n]=e))),t}return{...e}}function ld(e){return e=dl(e),ua.arr(e)?e.map(ld):Al(e)?Vs.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function dd(e){return ua.fun(e)||ua.arr(e)&&ua.obj(e[0])}var cd={tension:170,friction:26,mass:1,damping:1,easing:ol.linear,clamp:!1},ud=class{constructor(){this.velocity=0,Object.assign(this,cd)}};function hd(e,r){if(ua.und(r.decay)){const t=!ua.und(r.tension)||!ua.und(r.friction);!t&&ua.und(r.frequency)&&ua.und(r.damping)&&ua.und(r.mass)||(e.duration=void 0,e.decay=void 0),t&&(e.frequency=void 0)}else e.duration=void 0}var gd=[],bd=class{constructor(){this.changed=!1,this.values=gd,this.toValues=null,this.fromValues=gd,this.config=new ud,this.immediate=!1}};function md(e,{key:r,props:t,defaultProps:n,state:i,actions:o}){return new Promise(((s,a)=>{let l,d,c=ed(t.cancel??n?.cancel,r);if(c)g();else{ua.und(t.pause)||(i.paused=ed(t.pause,r));let e=n?.pause;!0!==e&&(e=i.paused||ed(e,r)),l=Kl(t.delay||0,r),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-Qs.now()}function h(){l>0&&!Vs.skipAnimation?(i.delayed=!0,d=Qs.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(d)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...t,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var pd=(e,r)=>1==r.length?r[0]:r.some((e=>e.cancelled))?vd(e.get()):r.every((e=>e.noop))?fd(e.get()):yd(e.get(),r.every((e=>e.finished))),fd=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),yd=(e,r,t=!1)=>({value:e,finished:r,cancelled:t}),vd=e=>({value:e,cancelled:!0,finished:!1});function xd(e,r,t,n){const{callId:i,parentId:o,onRest:s}=r,{asyncTo:a,promise:l}=t;return o||e!==a||r.reset?t.promise=(async()=>{t.asyncId=i,t.asyncTo=e;const d=id(r,((e,r)=>"onRest"===r?void 0:e));let c,u;const h=new Promise(((e,r)=>(c=e,u=r))),g=e=>{const r=i<=(t.cancelId||0)&&vd(n)||i!==t.asyncId&&yd(n,!1);if(r)throw e.result=r,u(e),e},b=(e,r)=>{const o=new $d,s=new Fd;return(async()=>{if(Vs.skipAnimation)throw wd(t),s.result=yd(n,!1),u(s),s;g(o);const a=ua.obj(e)?{...e}:{...r,to:e};a.parentId=i,ba(d,((e,r)=>{ua.und(a[r])&&(a[r]=e)}));const l=await n.start(a);return g(o),t.paused&&await new Promise((e=>{t.resumeQueue.add(e)})),l})()};let m;if(Vs.skipAnimation)return wd(t),yd(n,!1);try{let r;r=ua.arr(e)?(async e=>{for(const r of e)await b(r)})(e):Promise.resolve(e(b,n.stop.bind(n))),await Promise.all([r.then(c),h]),m=yd(n.get(),!0,!1)}catch(e){if(e instanceof $d)m=e.result;else{if(!(e instanceof Fd))throw e;m=e.result}}finally{i==t.asyncId&&(t.asyncId=o,t.asyncTo=o?a:void 0,t.promise=o?l:void 0)}return ua.fun(s)&&Qs.batchedUpdates((()=>{s(m,n,n.item)})),m})():l}function wd(e,r){pa(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,r&&(e.cancelId=r)}var $d=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Fd=class extends Error{constructor(){super("SkipAnimationSignal")}},Cd=e=>e instanceof Dd,Ed=1,Dd=class extends hl{constructor(){super(...arguments),this.id=Ed++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Pl(this);return e&&e.getValue()}to(...e){return Vs.to(this,e)}interpolate(...e){return Ol(`${kl}The "interpolate" function is deprecated in v9 (use "to" instead)`),Vs.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,r=!1){ul(this,{type:"change",parent:this,value:e,idle:r})}_onPriorityChange(e){this.idle||Oa.sort(this),ul(this,{type:"priority",parent:this,priority:e})}},kd=Symbol.for("SpringPhase"),Sd=e=>(1&e[kd])>0,Od=e=>(2&e[kd])>0,_d=e=>(4&e[kd])>0,Ad=(e,r)=>r?e[kd]|=3:e[kd]&=-3,Bd=(e,r)=>r?e[kd]|=4:e[kd]&=-5,Md=class extends Dd{constructor(e,r){if(super(),this.animation=new bd,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!ua.und(e)||!ua.und(r)){const t=ua.obj(e)?{...e}:{...r,from:e};ua.und(t.default)&&(t.default=!0),this.start(t)}}get idle(){return!(Od(this)||this._state.asyncTo)||_d(this)}get goal(){return dl(this.animation.to)}get velocity(){const e=Pl(this);return e instanceof Hl?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Sd(this)}get isAnimating(){return Od(this)}get isPaused(){return _d(this)}get isDelayed(){return this._state.delayed}advance(e){let r=!0,t=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,s=Ll(n.to);!s&&ll(n.to)&&(i=ma(dl(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==Yl?1:s?s[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,o.tension<=0)return void(a.done=!0);let r=a.elapsedTime+=e;const t=n.fromValues[l],i=null!=a.v0?a.v0:a.v0=ua.arr(o.velocity)?o.velocity[l]:o.velocity;let s;const h=o.precision||(t==d?.005:Math.min(1,.001*Math.abs(d-t)));if(ua.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*r);u=t+i/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=i*n}else{s=null==a.lastVelocity?i:a.lastVelocity;const r=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!ua.und(n),g=t==d?a.v0>0:t<d;let b,m=!1;const p=1,f=Math.ceil(e/p);for(let e=0;e<f&&(b=Math.abs(s)>r,b||(c=Math.abs(d-u)<=h,!c));++e){l&&(m=u==d||u>d==g,m&&(s=-s*n,u=d));s+=(1e-6*-o.tension*(u-d)+.001*-o.friction*s)/o.mass*p,u+=s*p}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,a.durationProgress>0&&(a.elapsedTime=o.duration*a.durationProgress,r=a.elapsedTime+=e)),n=(o.progress||0)+r/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=t+o.easing(n)*(d-t),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:r=!1,a.setValue(u,o.round)&&(t=!0)}));const a=Pl(this),l=a.getValue();if(r){const e=dl(n.to);l===e&&!t||o.decay?t&&o.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else t&&this._onChange(l)}set(e){return Qs.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Od(this)){const{to:e,config:r}=this.animation;Qs.batchedUpdates((()=>{this._onStart(),r.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,r){let t;return ua.und(e)?(t=this.queue||[],this.queue=[]):t=[ua.obj(e)?e:{...r,to:e}],Promise.all(t.map((e=>this._update(e)))).then((e=>pd(this,e)))}stop(e){const{to:r}=this.animation;return this._focus(this.get()),wd(this._state,e&&this._lastCallId),Qs.batchedUpdates((()=>this._stop(r,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const r=this.key||"";let{to:t,from:n}=e;t=ua.obj(t)?t[r]:t,(null==t||dd(t))&&(t=void 0),n=ua.obj(n)?n[r]:n,null==n&&(n=void 0);const i={to:t,from:n};return Sd(this)||(e.reverse&&([t,n]=[n,t]),n=dl(n),ua.und(n)?Pl(this)||this._set(t):this._set(n)),i}_update({...e},r){const{key:t,defaultProps:n}=this;e.default&&Object.assign(n,id(e,((e,r)=>/^on/.test(r)?rd(e,t):e))),Ld(this,e,"onProps"),Wd(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return md(++this._lastCallId,{key:t,props:e,defaultProps:n,state:o,actions:{pause:()=>{_d(this)||(Bd(this,!0),va(o.pauseQueue),Wd(this,"onPause",yd(this,zd(this,this.animation.to)),this))},resume:()=>{_d(this)&&(Bd(this,!1),Od(this)&&this._resume(),va(o.resumeQueue),Wd(this,"onResume",yd(this,zd(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((t=>{if(e.loop&&t.finished&&(!r||!t.noop)){const r=jd(e);if(r)return this._update(r,!0)}return t}))}_merge(e,r,t){if(r.cancel)return this.stop(!0),t(vd(this));const n=!ua.und(e.to),i=!ua.und(e.from);if(n||i){if(!(r.callId>this._lastToId))return t(vd(this));this._lastToId=r.callId}const{key:o,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!i||n||r.default&&!ua.und(c)||(c=u),r.reverse&&([c,u]=[u,c]);const h=!ha(u,d);h&&(a.from=u),u=dl(u);const g=!ha(c,l);g&&this._focus(c);const b=dd(r.to),{config:m}=a,{decay:p,velocity:f}=m;(n||i)&&(m.velocity=0),r.config&&!b&&function(e,r,t){t&&(hd(t={...t},r),r={...t,...r}),hd(e,r),Object.assign(e,r);for(const r in cd)null==e[r]&&(e[r]=cd[r]);let{frequency:n,damping:i}=e;const{mass:o}=e;ua.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(m,Kl(r.config,o),r.config!==s.config?Kl(s.config,o):void 0);let y=Pl(this);if(!y||ua.und(c))return t(yd(this,!0));const v=ua.und(r.reset)?i&&!r.default:!ua.und(u)&&ed(r.reset,o),x=v?u:this.get(),w=ld(c),$=ua.num(w)||ua.arr(w)||Al(w),F=!b&&(!$||ed(s.immediate||r.immediate,o));if(g){const e=Ul(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=ll(c),D=!1;if(!E){const e=v||!Sd(this)&&h;(g||e)&&(D=ha(ld(x),w),E=!D),(ha(a.immediate,F)||F)&&ha(m.decay,p)&&ha(m.velocity,f)||(E=!0)}if(D&&Od(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!b&&((E||ll(l))&&(a.values=y.getPayload(),a.toValues=ll(c)?null:C==Yl?[1]:ma(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=a;ga(Rd,(e=>Ld(this,r,e)));const n=yd(this,zd(this,l));va(this._pendingCalls,n),this._pendingCalls.add(t),a.changed&&Qs.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?Kl(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),b?t(xd(r.to,r,this._state,this)):E?this._start():Od(this)&&!g?this._pendingCalls.add(t):t(fd(x))}_focus(e){const r=this.animation;e!==r.to&&(cl(this)&&this._detach(),r.to=e,cl(this)&&this._attach())}_attach(){let e=0;const{to:r}=this.animation;ll(r)&&(bl(r,this),Cd(r)&&(e=r.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;ll(e)&&ml(e,this)}_set(e,r=!0){const t=dl(e);if(!ua.und(t)){const e=Pl(this);if(!e||!ha(t,e.getValue())){const n=Ul(t);e&&e.constructor==n?e.setValue(t):Rl(this,n.create(t)),e&&Qs.batchedUpdates((()=>{this._onChange(t,r)}))}}return Pl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Wd(this,"onStart",yd(this,zd(this,e.to)),this))}_onChange(e,r){r||(this._onStart(),Kl(this.animation.onChange,e,this)),Kl(this.defaultProps.onChange,e,this),super._onChange(e,r)}_start(){const e=this.animation;Pl(this).reset(dl(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Od(this)||(Ad(this,!0),_d(this)||this._resume())}_resume(){Vs.skipAnimation?this.finish():Oa.start(this)}_stop(e,r){if(Od(this)){Ad(this,!1);const t=this.animation;ga(t.values,(e=>{e.done=!0})),t.toValues&&(t.onChange=t.onPause=t.onResume=void 0),ul(this,{type:"idle",parent:this});const n=r?vd(this.get()):yd(this.get(),zd(this,e??t.to));va(this._pendingCalls,n),t.changed&&(t.changed=!1,Wd(this,"onRest",n,this))}}};function zd(e,r){const t=ld(r);return ha(ld(e.get()),t)}function jd(e,r=e.loop,t=e.to){const n=Kl(r);if(n){const i=!0!==n&&ad(n),o=(i||e).reverse,s=!i||i.reset;return Td({...e,loop:r,default:!1,pause:void 0,to:!o||dd(t)?t:void 0,from:s?e.from:void 0,reset:s,...i})}}function Td(e){const{to:r,from:t}=e=ad(e),n=new Set;return ua.obj(r)&&Pd(r,n),ua.obj(t)&&Pd(t,n),e.keys=n.size?Array.from(n):null,e}function Id(e){const r=Td(e);return ua.und(r.default)&&(r.default=id(r)),r}function Pd(e,r){ba(e,((e,t)=>null!=e&&r.add(t)))}var Rd=["onStart","onRest","onChange","onPause","onResume"];function Ld(e,r,t){e.animation[t]=r[t]!==td(r,t)?rd(r[t],e.key):void 0}function Wd(e,r,...t){e.animation[r]?.(...t),e.defaultProps[r]?.(...t)}var Hd=["onStart","onChange","onRest"],Yd=1,Nd=class{constructor(e,r){this.id=Yd++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),r&&(this._flush=r),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((r,t)=>e[t]=r.get())),e}set(e){for(const r in e){const t=e[r];ua.und(t)||this.springs[r].set(t)}}update(e){return e&&this.queue.push(Td(e)),this}start(e){let{queue:r}=this;return e?r=ma(e).map(Td):this.queue=[],this._flush?this._flush(this,r):(Gd(this,r),Vd(this,r))}stop(e,r){if(e!==!!e&&(r=e),r){const t=this.springs;ga(ma(r),(r=>t[r].stop(!!e)))}else wd(this._state,this._lastAsyncId),this.each((r=>r.stop(!!e)));return this}pause(e){if(ua.und(e))this.start({pause:!0});else{const r=this.springs;ga(ma(e),(e=>r[e].pause()))}return this}resume(e){if(ua.und(e))this.start({pause:!1});else{const r=this.springs;ga(ma(e),(e=>r[e].resume()))}return this}each(e){ba(this.springs,e)}_onFrame(){const{onStart:e,onChange:r,onRest:t}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,pa(e,(([e,r])=>{r.value=this.get(),e(r,this,this._item)})));const o=!n&&this._started,s=i||o&&t.size?this.get():null;i&&r.size&&pa(r,(([e,r])=>{r.value=s,e(r,this,this._item)})),o&&(this._started=!1,pa(t,(([e,r])=>{r.value=s,e(r,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Qs.onFrame(this._onFrame)}};function Vd(e,r){return Promise.all(r.map((r=>qd(e,r)))).then((r=>pd(e,r)))}async function qd(e,r,t){const{keys:n,to:i,from:o,loop:s,onRest:a,onResolve:l}=r,d=ua.obj(r.default)&&r.default;s&&(r.loop=!1),!1===i&&(r.to=null),!1===o&&(r.from=null);const c=ua.arr(i)||ua.fun(i)?i:void 0;c?(r.to=void 0,r.onRest=void 0,d&&(d.onRest=void 0)):ga(Hd,(t=>{const n=r[t];if(ua.fun(n)){const i=e._events[t];r[t]=({finished:e,cancelled:r})=>{const t=i.get(n);t?(e||(t.finished=!1),r&&(t.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:r||!1})},d&&(d[t]=r[t])}}));const u=e._state;r.pause===!u.paused?(u.paused=r.pause,va(r.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(r.pause=!0);const h=(n||Object.keys(e.springs)).map((t=>e.springs[t].start(r))),g=!0===r.cancel||!0===td(r,"cancel");(c||g&&u.asyncId)&&h.push(md(++e._lastAsyncId,{props:r,state:u,actions:{pause:ca,resume:ca,start(r,t){g?(wd(u,e._lastAsyncId),t(vd(e))):(r.onRest=a,t(xd(c,r,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const b=pd(e,await Promise.all(h));if(s&&b.finished&&(!t||!b.noop)){const t=jd(r,s,i);if(t)return Gd(e,[t]),qd(e,t,!0)}return l&&Qs.batchedUpdates((()=>l(b,e,e.item))),b}function Qd(e,r){const t={...e.springs};return r&&ga(ma(r),(e=>{ua.und(e.keys)&&(e=Td(e)),ua.obj(e.to)||(e={...e,to:void 0}),Xd(t,e,(e=>Zd(e)))})),Ud(e,t),t}function Ud(e,r){ba(r,((r,t)=>{e.springs[t]||(e.springs[t]=r,bl(r,e))}))}function Zd(e,r){const t=new Md;return t.key=e,r&&bl(t,r),t}function Xd(e,r,t){r.keys&&ga(r.keys,(n=>{(e[n]||(e[n]=t(n)))._prepareNode(r)}))}function Gd(e,r){ga(r,(r=>{Xd(e.springs,r,(r=>Zd(r,e)))}))}var Jd,Kd,ec=({children:e,...r})=>{const t=F(rc),n=r.pause||!!t.pause,i=r.immediate||!!t.immediate;r=function(e,r){const[t]=g((()=>({inputs:r,result:e()}))),n=h(),i=n.current;let o=i;o?Boolean(r&&o.inputs&&function(e,r){if(e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}(r,o.inputs))||(o={inputs:r,result:e()}):o=t;return y((()=>{n.current=o,i==t&&(t.inputs=t.result=void 0)}),[o]),o.result}((()=>({pause:n,immediate:i})),[n,i]);const{Provider:o}=rc;return c.createElement(o,{value:r},e)},rc=(Jd=ec,Kd={},Object.assign(Jd,c.createContext(Kd)),Jd.Provider._context=Jd,Jd.Consumer._context=Jd,Jd);ec.Provider=rc.Provider,ec.Consumer=rc.Consumer;var tc=()=>{const e=[],r=function(r){_l(`${kl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return ga(e,((e,i)=>{if(ua.und(r))n.push(e.start());else{const o=t(r,e,i);o&&n.push(e.start(o))}})),n};r.current=e,r.add=function(r){e.includes(r)||e.push(r)},r.delete=function(r){const t=e.indexOf(r);~t&&e.splice(t,1)},r.pause=function(){return ga(e,(e=>e.pause(...arguments))),this},r.resume=function(){return ga(e,(e=>e.resume(...arguments))),this},r.set=function(r){ga(e,((e,t)=>{const n=ua.fun(r)?r(t,e):r;n&&e.set(n)}))},r.start=function(r){const t=[];return ga(e,((e,n)=>{if(ua.und(r))t.push(e.start());else{const i=this._getProps(r,e,n);i&&t.push(e.start(i))}})),t},r.stop=function(){return ga(e,(e=>e.stop(...arguments))),this},r.update=function(r){return ga(e,((e,t)=>e.update(this._getProps(r,e,t)))),this};const t=function(e,r,t){return ua.fun(e)?e(t,r):e};return r._getProps=t,r};function nc(e,r){const t=ua.fun(e),[[n],i]=function(e,r,t){const n=ua.fun(r)&&r;n&&!t&&(t=[]);const i=x((()=>n||3==arguments.length?tc():void 0),[]),o=h(0),s=Ml(),a=x((()=>({ctrls:[],queue:[],flush(e,r){const t=Qd(e,r),n=o.current>0&&!a.queue.length&&!Object.keys(t).some((r=>!e.springs[r]));return n?Vd(e,r):new Promise((n=>{Ud(e,t),a.queue.push((()=>{n(Vd(e,r))})),s()}))}})),[]),l=h([...a.ctrls]),d=[],c=Tl(e)||0;function u(e,t){for(let i=e;i<t;i++){const e=l.current[i]||(l.current[i]=new Nd(null,a.flush)),t=n?n(i,e):r[i];t&&(d[i]=Id(t))}}x((()=>{ga(l.current.slice(e,c),(e=>{!function(e,r){e.ref?.delete(e),r?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,u(c,e)}),[e]),x((()=>{u(0,Math.min(c,e))}),t);const g=l.current.map(((e,r)=>Qd(e,d[r]))),b=F(ec),m=Tl(b),p=b!==m&&function(e){for(const r in e)return!0;return!1}(b);Bl((()=>{o.current++,a.ctrls=l.current;const{queue:e}=a;e.length&&(a.queue=[],ga(e,(e=>e()))),ga(l.current,((e,r)=>{i?.add(e),p&&e.start({default:b});const t=d[r];t&&(function(e,r){r&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r)}(e,t.ref),e.ref?e.queue.push(t):e.start(t))}))})),zl((()=>()=>{ga(a.ctrls,(e=>e.stop(!0)))}));const f=g.map((e=>({...e})));return i?[f,i]:f}(1,t?e:[e],t?r||[]:r);return t||2==arguments.length?[n,i]:n}var ic=class extends Dd{constructor(e,r){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ja(...r);const t=this._get(),n=Ul(t);Rl(this,n.create(t))}advance(e){const r=this._get();ha(r,this.get())||(Pl(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&sc(this._active)&&ac(this)}_get(){const e=ua.arr(this.source)?this.source.map(dl):ma(dl(this.source));return this.calc(...e)}_start(){this.idle&&!sc(this._active)&&(this.idle=!1,ga(Ll(this),(e=>{e.done=!1})),Vs.skipAnimation?(Qs.batchedUpdates((()=>this.advance())),ac(this)):Oa.start(this))}_attach(){let e=1;ga(ma(this.source),(r=>{ll(r)&&bl(r,this),Cd(r)&&(r.idle||this._active.add(r),e=Math.max(e,r.priority+1))})),this.priority=e,this._start()}_detach(){ga(ma(this.source),(e=>{ll(e)&&ml(e,this)})),this._active.clear(),ac(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ma(this.source).reduce(((e,r)=>Math.max(e,(Cd(r)?r.priority:0)+1)),0))}};function oc(e){return!1!==e.idle}function sc(e){return!e.size||Array.from(e).every(oc)}function ac(e){e.idle||(e.idle=!0,ga(Ll(e),(e=>{e.done=!0})),ul(e,{type:"idle",parent:e}))}Vs.assign({createStringInterpolator:Dl,to:(e,r)=>new ic(e,r)});var lc=/^--/;function dc(e,r){return null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||lc.test(e)||uc.hasOwnProperty(e)&&uc[e]?(""+r).trim():r+"px"}var cc={};var uc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hc=["Webkit","Ms","Moz","O"];uc=Object.keys(uc).reduce(((e,r)=>(hc.forEach((t=>e[((e,r)=>e+r.charAt(0).toUpperCase()+r.substring(1))(t,r)]=e[r])),e)),uc);var gc=/^(matrix|translate|scale|rotate|skew)/,bc=/^(translate)/,mc=/^(rotate|skew)/,pc=(e,r)=>ua.num(e)&&0!==e?e+r:e,fc=(e,r)=>ua.arr(e)?e.every((e=>fc(e,r))):ua.num(e)?e===r:parseFloat(e)===r,yc=class extends Vl{constructor({x:e,y:r,z:t,...n}){const i=[],o=[];(e||r||t)&&(i.push([e||0,r||0,t||0]),o.push((e=>[`translate3d(${e.map((e=>pc(e,"px"))).join(",")})`,fc(e,0)]))),ba(n,((e,r)=>{if("transform"===r)i.push([e||""]),o.push((e=>[e,""===e]));else if(gc.test(r)){if(delete n[r],ua.und(e))return;const t=bc.test(r)?"px":mc.test(r)?"deg":"";i.push(ma(e)),o.push("rotate3d"===r?([e,r,n,i])=>[`rotate3d(${e},${r},${n},${pc(i,t)})`,fc(i,0)]:e=>[`${r}(${e.map((e=>pc(e,t))).join(",")})`,fc(e,r.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new vc(i,o)),super(n)}},vc=class extends hl{constructor(e,r){super(),this.inputs=e,this.transforms=r,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",r=!0;return ga(this.inputs,((t,n)=>{const i=dl(t[0]),[o,s]=this.transforms[n](ua.arr(i)?i:t.map(dl));e+=" "+o,r=r&&s})),r?"none":e}observerAdded(e){1==e&&ga(this.inputs,(e=>ga(e,(e=>ll(e)&&bl(e,this)))))}observerRemoved(e){0==e&&ga(this.inputs,(e=>ga(e,(e=>ll(e)&&ml(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),ul(this,e)}};Vs.assign({batchedUpdates:U,createStringInterpolator:Dl,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var xc=((e,{applyAnimatedValues:r=()=>!1,createAnimatedStyle:t=e=>new Vl(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:r,createAnimatedStyle:t,getComponentProps:n},o=e=>{const r=Jl(e)||"Anonymous";return(e=ua.str(e)?o[e]||(o[e]=Zl(e,i)):e[Gl]||(e[Gl]=Zl(e,i))).displayName=`Animated(${r})`,e};return ba(e,((r,t)=>{ua.arr(e)&&(t=Jl(r)),o[t]=o(r)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,r){if(!e.nodeType||!e.setAttribute)return!1;const t="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:s,viewBox:a,...l}=r,d=Object.values(l),c=Object.keys(l).map((r=>t||e.hasAttribute(r)?r:cc[r]||(cc[r]=r.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const r in n)if(n.hasOwnProperty(r)){const t=dc(r,n[r]);lc.test(r)?e.style.setProperty(r,t):e.style[r]=t}c.forEach(((r,t)=>{e.setAttribute(r,d[t])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new yc(e),getComponentProps:({scrollTop:e,scrollLeft:r,...t})=>t}),wc=xc.animated;const $c=E.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,t=e.animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${uo.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Fc=r=>{var{id:t="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:a,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=r,u=ce(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,b]=g(),[m,p]=g();y((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(f(),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)})),[]),y((()=>{var e,r;n&&c&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[n]);const f=()=>{const e=.01*window.innerHeight;b(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;b(e),p(window.visualViewport.offsetTop)}};return e(Eo,{"data-testid":`${t}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:t,rootId:a,zIndex:l,children:e($c,Object.assign({show:n,animationFrom:i,"data-testid":t,verticalHeight:h,offsetTop:m},u,{children:o}))})},Cc=E.div`
    border-radius: ${lo.md};
    background: ${no.bg};
    padding: ${ao["spacing-16"]} ${ao["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?D`
                  border: ${so["width-010"]} ${so.solid}
                      ${no.border};
              `:D`
                  box-shadow: 0 2px 8px
                      rgba(from ${no.Primitive["neutral-50"]} r g b / 24%);
              `}}
`,Ec=E.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ao["spacing-24"]};
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
                background-color: ${no["bg-hover-neutral"]};
            `}
    }
`,Dc=u.forwardRef(((r,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=r,a=ce(r,["children","focusHighlight","focusOutline","type"]);return e(Ec,Object.assign({ref:t,$outline:o,$highlight:i,type:s},a,{children:n}))})),kc=E.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${no.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: ${lo.lg};
    overflow: hidden;

    ${uo.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Sc=E(Dc)`
    position: absolute;
    top: var(--close-button-top-inset, ${ao["spacing-16"]});
    right: var(--close-button-right-inset, ${ao["spacing-16"]});
    padding: 0;
    color: ${no.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${uo.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${ao["spacing-20"]});
    }
`,Oc=E.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,_c=E((r=>{var{children:t}=r,n=ce(r,["children"]);const i=n["data-testid"]||"card";return e(Cc,Object.assign({},n,{"data-testid":i,children:"string"==typeof t?e(hs.BodyBL,{children:t}):t}))}))`
    color: ${no.text};
    ${ls({textSize:"body-md"})}

    ${uo.MaxWidth.sm} {
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
        background: ${no["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${lo.full};
        background-clip: padding-box;
    }
`,Ac=E((t=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:s=!0}=t,a=ce(t,["id","children","onClose","showCloseButton"]);return r(kc,Object.assign({"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[s&&e(Sc,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(oe,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Bc=E.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${no.text};
    ${ls({textSize:"body-md"})}
`,Mc=n=>{var{children:i,visible:o,onMobileClose:s,maxHeight:a,overflow:l}=n,d=ce(n,["children","visible","onMobileClose","maxHeight","overflow"]);const c=d["data-testid"]||"popover",u=S(),h=co["sm-max"]({theme:u}),g=me.useMediaQuery({maxWidth:h}),b=()=>{s&&s()},m=()=>"string"==typeof i?e(hs.BodyMD,{children:i}):i;return r(t,{children:[o&&e(Oc,Object.assign({"data-testid":c},d,{children:e(_c,{$maxHeight:a,$overflow:l,children:m()})})),g&&e(Fc,{show:null!=o&&o,onOverlayClick:b,children:e(Ac,{onClose:b,children:e(Bc,{children:m()})})})]})},zc=E.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,jc=n=>{var i,o,{children:s,popoverContent:a,trigger:l="click",position:d="top",zIndex:c,rootNode:u,customOffset:b,delay:m,onPopoverAppear:p,onPopoverDismiss:f,enableFlip:v=!0,enableResize:x=!1,overflow:w="auto"}=n,$=ce(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","enableFlip","enableResize","overflow"]);const[F,C]=g(!1),E=h(null),D=h(null),k=S(),_=co["sm-max"]({theme:k}),A=me.useMediaQuery({maxWidth:_}),[B,q]=g(0),{refs:Q,floatingStyles:U,context:Z}=M({open:F,placement:d,whileElementsMounted:z,middleware:[j(null!=b?b:16),v&&T(),I({limiter:P()}),x&&R({apply({availableHeight:e}){q(e)}})],onOpenChange:e=>{C(e),F!==e&&ie(e)}}),X=(()=>{const[e,r]=g(void 0),t=O();return y((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Fo.Change,e),t.events.emit(Fo.Ready),()=>t.events.off(Fo.Change,e)}),[t]),e})(),G=A?"click":l,J=L(Z,{ignoreMouse:"hover"===G}),K=W(Z),ee=H(Z,{enabled:"hover"===G,delay:{open:null!==(i=null==m?void 0:m.open)&&void 0!==i?i:0,close:null!==(o=null==m?void 0:m.close)&&void 0!==o?o:500}}),{getReferenceProps:re,getFloatingProps:te}=Y([J,K,ee]),ne=()=>{C(!1),ie(!1)},ie=e=>{e&&p&&p(),!e&&f&&f()};return r(t,{children:[e(zc,Object.assign({ref:e=>{E.current=e,Q.setReference(e)}},re({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),$,{children:s})),F&&e(N,{root:u,children:e(V,{context:Z,children:e("div",Object.assign({ref:e=>{D.current=e,Q.setFloating(e)},style:Object.assign(Object.assign({},U),{outline:"none",zIndex:null!=c?c:X})},te(),{children:"function"==typeof a?a(x?{maxHeight:B,overflow:w}:{}):e(Mc,{visible:!0,onMobileClose:ne,maxHeight:x?B:void 0,overflow:x?w:void 0,children:a})}))})})]})},Tc=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Ic=E.span`
    color: ${no["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Tc(e)}

    &:hover,
    &:focus-visible {
        color: ${no["text-hover"]};
        ${({$hoverStyle:e})=>Tc(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Pc=E.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Rc=t=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:s="default",underlineHoverStyle:a="default"}=t,l=ce(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return e(jc,Object.assign({},l,{children:r(Ic,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:s,$hoverStyle:a,"aria-label":null!=n?n:d?void 0:"More info",children:[i,o&&e(Pc,{$standalone:!d,children:o})]})}))},Lc=E.div`
    padding-left: ${ao["spacing-4"]};
    display: inline;
`,Wc=({addon:r,rootNode:t})=>{const{content:n,type:i,icon:o,id:s,zIndex:a,"data-testid":l}=r;return e(Lc,{children:e(Rc,{trigger:"click",id:s,"data-testid":l,popoverContent:n,rootNode:t,zIndex:a,icon:null!=o?o:e(ee,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Hc=E.div`
    background-color: ${e=>e.$collapsible?no["bg-strong"]:no.bg};
    ${uo.MaxWidth.lg} {
        background-color: ${no["bg-strong"]};
    }
`,Yc=E.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${no.border};

    ${uo.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${ao["spacing-16"]};
    }
`,Nc=E.div`
    display: flex;
    align-items: center;

    background-color: ${no.bg};

    ${uo.MaxWidth.lg} {
        background-color: transparent;
    }
`,Vc=E(Dc)`
    margin: 0 0 0 auto;

    color: ${no.icon};
    &:hover {
        color: ${no["icon-hover"]};
    }
`,qc=E(Z)`
    height: ${io.Spec["body-size-baseline"]};
    width: ${io.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${oo["duration-350"]} ${oo["ease-standard"]};
`,Qc=E.p`
    ${io["heading-xs-semibold"]}
    color: ${no.text};

    margin: ${ao["spacing-24"]} 0 ${ao["spacing-24"]}
        ${ao["spacing-20"]};

    ${uo.MaxWidth.lg} {
        ${io["body-md-semibold"]}
        color: ${no["text-subtle"]};

        margin: ${ao["spacing-24"]} ${ao["spacing-20"]} 0
            ${ao["spacing-20"]};
    }
`,Uc=E(wc.div)`
    overflow: hidden;
`,Zc=E.div`
    padding: ${ao["spacing-24"]} ${ao["spacing-20"]};
`,Xc=E(wc.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,Gc=E(Ko.Small)`
    height: fit-content;
    padding: 0;
    margin: ${ao["spacing-16"]} 0 0 0;
`;E.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const Jc=e=>{const r=C.split(".");return parseInt(r[0],10)>=19?e:e?"true":void 0},Kc=t=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:s,onExpandChange:a,minimisable:l=!1,minimisedHeight:d,showDivider:c=!0,showMobileDivider:u=!0,title:h,addon:b,children:m}=t,p=ce(t,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:f,rootNode:v}=F(So),x="mobile"===f,[w,$]=g(A()),[C,E]=g(l),D=!x&&i,k=Mr(),S=Mr(),O=nc({height:w?k.height:0}),_=C?null!=d?d:Math.min(.5*(null!==(n=S.height)&&void 0!==n?n:0),216):S.height;y((()=>{$(A())}),[i,s]),y((()=>{E(l)}),[l]);function A(){return!!x||(Ys(s)?!i||o:s)}return r(Hc,{$collapsible:D,children:[e(Yc,{$showDivider:c,$showMobileDivider:u}),(h||D)&&r(Nc,{children:[h&&r(Qc,{children:[h," ",b&&("popover"===(null==b?void 0:b.type)?e(Wc,{addon:b,rootNode:x?v:void 0}):null)]}),D&&e(Vc,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!w;Ys(s)&&$(e),a&&a(e)},"aria-label":w?"Collapse":"Expand",children:e(qc,{$expanded:w})})]}),e(Uc,{"data-testid":"expandable-container","data-expanded":w,style:O,inert:Jc(!w),children:e("div",{ref:k.ref,children:r(Zc,Object.assign({},p,{children:[e(Xc,{"data-testid":"minimisable-container",$height:_,$minimisable:l,children:e("div",{ref:S.ref,children:e("div",{"data-id":"content-container",children:"function"==typeof m?m(f,{minimised:C}):m})})}),l&&r(Gc,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{E(!C)},children:["View ",C?"more":"less"]})]}))})})]})};Kc.displayName="Filter.Item";const eu=E(Kc)`
    padding: 0 0 ${ao["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${ao["spacing-8"]} ${ao["spacing-8"]} 0;

        ${uo.MaxWidth.lg} {
            padding: ${ao["spacing-16"]} ${ao["spacing-20"]}
                ${ao["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${ao["spacing-8"]} ${ao["spacing-20"]} 0;
    }
`,ru=E.div`
    display: flex;
    flex-direction: column;

    ${uo.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${ao["spacing-16"]};
    }
`,tu=E.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${ao["spacing-8"]} ${ao["spacing-12"]};

    cursor: pointer;
    ${io["body-md-regular"]}
    color: ${no.text};
    ${e=>e.$selected&&D`
            color: ${no["text-selected"]};
        `}

    ${uo.MaxWidth.lg} {
        padding: ${ao["spacing-8"]};
    }
`,nu=E((t=>{var{className:n,checked:i,disabled:o,indeterminate:s,displaySize:a="default",id:l}=t,d=ce(t,["className","checked","disabled","indeterminate","displaySize","id"]);const c=h(null);y((()=>{c.current&&(c.current.indeterminate=null!=s&&s)}),[s]);return r(ss,{className:n,"data-testid":"checkbox",$displaySize:a,children:[e(as,Object.assign({id:l,"data-testid":"checkbox-input",type:"checkbox",checked:i,ref:c,tabIndex:o?-1:0,disabled:o,"aria-checked":s?"mixed":i},d)),s?e(os,{$disabled:o,"data-testid":"indeterminate","aria-hidden":!0}):i?e(is,{$disabled:o,"data-testid":"checkmark","aria-hidden":!0}):o?e(ns,{"data-testid":"empty-disabled-checkbox","aria-hidden":!0}):e(ts,{$disabled:o,"data-testid":"empty-checkbox","aria-hidden":!0})]})}))`
    flex-shrink: 0;
    margin-right: ${ao["spacing-8"]};
`,iu=E((n=>{var{type:i="checkbox",indicator:o,checked:s,styleType:a="default",children:l,childrenMaxLines:d,subLabel:c,disabled:u,error:b,name:m,id:p,className:f,compositeSection:v,removable:w,onRemove:$,"data-testid":F,onChange:C,useContentWidth:E,"aria-describedby":D}=n,k=ce(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:S=!0,errors:O,children:_,initialExpanded:A}=v||{},[B,M]=g(s),[z,j]=g(!!A),T=x((()=>{const e=Array.isArray(O)&&(null==O?void 0:O.length)>0,r=!Array.isArray(O)&&!!O;return e||r}),[O]),[I]=g(Ie.generate()),P=p?`${p}`:`tg-${I}`,R=h(null);y((()=>{M(s)}),[s]),y((()=>{B&&j(null==A||A)}),[B]);const L=e=>{if(!u){if(C)return void C(e);switch(i){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":B||M(!0)}}},W=()=>{u||j(!z)},H=()=>{u||!$||$()},Y=()=>{let r;switch(i){case"yes":r="tick";break;case"no":r="cross";break;case"checkbox":case"radio":r=i}return e(Hs,{type:r,active:B,disabled:u,$selected:B,$disabled:u})},N=()=>{if(!c)return null;let r;return r="function"==typeof c?c():c,e(Bs,{"data-id":"toggle-sublabel",id:`${P}-sublabel`,"aria-hidden":!0,children:r})},V=n=>r(t,{children:[e(Ls,{weight:"semibold",$disabled:u,children:"Error"}),e(Ws,{$disabled:u,children:null==n?void 0:n.map(((r,t)=>e("li",{id:`${P}-error-list-item-${t}`,children:e(Ls,{weight:"semibold",$disabled:u,children:r})},t)))})]});return r(Ss,{$selected:B,$disabled:u,className:f,$styleType:a,$error:b,$indicator:o,$useContentWidth:E,id:p,"data-testid":F,children:[(()=>{const t=["string"==typeof c?`${P}-sublabel`:null,D].filter(Boolean).join(" ")||void 0;return r(Ms,{id:`${P}-header-container`,$disabled:u,$error:b,$selected:B,$indicator:o,$styleType:a,children:[r(zs,{$addPadding:w,children:[e(Os,Object.assign({ref:R,name:m,id:`${P}-input`,type:"checkbox"===i?"checkbox":"radio","data-testid":"toggle-input",disabled:u,onChange:L,checked:B,"aria-describedby":t},k)),o&&Y(),r(_s,{$selected:B,$disabled:u,children:[e(As,{htmlFor:`${P}-input`,"data-testid":`${P}-toggle-label`,$maxLines:d,children:l}),c&&N()]})]}),w&&e(js,{type:"button",$disabled:u,onClick:H,id:`${P}-remove-button`,children:"Remove"})]})})(),_&&r("div",{children:[(!S||z)&&e(Rs,{"data-id":"toggle-composite-children",$isFinalItem:!S,$disabled:u,children:_}),S&&!z&&T&&e(Is,{$disabled:u,onClick:W,id:`${P}-error-alert`,children:e(Ps,{type:u?"description":"error",className:f,showIcon:!0,children:Array.isArray(O)?V(O):O})}),S&&r(Ts,{$paddingTopRequired:!z&&!T,disabled:u,onClick:W,"data-testid":z?"collapse-button":"expand-button",children:[z?"Show less":"Show more",e(z?X:Z,{"aria-hidden":!0})]})]})]})}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
    min-width: 5rem;
`,ou=E(Ko.Small)`
    height: fit-content;
    padding: 0;
    margin: ${ao["spacing-16"]} 0 ${ao["spacing-8"]}
        ${ao["spacing-12"]};

    ${uo.MaxWidth.lg} {
        margin: 0 0 ${ao["spacing-16"]} 0;
    }
`,su=n=>{var{selectedOptions:i,options:o,onSelect:s,labelExtractor:a,valueExtractor:l,useToggleContentWidth:d}=n,c=ce(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:u}=F(So),[b,m]=g(i||[]),[p,f]=g(),[v,x]=g(o.length),w=h(null),C=h(null),E=e=>()=>{const r=[...b],t=b.findIndex((r=>S(r)===S(e)));t>=0?r.splice(t,1):r.push(e),m(r),null==s||s(r)},D=()=>{const e=b.length?[]:o;m(e),null==s||s(e)},k=e=>{var r;return a?a(e):null!==(r=e.label)&&void 0!==r?r:null==e?void 0:e.toString()},S=e=>{var r;return l?l(e):null!==(r=e.value)&&void 0!==r?r:null==e?void 0:e.toString()},O=$((()=>{if(!w.current)return void f(void 0);const e=Array.from(w.current.children);let r=0,t=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(t++,n=o,t>2))break;r=i}x(r),f(t>2?n-8:void 0)}),[]);y((()=>{i!==b&&m(i||[])}),[i]),y((()=>{"default"===u?(()=>{const e=C.current?C.current.offsetTop+C.current.clientHeight:void 0;f(e)})():O()}),[o]),Mr({handleWidth:"mobile"===u,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:w,onResize:O});return e(eu,Object.assign({minimisable:"default"===u?o.length>5:!!p,minimisedHeight:p},c,{children:(n,{minimised:i})=>r(t,{children:[o.length<3?null:e(ou,{styleType:"link",type:"button",onClick:D,children:b.length?"Clear all":"Select all"}),e(ru,{role:"group","aria-label":c.title,ref:w,children:o.map(((t,o)=>"default"===n?((t,n,i)=>{const o=k(t),s=S(t),a=!!b.find((e=>S(e)===s));return r(tu,{$visible:!i||n<5,$selected:a,ref:4===n?C:void 0,children:[e(nu,{displaySize:"small",checked:a,onChange:E(t)}),o]},s)})(t,o,i):((r,t,n)=>{const i=k(r),o=S(r),s=!!b.find((e=>S(e)===o));return e(iu,{type:"checkbox",checked:s,$visible:!n||!!p&&t<=v,onChange:E(r),useContentWidth:d,children:i},o)})(t,o,i)))})]})}))};su.displayName="Filter.Checkbox";const au=E.div`
    background-color: ${no.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,lu=E(Uo)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,du=(t,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left",loading:c=!1,focusableWhenDisabled:h=!1,onClick:g}=t,b=ce(t,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),m={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:a};return r(lu,Object.assign({ref:n,"data-testid":b["data-testid"]||"button-with-icon",disabled:o&&!h,"aria-disabled":o,"aria-busy":c,onClick:o?void 0:g},m,b,{children:[c?e(jo,{}):u.cloneElement(l,{"aria-hidden":!0}),e("span",{children:i})]}))};du.displayName="ButtonWithIcon.Default";const cu=(t,n)=>{const{children:i,disabled:o=!1,styleType:s="default",danger:a=!1,icon:l,iconPosition:d="left",loading:c=!1,focusableWhenDisabled:h=!1,onClick:g}=t,b=ce(t,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),m={$buttonIconPosition:d,$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:a};return r(lu,Object.assign({ref:n,"data-testid":b["data-testid"]||"button-with-icon",disabled:o&&!h,"aria-disabled":o,"aria-busy":c,onClick:o?void 0:g},m,b,{children:[c?e(jo,{}):u.cloneElement(l,{"aria-hidden":!0}),e("span",{children:i})]}))};cu.displayName="ButtonWithIcon.Small";const uu={Default:u.forwardRef(du),Small:u.forwardRef(cu)},hu=E.div`
    background-color: ${no.bg};
    border: ${so["width-010"]} ${so.solid} ${no.border};
    border-radius: ${lo.md};
    overflow: hidden;
    width: 100%;
`,gu=E.div`
    background-color: ${no["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,bu=E.div`
    background-color: ${no.bg};
    height: 100%;
    width: 100%;
`,mu=E.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,pu=E.div`
    display: flex;
    align-items: center;

    background-color: ${no.bg};

    ${uo.MaxWidth.lg} {
        border-bottom: ${so["width-010"]} ${so.solid}
            ${no.border};
    }
`,fu=E(hs.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${ao["spacing-24"]} 0 ${ao["spacing-24"]}
        ${ao["spacing-20"]};

    ${uo.MaxWidth.lg} {
        text-align: center;
        margin: ${ao["spacing-24"]} 0;
    }
`,yu=E(Dc)`
    padding: ${ao["spacing-24"]} ${ao["spacing-20"]};
    margin-right: auto;
    color: ${no.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${no["icon-hover"]};
    }
`,vu=E(Ko.Small)`
    background-color: transparent;
    padding-right: ${ao["spacing-20"]};
    padding-left: ${ao["spacing-20"]};
    height: 100%;

    ${uo.MaxWidth.lg} {
        padding: ${ao["spacing-24"]} ${ao["spacing-20"]};
    }
`,xu=E(uu.Default)`
    width: 100%;
`,wu=E.div`
    padding: ${ao["spacing-24"]} ${ao["spacing-20"]};
    background-color: ${no.bg};
    border-top: ${so["width-010"]} ${so.solid} ${no.border};
`,$u=E(Ko.Default)`
    width: 100%;
`,Fu=({onDismiss:t,onDone:n,children:i})=>r(au,{children:[e(yu,{onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(de,{})}),e(mu,{children:i}),e(wu,{children:e($u,{onClick:n,type:"button",children:"Done"})})]});Fu.displayName="Filter.Page";const Cu=n=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:o="light",headerTitle:s="Filters",doneButtonLabel:a="Done",clearButtonDisabled:c=!1,onClear:u,onDismiss:b,onDone:m,children:p}=n,f=ce(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","doneButtonLabel","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[v,x]=g(!1),w=h(null),$=h(null),F=S(),C=co["lg-max"]({theme:F}),E=me.useMediaQuery({maxWidth:C});y((()=>{E||k()}),[E]);const D=()=>{x(!0)},k=()=>{x(!1),b&&b()},O=()=>{x(!1),m&&m()},_=()=>{u&&u()},A=e=>"function"==typeof p?p(e):p,B=t=>r(pu,{children:["mobile"===t&&e(yu,{onClick:k,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(d,{})}),e(fu,{weight:"semibold",children:s}),e(vu,{styleType:"link",type:"button",onClick:_,disabled:c,children:"Clear"})]});return e("div",Object.assign({},f,{children:e(So.Provider,E?{value:{mode:"mobile",rootNode:w},children:r(t,{children:[e(xu,{"data-testid":"filter-show-button",styleType:o,onClick:D,type:"button",icon:e(l,{}),children:i}),e(Eo,{show:v,disableTransition:!0,children:e(bu,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:r(gu,{ref:w,children:[B("mobile"),e(mu,{children:A("mobile")}),e(wu,{children:e($u,{onClick:O,type:"button",children:a})})]})})})]})}:{value:{mode:"default",rootNode:$},children:r(hu,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:$,children:[B("default"),A("default")]})})}))};Cu.displayName="Filter";const Eu=Object.assign(Cu,{Item:Kc,Page:Fu,Checkbox:su});export{Eu as Filter};
//# sourceMappingURL=index.js.map
