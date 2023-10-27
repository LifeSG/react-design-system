import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useState as o,useRef as i,useEffect as a}from"react";import{ExternalIcon as l}from"@lifesg/react-icons/external";import c,{css as s}from"styled-components";import u from"react-dom";import{CrossIcon as d}from"@lifesg/react-icons/cross";function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var p,h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m={exports:{}};p=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return l(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),i=u(i);break;case"resolution":o=s(o),i=s(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=c(o),i=c(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!n||!o&&n}))},t.parse=l;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function l(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],a=t[2],l=t[3]||"",c={};return c.inverse=!!i&&"not"===i.toLowerCase(),c.type=a?a.toLowerCase():"all",l=l.match(/\([^\)]+\)/g)||[],c.expressions=l.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(o);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function s(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var s in i=Object(arguments[c]))n.call(i,s)&&(l[s]=i[s]);if(t){a=t(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(l[a[u]]=i[a[u]])}}return l}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function l(e,t,n,l,c){for(var s in e)if(a(e,s)){var u;try{if("function"!=typeof e[s]){var d=Error((l||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[s](t,s,l,n,null,o)}catch(e){u=e}if(!u||u instanceof Error||r((l||"React class")+": type specification of "+n+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var f=c?c():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},l.resetWarningCache=function(){i={}},e.exports=l},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),l=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),c=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function s(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:y("array"),bigint:y("bigint"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:m(s),arrayOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l))return new h("Invalid "+o+" `"+i+"` of type `"+b(l)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<l.length;c++){var s=e(l,c,r,o,i+"["+c+"]",a);if(s instanceof Error)return s}return null}))},element:m((function(t,n,r,o,i){var a=t[n];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new h("Invalid "+o+" `"+i+"` of type `"+((l=t[n]).constructor&&l.constructor.name?l.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var l;return null}))},node:m((function(e,t,n,r,o){return v(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],s=b(c);if("object"!==s)return new h("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var u in c)if(l(c,u)){var d=e(c,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],l=0;l<e.length;l++)if(p(a,e[l]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),s)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),s;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+F(n)+" at index "+t+"."),s}return m((function(t,n,r,o,i){for(var c=[],s=0;s<e.length;s++){var u=(0,e[s])(t,n,r,o,i,a);if(null==u)return null;u.data&&l(u.data,"expectedType")&&c.push(u.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,o,i){var l=t[n],c=b(l);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var u=e[s];if("function"!=typeof u)return g(r,o,i,s,w(u));var d=u(l,s,r,o,i+"."+s,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,o,c){var s=t[n],u=b(s);if("object"!==u)return new h("Invalid "+o+" `"+c+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var p=e[f];if(l(e,f)&&"function"!=typeof p)return g(r,o,c,f,w(p));if(!p)return new h("Invalid "+o+" `"+c+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(s,f,r,o,c+"."+f,a);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},o=0;function i(i,l,c,s,u,f,p){if(s=s||d,f=f||c,p!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var y=s+":"+c;!n[y]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[y]=!0,o++)}}return null==l[c]?i?null===l[c]?new h("The "+u+" `"+f+"` is marked as required in `"+s+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(l,c,s,u,f)}var l=i.bind(null,!1);return l.isRequired=i.bind(null,!0),l}function y(e){return m((function(t,n,r,o,i,a){var l=t[n];return b(l)!==e?new h("Invalid "+o+" `"+i+"` of type `"+w(l)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function F(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,f.checkPropTypes=c,f.resetWarningCache=c.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case s:case u:case o:case a:case i:case f:return p;default:var y=p&&p.$$typeof;switch(y){case c:case d:case m:case h:case l:return y;default:return t}}case r:return t}}}var F=s,S=u,x=c,O=l,$=n,j=d,_=o,B=m,E=h,D=r,k=a,H=i,C=f,T=!1;function z(e){return w(e)===u}t.AsyncMode=F,t.ConcurrentMode=S,t.ContextConsumer=x,t.ContextProvider=O,t.Element=$,t.ForwardRef=j,t.Fragment=_,t.Lazy=B,t.Memo=E,t.Portal=D,t.Profiler=k,t.StrictMode=H,t.Suspense=C,t.isAsyncMode=function(e){return T||(T=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),z(e)||w(e)===s},t.isConcurrentMode=z,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b||e.$$typeof===y)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),l=a.default.oneOfType([a.default.string,a.default.number]),c={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},s={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:l,deviceHeight:l,width:l,deviceWidth:l,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:l,type:Object.keys(c)},u=o(s,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:l,maxHeight:l,minDeviceHeight:l,maxDeviceHeight:l,minWidth:l,maxWidth:l,minDeviceWidth:l,maxDeviceWidth:l,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:l,maxResolution:l},u),f=r(r({},c),d);t.default={all:f,types:c,matchers:s,features:d}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),l=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),c=r(n(/*! ./toQuery */"./src/toQuery.ts")),s=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(s.default),n=function(){return u(e)||u(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,l.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],l=r[1],c=d();return(0,o.useEffect)((function(){if(c){var e=n();return l(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),p=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(c),h=d();return(0,o.useEffect)((function(){h&&n&&n(p)}),[p]),(0,o.useEffect)((function(){return function(){c&&c.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),m.exports=p(r);const y={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var g=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},v="object"==typeof h&&h&&h.Object===Object&&h,b="object"==typeof self&&self&&self.Object===Object&&self,w=v||b||Function("return this")(),F=w,S=function(){return F.Date.now()},x=/\s/;var O=function(e){for(var t=e.length;t--&&x.test(e.charAt(t)););return t},$=/^\s+/;var j=function(e){return e?e.slice(0,O(e)+1).replace($,""):e},_=w.Symbol,B=_,E=Object.prototype,D=E.hasOwnProperty,k=E.toString,H=B?B.toStringTag:void 0;var C=function(e){var t=D.call(e,H),n=e[H];try{e[H]=void 0;var r=!0}catch(e){}var o=k.call(e);return r&&(t?e[H]=n:delete e[H]),o},T=Object.prototype.toString;var z=C,A=function(e){return T.call(e)},P=_?_.toStringTag:void 0;var I=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":P&&P in Object(e)?z(e):A(e)};var L=I,W=function(e){return null!=e&&"object"==typeof e};var R=function(e){return"symbol"==typeof e||W(e)&&"[object Symbol]"==L(e)},M=j,V=g,N=R,q=/^[-+]0x[0-9a-f]+$/i,Q=/^0b[01]+$/i,X=/^0o[0-7]+$/i,G=parseInt;var U=g,Y=S,J=function(e){if("number"==typeof e)return e;if(N(e))return NaN;if(V(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=V(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=M(e);var n=Q.test(e);return n||X.test(e)?G(e.slice(2),n?2:8):q.test(e)?NaN:+e},K=Math.max,Z=Math.min;var ee=function(e,t,n){var r,o,i,a,l,c,s=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-s>=i}function m(){var e=Y();if(h(e))return y(e);l=setTimeout(m,function(e){var n=t-(e-c);return d?Z(n,i-(e-s)):n}(e))}function y(e){return l=void 0,f&&r?p(e):(r=o=void 0,a)}function g(){var e=Y(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(m,t),u?p(e):a}(c);if(d)return clearTimeout(l),l=setTimeout(m,t),p(c)}return void 0===l&&(l=setTimeout(m,t)),a}return t=J(t)||0,U(n)&&(u=!!n.leading,i=(d="maxWait"in n)?K(J(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},g.flush=function(){return void 0===l?a:y(Y())},g};var te=Array.isArray,ne=te,re=R,oe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ie=/^\w*$/;var ae=function(e,t){if(ne(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!re(e))||(ie.test(e)||!oe.test(e)||null!=t&&e in Object(t))},le=I,ce=g;var se,ue=function(e){if(!ce(e))return!1;var t=le(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},de=w["__core-js_shared__"],fe=(se=/[^.]+$/.exec(de&&de.keys&&de.keys.IE_PROTO||""))?"Symbol(src)_1."+se:"";var pe=function(e){return!!fe&&fe in e},he=Function.prototype.toString;var me=ue,ye=pe,ge=g,ve=function(e){if(null!=e){try{return he.call(e)}catch(e){}try{return e+""}catch(e){}}return""},be=/^\[object .+?Constructor\]$/,we=Function.prototype,Fe=Object.prototype,Se=we.toString,xe=Fe.hasOwnProperty,Oe=RegExp("^"+Se.call(xe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var $e=function(e){return!(!ge(e)||ye(e))&&(me(e)?Oe:be).test(ve(e))},je=function(e,t){return null==e?void 0:e[t]};var _e=function(e,t){var n=je(e,t);return $e(n)?n:void 0},Be=_e(Object,"create"),Ee=Be;var De=function(){this.__data__=Ee?Ee(null):{},this.size=0};var ke=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},He=Be,Ce=Object.prototype.hasOwnProperty;var Te=function(e){var t=this.__data__;if(He){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ce.call(t,e)?t[e]:void 0},ze=Be,Ae=Object.prototype.hasOwnProperty;var Pe=Be;var Ie=De,Le=ke,We=Te,Re=function(e){var t=this.__data__;return ze?void 0!==t[e]:Ae.call(t,e)},Me=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Pe&&void 0===t?"__lodash_hash_undefined__":t,this};function Ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ve.prototype.clear=Ie,Ve.prototype.delete=Le,Ve.prototype.get=We,Ve.prototype.has=Re,Ve.prototype.set=Me;var Ne=Ve;var qe=function(){this.__data__=[],this.size=0};var Qe=function(e,t){return e===t||e!=e&&t!=t};var Xe=function(e,t){for(var n=e.length;n--;)if(Qe(e[n][0],t))return n;return-1},Ge=Xe,Ue=Array.prototype.splice;var Ye=Xe;var Je=Xe;var Ke=Xe;var Ze=qe,et=function(e){var t=this.__data__,n=Ge(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ue.call(t,n,1),--this.size,!0)},tt=function(e){var t=this.__data__,n=Ye(t,e);return n<0?void 0:t[n][1]},nt=function(e){return Je(this.__data__,e)>-1},rt=function(e,t){var n=this.__data__,r=Ke(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ot(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ot.prototype.clear=Ze,ot.prototype.delete=et,ot.prototype.get=tt,ot.prototype.has=nt,ot.prototype.set=rt;var it=ot,at=_e(w,"Map"),lt=Ne,ct=it,st=at;var ut=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var dt=function(e,t){var n=e.__data__;return ut(t)?n["string"==typeof t?"string":"hash"]:n.map},ft=dt;var pt=dt;var ht=dt;var mt=dt;var yt=function(){this.size=0,this.__data__={hash:new lt,map:new(st||ct),string:new lt}},gt=function(e){var t=ft(this,e).delete(e);return this.size-=t?1:0,t},vt=function(e){return pt(this,e).get(e)},bt=function(e){return ht(this,e).has(e)},wt=function(e,t){var n=mt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ft(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ft.prototype.clear=yt,Ft.prototype.delete=gt,Ft.prototype.get=vt,Ft.prototype.has=bt,Ft.prototype.set=wt;var St=Ft;function xt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(xt.Cache||St),n}xt.Cache=St;var Ot=xt;var $t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jt=/\\(\\)?/g,_t=function(e){var t=Ot(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace($t,(function(e,n,r,o){t.push(r?o.replace(jt,"$1"):n||e)})),t}));var Bt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Et=te,Dt=R,kt=_?_.prototype:void 0,Ht=kt?kt.toString:void 0;var Ct=function e(t){if("string"==typeof t)return t;if(Et(t))return Bt(t,e)+"";if(Dt(t))return Ht?Ht.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Tt=Ct;var zt=te,At=ae,Pt=_t,It=function(e){return null==e?"":Tt(e)};var Lt=R;var Wt=function(e,t){return zt(e)?e:At(e,t)?[e]:Pt(It(e))},Rt=function(e){if("string"==typeof e||Lt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Mt=function(e,t){for(var n=0,r=(t=Wt(t,e)).length;null!=e&&n<r;)e=e[Rt(t[n++])];return n&&n==r?e:void 0};var Vt=function(e,t,n){var r=null==e?void 0:Mt(e,t);return void 0===r?n:r};const Nt=(e,t,n)=>t?Vt(n,t)||Vt(e,t):n||e,qt=(e,t)=>{const n=t||e.defaultValue;return Vt(e.collections,n)};var Qt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Qt||(Qt={}));const Xt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Gt=e=>t=>{const n=t.theme,r=qt(Xt,n[Qt.colorScheme]);return n.options&&n.options.color?Nt(r,e,n.options.color):Nt(r,e)},Ut=(Gt("Brand.1"),Gt("Brand.2"),Gt("Brand.3"),Gt("Brand.4"),Gt("Brand.5"),Gt("Brand.6"),Gt("Primary")),Yt=(Gt("PrimaryDark"),Gt("Secondary")),Jt={Light:{1:Gt("Accent.Light.1"),2:Gt("Accent.Light.2"),3:Gt("Accent.Light.3"),4:Gt("Accent.Light.4"),5:Gt("Accent.Light.5"),6:Gt("Accent.Light.6")},Dark:{1:Gt("Accent.Dark.1"),2:Gt("Accent.Dark.2"),3:Gt("Accent.Dark.3")}},Kt={1:Gt("Neutral.1"),2:Gt("Neutral.2"),3:Gt("Neutral.3"),4:Gt("Neutral.4"),5:Gt("Neutral.5"),6:Gt("Neutral.6"),7:Gt("Neutral.7"),8:Gt("Neutral.8")},Zt=(Gt("Validation.Green.Text"),Gt("Validation.Green.Icon"),Gt("Validation.Green.Border"),Gt("Validation.Green.Background"),Gt("Validation.Orange.Text"),Gt("Validation.Orange.Icon"),Gt("Validation.Orange.Border"),Gt("Validation.Orange.Background"),Gt("Validation.Orange.Badge"),Gt("Validation.Red.Text"),Gt("Validation.Red.Icon"),Gt("Validation.Red.Border"),Gt("Validation.Red.Background"),Gt("Validation.Blue.Text"),Gt("Validation.Blue.Icon"),Gt("Validation.Blue.Border"),Gt("Validation.Blue.Background"),Gt("Shadow.Accent"),Gt("Shadow.Red"),Gt("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),en={collections:{base:{D1:{fontFamily:Zt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Zt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Zt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Zt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Zt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Zt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Zt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Zt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Zt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Zt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Zt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Zt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Zt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Zt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},tn=e=>t=>{const n=t.theme,r=qt(en,n[Qt.textStyleScheme]);return n.options&&n.options.textStyle?Nt(r,e,n.options.textStyle):Nt(r,e)},nn={D1:{fontFamily:tn("D1.fontFamily"),fontSize:tn("D1.fontSize"),fontWeight:tn("D1.fontWeight"),lineHeight:tn("D1.lineHeight"),letterSpacing:tn("D1.letterSpacing")},D2:{fontFamily:tn("D2.fontFamily"),fontSize:tn("D2.fontSize"),fontWeight:tn("D2.fontWeight"),lineHeight:tn("D2.lineHeight"),letterSpacing:tn("D2.letterSpacing")},D3:{fontFamily:tn("D3.fontFamily"),fontSize:tn("D3.fontSize"),fontWeight:tn("D3.fontWeight"),lineHeight:tn("D3.lineHeight"),letterSpacing:tn("D3.letterSpacing")},D4:{fontFamily:tn("D4.fontFamily"),fontSize:tn("D4.fontSize"),fontWeight:tn("D4.fontWeight"),lineHeight:tn("D4.lineHeight"),letterSpacing:tn("D4.letterSpacing")},DBody:{fontFamily:tn("DBody.fontFamily"),fontSize:tn("DBody.fontSize"),fontWeight:tn("DBody.fontWeight"),lineHeight:tn("DBody.lineHeight"),letterSpacing:tn("DBody.letterSpacing")},H1:{fontFamily:tn("H1.fontFamily"),fontSize:tn("H1.fontSize"),fontWeight:tn("H1.fontWeight"),lineHeight:tn("H1.lineHeight"),letterSpacing:tn("H1.letterSpacing")},H2:{fontFamily:tn("H2.fontFamily"),fontSize:tn("H2.fontSize"),fontWeight:tn("H2.fontWeight"),lineHeight:tn("H2.lineHeight"),letterSpacing:tn("H2.letterSpacing")},H3:{fontFamily:tn("H3.fontFamily"),fontSize:tn("H3.fontSize"),fontWeight:tn("H3.fontWeight"),lineHeight:tn("H3.lineHeight"),letterSpacing:tn("H3.letterSpacing")},H4:{fontFamily:tn("H4.fontFamily"),fontSize:tn("H4.fontSize"),fontWeight:tn("H4.fontWeight"),lineHeight:tn("H4.lineHeight"),letterSpacing:tn("H4.letterSpacing")},H5:{fontFamily:tn("H5.fontFamily"),fontSize:tn("H5.fontSize"),fontWeight:tn("H5.fontWeight"),lineHeight:tn("H5.lineHeight"),letterSpacing:tn("H5.letterSpacing")},H6:{fontFamily:tn("H6.fontFamily"),fontSize:tn("H6.fontSize"),fontWeight:tn("H6.fontWeight"),lineHeight:tn("H6.lineHeight"),letterSpacing:tn("H6.letterSpacing")},Body:{fontFamily:tn("Body.fontFamily"),fontSize:tn("Body.fontSize"),fontWeight:tn("Body.fontWeight"),lineHeight:tn("Body.lineHeight"),letterSpacing:tn("Body.letterSpacing")},BodySmall:{fontFamily:tn("BodySmall.fontFamily"),fontSize:tn("BodySmall.fontSize"),fontWeight:tn("BodySmall.fontWeight"),lineHeight:tn("BodySmall.lineHeight"),letterSpacing:tn("BodySmall.letterSpacing")},XSmall:{fontFamily:tn("XSmall.fontFamily"),fontSize:tn("XSmall.fontSize"),fontWeight:tn("XSmall.fontWeight"),lineHeight:tn("XSmall.lineHeight"),letterSpacing:tn("XSmall.letterSpacing")}},rn=e=>{switch(e){case 700:case"bold":return Zt.Bold;case 600:case"semibold":return Zt.Semibold;case 300:case"light":return Zt.Light;case 400:case"regular":return Zt.Regular;default:return""}},on=(e,t)=>n=>{var r;const o=nn[e].fontFamily(n),i=nn[e].fontWeight(n);return Object.values(Zt).includes(o)?s`
                font-family: ${rn(t)||rn(i)||o};
                font-weight: normal !important;
            `:s`
            font-family: ${o};
            font-weight: ${null!==(r=an(t)||i)&&void 0!==r?r:"normal"};
        `},an=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ln=e=>{if(e>0)return s`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},cn=(e,t,n=!1)=>r=>{const o=nn[e],i=o.fontSize(r);return s`
            ${on(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${s`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},sn=(e=!1,t=!1,n=void 0)=>t?s`
            display: block;
            ${ln(n)}
        `:e?s`
            display: inline;
        `:s`
            display: block;
            ${ln(n)}
        `;var un;!function(e){e.D1=c.h1`
        ${e=>s`
                ${cn("D1",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=c.h1`
        ${e=>s`
                ${cn("D2",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=c.h1`
        ${e=>s`
                ${cn("D3",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=c.h1`
        ${e=>s`
                ${cn("D4",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=c.h1`
        ${e=>s`
                ${cn("DBody",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=c.h1`
        ${e=>s`
                ${cn("H1",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=c.h2`
        ${e=>s`
                ${cn("H2",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=c.h3`
        ${e=>s`
                ${cn("H3",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=c.h4`
        ${e=>s`
                ${cn("H4",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=c.h5`
        ${e=>s`
                ${cn("H5",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=c.h6`
        ${e=>s`
                ${cn("H6",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=c.p`
        ${e=>s`
                ${cn("Body",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=c.p`
        ${e=>s`
                ${cn("BodySmall",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=c.span`
        ${e=>s`
                ${cn("XSmall",e.weight,e.paragraph)}
                color: ${Kt[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>pn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>pn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(un||(un={}));const dn=c.a`
    ${e=>s`
            ${cn(e.textStyle,e.weight)}
            color: ${Ut};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Yt};

                svg {
                    color: ${Yt};
                }
            }
        `}
`,fn=c(l)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,pn=n=>{var{external:r=!1,children:o}=n,i=f(n,["external","children"]);return e(dn,Object.assign({},i,{children:[o,r&&t(fn,{})]}))},hn=c.div`
    border-radius: 0.5rem;
    background: ${Kt[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,mn=e=>{var{children:n}=e,r=f(e,["children"]);const o=r["data-testid"]||"card";return t(hn,Object.assign({},r,{"data-testid":o},{children:"string"==typeof n?t(un.Body,{children:n}):n}))},yn=c.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return s`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,gn=c.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=s`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=s`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=s`
                transition: none;
            `),t}}
`,vn=({show:e=!1,rootId:n,onOverlayClick:l,children:c,backgroundOpacity:s,backgroundBlur:d=!0,disableTransition:f=!1,enableOverlayClick:p=!1,zIndex:h,id:m})=>{const[y,g]=o(null),[v,b]=o(),w=i(),F=i(!1),S=i(null),x=c&&r.cloneElement(c,{ref:S}),O=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root";a((()=>{const t=!0===F.current;if(t||(F.current=!0),e){const e=_();if($(e),!e){const e=setTimeout((()=>{E("add")}),200);return()=>clearTimeout(e)}}else{if(!t)return;if(!w.current){const e=setTimeout((()=>{E("remove")}),200);return()=>clearTimeout(e)}}}),[e]),a((()=>{g(j());const e=_();return $(e),e||B(),()=>{E("remove")}}),[]);const $=e=>{w.current=e,b(e)},j=()=>document&&n?document.getElementById(n):document?document.body:null,_=()=>document.body.classList.contains(wn),B=()=>{if(!document.getElementById(bn)){const e=document.createElement("style");e.id=bn;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${wn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${wn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},E=e=>{const t=document.body.classList.contains(wn);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(wn):document.body.classList.add(wn)},D=e=>{var t;const n=null===(t=S.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||l&&p&&(e.preventDefault(),l())};return y?u.createPortal(t(yn,Object.assign({id:O,"data-testid":O,$show:e,zIndex:h,$stacked:v},{children:c&&t(gn,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:s||(v?.5:.8),$backgroundBlur:d,$disableTransition:f,$enableOverlayClick:p,onClick:D},{children:x}))})),y):null},bn="lifesg-ds-overlay-stylesheet",wn="lifesg-ds-overlay-open",Fn=e=>Object.keys(y).reduce(((t,n)=>{const r=y[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Sn=Fn("max-width"),xn=(Fn("min-width"),c.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${Sn.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`),On=e=>{var{id:n="modal",show:r,animationFrom:i="bottom",children:l,enableOverlayClick:c=!0,rootComponentId:s,zIndex:u,onOverlayClick:d,dismissKeyboardOnShow:p=!0}=e,h=f(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[m,y]=o(),[g,v]=o();a((()=>window.visualViewport?(w(),window.visualViewport.addEventListener("resize",w),()=>{window.visualViewport.removeEventListener("resize",w)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),a((()=>{var e,t;r&&p&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const b=()=>{const e=.01*window.innerHeight;y(e)},w=()=>{const e=.01*window.visualViewport.height;y(e),v(window.visualViewport.offsetTop)};return t(vn,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:c,onOverlayClick:d,id:n,rootId:s,zIndex:u},{children:t(xn,Object.assign({show:r,animationFrom:i,"data-testid":n,verticalHeight:m,offsetTop:g},h,{children:l}))}))},$n=c.button`
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

        ${({$highlight:e})=>e&&s`
                background-color: ${Kt[7]};
            `}
    }
`,jn=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=f(e,["children","focusHighlight","focusOutline","type"]);return t($n,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),_n=c.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Kt[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Sn.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Bn=c(jn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Jt.Light[1]};
    }
`,En=c(d)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Kt[3]};
`,Dn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",kn=c.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?s`
            visibility: visible;
            opacity: 1;
            transition: ${Dn};
            z-index: 50;
        `:s`
            visibility: hidden;
            opacity: 0;
            transition: ${Dn};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return s`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return s`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return s`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return s`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return s`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return s`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${Sn.mobileL} {
        display: none;
    }
`,Hn=c((n=>{var{id:r="modal-box",children:o,onClose:i,showCloseButton:a=!0}=n,l=f(n,["id","children","onClose","showCloseButton"]);return e(_n,Object.assign({"data-testid":r},l,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(Bn,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:t(En,{})})),o]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Cn=c.div`
    position: relative;
    width: fit-content;
`,Tn=c.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,zn=c.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,An=r=>{var{children:l,visible:c,onMobileClose:s}=r,u=f(r,["children","visible","onMobileClose"]);const d=u["data-testid"]||"popover",[p,h]=o("none"),g=i(null),v=m.exports.useMediaQuery({maxWidth:y.mobileL}),b=i(p);a((()=>(S(),window.addEventListener("resize",ee(w,300)),()=>{window.removeEventListener("resize",ee(w,300))})),[]);const w=()=>{S()},F=()=>{s&&s()},S=()=>{const e=x();var t;e&&(t=e,b.current=t,h(t))},x=()=>{if(g.current){const e=g.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===b.current||"left"===b.current)&&e.x-e.width/2>t||("top-right"===b.current||"right"===b.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},O=()=>"string"==typeof l?t(un.BodySmall,{children:l}):l;return e(n,{children:[t(kn,Object.assign({ref:g,"data-testid":d,$visible:c,$offset:p},u,{children:t(mn,{children:O()})})),v&&t(On,Object.assign({show:c,onOverlayClick:F},{children:t(Hn,Object.assign({onClose:F},{children:t(zn,{children:O()})}))}))]})},Pn=(n,r)=>l=>{const{onPopoverAppear:c,onPopoverDismiss:s}=l,u=f(l,["onPopoverAppear","onPopoverDismiss"]),d=r.trigger||"click",p=u,[h,g]=o(!1),v=i(),b=m.exports.useMediaQuery({maxWidth:y.mobileL});a((()=>{if(!b)return document.addEventListener("mousedown",w),()=>{document.removeEventListener("mousedown",w)}}),[h]);const w=e=>{v&&!v.current.contains(e.target)&&(h&&g(!1),s&&s())};return e(Cn,Object.assign({id:"popover-hoc-wrapper",ref:v},{children:[t(Tn,Object.assign({id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||b)&&(g(!h),!h&&c&&c(),h&&s&&s())},onMouseEnter:()=>{"hover"!==d||b||g(!0)},onMouseLeave:()=>{"hover"===d&&h&&!b&&g(!1)},"aria-label":"popover-button"},{children:t(n,Object.assign({},p))})),t(An,Object.assign({visible:h,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{g(!1)}},{children:r.content}))]}))};export{An as Popover,Pn as withPopover};
//# sourceMappingURL=index.js.map
