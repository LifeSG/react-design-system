import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import{CrossIcon as r}from"@lifesg/react-icons/cross";import*as o from"react";import i,{useRef as a,useState as s,isValidElement as l,createRef as c,cloneElement as u,PureComponent as d,useEffect as f,useLayoutEffect as h,useMemo as p,forwardRef as m,useCallback as g,useContext as y}from"react";import*as v from"react-dom";import b,{findDOMNode as w,unstable_batchedUpdates as x,createPortal as $}from"react-dom";import S,{css as O,keyframes as k}from"styled-components";import{ExternalIcon as F}from"@lifesg/react-icons/external";import{CircleIcon as D}from"@lifesg/react-icons/circle";import{CircleDotIcon as _}from"@lifesg/react-icons/circle-dot";import{SquareIcon as E}from"@lifesg/react-icons/square";import{SquareTickFillIcon as B}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as C}from"@lifesg/react-icons/tick";import{ChevronDownIcon as j}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as M}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as A}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as T}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as R}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as P}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as I}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as H}from"@lifesg/react-icons";import{ChevronLeftIcon as z}from"@lifesg/react-icons/chevron-left";import{FilterIcon as N}from"@lifesg/react-icons/filter";function L(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function W(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Y,q={exports:{}};Y=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),i=u(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!n||!o&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(o);return{modifier:n[1],feature:n[2],value:t[2]}})),l}))}function l(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(r,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,n){var i=this;if(o&&!n){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=r(e,t),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,n){return new i(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))n.call(i,c)&&(s[c]=i[c]);if(t){a=t(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(s[a[u]]=i[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,n,null,o)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var f=l?l():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,o,i){var a=t[n];return e(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new p("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new p("Invalid "+o+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,o){return v(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(n)+" at index "+t+"."),c}return m((function(t,n,r,o,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,o,i){var s=t[n],l=b(s);if("object"!==l)return new p("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,o,i,c,w(u));var d=u(s,c,r,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,o,l){var c=t[n],u=b(c);if("object"!==u)return new p("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var h=e[f];if(s(e,f)&&"function"!=typeof h)return y(r,o,l,f,w(h));if(!h)return new p("Invalid "+o+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=h(c,f,r,o,l+"."+f,a);if(m)return m}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},o=0;function i(i,s,l,c,u,f,h){if(c=c||d,f=f||l,h!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==s[l]?i?null===s[l]?new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,f)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,n,r,o,i,a){var s=t[n];return b(s)!==e?new p("Invalid "+o+" `"+i+"` of type `"+w(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,o){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,t,n)=>{var r=n(/*! react-is */"./node_modules/react-is/index.js");e.exports=n(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(r.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case c:case u:case o:case a:case i:case f:return h;default:var g=h&&h.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var x=c,$=u,S=l,O=s,k=n,F=d,D=o,_=m,E=p,B=r,C=a,j=i,M=f,A=!1;function T(e){return w(e)===u}t.AsyncMode=x,t.ConcurrentMode=$,t.ContextConsumer=S,t.ContextProvider=O,t.Element=k,t.ForwardRef=F,t.Fragment=D,t.Lazy=_,t.Memo=E,t.Portal=B,t.Profiler=C,t.StrictMode=j,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),T(e)||w(e)===c},t.isConcurrentMode=T,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var i=0;i<o;i++){var a=n[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,o=e.onChange,a=r(e,["children","device","onChange"]),s=(0,i.default)(a,n,o);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=r(n(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=r(n(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=o(c,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),f=r(r({},l),d);t.default={all:f,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],s=r[1],l=d();return(0,o.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),h=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=d();return(0,o.useEffect)((function(){p&&n&&n(h)}),[h]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var U=q.exports=Y(i),Q={exports:{}};Q.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],h=u&&u[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),m=o||h.getFullYear(),g=0;o&&!i||(g=i>0?i-1:h.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,v,b,w)):new Date(m,g,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Z,G,X=W(Q.exports),J={exports:{}},K=W(J.exports=(Z={year:0,month:1,day:2,hour:3,minute:4,second:5},G={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=G[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),G[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Z[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),ee={exports:{}};ee.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var x="$isDayjsObject",$=function(e){return e instanceof F||!(!e||!e[x])},S=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},O=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new F(n)},k=v;k.l=S,k.i=$,k.w=function(e,t){return O(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return k},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=O(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return O(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<O(e)},y.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!k.u(t)||t,u=k.p(e),h=function(e,t){var o=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},p=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,g):h(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return h(r?y-w:y+(6-w),g);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=k.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(f,1);m.$d[h](p),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[k.p(e)]()},y.add=function(r,u){var f,h=this;r=Number(r);var p=k.p(u),m=function(e){var t=O(h);return k.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,y=this.$d.getTime()+r*g;return k.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=k.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return k.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return k.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,m=this,g=k.p(f),y=O(r),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,w=function(){return k.m(m,y)};switch(g){case d:p=w()/12;break;case c:p=w();break;case u:p=w()/3;break;case l:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:k.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return k.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),D=F.prototype;return O.prototype=D,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),O.extend=function(e,t){return e.$i||(e(t,F,O),e.$i=!0),O},O.locale=S,O.isDayjs=$,O.unix=function(e){return O(1e3*e)},O.en=w[b],O.Ls=w,O.p={},O}();var te=W(ee.exports),ne={exports:{}};ne.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var re=W(ne.exports),oe={exports:{}};oe.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var ie=W(oe.exports),ae={exports:{}};ae.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var se,le=W(ae.exports);te.extend(re),te.extend(ie),te.extend(le),te.extend(X),te.extend(K),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=te(t).startOf("week");return ce(n).map((e=>ue(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return ue(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(te(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+te(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=te(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?te(r):void 0,o?te(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(se||(se={}));const ce=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},ue=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},de=[1,3,5,7,8,10,12],fe=[4,6,9,11];var he,pe,me,ge;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":de.includes(i)?Math.min(o,31).toString():fe.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=te(e,n);return te(t,n).diff(r,"minute")},e.toDayjs=e=>e?te(e):te(),e.addMinutesToTime=(e,t,n="HH:mm")=>te(e,n).add(t,"minutes").format(n)}(he||(he={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!te(e).isBefore(r,"day"))||!(!o||!te(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(te(e).isValid())return e}return""}}(pe||(pe={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(me||(me={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ge||(ge={}));var ye=function(e,t){return ye=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ye(e,t)};var ve=function(){return ve=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ve.apply(this,arguments)};var be="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var we=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},xe="object"==typeof be&&be&&be.Object===Object&&be,$e="object"==typeof self&&self&&self.Object===Object&&self,Se=xe||$e||Function("return this")(),Oe=Se,ke=function(){return Oe.Date.now()},Fe=/\s/;var De=function(e){for(var t=e.length;t--&&Fe.test(e.charAt(t)););return t},_e=De,Ee=/^\s+/;var Be=function(e){return e?e.slice(0,_e(e)+1).replace(Ee,""):e},Ce=Se.Symbol,je=Ce,Me=Object.prototype,Ae=Me.hasOwnProperty,Te=Me.toString,Re=je?je.toStringTag:void 0;var Pe=function(e){var t=Ae.call(e,Re),n=e[Re];try{e[Re]=void 0;var r=!0}catch(e){}var o=Te.call(e);return r&&(t?e[Re]=n:delete e[Re]),o},Ie=Object.prototype.toString;var He=Pe,ze=function(e){return Ie.call(e)},Ne=Ce?Ce.toStringTag:void 0;var Le=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ne&&Ne in Object(e)?He(e):ze(e)},Ve=function(e){return null!=e&&"object"==typeof e};var We=Be,Ye=we,qe=function(e){return"symbol"==typeof e||Ve(e)&&"[object Symbol]"==Le(e)},Ue=/^[-+]0x[0-9a-f]+$/i,Qe=/^0b[01]+$/i,Ze=/^0o[0-7]+$/i,Ge=parseInt;var Xe=we,Je=ke,Ke=function(e){if("number"==typeof e)return e;if(qe(e))return NaN;if(Ye(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ye(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=We(e);var n=Qe.test(e);return n||Ze.test(e)?Ge(e.slice(2),n?2:8):Ue.test(e)?NaN:+e},et=Math.max,tt=Math.min;var nt=function(e,t,n){var r,o,i,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function m(){var e=Je();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?tt(n,i-(e-c)):n}(e))}function g(e){return s=void 0,f&&r?h(e):(r=o=void 0,a)}function y(){var e=Je(),n=p(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?h(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),h(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=Ke(t)||0,Xe(n)&&(u=!!n.leading,i=(d="maxWait"in n)?et(Ke(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},y.flush=function(){return void 0===s?a:g(Je())},y},rt=nt,ot=we;var it=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ot(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),rt(e,t,{leading:r,maxWait:t,trailing:o})},at=function(e,t,n,r){switch(t){case"debounce":return nt(e,n,r);case"throttle":return it(e,n,r);default:return e}},st=function(e){return"function"==typeof e},lt=function(){return"undefined"==typeof window},ct=function(e){return e instanceof Element||e instanceof HTMLDocument},ut=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&st(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!lt()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(lt())return null;if(t)return document.querySelector(t);if(r&&ct(r))return r;if(n.targetRef&&ct(n.targetRef.current))return n.targetRef.current;var o=w(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=ut(s,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!lt()&&l({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return st(t)?"renderProp":st(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,lt()||(n.resizeHandler=at(n.createResizeHandler,o,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ye(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){lt()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=r)(l);case"child":if((e=r).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(l,["targetRef"]);return u(e,c)}return u(e,l);case"childArray":return(e=r).map((function(e){return!!e&&u(e,l)}));default:return o.createElement(a,null)}}}(d);var dt=lt()?f:h;function ft(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,m=e.onResize,g=a(n),y=a(null),v=null!=h?h:y,b=a(),w=s({width:void 0,height:void 0}),x=w[0],$=w[1];return dt((function(){if(!lt()){var e=ut(m,$,u,f);b.current=at((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!lt()&&e({width:r,height:o}),g.current=!1}))}),r,i,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,l,u,f,m,p,v.current]),ve({ref:v},x)}const ht=S.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return O`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,pt=S.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=O`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=O`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=O`
                transition: none;
            `),t}}
`,mt=({show:t=!1,rootId:n,onOverlayClick:r,children:o,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:u=!1,enableOverlayClick:d=!1,zIndex:h,id:p})=>{const[m,g]=s(null),[y,v]=s(),[w]=s((()=>me.generate())),x=a(),$=a(null),S=o&&i.cloneElement(o,{ref:$}),O=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";f((()=>(_(),g(F()),()=>{j(),B().length<1&&E("remove")})),[]),f((()=>{if(t){const e=D();k(e),C();const t=setTimeout((()=>{E("add")}),200);return()=>clearTimeout(t)}{j();const e=setTimeout((()=>{B().length<1&&E("remove")}),200);return()=>clearTimeout(e)}}),[t]);const k=e=>{x.current=e,v(e)},F=()=>document&&n?document.getElementById(n):document?document.body:null,D=()=>B().length>0,_=()=>{if(!document.getElementById(gt)){const e=document.createElement("style");e.id=gt;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${yt} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${yt}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},E=e=>{const t=document.body.classList.contains(yt);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(yt):document.body.classList.add(yt)},B=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},C=()=>{const e=B();document.body.dataset.lifesgDsOverlayOrder=[...e,w].join(",")},j=()=>{const e=B();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==w)).join(",")},M=e=>{var t;const n=null===(t=$.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&d&&(e.preventDefault(),r())};return m?b.createPortal(e(ht,Object.assign({id:O,"data-testid":O,$show:t,zIndex:h,$stacked:y},{children:o&&e(pt,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:l||(y?.5:.8),$backgroundBlur:c,$disableTransition:u,$enableOverlayClick:d,onClick:M},{children:S}))})),m):null},gt="lifesg-ds-overlay-stylesheet",yt="lifesg-ds-overlay-open",vt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},bt=i.createContext({mode:"default",rootNode:null});var wt=Array.isArray,xt="object"==typeof V&&V&&V.Object===Object&&V,$t="object"==typeof self&&self&&self.Object===Object&&self,St=xt||$t||Function("return this")(),Ot=St.Symbol,kt=Ot,Ft=Object.prototype,Dt=Ft.hasOwnProperty,_t=Ft.toString,Et=kt?kt.toStringTag:void 0;var Bt=function(e){var t=Dt.call(e,Et),n=e[Et];try{e[Et]=void 0;var r=!0}catch(e){}var o=_t.call(e);return r&&(t?e[Et]=n:delete e[Et]),o},Ct=Object.prototype.toString;var jt=Bt,Mt=function(e){return Ct.call(e)},At=Ot?Ot.toStringTag:void 0;var Tt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":At&&At in Object(e)?jt(e):Mt(e)};var Rt=Tt,Pt=function(e){return null!=e&&"object"==typeof e};var It=function(e){return"symbol"==typeof e||Pt(e)&&"[object Symbol]"==Rt(e)},Ht=wt,zt=It,Nt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Lt=/^\w*$/;var Vt=function(e,t){if(Ht(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!zt(e))||(Lt.test(e)||!Nt.test(e)||null!=t&&e in Object(t))};var Wt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Yt=Tt,qt=Wt;var Ut,Qt=function(e){if(!qt(e))return!1;var t=Yt(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Zt=St["__core-js_shared__"],Gt=(Ut=/[^.]+$/.exec(Zt&&Zt.keys&&Zt.keys.IE_PROTO||""))?"Symbol(src)_1."+Ut:"";var Xt=function(e){return!!Gt&&Gt in e},Jt=Function.prototype.toString;var Kt=Qt,en=Xt,tn=Wt,nn=function(e){if(null!=e){try{return Jt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},rn=/^\[object .+?Constructor\]$/,on=Function.prototype,an=Object.prototype,sn=on.toString,ln=an.hasOwnProperty,cn=RegExp("^"+sn.call(ln).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var un=function(e){return!(!tn(e)||en(e))&&(Kt(e)?cn:rn).test(nn(e))},dn=function(e,t){return null==e?void 0:e[t]};var fn=function(e,t){var n=dn(e,t);return un(n)?n:void 0},hn=fn(Object,"create"),pn=hn;var mn=function(){this.__data__=pn?pn(null):{},this.size=0};var gn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},yn=hn,vn=Object.prototype.hasOwnProperty;var bn=function(e){var t=this.__data__;if(yn){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return vn.call(t,e)?t[e]:void 0},wn=hn,xn=Object.prototype.hasOwnProperty;var $n=hn;var Sn=mn,On=gn,kn=bn,Fn=function(e){var t=this.__data__;return wn?void 0!==t[e]:xn.call(t,e)},Dn=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=$n&&void 0===t?"__lodash_hash_undefined__":t,this};function _n(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_n.prototype.clear=Sn,_n.prototype.delete=On,_n.prototype.get=kn,_n.prototype.has=Fn,_n.prototype.set=Dn;var En=_n;var Bn=function(){this.__data__=[],this.size=0};var Cn=function(e,t){return e===t||e!=e&&t!=t};var jn=function(e,t){for(var n=e.length;n--;)if(Cn(e[n][0],t))return n;return-1},Mn=jn,An=Array.prototype.splice;var Tn=function(e){var t=this.__data__,n=Mn(t,e);return!(n<0)&&(n==t.length-1?t.pop():An.call(t,n,1),--this.size,!0)},Rn=jn;var Pn=function(e){var t=this.__data__,n=Rn(t,e);return n<0?void 0:t[n][1]},In=jn;var Hn=jn;var zn=function(e,t){var n=this.__data__,r=Hn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Nn=Bn,Ln=Tn,Vn=Pn,Wn=function(e){return In(this.__data__,e)>-1},Yn=zn;function qn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qn.prototype.clear=Nn,qn.prototype.delete=Ln,qn.prototype.get=Vn,qn.prototype.has=Wn,qn.prototype.set=Yn;var Un=qn,Qn=fn(St,"Map"),Zn=En,Gn=Un,Xn=Qn;var Jn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Kn=function(e,t){var n=e.__data__;return Jn(t)?n["string"==typeof t?"string":"hash"]:n.map},er=Kn;var tr=Kn;var nr=Kn;var rr=Kn;var or=function(){this.size=0,this.__data__={hash:new Zn,map:new(Xn||Gn),string:new Zn}},ir=function(e){var t=er(this,e).delete(e);return this.size-=t?1:0,t},ar=function(e){return tr(this,e).get(e)},sr=function(e){return nr(this,e).has(e)},lr=function(e,t){var n=rr(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function cr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}cr.prototype.clear=or,cr.prototype.delete=ir,cr.prototype.get=ar,cr.prototype.has=sr,cr.prototype.set=lr;var ur=cr;function dr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(dr.Cache||ur),n}dr.Cache=ur;var fr=dr;var hr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pr=/\\(\\)?/g,mr=function(e){var t=fr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(hr,(function(e,n,r,o){t.push(r?o.replace(pr,"$1"):n||e)})),t}));var gr=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},yr=gr,vr=wt,br=It,wr=Ot?Ot.prototype:void 0,xr=wr?wr.toString:void 0;var $r=function e(t){if("string"==typeof t)return t;if(vr(t))return yr(t,e)+"";if(br(t))return xr?xr.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Sr=$r;var Or=wt,kr=Vt,Fr=mr,Dr=function(e){return null==e?"":Sr(e)};var _r=It;var Er=function(e,t){return Or(e)?e:kr(e,t)?[e]:Fr(Dr(e))},Br=function(e){if("string"==typeof e||_r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Cr=function(e,t){for(var n=0,r=(t=Er(t,e)).length;null!=e&&n<r;)e=e[Br(t[n++])];return n&&n==r?e:void 0},jr=Cr;var Mr=W((function(e,t,n){var r=null==e?void 0:jr(e,t);return void 0===r?n:r}));const Ar=(e,t,n)=>t?Mr(n,t)||Mr(e,t):n||e,Tr=(e,t)=>{const n=t||e.defaultValue;return Mr(e.collections,n)};var Rr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Rr||(Rr={}));const Pr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ir=e=>t=>{const n=t.theme,r=Tr(Pr,n[Rr.colorScheme]);return n.options&&n.options.color?Ar(r,e,n.options.color):Ar(r,e)},Hr={Brand:{1:Ir("Brand.1"),2:Ir("Brand.2"),3:Ir("Brand.3"),4:Ir("Brand.4"),5:Ir("Brand.5"),6:Ir("Brand.6")},Primary:Ir("Primary"),PrimaryDark:Ir("PrimaryDark"),Secondary:Ir("Secondary"),Accent:{Light:{1:Ir("Accent.Light.1"),2:Ir("Accent.Light.2"),3:Ir("Accent.Light.3"),4:Ir("Accent.Light.4"),5:Ir("Accent.Light.5"),6:Ir("Accent.Light.6")},Dark:{1:Ir("Accent.Dark.1"),2:Ir("Accent.Dark.2"),3:Ir("Accent.Dark.3")}},Neutral:{1:Ir("Neutral.1"),2:Ir("Neutral.2"),3:Ir("Neutral.3"),4:Ir("Neutral.4"),5:Ir("Neutral.5"),6:Ir("Neutral.6"),7:Ir("Neutral.7"),8:Ir("Neutral.8")},Validation:{Green:{Text:Ir("Validation.Green.Text"),Icon:Ir("Validation.Green.Icon"),Border:Ir("Validation.Green.Border"),Background:Ir("Validation.Green.Background")},Orange:{Text:Ir("Validation.Orange.Text"),Icon:Ir("Validation.Orange.Icon"),Border:Ir("Validation.Orange.Border"),Background:Ir("Validation.Orange.Background"),Badge:Ir("Validation.Orange.Badge")},Red:{Text:Ir("Validation.Red.Text"),Icon:Ir("Validation.Red.Icon"),Border:Ir("Validation.Red.Border"),Background:Ir("Validation.Red.Background")},Blue:{Text:Ir("Validation.Blue.Text"),Icon:Ir("Validation.Blue.Icon"),Border:Ir("Validation.Blue.Border"),Background:Ir("Validation.Blue.Background")}},Shadow:{Accent:Ir("Shadow.Accent"),Red:Ir("Shadow.Red"),Elevation:Ir("Shadow.Elevation")}},zr=e=>Object.keys(vt).reduce(((t,n)=>{const r=vt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Nr=zr("max-width"),Lr=(zr("min-width"),vt),Vr=S.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Wr=k`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Yr=S.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Hr.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Wr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,qr=S(Yr)`
    animation-delay: -0.45s;
`,Ur=S(Yr)`
    animation-delay: -0.3s;
`,Qr=S(Yr)`
    animation-delay: -0.15s;
`,Zr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Gr={collections:{base:{D1:{fontFamily:Zr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Zr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Zr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Zr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Zr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Zr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Zr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Zr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Zr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Zr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Zr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Zr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Zr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Zr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Xr=e=>t=>{const n=t.theme,r=Tr(Gr,n[Rr.textStyleScheme]);return n.options&&n.options.textStyle?Ar(r,e,n.options.textStyle):Ar(r,e)},Jr={D1:{fontFamily:Xr("D1.fontFamily"),fontSize:Xr("D1.fontSize"),fontWeight:Xr("D1.fontWeight"),lineHeight:Xr("D1.lineHeight"),letterSpacing:Xr("D1.letterSpacing")},D2:{fontFamily:Xr("D2.fontFamily"),fontSize:Xr("D2.fontSize"),fontWeight:Xr("D2.fontWeight"),lineHeight:Xr("D2.lineHeight"),letterSpacing:Xr("D2.letterSpacing")},D3:{fontFamily:Xr("D3.fontFamily"),fontSize:Xr("D3.fontSize"),fontWeight:Xr("D3.fontWeight"),lineHeight:Xr("D3.lineHeight"),letterSpacing:Xr("D3.letterSpacing")},D4:{fontFamily:Xr("D4.fontFamily"),fontSize:Xr("D4.fontSize"),fontWeight:Xr("D4.fontWeight"),lineHeight:Xr("D4.lineHeight"),letterSpacing:Xr("D4.letterSpacing")},DBody:{fontFamily:Xr("DBody.fontFamily"),fontSize:Xr("DBody.fontSize"),fontWeight:Xr("DBody.fontWeight"),lineHeight:Xr("DBody.lineHeight"),letterSpacing:Xr("DBody.letterSpacing")},H1:{fontFamily:Xr("H1.fontFamily"),fontSize:Xr("H1.fontSize"),fontWeight:Xr("H1.fontWeight"),lineHeight:Xr("H1.lineHeight"),letterSpacing:Xr("H1.letterSpacing")},H2:{fontFamily:Xr("H2.fontFamily"),fontSize:Xr("H2.fontSize"),fontWeight:Xr("H2.fontWeight"),lineHeight:Xr("H2.lineHeight"),letterSpacing:Xr("H2.letterSpacing")},H3:{fontFamily:Xr("H3.fontFamily"),fontSize:Xr("H3.fontSize"),fontWeight:Xr("H3.fontWeight"),lineHeight:Xr("H3.lineHeight"),letterSpacing:Xr("H3.letterSpacing")},H4:{fontFamily:Xr("H4.fontFamily"),fontSize:Xr("H4.fontSize"),fontWeight:Xr("H4.fontWeight"),lineHeight:Xr("H4.lineHeight"),letterSpacing:Xr("H4.letterSpacing")},H5:{fontFamily:Xr("H5.fontFamily"),fontSize:Xr("H5.fontSize"),fontWeight:Xr("H5.fontWeight"),lineHeight:Xr("H5.lineHeight"),letterSpacing:Xr("H5.letterSpacing")},H6:{fontFamily:Xr("H6.fontFamily"),fontSize:Xr("H6.fontSize"),fontWeight:Xr("H6.fontWeight"),lineHeight:Xr("H6.lineHeight"),letterSpacing:Xr("H6.letterSpacing")},Body:{fontFamily:Xr("Body.fontFamily"),fontSize:Xr("Body.fontSize"),fontWeight:Xr("Body.fontWeight"),lineHeight:Xr("Body.lineHeight"),letterSpacing:Xr("Body.letterSpacing")},BodySmall:{fontFamily:Xr("BodySmall.fontFamily"),fontSize:Xr("BodySmall.fontSize"),fontWeight:Xr("BodySmall.fontWeight"),lineHeight:Xr("BodySmall.lineHeight"),letterSpacing:Xr("BodySmall.letterSpacing")},XSmall:{fontFamily:Xr("XSmall.fontFamily"),fontSize:Xr("XSmall.fontSize"),fontWeight:Xr("XSmall.fontWeight"),lineHeight:Xr("XSmall.lineHeight"),letterSpacing:Xr("XSmall.letterSpacing")}},Kr=e=>{switch(e){case 700:case"bold":return Zr.Bold;case 600:case"semibold":return Zr.Semibold;case 300:case"light":return Zr.Light;case 400:case"regular":return Zr.Regular;default:return""}},eo=(e,t)=>n=>{var r;const o=Jr[e].fontFamily(n),i=Jr[e].fontWeight(n);return Object.values(Zr).includes(o)?O`
                font-family: ${Kr(t)||Kr(i)||o};
                font-weight: normal !important;
            `:O`
            font-family: ${o};
            font-weight: ${null!==(r=to(t)||i)&&void 0!==r?r:"normal"};
        `},to=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},no=e=>{if(e>0)return O`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},ro=eo,oo=(e,t,n=!1)=>r=>{const o=Jr[e],i=o.fontSize(r);return O`
            ${eo(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${O`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},io=(e=!1,t=!1,n=void 0)=>t?O`
            display: block;
            ${no(n)}
        `:e?O`
            display: inline;
        `:O`
            display: block;
            ${no(n)}
        `;var ao;!function(e){e.D1=S.h1`
        ${e=>O`
                ${oo("D1",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=S.h1`
        ${e=>O`
                ${oo("D2",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=S.h1`
        ${e=>O`
                ${oo("D3",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=S.h1`
        ${e=>O`
                ${oo("D4",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=S.h1`
        ${e=>O`
                ${oo("DBody",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=S.h1`
        ${e=>O`
                ${oo("H1",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=S.h2`
        ${e=>O`
                ${oo("H2",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=S.h3`
        ${e=>O`
                ${oo("H3",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=S.h4`
        ${e=>O`
                ${oo("H4",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=S.h5`
        ${e=>O`
                ${oo("H5",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=S.h6`
        ${e=>O`
                ${oo("H6",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=S.p`
        ${e=>O`
                ${oo("Body",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=S.p`
        ${e=>O`
                ${oo("BodySmall",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=S.span`
        ${e=>O`
                ${oo("XSmall",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${io(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>co(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>co(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ao||(ao={}));const so=S.a`
    ${e=>O`
            ${oo(e.textStyle,e.weight)}
            color: ${Hr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Hr.Secondary};

                svg {
                    color: ${Hr.Secondary};
                }
            }
        `}
`,lo=S(F)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,co=n=>{var{external:r=!1,children:o}=n,i=L(n,["external","children"]);return t(so,Object.assign({},i,{children:[o,r&&e(lo,{})]}))};var uo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(uo||(uo={}));const fo={collections:{base:{InputBoxShadow:O`
        inset 0 0 4px 0px ${Hr.Shadow.Accent}
    `,InputErrorBoxShadow:O`
        inset 0 0 4px 0px ${Hr.Shadow.Red}
    `,ElevationBoxShadow:O`
      0px 2px 8px ${Hr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:O`
        inset 0 0 3px 0px ${Hr.Shadow.Accent}
    `,InputErrorBoxShadow:O`
        inset 0 0 3px 0px ${Hr.Shadow.Red}
    `,ElevationBoxShadow:O`
      0px 2px 8px ${Hr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},ho=e=>t=>{var n;const r=t.theme,o=Tr(fo,r[Rr.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Ar(o,e,r.options.designToken):Ar(o,e)},po={InputBoxShadow:ho("InputBoxShadow"),InputErrorBoxShadow:ho("InputErrorBoxShadow"),ElevationBoxShadow:ho("ElevationBoxShadow"),Table:{Header:ho("Table.Header"),Cell:{Primary:ho("Table.Cell.Primary"),Secondary:ho("Table.Cell.Secondary"),Selected:ho("Table.Cell.Selected"),Hover:ho("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:ho("Button.Danger.BackgroundColor"),Hover:ho("Button.Danger.Hover"),Primary:ho("Button.Danger.Primary"),Border:ho("Button.Danger.Border")}}},mo=S.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return O`
                    background-color: ${Hr.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?po.Button.Danger.Border:Hr.Primary};

                    color: ${e.$buttonIsDanger?po.Button.Danger.Primary:Hr.Primary};
                `;case"light":return O`
                    background-color: ${Hr.Neutral[8]};
                    border: 1px solid ${Hr.Neutral[5]};

                    color: ${e.$buttonIsDanger?po.Button.Danger.Primary:Hr.Primary};
                `;case"disabled":return O`
                    background-color: ${Hr.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Hr.Neutral[3]};
                `;case"link":return O`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?po.Button.Danger.Primary:Hr.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?po.Button.Danger.Hover:Hr.Secondary};
                    }
                `;default:return O`
                    background-color: ${e.$buttonIsDanger?po.Button.Danger.BackgroundColor:Hr.Primary};
                    border: 1px solid transparent;

                    ${Nr.mobileL} {
                        width: 100%;
                    }

                    color: ${Hr.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?O`
                    height: 2.5rem;
                    ${oo("H5","semibold")}

                    ${Nr.mobileS} {
                        height: auto;
                    }
                `:O`
                    height: 3rem;
                    ${oo("H4","semibold")}

                    ${Nr.mobileS} {
                        height: auto;
                    }
                `}
`,go=S((({color:n,className:r,size:o=18})=>t(Vr,Object.assign({className:r,$size:o,$color:n},{children:[e(Yr,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),e(qr,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),e(Ur,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),e(Qr,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?po.Button.Danger.Primary:Hr.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Hr.Neutral[3](e);break;default:t=Hr.Neutral[8](e)}return O`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,yo={Default:i.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=L(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(mo,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&e(go,Object.assign({},u)),e("span",{children:o})]}))})),Small:i.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=L(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(mo,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&e(go,Object.assign({},u,{size:16})),e("span",{children:o})]}))}))},vo=S.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?O`
                    color: ${Hr.Primary};
                `:O`
                    color: ${Hr.Neutral[4]};
                `};
    }
`,bo=({type:t,active:n=!1,disabled:o,className:i})=>{let a;switch(t){case"checkbox":a=e(n?B:E,{});break;case"radio":a=e(n?_:D,{});break;case"tick":a=e(C,{});break;case"cross":a=e(r,{});break;default:a=null}return e(vo,Object.assign({className:i,$active:n,disabled:o},{children:a}))},wo=e=>{const{textSize:t}=e||{};return O`
        // Text styling
        ${t&&oo(t,"regular")}

        strong {
            font-family: ${Zr.Semibold};
            ${t&&oo(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Zr.Semibold};
            ${t&&oo(t,"semibold")}
            color: ${Hr.Primary};
            text-decoration: none;

            svg {
                color: ${Hr.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Hr.Secondary};

                svg {
                    color: ${Hr.Secondary};
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
    `},xo=S.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=Hr.Validation.Red.Background(e),n=Hr.Validation.Red.Border(e);break;case"success":t=Hr.Validation.Green.Background(e),n=Hr.Validation.Green.Border(e);break;case"warning":default:t=Hr.Validation.Orange.Background(e),n=Hr.Validation.Orange.Border(e);break;case"info":t=Hr.Validation.Blue.Background(e),n=Hr.Validation.Blue.Border(e);break;case"description":t=Hr.Neutral[7](e),n=Hr.Neutral[4](e)}return O`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${Hr.Neutral[1]};
    ${e=>"small"===e.$sizeType?wo({textSize:"H6"}):wo({textSize:"BodySmall"})}
`,$o=S.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&O`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Hr.Validation.Red.Icon(e);break;case"success":t=Hr.Validation.Green.Icon(e);break;case"warning":default:t=Hr.Validation.Orange.Icon(e);break;case"info":t=Hr.Validation.Blue.Icon(e);break;case"description":t=Hr.Neutral[4](e)}return O`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,So=S(ao.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?O`
                ${oo("H6","semibold")}
                margin-top: 0.25rem;
            `:O`
                ${oo("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${Hr.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${Hr.Primary};
    }
`,Oo=S.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,ko=S.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Fo=S.button`
    ${e=>"small"===e.$sizeType?O`
                ${oo("H6","semibold")}
            `:O`
                ${oo("H5","semibold")}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.25rem;
    margin-top: 0.5rem;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Hr.Primary};
`,Do=S(H)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,_o=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,Eo=(S.ol`
    ${e=>_o(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Nr.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>oo(e.size,"regular")}
        position: relative;
        color: ${Hr.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,n=e.counterType||"decimal",r=e.counterSeparator||")";return O`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){return O`
                counter-reset: list ${t?n+1:n-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ul > li:before {
        content: "";
    }
`,S.ul`
    ${e=>_o(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>oo(e.size,"regular")}
        color: ${Hr.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),Bo=t=>{var{size:n="Body",children:r}=t,o=L(t,["size","children"]);return e(Eo,Object.assign({size:n},o,{children:r}))},Co=S.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;

    // Content positioning style
    ${e=>{if(!e.$indicator)return O`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?O`
                        border-color: ${Hr.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Hr.Shadow.Red};
                        }
                    `:e.$disabled?O`
                        border-color: transparent;
                    `:O`
                        border-color: transparent;

                        :hover {
                            background: ${Hr.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?O`
                        border-color: ${Hr.Neutral[5]};
                    `:e.$disabled&&e.$selected?O`
                        border-color: ${Hr.Neutral[4]};
                    `:e.$error?O`
                        border-color: ${Hr.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Hr.Shadow.Red};
                        }
                    `:e.$selected?O`
                        border-color: ${Hr.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Hr.Shadow.Accent};
                        }
                    `:O`
                        background: ${Hr.Neutral[8]};
                        border-color: ${Hr.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Hr.Shadow.Accent};
                            border-color: ${Hr.Accent.Light[1]};
                        }
                    `}
`,jo=S.input`
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
`,Mo=S.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,Ao=S.label`
    ${e=>e.$selected&&!e.$indicator?O`
                ${oo("H4","semibold")}
            `:O`
                ${oo("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${Nr.tablet} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${Nr.mobileL} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
    color: ${Hr.Neutral[1]};

    ${e=>e.$disabled?O`
                color: ${Hr.Neutral[3]};
            `:e.$selected?O`
                color: ${Hr.Primary};
            `:void 0}
`,To=S.div`
    ${oo("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${ro("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?O`
                color: ${Hr.Neutral[3]};
            `:e.$selected?O`
                color: ${Hr.Primary};
            `:O`
                color: ${Hr.Neutral[1]};
            `}
`,Ro=S.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?O`
                        background: ${Hr.Neutral[8]};
                    `:e.$disabled?O``:O`
                        :hover {
                            background: ${Hr.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?O`
                        background: ${Hr.Neutral[6]};
                    `:e.$error?O`
                        background: ${Hr.Neutral[8]};
                    `:e.$selected?O`
                        background: ${Hr.Accent.Light[5]};
                    `:O`
                        background: ${Hr.Neutral[8]};
                    `}
`,Po=S.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Io=S.button`
    color: ${e=>e.$disabled?Hr.Neutral[3]:Hr.Validation.Red.Icon};
    white-space: nowrap;
    ${oo("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Ho=S.button`
    color: ${e=>e.disabled?Hr.Neutral[3]:Hr.Primary};
    ${oo("H4","semibold")}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background: none;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1.125rem;
        height: 1.125rem;
        margin-left: 0.5rem;
    }
`,zo=S.div`
    width: 100%;
    color: ${e=>e.$disabled?Hr.Neutral[3]:Hr.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,No=S((n=>{var{type:r,className:o,children:i,actionLink:a,actionLinkIcon:l,sizeType:c="default",showIcon:u=!1,customIcon:d,maxCollapsedHeight:h}=n,p=L(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[m,g]=s(!1),[y,v]=s(!1),{height:b,ref:w}=ft();f((()=>{x()}),[h,b]);const x=()=>{g(!h),v($())},$=()=>!!h&&b>h;return t(xo,Object.assign({className:o,$type:r,$sizeType:c,"data-testid":p["data-testid"]},{children:[u&&e($o,Object.assign({$sizeType:c,$type:r},{children:(()=>{if(r&&d)return d;switch(r){case"success":return e(I,{});case"warning":return e(R,{});case"error":return e(T,{});case"info":case"description":return e(P,{});default:return null}})()})),t(Oo,{children:[t(ko,Object.assign({$maxCollapsedHeight:$()?h:void 0,$showMore:m,$hasActionLink:!!a},{children:[e("div",Object.assign({ref:w},{children:i})),a&&t(So,Object.assign({"data-testid":"action-link",$type:r,$sizeType:c},a,{children:[a.children,l||e(A,{})]}))]})),y&&t(Fo,Object.assign({$sizeType:c,$type:r,type:"button",onClick:()=>g(!m)},{children:["Show ",m?"less":"more",e(Do,{$expanded:m})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,Lo=S.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${wo({textSize:"BodySmall"})}

    ${e=>e.$disabled?O`
                color: ${Hr.Neutral[3]};
            `:e.$selected?O`
                color: ${Hr.Primary};
            `:O`
                color: ${Hr.Neutral[1]};
            `}
`,Vo=S(ao.BodySmall)`
    color: ${e=>e.$disabled?Hr.Neutral[3]:Hr.Validation.Red.Text};
`,Wo=S(Bo)`
    li {
        color: ${e=>e.$disabled?Hr.Neutral[3]:Hr.Validation.Red.Text};
    }
`;var Yo=W((function(e){return null==e})),qo=Object.defineProperty,Uo={};((e,t)=>{for(var n in t)qo(e,n,{get:t[n],enumerable:!0})})(Uo,{assign:()=>Fi,colors:()=>Si,createStringInterpolator:()=>bi,skipAnimation:()=>Oi,to:()=>wi,willAdvance:()=>ki});var Qo=ui(),Zo=e=>ai(e,Qo),Go=ui();Zo.write=e=>ai(e,Go);var Xo=ui();Zo.onStart=e=>ai(e,Xo);var Jo=ui();Zo.onFrame=e=>ai(e,Jo);var Ko=ui();Zo.onFinish=e=>ai(e,Ko);var ei=[];Zo.setTimeout=(e,t)=>{const n=Zo.now()+t,r=()=>{const e=ei.findIndex((e=>e.cancel==r));~e&&ei.splice(e,1),oi-=~e?1:0},o={time:n,handler:e,cancel:r};return ei.splice(ti(n),0,o),oi+=1,si(),o};var ti=e=>~(~ei.findIndex((t=>t.time>e))||~ei.length);Zo.cancel=e=>{Xo.delete(e),Jo.delete(e),Ko.delete(e),Qo.delete(e),Go.delete(e)},Zo.sync=e=>{ii=!0,Zo.batchedUpdates(e),ii=!1},Zo.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Zo.onStart(n)}return r.handler=e,r.cancel=()=>{Xo.delete(n),t=null},r};var ni="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Zo.use=e=>ni=e,Zo.now="undefined"!=typeof performance?()=>performance.now():Date.now,Zo.batchedUpdates=e=>e(),Zo.catch=console.error,Zo.frameLoop="always",Zo.advance=()=>{"demand"!==Zo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ci()};var ri=-1,oi=0,ii=!1;function ai(e,t){ii?(t.delete(e),e(0)):(t.add(e),si())}function si(){ri<0&&(ri=0,"demand"!==Zo.frameLoop&&ni(li))}function li(){~ri&&(ni(li),Zo.batchedUpdates(ci))}function ci(){const e=ri;ri=Zo.now();const t=ti(ri);t&&(di(ei.splice(0,t),(e=>e.handler())),oi-=t),oi?(Xo.flush(),Qo.flush(e?Math.min(64,ri-e):16.667),Jo.flush(),Go.flush(),Ko.flush()):ri=-1}function ui(){let e=new Set,t=e;return{add(n){oi+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(oi-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,oi-=t.size,di(t,(t=>t(n)&&e.add(t))),oi+=e.size,t=e)}}}function di(e,t){e.forEach((e=>{try{t(e)}catch(e){Zo.catch(e)}}))}function fi(){}var hi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function pi(e,t){if(hi.arr(e)){if(!hi.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var mi=(e,t)=>e.forEach(t);function gi(e,t,n){if(hi.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var yi=e=>hi.und(e)?[]:hi.arr(e)?e:[e];function vi(e,t){if(e.size){const n=Array.from(e);e.clear(),mi(n,t)}}var bi,wi,xi=(e,...t)=>vi(e,(e=>e(...t))),$i=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Si=null,Oi=!1,ki=fi,Fi=e=>{e.to&&(wi=e.to),e.now&&(Zo.now=e.now),void 0!==e.colors&&(Si=e.colors),null!=e.skipAnimation&&(Oi=e.skipAnimation),e.createStringInterpolator&&(bi=e.createStringInterpolator),e.requestAnimationFrame&&Zo.use(e.requestAnimationFrame),e.batchedUpdates&&(Zo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ki=e.willAdvance),e.frameLoop&&(Zo.frameLoop=e.frameLoop)},Di=new Set,_i=[],Ei=[],Bi=0,Ci={get idle(){return!Di.size&&!_i.length},start(e){Bi>e.priority?(Di.add(e),Zo.onStart(ji)):(Mi(e),Zo(Ti))},advance:Ti,sort(e){if(Bi)Zo.onFrame((()=>Ci.sort(e)));else{const t=_i.indexOf(e);~t&&(_i.splice(t,1),Ai(e))}},clear(){_i=[],Di.clear()}};function ji(){Di.forEach(Mi),Di.clear(),Zo(Ti)}function Mi(e){_i.includes(e)||Ai(e)}function Ai(e){_i.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(_i,(t=>t.priority>e.priority)),0,e)}function Ti(e){const t=Ei;for(let n=0;n<_i.length;n++){const r=_i[n];Bi=r.priority,r.idle||(ki(r),r.advance(e),r.idle||t.push(r))}return Bi=0,(Ei=_i).length=0,(_i=t).length>0}var Ri="[-+]?\\d*\\.?\\d+",Pi=Ri+"%";function Ii(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Hi=new RegExp("rgb"+Ii(Ri,Ri,Ri)),zi=new RegExp("rgba"+Ii(Ri,Ri,Ri,Ri)),Ni=new RegExp("hsl"+Ii(Ri,Pi,Pi)),Li=new RegExp("hsla"+Ii(Ri,Pi,Pi,Ri)),Vi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Wi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Yi=/^#([0-9a-fA-F]{6})$/,qi=/^#([0-9a-fA-F]{8})$/;function Ui(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Qi(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,i=Ui(o,r,e+1/3),a=Ui(o,r,e),s=Ui(o,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Zi(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Gi(e){return(parseFloat(e)%360+360)%360/360}function Xi(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ji(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Ki(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Yi.exec(e))?parseInt(t[1]+"ff",16)>>>0:Si&&void 0!==Si[e]?Si[e]:(t=Hi.exec(e))?(Zi(t[1])<<24|Zi(t[2])<<16|Zi(t[3])<<8|255)>>>0:(t=zi.exec(e))?(Zi(t[1])<<24|Zi(t[2])<<16|Zi(t[3])<<8|Xi(t[4]))>>>0:(t=Vi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=qi.exec(e))?parseInt(t[1],16)>>>0:(t=Wi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Ni.exec(e))?(255|Qi(Gi(t[1]),Ji(t[2]),Ji(t[3])))>>>0:(t=Li.exec(e))?(Qi(Gi(t[1]),Ji(t[2]),Ji(t[3]))|Xi(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ea=(e,t,n)=>{if(hi.fun(e))return e;if(hi.arr(e))return ea({range:e,output:t,extrapolate:n});if(hi.str(e.output[0]))return bi(e);const r=e,o=r.output,i=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,i);return function(e,t,n,r,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===o)return r;if(t===n)return e<=t?r:o;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=i(c),r===-1/0?c=-c:o===1/0?c+=r:c=c*(o-r)+r;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,r.map)}};var ta=1.70158,na=1.525*ta,ra=ta+1,oa=2*Math.PI/3,ia=2*Math.PI/4.5,aa=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},sa={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ra*e*e*e-ta*e*e,easeOutBack:e=>1+ra*Math.pow(e-1,3)+ta*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-na)/2:(Math.pow(2*e-2,2)*((na+1)*(2*e-2)+na)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*oa),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*oa)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ia)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ia)/2+1,easeInBounce:e=>1-aa(1-e),easeOutBounce:aa,easeInOutBounce:e=>e<.5?(1-aa(1-2*e))/2:(1+aa(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e;return((e,t,n)=>Math.min(Math.max(n,e),t))(0,1,("end"===t?Math.floor(r):Math.ceil(r))/e)}},la=Symbol.for("FluidValue.get"),ca=Symbol.for("FluidValue.observers"),ua=e=>Boolean(e&&e[la]),da=e=>e&&e[la]?e[la]():e,fa=e=>e[ca]||null;function ha(e,t){const n=e[ca];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var pa=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");ma(this,e)}},ma=(e,t)=>ba(e,la,t);function ga(e,t){if(e[la]){let n=e[ca];n||ba(e,ca,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function ya(e,t){const n=e[ca];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[ca]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var va,ba=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),wa=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,xa=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,$a=new RegExp(`(${wa.source})(%|[a-z]+)`,"i"),Sa=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Oa=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ka=e=>{const[t,n]=Fa(e);if(!t||$i())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Oa.test(n)?ka(n):n||e},Fa=e=>{const t=Oa.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Da=(e,t,n,r,o)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,_a=e=>{va||(va=Si?new RegExp(`(${Object.keys(Si).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>da(e).replace(Oa,ka).replace(xa,Ki).replace(va,Ki))),n=t.map((e=>e.match(wa).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ea({...e,output:t})));return e=>{const n=!$a.test(t[0])&&t.find((e=>$a.test(e)))?.replace(wa,"");let o=0;return t[0].replace(wa,(()=>`${r[o++](e)}${n||""}`)).replace(Sa,Da)}},Ea="react-spring: ",Ba=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Ea}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Ca=Ba(console.warn);var ja=Ba(console.warn);function Ma(e){return hi.str(e)&&("#"==e[0]||/\d/.test(e)||!$i()&&Oa.test(e)||e in(Si||{}))}var Aa=$i()?f:h,Ta=()=>{const e=a(!1);return Aa((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ra(){const e=s()[1],t=Ta();return()=>{t.current&&e(Math.random())}}var Pa=e=>f(e,Ia),Ia=[];function Ha(e){const t=a();return f((()=>{t.current=e})),t.current}var za=Symbol.for("Animated:node"),Na=e=>e&&e[za],La=(e,t)=>{return n=e,r=za,o=t,Object.defineProperty(n,r,{value:o,writable:!0,configurable:!0});var n,r,o},Va=e=>e&&e[za]&&e[za].getPayload(),Wa=class{constructor(){La(this,this)}getPayload(){return this.payload||[]}},Ya=class extends Wa{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,hi.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Ya(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return hi.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,hi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},qa=class extends Ya{constructor(e){super(0),this._string=null,this._toString=ea({output:[e,e]})}static create(e){return new qa(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(hi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ea({output:[this.getValue(),e]})),this._value=0,super.reset()}},Ua={dependencies:null},Qa=class extends Wa{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return gi(this.source,((n,r)=>{var o;(o=n)&&o[za]===o?t[r]=n.getValue(e):ua(n)?t[r]=da(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&mi(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return gi(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Ua.dependencies&&ua(e)&&Ua.dependencies.add(e);const t=Va(e);t&&mi(t,(e=>this.add(e)))}},Za=class extends Qa{constructor(e){super(e)}static create(e){return new Za(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Ga)),!0)}};function Ga(e){return(Ma(e)?qa:Ya).create(e)}function Xa(e){const t=Na(e);return t?t.constructor:hi.arr(e)?Za:Ma(e)?qa:Ya}var Ja=(e,t)=>{const n=!hi.fun(e)||e.prototype&&e.prototype.isReactComponent;return m(((r,i)=>{const s=a(null),l=n&&g((e=>{s.current=function(e,t){e&&(hi.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[c,u]=function(e,t){const n=new Set;Ua.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Qa(e),Ua.dependencies=null,[e,n]}(r,t),d=Ra(),h=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&d()},p=new Ka(h,u),m=a();Aa((()=>(m.current=p,mi(u,(e=>ga(e,p))),()=>{m.current&&(mi(m.current.deps,(e=>ya(e,m.current))),Zo.cancel(m.current.update))}))),f(h,[]),Pa((()=>()=>{const e=m.current;mi(e.deps,(t=>ya(t,e)))}));const y=t.getComponentProps(c.getValue());return o.createElement(e,{...y,ref:l})}))},Ka=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Zo.write(this.update)}};var es=Symbol.for("AnimatedComponent"),ts=e=>hi.str(e)?e:e&&hi.str(e.displayName)?e.displayName:hi.fun(e)&&e.name||null;function ns(e,...t){return hi.fun(e)?e(...t):e}var rs=(e,t)=>!0===e||!!(t&&e&&(hi.fun(e)?e(t):yi(e).includes(t))),os=(e,t)=>hi.obj(e)?t&&e[t]:e,is=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,as=e=>e,ss=(e,t=as)=>{let n=ls;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const o of n){const n=t(e[o],o);hi.und(n)||(r[o]=n)}return r},ls=["config","onProps","onStart","onChange","onPause","onResume","onRest"],cs={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function us(e){const t=function(e){const t={};let n=0;if(gi(e,((e,r)=>{cs[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return gi(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function ds(e){return e=da(e),hi.arr(e)?e.map(ds):Ma(e)?Uo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function fs(e){return hi.fun(e)||hi.arr(e)&&hi.obj(e[0])}var hs={tension:170,friction:26,mass:1,damping:1,easing:sa.linear,clamp:!1},ps=class{constructor(){this.velocity=0,Object.assign(this,hs)}};function ms(e,t){if(hi.und(t.decay)){const n=!hi.und(t.tension)||!hi.und(t.friction);!n&&hi.und(t.frequency)&&hi.und(t.damping)&&hi.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var gs=[],ys=class{constructor(){this.changed=!1,this.values=gs,this.toValues=null,this.fromValues=gs,this.config=new ps,this.immediate=!1}};function vs(e,{key:t,props:n,defaultProps:r,state:o,actions:i}){return new Promise(((a,s)=>{let l,c,u=rs(n.cancel??r?.cancel,t);if(u)h();else{hi.und(n.pause)||(o.paused=rs(n.pause,t));let e=r?.pause;!0!==e&&(e=o.paused||rs(e,t)),l=ns(n.delay||0,t),e?(o.resumeQueue.add(f),i.pause()):(i.resume(),f())}function d(){o.resumeQueue.add(f),o.timeouts.delete(c),c.cancel(),l=c.time-Zo.now()}function f(){l>0&&!Uo.skipAnimation?(o.delayed=!0,c=Zo.setTimeout(h,l),o.pauseQueue.add(d),o.timeouts.add(c)):h()}function h(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(d),o.timeouts.delete(c),e<=(o.cancelId||0)&&(u=!0);try{i.start({...n,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var bs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?$s(e.get()):t.every((e=>e.noop))?ws(e.get()):xs(e.get(),t.every((e=>e.finished))),ws=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),xs=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),$s=e=>({value:e,cancelled:!0,finished:!1});function Ss(e,t,n,r){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=n;return i||e!==s||t.reset?n.promise=(async()=>{n.asyncId=o,n.asyncTo=e;const c=ss(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const f=new Promise(((e,t)=>(u=e,d=t))),h=e=>{const t=o<=(n.cancelId||0)&&$s(r)||o!==n.asyncId&&xs(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const i=new ks,a=new Fs;return(async()=>{if(Uo.skipAnimation)throw Os(n),a.result=xs(r,!1),d(a),a;h(i);const s=hi.obj(e)?{...e}:{...t,to:e};s.parentId=o,gi(c,((e,t)=>{hi.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return h(i),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(Uo.skipAnimation)return Os(n),xs(r,!1);try{let t;t=hi.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),f]),m=xs(r.get(),!0,!1)}catch(e){if(e instanceof ks)m=e.result;else{if(!(e instanceof Fs))throw e;m=e.result}}finally{o==n.asyncId&&(n.asyncId=i,n.asyncTo=i?s:void 0,n.promise=i?l:void 0)}return hi.fun(a)&&Zo.batchedUpdates((()=>{a(m,r,r.item)})),m})():l}function Os(e,t){vi(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var ks=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Fs=class extends Error{constructor(){super("SkipAnimationSignal")}},Ds=e=>e instanceof Es,_s=1,Es=class extends pa{constructor(){super(...arguments),this.id=_s++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Na(this);return e&&e.getValue()}to(...e){return Uo.to(this,e)}interpolate(...e){return Ca(`${Ea}The "interpolate" function is deprecated in v9 (use "to" instead)`),Uo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){ha(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Ci.sort(this),ha(this,{type:"priority",parent:this,priority:e})}},Bs=Symbol.for("SpringPhase"),Cs=e=>(1&e[Bs])>0,js=e=>(2&e[Bs])>0,Ms=e=>(4&e[Bs])>0,As=(e,t)=>t?e[Bs]|=3:e[Bs]&=-3,Ts=(e,t)=>t?e[Bs]|=4:e[Bs]&=-5,Rs=class extends Es{constructor(e,t){if(super(),this.animation=new ys,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!hi.und(e)||!hi.und(t)){const n=hi.obj(e)?{...e}:{...t,from:e};hi.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(js(this)||this._state.asyncTo)||Ms(this)}get goal(){return da(this.animation.to)}get velocity(){const e=Na(this);return e instanceof Ya?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Cs(this)}get isAnimating(){return js(this)}get isPaused(){return Ms(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:o}=r;const{config:i}=r,a=Va(r.to);!a&&ua(r.to)&&(o=yi(da(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==qa?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=hi.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const f=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(hi.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=f,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||f/10,r=i.clamp?0:i.bounce,l=!hi.und(r),h=n==c?s.v0>0:n<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=f,!u));++e){l&&(m=d==c||d>c==h,m&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*g,d+=a*g}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=Na(this),l=s.getValue();if(t){const e=da(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Zo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(js(this)){const{to:e,config:t}=this.animation;Zo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return hi.und(e)?(n=this.queue||[],this.queue=[]):n=[hi.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>bs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Os(this._state,e&&this._lastCallId),Zo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=hi.obj(n)?n[t]:n,(null==n||fs(n))&&(n=void 0),r=hi.obj(r)?r[t]:r,null==r&&(r=void 0);const o={to:n,from:r};return Cs(this)||(e.reverse&&([n,r]=[r,n]),r=da(r),hi.und(r)?Na(this)||this._set(n):this._set(r)),o}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,ss(e,((e,t)=>/^on/.test(t)?os(e,n):e))),Vs(this,e,"onProps"),Ws(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return vs(++this._lastCallId,{key:n,props:e,defaultProps:r,state:i,actions:{pause:()=>{Ms(this)||(Ts(this,!0),xi(i.pauseQueue),Ws(this,"onPause",xs(this,Ps(this,this.animation.to)),this))},resume:()=>{Ms(this)&&(Ts(this,!1),js(this)&&this._resume(),xi(i.resumeQueue),Ws(this,"onResume",xs(this,Ps(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=Is(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n($s(this));const r=!hi.und(e.to),o=!hi.und(e.from);if(r||o){if(!(t.callId>this._lastToId))return n($s(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!o||r||t.default&&!hi.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const f=!pi(d,c);f&&(s.from=d),d=da(d);const h=!pi(u,l);h&&this._focus(u);const p=fs(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||o)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(ms(n={...n},t),t={...n,...t}),ms(e,t),Object.assign(e,t);for(const t in hs)null==e[t]&&(e[t]=hs[t]);let{frequency:r,damping:o}=e;const{mass:i}=e;hi.und(r)||(r<.01&&(r=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/r,2)*i,e.friction=4*Math.PI*o*i/r)}(m,ns(t.config,i),t.config!==a.config?ns(a.config,i):void 0);let v=Na(this);if(!v||hi.und(u))return n(xs(this,!0));const b=hi.und(t.reset)?o&&!t.default:!hi.und(d)&&rs(t.reset,i),w=b?d:this.get(),x=ds(u),$=hi.num(x)||hi.arr(x)||Ma(x),S=!p&&(!$||rs(a.immediate||t.immediate,i));if(h){const e=Xa(u);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(x)}}const O=v.constructor;let k=ua(u),F=!1;if(!k){const e=b||!Cs(this)&&f;(h||e)&&(F=pi(ds(w),x),k=!F),(pi(s.immediate,S)||S)&&pi(m.decay,g)&&pi(m.velocity,y)||(k=!0)}if(F&&js(this)&&(s.changed&&!b?k=!0:k||this._stop(l)),!p&&((k||ua(l))&&(s.values=v.getPayload(),s.toValues=ua(u)?null:O==qa?[1]:yi(x)),s.immediate!=S&&(s.immediate=S,S||b||this._set(l)),k)){const{onRest:e}=s;mi(Ls,(e=>Vs(this,t,e)));const r=xs(this,Ps(this,l));xi(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Zo.batchedUpdates((()=>{s.changed=!b,e?.(r,this),b?ns(a.onRest,r):s.onStart?.(r,this)}))}b&&this._set(w),p?n(Ss(t.to,t,this._state,this)):k?this._start():js(this)&&!h?this._pendingCalls.add(n):n(ws(w))}_focus(e){const t=this.animation;e!==t.to&&(fa(this)&&this._detach(),t.to=e,fa(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;ua(t)&&(ga(t,this),Ds(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;ua(e)&&ya(e,this)}_set(e,t=!0){const n=da(e);if(!hi.und(n)){const e=Na(this);if(!e||!pi(n,e.getValue())){const r=Xa(n);e&&e.constructor==r?e.setValue(n):La(this,r.create(n)),e&&Zo.batchedUpdates((()=>{this._onChange(n,t)}))}}return Na(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Ws(this,"onStart",xs(this,Ps(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ns(this.animation.onChange,e,this)),ns(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Na(this).reset(da(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),js(this)||(As(this,!0),Ms(this)||this._resume())}_resume(){Uo.skipAnimation?this.finish():Ci.start(this)}_stop(e,t){if(js(this)){As(this,!1);const n=this.animation;mi(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),ha(this,{type:"idle",parent:this});const r=t?$s(this.get()):xs(this.get(),Ps(this,e??n.to));xi(this._pendingCalls,r),n.changed&&(n.changed=!1,Ws(this,"onRest",r,this))}}};function Ps(e,t){const n=ds(t);return pi(ds(e.get()),n)}function Is(e,t=e.loop,n=e.to){const r=ns(t);if(r){const o=!0!==r&&us(r),i=(o||e).reverse,a=!o||o.reset;return Hs({...e,loop:t,default:!1,pause:void 0,to:!i||fs(n)?n:void 0,from:a?e.from:void 0,reset:a,...o})}}function Hs(e){const{to:t,from:n}=e=us(e),r=new Set;return hi.obj(t)&&Ns(t,r),hi.obj(n)&&Ns(n,r),e.keys=r.size?Array.from(r):null,e}function zs(e){const t=Hs(e);return hi.und(t.default)&&(t.default=ss(t)),t}function Ns(e,t){gi(e,((e,n)=>null!=e&&t.add(n)))}var Ls=["onStart","onRest","onChange","onPause","onResume"];function Vs(e,t,n){e.animation[n]=t[n]!==is(t,n)?os(t[n],e.key):void 0}function Ws(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var Ys=["onStart","onChange","onRest"],qs=1,Us=class{constructor(e,t){this.id=qs++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];hi.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Hs(e)),this}start(e){let{queue:t}=this;return e?t=yi(e).map(Hs):this.queue=[],this._flush?this._flush(this,t):(el(this,t),Qs(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;mi(yi(t),(t=>n[t].stop(!!e)))}else Os(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(hi.und(e))this.start({pause:!0});else{const t=this.springs;mi(yi(e),(e=>t[e].pause()))}return this}resume(e){if(hi.und(e))this.start({pause:!1});else{const t=this.springs;mi(yi(e),(e=>t[e].resume()))}return this}each(e){gi(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,o=this._changed.size>0;(r&&!this._started||o&&!this._started)&&(this._started=!0,vi(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!r&&this._started,a=o||i&&n.size?this.get():null;o&&t.size&&vi(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,vi(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Zo.onFrame(this._onFrame)}};function Qs(e,t){return Promise.all(t.map((t=>Zs(e,t)))).then((t=>bs(e,t)))}async function Zs(e,t,n){const{keys:r,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=hi.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const u=hi.arr(o)||hi.fun(o)?o:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):mi(Ys,(n=>{const r=t[n];if(hi.fun(r)){const o=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=o.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):o.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,xi(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const f=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),h=!0===t.cancel||!0===is(t,"cancel");(u||h&&d.asyncId)&&f.push(vs(++e._lastAsyncId,{props:t,state:d,actions:{pause:fi,resume:fi,start(t,n){h?(Os(d,e._lastAsyncId),n($s(e))):(t.onRest=s,n(Ss(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=bs(e,await Promise.all(f));if(a&&p.finished&&(!n||!p.noop)){const n=Is(t,a,o);if(n)return el(e,[n]),Zs(e,n,!0)}return l&&Zo.batchedUpdates((()=>l(p,e,e.item))),p}function Gs(e,t){const n={...e.springs};return t&&mi(yi(t),(e=>{hi.und(e.keys)&&(e=Hs(e)),hi.obj(e.to)||(e={...e,to:void 0}),Ks(n,e,(e=>Js(e)))})),Xs(e,n),n}function Xs(e,t){gi(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,ga(t,e))}))}function Js(e,t){const n=new Rs;return n.key=e,t&&ga(n,t),n}function Ks(e,t,n){t.keys&&mi(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function el(e,t){mi(t,(t=>{Ks(e.springs,t,(t=>Js(t,e)))}))}var tl,nl,rl=({children:e,...t})=>{const n=y(ol),r=t.pause||!!n.pause,i=t.immediate||!!n.immediate;t=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=a(),o=r.current;let i=o;i?Boolean(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,i.inputs))||(i={inputs:t,result:e()}):i=n;return f((()=>{r.current=i,o==n&&(n.inputs=n.result=void 0)}),[i]),i.result}((()=>({pause:r,immediate:i})),[r,i]);const{Provider:l}=ol;return o.createElement(l,{value:t},e)},ol=(tl=rl,nl={},Object.assign(tl,o.createContext(nl)),tl.Provider._context=tl,tl.Consumer._context=tl,tl);rl.Provider=ol.Provider,rl.Consumer=ol.Consumer;var il=()=>{const e=[],t=function(t){ja(`${Ea}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return mi(e,((e,o)=>{if(hi.und(t))r.push(e.start());else{const i=n(t,e,o);i&&r.push(e.start(i))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return mi(e,(e=>e.pause(...arguments))),this},t.resume=function(){return mi(e,(e=>e.resume(...arguments))),this},t.set=function(t){mi(e,((e,n)=>{const r=hi.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return mi(e,((e,r)=>{if(hi.und(t))n.push(e.start());else{const o=this._getProps(t,e,r);o&&n.push(e.start(o))}})),n},t.stop=function(){return mi(e,(e=>e.stop(...arguments))),this},t.update=function(t){return mi(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return hi.fun(e)?e(n,t):e};return t._getProps=n,t};function al(e,t){const n=hi.fun(e),[[r],o]=function(e,t,n){const r=hi.fun(t)&&t;r&&!n&&(n=[]);const o=p((()=>r||3==arguments.length?il():void 0),[]),i=a(0),s=Ra(),l=p((()=>({ctrls:[],queue:[],flush(e,t){const n=Gs(e,t);return i.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Qs(e,t):new Promise((r=>{Xs(e,n),l.queue.push((()=>{r(Qs(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],d=Ha(e)||0;function f(e,n){for(let o=e;o<n;o++){const e=c.current[o]||(c.current[o]=new Us(null,l.flush)),n=r?r(o,e):t[o];n&&(u[o]=zs(n))}}p((()=>{mi(c.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),c.current.length=e,f(d,e)}),[e]),p((()=>{f(0,Math.min(d,e))}),n);const h=c.current.map(((e,t)=>Gs(e,u[t]))),m=y(rl),g=Ha(m),v=m!==g&&function(e){for(const t in e)return!0;return!1}(m);Aa((()=>{i.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],mi(e,(e=>e()))),mi(c.current,((e,t)=>{o?.add(e),v&&e.start({default:m});const n=u[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Pa((()=>()=>{mi(l.ctrls,(e=>e.stop(!0)))}));const b=h.map((e=>({...e})));return o?[b,o]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,o]:r}var sl=class extends Es{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ea(...t);const n=this._get(),r=Xa(n);La(this,r.create(n))}advance(e){const t=this._get();pi(t,this.get())||(Na(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&cl(this._active)&&ul(this)}_get(){const e=hi.arr(this.source)?this.source.map(da):yi(da(this.source));return this.calc(...e)}_start(){this.idle&&!cl(this._active)&&(this.idle=!1,mi(Va(this),(e=>{e.done=!1})),Uo.skipAnimation?(Zo.batchedUpdates((()=>this.advance())),ul(this)):Ci.start(this))}_attach(){let e=1;mi(yi(this.source),(t=>{ua(t)&&ga(t,this),Ds(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){mi(yi(this.source),(e=>{ua(e)&&ya(e,this)})),this._active.clear(),ul(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=yi(this.source).reduce(((e,t)=>Math.max(e,(Ds(t)?t.priority:0)+1)),0))}};function ll(e){return!1!==e.idle}function cl(e){return!e.size||Array.from(e).every(ll)}function ul(e){e.idle||(e.idle=!0,mi(Va(e),(e=>{e.done=!0})),ha(e,{type:"idle",parent:e}))}Uo.assign({createStringInterpolator:_a,to:(e,t)=>new sl(e,t)});var dl=/^--/;function fl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||dl.test(e)||pl.hasOwnProperty(e)&&pl[e]?(""+t).trim():t+"px"}var hl={};var pl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ml=["Webkit","Ms","Moz","O"];pl=Object.keys(pl).reduce(((e,t)=>(ml.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),pl);var gl=/^(matrix|translate|scale|rotate|skew)/,yl=/^(translate)/,vl=/^(rotate|skew)/,bl=(e,t)=>hi.num(e)&&0!==e?e+t:e,wl=(e,t)=>hi.arr(e)?e.every((e=>wl(e,t))):hi.num(e)?e===t:parseFloat(e)===t,xl=class extends Qa{constructor({x:e,y:t,z:n,...r}){const o=[],i=[];(e||t||n)&&(o.push([e||0,t||0,n||0]),i.push((e=>[`translate3d(${e.map((e=>bl(e,"px"))).join(",")})`,wl(e,0)]))),gi(r,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(gl.test(t)){if(delete r[t],hi.und(e))return;const n=yl.test(t)?"px":vl.test(t)?"deg":"";o.push(yi(e)),i.push("rotate3d"===t?([e,t,r,o])=>[`rotate3d(${e},${t},${r},${bl(o,n)})`,wl(o,0)]:e=>[`${t}(${e.map((e=>bl(e,n))).join(",")})`,wl(e,t.startsWith("scale")?1:0)])}})),o.length&&(r.transform=new $l(o,i)),super(r)}},$l=class extends pa{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return mi(this.inputs,((n,r)=>{const o=da(n[0]),[i,a]=this.transforms[r](hi.arr(o)?o:n.map(da));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&mi(this.inputs,(e=>mi(e,(e=>ua(e)&&ga(e,this)))))}observerRemoved(e){0==e&&mi(this.inputs,(e=>mi(e,(e=>ua(e)&&ya(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),ha(this,e)}};Uo.assign({batchedUpdates:x,createStringInterpolator:_a,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Sl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Qa(e)),getComponentProps:r=(e=>e)}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},i=e=>{const t=ts(e)||"Anonymous";return(e=hi.str(e)?i[e]||(i[e]=Ja(e,o)):e[es]||(e[es]=Ja(e,o))).displayName=`Animated(${t})`,e};return gi(e,((t,n)=>{hi.arr(e)&&(n=ts(t)),i[n]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:o,scrollTop:i,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:hl[t]||(hl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const t in r)if(r.hasOwnProperty(t)){const n=fl(t,r[t]);dl.test(t)?e.style.setProperty(t,n):e.style[t]=n}u.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==i&&(e.scrollTop=i),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new xl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Ol=Sl.animated;function kl(e){return _l(e)?(e.nodeName||"").toLowerCase():"#document"}function Fl(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Dl(e){var t;return null==(t=(_l(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function _l(e){return e instanceof Node||e instanceof Fl(e).Node}function El(e){return e instanceof Element||e instanceof Fl(e).Element}function Bl(e){return e instanceof HTMLElement||e instanceof Fl(e).HTMLElement}function Cl(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Fl(e).ShadowRoot)}function jl(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Pl(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Ml(e){return["table","td","th"].includes(kl(e))}function Al(e){const t=Tl(),n=Pl(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Tl(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Rl(e){return["html","body","#document"].includes(kl(e))}function Pl(e){return Fl(e).getComputedStyle(e)}function Il(e){return El(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Hl(e){if("html"===kl(e))return e;const t=e.assignedSlot||e.parentNode||Cl(e)&&e.host||Dl(e);return Cl(t)?t.host:t}function zl(e){const t=Hl(e);return Rl(t)?e.ownerDocument?e.ownerDocument.body:e.body:Bl(t)&&jl(t)?t:zl(t)}function Nl(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=zl(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=Fl(o);return i?t.concat(a,a.visualViewport||[],jl(o)?o:[],a.frameElement&&n?Nl(a.frameElement):[]):t.concat(o,Nl(o,[],n))}const Ll=Math.min,Vl=Math.max,Wl=Math.round,Yl=Math.floor,ql=e=>({x:e,y:e}),Ul={left:"right",right:"left",bottom:"top",top:"bottom"},Ql={start:"end",end:"start"};function Zl(e,t,n){return Vl(e,Ll(t,n))}function Gl(e,t){return"function"==typeof e?e(t):e}function Xl(e){return e.split("-")[0]}function Jl(e){return e.split("-")[1]}function Kl(e){return"x"===e?"y":"x"}function ec(e){return"y"===e?"height":"width"}function tc(e){return["top","bottom"].includes(Xl(e))?"y":"x"}function nc(e){return Kl(tc(e))}function rc(e){return e.replace(/start|end/g,(e=>Ql[e]))}function oc(e){return e.replace(/left|right|bottom|top/g,(e=>Ul[e]))}function ic(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function ac(e,t,n){let{reference:r,floating:o}=e;const i=tc(t),a=nc(t),s=ec(a),l=Xl(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[s]/2-o[s]/2;let h;switch(l){case"top":h={x:u,y:r.y-o.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-o.width,y:d};break;default:h={x:r.x,y:r.y}}switch(Jl(t)){case"start":h[a]-=f*(n&&c?-1:1);break;case"end":h[a]+=f*(n&&c?-1:1)}return h}async function sc(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Gl(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(h),m=s[f?"floating"===d?"reference":"floating":d],g=ic(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),y="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)),b=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},w=ic(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:y,offsetParent:v,strategy:l}):y);return{top:(g.top-w.top+p.top)/b.y,bottom:(w.bottom-g.bottom+p.bottom)/b.y,left:(g.left-w.left+p.left)/b.x,right:(w.right-g.right+p.right)/b.x}}function lc(e){const t=Pl(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Bl(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=Wl(n)!==i||Wl(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function cc(e){return El(e)?e:e.contextElement}function uc(e){const t=cc(e);if(!Bl(t))return ql(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=lc(t);let a=(i?Wl(n.width):n.width)/r,s=(i?Wl(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const dc=ql(0);function fc(e){const t=Fl(e);return Tl()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:dc}function hc(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=cc(e);let a=ql(1);t&&(r?El(r)&&(a=uc(r)):a=uc(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==Fl(e))&&t}(i,n,r)?fc(i):ql(0);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=Fl(i),t=r&&El(r)?Fl(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=uc(o),t=o.getBoundingClientRect(),r=Pl(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,c*=e.y,u*=e.x,d*=e.y,l+=i,c+=a,n=Fl(o),o=n.frameElement}}return ic({width:u,height:d,x:l,y:c})}const pc=[":popover-open",":modal"];function mc(e){return pc.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function gc(e){return hc(Dl(e)).left+Il(e).scrollLeft}function yc(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=Fl(e),r=Dl(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const e=Tl();(!e||e&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}(e,n);else if("document"===t)r=function(e){const t=Dl(e),n=Il(e),r=e.ownerDocument.body,o=Vl(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Vl(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+gc(e);const s=-n.scrollTop;return"rtl"===Pl(r).direction&&(a+=Vl(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}(Dl(e));else if(El(t))r=function(e,t){const n=hc(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Bl(e)?uc(e):ql(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=fc(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return ic(r)}function vc(e,t){const n=Hl(e);return!(n===t||!El(n)||Rl(n))&&("fixed"===Pl(n).position||vc(n,t))}function bc(e,t,n){const r=Bl(t),o=Dl(t),i="fixed"===n,a=hc(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const l=ql(0);if(r||!r&&!i)if(("body"!==kl(t)||jl(o))&&(s=Il(t)),r){const e=hc(t,!0,i,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else o&&(l.x=gc(o));return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function wc(e){return"static"===Pl(e).position}function xc(e,t){return Bl(e)&&"fixed"!==Pl(e).position?t?t(e):e.offsetParent:null}function $c(e,t){const n=Fl(e);if(mc(e))return n;if(!Bl(e)){let t=Hl(e);for(;t&&!Rl(t);){if(El(t)&&!wc(t))return t;t=Hl(t)}return n}let r=xc(e,t);for(;r&&Ml(r)&&wc(r);)r=xc(r,t);return r&&Rl(r)&&wc(r)&&!Al(r)?n:r||function(e){let t=Hl(e);for(;Bl(t)&&!Rl(t);){if(Al(t))return t;t=Hl(t)}return null}(e)||n}const Sc={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=Dl(r),s=!!t&&mc(t.floating);if(r===a||s&&i)return n;let l={scrollLeft:0,scrollTop:0},c=ql(1);const u=ql(0),d=Bl(r);if((d||!d&&!i)&&(("body"!==kl(r)||jl(a))&&(l=Il(r)),Bl(r))){const e=hc(r);c=uc(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}},getDocumentElement:Dl,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?mc(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=Nl(e,[],!1).filter((e=>El(e)&&"body"!==kl(e))),o=null;const i="fixed"===Pl(e).position;let a=i?Hl(e):e;for(;El(a)&&!Rl(a);){const t=Pl(a),n=Al(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||jl(a)&&!n&&vc(e,a))?r=r.filter((e=>e!==a)):o=t,a=Hl(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],s=i.reduce(((e,n)=>{const r=yc(t,n,o);return e.top=Vl(r.top,e.top),e.right=Ll(r.right,e.right),e.bottom=Ll(r.bottom,e.bottom),e.left=Vl(r.left,e.left),e}),yc(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:$c,getElementRects:async function(e){const t=this.getOffsetParent||$c,n=this.getDimensions,r=await n(e.floating);return{reference:bc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=lc(e);return{width:t,height:n}},getScale:uc,isElement:El,isRTL:function(e){return"rtl"===Pl(e).direction}};function Oc(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:l=!1}=r,c=cc(e),u=o||i?[...c?Nl(c):[],...Nl(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&s?function(e,t){let n,r=null;const o=Dl(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;const h={rootMargin:-Yl(u)+"px "+-Yl(o.clientWidth-(c+d))+"px "+-Yl(o.clientHeight-(u+f))+"px "+-Yl(c)+"px",threshold:Vl(0,Ll(1,l))||1};let p=!0;function m(e){const t=e[0].intersectionRatio;if(t!==l){if(!p)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(m,{...h,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(m,h)}r.observe(e)}(!0),i}(c,n):null;let f,h=-1,p=null;a&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),n()})),c&&!l&&p.observe(c),p.observe(t));let m=l?hc(e):null;return l&&function t(){const r=hc(e);!m||r.x===m.x&&r.y===m.y&&r.width===m.width&&r.height===m.height||n();m=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=p)||e.disconnect(),p=null,l&&cancelAnimationFrame(f)}}const kc=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=t,l=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=Xl(n),s=Jl(n),l="y"===tc(n),c=["left","top"].includes(a)?-1:1,u=i&&l?-1:1,d=Gl(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof p&&(h="end"===s?-1*p:p),l?{x:h*u,y:f*c}:{x:f*c,y:h*u}}(t,e);return a===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:a}}}}},Fc=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Gl(e,t),c={x:n,y:r},u=await sc(t,l),d=tc(Xl(o)),f=Kl(d);let h=c[f],p=c[d];if(i){const e="y"===f?"bottom":"right";h=Zl(h+u["y"===f?"top":"left"],h,h-u[e])}if(a){const e="y"===d?"bottom":"right";p=Zl(p+u["y"===d?"top":"left"],p,p-u[e])}const m=s.fn({...t,[f]:h,[d]:p});return{...m,data:{x:m.x-n,y:m.y-r}}}}},Dc=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...g}=Gl(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=Xl(o),v=Xl(s)===s,b=await(null==l.isRTL?void 0:l.isRTL(c.floating)),w=f||(v||!m?[oc(s)]:function(e){const t=oc(e);return[rc(e),t,rc(t)]}(s));f||"none"===p||w.push(...function(e,t,n,r){const o=Jl(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(Xl(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(rc)))),i}(s,m,p,b));const x=[s,...w],$=await sc(t,g),S=[];let O=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&S.push($[y]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=Jl(e),o=nc(e),i=ec(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=oc(a)),[a,oc(a)]}(o,a,b);S.push($[e[0]],$[e[1]])}if(O=[...O,{placement:o,overflows:S}],!S.every((e=>e<=0))){var k,F;const e=((null==(k=i.flip)?void 0:k.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:O},reset:{placement:t}};let n=null==(F=O.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:F.placement;if(!n)switch(h){case"bestFit":{var D;const e=null==(D=O.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:D[0];e&&(n=e);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}},_c=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:c=!0}=Gl(e,t),u={x:n,y:r},d=tc(o),f=Kl(d);let h=u[f],p=u[d];const m=Gl(s,t),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+g.mainAxis,n=i.reference[f]+i.reference[e]-g.mainAxis;h<t?h=t:h>n&&(h=n)}if(c){var y,v;const e="y"===f?"width":"height",t=["top","left"].includes(Xl(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(y=a.offset)?void 0:y[d])||0)+(t?0:g.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(v=a.offset)?void 0:v[d])||0)-(t?g.crossAxis:0);p<n?p=n:p>r&&(p=r)}return{[f]:h,[d]:p}}}},Ec=(e,t,n)=>{const r=new Map,o={platform:Sc,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=ac(c,r,l),f=r,h={},p=0;for(let n=0;n<s.length;n++){const{name:i,fn:m}=s[n],{x:g,y:y,data:v,reset:b}=await m({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:h,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=y?y:d,h={...h,[i]:{...h[i],...v}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=ac(c,f,l))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}})(e,t,{...o,platform:i})};var Bc="undefined"!=typeof document?h:f;function Cc(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!Cc(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!Cc(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function jc(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Mc(e,t){const n=jc(e);return Math.round(t*n)/n}function Ac(e){const t=o.useRef(e);return Bc((()=>{t.current=e})),t}const Tc=(e,t)=>({...Fc(e),options:[e,t]}),Rc=(e,t)=>({..._c(e),options:[e,t]}),Pc=(e,t)=>({...Dc(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var Ic=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),Hc="undefined"==typeof Element,zc=Hc?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Nc=!Hc&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},Lc=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},Vc=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Lc(a,!1))if("SLOT"===a.tagName){var s=a.assignedElements(),l=e(s.length?s:a.children,!0,r);r.flatten?o.push.apply(o,l):o.push({scopeParent:a,candidates:l})}else{zc.call(a,Ic)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!Lc(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},Wc=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Yc=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!Wc(e)?0:e.tabIndex},qc=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Uc=function(e){return"INPUT"===e.tagName},Qc=function(e){return function(e){return Uc(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||Nc(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},Zc=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},Gc=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=zc.call(e,"details>summary:first-of-type")?e.parentElement:e;if(zc.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return Zc(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,s=Nc(e);if(a&&!a.shadowRoot&&!0===r(a))return Zc(e);e=e.assignedSlot?e.assignedSlot:a||s===e.ownerDocument?a:s.host}e=i}if(function(e){var t,n,r,o,i=e&&Nc(e),a=null===(t=i)||void 0===t?void 0:t.host,s=!1;if(i&&i!==e)for(s=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!s&&a;){var l,c,u;s=!(null===(c=a=null===(l=i=Nc(a))||void 0===l?void 0:l.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return s}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},Xc=function(e,t){return!(t.disabled||Lc(t)||function(e){return Uc(e)&&"hidden"===e.type}(t)||Gc(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!zc.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},Jc=function(e,t){return!(Qc(t)||Yc(t)<0||!Xc(e,t))},Kc=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},eu=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,s=function(e,t){var n=Yc(e);return n<0&&t&&!Wc(e)?0:n}(a,i),l=i?e(t.candidates):a;0===s?i?n.push.apply(n,l):n.push(a):r.push({documentOrder:o,tabIndex:s,item:t,isScope:i,content:l})})),r.sort(qc).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},tu=function(e,t){var n;return n=(t=t||{}).getShadowRoot?Vc([e],t.includeContainer,{filter:Jc.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Kc}):function(e,t,n){if(Lc(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Ic));return t&&zc.call(e,Ic)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,Jc.bind(null,t)),eu(n)};const nu={...o},ru=nu.useInsertionEffect||(e=>e());var ou="undefined"!=typeof document?h:f;function iu(){return iu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},iu.apply(this,arguments)}let au=!1,su=0;const lu=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+su++;const cu=nu.useId||function(){const[e,t]=o.useState((()=>au?lu():void 0));return ou((()=>{null==e&&t(lu())}),[]),o.useEffect((()=>{au=!0}),[]),e};let uu;"production"!==process.env.NODE_ENV&&(uu=new Set);const du=o.createContext(null),fu=o.createContext(null),hu=()=>{var e;return(null==(e=o.useContext(du))?void 0:e.id)||null};function pu(e){return"data-floating-ui-"+e}const mu=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function gu(e,t){const n=tu(e,mu());"prev"===t&&n.reverse();const r=n.indexOf(function(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}((null==(o=e)?void 0:o.ownerDocument)||document));var o;return n.slice(r+1)[0]}function yu(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!function(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Cl(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}(n,r)}function vu(e){tu(e,mu()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function bu(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const wu={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function xu(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const $u=o.forwardRef((function(e,t){const[n,r]=o.useState();ou((()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",xu),()=>{document.removeEventListener("keydown",xu)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[pu("focus-guard")]:"",style:wu};return o.createElement("span",iu({},e,i))})),Su=o.createContext(null),Ou=pu("portal");function ku(e){const{children:t,id:n,root:r=null,preserveTabOrder:i=!0}=e,a=function(e){void 0===e&&(e={});const{id:t,root:n}=e,r=cu(),i=Fu(),[a,s]=o.useState(null),l=o.useRef(null);return ou((()=>()=>{null==a||a.remove(),queueMicrotask((()=>{l.current=null}))}),[a]),ou((()=>{if(!r)return;if(l.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=r,n.setAttribute(Ou,""),e.appendChild(n),l.current=n,s(n)}),[t,r]),ou((()=>{if(!r)return;if(l.current)return;let e=n||(null==i?void 0:i.portalNode);e&&!El(e)&&(e=e.current),e=e||document.body;let o=null;t&&(o=document.createElement("div"),o.id=t,e.appendChild(o));const a=document.createElement("div");a.id=r,a.setAttribute(Ou,""),e=o||e,e.appendChild(a),l.current=a,s(a)}),[t,n,r,i]),a}({id:n,root:r}),[s,l]=o.useState(null),c=o.useRef(null),u=o.useRef(null),d=o.useRef(null),f=o.useRef(null),h=!!s&&!s.modal&&s.open&&i&&!(!r&&!a);return o.useEffect((()=>{if(a&&i&&(null==s||!s.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&yu(e)){("focusin"===e.type?bu:vu)(a)}}}),[a,i,null==s?void 0:s.modal]),o.createElement(Su.Provider,{value:o.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:c,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:l})),[i,a])},h&&a&&o.createElement($u,{"data-type":"outside",ref:c,onFocus:e=>{if(yu(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=gu(document.body,"prev")||(null==s?void 0:s.refs.domReference.current);null==e||e.focus()}}}),h&&a&&o.createElement("span",{"aria-owns":a.id,style:wu}),a&&$(t,a),h&&a&&o.createElement($u,{"data-type":"outside",ref:u,onFocus:e=>{if(yu(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=gu(document.body,"next")||(null==s?void 0:s.refs.domReference.current);null==t||t.focus(),(null==s?void 0:s.closeOnFocusOut)&&(null==s||s.onOpenChange(!1,e.nativeEvent))}}}))}const Fu=()=>o.useContext(Su);function Du(e){const{open:t=!1,onOpenChange:n,elements:r}=e,i=cu(),a=o.useRef({}),[s]=o.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),l=null!=hu();if("production"!==process.env.NODE_ENV){const e=r.reference;e&&!El(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=uu)&&e.has(o)||(null==(i=uu)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[c,u]=o.useState(r.reference),d=function(e){const t=o.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return ru((()=>{t.current=e})),o.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}(((e,t,r)=>{a.current.openEvent=e?t:void 0,s.emit("openchange",{open:e,event:t,reason:r,nested:l}),null==n||n(e,t,r)})),f=o.useMemo((()=>({setPositionReference:u})),[]),h=o.useMemo((()=>({reference:c||r.reference||null,floating:r.floating||null,domReference:r.reference})),[c,r.reference,r.floating]);return o.useMemo((()=>({dataRef:a,open:t,onOpenChange:d,elements:h,events:s,floatingId:i,refs:f})),[t,d,h,s,i,f])}function _u(e){void 0===e&&(e={});const{nodeId:t}=e,n=Du({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,i=r.elements,[a,s]=o.useState(null),[l,c]=o.useState(null),u=(null==i?void 0:i.reference)||a,d=o.useRef(null),f=o.useContext(fu);ou((()=>{u&&(d.current=u)}),[u]);const h=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:a,floating:s}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,f]=o.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=o.useState(r);Cc(h,r)||p(r);const[m,g]=o.useState(null),[y,b]=o.useState(null),w=o.useCallback((e=>{e!==O.current&&(O.current=e,g(e))}),[]),x=o.useCallback((e=>{e!==k.current&&(k.current=e,b(e))}),[]),$=a||m,S=s||y,O=o.useRef(null),k=o.useRef(null),F=o.useRef(d),D=null!=c,_=Ac(c),E=Ac(i),B=o.useCallback((()=>{if(!O.current||!k.current)return;const e={placement:t,strategy:n,middleware:h};E.current&&(e.platform=E.current),Ec(O.current,k.current,e).then((e=>{const t={...e,isPositioned:!0};C.current&&!Cc(F.current,t)&&(F.current=t,v.flushSync((()=>{f(t)})))}))}),[h,t,n,E]);Bc((()=>{!1===u&&F.current.isPositioned&&(F.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const C=o.useRef(!1);Bc((()=>(C.current=!0,()=>{C.current=!1})),[]),Bc((()=>{if($&&(O.current=$),S&&(k.current=S),$&&S){if(_.current)return _.current($,S,B);B()}}),[$,S,B,_,D]);const j=o.useMemo((()=>({reference:O,floating:k,setReference:w,setFloating:x})),[w,x]),M=o.useMemo((()=>({reference:$,floating:S})),[$,S]),A=o.useMemo((()=>{const e={position:n,left:0,top:0};if(!M.floating)return e;const t=Mc(M.floating,d.x),r=Mc(M.floating,d.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",...jc(M.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,l,M.floating,d.x,d.y]);return o.useMemo((()=>({...d,update:B,refs:j,elements:M,floatingStyles:A})),[d,B,j,M,A])}({...e,elements:{...i,...l&&{reference:l}}}),p=o.useCallback((e=>{const t=El(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;c(t),h.refs.setReference(t)}),[h.refs]),m=o.useCallback((e=>{(El(e)||null===e)&&(d.current=e,s(e)),(El(h.refs.reference.current)||null===h.refs.reference.current||null!==e&&!El(e))&&h.refs.setReference(e)}),[h.refs]),g=o.useMemo((()=>({...h.refs,setReference:m,setPositionReference:p,domReference:d})),[h.refs,m,p]),y=o.useMemo((()=>({...h.elements,domReference:u})),[h.elements,u]),b=o.useMemo((()=>({...h,...r,refs:g,elements:y,nodeId:t})),[h,g,y,t,r]);return ou((()=>{r.dataRef.current.floatingContext=b;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=b)})),o.useMemo((()=>({...h,context:b,refs:g,elements:y})),[h,g,y,b])}const Eu=S.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${Nr.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Bu=t=>{var{id:n="modal",show:r,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:l,zIndex:c,onOverlayClick:u,dismissKeyboardOnShow:d=!0}=t,h=L(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,m]=s(),[g,y]=s();f((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),f((()=>{var e,t;r&&d&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;m(e)},b=()=>{const e=.01*window.visualViewport.height;m(e),y(window.visualViewport.offsetTop)};return e(mt,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:a,onOverlayClick:u,id:n,rootId:l,zIndex:c},{children:e(Eu,Object.assign({show:r,animationFrom:o,"data-testid":n,verticalHeight:p,offsetTop:g},h,{children:i}))}))},Cu=S.div`
    border-radius: 0.5rem;
    background: ${Hr.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,ju=S.button`
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

        ${({$highlight:e})=>e&&O`
                background-color: ${Hr.Neutral[7]};
            `}
    }
`,Mu=i.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=L(t,["children","focusHighlight","focusOutline","type"]);return e(ju,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),Au=S.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Hr.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Nr.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Tu=S(Mu)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${Hr.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${Hr.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Nr.mobileL} {
        right: 1.25rem;
    }
`,Ru=S.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Pu=S((t=>{var{children:n}=t,r=L(t,["children"]);const o=r["data-testid"]||"card";return e(Cu,Object.assign({},r,{"data-testid":o},{children:"string"==typeof n?e(ao.Body,{children:n}):n}))}))`
    color: ${Hr.Neutral[1]};
    ${wo({textSize:"BodySmall"})}

    ${Nr.mobileL} {
        display: none;
    }
`,Iu=S((n=>{var{id:o="modal-box",children:i,onClose:a,showCloseButton:s=!0}=n,l=L(n,["id","children","onClose","showCloseButton"]);return t(Au,Object.assign({"data-testid":o},l,{onClick:e=>{e.stopPropagation()}},{children:[s&&e(Tu,Object.assign({onClick:a,"data-testid":"close-button",focusHighlight:!1},{children:e(r,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Hu=S.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Hr.Neutral[1]};
    ${wo({textSize:"BodySmall"})}
`,zu=r=>{var{children:o,visible:i,onMobileClose:a}=r,s=L(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=U.useMediaQuery({maxWidth:vt.mobileL}),u=()=>{a&&a()},d=()=>"string"==typeof o?e(ao.BodySmall,{children:o}):o;return t(n,{children:[i&&e(Ru,Object.assign({"data-testid":l},s,{children:e(Pu,{children:d()})})),c&&e(Bu,Object.assign({show:i,onOverlayClick:u},{children:e(Iu,Object.assign({onClose:u},{children:e(Hu,{children:d()})}))}))]})},Nu=S.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Lu=r=>{var{children:o,popoverContent:i,trigger:l="click",position:c="top",zIndex:u,rootNode:d,onPopoverAppear:h,onPopoverDismiss:p}=r,m=L(r,["children","popoverContent","trigger","position","zIndex","rootNode","onPopoverAppear","onPopoverDismiss"]);const[g,y]=s(!1),v=a(),b=a(),w=U.useMediaQuery({maxWidth:Lr.mobileL}),{refs:x,floatingStyles:$}=_u({open:g,placement:c,whileElementsMounted:Oc,middleware:[(S=16,{...kc(S),options:[S,O]}),Pc(),Tc({limiter:Rc()})]});var S,O;f((()=>{if(!w&&g)return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}}),[g]);const k=e=>{var t,n;(null===(t=v.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=b.current)||void 0===n?void 0:n.contains(e.target))||(y(!1),p&&p())},F=()=>{y(!1)};return t(n,{children:[g&&e(ku,Object.assign({root:d},{children:e("div",Object.assign({ref:e=>{b.current=e,x.setFloating(e)},style:Object.assign(Object.assign({},$),{zIndex:u})},{children:"function"==typeof i?i():e(zu,Object.assign({visible:!0,onMobileClose:F},{children:i}))}))})),e(Nu,Object.assign({ref:e=>{v.current=e,x.setReference(e)},onClick:e=>{e.preventDefault(),("click"===l||w)&&(y(!g),!g&&h&&h(),g&&p&&p())},onMouseEnter:()=>{"hover"!==l||w||y(!0)},onMouseLeave:()=>{"hover"===l&&g&&!w&&y(!1)}},m,{children:o}))]})},Vu=S.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Hr.Primary};
    }
`,Wu=S.div`
    display: inline;
    position: relative;
    width: fit-content;
`,Yu=({addon:t,rootNode:n})=>{const{content:r,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(Lu,Object.assign({trigger:"click",id:a,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s},{children:e(Wu,{children:e(Vu,{children:i||e(P,{id:`${o}-icon`})})})}))},qu=S.div`
    background-color: ${e=>e.$collapsible?Hr.Neutral[7](e):Hr.Neutral[8](e)};

    ${Nr.tablet} {
        background-color: ${Hr.Neutral[7]};
    }
`,Uu=S.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Hr.Neutral[5]};

    ${Nr.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,Qu=S.div`
    display: flex;
    align-items: center;

    background-color: ${Hr.Neutral[8]};

    ${Nr.tablet} {
        background-color: transparent;
    }
`,Zu=S(Mu)`
    margin: 0 0 0 auto;
`,Gu=S(j)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Hr.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${Hr.Neutral[2]};
    }
`,Xu=S(ao.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${Nr.tablet} {
        ${oo("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,Ju=S(Ol.div)`
    overflow: hidden;
`,Ku=S.div`
    padding: 1rem 1.25rem;
`,ed=S(Ol.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,td=S(yo.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,nd=n=>{var{collapsible:r=!0,initialExpanded:o=!1,expanded:i,onExpandChange:a,minimisable:l=!1,minimisedHeight:c,showDivider:u=!0,showMobileDivider:d=!0,title:h,addon:p,children:m}=n,g=L(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:v,rootNode:b}=y(bt),w="mobile"===v,[x,$]=s(B()),[S,O]=s(l),k=!w&&r,F=ft(),D=ft(),_=al({height:x?F.height:0}),E=S?null!=c?c:Math.min(.5*D.height,216):D.height;f((()=>{$(B())}),[r,i]);function B(){return!!w||(Yo(i)?!r||o:i)}return t(qu,Object.assign({$collapsible:k},{children:[e(Uu,{$showDivider:u,$showMobileDivider:d}),(h||k)&&t(Qu,{children:[h&&t(Xu,Object.assign({weight:"semibold"},{children:[h," ",p&&("popover"===p.type?e(Yu,{addon:p,rootNode:w?b:void 0}):null)]})),k&&e(Zu,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!x;Yo(i)&&$(e),a&&a(e)},"aria-label":x?"Collapse":"Expand"},{children:e(Gu,{$expanded:x})}))]}),e(Ju,Object.assign({"data-testid":"expandable-container","data-expanded":x,style:_},{children:e("div",Object.assign({ref:F.ref},{children:t(Ku,Object.assign({},g,{children:[e(ed,Object.assign({"data-testid":"minimisable-container",$height:E,$minimisable:l},{children:e("div",Object.assign({ref:D.ref},{children:e("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof m?m(v,{minimised:S}):m}))}))})),l&&t(td,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{O(!S)}},{children:["View ",S?"more":"less"]}))]}))}))}))]}))},rd=S(nd)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${Nr.tablet} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${Nr.tablet} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`,od=S.div`
    display: flex;
    flex-direction: column;

    ${Nr.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,id=S.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${oo("BodySmall","regular")}
    ${e=>e.$selected&&O`
            color: ${Hr.Primary};
        `}
`,ad=S.input`
    appearance: none;
`,sd=S(bo)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${ad}:focus-visible + & {
        outline: 2px solid ${Hr.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,ld=S((({type:r="checkbox",indicator:o,checked:i,styleType:l="default",children:c,childrenMaxLines:u,subLabel:d,disabled:h,error:m,name:g,id:y,className:v,compositeSection:b,removable:w,onRemove:x,"data-testid":$,onChange:S})=>{const{collapsible:O=!0,errors:k,children:F,initialExpanded:D}=b||{},[_,E]=s(i),[B,C]=s(D),A=p((()=>{const e=Array.isArray(k)&&(null==k?void 0:k.length)>0,t=!Array.isArray(k)&&!!k;return e||t}),[k]),[T]=s(me.generate()),R=y?`${y}`:`tg-${T}`,P=a();f((()=>{E(i)}),[i]),f((()=>{_&&C(null==D||D)}),[_]);const I=e=>{if(!h){if(S)return void S(e);switch(r){case"checkbox":E((e=>!e));break;case"radio":case"yes":case"no":_||E(!0)}}},H=()=>{h||C(!B)},z=()=>{h||!x||x()},N=()=>{let t;switch(r){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=r}return e(bo,{type:t,active:_,disabled:h})},L=()=>{if(!d)return null;let t;return t="function"==typeof d?d():d,e(To,Object.assign({"data-id":"toggle-sublabel",$disabled:h,$selected:_},{children:t}))},V=()=>{const n=!B&&!A;return O&&t(Ho,Object.assign({$paddingTopRequired:n,disabled:h,onClick:H,"data-testid":B?"collapse-button":"expand-button"},{children:[B?"Show less":"Show more",e(B?M:j,{"aria-hidden":!0})]}))},W=r=>t(n,{children:[e(Vo,Object.assign({weight:"semibold",$disabled:h},{children:"Error"})),e(Wo,Object.assign({$disabled:h},{children:null==r?void 0:r.map(((t,n)=>e("li",Object.assign({id:`${R}-error-list-item-${n}`},{children:e(Vo,Object.assign({weight:"semibold",$disabled:h},{children:t}))}),n)))}))]});return t(Co,Object.assign({$selected:_,$disabled:h,className:v,$styleType:l,$error:m,$indicator:o,id:y,"data-testid":$},{children:[t(Ro,Object.assign({id:`${R}-header-container`,$disabled:h,$error:m,$selected:_,$indicator:o,$styleType:l},{children:[t(Po,Object.assign({$addPadding:w},{children:[e(jo,{ref:P,name:g,id:`${R}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:h,onChange:I,checked:_}),o&&N(),t(Mo,{children:[e(Ao,Object.assign({htmlFor:`${R}-input`,$selected:_,$indicator:o,$disabled:h,"data-testid":`${R}-toggle-label`,$maxLines:u},{children:c})),d&&L()]})]})),w&&e(Io,Object.assign({type:"button",$disabled:h,onClick:z,id:`${R}-remove-button`},{children:"Remove"}))]})),F&&t("div",{children:[(!O||B)&&e(Lo,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!O,$disabled:h},{children:F})),O&&!B&&A&&e(zo,Object.assign({$disabled:h,onClick:H,id:`${R}-error-alert`},{children:e(No,Object.assign({type:h?"description":"error",className:v,showIcon:!0},{children:Array.isArray(k)?W(k):k}))})),V()]})]}))}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,cd=S(yo.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${Nr.tablet} {
        margin: 0 0 1rem 0;
    }
`,ud=S.div`
    background-color: ${Hr.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,dd=S.div`
    background-color: ${Hr.Neutral[8]};
    border: 1px solid ${Hr.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,fd=S.div`
    background-color: ${Hr.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,hd=S.div`
    background-color: ${Hr.Neutral[8]};
    height: 100%;
    width: 100%;
`,pd=S.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,md=S.div`
    display: flex;
    align-items: center;

    background-color: ${Hr.Neutral[8]};

    ${Nr.tablet} {
        border-bottom: 1px solid ${Hr.Neutral[5]};
    }
`,gd=S(ao.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${Nr.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,yd=S(Mu)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${Hr.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Hr.Neutral[2]};
    }
`,vd=S(yo.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${Nr.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,bd=S(yo.Default)`
    width: 100%;
    span {
        display: flex;
        align-items: center;
    }
`,wd=S(N)`
    margin-right: 0.625rem;
`,xd=S.div`
    padding: 1.5rem 1.25rem;
    background-color: ${Hr.Neutral[8]};
    border-top: 1px solid ${Hr.Neutral[5]};
`,$d=S(yo.Default)`
    width: 100%;
`,Sd=Object.assign((o=>{var{toggleFilterButtonLabel:i="Filters",headerTitle:l="Filters",clearButtonDisabled:c=!1,onClear:u,onDismiss:d,onDone:h,children:p}=o,m=L(o,["toggleFilterButtonLabel","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[g,y]=s(!1),v=a(null),b=a(null),w=U.useMediaQuery({maxWidth:vt.tablet});f((()=>{w||$()}),[w]);const x=()=>{y(!0)},$=()=>{y(!1),d&&d()},S=()=>{y(!1),h&&h()},O=()=>{u&&u()},k=e=>"function"==typeof p?p(e):p,F=n=>t(md,{children:["mobile"===n&&e(yd,Object.assign({onClick:$,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(r,{})})),e(gd,Object.assign({weight:"semibold"},{children:l})),e(vd,Object.assign({styleType:"link",type:"button",onClick:O,disabled:c},{children:"Clear"}))]});return e("div",Object.assign({},m,{children:e(bt.Provider,w?Object.assign({value:{mode:"mobile",rootNode:v}},{children:t(n,{children:[t(bd,Object.assign({"data-testid":"filter-show-button",styleType:"light",onClick:x,type:"button"},{children:[e(wd,{})," ",i]})),e(mt,Object.assign({show:g,disableTransition:!0},{children:e(hd,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:t(fd,Object.assign({ref:v},{children:[F("mobile"),e(pd,{children:k("mobile")}),e(xd,{children:e($d,Object.assign({onClick:S,type:"button"},{children:"Done"}))})]}))}))}))]})}):Object.assign({value:{mode:"default",rootNode:b}},{children:t(dd,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:b},{children:[F("default"),k("default")]}))}))}))}),{Item:nd,Page:({onDismiss:n,onDone:r,children:o})=>t(ud,{children:[e(yd,Object.assign({onClick:n,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(z,{})})),e(pd,{children:o}),e(xd,{children:e($d,Object.assign({onClick:r,type:"button"},{children:"Done"}))})]}),Checkbox:r=>{var{selectedOptions:o,options:i,onSelect:l,labelExtractor:c,valueExtractor:u}=r,d=L(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor"]);const{mode:h}=y(bt),[p,m]=s(o||[]),[v,b]=s(),[w,x]=s(i.length),$=a(),S=a(),O=e=>()=>{const t=[...p],n=p.findIndex((t=>D(t)===D(e)));n>=0?t.splice(n,1):t.push(e),m(t),null==l||l(t)},k=()=>{const e=p.length?[]:i;m(e),null==l||l(e)},F=e=>{var t;return c?c(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},D=e=>{var t;return u?u(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},_=g((()=>{if(!$.current)return void b(void 0);const e=Array.from($.current.children);let t=0,n=0,r=-1;for(let o=0;o<e.length;o++){const i=e[o].offsetTop;if(i>r&&(n++,r=i,n>2))break;t=o}x(t),b(n>2?r-8:void 0)}),[]);f((()=>{o!==p&&m(o||[])}),[o]),f((()=>{"default"===h?(()=>{const e=S.current?S.current.offsetTop+S.current.clientHeight:void 0;b(e)})():_()}),[i]),ft({handleWidth:"mobile"===h,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:$,onResize:_});return e(rd,Object.assign({minimisable:i.length>5,minimisedHeight:v},d,{children:(r,{minimised:o})=>t(n,{children:[i.length<3?null:e(cd,Object.assign({styleType:"link",type:"button",onClick:k},{children:p.length?"Clear all":"Select all"})),e(od,Object.assign({role:"group","aria-label":d.title,ref:$},{children:i.map(((n,i)=>"default"===r?((n,r,o)=>{const i=F(n),a=D(n),s=!!p.find((e=>D(e)===a));return t(id,Object.assign({$visible:!o||r<5,$selected:s,ref:4===r?S:void 0},{children:[e(ad,{type:"checkbox",checked:s,onChange:O(n)}),e(sd,{type:"checkbox",active:s}),i]}),a)})(n,i,o):((t,n,r)=>{const o=F(t),i=D(t),a=!!p.find((e=>D(e)===i));return e(ld,Object.assign({type:"checkbox",checked:a,$visible:!r||v&&n<=w,onChange:O(t)},{children:o}),i)})(n,i,o)))}))]})}))}});export{Sd as Filter};
//# sourceMappingURL=index.js.map
