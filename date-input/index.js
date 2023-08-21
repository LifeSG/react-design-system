import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{cloneElement as o,useRef as a,useState as s,isValidElement as l,createRef as c,PureComponent as u,useEffect as d,useLayoutEffect as h,forwardRef as f,useCallback as p,useContext as m,useMemo as g,useImperativeHandle as y}from"react";import{findDOMNode as v,unstable_batchedUpdates as b}from"react-dom";import $,{keyframes as w,css as S}from"styled-components";import{ChevronDownIcon as x}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as D}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as O}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as _}from"@lifesg/react-icons/external";function F(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var k,j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},M={exports:{}};k=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,i,o){var a=t[n];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+r+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||d;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,i,o+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===$(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),c}return m((function(t,n,r,i,o){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,i,o,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,i,o){var s=t[n],l=b(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,i,o,c,$(u));var d=u(s,c,r,i,o+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,i,l){var c=t[n],u=b(c);if("object"!==u)return new p("Invalid "+i+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=o({},t[n],e);for(var h in d){var f=e[h];if(s(e,h)&&"function"!=typeof f)return y(r,i,l,h,$(f));if(!f)return new p("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(c,h,r,i,l+"."+h,a);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},i=0;function o(o,s,l,c,u,h,f){if(c=c||d,h=h||l,f!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function g(e){return m((function(t,n,r,i,o,a){var s=t[n];return b(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+$(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function $(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=$(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var f=e.type;switch(f){case c:case u:case i:case a:case o:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var w=c,S=u,x=l,D=s,O=n,_=d,F=i,k=m,j=p,M=r,P=a,B=o,A=h,C=!1;function E(e){return $(e)===u}t.AsyncMode=w,t.ConcurrentMode=S,t.ContextConsumer=x,t.ContextProvider=D,t.Element=O,t.ForwardRef=_,t.Fragment=F,t.Lazy=k,t.Memo=j,t.Portal=M,t.Profiler=P,t.StrictMode=B,t.Suspense=A,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),E(e)||$(e)===c},t.isConcurrentMode=E,t.isContextConsumer=function(e){return $(e)===l},t.isContextProvider=function(e){return $(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return $(e)===d},t.isFragment=function(e){return $(e)===i},t.isLazy=function(e){return $(e)===m},t.isMemo=function(e){return $(e)===p},t.isPortal=function(e){return $(e)===r},t.isProfiler=function(e){return $(e)===a},t.isStrictMode=function(e){return $(e)===o},t.isSuspense=function(e){return $(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===o||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=$}()},"./node_modules/react-is/index.js":
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
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),M.exports=k(i);var P=function(e,t){return P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},P(e,t)};var B=function(){return B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},B.apply(this,arguments)};var A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var C=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},E="object"==typeof A&&A&&A.Object===Object&&A,H="object"==typeof self&&self&&self.Object===Object&&self,T=E||H||Function("return this")(),I=T,R=function(){return I.Date.now()},z=/\s/;var L=function(e){for(var t=e.length;t--&&z.test(e.charAt(t)););return t},N=/^\s+/;var Y=function(e){return e?e.slice(0,L(e)+1).replace(N,""):e},W=T.Symbol,V=W,q=Object.prototype,Q=q.hasOwnProperty,U=q.toString,Z=V?V.toStringTag:void 0;var G=function(e){var t=Q.call(e,Z),n=e[Z];try{e[Z]=void 0;var r=!0}catch(e){}var i=U.call(e);return r&&(t?e[Z]=n:delete e[Z]),i},X=Object.prototype.toString;var J=G,K=function(e){return X.call(e)},ee=W?W.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ee&&ee in Object(e)?J(e):K(e)},ne=function(e){return null!=e&&"object"==typeof e};var re=Y,ie=C,oe=function(e){return"symbol"==typeof e||ne(e)&&"[object Symbol]"==te(e)},ae=/^[-+]0x[0-9a-f]+$/i,se=/^0b[01]+$/i,le=/^0o[0-7]+$/i,ce=parseInt;var ue=C,de=R,he=function(e){if("number"==typeof e)return e;if(oe(e))return NaN;if(ie(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ie(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=re(e);var n=se.test(e);return n||le.test(e)?ce(e.slice(2),n?2:8):ae.test(e)?NaN:+e},fe=Math.max,pe=Math.min;var me=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function m(){var e=de();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?pe(n,o-(e-c)):n}(e))}function g(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=de(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=he(t)||0,ue(n)&&(u=!!n.leading,o=(d="maxWait"in n)?fe(he(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:g(de())},y},ge=me,ye=C;var ve=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ye(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),ge(e,t,{leading:r,maxWait:t,trailing:i})},be=function(e,t,n,r){switch(t){case"debounce":return me(e,n,r);case"throttle":return ve(e,n,r);default:return e}},$e=function(e){return"function"==typeof e},we=function(){return"undefined"==typeof window},Se=function(e){return e instanceof Element||e instanceof HTMLDocument},xe=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&$e(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!we()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(we())return null;if(t)return document.querySelector(t);if(r&&Se(r))return r;if(n.targetRef&&Se(n.targetRef.current))return n.targetRef.current;var i=v(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=xe(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!we()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return $e(t)?"renderProp":$e(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,we()||(n.resizeHandler=be(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}P(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){we()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,a=t.nodeType,s=void 0===a?"div":a,l=this.state,c={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(e=i)(c);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(c,["targetRef"]);return o(e,u)}return o(e,c);case"childArray":return(e=i).map((function(e){return!!e&&o(e,c)}));default:return r.createElement(s,null)}}}(u);var De=we()?d:h;let Oe=Le();const _e=e=>Te(e,Oe);let Fe=Le();_e.write=e=>Te(e,Fe);let ke=Le();_e.onStart=e=>Te(e,ke);let je=Le();_e.onFrame=e=>Te(e,je);let Me=Le();_e.onFinish=e=>Te(e,Me);let Pe=[];_e.setTimeout=(e,t)=>{let n=_e.now()+t,r=()=>{let e=Pe.findIndex((e=>e.cancel==r));~e&&Pe.splice(e,1),Ee-=~e?1:0},i={time:n,handler:e,cancel:r};return Pe.splice(Be(n),0,i),Ee+=1,Ie(),i};let Be=e=>~(~Pe.findIndex((t=>t.time>e))||~Pe.length);_e.cancel=e=>{ke.delete(e),je.delete(e),Me.delete(e),Oe.delete(e),Fe.delete(e)},_e.sync=e=>{He=!0,_e.batchedUpdates(e),He=!1},_e.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,_e.onStart(n)}return r.handler=e,r.cancel=()=>{ke.delete(n),t=null},r};let Ae="undefined"!=typeof window?window.requestAnimationFrame:()=>{};_e.use=e=>Ae=e,_e.now="undefined"!=typeof performance?()=>performance.now():Date.now,_e.batchedUpdates=e=>e(),_e.catch=console.error,_e.frameLoop="always",_e.advance=()=>{"demand"!==_e.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ze()};let Ce=-1,Ee=0,He=!1;function Te(e,t){He?(t.delete(e),e(0)):(t.add(e),Ie())}function Ie(){Ce<0&&(Ce=0,"demand"!==_e.frameLoop&&Ae(Re))}function Re(){~Ce&&(Ae(Re),_e.batchedUpdates(ze))}function ze(){let e=Ce;Ce=_e.now();let t=Be(Ce);t&&(Ne(Pe.splice(0,t),(e=>e.handler())),Ee-=t),Ee?(ke.flush(),Oe.flush(e?Math.min(64,Ce-e):16.667),je.flush(),Fe.flush(),Me.flush()):Ce=-1}function Le(){let e=new Set,t=e;return{add(n){Ee+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Ee-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Ee-=t.size,Ne(t,(t=>t(n)&&e.add(t))),Ee+=e.size,t=e)}}}function Ne(e,t){e.forEach((e=>{try{t(e)}catch(e){_e.catch(e)}}))}function Ye(){}const We={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ve(e,t){if(We.arr(e)){if(!We.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const qe=(e,t)=>e.forEach(t);function Qe(e,t,n){if(We.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Ue=e=>We.und(e)?[]:We.arr(e)?e:[e];function Ze(e,t){if(e.size){const n=Array.from(e);e.clear(),qe(n,t)}}const Ge=(e,...t)=>Ze(e,(e=>e(...t))),Xe=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Je,Ke,et=null,tt=!1,nt=Ye;var rt=Object.freeze({__proto__:null,get createStringInterpolator(){return Je},get to(){return Ke},get colors(){return et},get skipAnimation(){return tt},get willAdvance(){return nt},assign:e=>{e.to&&(Ke=e.to),e.now&&(_e.now=e.now),void 0!==e.colors&&(et=e.colors),null!=e.skipAnimation&&(tt=e.skipAnimation),e.createStringInterpolator&&(Je=e.createStringInterpolator),e.requestAnimationFrame&&_e.use(e.requestAnimationFrame),e.batchedUpdates&&(_e.batchedUpdates=e.batchedUpdates),e.willAdvance&&(nt=e.willAdvance),e.frameLoop&&(_e.frameLoop=e.frameLoop)}});const it=new Set;let ot=[],at=[],st=0;const lt={get idle(){return!it.size&&!ot.length},start(e){st>e.priority?(it.add(e),_e.onStart(ct)):(ut(e),_e(ht))},advance:ht,sort(e){if(st)_e.onFrame((()=>lt.sort(e)));else{const t=ot.indexOf(e);~t&&(ot.splice(t,1),dt(e))}},clear(){ot=[],it.clear()}};function ct(){it.forEach(ut),it.clear(),_e(ht)}function ut(e){ot.includes(e)||dt(e)}function dt(e){ot.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(ot,(t=>t.priority>e.priority)),0,e)}function ht(e){const t=at;for(let n=0;n<ot.length;n++){const r=ot[n];st=r.priority,r.idle||(nt(r),r.advance(e),r.idle||t.push(r))}return st=0,at=ot,at.length=0,ot=t,ot.length>0}const ft="[-+]?\\d*\\.?\\d+",pt=ft+"%";function mt(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const gt=new RegExp("rgb"+mt(ft,ft,ft)),yt=new RegExp("rgba"+mt(ft,ft,ft,ft)),vt=new RegExp("hsl"+mt(ft,pt,pt)),bt=new RegExp("hsla"+mt(ft,pt,pt,ft)),$t=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,wt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,St=/^#([0-9a-fA-F]{6})$/,xt=/^#([0-9a-fA-F]{8})$/;function Dt(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ot(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=Dt(i,r,e+1/3),a=Dt(i,r,e),s=Dt(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function _t(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ft(e){return(parseFloat(e)%360+360)%360/360}function kt(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function jt(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Mt(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=St.exec(e))?parseInt(t[1]+"ff",16)>>>0:et&&void 0!==et[e]?et[e]:(t=gt.exec(e))?(_t(t[1])<<24|_t(t[2])<<16|_t(t[3])<<8|255)>>>0:(t=yt.exec(e))?(_t(t[1])<<24|_t(t[2])<<16|_t(t[3])<<8|kt(t[4]))>>>0:(t=$t.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=xt.exec(e))?parseInt(t[1],16)>>>0:(t=wt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=vt.exec(e))?(255|Ot(Ft(t[1]),jt(t[2]),jt(t[3])))>>>0:(t=bt.exec(e))?(Ot(Ft(t[1]),jt(t[2]),jt(t[3]))|kt(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Pt=(e,t,n)=>{if(We.fun(e))return e;if(We.arr(e))return Pt({range:e,output:t,extrapolate:n});if(We.str(e.output[0]))return Je(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const Bt=1.70158,At=1.525*Bt,Ct=Bt+1,Et=2*Math.PI/3,Ht=2*Math.PI/4.5,Tt=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},It={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Ct*e*e*e-Bt*e*e,easeOutBack:e=>1+Ct*Math.pow(e-1,3)+Bt*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-At)/2:(Math.pow(2*e-2,2)*((At+1)*(2*e-2)+At)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Et),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Et)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ht)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ht)/2+1,easeInBounce:e=>1-Tt(1-e),easeOutBounce:Tt,easeInOutBounce:e=>e<.5?(1-Tt(1-2*e))/2:(1+Tt(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Rt(){return Rt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rt.apply(this,arguments)}const zt=Symbol.for("FluidValue.get"),Lt=Symbol.for("FluidValue.observers"),Nt=e=>Boolean(e&&e[zt]),Yt=e=>e&&e[zt]?e[zt]():e,Wt=e=>e[Lt]||null;function Vt(e,t){let n=e[Lt];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class qt{constructor(e){if(this[zt]=void 0,this[Lt]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Qt(this,e)}}const Qt=(e,t)=>Gt(e,zt,t);function Ut(e,t){if(e[zt]){let n=e[Lt];n||Gt(e,Lt,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Zt(e,t){let n=e[Lt];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Lt]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Gt=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Xt=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Jt=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Kt=new RegExp(`(${Xt.source})(%|[a-z]+)`,"i"),en=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,tn=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,nn=e=>{const[t,n]=rn(e);if(!t||Xe())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&tn.test(n)?nn(n):n||e},rn=e=>{const t=tn.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let on;const an=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,sn=e=>{on||(on=et?new RegExp(`(${Object.keys(et).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Yt(e).replace(tn,nn).replace(Jt,Mt).replace(on,Mt))),n=t.map((e=>e.match(Xt).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Pt(Rt({},e,{output:t}))));return e=>{var n;const i=!Kt.test(t[0])&&(null==(n=t.find((e=>Kt.test(e))))?void 0:n.replace(Xt,""));let o=0;return t[0].replace(Xt,(()=>`${r[o++](e)}${i||""}`)).replace(en,an)}},ln="react-spring: ",cn=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${ln}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},un=cn(console.warn);const dn=cn(console.warn);function hn(e){return We.str(e)&&("#"==e[0]||/\d/.test(e)||!Xe()&&tn.test(e)||e in(et||{}))}const fn=Xe()?d:h,pn=()=>{const e=a(!1);return fn((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function mn(){const e=s()[1],t=pn();return()=>{t.current&&e(Math.random())}}const gn=e=>d(e,yn),yn=[];function vn(e){const t=a();return d((()=>{t.current=e})),t.current}const bn=Symbol.for("Animated:node"),$n=e=>e&&e[bn],wn=(e,t)=>{return n=e,r=bn,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Sn=e=>e&&e[bn]&&e[bn].getPayload();class xn{constructor(){this.payload=void 0,wn(this,this)}getPayload(){return this.payload||[]}}class Dn extends xn{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,We.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Dn(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return We.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,We.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class On extends Dn{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Pt({output:[e,e]})}static create(e){return new On(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(We.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Pt({output:[this.getValue(),e]})),this._value=0,super.reset()}}const _n={dependencies:null};class Fn extends xn{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Qe(this.source,((n,r)=>{var i;(i=n)&&i[bn]===i?t[r]=n.getValue(e):Nt(n)?t[r]=Yt(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&qe(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Qe(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){_n.dependencies&&Nt(e)&&_n.dependencies.add(e);const t=Sn(e);t&&qe(t,(e=>this.add(e)))}}class kn extends Fn{constructor(e){super(e)}static create(e){return new kn(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(jn)),!0)}}function jn(e){return(hn(e)?On:Dn).create(e)}function Mn(e){const t=$n(e);return t?t.constructor:We.arr(e)?kn:hn(e)?On:Dn}function Pn(){return Pn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pn.apply(this,arguments)}const Bn=(e,t)=>{const n=!We.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((i,o)=>{const s=a(null),l=n&&p((e=>{s.current=function(e,t){e&&(We.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[c,u]=function(e,t){const n=new Set;_n.dependencies=n,e.style&&(e=Pn({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Fn(e),_n.dependencies=null,[e,n]}(i,t),h=mn(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},m=new An(f,u),g=a();fn((()=>(g.current=m,qe(u,(e=>Ut(e,m))),()=>{g.current&&(qe(g.current.deps,(e=>Zt(e,g.current))),_e.cancel(g.current.update))}))),d(f,[]),gn((()=>()=>{const e=g.current;qe(e.deps,(t=>Zt(t,e)))}));const y=t.getComponentProps(c.getValue());return r.createElement(e,Pn({},y,{ref:l}))}))};class An{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&_e.write(this.update)}}const Cn=Symbol.for("AnimatedComponent"),En=e=>We.str(e)?e:e&&We.str(e.displayName)?e.displayName:We.fun(e)&&e.name||null;function Hn(){return Hn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hn.apply(this,arguments)}function Tn(e,...t){return We.fun(e)?e(...t):e}const In=(e,t)=>!0===e||!!(t&&e&&(We.fun(e)?e(t):Ue(e).includes(t))),Rn=(e,t)=>We.obj(e)?t&&e[t]:e,zn=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ln=e=>e,Nn=(e,t=Ln)=>{let n=Yn;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);We.und(n)||(r[i]=n)}return r},Yn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Wn={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Vn(e){const t=function(e){const t={};let n=0;if(Qe(e,((e,r)=>{Wn[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Qe(e,((e,r)=>r in t||(n[r]=e))),n}return Hn({},e)}function qn(e){return e=Yt(e),We.arr(e)?e.map(qn):hn(e)?rt.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Qn(e){return We.fun(e)||We.arr(e)&&We.obj(e[0])}const Un=Hn({},{tension:170,friction:26},{mass:1,damping:1,easing:It.linear,clamp:!1});class Zn{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Un)}}function Gn(e,t){if(We.und(t.decay)){const n=!We.und(t.tension)||!We.und(t.friction);!n&&We.und(t.frequency)&&We.und(t.damping)&&We.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Xn=[];class Jn{constructor(){this.changed=!1,this.values=Xn,this.toValues=null,this.fromValues=Xn,this.to=void 0,this.from=void 0,this.config=new Zn,this.immediate=!1}}function Kn(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=In(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{We.und(n.pause)||(i.paused=In(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||In(e,t)),c=Tn(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-_e.now()}function f(){c>0&&!rt.skipAnimation?(i.delayed=!0,u=_e.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(Hn({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const er=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?rr(e.get()):t.every((e=>e.noop))?tr(e.get()):nr(e.get(),t.every((e=>e.finished))),tr=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),nr=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),rr=e=>({value:e,cancelled:!0,finished:!1});function ir(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Nn(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&rr(r)||i!==n.asyncId&&nr(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new ar,a=new sr;return(async()=>{if(rt.skipAnimation)throw or(n),a.result=nr(r,!1),d(a),a;f(o);const s=We.obj(e)?Hn({},e):Hn({},t,{to:e});s.parentId=i,Qe(c,((e,t)=>{We.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(rt.skipAnimation)return or(n),nr(r,!1);try{let t;t=We.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),m=nr(r.get(),!0,!1)}catch(e){if(e instanceof ar)m=e.result;else{if(!(e instanceof sr))throw e;m=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return We.fun(a)&&_e.batchedUpdates((()=>{a(m,r,r.item)})),m})():l}function or(e,t){Ze(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class ar extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class sr extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const lr=e=>e instanceof ur;let cr=1;class ur extends qt{constructor(...e){super(...e),this.id=cr++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=$n(this);return e&&e.getValue()}to(...e){return rt.to(this,e)}interpolate(...e){return un(`${ln}The "interpolate" function is deprecated in v9 (use "to" instead)`),rt.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Vt(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||lt.sort(this),Vt(this,{type:"priority",parent:this,priority:e})}}const dr=Symbol.for("SpringPhase"),hr=e=>(1&e[dr])>0,fr=e=>(2&e[dr])>0,pr=e=>(4&e[dr])>0,mr=(e,t)=>t?e[dr]|=3:e[dr]&=-3,gr=(e,t)=>t?e[dr]|=4:e[dr]&=-5;class yr extends ur{constructor(e,t){if(super(),this.key=void 0,this.animation=new Jn,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!We.und(e)||!We.und(t)){const n=We.obj(e)?Hn({},e):Hn({},t,{from:e});We.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(fr(this)||this._state.asyncTo)||pr(this)}get goal(){return Yt(this.animation.to)}get velocity(){const e=$n(this);return e instanceof Dn?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return hr(this)}get isAnimating(){return fr(this)}get isPaused(){return pr(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=Sn(r.to);!a&&Nt(r.to)&&(o=Ue(Yt(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==On?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=We.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(We.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!We.und(r),f=n==c?s.v0>0:n<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*g,d+=a*g}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=$n(this),l=s.getValue();if(t){const e=Yt(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return _e.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(fr(this)){const{to:e,config:t}=this.animation;_e.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return We.und(e)?(n=this.queue||[],this.queue=[]):n=[We.obj(e)?e:Hn({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>er(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),or(this._state,e&&this._lastCallId),_e.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=We.obj(n)?n[t]:n,(null==n||Qn(n))&&(n=void 0),r=We.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return hr(this)||(e.reverse&&([n,r]=[r,n]),r=Yt(r),We.und(r)?$n(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Hn({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Nn(n,((e,t)=>/^on/.test(t)?Rn(e,r):e))),Dr(this,n,"onProps"),Or(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Kn(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{pr(this)||(gr(this,!0),Ge(a.pauseQueue),Or(this,"onPause",nr(this,vr(this,this.animation.to)),this))},resume:()=>{pr(this)&&(gr(this,!1),fr(this)&&this._resume(),Ge(a.resumeQueue),Or(this,"onResume",nr(this,vr(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=br(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(rr(this));const r=!We.und(e.to),i=!We.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(rr(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!We.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Ve(d,c);h&&(s.from=d),d=Yt(d);const f=!Ve(u,l);f&&this._focus(u);const p=Qn(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||i)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(Gn(n=Hn({},n),t),t=Hn({},n,t)),Gn(e,t),Object.assign(e,t);for(const t in Un)null==e[t]&&(e[t]=Un[t]);let{mass:r,frequency:i,damping:o}=e;We.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(m,Tn(t.config,o),t.config!==a.config?Tn(a.config,o):void 0);let v=$n(this);if(!v||We.und(u))return n(nr(this,!0));const b=We.und(t.reset)?i&&!t.default:!We.und(d)&&In(t.reset,o),$=b?d:this.get(),w=qn(u),S=We.num(w)||We.arr(w)||hn(w),x=!p&&(!S||In(a.immediate||t.immediate,o));if(f){const e=Mn(u);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const D=v.constructor;let O=Nt(u),_=!1;if(!O){const e=b||!hr(this)&&h;(f||e)&&(_=Ve(qn($),w),O=!_),(Ve(s.immediate,x)||x)&&Ve(m.decay,g)&&Ve(m.velocity,y)||(O=!0)}if(_&&fr(this)&&(s.changed&&!b?O=!0:O||this._stop(l)),!p&&((O||Nt(l))&&(s.values=v.getPayload(),s.toValues=Nt(u)?null:D==On?[1]:Ue(w)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),O)){const{onRest:e}=s;qe(xr,(e=>Dr(this,t,e)));const r=nr(this,vr(this,l));Ge(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&_e.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?Tn(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set($),p?n(ir(t.to,t,this._state,this)):O?this._start():fr(this)&&!f?this._pendingCalls.add(n):n(tr($))}_focus(e){const t=this.animation;e!==t.to&&(Wt(this)&&this._detach(),t.to=e,Wt(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Nt(t)&&(Ut(t,this),lr(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Nt(e)&&Zt(e,this)}_set(e,t=!0){const n=Yt(e);if(!We.und(n)){const e=$n(this);if(!e||!Ve(n,e.getValue())){const r=Mn(n);e&&e.constructor==r?e.setValue(n):wn(this,r.create(n)),e&&_e.batchedUpdates((()=>{this._onChange(n,t)}))}}return $n(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Or(this,"onStart",nr(this,vr(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Tn(this.animation.onChange,e,this)),Tn(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;$n(this).reset(Yt(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),fr(this)||(mr(this,!0),pr(this)||this._resume())}_resume(){rt.skipAnimation?this.finish():lt.start(this)}_stop(e,t){if(fr(this)){mr(this,!1);const n=this.animation;qe(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Vt(this,{type:"idle",parent:this});const r=t?rr(this.get()):nr(this.get(),vr(this,null!=e?e:n.to));Ge(this._pendingCalls,r),n.changed&&(n.changed=!1,Or(this,"onRest",r,this))}}}function vr(e,t){const n=qn(t);return Ve(qn(e.get()),n)}function br(e,t=e.loop,n=e.to){let r=Tn(t);if(r){const i=!0!==r&&Vn(r),o=(i||e).reverse,a=!i||i.reset;return $r(Hn({},e,{loop:t,default:!1,pause:void 0,to:!o||Qn(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function $r(e){const{to:t,from:n}=e=Vn(e),r=new Set;return We.obj(t)&&Sr(t,r),We.obj(n)&&Sr(n,r),e.keys=r.size?Array.from(r):null,e}function wr(e){const t=$r(e);return We.und(t.default)&&(t.default=Nn(t)),t}function Sr(e,t){Qe(e,((e,n)=>null!=e&&t.add(n)))}const xr=["onStart","onRest","onChange","onPause","onResume"];function Dr(e,t,n){e.animation[n]=t[n]!==zn(t,n)?Rn(t[n],e.key):void 0}function Or(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const _r=["onStart","onChange","onRest"];let Fr=1;class kr{constructor(e,t){this.id=Fr++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Hn({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];We.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push($r(e)),this}start(e){let{queue:t}=this;return e?t=Ue(e).map($r):this.queue=[],this._flush?this._flush(this,t):(Er(this,t),jr(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;qe(Ue(t),(t=>n[t].stop(!!e)))}else or(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(We.und(e))this.start({pause:!0});else{const t=this.springs;qe(Ue(e),(e=>t[e].pause()))}return this}resume(e){if(We.und(e))this.start({pause:!1});else{const t=this.springs;qe(Ue(e),(e=>t[e].resume()))}return this}each(e){Qe(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Ze(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Ze(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ze(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}_e.onFrame(this._onFrame)}}function jr(e,t){return Promise.all(t.map((t=>Mr(e,t)))).then((t=>er(e,t)))}async function Mr(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=We.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=We.arr(i)||We.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):qe(_r,(n=>{const r=t[n];if(We.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Ge(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===zn(t,"cancel");(u||f&&d.asyncId)&&h.push(Kn(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ye,resume:Ye,start(t,n){f?(or(d,e._lastAsyncId),n(rr(e))):(t.onRest=s,n(ir(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=er(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=br(t,a,i);if(n)return Er(e,[n]),Mr(e,n,!0)}return l&&_e.batchedUpdates((()=>l(p,e,e.item))),p}function Pr(e,t){const n=Hn({},e.springs);return t&&qe(Ue(t),(e=>{We.und(e.keys)&&(e=$r(e)),We.obj(e.to)||(e=Hn({},e,{to:void 0})),Cr(n,e,(e=>Ar(e)))})),Br(e,n),n}function Br(e,t){Qe(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ut(t,e))}))}function Ar(e,t){const n=new yr;return n.key=e,t&&Ut(n,t),n}function Cr(e,t,n){t.keys&&qe(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Er(e,t){qe(t,(t=>{Cr(e.springs,t,(t=>Ar(t,e)))}))}const Hr=["children"],Tr=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Hr);const i=m(Ir),o=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=a(),i=r.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=n;return d((()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)}),[o]),o.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:c}=Ir;return r.createElement(c,{value:n},t)},Ir=(Rr=Tr,zr={},Object.assign(Rr,r.createContext(zr)),Rr.Provider._context=Rr,Rr.Consumer._context=Rr,Rr);var Rr,zr;Tr.Provider=Ir.Provider,Tr.Consumer=Ir.Consumer;const Lr=()=>{const e=[],t=function(t){dn(`${ln}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return qe(e,((e,i)=>{if(We.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return qe(e,(e=>e.pause(...arguments))),this},t.resume=function(){return qe(e,(e=>e.resume(...arguments))),this},t.set=function(t){qe(e,(e=>e.set(t)))},t.start=function(t){const n=[];return qe(e,((e,r)=>{if(We.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return qe(e,(e=>e.stop(...arguments))),this},t.update=function(t){return qe(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return We.fun(e)?e(n,t):e};return t._getProps=n,t};function Nr(e,t){const n=We.fun(e),[[r],i]=function(e,t,n){const r=We.fun(t)&&t;r&&!n&&(n=[]);const i=g((()=>r||3==arguments.length?Lr():void 0),[]),o=a(0),s=mn(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=Pr(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?jr(e,t):new Promise((r=>{Br(e,n),l.queue.push((()=>{r(jr(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],d=vn(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new kr(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=wr(n))}}g((()=>{qe(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=c.current.map(((e,t)=>Pr(e,u[t]))),p=m(Tr),y=vn(p),v=p!==y&&function(e){for(const t in e)return!0;return!1}(p);fn((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],qe(e,(e=>e()))),qe(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:p});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),gn((()=>()=>{qe(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>Hn({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Yr;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Yr||(Yr={}));class Wr extends ur{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Pt(...t);const n=this._get(),r=Mn(n);wn(this,r.create(n))}advance(e){const t=this._get();Ve(t,this.get())||($n(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&qr(this._active)&&Qr(this)}_get(){const e=We.arr(this.source)?this.source.map(Yt):Ue(Yt(this.source));return this.calc(...e)}_start(){this.idle&&!qr(this._active)&&(this.idle=!1,qe(Sn(this),(e=>{e.done=!1})),rt.skipAnimation?(_e.batchedUpdates((()=>this.advance())),Qr(this)):lt.start(this))}_attach(){let e=1;qe(Ue(this.source),(t=>{Nt(t)&&Ut(t,this),lr(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){qe(Ue(this.source),(e=>{Nt(e)&&Zt(e,this)})),this._active.clear(),Qr(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ue(this.source).reduce(((e,t)=>Math.max(e,(lr(t)?t.priority:0)+1)),0))}}function Vr(e){return!1!==e.idle}function qr(e){return!e.size||Array.from(e).every(Vr)}function Qr(e){e.idle||(e.idle=!0,qe(Sn(e),(e=>{e.done=!0})),Vt(e,{type:"idle",parent:e}))}function Ur(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}rt.assign({createStringInterpolator:sn,to:(e,t)=>new Wr(e,t)});const Zr=["style","children","scrollTop","scrollLeft","viewBox"],Gr=/^--/;function Xr(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Gr.test(e)||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}const Jr={};let Kr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const ei=["Webkit","Ms","Moz","O"];Kr=Object.keys(Kr).reduce(((e,t)=>(ei.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Kr);const ti=["x","y","z"],ni=/^(matrix|translate|scale|rotate|skew)/,ri=/^(translate)/,ii=/^(rotate|skew)/,oi=(e,t)=>We.num(e)&&0!==e?e+t:e,ai=(e,t)=>We.arr(e)?e.every((e=>ai(e,t))):We.num(e)?e===t:parseFloat(e)===t;class si extends Fn{constructor(e){let{x:t,y:n,z:r}=e,i=Ur(e,ti);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>oi(e,"px"))).join(",")})`,ai(e,0)]))),Qe(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(ni.test(t)){if(delete i[t],We.und(e))return;const n=ri.test(t)?"px":ii.test(t)?"deg":"";o.push(Ue(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${oi(i,n)})`,ai(i,0)]:e=>[`${t}(${e.map((e=>oi(e,n))).join(",")})`,ai(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new li(o,a)),super(i)}}class li extends qt{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return qe(this.inputs,((n,r)=>{const i=Yt(n[0]),[o,a]=this.transforms[r](We.arr(i)?i:n.map(Yt));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&qe(this.inputs,(e=>qe(e,(e=>Nt(e)&&Ut(e,this)))))}observerRemoved(e){0==e&&qe(this.inputs,(e=>qe(e,(e=>Nt(e)&&Zt(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Vt(this,e)}}const ci=["scrollTop","scrollLeft"];rt.assign({batchedUpdates:b,createStringInterpolator:sn,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const ui=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Fn(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=En(e)||"Anonymous";return(e=We.str(e)?o[e]||(o[e]=Bn(e,i)):e[Cn]||(e[Cn]=Bn(e,i))).displayName=`Animated(${t})`,e};return Qe(e,((t,n)=>{We.arr(e)&&(n=En(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Ur(r,Zr),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Jr[t]||(Jr[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Xr(t,i[t]);Gr.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new si(e),getComponentProps:e=>Ur(e,ci)}),di=ui.animated,hi={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},fi=e=>Object.keys(hi).reduce(((t,n)=>{const r=hi[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),pi=fi("max-width"),mi=(fi("min-width"),$(di.div)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: -1px;
    width: calc(100% + 2px);
    max-width: 41rem;
    overflow: hidden;
    z-index: 1;
    min-width: 21rem;

    ${pi.mobileL} {
        min-width: 17.5rem;
    }
`);var gi={exports:{}};gi.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=g;var w=function(e){return e instanceof O},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(i=o),n&&($[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},D=v;D.l=S,D.i=w,D.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!D.u(t)||t,u=D.p(e),f=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var b=this.$locale().weekStart||0,$=(m<b?m+7:m)-b;return f(r?y-$:y+(6-$),g);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=D.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=D.p(u),m=function(e){var t=x(f);return D.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*g;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return D.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:D.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:D.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,m=D.p(h),g=x(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=D.m(this,g);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[m]||v,f?b:D.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),_=O.prototype;return x.prototype=_,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,O,x),e.$i=!0),x},x.locale=S,x.isDayjs=w,x.unix=function(e){return x(1e3*e)},x.en=$[b],x.Ls=$,x.p={},x}();var yi=gi.exports,vi={exports:{}};vi.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),m=i||f.getFullYear(),g=0;i&&!o||(g=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=c||0,$=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,$+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,v,b,$)):new Date(m,g,p,y,v,b,$)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var bi,$i,wi=vi.exports,Si={exports:{}},xi=Si.exports=(bi={year:0,month:1,day:2,hour:3,minute:4,second:5},$i={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=$i[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),$i[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=bi[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),Di={exports:{}};Di.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Oi=Di.exports,_i={exports:{}};_i.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Fi=_i.exports,ki={exports:{}};ki.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var ji,Mi=ki.exports;yi.extend(Oi),yi.extend(Fi),yi.extend(Mi),yi.extend(wi),yi.extend(xi),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=yi(t).startOf("week");return Pi(n).map((e=>Bi(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Bi(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(yi(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+yi(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=yi(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(ji||(ji={}));const Pi=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Bi=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t};var Ai=Array.isArray,Ci="object"==typeof j&&j&&j.Object===Object&&j,Ei="object"==typeof self&&self&&self.Object===Object&&self,Hi=Ci||Ei||Function("return this")(),Ti=Hi.Symbol,Ii=Ti,Ri=Object.prototype,zi=Ri.hasOwnProperty,Li=Ri.toString,Ni=Ii?Ii.toStringTag:void 0;var Yi=function(e){var t=zi.call(e,Ni),n=e[Ni];try{e[Ni]=void 0;var r=!0}catch(e){}var i=Li.call(e);return r&&(t?e[Ni]=n:delete e[Ni]),i},Wi=Object.prototype.toString;var Vi=Yi,qi=function(e){return Wi.call(e)},Qi=Ti?Ti.toStringTag:void 0;var Ui=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Qi&&Qi in Object(e)?Vi(e):qi(e)};var Zi=Ui,Gi=function(e){return null!=e&&"object"==typeof e};var Xi=function(e){return"symbol"==typeof e||Gi(e)&&"[object Symbol]"==Zi(e)},Ji=Ai,Ki=Xi,eo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,to=/^\w*$/;var no=function(e,t){if(Ji(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Ki(e))||(to.test(e)||!eo.test(e)||null!=t&&e in Object(t))};var ro=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},io=Ui,oo=ro;var ao,so=function(e){if(!oo(e))return!1;var t=io(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},lo=Hi["__core-js_shared__"],co=(ao=/[^.]+$/.exec(lo&&lo.keys&&lo.keys.IE_PROTO||""))?"Symbol(src)_1."+ao:"";var uo=function(e){return!!co&&co in e},ho=Function.prototype.toString;var fo=so,po=uo,mo=ro,go=function(e){if(null!=e){try{return ho.call(e)}catch(e){}try{return e+""}catch(e){}}return""},yo=/^\[object .+?Constructor\]$/,vo=Function.prototype,bo=Object.prototype,$o=vo.toString,wo=bo.hasOwnProperty,So=RegExp("^"+$o.call(wo).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var xo=function(e){return!(!mo(e)||po(e))&&(fo(e)?So:yo).test(go(e))},Do=function(e,t){return null==e?void 0:e[t]};var Oo=function(e,t){var n=Do(e,t);return xo(n)?n:void 0},_o=Oo(Object,"create"),Fo=_o;var ko=function(){this.__data__=Fo?Fo(null):{},this.size=0};var jo=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Mo=_o,Po=Object.prototype.hasOwnProperty;var Bo=function(e){var t=this.__data__;if(Mo){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Po.call(t,e)?t[e]:void 0},Ao=_o,Co=Object.prototype.hasOwnProperty;var Eo=_o;var Ho=ko,To=jo,Io=Bo,Ro=function(e){var t=this.__data__;return Ao?void 0!==t[e]:Co.call(t,e)},zo=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Eo&&void 0===t?"__lodash_hash_undefined__":t,this};function Lo(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Lo.prototype.clear=Ho,Lo.prototype.delete=To,Lo.prototype.get=Io,Lo.prototype.has=Ro,Lo.prototype.set=zo;var No=Lo;var Yo=function(){this.__data__=[],this.size=0};var Wo=function(e,t){return e===t||e!=e&&t!=t};var Vo=function(e,t){for(var n=e.length;n--;)if(Wo(e[n][0],t))return n;return-1},qo=Vo,Qo=Array.prototype.splice;var Uo=Vo;var Zo=Vo;var Go=Vo;var Xo=Yo,Jo=function(e){var t=this.__data__,n=qo(t,e);return!(n<0)&&(n==t.length-1?t.pop():Qo.call(t,n,1),--this.size,!0)},Ko=function(e){var t=this.__data__,n=Uo(t,e);return n<0?void 0:t[n][1]},ea=function(e){return Zo(this.__data__,e)>-1},ta=function(e,t){var n=this.__data__,r=Go(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function na(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}na.prototype.clear=Xo,na.prototype.delete=Jo,na.prototype.get=Ko,na.prototype.has=ea,na.prototype.set=ta;var ra=na,ia=Oo(Hi,"Map"),oa=No,aa=ra,sa=ia;var la=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ca=function(e,t){var n=e.__data__;return la(t)?n["string"==typeof t?"string":"hash"]:n.map},ua=ca;var da=ca;var ha=ca;var fa=ca;var pa=function(){this.size=0,this.__data__={hash:new oa,map:new(sa||aa),string:new oa}},ma=function(e){var t=ua(this,e).delete(e);return this.size-=t?1:0,t},ga=function(e){return da(this,e).get(e)},ya=function(e){return ha(this,e).has(e)},va=function(e,t){var n=fa(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ba(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ba.prototype.clear=pa,ba.prototype.delete=ma,ba.prototype.get=ga,ba.prototype.has=ya,ba.prototype.set=va;var $a=ba;function wa(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(wa.Cache||$a),n}wa.Cache=$a;var Sa=wa;var xa=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Da=/\\(\\)?/g,Oa=function(e){var t=Sa(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(xa,(function(e,n,r,i){t.push(r?i.replace(Da,"$1"):n||e)})),t}));var _a=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Fa=Ai,ka=Xi,ja=Ti?Ti.prototype:void 0,Ma=ja?ja.toString:void 0;var Pa=function e(t){if("string"==typeof t)return t;if(Fa(t))return _a(t,e)+"";if(ka(t))return Ma?Ma.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Ba=Pa;var Aa=Ai,Ca=no,Ea=Oa,Ha=function(e){return null==e?"":Ba(e)};var Ta=Xi;var Ia=function(e,t){return Aa(e)?e:Ca(e,t)?[e]:Ea(Ha(e))},Ra=function(e){if("string"==typeof e||Ta(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var za=function(e,t){for(var n=0,r=(t=Ia(t,e)).length;null!=e&&n<r;)e=e[Ra(t[n++])];return n&&n==r?e:void 0};var La=function(e,t,n){var r=null==e?void 0:za(e,t);return void 0===r?n:r};const Na=(e,t,n)=>t?La(n,t)||La(e,t):n||e,Ya=(e,t)=>{const n=t||e.defaultValue;return La(e.collections,n)};var Wa;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Wa||(Wa={}));const Va={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},qa=e=>t=>{const n=t.theme,r=Ya(Va,n[Wa.colorScheme]);return n.options&&n.options.color?Na(r,e,n.options.color):Na(r,e)},Qa={Brand:{1:qa("Brand.1"),2:qa("Brand.2"),3:qa("Brand.3"),4:qa("Brand.4"),5:qa("Brand.5"),6:qa("Brand.6")},Primary:qa("Primary"),PrimaryDark:qa("PrimaryDark"),Secondary:qa("Secondary"),Accent:{Light:{1:qa("Accent.Light.1"),2:qa("Accent.Light.2"),3:qa("Accent.Light.3"),4:qa("Accent.Light.4"),5:qa("Accent.Light.5"),6:qa("Accent.Light.6")},Dark:{1:qa("Accent.Dark.1"),2:qa("Accent.Dark.2"),3:qa("Accent.Dark.3")}},Neutral:{1:qa("Neutral.1"),2:qa("Neutral.2"),3:qa("Neutral.3"),4:qa("Neutral.4"),5:qa("Neutral.5"),6:qa("Neutral.6"),7:qa("Neutral.7"),8:qa("Neutral.8")},Validation:{Green:{Text:qa("Validation.Green.Text"),Icon:qa("Validation.Green.Icon"),Border:qa("Validation.Green.Border"),Background:qa("Validation.Green.Background")},Orange:{Text:qa("Validation.Orange.Text"),Icon:qa("Validation.Orange.Icon"),Border:qa("Validation.Orange.Border"),Background:qa("Validation.Orange.Background"),Badge:qa("Validation.Orange.Badge")},Red:{Text:qa("Validation.Red.Text"),Icon:qa("Validation.Red.Icon"),Border:qa("Validation.Red.Border"),Background:qa("Validation.Red.Background")},Blue:{Text:qa("Validation.Blue.Text"),Icon:qa("Validation.Blue.Icon"),Border:qa("Validation.Blue.Border"),Background:qa("Validation.Blue.Background")}},Shadow:{Accent:qa("Shadow.Accent"),Red:qa("Shadow.Red"),Elevation:qa("Shadow.Elevation")}},Ua=$.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Za=w`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ga=$.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Qa.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Za} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Xa=$(Ga)`
    animation-delay: -0.45s;
`,Ja=$(Ga)`
    animation-delay: -0.3s;
`,Ka=$(Ga)`
    animation-delay: -0.15s;
`,es={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ts={collections:{base:{D1:{fontFamily:es.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:es.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:es.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:es.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:es.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:es.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:es.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:es.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:es.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:es.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:es.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:es.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:es.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:es.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},ns=e=>t=>{const n=t.theme,r=Ya(ts,n[Wa.textStyleScheme]);return n.options&&n.options.textStyle?Na(r,e,n.options.textStyle):Na(r,e)},rs={D1:{fontFamily:ns("D1.fontFamily"),fontSize:ns("D1.fontSize"),fontWeight:ns("D1.fontWeight"),lineHeight:ns("D1.lineHeight"),letterSpacing:ns("D1.letterSpacing")},D2:{fontFamily:ns("D2.fontFamily"),fontSize:ns("D2.fontSize"),fontWeight:ns("D2.fontWeight"),lineHeight:ns("D2.lineHeight"),letterSpacing:ns("D2.letterSpacing")},D3:{fontFamily:ns("D3.fontFamily"),fontSize:ns("D3.fontSize"),fontWeight:ns("D3.fontWeight"),lineHeight:ns("D3.lineHeight"),letterSpacing:ns("D3.letterSpacing")},D4:{fontFamily:ns("D4.fontFamily"),fontSize:ns("D4.fontSize"),fontWeight:ns("D4.fontWeight"),lineHeight:ns("D4.lineHeight"),letterSpacing:ns("D4.letterSpacing")},DBody:{fontFamily:ns("DBody.fontFamily"),fontSize:ns("DBody.fontSize"),fontWeight:ns("DBody.fontWeight"),lineHeight:ns("DBody.lineHeight"),letterSpacing:ns("DBody.letterSpacing")},H1:{fontFamily:ns("H1.fontFamily"),fontSize:ns("H1.fontSize"),fontWeight:ns("H1.fontWeight"),lineHeight:ns("H1.lineHeight"),letterSpacing:ns("H1.letterSpacing")},H2:{fontFamily:ns("H2.fontFamily"),fontSize:ns("H2.fontSize"),fontWeight:ns("H2.fontWeight"),lineHeight:ns("H2.lineHeight"),letterSpacing:ns("H2.letterSpacing")},H3:{fontFamily:ns("H3.fontFamily"),fontSize:ns("H3.fontSize"),fontWeight:ns("H3.fontWeight"),lineHeight:ns("H3.lineHeight"),letterSpacing:ns("H3.letterSpacing")},H4:{fontFamily:ns("H4.fontFamily"),fontSize:ns("H4.fontSize"),fontWeight:ns("H4.fontWeight"),lineHeight:ns("H4.lineHeight"),letterSpacing:ns("H4.letterSpacing")},H5:{fontFamily:ns("H5.fontFamily"),fontSize:ns("H5.fontSize"),fontWeight:ns("H5.fontWeight"),lineHeight:ns("H5.lineHeight"),letterSpacing:ns("H5.letterSpacing")},H6:{fontFamily:ns("H6.fontFamily"),fontSize:ns("H6.fontSize"),fontWeight:ns("H6.fontWeight"),lineHeight:ns("H6.lineHeight"),letterSpacing:ns("H6.letterSpacing")},Body:{fontFamily:ns("Body.fontFamily"),fontSize:ns("Body.fontSize"),fontWeight:ns("Body.fontWeight"),lineHeight:ns("Body.lineHeight"),letterSpacing:ns("Body.letterSpacing")},BodySmall:{fontFamily:ns("BodySmall.fontFamily"),fontSize:ns("BodySmall.fontSize"),fontWeight:ns("BodySmall.fontWeight"),lineHeight:ns("BodySmall.lineHeight"),letterSpacing:ns("BodySmall.letterSpacing")},XSmall:{fontFamily:ns("XSmall.fontFamily"),fontSize:ns("XSmall.fontSize"),fontWeight:ns("XSmall.fontWeight"),lineHeight:ns("XSmall.lineHeight"),letterSpacing:ns("XSmall.letterSpacing")}},is=e=>{switch(e){case 700:case"bold":return es.Bold;case 600:case"semibold":return es.Semibold;case 300:case"light":return es.Light;case 400:case"regular":return es.Regular;default:return""}},os=(e,t)=>n=>{var r;const i=rs[e].fontFamily(n),o=rs[e].fontWeight(n);return Object.values(es).includes(i)?S`
                font-family: ${is(t)||is(o)||i};
                font-weight: normal !important;
            `:S`
            font-family: ${i};
            font-weight: ${null!==(r=as(t)||o)&&void 0!==r?r:"normal"};
        `},as=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ss=(e,t,n=!1)=>r=>{const i=rs[e],o=i.fontSize(r);return S`
            ${os(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${S`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},ls=(e=!1,t=!1)=>t?S`
            display: block;
        `:e?S`
            display: inline;
        `:S`
            display: block;
        `;var cs;!function(e){e.D1=$.h1`
        ${e=>S`
                ${ss("D1",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.D2=$.h1`
        ${e=>S`
                ${ss("D2",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.D3=$.h1`
        ${e=>S`
                ${ss("D3",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.D4=$.h1`
        ${e=>S`
                ${ss("D4",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.DBody=$.h1`
        ${e=>S`
                ${ss("DBody",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.H1=$.h1`
        ${e=>S`
                ${ss("H1",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.H2=$.h2`
        ${e=>S`
                ${ss("H2",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.H3=$.h3`
        ${e=>S`
                ${ss("H3",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.H4=$.h4`
        ${e=>S`
                ${ss("H4",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.H5=$.h5`
        ${e=>S`
                ${ss("H5",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.H6=$.h6`
        ${e=>S`
                ${ss("H6",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.Body=$.p`
        ${e=>S`
                ${ss("Body",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=$.p`
        ${e=>S`
                ${ss("BodySmall",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.XSmall=$.span`
        ${e=>S`
                ${ss("XSmall",e.weight,e.paragraph)}
                color: ${Qa.Neutral[1]};
                ${ls(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>hs(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>hs(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(cs||(cs={}));const us=$.a`
    ${e=>S`
            ${ss(e.textStyle,e.weight)}
            color: ${Qa.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Qa.Secondary};

                svg {
                    color: ${Qa.Secondary};
                }
            }
        `}
`,ds=$(_)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,hs=n=>{var{external:r=!1,children:i}=n,o=F(n,["external","children"]);return e(us,Object.assign({},o,{children:[i,r&&t(ds,{})]}))};var fs;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(fs||(fs={}));const ps=$.button`
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
                    background-color: ${Qa.Neutral[8](e)};
                    border: 1px solid ${Qa.Primary(e)};

                    span {
                        color: ${Qa.Primary(e)};
                    }
                `;case"light":return S`
                    background-color: ${Qa.Neutral[8](e)};
                    border: 1px solid ${Qa.Neutral[5](e)};

                    span {
                        color: ${Qa.Primary(e)};
                    }
                `;case"disabled":return S`
                    background-color: ${Qa.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Qa.Neutral[3](e)};
                    }
                `;case"link":return S`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Qa.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Qa.Secondary};
                        }
                    }
                `;default:return S`
                    background-color: ${Qa.Primary(e)};
                    border: 1px solid transparent;

                    ${pi.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Qa.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?S`
                    height: 2.5rem;
                    span {
                        ${ss("H5","semibold")}
                    }

                    ${pi.mobileS} {
                        height: auto;
                    }
                `:S`
                    height: 3rem;
                    span {
                        ${ss("H4","semibold")}
                    }

                    ${pi.mobileS} {
                        height: auto;
                    }
                `}
`,ms=$((({color:n,className:r,size:i=18})=>e(Ua,Object.assign({className:r,$size:i,$color:n},{children:[t(Ga,{id:"inner1",$size:i-2,$borderWidth:2}),t(Xa,{id:"inner2",$size:i-2,$borderWidth:2}),t(Ja,{id:"inner3",$size:i-2,$borderWidth:2}),t(Ka,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Qa.Primary(e);break;case"disabled":t=Qa.Neutral[3](e);break;default:t=Qa.Neutral[8](e)}return S`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,gs={Default:i.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default"}=n,l=F(n,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default"};return e(ps,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:o},c,l,{children:[a&&t(ms,Object.assign({},c)),t("span",{children:i})]}))})),Small:i.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default"}=n,l=F(n,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small"};return e(ps,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:o},c,l,{children:[a&&t(ms,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},ys=$.button`
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
                background-color: ${Qa.Neutral[7]};
            `}
    }
`,vs=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=F(e,["children","focusHighlight","focusOutline","type"]);return t(ys,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),bs=S`
    color: ${Qa.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,$s=$(D)`
    ${bs}
`,ws=$(O)`
    ${bs}
`,Ss=$(x)`
    ${bs}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,xs=$.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Ds=$.div`
    display: flex;
    flex: 1;
    position: relative;
`,Os=$.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Qa.Neutral[8]};

    ${e=>{if(!e.$visible)return S`
                display: none;
            `}}
`,_s=$.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Fs=$.div`
    display: flex;
`,ks=$.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?S`
                display: none;
            `:e.$expanded?S`
                ${Ss} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,js=$.p`
    ${ss("H5","regular")}
`,Ms=$.div`
    display: flex;
`,Ps=$(vs)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Bs=$.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,As=$(gs.Small)`
    flex: 1;
`,Cs=$.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return S`
                    gap: 0.5rem 2.5rem;
                `;case"input":return S`
                    gap: 0.5rem 1rem;
                `}}}
`,Es=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?S`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Qa.Shadow.Accent};
                    border: 1px solid ${Qa.Accent.Light[1]};
                }
            `:e.$disabledDisplay?S`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return S`
                    background-color: ${Qa.Accent.Light[6](e)};
                `;case"selected-month":return S`
                    background-color: ${Qa.Accent.Light[5](e)};
                    border: 1px solid ${Qa.Primary(e)};
                `}}}
`,Hs=$(cs.H5)`
    ${e=>{if(e.$disabledDisplay)return S`
                color: ${Qa.Neutral[4]};
            `;switch(e.$variant){case"current-month":return S`
                    color: ${Qa.Neutral[3](e)};
                `;case"selected-month":return S`
                    ${ss("H5","semibold")}
                    color: ${Qa.Primary(e)};
                `}}}
`,Ts=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:o,type:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onMonthSelect:d})=>{const h=g((()=>ji.generateMonths(yi(e))),[e]),f=e=>{const t="start"===n&&i&&e.isAfter(i,"month")&&s,o="end"===n&&r&&e.isBefore(r,"month")&&s;return t||o},p=e=>{const t=e.format("MMMM"),n=(r=e,!ji.isWithinRange(r,l?yi(l):void 0,c?yi(c):void 0,"month"));var r;const i=o.isSame(e,"month")?"selected-month":yi().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||f(e),interactive:!n||u,month:t,variant:i}};return h.length?t(Cs,Object.assign({$type:a},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:i,month:o}=p(e);return t(Es,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(Hs,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n},{children:o}))}),o)}))})):null},Is=$.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return S`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return S`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,Rs=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?S`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Qa.Shadow.Accent};
                    border: 1px solid ${Qa.Accent.Light[1]};
                }
            `:e.$disabledDisplay?S`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return S`
                    background: ${Qa.Accent.Light[6](e)};
                `;case"selected-year":return S`
                    background: ${Qa.Accent.Light[5](e)};
                    border: 1px solid ${Qa.Primary(e)};
                `}}};
`,zs=$(cs.H5)`
    ${e=>{if(e.$disabledDisplay)return S`
                color: ${Qa.Neutral[4]};
            `;switch(e.$variant){case"current-year":return S`
                    color: ${Qa.Neutral[3](e)};
                `;case"selected-year":return S`
                    ${ss("H5","semibold")}
                    color: ${Qa.Primary(e)};
                `;case"other-decade":return S`
                    color: ${Qa.Neutral[4](e)};
                `}}}
`,Ls=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:o,type:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onYearSelect:d})=>{const h=g((()=>ji.generateDecadeOfYears(yi(e))),[e]),f=e=>{const t="start"===n&&i&&e.isAfter(i,"year")&&s,o="end"===n&&r&&e.isBefore(r,"year")&&s;return t||o},p=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(i=e,!ji.isWithinRange(i,l?yi(l):void 0,c?yi(c):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":yi().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||f(e),interactive:!r||u,year:n,variant:a}};return h.length?t(Is,Object.assign({$type:a},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:i,year:o}=p(e);return t(Rs,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(zs,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n,$interactive:r},{children:o}))}),o)}))})):null},Ns=i.forwardRef(((r,i)=>{var{children:o,initialCalendarDate:l,type:c,minDate:u,maxDate:h,currentFocus:f,selectedStartDate:p,selectedEndDate:m,selectWithinRange:g,dynamicHeight:v=!1,allowDisabledSelection:b,onCalendarDateChange:$,withButton:w,doneButtonDisabled:S,onDismiss:x,showNavigationHeader:D=!0,getLeftArrowDate:O,getRightArrowDate:_,isLeftArrowDisabled:k,isRightArrowDisabled:j,getMonthHeaderLabel:M,getYearHeaderLabel:P}=r,B=F(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[A,C]=s(yi(l)),[E,H]=s(yi(l)),[T,I]=s("default"),R=a(null),z=a(null),L=a();y(i,(()=>({defaultView(){I("default")},resetView(){const e=yi(l);C(e),H(e),I("default")},setCalendarDate(e){const t=e?yi(e):yi();C(t),H(t)}}))),d((()=>{const e=l?yi(l):yi();C(e),H(e)}),[l]),d((()=>{U(E)}),[E]);const N=()=>{"month-options"!==T?(I("month-options"),L.current.focus()):(I("default"),C(E))},Y=()=>{"default"!==T?(I("default"),C(E)):I("year-options")},W=()=>{L.current.focus();const e=O?O(A):A.subtract(1,"month");switch(T){case"default":H(e),C(e);break;case"month-options":C((e=>e.subtract(1,"year")));break;case"year-options":C((e=>e.subtract(10,"year")))}},V=()=>{L.current.focus();const e=_?_(A):A.add(1,"month");switch(T){case"default":H(e),C(e);break;case"month-options":C((e=>e.add(1,"year")));break;case"year-options":C((e=>e.add(10,"year")))}},q=e=>{C(e),H(e)},Q=()=>{C(yi(l)),H(yi(l)),"default"===T?Z("reset"):I("default")},U=e=>{$&&$(e)},Z=e=>{x&&x(e)},G=()=>{if(!u||b)return!1;const e=yi(u);return"month-options"===T?!ji.isPreviousYearWithinRange(A,e):"year-options"===T?!ji.isPreviousDecadeWithinRange(A,e):k?k(A):!ji.isPreviousMonthWithinRange(A,e)},X=()=>{if(!h||b)return!1;const e=yi(h);return"month-options"===T?!ji.isNextYearWithinRange(A,e):"year-options"===T?!ji.isNextDecadeWithinRange(A,e):j?j(A):!ji.isNextMonthWithinRange(A,e)},J=()=>{if("year-options"===T){const{beginDecade:e,endDecade:t}=ji.getStartEndDecade(A);return`${e} to ${t}`}return P?P(A):yi(A).format("YYYY")},K=()=>{const r=M?M(A):yi(A).format("MMM");return e(n,{children:[e(ks,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===T,$visible:"default"===T,id:"month-dropdown",onClick:N},{children:[t(js,{children:r}),t(Ss,{})]})),e(ks,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==T,id:"year-dropdown",onClick:Y},{children:[t(js,{children:J()}),t(Ss,{})]}))]})},ee=()=>{switch(T){case"month-options":return t(Ts,{type:c,calendarDate:A,currentFocus:f,minDate:u,maxDate:h,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:E,isNewSelection:g,onMonthSelect:q,allowDisabledSelection:b});case"year-options":return t(Ls,{type:c,calendarDate:A,currentFocus:f,minDate:u,maxDate:h,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:E,isNewSelection:g,onYearSelect:q,allowDisabledSelection:b});default:return null}};return e(xs,Object.assign({ref:L,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container"},B,{children:[D&&e(_s,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Fs,{children:K()}),e(Ms,{children:[t(Ps,Object.assign({"data-testid":"left-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:W},{children:t($s,{})})),t(Ps,Object.assign({"data-testid":"right-arrow-btn",disabled:X(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(ws,{})}))]})]})),t(Ds,{children:(()=>{const r="function"==typeof o?o({calendarDate:E,currentView:T}):o;return e(n,v?{children:["default"===T&&r,ee()]}:{children:[r,t(Os,Object.assign({$visible:"default"!==T},{children:ee()}))]})})()}),(()=>{if(!w)return;const n=!!("default"===T)&&S;return e(Bs,{children:[t(As,Object.assign({ref:z,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Q},{children:"Cancel"})),t(As,Object.assign({"data-testid":"done-button",ref:R,type:"button",onClick:()=>(e=>{e||(C(E),"default"===T?Z("confirmed"):I("default"))})(n),disabled:n},{children:"Done"}))]})})()]}))})),Ys=$.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Ws=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Vs=$.div`
    grid-column: 1 / -1;
    display: flex;
`,qs=$.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,Qs=$.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return S`
                    left: 0;
                `;case"right":return S`
                    right: 0;
                `}}}
`,Us=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,Zs=$(cs.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return S`
                ${ss("H5","semibold")};
                color: ${Qa.Accent.Light[2]};
            `;if(t)return S`
                color: ${Qa.Neutral[4]};
            `;if(n)return S`
                ${ss("H5","semibold")};
                color: ${Qa.Primary};
            `;switch(r){case"other-month":return S`
                    color: ${Qa.Neutral[4]};
                `;case"today":return S`
                    color: ${Qa.Neutral[3]};
                `;case"default":return S`
                    color: ${Qa.Neutral[1]};
                `}}}
`,Gs=$(Qs)`
    ${e=>{const{$selected:t}=e;if(t)return S`
                border-top: 1px solid ${Qa.Accent.Light[4]};
                border-bottom: 1px solid ${Qa.Accent.Light[4]};
                background-color: ${Qa.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?S`
                border-top: 1px dashed ${Qa.Accent.Light[4]};
                border-bottom: 1px dashed ${Qa.Accent.Light[4]};
                background-color: ${Qa.Accent.Light[6]};
            `:n?S`
                background-color: ${Qa.Accent.Light[4]};
            `:void 0}}
`,Xs=$(Us)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?S`
                background: ${Qa.Accent.Light[5]};
                border: 1px solid ${Qa.Primary};
            `:t?S`
                box-shadow: 0px 0px 4px 1px ${Qa.Shadow.Accent};
                border: 1px solid ${Qa.Accent.Light[1]};
                background-color: ${Qa.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?S`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Qa.Shadow.Accent};
                    border: 1px solid ${Qa.Accent.Light[1]};
                    background-color: ${Qa.Neutral[8]};
                }
            `:n?S`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?S`
                border: 1px solid ${Qa.Accent.Light[1]};
                background: ${Qa.Accent.Light[4]};

                :hover {
                    background: ${Qa.Accent.Light[4]};
                }
            `:t?S`
                color: ${Qa.Neutral[4]};
            `:"today"===r?S`
                    background: ${Qa.Accent.Light[5]};
                `:void 0}}
`,Js=$(Qs)`
    ${e=>{const{$hovered:t,$selected:n}=e;return t?S`
                border-top: 1px dashed ${Qa.Accent.Light[4]};
                border-bottom: 1px dashed ${Qa.Accent.Light[4]};
                background-color: ${Qa.Accent.Light[6]};
            `:n?S`
                border-top: 1px solid ${Qa.Primary};
                border-bottom: 1px solid ${Qa.Primary};
                background-color: ${Qa.Accent.Light[5]};
            `:void 0}}

    ${e=>{if(e.$overlap)return S`
                border-top: 1px solid ${Qa.Primary};
                border-bottom: 1px solid ${Qa.Primary};
                background-color: ${Qa.Neutral[8]};
                box-shadow: 4px 0px 4px 0px ${Qa.Shadow.Accent};
            `}}
`,Ks=$.div`
    display: none;
    position: absolute;
    pointer-events: none;
    background-color: transparent;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    ::before {
        content: "";
        display: block;
        position: absolute;
        width: 1.75rem; // width must larger than half original width to cover middle border curve and border shadow
        pointer-events: none;
        height: 100%;
        top: 0;
    }

    ${e=>{if(e.$hovered)return S`
                border: 1px dashed ${Qa.Accent.Light[4]};

                ::before {
                    background-color: ${Qa.Accent.Light[6]};
                }
            `}}

    ${e=>{if(e.$selected)return S`
                border: 1px solid ${Qa.Primary};

                ::before {
                    background-color: ${Qa.Accent.Light[5]};
                }
            `}}

    ${e=>{if(e.$overlap)return S`
                ::before {
                    background-color: ${Qa.Neutral[8]};
                }
            `}}

    ${e=>e.$overlap&&"left"===e.$position?S`
                box-shadow: -1px 0px 4px 0px ${Qa.Shadow.Accent};
            `:e.$overlap&&"right"===e.$position?S`
                box-shadow: 1px 0px 4px 0px ${Qa.Shadow.Accent};
            `:void 0}

    ${e=>{switch(e.$position){case"left":return S`
                    display: block;

                    ::before {
                        left: 50%;
                    }
                `;case"right":return S`
                    display: block;

                    ::before {
                        right: 50%;
                    }
                `}}}
`,el=$(Us)`
    ${e=>{const{$hovered:t,$selected:n,$position:r}=e;if(n){if("left"===r)return S`
                    background: ${Qa.Accent.Light[5]};
                `;if("right"===r)return S`
                    background: ${Qa.Accent.Light[5]};
                `}if(t)return S`
                background-color: ${Qa.Accent.Light[6]};
            `}}

    ${e=>{const{$overlap:t,$position:n}=e;if(t){if("left"===n)return S`
                    background-color: ${Qa.Neutral[8]};
                `;if("right"===n)return S`
                    background-color: ${Qa.Neutral[8]};
                `}}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?S`
                cursor: pointer;
            `:n?S`
                cursor: not-allowed;
            `:void 0}}
    
    ${e=>{const{$disabledDisplay:t,$overlap:n,$selected:r,$variant:i}=e;return t?S`
                color: ${Qa.Neutral[4]};
            `:"today"===i?n?S`
                    background: ${Qa.Neutral[8]};
                    height: 2.35rem;
                `:r?S`
                    height: 2.35rem;
                `:S`
                    background: ${Qa.Accent.Light[5]};
                `:void 0}}
`,tl=$(Zs)`
    ${e=>{if("default"===e.$view)return S`
                z-index: 1;
            `}}
`,nl=({type:r,dayDate:i,currentView:o,variant:a,styleLeftProps:s,styleRightProps:l,styleCircleProps:c,styleLabelProps:u,styleOverflowCirleProps:d,onDayClick:h,onHoverCell:f})=>t(n,{children:(()=>{const n=i.format("YYYY-MM-DD");switch(r){case"regular":return e(qs,{children:[t(Gs,Object.assign({$position:"left"},s)),t(Gs,Object.assign({$position:"right"},l)),t(Xs,Object.assign({$variant:a,onClick:()=>h(i,!c.$interactive),onMouseEnter:()=>f(n,!c.$interactive)},c,{children:t(Zs,Object.assign({weight:u.$selected?"semibold":"regular",$variant:a},u,{children:i.format("D")}))}))]});case"week":return e(qs,{children:[t(Js,Object.assign({$position:"left"},s)),t(Js,Object.assign({$position:"right"},l)),t(el,Object.assign({$variant:a,onClick:()=>h(i,!c.$interactive),onMouseEnter:()=>f(n,!c.$interactive)},c,d,{children:t(tl,Object.assign({weight:u.$selected?"semibold":"regular",$variant:a,$view:o},u,{children:i.format("D")}))})),t(Ks,Object.assign({},c,d))]})}})()}),rl=[1,3,5,7,8,10,12],il=[4,6,9,11];var ol,al,sl;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":rl.includes(o)?Math.min(i,31).toString():il.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=yi(e,n);return yi(t,n).diff(r,"minute")}}(ol||(ol={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(al||(al={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(sl||(sl={}));const ll=e=>{const[t,n]=s(e),r=a(e);return[t,p((e=>{r.current=e,n(e)}),[]),r]};var cl;yi.extend(Oi),function(e){e.generateStyleProps=(e,t,n,r,i,o,a,s,l,c,u)=>{const d=e.format("YYYY-MM-DD"),h={},f={},p={},m={},g=ul(e,l,a,s),y=t&&n&&t===n;return!u&&["reset-start","reset-end"].includes(i)&&[t,n].includes(d)&&(p.$overlap=!0),(g||dl(e,o,t,n,u))&&(p.$disabledDisplay=!0,m.$disabledDisplay=!0),p.$interactive=!g||c,[t,n].includes(d)&&(p.$selected=!0,m.$selected=!0),t&&n&&!y&&e.isBetween(t,n,"day","[]")&&(m.$selected=!0,e.isSame(t)?f.$selected=!0:e.isSame(n)?h.$selected=!0:(h.$selected=!0,f.$selected=!0)),"hover-start"===i&&e.isBetween(n,r,"day","[]")&&(m.$selected=!0,n===d?h.$hovered=!0:r===d?(f.$hovered=!0,p.$hovered=!0):(h.$hovered=!0,f.$hovered=!0)),"hover-end"===i&&e.isBetween(t,r,"day","[]")&&(m.$selected=!0,t===d?f.$hovered=!0:r===d?(h.$hovered=!0,p.$hovered=!0):(h.$hovered=!0,f.$hovered=!0)),"overlap-start"===i&&e.isBetween(n,r,"day","[]")&&(r===d?(f.$overlap=!0,p.$overlap=!0):n===d?(h.$overlap=!0,p.$overlap=!0,p.$hovered=!0):(h.$overlap=!0,f.$overlap=!0)),"overlap-end"===i&&e.isBetween(t,r,"day","[]")&&(r===d?(h.$overlap=!0,p.$overlap=!0):t===d?(f.$overlap=!0,p.$overlap=!0,p.$hovered=!0):(h.$overlap=!0,f.$overlap=!0)),"full-overlap-start"===i&&e.isBetween(n,r,"day","[]")&&(t===d&&y?(h.$hovered=!0,p.$overlap=!0):t===d?(h.$hovered=!0,f.$overlap=!0,p.$overlap=!0):n===d?(h.$overlap=!0,p.$overlap=!0):e.isSame(r)?(f.$hovered=!0,m.$selected=!0,p.$hovered=!0):e.isBetween(t,r,"day","()")&&(h.$hovered=!0,f.$hovered=!0,m.$selected=!0)),"full-overlap-end"===i&&e.isBetween(t,r,"day","[]")&&(n===d&&y?(f.$hovered=!0,p.$overlap=!0):n===d?(h.$overlap=!0,f.$hovered=!0,p.$overlap=!0):t===d?(f.$overlap=!0,p.$overlap=!0):e.isSame(r)?(h.$hovered=!0,m.$selected=!0,p.$hovered=!0):e.isBetween(n,r,"day","()")&&(h.$hovered=!0,f.$hovered=!0,m.$selected=!0)),["full-overlap-end","full-overlap-start"].includes(i)&&e.isBetween(t,n,"day","()")&&(h.$overlap=!0,f.$overlap=!0),{styleLeftProps:h,styleRightProps:f,styleCircleProps:p,styleLabelProps:m}},e.getStylePropsForWeekSelection=(e,t,n,r,i,o,a,s)=>{const l={},c={},u={},d={},h={},f=ul(e,a,i,o);if(f&&(u.$disabledDisplay=!0,d.$disabledDisplay=!0),u.$interactive=!f||s,t){const{firstDayOfWeek:n,lastDayOfWeek:r}=hl(t);e.isBetween(n,r,"day","[]")&&(d.$selected=!0,e.isSame(n)?(c.$selected=!0,u.$selected=!0,h.$position="left"):e.isSame(r)?(l.$selected=!0,u.$selected=!0,h.$position="right"):(l.$selected=!0,u.$selected=!0,c.$selected=!0))}if(r){const{firstDayOfWeek:t,lastDayOfWeek:n}=hl(r);e.isBetween(t,n,"day","[]")&&(d.$selected=!0,e.isSame(t)?(c.$hovered=!0,u.$hovered=!0,h.$position="left"):e.isSame(n)?(l.$hovered=!0,u.$hovered=!0,h.$position="right"):(l.$hovered=!0,c.$hovered=!0))}if(t&&n&&r&&e.isBetween(t,n,"day","[]")&&yi(r).isBetween(t,n,"day","[]")){const{firstDayOfWeek:n,lastDayOfWeek:r}=hl(t);e.isBetween(n,r,"day","[]")&&(d.$selected=!0,e.isSame(n)?(c.$overlap=!0,u.$overlap=!0,h.$position="left"):e.isSame(r)?(l.$overlap=!0,u.$overlap=!0,h.$position="right"):(l.$overlap=!0,u.$overlap=!0,c.$overlap=!0))}return{styleLeftProps:l,styleRightProps:c,styleCircleProps:u,styleLabelProps:d,styleOverflowCirleProps:h}}}(cl||(cl={}));const ul=(e,t,n,r)=>{const i=ji.isWithinRange(e,n?yi(n):void 0,r?yi(r):void 0),o=t&&t.includes(e.format("YYYY-MM-DD"));return!i||o},dl=(e,t,n,r,i)=>{const o="start"===t&&r&&e.isAfter(r)&&i,a="end"===t&&n&&e.isBefore(n)&&i;return o||a},hl=e=>({firstDayOfWeek:yi(e).startOf("week").format("YYYY-MM-DD"),lastDayOfWeek:yi(e).endOf("week").format("YYYY-MM-DD")});yi.extend(Oi);const fl=({calendarDate:n,currentFocus:r,disabledDates:i,selectedStartDate:o,selectedEndDate:a,onSelect:l,onHover:c,isNewSelection:u,minDate:d,maxDate:h,variant:f,allowDisabledSelection:p})=>{const m=g((()=>ji.generateDays(n)),[n]),[y,v]=s(""),b=(e,t)=>{t&&!p||l(e)},$=(e,t)=>{t&&!p||(v(e),c(e))},w=()=>{v(""),c("")},S=(()=>{if(!y||"single"===f)return null;const e=yi(y);if(o&&a)if(e.isBefore(o)){if("start"===r)return"full-overlap-start";if("end"===r)return"reset-end"}else if(e.isAfter(a)){if("end"===r)return"full-overlap-end";if("start"===r)return"reset-start"}else if(e.isBetween(o,a,"day","[]")&&![o,a].includes(y)){if("start"===r)return"overlap-start";if("end"===r)return"overlap-end"}if(o&&!a){if(e.isAfter(o)&&"end"===r)return"hover-end"}else if(!o&&a&&e.isBefore(a)&&"start"===r)return"hover-start";return null})();return e(Ys,Object.assign({"data-testid":"calendar-content"},{children:[m[0].map(((e,n)=>t(Ws,{children:t(cs.H6,Object.assign({weight:"semibold"},{children:yi(e).format("ddd")}))},`week-day-${n}`))),m.map(((e,s)=>t(Vs,Object.assign({onMouseLeave:w},{children:e.map(((e,s)=>{const{variant:l}=(e=>({variant:n.month()!==e.month()?"other-month":yi().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:c,styleRightProps:f,styleCircleProps:m,styleLabelProps:g}=cl.generateStyleProps(e,o,a,y,S,r,d,h,i,p,u);return t(nl,{type:"regular",dayDate:e,variant:l,styleLeftProps:c,styleRightProps:f,styleCircleProps:m,styleLabelProps:g,onDayClick:b,onHoverCell:$},`day-${s}`)}))}),s)))]}))},pl=({calendarDate:n,disabledDates:r,selectedStartDate:i,selectedEndDate:o,onSelect:a,onHover:l,minDate:c,maxDate:u,currentView:d,allowDisabledSelection:h})=>{const f=g((()=>ji.generateDays(n)),[n]),[p,m]=s(""),y=(e,t)=>{if(t&&!h)return;const n=e.startOf("week");a(n),e&&!yi(e).isSame(n,"month")&&m("")},v=(e,t)=>{t&&!h||(m(e),l(e))},b=()=>{m(""),l("")};return e(Ys,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,n)=>t(Ws,{children:t(cs.H6,Object.assign({weight:"semibold"},{children:yi(e).format("ddd")}))},`week-day-${n}`))),f.map(((e,a)=>t(Vs,Object.assign({onMouseLeave:b},{children:e.map(((e,a)=>{const{variant:s}=(e=>({variant:n.month()!==e.month()?"other-month":yi().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:l,styleRightProps:f,styleCircleProps:m,styleLabelProps:g,styleOverflowCirleProps:b}=cl.getStylePropsForWeekSelection(e,i,o,p,c,u,r,h);return t(nl,{type:"week",dayDate:e,variant:s,currentView:d,styleLeftProps:l,styleRightProps:f,styleCircleProps:m,styleLabelProps:g,styleOverflowCirleProps:b,onDayClick:y,onHoverCell:v},`day-${a}`)}))}),a)))]}))},ml=$.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Qa.Neutral[8]};

    ${e=>{if("input"===e.$type)return S`
                border: 1px solid ${Qa.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,gl=i.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:i,onDismiss:o,value:s,endValue:l,currentFocus:c,withButton:u,variant:d,minDate:h,maxDate:f,allowDisabledSelection:p,type:m="standalone",selectWithinRange:g=!0,initialCalendarDate:v},b)=>{const $=a(),w=a(void 0);y(b,(()=>({reset(){$.current.resetView()},setCalendarDate(e){$.current.setCalendarDate(e)}})));const S=e=>{const t=e.format("YYYY-MM-DD");$.current.setCalendarDate(t),D(t)},x=e=>{O(e)},D=e=>{r&&r(e)},O=e=>{i&&i(e)},_=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(ml,Object.assign({$type:m},{children:t(Ns,Object.assign({type:m,ref:$,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(d){case"single":e=!1;break;case"range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:h,maxDate:f,selectWithinRange:g,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||_(e),w.current=e},initialCalendarDate:v},{children:({calendarDate:n,currentView:r})=>((n,r)=>{switch(d){case"single":case"range":default:return t(fl,{calendarDate:n,currentFocus:c,disabledDates:e,selectedStartDate:s,selectedEndDate:l,variant:d,minDate:h,maxDate:f,isNewSelection:g,allowDisabledSelection:p,onSelect:S,onHover:x});case"week":return t(pl,{calendarDate:n,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:f,currentView:r,allowDisabledSelection:p,onSelect:S,onHover:x})}})(n,r)}))}))})),yl=i.forwardRef(((e,n)=>{const{isOpen:r}=e,i=F(e,["isOpen"]),o=a(),l=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=a(n),y=a(null),v=null!=f?f:y,b=a(),$=s({width:void 0,height:void 0}),w=$[0],S=$[1];return De((function(){if(!we()){var e=xe(m,S,u,h);b.current=be((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!g.current&&!we()&&e({width:r,height:i}),g.current=!1}))}),r,o,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,o,l,u,h,m,p,v.current]),B({ref:v},w)}(),c=Nr({height:r?l.height:0});return d((()=>{r&&o.current.reset()}),[r]),y(n,(()=>o.current)),t(mi,Object.assign({style:c},{children:t("div",Object.assign({ref:l.ref,inert:r?void 0:""},{children:t(gl,Object.assign({ref:o},i))}))}))})),vl={collections:{base:{InputBoxShadow:S`
        inset 0 0 6px 1px ${Qa.Shadow.Accent}
    `,InputErrorBoxShadow:S`
        inset 0 0 6px 1px ${Qa.Shadow.Red}
    `,ElevationBoxShadow:S`
      0px 2px 8px ${Qa.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:S`
        inset 0 0 6px 1px ${Qa.Shadow.Accent}
    `,InputErrorBoxShadow:S`
        inset 0 0 6px 1px ${Qa.Shadow.Red}
    `,ElevationBoxShadow:S`
      0px 2px 8px ${Qa.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},bl=e=>t=>{var n;const r=t.theme,i=Ya(vl,r[Wa.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Na(i,e,r.options.designToken):Na(i,e)},$l=bl("InputBoxShadow"),wl=bl("InputErrorBoxShadow"),Sl=(bl("ElevationBoxShadow"),bl("Table.Header"),bl("Table.Cell.Primary"),bl("Table.Cell.Secondary"),bl("Table.Cell.Selected"),bl("Table.Cell.Hover"),$.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Qa.Neutral[5]};
    border-radius: 4px;
    background: ${Qa.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Qa.Accent.Light[1]};
        box-shadow: ${$l};
    }

    ${e=>e.$readOnly?S`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?S`
                background: ${Qa.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Qa.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?S`
                border: 1px solid ${Qa.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Qa.Validation.Red.Border};
                    box-shadow: ${wl};
                }
            `:void 0}
`),xl=$.input`
    ${ss("Body","regular")}
    color: ${Qa.Neutral[1]};
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
        color: ${Qa.Neutral[3]};
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
`,Dl=$.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Ol=$.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return S`
                ${_l}, ${Ml} {
                    color: ${Qa.Neutral[4]};
                }
            `}}
`,_l=$(xl)`
    background: transparent;
    text-align: center;
`,Fl=$(_l)`
    width: 2rem;
    margin-right: 0.25rem;
`,kl=$(_l)`
    width: 2.5rem;
`,jl=$(_l)`
    width: 3rem;
    margin-left: 0.25rem;
`,Ml=$(cs.Body)`
    ${e=>{if(e.$inactive)return S`
                color: ${Qa.Neutral[3](e)};
            `}}
`,Pl=$.div`
    ${ss("Body","regular")}
    background-color: ${Qa.Neutral[8]};
    color: ${Qa.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?S`
                background-color: ${Qa.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?S`
                display: none;
            `:void 0}
`;yi.extend(wi);const Bl=i.forwardRef((({disabled:n,readOnly:r,names:i,value:o,focused:l,hoverValue:c,placeholder:u,label:h,onChange:f,onFocus:p,onBlur:m},g)=>{const[v,b,$]=ll(""),[w,S,x]=ll(""),[D,O,_]=ll(""),[F,k]=s("none"),[j,M]=s(!1),P=a(null),B=a(null),A=a(null),C=a(null),[E,H,T]=N(c);d((()=>{const[e="",t="",n=""]=N(o);b(e),S(t),O(n)}),[o]),d((()=>{l||k("none"),l&&(M(!0),P.current.contains(document.activeElement)||B.current.focus())}),[l]),y(g,(()=>({ref:P,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",n=""]=N(o);b(e),S(t),O(n)}})),[o]);const I=e=>{e.target.select();const t=e.target.name;k(t)},R=e=>{const[t,n,r]=i,o={[t]:$.current,[n]:x.current,[r]:_.current},a=e.target.name,s=o[a],l=a!==r?sl.padValue(s,!0):s;switch(a){case t:o[t]=l,b(l);break;case n:o[n]=l,S(l)}const c=`${o[r]}-${o[n]}-${o[t]}`,u=yi(c,"YYYY-MM-DD",!0).isValid(),d=!o[t]&&!o[n]&&!o[r];u&&s!==l&&f(c),P.current.contains(e.relatedTarget)||(k("none"),null==m||m(d||u))},z=e=>{if(c)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:v,month:w,year:D};switch(t){case i[0]:r.day=n,b(n),2===n.length&&A.current.focus();break;case i[1]:r.month=n,S(n),2===n.length&&C.current.focus();break;case i[2]:r.year=n,O(n)}if(!r.day&&!r.month&&!r.year)return void f("");const o=`${r.year}-${r.month}-${r.day}`;yi(o,"YYYY-MM-DD",!0).isValid()&&f(o)},L=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(F===i[1]&&0===w.length&&B.current.focus(),F===i[2]&&0===D.length&&A.current.focus())};function N(e){if(e){const t=yi(e,"YYYY-MM-DD");return[sl.padValue(t.date().toString()),sl.padValue((t.month()+1).toString()),t.year().toString()]}return[void 0,void 0,void 0]}return e(Dl,Object.assign({role:"group","aria-label":h,onClick:()=>{n||r||(M(!0),P.current.contains(document.activeElement)||B.current.focus())},onFocus:()=>{n||(M(!0),l||p())}},{children:[e(Ol,Object.assign({ref:P,$hover:!!c},{children:[t(Fl,{ref:B,name:i[0],maxLength:2,value:null!=E?E:v,onFocus:I,onBlur:R,onChange:z,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:F!==i[0]||r?"DD":""}),t(Ml,Object.assign({$inactive:0===v.length},{children:"/"})),t(kl,{ref:A,name:i[1],maxLength:2,value:null!=H?H:w,onFocus:I,onBlur:R,onChange:z,onKeyDown:L,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:F!==i[1]||r?"MM":""}),t(Ml,Object.assign({$inactive:0===w.length},{children:"/"})),t(jl,{ref:C,name:i[2],maxLength:4,value:null!=T?T:D,onFocus:I,onBlur:R,onChange:z,onKeyDown:L,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:F!==i[2]||r?"YYYY":""})]})),(()=>{if(!o&&!r&&u)return t(Pl,Object.assign({$hide:j,$disabled:n},{children:u}))})()]}))}));var Al;yi.extend(Oi),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!yi(e).isBefore(r,"day"))||!(!i||!yi(e).isAfter(i,"day")))}}(Al||(Al={}));const Cl=$(Sl)`
    height: 3rem;
`,El=n=>{var{minDate:r,maxDate:i,disabled:o,disabledDates:l,error:c,value:u,onChange:h,onFocus:f,onBlur:p,onYearMonthDisplayChange:m,withButton:g=!0,readOnly:y,id:v,allowDisabledSelection:b}=n,$=F(n,["minDate","maxDate","disabled","disabledDates","error","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection"]);const[w,S]=s(u),[x,D]=s(u),[O,_]=s(void 0),[k,j]=s(!1),P=a(null),B=a(),A=a(),C=M.exports.useMediaQuery({maxWidth:hi.mobileL}),E=g||C;d((()=>{S(u),D(u)}),[u]);const H=e=>{!b&&Al.isDateDisabled(e,{disabledDates:l,minDate:r,maxDate:i})||(D(e),E||(T(e),S(e),e&&j(!1)))},T=e=>{h&&h(e)},I=()=>{p&&p()};return e(Cl,Object.assign({ref:P,$disabled:o,$readOnly:y,$error:c,id:v,"data-testid":$["data-testid"],tabIndex:-1,onBlur:e=>{P&&!P.current.contains(e.relatedTarget)&&(A.current.resetInput(),D(w),j(!1),I())},onKeyDown:function(e){"Escape"===e.code&&(A.current.resetInput(),D(w),j(!1))}},$,{children:[t(Bl,{ref:A,disabled:o,onChange:H,onFocus:()=>{y||(j(!0),f&&f())},readOnly:y,focused:k,names:["start-day","start-month","start-year"],value:x,hoverValue:O}),t(yl,{ref:B,type:"input",variant:"single",initialCalendarDate:x,isOpen:k,withButton:E,value:x,disabledDates:l,minDate:r,maxDate:i,allowDisabledSelection:b,onHover:e=>{_(e)},onSelect:H,onDismiss:e=>{switch(e){case"reset":D(w);break;case"confirmed":S(x),T(x)}j(!1)},onYearMonthDisplayChange:m})]}))};export{El as DateInput};
//# sourceMappingURL=index.js.map
