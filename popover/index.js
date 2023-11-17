import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useState as i,useRef as o,useEffect as a}from"react";import{ExternalIcon as s}from"@lifesg/react-icons/external";import c,{css as u}from"styled-components";import l from"react-dom";import{CrossIcon as d}from"@lifesg/react-icons/cross";function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var h,p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m={exports:{}};h=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,r=e.modifier,i=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=l(i),o=l(o);break;case"resolution":i=u(i),o=u(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=c(i),o=c(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!n||!i&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),o=t[1],a=t[2],s=t[3]||"",c={};return c.inverse=!!o&&"not"===o.toLowerCase(),c.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],c.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function u(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function l(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in o=Object(arguments[c]))n.call(o,u)&&(s[u]=o[u]);if(t){a=t(o);for(var l=0;l<a.length;l++)r.call(o,a[l])&&(s[a[l]]=o[a[l]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,c){for(var u in e)if(a(e,u)){var l;try{if("function"!=typeof e[u]){var d=Error((s||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}l=e[u](t,u,s,n,null,i)}catch(e){l=e}if(!l||l instanceof Error||r((s||"React class")+": type specification of "+n+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in o)){o[l.message]=!0;var f=c?c():"";r("Failed "+n+" type: "+l.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),c=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function u(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,l="@@iterator",d="<<anonymous>>",f={array:y("array"),bigint:y("bigint"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:m(u),arrayOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<s.length;c++){var u=e(s,c,r,i,o+"["+c+"]",a);if(u instanceof Error)return u}return null}))},element:m((function(t,n,r,i,o){var a=t[n];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+r+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||d;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],u=b(c);if("object"!==u)return new p("Invalid "+i+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var l in c)if(s(c,l)){var d=e(c,l,r,i,o+"."+l,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(h(a,e[s]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===S(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),u)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),u;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),u}return m((function(t,n,r,i,o){for(var c=[],u=0;u<e.length;u++){var l=(0,e[u])(t,n,r,i,o,a);if(null==l)return null;l.data&&s(l.data,"expectedType")&&c.push(l.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,i,o){var s=t[n],c=b(s);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var l=e[u];if("function"!=typeof l)return g(r,i,o,u,S(l));var d=l(s,u,r,i,o+"."+u,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,i,c){var u=t[n],l=b(u);if("object"!==l)return new p("Invalid "+i+" `"+c+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var d=o({},t[n],e);for(var f in d){var h=e[f];if(s(e,f)&&"function"!=typeof h)return g(r,i,c,f,S(h));if(!h)return new p("Invalid "+i+" `"+c+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=h(u,f,r,i,c+"."+f,a);if(m)return m}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},i=0;function o(o,s,c,u,l,f,h){if(u=u||d,f=f||c,h!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var y=u+":"+c;!n[y]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[y]=!0,i++)}}return null==s[c]?o?null===s[c]?new p("The "+l+" `"+f+"` is marked as required in `"+u+"`, but its value is `null`."):new p("The "+l+" `"+f+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(s,c,u,l,f)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function y(e){return m((function(t,n,r,i,o,a){var s=t[n];return b(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+S(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[l]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function S(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=S(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=c,f.resetWarningCache=c.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case u:case l:case i:case a:case o:case f:return h;default:var y=h&&h.$$typeof;switch(y){case c:case d:case m:case p:case s:return y;default:return t}}case r:return t}}}var w=u,$=l,x=c,F=s,D=n,O=d,B=i,_=m,j=p,E=r,M=a,H=o,k=f,C=!1;function T(e){return S(e)===l}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=x,t.ContextProvider=F,t.Element=D,t.ForwardRef=O,t.Fragment=B,t.Lazy=_,t.Memo=j,t.Portal=E,t.Profiler=M,t.StrictMode=H,t.Suspense=k,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),T(e)||S(e)===u},t.isConcurrentMode=T,t.isContextConsumer=function(e){return S(e)===c},t.isContextProvider=function(e){return S(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===d},t.isFragment=function(e){return S(e)===i},t.isLazy=function(e){return S(e)===m},t.isMemo=function(e){return S(e)===p},t.isPortal=function(e){return S(e)===r},t.isProfiler=function(e){return S(e)===a},t.isStrictMode=function(e){return S(e)===o},t.isSuspense=function(e){return S(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===a||e===o||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b||e.$$typeof===y)},t.typeOf=S}()},"./node_modules/react-is/index.js":
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
  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),c={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},u={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(c)},l=i(u,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},l),f=r(r({},c),d);t.default={all:f,types:c,matchers:u,features:d}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),o=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),c=r(n(/*! ./toQuery */"./src/toQuery.ts")),u=r(n(/*! ./Context */"./src/Context.ts")),l=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(u.default),n=function(){return l(e)||l(t)},r=(0,i.useState)(n),o=r[0],a=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,i.useState)(n),a=r[0],s=r[1],c=d();return(0,i.useEffect)((function(){if(c){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),h=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(c),p=d();return(0,i.useEffect)((function(){p&&n&&n(h)}),[h]),(0,i.useEffect)((function(){return function(){c&&c.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),m.exports=h(r);const y={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var g=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},v="object"==typeof p&&p&&p.Object===Object&&p,b="object"==typeof self&&self&&self.Object===Object&&self,S=v||b||Function("return this")(),w=S,$=function(){return w.Date.now()},x=/\s/;var F=function(e){for(var t=e.length;t--&&x.test(e.charAt(t)););return t},D=/^\s+/;var O=function(e){return e?e.slice(0,F(e)+1).replace(D,""):e},B=S.Symbol,_=B,j=Object.prototype,E=j.hasOwnProperty,M=j.toString,H=_?_.toStringTag:void 0;var k=function(e){var t=E.call(e,H),n=e[H];try{e[H]=void 0;var r=!0}catch(e){}var i=M.call(e);return r&&(t?e[H]=n:delete e[H]),i},C=Object.prototype.toString;var T=k,A=function(e){return C.call(e)},z=B?B.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":z&&z in Object(e)?T(e):A(e)};var W=L,I=function(e){return null!=e&&"object"==typeof e};var Y=function(e){return"symbol"==typeof e||I(e)&&"[object Symbol]"==W(e)},P=O,R=g,V=Y,N=/^[-+]0x[0-9a-f]+$/i,Z=/^0b[01]+$/i,q=/^0o[0-7]+$/i,X=parseInt;var Q=g,U=$,G=function(e){if("number"==typeof e)return e;if(V(e))return NaN;if(R(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=R(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=P(e);var n=Z.test(e);return n||q.test(e)?X(e.slice(2),n?2:8):N.test(e)?NaN:+e},J=Math.max,K=Math.min;var ee=function(e,t,n){var r,i,o,a,s,c,u=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,o=i;return r=i=void 0,u=t,a=e.apply(o,n)}function p(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-u>=o}function m(){var e=U();if(p(e))return y(e);s=setTimeout(m,function(e){var n=t-(e-c);return d?K(n,o-(e-u)):n}(e))}function y(e){return s=void 0,f&&r?h(e):(r=i=void 0,a)}function g(){var e=U(),n=p(e);if(r=arguments,i=this,c=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(m,t),l?h(e):a}(c);if(d)return clearTimeout(s),s=setTimeout(m,t),h(c)}return void 0===s&&(s=setTimeout(m,t)),a}return t=G(t)||0,Q(n)&&(l=!!n.leading,o=(d="maxWait"in n)?J(G(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=c=i=s=void 0},g.flush=function(){return void 0===s?a:y(U())},g};var te=Array.isArray,ne=te,re=Y,ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,oe=/^\w*$/;var ae=function(e,t){if(ne(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!re(e))||(oe.test(e)||!ie.test(e)||null!=t&&e in Object(t))},se=L,ce=g;var ue,le=function(e){if(!ce(e))return!1;var t=se(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},de=S["__core-js_shared__"],fe=(ue=/[^.]+$/.exec(de&&de.keys&&de.keys.IE_PROTO||""))?"Symbol(src)_1."+ue:"";var he=function(e){return!!fe&&fe in e},pe=Function.prototype.toString;var me=le,ye=he,ge=g,ve=function(e){if(null!=e){try{return pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},be=/^\[object .+?Constructor\]$/,Se=Function.prototype,we=Object.prototype,$e=Se.toString,xe=we.hasOwnProperty,Fe=RegExp("^"+$e.call(xe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var De=function(e){return!(!ge(e)||ye(e))&&(me(e)?Fe:be).test(ve(e))},Oe=function(e,t){return null==e?void 0:e[t]};var Be=function(e,t){var n=Oe(e,t);return De(n)?n:void 0},_e=Be(Object,"create"),je=_e;var Ee=function(){this.__data__=je?je(null):{},this.size=0};var Me=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},He=_e,ke=Object.prototype.hasOwnProperty;var Ce=function(e){var t=this.__data__;if(He){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ke.call(t,e)?t[e]:void 0},Te=_e,Ae=Object.prototype.hasOwnProperty;var ze=_e;var Le=Ee,We=Me,Ie=Ce,Ye=function(e){var t=this.__data__;return Te?void 0!==t[e]:Ae.call(t,e)},Pe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ze&&void 0===t?"__lodash_hash_undefined__":t,this};function Re(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Re.prototype.clear=Le,Re.prototype.delete=We,Re.prototype.get=Ie,Re.prototype.has=Ye,Re.prototype.set=Pe;var Ve=Re;var Ne=function(){this.__data__=[],this.size=0};var Ze=function(e,t){return e===t||e!=e&&t!=t};var qe=function(e,t){for(var n=e.length;n--;)if(Ze(e[n][0],t))return n;return-1},Xe=qe,Qe=Array.prototype.splice;var Ue=qe;var Ge=qe;var Je=qe;var Ke=Ne,et=function(e){var t=this.__data__,n=Xe(t,e);return!(n<0)&&(n==t.length-1?t.pop():Qe.call(t,n,1),--this.size,!0)},tt=function(e){var t=this.__data__,n=Ue(t,e);return n<0?void 0:t[n][1]},nt=function(e){return Ge(this.__data__,e)>-1},rt=function(e,t){var n=this.__data__,r=Je(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function it(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}it.prototype.clear=Ke,it.prototype.delete=et,it.prototype.get=tt,it.prototype.has=nt,it.prototype.set=rt;var ot=it,at=Be(S,"Map"),st=Ve,ct=ot,ut=at;var lt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var dt=function(e,t){var n=e.__data__;return lt(t)?n["string"==typeof t?"string":"hash"]:n.map},ft=dt;var ht=dt;var pt=dt;var mt=dt;var yt=function(){this.size=0,this.__data__={hash:new st,map:new(ut||ct),string:new st}},gt=function(e){var t=ft(this,e).delete(e);return this.size-=t?1:0,t},vt=function(e){return ht(this,e).get(e)},bt=function(e){return pt(this,e).has(e)},St=function(e,t){var n=mt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function wt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}wt.prototype.clear=yt,wt.prototype.delete=gt,wt.prototype.get=vt,wt.prototype.has=bt,wt.prototype.set=St;var $t=wt;function xt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(xt.Cache||$t),n}xt.Cache=$t;var Ft=xt;var Dt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ot=/\\(\\)?/g,Bt=function(e){var t=Ft(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Dt,(function(e,n,r,i){t.push(r?i.replace(Ot,"$1"):n||e)})),t}));var _t=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},jt=te,Et=Y,Mt=B?B.prototype:void 0,Ht=Mt?Mt.toString:void 0;var kt=function e(t){if("string"==typeof t)return t;if(jt(t))return _t(t,e)+"";if(Et(t))return Ht?Ht.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Ct=kt;var Tt=te,At=ae,zt=Bt,Lt=function(e){return null==e?"":Ct(e)};var Wt=Y;var It=function(e,t){return Tt(e)?e:At(e,t)?[e]:zt(Lt(e))},Yt=function(e){if("string"==typeof e||Wt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Pt=function(e,t){for(var n=0,r=(t=It(t,e)).length;null!=e&&n<r;)e=e[Yt(t[n++])];return n&&n==r?e:void 0};var Rt=function(e,t,n){var r=null==e?void 0:Pt(e,t);return void 0===r?n:r};const Vt=(e,t,n)=>t?Rt(n,t)||Rt(e,t):n||e,Nt=(e,t)=>{const n=t||e.defaultValue;return Rt(e.collections,n)};var Zt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Zt||(Zt={}));const qt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Xt=e=>t=>{const n=t.theme,r=Nt(qt,n[Zt.colorScheme]);return n.options&&n.options.color?Vt(r,e,n.options.color):Vt(r,e)},Qt=(Xt("Brand.1"),Xt("Brand.2"),Xt("Brand.3"),Xt("Brand.4"),Xt("Brand.5"),Xt("Brand.6"),Xt("Primary")),Ut=(Xt("PrimaryDark"),Xt("Secondary")),Gt={Light:{1:Xt("Accent.Light.1"),2:Xt("Accent.Light.2"),3:Xt("Accent.Light.3"),4:Xt("Accent.Light.4"),5:Xt("Accent.Light.5"),6:Xt("Accent.Light.6")},Dark:{1:Xt("Accent.Dark.1"),2:Xt("Accent.Dark.2"),3:Xt("Accent.Dark.3")}},Jt={1:Xt("Neutral.1"),2:Xt("Neutral.2"),3:Xt("Neutral.3"),4:Xt("Neutral.4"),5:Xt("Neutral.5"),6:Xt("Neutral.6"),7:Xt("Neutral.7"),8:Xt("Neutral.8")},Kt=(Xt("Validation.Green.Text"),Xt("Validation.Green.Icon"),Xt("Validation.Green.Border"),Xt("Validation.Green.Background"),Xt("Validation.Orange.Text"),Xt("Validation.Orange.Icon"),Xt("Validation.Orange.Border"),Xt("Validation.Orange.Background"),Xt("Validation.Orange.Badge"),Xt("Validation.Red.Text"),Xt("Validation.Red.Icon"),Xt("Validation.Red.Border"),Xt("Validation.Red.Background"),Xt("Validation.Blue.Text"),Xt("Validation.Blue.Icon"),Xt("Validation.Blue.Border"),Xt("Validation.Blue.Background"),Xt("Shadow.Accent"),Xt("Shadow.Red"),Xt("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),en={collections:{base:{D1:{fontFamily:Kt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Kt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Kt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Kt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Kt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Kt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Kt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Kt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Kt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Kt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},tn=e=>t=>{const n=t.theme,r=Nt(en,n[Zt.textStyleScheme]);return n.options&&n.options.textStyle?Vt(r,e,n.options.textStyle):Vt(r,e)},nn={D1:{fontFamily:tn("D1.fontFamily"),fontSize:tn("D1.fontSize"),fontWeight:tn("D1.fontWeight"),lineHeight:tn("D1.lineHeight"),letterSpacing:tn("D1.letterSpacing")},D2:{fontFamily:tn("D2.fontFamily"),fontSize:tn("D2.fontSize"),fontWeight:tn("D2.fontWeight"),lineHeight:tn("D2.lineHeight"),letterSpacing:tn("D2.letterSpacing")},D3:{fontFamily:tn("D3.fontFamily"),fontSize:tn("D3.fontSize"),fontWeight:tn("D3.fontWeight"),lineHeight:tn("D3.lineHeight"),letterSpacing:tn("D3.letterSpacing")},D4:{fontFamily:tn("D4.fontFamily"),fontSize:tn("D4.fontSize"),fontWeight:tn("D4.fontWeight"),lineHeight:tn("D4.lineHeight"),letterSpacing:tn("D4.letterSpacing")},DBody:{fontFamily:tn("DBody.fontFamily"),fontSize:tn("DBody.fontSize"),fontWeight:tn("DBody.fontWeight"),lineHeight:tn("DBody.lineHeight"),letterSpacing:tn("DBody.letterSpacing")},H1:{fontFamily:tn("H1.fontFamily"),fontSize:tn("H1.fontSize"),fontWeight:tn("H1.fontWeight"),lineHeight:tn("H1.lineHeight"),letterSpacing:tn("H1.letterSpacing")},H2:{fontFamily:tn("H2.fontFamily"),fontSize:tn("H2.fontSize"),fontWeight:tn("H2.fontWeight"),lineHeight:tn("H2.lineHeight"),letterSpacing:tn("H2.letterSpacing")},H3:{fontFamily:tn("H3.fontFamily"),fontSize:tn("H3.fontSize"),fontWeight:tn("H3.fontWeight"),lineHeight:tn("H3.lineHeight"),letterSpacing:tn("H3.letterSpacing")},H4:{fontFamily:tn("H4.fontFamily"),fontSize:tn("H4.fontSize"),fontWeight:tn("H4.fontWeight"),lineHeight:tn("H4.lineHeight"),letterSpacing:tn("H4.letterSpacing")},H5:{fontFamily:tn("H5.fontFamily"),fontSize:tn("H5.fontSize"),fontWeight:tn("H5.fontWeight"),lineHeight:tn("H5.lineHeight"),letterSpacing:tn("H5.letterSpacing")},H6:{fontFamily:tn("H6.fontFamily"),fontSize:tn("H6.fontSize"),fontWeight:tn("H6.fontWeight"),lineHeight:tn("H6.lineHeight"),letterSpacing:tn("H6.letterSpacing")},Body:{fontFamily:tn("Body.fontFamily"),fontSize:tn("Body.fontSize"),fontWeight:tn("Body.fontWeight"),lineHeight:tn("Body.lineHeight"),letterSpacing:tn("Body.letterSpacing")},BodySmall:{fontFamily:tn("BodySmall.fontFamily"),fontSize:tn("BodySmall.fontSize"),fontWeight:tn("BodySmall.fontWeight"),lineHeight:tn("BodySmall.lineHeight"),letterSpacing:tn("BodySmall.letterSpacing")},XSmall:{fontFamily:tn("XSmall.fontFamily"),fontSize:tn("XSmall.fontSize"),fontWeight:tn("XSmall.fontWeight"),lineHeight:tn("XSmall.lineHeight"),letterSpacing:tn("XSmall.letterSpacing")}},rn=e=>{switch(e){case 700:case"bold":return Kt.Bold;case 600:case"semibold":return Kt.Semibold;case 300:case"light":return Kt.Light;case 400:case"regular":return Kt.Regular;default:return""}},on=(e,t)=>n=>{var r;const i=nn[e].fontFamily(n),o=nn[e].fontWeight(n);return Object.values(Kt).includes(i)?u`
                font-family: ${rn(t)||rn(o)||i};
                font-weight: normal !important;
            `:u`
            font-family: ${i};
            font-weight: ${null!==(r=an(t)||o)&&void 0!==r?r:"normal"};
        `},an=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},sn=e=>{if(e>0)return u`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},cn=(e,t,n=!1)=>r=>{const i=nn[e],o=i.fontSize(r);return u`
            ${on(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${u`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},un=(e=!1,t=!1,n=void 0)=>t?u`
            display: block;
            ${sn(n)}
        `:e?u`
            display: inline;
        `:u`
            display: block;
            ${sn(n)}
        `;var ln;!function(e){e.D1=c.h1`
        ${e=>u`
                ${cn("D1",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=c.h1`
        ${e=>u`
                ${cn("D2",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=c.h1`
        ${e=>u`
                ${cn("D3",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=c.h1`
        ${e=>u`
                ${cn("D4",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=c.h1`
        ${e=>u`
                ${cn("DBody",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=c.h1`
        ${e=>u`
                ${cn("H1",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=c.h2`
        ${e=>u`
                ${cn("H2",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=c.h3`
        ${e=>u`
                ${cn("H3",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=c.h4`
        ${e=>u`
                ${cn("H4",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=c.h5`
        ${e=>u`
                ${cn("H5",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=c.h6`
        ${e=>u`
                ${cn("H6",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=c.p`
        ${e=>u`
                ${cn("Body",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=c.p`
        ${e=>u`
                ${cn("BodySmall",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=c.span`
        ${e=>u`
                ${cn("XSmall",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${un(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>hn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>hn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ln||(ln={}));const dn=c.a`
    ${e=>u`
            ${cn(e.textStyle,e.weight)}
            color: ${Qt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ut};

                svg {
                    color: ${Ut};
                }
            }
        `}
`,fn=c(s)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,hn=n=>{var{external:r=!1,children:i}=n,o=f(n,["external","children"]);return e(dn,Object.assign({},o,{children:[i,r&&t(fn,{})]}))},pn=c.div`
    border-radius: 0.5rem;
    background: ${Jt[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,mn=e=>{var{children:n}=e,r=f(e,["children"]);const i=r["data-testid"]||"card";return t(pn,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?t(ln.Body,{children:n}):n}))};var yn={exports:{}};yn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},l=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=l(e,!1)}],a:[i,function(e){this.afternoon=l(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function f(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,c=0;c<s;c+=1){var u=a[c],l=d[u],f=l&&l[0],h=l&&l[1];a[c]=h?{regex:f,parser:h}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,c=i.parser,u=e.slice(r),l=o.exec(u)[0];c.call(t,l),e=e.replace(l,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var c=!0===a[2],u=!0===a[3],l=c||u,d=a[2];u&&(d=a[2]),o=this.$locale(),!c&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,c=r.minutes,u=r.seconds,l=r.milliseconds,d=r.zone,h=new Date,p=a||(i||o?1:h.getDate()),m=i||h.getFullYear(),y=0;i&&!o||(y=o>0?o-1:h.getMonth());var g=s||0,v=c||0,b=u||0,S=l||0;return d?new Date(Date.UTC(m,y,p,g,v,b,S+60*d.offset*1e3)):n?new Date(Date.UTC(m,y,p,g,v,b,S)):new Date(m,y,p,g,v,b,S)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),l&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var gn,vn,bn=yn.exports,Sn={exports:{}},wn=Sn.exports=(gn={year:0,month:1,day:2,hour:3,minute:4,second:5},vn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=vn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),vn[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],c=s.type,u=s.value,l=gn[c];l>=0&&(o[l]=parseInt(u,10))}var d=o[3],f=24===d?0:d,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),c=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var u=c.utcOffset();c=c.add(i-u,"minute")}return c.$x.$timezone=e,c},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,c=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),c,s),l=u[0],d=u[1],f=n(l).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),$n={exports:{}};$n.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",c="week",u="month",l="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},g=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),o=n-i<0,a=t.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:c,d:s,D:f,h:a,m:o,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=y;var w=function(e){return e instanceof D},$=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();S[o]&&(i=o),n&&(S[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;S[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},F=v;F.l=$,F.i=w,F.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e)}var g=y.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return F},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return x(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<x(e)},g.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,r=!!F.u(t)||t,l=F.p(e),h=function(e,t){var i=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,y=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case d:return r?h(1,0):h(31,11);case u:return r?h(1,y):h(0,y+1);case c:var b=this.$locale().weekStart||0,S=(m<b?m+7:m)-b;return h(r?g-S:g+(6-S),y);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var n,c=F.p(e),l="set"+(this.$u?"UTC":""),h=(n={},n[s]=l+"Date",n[f]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[o]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],p=c===s?this.$D+(t-this.$W):t;if(c===u||c===d){var m=this.clone().set(f,1);m.$d[h](p),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[F.p(e)]()},g.add=function(r,l){var f,h=this;r=Number(r);var p=F.p(l),m=function(e){var t=x(h);return F.w(t.date(t.date()+Math.round(e*r)),h)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===c)return m(7);var y=(f={},f[o]=t,f[a]=n,f[i]=e,f)[p]||1,g=this.$d.getTime()+r*y;return F.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=F.z(this),o=this.$H,a=this.$m,s=this.$M,c=n.weekdays,u=n.months,l=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return F.s(o%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:F.s(s+1,2,"0"),MMM:l(n.monthsShort,s,u,3),MMMM:l(u,s),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:F.s(o,2,"0"),h:d(1),hh:d(2),a:f(o,a,!0),A:f(o,a,!1),m:String(a),mm:F.s(a,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,f,h){var p,m=F.p(f),y=x(r),g=(y.utcOffset()-this.utcOffset())*t,v=this-y,b=F.m(this,y);return b=(p={},p[d]=b/12,p[u]=b,p[l]=b/3,p[c]=(v-g)/6048e5,p[s]=(v-g)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[m]||v,h?b:F.a(b)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return S[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},g.clone=function(){return F.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},y}(),O=D.prototype;return x.prototype=O,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,D,x),e.$i=!0),x},x.locale=$,x.isDayjs=w,x.unix=function(e){return x(1e3*e)},x.en=S[b],x.Ls=S,x.p={},x}();var xn=$n.exports,Fn={exports:{}};Fn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],c=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(c?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(c?this.isAfter(a,r):!this.isBefore(a,r))}};var Dn=Fn.exports,On={exports:{}};On.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Bn=On.exports,_n={exports:{}};_n.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var jn,En=_n.exports;xn.extend(Dn),xn.extend(Bn),xn.extend(En),xn.extend(bn),xn.extend(wn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=xn(t).startOf("week");return Mn(n).map((e=>Hn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Hn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(xn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+xn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=xn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?xn(r):void 0,i?xn(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(jn||(jn={}));const Mn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Hn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},kn=[1,3,5,7,8,10,12],Cn=[4,6,9,11];var Tn,An,zn,Ln;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":kn.includes(o)?Math.min(i,31).toString():Cn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=xn(e,n);return xn(t,n).diff(r,"minute")},e.toDayjs=e=>e?xn(e):xn()}(Tn||(Tn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!xn(e).isBefore(r,"day"))||!(!i||!xn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(xn(e).isValid())return e}return""}}(An||(An={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(zn||(zn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Ln||(Ln={}));const Wn=c.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return u`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,In=c.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=u`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=u`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=u`
                transition: none;
            `),t}}
`,Yn=({show:e=!1,rootId:n,onOverlayClick:s,children:c,backgroundOpacity:u,backgroundBlur:d=!0,disableTransition:f=!1,enableOverlayClick:h=!1,zIndex:p,id:m})=>{const[y,g]=i(null),[v,b]=i(),[S]=i((()=>zn.generate())),w=o(),$=o(null),x=c&&r.cloneElement(c,{ref:$}),F=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root";a((()=>(_(),g(O()),()=>H())),[]),a((()=>{if(e){const e=B();D(e),M();const t=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(t)}{H();const e=setTimeout((()=>{E().length<1&&j("remove")}),200);return()=>clearTimeout(e)}}),[e]);const D=e=>{w.current=e,b(e)},O=()=>document&&n?document.getElementById(n):document?document.body:null,B=()=>E().length>0,_=()=>{if(!document.getElementById(Pn)){const e=document.createElement("style");e.id=Pn;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Rn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Rn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},j=e=>{const t=document.body.classList.contains(Rn);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Rn):document.body.classList.add(Rn)},E=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=[...e,S].join(",")},H=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==S)).join(",")},k=e=>{var t;const n=null===(t=$.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||s&&h&&(e.preventDefault(),s())};return y?l.createPortal(t(Wn,Object.assign({id:F,"data-testid":F,$show:e,zIndex:p,$stacked:v},{children:c&&t(In,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:u||(v?.5:.8),$backgroundBlur:d,$disableTransition:f,$enableOverlayClick:h,onClick:k},{children:x}))})),y):null},Pn="lifesg-ds-overlay-stylesheet",Rn="lifesg-ds-overlay-open",Vn=e=>Object.keys(y).reduce(((t,n)=>{const r=y[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Nn=Vn("max-width"),Zn=(Vn("min-width"),c.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${Nn.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`),qn=e=>{var{id:n="modal",show:r,animationFrom:o="bottom",children:s,enableOverlayClick:c=!0,rootComponentId:u,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:h=!0}=e,p=f(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[m,y]=i(),[g,v]=i();a((()=>window.visualViewport?(S(),window.visualViewport.addEventListener("resize",S),()=>{window.visualViewport.removeEventListener("resize",S)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),a((()=>{var e,t;r&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const b=()=>{const e=.01*window.innerHeight;y(e)},S=()=>{const e=.01*window.visualViewport.height;y(e),v(window.visualViewport.offsetTop)};return t(Yn,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:c,onOverlayClick:d,id:n,rootId:u,zIndex:l},{children:t(Zn,Object.assign({show:r,animationFrom:o,"data-testid":n,verticalHeight:m,offsetTop:g},p,{children:s}))}))},Xn=c.button`
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

        ${({$highlight:e})=>e&&u`
                background-color: ${Jt[7]};
            `}
    }
`,Qn=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=f(e,["children","focusHighlight","focusOutline","type"]);return t(Xn,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Un=c.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Jt[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Nn.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Gn=c(Qn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Gt.Light[1]};
    }
`,Jn=c(d)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Jt[3]};
`,Kn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",er=c.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?u`
            visibility: visible;
            opacity: 1;
            transition: ${Kn};
            z-index: 50;
        `:u`
            visibility: hidden;
            opacity: 0;
            transition: ${Kn};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return u`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return u`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return u`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return u`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return u`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return u`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${Nn.mobileL} {
        display: none;
    }
`,tr=c((n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=f(n,["id","children","onClose","showCloseButton"]);return e(Un,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(Gn,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:t(Jn,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,nr=c.div`
    position: relative;
    width: fit-content;
`,rr=c.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,ir=c.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,or=r=>{var{children:s,visible:c,onMobileClose:u}=r,l=f(r,["children","visible","onMobileClose"]);const d=l["data-testid"]||"popover",[h,p]=i("none"),g=o(null),v=m.exports.useMediaQuery({maxWidth:y.mobileL}),b=o(h);a((()=>($(),window.addEventListener("resize",ee(S,300)),()=>{window.removeEventListener("resize",ee(S,300))})),[]);const S=()=>{$()},w=()=>{u&&u()},$=()=>{const e=x();var t;e&&(t=e,b.current=t,p(t))},x=()=>{if(g.current){const e=g.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===b.current||"left"===b.current)&&e.x-e.width/2>t||("top-right"===b.current||"right"===b.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},F=()=>"string"==typeof s?t(ln.BodySmall,{children:s}):s;return e(n,{children:[t(er,Object.assign({ref:g,"data-testid":d,$visible:c,$offset:h},l,{children:t(mn,{children:F()})})),v&&t(qn,Object.assign({show:c,onOverlayClick:w},{children:t(tr,Object.assign({onClose:w},{children:t(ir,{children:F()})}))}))]})},ar=(n,r)=>s=>{const{onPopoverAppear:c,onPopoverDismiss:u}=s,l=f(s,["onPopoverAppear","onPopoverDismiss"]),d=r.trigger||"click",h=l,[p,g]=i(!1),v=o(),b=m.exports.useMediaQuery({maxWidth:y.mobileL});a((()=>{if(!b)return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}}),[p]);const S=e=>{v&&!v.current.contains(e.target)&&(p&&g(!1),u&&u())};return e(nr,Object.assign({id:"popover-hoc-wrapper",ref:v},{children:[t(rr,Object.assign({id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||b)&&(g(!p),!p&&c&&c(),p&&u&&u())},onMouseEnter:()=>{"hover"!==d||b||g(!0)},onMouseLeave:()=>{"hover"===d&&p&&!b&&g(!1)},"aria-label":"popover-button"},{children:t(n,Object.assign({},h))})),t(or,Object.assign({visible:p,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{g(!1)}},{children:r.content}))]}))};export{or as Popover,ar as withPopover};
//# sourceMappingURL=index.js.map
