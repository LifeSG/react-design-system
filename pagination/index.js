import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import{Chevron2LeftIcon as r}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as o}from"@lifesg/react-icons/chevron-2-right";import{ChevronLeftIcon as i}from"@lifesg/react-icons/chevron-left";import{ChevronLineLeftIcon as a}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as l}from"@lifesg/react-icons/chevron-line-right";import{ChevronRightIcon as s}from"@lifesg/react-icons/chevron-right";import{EllipsisHorizontalIcon as c}from"@lifesg/react-icons/ellipsis-horizontal";import*as u from"react";import d,{useRef as f,useState as h,isValidElement as p,createRef as m,cloneElement as g,PureComponent as v,useEffect as y,useLayoutEffect as b,useCallback as x,useMemo as S,createElement as w,forwardRef as $,useContext as F,useImperativeHandle as B}from"react";import T,{css as O,useTheme as I,keyframes as D}from"styled-components";import{ExternalIcon as C}from"@lifesg/react-icons/external";import k,{findDOMNode as H}from"react-dom";import{ExclamationCircleFillIcon as E}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as j}from"@lifesg/react-icons/square";import{SquareTickFillIcon as z}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as R}from"@lifesg/react-icons/tick";import{CrossIcon as _}from"@lifesg/react-icons/cross";import{MagnifierIcon as M}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as A}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as P}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as L,useFloating as W,autoUpdate as N,offset as V,flip as Y,shift as U,limitShift as G,size as q,useTransitionStyles as J,useClick as Z,useDismiss as X,useInteractions as Q,FloatingPortal as K,FloatingFocusManager as ee}from"@floating-ui/react";var te="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ne(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var re,oe={exports:{}};re=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),l=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),s=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="<<anonymous>>",d={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:p(c),arrayOf:function(e){return p((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l))return new h("Invalid "+o+" `"+i+"` of type `"+y(l)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<l.length;s++){var c=e(l,s,r,o,i+"["+s+"]",a);if(c instanceof Error)return c}return null}))},element:p((function(t,n,r,o,i){var a=t[n];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+y(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||u;return new h("Invalid "+o+" `"+i+"` of type `"+((l=t[n]).constructor&&l.constructor.name?l.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var l;return null}))},node:p((function(e,t,n,r,o){return v(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var s=t[n],c=y(s);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in s)if(l(s,u)){var d=e(s,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,n,r,o,i){for(var a=t[n],l=0;l<e.length;l++)if(f(a,e[l]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===b(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+s+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(n)+" at index "+t+"."),c}return p((function(t,n,r,o,i){for(var s=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,o,i,a);if(null==u)return null;u.data&&l(u.data,"expectedType")&&s.push(u.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(s.length>0?", expected one of type ["+s.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,r,o,i){var l=t[n],s=y(l);if("object"!==s)return new h("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return g(r,o,i,c,b(u));var d=u(l,c,r,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return p((function(t,n,r,o,s){var c=t[n],u=y(c);if("object"!==u)return new h("Invalid "+o+" `"+s+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var p=e[f];if(l(e,f)&&"function"!=typeof p)return g(r,o,s,f,b(p));if(!p)return new h("Invalid "+o+" `"+s+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(c,f,r,o,s+"."+f,a);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var n={},o=0;function i(i,l,s,c,d,f,p){if(c=c||u,f=f||s,p!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+s;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==l[s]?i?null===l[s]?new h("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(l,s,c,d,f)}var l=i.bind(null,!1);return l.isRequired=i.bind(null,!0),l}function m(e){return p((function(t,n,r,o,i,a){var l=t[n];return y(l)!==e?new h("Invalid "+o+" `"+i+"` of type `"+b(l)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function b(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,d.checkPropTypes=s,d.resetWarningCache=s.resetWarningCache,d.PropTypes=d,d}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case c:case u:case o:case a:case i:case f:return h;default:var g=h&&h.$$typeof;switch(g){case s:case d:case m:case p:case l:return g;default:return t}}case r:return t}}}var S=c,w=u,$=s,F=l,B=n,T=d,O=o,I=m,D=p,C=r,k=a,H=i,E=f,j=!1;function z(e){return x(e)===u}t.AsyncMode=S,t.ConcurrentMode=w,t.ContextConsumer=$,t.ContextProvider=F,t.Element=B,t.ForwardRef=T,t.Fragment=O,t.Lazy=I,t.Memo=D,t.Portal=C,t.Profiler=k,t.StrictMode=H,t.Suspense=E,t.isAsyncMode=function(e){return j||(j=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),z(e)||x(e)===c},t.isConcurrentMode=z,t.isContextConsumer=function(e){return x(e)===s},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===l||e.$$typeof===s||e.$$typeof===d||e.$$typeof===v||e.$$typeof===y||e.$$typeof===b||e.$$typeof===g)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),l=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),s=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,s.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,l.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var s=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],l=r[1],s=d();return(0,o.useEffect)((function(){if(s){var e=n();return l(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),h=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(s),p=d();return(0,o.useEffect)((function(){p&&n&&n(h)}),[h]),(0,o.useEffect)((function(){return function(){s&&s.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var ie=oe.exports=re(d),ae=function(e,t){return ae=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ae(e,t)};var le=function(){return le=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},le.apply(this,arguments)};var se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ce=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ue="object"==typeof se&&se&&se.Object===Object&&se,de="object"==typeof self&&self&&self.Object===Object&&self,fe=ue||de||Function("return this")(),he=fe,pe=function(){return he.Date.now()},me=/\s/;var ge=function(e){for(var t=e.length;t--&&me.test(e.charAt(t)););return t},ve=/^\s+/;var ye=function(e){return e?e.slice(0,ge(e)+1).replace(ve,""):e},be=fe.Symbol,xe=be,Se=Object.prototype,we=Se.hasOwnProperty,$e=Se.toString,Fe=xe?xe.toStringTag:void 0;var Be=function(e){var t=we.call(e,Fe),n=e[Fe];try{e[Fe]=void 0;var r=!0}catch(e){}var o=$e.call(e);return r&&(t?e[Fe]=n:delete e[Fe]),o},Te=Object.prototype.toString;var Oe=Be,Ie=function(e){return Te.call(e)},De=be?be.toStringTag:void 0;var Ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":De&&De in Object(e)?Oe(e):Ie(e)},ke=function(e){return null!=e&&"object"==typeof e};var He=ye,Ee=ce,je=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==Ce(e)},ze=/^[-+]0x[0-9a-f]+$/i,Re=/^0b[01]+$/i,_e=/^0o[0-7]+$/i,Me=parseInt;var Ae=ce,Pe=pe,Le=function(e){if("number"==typeof e)return e;if(je(e))return NaN;if(Ee(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ee(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=He(e);var n=Re.test(e);return n||_e.test(e)?Me(e.slice(2),n?2:8):ze.test(e)?NaN:+e},We=Math.max,Ne=Math.min;var Ve=function(e,t,n){var r,o,i,a,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=i}function m(){var e=Pe();if(p(e))return g(e);l=setTimeout(m,function(e){var n=t-(e-s);return d?Ne(n,i-(e-c)):n}(e))}function g(e){return l=void 0,f&&r?h(e):(r=o=void 0,a)}function v(){var e=Pe(),n=p(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(m,t),u?h(e):a}(s);if(d)return clearTimeout(l),l=setTimeout(m,t),h(s)}return void 0===l&&(l=setTimeout(m,t)),a}return t=Le(t)||0,Ae(n)&&(u=!!n.leading,i=(d="maxWait"in n)?We(Le(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},v.flush=function(){return void 0===l?a:g(Pe())},v},Ye=Ve,Ue=ce;var Ge=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ue(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Ye(e,t,{leading:r,maxWait:t,trailing:o})},qe=function(e,t,n,r){switch(t){case"debounce":return Ve(e,n,r);case"throttle":return Ge(e,n,r);default:return e}},Je=function(e){return"function"==typeof e},Ze=function(){return"undefined"==typeof window},Xe=function(e){return e instanceof Element||e instanceof HTMLDocument},Qe=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&Je(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Ze()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Ze())return null;if(t)return document.querySelector(t);if(r&&Xe(r))return r;if(n.targetRef&&Xe(n.targetRef.current))return n.targetRef.current;var o=H(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var s=Qe(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!Ze()&&s({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Je(t)?"renderProp":Je(r)?"childFunction":p(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,l=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=m(),n.observableElement=null,Ze()||(n.resizeHandler=qe(n.createResizeHandler,o,a,l),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ae(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Ze()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,o=t.nodeType,i=void 0===o?"div":o,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=r)(l);case"child":if((e=r).type&&"string"==typeof e.type){var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(l,["targetRef"]);return g(e,s)}return g(e,l);case"childArray":return(e=r).map((function(e){return!!e&&g(e,l)}));default:return u.createElement(i,null)}}}(v);var Ke=Ze()?y:b;function et(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,l=e.handleWidth,s=void 0===l||l,c=e.handleHeight,u=void 0===c||c,d=e.targetRef,p=e.observerOptions,m=e.onResize,g=f(n),v=f(null),y=null!=d?d:v,b=f(),x=h({width:void 0,height:void 0}),S=x[0],w=x[1];return Ke((function(){if(!Ze()){var e=Qe(m,w,s,u);b.current=qe((function(t){(s||u)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!Ze()&&e({width:r,height:o}),g.current=!1}))}),r,i,a);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,a,s,u,m,p,y.current]),le({ref:y},S)}const tt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},nt={D1:{fontFamily:tt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:tt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:tt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:tt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:tt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:tt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:tt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:tt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:tt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:tt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:tt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:tt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:tt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:tt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},rt={D1:{fontFamily:tt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:tt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:tt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:tt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:tt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:tt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:tt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:tt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:tt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:tt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:tt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:tt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:tt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:tt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},ot={D1:{fontFamily:tt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:tt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:tt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:tt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:tt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:tt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:tt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:tt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:tt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:tt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:tt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:tt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:tt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:tt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var it=Array.isArray,at="object"==typeof te&&te&&te.Object===Object&&te,lt=at,st="object"==typeof self&&self&&self.Object===Object&&self,ct=lt||st||Function("return this")(),ut=ct.Symbol,dt=ut,ft=Object.prototype,ht=ft.hasOwnProperty,pt=ft.toString,mt=dt?dt.toStringTag:void 0;var gt=function(e){var t=ht.call(e,mt),n=e[mt];try{e[mt]=void 0;var r=!0}catch(e){}var o=pt.call(e);return r&&(t?e[mt]=n:delete e[mt]),o},vt=Object.prototype.toString;var yt=gt,bt=function(e){return vt.call(e)},xt=ut?ut.toStringTag:void 0;var St=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":xt&&xt in Object(e)?yt(e):bt(e)};var wt=function(e){return null!=e&&"object"==typeof e},$t=St,Ft=wt;var Bt=function(e){return"symbol"==typeof e||Ft(e)&&"[object Symbol]"==$t(e)},Tt=it,Ot=Bt,It=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dt=/^\w*$/;var Ct=function(e,t){if(Tt(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Ot(e))||(Dt.test(e)||!It.test(e)||null!=t&&e in Object(t))};var kt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ht=St,Et=kt;var jt,zt=function(e){if(!Et(e))return!1;var t=Ht(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Rt=ct["__core-js_shared__"],_t=(jt=/[^.]+$/.exec(Rt&&Rt.keys&&Rt.keys.IE_PROTO||""))?"Symbol(src)_1."+jt:"";var Mt=function(e){return!!_t&&_t in e},At=Function.prototype.toString;var Pt=function(e){if(null!=e){try{return At.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Lt=zt,Wt=Mt,Nt=kt,Vt=Pt,Yt=/^\[object .+?Constructor\]$/,Ut=Function.prototype,Gt=Object.prototype,qt=Ut.toString,Jt=Gt.hasOwnProperty,Zt=RegExp("^"+qt.call(Jt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Xt=function(e){return!(!Nt(e)||Wt(e))&&(Lt(e)?Zt:Yt).test(Vt(e))},Qt=function(e,t){return null==e?void 0:e[t]};var Kt=function(e,t){var n=Qt(e,t);return Xt(n)?n:void 0},en=Kt(Object,"create"),tn=en;var nn=function(){this.__data__=tn?tn(null):{},this.size=0};var rn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},on=en,an=Object.prototype.hasOwnProperty;var ln=function(e){var t=this.__data__;if(on){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return an.call(t,e)?t[e]:void 0},sn=en,cn=Object.prototype.hasOwnProperty;var un=en;var dn=nn,fn=rn,hn=ln,pn=function(e){var t=this.__data__;return sn?void 0!==t[e]:cn.call(t,e)},mn=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=un&&void 0===t?"__lodash_hash_undefined__":t,this};function gn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}gn.prototype.clear=dn,gn.prototype.delete=fn,gn.prototype.get=hn,gn.prototype.has=pn,gn.prototype.set=mn;var vn=gn;var yn=function(){this.__data__=[],this.size=0};var bn=function(e,t){return e===t||e!=e&&t!=t},xn=bn;var Sn=function(e,t){for(var n=e.length;n--;)if(xn(e[n][0],t))return n;return-1},wn=Sn,$n=Array.prototype.splice;var Fn=Sn;var Bn=Sn;var Tn=Sn;var On=yn,In=function(e){var t=this.__data__,n=wn(t,e);return!(n<0)&&(n==t.length-1?t.pop():$n.call(t,n,1),--this.size,!0)},Dn=function(e){var t=this.__data__,n=Fn(t,e);return n<0?void 0:t[n][1]},Cn=function(e){return Bn(this.__data__,e)>-1},kn=function(e,t){var n=this.__data__,r=Tn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Hn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Hn.prototype.clear=On,Hn.prototype.delete=In,Hn.prototype.get=Dn,Hn.prototype.has=Cn,Hn.prototype.set=kn;var En=Hn,jn=Kt(ct,"Map"),zn=vn,Rn=En,_n=jn;var Mn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var An=function(e,t){var n=e.__data__;return Mn(t)?n["string"==typeof t?"string":"hash"]:n.map},Pn=An;var Ln=An;var Wn=An;var Nn=An;var Vn=function(e,t){var n=Nn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Yn=function(){this.size=0,this.__data__={hash:new zn,map:new(_n||Rn),string:new zn}},Un=function(e){var t=Pn(this,e).delete(e);return this.size-=t?1:0,t},Gn=function(e){return Ln(this,e).get(e)},qn=function(e){return Wn(this,e).has(e)},Jn=Vn;function Zn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Zn.prototype.clear=Yn,Zn.prototype.delete=Un,Zn.prototype.get=Gn,Zn.prototype.has=qn,Zn.prototype.set=Jn;var Xn=Zn,Qn=Xn;function Kn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Kn.Cache||Qn),n}Kn.Cache=Qn;var er=Kn;var tr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nr=/\\(\\)?/g,rr=function(e){var t=er(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tr,(function(e,n,r,o){t.push(r?o.replace(nr,"$1"):n||e)})),t}));var or=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},ir=it,ar=Bt,lr=ut?ut.prototype:void 0,sr=lr?lr.toString:void 0;var cr=function e(t){if("string"==typeof t)return t;if(ir(t))return or(t,e)+"";if(ar(t))return sr?sr.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ur=cr;var dr=it,fr=Ct,hr=rr,pr=function(e){return null==e?"":ur(e)};var mr=function(e,t){return dr(e)?e:fr(e,t)?[e]:hr(pr(e))},gr=Bt;var vr=function(e){if("string"==typeof e||gr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},yr=mr,br=vr;var xr=function(e,t){for(var n=0,r=(t=yr(t,e)).length;null!=e&&n<r;)e=e[br(t[n++])];return n&&n==r?e:void 0},Sr=xr;var wr=function(e,t,n){var r=null==e?void 0:Sr(e,t);return void 0===r?n:r},$r=ne(wr);const Fr=(e,t,n)=>t?$r(n,t)||$r(e,t):n||e,Br=(e,t)=>{const n=t||e.defaultValue;return $r(e.collections,n)};var Tr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Tr||(Tr={}));const Or={collections:{base:nt,oneservice:ot,plusJakartaSans:rt},defaultValue:"base"},Ir=e=>t=>{const n=t.theme,r=Br(Or,n[Tr.textStyleScheme]);return n.options&&n.options.textStyle?Fr(r,e,n.options.textStyle):Fr(r,e)},Dr={D1:{fontFamily:Ir("D1.fontFamily"),fontSize:Ir("D1.fontSize"),fontWeight:Ir("D1.fontWeight"),lineHeight:Ir("D1.lineHeight"),letterSpacing:Ir("D1.letterSpacing"),fontVariant:Ir("D1.fontVariant")},D2:{fontFamily:Ir("D2.fontFamily"),fontSize:Ir("D2.fontSize"),fontWeight:Ir("D2.fontWeight"),lineHeight:Ir("D2.lineHeight"),letterSpacing:Ir("D2.letterSpacing"),fontVariant:Ir("D2.fontVariant")},D3:{fontFamily:Ir("D3.fontFamily"),fontSize:Ir("D3.fontSize"),fontWeight:Ir("D3.fontWeight"),lineHeight:Ir("D3.lineHeight"),letterSpacing:Ir("D3.letterSpacing"),fontVariant:Ir("D3.fontVariant")},D4:{fontFamily:Ir("D4.fontFamily"),fontSize:Ir("D4.fontSize"),fontWeight:Ir("D4.fontWeight"),lineHeight:Ir("D4.lineHeight"),letterSpacing:Ir("D4.letterSpacing"),fontVariant:Ir("D4.fontVariant")},DBody:{fontFamily:Ir("DBody.fontFamily"),fontSize:Ir("DBody.fontSize"),fontWeight:Ir("DBody.fontWeight"),lineHeight:Ir("DBody.lineHeight"),letterSpacing:Ir("DBody.letterSpacing"),fontVariant:Ir("DBody.fontVariant")},H1:{fontFamily:Ir("H1.fontFamily"),fontSize:Ir("H1.fontSize"),fontWeight:Ir("H1.fontWeight"),lineHeight:Ir("H1.lineHeight"),letterSpacing:Ir("H1.letterSpacing"),fontVariant:Ir("H1.fontVariant")},H2:{fontFamily:Ir("H2.fontFamily"),fontSize:Ir("H2.fontSize"),fontWeight:Ir("H2.fontWeight"),lineHeight:Ir("H2.lineHeight"),letterSpacing:Ir("H2.letterSpacing"),fontVariant:Ir("H2.fontVariant")},H3:{fontFamily:Ir("H3.fontFamily"),fontSize:Ir("H3.fontSize"),fontWeight:Ir("H3.fontWeight"),lineHeight:Ir("H3.lineHeight"),letterSpacing:Ir("H3.letterSpacing"),fontVariant:Ir("H3.fontVariant")},H4:{fontFamily:Ir("H4.fontFamily"),fontSize:Ir("H4.fontSize"),fontWeight:Ir("H4.fontWeight"),lineHeight:Ir("H4.lineHeight"),letterSpacing:Ir("H4.letterSpacing"),fontVariant:Ir("H4.fontVariant")},H5:{fontFamily:Ir("H5.fontFamily"),fontSize:Ir("H5.fontSize"),fontWeight:Ir("H5.fontWeight"),lineHeight:Ir("H5.lineHeight"),letterSpacing:Ir("H5.letterSpacing"),fontVariant:Ir("H5.fontVariant")},H6:{fontFamily:Ir("H6.fontFamily"),fontSize:Ir("H6.fontSize"),fontWeight:Ir("H6.fontWeight"),lineHeight:Ir("H6.lineHeight"),letterSpacing:Ir("H6.letterSpacing"),fontVariant:Ir("H6.fontVariant")},Body:{fontFamily:Ir("Body.fontFamily"),fontSize:Ir("Body.fontSize"),fontWeight:Ir("Body.fontWeight"),lineHeight:Ir("Body.lineHeight"),letterSpacing:Ir("Body.letterSpacing"),fontVariant:Ir("Body.fontVariant")},BodySmall:{fontFamily:Ir("BodySmall.fontFamily"),fontSize:Ir("BodySmall.fontSize"),fontWeight:Ir("BodySmall.fontWeight"),lineHeight:Ir("BodySmall.lineHeight"),letterSpacing:Ir("BodySmall.letterSpacing"),fontVariant:Ir("BodySmall.fontVariant")},XSmall:{fontFamily:Ir("XSmall.fontFamily"),fontSize:Ir("XSmall.fontSize"),fontWeight:Ir("XSmall.fontWeight"),lineHeight:Ir("XSmall.lineHeight"),letterSpacing:Ir("XSmall.letterSpacing"),fontVariant:Ir("XSmall.fontVariant")}},Cr=[tt.OpenSans,tt.PlusJakartaSans],kr=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Hr=(e,t)=>n=>{var r;const o=Dr[e].fontFamily(n),i=Dr[e].fontWeight(n),a=Cr.find((e=>Object.values(e).includes(o)));return a?O`
                font-family: ${kr(a,t)||kr(a,i)||o};
                font-weight: normal !important;
            `:O`
            font-family: ${o};
            font-weight: ${null!==(r=Er(t)||i)&&void 0!==r?r:"normal"};
        `},Er=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},jr=e=>{if(e>0)return O`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},zr=(e,t,n=!1)=>r=>{const o=Dr[e],i=o.fontSize(r);return O`
            ${Hr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${O`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Rr=(e=!1,t=!1,n=void 0)=>t?O`
            display: block;
            ${jr(n)}
        `:e?O`
            display: inline;
        `:O`
            display: block;
            ${jr(n)}
        `;function _r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const Mr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ar=e=>t=>{const n=t.theme,r=Br(Mr,n[Tr.colorScheme]);return n.options&&n.options.color?Fr(r,e,n.options.color):Fr(r,e)},Pr={Brand:{1:Ar("Brand.1"),2:Ar("Brand.2"),3:Ar("Brand.3"),4:Ar("Brand.4"),5:Ar("Brand.5"),6:Ar("Brand.6")},Primary:Ar("Primary"),PrimaryDark:Ar("PrimaryDark"),Secondary:Ar("Secondary"),Accent:{Light:{1:Ar("Accent.Light.1"),2:Ar("Accent.Light.2"),3:Ar("Accent.Light.3"),4:Ar("Accent.Light.4"),5:Ar("Accent.Light.5"),6:Ar("Accent.Light.6")},Dark:{1:Ar("Accent.Dark.1"),2:Ar("Accent.Dark.2"),3:Ar("Accent.Dark.3")}},Neutral:{1:Ar("Neutral.1"),2:Ar("Neutral.2"),3:Ar("Neutral.3"),4:Ar("Neutral.4"),5:Ar("Neutral.5"),6:Ar("Neutral.6"),7:Ar("Neutral.7"),8:Ar("Neutral.8")},Validation:{Green:{Text:Ar("Validation.Green.Text"),Icon:Ar("Validation.Green.Icon"),Border:Ar("Validation.Green.Border"),Background:Ar("Validation.Green.Background")},Orange:{Text:Ar("Validation.Orange.Text"),Icon:Ar("Validation.Orange.Icon"),Border:Ar("Validation.Orange.Border"),Background:Ar("Validation.Orange.Background"),Badge:Ar("Validation.Orange.Badge")},Red:{Text:Ar("Validation.Red.Text"),Icon:Ar("Validation.Red.Icon"),Border:Ar("Validation.Red.Border"),Background:Ar("Validation.Red.Background")},Blue:{Text:Ar("Validation.Blue.Text"),Icon:Ar("Validation.Blue.Icon"),Border:Ar("Validation.Blue.Border"),Background:Ar("Validation.Blue.Background")}},Shadow:{Accent:Ar("Shadow.Accent"),Red:Ar("Shadow.Red"),Elevation:Ar("Shadow.Elevation")}};var Lr;!function(e){e.D1=T.h1`
        ${e=>O`
                ${zr("D1",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=T.h1`
        ${e=>O`
                ${zr("D2",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=T.h1`
        ${e=>O`
                ${zr("D3",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=T.h1`
        ${e=>O`
                ${zr("D4",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=T.h1`
        ${e=>O`
                ${zr("DBody",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=T.h1`
        ${e=>O`
                ${zr("H1",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=T.h2`
        ${e=>O`
                ${zr("H2",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=T.h3`
        ${e=>O`
                ${zr("H3",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=T.h4`
        ${e=>O`
                ${zr("H4",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=T.h5`
        ${e=>O`
                ${zr("H5",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=T.h6`
        ${e=>O`
                ${zr("H6",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=T.p`
        ${e=>O`
                ${zr("Body",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=T.p`
        ${e=>O`
                ${zr("BodySmall",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=T.span`
        ${e=>O`
                ${zr("XSmall",e.weight,e.paragraph)}
                color: ${Pr.Neutral[1]};
                ${Rr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Vr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Vr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Lr||(Lr={}));const Wr=T.a`
    ${e=>O`
            ${zr(e.textStyle,e.weight)}
            color: ${Pr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Pr.Secondary};

                svg {
                    color: ${Pr.Secondary};
                }
            }
        `}
`,Nr=T(C)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Vr=n=>{var{external:r=!1,children:o}=n,i=_r(n,["external","children"]);return e(Wr,Object.assign({},i,{children:[o,r&&t(Nr,{})]}))};var Yr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Yr||(Yr={}));const Ur={[Tr.colorScheme]:"base",[Tr.textStyleScheme]:"base",[Tr.designTokenScheme]:"base",[Tr.resourceScheme]:"base"};var Gr;Tr.colorScheme,Tr.textStyleScheme,Tr.designTokenScheme,Tr.resourceScheme,Tr.colorScheme,Tr.textStyleScheme,Tr.designTokenScheme,Tr.resourceScheme,Tr.colorScheme,Tr.textStyleScheme,Tr.designTokenScheme,Tr.resourceScheme,Tr.colorScheme,Tr.textStyleScheme,Tr.designTokenScheme,Tr.resourceScheme,Tr.colorScheme,Tr.textStyleScheme,Tr.designTokenScheme,Tr.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Gr||(Gr={}));const qr=O`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Jr=T.div`
    ${e=>zr("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?Pr.Primary:Pr.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&qr}
`,Zr=T.div`
    color: ${Pr.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&qr}

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${zr("BodySmall","semibold")}
                `:O`
                    ${zr("Body","regular")}
                `}
`,Xr=T.span`
    ${e=>zr("small"===e.$variant?"BodySmall":"Body","semibold")}
`,Qr=T.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${Jr} {
                        display: inline;
                    }

                    ${Zr} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Kr=T.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,eo=T.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,to=({bold:r,displayType:o="inline",label:i,searchTerm:a,maxLines:l=2,selected:s,sublabel:c,truncationType:u="middle",variant:d})=>{const f=I()||Ur,h=Dr.Body.fontSize({theme:f}),p=Dr.Body.fontFamily({theme:f}),{ref:m,width:g}=et(),v=x((e=>{if("inline"!==o)return!1;return Gr.getTextWidth(e,`${h}rem '${p}'`)>g*l-50}),[g,o,h,p,l]),y=S((()=>v(i)),[v,i]),b=S((()=>c&&v(c)),[v,c]),w=y||b?"next-line":o,$=r=>{if(!a)return r;const o=a.toLowerCase().trim(),l=r.toLowerCase().indexOf(o),s=l+a.length;return-1===l?r:e(n,{children:[i.slice(0,l),t(Xr,Object.assign({$variant:d},{children:i.slice(l,s)})),i.slice(s)]})},F=r=>e(n,{children:[t(Kr,Object.assign({$maxLines:l,"aria-hidden":!0},{children:$(r)})),t(eo,Object.assign({$maxLines:l,"aria-hidden":!0},{children:$(r)}))]});return e(Qr,Object.assign({ref:m,$labelDisplayType:w},{children:[t(Jr,Object.assign({"aria-label":i,$bold:r,$maxLines:l,$selected:s,$truncateType:u,$variant:d},{children:"middle"===u&&y?F(i):$(i)})),c&&t(Zr,Object.assign({"aria-label":c,$maxLines:l,$truncateType:u,$labelDisplayType:o},{children:"middle"===u&&b?F(c):c}))]}))};var no=En;var ro=En,oo=jn,io=Xn;var ao=En,lo=function(){this.__data__=new no,this.size=0},so=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},co=function(e){return this.__data__.get(e)},uo=function(e){return this.__data__.has(e)},fo=function(e,t){var n=this.__data__;if(n instanceof ro){var r=n.__data__;if(!oo||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new io(r)}return n.set(e,t),this.size=n.size,this};function ho(e){var t=this.__data__=new ao(e);this.size=t.size}ho.prototype.clear=lo,ho.prototype.delete=so,ho.prototype.get=co,ho.prototype.has=uo,ho.prototype.set=fo;var po=ho;var mo=Xn,go=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},vo=function(e){return this.__data__.has(e)};function yo(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new mo;++t<n;)this.add(e[t])}yo.prototype.add=yo.prototype.push=go,yo.prototype.has=vo;var bo=yo,xo=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},So=function(e,t){return e.has(t)};var wo=function(e,t,n,r,o,i){var a=1&n,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=2&n?new bo:void 0;for(i.set(e,t),i.set(t,e);++d<l;){var p=e[d],m=t[d];if(r)var g=a?r(m,p,d,t,e,i):r(p,m,d,e,t,i);if(void 0!==g){if(g)continue;f=!1;break}if(h){if(!xo(t,(function(e,t){if(!So(h,t)&&(p===e||o(p,e,n,r,i)))return h.push(t)}))){f=!1;break}}else if(p!==m&&!o(p,m,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var $o=ct.Uint8Array,Fo=bn,Bo=wo,To=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Oo=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Io=ut?ut.prototype:void 0,Do=Io?Io.valueOf:void 0;var Co=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new $o(e),new $o(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Fo(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=To;case"[object Set]":var s=1&r;if(l||(l=Oo),e.size!=t.size&&!s)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=Bo(l(e),l(t),r,o,i,a);return a.delete(e),u;case"[object Symbol]":if(Do)return Do.call(e)==Do.call(t)}return!1};var ko=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},Ho=ko,Eo=it;var jo=function(e,t,n){var r=t(e);return Eo(e)?r:Ho(r,n(e))};var zo=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i},Ro=function(){return[]},_o=Object.prototype.propertyIsEnumerable,Mo=Object.getOwnPropertySymbols,Ao=Mo?function(e){return null==e?[]:(e=Object(e),zo(Mo(e),(function(t){return _o.call(e,t)})))}:Ro;var Po=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Lo=St,Wo=wt;var No=function(e){return Wo(e)&&"[object Arguments]"==Lo(e)},Vo=wt,Yo=Object.prototype,Uo=Yo.hasOwnProperty,Go=Yo.propertyIsEnumerable,qo=No(function(){return arguments}())?No:function(e){return Vo(e)&&Uo.call(e,"callee")&&!Go.call(e,"callee")},Jo={exports:{}};var Zo=function(){return!1};!function(e,t){var n=ct,r=Zo,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,l=(a?a.isBuffer:void 0)||r;e.exports=l}(Jo,Jo.exports);var Xo=Jo.exports,Qo=/^(?:0|[1-9]\d*)$/;var Ko=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Qo.test(e))&&e>-1&&e%1==0&&e<t};var ei=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},ti=St,ni=ei,ri=wt,oi={};oi["[object Float32Array]"]=oi["[object Float64Array]"]=oi["[object Int8Array]"]=oi["[object Int16Array]"]=oi["[object Int32Array]"]=oi["[object Uint8Array]"]=oi["[object Uint8ClampedArray]"]=oi["[object Uint16Array]"]=oi["[object Uint32Array]"]=!0,oi["[object Arguments]"]=oi["[object Array]"]=oi["[object ArrayBuffer]"]=oi["[object Boolean]"]=oi["[object DataView]"]=oi["[object Date]"]=oi["[object Error]"]=oi["[object Function]"]=oi["[object Map]"]=oi["[object Number]"]=oi["[object Object]"]=oi["[object RegExp]"]=oi["[object Set]"]=oi["[object String]"]=oi["[object WeakMap]"]=!1;var ii=function(e){return ri(e)&&ni(e.length)&&!!oi[ti(e)]};var ai=function(e){return function(t){return e(t)}},li={exports:{}};!function(e,t){var n=at,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(li,li.exports);var si=li.exports,ci=ii,ui=ai,di=si&&si.isTypedArray,fi=di?ui(di):ci,hi=Po,pi=qo,mi=it,gi=Xo,vi=Ko,yi=fi,bi=Object.prototype.hasOwnProperty;var xi=function(e,t){var n=mi(e),r=!n&&pi(e),o=!n&&!r&&gi(e),i=!n&&!r&&!o&&yi(e),a=n||r||o||i,l=a?hi(e.length,String):[],s=l.length;for(var c in e)!t&&!bi.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||vi(c,s))||l.push(c);return l},Si=Object.prototype;var wi=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Si)};var $i=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Fi=wi,Bi=$i,Ti=Object.prototype.hasOwnProperty;var Oi=zt,Ii=ei;var Di=function(e){return null!=e&&Ii(e.length)&&!Oi(e)},Ci=xi,ki=function(e){if(!Fi(e))return Bi(e);var t=[];for(var n in Object(e))Ti.call(e,n)&&"constructor"!=n&&t.push(n);return t},Hi=Di;var Ei=function(e){return Hi(e)?Ci(e):ki(e)},ji=jo,zi=Ao,Ri=Ei;var _i=function(e){return ji(e,Ri,zi)},Mi=Object.prototype.hasOwnProperty;var Ai=function(e,t,n,r,o,i){var a=1&n,l=_i(e),s=l.length;if(s!=_i(t).length&&!a)return!1;for(var c=s;c--;){var u=l[c];if(!(a?u in t:Mi.call(t,u)))return!1}var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<s;){var m=e[u=l[c]],g=t[u];if(r)var v=a?r(g,m,u,t,e,i):r(m,g,u,e,t,i);if(!(void 0===v?m===g||o(m,g,n,r,i):v)){h=!1;break}p||(p="constructor"==u)}if(h&&!p){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(e),i.delete(t),h},Pi=Kt(ct,"DataView"),Li=jn,Wi=Kt(ct,"Promise"),Ni=Kt(ct,"Set"),Vi=Kt(ct,"WeakMap"),Yi=St,Ui=Pt,Gi="[object Map]",qi="[object Promise]",Ji="[object Set]",Zi="[object WeakMap]",Xi="[object DataView]",Qi=Ui(Pi),Ki=Ui(Li),ea=Ui(Wi),ta=Ui(Ni),na=Ui(Vi),ra=Yi;(Pi&&ra(new Pi(new ArrayBuffer(1)))!=Xi||Li&&ra(new Li)!=Gi||Wi&&ra(Wi.resolve())!=qi||Ni&&ra(new Ni)!=Ji||Vi&&ra(new Vi)!=Zi)&&(ra=function(e){var t=Yi(e),n="[object Object]"==t?e.constructor:void 0,r=n?Ui(n):"";if(r)switch(r){case Qi:return Xi;case Ki:return Gi;case ea:return qi;case ta:return Ji;case na:return Zi}return t});var oa=po,ia=wo,aa=Co,la=Ai,sa=ra,ca=it,ua=Xo,da=fi,fa="[object Arguments]",ha="[object Array]",pa="[object Object]",ma=Object.prototype.hasOwnProperty;var ga=function(e,t,n,r,o,i){var a=ca(e),l=ca(t),s=a?ha:sa(e),c=l?ha:sa(t),u=(s=s==fa?pa:s)==pa,d=(c=c==fa?pa:c)==pa,f=s==c;if(f&&ua(e)){if(!ua(t))return!1;a=!0,u=!1}if(f&&!u)return i||(i=new oa),a||da(e)?ia(e,t,n,r,o,i):aa(e,t,s,n,r,o,i);if(!(1&n)){var h=u&&ma.call(e,"__wrapped__"),p=d&&ma.call(t,"__wrapped__");if(h||p){var m=h?e.value():e,g=p?t.value():t;return i||(i=new oa),o(m,g,n,r,i)}}return!!f&&(i||(i=new oa),la(e,t,n,r,o,i))},va=wt;var ya=function e(t,n,r,o,i){return t===n||(null==t||null==n||!va(t)&&!va(n)?t!=t&&n!=n:ga(t,n,r,o,e,i))},ba=po,xa=ya;var Sa=kt;var wa=function(e){return e==e&&!Sa(e)},$a=wa,Fa=Ei;var Ba=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Ta=function(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=Object(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){var s=(l=n[o])[0],c=e[s],u=l[1];if(a&&l[2]){if(void 0===c&&!(s in e))return!1}else{var d=new ba;if(r)var f=r(c,u,s,e,t,d);if(!(void 0===f?xa(u,c,3,r,d):f))return!1}}return!0},Oa=function(e){for(var t=Fa(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,$a(o)]}return t},Ia=Ba;var Da=mr,Ca=qo,ka=it,Ha=Ko,Ea=ei,ja=vr;var za=function(e,t){return null!=e&&t in Object(e)},Ra=function(e,t,n){for(var r=-1,o=(t=Da(t,e)).length,i=!1;++r<o;){var a=ja(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:!!(o=null==e?0:e.length)&&Ea(o)&&Ha(a,o)&&(ka(e)||Ca(e))};var _a=ya,Ma=wr,Aa=function(e,t){return null!=e&&Ra(e,t,za)},Pa=Ct,La=wa,Wa=Ba,Na=vr;var Va=xr;var Ya=function(e){return function(t){return null==t?void 0:t[e]}},Ua=function(e){return function(t){return Va(t,e)}},Ga=Ct,qa=vr;var Ja=function(e){var t=Oa(e);return 1==t.length&&t[0][2]?Ia(t[0][0],t[0][1]):function(n){return n===e||Ta(n,e,t)}},Za=function(e,t){return Pa(e)&&La(t)?Wa(Na(e),t):function(n){var r=Ma(n,e);return void 0===r&&r===t?Aa(n,e):_a(t,r,3)}},Xa=function(e){return e},Qa=it,Ka=function(e){return Ga(e)?Ya(qa(e)):Ua(e)};var el=function(e){return"function"==typeof e?e:null==e?Xa:"object"==typeof e?Qa(e)?Za(e[0],e[1]):Ja(e):Ka(e)},tl=el,nl=Di,rl=Ei;var ol=function(e){return function(t,n,r){var o=Object(t);if(!nl(t)){var i=tl(n);t=rl(t),n=function(e){return i(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[i?t[a]:a]:void 0}};var il=/\s/;var al=function(e){for(var t=e.length;t--&&il.test(e.charAt(t)););return t},ll=/^\s+/;var sl=function(e){return e?e.slice(0,al(e)+1).replace(ll,""):e},cl=kt,ul=Bt,dl=/^[-+]0x[0-9a-f]+$/i,fl=/^0b[01]+$/i,hl=/^0o[0-7]+$/i,pl=parseInt;var ml=function(e){if("number"==typeof e)return e;if(ul(e))return NaN;if(cl(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=cl(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=sl(e);var n=fl.test(e);return n||hl.test(e)?pl(e.slice(2),n?2:8):dl.test(e)?NaN:+e},gl=1/0;var vl=function(e){return e?(e=ml(e))===gl||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var yl=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1},bl=el,xl=function(e){var t=vl(e),n=t%1;return t==t?n?t-n:t:0},Sl=Math.max;var wl=ne(ol((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:xl(n);return o<0&&(o=Sl(r+o,0)),yl(e,bl(t),o)}))),$l=ya;var Fl=ne((function(e,t){return $l(e,t)}));function Bl(e){return()=>e}function Tl(e){e()}function Ol(e,t){return n=>e(t(n))}function Il(e,t){return()=>e(t)}function Dl(e){return void 0!==e}function Cl(){}function kl(e,t){return t(e),e}function Hl(e,t){return t(e)}function El(...e){return e}function jl(e,t){return e(1,t)}function zl(e,t){e(0,t)}function Rl(e){e(2)}function _l(e){return e(4)}function Ml(e,t){return jl(e,function(e,t){return n=>e(t,n)}(t,0))}function Al(e,t){const n=e(1,(e=>{n(),t(e)}));return n}function Pl(e){let t,n;return r=>o=>{t=o,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function Ll(e,t){return e===t}function Wl(e=Ll){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function Nl(e){return t=>n=>{e(n)&&t(n)}}function Vl(e){return t=>Ol(t,e)}function Yl(e){return t=>()=>{t(e)}}function Ul(e,...t){const n=function(...e){return t=>e.reduceRight(Hl,t)}(...t);return(t,r)=>{switch(t){case 2:return void Rl(e);case 1:return jl(e,n(r))}}}function Gl(e,t){return n=>r=>{n(t=e(t,r))}}function ql(e){return t=>n=>{e>0?e--:t(n)}}function Jl(e){let t,n=null;return r=>o=>{n=o,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function Zl(...e){const t=new Array(e.length);let n=0,r=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);jl(e,(e=>{const l=n;n|=a,t[i]=e,l!==o&&n===o&&r&&(r(),r=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};n===o?a():r=a}}function Xl(e){let t=e;const n=Kl();return(e,r)=>{switch(e){case 0:t=r;break;case 1:r(t);break;case 4:return t}return n(e,r)}}function Ql(e,t){return kl(Xl(t),(t=>Ml(e,t)))}function Kl(){const e=[];return(t,n)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(n)}));case 2:return void e.splice(0,e.length);case 1:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function es(e){return kl(Kl(),(t=>Ml(e,t)))}function ts(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:ns(),singleton:n}}const ns=()=>Symbol();function rs(...e){const t=Kl(),n=new Array(e.length);let r=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);jl(e,(e=>{n[i]=e,r|=a,r===o&&zl(t,n)}))})),function(e,i){switch(e){case 2:return void Rl(t);case 1:return r===o&&i(n),jl(t,i)}}}function os(e,t=Ll){return Ul(e,Wl(t))}function is(...e){return function(t,n){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(Tl)}}(...e.map((e=>jl(e,n))))}}}var as=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(as||{});const ls={0:"debug",3:"error",1:"log",2:"warn"},ss=ts((()=>{const e=Xl(3);return{log:Xl(((t,n,r=1)=>{var o;r>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:_l(e))&&console[ls[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function cs(e,t,n){return us(e,t,n).callbackRef}function us(e,t,n){const r=d.useRef(null);let o=e=>{};const i=d.useMemo((()=>typeof ResizeObserver<"u"?new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)})):null),[e,n]);return o=e=>{e&&t?(null==i||i.observe(e),r.current=e):(r.current&&(null==i||i.unobserve(r.current)),r.current=null)},{callbackRef:o,ref:r}}function ds(e,t,n,r,o,i,a,l,s){const c=d.useCallback((n=>{const s=function(e,t,n,r){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const l=parseInt(o.dataset.index),s=parseFloat(o.dataset.knownSize),c=t(o,n);if(0===c&&r("Zero-sized element, this should not happen",{child:o},as.ERROR),c===s)continue;const u=i[i.length-1];0===i.length||u.size!==c||u.endIndex!==l-1?i.push({endIndex:l,size:c,startIndex:l}):i[i.length-1].endIndex++}return i}(n.children,t,l?"offsetWidth":"offsetHeight",o);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const u="window"===c.lastElementChild.dataset.viewportType;let d;u&&(d=c.ownerDocument.defaultView);const f=a?l?a.scrollLeft:a.scrollTop:u?l?d.scrollX||d.document.documentElement.scrollLeft:d.scrollY||d.document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,h=a?l?a.scrollWidth:a.scrollHeight:u?l?d.document.documentElement.scrollWidth:d.document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,p=a?l?a.offsetWidth:a.offsetHeight:u?l?d.innerWidth:d.innerHeight:l?c.offsetWidth:c.offsetHeight;r({scrollHeight:h,scrollTop:Math.max(f,0),viewportHeight:p}),null==i||i(l?fs("column-gap",getComputedStyle(n).columnGap,o):fs("row-gap",getComputedStyle(n).rowGap,o)),null!==s&&e(s)}),[e,t,o,i,a,r,l]);return us(c,n,s)}function fs(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,as.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function hs(e,t,n){const r=d.useRef(null),o=d.useCallback((n=>{if(null==n||!n.offsetParent)return;const o=n.getBoundingClientRect(),i=o.width;let l,s;if(t){const e=t.getBoundingClientRect(),n=o.top-e.top;s=e.height-Math.max(0,n),l=n+t.scrollTop}else{const e=a.current.ownerDocument.defaultView;s=e.innerHeight-Math.max(0,o.top),l=o.top+e.scrollY}r.current={offsetTop:l,visibleHeight:s,visibleWidth:i},e(r.current)}),[e,t]),{callbackRef:i,ref:a}=us(o,!0,n),l=d.useCallback((()=>{o(a.current)}),[o,a]);return d.useEffect((()=>{var e;if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}{const t=null==(e=a.current)?void 0:e.ownerDocument.defaultView;return null==t||t.addEventListener("scroll",l),null==t||t.addEventListener("resize",l),()=>{null==t||t.removeEventListener("scroll",l),null==t||t.removeEventListener("resize",l)}}}),[l,t,a]),i}const ps=ts((()=>{const e=Kl(),t=Kl(),n=Xl(0),r=Kl(),o=Xl(0),i=Kl(),a=Kl(),l=Xl(0),s=Xl(0),c=Xl(0),u=Xl(0),d=Kl(),f=Kl(),h=Xl(!1),p=Xl(!1),m=Xl(!1);return Ml(Ul(e,Vl((({scrollTop:e})=>e))),t),Ml(Ul(e,Vl((({scrollHeight:e})=>e))),a),Ml(t,o),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:s,footerHeight:u,headerHeight:l,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:d,scrollTop:t,skipAnimationFrameInResizeObserver:m,smoothScrollTargetReached:r,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),ms={lvl:0};function gs(e,t){const n=e.length;if(0===n)return[];let{index:r,value:o}=t(e[0]);const i=[];for(let a=1;a<n;a++){const{index:n,value:l}=t(e[a]);i.push({end:n-1,start:r,value:o}),r=n,o=l}return i.push({end:1/0,start:r,value:o}),i}function vs(e){return e===ms}function ys(e,t){if(!vs(e))return t===e.k?e.v:t<e.k?ys(e.l,t):ys(e.r,t)}function bs(e,t,n="k"){if(vs(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=bs(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return bs(e.l,t,n)}function xs(e,t,n){return vs(e)?ks(t,n,1):t===e.k?Os(e,{k:t,v:n}):t<e.k?Hs(Os(e,{l:xs(e.l,t,n)})):Hs(Os(e,{r:xs(e.r,t,n)}))}function Ss(){return ms}function ws(e,t,n){if(vs(e))return[];return function(e){return gs(e,(({k:e,v:t})=>({index:e,value:t})))}(Bs(e,bs(e,t)[0],n))}function $s(e,t){if(vs(e))return ms;const{k:n,l:r,r:o}=e;if(t===n){if(vs(r))return o;if(vs(o))return r;{const[t,n]=Cs(r);return Ts(Os(e,{k:t,l:Is(r),v:n}))}}return Ts(Os(e,t<n?{l:$s(r,t)}:{r:$s(o,t)}))}function Fs(e){return vs(e)?[]:[...Fs(e.l),{k:e.k,v:e.v},...Fs(e.r)]}function Bs(e,t,n){if(vs(e))return[];const{k:r,l:o,r:i,v:a}=e;let l=[];return r>t&&(l=l.concat(Bs(o,t,n))),r>=t&&r<=n&&l.push({k:r,v:a}),r<=n&&(l=l.concat(Bs(i,t,n))),l}function Ts(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(Ds(t))return Es(Os(e,{lvl:n-1}));if(!vs(t)&&!vs(t.r))return Os(t.r,{l:Os(t,{r:t.r.l}),lvl:n,r:Os(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(Ds(e))return js(Os(e,{lvl:n-1}));if(vs(r)||vs(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,o=Ds(t)?r.lvl-1:r.lvl;return Os(t,{l:Os(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:js(Os(r,{l:t.r,lvl:o}))})}}function Os(e,t){return ks(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function Is(e){return vs(e.r)?e.l:Ts(Os(e,{r:Is(e.r)}))}function Ds(e){return vs(e)||e.lvl>e.r.lvl}function Cs(e){return vs(e.r)?[e.k,e.v]:Cs(e.r)}function ks(e,t,n,r=ms,o=ms){return{k:e,l:r,lvl:n,r:o,v:t}}function Hs(e){return js(Es(e))}function Es(e){const{l:t}=e;return vs(t)||t.lvl!==e.lvl?e:Os(t,{r:Os(e,{l:t.r})})}function js(e){const{lvl:t,r:n}=e;return vs(n)||vs(n.r)||n.lvl!==t||n.r.lvl!==t?e:Os(n,{l:Os(e,{r:n.l}),lvl:t+1})}function zs(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function Rs(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const _s=ts((()=>({recalcInProgress:Xl(!1)})),[],{singleton:!0});function Ms(e,t,n){return e[As(e,t,n)]}function As(e,t,n,r=0){let o=e.length-1;for(;r<=o;){const i=Math.floor((r+o)/2),a=n(e[i],t);if(0===a)return i;if(-1===a){if(o-r<2)return i-1;o=i-1}else{if(o===r)return i;r=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Ps(e,t){return Math.round(e.getBoundingClientRect()[t])}function Ls(e){return!vs(e.groupOffsetTree)}function Ws({index:e},t){return t===e?0:t<e?-1:1}function Ns({offset:e},t){return t===e?0:t<e?-1:1}function Vs(e,t,n){if(0===t.length)return 0;const{index:r,offset:o,size:i}=Ms(t,e,Ws),a=e-r,l=i*a+(a-1)*n+o;return l>0?l+n:l}function Ys(e,t){if(!Ls(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function Us(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=Ys("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function Gs(e,t,n,r=0){return r>0&&(t=Math.max(t,Ms(e,r,Ws).offset)),gs(function(e,t,n,r){const o=As(e,t,r),i=As(e,n,r,o);return e.slice(o,i+1)}(e,t,n,Ns),Xs)}function qs(e,[t,n,r,o]){t.length>0&&r("received item sizes",t,as.DEBUG);const i=e.sizeTree;let a=i,l=0;if(n.length>0&&vs(i)&&2===t.length){const e=t[0].size,r=t[1].size;a=n.reduce(((t,n)=>xs(xs(t,n,e),n+1,r)),a)}else[a,l]=function(e,t){let n=vs(e)?0:1/0;for(const r of t){const{endIndex:t,size:o,startIndex:i}=r;if(n=Math.min(n,i),vs(e)){e=xs(e,0,o);continue}const a=ws(e,i-1,t+1);if(a.some(Qs(r)))continue;let l=!1,s=!1;for(const{end:n,start:r,value:i}of a)l?(t>=r||o===i)&&(e=$s(e,r)):(s=i!==o,l=!0),n>t&&t>=r&&i!==o&&(e=xs(e,t+1,i));s&&(e=xs(e,i,o))}return[e,n]}(a,t);if(a===i)return e;const{lastIndex:s,lastOffset:c,lastSize:u,offsetTree:d}=Zs(e.offsetTree,l,a,o);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>xs(e,t,Vs(t,d,o))),Ss()),lastIndex:s,lastOffset:c,lastSize:u,offsetTree:d,sizeTree:a}}function Js(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function Zs(e,t,n,r){let o=e,i=0,a=0,l=0,s=0;if(0!==t){s=As(o,t-1,Ws),l=o[s].offset;const e=bs(n,t-1);i=e[0],a=e[1],o.length&&o[s].size===bs(n,t)[1]&&(s-=1),o=o.slice(0,s+1)}else o=[];for(const{start:e,value:s}of ws(n,t,1/0)){const t=e-i,n=t*a+l+t*r;o.push({index:e,offset:n,size:s}),i=e,l=n,a=s}return{lastIndex:i,lastOffset:l,lastSize:a,offsetTree:o}}function Xs(e){return{index:e.index,value:e}}function Qs(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const Ks={offsetHeight:"height",offsetWidth:"width"},ec=ts((([{log:e},{recalcInProgress:t}])=>{const n=Kl(),r=Kl(),o=Ql(r,0),i=Kl(),a=Kl(),l=Xl(0),s=Xl([]),c=Xl(void 0),u=Xl(void 0),d=Xl(((e,t)=>Ps(e,Ks[t]))),f=Xl(void 0),h=Xl(0),p={groupIndices:[],groupOffsetTree:Ss(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Ss()},m=Ql(Ul(n,Zl(s,e,h),Gl(qs,p),Wl()),p),g=Ql(Ul(s,Wl(),Gl(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Vl((({prev:e})=>e))),[]);Ml(Ul(s,Nl((e=>e.length>0)),Zl(m,h),Vl((([e,t,n])=>{const r=e.reduce(((e,r,o)=>xs(e,r,Vs(r,t.offsetTree,n)||o)),Ss());return{...t,groupIndices:e,groupOffsetTree:r}}))),m),Ml(Ul(r,Zl(m),Nl((([e,{lastIndex:t}])=>e<t)),Vl((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),Ml(c,u);const v=Ql(Ul(c,Vl((e=>void 0===e))),!0);Ml(Ul(u,Nl((e=>void 0!==e&&vs(_l(m).sizeTree))),Vl((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const y=es(Ul(n,Zl(m),Gl((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:p}),Vl((e=>e.changed))));jl(Ul(l,Gl(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Vl((e=>e.diff))),(e=>{const{groupIndices:n}=_l(m);if(e>0)zl(t,!0),zl(i,e+Js(e,n));else if(e<0){const t=_l(g);t.length>0&&(e-=Js(-e,t)),zl(a,e)}})),jl(Ul(l,Zl(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:l},as.ERROR)}));const b=es(i);Ml(Ul(i,Zl(m),Vl((([e,t])=>{const n=t.groupIndices.length>0,r=[],o=t.lastSize;if(n){const n=ys(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],l=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+l-1,size:o,startIndex:e+1}),a++,i+=l+1}const l=Fs(t.sizeTree);return i!==e&&l.shift(),l.reduce(((t,{k:n,v:r})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:o}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return Fs(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),n);const x=es(Ul(a,Zl(m,h),Vl((([e,{offsetTree:t},n])=>Vs(-e,t,n)))));return Ml(Ul(a,Zl(m,h),Vl((([e,t,n])=>{if(t.groupIndices.length>0){if(vs(t.sizeTree))return t;let r=Ss();const o=_l(g);let i=0,a=0,l=0;for(;i<-e;){l=o[a];const e=o[a+1]-l-1;a++,i+=e+1}if(r=Fs(t.sizeTree).reduce(((t,{k:n,v:r})=>xs(t,Math.max(0,n+e),r)),r),i!==-e){r=xs(r,0,ys(t.sizeTree,l));r=xs(r,1,bs(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...Zs(t.offsetTree,0,r,n)}}{const r=Fs(t.sizeTree).reduce(((t,{k:n,v:r})=>xs(t,Math.max(0,n+e),r)),Ss());return{...t,sizeTree:r,...Zs(t.offsetTree,0,r,n)}}}))),m),{beforeUnshiftWith:b,data:f,defaultItemSize:u,firstItemIndex:l,fixedItemSize:c,gap:h,groupIndices:s,itemSize:d,listRefresh:y,shiftWith:a,shiftWithOffset:x,sizeRanges:n,sizes:m,statefulTotalCount:o,totalCount:r,trackItemSizes:v,unshiftWith:i}}),El(ss,_s),{singleton:!0});function tc(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const nc=ts((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:o}])=>{const i=Kl(),a=Kl(),l=es(Ul(i,Vl(tc)));return Ml(Ul(l,Vl((e=>e.totalCount))),n),Ml(Ul(l,Vl((e=>e.groupIndices))),e),Ml(Ul(rs(o,t,r),Nl((([e,t])=>Ls(t))),Vl((([e,t,n])=>bs(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),Wl(),Vl((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),El(ec,ps)),rc=ts((([{log:e}])=>{const t=Xl(!1),n=es(Ul(t,Nl((e=>e)),Wl()));return jl(t,(t=>{t&&_l(e)("props updated",{},as.DEBUG)})),{didMount:n,propsReady:t}}),El(ss),{singleton:!0}),oc=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function ic(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!oc)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const ac=ts((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:l,scrollingInProgress:s,scrollTo:c,smoothScrollTargetReached:u,viewportHeight:d},{log:f}])=>{const h=Kl(),p=Kl(),m=Xl(0);let g=null,v=null,y=null;function b(){g&&(g(),g=null),y&&(y(),y=null),v&&(clearTimeout(v),v=null),zl(s,!1)}return Ml(Ul(h,Zl(n,d,r,m,l,a,f),Zl(e,i,o),Vl((([[e,n,r,o,i,a,l,c],d,f,m])=>{const x=ic(e),{align:S,behavior:w,offset:$}=x,F=o-1,B=Us(x,n,F);let T=Vs(B,n.offsetTree,d)+a;"end"===S?(T+=f+bs(n.sizeTree,B)[1]-r+m,B===F&&(T+=l)):"center"===S?T+=(f+bs(n.sizeTree,B)[1]-r+m)/2:T-=i,$&&(T+=$);const O=t=>{b(),t?(c("retrying to scroll to",{location:e},as.DEBUG),zl(h,e)):(zl(p,!0),c("list did not change, scroll successful",{},as.DEBUG))};if(b(),"smooth"===w){let e=!1;y=jl(t,(t=>{e=e||t})),g=Al(u,(()=>{O(e)}))}else g=Al(Ul(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),O);return v=setTimeout((()=>{b()}),1200),zl(s,!0),c("scrolling from index to",{behavior:w,index:B,top:T},as.DEBUG),{behavior:w,top:T}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:m}}),El(ec,ps,ss),{singleton:!0});function lc(e,t){0==e?t():requestAnimationFrame((()=>{lc(e-1,t)}))}function sc(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const cc=ts((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const l=Xl(!0),s=Xl(0),c=Xl(!0);return Ml(Ul(a,Zl(s),Nl((([e,t])=>!!t)),Yl(!1)),l),Ml(Ul(a,Zl(s),Nl((([e,t])=>!!t)),Yl(!1)),c),jl(Ul(rs(t,a),Zl(l,n,e,c),Nl((([[,e],t,{sizeTree:n},r,o])=>e&&(!vs(n)||Dl(r))&&!t&&!o)),Zl(s)),(([,e])=>{Al(o,(()=>{zl(c,!0)})),lc(4,(()=>{Al(r,(()=>{zl(l,!0)})),zl(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:s,scrolledToInitialItem:l}}),El(ec,ps,ac,rc),{singleton:!0});function uc(e,t){return Math.abs(e-t)<1.01}const dc="up",fc="down",hc={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},pc=ts((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:o,viewportHeight:i}])=>{const a=Xl(!1),l=Xl(!0),s=Kl(),c=Kl(),u=Xl(4),d=Xl(0),f=Ql(Ul(is(Ul(os(o),ql(1),Yl(!0)),Ul(os(o),ql(1),Yl(!1),Pl(100))),Wl()),!1),h=Ql(Ul(is(Ul(n,Yl(!0)),Ul(n,Yl(!1),Pl(200))),Wl()),!1);Ml(Ul(rs(os(o),os(d)),Vl((([e,t])=>e<=t)),Wl()),l),Ml(Ul(l,Jl(50)),c);const p=es(Ul(rs(r,os(i),os(t),os(e),os(u)),Gl(((e,[{scrollHeight:t,scrollTop:n},r,o,i,a])=>{const l={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-a){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:l}}let s;return s=l.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:s,state:l}}),hc),Wl(((e,t)=>e&&e.atBottom===t.atBottom)))),m=Ql(Ul(r,Gl(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(uc(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const o=t-(n+r)<1;return e.scrollTop!==n&&o?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),Nl((e=>e.changed)),Vl((e=>e.jump))),0);Ml(Ul(p,Vl((e=>e.atBottom))),a),Ml(Ul(a,Jl(50)),s);const g=Xl(fc);Ml(Ul(r,Vl((({scrollTop:e})=>e)),Wl(),Gl(((e,t)=>_l(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?dc:fc,prevScrollTop:t}),{direction:fc,prevScrollTop:0}),Vl((e=>e.direction))),g),Ml(Ul(r,Jl(50),Yl("none")),g);const v=Xl(0);return Ml(Ul(f,Nl((e=>!e)),Yl(0)),v),Ml(Ul(o,Jl(100),Zl(f),Nl((([e,t])=>!!t)),Gl((([e,t],[n])=>[t,n]),[0,0]),Vl((([e,t])=>t-e))),v),{atBottomState:p,atBottomStateChange:s,atBottomThreshold:u,atTopStateChange:c,atTopThreshold:d,isAtBottom:a,isAtTop:l,isScrolling:f,lastJumpDueToItemResize:m,scrollDirection:g,scrollVelocity:v}}),El(ps)),mc="top",gc="bottom",vc="none";function yc(e,t,n){return"number"==typeof e?n===dc&&t===mc||n===fc&&t===gc?e:0:n===dc?t===mc?e.main:e.reverse:t===gc?e.main:e.reverse}function bc(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const xc=ts((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:o}])=>{const i=Kl(),a=Xl(0),l=Xl(0),s=Xl(0);return{increaseViewportBy:l,listBoundary:i,overscan:s,topListHeight:a,visibleRange:Ql(Ul(rs(os(r),os(o),os(n),os(i,Rs),os(s),os(a),os(t),os(e),os(l)),Vl((([e,t,n,[r,o],i,a,l,s,c])=>{const u=e-s,d=a+l,f=Math.max(n-u,0);let h=vc;const p=bc(c,mc),m=bc(c,gc);return r-=s,o+=n+l,(r+=n+l)>e+d-p&&(h=dc),(o-=s)<e-f+t+m&&(h=fc),h!==vc?[Math.max(u-n-yc(i,mc,h)-p,0),u-f-l+t+yc(i,gc,h)+m]:null})),Nl((e=>null!=e)),Wl(Rs)),[0,0])}}),El(ps),{singleton:!0});const Sc={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function wc(e,t,n,r,o,i){const{lastIndex:a,lastOffset:l,lastSize:s}=o;let c=0,u=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];u=t.offset+t.size}const d=n-a,f=c,h=l+d*s+(d-1)*r-u;return{bottom:u,firstItemIndex:i,items:Fc(e,o,i),offsetBottom:h,offsetTop:c,top:f,topItems:Fc(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function $c(e,t,n,r,o,i){let a=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-a>=e)break;a++}const l=e+a,s=sc(t,l);return wc(Array.from({length:l}).map(((e,t)=>({data:i[t+s],index:t+s,offset:0,size:0}))),[],l,o,n,r)}function Fc(e,t,n){if(0===e.length)return[];if(!Ls(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,o=e[e.length-1].index,i=[],a=ws(t.groupOffsetTree,r,o);let l,s=0;for(const r of e){let e;(!l||l.end<r.index)&&(l=a.shift(),s=t.groupIndices.indexOf(l.start)),e=r.index===l.start?{index:s,type:"group"}:{groupIndex:s,index:r.index-(s+1)+n},i.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return i}const Bc=ts((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:o},i,{listBoundary:a,topListHeight:l,visibleRange:s},{initialTopMostItemIndex:c,scrolledToInitialItem:u},{topListHeight:d},f,{didMount:h},{recalcInProgress:p}])=>{const m=Xl([]),g=Xl(0),v=Kl();Ml(i.topItemsIndexes,m);const y=Ql(Ul(rs(h,p,os(s,Rs),os(o),os(r),os(c),u,os(m),os(t),os(n),e),Nl((([e,t,,n,,,,,,,r])=>{const o=r&&r.length!==n;return e&&!t&&!o})),Vl((([,,[e,t],n,r,o,i,a,l,s,c])=>{const u=r,{offsetTree:d,sizeTree:f}=u,h=_l(g);if(0===n)return{...Sc,totalCount:n};if(0===e&&0===t)return 0===h?{...Sc,totalCount:n}:$c(h,o,r,l,s,c||[]);if(vs(f))return h>0?null:wc(function(e,t,n){if(Ls(t)){const r=Ys(e,t);return[{index:bs(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(sc(o,n),u,c),[],n,s,u,l);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let n=0;for(const r of ws(f,e,t)){const o=r.value,i=Math.max(r.start,e),a=Math.min(r.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:n,size:o}),n+=o}}if(!i)return wc([],p,n,s,u,l);const m=a.length>0?a[a.length-1]+1:0,v=Gs(d,e,t,m);if(0===v.length)return null;const y=n-1;return wc(kl([],(n=>{for(const r of v){const o=r.value;let i=o.offset,a=r.start;const l=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+s)/(l+s));const t=a-r.start;i+=t*l+t*s}a<m&&(i+=(m-a)*l,a=m);const u=Math.min(r.end,y);for(let e=a;e<=u&&!(i>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:i,size:l}),i+=l+s}})),p,n,s,u,l)})),Nl((e=>null!==e)),Wl()),Sc);Ml(Ul(e,Nl(Dl),Vl((e=>null==e?void 0:e.length))),o),Ml(Ul(y,Vl((e=>e.topListHeight))),d),Ml(d,l),Ml(Ul(y,Vl((e=>[e.top,e.bottom]))),a),Ml(Ul(y,Vl((e=>e.items))),v);const b=es(Ul(y,Nl((({items:e})=>e.length>0)),Zl(o,e),Nl((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Vl((([,e,t])=>[e-1,t])),Wl(Rs),Vl((([e])=>e)))),x=es(Ul(y,Jl(200),Nl((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Vl((({items:e})=>e[0].index)),Wl())),S=es(Ul(y,Nl((({items:e})=>e.length>0)),Vl((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),Wl(zs)));return{endReached:b,initialItemCount:g,itemsRendered:v,listState:y,rangeChanged:S,startReached:x,topItemsIndexes:m,...f}}),El(ec,nc,xc,cc,ac,pc,rc,_s),{singleton:!0}),Tc=ts((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:o}])=>{const i=Kl(),a=Ql(Ul(rs(n,e,r,t,o),Vl((([e,t,n,r,o])=>e+t+n+r+o.offsetBottom+o.bottom))),0);return Ml(os(a),i),{totalListHeight:a,totalListHeightChanged:i}}),El(ps,Bc),{singleton:!0}),Oc=ts((([{viewportHeight:e},{totalListHeight:t}])=>{const n=Xl(!1);return{alignToBottom:n,paddingTopAddition:Ql(Ul(rs(n,e,t),Nl((([e])=>e)),Vl((([,e,t])=>Math.max(0,e-t))),Jl(0),Wl()),0)}}),El(ps,Tc),{singleton:!0});function Ic(e){return!!e&&("smooth"===e?"smooth":"auto")}const Dc=ts((([{listRefresh:e,totalCount:t,fixedItemSize:n},{atBottomState:r,isAtBottom:o},{scrollToIndex:i},{scrolledToInitialItem:a},{didMount:l,propsReady:s},{log:c},{scrollingInProgress:u}])=>{const d=Xl(!1),f=Kl();let h=null;function p(e){zl(i,{align:"end",behavior:e,index:"LAST"})}function m(e){const t=Al(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(_l(c)("scrolling to bottom due to increased size",{},as.DEBUG),p("auto"))}));setTimeout(t,100)}return jl(Ul(rs(Ul(os(t),ql(1)),l),Zl(os(d),o,a,u),Vl((([[e,t],n,r,o,i])=>{let a=t&&o,l="auto";return a&&(l=((e,t)=>"function"==typeof e?Ic(e(t)):t&&Ic(e))(n,r||i),a=a&&!!l),{followOutputBehavior:l,shouldFollow:a,totalCount:e}})),Nl((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),_l(n)?requestAnimationFrame((()=>{_l(c)("following output to ",{totalCount:r},as.DEBUG),p(t)})):h=Al(e,(()=>{_l(c)("following output to ",{totalCount:r},as.DEBUG),p(t),h=null}))})),jl(Ul(rs(os(d),t,s),Nl((([e,,t])=>e&&t)),Gl((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),Nl((({refreshed:e})=>e)),Zl(d,t)),(([,e])=>{_l(a)&&m(!1!==e)})),jl(f,(()=>{m(!1!==_l(d))})),jl(rs(os(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&p("auto")})),{autoscrollToBottom:f,followOutput:d}}),El(ec,pc,ac,cc,rc,ss,ps)),Cc=ts((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:l}])=>(Ml(Ul(l,Zl(i),Nl((([,e])=>0!==e)),Zl(o,r,t,n,e),Vl((([[,e],t,n,r,o,i=[]])=>$c(e,t,n,r,o,i)))),a),{})),El(ec,cc,Bc,rc),{singleton:!0}),kc=ts((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=Xl(0);return jl(Ul(e,Zl(r),Nl((([,e])=>0!==e)),Vl((([,e])=>({top:e})))),(e=>{Al(Ul(n,ql(1),Nl((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{zl(t,e)}))}))})),{initialScrollTop:r}}),El(rc,ps,Bc),{singleton:!0}),Hc=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=n?n:"start",behavior:r}:e>i?{...o,align:null!=n?n:"end",behavior:r}:null,Ec=ts((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:l,viewportHeight:s},{scrollToIndex:c}])=>{const u=Kl();return Ml(Ul(u,Zl(t,s,n,i,o,r,l),Zl(e),Vl((([[e,t,n,r,o,i,l,s],c])=>{const{align:u,behavior:d,calculateViewLocation:f=Hc,done:h,...p}=e,m=Us(e,t,r-1),g=Vs(m,t.offsetTree,c)+o+i,v=f({itemBottom:g+bs(t.sizeTree,m)[1],itemTop:g,locationParams:{align:u,behavior:d,...p},viewportBottom:s+n-l,viewportTop:s+i});return v?h&&Al(Ul(a,Nl((e=>!e)),ql(_l(a)?1:2)),h):h&&h(),v})),Nl((e=>null!==e))),c),{scrollIntoView:u}}),El(ec,ps,ac,Bc,ss),{singleton:!0}),jc=ts((([{scrollVelocity:e}])=>{const t=Xl(!1),n=Kl(),r=Xl(!1);return Ml(Ul(e,Zl(r,t,n),Nl((([e,t])=>!!t)),Vl((([e,t,n,r])=>{const{enter:o,exit:i}=t;if(n){if(i(e,r))return!1}else if(o(e,r))return!0;return n})),Wl()),t),jl(Ul(rs(t,e,n),Zl(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),El(pc),{singleton:!0}),zc=ts((([{scrollContainerState:e,scrollTo:t}])=>{const n=Kl(),r=Kl(),o=Kl(),i=Xl(!1),a=Xl(void 0);return Ml(Ul(rs(n,r),Vl((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),Ml(Ul(t,Zl(r),Vl((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:n,windowScrollTo:o,windowViewportRect:r}}),El(ps)),Rc=ts((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:l,windowViewportRect:s}])=>{const c=Kl(),u=Xl(void 0),d=Xl(null),f=Xl(null);return Ml(l,d),Ml(s,f),jl(Ul(c,Zl(t,r,a,d,f,n)),(([e,t,n,r,o,i,a])=>{const l=function(e){return Fs(e).map((({k:e,v:t},n,r)=>{const o=r[n+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==o&&null!==i&&(n=o.scrollTop-i.offsetTop),e({ranges:l,scrollTop:n-=a})})),Ml(Ul(u,Nl(Dl),Vl(_c)),o),Ml(Ul(i,Zl(u),Nl((([,e])=>void 0!==e)),Wl(),Vl((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:u}}),El(ec,ps,cc,rc,zc));function _c(e){return{align:"start",index:0,offset:e.scrollTop}}const Mc=ts((([{topItemsIndexes:e}])=>{const t=Xl(0);return Ml(Ul(t,Nl((e=>e>=0)),Vl((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),El(Bc));function Ac(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const Pc=Ac((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Lc=ts((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:l},{listState:s},{beforeUnshiftWith:c,gap:u,shiftWithOffset:d,sizes:f},{log:h},{recalcInProgress:p}])=>{const m=es(Ul(s,Zl(a),Gl((([,e,t,n],[{bottom:r,items:o,offsetBottom:i,totalCount:a},l])=>{const s=r+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=s-n,0!==c&&(c+=l))),[c,o,a,s]}),[0,[],0,0]),Nl((([e])=>0!==e)),Zl(r,l,n,o,h,p),Nl((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===dc)),Vl((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},as.DEBUG),e)))));function g(n){n>0?(zl(t,{behavior:"auto",top:-n}),zl(e,0)):(zl(e,0),zl(t,{behavior:"auto",top:-n}))}return jl(Ul(m,Zl(e,i)),(([t,n,r])=>{r&&Pc()?zl(e,n-t):g(-t)})),jl(Ul(rs(Ql(i,!1),e,p),Nl((([e,t,n])=>!e&&!n&&0!==t)),Vl((([e,t])=>t)),Jl(1)),g),Ml(Ul(d,Vl((e=>({top:-e})))),t),jl(Ul(c,Zl(f,u),Vl((([e,{groupIndices:t,lastSize:n,sizeTree:r},o])=>{function i(e){return e*(n+o)}if(0===t.length)return i(e);{let n=0;const o=ys(r,0);let a=0,l=0;for(;a<e;){a++,n+=o;let r=t.length===l+1?1/0:t[l+1]-t[l]-1;a+r>e&&(n-=o,r=e-a+1),a+=r,n+=i(r),l++}return n}}))),(n=>{zl(e,n),requestAnimationFrame((()=>{zl(t,{top:n}),requestAnimationFrame((()=>{zl(e,0),zl(p,!1)}))}))})),{deviation:e}}),El(ps,pc,Bc,ec,ss,_s)),Wc=ts((([e,t,n,r,o,i,a,l,s,c])=>({...e,...t,...n,...r,...o,...i,...a,...l,...s,...c})),El(xc,Cc,rc,jc,Tc,kc,Oc,zc,Ec,ss)),Nc=ts((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:o,groupIndices:i,itemSize:a,sizeRanges:l,sizes:s,statefulTotalCount:c,totalCount:u,trackItemSizes:d},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},m,g,v,{listState:y,topItemsIndexes:b,...x},{scrollToIndex:S},w,{topItemCount:$},{groupCounts:F},B])=>(Ml(x.rangeChanged,B.scrollSeekRangeChanged),Ml(Ul(B.windowViewportRect,Vl((e=>e.visibleHeight))),m.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:o,groupCounts:F,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:l,topItemCount:$,topItemsIndexes:b,totalCount:u,...v,groupIndices:i,itemSize:a,listState:y,scrollToIndex:S,statefulTotalCount:c,trackItemSizes:d,...x,...B,...m,sizes:s,...g})),El(ec,cc,ps,Rc,Dc,Bc,ac,Lc,Mc,nc,Wc));function Vc(e,t){const n={},r={};let o=0;const i=e.length;for(;o<i;)r[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const Yc=typeof document<"u"?d.useLayoutEffect:d.useEffect;function Uc(e,n,r){const o=Object.keys(n.required||{}),i=Object.keys(n.optional||{}),a=Object.keys(n.methods||{}),l=Object.keys(n.events||{}),s=d.createContext({});function c(e,t){e.propsReady&&zl(e.propsReady,!1);for(const r of o){zl(e[n.required[r]],t[r])}for(const r of i)if(r in t){zl(e[n.optional[r]],t[r])}e.propsReady&&zl(e.propsReady,!0)}function u(e){return l.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?n===i?void 0:(r(),n=i,t=jl(e,i),t):(r(),Cl);case 2:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const f=d.forwardRef(((f,h)=>{const{children:p,...m}=f,[g]=d.useState((()=>kl(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(r.map((e=>n(e))));return i&&t.set(o,a),a};return n(e)}(e),(e=>{c(e,m)})))),[v]=d.useState(Il(u,g));Yc((()=>{for(const e of l)e in m&&jl(v[e],m[e]);return()=>{Object.values(v).map(Rl)}}),[m,v,g]),Yc((()=>{c(g,m)})),d.useImperativeHandle(h,Bl(function(e){return a.reduce(((t,r)=>(t[r]=t=>{zl(e[n.methods[r]],t)},t)),{})}(g)));const y=r;return t(s.Provider,{value:g,children:r?t(y,{...Vc([...o,...i,...l],m),children:p}):p})}));return{Component:f,useEmitter:(e,t)=>{const n=d.useContext(s)[e];Yc((()=>jl(n,t)),[t,n])},useEmitterValue:d.version.startsWith("18")?e=>{const t=d.useContext(s)[e],n=d.useCallback((e=>jl(t,e)),[t]);return d.useSyncExternalStore(n,(()=>_l(t)),(()=>_l(t)))}:e=>{const t=d.useContext(s)[e],[n,r]=d.useState(Il(_l,t));return Yc((()=>jl(t,(e=>{e!==n&&r(Bl(e))}))),[t,n]),n},usePublisher:e=>{const t=d.useContext(s);return d.useCallback((n=>{zl(t[e],n)}),[t,e])}}}const Gc=d.createContext(void 0),qc=d.createContext(void 0),Jc=typeof document<"u"?d.useLayoutEffect:d.useEffect;function Zc(e){return"self"in e}function Xc(e,t,n,r=Cl,o,i){const a=d.useRef(null),l=d.useRef(null),s=d.useRef(null),c=d.useCallback((n=>{let r,o,a;const c=n.target;if(function(e){return"body"in e}(c)||Zc(c)){const e=Zc(c)?c:c.defaultView;a=i?e.scrollX:e.scrollY,r=i?e.document.documentElement.scrollWidth:e.document.documentElement.scrollHeight,o=i?e.innerWidth:e.innerHeight}else a=i?c.scrollLeft:c.scrollTop,r=i?c.scrollWidth:c.scrollHeight,o=i?c.offsetWidth:c.offsetHeight;const u=()=>{e({scrollHeight:r,scrollTop:Math.max(a,0),viewportHeight:o})};n.suppressFlushSync?u():k.flushSync(u),null!==l.current&&(a===l.current||a<=0||a===r-o)&&(l.current=null,t(!0),s.current&&(clearTimeout(s.current),s.current=null))}),[e,t,i]);return d.useEffect((()=>{const e=o||a.current;return r(o||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",c)}}),[a,c,n,r,o]),{scrollByCallback:function(e){i&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(n){const r=a.current;if(!r||(i?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const o="smooth"===n.behavior;let c,u,d;Zc(r)?(u=Math.max(Ps(r.document.documentElement,i?"width":"height"),i?r.document.documentElement.scrollWidth:r.document.documentElement.scrollHeight),c=i?r.innerWidth:r.innerHeight,d=i?window.scrollX:window.scrollY):(u=r[i?"scrollWidth":"scrollHeight"],c=Ps(r,i?"width":"height"),d=r[i?"scrollLeft":"scrollTop"]);const f=u-c;if(n.top=Math.ceil(Math.max(Math.min(f,n.top),0)),uc(c,u)||n.top===d)return e({scrollHeight:u,scrollTop:d,viewportHeight:c}),void(o&&t(!0));o?(l.current=n.top,s.current&&clearTimeout(s.current),s.current=setTimeout((()=>{s.current=null,l.current=null,t(!0)}),1e3)):l.current=null,i&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const Qc="-webkit-sticky",Kc="sticky",eu=Ac((()=>{if(typeof document>"u")return Kc;const e=document.createElement("div");return e.style.position=Qc,e.style.position===Qc?Qc:Kc}));function tu(e){return e}const nu=ts((()=>{const e=Xl((e=>`Item ${e}`)),t=Xl(null),n=Xl((e=>`Group ${e}`)),r=Xl({}),o=Xl(tu),i=Xl("div"),a=Xl(Cl),l=(e,t=null)=>Ql(Ul(r,Vl((t=>t[e])),Wl()),t);return{components:r,computeItemKey:o,context:t,EmptyPlaceholder:l("EmptyPlaceholder"),FooterComponent:l("Footer"),GroupComponent:l("Group","div"),groupContent:n,HeaderComponent:l("Header"),HeaderFooterTag:i,ItemComponent:l("Item","div"),itemContent:e,ListComponent:l("List","div"),ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder"),TopItemListComponent:l("TopItemList")}})),ru=ts((([e,t])=>({...e,...t})),El(Nc,nu)),ou=({height:e})=>t("div",{style:{height:e}}),iu={overflowAnchor:"none",position:eu(),zIndex:1},au={overflowAnchor:"none"},lu={...au,display:"inline-block",height:"100%"},su=d.memo((function({showTopList:e=!1}){const n=Bu("listState"),r=Tu("sizeRanges"),o=Bu("useWindowScroll"),i=Bu("customScrollParent"),a=Tu("windowScrollContainerState"),l=Tu("scrollContainerState"),s=i||o?a:l,c=Bu("itemContent"),u=Bu("context"),f=Bu("groupContent"),h=Bu("trackItemSizes"),p=Bu("itemSize"),m=Bu("log"),g=Tu("gap"),v=Bu("horizontalDirection"),{callbackRef:y}=ds(r,p,h,e?Cl:s,m,g,i,v,Bu("skipAnimationFrameInResizeObserver")),[b,x]=d.useState(0);Fu("deviation",(e=>{b!==e&&x(e)}));const S=Bu("EmptyPlaceholder"),$=Bu("ScrollSeekPlaceholder")||ou,F=Bu("ListComponent"),B=Bu("ItemComponent"),T=Bu("GroupComponent"),O=Bu("computeItemKey"),I=Bu("isSeeking"),D=Bu("groupIndices").length>0,C=Bu("alignToBottom"),k=Bu("initialItemFinalLocationReached"),H=e?{}:{boxSizing:"border-box",...v?{display:"inline-block",height:"100%",marginLeft:0!==b?b:C?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==b?b:C?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...k?{}:{visibility:"hidden"}};return!e&&0===n.totalCount&&S?t(S,{...hu(S,u)}):t(F,{...hu(F,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:y,style:H,children:(e?n.topItems:n.items).map((e=>{const t=e.originalIndex,r=O(t+n.firstItemIndex,e.data,u);return I?w($,{...hu($,u),height:e.size,index:e.index,key:r,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?w(T,{...hu(T,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:r,style:iu},f(e.index,u)):w(B,{...hu(B,u),...pu(B,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:r,style:v?lu:au},D?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),cu={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},uu={outline:"none",overflowX:"auto",position:"relative"},du=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),fu={position:eu(),top:0,width:"100%",zIndex:1};function hu(e,t){if("string"!=typeof e)return{context:t}}function pu(e,t){return{item:"string"==typeof e?void 0:t}}const mu=d.memo((function(){const e=Bu("HeaderComponent"),n=Tu("headerHeight"),r=Bu("HeaderFooterTag"),o=cs(d.useMemo((()=>e=>{n(Ps(e,"height"))}),[n]),!0,Bu("skipAnimationFrameInResizeObserver")),i=Bu("context");return e?t(r,{ref:o,children:t(e,{...hu(e,i)})}):null})),gu=d.memo((function(){const e=Bu("FooterComponent"),n=Tu("footerHeight"),r=Bu("HeaderFooterTag"),o=cs(d.useMemo((()=>e=>{n(Ps(e,"height"))}),[n]),!0,Bu("skipAnimationFrameInResizeObserver")),i=Bu("context");return e?t(r,{ref:o,children:t(e,{...hu(e,i)})}):null}));function vu({useEmitter:e,useEmitterValue:n,usePublisher:r}){return d.memo((function({children:o,style:i,...a}){const l=r("scrollContainerState"),s=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),u=n("scrollerRef"),d=n("context"),f=n("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:m}=Xc(l,c,s,u,void 0,f);return e("scrollTo",m),e("scrollBy",h),t(s,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?uu:cu,...i},tabIndex:0,...a,...hu(s,d),children:o})}))}function yu({useEmitter:e,useEmitterValue:n,usePublisher:r}){return d.memo((function({children:o,style:i,...a}){const l=r("windowScrollContainerState"),s=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),u=n("totalListHeight"),f=n("deviation"),h=n("customScrollParent"),p=n("context"),m=d.useRef(null),g=n("scrollerRef"),{scrollByCallback:v,scrollerRef:y,scrollToCallback:b}=Xc(l,c,s,g,h);return Jc((()=>{var e;return y.current=h||(null==(e=m.current)?void 0:e.ownerDocument.defaultView),()=>{y.current=null}}),[y,h]),e("windowScrollTo",b),e("scrollBy",v),t(s,{ref:m,"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==u?{height:u+f}:{}},...a,...hu(s,p),children:o})}))}const bu=({children:e})=>{const n=d.useContext(Gc),r=Tu("viewportHeight"),o=Tu("fixedItemHeight"),i=Bu("alignToBottom"),a=Bu("horizontalDirection"),l=cs(d.useMemo((()=>Ol(r,(e=>Ps(e,a?"width":"height")))),[r,a]),!0,Bu("skipAnimationFrameInResizeObserver"));return d.useEffect((()=>{n&&(r(n.viewportHeight),o(n.itemHeight))}),[n,r,o]),t("div",{"data-viewport-type":"element",ref:l,style:du(i),children:e})},xu=({children:e})=>{const n=d.useContext(Gc),r=Tu("windowViewportRect"),o=Tu("fixedItemHeight"),i=Bu("customScrollParent"),a=hs(r,i,Bu("skipAnimationFrameInResizeObserver")),l=Bu("alignToBottom");return d.useEffect((()=>{n&&(o(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,o]),t("div",{"data-viewport-type":"window",ref:a,style:du(l),children:e})},Su=({children:e})=>{const n=Bu("TopItemListComponent")||"div",r=Bu("headerHeight"),o={...fu,marginTop:`${r}px`},i=Bu("context");return t(n,{style:o,...hu(n,i),children:e})},wu=d.memo((function(n){const r=Bu("useWindowScroll"),o=Bu("topItemsIndexes").length>0,i=Bu("customScrollParent"),a=Bu("context"),l=i||r?Iu:Ou,s=i||r?xu:bu;return e(l,{...n,...hu(l,a),children:[o&&t(Su,{children:t(su,{showTopList:!0})}),e(s,{children:[t(mu,{}),t(su,{}),t(gu,{})]})]})})),{Component:$u,useEmitter:Fu,useEmitterValue:Bu,usePublisher:Tu}=Uc(ru,{required:{},optional:{restoreStateFrom:"restoreStateFrom",context:"context",followOutput:"followOutput",itemContent:"itemContent",groupContent:"groupContent",overscan:"overscan",increaseViewportBy:"increaseViewportBy",totalCount:"totalCount",groupCounts:"groupCounts",topItemCount:"topItemCount",firstItemIndex:"firstItemIndex",initialTopMostItemIndex:"initialTopMostItemIndex",components:"components",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",computeItemKey:"computeItemKey",defaultItemHeight:"defaultItemHeight",fixedItemHeight:"fixedItemHeight",itemSize:"itemSize",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"HeaderFooterTag",data:"data",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",alignToBottom:"alignToBottom",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",horizontalDirection:"horizontalDirection",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver"},methods:{scrollToIndex:"scrollToIndex",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollBy:"scrollBy",autoscrollToBottom:"autoscrollToBottom",getState:"getState"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",totalListHeightChanged:"totalListHeightChanged",itemsRendered:"itemsRendered",groupIndices:"groupIndices"}},wu),Ou=vu({useEmitter:Fu,useEmitterValue:Bu,usePublisher:Tu}),Iu=yu({useEmitter:Fu,useEmitterValue:Bu,usePublisher:Tu}),Du=$u,Cu={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},ku={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Hu,floor:Eu,max:ju,min:zu,round:Ru}=Math;function _u(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function Mu(e,t){return e&&e.width===t.width&&e.height===t.height}function Au(e,t){return e&&e.column===t.column&&e.row===t.row}const Pu=ts((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:l,scrollTo:s,scrollTop:c,smoothScrollTargetReached:u,viewportHeight:d},f,h,{didMount:p,propsReady:m},{customScrollParent:g,useWindowScroll:v,windowScrollContainerState:y,windowScrollTo:b,windowViewportRect:x},S])=>{const w=Xl(0),$=Xl(0),F=Xl(Cu),B=Xl({height:0,width:0}),T=Xl({height:0,width:0}),O=Kl(),I=Kl(),D=Xl(0),C=Xl(null),k=Xl({column:0,row:0}),H=Kl(),E=Kl(),j=Xl(!1),z=Xl(0),R=Xl(!0),_=Xl(!1),M=Xl(!1);jl(Ul(p,Zl(z),Nl((([e,t])=>!!t))),(()=>{zl(R,!1)})),jl(Ul(rs(p,R,T,B,z,_),Nl((([e,t,n,r,,o])=>e&&!t&&0!==n.height&&0!==r.height&&!o))),(([,,,,e])=>{zl(_,!0),lc(1,(()=>{zl(O,e)})),Al(Ul(c),(()=>{zl(t,[0,0]),zl(R,!0)}))})),Ml(Ul(E,Nl((e=>null!=e&&e.scrollTop>0)),Yl(0)),$),jl(Ul(p,Zl(E),Nl((([,e])=>null!=e))),(([,e])=>{e&&(zl(B,e.viewport),zl(T,e.item),zl(k,e.gap),e.scrollTop>0&&(zl(j,!0),Al(Ul(c,ql(1)),(e=>{zl(j,!1)})),zl(s,{top:e.scrollTop})))})),Ml(Ul(B,Vl((({height:e})=>e))),d),Ml(Ul(rs(os(B,Mu),os(T,Mu),os(k,((e,t)=>e&&e.column===t.column&&e.row===t.row)),os(c)),Vl((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),H),Ml(Ul(rs(os(w),r,os(k,Au),os(T,Mu),os(B,Mu),os(C),os($),os(j),os(R),os(z)),Nl((([,,,,,,,e])=>!e)),Vl((([e,[t,n],r,o,i,a,l,,s,c])=>{const{column:u,row:d}=r,{height:f,width:h}=o,{width:p}=i;if(0===l&&(0===e||0===p))return Cu;if(0===h){const t=sc(c,e);return function(e){return{...ku,items:e}}(_u(t,t+Math.max(l-1,0),a))}const m=Lu(p,h,u);let g,v;s?0===t&&0===n&&l>0?(g=0,v=l-1):(g=m*Eu((t+d)/(f+d)),v=m*Hu((n+d)/(f+d))-1,v=zu(e-1,ju(v,m-1)),g=zu(v,ju(0,g))):(g=0,v=-1);const y=_u(g,v,a),{bottom:b,top:x}=Wu(i,r,o,y),S=Hu(e/m);return{bottom:b,itemHeight:f,items:y,itemWidth:h,offsetBottom:S*f+(S-1)*d-b,offsetTop:x,top:x}}))),F),Ml(Ul(C,Nl((e=>null!==e)),Vl((e=>e.length))),w),Ml(Ul(rs(B,T,F,k),Nl((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),Vl((([e,t,{items:n},r])=>{const{bottom:o,top:i}=Wu(e,r,t,n);return[i,o]})),Wl(Rs)),t);const A=Xl(!1);Ml(Ul(c,Zl(A),Vl((([e,t])=>t||0!==e))),A);const P=es(Ul(rs(F,w),Nl((([{items:e}])=>e.length>0)),Zl(A),Nl((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),Vl((([[,e]])=>e-1)),Wl())),L=es(Ul(os(F),Nl((({items:e})=>e.length>0&&0===e[0].index)),Yl(0),Wl())),W=es(Ul(os(F),Zl(j),Nl((([{items:e},t])=>e.length>0&&!t)),Vl((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Wl(zs),Jl(0)));Ml(W,h.scrollSeekRangeChanged),Ml(Ul(O,Zl(B,T,w,k),Vl((([e,t,n,r,o])=>{const i=ic(e),{align:a,behavior:l,offset:s}=i;let c=i.index;"LAST"===c&&(c=r-1),c=ju(0,c,zu(r-1,c));let u=Nu(t,o,n,c);return"end"===a?u=Ru(u-t.height+n.height):"center"===a&&(u=Ru(u-t.height/2+n.height/2)),s&&(u+=s),{behavior:l,top:u}}))),s);const N=Ql(Ul(F,Vl((e=>e.offsetBottom+e.bottom))),0);return Ml(Ul(x,Vl((e=>({height:e.visibleHeight,width:e.visibleWidth})))),B),{customScrollParent:g,data:C,deviation:D,footerHeight:o,gap:k,headerHeight:i,increaseViewportBy:e,initialItemCount:$,itemDimensions:T,overscan:n,restoreStateFrom:E,scrollBy:a,scrollContainerState:l,scrollHeight:I,scrollTo:s,scrollToIndex:O,scrollTop:c,smoothScrollTargetReached:u,totalCount:w,useWindowScroll:v,viewportDimensions:B,windowScrollContainerState:y,windowScrollTo:b,windowViewportRect:x,...h,gridState:F,horizontalDirection:M,initialTopMostItemIndex:z,totalListHeight:N,...f,endReached:P,propsReady:m,rangeChanged:W,startReached:L,stateChanged:H,stateRestoreInProgress:j,...S}}),El(xc,ps,pc,jc,rc,zc,ss));function Lu(e,t,n){return ju(1,Eu((e+n)/(Eu(t)+n)))}function Wu(e,t,n,r){const{height:o}=n;if(void 0===o||0===r.length)return{bottom:0,top:0};const i=Nu(e,t,n,r[0].index);return{bottom:Nu(e,t,n,r[r.length-1].index)+o,top:i}}function Nu(e,t,n,r){const o=Lu(e.width,n.width,t.column),i=Eu(r/o),a=i*n.height+ju(0,i-1)*t.row;return a>0?a+t.row:a}const Vu=ts((()=>{const e=Xl((e=>`Item ${e}`)),t=Xl({}),n=Xl(null),r=Xl("virtuoso-grid-item"),o=Xl("virtuoso-grid-list"),i=Xl(tu),a=Xl("div"),l=Xl(Cl),s=(e,n=null)=>Ql(Ul(t,Vl((t=>t[e])),Wl()),n),c=Xl(!1),u=Xl(!1);return Ml(os(u),c),{components:t,computeItemKey:i,context:n,FooterComponent:s("Footer"),HeaderComponent:s("Header"),headerFooterTag:a,itemClassName:r,ItemComponent:s("Item","div"),itemContent:e,listClassName:o,ListComponent:s("List","div"),readyStateChanged:c,reportReadyState:u,ScrollerComponent:s("Scroller","div"),scrollerRef:l,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder","div")}})),Yu=ts((([e,t])=>({...e,...t})),El(Pu,Vu)),Uu=d.memo((function(){const e=ed("gridState"),n=ed("listClassName"),r=ed("itemClassName"),o=ed("itemContent"),i=ed("computeItemKey"),a=ed("isSeeking"),l=td("scrollHeight"),s=ed("ItemComponent"),c=ed("ListComponent"),u=ed("ScrollSeekPlaceholder"),f=ed("context"),h=td("itemDimensions"),p=td("gap"),m=ed("log"),g=ed("stateRestoreInProgress"),v=td("reportReadyState"),y=cs(d.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();h({height:e,width:t})}p({column:od("column-gap",getComputedStyle(e).columnGap,m),row:od("row-gap",getComputedStyle(e).rowGap,m)})}),[l,h,p,m]),!0,!1);return Jc((()=>{e.itemHeight>0&&e.itemWidth>0&&v(!0)}),[e]),g?null:t(c,{className:n,ref:y,...hu(c,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((n=>{const l=i(n.index,n.data,f);return a?t(u,{...hu(u,f),height:e.itemHeight,index:n.index,width:e.itemWidth},l):w(s,{...hu(s,f),className:r,"data-index":n.index,key:l},o(n.index,n.data,f))}))})})),Gu=d.memo((function(){const e=ed("HeaderComponent"),n=td("headerHeight"),r=ed("headerFooterTag"),o=cs(d.useMemo((()=>e=>{n(Ps(e,"height"))}),[n]),!0,!1),i=ed("context");return e?t(r,{ref:o,children:t(e,{...hu(e,i)})}):null})),qu=d.memo((function(){const e=ed("FooterComponent"),n=td("footerHeight"),r=ed("headerFooterTag"),o=cs(d.useMemo((()=>e=>{n(Ps(e,"height"))}),[n]),!0,!1),i=ed("context");return e?t(r,{ref:o,children:t(e,{...hu(e,i)})}):null})),Ju=({children:e})=>{const n=d.useContext(qc),r=td("itemDimensions"),o=td("viewportDimensions"),i=cs(d.useMemo((()=>e=>{o(e.getBoundingClientRect())}),[o]),!0,!1);return d.useEffect((()=>{n&&(o({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,o,r]),t("div",{ref:i,style:du(!1),children:e})},Zu=({children:e})=>{const n=d.useContext(qc),r=td("windowViewportRect"),o=td("itemDimensions"),i=ed("customScrollParent"),a=hs(r,i,!1);return d.useEffect((()=>{n&&(o({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,o]),t("div",{ref:a,style:du(!1),children:e})},Xu=d.memo((function({...n}){const r=ed("useWindowScroll"),o=ed("customScrollParent"),i=o||r?rd:nd,a=o||r?Zu:Ju,l=ed("context");return t(i,{...n,...hu(i,l),children:e(a,{children:[t(Gu,{}),t(Uu,{}),t(qu,{})]})})})),{Component:Qu,useEmitter:Ku,useEmitterValue:ed,usePublisher:td}=Uc(Yu,{optional:{context:"context",totalCount:"totalCount",overscan:"overscan",itemContent:"itemContent",components:"components",computeItemKey:"computeItemKey",data:"data",initialItemCount:"initialItemCount",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"headerFooterTag",listClassName:"listClassName",itemClassName:"itemClassName",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",restoreStateFrom:"restoreStateFrom",initialTopMostItemIndex:"initialTopMostItemIndex",increaseViewportBy:"increaseViewportBy"},methods:{scrollTo:"scrollTo",scrollBy:"scrollBy",scrollToIndex:"scrollToIndex"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",stateChanged:"stateChanged",readyStateChanged:"readyStateChanged"}},Xu),nd=vu({useEmitter:Ku,useEmitterValue:ed,usePublisher:td}),rd=yu({useEmitter:Ku,useEmitterValue:ed,usePublisher:td});function od(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,as.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const id={collections:{base:{InputBoxShadow:O`
        inset 0 0 4px 0px ${Pr.Shadow.Accent}
    `,InputErrorBoxShadow:O`
        inset 0 0 4px 0px ${Pr.Shadow.Red}
    `,ElevationBoxShadow:O`
      0px 2px 8px ${Pr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:O`
        inset 0 0 3px 0px ${Pr.Shadow.Accent}
    `,InputErrorBoxShadow:O`
        inset 0 0 3px 0px ${Pr.Shadow.Red}
    `,ElevationBoxShadow:O`
      0px 2px 8px ${Pr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},ad=e=>t=>{var n;const r=t.theme,o=Br(id,r[Tr.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Fr(o,e,r.options.designToken):Fr(o,e)},ld={InputBoxShadow:ad("InputBoxShadow"),InputErrorBoxShadow:ad("InputErrorBoxShadow"),ElevationBoxShadow:ad("ElevationBoxShadow"),Table:{Header:ad("Table.Header"),Cell:{Primary:ad("Table.Cell.Primary"),Secondary:ad("Table.Cell.Secondary"),Selected:ad("Table.Cell.Selected"),Hover:ad("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:ad("Button.Danger.BackgroundColor"),Hover:ad("Button.Danger.Hover"),Primary:ad("Button.Danger.Primary"),Border:ad("Button.Danger.Border")}}},sd={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},cd=e=>Object.keys(sd).reduce(((t,n)=>{const r=sd[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),ud=cd("max-width"),dd=(cd("min-width"),sd),fd=T.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,hd=D`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,pd=T.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Pr.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${hd} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,md=T(pd)`
    animation-delay: -0.45s;
`,gd=T(pd)`
    animation-delay: -0.3s;
`,vd=T(pd)`
    animation-delay: -0.15s;
`,yd=T.button`
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
                    background-color: ${Pr.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?ld.Button.Danger.Border:Pr.Primary};

                    color: ${e.$buttonIsDanger?ld.Button.Danger.Primary:Pr.Primary};
                `;case"light":return O`
                    background-color: ${Pr.Neutral[8]};
                    border: 1px solid ${Pr.Neutral[5]};

                    color: ${e.$buttonIsDanger?ld.Button.Danger.Primary:Pr.Primary};
                `;case"disabled":return O`
                    background-color: ${Pr.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Pr.Neutral[3]};
                `;case"link":return O`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?ld.Button.Danger.Primary:Pr.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?ld.Button.Danger.Hover:Pr.Secondary};
                    }
                `;default:return O`
                    background-color: ${e.$buttonIsDanger?ld.Button.Danger.BackgroundColor:Pr.Primary};
                    border: 1px solid transparent;

                    ${ud.mobileL} {
                        width: 100%;
                    }

                    color: ${Pr.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?O`
                    height: 2.5rem;
                    ${zr("H5","semibold")}

                    ${ud.mobileS} {
                        height: auto;
                    }
                `:O`
                    height: 3rem;
                    ${zr("H4","semibold")}

                    ${ud.mobileS} {
                        height: auto;
                    }
                `}
`,bd=T((({color:n,className:r,size:o=18})=>e(fd,Object.assign({className:r,$size:o,$color:n,"data-testid":"component-loading-spinner"},{children:[t(pd,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(md,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(gd,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(vd,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?ld.Button.Danger.Primary:Pr.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Pr.Neutral[3](e);break;default:t=Pr.Neutral[8](e)}return O`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var xd={exports:{}};xd.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",x={};x[b]=g;var S="$isDayjsObject",w=function(e){return e instanceof T||!(!e||!e[S])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),n&&(x[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;x[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},F=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new T(n)},B=y;B.l=$,B.i=w,B.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function g(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[S]=!0}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return B},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return F(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<F(e)},v.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!B.u(t)||t,u=B.p(e),h=function(e,t){var o=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},p=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,g):h(0,g+1);case s:var b=this.$locale().weekStart||0,x=(m<b?m+7:m)-b;return h(r?v-x:v+(6-x),g);case l:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case o:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,s=B.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],p=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var m=this.clone().set(f,1);m.$d[h](p),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[B.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var p=B.p(u),m=function(e){var t=F(h);return B.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===l)return m(1);if(p===s)return m(7);var g=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,v=this.$d.getTime()+r*g;return B.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=B.z(this),i=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return B.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return B.s(t.$y,4,"0");case"M":return l+1;case"MM":return B.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return B.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return B.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return B.s(a,2,"0");case"s":return String(t.$s);case"ss":return B.s(t.$s,2,"0");case"SSS":return B.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var p,m=this,g=B.p(f),v=F(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,x=function(){return B.m(m,v)};switch(g){case d:p=x()/12;break;case c:p=x();break;case u:p=x()/3;break;case s:p=(b-y)/6048e5;break;case l:p=(b-y)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:B.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return x[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return B.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),O=T.prototype;return F.prototype=O,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,T,F),e.$i=!0),F},F.locale=$,F.isDayjs=w,F.unix=function(e){return F(1e3*e)},F.en=x[b],F.Ls=x,F.p={},F}();var Sd=ne(xd.exports),wd={exports:{}};wd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,o=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},l=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},f={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[o,s("seconds")],ss:[o,s("seconds")],m:[o,s("minutes")],mm:[o,s("minutes")],H:[o,s("hours")],h:[o,s("hours")],HH:[o,s("hours")],hh:[o,s("hours")],D:[o,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[o,s("week")],ww:[r,s("week")],M:[o,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=l(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function h(n){var r,o;r=n,o=a&&a.formats;for(var i=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=i.length,s=0;s<l;s+=1){var c=i[s],u=f[c],d=u&&u[0],h=u&&u[1];i[s]=h?{regex:d,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=i[n];if("string"==typeof o)r+=o.length;else{var a=o.regex,s=o.parser,c=e.slice(r),u=a.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(l=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,i=e.args;this.$u=r;var l=i[1];if("string"==typeof l){var s=!0===i[2],c=!0===i[3],u=s||c,d=i[2];c&&(d=i[2]),a=this.$locale(),!s&&d&&(a=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var o=h(t)(e),i=o.year,a=o.month,l=o.day,s=o.hours,c=o.minutes,u=o.seconds,d=o.milliseconds,f=o.zone,p=o.week,m=new Date,g=l||(i||a?1:m.getDate()),v=i||m.getFullYear(),y=0;i&&!a||(y=a>0?a-1:m.getMonth());var b,x=s||0,S=c||0,w=u||0,$=d||0;return f?new Date(Date.UTC(v,y,g,x,S,w,$+60*f.offset*1e3)):n?new Date(Date.UTC(v,y,g,x,S,w,$)):(b=new Date(v,y,g,x,S,w,$),p&&(b=r(b).week(p).toDate()),b)}catch(e){return new Date("")}}(t,l,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var f=l.length,p=1;p<=f;p+=1){i[1]=l[p-1];var m=n.apply(this,i);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var $d=ne(wd.exports),Fd={exports:{}};Fd.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],s=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var Bd=ne(Fd.exports),Td={exports:{}};Td.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Od=ne(Td.exports),Id={exports:{}};Id.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Dd,Cd,kd=ne(Id.exports),Hd={exports:{}};Hd.exports=(Dd={year:0,month:1,day:2,hour:3,minute:4,second:5},Cd={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Cd[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Cd[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=Dd[s];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o,i=this.utcOffset(),a=this.toDate(),l=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(l))/1e3/60),c=15*-Math.round(a.getTimezoneOffset()/15)-s;if(Number(c)){if(o=n(l,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var u=o.utcOffset();o=o.add(i-u,"minute")}}else o=this.utcOffset(0,t);return o.$x.$timezone=e,o},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var Ed,jd=ne(Hd.exports);Sd.extend(Bd),Sd.extend(kd),Sd.extend(Od),Sd.extend($d),Sd.extend(jd),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Sd(t).startOf("week");return zd(n).map((e=>Rd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Rd(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Sd(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Sd(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Sd(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?Sd(r):void 0,o?Sd(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ed||(Ed={}));const zd=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Rd=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},_d=[1,3,5,7,8,10,12],Md=[4,6,9,11];var Ad,Pd,Ld;function Wd(e){const t=f(null);return b((()=>{t.current=e}),[e]),x(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":_d.includes(i)?Math.min(o,31).toString():Md.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Sd(e,n);return Sd(t,n).diff(r,"minute")},e.toDayjs=e=>e?Sd(e):Sd(),e.addMinutesToTime=(e,t,n="HH:mm")=>Sd(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Sd(e).isSame(Sd(t),n)}(Ad||(Ad={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Sd(e).isBefore(r,"day"))||!(!o||!Sd(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Sd(e).isValid())return e}return""}}(Pd||(Pd={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ld||(Ld={}));const Nd=e=>{const t=(e=>{const t=f(e),n=f();return y((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},Vd=d.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Yd=({children:e})=>{const[n,r]=h(-1);return t(Vd.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:e}))},Ud=O`
    border: 1px solid ${Pr.Accent.Light[1]};
    box-shadow: ${ld.InputBoxShadow};
`,Gd=O`
    border: 1px solid ${Pr.Accent.Light[1]};
    box-shadow: none;
`,qd=O`
    border: 1px solid ${Pr.Neutral[5]};
    box-shadow: none;
`,Jd=O`
    border: 1px solid ${Pr.Validation.Red.Border};
    box-shadow: ${ld.InputErrorBoxShadow};
`,Zd=T.div`
    border: 1px solid ${Pr.Neutral[5]};
    border-radius: 4px;
    background: ${Pr.Neutral[8]};

    :focus-within {
        ${Ud}
    }
    ${e=>e.$focused&&Ud}

    ${e=>e.$readOnly?O`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Gd}
                }
                ${e.$focused&&Gd}
            `:e.$disabled?O`
                background: ${Pr.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${qd}
                }
                ${e.$focused&&qd}
            `:e.$error?O`
                border: 1px solid ${Pr.Validation.Red.Border};

                :focus-within {
                    ${Jd}
                }
                ${e.$focused&&Jd}
            `:void 0}
`,Xd=T(Zd)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Qd=T.input`
    ${e=>zr("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Pr.Neutral[1]};
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
        color: ${Pr.Neutral[3]};
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
`,Kd=T.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Pr.Primary};
    }
`,ef=T.div`
    overflow: hidden;
    border: 1px solid ${Pr.Neutral[5]};
    border-radius: 4px;
    background: ${Pr.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${ud.mobileL} {
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
        background: ${Pr.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,tf=T.div`
    background: transparent;
    padding: 0.5rem;
`,nf=T.ul`
    list-style-type: none;
`,rf=T.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Pr.Accent.Light[3]};

    ${e=>e.$active&&O`
            background: ${Pr.Accent.Light[5]};
        `}
`,of=T(R)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Pr.Primary};
`,af=T.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,lf=T(z)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Pr.Primary};
`,sf=T(j)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Pr.Accent.Light[2]};
`,cf=T.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,uf=T(Kd)`
    ${e=>zr("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Pr.Primary};
`,df=T(uf)`
    outline-offset: 0.25rem;
`,ff=T(uf)`
    padding: 0.5rem 1rem;
`,hf=T.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,pf=T.div`
    ${e=>zr("small"===e.$variant?"BodySmall":"Body","regular")}
`,mf=T(E)`
    ${e=>{const t="small"===e.$variant?1:1.125;return O`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Pr.Validation.Red.Icon};
`,gf=T.button`
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
                background-color: ${Pr.Neutral[7]};
            `}
    }
`,vf=d.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=_r(e,["children","focusHighlight","focusOutline","type"]);return t(gf,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),yf=e=>"small"===e?1:1.125,bf=e=>O`
        height: ${yf(e)}rem;
        width: ${yf(e)}rem;
    `,xf=T.div`
    background: ${Pr.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,Sf=T.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,wf=T(Qd)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,$f=T(M)`
    color: ${Pr.Neutral[3]};
    flex-shrink: 0;
    ${e=>bf(e.$variant)}
`,Ff=T(vf)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Pr.Neutral[3]};
    cursor: pointer;

    ${e=>O`
            svg {
                ${bf(e.$variant)}
            }
        `}
`,Bf=$(((n,r)=>{var{value:o,variant:i,onClear:a}=n,l=_r(n,["value","variant","onClear"]);return e(xf,{children:[e(Sf,{children:[t($f,{$variant:i,"aria-hidden":!0}),t(wf,Object.assign({ref:r,value:o,$variant:i},l))]}),o&&t(Ff,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:t(_,{"aria-hidden":!0})}))]})})),Tf=({listItems:r,multiSelect:o,selectedItems:i,disableItemFocus:a,itemsLoadState:l="success",itemTruncationType:s="end",itemMaxLines:c=2,labelDisplayType:u="inline",variant:d="default",listboxId:p,width:m,topScrollItem:g,onSelectItem:v,onSelectAll:b,onDismiss:S,onRetry:w,valueExtractor:$,listExtractor:B,renderListItem:T,renderCustomCallToAction:O,enableSearch:I,hideNoResultsDisplay:D,searchPlaceholder:C="Search",searchFunction:k,onSearch:H})=>{const{focusedIndex:E,setFocusedIndex:j}=F(Vd),[z,R]=h(""),[_,M]=h(r),A=Nd(l),P=(()=>{const[e,t]=h(!1);return y((()=>{t(!0)}),[]),e})(),L=f(),W=f(),N=f([]),V=f(),Y=f(null),U=e=>B?B(e):e.toString(),G=x((e=>!!wl(i,(t=>Fl(t,e)))),[i]),q=Wd((()=>k(z))),J=Wd((()=>r.filter((e=>{var t;const n=U(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),i=z.trim().toLowerCase();return r.includes(i)||o&&o.includes(i)})))),Z=(e,t)=>{j(t),null==v||v(e,(e=>$?$(e):e)(e))},X=e=>{const t=e.target.value;R(t),null==H||H()},Q=()=>{var e;R(""),null===(e=V.current)||void 0===e||e.focus(),null==H||H()},K=()=>{null==w||w()};((e,t,n="window",r)=>{const o=f();y((()=>{o.current=t}),[t]),y((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])})("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),E<_.length-1){const e=E+1;null===(t=N.current[e])||void 0===t||t.focus(),j(e)}break;case"ArrowUp":if(e.preventDefault(),E>0){const e=E-1;null===(n=N.current[e])||void 0===n||n.focus(),j(e)}else 0===E&&V.current&&(V.current.focus(),j(-1));break;case"Space":case"Enter":document.activeElement===N.current[E]&&(e.preventDefault(),_[E]&&Z(_[E],E))}})),y((()=>{if(!g&&Y.current)return void Y.current.scrollTo({top:0});const e=setTimeout((()=>{const e=r.indexOf(g);Y.current&&-1!==e&&(Y.current.scrollToIndex({index:e}),j(e))}),0);return()=>clearTimeout(e)}),[N,r,j,g]),y((()=>{var e,t,n;if(P)return;if(a)return;const o=r.findIndex((e=>G(e)));V.current?(j(-1),setTimeout((()=>V.current.focus()),200)):E>0?(null===(e=Y.current)||void 0===e||e.scrollToIndex({index:E,align:"center"}),setTimeout((()=>{var e;return null===(e=N.current[E])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=Y.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),j(o),setTimeout((()=>{var e;return null===(e=N.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(n=Y.current)||void 0===n||n.scrollToIndex({index:0}),j(0),setTimeout((()=>{var e;return null===(e=N.current[0])||void 0===e?void 0:e.focus()}),200))}),[G,a,E,r,P,j]),y((()=>{P&&A&&(a||"success"===l&&V.current&&(j(-1),V.current.focus()))}),[P,A,l,j,a]),y((()=>{M(""===z?r:k?q():J())}),[q,J,r,k,z]);const ee=e=>o?t(e?lf:sf,{"aria-hidden":!0}):e?t(of,{"aria-hidden":!0}):t(af,{}),te=(e,n)=>{const r=U(e),o="string"==typeof r?r:r.title,i="string"==typeof r?void 0:r.secondaryLabel;return t(to,{displayType:u,label:o,maxLines:c,selected:n,sublabel:i,truncationType:s,variant:d})},ne=(r,i)=>{if(!w||w&&"success"===l){const a=G(r),l=i===E;return t(rf,Object.assign({"aria-selected":a,"aria-multiselectable":o,"data-testid":"list-item",onClick:()=>Z(r,i),onMouseEnter:()=>(e=>{j(e)})(i),ref:e=>{N.current[i]=e},role:"option",tabIndex:l?0:-1,$active:l},{children:T?T(r,{selected:a}):e(n,{children:[ee(a),te(r,a)]})}),((e,t)=>`item_${t}__${$?$(e):e}`)(r,i))}},re=()=>{if((I||k)&&"success"===l)return t(Bf,{ref:V,onChange:X,value:z,placeholder:C,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Q,variant:d})},oe=()=>{if(o&&_.length>0&&!z&&"success"===l)return t(cf,{children:t(ff,Object.assign({onClick:b,type:"button",$variant:d},{children:0===i.length?"Select all":"Clear all"}))})},ie=()=>{if(!D&&(z||!I)&&0===_.length&&"success"===l)return e(hf,Object.assign({"data-testid":"list-no-results"},{children:[t(mf,{"data-testid":"no-result-icon",$variant:d}),t(pf,Object.assign({$variant:d},{children:"No results found."}))]}))},ae=()=>{if(w&&"loading"===l){const n="small"===d?16:18;return e(hf,Object.assign({"data-testid":"list-loading"},{children:[t(bd,{$buttonStyle:"secondary",size:n}),t(pf,Object.assign({$variant:d},{children:"Loading..."}))]}))}},le=()=>{if(w&&"fail"===l)return e(hf,Object.assign({"data-testid":"list-fail"},{children:[t(mf,{"data-testid":"load-error-icon",$variant:d}),t(pf,Object.assign({$variant:d},{children:"Failed to load."}))," ",t(df,Object.assign({onClick:K,type:"button",$variant:d},{children:"Try again."}))]}))},se=()=>{const e="test"===process.env.NODE_ENV;return t(nf,Object.assign({role:"listbox",id:p},{children:t(Du,Object.assign({ref:Y,style:{height:"100%"},data:_,customScrollParent:L.current,itemContent:(e,t)=>ne(t,e)},e?{initialItemCount:_.length}:{}),e?_.length:void 0)}))};return e(ef,Object.assign({"data-testid":"dropdown-container",ref:L,$width:m},{children:[e(tf,Object.assign({ref:W,"data-testid":"dropdown-list"},{children:[re(),oe(),ie(),ae(),le(),se()]})),(()=>{if(O)return t("div",Object.assign({"data-testid":"custom-cta"},{children:O(S,_)}))})()]}))},Of="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",If=T(Kd)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>zr("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Df=T.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Of};

    svg {
        color: ${Pr.Neutral[3]};
        ${e=>{const t="small"===e.$variant?Dr.BodySmall.fontSize:Dr.Body.fontSize;return O`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,Cf=$((({children:n,disabled:r,expanded:o,listboxId:i,popupRole:a,readOnly:l,variant:s},c)=>e(If,Object.assign({ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:s},{children:[n,!l&&t(Df,Object.assign({$expanded:o,$variant:s},{children:t(A,{"aria-hidden":!0})}))]}))));T.li`
    display: ${e=>e.$visible?"flex":"none"};
`,T.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${Pr.Accent.Light[3]};

    ${e=>e.$active&&O`
            background: ${Pr.Accent.Light[5]};
        `}
`,T.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,T.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${Pr.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return O`
                    transform: rotate(90deg);
                `}}
    }
`,T.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,T.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,T(R)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Pr.Primary};
`,T(P)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Pr.Primary};
`;const kf=e=>"small"===e?2.5:3;T.div`
    position: relative;
    width: 100%;
    ${e=>{const t=kf(e.$variant);return O`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Hf=O`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>kf(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Pr.Accent.Light[3]};
    }
`,Ef=T.button`
    ${Hf}
    cursor: pointer;
`;T.div`
    ${Hf}
`;const jf=D`
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
`;T.div`
    position: relative;
    border: 1px solid ${Pr.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Pr.Neutral[8]};

    :focus-within {
        border: 1px solid ${Pr.Accent.Light[1]};
        box-shadow: ${ld.InputBoxShadow};
    }

    ${e=>e.expanded?O`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:O`
                animation: ${jf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?O`
                background: ${Pr.Neutral[6](e)};

                ${Ef} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Pr.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?O`
                border: none;
                background: transparent !important;

                ${Ef} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?O`
                border: 1px solid ${Pr.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Pr.Validation.Red.Border(e)};
                    box-shadow: ${ld.InputErrorBoxShadow};
                }
            `:void 0}
`,T.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Of};
    margin-left: 1rem;
`,T(A)`
    color: ${Pr.Neutral[3]};
    ${e=>{let t=Dr.Body.fontSize;return"small"===e.$variant&&(t=Dr.BodySmall.fontSize),O`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,T.div`
    height: 1px;
    background: ${Pr.Neutral[5]};
    margin: 0 0.5rem;
`;const zf=T.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return O`
                color: ${Pr.Neutral[3]};
            `}}
`,Rf=T.div`
    ${e=>zr("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return O`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,_f=T(Rf)`
    color: ${Pr.Neutral[3]};
`;var Mf;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Mf||(Mf={}));const Af=T.div`
    display: flex;
    flex-direction: column;
`,Pf=e=>"right"===e?"bottom-end":"bottom-start",Lf=({enabled:r,isOpen:o,onOpen:i,onClose:a,onDismiss:l,renderElement:s,renderDropdown:c,customZIndex:u,clickToToggle:d=!1,offset:p=0,alignment:m="left",fitAvailableHeight:g})=>{var v;const b=f(null),x=f(null),{width:S}=et({targetRef:b,handleHeight:!1}),w={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<dd.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:$,floatingStyles:F,context:B}=W({open:o,onOpenChange:(e,t,n)=>{"escape-key"===n?null==l||l():e&&!o?null==i||i():!e&&o&&(null==a||a(n))},whileElementsMounted:N,placement:Pf(m),middleware:[V(p),Y(),U({limiter:G()}),q({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:g?`${e}px`:void 0,overflowY:g?"hidden":void 0})}}),w]}),T=(()=>{const[e,t]=h(void 0),n=L();return y((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Mf.Change,e),n.events.emit(Mf.Ready),()=>n.events.off(Mf.Change,e)}),[n]),e})(),{isMounted:O,styles:I}=J(B,{initial:{opacity:0},open:{opacity:1},duration:300}),D=Z(B,{enabled:r,toggle:d}),C=X(B,{enabled:r}),{getReferenceProps:k,getFloatingProps:H}=Q([D,C]);return e(n,{children:[t("div",Object.assign({ref:e=>{b.current=e,$.setReference(e)}},k(),{children:s()})),O&&t(K,{children:t(ee,Object.assign({context:B,modal:!1,initialFocus:x,returnFocus:!1},{children:t("div",Object.assign({ref:$.setFloating,style:Object.assign(Object.assign({},F),{zIndex:null!==(v=null!=u?u:T)&&void 0!==v?v:50})},H(),{children:t(Af,Object.assign({ref:x,style:Object.assign({},I),inert:I.opacity<1?"":void 0},{children:c({elementWidth:S})}))}))}))})]})},Wf=({selectedOption:e,placeholder:n="Select",options:r,disabled:o,error:i,className:a,"data-testid":l,id:s,enableSearch:c=!1,searchFunction:u,searchPlaceholder:d,valueExtractor:p,valueToStringFunction:m,listExtractor:g,displayValueExtractor:v,onSelectOption:b,onShowOptions:x,onHideOptions:S,onRetry:w,optionsLoadState:$="success",optionTruncationType:F="end",renderCustomSelectedOption:B,renderListItem:T,hideNoResultsDisplay:O,renderCustomCallToAction:I,onBlur:D,variant:C="default",readOnly:k,alignment:H,dropdownZIndex:E})=>{const[j,z]=h(e),[R,_]=h(!1),[M,A]=h(!1),[P]=h((()=>Ld.generate())),L=f(),W=f(),N=f();y((()=>{z(e)}),[e]);const V=(e,t)=>{var n;null===(n=W.current)||void 0===n||n.focus(),z(e),_(!1),J(!1),null==b||b(e,t)},Y=()=>{R&&(_(!1),J(!1))},U=()=>{M||R||A(!0)},G=e=>{M&&!R&&L.current&&!L.current.contains(e.relatedTarget)&&(A(!1),null==D||D())},q=e=>{if("middle"===F){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),Gr.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(e),t,120,8)}return e},J=e=>{e?null==x||x():null==S||S()};return t(Yd,{children:t(Lf,{enabled:!k&&!o,isOpen:R,renderElement:()=>t(Zd,Object.assign({className:a,"data-testid":l,id:s,ref:L,tabIndex:-1,onFocus:U,onBlur:G,$focused:M,$disabled:o,$readOnly:k,$error:i},{children:t(Cf,Object.assign({ref:W,disabled:o,expanded:R,listboxId:P,popupRole:"listbox",readOnly:k,variant:C},{children:t(zf,Object.assign({ref:N,$disabled:o},{children:j?B?B(j):t(Rf,Object.assign({truncateType:F,$variant:C},{children:q(v?v(j):p?p(j):j.toString())})):t(_f,Object.assign({truncateType:F,$variant:C},{children:n}))}))}))})),renderDropdown:({elementWidth:e})=>t(Tf,{listboxId:P,listItems:r,onSelectItem:V,onDismiss:Y,valueExtractor:p,listExtractor:g,enableSearch:c,searchPlaceholder:d,searchFunction:u,selectedItems:j?[j]:[],onRetry:w,itemsLoadState:$,itemTruncationType:F,renderListItem:T,hideNoResultsDisplay:O,renderCustomCallToAction:I,variant:C,width:e}),onOpen:()=>{_(!0),J(!0),A(!0)},onClose:e=>{_(!1),J(!1),"click"!==e&&(A(!1),null==D||D())},onDismiss:()=>{var e;null===(e=W.current)||void 0===e||e.focus(),_(!1),J(!1)},clickToToggle:!0,offset:8,alignment:H,fitAvailableHeight:!0,customZIndex:E})})},Nf={Default:d.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=_r(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(yd,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(bd,Object.assign({},u)),t("span",{children:o})]}))})),Small:d.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=_r(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(yd,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(bd,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},Vf=T.input`
    ${zr("Body","regular")}
    color: ${Pr.Neutral[1]};

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
        color: ${Pr.Neutral[3]};
    }

    ${e=>"number"===e.type?O`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?O`
                cursor: not-allowed;
            `:void 0}
`,Yf=T.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Pr.Neutral[3]};
    background-color: transparent;
    border: none;
`,Uf=T(_)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Gf=T.div`
    display: flex;
    width: 100%;
`,qf=d.forwardRef(((r,o)=>{var{value:i,spacing:a,type:l,error:s,disabled:c,readOnly:u,onChange:d,onClear:h,allowClear:p=!1,className:m,styleType:g="bordered"}=r,v=_r(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=f();B(o,(()=>y.current),[]);const b=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,o=t(r),i=r.substring(0,n.selectionEnd),a=t(i),l=i.length-a.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:o,updateCaretPosition:()=>{n.value=o,n.setSelectionRange(s,s)}}}}({ref:y,formatter:e=>Gr.transformWithSpaces(e,a)}),x=e=>{d&&(w()?$(e):d(e))},S=()=>{h&&h(),y&&y.current&&y.current.focus()},w=()=>"tel"===l&&a,$=e=>{const{nextValue:t,updateCaretPosition:n}=b(),r=t.replace(/\s/g,"");e.target.value=r,d(e),n()},F=i?(e=>e?w()?Gr.transformWithSpaces(e,a):e:"")(i):i,T=()=>e(n,{children:[t(Vf,Object.assign({"data-testid":"input",ref:y,disabled:c,value:F,onChange:x,type:l,readOnly:u},v)),p&&!c&&!u&&!!i&&t(Yf,Object.assign({onClick:S,type:"button"},{children:t(Uf,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===g?t(Gf,Object.assign({className:m},{children:T()})):t(Xd,Object.assign({$disabled:c,$error:s,$readOnly:u,className:m},{children:T()}))})})),Jf=T.nav`
    display: flex;
`,Zf=T.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${ud.tablet} {
        align-self: center;
    }
`,Xf=T.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,Qf=T(vf)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${Pr.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Pr.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${Pr.Accent.Light[1]};
    }
`,Kf=T(vf)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${Pr.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Pr.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${Pr.Accent.Light[1]};
    }
    ${e=>"left"===e.$position?O`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:O`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${ud.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,eh=T(Nf.Default)`
    background: ${e=>e.$selected?Pr.Primary:Pr.Neutral[8]};
    border: 1px solid
        ${e=>e.$selected?Pr.Primary:Pr.Neutral[5]};
    color: ${e=>e.$selected?Pr.Neutral[8]:Pr.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${e=>e.$selected?Pr.Neutral[8]:Pr.Neutral[1]};
        ${e=>e.$selected?O`
                    ${zr("Body",700)};
                `:O`
                    ${zr("Body",400)};
                `}
    }
    :hover {
        box-shadow: none;

        background: ${e=>e.$selected?Pr.Primary:Pr.Accent.Light[5]};
        border: 1px solid
            ${e=>e.$selected?Pr.Primary:Pr.Accent.Light[5]};
        span {
            color: ${e=>e.$selected?Pr.Neutral[8]:Pr.Primary};
            ${e=>e.$selected?O`
                        ${zr("Body",700)};
                    `:O`
                        ${zr("Body",600)};
                    `}
        }
    }

    :active,
    :focus {
        background: ${e=>e.$selected?Pr.Primary:Pr.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${Pr.Accent.Light[1]};
        span {
            color: ${e=>e.$selected?Pr.Neutral[8]:Pr.Primary};

            ${e=>e.$selected?O`
                        ${zr("Body",700)};
                    `:O`
                        ${zr("Body",400)};
                    `}
        }
    }
`;T(vf)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Pr.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${Pr.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${Pr.Accent.Light[1]};
    }
`;const th=T.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,nh=T.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${Pr.Neutral[1]};

    display: flex;
    justify-content: center;
`,rh=T(Lr.Body)`
    white-space: nowrap;
`,oh=T(Lr.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,ih=T(qf)`
    ${zr("Body",400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${Pr.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${zr("XSmall",400)};
        }
    }
`,ah=T.div`
    ${zr("XSmall",400)};

    background-color: ${Pr.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${Pr.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,lh=T.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,sh=d.forwardRef((({id:n,"data-testid":u,className:d,pageSize:f=10,totalItems:p,activePage:m,pageSizeOptions:g=ch,showFirstAndLastNav:v,showPageSizeChanger:b=!1,onPageChange:x,onPageSizeChange:S},w)=>{const $=ie.useMediaQuery({maxWidth:sd.mobileL}),F=g,[B,T]=h(!1),[O,I]=h(!1),[D,C]=h(""),[k,H]=h(F&&F.length>=1?F[0]:null),[E,j]=h(!$&&b&&k?k.value:f),z=Math.ceil(p/E),R=1===m,_=m===z,M=m>1?()=>U(1):void 0,A=m<z?()=>U(z):void 0,P=m>1?()=>U(m-1):void 0,L=m<z?()=>U(parseInt(m.toString())+1):void 0,W=e=>e?()=>K():()=>X(),N=e=>e?()=>ee():()=>Q();y((()=>{m&&V(m)}),[m]),y((()=>{var e;j(f),H(null!==(e=F.find((e=>e.value===f)))&&void 0!==e?e:null)}),[f]);const V=e=>{C(e.toString())},Y=()=>{T(!1),I(!1)},U=e=>{x&&(x(e),V(e))},G=()=>{const e=Math.min(z,m+5);U(e),V(e),T(!0),I(!1)},q=()=>{const e=Math.max(1,m-5);U(e),V(e),T(!1),I(!0)},J=e=>{const t=e.target.value;if(void 0===t||0===t.length)C("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));V(Math.max(1,Math.min(z,e)))}else C(t.replace(/[^0-9]/g,""))},Z=e=>{e.preventDefault(),D&&x(parseInt(D))},X=()=>{T(!0)},Q=()=>{T(!1)},K=()=>{I(!0)},ee=()=>{I(!1)},te=(n,i,a)=>e(th,{children:[t(Qf,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":n?"Previous 5 pages":"Next 5 pages",onMouseOver:W(n),onMouseOut:N(n),onFocus:W(n),onBlur:N(n),onClick:n?q:G},{children:t(n&&O?r:i&&B?o:c,{"aria-hidden":!0})})),n&&O&&t(ah,{children:"Previous 5 pages"}),i&&B&&t(ah,{children:"Next 5 pages"})]},a);return e(Jf,Object.assign({className:d,ref:w,id:n||"pagination-wrapper","data-testid":u||"pagination","aria-label":"Pagination"},{children:[t(Zf,{children:e(Xf,{children:[v&&t(Kf,Object.assign({onClick:M,disabled:R,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:t(a,{"aria-hidden":!0})})),t(Kf,Object.assign({onClick:P,disabled:R,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:t(i,{"aria-hidden":!0})})),$?e(nh,{children:[t("form",Object.assign({onSubmit:Z},{children:t(ih,{value:D,onChange:J,autoComplete:"off",type:"numeric",id:(n||"pagination")+"-input","data-testid":(u||"pagination")+"-input"})})),t(oh,{children:"/"}),t(rh,{children:z})]}):[...Array(z)].map(((e,n)=>{const r=n+1,o=z-5,i=m===r;if(z<=7)return t(eh,Object.assign({onClick:()=>U(r),$selected:i,"aria-label":"Page "+r,"aria-current":!!i&&"page",onMouseOver:Y,onFocus:Y},{children:r}),r);const a=m+1>5&&2===r,l=m-1<=o&&r===z-1-1;return a||l?te(a,l,r):r<=5&&m+1<=5||r<=1||r===m||r<=m+1&&r>=m-1-1||r>o&&m-1>o||r>z-1?t(eh,Object.assign({onClick:()=>U(r),$selected:i,"aria-label":"Page "+r,"aria-current":!!i&&"page",onMouseOver:Y,onFocus:Y},{children:r}),r):null})),t(Kf,Object.assign({onClick:L,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:t(s,{"aria-hidden":!0})})),v&&t(Kf,Object.assign({onClick:A,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:t(l,{"aria-hidden":!0})}))]})}),b&&!$&&t(lh,{children:t(Wf,{options:F,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{H(e);const t=e.value,n=Math.ceil(p/t);j(t);S&&S(m>=n?n:m,t)}})})]}))})),ch=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}];export{sh as Pagination};
//# sourceMappingURL=index.js.map
