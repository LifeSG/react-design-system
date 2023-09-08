import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import{CrossIcon as r}from"@lifesg/react-icons/cross";import*as i from"react";import o,{useState as a,useRef as s,useEffect as l,cloneElement as c,isValidElement as u,createRef as d,PureComponent as h,useLayoutEffect as f,forwardRef as p,useCallback as m,useContext as g,useMemo as y}from"react";import v,{findDOMNode as b,unstable_batchedUpdates as w}from"react-dom";import $,{css as S,keyframes as x}from"styled-components";import{ExternalIcon as O}from"@lifesg/react-icons/external";import{CircleIcon as _}from"@lifesg/react-icons/circle";import{CircleDotIcon as k}from"@lifesg/react-icons/circle-dot";import{SquareIcon as j}from"@lifesg/react-icons/square";import{SquareTickFillIcon as D}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as F}from"@lifesg/react-icons/tick";import{ChevronDownIcon as M}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as P}from"@lifesg/react-icons/chevron-left";import{FilterIcon as E}from"@lifesg/react-icons/filter";function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var T,A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},C={exports:{}};T=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,r=e.modifier,i=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=u(i),o=u(o);break;case"resolution":i=c(i),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!n||!i&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),o=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}})),l}))}function l(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(r,a);return o[e]=i.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
  !*** ./node_modules/matchmediaquery/index.js ***!
  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,t,n){var o=this;if(i&&!n){var a=i.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=r(e,t),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,n){return new o(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))n.call(o,c)&&(s[c]=o[c]);if(t){a=t(o);for(var u=0;u<a.length;u++)r.call(o,a[u])&&(s[a[u]]=o[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,n,null,i)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var h=l?l():"";r("Failed "+n+" type: "+u.message+(null!=h?h:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,i,o){var a=t[n];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+r+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||d;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,i,o+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(n)+" at index "+t+"."),c}return m((function(t,n,r,i,o){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,i,o,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,i,o){var s=t[n],l=b(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,i,o,c,w(u));var d=u(s,c,r,i,o+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,i,l){var c=t[n],u=b(c);if("object"!==u)return new p("Invalid "+i+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=o({},t[n],e);for(var h in d){var f=e[h];if(s(e,h)&&"function"!=typeof f)return y(r,i,l,h,w(f));if(!f)return new p("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(c,h,r,i,l+"."+h,a);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},i=0;function o(o,s,l,c,u,h,f){if(c=c||d,h=h||l,f!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function g(e){return m((function(t,n,r,i,o,a){var s=t[n];return b(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+w(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var f=e.type;switch(f){case c:case u:case i:case a:case o:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var $=c,S=u,x=l,O=s,_=n,k=d,j=i,D=m,F=p,M=r,P=a,E=o,B=h,T=!1;function A(e){return w(e)===u}t.AsyncMode=$,t.ConcurrentMode=S,t.ContextConsumer=x,t.ContextProvider=O,t.Element=_,t.ForwardRef=k,t.Fragment=j,t.Lazy=D,t.Memo=F,t.Portal=M,t.Profiler=P,t.StrictMode=E,t.Suspense=B,t.isAsyncMode=function(e){return T||(T=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||w(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===o||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var o=0;o<i;o++){var a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,i=e.onChange,a=r(e,["children","device","onChange"]),s=(0,o.default)(a,n,i);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
  !*** ./src/Context.ts ***!
  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var i=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=i.default;var o=r(n(/*! ./Component */"./src/Component.ts"));t.default=o.default;var a=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=r(n(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
  !*** ./src/mediaQuery.ts ***!
  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=i(c,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),h=r(r({},l),d);t.default={all:h,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),o=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,i.useState)(n),o=r[0],a=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,i.useState)(n),a=r[0],s=r[1],l=d();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),f=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=d();return(0,i.useEffect)((function(){p&&n&&n(f)}),[f]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),C.exports=T(o);const H=$.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return S`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,I=$.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=S`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=S`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=S`
                transition: none;
            `),t}}
`,z=({show:t=!1,rootId:n,onOverlayClick:r,children:i,backgroundOpacity:c,backgroundBlur:u=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:f,id:p})=>{const[m,g]=a(null),[y,b]=a(),w=s(),$=s(!1),S=s(null),x=i&&o.cloneElement(i,{ref:S}),O=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";l((()=>{const e=!0===$.current;if(e||($.current=!0),t){const e=j();if(_(e),!e){const e=setTimeout((()=>{F("add")}),200);return()=>clearTimeout(e)}}else{if(!e)return;if(!w.current){const e=setTimeout((()=>{F("remove")}),200);return()=>clearTimeout(e)}}}),[t]),l((()=>{g(k());const e=j();return _(e),e||D(),()=>{F("remove")}}),[]);const _=e=>{w.current=e,b(e)},k=()=>document&&n?document.getElementById(n):document?document.body:null,j=()=>document.body.classList.contains(N),D=()=>{if(!document.getElementById(R)){const e=document.createElement("style");e.id=R;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${N} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${N}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},F=e=>{const t=document.body.classList.contains(N);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(N):document.body.classList.add(N)},M=e=>{var t;const n=null===(t=S.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&h&&(e.preventDefault(),r())};return m?v.createPortal(e(H,Object.assign({id:O,"data-testid":O,$show:t,zIndex:f,$stacked:y},{children:i&&e(I,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:c||(y?.5:.8),$backgroundBlur:u,$disableTransition:d,$enableOverlayClick:h,onClick:M},{children:x}))})),m):null},R="lifesg-ds-overlay-stylesheet",N="lifesg-ds-overlay-open",W={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var L=function(e,t){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},L(e,t)};var V=function(){return V=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},V.apply(this,arguments)};var Y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var q=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Q="object"==typeof Y&&Y&&Y.Object===Object&&Y,U="object"==typeof self&&self&&self.Object===Object&&self,Z=Q||U||Function("return this")(),G=Z,X=function(){return G.Date.now()},J=/\s/;var K=function(e){for(var t=e.length;t--&&J.test(e.charAt(t)););return t},ee=/^\s+/;var te=function(e){return e?e.slice(0,K(e)+1).replace(ee,""):e},ne=Z.Symbol,re=ne,ie=Object.prototype,oe=ie.hasOwnProperty,ae=ie.toString,se=re?re.toStringTag:void 0;var le=function(e){var t=oe.call(e,se),n=e[se];try{e[se]=void 0;var r=!0}catch(e){}var i=ae.call(e);return r&&(t?e[se]=n:delete e[se]),i},ce=Object.prototype.toString;var ue=le,de=function(e){return ce.call(e)},he=ne?ne.toStringTag:void 0;var fe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":he&&he in Object(e)?ue(e):de(e)},pe=function(e){return null!=e&&"object"==typeof e};var me=te,ge=q,ye=function(e){return"symbol"==typeof e||pe(e)&&"[object Symbol]"==fe(e)},ve=/^[-+]0x[0-9a-f]+$/i,be=/^0b[01]+$/i,we=/^0o[0-7]+$/i,$e=parseInt;var Se=q,xe=X,Oe=function(e){if("number"==typeof e)return e;if(ye(e))return NaN;if(ge(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ge(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=me(e);var n=be.test(e);return n||we.test(e)?$e(e.slice(2),n?2:8):ve.test(e)?NaN:+e},_e=Math.max,ke=Math.min;var je=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function m(){var e=xe();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?ke(n,o-(e-c)):n}(e))}function g(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=xe(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=Oe(t)||0,Se(n)&&(u=!!n.leading,o=(d="maxWait"in n)?_e(Oe(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:g(xe())},y},De=je,Fe=q;var Me=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Fe(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),De(e,t,{leading:r,maxWait:t,trailing:i})},Pe=function(e,t,n,r){switch(t){case"debounce":return je(e,n,r);case"throttle":return Me(e,n,r);default:return e}},Ee=function(e){return"function"==typeof e},Be=function(){return"undefined"==typeof window},Te=function(e){return e instanceof Element||e instanceof HTMLDocument},Ae=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&Ee(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Be()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Be())return null;if(t)return document.querySelector(t);if(r&&Te(r))return r;if(n.targetRef&&Te(n.targetRef.current))return n.targetRef.current;var i=b(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=Ae(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Be()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Ee(t)?"renderProp":Ee(r)?"childFunction":u(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=d(),n.observableElement=null,Be()||(n.resizeHandler=Pe(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}L(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Be()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=r)(l);case"child":if((e=r).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return c(e,u)}return c(e,l);case"childArray":return(e=r).map((function(e){return!!e&&c(e,l)}));default:return i.createElement(a,null)}}}(h);var Ce=Be()?l:f;function He(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=s(n),y=s(null),v=null!=f?f:y,b=s(),w=a({width:void 0,height:void 0}),$=w[0],S=w[1];return Ce((function(){if(!Be()){var e=Ae(m,S,u,h);b.current=Pe((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!g.current&&!Be()&&e({width:r,height:i}),g.current=!1}))}),r,o,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,o,l,u,h,m,p,v.current]),V({ref:v},$)}const Ie=o.createContext({mode:"default"});var ze=Array.isArray,Re="object"==typeof A&&A&&A.Object===Object&&A,Ne="object"==typeof self&&self&&self.Object===Object&&self,We=Re||Ne||Function("return this")(),Le=We.Symbol,Ve=Le,Ye=Object.prototype,qe=Ye.hasOwnProperty,Qe=Ye.toString,Ue=Ve?Ve.toStringTag:void 0;var Ze=function(e){var t=qe.call(e,Ue),n=e[Ue];try{e[Ue]=void 0;var r=!0}catch(e){}var i=Qe.call(e);return r&&(t?e[Ue]=n:delete e[Ue]),i},Ge=Object.prototype.toString;var Xe=Ze,Je=function(e){return Ge.call(e)},Ke=Le?Le.toStringTag:void 0;var et=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ke&&Ke in Object(e)?Xe(e):Je(e)};var tt=et,nt=function(e){return null!=e&&"object"==typeof e};var rt=function(e){return"symbol"==typeof e||nt(e)&&"[object Symbol]"==tt(e)},it=ze,ot=rt,at=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,st=/^\w*$/;var lt=function(e,t){if(it(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ot(e))||(st.test(e)||!at.test(e)||null!=t&&e in Object(t))};var ct=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ut=et,dt=ct;var ht,ft=function(e){if(!dt(e))return!1;var t=ut(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},pt=We["__core-js_shared__"],mt=(ht=/[^.]+$/.exec(pt&&pt.keys&&pt.keys.IE_PROTO||""))?"Symbol(src)_1."+ht:"";var gt=function(e){return!!mt&&mt in e},yt=Function.prototype.toString;var vt=ft,bt=gt,wt=ct,$t=function(e){if(null!=e){try{return yt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},St=/^\[object .+?Constructor\]$/,xt=Function.prototype,Ot=Object.prototype,_t=xt.toString,kt=Ot.hasOwnProperty,jt=RegExp("^"+_t.call(kt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Dt=function(e){return!(!wt(e)||bt(e))&&(vt(e)?jt:St).test($t(e))},Ft=function(e,t){return null==e?void 0:e[t]};var Mt=function(e,t){var n=Ft(e,t);return Dt(n)?n:void 0},Pt=Mt(Object,"create"),Et=Pt;var Bt=function(){this.__data__=Et?Et(null):{},this.size=0};var Tt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},At=Pt,Ct=Object.prototype.hasOwnProperty;var Ht=function(e){var t=this.__data__;if(At){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ct.call(t,e)?t[e]:void 0},It=Pt,zt=Object.prototype.hasOwnProperty;var Rt=Pt;var Nt=Bt,Wt=Tt,Lt=Ht,Vt=function(e){var t=this.__data__;return It?void 0!==t[e]:zt.call(t,e)},Yt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Rt&&void 0===t?"__lodash_hash_undefined__":t,this};function qt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qt.prototype.clear=Nt,qt.prototype.delete=Wt,qt.prototype.get=Lt,qt.prototype.has=Vt,qt.prototype.set=Yt;var Qt=qt;var Ut=function(){this.__data__=[],this.size=0};var Zt=function(e,t){return e===t||e!=e&&t!=t};var Gt=function(e,t){for(var n=e.length;n--;)if(Zt(e[n][0],t))return n;return-1},Xt=Gt,Jt=Array.prototype.splice;var Kt=Gt;var en=Gt;var tn=Gt;var nn=Ut,rn=function(e){var t=this.__data__,n=Xt(t,e);return!(n<0)&&(n==t.length-1?t.pop():Jt.call(t,n,1),--this.size,!0)},on=function(e){var t=this.__data__,n=Kt(t,e);return n<0?void 0:t[n][1]},an=function(e){return en(this.__data__,e)>-1},sn=function(e,t){var n=this.__data__,r=tn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ln(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ln.prototype.clear=nn,ln.prototype.delete=rn,ln.prototype.get=on,ln.prototype.has=an,ln.prototype.set=sn;var cn=ln,un=Mt(We,"Map"),dn=Qt,hn=cn,fn=un;var pn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var mn=function(e,t){var n=e.__data__;return pn(t)?n["string"==typeof t?"string":"hash"]:n.map},gn=mn;var yn=mn;var vn=mn;var bn=mn;var wn=function(){this.size=0,this.__data__={hash:new dn,map:new(fn||hn),string:new dn}},$n=function(e){var t=gn(this,e).delete(e);return this.size-=t?1:0,t},Sn=function(e){return yn(this,e).get(e)},xn=function(e){return vn(this,e).has(e)},On=function(e,t){var n=bn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function _n(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_n.prototype.clear=wn,_n.prototype.delete=$n,_n.prototype.get=Sn,_n.prototype.has=xn,_n.prototype.set=On;var kn=_n;function jn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(jn.Cache||kn),n}jn.Cache=kn;var Dn=jn;var Fn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mn=/\\(\\)?/g,Pn=function(e){var t=Dn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Fn,(function(e,n,r,i){t.push(r?i.replace(Mn,"$1"):n||e)})),t}));var En=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Bn=ze,Tn=rt,An=Le?Le.prototype:void 0,Cn=An?An.toString:void 0;var Hn=function e(t){if("string"==typeof t)return t;if(Bn(t))return En(t,e)+"";if(Tn(t))return Cn?Cn.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},In=Hn;var zn=ze,Rn=lt,Nn=Pn,Wn=function(e){return null==e?"":In(e)};var Ln=rt;var Vn=function(e,t){return zn(e)?e:Rn(e,t)?[e]:Nn(Wn(e))},Yn=function(e){if("string"==typeof e||Ln(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var qn=function(e,t){for(var n=0,r=(t=Vn(t,e)).length;null!=e&&n<r;)e=e[Yn(t[n++])];return n&&n==r?e:void 0};var Qn=function(e,t,n){var r=null==e?void 0:qn(e,t);return void 0===r?n:r};const Un=(e,t,n)=>t?Qn(n,t)||Qn(e,t):n||e,Zn=(e,t)=>{const n=t||e.defaultValue;return Qn(e.collections,n)};var Gn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Gn||(Gn={}));const Xn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Jn=e=>t=>{const n=t.theme,r=Zn(Xn,n[Gn.colorScheme]);return n.options&&n.options.color?Un(r,e,n.options.color):Un(r,e)},Kn={Brand:{1:Jn("Brand.1"),2:Jn("Brand.2"),3:Jn("Brand.3"),4:Jn("Brand.4"),5:Jn("Brand.5"),6:Jn("Brand.6")},Primary:Jn("Primary"),PrimaryDark:Jn("PrimaryDark"),Secondary:Jn("Secondary"),Accent:{Light:{1:Jn("Accent.Light.1"),2:Jn("Accent.Light.2"),3:Jn("Accent.Light.3"),4:Jn("Accent.Light.4"),5:Jn("Accent.Light.5"),6:Jn("Accent.Light.6")},Dark:{1:Jn("Accent.Dark.1"),2:Jn("Accent.Dark.2"),3:Jn("Accent.Dark.3")}},Neutral:{1:Jn("Neutral.1"),2:Jn("Neutral.2"),3:Jn("Neutral.3"),4:Jn("Neutral.4"),5:Jn("Neutral.5"),6:Jn("Neutral.6"),7:Jn("Neutral.7"),8:Jn("Neutral.8")},Validation:{Green:{Text:Jn("Validation.Green.Text"),Icon:Jn("Validation.Green.Icon"),Border:Jn("Validation.Green.Border"),Background:Jn("Validation.Green.Background")},Orange:{Text:Jn("Validation.Orange.Text"),Icon:Jn("Validation.Orange.Icon"),Border:Jn("Validation.Orange.Border"),Background:Jn("Validation.Orange.Background"),Badge:Jn("Validation.Orange.Badge")},Red:{Text:Jn("Validation.Red.Text"),Icon:Jn("Validation.Red.Icon"),Border:Jn("Validation.Red.Border"),Background:Jn("Validation.Red.Background")},Blue:{Text:Jn("Validation.Blue.Text"),Icon:Jn("Validation.Blue.Icon"),Border:Jn("Validation.Blue.Border"),Background:Jn("Validation.Blue.Background")}},Shadow:{Accent:Jn("Shadow.Accent"),Red:Jn("Shadow.Red"),Elevation:Jn("Shadow.Elevation")}},er=e=>Object.keys(W).reduce(((t,n)=>{const r=W[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),tr=er("max-width"),nr=(er("min-width"),$.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),rr=x`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ir=$.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Kn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${rr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,or=$(ir)`
    animation-delay: -0.45s;
`,ar=$(ir)`
    animation-delay: -0.3s;
`,sr=$(ir)`
    animation-delay: -0.15s;
`,lr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},cr={collections:{base:{D1:{fontFamily:lr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:lr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:lr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:lr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:lr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:lr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:lr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:lr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:lr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:lr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:lr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:lr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:lr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:lr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},ur=e=>t=>{const n=t.theme,r=Zn(cr,n[Gn.textStyleScheme]);return n.options&&n.options.textStyle?Un(r,e,n.options.textStyle):Un(r,e)},dr={D1:{fontFamily:ur("D1.fontFamily"),fontSize:ur("D1.fontSize"),fontWeight:ur("D1.fontWeight"),lineHeight:ur("D1.lineHeight"),letterSpacing:ur("D1.letterSpacing")},D2:{fontFamily:ur("D2.fontFamily"),fontSize:ur("D2.fontSize"),fontWeight:ur("D2.fontWeight"),lineHeight:ur("D2.lineHeight"),letterSpacing:ur("D2.letterSpacing")},D3:{fontFamily:ur("D3.fontFamily"),fontSize:ur("D3.fontSize"),fontWeight:ur("D3.fontWeight"),lineHeight:ur("D3.lineHeight"),letterSpacing:ur("D3.letterSpacing")},D4:{fontFamily:ur("D4.fontFamily"),fontSize:ur("D4.fontSize"),fontWeight:ur("D4.fontWeight"),lineHeight:ur("D4.lineHeight"),letterSpacing:ur("D4.letterSpacing")},DBody:{fontFamily:ur("DBody.fontFamily"),fontSize:ur("DBody.fontSize"),fontWeight:ur("DBody.fontWeight"),lineHeight:ur("DBody.lineHeight"),letterSpacing:ur("DBody.letterSpacing")},H1:{fontFamily:ur("H1.fontFamily"),fontSize:ur("H1.fontSize"),fontWeight:ur("H1.fontWeight"),lineHeight:ur("H1.lineHeight"),letterSpacing:ur("H1.letterSpacing")},H2:{fontFamily:ur("H2.fontFamily"),fontSize:ur("H2.fontSize"),fontWeight:ur("H2.fontWeight"),lineHeight:ur("H2.lineHeight"),letterSpacing:ur("H2.letterSpacing")},H3:{fontFamily:ur("H3.fontFamily"),fontSize:ur("H3.fontSize"),fontWeight:ur("H3.fontWeight"),lineHeight:ur("H3.lineHeight"),letterSpacing:ur("H3.letterSpacing")},H4:{fontFamily:ur("H4.fontFamily"),fontSize:ur("H4.fontSize"),fontWeight:ur("H4.fontWeight"),lineHeight:ur("H4.lineHeight"),letterSpacing:ur("H4.letterSpacing")},H5:{fontFamily:ur("H5.fontFamily"),fontSize:ur("H5.fontSize"),fontWeight:ur("H5.fontWeight"),lineHeight:ur("H5.lineHeight"),letterSpacing:ur("H5.letterSpacing")},H6:{fontFamily:ur("H6.fontFamily"),fontSize:ur("H6.fontSize"),fontWeight:ur("H6.fontWeight"),lineHeight:ur("H6.lineHeight"),letterSpacing:ur("H6.letterSpacing")},Body:{fontFamily:ur("Body.fontFamily"),fontSize:ur("Body.fontSize"),fontWeight:ur("Body.fontWeight"),lineHeight:ur("Body.lineHeight"),letterSpacing:ur("Body.letterSpacing")},BodySmall:{fontFamily:ur("BodySmall.fontFamily"),fontSize:ur("BodySmall.fontSize"),fontWeight:ur("BodySmall.fontWeight"),lineHeight:ur("BodySmall.lineHeight"),letterSpacing:ur("BodySmall.letterSpacing")},XSmall:{fontFamily:ur("XSmall.fontFamily"),fontSize:ur("XSmall.fontSize"),fontWeight:ur("XSmall.fontWeight"),lineHeight:ur("XSmall.lineHeight"),letterSpacing:ur("XSmall.letterSpacing")}},hr=e=>{switch(e){case 700:case"bold":return lr.Bold;case 600:case"semibold":return lr.Semibold;case 300:case"light":return lr.Light;case 400:case"regular":return lr.Regular;default:return""}},fr=(e,t)=>n=>{var r;const i=dr[e].fontFamily(n),o=dr[e].fontWeight(n);return Object.values(lr).includes(i)?S`
                font-family: ${hr(t)||hr(o)||i};
                font-weight: normal !important;
            `:S`
            font-family: ${i};
            font-weight: ${null!==(r=pr(t)||o)&&void 0!==r?r:"normal"};
        `},pr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},mr=fr,gr=(e,t,n=!1)=>r=>{const i=dr[e],o=i.fontSize(r);return S`
            ${fr(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${S`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},yr=(e=!1,t=!1)=>t?S`
            display: block;
        `:e?S`
            display: inline;
        `:S`
            display: block;
        `;var vr;!function(e){e.D1=$.h1`
        ${e=>S`
                ${gr("D1",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.D2=$.h1`
        ${e=>S`
                ${gr("D2",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.D3=$.h1`
        ${e=>S`
                ${gr("D3",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.D4=$.h1`
        ${e=>S`
                ${gr("D4",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.DBody=$.h1`
        ${e=>S`
                ${gr("DBody",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.H1=$.h1`
        ${e=>S`
                ${gr("H1",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.H2=$.h2`
        ${e=>S`
                ${gr("H2",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.H3=$.h3`
        ${e=>S`
                ${gr("H3",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.H4=$.h4`
        ${e=>S`
                ${gr("H4",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.H5=$.h5`
        ${e=>S`
                ${gr("H5",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.H6=$.h6`
        ${e=>S`
                ${gr("H6",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.Body=$.p`
        ${e=>S`
                ${gr("Body",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=$.p`
        ${e=>S`
                ${gr("BodySmall",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.XSmall=$.span`
        ${e=>S`
                ${gr("XSmall",e.weight,e.paragraph)}
                color: ${Kn.Neutral[1]};
                ${yr(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>$r(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>$r(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(vr||(vr={}));const br=$.a`
    ${e=>S`
            ${gr(e.textStyle,e.weight)}
            color: ${Kn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Kn.Secondary};

                svg {
                    color: ${Kn.Secondary};
                }
            }
        `}
`,wr=$(O)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,$r=n=>{var{external:r=!1,children:i}=n,o=B(n,["external","children"]);return t(br,Object.assign({},o,{children:[i,r&&e(wr,{})]}))};var Sr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Sr||(Sr={}));const xr=$.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return S`
                    background-color: ${Kn.Neutral[8](e)};
                    border: 1px solid ${Kn.Primary(e)};

                    span {
                        color: ${Kn.Primary(e)};
                    }
                `;case"light":return S`
                    background-color: ${Kn.Neutral[8](e)};
                    border: 1px solid ${Kn.Neutral[5](e)};

                    span {
                        color: ${Kn.Primary(e)};
                    }
                `;case"disabled":return S`
                    background-color: ${Kn.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Kn.Neutral[3](e)};
                    }
                `;case"link":return S`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Kn.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Kn.Secondary};
                        }
                    }
                `;default:return S`
                    background-color: ${Kn.Primary(e)};
                    border: 1px solid transparent;

                    ${tr.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Kn.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?S`
                    height: 2.5rem;
                    span {
                        ${gr("H5","semibold")}
                    }

                    ${tr.mobileS} {
                        height: auto;
                    }
                `:S`
                    height: 3rem;
                    span {
                        ${gr("H4","semibold")}
                    }

                    ${tr.mobileS} {
                        height: auto;
                    }
                `}
`,Or=$((({color:n,className:r,size:i=18})=>t(nr,Object.assign({className:r,$size:i,$color:n},{children:[e(ir,{id:"inner1",$size:i-2,$borderWidth:2}),e(or,{id:"inner2",$size:i-2,$borderWidth:2}),e(ar,{id:"inner3",$size:i-2,$borderWidth:2}),e(sr,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Kn.Primary(e);break;case"disabled":t=Kn.Neutral[3](e);break;default:t=Kn.Neutral[8](e)}return S`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,_r={Default:o.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default"}=n,l=B(n,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default"};return t(xr,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:o},c,l,{children:[a&&e(Or,Object.assign({},c)),e("span",{children:i})]}))})),Small:o.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default"}=n,l=B(n,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small"};return t(xr,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:o},c,l,{children:[a&&e(Or,Object.assign({},c,{size:16})),e("span",{children:i})]}))}))},kr=$.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?S`
                    color: ${Kn.Primary};
                `:S`
                    color: ${Kn.Neutral[4]};
                `};
    }
`,jr=({type:t,active:n=!1,disabled:i,className:o})=>{let a;switch(t){case"checkbox":a=e(n?D:j,{});break;case"radio":a=e(n?k:_,{});break;case"tick":a=e(F,{});break;case"cross":a=e(r,{});break;default:a=null}return e(kr,Object.assign({className:o,$active:n,disabled:i},{children:a}))},Dr=$.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${e=>{if(!e.$indicator)return S`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?S`
                        border-color: ${Kn.Validation.Red.Icon};
                        background: ${Kn.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Kn.Shadow.Red};
                        }
                    `:e.$disabled?S`
                        border-color: transparent;
                    `:S`
                        border-color: transparent;

                        :hover {
                            background: ${Kn.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?S`
                        background: ${Kn.Neutral[6]};
                        border-color: ${Kn.Neutral[5]};
                    `:e.$disabled&&e.$selected?S`
                        background: ${Kn.Neutral[6]};
                        border-color: ${Kn.Neutral[4]};
                    `:e.$error?S`
                        background: ${Kn.Neutral[8]};
                        border-color: ${Kn.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Kn.Shadow.Red};
                        }
                    `:e.$selected?S`
                        background: ${Kn.Accent.Light[5]};
                        border-color: ${Kn.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Kn.Shadow.Accent};
                        }
                    `:S`
                        background: ${Kn.Neutral[8]};
                        border-color: ${Kn.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Kn.Shadow.Accent};
                            border-color: ${Kn.Accent.Light[1]};
                        }
                    `}
`,Fr=$.input`
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
`,Mr=$.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
`,Pr=$.label`
    ${e=>e.$selected&&!e.$indicator?S`
                ${gr("H4","semibold")}
            `:S`
                ${gr("H4","regular")}
            `}

    color: ${Kn.Neutral[1]};

    ${e=>e.$disabled?S`
                color: ${Kn.Neutral[3]};
            `:e.$selected?S`
                color: ${Kn.Primary};
            `:void 0}
`,Er=$.div`
    ${gr("BodySmall","regular")}
    margin-top: 0.5rem;

    strong,
    b {
        ${mr("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?S`
                color: ${Kn.Neutral[3]};
            `:e.$selected?S`
                color: ${Kn.Primary};
            `:S`
                color: ${Kn.Neutral[1]};
            `}
`;var Br={exports:{}};Br.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),m=i||f.getFullYear(),g=0;i&&!o||(g=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,v,b,w)):new Date(m,g,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Tr,Ar,Cr=Br.exports,Hr={exports:{}},Ir=Hr.exports=(Tr={year:0,month:1,day:2,hour:3,minute:4,second:5},Ar={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Ar[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Ar[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Tr[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),zr={exports:{}};zr.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var $=function(e){return e instanceof _},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new _(n)},O=v;O.l=S,O.i=$,O.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!O.u(t)||t,u=O.p(e),f=function(e,t){var i=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return f(r?y-w:y+(6-w),g);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=O.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[O.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=O.p(u),m=function(e){var t=x(f);return O.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*g;return O.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return O.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:O.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:O.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,m=O.p(h),g=x(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=O.m(this,g);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[m]||v,f?b:O.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),k=_.prototype;return x.prototype=k,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,_,x),e.$i=!0),x},x.locale=S,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var Rr=zr.exports,Nr={exports:{}};Nr.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Wr=Nr.exports,Lr={exports:{}};Lr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Vr=Lr.exports,Yr={exports:{}};Yr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var qr,Qr=Yr.exports;Rr.extend(Wr),Rr.extend(Vr),Rr.extend(Qr),Rr.extend(Cr),Rr.extend(Ir),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Rr(t).startOf("week");return Ur(n).map((e=>Zr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Zr(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Rr(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Rr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Rr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(qr||(qr={}));const Ur=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Zr=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Gr=[1,3,5,7,8,10,12],Xr=[4,6,9,11];var Jr,Kr,ei,ti;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":Gr.includes(o)?Math.min(i,31).toString():Xr.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Rr(e,n);return Rr(t,n).diff(r,"minute")},e.toDayjs=e=>e?Rr(e):Rr()}(Jr||(Jr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Rr(e).isBefore(r,"day"))||!(!i||!Rr(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Rr(e).isValid())return e}return""}}(Kr||(Kr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ei||(ei={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(ti||(ti={}));let ni=vi();const ri=e=>pi(e,ni);let ii=vi();ri.write=e=>pi(e,ii);let oi=vi();ri.onStart=e=>pi(e,oi);let ai=vi();ri.onFrame=e=>pi(e,ai);let si=vi();ri.onFinish=e=>pi(e,si);let li=[];ri.setTimeout=(e,t)=>{let n=ri.now()+t,r=()=>{let e=li.findIndex((e=>e.cancel==r));~e&&li.splice(e,1),hi-=~e?1:0},i={time:n,handler:e,cancel:r};return li.splice(ci(n),0,i),hi+=1,mi(),i};let ci=e=>~(~li.findIndex((t=>t.time>e))||~li.length);ri.cancel=e=>{oi.delete(e),ai.delete(e),si.delete(e),ni.delete(e),ii.delete(e)},ri.sync=e=>{fi=!0,ri.batchedUpdates(e),fi=!1},ri.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,ri.onStart(n)}return r.handler=e,r.cancel=()=>{oi.delete(n),t=null},r};let ui="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ri.use=e=>ui=e,ri.now="undefined"!=typeof performance?()=>performance.now():Date.now,ri.batchedUpdates=e=>e(),ri.catch=console.error,ri.frameLoop="always",ri.advance=()=>{"demand"!==ri.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):yi()};let di=-1,hi=0,fi=!1;function pi(e,t){fi?(t.delete(e),e(0)):(t.add(e),mi())}function mi(){di<0&&(di=0,"demand"!==ri.frameLoop&&ui(gi))}function gi(){~di&&(ui(gi),ri.batchedUpdates(yi))}function yi(){let e=di;di=ri.now();let t=ci(di);t&&(bi(li.splice(0,t),(e=>e.handler())),hi-=t),hi?(oi.flush(),ni.flush(e?Math.min(64,di-e):16.667),ai.flush(),ii.flush(),si.flush()):di=-1}function vi(){let e=new Set,t=e;return{add(n){hi+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(hi-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,hi-=t.size,bi(t,(t=>t(n)&&e.add(t))),hi+=e.size,t=e)}}}function bi(e,t){e.forEach((e=>{try{t(e)}catch(e){ri.catch(e)}}))}function wi(){}const $i={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Si(e,t){if($i.arr(e)){if(!$i.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const xi=(e,t)=>e.forEach(t);function Oi(e,t,n){if($i.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const _i=e=>$i.und(e)?[]:$i.arr(e)?e:[e];function ki(e,t){if(e.size){const n=Array.from(e);e.clear(),xi(n,t)}}const ji=(e,...t)=>ki(e,(e=>e(...t))),Di=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Fi,Mi,Pi=null,Ei=!1,Bi=wi;var Ti=Object.freeze({__proto__:null,get createStringInterpolator(){return Fi},get to(){return Mi},get colors(){return Pi},get skipAnimation(){return Ei},get willAdvance(){return Bi},assign:e=>{e.to&&(Mi=e.to),e.now&&(ri.now=e.now),void 0!==e.colors&&(Pi=e.colors),null!=e.skipAnimation&&(Ei=e.skipAnimation),e.createStringInterpolator&&(Fi=e.createStringInterpolator),e.requestAnimationFrame&&ri.use(e.requestAnimationFrame),e.batchedUpdates&&(ri.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Bi=e.willAdvance),e.frameLoop&&(ri.frameLoop=e.frameLoop)}});const Ai=new Set;let Ci=[],Hi=[],Ii=0;const zi={get idle(){return!Ai.size&&!Ci.length},start(e){Ii>e.priority?(Ai.add(e),ri.onStart(Ri)):(Ni(e),ri(Li))},advance:Li,sort(e){if(Ii)ri.onFrame((()=>zi.sort(e)));else{const t=Ci.indexOf(e);~t&&(Ci.splice(t,1),Wi(e))}},clear(){Ci=[],Ai.clear()}};function Ri(){Ai.forEach(Ni),Ai.clear(),ri(Li)}function Ni(e){Ci.includes(e)||Wi(e)}function Wi(e){Ci.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Ci,(t=>t.priority>e.priority)),0,e)}function Li(e){const t=Hi;for(let n=0;n<Ci.length;n++){const r=Ci[n];Ii=r.priority,r.idle||(Bi(r),r.advance(e),r.idle||t.push(r))}return Ii=0,Hi=Ci,Hi.length=0,Ci=t,Ci.length>0}const Vi="[-+]?\\d*\\.?\\d+",Yi=Vi+"%";function qi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const Qi=new RegExp("rgb"+qi(Vi,Vi,Vi)),Ui=new RegExp("rgba"+qi(Vi,Vi,Vi,Vi)),Zi=new RegExp("hsl"+qi(Vi,Yi,Yi)),Gi=new RegExp("hsla"+qi(Vi,Yi,Yi,Vi)),Xi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ji=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ki=/^#([0-9a-fA-F]{6})$/,eo=/^#([0-9a-fA-F]{8})$/;function to(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function no(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=to(i,r,e+1/3),a=to(i,r,e),s=to(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ro(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function io(e){return(parseFloat(e)%360+360)%360/360}function oo(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ao(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function so(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Ki.exec(e))?parseInt(t[1]+"ff",16)>>>0:Pi&&void 0!==Pi[e]?Pi[e]:(t=Qi.exec(e))?(ro(t[1])<<24|ro(t[2])<<16|ro(t[3])<<8|255)>>>0:(t=Ui.exec(e))?(ro(t[1])<<24|ro(t[2])<<16|ro(t[3])<<8|oo(t[4]))>>>0:(t=Xi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=eo.exec(e))?parseInt(t[1],16)>>>0:(t=Ji.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Zi.exec(e))?(255|no(io(t[1]),ao(t[2]),ao(t[3])))>>>0:(t=Gi.exec(e))?(no(io(t[1]),ao(t[2]),ao(t[3]))|oo(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const lo=(e,t,n)=>{if($i.fun(e))return e;if($i.arr(e))return lo({range:e,output:t,extrapolate:n});if($i.str(e.output[0]))return Fi(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const co=1.70158,uo=1.525*co,ho=co+1,fo=2*Math.PI/3,po=2*Math.PI/4.5,mo=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},go={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ho*e*e*e-co*e*e,easeOutBack:e=>1+ho*Math.pow(e-1,3)+co*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-uo)/2:(Math.pow(2*e-2,2)*((uo+1)*(2*e-2)+uo)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*fo),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*fo)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*po)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*po)/2+1,easeInBounce:e=>1-mo(1-e),easeOutBounce:mo,easeInOutBounce:e=>e<.5?(1-mo(1-2*e))/2:(1+mo(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yo.apply(this,arguments)}const vo=Symbol.for("FluidValue.get"),bo=Symbol.for("FluidValue.observers"),wo=e=>Boolean(e&&e[vo]),$o=e=>e&&e[vo]?e[vo]():e,So=e=>e[bo]||null;function xo(e,t){let n=e[bo];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Oo{constructor(e){if(this[vo]=void 0,this[bo]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");_o(this,e)}}const _o=(e,t)=>Do(e,vo,t);function ko(e,t){if(e[vo]){let n=e[bo];n||Do(e,bo,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function jo(e,t){let n=e[bo];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[bo]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Do=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Fo=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Mo=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Po=new RegExp(`(${Fo.source})(%|[a-z]+)`,"i"),Eo=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Bo=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,To=e=>{const[t,n]=Ao(e);if(!t||Di())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Bo.test(n)?To(n):n||e},Ao=e=>{const t=Bo.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Co;const Ho=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Io=e=>{Co||(Co=Pi?new RegExp(`(${Object.keys(Pi).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>$o(e).replace(Bo,To).replace(Mo,so).replace(Co,so))),n=t.map((e=>e.match(Fo).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>lo(yo({},e,{output:t}))));return e=>{var n;const i=!Po.test(t[0])&&(null==(n=t.find((e=>Po.test(e))))?void 0:n.replace(Fo,""));let o=0;return t[0].replace(Fo,(()=>`${r[o++](e)}${i||""}`)).replace(Eo,Ho)}},zo="react-spring: ",Ro=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${zo}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},No=Ro(console.warn);const Wo=Ro(console.warn);function Lo(e){return $i.str(e)&&("#"==e[0]||/\d/.test(e)||!Di()&&Bo.test(e)||e in(Pi||{}))}const Vo=Di()?l:f,Yo=()=>{const e=s(!1);return Vo((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function qo(){const e=a()[1],t=Yo();return()=>{t.current&&e(Math.random())}}const Qo=e=>l(e,Uo),Uo=[];function Zo(e){const t=s();return l((()=>{t.current=e})),t.current}const Go=Symbol.for("Animated:node"),Xo=e=>e&&e[Go],Jo=(e,t)=>{return n=e,r=Go,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Ko=e=>e&&e[Go]&&e[Go].getPayload();class ea{constructor(){this.payload=void 0,Jo(this,this)}getPayload(){return this.payload||[]}}class ta extends ea{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,$i.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ta(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return $i.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,$i.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class na extends ta{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=lo({output:[e,e]})}static create(e){return new na(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if($i.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=lo({output:[this.getValue(),e]})),this._value=0,super.reset()}}const ra={dependencies:null};class ia extends ea{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Oi(this.source,((n,r)=>{var i;(i=n)&&i[Go]===i?t[r]=n.getValue(e):wo(n)?t[r]=$o(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&xi(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Oi(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ra.dependencies&&wo(e)&&ra.dependencies.add(e);const t=Ko(e);t&&xi(t,(e=>this.add(e)))}}class oa extends ia{constructor(e){super(e)}static create(e){return new oa(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(aa)),!0)}}function aa(e){return(Lo(e)?na:ta).create(e)}function sa(e){const t=Xo(e);return t?t.constructor:$i.arr(e)?oa:Lo(e)?na:ta}function la(){return la=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},la.apply(this,arguments)}const ca=(e,t)=>{const n=!$i.fun(e)||e.prototype&&e.prototype.isReactComponent;return p(((r,o)=>{const a=s(null),c=n&&m((e=>{a.current=function(e,t){e&&($i.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[u,d]=function(e,t){const n=new Set;ra.dependencies=n,e.style&&(e=la({},e,{style:t.createAnimatedStyle(e.style)}));return e=new ia(e),ra.dependencies=null,[e,n]}(r,t),h=qo(),f=()=>{const e=a.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},p=new ua(f,d),g=s();Vo((()=>(g.current=p,xi(d,(e=>ko(e,p))),()=>{g.current&&(xi(g.current.deps,(e=>jo(e,g.current))),ri.cancel(g.current.update))}))),l(f,[]),Qo((()=>()=>{const e=g.current;xi(e.deps,(t=>jo(t,e)))}));const y=t.getComponentProps(u.getValue());return i.createElement(e,la({},y,{ref:c}))}))};class ua{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ri.write(this.update)}}const da=Symbol.for("AnimatedComponent"),ha=e=>$i.str(e)?e:e&&$i.str(e.displayName)?e.displayName:$i.fun(e)&&e.name||null;function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}function pa(e,...t){return $i.fun(e)?e(...t):e}const ma=(e,t)=>!0===e||!!(t&&e&&($i.fun(e)?e(t):_i(e).includes(t))),ga=(e,t)=>$i.obj(e)?t&&e[t]:e,ya=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,va=e=>e,ba=(e,t=va)=>{let n=wa;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);$i.und(n)||(r[i]=n)}return r},wa=["config","onProps","onStart","onChange","onPause","onResume","onRest"],$a={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Sa(e){const t=function(e){const t={};let n=0;if(Oi(e,((e,r)=>{$a[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Oi(e,((e,r)=>r in t||(n[r]=e))),n}return fa({},e)}function xa(e){return e=$o(e),$i.arr(e)?e.map(xa):Lo(e)?Ti.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Oa(e){return $i.fun(e)||$i.arr(e)&&$i.obj(e[0])}const _a=fa({},{tension:170,friction:26},{mass:1,damping:1,easing:go.linear,clamp:!1});class ka{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,_a)}}function ja(e,t){if($i.und(t.decay)){const n=!$i.und(t.tension)||!$i.und(t.friction);!n&&$i.und(t.frequency)&&$i.und(t.damping)&&$i.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Da=[];class Fa{constructor(){this.changed=!1,this.values=Da,this.toValues=null,this.fromValues=Da,this.to=void 0,this.from=void 0,this.config=new ka,this.immediate=!1}}function Ma(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=ma(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{$i.und(n.pause)||(i.paused=ma(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||ma(e,t)),c=pa(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-ri.now()}function f(){c>0&&!Ti.skipAnimation?(i.delayed=!0,u=ri.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(fa({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Pa=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ta(e.get()):t.every((e=>e.noop))?Ea(e.get()):Ba(e.get(),t.every((e=>e.finished))),Ea=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ba=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Ta=e=>({value:e,cancelled:!0,finished:!1});function Aa(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=ba(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&Ta(r)||i!==n.asyncId&&Ba(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new Ha,a=new Ia;return(async()=>{if(Ti.skipAnimation)throw Ca(n),a.result=Ba(r,!1),d(a),a;f(o);const s=$i.obj(e)?fa({},e):fa({},t,{to:e});s.parentId=i,Oi(c,((e,t)=>{$i.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(Ti.skipAnimation)return Ca(n),Ba(r,!1);try{let t;t=$i.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),m=Ba(r.get(),!0,!1)}catch(e){if(e instanceof Ha)m=e.result;else{if(!(e instanceof Ia))throw e;m=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return $i.fun(a)&&ri.batchedUpdates((()=>{a(m,r,r.item)})),m})():l}function Ca(e,t){ki(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Ha extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Ia extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const za=e=>e instanceof Na;let Ra=1;class Na extends Oo{constructor(...e){super(...e),this.id=Ra++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Xo(this);return e&&e.getValue()}to(...e){return Ti.to(this,e)}interpolate(...e){return No(`${zo}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ti.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){xo(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||zi.sort(this),xo(this,{type:"priority",parent:this,priority:e})}}const Wa=Symbol.for("SpringPhase"),La=e=>(1&e[Wa])>0,Va=e=>(2&e[Wa])>0,Ya=e=>(4&e[Wa])>0,qa=(e,t)=>t?e[Wa]|=3:e[Wa]&=-3,Qa=(e,t)=>t?e[Wa]|=4:e[Wa]&=-5;class Ua extends Na{constructor(e,t){if(super(),this.key=void 0,this.animation=new Fa,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!$i.und(e)||!$i.und(t)){const n=$i.obj(e)?fa({},e):fa({},t,{from:e});$i.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Va(this)||this._state.asyncTo)||Ya(this)}get goal(){return $o(this.animation.to)}get velocity(){const e=Xo(this);return e instanceof ta?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return La(this)}get isAnimating(){return Va(this)}get isPaused(){return Ya(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=Ko(r.to);!a&&wo(r.to)&&(o=_i($o(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==na?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=$i.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if($i.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!$i.und(r),f=n==c?s.v0>0:n<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*g,d+=a*g}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=Xo(this),l=s.getValue();if(t){const e=$o(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return ri.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Va(this)){const{to:e,config:t}=this.animation;ri.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return $i.und(e)?(n=this.queue||[],this.queue=[]):n=[$i.obj(e)?e:fa({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Pa(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ca(this._state,e&&this._lastCallId),ri.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=$i.obj(n)?n[t]:n,(null==n||Oa(n))&&(n=void 0),r=$i.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return La(this)||(e.reverse&&([n,r]=[r,n]),r=$o(r),$i.und(r)?Xo(this)||this._set(n):this._set(r)),i}_update(e,t){let n=fa({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,ba(n,((e,t)=>/^on/.test(t)?ga(e,r):e))),ts(this,n,"onProps"),ns(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Ma(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{Ya(this)||(Qa(this,!0),ji(a.pauseQueue),ns(this,"onPause",Ba(this,Za(this,this.animation.to)),this))},resume:()=>{Ya(this)&&(Qa(this,!1),Va(this)&&this._resume(),ji(a.resumeQueue),ns(this,"onResume",Ba(this,Za(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=Ga(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Ta(this));const r=!$i.und(e.to),i=!$i.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Ta(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!$i.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Si(d,c);h&&(s.from=d),d=$o(d);const f=!Si(u,l);f&&this._focus(u);const p=Oa(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||i)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(ja(n=fa({},n),t),t=fa({},n,t)),ja(e,t),Object.assign(e,t);for(const t in _a)null==e[t]&&(e[t]=_a[t]);let{mass:r,frequency:i,damping:o}=e;$i.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(m,pa(t.config,o),t.config!==a.config?pa(a.config,o):void 0);let v=Xo(this);if(!v||$i.und(u))return n(Ba(this,!0));const b=$i.und(t.reset)?i&&!t.default:!$i.und(d)&&ma(t.reset,o),w=b?d:this.get(),$=xa(u),S=$i.num($)||$i.arr($)||Lo($),x=!p&&(!S||ma(a.immediate||t.immediate,o));if(f){const e=sa(u);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const O=v.constructor;let _=wo(u),k=!1;if(!_){const e=b||!La(this)&&h;(f||e)&&(k=Si(xa(w),$),_=!k),(Si(s.immediate,x)||x)&&Si(m.decay,g)&&Si(m.velocity,y)||(_=!0)}if(k&&Va(this)&&(s.changed&&!b?_=!0:_||this._stop(l)),!p&&((_||wo(l))&&(s.values=v.getPayload(),s.toValues=wo(u)?null:O==na?[1]:_i($)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),_)){const{onRest:e}=s;xi(es,(e=>ts(this,t,e)));const r=Ba(this,Za(this,l));ji(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&ri.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?pa(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(Aa(t.to,t,this._state,this)):_?this._start():Va(this)&&!f?this._pendingCalls.add(n):n(Ea(w))}_focus(e){const t=this.animation;e!==t.to&&(So(this)&&this._detach(),t.to=e,So(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;wo(t)&&(ko(t,this),za(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;wo(e)&&jo(e,this)}_set(e,t=!0){const n=$o(e);if(!$i.und(n)){const e=Xo(this);if(!e||!Si(n,e.getValue())){const r=sa(n);e&&e.constructor==r?e.setValue(n):Jo(this,r.create(n)),e&&ri.batchedUpdates((()=>{this._onChange(n,t)}))}}return Xo(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ns(this,"onStart",Ba(this,Za(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),pa(this.animation.onChange,e,this)),pa(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Xo(this).reset($o(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Va(this)||(qa(this,!0),Ya(this)||this._resume())}_resume(){Ti.skipAnimation?this.finish():zi.start(this)}_stop(e,t){if(Va(this)){qa(this,!1);const n=this.animation;xi(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),xo(this,{type:"idle",parent:this});const r=t?Ta(this.get()):Ba(this.get(),Za(this,null!=e?e:n.to));ji(this._pendingCalls,r),n.changed&&(n.changed=!1,ns(this,"onRest",r,this))}}}function Za(e,t){const n=xa(t);return Si(xa(e.get()),n)}function Ga(e,t=e.loop,n=e.to){let r=pa(t);if(r){const i=!0!==r&&Sa(r),o=(i||e).reverse,a=!i||i.reset;return Xa(fa({},e,{loop:t,default:!1,pause:void 0,to:!o||Oa(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function Xa(e){const{to:t,from:n}=e=Sa(e),r=new Set;return $i.obj(t)&&Ka(t,r),$i.obj(n)&&Ka(n,r),e.keys=r.size?Array.from(r):null,e}function Ja(e){const t=Xa(e);return $i.und(t.default)&&(t.default=ba(t)),t}function Ka(e,t){Oi(e,((e,n)=>null!=e&&t.add(n)))}const es=["onStart","onRest","onChange","onPause","onResume"];function ts(e,t,n){e.animation[n]=t[n]!==ya(t,n)?ga(t[n],e.key):void 0}function ns(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const rs=["onStart","onChange","onRest"];let is=1;class os{constructor(e,t){this.id=is++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(fa({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];$i.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Xa(e)),this}start(e){let{queue:t}=this;return e?t=_i(e).map(Xa):this.queue=[],this._flush?this._flush(this,t):(hs(this,t),as(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;xi(_i(t),(t=>n[t].stop(!!e)))}else Ca(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if($i.und(e))this.start({pause:!0});else{const t=this.springs;xi(_i(e),(e=>t[e].pause()))}return this}resume(e){if($i.und(e))this.start({pause:!1});else{const t=this.springs;xi(_i(e),(e=>t[e].resume()))}return this}each(e){Oi(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,ki(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&ki(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,ki(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ri.onFrame(this._onFrame)}}function as(e,t){return Promise.all(t.map((t=>ss(e,t)))).then((t=>Pa(e,t)))}async function ss(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=$i.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=$i.arr(i)||$i.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):xi(rs,(n=>{const r=t[n];if($i.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,ji(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===ya(t,"cancel");(u||f&&d.asyncId)&&h.push(Ma(++e._lastAsyncId,{props:t,state:d,actions:{pause:wi,resume:wi,start(t,n){f?(Ca(d,e._lastAsyncId),n(Ta(e))):(t.onRest=s,n(Aa(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Pa(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=Ga(t,a,i);if(n)return hs(e,[n]),ss(e,n,!0)}return l&&ri.batchedUpdates((()=>l(p,e,e.item))),p}function ls(e,t){const n=fa({},e.springs);return t&&xi(_i(t),(e=>{$i.und(e.keys)&&(e=Xa(e)),$i.obj(e.to)||(e=fa({},e,{to:void 0})),ds(n,e,(e=>us(e)))})),cs(e,n),n}function cs(e,t){Oi(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,ko(t,e))}))}function us(e,t){const n=new Ua;return n.key=e,t&&ko(n,t),n}function ds(e,t,n){t.keys&&xi(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function hs(e,t){xi(t,(t=>{ds(e.springs,t,(t=>us(t,e)))}))}const fs=["children"],ps=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,fs);const r=g(ms),o=n.pause||!!r.pause,c=n.immediate||!!r.immediate;n=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=s(),i=r.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=n;return l((()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)}),[o]),o.result}((()=>({pause:o,immediate:c})),[o,c]);const{Provider:u}=ms;return i.createElement(u,{value:n},t)},ms=(gs=ps,ys={},Object.assign(gs,i.createContext(ys)),gs.Provider._context=gs,gs.Consumer._context=gs,gs);var gs,ys;ps.Provider=ms.Provider,ps.Consumer=ms.Consumer;const vs=()=>{const e=[],t=function(t){Wo(`${zo}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return xi(e,((e,i)=>{if($i.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return xi(e,(e=>e.pause(...arguments))),this},t.resume=function(){return xi(e,(e=>e.resume(...arguments))),this},t.set=function(t){xi(e,(e=>e.set(t)))},t.start=function(t){const n=[];return xi(e,((e,r)=>{if($i.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return xi(e,(e=>e.stop(...arguments))),this},t.update=function(t){return xi(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return $i.fun(e)?e(n,t):e};return t._getProps=n,t};function bs(e,t){const n=$i.fun(e),[[r],i]=function(e,t,n){const r=$i.fun(t)&&t;r&&!n&&(n=[]);const i=y((()=>r||3==arguments.length?vs():void 0),[]),o=s(0),a=qo(),l=y((()=>({ctrls:[],queue:[],flush(e,t){const n=ls(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?as(e,t):new Promise((r=>{cs(e,n),l.queue.push((()=>{r(as(e,t))})),a()}))}})),[]),c=s([...l.ctrls]),u=[],d=Zo(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new os(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=Ja(n))}}y((()=>{xi(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),y((()=>{h(0,Math.min(d,e))}),n);const f=c.current.map(((e,t)=>ls(e,u[t]))),p=g(ps),m=Zo(p),v=p!==m&&function(e){for(const t in e)return!0;return!1}(p);Vo((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],xi(e,(e=>e()))),xi(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:p});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Qo((()=>()=>{xi(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>fa({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let ws;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(ws||(ws={}));class $s extends Na{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=lo(...t);const n=this._get(),r=sa(n);Jo(this,r.create(n))}advance(e){const t=this._get();Si(t,this.get())||(Xo(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&xs(this._active)&&Os(this)}_get(){const e=$i.arr(this.source)?this.source.map($o):_i($o(this.source));return this.calc(...e)}_start(){this.idle&&!xs(this._active)&&(this.idle=!1,xi(Ko(this),(e=>{e.done=!1})),Ti.skipAnimation?(ri.batchedUpdates((()=>this.advance())),Os(this)):zi.start(this))}_attach(){let e=1;xi(_i(this.source),(t=>{wo(t)&&ko(t,this),za(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){xi(_i(this.source),(e=>{wo(e)&&jo(e,this)})),this._active.clear(),Os(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=_i(this.source).reduce(((e,t)=>Math.max(e,(za(t)?t.priority:0)+1)),0))}}function Ss(e){return!1!==e.idle}function xs(e){return!e.size||Array.from(e).every(Ss)}function Os(e){e.idle||(e.idle=!0,xi(Ko(e),(e=>{e.done=!0})),xo(e,{type:"idle",parent:e}))}function _s(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Ti.assign({createStringInterpolator:Io,to:(e,t)=>new $s(e,t)});const ks=["style","children","scrollTop","scrollLeft","viewBox"],js=/^--/;function Ds(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||js.test(e)||Ms.hasOwnProperty(e)&&Ms[e]?(""+t).trim():t+"px"}const Fs={};let Ms={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Ps=["Webkit","Ms","Moz","O"];Ms=Object.keys(Ms).reduce(((e,t)=>(Ps.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Ms);const Es=["x","y","z"],Bs=/^(matrix|translate|scale|rotate|skew)/,Ts=/^(translate)/,As=/^(rotate|skew)/,Cs=(e,t)=>$i.num(e)&&0!==e?e+t:e,Hs=(e,t)=>$i.arr(e)?e.every((e=>Hs(e,t))):$i.num(e)?e===t:parseFloat(e)===t;class Is extends ia{constructor(e){let{x:t,y:n,z:r}=e,i=_s(e,Es);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Cs(e,"px"))).join(",")})`,Hs(e,0)]))),Oi(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Bs.test(t)){if(delete i[t],$i.und(e))return;const n=Ts.test(t)?"px":As.test(t)?"deg":"";o.push(_i(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Cs(i,n)})`,Hs(i,0)]:e=>[`${t}(${e.map((e=>Cs(e,n))).join(",")})`,Hs(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new zs(o,a)),super(i)}}class zs extends Oo{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return xi(this.inputs,((n,r)=>{const i=$o(n[0]),[o,a]=this.transforms[r]($i.arr(i)?i:n.map($o));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&xi(this.inputs,(e=>xi(e,(e=>wo(e)&&ko(e,this)))))}observerRemoved(e){0==e&&xi(this.inputs,(e=>xi(e,(e=>wo(e)&&jo(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),xo(this,e)}}const Rs=["scrollTop","scrollLeft"];Ti.assign({batchedUpdates:w,createStringInterpolator:Io,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Ns=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new ia(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=ha(e)||"Anonymous";return(e=$i.str(e)?o[e]||(o[e]=ca(e,i)):e[da]||(e[da]=ca(e,i))).displayName=`Animated(${t})`,e};return Oi(e,((t,n)=>{$i.arr(e)&&(n=ha(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=_s(r,ks),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Fs[t]||(Fs[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Ds(t,i[t]);js.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Is(e),getComponentProps:e=>_s(e,Rs)}),Ws=Ns.animated,Ls=$.button`
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

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&S`
                background-color: ${Kn.Neutral[7]};
            `}
    }
`,Vs=o.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=B(t,["children","focusHighlight","focusOutline","type"]);return e(Ls,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Ys=$.div`
    background-color: ${e=>e.$collapsible?Kn.Neutral[7](e):Kn.Neutral[8](e)};

    ${tr.tablet} {
        background-color: ${Kn.Neutral[7]};
    }
`,qs=$.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Kn.Neutral[5]};

    ${tr.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,Qs=$.div`
    display: flex;
    align-items: center;

    background-color: ${Kn.Neutral[8]};

    ${tr.tablet} {
        background-color: transparent;
    }
`,Us=$(Vs)`
    margin: 0 0 0 auto;
`,Zs=$(M)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Kn.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${Kn.Neutral[2]};
    }
`,Gs=$(vr.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${tr.tablet} {
        ${gr("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,Xs=$(Ws.div)`
    overflow: hidden;
`,Js=$.div`
    padding: 1rem 1.25rem;
`,Ks=$(Ws.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,el=$(_r.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,tl=n=>{var{collapsible:r=!0,minimisable:i=!1,minimisedHeight:o,showDivider:s=!0,showMobileDivider:l=!0,title:c,children:u}=n,d=B(n,["collapsible","minimisable","minimisedHeight","showDivider","showMobileDivider","title","children"]);const{mode:h}=g(Ie),f="mobile"===h,[p,m]=a(!f&&r),[y,v]=a(i),b=!f&&r,w=He(),$=He(),S=bs({height:p?0:w.height}),x=y?null!=o?o:Math.min(.5*$.height,216):$.height;return t(Ys,Object.assign({$collapsible:b},{children:[e(qs,{$showDivider:s,$showMobileDivider:l}),(c||b)&&t(Qs,{children:[c&&e(Gs,Object.assign({weight:"semibold"},{children:c})),b&&e(Us,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{m(!p)},"aria-label":p?"Expand":"Collapse"},{children:e(Zs,{$expanded:!p})}))]}),e(Xs,Object.assign({style:S},{children:e("div",Object.assign({ref:w.ref},{children:t(Js,Object.assign({},d,{children:[e(Ks,Object.assign({$height:x,$minimisable:i},{children:e("div",Object.assign({ref:$.ref},{children:e("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof u?u(h,{minimised:y}):u}))}))})),i&&t(el,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{v(!y)}},{children:["View ",y?"more":"less"]}))]}))}))}))]}))},nl=$(tl)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${tr.tablet} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${tr.tablet} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`,rl=$.div`
    display: flex;
    flex-direction: column;

    ${tr.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,il=$.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${gr("BodySmall","regular")}
    ${e=>e.$selected&&S`
            color: ${Kn.Primary};
        `}
`,ol=$.input`
    appearance: none;
`,al=$(jr)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${ol}:focus-visible + & {
        outline: 2px solid ${Kn.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,sl=$((({type:n="checkbox",indicator:r,checked:i,styleType:o="default",children:c,subLabel:u,disabled:d,error:h,name:f,id:p,className:m,"data-testid":g,onChange:y})=>{const[v,b]=a(i),[w]=a(ei.generate()),$=p?`${p}-input`:`tg-${w}-input`,S=s();l((()=>{b(i)}),[i]);return t(Dr,Object.assign({$selected:v,$disabled:d,className:m,$styleType:o,$error:h,$indicator:r,id:p,"data-testid":g},{children:[r&&(()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e(jr,{type:t,active:v,disabled:d})})(),e(Fr,{ref:S,name:f,id:$,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:e=>{if(!d){if(y)return void y(e);switch(n){case"checkbox":b((e=>!e));break;case"radio":case"yes":case"no":v||b(!0)}}},checked:v}),t(Mr,{children:[e(Pr,Object.assign({htmlFor:$,$selected:v,$indicator:r,$disabled:d,"data-testid":"toggle-label"},{children:c})),u&&(()=>{if(!u)return null;let t;return"string"==typeof u?t=u:"function"==typeof u&&(t=u()),e(Er,Object.assign({$disabled:d,$selected:v},{children:t}))})()]})]}))}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,ll=$(_r.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${tr.tablet} {
        margin: 0 0 1rem 0;
    }
`,cl=$.div`
    background-color: ${Kn.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,ul=$.div`
    ${tr.tablet} {
        display: none;
    }
`,dl=$.div`
    display: none;
    ${tr.tablet} {
        display: block;
    }
`,hl=$.div`
    background-color: ${Kn.Neutral[8]};
    border: 1px solid ${Kn.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,fl=$.div`
    background-color: ${Kn.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,pl=$.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,ml=$.div`
    display: flex;
    align-items: center;

    background-color: ${Kn.Neutral[8]};

    ${tr.tablet} {
        border-bottom: 1px solid ${Kn.Neutral[5]};
    }
`,gl=$(vr.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${tr.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,yl=$(Vs)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${Kn.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Kn.Neutral[2]};
    }
`,vl=$(_r.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${tr.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,bl=$(_r.Default)`
    width: 100%;
    span {
        display: flex;
        align-items: center;
    }
`,wl=$(E)`
    margin-right: 0.625rem;
`,$l=$.div`
    padding: 1.5rem 1.25rem;
    background-color: ${Kn.Neutral[8]};
    border-top: 1px solid ${Kn.Neutral[5]};
`,Sl=$(_r.Default)`
    width: 100%;
`,xl=Object.assign((i=>{var{toggleFilterButtonLabel:o="Filters",headerTitle:s="Filters",clearButtonDisabled:l=!1,onClear:c,onDismiss:u,onDone:d,children:h}=i,f=B(i,["toggleFilterButtonLabel","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[p,m]=a(!1);C.exports.useMediaQuery({maxWidth:W.tablet},void 0,(e=>{e||y()}));const g=()=>{m(!0)},y=()=>{m(!1),u&&u()},v=()=>{m(!1),d&&d()},b=()=>{c&&c()},w=e=>"function"==typeof h?h(e):h,$=n=>t(ml,{children:["mobile"===n&&e(yl,Object.assign({onClick:y,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(r,{})})),e(gl,Object.assign({weight:"semibold"},{children:s})),e(vl,Object.assign({styleType:"link",type:"button",onClick:b,disabled:l},{children:"Clear"}))]});return t("div",Object.assign({},f,{children:[e(dl,{children:e(Ie.Provider,Object.assign({value:{mode:"mobile"}},{children:t(n,{children:[t(bl,Object.assign({styleType:"light",onClick:g,type:"button"},{children:[e(wl,{})," ",o]})),e(z,Object.assign({show:p,disableTransition:!0},{children:t(fl,{children:[$("mobile"),e(pl,{children:w("mobile")}),e($l,{children:e(Sl,Object.assign({onClick:v,type:"button"},{children:"Done"}))})]})}))]})}))}),e(ul,{children:e(Ie.Provider,Object.assign({value:{mode:"default"}},{children:t(hl,{children:[$("default"),w("default")]})}))})]}))}),{Item:tl,Page:({onDismiss:n,onDone:r,children:i})=>t(cl,{children:[e(yl,Object.assign({onClick:n,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(P,{})})),e(pl,{children:i}),e($l,{children:e(Sl,Object.assign({onClick:r,type:"button"},{children:"Done"}))})]}),Checkbox:r=>{var{selectedOptions:i,options:o,onSelect:c,labelExtractor:u,valueExtractor:d}=r,h=B(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor"]);const{mode:f}=g(Ie),[p,y]=a(i||[]),[v,b]=a(),[w,$]=a(o.length),S=s(),x=s(),O=e=>()=>{const t=[...p],n=p.findIndex((t=>j(t)===j(e)));n>=0?t.splice(n,1):t.push(e),y(t),null==c||c(t)},_=()=>{const e=p.length?[]:o;y(e),null==c||c(e)},k=e=>{var t;return u?u(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},j=e=>{var t;return d?d(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},D=m((()=>{if(!S.current)return void b(void 0);const e=Array.from(S.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>r&&(n++,r=o,n>2))break;t=i}$(t),b(n>2?r-8:void 0)}),[]);l((()=>{i!==p&&y(i||[])}),[i]),l((()=>{"default"===f?(()=>{const e=x.current?x.current.offsetTop+x.current.clientHeight:void 0;b(e)})():D()}),[o]),He({handleWidth:"mobile"===f,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:S,onResize:D});return e(nl,Object.assign({minimisable:o.length>5,minimisedHeight:v},h,{children:(r,{minimised:i})=>t(n,{children:[o.length<3?null:e(ll,Object.assign({styleType:"link",type:"button",onClick:_},{children:p.length?"Clear all":"Select all"})),e(rl,Object.assign({role:"group","aria-label":h.title,ref:S},{children:o.map(((n,o)=>"default"===r?((n,r,i)=>{const o=k(n),a=j(n),s=!!p.find((e=>j(e)===a));return t(il,Object.assign({$visible:!i||r<5,$selected:s,ref:4===r?x:void 0},{children:[e(ol,{type:"checkbox",checked:s,onChange:O(n)}),e(al,{type:"checkbox",active:s}),o]}),a)})(n,o,i):((t,n,r)=>{const i=k(t),o=j(t),a=!!p.find((e=>j(e)===o));return e(sl,Object.assign({type:"checkbox",checked:a,$visible:!r||v&&n<=w,onChange:O(t)},{children:i}))})(n,o,i)))}))]})}))}});export{xl as Filter};
//# sourceMappingURL=index.js.map
