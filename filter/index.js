import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import{CrossIcon as r}from"@lifesg/react-icons/cross";import*as i from"react";import o,{useState as a,useRef as s,useEffect as l,cloneElement as c,isValidElement as u,createRef as d,PureComponent as h,useLayoutEffect as f,forwardRef as p,useCallback as m,useContext as g,useMemo as y}from"react";import v,{findDOMNode as b,unstable_batchedUpdates as w}from"react-dom";import $,{css as S,keyframes as x}from"styled-components";import{ExternalIcon as O}from"@lifesg/react-icons/external";import{CircleIcon as _}from"@lifesg/react-icons/circle";import{CircleDotIcon as k}from"@lifesg/react-icons/circle-dot";import{SquareIcon as j}from"@lifesg/react-icons/square";import{SquareTickFillIcon as D}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as F}from"@lifesg/react-icons/tick";import{ChevronDownIcon as M}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as E}from"@lifesg/react-icons/chevron-left";import{FilterIcon as P}from"@lifesg/react-icons/filter";function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var T,C="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},A={exports:{}};T=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var f=e.type;switch(f){case c:case u:case i:case a:case o:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var $=c,S=u,x=l,O=s,_=n,k=d,j=i,D=m,F=p,M=r,E=a,P=o,B=h,T=!1;function C(e){return w(e)===u}t.AsyncMode=$,t.ConcurrentMode=S,t.ContextConsumer=x,t.ContextProvider=O,t.Element=_,t.ForwardRef=k,t.Fragment=j,t.Lazy=D,t.Memo=F,t.Portal=M,t.Profiler=E,t.StrictMode=P,t.Suspense=B,t.isAsyncMode=function(e){return T||(T=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),C(e)||w(e)===c},t.isConcurrentMode=C,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===o||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),A.exports=T(o);const H=$.div`
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
`,z=({show:t=!1,rootId:n,onOverlayClick:r,children:i,backgroundOpacity:c,backgroundBlur:u=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:f,id:p})=>{const[m,g]=a(null),[y,b]=a(),w=s(),$=s(!1),S=s(null),x=i&&o.cloneElement(i,{ref:S}),O=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";l((()=>{const e=!0===$.current;if(e||($.current=!0),t){const e=j();if(_(e),!e){const e=setTimeout((()=>{F("add")}),200);return()=>clearTimeout(e)}}else{if(!e)return;if(!w.current){const e=setTimeout((()=>{F("remove")}),200);return()=>clearTimeout(e)}}}),[t]),l((()=>{g(k());const e=j();return _(e),e||D(),()=>{F("remove")}}),[]);const _=e=>{w.current=e,b(e)},k=()=>document&&n?document.getElementById(n):document?document.body:null,j=()=>document.body.classList.contains(N),D=()=>{if(!document.getElementById(R)){const e=document.createElement("style");e.id=R;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${N} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${N}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},F=e=>{const t=document.body.classList.contains(N);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(N):document.body.classList.add(N)},M=e=>{var t;const n=null===(t=S.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&h&&(e.preventDefault(),r())};return m?v.createPortal(e(H,Object.assign({id:O,"data-testid":O,$show:t,zIndex:f,$stacked:y},{children:i&&e(I,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:c||(y?.5:.8),$backgroundBlur:u,$disableTransition:d,$enableOverlayClick:h,onClick:M},{children:x}))})),m):null},R="lifesg-ds-overlay-stylesheet",N="lifesg-ds-overlay-open",W={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var L=function(e,t){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},L(e,t)};var V=function(){return V=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},V.apply(this,arguments)};var Y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var q=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Q="object"==typeof Y&&Y&&Y.Object===Object&&Y,U="object"==typeof self&&self&&self.Object===Object&&self,Z=Q||U||Function("return this")(),G=Z,X=function(){return G.Date.now()},J=/\s/;var K=function(e){for(var t=e.length;t--&&J.test(e.charAt(t)););return t},ee=/^\s+/;var te=function(e){return e?e.slice(0,K(e)+1).replace(ee,""):e},ne=Z.Symbol,re=ne,ie=Object.prototype,oe=ie.hasOwnProperty,ae=ie.toString,se=re?re.toStringTag:void 0;var le=function(e){var t=oe.call(e,se),n=e[se];try{e[se]=void 0;var r=!0}catch(e){}var i=ae.call(e);return r&&(t?e[se]=n:delete e[se]),i},ce=Object.prototype.toString;var ue=le,de=function(e){return ce.call(e)},he=ne?ne.toStringTag:void 0;var fe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":he&&he in Object(e)?ue(e):de(e)},pe=function(e){return null!=e&&"object"==typeof e};var me=te,ge=q,ye=function(e){return"symbol"==typeof e||pe(e)&&"[object Symbol]"==fe(e)},ve=/^[-+]0x[0-9a-f]+$/i,be=/^0b[01]+$/i,we=/^0o[0-7]+$/i,$e=parseInt;var Se=q,xe=X,Oe=function(e){if("number"==typeof e)return e;if(ye(e))return NaN;if(ge(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ge(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=me(e);var n=be.test(e);return n||we.test(e)?$e(e.slice(2),n?2:8):ve.test(e)?NaN:+e},_e=Math.max,ke=Math.min;var je=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function m(){var e=xe();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?ke(n,o-(e-c)):n}(e))}function g(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=xe(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=Oe(t)||0,Se(n)&&(u=!!n.leading,o=(d="maxWait"in n)?_e(Oe(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:g(xe())},y},De=je,Fe=q;var Me=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Fe(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),De(e,t,{leading:r,maxWait:t,trailing:i})},Ee=function(e,t,n,r){switch(t){case"debounce":return je(e,n,r);case"throttle":return Me(e,n,r);default:return e}},Pe=function(e){return"function"==typeof e},Be=function(){return"undefined"==typeof window},Te=function(e){return e instanceof Element||e instanceof HTMLDocument},Ce=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&Pe(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Be()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Be())return null;if(t)return document.querySelector(t);if(r&&Te(r))return r;if(n.targetRef&&Te(n.targetRef.current))return n.targetRef.current;var i=b(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=Ce(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Be()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Pe(t)?"renderProp":Pe(r)?"childFunction":u(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=d(),n.observableElement=null,Be()||(n.resizeHandler=Ee(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}L(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Be()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=r)(l);case"child":if((e=r).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return c(e,u)}return c(e,l);case"childArray":return(e=r).map((function(e){return!!e&&c(e,l)}));default:return i.createElement(a,null)}}}(h);var Ae=Be()?l:f;function He(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=s(n),y=s(null),v=null!=f?f:y,b=s(),w=a({width:void 0,height:void 0}),$=w[0],S=w[1];return Ae((function(){if(!Be()){var e=Ce(m,S,u,h);b.current=Ee((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!g.current&&!Be()&&e({width:r,height:i}),g.current=!1}))}),r,o,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,o,l,u,h,m,p,v.current]),V({ref:v},$)}const Ie=o.createContext({mode:"default"});var ze=Array.isArray,Re="object"==typeof C&&C&&C.Object===Object&&C,Ne="object"==typeof self&&self&&self.Object===Object&&self,We=Re||Ne||Function("return this")(),Le=We.Symbol,Ve=Le,Ye=Object.prototype,qe=Ye.hasOwnProperty,Qe=Ye.toString,Ue=Ve?Ve.toStringTag:void 0;var Ze=function(e){var t=qe.call(e,Ue),n=e[Ue];try{e[Ue]=void 0;var r=!0}catch(e){}var i=Qe.call(e);return r&&(t?e[Ue]=n:delete e[Ue]),i},Ge=Object.prototype.toString;var Xe=Ze,Je=function(e){return Ge.call(e)},Ke=Le?Le.toStringTag:void 0;var et=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ke&&Ke in Object(e)?Xe(e):Je(e)};var tt=et,nt=function(e){return null!=e&&"object"==typeof e};var rt=function(e){return"symbol"==typeof e||nt(e)&&"[object Symbol]"==tt(e)},it=ze,ot=rt,at=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,st=/^\w*$/;var lt=function(e,t){if(it(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ot(e))||(st.test(e)||!at.test(e)||null!=t&&e in Object(t))};var ct=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ut=et,dt=ct;var ht,ft=function(e){if(!dt(e))return!1;var t=ut(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},pt=We["__core-js_shared__"],mt=(ht=/[^.]+$/.exec(pt&&pt.keys&&pt.keys.IE_PROTO||""))?"Symbol(src)_1."+ht:"";var gt=function(e){return!!mt&&mt in e},yt=Function.prototype.toString;var vt=ft,bt=gt,wt=ct,$t=function(e){if(null!=e){try{return yt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},St=/^\[object .+?Constructor\]$/,xt=Function.prototype,Ot=Object.prototype,_t=xt.toString,kt=Ot.hasOwnProperty,jt=RegExp("^"+_t.call(kt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Dt=function(e){return!(!wt(e)||bt(e))&&(vt(e)?jt:St).test($t(e))},Ft=function(e,t){return null==e?void 0:e[t]};var Mt=function(e,t){var n=Ft(e,t);return Dt(n)?n:void 0},Et=Mt(Object,"create"),Pt=Et;var Bt=function(){this.__data__=Pt?Pt(null):{},this.size=0};var Tt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ct=Et,At=Object.prototype.hasOwnProperty;var Ht=function(e){var t=this.__data__;if(Ct){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return At.call(t,e)?t[e]:void 0},It=Et,zt=Object.prototype.hasOwnProperty;var Rt=Et;var Nt=Bt,Wt=Tt,Lt=Ht,Vt=function(e){var t=this.__data__;return It?void 0!==t[e]:zt.call(t,e)},Yt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Rt&&void 0===t?"__lodash_hash_undefined__":t,this};function qt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qt.prototype.clear=Nt,qt.prototype.delete=Wt,qt.prototype.get=Lt,qt.prototype.has=Vt,qt.prototype.set=Yt;var Qt=qt;var Ut=function(){this.__data__=[],this.size=0};var Zt=function(e,t){return e===t||e!=e&&t!=t};var Gt=function(e,t){for(var n=e.length;n--;)if(Zt(e[n][0],t))return n;return-1},Xt=Gt,Jt=Array.prototype.splice;var Kt=Gt;var en=Gt;var tn=Gt;var nn=Ut,rn=function(e){var t=this.__data__,n=Xt(t,e);return!(n<0)&&(n==t.length-1?t.pop():Jt.call(t,n,1),--this.size,!0)},on=function(e){var t=this.__data__,n=Kt(t,e);return n<0?void 0:t[n][1]},an=function(e){return en(this.__data__,e)>-1},sn=function(e,t){var n=this.__data__,r=tn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ln(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ln.prototype.clear=nn,ln.prototype.delete=rn,ln.prototype.get=on,ln.prototype.has=an,ln.prototype.set=sn;var cn=ln,un=Mt(We,"Map"),dn=Qt,hn=cn,fn=un;var pn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var mn=function(e,t){var n=e.__data__;return pn(t)?n["string"==typeof t?"string":"hash"]:n.map},gn=mn;var yn=mn;var vn=mn;var bn=mn;var wn=function(){this.size=0,this.__data__={hash:new dn,map:new(fn||hn),string:new dn}},$n=function(e){var t=gn(this,e).delete(e);return this.size-=t?1:0,t},Sn=function(e){return yn(this,e).get(e)},xn=function(e){return vn(this,e).has(e)},On=function(e,t){var n=bn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function _n(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_n.prototype.clear=wn,_n.prototype.delete=$n,_n.prototype.get=Sn,_n.prototype.has=xn,_n.prototype.set=On;var kn=_n;function jn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(jn.Cache||kn),n}jn.Cache=kn;var Dn=jn;var Fn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mn=/\\(\\)?/g,En=function(e){var t=Dn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Fn,(function(e,n,r,i){t.push(r?i.replace(Mn,"$1"):n||e)})),t}));var Pn=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Bn=ze,Tn=rt,Cn=Le?Le.prototype:void 0,An=Cn?Cn.toString:void 0;var Hn=function e(t){if("string"==typeof t)return t;if(Bn(t))return Pn(t,e)+"";if(Tn(t))return An?An.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},In=Hn;var zn=ze,Rn=lt,Nn=En,Wn=function(e){return null==e?"":In(e)};var Ln=rt;var Vn=function(e,t){return zn(e)?e:Rn(e,t)?[e]:Nn(Wn(e))},Yn=function(e){if("string"==typeof e||Ln(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var qn=function(e,t){for(var n=0,r=(t=Vn(t,e)).length;null!=e&&n<r;)e=e[Yn(t[n++])];return n&&n==r?e:void 0};var Qn=function(e,t,n){var r=null==e?void 0:qn(e,t);return void 0===r?n:r};const Un=(e,t,n)=>t?Qn(n,t)||Qn(e,t):n||e,Zn=(e,t)=>{const n=t||e.defaultValue;return Qn(e.collections,n)};var Gn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Gn||(Gn={}));const Xn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Jn=e=>t=>{const n=t.theme,r=Zn(Xn,n[Gn.colorScheme]);return n.options&&n.options.color?Un(r,e,n.options.color):Un(r,e)},Kn={Brand:{1:Jn("Brand.1"),2:Jn("Brand.2"),3:Jn("Brand.3"),4:Jn("Brand.4"),5:Jn("Brand.5"),6:Jn("Brand.6")},Primary:Jn("Primary"),PrimaryDark:Jn("PrimaryDark"),Secondary:Jn("Secondary"),Accent:{Light:{1:Jn("Accent.Light.1"),2:Jn("Accent.Light.2"),3:Jn("Accent.Light.3"),4:Jn("Accent.Light.4"),5:Jn("Accent.Light.5"),6:Jn("Accent.Light.6")},Dark:{1:Jn("Accent.Dark.1"),2:Jn("Accent.Dark.2"),3:Jn("Accent.Dark.3")}},Neutral:{1:Jn("Neutral.1"),2:Jn("Neutral.2"),3:Jn("Neutral.3"),4:Jn("Neutral.4"),5:Jn("Neutral.5"),6:Jn("Neutral.6"),7:Jn("Neutral.7"),8:Jn("Neutral.8")},Validation:{Green:{Text:Jn("Validation.Green.Text"),Icon:Jn("Validation.Green.Icon"),Border:Jn("Validation.Green.Border"),Background:Jn("Validation.Green.Background")},Orange:{Text:Jn("Validation.Orange.Text"),Icon:Jn("Validation.Orange.Icon"),Border:Jn("Validation.Orange.Border"),Background:Jn("Validation.Orange.Background"),Badge:Jn("Validation.Orange.Badge")},Red:{Text:Jn("Validation.Red.Text"),Icon:Jn("Validation.Red.Icon"),Border:Jn("Validation.Red.Border"),Background:Jn("Validation.Red.Background")},Blue:{Text:Jn("Validation.Blue.Text"),Icon:Jn("Validation.Blue.Icon"),Border:Jn("Validation.Blue.Border"),Background:Jn("Validation.Blue.Background")}},Shadow:{Accent:Jn("Shadow.Accent"),Red:Jn("Shadow.Red"),Elevation:Jn("Shadow.Elevation")}},er=e=>Object.keys(W).reduce(((t,n)=>{const r=W[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),tr=er("max-width"),nr=(er("min-width"),$.div`
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
`,Er=$.label`
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
`,Pr=$.div`
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
`;var Br={exports:{}};Br.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),m=i||f.getFullYear(),g=0;i&&!o||(g=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,v,b,w)):new Date(m,g,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Tr,Cr,Ar=Br.exports,Hr={exports:{}},Ir=Hr.exports=(Tr={year:0,month:1,day:2,hour:3,minute:4,second:5},Cr={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Cr[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Cr[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Tr[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),zr={exports:{}};zr.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var $=function(e){return e instanceof _},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new _(n)},O=v;O.l=S,O.i=$,O.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!O.u(t)||t,u=O.p(e),f=function(e,t){var i=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return f(r?y-w:y+(6-w),g);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=O.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[O.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=O.p(u),m=function(e){var t=x(f);return O.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*g;return O.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return O.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:O.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:O.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,m=O.p(h),g=x(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=O.m(this,g);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[m]||v,f?b:O.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),k=_.prototype;return x.prototype=k,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,_,x),e.$i=!0),x},x.locale=S,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var Rr=zr.exports,Nr={exports:{}};Nr.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Wr=Nr.exports,Lr={exports:{}};Lr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Vr=Lr.exports,Yr={exports:{}};Yr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var qr,Qr=Yr.exports;Rr.extend(Wr),Rr.extend(Vr),Rr.extend(Qr),Rr.extend(Ar),Rr.extend(Ir),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Rr(t).startOf("week");return Ur(n).map((e=>Zr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Zr(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Rr(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Rr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Rr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(qr||(qr={}));const Ur=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Zr=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Gr=[1,3,5,7,8,10,12],Xr=[4,6,9,11];var Jr,Kr,ei,ti;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":Gr.includes(o)?Math.min(i,31).toString():Xr.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Rr(e,n);return Rr(t,n).diff(r,"minute")},e.toDayjs=e=>e?Rr(e):Rr()}(Jr||(Jr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Rr(e).isBefore(r,"day"))||!(!i||!Rr(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Rr(e).isValid())return e}return""}}(Kr||(Kr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ei||(ei={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(ti||(ti={}));var ni=function(e){return null==e};let ri=bi();const ii=e=>mi(e,ri);let oi=bi();ii.write=e=>mi(e,oi);let ai=bi();ii.onStart=e=>mi(e,ai);let si=bi();ii.onFrame=e=>mi(e,si);let li=bi();ii.onFinish=e=>mi(e,li);let ci=[];ii.setTimeout=(e,t)=>{let n=ii.now()+t,r=()=>{let e=ci.findIndex((e=>e.cancel==r));~e&&ci.splice(e,1),fi-=~e?1:0},i={time:n,handler:e,cancel:r};return ci.splice(ui(n),0,i),fi+=1,gi(),i};let ui=e=>~(~ci.findIndex((t=>t.time>e))||~ci.length);ii.cancel=e=>{ai.delete(e),si.delete(e),li.delete(e),ri.delete(e),oi.delete(e)},ii.sync=e=>{pi=!0,ii.batchedUpdates(e),pi=!1},ii.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,ii.onStart(n)}return r.handler=e,r.cancel=()=>{ai.delete(n),t=null},r};let di="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ii.use=e=>di=e,ii.now="undefined"!=typeof performance?()=>performance.now():Date.now,ii.batchedUpdates=e=>e(),ii.catch=console.error,ii.frameLoop="always",ii.advance=()=>{"demand"!==ii.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):vi()};let hi=-1,fi=0,pi=!1;function mi(e,t){pi?(t.delete(e),e(0)):(t.add(e),gi())}function gi(){hi<0&&(hi=0,"demand"!==ii.frameLoop&&di(yi))}function yi(){~hi&&(di(yi),ii.batchedUpdates(vi))}function vi(){let e=hi;hi=ii.now();let t=ui(hi);t&&(wi(ci.splice(0,t),(e=>e.handler())),fi-=t),fi?(ai.flush(),ri.flush(e?Math.min(64,hi-e):16.667),si.flush(),oi.flush(),li.flush()):hi=-1}function bi(){let e=new Set,t=e;return{add(n){fi+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(fi-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,fi-=t.size,wi(t,(t=>t(n)&&e.add(t))),fi+=e.size,t=e)}}}function wi(e,t){e.forEach((e=>{try{t(e)}catch(e){ii.catch(e)}}))}function $i(){}const Si={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function xi(e,t){if(Si.arr(e)){if(!Si.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const Oi=(e,t)=>e.forEach(t);function _i(e,t,n){if(Si.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const ki=e=>Si.und(e)?[]:Si.arr(e)?e:[e];function ji(e,t){if(e.size){const n=Array.from(e);e.clear(),Oi(n,t)}}const Di=(e,...t)=>ji(e,(e=>e(...t))),Fi=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Mi,Ei,Pi=null,Bi=!1,Ti=$i;var Ci=Object.freeze({__proto__:null,get createStringInterpolator(){return Mi},get to(){return Ei},get colors(){return Pi},get skipAnimation(){return Bi},get willAdvance(){return Ti},assign:e=>{e.to&&(Ei=e.to),e.now&&(ii.now=e.now),void 0!==e.colors&&(Pi=e.colors),null!=e.skipAnimation&&(Bi=e.skipAnimation),e.createStringInterpolator&&(Mi=e.createStringInterpolator),e.requestAnimationFrame&&ii.use(e.requestAnimationFrame),e.batchedUpdates&&(ii.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Ti=e.willAdvance),e.frameLoop&&(ii.frameLoop=e.frameLoop)}});const Ai=new Set;let Hi=[],Ii=[],zi=0;const Ri={get idle(){return!Ai.size&&!Hi.length},start(e){zi>e.priority?(Ai.add(e),ii.onStart(Ni)):(Wi(e),ii(Vi))},advance:Vi,sort(e){if(zi)ii.onFrame((()=>Ri.sort(e)));else{const t=Hi.indexOf(e);~t&&(Hi.splice(t,1),Li(e))}},clear(){Hi=[],Ai.clear()}};function Ni(){Ai.forEach(Wi),Ai.clear(),ii(Vi)}function Wi(e){Hi.includes(e)||Li(e)}function Li(e){Hi.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Hi,(t=>t.priority>e.priority)),0,e)}function Vi(e){const t=Ii;for(let n=0;n<Hi.length;n++){const r=Hi[n];zi=r.priority,r.idle||(Ti(r),r.advance(e),r.idle||t.push(r))}return zi=0,Ii=Hi,Ii.length=0,Hi=t,Hi.length>0}const Yi="[-+]?\\d*\\.?\\d+",qi=Yi+"%";function Qi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const Ui=new RegExp("rgb"+Qi(Yi,Yi,Yi)),Zi=new RegExp("rgba"+Qi(Yi,Yi,Yi,Yi)),Gi=new RegExp("hsl"+Qi(Yi,qi,qi)),Xi=new RegExp("hsla"+Qi(Yi,qi,qi,Yi)),Ji=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ki=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,eo=/^#([0-9a-fA-F]{6})$/,to=/^#([0-9a-fA-F]{8})$/;function no(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ro(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=no(i,r,e+1/3),a=no(i,r,e),s=no(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function io(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function oo(e){return(parseFloat(e)%360+360)%360/360}function ao(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function so(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function lo(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=eo.exec(e))?parseInt(t[1]+"ff",16)>>>0:Pi&&void 0!==Pi[e]?Pi[e]:(t=Ui.exec(e))?(io(t[1])<<24|io(t[2])<<16|io(t[3])<<8|255)>>>0:(t=Zi.exec(e))?(io(t[1])<<24|io(t[2])<<16|io(t[3])<<8|ao(t[4]))>>>0:(t=Ji.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=to.exec(e))?parseInt(t[1],16)>>>0:(t=Ki.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Gi.exec(e))?(255|ro(oo(t[1]),so(t[2]),so(t[3])))>>>0:(t=Xi.exec(e))?(ro(oo(t[1]),so(t[2]),so(t[3]))|ao(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const co=(e,t,n)=>{if(Si.fun(e))return e;if(Si.arr(e))return co({range:e,output:t,extrapolate:n});if(Si.str(e.output[0]))return Mi(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const uo=1.70158,ho=1.525*uo,fo=uo+1,po=2*Math.PI/3,mo=2*Math.PI/4.5,go=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},yo={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>fo*e*e*e-uo*e*e,easeOutBack:e=>1+fo*Math.pow(e-1,3)+uo*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ho)/2:(Math.pow(2*e-2,2)*((ho+1)*(2*e-2)+ho)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*po),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*po)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*mo)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*mo)/2+1,easeInBounce:e=>1-go(1-e),easeOutBounce:go,easeInOutBounce:e=>e<.5?(1-go(1-2*e))/2:(1+go(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vo.apply(this,arguments)}const bo=Symbol.for("FluidValue.get"),wo=Symbol.for("FluidValue.observers"),$o=e=>Boolean(e&&e[bo]),So=e=>e&&e[bo]?e[bo]():e,xo=e=>e[wo]||null;function Oo(e,t){let n=e[wo];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class _o{constructor(e){if(this[bo]=void 0,this[wo]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");ko(this,e)}}const ko=(e,t)=>Fo(e,bo,t);function jo(e,t){if(e[bo]){let n=e[wo];n||Fo(e,wo,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Do(e,t){let n=e[wo];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[wo]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Fo=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Mo=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Eo=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Po=new RegExp(`(${Mo.source})(%|[a-z]+)`,"i"),Bo=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,To=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Co=e=>{const[t,n]=Ao(e);if(!t||Fi())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&To.test(n)?Co(n):n||e},Ao=e=>{const t=To.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Ho;const Io=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,zo=e=>{Ho||(Ho=Pi?new RegExp(`(${Object.keys(Pi).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>So(e).replace(To,Co).replace(Eo,lo).replace(Ho,lo))),n=t.map((e=>e.match(Mo).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>co(vo({},e,{output:t}))));return e=>{var n;const i=!Po.test(t[0])&&(null==(n=t.find((e=>Po.test(e))))?void 0:n.replace(Mo,""));let o=0;return t[0].replace(Mo,(()=>`${r[o++](e)}${i||""}`)).replace(Bo,Io)}},Ro="react-spring: ",No=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Ro}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Wo=No(console.warn);const Lo=No(console.warn);function Vo(e){return Si.str(e)&&("#"==e[0]||/\d/.test(e)||!Fi()&&To.test(e)||e in(Pi||{}))}const Yo=Fi()?l:f,qo=()=>{const e=s(!1);return Yo((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Qo(){const e=a()[1],t=qo();return()=>{t.current&&e(Math.random())}}const Uo=e=>l(e,Zo),Zo=[];function Go(e){const t=s();return l((()=>{t.current=e})),t.current}const Xo=Symbol.for("Animated:node"),Jo=e=>e&&e[Xo],Ko=(e,t)=>{return n=e,r=Xo,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},ea=e=>e&&e[Xo]&&e[Xo].getPayload();class ta{constructor(){this.payload=void 0,Ko(this,this)}getPayload(){return this.payload||[]}}class na extends ta{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Si.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new na(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Si.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Si.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ra extends na{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=co({output:[e,e]})}static create(e){return new ra(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Si.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=co({output:[this.getValue(),e]})),this._value=0,super.reset()}}const ia={dependencies:null};class oa extends ta{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return _i(this.source,((n,r)=>{var i;(i=n)&&i[Xo]===i?t[r]=n.getValue(e):$o(n)?t[r]=So(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Oi(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return _i(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ia.dependencies&&$o(e)&&ia.dependencies.add(e);const t=ea(e);t&&Oi(t,(e=>this.add(e)))}}class aa extends oa{constructor(e){super(e)}static create(e){return new aa(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(sa)),!0)}}function sa(e){return(Vo(e)?ra:na).create(e)}function la(e){const t=Jo(e);return t?t.constructor:Si.arr(e)?aa:Vo(e)?ra:na}function ca(){return ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ca.apply(this,arguments)}const ua=(e,t)=>{const n=!Si.fun(e)||e.prototype&&e.prototype.isReactComponent;return p(((r,o)=>{const a=s(null),c=n&&m((e=>{a.current=function(e,t){e&&(Si.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[u,d]=function(e,t){const n=new Set;ia.dependencies=n,e.style&&(e=ca({},e,{style:t.createAnimatedStyle(e.style)}));return e=new oa(e),ia.dependencies=null,[e,n]}(r,t),h=Qo(),f=()=>{const e=a.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},p=new da(f,d),g=s();Yo((()=>(g.current=p,Oi(d,(e=>jo(e,p))),()=>{g.current&&(Oi(g.current.deps,(e=>Do(e,g.current))),ii.cancel(g.current.update))}))),l(f,[]),Uo((()=>()=>{const e=g.current;Oi(e.deps,(t=>Do(t,e)))}));const y=t.getComponentProps(u.getValue());return i.createElement(e,ca({},y,{ref:c}))}))};class da{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ii.write(this.update)}}const ha=Symbol.for("AnimatedComponent"),fa=e=>Si.str(e)?e:e&&Si.str(e.displayName)?e.displayName:Si.fun(e)&&e.name||null;function pa(){return pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pa.apply(this,arguments)}function ma(e,...t){return Si.fun(e)?e(...t):e}const ga=(e,t)=>!0===e||!!(t&&e&&(Si.fun(e)?e(t):ki(e).includes(t))),ya=(e,t)=>Si.obj(e)?t&&e[t]:e,va=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ba=e=>e,wa=(e,t=ba)=>{let n=$a;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Si.und(n)||(r[i]=n)}return r},$a=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Sa={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function xa(e){const t=function(e){const t={};let n=0;if(_i(e,((e,r)=>{Sa[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return _i(e,((e,r)=>r in t||(n[r]=e))),n}return pa({},e)}function Oa(e){return e=So(e),Si.arr(e)?e.map(Oa):Vo(e)?Ci.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function _a(e){return Si.fun(e)||Si.arr(e)&&Si.obj(e[0])}const ka=pa({},{tension:170,friction:26},{mass:1,damping:1,easing:yo.linear,clamp:!1});class ja{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,ka)}}function Da(e,t){if(Si.und(t.decay)){const n=!Si.und(t.tension)||!Si.und(t.friction);!n&&Si.und(t.frequency)&&Si.und(t.damping)&&Si.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Fa=[];class Ma{constructor(){this.changed=!1,this.values=Fa,this.toValues=null,this.fromValues=Fa,this.to=void 0,this.from=void 0,this.config=new ja,this.immediate=!1}}function Ea(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=ga(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{Si.und(n.pause)||(i.paused=ga(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||ga(e,t)),c=ma(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-ii.now()}function f(){c>0&&!Ci.skipAnimation?(i.delayed=!0,u=ii.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(pa({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Pa=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ca(e.get()):t.every((e=>e.noop))?Ba(e.get()):Ta(e.get(),t.every((e=>e.finished))),Ba=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ta=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Ca=e=>({value:e,cancelled:!0,finished:!1});function Aa(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=wa(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&Ca(r)||i!==n.asyncId&&Ta(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new Ia,a=new za;return(async()=>{if(Ci.skipAnimation)throw Ha(n),a.result=Ta(r,!1),d(a),a;f(o);const s=Si.obj(e)?pa({},e):pa({},t,{to:e});s.parentId=i,_i(c,((e,t)=>{Si.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(Ci.skipAnimation)return Ha(n),Ta(r,!1);try{let t;t=Si.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),m=Ta(r.get(),!0,!1)}catch(e){if(e instanceof Ia)m=e.result;else{if(!(e instanceof za))throw e;m=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Si.fun(a)&&ii.batchedUpdates((()=>{a(m,r,r.item)})),m})():l}function Ha(e,t){ji(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Ia extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class za extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Ra=e=>e instanceof Wa;let Na=1;class Wa extends _o{constructor(...e){super(...e),this.id=Na++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Jo(this);return e&&e.getValue()}to(...e){return Ci.to(this,e)}interpolate(...e){return Wo(`${Ro}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ci.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Oo(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Ri.sort(this),Oo(this,{type:"priority",parent:this,priority:e})}}const La=Symbol.for("SpringPhase"),Va=e=>(1&e[La])>0,Ya=e=>(2&e[La])>0,qa=e=>(4&e[La])>0,Qa=(e,t)=>t?e[La]|=3:e[La]&=-3,Ua=(e,t)=>t?e[La]|=4:e[La]&=-5;class Za extends Wa{constructor(e,t){if(super(),this.key=void 0,this.animation=new Ma,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Si.und(e)||!Si.und(t)){const n=Si.obj(e)?pa({},e):pa({},t,{from:e});Si.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Ya(this)||this._state.asyncTo)||qa(this)}get goal(){return So(this.animation.to)}get velocity(){const e=Jo(this);return e instanceof na?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Va(this)}get isAnimating(){return Ya(this)}get isPaused(){return qa(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=ea(r.to);!a&&$o(r.to)&&(o=ki(So(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ra?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Si.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Si.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Si.und(r),f=n==c?s.v0>0:n<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*g,d+=a*g}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=Jo(this),l=s.getValue();if(t){const e=So(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return ii.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ya(this)){const{to:e,config:t}=this.animation;ii.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Si.und(e)?(n=this.queue||[],this.queue=[]):n=[Si.obj(e)?e:pa({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Pa(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ha(this._state,e&&this._lastCallId),ii.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Si.obj(n)?n[t]:n,(null==n||_a(n))&&(n=void 0),r=Si.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Va(this)||(e.reverse&&([n,r]=[r,n]),r=So(r),Si.und(r)?Jo(this)||this._set(n):this._set(r)),i}_update(e,t){let n=pa({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,wa(n,((e,t)=>/^on/.test(t)?ya(e,r):e))),ns(this,n,"onProps"),rs(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Ea(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{qa(this)||(Ua(this,!0),Di(a.pauseQueue),rs(this,"onPause",Ta(this,Ga(this,this.animation.to)),this))},resume:()=>{qa(this)&&(Ua(this,!1),Ya(this)&&this._resume(),Di(a.resumeQueue),rs(this,"onResume",Ta(this,Ga(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=Xa(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Ca(this));const r=!Si.und(e.to),i=!Si.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Ca(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Si.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!xi(d,c);h&&(s.from=d),d=So(d);const f=!xi(u,l);f&&this._focus(u);const p=_a(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||i)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(Da(n=pa({},n),t),t=pa({},n,t)),Da(e,t),Object.assign(e,t);for(const t in ka)null==e[t]&&(e[t]=ka[t]);let{mass:r,frequency:i,damping:o}=e;Si.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(m,ma(t.config,o),t.config!==a.config?ma(a.config,o):void 0);let v=Jo(this);if(!v||Si.und(u))return n(Ta(this,!0));const b=Si.und(t.reset)?i&&!t.default:!Si.und(d)&&ga(t.reset,o),w=b?d:this.get(),$=Oa(u),S=Si.num($)||Si.arr($)||Vo($),x=!p&&(!S||ga(a.immediate||t.immediate,o));if(f){const e=la(u);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const O=v.constructor;let _=$o(u),k=!1;if(!_){const e=b||!Va(this)&&h;(f||e)&&(k=xi(Oa(w),$),_=!k),(xi(s.immediate,x)||x)&&xi(m.decay,g)&&xi(m.velocity,y)||(_=!0)}if(k&&Ya(this)&&(s.changed&&!b?_=!0:_||this._stop(l)),!p&&((_||$o(l))&&(s.values=v.getPayload(),s.toValues=$o(u)?null:O==ra?[1]:ki($)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),_)){const{onRest:e}=s;Oi(ts,(e=>ns(this,t,e)));const r=Ta(this,Ga(this,l));Di(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&ii.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?ma(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(Aa(t.to,t,this._state,this)):_?this._start():Ya(this)&&!f?this._pendingCalls.add(n):n(Ba(w))}_focus(e){const t=this.animation;e!==t.to&&(xo(this)&&this._detach(),t.to=e,xo(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;$o(t)&&(jo(t,this),Ra(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;$o(e)&&Do(e,this)}_set(e,t=!0){const n=So(e);if(!Si.und(n)){const e=Jo(this);if(!e||!xi(n,e.getValue())){const r=la(n);e&&e.constructor==r?e.setValue(n):Ko(this,r.create(n)),e&&ii.batchedUpdates((()=>{this._onChange(n,t)}))}}return Jo(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,rs(this,"onStart",Ta(this,Ga(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ma(this.animation.onChange,e,this)),ma(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Jo(this).reset(So(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ya(this)||(Qa(this,!0),qa(this)||this._resume())}_resume(){Ci.skipAnimation?this.finish():Ri.start(this)}_stop(e,t){if(Ya(this)){Qa(this,!1);const n=this.animation;Oi(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Oo(this,{type:"idle",parent:this});const r=t?Ca(this.get()):Ta(this.get(),Ga(this,null!=e?e:n.to));Di(this._pendingCalls,r),n.changed&&(n.changed=!1,rs(this,"onRest",r,this))}}}function Ga(e,t){const n=Oa(t);return xi(Oa(e.get()),n)}function Xa(e,t=e.loop,n=e.to){let r=ma(t);if(r){const i=!0!==r&&xa(r),o=(i||e).reverse,a=!i||i.reset;return Ja(pa({},e,{loop:t,default:!1,pause:void 0,to:!o||_a(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function Ja(e){const{to:t,from:n}=e=xa(e),r=new Set;return Si.obj(t)&&es(t,r),Si.obj(n)&&es(n,r),e.keys=r.size?Array.from(r):null,e}function Ka(e){const t=Ja(e);return Si.und(t.default)&&(t.default=wa(t)),t}function es(e,t){_i(e,((e,n)=>null!=e&&t.add(n)))}const ts=["onStart","onRest","onChange","onPause","onResume"];function ns(e,t,n){e.animation[n]=t[n]!==va(t,n)?ya(t[n],e.key):void 0}function rs(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const is=["onStart","onChange","onRest"];let os=1;class as{constructor(e,t){this.id=os++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(pa({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Si.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Ja(e)),this}start(e){let{queue:t}=this;return e?t=ki(e).map(Ja):this.queue=[],this._flush?this._flush(this,t):(fs(this,t),ss(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Oi(ki(t),(t=>n[t].stop(!!e)))}else Ha(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Si.und(e))this.start({pause:!0});else{const t=this.springs;Oi(ki(e),(e=>t[e].pause()))}return this}resume(e){if(Si.und(e))this.start({pause:!1});else{const t=this.springs;Oi(ki(e),(e=>t[e].resume()))}return this}each(e){_i(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,ji(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&ji(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,ji(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ii.onFrame(this._onFrame)}}function ss(e,t){return Promise.all(t.map((t=>ls(e,t)))).then((t=>Pa(e,t)))}async function ls(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Si.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Si.arr(i)||Si.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Oi(is,(n=>{const r=t[n];if(Si.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Di(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===va(t,"cancel");(u||f&&d.asyncId)&&h.push(Ea(++e._lastAsyncId,{props:t,state:d,actions:{pause:$i,resume:$i,start(t,n){f?(Ha(d,e._lastAsyncId),n(Ca(e))):(t.onRest=s,n(Aa(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Pa(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=Xa(t,a,i);if(n)return fs(e,[n]),ls(e,n,!0)}return l&&ii.batchedUpdates((()=>l(p,e,e.item))),p}function cs(e,t){const n=pa({},e.springs);return t&&Oi(ki(t),(e=>{Si.und(e.keys)&&(e=Ja(e)),Si.obj(e.to)||(e=pa({},e,{to:void 0})),hs(n,e,(e=>ds(e)))})),us(e,n),n}function us(e,t){_i(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,jo(t,e))}))}function ds(e,t){const n=new Za;return n.key=e,t&&jo(n,t),n}function hs(e,t,n){t.keys&&Oi(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function fs(e,t){Oi(t,(t=>{hs(e.springs,t,(t=>ds(t,e)))}))}const ps=["children"],ms=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,ps);const r=g(gs),o=n.pause||!!r.pause,c=n.immediate||!!r.immediate;n=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=s(),i=r.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=n;return l((()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)}),[o]),o.result}((()=>({pause:o,immediate:c})),[o,c]);const{Provider:u}=gs;return i.createElement(u,{value:n},t)},gs=(ys=ms,vs={},Object.assign(ys,i.createContext(vs)),ys.Provider._context=ys,ys.Consumer._context=ys,ys);var ys,vs;ms.Provider=gs.Provider,ms.Consumer=gs.Consumer;const bs=()=>{const e=[],t=function(t){Lo(`${Ro}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Oi(e,((e,i)=>{if(Si.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Oi(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Oi(e,(e=>e.resume(...arguments))),this},t.set=function(t){Oi(e,(e=>e.set(t)))},t.start=function(t){const n=[];return Oi(e,((e,r)=>{if(Si.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Oi(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Oi(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Si.fun(e)?e(n,t):e};return t._getProps=n,t};function ws(e,t){const n=Si.fun(e),[[r],i]=function(e,t,n){const r=Si.fun(t)&&t;r&&!n&&(n=[]);const i=y((()=>r||3==arguments.length?bs():void 0),[]),o=s(0),a=Qo(),l=y((()=>({ctrls:[],queue:[],flush(e,t){const n=cs(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?ss(e,t):new Promise((r=>{us(e,n),l.queue.push((()=>{r(ss(e,t))})),a()}))}})),[]),c=s([...l.ctrls]),u=[],d=Go(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new as(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=Ka(n))}}y((()=>{Oi(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),y((()=>{h(0,Math.min(d,e))}),n);const f=c.current.map(((e,t)=>cs(e,u[t]))),p=g(ms),m=Go(p),v=p!==m&&function(e){for(const t in e)return!0;return!1}(p);Yo((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Oi(e,(e=>e()))),Oi(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:p});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Uo((()=>()=>{Oi(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>pa({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let $s;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}($s||($s={}));class Ss extends Wa{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=co(...t);const n=this._get(),r=la(n);Ko(this,r.create(n))}advance(e){const t=this._get();xi(t,this.get())||(Jo(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Os(this._active)&&_s(this)}_get(){const e=Si.arr(this.source)?this.source.map(So):ki(So(this.source));return this.calc(...e)}_start(){this.idle&&!Os(this._active)&&(this.idle=!1,Oi(ea(this),(e=>{e.done=!1})),Ci.skipAnimation?(ii.batchedUpdates((()=>this.advance())),_s(this)):Ri.start(this))}_attach(){let e=1;Oi(ki(this.source),(t=>{$o(t)&&jo(t,this),Ra(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Oi(ki(this.source),(e=>{$o(e)&&Do(e,this)})),this._active.clear(),_s(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ki(this.source).reduce(((e,t)=>Math.max(e,(Ra(t)?t.priority:0)+1)),0))}}function xs(e){return!1!==e.idle}function Os(e){return!e.size||Array.from(e).every(xs)}function _s(e){e.idle||(e.idle=!0,Oi(ea(e),(e=>{e.done=!0})),Oo(e,{type:"idle",parent:e}))}function ks(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Ci.assign({createStringInterpolator:zo,to:(e,t)=>new Ss(e,t)});const js=["style","children","scrollTop","scrollLeft","viewBox"],Ds=/^--/;function Fs(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ds.test(e)||Es.hasOwnProperty(e)&&Es[e]?(""+t).trim():t+"px"}const Ms={};let Es={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Ps=["Webkit","Ms","Moz","O"];Es=Object.keys(Es).reduce(((e,t)=>(Ps.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Es);const Bs=["x","y","z"],Ts=/^(matrix|translate|scale|rotate|skew)/,Cs=/^(translate)/,As=/^(rotate|skew)/,Hs=(e,t)=>Si.num(e)&&0!==e?e+t:e,Is=(e,t)=>Si.arr(e)?e.every((e=>Is(e,t))):Si.num(e)?e===t:parseFloat(e)===t;class zs extends oa{constructor(e){let{x:t,y:n,z:r}=e,i=ks(e,Bs);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Hs(e,"px"))).join(",")})`,Is(e,0)]))),_i(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Ts.test(t)){if(delete i[t],Si.und(e))return;const n=Cs.test(t)?"px":As.test(t)?"deg":"";o.push(ki(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Hs(i,n)})`,Is(i,0)]:e=>[`${t}(${e.map((e=>Hs(e,n))).join(",")})`,Is(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Rs(o,a)),super(i)}}class Rs extends _o{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Oi(this.inputs,((n,r)=>{const i=So(n[0]),[o,a]=this.transforms[r](Si.arr(i)?i:n.map(So));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Oi(this.inputs,(e=>Oi(e,(e=>$o(e)&&jo(e,this)))))}observerRemoved(e){0==e&&Oi(this.inputs,(e=>Oi(e,(e=>$o(e)&&Do(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Oo(this,e)}}const Ns=["scrollTop","scrollLeft"];Ci.assign({batchedUpdates:w,createStringInterpolator:zo,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Ws=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new oa(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=fa(e)||"Anonymous";return(e=Si.str(e)?o[e]||(o[e]=ua(e,i)):e[ha]||(e[ha]=ua(e,i))).displayName=`Animated(${t})`,e};return _i(e,((t,n)=>{Si.arr(e)&&(n=fa(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=ks(r,js),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Ms[t]||(Ms[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Fs(t,i[t]);Ds.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new zs(e),getComponentProps:e=>ks(e,Ns)}),Ls=Ws.animated,Vs=$.button`
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
`,Ys=o.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=B(t,["children","focusHighlight","focusOutline","type"]);return e(Vs,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),qs=$.div`
    background-color: ${e=>e.$collapsible?Kn.Neutral[7](e):Kn.Neutral[8](e)};

    ${tr.tablet} {
        background-color: ${Kn.Neutral[7]};
    }
`,Qs=$.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Kn.Neutral[5]};

    ${tr.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,Us=$.div`
    display: flex;
    align-items: center;

    background-color: ${Kn.Neutral[8]};

    ${tr.tablet} {
        background-color: transparent;
    }
`,Zs=$(Ys)`
    margin: 0 0 0 auto;
`,Gs=$(M)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Kn.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${Kn.Neutral[2]};
    }
`,Xs=$(vr.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${tr.tablet} {
        ${gr("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,Js=$(Ls.div)`
    overflow: hidden;
`,Ks=$.div`
    padding: 1rem 1.25rem;
`,el=$(Ls.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,tl=$(_r.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,nl=n=>{var{collapsible:r=!0,initialExpanded:i=!1,expanded:o,onExpandChange:s,minimisable:c=!1,minimisedHeight:u,showDivider:d=!0,showMobileDivider:h=!0,title:f,children:p}=n,m=B(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","children"]);const{mode:y}=g(Ie),v="mobile"===y,[b,w]=a(function(){if(v)return!0;if(ni(o))return!r||i;return o}()),[$,S]=a(c),x=!v&&r,O=He(),_=He(),k=ws({height:b?O.height:0}),j=$?null!=u?u:Math.min(.5*_.height,216):_.height;l((()=>{ni(o)||w(o)}),[o]);return t(qs,Object.assign({$collapsible:x},{children:[e(Qs,{$showDivider:d,$showMobileDivider:h}),(f||x)&&t(Us,{children:[f&&e(Xs,Object.assign({weight:"semibold"},{children:f})),x&&e(Zs,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!b;ni(o)&&w(e),s&&s(e)},"aria-label":b?"Collapse":"Expand"},{children:e(Gs,{$expanded:b})}))]}),e(Js,Object.assign({"data-testid":"expandable-container",style:k},{children:e("div",Object.assign({ref:O.ref},{children:t(Ks,Object.assign({},m,{children:[e(el,Object.assign({"data-testid":"minimisable-container",$height:j,$minimisable:c},{children:e("div",Object.assign({ref:_.ref},{children:e("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof p?p(y,{minimised:$}):p}))}))})),c&&t(tl,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{S(!$)}},{children:["View ",$?"more":"less"]}))]}))}))}))]}))},rl=$(nl)`
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
`,il=$.div`
    display: flex;
    flex-direction: column;

    ${tr.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,ol=$.label`
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
`,al=$.input`
    appearance: none;
`,sl=$(jr)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${al}:focus-visible + & {
        outline: 2px solid ${Kn.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,ll=$((({type:n="checkbox",indicator:r,checked:i,styleType:o="default",children:c,subLabel:u,disabled:d,error:h,name:f,id:p,className:m,"data-testid":g,onChange:y})=>{const[v,b]=a(i),[w]=a(ei.generate()),$=p?`${p}-input`:`tg-${w}-input`,S=s();l((()=>{b(i)}),[i]);return t(Dr,Object.assign({$selected:v,$disabled:d,className:m,$styleType:o,$error:h,$indicator:r,id:p,"data-testid":g},{children:[r&&(()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e(jr,{type:t,active:v,disabled:d})})(),e(Fr,{ref:S,name:f,id:$,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:e=>{if(!d){if(y)return void y(e);switch(n){case"checkbox":b((e=>!e));break;case"radio":case"yes":case"no":v||b(!0)}}},checked:v}),t(Mr,{children:[e(Er,Object.assign({htmlFor:$,$selected:v,$indicator:r,$disabled:d,"data-testid":"toggle-label"},{children:c})),u&&(()=>{if(!u)return null;let t;return"string"==typeof u?t=u:"function"==typeof u&&(t=u()),e(Pr,Object.assign({$disabled:d,$selected:v},{children:t}))})()]})]}))}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,cl=$(_r.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${tr.tablet} {
        margin: 0 0 1rem 0;
    }
`,ul=$.div`
    background-color: ${Kn.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,dl=$.div`
    ${tr.tablet} {
        display: none;
    }
`,hl=$.div`
    display: none;
    ${tr.tablet} {
        display: block;
    }
`,fl=$.div`
    background-color: ${Kn.Neutral[8]};
    border: 1px solid ${Kn.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,pl=$.div`
    background-color: ${Kn.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,ml=$.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,gl=$.div`
    display: flex;
    align-items: center;

    background-color: ${Kn.Neutral[8]};

    ${tr.tablet} {
        border-bottom: 1px solid ${Kn.Neutral[5]};
    }
`,yl=$(vr.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${tr.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,vl=$(Ys)`
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
`,bl=$(_r.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${tr.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,wl=$(_r.Default)`
    width: 100%;
    span {
        display: flex;
        align-items: center;
    }
`,$l=$(P)`
    margin-right: 0.625rem;
`,Sl=$.div`
    padding: 1.5rem 1.25rem;
    background-color: ${Kn.Neutral[8]};
    border-top: 1px solid ${Kn.Neutral[5]};
`,xl=$(_r.Default)`
    width: 100%;
`,Ol=Object.assign((i=>{var{toggleFilterButtonLabel:o="Filters",headerTitle:s="Filters",clearButtonDisabled:l=!1,onClear:c,onDismiss:u,onDone:d,children:h}=i,f=B(i,["toggleFilterButtonLabel","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[p,m]=a(!1);A.exports.useMediaQuery({maxWidth:W.tablet},void 0,(e=>{e||y()}));const g=()=>{m(!0)},y=()=>{m(!1),u&&u()},v=()=>{m(!1),d&&d()},b=()=>{c&&c()},w=e=>"function"==typeof h?h(e):h,$=n=>t(gl,{children:["mobile"===n&&e(vl,Object.assign({onClick:y,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(r,{})})),e(yl,Object.assign({weight:"semibold"},{children:s})),e(bl,Object.assign({styleType:"link",type:"button",onClick:b,disabled:l},{children:"Clear"}))]});return t("div",Object.assign({},f,{children:[e(hl,{children:e(Ie.Provider,Object.assign({value:{mode:"mobile"}},{children:t(n,{children:[t(wl,Object.assign({"data-testid":"filter-show-button",styleType:"light",onClick:g,type:"button"},{children:[e($l,{})," ",o]})),e(z,Object.assign({show:p,disableTransition:!0},{children:t(pl,Object.assign({"data-testid":"filter-mobile"},{children:[$("mobile"),e(ml,{children:w("mobile")}),e(Sl,{children:e(xl,Object.assign({onClick:v,type:"button"},{children:"Done"}))})]}))}))]})}))}),e(dl,{children:e(Ie.Provider,Object.assign({value:{mode:"default"}},{children:t(fl,Object.assign({"data-testid":"filter-desktop"},{children:[$("default"),w("default")]}))}))})]}))}),{Item:nl,Page:({onDismiss:n,onDone:r,children:i})=>t(ul,{children:[e(vl,Object.assign({onClick:n,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(E,{})})),e(ml,{children:i}),e(Sl,{children:e(xl,Object.assign({onClick:r,type:"button"},{children:"Done"}))})]}),Checkbox:r=>{var{selectedOptions:i,options:o,onSelect:c,labelExtractor:u,valueExtractor:d}=r,h=B(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor"]);const{mode:f}=g(Ie),[p,y]=a(i||[]),[v,b]=a(),[w,$]=a(o.length),S=s(),x=s(),O=e=>()=>{const t=[...p],n=p.findIndex((t=>j(t)===j(e)));n>=0?t.splice(n,1):t.push(e),y(t),null==c||c(t)},_=()=>{const e=p.length?[]:o;y(e),null==c||c(e)},k=e=>{var t;return u?u(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},j=e=>{var t;return d?d(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},D=m((()=>{if(!S.current)return void b(void 0);const e=Array.from(S.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>r&&(n++,r=o,n>2))break;t=i}$(t),b(n>2?r-8:void 0)}),[]);l((()=>{i!==p&&y(i||[])}),[i]),l((()=>{"default"===f?(()=>{const e=x.current?x.current.offsetTop+x.current.clientHeight:void 0;b(e)})():D()}),[o]),He({handleWidth:"mobile"===f,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:S,onResize:D});return e(rl,Object.assign({minimisable:o.length>5,minimisedHeight:v},h,{children:(r,{minimised:i})=>t(n,{children:[o.length<3?null:e(cl,Object.assign({styleType:"link",type:"button",onClick:_},{children:p.length?"Clear all":"Select all"})),e(il,Object.assign({role:"group","aria-label":h.title,ref:S},{children:o.map(((n,o)=>"default"===r?((n,r,i)=>{const o=k(n),a=j(n),s=!!p.find((e=>j(e)===a));return t(ol,Object.assign({$visible:!i||r<5,$selected:s,ref:4===r?x:void 0},{children:[e(al,{type:"checkbox",checked:s,onChange:O(n)}),e(sl,{type:"checkbox",active:s}),o]}),a)})(n,o,i):((t,n,r)=>{const i=k(t),o=j(t),a=!!p.find((e=>j(e)===o));return e(ll,Object.assign({type:"checkbox",checked:a,$visible:!r||v&&n<=w,onChange:O(t)},{children:i}),o)})(n,o,i)))}))]})}))}});export{Ol as Filter};
//# sourceMappingURL=index.js.map
