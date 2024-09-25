import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import{Chevron2LeftIcon as r}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as o}from"@lifesg/react-icons/chevron-2-right";import{ChevronLeftIcon as i}from"@lifesg/react-icons/chevron-left";import{ChevronLineLeftIcon as a}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as l}from"@lifesg/react-icons/chevron-line-right";import{ChevronRightIcon as s}from"@lifesg/react-icons/chevron-right";import{EllipsisHorizontalIcon as c}from"@lifesg/react-icons/ellipsis-horizontal";import*as u from"react";import d,{useRef as f,useState as p,isValidElement as h,createRef as m,cloneElement as g,PureComponent as v,useEffect as y,useLayoutEffect as b,useCallback as w,useMemo as x,forwardRef as S,useContext as $,useImperativeHandle as F}from"react";import O,{css as D,useTheme as E,keyframes as B}from"styled-components";import{ExternalIcon as k}from"@lifesg/react-icons/external";import*as j from"react-dom";import{findDOMNode as A,createPortal as T}from"react-dom";import{ExclamationCircleFillIcon as C}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as R}from"@lifesg/react-icons/square";import{SquareTickFillIcon as _}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as M}from"@lifesg/react-icons/tick";import{CrossIcon as P}from"@lifesg/react-icons/cross";import{MagnifierIcon as H}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as L}from"@lifesg/react-icons/chevron-down";var I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function z(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N,W={exports:{}};N=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return l(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),i=u(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=s(o),i=s(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!n||!o&&n}))},t.parse=l;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function l(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],a=t[2],l=t[3]||"",s={};return s.inverse=!!i&&"not"===i.toLowerCase(),s.type=a?a.toLowerCase():"all",l=l.match(/\([^\)]+\)/g)||[],s.expressions=l.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(o);return{modifier:n[1],feature:n[2],value:t[2]}})),s}))}function s(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const l=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(r,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,n){var i=this;if(o&&!n){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(l)}else this.matches=r(e,t),this.media=e;function l(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(l)}}e.exports=function(e,t,n){return new i(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))n.call(i,c)&&(l[c]=i[c]);if(t){a=t(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(l[a[u]]=i[a[u]])}}return l}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function l(e,t,n,l,s){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((l||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,l,n,null,o)}catch(e){u=e}if(!u||u instanceof Error||r((l||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var f=s?s():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},l.resetWarningCache=function(){i={}},e.exports=l},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),l=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),s=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l))return new h("Invalid "+o+" `"+i+"` of type `"+b(l)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<l.length;s++){var c=e(l,s,r,o,i+"["+s+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,o,i){var a=t[n];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new h("Invalid "+o+" `"+i+"` of type `"+((l=t[n]).constructor&&l.constructor.name?l.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var l;return null}))},node:m((function(e,t,n,r,o){return y(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var s=t[n],c=b(s);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in s)if(l(s,u)){var d=e(s,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],l=0;l<e.length;l++)if(p(a,e[l]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+s+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(n)+" at index "+t+"."),c}return m((function(t,n,r,o,i){for(var s=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,o,i,a);if(null==u)return null;u.data&&l(u.data,"expectedType")&&s.push(u.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(s.length>0?", expected one of type ["+s.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,o,i){var l=t[n],s=b(l);if("object"!==s)return new h("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return v(r,o,i,c,w(u));var d=u(l,c,r,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,o,s){var c=t[n],u=b(c);if("object"!==u)return new h("Invalid "+o+" `"+s+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var p=e[f];if(l(e,f)&&"function"!=typeof p)return v(r,o,s,f,w(p));if(!p)return new h("Invalid "+o+" `"+s+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(c,f,r,o,s+"."+f,a);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},o=0;function i(i,l,s,c,u,f,p){if(c=c||d,f=f||s,p!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+s;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==l[s]?i?null===l[s]?new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(l,s,c,u,f)}var l=i.bind(null,!1);return l.isRequired=i.bind(null,!0),l}function g(e){return m((function(t,n,r,o,i,a){var l=t[n];return b(l)!==e?new h("Invalid "+o+" `"+i+"` of type `"+w(l)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!y(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,f.checkPropTypes=s,f.resetWarningCache=s.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case c:case u:case o:case a:case i:case f:return p;default:var g=p&&p.$$typeof;switch(g){case s:case d:case m:case h:case l:return g;default:return t}}case r:return t}}}var x=c,S=u,$=s,F=l,O=n,D=d,E=o,B=m,k=h,j=r,A=a,T=i,C=f,R=!1;function _(e){return w(e)===u}t.AsyncMode=x,t.ConcurrentMode=S,t.ContextConsumer=$,t.ContextProvider=F,t.Element=O,t.ForwardRef=D,t.Fragment=E,t.Lazy=B,t.Memo=k,t.Portal=j,t.Profiler=A,t.StrictMode=T,t.Suspense=C,t.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),_(e)||w(e)===c},t.isConcurrentMode=_,t.isContextConsumer=function(e){return w(e)===s},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===l||e.$$typeof===s||e.$$typeof===d||e.$$typeof===v||e.$$typeof===y||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var i=0;i<o;i++){var a=n[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,o=e.onChange,a=r(e,["children","device","onChange"]),l=(0,i.default)(a,n,o);return"function"==typeof t?t(l):l?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=r(n(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var l=r(n(/*! ./Context */"./src/Context.ts"));t.Context=l.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),l=a.default.oneOfType([a.default.string,a.default.number]),s={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:l,deviceHeight:l,width:l,deviceWidth:l,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:l,type:Object.keys(s)},u=o(c,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:l,maxHeight:l,minDeviceHeight:l,maxDeviceHeight:l,minWidth:l,maxWidth:l,minDeviceWidth:l,maxDeviceWidth:l,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:l,maxResolution:l},u),f=r(r({},s),d);t.default={all:f,types:s,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),l=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),s=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,s.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,l.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var s=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],l=r[1],s=d();return(0,o.useEffect)((function(){if(s){var e=n();return l(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),p=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(s),h=d();return(0,o.useEffect)((function(){h&&n&&n(p)}),[p]),(0,o.useEffect)((function(){return function(){s&&s.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var Y=W.exports=N(d),V=function(e,t){return V=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},V(e,t)};var q=function(){return q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},q.apply(this,arguments)};var U="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var J=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Z="object"==typeof U&&U&&U.Object===Object&&U,X="object"==typeof self&&self&&self.Object===Object&&self,Q=Z||X||Function("return this")(),G=Q,K=function(){return G.Date.now()},ee=/\s/;var te=function(e){for(var t=e.length;t--&&ee.test(e.charAt(t)););return t},ne=te,re=/^\s+/;var oe=function(e){return e?e.slice(0,ne(e)+1).replace(re,""):e},ie=Q.Symbol,ae=ie,le=Object.prototype,se=le.hasOwnProperty,ce=le.toString,ue=ae?ae.toStringTag:void 0;var de=function(e){var t=se.call(e,ue),n=e[ue];try{e[ue]=void 0;var r=!0}catch(e){}var o=ce.call(e);return r&&(t?e[ue]=n:delete e[ue]),o},fe=Object.prototype.toString;var pe=de,he=function(e){return fe.call(e)},me=ie?ie.toStringTag:void 0;var ge=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":me&&me in Object(e)?pe(e):he(e)},ve=function(e){return null!=e&&"object"==typeof e};var ye=oe,be=J,we=function(e){return"symbol"==typeof e||ve(e)&&"[object Symbol]"==ge(e)},xe=/^[-+]0x[0-9a-f]+$/i,Se=/^0b[01]+$/i,$e=/^0o[0-7]+$/i,Fe=parseInt;var Oe=J,De=K,Ee=function(e){if("number"==typeof e)return e;if(we(e))return NaN;if(be(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=be(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ye(e);var n=Se.test(e);return n||$e.test(e)?Fe(e.slice(2),n?2:8):xe.test(e)?NaN:+e},Be=Math.max,ke=Math.min;var je=function(e,t,n){var r,o,i,a,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=i}function m(){var e=De();if(h(e))return g(e);l=setTimeout(m,function(e){var n=t-(e-s);return d?ke(n,i-(e-c)):n}(e))}function g(e){return l=void 0,f&&r?p(e):(r=o=void 0,a)}function v(){var e=De(),n=h(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(m,t),u?p(e):a}(s);if(d)return clearTimeout(l),l=setTimeout(m,t),p(s)}return void 0===l&&(l=setTimeout(m,t)),a}return t=Ee(t)||0,Oe(n)&&(u=!!n.leading,i=(d="maxWait"in n)?Be(Ee(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},v.flush=function(){return void 0===l?a:g(De())},v},Ae=je,Te=J;var Ce=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Te(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Ae(e,t,{leading:r,maxWait:t,trailing:o})},Re=function(e,t,n,r){switch(t){case"debounce":return je(e,n,r);case"throttle":return Ce(e,n,r);default:return e}},_e=function(e){return"function"==typeof e},Me=function(){return"undefined"==typeof window},Pe=function(e){return e instanceof Element||e instanceof HTMLDocument},He=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&_e(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Me()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Me())return null;if(t)return document.querySelector(t);if(r&&Pe(r))return r;if(n.targetRef&&Pe(n.targetRef.current))return n.targetRef.current;var o=A(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var s=He(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!Me()&&s({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return _e(t)?"renderProp":_e(r)?"childFunction":h(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,l=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=m(),n.observableElement=null,Me()||(n.resizeHandler=Re(n.createResizeHandler,o,a,l),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}V(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Me()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,o=t.nodeType,i=void 0===o?"div":o,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=r)(l);case"child":if((e=r).type&&"string"==typeof e.type){var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(l,["targetRef"]);return g(e,s)}return g(e,l);case"childArray":return(e=r).map((function(e){return!!e&&g(e,l)}));default:return u.createElement(i,null)}}}(v);var Le=Me()?y:b;function Ie(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,l=e.handleWidth,s=void 0===l||l,c=e.handleHeight,u=void 0===c||c,d=e.targetRef,h=e.observerOptions,m=e.onResize,g=f(n),v=f(null),y=null!=d?d:v,b=f(),w=p({width:void 0,height:void 0}),x=w[0],S=w[1];return Le((function(){if(!Me()){var e=He(m,S,s,u);b.current=Re((function(t){(s||u)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!Me()&&e({width:r,height:o}),g.current=!1}))}),r,i,a);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,h),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,a,s,u,m,h,y.current]),q({ref:y},x)}const ze={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Ne={D1:{fontFamily:ze.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ze.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ze.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ze.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ze.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ze.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ze.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ze.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ze.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ze.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ze.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ze.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ze.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ze.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},We={D1:{fontFamily:ze.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:ze.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:ze.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ze.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ze.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ze.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:ze.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ze.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ze.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:ze.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:ze.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:ze.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:ze.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ze.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ye={D1:{fontFamily:ze.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:ze.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:ze.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ze.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ze.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:ze.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:ze.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:ze.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:ze.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:ze.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:ze.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:ze.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:ze.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:ze.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var Ve=Array.isArray,qe="object"==typeof I&&I&&I.Object===Object&&I,Ue=qe,Je="object"==typeof self&&self&&self.Object===Object&&self,Ze=Ue||Je||Function("return this")(),Xe=Ze.Symbol,Qe=Xe,Ge=Object.prototype,Ke=Ge.hasOwnProperty,et=Ge.toString,tt=Qe?Qe.toStringTag:void 0;var nt=function(e){var t=Ke.call(e,tt),n=e[tt];try{e[tt]=void 0;var r=!0}catch(e){}var o=et.call(e);return r&&(t?e[tt]=n:delete e[tt]),o},rt=Object.prototype.toString;var ot=nt,it=function(e){return rt.call(e)},at=Xe?Xe.toStringTag:void 0;var lt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":at&&at in Object(e)?ot(e):it(e)};var st=function(e){return null!=e&&"object"==typeof e},ct=lt,ut=st;var dt=function(e){return"symbol"==typeof e||ut(e)&&"[object Symbol]"==ct(e)},ft=Ve,pt=dt,ht=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,mt=/^\w*$/;var gt=function(e,t){if(ft(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!pt(e))||(mt.test(e)||!ht.test(e)||null!=t&&e in Object(t))};var vt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},yt=lt,bt=vt;var wt,xt=function(e){if(!bt(e))return!1;var t=yt(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},St=Ze["__core-js_shared__"],$t=(wt=/[^.]+$/.exec(St&&St.keys&&St.keys.IE_PROTO||""))?"Symbol(src)_1."+wt:"";var Ft=function(e){return!!$t&&$t in e},Ot=Function.prototype.toString;var Dt=function(e){if(null!=e){try{return Ot.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Et=xt,Bt=Ft,kt=vt,jt=Dt,At=/^\[object .+?Constructor\]$/,Tt=Function.prototype,Ct=Object.prototype,Rt=Tt.toString,_t=Ct.hasOwnProperty,Mt=RegExp("^"+Rt.call(_t).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Pt=function(e){return!(!kt(e)||Bt(e))&&(Et(e)?Mt:At).test(jt(e))},Ht=function(e,t){return null==e?void 0:e[t]};var Lt=function(e,t){var n=Ht(e,t);return Pt(n)?n:void 0},It=Lt(Object,"create"),zt=It;var Nt=function(){this.__data__=zt?zt(null):{},this.size=0};var Wt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yt=It,Vt=Object.prototype.hasOwnProperty;var qt=function(e){var t=this.__data__;if(Yt){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Vt.call(t,e)?t[e]:void 0},Ut=It,Jt=Object.prototype.hasOwnProperty;var Zt=It;var Xt=Nt,Qt=Wt,Gt=qt,Kt=function(e){var t=this.__data__;return Ut?void 0!==t[e]:Jt.call(t,e)},en=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Zt&&void 0===t?"__lodash_hash_undefined__":t,this};function tn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tn.prototype.clear=Xt,tn.prototype.delete=Qt,tn.prototype.get=Gt,tn.prototype.has=Kt,tn.prototype.set=en;var nn=tn;var rn=function(){this.__data__=[],this.size=0};var on=function(e,t){return e===t||e!=e&&t!=t},an=on;var ln=function(e,t){for(var n=e.length;n--;)if(an(e[n][0],t))return n;return-1},sn=ln,cn=Array.prototype.splice;var un=function(e){var t=this.__data__,n=sn(t,e);return!(n<0)&&(n==t.length-1?t.pop():cn.call(t,n,1),--this.size,!0)},dn=ln;var fn=function(e){var t=this.__data__,n=dn(t,e);return n<0?void 0:t[n][1]},pn=ln;var hn=ln;var mn=function(e,t){var n=this.__data__,r=hn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},gn=rn,vn=un,yn=fn,bn=function(e){return pn(this.__data__,e)>-1},wn=mn;function xn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}xn.prototype.clear=gn,xn.prototype.delete=vn,xn.prototype.get=yn,xn.prototype.has=bn,xn.prototype.set=wn;var Sn=xn,$n=Lt(Ze,"Map"),Fn=nn,On=Sn,Dn=$n;var En=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Bn=function(e,t){var n=e.__data__;return En(t)?n["string"==typeof t?"string":"hash"]:n.map},kn=Bn;var jn=Bn;var An=Bn;var Tn=Bn;var Cn=function(e,t){var n=Tn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Rn=function(){this.size=0,this.__data__={hash:new Fn,map:new(Dn||On),string:new Fn}},_n=function(e){var t=kn(this,e).delete(e);return this.size-=t?1:0,t},Mn=function(e){return jn(this,e).get(e)},Pn=function(e){return An(this,e).has(e)},Hn=Cn;function Ln(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ln.prototype.clear=Rn,Ln.prototype.delete=_n,Ln.prototype.get=Mn,Ln.prototype.has=Pn,Ln.prototype.set=Hn;var In=Ln,zn=In;function Nn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Nn.Cache||zn),n}Nn.Cache=zn;var Wn=Nn;var Yn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vn=/\\(\\)?/g,qn=function(e){var t=Wn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Yn,(function(e,n,r,o){t.push(r?o.replace(Vn,"$1"):n||e)})),t}));var Un=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Jn=Un,Zn=Ve,Xn=dt,Qn=Xe?Xe.prototype:void 0,Gn=Qn?Qn.toString:void 0;var Kn=function e(t){if("string"==typeof t)return t;if(Zn(t))return Jn(t,e)+"";if(Xn(t))return Gn?Gn.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},er=Kn;var tr=Ve,nr=gt,rr=qn,or=function(e){return null==e?"":er(e)};var ir=function(e,t){return tr(e)?e:nr(e,t)?[e]:rr(or(e))},ar=dt;var lr=function(e){if("string"==typeof e||ar(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},sr=ir,cr=lr;var ur=function(e,t){for(var n=0,r=(t=sr(t,e)).length;null!=e&&n<r;)e=e[cr(t[n++])];return n&&n==r?e:void 0},dr=ur;var fr=function(e,t,n){var r=null==e?void 0:dr(e,t);return void 0===r?n:r},pr=z(fr);const hr=(e,t,n)=>t?pr(n,t)||pr(e,t):n||e,mr=(e,t)=>{const n=t||e.defaultValue;return pr(e.collections,n)};var gr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(gr||(gr={}));const vr={collections:{base:Ne,oneservice:Ye,plusJakartaSans:We},defaultValue:"base"},yr=e=>t=>{const n=t.theme,r=mr(vr,n[gr.textStyleScheme]);return n.options&&n.options.textStyle?hr(r,e,n.options.textStyle):hr(r,e)},br={D1:{fontFamily:yr("D1.fontFamily"),fontSize:yr("D1.fontSize"),fontWeight:yr("D1.fontWeight"),lineHeight:yr("D1.lineHeight"),letterSpacing:yr("D1.letterSpacing")},D2:{fontFamily:yr("D2.fontFamily"),fontSize:yr("D2.fontSize"),fontWeight:yr("D2.fontWeight"),lineHeight:yr("D2.lineHeight"),letterSpacing:yr("D2.letterSpacing")},D3:{fontFamily:yr("D3.fontFamily"),fontSize:yr("D3.fontSize"),fontWeight:yr("D3.fontWeight"),lineHeight:yr("D3.lineHeight"),letterSpacing:yr("D3.letterSpacing")},D4:{fontFamily:yr("D4.fontFamily"),fontSize:yr("D4.fontSize"),fontWeight:yr("D4.fontWeight"),lineHeight:yr("D4.lineHeight"),letterSpacing:yr("D4.letterSpacing")},DBody:{fontFamily:yr("DBody.fontFamily"),fontSize:yr("DBody.fontSize"),fontWeight:yr("DBody.fontWeight"),lineHeight:yr("DBody.lineHeight"),letterSpacing:yr("DBody.letterSpacing")},H1:{fontFamily:yr("H1.fontFamily"),fontSize:yr("H1.fontSize"),fontWeight:yr("H1.fontWeight"),lineHeight:yr("H1.lineHeight"),letterSpacing:yr("H1.letterSpacing")},H2:{fontFamily:yr("H2.fontFamily"),fontSize:yr("H2.fontSize"),fontWeight:yr("H2.fontWeight"),lineHeight:yr("H2.lineHeight"),letterSpacing:yr("H2.letterSpacing")},H3:{fontFamily:yr("H3.fontFamily"),fontSize:yr("H3.fontSize"),fontWeight:yr("H3.fontWeight"),lineHeight:yr("H3.lineHeight"),letterSpacing:yr("H3.letterSpacing")},H4:{fontFamily:yr("H4.fontFamily"),fontSize:yr("H4.fontSize"),fontWeight:yr("H4.fontWeight"),lineHeight:yr("H4.lineHeight"),letterSpacing:yr("H4.letterSpacing")},H5:{fontFamily:yr("H5.fontFamily"),fontSize:yr("H5.fontSize"),fontWeight:yr("H5.fontWeight"),lineHeight:yr("H5.lineHeight"),letterSpacing:yr("H5.letterSpacing")},H6:{fontFamily:yr("H6.fontFamily"),fontSize:yr("H6.fontSize"),fontWeight:yr("H6.fontWeight"),lineHeight:yr("H6.lineHeight"),letterSpacing:yr("H6.letterSpacing")},Body:{fontFamily:yr("Body.fontFamily"),fontSize:yr("Body.fontSize"),fontWeight:yr("Body.fontWeight"),lineHeight:yr("Body.lineHeight"),letterSpacing:yr("Body.letterSpacing")},BodySmall:{fontFamily:yr("BodySmall.fontFamily"),fontSize:yr("BodySmall.fontSize"),fontWeight:yr("BodySmall.fontWeight"),lineHeight:yr("BodySmall.lineHeight"),letterSpacing:yr("BodySmall.letterSpacing")},XSmall:{fontFamily:yr("XSmall.fontFamily"),fontSize:yr("XSmall.fontSize"),fontWeight:yr("XSmall.fontWeight"),lineHeight:yr("XSmall.lineHeight"),letterSpacing:yr("XSmall.letterSpacing")}},wr=[ze.OpenSans,ze.PlusJakartaSans],xr=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Sr=(e,t)=>n=>{var r;const o=br[e].fontFamily(n),i=br[e].fontWeight(n),a=wr.find((e=>Object.values(e).includes(o)));return a?D`
                font-family: ${xr(a,t)||xr(a,i)||o};
                font-weight: normal !important;
            `:D`
            font-family: ${o};
            font-weight: ${null!==(r=$r(t)||i)&&void 0!==r?r:"normal"};
        `},$r=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Fr=e=>{if(e>0)return D`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Or=(e,t,n=!1)=>r=>{const o=br[e],i=o.fontSize(r);return D`
            ${Sr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${D`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Dr=(e=!1,t=!1,n=void 0)=>t?D`
            display: block;
            ${Fr(n)}
        `:e?D`
            display: inline;
        `:D`
            display: block;
            ${Fr(n)}
        `;function Er(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const Br={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},kr=e=>t=>{const n=t.theme,r=mr(Br,n[gr.colorScheme]);return n.options&&n.options.color?hr(r,e,n.options.color):hr(r,e)},jr={Brand:{1:kr("Brand.1"),2:kr("Brand.2"),3:kr("Brand.3"),4:kr("Brand.4"),5:kr("Brand.5"),6:kr("Brand.6")},Primary:kr("Primary"),PrimaryDark:kr("PrimaryDark"),Secondary:kr("Secondary"),Accent:{Light:{1:kr("Accent.Light.1"),2:kr("Accent.Light.2"),3:kr("Accent.Light.3"),4:kr("Accent.Light.4"),5:kr("Accent.Light.5"),6:kr("Accent.Light.6")},Dark:{1:kr("Accent.Dark.1"),2:kr("Accent.Dark.2"),3:kr("Accent.Dark.3")}},Neutral:{1:kr("Neutral.1"),2:kr("Neutral.2"),3:kr("Neutral.3"),4:kr("Neutral.4"),5:kr("Neutral.5"),6:kr("Neutral.6"),7:kr("Neutral.7"),8:kr("Neutral.8")},Validation:{Green:{Text:kr("Validation.Green.Text"),Icon:kr("Validation.Green.Icon"),Border:kr("Validation.Green.Border"),Background:kr("Validation.Green.Background")},Orange:{Text:kr("Validation.Orange.Text"),Icon:kr("Validation.Orange.Icon"),Border:kr("Validation.Orange.Border"),Background:kr("Validation.Orange.Background"),Badge:kr("Validation.Orange.Badge")},Red:{Text:kr("Validation.Red.Text"),Icon:kr("Validation.Red.Icon"),Border:kr("Validation.Red.Border"),Background:kr("Validation.Red.Background")},Blue:{Text:kr("Validation.Blue.Text"),Icon:kr("Validation.Blue.Icon"),Border:kr("Validation.Blue.Border"),Background:kr("Validation.Blue.Background")}},Shadow:{Accent:kr("Shadow.Accent"),Red:kr("Shadow.Red"),Elevation:kr("Shadow.Elevation")}};var Ar;!function(e){e.D1=O.h1`
        ${e=>D`
                ${Or("D1",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=O.h1`
        ${e=>D`
                ${Or("D2",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=O.h1`
        ${e=>D`
                ${Or("D3",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=O.h1`
        ${e=>D`
                ${Or("D4",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=O.h1`
        ${e=>D`
                ${Or("DBody",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=O.h1`
        ${e=>D`
                ${Or("H1",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=O.h2`
        ${e=>D`
                ${Or("H2",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=O.h3`
        ${e=>D`
                ${Or("H3",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=O.h4`
        ${e=>D`
                ${Or("H4",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=O.h5`
        ${e=>D`
                ${Or("H5",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=O.h6`
        ${e=>D`
                ${Or("H6",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=O.p`
        ${e=>D`
                ${Or("Body",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=O.p`
        ${e=>D`
                ${Or("BodySmall",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=O.span`
        ${e=>D`
                ${Or("XSmall",e.weight,e.paragraph)}
                color: ${jr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Rr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Rr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ar||(Ar={}));const Tr=O.a`
    ${e=>D`
            ${Or(e.textStyle,e.weight)}
            color: ${jr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${jr.Secondary};

                svg {
                    color: ${jr.Secondary};
                }
            }
        `}
`,Cr=O(k)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Rr=n=>{var{external:r=!1,children:o}=n,i=Er(n,["external","children"]);return e(Tr,Object.assign({},i,{children:[o,r&&t(Cr,{})]}))};var _r;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(_r||(_r={}));const Mr={[gr.colorScheme]:"base",[gr.textStyleScheme]:"base",[gr.designTokenScheme]:"base",[gr.resourceScheme]:"base"};var Pr;gr.colorScheme,gr.textStyleScheme,gr.designTokenScheme,gr.resourceScheme,gr.colorScheme,gr.textStyleScheme,gr.designTokenScheme,gr.resourceScheme,gr.colorScheme,gr.textStyleScheme,gr.designTokenScheme,gr.resourceScheme,gr.colorScheme,gr.textStyleScheme,gr.designTokenScheme,gr.resourceScheme,gr.colorScheme,gr.textStyleScheme,gr.designTokenScheme,gr.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Pr||(Pr={}));const Hr=D`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Lr=O.div`
    ${e=>Or("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${e=>e.$selected?jr.Primary:jr.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Hr}
`,Ir=O.div`
    color: ${jr.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Hr}

    ${e=>"next-line"===e.$labelDisplayType?D`
                    ${Or("BodySmall","semibold")}
                `:D`
                    ${Or("Body","regular")}
                `}
`,zr=O.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return D`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return D`
                    ${Lr} {
                        display: inline;
                    }

                    ${Ir} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Nr=O.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Wr=O.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Yr=({displayType:r="inline",label:o,maxLines:i=2,selected:a,sublabel:l,truncationType:s="middle",variant:c})=>{const u=E()||Mr,d=br.Body.fontSize({theme:u}),f=br.Body.fontFamily({theme:u}),{ref:p,width:h}=Ie(),m=w((e=>{if("inline"!==r)return!1;return Pr.getTextWidth(e,`${d}rem '${f}'`)>h*i-50}),[h,r,d,f,i]),g=x((()=>m(o)),[m,o]),v=x((()=>l&&m(l)),[m,l]),y=g||v?"next-line":r,b=r=>e(n,{children:[t(Nr,Object.assign({$maxLines:i,"aria-hidden":!0},{children:r})),t(Wr,Object.assign({$maxLines:i,"aria-hidden":!0},{children:r}))]});return e(zr,Object.assign({ref:p,$labelDisplayType:y},{children:[t(Lr,Object.assign({"aria-label":o,$maxLines:i,$selected:a,$truncateType:s,$variant:c},{children:"middle"===s&&g?b(o):o})),l&&t(Ir,Object.assign({"aria-label":l,$maxLines:i,$truncateType:s,$labelDisplayType:r},{children:"middle"===s&&v?b(l):l}))]}))};var Vr=Sn;var qr=Sn,Ur=$n,Jr=In;var Zr=Sn,Xr=function(){this.__data__=new Vr,this.size=0},Qr=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Gr=function(e){return this.__data__.get(e)},Kr=function(e){return this.__data__.has(e)},eo=function(e,t){var n=this.__data__;if(n instanceof qr){var r=n.__data__;if(!Ur||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Jr(r)}return n.set(e,t),this.size=n.size,this};function to(e){var t=this.__data__=new Zr(e);this.size=t.size}to.prototype.clear=Xr,to.prototype.delete=Qr,to.prototype.get=Gr,to.prototype.has=Kr,to.prototype.set=eo;var no=to;var ro=In,oo=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},io=function(e){return this.__data__.has(e)};function ao(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new ro;++t<n;)this.add(e[t])}ao.prototype.add=ao.prototype.push=oo,ao.prototype.has=io;var lo=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1};var so=ao,co=lo,uo=function(e,t){return e.has(t)};var fo=function(e,t,n,r,o,i){var a=1&n,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,p=2&n?new so:void 0;for(i.set(e,t),i.set(t,e);++d<l;){var h=e[d],m=t[d];if(r)var g=a?r(m,h,d,t,e,i):r(h,m,d,e,t,i);if(void 0!==g){if(g)continue;f=!1;break}if(p){if(!co(t,(function(e,t){if(!uo(p,t)&&(h===e||o(h,e,n,r,i)))return p.push(t)}))){f=!1;break}}else if(h!==m&&!o(h,m,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var po=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n};var ho=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},mo=Ze.Uint8Array,go=on,vo=fo,yo=po,bo=ho,wo=Xe?Xe.prototype:void 0,xo=wo?wo.valueOf:void 0;var So=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new mo(e),new mo(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return go(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=yo;case"[object Set]":var s=1&r;if(l||(l=bo),e.size!=t.size&&!s)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=vo(l(e),l(t),r,o,i,a);return a.delete(e),u;case"[object Symbol]":if(xo)return xo.call(e)==xo.call(t)}return!1};var $o=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},Fo=$o,Oo=Ve;var Do=function(e,t,n){var r=t(e);return Oo(e)?r:Fo(r,n(e))};var Eo=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i};var Bo=Eo,ko=function(){return[]},jo=Object.prototype.propertyIsEnumerable,Ao=Object.getOwnPropertySymbols,To=Ao?function(e){return null==e?[]:(e=Object(e),Bo(Ao(e),(function(t){return jo.call(e,t)})))}:ko;var Co=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Ro=lt,_o=st;var Mo=function(e){return _o(e)&&"[object Arguments]"==Ro(e)},Po=st,Ho=Object.prototype,Lo=Ho.hasOwnProperty,Io=Ho.propertyIsEnumerable,zo=Mo(function(){return arguments}())?Mo:function(e){return Po(e)&&Lo.call(e,"callee")&&!Io.call(e,"callee")},No={exports:{}};var Wo=function(){return!1};!function(e,t){var n=Ze,r=Wo,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,l=(a?a.isBuffer:void 0)||r;e.exports=l}(No,No.exports);var Yo=No.exports,Vo=/^(?:0|[1-9]\d*)$/;var qo=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Vo.test(e))&&e>-1&&e%1==0&&e<t};var Uo=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Jo=lt,Zo=Uo,Xo=st,Qo={};Qo["[object Float32Array]"]=Qo["[object Float64Array]"]=Qo["[object Int8Array]"]=Qo["[object Int16Array]"]=Qo["[object Int32Array]"]=Qo["[object Uint8Array]"]=Qo["[object Uint8ClampedArray]"]=Qo["[object Uint16Array]"]=Qo["[object Uint32Array]"]=!0,Qo["[object Arguments]"]=Qo["[object Array]"]=Qo["[object ArrayBuffer]"]=Qo["[object Boolean]"]=Qo["[object DataView]"]=Qo["[object Date]"]=Qo["[object Error]"]=Qo["[object Function]"]=Qo["[object Map]"]=Qo["[object Number]"]=Qo["[object Object]"]=Qo["[object RegExp]"]=Qo["[object Set]"]=Qo["[object String]"]=Qo["[object WeakMap]"]=!1;var Go=function(e){return Xo(e)&&Zo(e.length)&&!!Qo[Jo(e)]};var Ko=function(e){return function(t){return e(t)}},ei={exports:{}};!function(e,t){var n=qe,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(ei,ei.exports);var ti=ei.exports,ni=Go,ri=Ko,oi=ti&&ti.isTypedArray,ii=oi?ri(oi):ni,ai=Co,li=zo,si=Ve,ci=Yo,ui=qo,di=ii,fi=Object.prototype.hasOwnProperty;var pi=function(e,t){var n=si(e),r=!n&&li(e),o=!n&&!r&&ci(e),i=!n&&!r&&!o&&di(e),a=n||r||o||i,l=a?ai(e.length,String):[],s=l.length;for(var c in e)!t&&!fi.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ui(c,s))||l.push(c);return l},hi=Object.prototype;var mi=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||hi)};var gi=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),vi=mi,yi=gi,bi=Object.prototype.hasOwnProperty;var wi=xt,xi=Uo;var Si=function(e){return null!=e&&xi(e.length)&&!wi(e)},$i=pi,Fi=function(e){if(!vi(e))return yi(e);var t=[];for(var n in Object(e))bi.call(e,n)&&"constructor"!=n&&t.push(n);return t},Oi=Si;var Di=function(e){return Oi(e)?$i(e):Fi(e)},Ei=Do,Bi=To,ki=Di;var ji=function(e){return Ei(e,ki,Bi)},Ai=Object.prototype.hasOwnProperty;var Ti=function(e,t,n,r,o,i){var a=1&n,l=ji(e),s=l.length;if(s!=ji(t).length&&!a)return!1;for(var c=s;c--;){var u=l[c];if(!(a?u in t:Ai.call(t,u)))return!1}var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var p=!0;i.set(e,t),i.set(t,e);for(var h=a;++c<s;){var m=e[u=l[c]],g=t[u];if(r)var v=a?r(g,m,u,t,e,i):r(m,g,u,e,t,i);if(!(void 0===v?m===g||o(m,g,n,r,i):v)){p=!1;break}h||(h="constructor"==u)}if(p&&!h){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(p=!1)}return i.delete(e),i.delete(t),p},Ci=Lt(Ze,"DataView"),Ri=$n,_i=Lt(Ze,"Promise"),Mi=Lt(Ze,"Set"),Pi=Lt(Ze,"WeakMap"),Hi=lt,Li=Dt,Ii="[object Map]",zi="[object Promise]",Ni="[object Set]",Wi="[object WeakMap]",Yi="[object DataView]",Vi=Li(Ci),qi=Li(Ri),Ui=Li(_i),Ji=Li(Mi),Zi=Li(Pi),Xi=Hi;(Ci&&Xi(new Ci(new ArrayBuffer(1)))!=Yi||Ri&&Xi(new Ri)!=Ii||_i&&Xi(_i.resolve())!=zi||Mi&&Xi(new Mi)!=Ni||Pi&&Xi(new Pi)!=Wi)&&(Xi=function(e){var t=Hi(e),n="[object Object]"==t?e.constructor:void 0,r=n?Li(n):"";if(r)switch(r){case Vi:return Yi;case qi:return Ii;case Ui:return zi;case Ji:return Ni;case Zi:return Wi}return t});var Qi=no,Gi=fo,Ki=So,ea=Ti,ta=Xi,na=Ve,ra=Yo,oa=ii,ia="[object Arguments]",aa="[object Array]",la="[object Object]",sa=Object.prototype.hasOwnProperty;var ca=function(e,t,n,r,o,i){var a=na(e),l=na(t),s=a?aa:ta(e),c=l?aa:ta(t),u=(s=s==ia?la:s)==la,d=(c=c==ia?la:c)==la,f=s==c;if(f&&ra(e)){if(!ra(t))return!1;a=!0,u=!1}if(f&&!u)return i||(i=new Qi),a||oa(e)?Gi(e,t,n,r,o,i):Ki(e,t,s,n,r,o,i);if(!(1&n)){var p=u&&sa.call(e,"__wrapped__"),h=d&&sa.call(t,"__wrapped__");if(p||h){var m=p?e.value():e,g=h?t.value():t;return i||(i=new Qi),o(m,g,n,r,i)}}return!!f&&(i||(i=new Qi),ea(e,t,n,r,o,i))},ua=st;var da=function e(t,n,r,o,i){return t===n||(null==t||null==n||!ua(t)&&!ua(n)?t!=t&&n!=n:ca(t,n,r,o,e,i))},fa=no,pa=da;var ha=function(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=Object(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){var s=(l=n[o])[0],c=e[s],u=l[1];if(a&&l[2]){if(void 0===c&&!(s in e))return!1}else{var d=new fa;if(r)var f=r(c,u,s,e,t,d);if(!(void 0===f?pa(u,c,3,r,d):f))return!1}}return!0},ma=vt;var ga=function(e){return e==e&&!ma(e)},va=ga,ya=Di;var ba=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},wa=ha,xa=function(e){for(var t=ya(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,va(o)]}return t},Sa=ba;var $a=ir,Fa=zo,Oa=Ve,Da=qo,Ea=Uo,Ba=lr;var ka=function(e,t,n){for(var r=-1,o=(t=$a(t,e)).length,i=!1;++r<o;){var a=Ba(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:!!(o=null==e?0:e.length)&&Ea(o)&&Da(a,o)&&(Oa(e)||Fa(e))},ja=function(e,t){return null!=e&&t in Object(e)},Aa=ka;var Ta=da,Ca=fr,Ra=function(e,t){return null!=e&&Aa(e,t,ja)},_a=gt,Ma=ga,Pa=ba,Ha=lr;var La=ur;var Ia=function(e){return function(t){return null==t?void 0:t[e]}},za=function(e){return function(t){return La(t,e)}},Na=gt,Wa=lr;var Ya=function(e){var t=xa(e);return 1==t.length&&t[0][2]?Sa(t[0][0],t[0][1]):function(n){return n===e||wa(n,e,t)}},Va=function(e,t){return _a(e)&&Ma(t)?Pa(Ha(e),t):function(n){var r=Ca(n,e);return void 0===r&&r===t?Ra(n,e):Ta(t,r,3)}},qa=function(e){return e},Ua=Ve,Ja=function(e){return Na(e)?Ia(Wa(e)):za(e)};var Za=function(e){return"function"==typeof e?e:null==e?qa:"object"==typeof e?Ua(e)?Va(e[0],e[1]):Ya(e):Ja(e)},Xa=Za,Qa=Si,Ga=Di;var Ka=function(e){return function(t,n,r){var o=Object(t);if(!Qa(t)){var i=Xa(n);t=Ga(t),n=function(e){return i(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[i?t[a]:a]:void 0}};var el=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1},tl=/\s/;var nl=function(e){for(var t=e.length;t--&&tl.test(e.charAt(t)););return t},rl=nl,ol=/^\s+/;var il=function(e){return e?e.slice(0,rl(e)+1).replace(ol,""):e},al=vt,ll=dt,sl=/^[-+]0x[0-9a-f]+$/i,cl=/^0b[01]+$/i,ul=/^0o[0-7]+$/i,dl=parseInt;var fl=function(e){if("number"==typeof e)return e;if(ll(e))return NaN;if(al(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=al(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=il(e);var n=cl.test(e);return n||ul.test(e)?dl(e.slice(2),n?2:8):sl.test(e)?NaN:+e},pl=1/0;var hl=function(e){return e?(e=fl(e))===pl||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var ml=el,gl=Za,vl=function(e){var t=hl(e),n=t%1;return t==t?n?t-n:t:0},yl=Math.max;var bl=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:vl(n);return o<0&&(o=yl(r+o,0)),ml(e,gl(t),o)},wl=z(Ka(bl)),xl=da;var Sl=z((function(e,t){return xl(e,t)}));const $l={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Fl=e=>Object.keys($l).reduce(((t,n)=>{const r=$l[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ol=Fl("max-width"),Dl=(Fl("min-width"),O.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),El=B`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Bl=O.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||jr.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${El} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,kl=O(Bl)`
    animation-delay: -0.45s;
`,jl=O(Bl)`
    animation-delay: -0.3s;
`,Al=O(Bl)`
    animation-delay: -0.15s;
`,Tl={collections:{base:{InputBoxShadow:D`
        inset 0 0 4px 0px ${jr.Shadow.Accent}
    `,InputErrorBoxShadow:D`
        inset 0 0 4px 0px ${jr.Shadow.Red}
    `,ElevationBoxShadow:D`
      0px 2px 8px ${jr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:D`
        inset 0 0 3px 0px ${jr.Shadow.Accent}
    `,InputErrorBoxShadow:D`
        inset 0 0 3px 0px ${jr.Shadow.Red}
    `,ElevationBoxShadow:D`
      0px 2px 8px ${jr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Cl=e=>t=>{var n;const r=t.theme,o=mr(Tl,r[gr.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?hr(o,e,r.options.designToken):hr(o,e)},Rl={InputBoxShadow:Cl("InputBoxShadow"),InputErrorBoxShadow:Cl("InputErrorBoxShadow"),ElevationBoxShadow:Cl("ElevationBoxShadow"),Table:{Header:Cl("Table.Header"),Cell:{Primary:Cl("Table.Cell.Primary"),Secondary:Cl("Table.Cell.Secondary"),Selected:Cl("Table.Cell.Selected"),Hover:Cl("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Cl("Button.Danger.BackgroundColor"),Hover:Cl("Button.Danger.Hover"),Primary:Cl("Button.Danger.Primary"),Border:Cl("Button.Danger.Border")}}},_l=O.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return D`
                    background-color: ${jr.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Rl.Button.Danger.Border:jr.Primary};

                    color: ${e.$buttonIsDanger?Rl.Button.Danger.Primary:jr.Primary};
                `;case"light":return D`
                    background-color: ${jr.Neutral[8]};
                    border: 1px solid ${jr.Neutral[5]};

                    color: ${e.$buttonIsDanger?Rl.Button.Danger.Primary:jr.Primary};
                `;case"disabled":return D`
                    background-color: ${jr.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${jr.Neutral[3]};
                `;case"link":return D`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Rl.Button.Danger.Primary:jr.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Rl.Button.Danger.Hover:jr.Secondary};
                    }
                `;default:return D`
                    background-color: ${e.$buttonIsDanger?Rl.Button.Danger.BackgroundColor:jr.Primary};
                    border: 1px solid transparent;

                    ${Ol.mobileL} {
                        width: 100%;
                    }

                    color: ${jr.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?D`
                    height: 2.5rem;
                    ${Or("H5","semibold")}

                    ${Ol.mobileS} {
                        height: auto;
                    }
                `:D`
                    height: 3rem;
                    ${Or("H4","semibold")}

                    ${Ol.mobileS} {
                        height: auto;
                    }
                `}
`,Ml=O((({color:n,className:r,size:o=18})=>e(Dl,Object.assign({className:r,$size:o,$color:n},{children:[t(Bl,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(kl,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(jl,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(Al,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Rl.Button.Danger.Primary:jr.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=jr.Neutral[3](e);break;default:t=jr.Neutral[8](e)}return D`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Pl={exports:{}};Pl.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],u=d[c],f=u&&u[0],p=u&&u[1];a[s]=p?{regex:f,parser:p}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,s=o.parser,c=e.slice(r),u=i.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],u=s||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!s&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,p=new Date,h=a||(o||i?1:p.getDate()),m=o||p.getFullYear(),g=0;o&&!i||(g=i>0?i-1:p.getMonth());var v=l||0,y=s||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,h,v,y,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,h,v,y,b,w)):new Date(m,g,h,v,y,b,w)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var p=l.length,h=1;h<=p;h+=1){a[1]=l[h-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===p&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Hl,Ll,Il=z(Pl.exports),zl={exports:{}},Nl=z(zl.exports=(Hl={year:0,month:1,day:2,hour:3,minute:4,second:5},Ll={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Ll[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Ll[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=Hl[s];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,p=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",h=+e;return(n.utc(p).valueOf()-(h-=h%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(a))/1e3/60),s=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(o-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Wl={exports:{}};Wl.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var x="$isDayjsObject",S=function(e){return e instanceof D||!(!e||!e[x])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;w[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},F=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},O=y;O.l=$,O.i=S,O.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return O},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return F(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<F(e)},v.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!O.u(t)||t,u=O.p(e),p=function(e,t){var o=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},h=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?p(1,0):p(31,11);case c:return r?p(1,g):p(0,g+1);case s:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return p(r?v-w:v+(6-w),g);case l:case f:return h(y+"Hours",0);case a:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case o:return h(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,s=O.p(e),u="set"+(this.$u?"UTC":""),p=(n={},n[l]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],h=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var m=this.clone().set(f,1);m.$d[p](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[O.p(e)]()},v.add=function(r,u){var f,p=this;r=Number(r);var h=O.p(u),m=function(e){var t=F(p);return O.w(t.date(t.date()+Math.round(e*r)),p)};if(h===c)return this.set(c,this.$M+r);if(h===d)return this.set(d,this.$y+r);if(h===l)return m(1);if(h===s)return m(7);var g=(f={},f[i]=t,f[a]=n,f[o]=e,f)[h]||1,v=this.$d.getTime()+r*g;return O.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=O.z(this),i=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return O.s(i%12||12,e,"0")},h=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return O.s(t.$y,4,"0");case"M":return l+1;case"MM":return O.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return O.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return O.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return h(i,a,!0);case"A":return h(i,a,!1);case"m":return String(a);case"mm":return O.s(a,2,"0");case"s":return String(t.$s);case"ss":return O.s(t.$s,2,"0");case"SSS":return O.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,p){var h,m=this,g=O.p(f),v=F(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,w=function(){return O.m(m,v)};switch(g){case d:h=w()/12;break;case c:h=w();break;case u:h=w()/3;break;case s:h=(b-y)/6048e5;break;case l:h=(b-y)/864e5;break;case a:h=b/n;break;case i:h=b/t;break;case o:h=b/e;break;default:h=b}return p?h:O.a(h)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return w[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return O.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),E=D.prototype;return F.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,D,F),e.$i=!0),F},F.locale=$,F.isDayjs=S,F.unix=function(e){return F(1e3*e)},F.en=w[b],F.Ls=w,F.p={},F}();var Yl=z(Wl.exports),Vl={exports:{}};Vl.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],s=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var ql=z(Vl.exports),Ul={exports:{}};Ul.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Jl=z(Ul.exports),Zl={exports:{}};Zl.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Xl,Ql=z(Zl.exports);Yl.extend(ql),Yl.extend(Jl),Yl.extend(Ql),Yl.extend(Il),Yl.extend(Nl),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Yl(t).startOf("week");return Gl(n).map((e=>Kl(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Kl(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Yl(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Yl(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Yl(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?Yl(r):void 0,o?Yl(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Xl||(Xl={}));const Gl=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Kl=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},es=[1,3,5,7,8,10,12],ts=[4,6,9,11];var ns,rs,os;function is(e){const t=f(null);return b((()=>{t.current=e}),[e]),w(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":es.includes(i)?Math.min(o,31).toString():ts.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Yl(e,n);return Yl(t,n).diff(r,"minute")},e.toDayjs=e=>e?Yl(e):Yl(),e.addMinutesToTime=(e,t,n="HH:mm")=>Yl(e,n).add(t,"minutes").format(n)}(ns||(ns={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Yl(e).isBefore(r,"day"))||!(!o||!Yl(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Yl(e).isValid())return e}return""}}(rs||(rs={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(os||(os={}));const as=e=>{const t=(e=>{const t=f(e),n=f();return y((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},ls=d.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),ss=({children:e})=>{const[n,r]=p(-1);return t(ls.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:e}))},cs=D`
    border: 1px solid ${jr.Accent.Light[1]};
    box-shadow: ${Rl.InputBoxShadow};
`,us=D`
    border: 1px solid ${jr.Accent.Light[1]};
    box-shadow: none;
`,ds=D`
    border: 1px solid ${jr.Neutral[5]};
    box-shadow: none;
`,fs=D`
    border: 1px solid ${jr.Validation.Red.Border};
    box-shadow: ${Rl.InputErrorBoxShadow};
`,ps=O.div`
    border: 1px solid ${jr.Neutral[5]};
    border-radius: 4px;
    background: ${jr.Neutral[8]};

    :focus-within {
        ${cs}
    }
    ${e=>e.$focused&&cs}

    ${e=>e.$readOnly?D`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${us}
                }
                ${e.$focused&&us}
            `:e.$disabled?D`
                background: ${jr.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${ds}
                }
                ${e.$focused&&ds}
            `:e.$error?D`
                border: 1px solid ${jr.Validation.Red.Border};

                :focus-within {
                    ${fs}
                }
                ${e.$focused&&fs}
            `:void 0}
`,hs=O(ps)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,ms=O.input`
    ${e=>Or("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${jr.Neutral[1]};
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
        color: ${jr.Neutral[3]};
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
`,gs=O.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${jr.Primary};
    }
`,vs=O.div`
    overflow: hidden;
    border: 1px solid ${jr.Neutral[5]};
    border-radius: 4px;
    background: ${jr.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${Ol.mobileL} {
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
        background: ${jr.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,ys=O.div`
    background: transparent;
    padding: 0.5rem;
`,bs=O.ul`
    list-style-type: none;
`,ws=O.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${jr.Accent.Light[3]};

    ${e=>e.$active&&D`
            background: ${jr.Accent.Light[5]};
        `}
`,xs=O(M)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${jr.Primary};
`,Ss=O.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,$s=O(_)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${jr.Primary};
`,Fs=O(R)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${jr.Accent.Light[2]};
`,Os=O.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Ds=O(gs)`
    ${e=>Or("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${jr.Primary};
`,Es=O(Ds)`
    outline-offset: 0.25rem;
`,Bs=O(Ds)`
    padding: 0.5rem 1rem;
`,ks=O.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,js=O.div`
    ${e=>Or("small"===e.$variant?"BodySmall":"Body","regular")}
`,As=O(C)`
    ${e=>{const t="small"===e.$variant?1:1.125;return D`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${jr.Validation.Red.Icon};
`,Ts=O.button`
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

        ${({$highlight:e})=>e&&D`
                background-color: ${jr.Neutral[7]};
            `}
    }
`,Cs=d.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=Er(e,["children","focusHighlight","focusOutline","type"]);return t(Ts,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),Rs=e=>"small"===e?1:1.125,_s=e=>D`
        height: ${Rs(e)}rem;
        width: ${Rs(e)}rem;
    `,Ms=O.div`
    background: ${jr.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,Ps=O.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,Hs=O(ms)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,Ls=O(H)`
    color: ${jr.Neutral[3]};
    flex-shrink: 0;
    ${e=>_s(e.$variant)}
`,Is=O(Cs)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${jr.Neutral[3]};
    cursor: pointer;

    ${e=>D`
            svg {
                ${_s(e.$variant)}
            }
        `}
`,zs=S(((n,r)=>{var{value:o,variant:i,onClear:a}=n,l=Er(n,["value","variant","onClear"]);return e(Ms,{children:[e(Ps,{children:[t(Ls,{$variant:i,"aria-hidden":!0}),t(Hs,Object.assign({ref:r,value:o,$variant:i},l))]}),o&&t(Is,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:t(P,{"aria-hidden":!0})}))]})})),Ns=({listItems:n,multiSelect:r,selectedItems:o,disableItemFocus:i,itemsLoadState:a="success",itemTruncationType:l="end",itemMaxLines:s=2,labelDisplayType:c="inline",variant:u="default",listboxId:d,width:h,onSelectItem:m,onSelectAll:g,onDismiss:v,onRetry:b,valueExtractor:w,listExtractor:x,renderListItem:S,renderCustomCallToAction:F,enableSearch:O,hideNoResultsDisplay:D,searchPlaceholder:E="Search",searchFunction:B,onSearch:k})=>{const{focusedIndex:j,setFocusedIndex:A}=$(ls),[T,C]=p(""),[R,_]=p(n),M=as(a),P=(()=>{const[e,t]=p(!1);return y((()=>{t(!0)}),[]),e})(),H=f(),L=f(),I=f([]),z=f(),N=e=>x?x(e):e.toString(),W=is((()=>B(T))),Y=is((()=>n.filter((e=>{var t;const n=N(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),i=T.trim().toLowerCase();return r.includes(i)||o&&o.includes(i)})))),V=(e,t)=>{A(t),null==m||m(e,(e=>w?w(e):e)(e))},q=e=>{const t=e.target.value;C(t),null==k||k()},U=()=>{var e;C(""),null===(e=z.current)||void 0===e||e.focus(),null==k||k()},J=()=>{null==b||b()};((e,t,n="window",r)=>{const o=f();y((()=>{o.current=t}),[t]),y((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])})("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),j<R.length-1){const e=j+1;null===(t=I.current[e])||void 0===t||t.focus(),A(e)}break;case"ArrowUp":if(e.preventDefault(),j>0){const e=j-1;null===(n=I.current[e])||void 0===n||n.focus(),A(e)}else 0===j&&z.current&&(z.current.focus(),A(-1));break;case"Space":document.activeElement===I.current[j]&&(e.preventDefault(),R[j]&&V(R[j],j))}})),y((()=>{P||i||(z.current?(A(-1),setTimeout((()=>{var e;return null===(e=z.current)||void 0===e?void 0:e.focus()}),200)):I.current[j]?setTimeout((()=>{var e;return null===(e=I.current[j])||void 0===e?void 0:e.focus()}),200):(A(0),setTimeout((()=>{var e;return null===(e=I.current[0])||void 0===e?void 0:e.focus()}),200)))}),[i,j,P,A]),y((()=>{P&&M&&(i||"success"===a&&z.current&&(A(-1),z.current.focus()))}),[P,M,a,A,i]),y((()=>{_(""===T?n:B?W():Y())}),[W,Y,n,B,T]);const Z=e=>r?t(e?$s:Fs,{"aria-hidden":!0}):e?t(xs,{"aria-hidden":!0}):t(Ss,{}),X=(e,n)=>{const r=N(e),o="string"==typeof r?r:r.title,i="string"==typeof r?void 0:r.secondaryLabel;return t(Yr,{displayType:c,label:o,maxLines:s,selected:n,sublabel:i,truncationType:l,variant:u})},Q=()=>{if(!b||b&&"success"===a)return R.map(((t,n)=>{const i=(e=>!!wl(o,(t=>Sl(t,e))))(t),a=n===j;return e(ws,Object.assign({"aria-selected":i,"aria-multiselectable":r,"data-testid":"list-item",onClick:()=>V(t,n),onMouseEnter:()=>(e=>{A(e)})(n),ref:e=>I.current[n]=e,role:"option",tabIndex:a?0:-1,$active:a},{children:[Z(i),S?S(t,{selected:i}):X(t,i)]}),((e,t)=>`item_${t}__${w?w(e):e}`)(t,n))}))},G=()=>{if((O||B)&&"success"===a)return t(zs,{ref:z,onChange:q,value:T,placeholder:E,"data-testid":"search-input","aria-label":"Enter text to search",onClear:U,variant:u})},K=()=>{if(r&&R.length>0&&!T&&"success"===a)return t(Os,{children:t(Bs,Object.assign({onClick:g,type:"button",$variant:u},{children:0===o.length?"Select all":"Clear all"}))})},ee=()=>{if(!D&&(T||!O)&&0===R.length&&"success"===a)return e(ks,Object.assign({"data-testid":"list-no-results"},{children:[t(As,{"data-testid":"no-result-icon",$variant:u}),t(js,Object.assign({$variant:u},{children:"No results found."}))]}))},te=()=>{if(b&&"loading"===a){const n="small"===u?16:18;return e(ks,Object.assign({"data-testid":"list-loading"},{children:[t(Ml,{$buttonStyle:"secondary",size:n}),t(js,Object.assign({$variant:u},{children:"Loading..."}))]}))}},ne=()=>{if(b&&"fail"===a)return e(ks,Object.assign({"data-testid":"list-fail"},{children:[t(As,{"data-testid":"load-error-icon",$variant:u}),t(js,Object.assign({$variant:u},{children:"Failed to load."}))," ",t(Es,Object.assign({onClick:J,type:"button",$variant:u},{children:"Try again."}))]}))};return e(vs,Object.assign({"data-testid":"dropdown-container",ref:H,$width:h},{children:[e(ys,Object.assign({ref:L,"data-testid":"dropdown-list"},{children:[G(),K(),ee(),te(),ne(),t(bs,Object.assign({role:"listbox",id:d},{children:Q()}))]})),(()=>{if(F)return t("div",Object.assign({"data-testid":"custom-cta"},{children:F(v,R)}))})()]}))},Ws="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ys=O(gs)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Or("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Vs=O.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ws};

    svg {
        color: ${jr.Neutral[3]};
        ${e=>{const t="small"===e.$variant?br.BodySmall.fontSize:br.Body.fontSize;return D`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,qs=S((({children:n,disabled:r,expanded:o,listboxId:i,readOnly:a,variant:l},s)=>e(Ys,Object.assign({ref:s,type:"button","aria-expanded":o,"aria-haspopup":"listbox","data-testid":"selector",disabled:r,"aria-controls":i,$variant:l},{children:[n,!a&&t(Vs,Object.assign({$expanded:o,$variant:l},{children:t(L,{"aria-hidden":!0})}))]})))),Us=e=>"small"===e?2.5:3;O.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Us(e.$variant);return D`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Js=D`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Us(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${jr.Accent.Light[3]};
    }
`,Zs=O.button`
    ${Js}
    cursor: pointer;
`;O.div`
    ${Js}
`;const Xs=B`
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
`;O.div`
    position: relative;
    border: 1px solid ${jr.Neutral[5]};
    border-radius: ${"4px"};
    background: ${jr.Neutral[8]};

    :focus-within {
        border: 1px solid ${jr.Accent.Light[1]};
        box-shadow: ${Rl.InputBoxShadow};
    }

    ${e=>e.expanded?D`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:D`
                animation: ${Xs} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?D`
                background: ${jr.Neutral[6](e)};

                ${Zs} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${jr.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?D`
                border: none;
                background: transparent !important;

                ${Zs} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?D`
                border: 1px solid ${jr.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${jr.Validation.Red.Border(e)};
                    box-shadow: ${Rl.InputErrorBoxShadow};
                }
            `:void 0}
`,O.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Ws};
    margin-left: 1rem;
`,O(L)`
    color: ${jr.Neutral[3]};
    ${e=>{let t=br.Body.fontSize;return"small"===e.$variant&&(t=br.BodySmall.fontSize),D`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,O.div`
    height: 1px;
    background: ${jr.Neutral[5]};
    margin: 0 0.5rem;
`;const Qs=O.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`,Gs=O.div`
    ${e=>Or("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return D`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Ks=O(Gs)`
    color: ${jr.Neutral[3]};
`;function ec(e){return rc(e)?(e.nodeName||"").toLowerCase():"#document"}function tc(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function nc(e){var t;return null==(t=(rc(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function rc(e){return e instanceof Node||e instanceof tc(e).Node}function oc(e){return e instanceof Element||e instanceof tc(e).Element}function ic(e){return e instanceof HTMLElement||e instanceof tc(e).HTMLElement}function ac(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof tc(e).ShadowRoot)}function lc(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=fc(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function sc(e){return["table","td","th"].includes(ec(e))}function cc(e){const t=uc(),n=fc(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function uc(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function dc(e){return["html","body","#document"].includes(ec(e))}function fc(e){return tc(e).getComputedStyle(e)}function pc(e){return oc(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function hc(e){if("html"===ec(e))return e;const t=e.assignedSlot||e.parentNode||ac(e)&&e.host||nc(e);return ac(t)?t.host:t}function mc(e){const t=hc(e);return dc(t)?e.ownerDocument?e.ownerDocument.body:e.body:ic(t)&&lc(t)?t:mc(t)}function gc(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=mc(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=tc(o);return i?t.concat(a,a.visualViewport||[],lc(o)?o:[],a.frameElement&&n?gc(a.frameElement):[]):t.concat(o,gc(o,[],n))}function vc(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}function yc(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&ac(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function bc(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}function wc(e){return!bc().includes("jsdom/")&&(!xc()&&0===e.width&&0===e.height||xc()&&1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType||e.width<1&&e.height<1&&0===e.pressure&&0===e.detail&&"touch"===e.pointerType)}function xc(){const e=/android/i;return e.test(function(){const e=navigator.userAgentData;return null!=e&&e.platform?e.platform:navigator.platform}())||e.test(bc())}function Sc(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function $c(e){return(null==e?void 0:e.ownerDocument)||document}function Fc(e,t){if(null==t)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return null!=n.target&&t.contains(n.target)}function Oc(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Dc="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Ec(e){return ic(e)&&e.matches(Dc)}function Bc(e){e.preventDefault(),e.stopPropagation()}const kc=Math.min,jc=Math.max,Ac=Math.round,Tc=Math.floor,Cc=e=>({x:e,y:e}),Rc={left:"right",right:"left",bottom:"top",top:"bottom"},_c={start:"end",end:"start"};function Mc(e,t,n){return jc(e,kc(t,n))}function Pc(e,t){return"function"==typeof e?e(t):e}function Hc(e){return e.split("-")[0]}function Lc(e){return e.split("-")[1]}function Ic(e){return"x"===e?"y":"x"}function zc(e){return"y"===e?"height":"width"}function Nc(e){return["top","bottom"].includes(Hc(e))?"y":"x"}function Wc(e){return Ic(Nc(e))}function Yc(e){return e.replace(/start|end/g,(e=>_c[e]))}function Vc(e){return e.replace(/left|right|bottom|top/g,(e=>Rc[e]))}function qc(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function Uc(e,t,n){let{reference:r,floating:o}=e;const i=Nc(t),a=Wc(t),l=zc(a),s=Hc(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[l]/2-o[l]/2;let p;switch(s){case"top":p={x:u,y:r.y-o.height};break;case"bottom":p={x:u,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:d};break;case"left":p={x:r.x-o.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Lc(t)){case"start":p[a]-=f*(n&&c?-1:1);break;case"end":p[a]+=f*(n&&c?-1:1)}return p}async function Jc(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=Pc(t,e),h=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(p),m=l[f?"floating"===d?"reference":"floating":d],g=qc(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:s})),v="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await(null==i.isElement?void 0:i.isElement(y))&&await(null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},w=qc(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:s}):v);return{top:(g.top-w.top+h.top)/b.y,bottom:(w.bottom-g.bottom+h.bottom)/b.y,left:(g.left-w.left+h.left)/b.x,right:(w.right-g.right+h.right)/b.x}}function Zc(e){const t=fc(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=ic(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=Ac(n)!==i||Ac(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function Xc(e){return oc(e)?e:e.contextElement}function Qc(e){const t=Xc(e);if(!ic(t))return Cc(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Zc(t);let a=(i?Ac(n.width):n.width)/r,l=(i?Ac(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Gc=Cc(0);function Kc(e){const t=tc(e);return uc()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Gc}function eu(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=Xc(e);let a=Cc(1);t&&(r?oc(r)&&(a=Qc(r)):a=Qc(e));const l=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==tc(e))&&t}(i,n,r)?Kc(i):Cc(0);let s=(o.left+l.x)/a.x,c=(o.top+l.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=tc(i),t=r&&oc(r)?tc(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=Qc(o),t=o.getBoundingClientRect(),r=fc(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;s*=e.x,c*=e.y,u*=e.x,d*=e.y,s+=i,c+=a,n=tc(o),o=n.frameElement}}return qc({width:u,height:d,x:s,y:c})}const tu=[":popover-open",":modal"];function nu(e){return tu.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function ru(e){return eu(nc(e)).left+pc(e).scrollLeft}function ou(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=tc(e),r=nc(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;const e=uc();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l,y:s}}(e,n);else if("document"===t)r=function(e){const t=nc(e),n=pc(e),r=e.ownerDocument.body,o=jc(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=jc(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+ru(e);const l=-n.scrollTop;return"rtl"===fc(r).direction&&(a+=jc(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}(nc(e));else if(oc(t))r=function(e,t){const n=eu(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=ic(e)?Qc(e):Cc(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=Kc(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return qc(r)}function iu(e,t){const n=hc(e);return!(n===t||!oc(n)||dc(n))&&("fixed"===fc(n).position||iu(n,t))}function au(e,t,n){const r=ic(t),o=nc(t),i="fixed"===n,a=eu(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const s=Cc(0);if(r||!r&&!i)if(("body"!==ec(t)||lc(o))&&(l=pc(t)),r){const e=eu(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=ru(o));return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}function lu(e){return"static"===fc(e).position}function su(e,t){return ic(e)&&"fixed"!==fc(e).position?t?t(e):e.offsetParent:null}function cu(e,t){const n=tc(e);if(nu(e))return n;if(!ic(e)){let t=hc(e);for(;t&&!dc(t);){if(oc(t)&&!lu(t))return t;t=hc(t)}return n}let r=su(e,t);for(;r&&sc(r)&&lu(r);)r=su(r,t);return r&&dc(r)&&lu(r)&&!cc(r)?n:r||function(e){let t=hc(e);for(;ic(t)&&!dc(t);){if(cc(t))return t;t=hc(t)}return null}(e)||n}const uu={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=nc(r),l=!!t&&nu(t.floating);if(r===a||l&&i)return n;let s={scrollLeft:0,scrollTop:0},c=Cc(1);const u=Cc(0),d=ic(r);if((d||!d&&!i)&&(("body"!==ec(r)||lc(a))&&(s=pc(r)),ic(r))){const e=eu(r);c=Qc(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+u.x,y:n.y*c.y-s.scrollTop*c.y+u.y}},getDocumentElement:nc,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?nu(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=gc(e,[],!1).filter((e=>oc(e)&&"body"!==ec(e))),o=null;const i="fixed"===fc(e).position;let a=i?hc(e):e;for(;oc(a)&&!dc(a);){const t=fc(a),n=cc(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||lc(a)&&!n&&iu(e,a))?r=r.filter((e=>e!==a)):o=t,a=hc(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],l=i.reduce(((e,n)=>{const r=ou(t,n,o);return e.top=jc(r.top,e.top),e.right=kc(r.right,e.right),e.bottom=kc(r.bottom,e.bottom),e.left=jc(r.left,e.left),e}),ou(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:cu,getElementRects:async function(e){const t=this.getOffsetParent||cu,n=this.getDimensions,r=await n(e.floating);return{reference:au(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=Zc(e);return{width:t,height:n}},getScale:Qc,isElement:oc,isRTL:function(e){return"rtl"===fc(e).direction}};function du(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:s=!1}=r,c=Xc(e),u=o||i?[...c?gc(c):[],...gc(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&l?function(e,t){let n,r=null;const o=nc(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(l,s){void 0===l&&(l=!1),void 0===s&&(s=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;const p={rootMargin:-Tc(u)+"px "+-Tc(o.clientWidth-(c+d))+"px "+-Tc(o.clientHeight-(u+f))+"px "+-Tc(c)+"px",threshold:jc(0,kc(1,s))||1};let h=!0;function m(e){const t=e[0].intersectionRatio;if(t!==s){if(!h)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}h=!1}try{r=new IntersectionObserver(m,{...p,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(m,p)}r.observe(e)}(!0),i}(c,n):null;let f,p=-1,h=null;a&&(h=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var e;null==(e=h)||e.observe(t)}))),n()})),c&&!s&&h.observe(c),h.observe(t));let m=s?eu(e):null;return s&&function t(){const r=eu(e);!m||r.x===m.x&&r.y===m.y&&r.width===m.width&&r.height===m.height||n();m=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=h)||e.disconnect(),h=null,s&&cancelAnimationFrame(f)}}const fu=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:l}=t,s=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=Hc(n),l=Lc(n),s="y"===Nc(n),c=["left","top"].includes(a)?-1:1,u=i&&s?-1:1,d=Pc(t,e);let{mainAxis:f,crossAxis:p,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof h&&(p="end"===l?-1*h:h),s?{x:p*u,y:f*c}:{x:f*c,y:p*u}}(t,e);return a===(null==(n=l.offset)?void 0:n.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:o+s.x,y:i+s.y,data:{...s,placement:a}}}}},pu=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=Pc(e,t),c={x:n,y:r},u=await Jc(t,s),d=Nc(Hc(o)),f=Ic(d);let p=c[f],h=c[d];if(i){const e="y"===f?"bottom":"right";p=Mc(p+u["y"===f?"top":"left"],p,p-u[e])}if(a){const e="y"===d?"bottom":"right";h=Mc(h+u["y"===d?"top":"left"],h,h-u[e])}const m=l.fn({...t,[f]:p,[d]:h});return{...m,data:{x:m.x-n,y:m.y-r}}}}},hu=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:l,platform:s,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...g}=Pc(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const v=Hc(o),y=Hc(l)===l,b=await(null==s.isRTL?void 0:s.isRTL(c.floating)),w=f||(y||!m?[Vc(l)]:function(e){const t=Vc(e);return[Yc(e),t,Yc(t)]}(l));f||"none"===h||w.push(...function(e,t,n,r){const o=Lc(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(Hc(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(Yc)))),i}(l,m,h,b));const x=[l,...w],S=await Jc(t,g),$=[];let F=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&$.push(S[v]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=Lc(e),o=Wc(e),i=zc(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Vc(a)),[a,Vc(a)]}(o,a,b);$.push(S[e[0]],S[e[1]])}if(F=[...F,{placement:o,overflows:$}],!$.every((e=>e<=0))){var O,D;const e=((null==(O=i.flip)?void 0:O.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(D=F.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:D.placement;if(!n)switch(p){case"bestFit":{var E;const e=null==(E=F.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}},mu=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...l}=Pc(e,t),s=await Jc(t,l),c=Hc(n),u=Lc(n),d="y"===Nc(n),{width:f,height:p}=r.floating;let h,m;"top"===c||"bottom"===c?(h=c,m=u===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(m=c,h="end"===u?"top":"bottom");const g=p-s.top-s.bottom,v=f-s.left-s.right,y=kc(p-s[h],g),b=kc(f-s[m],v),w=!t.middlewareData.shift;let x=y,S=b;if(d?S=u||w?kc(b,v):v:x=u||w?kc(y,g):g,w&&!u){const e=jc(s.left,0),t=jc(s.right,0),n=jc(s.top,0),r=jc(s.bottom,0);d?S=f-2*(0!==e||0!==t?e+t:jc(s.left,s.right)):x=p-2*(0!==n||0!==r?n+r:jc(s.top,s.bottom))}await a({...t,availableWidth:S,availableHeight:x});const $=await o.getDimensions(i.floating);return f!==$.width||p!==$.height?{reset:{rects:!0}}:{}}}},gu=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:l=0,mainAxis:s=!0,crossAxis:c=!0}=Pc(e,t),u={x:n,y:r},d=Nc(o),f=Ic(d);let p=u[f],h=u[d];const m=Pc(l,t),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(s){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+g.mainAxis,n=i.reference[f]+i.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(c){var v,y;const e="y"===f?"width":"height",t=["top","left"].includes(Hc(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(v=a.offset)?void 0:v[d])||0)+(t?0:g.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(y=a.offset)?void 0:y[d])||0)-(t?g.crossAxis:0);h<n?h=n:h>r&&(h=r)}return{[f]:p,[d]:h}}}},vu=(e,t,n)=>{const r=new Map,o={platform:uu,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),s=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Uc(c,r,s),f=r,p={},h=0;for(let n=0;n<l.length;n++){const{name:i,fn:m}=l[n],{x:g,y:v,data:y,reset:b}=await m({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:p,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=v?v:d,p={...p,[i]:{...p[i],...y}},b&&h<=50&&(h++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=Uc(c,f,s))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:p}})(e,t,{...o,platform:i})};var yu="undefined"!=typeof document?b:y;function bu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!bu(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!bu(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function wu(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function xu(e,t){const n=wu(e);return Math.round(t*n)/n}function Su(e){const t=u.useRef(e);return yu((()=>{t.current=e})),t}const $u=(e,t)=>({...pu(e),options:[e,t]}),Fu=(e,t)=>({...gu(e),options:[e,t]}),Ou=(e,t)=>({...hu(e),options:[e,t]}),Du=(e,t)=>({...mu(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var Eu=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),Bu="undefined"==typeof Element,ku=Bu?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ju=!Bu&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},Au=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},Tu=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Au(a,!1))if("SLOT"===a.tagName){var l=a.assignedElements(),s=e(l.length?l:a.children,!0,r);r.flatten?o.push.apply(o,s):o.push({scopeParent:a,candidates:s})}else{ku.call(a,Eu)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!Au(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},Cu=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Ru=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!Cu(e)?0:e.tabIndex},_u=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Mu=function(e){return"INPUT"===e.tagName},Pu=function(e){return function(e){return Mu(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||ju(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},Hu=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},Lu=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=ku.call(e,"details>summary:first-of-type")?e.parentElement:e;if(ku.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return Hu(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,l=ju(e);if(a&&!a.shadowRoot&&!0===r(a))return Hu(e);e=e.assignedSlot?e.assignedSlot:a||l===e.ownerDocument?a:l.host}e=i}if(function(e){var t,n,r,o,i=e&&ju(e),a=null===(t=i)||void 0===t?void 0:t.host,l=!1;if(i&&i!==e)for(l=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!l&&a;){var s,c,u;l=!(null===(c=a=null===(s=i=ju(a))||void 0===s?void 0:s.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return l}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},Iu=function(e,t){return!(t.disabled||Au(t)||function(e){return Mu(e)&&"hidden"===e.type}(t)||Lu(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!ku.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},zu=function(e,t){return!(Pu(t)||Ru(t)<0||!Iu(e,t))},Nu=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Wu=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,l=function(e,t){var n=Ru(e);return n<0&&t&&!Cu(e)?0:n}(a,i),s=i?e(t.candidates):a;0===l?i?n.push.apply(n,s):n.push(a):r.push({documentOrder:o,tabIndex:l,item:t,isScope:i,content:s})})),r.sort(_u).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},Yu=function(e,t){var n;return n=(t=t||{}).getShadowRoot?Tu([e],t.includeContainer,{filter:zu.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Nu}):function(e,t,n){if(Au(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Eu));return t&&ku.call(e,Eu)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,zu.bind(null,t)),Wu(n)},Vu=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==ku.call(e,Eu)&&zu(t,e)};const qu={...u},Uu=qu.useInsertionEffect||(e=>e());function Ju(e){const t=u.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return Uu((()=>{t.current=e})),u.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}let Zu=0;function Xu(e,t){void 0===t&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(Zu);const i=()=>null==e?void 0:e.focus({preventScroll:n});o?i():Zu=requestAnimationFrame(i)}var Qu="undefined"!=typeof document?b:y;function Gu(){return Gu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gu.apply(this,arguments)}let Ku=!1,ed=0;const td=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+ed++;const nd=qu.useId||function(){const[e,t]=u.useState((()=>Ku?td():void 0));return Qu((()=>{null==e&&t(td())}),[]),u.useEffect((()=>{Ku=!0}),[]),e};let rd;"production"!==process.env.NODE_ENV&&(rd=new Set);const od=u.createContext(null),id=u.createContext(null),ad=()=>{var e;return(null==(e=u.useContext(od))?void 0:e.id)||null},ld=()=>u.useContext(id);function sd(e){return"data-floating-ui-"+e}function cd(e){const t=f(e);return Qu((()=>{t.current=e})),t}function ud(e,t){let n=e.filter((e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)})),r=n;for(;r.length;)r=e.filter((e=>{var t;return null==(t=r)?void 0:t.some((t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)}))})),n=n.concat(r);return n}let dd=new WeakMap,fd=new WeakSet,pd={},hd=0;const md=e=>e&&(e.host||md(e.parentNode)),gd=(e,t)=>t.map((t=>{if(e.contains(t))return t;const n=md(t);return e.contains(n)?n:null})).filter((e=>null!=e));function vd(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=$c(e[0]).body;return function(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=gd(t,e),l=new Set,s=new Set(a),c=[];pd[o]||(pd[o]=new WeakMap);const u=pd[o];return a.forEach((function e(t){t&&!l.has(t)&&(l.add(t),t.parentNode&&e(t.parentNode))})),function e(t){t&&!s.has(t)&&[].forEach.call(t.children,(t=>{if("script"!==ec(t))if(l.has(t))e(t);else{const e=i?t.getAttribute(i):null,n=null!==e&&"false"!==e,r=(dd.get(t)||0)+1,a=(u.get(t)||0)+1;dd.set(t,r),u.set(t,a),c.push(t),1===r&&n&&fd.add(t),1===a&&t.setAttribute(o,""),!n&&i&&t.setAttribute(i,"true")}}))}(t),l.clear(),hd++,()=>{c.forEach((e=>{const t=(dd.get(e)||0)-1,n=(u.get(e)||0)-1;dd.set(e,t),u.set(e,n),t||(!fd.has(e)&&i&&e.removeAttribute(i),fd.delete(e)),n||e.removeAttribute(o)})),hd--,hd||(dd=new WeakMap,dd=new WeakMap,fd=new WeakSet,pd={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const yd=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function bd(e,t){const n=Yu(e,yd());"prev"===t&&n.reverse();const r=n.indexOf(vc($c(e)));return n.slice(r+1)[0]}function wd(){return bd(document.body,"next")}function xd(){return bd(document.body,"prev")}function Sd(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!yc(n,r)}function $d(e){Yu(e,yd()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function Fd(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const Od={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function Dd(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const Ed=u.forwardRef((function(e,t){const[n,r]=u.useState();Qu((()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",Dd),()=>{document.removeEventListener("keydown",Dd)})),[]);const o={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[sd("focus-guard")]:"",style:Od};return u.createElement("span",Gu({},e,o))})),Bd=u.createContext(null),kd=sd("portal");function jd(e){const{children:t,id:n,root:r=null,preserveTabOrder:o=!0}=e,i=function(e){void 0===e&&(e={});const{id:t,root:n}=e,r=nd(),o=Ad(),[i,a]=u.useState(null),l=u.useRef(null);return Qu((()=>()=>{null==i||i.remove(),queueMicrotask((()=>{l.current=null}))}),[i]),Qu((()=>{if(!r)return;if(l.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=r,n.setAttribute(kd,""),e.appendChild(n),l.current=n,a(n)}),[t,r]),Qu((()=>{if(!r)return;if(l.current)return;let e=n||(null==o?void 0:o.portalNode);e&&!oc(e)&&(e=e.current),e=e||document.body;let i=null;t&&(i=document.createElement("div"),i.id=t,e.appendChild(i));const s=document.createElement("div");s.id=r,s.setAttribute(kd,""),e=i||e,e.appendChild(s),l.current=s,a(s)}),[t,n,r,o]),i}({id:n,root:r}),[a,l]=u.useState(null),s=u.useRef(null),c=u.useRef(null),d=u.useRef(null),f=u.useRef(null),p=!!a&&!a.modal&&a.open&&o&&!(!r&&!i);return u.useEffect((()=>{if(i&&o&&(null==a||!a.modal))return i.addEventListener("focusin",e,!0),i.addEventListener("focusout",e,!0),()=>{i.removeEventListener("focusin",e,!0),i.removeEventListener("focusout",e,!0)};function e(e){if(i&&Sd(e)){("focusin"===e.type?Fd:$d)(i)}}}),[i,o,null==a?void 0:a.modal]),u.createElement(Bd.Provider,{value:u.useMemo((()=>({preserveTabOrder:o,beforeOutsideRef:s,afterOutsideRef:c,beforeInsideRef:d,afterInsideRef:f,portalNode:i,setFocusManagerState:l})),[o,i])},p&&i&&u.createElement(Ed,{"data-type":"outside",ref:s,onFocus:e=>{if(Sd(e,i)){var t;null==(t=d.current)||t.focus()}else{const e=xd()||(null==a?void 0:a.refs.domReference.current);null==e||e.focus()}}}),p&&i&&u.createElement("span",{"aria-owns":i.id,style:Od}),i&&T(t,i),p&&i&&u.createElement(Ed,{"data-type":"outside",ref:c,onFocus:e=>{if(Sd(e,i)){var t;null==(t=f.current)||t.focus()}else{const t=wd()||(null==a?void 0:a.refs.domReference.current);null==t||t.focus(),(null==a?void 0:a.closeOnFocusOut)&&(null==a||a.onOpenChange(!1,e.nativeEvent))}}}))}const Ad=()=>u.useContext(Bd),Td=20;let Cd=[];function Rd(e){Cd=Cd.filter((e=>e.isConnected));let t=e;if(t&&"body"!==ec(t)){if(!Vu(t,yd())){const e=Yu(t,yd())[0];e&&(t=e)}Cd.push(t),Cd.length>Td&&(Cd=Cd.slice(-Td))}}function _d(){return Cd.slice().reverse().find((e=>e.isConnected))}const Md=u.forwardRef((function(e,t){return u.createElement("button",Gu({},e,{type:"button",ref:t,tabIndex:-1,style:Od}))}));function Pd(e){const{context:t,children:n,disabled:r=!1,order:o=["content"],guards:i=!0,initialFocus:a=0,returnFocus:l=!0,modal:s=!0,visuallyHiddenDismiss:c=!1,closeOnFocusOut:d=!0}=e,{open:f,refs:p,nodeId:h,onOpenChange:m,events:g,dataRef:v,elements:{domReference:y,floating:b}}=t,w="number"==typeof a&&a<0,x=!!(S=y)&&"combobox"===S.getAttribute("role")&&Ec(S)&&w;var S;const $="undefined"==typeof HTMLElement||!("inert"in HTMLElement.prototype)||i,F=cd(o),O=cd(a),D=cd(l),E=ld(),B=Ad(),k=u.useRef(null),j=u.useRef(null),A=u.useRef(!1),T=u.useRef(!1),C=null!=B,R=u.useCallback((function(e){return void 0===e&&(e=b),e?Yu(e,yd()):[]}),[b]),_=u.useCallback((e=>{const t=R(e);return F.current.map((e=>y&&"reference"===e?y:b&&"floating"===e?b:t)).filter(Boolean).flat()}),[y,b,F,R]);function M(e){return!r&&c&&s?u.createElement(Md,{ref:"start"===e?k:j,onClick:e=>m(!1,e.nativeEvent)},"string"==typeof c?c:"Dismiss"):null}u.useEffect((()=>{if(r||!s)return;function e(e){if("Tab"===e.key){yc(b,vc($c(b)))&&0===R().length&&!x&&Bc(e);const t=_(),n=Oc(e);"reference"===F.current[0]&&n===y&&(Bc(e),e.shiftKey?Xu(t[t.length-1]):Xu(t[1])),"floating"===F.current[1]&&n===b&&e.shiftKey&&(Bc(e),Xu(t[0]))}}const t=$c(b);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}}),[r,y,b,s,F,x,R,_]),u.useEffect((()=>{if(!r&&d)return b&&ic(y)?(y.addEventListener("focusout",t),y.addEventListener("pointerdown",e),!s&&b.addEventListener("focusout",t),()=>{y.removeEventListener("focusout",t),y.removeEventListener("pointerdown",e),!s&&b.removeEventListener("focusout",t)}):void 0;function e(){T.current=!0,setTimeout((()=>{T.current=!1}))}function t(e){const t=e.relatedTarget;queueMicrotask((()=>{const n=!(yc(y,t)||yc(b,t)||yc(t,b)||yc(null==B?void 0:B.portalNode,t)||null!=t&&t.hasAttribute(sd("focus-guard"))||E&&(ud(E.nodesRef.current,h).find((e=>{var n,r;return yc(null==(n=e.context)?void 0:n.elements.floating,t)||yc(null==(r=e.context)?void 0:r.elements.domReference,t)}))||function(e,t){var n;let r=[],o=null==(n=e.find((e=>e.id===t)))?void 0:n.parentId;for(;o;){const t=e.find((e=>e.id===o));o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r}(E.nodesRef.current,h).find((e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t}))));t&&n&&!T.current&&t!==_d()&&(A.current=!0,m(!1,e))}))}}),[r,y,b,s,h,E,B,m,d]),u.useEffect((()=>{var e;if(r)return;const t=Array.from((null==B||null==(e=B.portalNode)?void 0:e.querySelectorAll("["+sd("portal")+"]"))||[]);if(b){const e=[b,...t,k.current,j.current,F.current.includes("reference")||x?y:null].filter((e=>null!=e)),n=s||x?vd(e,$,!$):vd(e);return()=>{n()}}}),[r,y,b,s,F,B,x,$]),Qu((()=>{if(r||!b)return;const e=vc($c(b));queueMicrotask((()=>{const t=_(b),n=O.current,r=("number"==typeof n?t[n]:n.current)||b,o=yc(b,e);w||o||!f||Xu(r,{preventScroll:r===b})}))}),[r,f,b,w,_,O]),Qu((()=>{if(r||!b)return;let e=!1;const t=$c(b),n=vc(t);let o=v.current.openEvent;function i(t){let{open:n,reason:r,event:i,nested:a}=t;n&&(o=i),"escape-key"===r&&p.domReference.current&&Rd(p.domReference.current),"hover"===r&&"mouseleave"===i.type&&(A.current=!0),"outside-press"===r&&(a?(A.current=!1,e=!0):A.current=!(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||(xc()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}(i)||wc(i)))}return Rd(n),g.on("openchange",i),()=>{g.off("openchange",i);const n=vc(t),r=yc(b,n)||E&&ud(E.nodesRef.current,h).some((e=>{var t;return yc(null==(t=e.context)?void 0:t.elements.floating,n)}));(r||o&&["click","mousedown"].includes(o.type))&&p.domReference.current&&Rd(p.domReference.current);const a=_d();D.current&&!A.current&&ic(a)&&(a===n||n===t.body||r)&&Xu(a,{cancelPrevious:!1,preventScroll:e})}}),[r,b,D,v,p,g,E,h]),Qu((()=>{if(!r&&B)return B.setFocusManagerState({modal:s,closeOnFocusOut:d,open:f,onOpenChange:m,refs:p}),()=>{B.setFocusManagerState(null)}}),[r,B,s,f,m,p,d]),Qu((()=>{if(r||!b||"function"!=typeof MutationObserver||w)return;const e=()=>{const e=b.getAttribute("tabindex");F.current.includes("floating")||vc($c(b))!==p.domReference.current&&0===R().length?"0"!==e&&b.setAttribute("tabindex","0"):"-1"!==e&&b.setAttribute("tabindex","-1")};e();const t=new MutationObserver(e);return t.observe(b,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}}),[r,b,p,F,R,w]);const P=!r&&$&&(C||s);return u.createElement(u.Fragment,null,P&&u.createElement(Ed,{"data-type":"inside",ref:null==B?void 0:B.beforeInsideRef,onFocus:e=>{if(s){const e=_();Xu("reference"===o[0]?e[0]:e[e.length-1])}else if(null!=B&&B.preserveTabOrder&&B.portalNode)if(A.current=!1,Sd(e,B.portalNode)){const e=wd()||y;null==e||e.focus()}else{var t;null==(t=B.beforeOutsideRef.current)||t.focus()}}}),!x&&M("start"),n,M("end"),P&&u.createElement(Ed,{"data-type":"inside",ref:null==B?void 0:B.afterInsideRef,onFocus:e=>{if(s)Xu(_()[0]);else if(null!=B&&B.preserveTabOrder&&B.portalNode)if(d&&(A.current=!0),Sd(e,B.portalNode)){const e=xd()||y;null==e||e.focus()}else{var t;null==(t=B.afterOutsideRef.current)||t.focus()}}}))}function Hd(e){return ic(e.target)&&"BUTTON"===e.target.tagName}function Ld(e){return Ec(e)}const Id={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},zd={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Nd=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function Wd(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=nd(),i=u.useRef({}),[a]=u.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),l=null!=ad();if("production"!==process.env.NODE_ENV){const e=r.reference;e&&!oc(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=rd)&&e.has(o)||(null==(i=rd)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[s,c]=u.useState(r.reference),d=Ju(((e,t,r)=>{i.current.openEvent=e?t:void 0,a.emit("openchange",{open:e,event:t,reason:r,nested:l}),null==n||n(e,t,r)})),f=u.useMemo((()=>({setPositionReference:c})),[]),p=u.useMemo((()=>({reference:s||r.reference||null,floating:r.floating||null,domReference:r.reference})),[s,r.reference,r.floating]);return u.useMemo((()=>({dataRef:i,open:t,onOpenChange:d,elements:p,events:a,floatingId:o,refs:f})),[t,d,p,a,o,f])}function Yd(e){void 0===e&&(e={});const{nodeId:t}=e,n=Wd({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[i,a]=u.useState(null),[l,s]=u.useState(null),c=(null==o?void 0:o.reference)||i,d=u.useRef(null),f=ld();Qu((()=>{c&&(d.current=c)}),[c]);const p=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:l=!0,whileElementsMounted:s,open:c}=e,[d,f]=u.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=u.useState(r);bu(p,r)||h(r);const[m,g]=u.useState(null),[v,y]=u.useState(null),b=u.useCallback((e=>{e!==$.current&&($.current=e,g(e))}),[]),w=u.useCallback((e=>{e!==F.current&&(F.current=e,y(e))}),[]),x=i||m,S=a||v,$=u.useRef(null),F=u.useRef(null),O=u.useRef(d),D=null!=s,E=Su(s),B=Su(o),k=u.useCallback((()=>{if(!$.current||!F.current)return;const e={placement:t,strategy:n,middleware:p};B.current&&(e.platform=B.current),vu($.current,F.current,e).then((e=>{const t={...e,isPositioned:!0};A.current&&!bu(O.current,t)&&(O.current=t,j.flushSync((()=>{f(t)})))}))}),[p,t,n,B]);yu((()=>{!1===c&&O.current.isPositioned&&(O.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[c]);const A=u.useRef(!1);yu((()=>(A.current=!0,()=>{A.current=!1})),[]),yu((()=>{if(x&&($.current=x),S&&(F.current=S),x&&S){if(E.current)return E.current(x,S,k);k()}}),[x,S,k,E,D]);const T=u.useMemo((()=>({reference:$,floating:F,setReference:b,setFloating:w})),[b,w]),C=u.useMemo((()=>({reference:x,floating:S})),[x,S]),R=u.useMemo((()=>{const e={position:n,left:0,top:0};if(!C.floating)return e;const t=xu(C.floating,d.x),r=xu(C.floating,d.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",...wu(C.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,l,C.floating,d.x,d.y]);return u.useMemo((()=>({...d,update:k,refs:T,elements:C,floatingStyles:R})),[d,k,T,C,R])}({...e,elements:{...o,...l&&{reference:l}}}),h=u.useCallback((e=>{const t=oc(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;s(t),p.refs.setReference(t)}),[p.refs]),m=u.useCallback((e=>{(oc(e)||null===e)&&(d.current=e,a(e)),(oc(p.refs.reference.current)||null===p.refs.reference.current||null!==e&&!oc(e))&&p.refs.setReference(e)}),[p.refs]),g=u.useMemo((()=>({...p.refs,setReference:m,setPositionReference:h,domReference:d})),[p.refs,m,h]),v=u.useMemo((()=>({...p.elements,domReference:c})),[p.elements,c]),y=u.useMemo((()=>({...p,...r,refs:g,elements:v,nodeId:t})),[p,g,v,t,r]);return Qu((()=>{r.dataRef.current.floatingContext=y;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=y)})),u.useMemo((()=>({...p,context:y,refs:g,elements:v})),[p,g,v,y])}const Vd="active",qd="selected";function Ud(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const{[Vd]:t,[qd]:n,...r}=e;i=r}return{..."floating"===n&&{tabIndex:-1},...i,...t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[Vd,qd].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{})}}const Jd=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()));function Zd(e,t){return"function"==typeof e?e(t):e}function Xd(e,t){void 0===t&&(t={});const{open:n,elements:{floating:r}}=e,{duration:o=250}=t,i=("number"==typeof o?o:o.close)||0,[a,l]=u.useState("unmounted"),s=function(e,t){const[n,r]=u.useState(e);return e&&!n&&r(!0),u.useEffect((()=>{if(!e&&n){const e=setTimeout((()=>r(!1)),t);return()=>clearTimeout(e)}}),[e,n,t]),n}(n,i);return s||"close"!==a||l("unmounted"),Qu((()=>{if(r){if(n){l("initial");const e=requestAnimationFrame((()=>{l("open")}));return()=>{cancelAnimationFrame(e)}}l("close")}}),[n,r]),{isMounted:s,status:a}}const Qd=O.div`
    display: flex;
    flex-direction: column;
`,Gd=e=>"right"===e?"bottom-end":"bottom-start",Kd=({enabled:r,isOpen:o,onOpen:i,onClose:a,onDismiss:l,renderElement:s,renderDropdown:c,zIndex:d=50,clickToToggle:p=!1,offset:h=0,alignment:m="left",fitAvailableHeight:g})=>{const v=f(null),y=f(null),{width:b}=Ie({targetRef:v,handleHeight:!1}),{refs:w,floatingStyles:x,context:S}=Yd({open:o,onOpenChange:(e,t,n)=>{"escape-key"===n?null==l||l():e&&!o?null==i||i():!e&&o&&(null==a||a(n))},whileElementsMounted:du,placement:Gd(m),middleware:[($=h,{...fu($),options:[$,F]}),Ou(),$u({limiter:Fu()}),Du({apply({availableHeight:e}){y.current&&Object.assign(y.current.style,{maxHeight:g?`${e}px`:void 0,overflowY:g?"hidden":void 0})}})]});var $,F;const{isMounted:O,styles:D}=function(e,t){void 0===t&&(t={});const{initial:n={opacity:0},open:r,close:o,common:i,duration:a=250}=t,l=e.placement,s=l.split("-")[0],c=u.useMemo((()=>({side:s,placement:l})),[s,l]),d="number"==typeof a,f=(d?a:a.open)||0,p=(d?a:a.close)||0,[h,m]=u.useState((()=>({...Zd(i,c),...Zd(n,c)}))),{isMounted:g,status:v}=Xd(e,{duration:a}),y=cd(n),b=cd(r),w=cd(o),x=cd(i);return Qu((()=>{const e=Zd(y.current,c),t=Zd(w.current,c),n=Zd(x.current,c),r=Zd(b.current,c)||Object.keys(e).reduce(((e,t)=>(e[t]="",e)),{});if("initial"===v&&m((t=>({transitionProperty:t.transitionProperty,...n,...e}))),"open"===v&&m({transitionProperty:Object.keys(r).map(Jd).join(","),transitionDuration:f+"ms",...n,...r}),"close"===v){const r=t||e;m({transitionProperty:Object.keys(r).map(Jd).join(","),transitionDuration:p+"ms",...n,...r})}}),[p,w,y,b,x,f,v,c]),{isMounted:g,styles:h}}(S,{initial:{opacity:0},open:{opacity:1},duration:300}),E=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:r,dataRef:o,elements:{domReference:i}}=e,{enabled:a=!0,event:l="click",toggle:s=!0,ignoreMouse:c=!1,keyboardHandlers:d=!0}=t,f=u.useRef(),p=u.useRef(!1);return u.useMemo((()=>a?{reference:{onPointerDown(e){f.current=e.pointerType},onMouseDown(e){0===e.button&&(Sc(f.current,!0)&&c||"click"!==l&&(!n||!s||o.current.openEvent&&"mousedown"!==o.current.openEvent.type?(e.preventDefault(),r(!0,e.nativeEvent,"click")):r(!1,e.nativeEvent,"click")))},onClick(e){"mousedown"===l&&f.current?f.current=void 0:Sc(f.current,!0)&&c||(!n||!s||o.current.openEvent&&"click"!==o.current.openEvent.type?r(!0,e.nativeEvent,"click"):r(!1,e.nativeEvent,"click"))},onKeyDown(e){f.current=void 0,e.defaultPrevented||!d||Hd(e)||(" "!==e.key||Ld(i)||(e.preventDefault(),p.current=!0),"Enter"===e.key&&r(!n||!s,e.nativeEvent,"click"))},onKeyUp(e){e.defaultPrevented||!d||Hd(e)||Ld(i)||" "===e.key&&p.current&&(p.current=!1,r(!n||!s,e.nativeEvent,"click"))}}}:{}),[a,o,l,c,d,i,s,n,r])}(S,{enabled:r,toggle:p}),B=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:r,elements:{reference:o,domReference:i,floating:a},dataRef:l}=e,{enabled:s=!0,escapeKey:c=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:p=!1,referencePressEvent:h="pointerdown",ancestorScroll:m=!1,bubbles:g,capture:v}=t,y=ld(),b=Ju("function"==typeof d?d:()=>!1),w="function"==typeof d?b:d,x=u.useRef(!1),S=u.useRef(!1),{escapeKey:$,outsidePress:F}=Nd(g),{escapeKey:O,outsidePress:D}=Nd(v),E=Ju((e=>{var t;if(!n||!s||!c||"Escape"!==e.key)return;const o=null==(t=l.current.floatingContext)?void 0:t.nodeId,i=y?ud(y.nodesRef.current,o):[];if(!$&&(e.stopPropagation(),i.length>0)){let e=!0;if(i.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__escapeKeyBubbles||(e=!1)})),!e)return}r(!1,function(e){return"nativeEvent"in e}(e)?e.nativeEvent:e,"escape-key")})),B=Ju((e=>{var t;const n=()=>{var t;E(e),null==(t=Oc(e))||t.removeEventListener("keydown",n)};null==(t=Oc(e))||t.addEventListener("keydown",n)})),k=Ju((e=>{var t;const n=x.current;x.current=!1;const o=S.current;if(S.current=!1,"click"===f&&o)return;if(n)return;if("function"==typeof w&&!w(e))return;const s=Oc(e),c="["+sd("inert")+"]",u=$c(a).querySelectorAll(c);let d=oc(s)?s:null;for(;d&&!dc(d);){const e=hc(d);if(dc(e)||!oc(e))break;d=e}if(u.length&&oc(s)&&!s.matches("html,body")&&!yc(s,a)&&Array.from(u).every((e=>!yc(d,e))))return;if(ic(s)&&a){const t=s.clientWidth>0&&s.scrollWidth>s.clientWidth,n=s.clientHeight>0&&s.scrollHeight>s.clientHeight;let r=n&&e.offsetX>s.clientWidth;if(n&&"rtl"===fc(s).direction&&(r=e.offsetX<=s.offsetWidth-s.clientWidth),r||t&&e.offsetY>s.clientHeight)return}const p=null==(t=l.current.floatingContext)?void 0:t.nodeId,h=y&&ud(y.nodesRef.current,p).some((t=>{var n;return Fc(e,null==(n=t.context)?void 0:n.elements.floating)}));if(Fc(e,a)||Fc(e,i)||h)return;const m=y?ud(y.nodesRef.current,p):[];if(m.length>0){let e=!0;if(m.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__outsidePressBubbles||(e=!1)})),!e)return}r(!1,e,"outside-press")})),j=Ju((e=>{var t;const n=()=>{var t;k(e),null==(t=Oc(e))||t.removeEventListener(f,n)};null==(t=Oc(e))||t.addEventListener(f,n)}));return u.useEffect((()=>{if(!n||!s)return;function e(e){r(!1,e,"ancestor-scroll")}l.current.__escapeKeyBubbles=$,l.current.__outsidePressBubbles=F;const t=$c(a);c&&t.addEventListener("keydown",O?B:E,O),w&&t.addEventListener(f,D?j:k,D);let u=[];return m&&(oc(i)&&(u=gc(i)),oc(a)&&(u=u.concat(gc(a))),!oc(o)&&o&&o.contextElement&&(u=u.concat(gc(o.contextElement)))),u=u.filter((e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})),u.forEach((t=>{t.addEventListener("scroll",e,{passive:!0})})),()=>{c&&t.removeEventListener("keydown",O?B:E,O),w&&t.removeEventListener(f,D?j:k,D),u.forEach((t=>{t.removeEventListener("scroll",e)}))}}),[l,a,i,o,c,w,f,n,r,m,s,$,F,E,O,B,k,D,j]),u.useEffect((()=>{x.current=!1}),[w,f]),u.useMemo((()=>s?{reference:{onKeyDown:E,[Id[h]]:e=>{p&&r(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:E,onMouseDown(){S.current=!0},onMouseUp(){S.current=!0},[zd[f]]:()=>{x.current=!0}}}:{}),[s,p,f,h,r,E])}(S,{enabled:r}),{getReferenceProps:k,getFloatingProps:j}=function(e){void 0===e&&(e=[]);const t=e,n=u.useCallback((t=>Ud(t,e,"reference")),t),r=u.useCallback((t=>Ud(t,e,"floating")),t),o=u.useCallback((t=>Ud(t,e,"item")),e.map((e=>null==e?void 0:e.item)));return u.useMemo((()=>({getReferenceProps:n,getFloatingProps:r,getItemProps:o})),[n,r,o])}([E,B]);return e(n,{children:[t("div",Object.assign({ref:e=>{v.current=e,w.setReference(e)}},k(),{children:s()})),O&&t(jd,{children:t(Pd,Object.assign({context:S,modal:!1,initialFocus:y,returnFocus:!1},{children:t("div",Object.assign({ref:w.setFloating,style:Object.assign(Object.assign({},x),{zIndex:d})},j(),{children:t(Qd,Object.assign({ref:y,style:Object.assign({},D),inert:D.opacity<1?"":void 0},{children:c({elementWidth:b})}))}))}))})]})},ef=({selectedOption:e,placeholder:n="Select",options:r,disabled:o,error:i,className:a,"data-testid":l,id:s,enableSearch:c=!1,searchFunction:u,searchPlaceholder:d,valueExtractor:h,valueToStringFunction:m,listExtractor:g,displayValueExtractor:v,onSelectOption:b,onShowOptions:w,onHideOptions:x,onRetry:S,optionsLoadState:$="success",optionTruncationType:F="end",renderCustomSelectedOption:O,renderListItem:D,hideNoResultsDisplay:E,renderCustomCallToAction:B,onBlur:k,variant:j="default",readOnly:A,alignment:T,dropdownZIndex:C})=>{const[R,_]=p(e),[M,P]=p(!1),[H,L]=p(!1),[I]=p((()=>os.generate())),z=f(),N=f(),W=f();y((()=>{_(e)}),[e]);const Y=(e,t)=>{N.current.focus(),_(e),P(!1),Z(!1),null==b||b(e,t)},V=()=>{M&&(P(!1),Z(!1))},q=()=>{H||M||L(!0)},U=e=>{!H||M||z.current.contains(e.relatedTarget)||(L(!1),null==k||k())},J=e=>{if("middle"===F){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),Pr.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(e),t,120,8)}return e},Z=e=>{e?null==w||w():null==x||x()};return t(ss,{children:t(Kd,{enabled:!A&&!o,isOpen:M,renderElement:()=>t(ps,Object.assign({className:a,"data-testid":l,id:s,ref:z,tabIndex:-1,onFocus:q,onBlur:U,$focused:H,$disabled:o,$readOnly:A,$error:i},{children:t(qs,Object.assign({ref:N,disabled:o,expanded:M,listboxId:I,readOnly:A,variant:j},{children:t(Qs,Object.assign({ref:W},{children:R?O?O(R):t(Gs,Object.assign({truncateType:F,$variant:j},{children:J(v?v(R):h?h(R):R.toString())})):t(Ks,Object.assign({truncateType:F,$variant:j},{children:n}))}))}))})),renderDropdown:({elementWidth:e})=>t(Ns,{listboxId:I,listItems:r,onSelectItem:Y,onDismiss:V,valueExtractor:h,listExtractor:g,enableSearch:c,searchPlaceholder:d,searchFunction:u,selectedItems:R?[R]:[],onRetry:S,itemsLoadState:$,itemTruncationType:F,renderListItem:D,hideNoResultsDisplay:E,renderCustomCallToAction:B,variant:j,width:e}),onOpen:()=>{P(!0),Z(!0),L(!0)},onClose:e=>{P(!1),Z(!1),"click"!==e&&(L(!1),null==k||k())},onDismiss:()=>{N.current.focus(),P(!1),Z(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,zIndex:C})})},tf={Default:d.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=Er(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(_l,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Ml,Object.assign({},u)),t("span",{children:o})]}))})),Small:d.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=Er(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(_l,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Ml,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},nf=O.input`
    ${Or("Body","regular")}
    color: ${jr.Neutral[1]};

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
        color: ${jr.Neutral[3]};
    }

    ${e=>"number"===e.type?D`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?D`
                cursor: not-allowed;
            `:void 0}
`,rf=O.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${jr.Neutral[3]};
    background-color: transparent;
    border: none;
`,of=O(P)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,af=O.div`
    display: flex;
    width: 100%;
`,lf=d.forwardRef(((r,o)=>{var{value:i,spacing:a,type:l,error:s,disabled:c,readOnly:u,onChange:d,onClear:p,allowClear:h=!1,className:m,styleType:g="bordered"}=r,v=Er(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=f();F(o,(()=>y.current),[]);const b=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,o=t(r),i=r.substring(0,n.selectionEnd),a=t(i),l=i.length-a.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:o,updateCaretPosition:()=>{n.value=o,n.setSelectionRange(s,s)}}}}({ref:y,formatter:e=>Pr.transformWithSpaces(e,a)}),w=e=>{d&&(S()?$(e):d(e))},x=()=>{p&&p(),y&&y.current&&y.current.focus()},S=()=>"tel"===l&&a,$=e=>{const{nextValue:t,updateCaretPosition:n}=b(),r=t.replace(/\s/g,"");e.target.value=r,d(e),n()},O=i?(e=>e?S()?Pr.transformWithSpaces(e,a):e:"")(i):i,D=()=>e(n,{children:[t(nf,Object.assign({"data-testid":"input",ref:y,disabled:c,value:O,onChange:w,type:l,readOnly:u},v)),h&&!c&&!u&&!!i&&t(rf,Object.assign({onClick:x,type:"button"},{children:t(of,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===g?t(af,Object.assign({className:m},{children:D()})):t(hs,Object.assign({$disabled:c,$error:s,$readOnly:u,className:m},{children:D()}))})})),sf=O.nav`
    display: flex;
`,cf=O.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${Ol.tablet} {
        align-self: center;
    }
`,uf=O.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,df=O(Cs)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${jr.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${jr.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${jr.Accent.Light[1]};
    }
`,ff=O(Cs)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${jr.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${jr.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${jr.Accent.Light[1]};
    }
    ${e=>"left"===e.$position?D`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:D`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${Ol.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,pf=O(tf.Default)`
    background: ${e=>e.$selected?jr.Primary:jr.Neutral[8]};
    border: 1px solid
        ${e=>e.$selected?jr.Primary:jr.Neutral[5]};
    color: ${e=>e.$selected?jr.Neutral[8]:jr.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${e=>e.$selected?jr.Neutral[8]:jr.Neutral[1]};
        ${e=>e.$selected?D`
                    ${Or("Body",700)};
                `:D`
                    ${Or("Body",400)};
                `}
    }
    :hover {
        box-shadow: none;

        background: ${e=>e.$selected?jr.Primary:jr.Accent.Light[5]};
        border: 1px solid
            ${e=>e.$selected?jr.Primary:jr.Accent.Light[5]};
        span {
            color: ${e=>e.$selected?jr.Neutral[8]:jr.Primary};
            ${e=>e.$selected?D`
                        ${Or("Body",700)};
                    `:D`
                        ${Or("Body",600)};
                    `}
        }
    }

    :active,
    :focus {
        background: ${e=>e.$selected?jr.Primary:jr.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${jr.Accent.Light[1]};
        span {
            color: ${e=>e.$selected?jr.Neutral[8]:jr.Primary};

            ${e=>e.$selected?D`
                        ${Or("Body",700)};
                    `:D`
                        ${Or("Body",400)};
                    `}
        }
    }
`;O(Cs)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${jr.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${jr.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${jr.Accent.Light[1]};
    }
`;const hf=O.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,mf=O.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${jr.Neutral[1]};

    display: flex;
    justify-content: center;
`,gf=O(Ar.Body)`
    white-space: nowrap;
`,vf=O(Ar.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,yf=O(lf)`
    ${Or("Body",400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${jr.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${Or("XSmall",400)};
        }
    }
`,bf=O.div`
    ${Or("XSmall",400)};

    background-color: ${jr.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${jr.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,wf=O.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,xf=d.forwardRef((({id:n,"data-testid":u,className:d,pageSize:f=10,totalItems:h,activePage:m,pageSizeOptions:g=Sf,showFirstAndLastNav:v,showPageSizeChanger:b=!1,onPageChange:w,onPageSizeChange:x},S)=>{const $=Y.useMediaQuery({maxWidth:$l.mobileL}),F=g,[O,D]=p(!1),[E,B]=p(!1),[k,j]=p(""),[A,T]=p(F&&F.length>=1?F[0]:null),[C,R]=p(!$&&b&&A?A.value:f),_=Math.ceil(h/C),M=1===m,P=m===_,H=m>1?()=>U(1):void 0,L=m<_?()=>U(_):void 0,I=m>1?()=>U(m-1):void 0,z=m<_?()=>U(parseInt(m.toString())+1):void 0,N=e=>e?()=>ee():()=>G(),W=e=>e?()=>te():()=>K();y((()=>{m&&V(m)}),[m]),y((()=>{var e;R(f),T(null!==(e=F.find((e=>e.value===f)))&&void 0!==e?e:null)}),[f]);const V=e=>{j(e.toString())},q=()=>{D(!1),B(!1)},U=e=>{w&&(w(e),V(e))},J=()=>{const e=Math.min(_,m+5);U(e),V(e),D(!0),B(!1)},Z=()=>{const e=Math.max(1,m-5);U(e),V(e),D(!1),B(!0)},X=e=>{const t=e.target.value;if(void 0===t||0===t.length)j("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));V(Math.max(1,Math.min(_,e)))}else j(t.replace(/[^0-9]/g,""))},Q=e=>{e.preventDefault(),k&&w(parseInt(k))},G=()=>{D(!0)},K=()=>{D(!1)},ee=()=>{B(!0)},te=()=>{B(!1)},ne=(n,i,a)=>e(hf,{children:[t(df,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":n?"Previous 5 pages":"Next 5 pages",onMouseOver:N(n),onMouseOut:W(n),onFocus:N(n),onBlur:W(n),onClick:n?Z:J},{children:t(n&&E?r:i&&O?o:c,{"aria-hidden":!0})})),n&&E&&t(bf,{children:"Previous 5 pages"}),i&&O&&t(bf,{children:"Next 5 pages"})]},a);return e(sf,Object.assign({className:d,ref:S,id:n||"pagination-wrapper","data-testid":u||"pagination","aria-label":"Pagination"},{children:[t(cf,{children:e(uf,{children:[v&&t(ff,Object.assign({onClick:H,disabled:M,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:t(a,{"aria-hidden":!0})})),t(ff,Object.assign({onClick:I,disabled:M,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:t(i,{"aria-hidden":!0})})),$?e(mf,{children:[t("form",Object.assign({onSubmit:Q},{children:t(yf,{value:k,onChange:X,autoComplete:"off",type:"numeric",id:(n||"pagination")+"-input","data-testid":(u||"pagination")+"-input"})})),t(vf,{children:"/"}),t(gf,{children:_})]}):[...Array(_)].map(((e,n)=>{const r=n+1,o=_-5,i=m===r;if(_<=7)return t(pf,Object.assign({onClick:()=>U(r),$selected:i,"aria-label":"Page "+r,"aria-current":!!i&&"page",onMouseOver:q,onFocus:q},{children:r}),r);const a=m+1>5&&2===r,l=m-1<=o&&r===_-1-1;return a||l?ne(a,l,r):r<=5&&m+1<=5||r<=1||r===m||r<=m+1&&r>=m-1-1||r>o&&m-1>o||r>_-1?t(pf,Object.assign({onClick:()=>U(r),$selected:i,"aria-label":"Page "+r,"aria-current":!!i&&"page",onMouseOver:q,onFocus:q},{children:r}),r):null})),t(ff,Object.assign({onClick:z,disabled:P,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:t(s,{"aria-hidden":!0})})),v&&t(ff,Object.assign({onClick:L,disabled:P,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:t(l,{"aria-hidden":!0})}))]})}),b&&!$&&t(wf,{children:t(ef,{options:F,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:A,onSelectOption:e=>{T(e);const t=e.value,n=Math.ceil(h/t);R(t);x&&x(m>=n?n:m,t)}})})]}))})),Sf=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}];export{xf as Pagination};
//# sourceMappingURL=index.js.map
