import e,{jsx as t,jsxs as n,Fragment as r}from"react/jsx-runtime";import*as i from"react";import o,{useState as a,useRef as s,useEffect as l,cloneElement as c,isValidElement as u,createRef as d,PureComponent as h,useLayoutEffect as f,forwardRef as p,useCallback as m,useContext as g,useMemo as y}from"react";import v,{findDOMNode as b,unstable_batchedUpdates as w}from"react-dom";import $,{css as C,keyframes as _}from"styled-components";var x,S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},O={};Object.defineProperty(O,"__esModule",{value:!0});var k=e;const j=e=>k.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:k.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});j.displayName="CrossIcon",x=O.CrossIcon=j;var M,F={exports:{}};M=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var f=e.type;switch(f){case c:case u:case i:case a:case o:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var $=c,C=u,_=l,x=s,S=n,O=d,k=i,j=m,M=p,F=r,P=a,D=o,H=h,I=!1;function E(e){return w(e)===u}t.AsyncMode=$,t.ConcurrentMode=C,t.ContextConsumer=_,t.ContextProvider=x,t.Element=S,t.ForwardRef=O,t.Fragment=k,t.Lazy=j,t.Memo=M,t.Portal=F,t.Profiler=P,t.StrictMode=D,t.Suspense=H,t.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),E(e)||w(e)===c},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===o||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),F.exports=M(o);const P=$.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return C`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,D=$.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=C`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=C`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=C`
                transition: none;
            `),t}}
`,H=({show:e=!1,rootId:n,onOverlayClick:r,children:i,backgroundOpacity:c,backgroundBlur:u=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:f,id:p})=>{const[m,g]=a(null),[y,b]=a(),w=s(),$=s(null),C=i&&o.cloneElement(i,{ref:$}),_=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";l((()=>{if(e){const e=O();if(x(e),!e){const e=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(e)}}else if(!w.current){const e=setTimeout((()=>{j("remove")}),200);return()=>clearTimeout(e)}}),[e]),l((()=>{g(S());const e=O();return x(e),e||k(),()=>{j("remove")}}),[]);const x=e=>{w.current=e,b(e)},S=()=>document&&n?document.getElementById(n):document?document.body:null,O=()=>document.body.classList.contains(E),k=()=>{if(!document.getElementById(I)){const e=document.createElement("style");e.id=I;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${E} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${E}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},j=e=>{const t=document.body.classList.contains(E);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(E):document.body.classList.add(E)},M=e=>{const t=$.current?.firstChild;t&&t.contains(e.target)||r&&h&&(e.preventDefault(),r())};return m?v.createPortal(t(P,{id:_,"data-testid":_,$show:e,zIndex:f,$stacked:y,children:i&&t(D,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:c||(y?.5:.8),$backgroundBlur:u,$disableTransition:d,$enableOverlayClick:h,onClick:M,children:C})}),m):null},I="lifesg-ds-overlay-stylesheet",E="lifesg-ds-overlay-open",T={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var B=function(e,t){return B=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},B(e,t)};var A=function(){return A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},A.apply(this,arguments)};var z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var R=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N="object"==typeof z&&z&&z.Object===Object&&z,L="object"==typeof self&&self&&self.Object===Object&&self,V=N||L||Function("return this")(),W=V,q=function(){return W.Date.now()},Q=/\s/;var U=function(e){for(var t=e.length;t--&&Q.test(e.charAt(t)););return t},Z=/^\s+/;var Y=function(e){return e?e.slice(0,U(e)+1).replace(Z,""):e},G=V.Symbol,X=G,J=Object.prototype,K=J.hasOwnProperty,ee=J.toString,te=X?X.toStringTag:void 0;var ne=function(e){var t=K.call(e,te),n=e[te];try{e[te]=void 0;var r=!0}catch(e){}var i=ee.call(e);return r&&(t?e[te]=n:delete e[te]),i},re=Object.prototype.toString;var ie=ne,oe=function(e){return re.call(e)},ae=G?G.toStringTag:void 0;var se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ae&&ae in Object(e)?ie(e):oe(e)},le=function(e){return null!=e&&"object"==typeof e};var ce=Y,ue=R,de=function(e){return"symbol"==typeof e||le(e)&&"[object Symbol]"==se(e)},he=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,pe=/^0o[0-7]+$/i,me=parseInt;var ge=R,ye=q,ve=function(e){if("number"==typeof e)return e;if(de(e))return NaN;if(ue(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ue(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ce(e);var n=fe.test(e);return n||pe.test(e)?me(e.slice(2),n?2:8):he.test(e)?NaN:+e},be=Math.max,we=Math.min;var $e=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function m(){var e=ye();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?we(n,o-(e-c)):n}(e))}function g(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=ye(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=ve(t)||0,ge(n)&&(u=!!n.leading,o=(d="maxWait"in n)?be(ve(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:g(ye())},y},Ce=$e,_e=R;var xe=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return _e(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Ce(e,t,{leading:r,maxWait:t,trailing:i})},Se=function(e,t,n,r){switch(t){case"debounce":return $e(e,n,r);case"throttle":return xe(e,n,r);default:return e}},Oe=function(e){return"function"==typeof e},ke=function(){return"undefined"==typeof window},je=function(e){return e instanceof Element||e instanceof HTMLDocument},Me=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&Oe(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ke()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ke())return null;if(t)return document.querySelector(t);if(r&&je(r))return r;if(n.targetRef&&je(n.targetRef.current))return n.targetRef.current;var i=b(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=Me(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!ke()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Oe(t)?"renderProp":Oe(r)?"childFunction":u(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=d(),n.observableElement=null,ke()||(n.resizeHandler=Se(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}B(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ke()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=r)(l);case"child":if((e=r).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return c(e,u)}return c(e,l);case"childArray":return(e=r).map((function(e){return!!e&&c(e,l)}));default:return i.createElement(a,null)}}}(h);var Fe=ke()?l:f;function Pe(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=s(n),y=s(null),v=null!=f?f:y,b=s(),w=a({width:void 0,height:void 0}),$=w[0],C=w[1];return Fe((function(){if(!ke()){var e=Me(m,C,u,h);b.current=Se((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!g.current&&!ke()&&e({width:r,height:i}),g.current=!1}))}),r,o,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,o,l,u,h,m,p,v.current]),A({ref:v},$)}const De=o.createContext({mode:"default"});var He=Array.isArray,Ie="object"==typeof S&&S&&S.Object===Object&&S,Ee="object"==typeof self&&self&&self.Object===Object&&self,Te=Ie||Ee||Function("return this")(),Be=Te.Symbol,Ae=Be,ze=Object.prototype,Re=ze.hasOwnProperty,Ne=ze.toString,Le=Ae?Ae.toStringTag:void 0;var Ve=function(e){var t=Re.call(e,Le),n=e[Le];try{e[Le]=void 0;var r=!0}catch(e){}var i=Ne.call(e);return r&&(t?e[Le]=n:delete e[Le]),i},We=Object.prototype.toString;var qe=Ve,Qe=function(e){return We.call(e)},Ue=Be?Be.toStringTag:void 0;var Ze=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ue&&Ue in Object(e)?qe(e):Qe(e)};var Ye=Ze,Ge=function(e){return null!=e&&"object"==typeof e};var Xe=function(e){return"symbol"==typeof e||Ge(e)&&"[object Symbol]"==Ye(e)},Je=He,Ke=Xe,et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tt=/^\w*$/;var nt=function(e,t){if(Je(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Ke(e))||(tt.test(e)||!et.test(e)||null!=t&&e in Object(t))};var rt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},it=Ze,ot=rt;var at,st=function(e){if(!ot(e))return!1;var t=it(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},lt=Te["__core-js_shared__"],ct=(at=/[^.]+$/.exec(lt&&lt.keys&&lt.keys.IE_PROTO||""))?"Symbol(src)_1."+at:"";var ut=function(e){return!!ct&&ct in e},dt=Function.prototype.toString;var ht=st,ft=ut,pt=rt,mt=function(e){if(null!=e){try{return dt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},gt=/^\[object .+?Constructor\]$/,yt=Function.prototype,vt=Object.prototype,bt=yt.toString,wt=vt.hasOwnProperty,$t=RegExp("^"+bt.call(wt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ct=function(e){return!(!pt(e)||ft(e))&&(ht(e)?$t:gt).test(mt(e))},_t=function(e,t){return null==e?void 0:e[t]};var xt=function(e,t){var n=_t(e,t);return Ct(n)?n:void 0},St=xt(Object,"create"),Ot=St;var kt=function(){this.__data__=Ot?Ot(null):{},this.size=0};var jt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Mt=St,Ft=Object.prototype.hasOwnProperty;var Pt=function(e){var t=this.__data__;if(Mt){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ft.call(t,e)?t[e]:void 0},Dt=St,Ht=Object.prototype.hasOwnProperty;var It=St;var Et=kt,Tt=jt,Bt=Pt,At=function(e){var t=this.__data__;return Dt?void 0!==t[e]:Ht.call(t,e)},zt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=It&&void 0===t?"__lodash_hash_undefined__":t,this};function Rt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Rt.prototype.clear=Et,Rt.prototype.delete=Tt,Rt.prototype.get=Bt,Rt.prototype.has=At,Rt.prototype.set=zt;var Nt=Rt;var Lt=function(){this.__data__=[],this.size=0};var Vt=function(e,t){return e===t||e!=e&&t!=t};var Wt=function(e,t){for(var n=e.length;n--;)if(Vt(e[n][0],t))return n;return-1},qt=Wt,Qt=Array.prototype.splice;var Ut=Wt;var Zt=Wt;var Yt=Wt;var Gt=Lt,Xt=function(e){var t=this.__data__,n=qt(t,e);return!(n<0)&&(n==t.length-1?t.pop():Qt.call(t,n,1),--this.size,!0)},Jt=function(e){var t=this.__data__,n=Ut(t,e);return n<0?void 0:t[n][1]},Kt=function(e){return Zt(this.__data__,e)>-1},en=function(e,t){var n=this.__data__,r=Yt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function tn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tn.prototype.clear=Gt,tn.prototype.delete=Xt,tn.prototype.get=Jt,tn.prototype.has=Kt,tn.prototype.set=en;var nn=tn,rn=xt(Te,"Map"),on=Nt,an=nn,sn=rn;var ln=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var cn=function(e,t){var n=e.__data__;return ln(t)?n["string"==typeof t?"string":"hash"]:n.map},un=cn;var dn=cn;var hn=cn;var fn=cn;var pn=function(){this.size=0,this.__data__={hash:new on,map:new(sn||an),string:new on}},mn=function(e){var t=un(this,e).delete(e);return this.size-=t?1:0,t},gn=function(e){return dn(this,e).get(e)},yn=function(e){return hn(this,e).has(e)},vn=function(e,t){var n=fn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function bn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}bn.prototype.clear=pn,bn.prototype.delete=mn,bn.prototype.get=gn,bn.prototype.has=yn,bn.prototype.set=vn;var wn=bn;function $n(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new($n.Cache||wn),n}$n.Cache=wn;var Cn=$n;var _n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xn=/\\(\\)?/g,Sn=function(e){var t=Cn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(_n,(function(e,n,r,i){t.push(r?i.replace(xn,"$1"):n||e)})),t}));var On=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},kn=He,jn=Xe,Mn=Be?Be.prototype:void 0,Fn=Mn?Mn.toString:void 0;var Pn=function e(t){if("string"==typeof t)return t;if(kn(t))return On(t,e)+"";if(jn(t))return Fn?Fn.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Dn=Pn;var Hn=He,In=nt,En=Sn,Tn=function(e){return null==e?"":Dn(e)};var Bn=Xe;var An=function(e,t){return Hn(e)?e:In(e,t)?[e]:En(Tn(e))},zn=function(e){if("string"==typeof e||Bn(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Rn=function(e,t){for(var n=0,r=(t=An(t,e)).length;null!=e&&n<r;)e=e[zn(t[n++])];return n&&n==r?e:void 0};var Nn=function(e,t,n){var r=null==e?void 0:Rn(e,t);return void 0===r?n:r};const Ln=(e,t,n)=>t?Nn(n,t)||Nn(e,t):n||e,Vn=(e,t)=>{const n=t||e.defaultValue;return Nn(e.collections,n)};var Wn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Wn||(Wn={}));const qn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Qn=e=>t=>{const n=t.theme,r=Vn(qn,n[Wn.colorScheme]);return n.options&&n.options.color?Ln(r,e,n.options.color):Ln(r,e)},Un={Brand:{1:Qn("Brand.1"),2:Qn("Brand.2"),3:Qn("Brand.3"),4:Qn("Brand.4"),5:Qn("Brand.5"),6:Qn("Brand.6")},Primary:Qn("Primary"),PrimaryDark:Qn("PrimaryDark"),Secondary:Qn("Secondary"),Accent:{Light:{1:Qn("Accent.Light.1"),2:Qn("Accent.Light.2"),3:Qn("Accent.Light.3"),4:Qn("Accent.Light.4"),5:Qn("Accent.Light.5"),6:Qn("Accent.Light.6")},Dark:{1:Qn("Accent.Dark.1"),2:Qn("Accent.Dark.2"),3:Qn("Accent.Dark.3")}},Neutral:{1:Qn("Neutral.1"),2:Qn("Neutral.2"),3:Qn("Neutral.3"),4:Qn("Neutral.4"),5:Qn("Neutral.5"),6:Qn("Neutral.6"),7:Qn("Neutral.7"),8:Qn("Neutral.8")},Validation:{Green:{Text:Qn("Validation.Green.Text"),Icon:Qn("Validation.Green.Icon"),Border:Qn("Validation.Green.Border"),Background:Qn("Validation.Green.Background")},Orange:{Text:Qn("Validation.Orange.Text"),Icon:Qn("Validation.Orange.Icon"),Border:Qn("Validation.Orange.Border"),Background:Qn("Validation.Orange.Background"),Badge:Qn("Validation.Orange.Badge")},Red:{Text:Qn("Validation.Red.Text"),Icon:Qn("Validation.Red.Icon"),Border:Qn("Validation.Red.Border"),Background:Qn("Validation.Red.Background")},Blue:{Text:Qn("Validation.Blue.Text"),Icon:Qn("Validation.Blue.Icon"),Border:Qn("Validation.Blue.Border"),Background:Qn("Validation.Blue.Background")}},Shadow:{Accent:Qn("Shadow.Accent"),Red:Qn("Shadow.Red"),Elevation:Qn("Shadow.Elevation")}},Zn=e=>Object.keys(T).reduce(((t,n)=>{const r=T[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Yn=Zn("max-width"),Gn=(Zn("min-width"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Xn={collections:{base:{D1:{fontFamily:Gn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Gn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Gn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Gn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Gn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Gn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Gn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Gn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Gn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Gn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Gn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Gn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Gn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Gn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Jn=e=>t=>{const n=t.theme,r=Vn(Xn,n[Wn.textStyleScheme]);return n.options&&n.options.textStyle?Ln(r,e,n.options.textStyle):Ln(r,e)},Kn={D1:{fontFamily:Jn("D1.fontFamily"),fontSize:Jn("D1.fontSize"),fontWeight:Jn("D1.fontWeight"),lineHeight:Jn("D1.lineHeight"),letterSpacing:Jn("D1.letterSpacing")},D2:{fontFamily:Jn("D2.fontFamily"),fontSize:Jn("D2.fontSize"),fontWeight:Jn("D2.fontWeight"),lineHeight:Jn("D2.lineHeight"),letterSpacing:Jn("D2.letterSpacing")},D3:{fontFamily:Jn("D3.fontFamily"),fontSize:Jn("D3.fontSize"),fontWeight:Jn("D3.fontWeight"),lineHeight:Jn("D3.lineHeight"),letterSpacing:Jn("D3.letterSpacing")},D4:{fontFamily:Jn("D4.fontFamily"),fontSize:Jn("D4.fontSize"),fontWeight:Jn("D4.fontWeight"),lineHeight:Jn("D4.lineHeight"),letterSpacing:Jn("D4.letterSpacing")},DBody:{fontFamily:Jn("DBody.fontFamily"),fontSize:Jn("DBody.fontSize"),fontWeight:Jn("DBody.fontWeight"),lineHeight:Jn("DBody.lineHeight"),letterSpacing:Jn("DBody.letterSpacing")},H1:{fontFamily:Jn("H1.fontFamily"),fontSize:Jn("H1.fontSize"),fontWeight:Jn("H1.fontWeight"),lineHeight:Jn("H1.lineHeight"),letterSpacing:Jn("H1.letterSpacing")},H2:{fontFamily:Jn("H2.fontFamily"),fontSize:Jn("H2.fontSize"),fontWeight:Jn("H2.fontWeight"),lineHeight:Jn("H2.lineHeight"),letterSpacing:Jn("H2.letterSpacing")},H3:{fontFamily:Jn("H3.fontFamily"),fontSize:Jn("H3.fontSize"),fontWeight:Jn("H3.fontWeight"),lineHeight:Jn("H3.lineHeight"),letterSpacing:Jn("H3.letterSpacing")},H4:{fontFamily:Jn("H4.fontFamily"),fontSize:Jn("H4.fontSize"),fontWeight:Jn("H4.fontWeight"),lineHeight:Jn("H4.lineHeight"),letterSpacing:Jn("H4.letterSpacing")},H5:{fontFamily:Jn("H5.fontFamily"),fontSize:Jn("H5.fontSize"),fontWeight:Jn("H5.fontWeight"),lineHeight:Jn("H5.lineHeight"),letterSpacing:Jn("H5.letterSpacing")},H6:{fontFamily:Jn("H6.fontFamily"),fontSize:Jn("H6.fontSize"),fontWeight:Jn("H6.fontWeight"),lineHeight:Jn("H6.lineHeight"),letterSpacing:Jn("H6.letterSpacing")},Body:{fontFamily:Jn("Body.fontFamily"),fontSize:Jn("Body.fontSize"),fontWeight:Jn("Body.fontWeight"),lineHeight:Jn("Body.lineHeight"),letterSpacing:Jn("Body.letterSpacing")},BodySmall:{fontFamily:Jn("BodySmall.fontFamily"),fontSize:Jn("BodySmall.fontSize"),fontWeight:Jn("BodySmall.fontWeight"),lineHeight:Jn("BodySmall.lineHeight"),letterSpacing:Jn("BodySmall.letterSpacing")},XSmall:{fontFamily:Jn("XSmall.fontFamily"),fontSize:Jn("XSmall.fontSize"),fontWeight:Jn("XSmall.fontWeight"),lineHeight:Jn("XSmall.lineHeight"),letterSpacing:Jn("XSmall.letterSpacing")}},er=e=>{switch(e){case 700:case"bold":return Gn.Bold;case 600:case"semibold":return Gn.Semibold;case 300:case"light":return Gn.Light;case 400:case"regular":return Gn.Regular;default:return""}},tr=(e,t)=>n=>{const r=Kn[e].fontFamily(n),i=Kn[e].fontWeight(n);return Object.values(Gn).includes(r)?C`
                font-family: ${er(t)||er(i)||r};
                font-weight: normal !important;
            `:C`
            font-family: ${r};
            font-weight: ${(nr(t)||i)??"normal"};
        `},nr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},rr=(e,t,n=!1)=>r=>{const i=Kn[e],o=i.fontSize(r);return C`
            ${tr(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${C`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},ir=(e=!1,t=!1)=>t?C`
            display: block;
        `:e?C`
            display: inline;
        `:C`
            display: block;
        `;var or,ar={};Object.defineProperty(ar,"__esModule",{value:!0});var sr=e;const lr=e=>sr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:sr.jsx("path",{d:"M10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});lr.displayName="CircleIcon",or=ar.CircleIcon=lr;var cr,ur={};Object.defineProperty(ur,"__esModule",{value:!0});var dr=e;const hr=e=>dr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:dr.jsx("path",{d:"M10 14C11.1113 14 12.0557 13.611 12.833 12.833C13.611 12.0557 14 11.1113 14 10C14 8.88867 13.611 7.94433 12.833 7.167C12.0557 6.389 11.1113 6 10 6C8.88867 6 7.94433 6.389 7.167 7.167C6.389 7.94433 6 8.88867 6 10C6 11.1113 6.389 12.0557 7.167 12.833C7.94433 13.611 8.88867 14 10 14ZM10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});hr.displayName="CircleDotIcon",cr=ur.CircleDotIcon=hr;var fr,pr={};Object.defineProperty(pr,"__esModule",{value:!0});var mr=e;const gr=e=>mr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:mr.jsx("path",{d:"M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H15.5C15.9167 3 16.2707 3.146 16.562 3.438C16.854 3.72933 17 4.08333 17 4.5V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z",fill:"currentColor"})});gr.displayName="SquareIcon",fr=pr.SquareIcon=gr;var yr,vr={};Object.defineProperty(vr,"__esModule",{value:!0});var br=e;const wr=e=>br.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:br.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H15.75C16.236 2.5 16.6493 2.67 16.99 3.01C17.33 3.35067 17.5 3.764 17.5 4.25V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM8.875 13.188C8.98633 13.188 9.094 13.167 9.198 13.125C9.302 13.083 9.40267 13.0137 9.5 12.917L14.125 8.292C14.2917 8.12533 14.375 7.924 14.375 7.688C14.375 7.45133 14.2917 7.24267 14.125 7.062C13.9443 6.89533 13.736 6.812 13.5 6.812C13.264 6.812 13.0627 6.89533 12.896 7.062L8.875 11.083L7.125 9.333C6.95833 9.16633 6.757 9.083 6.521 9.083C6.285 9.083 6.08367 9.16633 5.917 9.333C5.73633 9.51367 5.646 9.722 5.646 9.958C5.646 10.194 5.73633 10.3953 5.917 10.562L8.25 12.917C8.34733 13.0137 8.448 13.083 8.552 13.125C8.656 13.167 8.76367 13.188 8.875 13.188Z",fill:"currentColor"})});wr.displayName="SquareTickFillIcon",yr=vr.SquareTickFillIcon=wr;var $r,Cr={};Object.defineProperty(Cr,"__esModule",{value:!0});var _r=e;const xr=e=>_r.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:_r.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});xr.displayName="TickIcon",$r=Cr.TickIcon=xr;const Sr=$.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?C`
                    color: ${Un.Primary};
                `:C`
                    color: ${Un.Neutral[4]};
                `};
    }
`,Or=({type:e,active:n=!1,disabled:r,className:i})=>{let o;switch(e){case"checkbox":o=t(n?yr:fr,{});break;case"radio":o=t(n?cr:or,{});break;case"tick":o=t($r,{});break;case"cross":o=t(x,{});break;default:o=null}return t(Sr,{className:i,$active:n,disabled:r,children:o})};let kr=Vr();const jr=e=>zr(e,kr);let Mr=Vr();jr.write=e=>zr(e,Mr);let Fr=Vr();jr.onStart=e=>zr(e,Fr);let Pr=Vr();jr.onFrame=e=>zr(e,Pr);let Dr=Vr();jr.onFinish=e=>zr(e,Dr);let Hr=[];jr.setTimeout=(e,t)=>{let n=jr.now()+t,r=()=>{let e=Hr.findIndex((e=>e.cancel==r));~e&&Hr.splice(e,1),Br-=~e?1:0},i={time:n,handler:e,cancel:r};return Hr.splice(Ir(n),0,i),Br+=1,Rr(),i};let Ir=e=>~(~Hr.findIndex((t=>t.time>e))||~Hr.length);jr.cancel=e=>{Fr.delete(e),Pr.delete(e),Dr.delete(e),kr.delete(e),Mr.delete(e)},jr.sync=e=>{Ar=!0,jr.batchedUpdates(e),Ar=!1},jr.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,jr.onStart(n)}return r.handler=e,r.cancel=()=>{Fr.delete(n),t=null},r};let Er="undefined"!=typeof window?window.requestAnimationFrame:()=>{};jr.use=e=>Er=e,jr.now="undefined"!=typeof performance?()=>performance.now():Date.now,jr.batchedUpdates=e=>e(),jr.catch=console.error,jr.frameLoop="always",jr.advance=()=>{"demand"!==jr.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Lr()};let Tr=-1,Br=0,Ar=!1;function zr(e,t){Ar?(t.delete(e),e(0)):(t.add(e),Rr())}function Rr(){Tr<0&&(Tr=0,"demand"!==jr.frameLoop&&Er(Nr))}function Nr(){~Tr&&(Er(Nr),jr.batchedUpdates(Lr))}function Lr(){let e=Tr;Tr=jr.now();let t=Ir(Tr);t&&(Wr(Hr.splice(0,t),(e=>e.handler())),Br-=t),Br?(Fr.flush(),kr.flush(e?Math.min(64,Tr-e):16.667),Pr.flush(),Mr.flush(),Dr.flush()):Tr=-1}function Vr(){let e=new Set,t=e;return{add(n){Br+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Br-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Br-=t.size,Wr(t,(t=>t(n)&&e.add(t))),Br+=e.size,t=e)}}}function Wr(e,t){e.forEach((e=>{try{t(e)}catch(e){jr.catch(e)}}))}function qr(){}const Qr={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ur(e,t){if(Qr.arr(e)){if(!Qr.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const Zr=(e,t)=>e.forEach(t);function Yr(e,t,n){if(Qr.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Gr=e=>Qr.und(e)?[]:Qr.arr(e)?e:[e];function Xr(e,t){if(e.size){const n=Array.from(e);e.clear(),Zr(n,t)}}const Jr=(e,...t)=>Xr(e,(e=>e(...t))),Kr=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let ei,ti,ni=null,ri=!1,ii=qr;var oi=Object.freeze({__proto__:null,get createStringInterpolator(){return ei},get to(){return ti},get colors(){return ni},get skipAnimation(){return ri},get willAdvance(){return ii},assign:e=>{e.to&&(ti=e.to),e.now&&(jr.now=e.now),void 0!==e.colors&&(ni=e.colors),null!=e.skipAnimation&&(ri=e.skipAnimation),e.createStringInterpolator&&(ei=e.createStringInterpolator),e.requestAnimationFrame&&jr.use(e.requestAnimationFrame),e.batchedUpdates&&(jr.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ii=e.willAdvance),e.frameLoop&&(jr.frameLoop=e.frameLoop)}});const ai=new Set;let si=[],li=[],ci=0;const ui={get idle(){return!ai.size&&!si.length},start(e){ci>e.priority?(ai.add(e),jr.onStart(di)):(hi(e),jr(pi))},advance:pi,sort(e){if(ci)jr.onFrame((()=>ui.sort(e)));else{const t=si.indexOf(e);~t&&(si.splice(t,1),fi(e))}},clear(){si=[],ai.clear()}};function di(){ai.forEach(hi),ai.clear(),jr(pi)}function hi(e){si.includes(e)||fi(e)}function fi(e){si.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(si,(t=>t.priority>e.priority)),0,e)}function pi(e){const t=li;for(let n=0;n<si.length;n++){const r=si[n];ci=r.priority,r.idle||(ii(r),r.advance(e),r.idle||t.push(r))}return ci=0,li=si,li.length=0,si=t,si.length>0}const mi="[-+]?\\d*\\.?\\d+",gi=mi+"%";function yi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const vi=new RegExp("rgb"+yi(mi,mi,mi)),bi=new RegExp("rgba"+yi(mi,mi,mi,mi)),wi=new RegExp("hsl"+yi(mi,gi,gi)),$i=new RegExp("hsla"+yi(mi,gi,gi,mi)),Ci=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,_i=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,xi=/^#([0-9a-fA-F]{6})$/,Si=/^#([0-9a-fA-F]{8})$/;function Oi(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ki(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=Oi(i,r,e+1/3),a=Oi(i,r,e),s=Oi(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ji(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Mi(e){return(parseFloat(e)%360+360)%360/360}function Fi(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Pi(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Di(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=xi.exec(e))?parseInt(t[1]+"ff",16)>>>0:ni&&void 0!==ni[e]?ni[e]:(t=vi.exec(e))?(ji(t[1])<<24|ji(t[2])<<16|ji(t[3])<<8|255)>>>0:(t=bi.exec(e))?(ji(t[1])<<24|ji(t[2])<<16|ji(t[3])<<8|Fi(t[4]))>>>0:(t=Ci.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Si.exec(e))?parseInt(t[1],16)>>>0:(t=_i.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=wi.exec(e))?(255|ki(Mi(t[1]),Pi(t[2]),Pi(t[3])))>>>0:(t=$i.exec(e))?(ki(Mi(t[1]),Pi(t[2]),Pi(t[3]))|Fi(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Hi=(e,t,n)=>{if(Qr.fun(e))return e;if(Qr.arr(e))return Hi({range:e,output:t,extrapolate:n});if(Qr.str(e.output[0]))return ei(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const Ii=1.70158,Ei=1.525*Ii,Ti=Ii+1,Bi=2*Math.PI/3,Ai=2*Math.PI/4.5,zi=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Ri={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Ti*e*e*e-Ii*e*e,easeOutBack:e=>1+Ti*Math.pow(e-1,3)+Ii*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ei)/2:(Math.pow(2*e-2,2)*((Ei+1)*(2*e-2)+Ei)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Bi),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Bi)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ai)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ai)/2+1,easeInBounce:e=>1-zi(1-e),easeOutBounce:zi,easeInOutBounce:e=>e<.5?(1-zi(1-2*e))/2:(1+zi(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Ni(){return Ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ni.apply(this,arguments)}const Li=Symbol.for("FluidValue.get"),Vi=Symbol.for("FluidValue.observers"),Wi=e=>Boolean(e&&e[Li]),qi=e=>e&&e[Li]?e[Li]():e,Qi=e=>e[Vi]||null;function Ui(e,t){let n=e[Vi];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Zi{constructor(e){if(this[Li]=void 0,this[Vi]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Yi(this,e)}}const Yi=(e,t)=>Ji(e,Li,t);function Gi(e,t){if(e[Li]){let n=e[Vi];n||Ji(e,Vi,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Xi(e,t){let n=e[Vi];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Vi]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Ji=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ki=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,eo=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,to=new RegExp(`(${Ki.source})(%|[a-z]+)`,"i"),no=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ro=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,io=e=>{const[t,n]=oo(e);if(!t||Kr())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&ro.test(n)?io(n):n||e},oo=e=>{const t=ro.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let ao;const so=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,lo=e=>{ao||(ao=ni?new RegExp(`(${Object.keys(ni).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>qi(e).replace(ro,io).replace(eo,Di).replace(ao,Di))),n=t.map((e=>e.match(Ki).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Hi(Ni({},e,{output:t}))));return e=>{var n;const i=!to.test(t[0])&&(null==(n=t.find((e=>to.test(e))))?void 0:n.replace(Ki,""));let o=0;return t[0].replace(Ki,(()=>`${r[o++](e)}${i||""}`)).replace(no,so)}},co="react-spring: ",uo=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${co}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},ho=uo(console.warn);const fo=uo(console.warn);function po(e){return Qr.str(e)&&("#"==e[0]||/\d/.test(e)||!Kr()&&ro.test(e)||e in(ni||{}))}const mo=Kr()?l:f,go=()=>{const e=s(!1);return mo((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function yo(){const e=a()[1],t=go();return()=>{t.current&&e(Math.random())}}const vo=e=>l(e,bo),bo=[];function wo(e){const t=s();return l((()=>{t.current=e})),t.current}const $o=Symbol.for("Animated:node"),Co=e=>e&&e[$o],_o=(e,t)=>{return n=e,r=$o,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},xo=e=>e&&e[$o]&&e[$o].getPayload();class So{constructor(){this.payload=void 0,_o(this,this)}getPayload(){return this.payload||[]}}class Oo extends So{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Qr.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Oo(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Qr.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Qr.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ko extends Oo{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Hi({output:[e,e]})}static create(e){return new ko(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Qr.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Hi({output:[this.getValue(),e]})),this._value=0,super.reset()}}const jo={dependencies:null};class Mo extends So{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Yr(this.source,((n,r)=>{var i;(i=n)&&i[$o]===i?t[r]=n.getValue(e):Wi(n)?t[r]=qi(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Zr(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Yr(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){jo.dependencies&&Wi(e)&&jo.dependencies.add(e);const t=xo(e);t&&Zr(t,(e=>this.add(e)))}}class Fo extends Mo{constructor(e){super(e)}static create(e){return new Fo(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Po)),!0)}}function Po(e){return(po(e)?ko:Oo).create(e)}function Do(e){const t=Co(e);return t?t.constructor:Qr.arr(e)?Fo:po(e)?ko:Oo}function Ho(){return Ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ho.apply(this,arguments)}const Io=(e,t)=>{const n=!Qr.fun(e)||e.prototype&&e.prototype.isReactComponent;return p(((r,o)=>{const a=s(null),c=n&&m((e=>{a.current=function(e,t){e&&(Qr.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[u,d]=function(e,t){const n=new Set;jo.dependencies=n,e.style&&(e=Ho({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Mo(e),jo.dependencies=null,[e,n]}(r,t),h=yo(),f=()=>{const e=a.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},p=new Eo(f,d),g=s();mo((()=>(g.current=p,Zr(d,(e=>Gi(e,p))),()=>{g.current&&(Zr(g.current.deps,(e=>Xi(e,g.current))),jr.cancel(g.current.update))}))),l(f,[]),vo((()=>()=>{const e=g.current;Zr(e.deps,(t=>Xi(t,e)))}));const y=t.getComponentProps(u.getValue());return i.createElement(e,Ho({},y,{ref:c}))}))};class Eo{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&jr.write(this.update)}}const To=Symbol.for("AnimatedComponent"),Bo=e=>Qr.str(e)?e:e&&Qr.str(e.displayName)?e.displayName:Qr.fun(e)&&e.name||null;function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}function zo(e,...t){return Qr.fun(e)?e(...t):e}const Ro=(e,t)=>!0===e||!!(t&&e&&(Qr.fun(e)?e(t):Gr(e).includes(t))),No=(e,t)=>Qr.obj(e)?t&&e[t]:e,Lo=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Vo=e=>e,Wo=(e,t=Vo)=>{let n=qo;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Qr.und(n)||(r[i]=n)}return r},qo=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Qo={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Uo(e){const t=function(e){const t={};let n=0;if(Yr(e,((e,r)=>{Qo[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Yr(e,((e,r)=>r in t||(n[r]=e))),n}return Ao({},e)}function Zo(e){return e=qi(e),Qr.arr(e)?e.map(Zo):po(e)?oi.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Yo(e){return Qr.fun(e)||Qr.arr(e)&&Qr.obj(e[0])}const Go=Ao({},{tension:170,friction:26},{mass:1,damping:1,easing:Ri.linear,clamp:!1});class Xo{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Go)}}function Jo(e,t){if(Qr.und(t.decay)){const n=!Qr.und(t.tension)||!Qr.und(t.friction);!n&&Qr.und(t.frequency)&&Qr.und(t.damping)&&Qr.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Ko=[];class ea{constructor(){this.changed=!1,this.values=Ko,this.toValues=null,this.fromValues=Ko,this.to=void 0,this.from=void 0,this.config=new Xo,this.immediate=!1}}function ta(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=Ro(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{Qr.und(n.pause)||(i.paused=Ro(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||Ro(e,t)),c=zo(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-jr.now()}function f(){c>0&&!oi.skipAnimation?(i.delayed=!0,u=jr.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(Ao({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const na=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?oa(e.get()):t.every((e=>e.noop))?ra(e.get()):ia(e.get(),t.every((e=>e.finished))),ra=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),ia=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),oa=e=>({value:e,cancelled:!0,finished:!1});function aa(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Wo(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&oa(r)||i!==n.asyncId&&ia(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new la,a=new ca;return(async()=>{if(oi.skipAnimation)throw sa(n),a.result=ia(r,!1),d(a),a;f(o);const s=Qr.obj(e)?Ao({},e):Ao({},t,{to:e});s.parentId=i,Yr(c,((e,t)=>{Qr.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(oi.skipAnimation)return sa(n),ia(r,!1);try{let t;t=Qr.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),m=ia(r.get(),!0,!1)}catch(e){if(e instanceof la)m=e.result;else{if(!(e instanceof ca))throw e;m=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Qr.fun(a)&&jr.batchedUpdates((()=>{a(m,r,r.item)})),m})():l}function sa(e,t){Xr(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class la extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ca extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const ua=e=>e instanceof ha;let da=1;class ha extends Zi{constructor(...e){super(...e),this.id=da++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Co(this);return e&&e.getValue()}to(...e){return oi.to(this,e)}interpolate(...e){return ho(`${co}The "interpolate" function is deprecated in v9 (use "to" instead)`),oi.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ui(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ui.sort(this),Ui(this,{type:"priority",parent:this,priority:e})}}const fa=Symbol.for("SpringPhase"),pa=e=>(1&e[fa])>0,ma=e=>(2&e[fa])>0,ga=e=>(4&e[fa])>0,ya=(e,t)=>t?e[fa]|=3:e[fa]&=-3,va=(e,t)=>t?e[fa]|=4:e[fa]&=-5;class ba extends ha{constructor(e,t){if(super(),this.key=void 0,this.animation=new ea,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Qr.und(e)||!Qr.und(t)){const n=Qr.obj(e)?Ao({},e):Ao({},t,{from:e});Qr.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(ma(this)||this._state.asyncTo)||ga(this)}get goal(){return qi(this.animation.to)}get velocity(){const e=Co(this);return e instanceof Oo?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return pa(this)}get isAnimating(){return ma(this)}get isPaused(){return ga(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=xo(r.to);!a&&Wi(r.to)&&(o=Gr(qi(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ko?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Qr.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Qr.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Qr.und(r),f=n==c?s.v0>0:n<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*g,d+=a*g}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=Co(this),l=s.getValue();if(t){const e=qi(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return jr.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ma(this)){const{to:e,config:t}=this.animation;jr.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Qr.und(e)?(n=this.queue||[],this.queue=[]):n=[Qr.obj(e)?e:Ao({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>na(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),sa(this._state,e&&this._lastCallId),jr.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Qr.obj(n)?n[t]:n,(null==n||Yo(n))&&(n=void 0),r=Qr.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return pa(this)||(e.reverse&&([n,r]=[r,n]),r=qi(r),Qr.und(r)?Co(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Ao({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Wo(n,((e,t)=>/^on/.test(t)?No(e,r):e))),Oa(this,n,"onProps"),ka(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return ta(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{ga(this)||(va(this,!0),Jr(a.pauseQueue),ka(this,"onPause",ia(this,wa(this,this.animation.to)),this))},resume:()=>{ga(this)&&(va(this,!1),ma(this)&&this._resume(),Jr(a.resumeQueue),ka(this,"onResume",ia(this,wa(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=$a(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(oa(this));const r=!Qr.und(e.to),i=!Qr.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(oa(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Qr.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Ur(d,c);h&&(s.from=d),d=qi(d);const f=!Ur(u,l);f&&this._focus(u);const p=Yo(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||i)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(Jo(n=Ao({},n),t),t=Ao({},n,t)),Jo(e,t),Object.assign(e,t);for(const t in Go)null==e[t]&&(e[t]=Go[t]);let{mass:r,frequency:i,damping:o}=e;Qr.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(m,zo(t.config,o),t.config!==a.config?zo(a.config,o):void 0);let v=Co(this);if(!v||Qr.und(u))return n(ia(this,!0));const b=Qr.und(t.reset)?i&&!t.default:!Qr.und(d)&&Ro(t.reset,o),w=b?d:this.get(),$=Zo(u),C=Qr.num($)||Qr.arr($)||po($),_=!p&&(!C||Ro(a.immediate||t.immediate,o));if(f){const e=Do(u);if(e!==v.constructor){if(!_)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const x=v.constructor;let S=Wi(u),O=!1;if(!S){const e=b||!pa(this)&&h;(f||e)&&(O=Ur(Zo(w),$),S=!O),(Ur(s.immediate,_)||_)&&Ur(m.decay,g)&&Ur(m.velocity,y)||(S=!0)}if(O&&ma(this)&&(s.changed&&!b?S=!0:S||this._stop(l)),!p&&((S||Wi(l))&&(s.values=v.getPayload(),s.toValues=Wi(u)?null:x==ko?[1]:Gr($)),s.immediate!=_&&(s.immediate=_,_||b||this._set(l)),S)){const{onRest:e}=s;Zr(Sa,(e=>Oa(this,t,e)));const r=ia(this,wa(this,l));Jr(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&jr.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?zo(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(aa(t.to,t,this._state,this)):S?this._start():ma(this)&&!f?this._pendingCalls.add(n):n(ra(w))}_focus(e){const t=this.animation;e!==t.to&&(Qi(this)&&this._detach(),t.to=e,Qi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Wi(t)&&(Gi(t,this),ua(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Wi(e)&&Xi(e,this)}_set(e,t=!0){const n=qi(e);if(!Qr.und(n)){const e=Co(this);if(!e||!Ur(n,e.getValue())){const r=Do(n);e&&e.constructor==r?e.setValue(n):_o(this,r.create(n)),e&&jr.batchedUpdates((()=>{this._onChange(n,t)}))}}return Co(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ka(this,"onStart",ia(this,wa(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),zo(this.animation.onChange,e,this)),zo(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Co(this).reset(qi(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ma(this)||(ya(this,!0),ga(this)||this._resume())}_resume(){oi.skipAnimation?this.finish():ui.start(this)}_stop(e,t){if(ma(this)){ya(this,!1);const n=this.animation;Zr(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ui(this,{type:"idle",parent:this});const r=t?oa(this.get()):ia(this.get(),wa(this,null!=e?e:n.to));Jr(this._pendingCalls,r),n.changed&&(n.changed=!1,ka(this,"onRest",r,this))}}}function wa(e,t){const n=Zo(t);return Ur(Zo(e.get()),n)}function $a(e,t=e.loop,n=e.to){let r=zo(t);if(r){const i=!0!==r&&Uo(r),o=(i||e).reverse,a=!i||i.reset;return Ca(Ao({},e,{loop:t,default:!1,pause:void 0,to:!o||Yo(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function Ca(e){const{to:t,from:n}=e=Uo(e),r=new Set;return Qr.obj(t)&&xa(t,r),Qr.obj(n)&&xa(n,r),e.keys=r.size?Array.from(r):null,e}function _a(e){const t=Ca(e);return Qr.und(t.default)&&(t.default=Wo(t)),t}function xa(e,t){Yr(e,((e,n)=>null!=e&&t.add(n)))}const Sa=["onStart","onRest","onChange","onPause","onResume"];function Oa(e,t,n){e.animation[n]=t[n]!==Lo(t,n)?No(t[n],e.key):void 0}function ka(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const ja=["onStart","onChange","onRest"];let Ma=1;class Fa{constructor(e,t){this.id=Ma++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Ao({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Qr.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Ca(e)),this}start(e){let{queue:t}=this;return e?t=Gr(e).map(Ca):this.queue=[],this._flush?this._flush(this,t):(Ba(this,t),Pa(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Zr(Gr(t),(t=>n[t].stop(!!e)))}else sa(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Qr.und(e))this.start({pause:!0});else{const t=this.springs;Zr(Gr(e),(e=>t[e].pause()))}return this}resume(e){if(Qr.und(e))this.start({pause:!1});else{const t=this.springs;Zr(Gr(e),(e=>t[e].resume()))}return this}each(e){Yr(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Xr(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Xr(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Xr(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}jr.onFrame(this._onFrame)}}function Pa(e,t){return Promise.all(t.map((t=>Da(e,t)))).then((t=>na(e,t)))}async function Da(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Qr.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Qr.arr(i)||Qr.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Zr(ja,(n=>{const r=t[n];if(Qr.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Jr(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Lo(t,"cancel");(u||f&&d.asyncId)&&h.push(ta(++e._lastAsyncId,{props:t,state:d,actions:{pause:qr,resume:qr,start(t,n){f?(sa(d,e._lastAsyncId),n(oa(e))):(t.onRest=s,n(aa(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=na(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=$a(t,a,i);if(n)return Ba(e,[n]),Da(e,n,!0)}return l&&jr.batchedUpdates((()=>l(p,e,e.item))),p}function Ha(e,t){const n=Ao({},e.springs);return t&&Zr(Gr(t),(e=>{Qr.und(e.keys)&&(e=Ca(e)),Qr.obj(e.to)||(e=Ao({},e,{to:void 0})),Ta(n,e,(e=>Ea(e)))})),Ia(e,n),n}function Ia(e,t){Yr(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Gi(t,e))}))}function Ea(e,t){const n=new ba;return n.key=e,t&&Gi(n,t),n}function Ta(e,t,n){t.keys&&Zr(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Ba(e,t){Zr(t,(t=>{Ta(e.springs,t,(t=>Ea(t,e)))}))}const Aa=["children"],za=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Aa);const r=g(Ra),o=n.pause||!!r.pause,c=n.immediate||!!r.immediate;n=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=s(),i=r.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=n;return l((()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)}),[o]),o.result}((()=>({pause:o,immediate:c})),[o,c]);const{Provider:u}=Ra;return i.createElement(u,{value:n},t)},Ra=(Na=za,La={},Object.assign(Na,i.createContext(La)),Na.Provider._context=Na,Na.Consumer._context=Na,Na);var Na,La;za.Provider=Ra.Provider,za.Consumer=Ra.Consumer;const Va=()=>{const e=[],t=function(t){fo(`${co}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Zr(e,((e,i)=>{if(Qr.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Zr(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Zr(e,(e=>e.resume(...arguments))),this},t.set=function(t){Zr(e,(e=>e.set(t)))},t.start=function(t){const n=[];return Zr(e,((e,r)=>{if(Qr.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Zr(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Zr(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Qr.fun(e)?e(n,t):e};return t._getProps=n,t};function Wa(e,t){const n=Qr.fun(e),[[r],i]=function(e,t,n){const r=Qr.fun(t)&&t;r&&!n&&(n=[]);const i=y((()=>r||3==arguments.length?Va():void 0),[]),o=s(0),a=yo(),l=y((()=>({ctrls:[],queue:[],flush(e,t){const n=Ha(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Pa(e,t):new Promise((r=>{Ia(e,n),l.queue.push((()=>{r(Pa(e,t))})),a()}))}})),[]),c=s([...l.ctrls]),u=[],d=wo(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new Fa(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=_a(n))}}y((()=>{Zr(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),y((()=>{h(0,Math.min(d,e))}),n);const f=c.current.map(((e,t)=>Ha(e,u[t]))),p=g(za),m=wo(p),v=p!==m&&function(e){for(const t in e)return!0;return!1}(p);mo((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Zr(e,(e=>e()))),Zr(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:p});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),vo((()=>()=>{Zr(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>Ao({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let qa;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(qa||(qa={}));class Qa extends ha{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Hi(...t);const n=this._get(),r=Do(n);_o(this,r.create(n))}advance(e){const t=this._get();Ur(t,this.get())||(Co(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Za(this._active)&&Ya(this)}_get(){const e=Qr.arr(this.source)?this.source.map(qi):Gr(qi(this.source));return this.calc(...e)}_start(){this.idle&&!Za(this._active)&&(this.idle=!1,Zr(xo(this),(e=>{e.done=!1})),oi.skipAnimation?(jr.batchedUpdates((()=>this.advance())),Ya(this)):ui.start(this))}_attach(){let e=1;Zr(Gr(this.source),(t=>{Wi(t)&&Gi(t,this),ua(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Zr(Gr(this.source),(e=>{Wi(e)&&Xi(e,this)})),this._active.clear(),Ya(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Gr(this.source).reduce(((e,t)=>Math.max(e,(ua(t)?t.priority:0)+1)),0))}}function Ua(e){return!1!==e.idle}function Za(e){return!e.size||Array.from(e).every(Ua)}function Ya(e){e.idle||(e.idle=!0,Zr(xo(e),(e=>{e.done=!0})),Ui(e,{type:"idle",parent:e}))}function Ga(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}oi.assign({createStringInterpolator:lo,to:(e,t)=>new Qa(e,t)});const Xa=["style","children","scrollTop","scrollLeft","viewBox"],Ja=/^--/;function Ka(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ja.test(e)||ts.hasOwnProperty(e)&&ts[e]?(""+t).trim():t+"px"}const es={};let ts={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const ns=["Webkit","Ms","Moz","O"];ts=Object.keys(ts).reduce(((e,t)=>(ns.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),ts);const rs=["x","y","z"],is=/^(matrix|translate|scale|rotate|skew)/,os=/^(translate)/,as=/^(rotate|skew)/,ss=(e,t)=>Qr.num(e)&&0!==e?e+t:e,ls=(e,t)=>Qr.arr(e)?e.every((e=>ls(e,t))):Qr.num(e)?e===t:parseFloat(e)===t;class cs extends Mo{constructor(e){let{x:t,y:n,z:r}=e,i=Ga(e,rs);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>ss(e,"px"))).join(",")})`,ls(e,0)]))),Yr(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(is.test(t)){if(delete i[t],Qr.und(e))return;const n=os.test(t)?"px":as.test(t)?"deg":"";o.push(Gr(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${ss(i,n)})`,ls(i,0)]:e=>[`${t}(${e.map((e=>ss(e,n))).join(",")})`,ls(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new us(o,a)),super(i)}}class us extends Zi{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Zr(this.inputs,((n,r)=>{const i=qi(n[0]),[o,a]=this.transforms[r](Qr.arr(i)?i:n.map(qi));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Zr(this.inputs,(e=>Zr(e,(e=>Wi(e)&&Gi(e,this)))))}observerRemoved(e){0==e&&Zr(this.inputs,(e=>Zr(e,(e=>Wi(e)&&Xi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ui(this,e)}}const ds=["scrollTop","scrollLeft"];oi.assign({batchedUpdates:w,createStringInterpolator:lo,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const hs=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Mo(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=Bo(e)||"Anonymous";return(e=Qr.str(e)?o[e]||(o[e]=Io(e,i)):e[To]||(e[To]=Io(e,i))).displayName=`Animated(${t})`,e};return Yr(e,((t,n)=>{Qr.arr(e)&&(n=Bo(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Ga(r,Xa),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:es[t]||(es[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Ka(t,i[t]);Ja.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new cs(e),getComponentProps:e=>Ga(e,ds)}),fs=hs.animated;var ps,ms={};Object.defineProperty(ms,"__esModule",{value:!0});var gs=e;const ys=e=>gs.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:gs.jsx("path",{d:"M2.62611 5.81312C2.84811 5.59112 3.10478 5.48012 3.39611 5.48012C3.68811 5.48012 3.94511 5.59112 4.16711 5.81312L10.1881 11.8341L16.2301 5.79212C16.4381 5.58412 16.6881 5.48012 16.9801 5.48012C17.2714 5.48012 17.5281 5.59112 17.7501 5.81312C17.9588 6.02179 18.0631 6.27545 18.0631 6.57412C18.0631 6.87279 17.9588 7.12612 17.7501 7.33412L10.8131 14.2721C10.7158 14.3688 10.6151 14.4381 10.5111 14.4801C10.4071 14.5215 10.2994 14.5421 10.1881 14.5421C10.0768 14.5421 9.96911 14.5215 9.86511 14.4801C9.76111 14.4381 9.66044 14.3688 9.56311 14.2721L2.60511 7.31312C2.38244 7.09112 2.27811 6.83779 2.29211 6.55312C2.30611 6.26845 2.41744 6.02179 2.62611 5.81312Z",fill:"currentColor"})});ys.displayName="ChevronDownIcon",ps=ms.ChevronDownIcon=ys;const vs=$.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,bs=_`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ws=$.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Un.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${bs} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,$s=$(ws)`
    animation-delay: -0.45s;
`,Cs=$(ws)`
    animation-delay: -0.3s;
`,_s=$(ws)`
    animation-delay: -0.15s;
`;var xs,Ss={};Object.defineProperty(Ss,"__esModule",{value:!0});var Os=e;const ks=e=>Os.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Os.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var js;ks.displayName="ExternalIcon",xs=Ss.ExternalIcon=ks,function(e){e.D1=$.h1`
        ${e=>C`
                ${rr("D1",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.D2=$.h1`
        ${e=>C`
                ${rr("D2",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.D3=$.h1`
        ${e=>C`
                ${rr("D3",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.D4=$.h1`
        ${e=>C`
                ${rr("D4",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.DBody=$.h1`
        ${e=>C`
                ${rr("DBody",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.H1=$.h1`
        ${e=>C`
                ${rr("H1",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.H2=$.h2`
        ${e=>C`
                ${rr("H2",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.H3=$.h3`
        ${e=>C`
                ${rr("H3",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.H4=$.h4`
        ${e=>C`
                ${rr("H4",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.H5=$.h5`
        ${e=>C`
                ${rr("H5",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.H6=$.h6`
        ${e=>C`
                ${rr("H6",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.Body=$.p`
        ${e=>C`
                ${rr("Body",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=$.p`
        ${e=>C`
                ${rr("BodySmall",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.XSmall=$.span`
        ${e=>C`
                ${rr("XSmall",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Ps({...e,textStyle:"Body"}),Small:e=>Ps({...e,textStyle:"BodySmall"})}}(js||(js={}));const Ms=$.a`
    ${e=>C`
            ${rr(e.textStyle,e.weight)}
            color: ${Un.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Un.Secondary};

                svg {
                    color: ${Un.Secondary};
                }
            }
        `}
`,Fs=$(xs)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ps=({external:e=!1,children:r,...i})=>n(Ms,{...i,children:[r,e&&t(Fs,{})]});var Ds;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ds||(Ds={}));const Hs=$.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return C`
                    background-color: ${Un.Neutral[8](e)};
                    border: 1px solid ${Un.Primary(e)};

                    span {
                        color: ${Un.Primary(e)};
                    }
                `;case"light":return C`
                    background-color: ${Un.Neutral[8](e)};
                    border: 1px solid ${Un.Neutral[5](e)};

                    span {
                        color: ${Un.Primary(e)};
                    }
                `;case"disabled":return C`
                    background-color: ${Un.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Un.Neutral[3](e)};
                    }
                `;case"link":return C`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Un.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Un.Secondary};
                        }
                    }
                `;default:return C`
                    background-color: ${Un.Primary(e)};
                    border: 1px solid transparent;

                    ${Yn.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Un.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?C`
                    height: 2.5rem;
                    span {
                        ${rr("H5","semibold")}
                    }

                    ${Yn.mobileS} {
                        height: auto;
                    }
                `:C`
                    height: 3rem;
                    span {
                        ${rr("H4","semibold")}
                    }

                    ${Yn.mobileS} {
                        height: auto;
                    }
                `}
`,Is=$((({color:e,className:r,size:i=18})=>n(vs,{className:r,$size:i,$color:e,children:[t(ws,{id:"inner1",$size:i-2,$borderWidth:2}),t($s,{id:"inner2",$size:i-2,$borderWidth:2}),t(Cs,{id:"inner3",$size:i-2,$borderWidth:2}),t(_s,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Un.Primary(e);break;case"disabled":t=Un.Neutral[3](e);break;default:t=Un.Neutral[8](e)}return C`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Es={Default:o.forwardRef(((e,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=e,c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default"};return n(Hs,{ref:r,"data-testid":l["data-testid"]||"button",disabled:o,...c,...l,children:[a&&t(Is,{...c}),t("span",{children:i})]})})),Small:o.forwardRef(((e,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=e,c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small"};return n(Hs,{ref:r,"data-testid":l["data-testid"]||"button",disabled:o,...c,...l,children:[a&&t(Is,{...c,size:16}),t("span",{children:i})]})}))},Ts=$.button`
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

        ${({$highlight:e})=>e&&C`
                background-color: ${Un.Neutral[7]};
            `}
    }
`,Bs=o.forwardRef((({children:e,focusHighlight:n=!0,focusOutline:r="none",type:i="button",...o},a)=>t(Ts,{ref:a,$outline:r,$highlight:n,type:i,...o,children:e}))),As=$.div`
    background-color: ${e=>e.$collapsible?Un.Neutral[7](e):Un.Neutral[8](e)};

    ${Yn.mobileL} {
        background-color: ${Un.Neutral[7]};
    }
`,zs=$.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Un.Neutral[5]};

    ${Yn.mobileL} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,Rs=$.div`
    display: flex;
    align-items: center;

    background-color: ${Un.Neutral[8]};

    ${Yn.mobileL} {
        background-color: transparent;
    }
`,Ns=$(Bs)`
    margin: 0 0 0 auto;
`,Ls=$(ps)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Un.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${Un.Neutral[2]};
    }
`,Vs=$(js.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${Yn.mobileL} {
        ${rr("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,Ws=$(fs.div)`
    overflow: hidden;
`,qs=$.div`
    padding: 1rem 1.25rem;

    ${Yn.mobileL} {
        padding: 1.5rem 1.25rem;
    }
`,Qs=$(fs.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,Us=$(Es.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;

    ${Yn.mobileL} {
        span {
            ${rr("H6","semibold")}
        }
    }
`,Zs=({collapsible:e=!0,minimisable:r=!1,minimisedHeight:i,showDivider:o=!0,showMobileDivider:s=!0,title:l,children:c,...u})=>{const{mode:d}=g(De),h="mobile"===d,[f,p]=a(!h&&e),[m,y]=a(r),v=!h&&e,b=Pe(),w=Pe(),$=Wa({height:f?0:b.height}),C=m?i??Math.min(.5*w.height,216):w.height;return n(As,{$collapsible:v,children:[t(zs,{$showDivider:o,$showMobileDivider:s}),(l||v)&&n(Rs,{children:[l&&t(Vs,{weight:"semibold",children:l}),v&&t(Ns,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{p(!f)},"aria-label":f?"Expand":"Collapse",children:t(Ls,{$expanded:!f})})]}),t(Ws,{style:h?void 0:$,children:t("div",{ref:b.ref,children:n(qs,{...u,children:[t(Qs,{$height:C,$minimisable:r,children:t("div",{ref:w.ref,children:t("div",{"data-id":"content-container",children:"function"==typeof c?c(d,{minimised:m}):c})})}),r&&n(Us,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{y(!m)},children:["View ",m?"more":"less"]})]})})})]})},Ys=$.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${e=>{if(!e.$indicator)return C`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?C`
                        border-color: ${Un.Validation.Red.Icon};
                        background: ${Un.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Un.Shadow.Red};
                        }
                    `:e.$disabled?C`
                        border-color: transparent;
                    `:C`
                        border-color: transparent;

                        :hover {
                            background: ${Un.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?C`
                        background: ${Un.Neutral[6]};
                        border-color: ${Un.Neutral[5]};
                    `:e.$disabled&&e.$selected?C`
                        background: ${Un.Neutral[6]};
                        border-color: ${Un.Neutral[4]};
                    `:e.$error?C`
                        background: ${Un.Neutral[8]};
                        border-color: ${Un.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Un.Shadow.Red};
                        }
                    `:e.$selected?C`
                        background: ${Un.Accent.Light[5]};
                        border-color: ${Un.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Un.Shadow.Accent};
                        }
                    `:C`
                        background: ${Un.Neutral[8]};
                        border-color: ${Un.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Un.Shadow.Accent};
                            border-color: ${Un.Accent.Light[1]};
                        }
                    `}
`,Gs=$.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,Xs=$.div`
    display: flex;
    flex-direction: column;
`,Js=$.label`
    ${e=>e.$selected&&!e.$indicator?C`
                ${rr("H4","semibold")}
            `:C`
                ${rr("H4","regular")}
            `}

    color: ${Un.Neutral[1]};

    ${e=>e.$disabled?C`
                color: ${Un.Neutral[3](e)};
            `:e.$selected?C`
                color: ${Un.Primary(e)};
            `:void 0}
`;var Ks={exports:{}};Ks.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var $=function(e){return e instanceof S},C=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},_=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},x=v;x.l=C,x.i=$,x.w=function(e,t){return _(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function g(e){this.$L=C(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=_(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return _(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<_(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,u=x.p(e),f=function(e,t){var i=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return f(r?y-w:y+(6-w),g);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=x.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=x.p(u),m=function(e){var t=_(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*g;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return x.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:x.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:x.s(a,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,m=x.p(h),g=_(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=x.m(this,g);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[m]||v,f?b:x.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=C(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),O=S.prototype;return _.prototype=O,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),_.extend=function(e,t){return e.$i||(e(t,S,_),e.$i=!0),_},_.locale=C,_.isDayjs=$,_.unix=function(e){return _(1e3*e)},_.en=w[b],_.Ls=w,_.p={},_}();var el,tl=Ks.exports;!function(e){e.generateDays=e=>{const t=e.startOf("month"),n=tl(t).startOf("week");return nl(n).map((e=>rl(e)))},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(tl(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+tl(`${t+9}-01-01`).format("YYYY")}}}(el||(el={}));const nl=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},rl=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},il=[1,3,5,7,8,10,12],ol=[4,6,9,11];var al,sl,ll;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":il.includes(o)?Math.min(i,31).toString():ol.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=tl(e,n);return tl(t,n).diff(r,"minute")}}(al||(al={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(sl||(sl={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let i=0;t>n&&(i=Math.floor((t-n)/8));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(ll||(ll={}));const cl=$(Zs)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${Yn.mobileL} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${Yn.mobileL} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`,ul=$.div`
    display: flex;
    flex-direction: column;

    ${Yn.mobileL} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,dl=$.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${rr("BodySmall","regular")}
    ${e=>e.$selected&&C`
            color: ${Un.Primary};
        `}
`,hl=$.input`
    appearance: none;
`,fl=$(Or)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${hl}:focus-visible + & {
        outline: 2px solid ${Un.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,pl=$((({type:e="checkbox",indicator:r,checked:i,styleType:o="default",children:c,disabled:u,error:d,name:h,id:f,className:p,"data-testid":m,onChange:g})=>{const[y,v]=a(i),[b]=a(sl.generate()),w=f?`${f}-input`:`tg-${b}-input`,$=s();l((()=>{v(i)}),[i]);return n(Ys,{$selected:y,$disabled:u,className:p,$styleType:o,$error:d,$indicator:r,id:f,"data-testid":m,children:[r&&(()=>{let n;switch(e){case"yes":n="tick";break;case"no":n="cross";break;case"checkbox":case"radio":n=e}return t(Or,{type:n,active:y,disabled:u})})(),t(Gs,{ref:$,name:h,id:w,type:"checkbox"===e?"checkbox":"radio","data-testid":"toggle-input",disabled:u,onChange:t=>{if(!u){switch(e){case"checkbox":y||v((e=>!e));break;case"radio":case"yes":case"no":y||v(!0)}g&&g(t)}},checked:y}),t(Xs,{children:t(Js,{htmlFor:w,$selected:y,$indicator:r,$disabled:u,"data-testid":"toggle-label",children:c})})]})}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`;var ml,gl={};Object.defineProperty(gl,"__esModule",{value:!0});var yl=e;const vl=e=>yl.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:yl.jsx("path",{d:"M12.521 17.562L5.58301 10.625C5.48635 10.5277 5.41701 10.427 5.37501 10.323C5.33301 10.219 5.31201 10.1113 5.31201 10C5.31201 9.88867 5.33301 9.781 5.37501 9.677C5.41701 9.573 5.48635 9.47234 5.58301 9.375L12.542 2.417C12.75 2.20834 13.0033 2.104 13.302 2.104C13.6007 2.104 13.854 2.21534 14.062 2.438C14.2847 2.646 14.389 2.90267 14.375 3.208C14.361 3.514 14.25 3.771 14.042 3.979L8.02101 10L14.062 16.042C14.2567 16.236 14.354 16.4893 14.354 16.802C14.354 17.1147 14.2567 17.368 14.062 17.562C13.854 17.7707 13.5973 17.875 13.292 17.875C12.986 17.875 12.729 17.7707 12.521 17.562Z",fill:"currentColor"})});vl.displayName="ChevronLeftIcon",ml=gl.ChevronLeftIcon=vl;const bl=$.div`
    background-color: ${Un.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;var wl,$l={};Object.defineProperty($l,"__esModule",{value:!0});var Cl=e;const _l=e=>Cl.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Cl.jsx("path",{d:"M3.375 15.833C3.139 15.833 2.934 15.7463 2.76 15.573C2.58667 15.399 2.5 15.194 2.5 14.958C2.5 14.722 2.58667 14.5173 2.76 14.344C2.934 14.17 3.139 14.083 3.375 14.083H6.792C7.028 14.083 7.23267 14.17 7.406 14.344C7.58 14.5173 7.667 14.722 7.667 14.958C7.667 15.194 7.58 15.399 7.406 15.573C7.23267 15.7463 7.028 15.833 6.792 15.833H3.375ZM3.375 5.917C3.139 5.917 2.934 5.83 2.76 5.656C2.58667 5.48267 2.5 5.278 2.5 5.042C2.5 4.806 2.58667 4.601 2.76 4.427C2.934 4.25367 3.139 4.167 3.375 4.167H9.896C10.132 4.167 10.3367 4.25367 10.51 4.427C10.684 4.601 10.771 4.806 10.771 5.042C10.771 5.278 10.684 5.48267 10.51 5.656C10.3367 5.83 10.132 5.917 9.896 5.917H3.375ZM10.083 17.5C9.847 17.5 9.64233 17.4133 9.469 17.24C9.295 17.066 9.208 16.861 9.208 16.625V13.312C9.208 13.076 9.295 12.8713 9.469 12.698C9.64233 12.5247 9.847 12.438 10.083 12.438C10.3197 12.438 10.5247 12.5247 10.698 12.698C10.8713 12.8713 10.958 13.076 10.958 13.312V14.083H16.625C16.861 14.083 17.066 14.17 17.24 14.344C17.4133 14.5173 17.5 14.722 17.5 14.958C17.5 15.194 17.4133 15.399 17.24 15.573C17.066 15.7463 16.861 15.833 16.625 15.833H10.958V16.625C10.958 16.861 10.8713 17.066 10.698 17.24C10.5247 17.4133 10.3197 17.5 10.083 17.5ZM6.792 12.542C6.556 12.542 6.351 12.455 6.177 12.281C6.00367 12.1077 5.917 11.903 5.917 11.667V10.875H3.375C3.139 10.875 2.934 10.7883 2.76 10.615C2.58667 10.441 2.5 10.236 2.5 10C2.5 9.764 2.58667 9.559 2.76 9.385C2.934 9.21167 3.139 9.125 3.375 9.125H5.917V8.354C5.917 8.118 6.00367 7.91333 6.177 7.74C6.351 7.566 6.556 7.479 6.792 7.479C7.028 7.479 7.23267 7.566 7.406 7.74C7.58 7.91333 7.667 8.118 7.667 8.354V11.667C7.667 11.903 7.58 12.1077 7.406 12.281C7.23267 12.455 7.028 12.542 6.792 12.542ZM10.083 10.875C9.847 10.875 9.64233 10.7883 9.469 10.615C9.295 10.441 9.208 10.236 9.208 10C9.208 9.764 9.295 9.559 9.469 9.385C9.64233 9.21167 9.847 9.125 10.083 9.125H16.625C16.861 9.125 17.066 9.21167 17.24 9.385C17.4133 9.559 17.5 9.764 17.5 10C17.5 10.236 17.4133 10.441 17.24 10.615C17.066 10.7883 16.861 10.875 16.625 10.875H10.083ZM13.208 7.562C12.972 7.562 12.7673 7.47533 12.594 7.302C12.42 7.12867 12.333 6.924 12.333 6.688V3.375C12.333 3.139 12.42 2.934 12.594 2.76C12.7673 2.58667 12.972 2.5 13.208 2.5C13.444 2.5 13.649 2.58667 13.823 2.76C13.9963 2.934 14.083 3.139 14.083 3.375V4.167H16.625C16.861 4.167 17.066 4.25367 17.24 4.427C17.4133 4.601 17.5 4.806 17.5 5.042C17.5 5.278 17.4133 5.48267 17.24 5.656C17.066 5.83 16.861 5.917 16.625 5.917H14.083V6.688C14.083 6.924 13.9963 7.12867 13.823 7.302C13.649 7.47533 13.444 7.562 13.208 7.562Z",fill:"currentColor"})});_l.displayName="FilterIcon",wl=$l.FilterIcon=_l;const xl=$.div`
    ${Yn.mobileL} {
        display: none;
    }
`,Sl=$.div`
    display: none;
    ${Yn.mobileL} {
        display: block;
    }
`,Ol=$.div`
    background-color: ${Un.Neutral[8]};
    border: 1px solid ${Un.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,kl=$.div`
    background-color: ${Un.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,jl=$.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,Ml=$.div`
    display: flex;
    align-items: center;

    background-color: ${Un.Neutral[8]};

    ${Yn.mobileL} {
        border-bottom: 1px solid ${Un.Neutral[5]};
    }
`,Fl=$(js.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${Yn.mobileL} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,Pl=$(Bs)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${Un.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Un.Neutral[2]};
    }
`,Dl=$(Es.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${Yn.mobileL} {
        padding: 1.5rem 1.25rem;
    }
`,Hl=$(Es.Default)`
    width: 100%;
    span {
        display: flex;
        align-items: center;
    }
`,Il=$(wl)`
    margin-right: 0.625rem;
`,El=$.div`
    padding: 1.5rem 1.25rem;
    background-color: ${Un.Neutral[8]};
    border-top: 1px solid ${Un.Neutral[5]};
`,Tl=$(Es.Default)`
    width: 100%;
`,Bl=Object.assign((({toggleFilterButtonLabel:e="Filters",headerTitle:i="Filters",clearButtonDisabled:o=!1,onClear:s,onDismiss:l,onDone:c,children:u,...d})=>{const[h,f]=a(!1);F.exports.useMediaQuery({maxWidth:T.mobileL},void 0,(e=>{e||m()}));const p=()=>{f(!0)},m=()=>{f(!1),l&&l()},g=()=>{f(!1),c&&c()},y=()=>{s&&s()},v=e=>"function"==typeof u?u(e):u,b=e=>n(Ml,{children:["mobile"===e&&t(Pl,{onClick:m,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:t(x,{})}),t(Fl,{weight:"semibold",children:i}),t(Dl,{styleType:"link",type:"button",onClick:y,disabled:o,children:"Clear"})]});return n("div",{...d,children:[t(Sl,{children:t(De.Provider,{value:{mode:"mobile"},children:n(r,{children:[n(Hl,{styleType:"light",type:"button",onClick:p,children:[t(Il,{})," ",e]}),t(H,{show:h,disableTransition:!0,children:n(kl,{children:[b("mobile"),t(jl,{children:v("mobile")}),t(El,{children:t(Tl,{type:"button",onClick:g,children:"Done"})})]})})]})})}),t(xl,{children:t(De.Provider,{value:{mode:"default"},children:n(Ol,{children:[b("default"),v("default")]})})})]})}),{Item:Zs,Page:({onDismiss:e,onDone:r,children:i})=>n(bl,{children:[t(Pl,{onClick:e,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:t(ml,{})}),t(jl,{children:i}),t(El,{children:t(Tl,{onClick:r,type:"button",children:"Done"})})]}),Checkbox:({selectedOptions:e,options:r,onSelect:i,labelExtractor:o,valueExtractor:c,...u})=>{const{mode:d}=g(De),[h,f]=a(e||[]),[p,y]=a(),[v,b]=a(r.length),w=s(),$=s(),C=e=>()=>{const t=[...h],n=h.findIndex((t=>x(t)===x(e)));n>=0?t.splice(n,1):t.push(e),f(t),i?.(t)},_=e=>o?o(e):e.label??e.toString(),x=e=>c?c(e):e.value??e.toString(),S=m((()=>{if(!w.current)return void y(void 0);const e=Array.from(w.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>r&&(n++,r=o,n>2))break;t=i}b(t),y(n>2?r-8:void 0)}),[]);l((()=>{e!==h&&f(e||[])}),[e]),l((()=>{"default"===d?(()=>{const e=$.current?$.current.offsetTop+$.current.clientHeight:void 0;y(e)})():S()}),[r]),Pe({handleWidth:"mobile"===d,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:w,onResize:S});return t(cl,{minimisable:r.length>5,minimisedHeight:p,...u,children:(e,{minimised:i})=>t(ul,{role:"group","aria-label":u.title,ref:w,children:r.map(((r,o)=>"default"===e?((e,r,i)=>{const o=_(e),a=x(e),s=!!h.find((e=>x(e)===a));return n(dl,{$visible:!i||r<5,$selected:s,ref:4===r?$:void 0,children:[t(hl,{type:"checkbox",checked:s,onChange:C(e)}),t(fl,{type:"checkbox",active:s}),o]},a)})(r,o,i):((e,n,r)=>{const i=_(e),o=x(e),a=!!h.find((e=>x(e)===o));return t(pl,{type:"checkbox",checked:a,$visible:!r||p&&n<=v,onChange:C(e),children:i})})(r,o,i)))})})}});export{Bl as Filter};
//# sourceMappingURL=index.js.map
